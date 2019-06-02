
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
var app = (function () {
    'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    function validate_store(store, name) {
        if (!store || typeof store.subscribe !== 'function') {
            throw new Error(`'${name}' is not a store with a 'subscribe' method`);
        }
    }
    function subscribe(component, store, callback) {
        const unsub = store.subscribe(callback);
        component.$$.on_destroy.push(unsub.unsubscribe
            ? () => unsub.unsubscribe()
            : unsub);
    }

    function append(target, node) {
        target.appendChild(node);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function listen(node, event, handler, options) {
        node.addEventListener(event, handler, options);
        return () => node.removeEventListener(event, handler, options);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_data(text, data) {
        data = '' + data;
        if (text.data !== data)
            text.data = data;
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }

    const dirty_components = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    function flush() {
        const seen_callbacks = new Set();
        do {
            // first, call beforeUpdate functions
            // and update components
            while (dirty_components.length) {
                const component = dirty_components.shift();
                set_current_component(component);
                update(component.$$);
            }
            while (binding_callbacks.length)
                binding_callbacks.shift()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            while (render_callbacks.length) {
                const callback = render_callbacks.pop();
                if (!seen_callbacks.has(callback)) {
                    callback();
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                }
            }
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
    }
    function update($$) {
        if ($$.fragment) {
            $$.update($$.dirty);
            run_all($$.before_render);
            $$.fragment.p($$.dirty, $$.ctx);
            $$.dirty = null;
            $$.after_render.forEach(add_render_callback);
        }
    }
    let outros;
    function group_outros() {
        outros = {
            remaining: 0,
            callbacks: []
        };
    }
    function check_outros() {
        if (!outros.remaining) {
            run_all(outros.callbacks);
        }
    }
    function on_outro(callback) {
        outros.callbacks.push(callback);
    }
    function mount_component(component, target, anchor) {
        const { fragment, on_mount, on_destroy, after_render } = component.$$;
        fragment.m(target, anchor);
        // onMount happens after the initial afterUpdate. Because
        // afterUpdate callbacks happen in reverse order (inner first)
        // we schedule onMount callbacks before afterUpdate callbacks
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
        after_render.forEach(add_render_callback);
    }
    function destroy(component, detaching) {
        if (component.$$) {
            run_all(component.$$.on_destroy);
            component.$$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            component.$$.on_destroy = component.$$.fragment = null;
            component.$$.ctx = {};
        }
    }
    function make_dirty(component, key) {
        if (!component.$$.dirty) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty = blank_object();
        }
        component.$$.dirty[key] = true;
    }
    function init(component, options, instance, create_fragment, not_equal$$1, prop_names) {
        const parent_component = current_component;
        set_current_component(component);
        const props = options.props || {};
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props: prop_names,
            update: noop,
            not_equal: not_equal$$1,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            before_render: [],
            after_render: [],
            context: new Map(parent_component ? parent_component.$$.context : []),
            // everything else
            callbacks: blank_object(),
            dirty: null
        };
        let ready = false;
        $$.ctx = instance
            ? instance(component, props, (key, value) => {
                if ($$.ctx && not_equal$$1($$.ctx[key], $$.ctx[key] = value)) {
                    if ($$.bound[key])
                        $$.bound[key](value);
                    if (ready)
                        make_dirty(component, key);
                }
            })
            : props;
        $$.update();
        ready = true;
        run_all($$.before_render);
        $$.fragment = create_fragment($$.ctx);
        if (options.target) {
            if (options.hydrate) {
                $$.fragment.l(children(options.target));
            }
            else {
                $$.fragment.c();
            }
            if (options.intro && component.$$.fragment.i)
                component.$$.fragment.i();
            mount_component(component, options.target, options.anchor);
            flush();
        }
        set_current_component(parent_component);
    }
    class SvelteComponent {
        $destroy() {
            destroy(this, true);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set() {
            // overridden by instance, if it has props
        }
    }
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error(`'target' is a required option`);
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn(`Component was already destroyed`); // eslint-disable-line no-console
            };
        }
    }

    /**
     * Creates a `Readable` store that allows reading by subscription.
     * @param value initial value
     * @param {StartStopNotifier}start start and stop notifications for subscriptions
     */
    function readable(value, start) {
        return {
            subscribe: writable(value, start).subscribe,
        };
    }
    /**
     * Create a `Writable` store that allows both updating and reading by subscription.
     * @param {*=}value initial value
     * @param {StartStopNotifier=}start start and stop notifications for subscriptions
     */
    function writable(value, start = noop) {
        let stop;
        const subscribers = [];
        function set(new_value) {
            if (safe_not_equal(value, new_value)) {
                value = new_value;
                if (!stop) {
                    return; // not ready
                }
                subscribers.forEach((s) => s[1]());
                subscribers.forEach((s) => s[0](value));
            }
        }
        function update(fn) {
            set(fn(value));
        }
        function subscribe(run, invalidate = noop) {
            const subscriber = [run, invalidate];
            subscribers.push(subscriber);
            if (subscribers.length === 1) {
                stop = start(set) || noop;
            }
            run(value);
            return () => {
                const index = subscribers.indexOf(subscriber);
                if (index !== -1) {
                    subscribers.splice(index, 1);
                }
                if (subscribers.length === 0) {
                    stop();
                }
            };
        }
        return { set, update, subscribe };
    }
    /**
     * Derived value store by synchronizing one or more readable stores and
     * applying an aggregation function over its input values.
     * @param {Stores} stores input stores
     * @param {function(Stores=, function(*)=):*}fn function callback that aggregates the values
     * @param {*=}initial_value when used asynchronously
     */
    function derived(stores, fn, initial_value) {
        const single = !Array.isArray(stores);
        const stores_array = single
            ? [stores]
            : stores;
        const auto = fn.length < 2;
        return readable(initial_value, (set) => {
            let inited = false;
            const values = [];
            let pending = 0;
            let cleanup = noop;
            const sync = () => {
                if (pending) {
                    return;
                }
                cleanup();
                const result = fn(single ? values[0] : values, set);
                if (auto) {
                    set(result);
                }
                else {
                    cleanup = is_function(result) ? result : noop;
                }
            };
            const unsubscribers = stores_array.map((store, i) => store.subscribe((value) => {
                values[i] = value;
                pending &= ~(1 << i);
                if (inited) {
                    sync();
                }
            }, () => {
                pending |= (1 << i);
            }));
            inited = true;
            sync();
            return function stop() {
                run_all(unsubscribers);
                cleanup();
            };
        });
    }

    function regexparam (str, loose) {
    	var c, o, tmp, ext, keys=[], pattern='', arr=str.split('/');
    	arr[0] || arr.shift();

    	while (tmp = arr.shift()) {
    		c = tmp[0];
    		if (c === '*') {
    			keys.push('wild');
    			pattern += '/(.*)';
    		} else if (c === ':') {
    			o = tmp.indexOf('?', 1);
    			ext = tmp.indexOf('.', 1);
    			keys.push( tmp.substring(1, !!~o ? o : !!~ext ? ext : tmp.length) );
    			pattern += !!~o && !~ext ? '(?:/([^/]+?))?' : '/([^/]+?)';
    			if (!!~ext) pattern += (!!~o ? '?' : '') + '\\' + tmp.substring(ext);
    		} else {
    			pattern += '/' + tmp;
    		}
    	}

    	return {
    		keys: keys,
    		pattern: new RegExp('^' + pattern + (loose ? '(?:$|\/)' : '\/?$'), 'i')
    	};
    }

    /* node_modules/svelte-spa-router/router.svelte generated by Svelte v3.4.4 */

    function create_fragment(ctx) {
    	var switch_instance_anchor, current;

    	var switch_value = ctx.component;

    	function switch_props(ctx) {
    		return {
    			props: { params: ctx.componentParams },
    			$$inline: true
    		};
    	}

    	if (switch_value) {
    		var switch_instance = new switch_value(switch_props(ctx));
    	}

    	return {
    		c: function create() {
    			if (switch_instance) switch_instance.$$.fragment.c();
    			switch_instance_anchor = empty();
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			if (switch_instance) {
    				mount_component(switch_instance, target, anchor);
    			}

    			insert(target, switch_instance_anchor, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var switch_instance_changes = {};
    			if (changed.componentParams) switch_instance_changes.params = ctx.componentParams;

    			if (switch_value !== (switch_value = ctx.component)) {
    				if (switch_instance) {
    					group_outros();
    					const old_component = switch_instance;
    					on_outro(() => {
    						old_component.$destroy();
    					});
    					old_component.$$.fragment.o(1);
    					check_outros();
    				}

    				if (switch_value) {
    					switch_instance = new switch_value(switch_props(ctx));

    					switch_instance.$$.fragment.c();
    					switch_instance.$$.fragment.i(1);
    					mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
    				} else {
    					switch_instance = null;
    				}
    			}

    			else if (switch_value) {
    				switch_instance.$set(switch_instance_changes);
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			if (switch_instance) switch_instance.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			if (switch_instance) switch_instance.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(switch_instance_anchor);
    			}

    			if (switch_instance) switch_instance.$destroy(detaching);
    		}
    	};
    }

    /**
     * @typedef {Object} Location
     * @property {string} location - Location (page/view), for example `/book`
     * @property {string} [querystring] - Querystring from the hash, as a string not parsed
     */
    /**
     * Returns the current location from the hash.
     *
     * @returns {Location} Location object
     * @private
     */
    function getLocation() {
    const hashPosition = window.location.href.indexOf('#/');
    let location = (hashPosition > -1) ? window.location.href.substr(hashPosition + 1) : '/';

    // Check if there's a querystring
    const qsPosition = location.indexOf('?');
    let querystring = '';
    if (qsPosition > -1) {
        querystring = location.substr(qsPosition + 1);
        location = location.substr(0, qsPosition);
    }

    return {location, querystring}
    }

    /**
     * Readable store that returns the current full location (incl. querystring)
     */
    const loc = readable(
    getLocation(),
    // eslint-disable-next-line prefer-arrow-callback
    function start(set) {
        const update = () => {
            set(getLocation());
        };
        window.addEventListener('hashchange', update, false);

        return function stop() {
            window.removeEventListener('hashchange', update, false);
        }
    }
    );

    /**
     * Readable store that returns the current location
     */
    const location = derived(
    loc,
    ($loc) => $loc.location
    );

    /**
     * Readable store that returns the current querystring
     */
    const querystring = derived(
    loc,
    ($loc) => $loc.querystring
    );

    /**
     * Navigates to a new page programmatically.
     *
     * @param {string} location - Path to navigate to (must start with `/`)
     */
    function push(location) {
    if (!location || location.length < 1 || location.charAt(0) != '/') {
        throw Error('Invalid parameter location')
    }

    // Execute this code when the current call stack is complete
    setTimeout(() => {
        window.location.hash = '#' + location;
    }, 0);
    }

    /**
     * Svelte Action that enables a link element (`<a>`) to use our history management.
     *
     * For example:
     *
     * ````html
     * <a href="/books" use:link>View books</a>
     * ````
     *
     * @param {HTMLElement} node - The target node (automatically set by Svelte). Must be an anchor tag (`<a>`) with a href attribute starting in `/`
     */
    function link(node) {
    // Only apply to <a> tags
    if (!node || !node.tagName || node.tagName.toLowerCase() != 'a') {
        throw Error('Action "link" can only be used with <a> tags')
    }

    // Destination must start with '/'
    const href = node.getAttribute('href');
    if (!href || href.length < 1 || href.charAt(0) != '/') {
        throw Error('Invalid value for "href" attribute')
    }

    // onclick event handler
    node.addEventListener('click', (event) => {
        // Disable normal click event
        event.preventDefault();

        // Push link click
        const href = event.target.getAttribute('href');
        push(href);

        return false
    });
    }

    function instance($$self, $$props, $$invalidate) {
    	let $loc;

    	validate_store(loc, 'loc');
    	subscribe($$self, loc, $$value => { $loc = $$value; $$invalidate('$loc', $loc); });

    	/**
     * Dictionary of all routes, in the format `'/path': component`.
     *
     * For example:
     * ````js
     * import HomeRoute from './routes/HomeRoute.svelte'
     * import BooksRoute from './routes/BooksRoute.svelte'
     * import NotFoundRoute from './routes/NotFoundRoute.svelte'
     * routes = {
     *     '/': HomeRoute,
     *     '/books': BooksRoute,
     *     '*': NotFoundRoute
     * }
     * ````
     */
    let { routes = {} } = $$props;

    /**
     * Container for a route: path, component
     */
    class RouteItem {
        /**
         * Initializes the object and creates a regular expression from the path, using regexparam.
         *
         * @param {string} path - Path to the route (must start with '/' or '*')
         * @param {SvelteComponent} component - Svelte component for the route
         */
        constructor(path, component) {
            // Path must start with '/' or '*'
            if (!path || path.length < 1 || (path.charAt(0) != '/' && path.charAt(0) != '*')) {
                throw Error('Invalid value for "path" argument')
            }

            const {pattern, keys} = regexparam(path);

            this.path = path;
            this.component = component;

            this._pattern = pattern;
            this._keys = keys;
        }

        /**
         * Checks if `path` matches the current route.
         * If there's a match, will return the list of parameters from the URL (if any).
         * In case of no match, the method will return `null`.
         *
         * @param {string} path - Path to test
         * @returns {null|Object.<string, string>} List of paramters from the URL if there's a match, or `null` otherwise.
         */
        match(path) {
            const matches = this._pattern.exec(path);
            if (matches === null) {
                return null
            }

            const out = {};
            let i = 0;
            while (i < this._keys.length) {
                out[this._keys[i]] = matches[++i] || null;
            }
            return out
        }
    }

    // Set up all routes
    const routesList = Object.keys(routes).map((path) => {
        return new RouteItem(path, routes[path])
    });

    // Props for the component to render
    let component = null;
    let componentParams = {};

    	const writable_props = ['routes'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Router> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('routes' in $$props) $$invalidate('routes', routes = $$props.routes);
    	};

    	$$self.$$.update = ($$dirty = { component: 1, $loc: 1 }) => {
    		if ($$dirty.component || $$dirty.$loc) { {
                // Find a route matching the location
                $$invalidate('component', component = null);
                let i = 0;
                while (!component && i < routesList.length) {
                    const match = routesList[i].match($loc.location);
                    if (match) {
                        $$invalidate('component', component = routesList[i].component);
                        $$invalidate('componentParams', componentParams = match);
                    }
                    i++;
                }
            } }
    	};

    	return { routes, component, componentParams };
    }

    class Router extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, ["routes"]);
    	}

    	get routes() {
    		throw new Error("<Router>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set routes(value) {
    		throw new Error("<Router>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function o(){return Object.create(null)}function a(e){e.forEach(n);}function s(e){return "function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function d(e,t,n){if(e){const o=r(e,t,n);return e[0](o)}}function r(e,n,o){return e[1]?t({},t(n.$$scope.ctx,e[1](o?o(n):{}))):n.$$scope.ctx}function l(e,n,o,a){return e[1]?t({},t(n.$$scope.changed||{},e[1](a?a(o):{}))):n.$$scope.changed||{}}function c(e,t){e.appendChild(t);}function u(e,t,n){e.insertBefore(t,n||null);}function p(e){e.parentNode.removeChild(e);}function h(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function b(){return m(" ")}function $(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function f(e,t,n){null==n?e.removeAttribute(t):e.setAttribute(t,n);}function v(e,t){for(const n in t)"style"===n?e.style.cssText=t[n]:n in e?e[n]=t[n]:f(e,n,t[n]);}function w(e,t){t=""+t,e.data!==t&&(e.data=t);}let _;function y(e){_=e;}const x=[],g=Promise.resolve();let N=!1;const S=[],k=[],E=[];function I(e){k.push(e);}function D(){const e=new Set;do{for(;x.length;){const e=x.shift();y(e),L(e.$$);}for(;S.length;)S.shift()();for(;k.length;){const t=k.pop();e.has(t)||(t(),e.add(t));}}while(x.length);for(;E.length;)E.pop()();N=!1;}function L(e){e.fragment&&(e.update(e.dirty),a(e.before_render),e.fragment.p(e.dirty,e.ctx),e.dirty=null,e.after_render.forEach(I));}let C;function A(){C={remaining:0,callbacks:[]};}function R(){C.remaining||a(C.callbacks);}function T(e){C.callbacks.push(e);}function O(e,t){const n={},o={},a={$$scope:1};let s=e.length;for(;s--;){const i=e[s],d=t[s];if(d){for(const e in i)e in d||(o[e]=1);for(const e in d)a[e]||(n[e]=d[e],a[e]=1);e[s]=d;}else for(const e in i)a[e]=1;}for(const e in o)e in n||(n[e]=void 0);return n}function W(e,t,o){const{fragment:i,on_mount:d,on_destroy:r,after_render:l}=e.$$;i.m(t,o),I(()=>{const t=d.map(n).filter(s);r?r.push(...t):a(t),e.$$.on_mount=[];}),l.forEach(I);}function M(e,t){e.$$.dirty||(x.push(e),N||(N=!0,g.then(D)),e.$$.dirty=o()),e.$$.dirty[t]=!0;}function j(t,n,s,i,d,r){const l=_;y(t);const c=n.props||{},u=t.$$={fragment:null,ctx:null,props:r,update:e,not_equal:d,bound:o(),on_mount:[],on_destroy:[],before_render:[],after_render:[],context:new Map(l?l.$$.context:[]),callbacks:o(),dirty:null};let p=!1;u.ctx=s?s(t,c,(e,n)=>{u.ctx&&d(u.ctx[e],u.ctx[e]=n)&&(u.bound[e]&&u.bound[e](n),p&&M(t,e));}):c,u.update(),p=!0,a(u.before_render),u.fragment=i(u.ctx),n.target&&(n.hydrate?u.fragment.l(function(e){return Array.from(e.childNodes)}(n.target)):u.fragment.c(),n.intro&&t.$$.fragment.i&&t.$$.fragment.i(),W(t,n.target,n.anchor),D()),y(l);}class z{$destroy(){var t,n;n=!0,(t=this).$$&&(a(t.$$.on_destroy),t.$$.fragment.d(n),t.$$.on_destroy=t.$$.fragment=null,t.$$.ctx={}),this.$destroy=e;}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1);}}$set(){}}var H="undefined"!=typeof document,q='<svg xmlns="http://www.w3.org/2000/svg" id="dd-down-svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>',B=!!H&&"ontouchstart"in document.documentElement,K=B?["click","mouseup"]:["mouseup"];if(H){var U=document.querySelector("html");U&&U.classList.add(B?"pe-touch":"pe-no-touch");}var P={},F=function(e,t){P[e]&&P[e].forEach(function(e){return e(t)});};H&&(window.addEventListener("resize",function(e){return F("resize",e)}),window.addEventListener("scroll",function(e){return F("scroll",e)}),window.addEventListener("keydown",function(e){return F("keydown",e)}),K.forEach(function(e){return window.addEventListener(e,function(t){return F(e,t)})}));var G={component:"pe-shadow",bottomShadow:"pe-shadow__bottom",topShadow:"pe-shadow__top",animated:"pe-shadow--animated",depth_n:"pe-shadow--depth-",with_active_shadow:"pe-with-active-shadow"};const J=e=>void 0!==e?`${G.depth_n}${Math.min(5,e)}`:void 0,Q=({})=>({}),V=({})=>({}),X=({})=>({}),Y=({})=>({});function Z(e){var t;const n=e.$$slots.default,o=d(n,e,null);return {c(){o&&o.c();},l(e){o&&o.l(e);},m(e,n){o&&o.m(e,n),t=!0;},p(e,t){o&&o.p&&e.$$scope&&o.p(l(n,t,e,null),r(n,t,null));},i(e){t||(o&&o.i&&o.i(e),t=!0);},o(e){o&&o.o&&o.o(e),t=!1;},d(e){o&&o.d(e);}}}function ee(t){var n;return {c(){n=m(t.content);},m(e,t){u(e,n,t);},p(e,t){e.content&&w(n,t.content);},i:e,o:e,d(e){e&&p(n);}}}function te(e){var n,o,a,s,i,m,$,f,w,_;const y=e.$$slots.before,x=d(y,e,Y);var g=[ee,Z],N=[];function S(e){return e.content?0:1}a=S(e),s=N[a]=g[a](e);const k=e.$$slots.after,E=d(k,e,V);for(var I=[{class:e.R_classNames},{style:e.style},{"data-test-id":e.testId}],D={},L=0;L<I.length;L+=1)D=t(D,I[L]);return {c(){n=h("div"),x&&x.c(),o=b(),s.c(),i=b(),E&&E.c(),m=b(),$=h("div"),f=b(),w=h("div"),$.className=G.bottomShadow,w.className=G.topShadow,v(n,D);},l(e){x&&x.l(div2_nodes),E&&E.l(div2_nodes);},m(e,t){u(e,n,t),x&&x.m(n,null),c(n,o),N[a].m(n,null),c(n,i),E&&E.m(n,null),c(n,m),c(n,$),c(n,f),c(n,w),_=!0;},p(e,t){x&&x.p&&e.$$scope&&x.p(l(y,t,e,X),r(y,t,Y));var o=a;(a=S(t))===o?N[a].p(e,t):(A(),T(()=>{N[o].d(1),N[o]=null;}),s.o(1),R(),(s=N[a])||(s=N[a]=g[a](t)).c(),s.i(1),s.m(n,i)),E&&E.p&&e.$$scope&&E.p(l(k,t,e,Q),r(k,t,V)),v(n,O(I,[e.R_classNames&&{class:t.R_classNames},e.style&&{style:t.style},e.testId&&{"data-test-id":t.testId}]));},i(e){_||(x&&x.i&&x.i(e),s&&s.i(),E&&E.i&&E.i(e),_=!0);},o(e){x&&x.o&&x.o(e),s&&s.o(),E&&E.o&&E.o(e),_=!1;},d(e){e&&p(n),x&&x.d(e),N[a].d(),E&&E.d(e);}}}function ne(e,t,n){let o,{className:a="",content:s,style:i,testId:d,shadowDepth:r=1,animated:l=!1}=t,{$$slots:c={},$$scope:u}=t;return e.$set=e=>{"className"in e&&n("className",a=e.className),"content"in e&&n("content",s=e.content),"style"in e&&n("style",i=e.style),"testId"in e&&n("testId",d=e.testId),"shadowDepth"in e&&n("shadowDepth",r=e.shadowDepth),"animated"in e&&n("animated",l=e.animated),"$$scope"in e&&n("$$scope",u=e.$$scope);},e.$$.update=(e={animated:1,className:1,shadowDepth:1})=>{(e.animated||e.className||e.shadowDepth)&&n("R_classNames",o=[G.component,l?G.animated:void 0,a,J(r)].join(" "));},{className:a,content:s,style:i,testId:d,shadowDepth:r,animated:l,R_classNames:o,$$slots:c,$$scope:u}}class oe extends z{constructor(e){super(),j(this,e,ne,te,i,["className","content","style","testId","shadowDepth","animated"]);}}var ae={component:"pe-text-button",super:"pe-button",row:"pe-button-row",content:"pe-button__content",label:"pe-button__label",textLabel:"pe-button__text-label",wash:"pe-button__wash",washColor:"pe-button__wash-color",dropdown:"pe-button__dropdown",border:"pe-button--border",contained:"pe-button--contained",disabled:"pe-button--disabled",dropdownClosed:"pe-button--dropdown-closed",dropdownOpen:"pe-button--dropdown-open",extraWide:"pe-button--extra-wide",hasDropdown:"pe-button--dropdown",highLabel:"pe-button--high-label",inactive:"pe-button--inactive",raised:"pe-button--raised",selected:"pe-button--selected",separatorAtStart:"pe-button--separator-start",hasHover:"pe-button--has-hover"};function se(t){var n,o,a;return {c(){n=h("div"),o=h("div"),a=m(t.label),o.className=ae.textLabel,o.style.cssText=t.textStyle,n.className=ae.label;},m(e,t){u(e,n,t),c(n,o),c(o,a);},p(e,t){e.label&&w(a,t.label),e.textStyle&&(o.style.cssText=t.textStyle);},i:e,o:e,d(e){e&&p(n);}}}function ie(e,t,n){let{label:o="",textStyle:a}=t;return e.$set=e=>{"label"in e&&n("label",o=e.label),"textStyle"in e&&n("textStyle",a=e.textStyle);},{label:o,textStyle:a}}class de extends z{constructor(e){super(),j(this,e,ie,se,i,["label","textStyle"]);}}const re=({})=>({}),le=({})=>({}),ce=({})=>({}),ue=({})=>({}),pe=({})=>({}),he=({})=>({});function me(e){var t;return {c(){(t=h("div")).className="pe-ripple";},m(e,n){u(e,t,n);},d(e){e&&p(t);}}}function be(e){var t;const n=e.$$slots.default,o=d(n,e,null);return {c(){o&&o.c();},l(e){o&&o.l(e);},m(e,n){o&&o.m(e,n),t=!0;},p(e,t){o&&o.p&&e.$$scope&&o.p(l(n,t,e,null),r(n,t,null));},i(e){t||(o&&o.i&&o.i(e),t=!0);},o(e){o&&o.o&&o.o(e),t=!1;},d(e){o&&o.d(e);}}}function $e(e){var t,n=new de({props:{label:e.label,textStyle:e.textStyle}});return {c(){n.$$.fragment.c();},m(e,o){W(n,e,o),t=!0;},p(e,t){var o={};e.label&&(o.label=t.label),e.textStyle&&(o.textStyle=t.textStyle),n.$set(o);},i(e){t||(n.$$.fragment.i(e),t=!0);},o(e){n.$$.fragment.o(e),t=!1;},d(e){n.$destroy(e);}}}function fe(t){var n;return {c(){n=m(t.content);},m(e,t){u(e,n,t);},p(e,t){e.content&&w(n,t.content);},i:e,o:e,d(e){e&&p(n);}}}function ve(t){var n;return {c(){n=m(q);},m(e,t){u(e,n,t);},p:e,d(e){e&&p(n);}}}function we(e){var n,o,s,i,m,f,w,_,y,x,g,N,k,E;const I=e.$$slots.before,D=d(I,e,he);var L=new oe({props:{shadowDepth:e._shadowDepth,animated:!0}}),C=(e.disabled||e._noInk)&&me();const M=e.$$slots.label,j=d(M,e,ue);var z=[fe,$e,be],H=[];function q(e){return e.content?0:e.label!==e.undefined?1:2}y=q(e),x=H[y]=z[y](e);var B=e.dropdown&&ve();const K=e.$$slots.after,U=d(K,e,le);for(var P=[{href:null},e.url,{class:e.R_classNames},{style:e.style},{tabindex:e._tabindex},{"data-test-id":e.testId}],F={},G=0;G<P.length;G+=1)F=t(F,P[G]);return {c(){n=h("a"),D&&D.c(),o=b(),s=h("div"),L.$$.fragment.c(),i=b(),C&&C.c(),m=b(),(f=h("div")).innerHTML='<div class="pe-button__wash-color"></div>',w=b(),j&&j.c(),_=b(),x.c(),g=b(),B&&B.c(),N=b(),U&&U.c(),f.className="pe-button__wash",s.className="pe-button__content",v(n,F),E=[$(n,"mousedown",e.onMouseDown),$(n,"keyup",e.onKeyUp),$(n,"click",e.onClick)];},l(e){D&&D.l(a_nodes),j&&j.l(div2_nodes),U&&U.l(a_nodes);},m(t,a){var d;u(t,n,a),D&&D.m(n,null),c(n,o),c(n,s),W(L,s,null),c(s,i),C&&C.m(s,null),c(s,m),c(s,f),c(s,w),j&&j.m(s,null),c(s,_),H[y].m(s,null),c(s,g),B&&B.m(s,null),c(n,N),U&&U.m(n,null),d=()=>e.a_binding(n,null),S.push(d),k=!0;},p(e,t){D&&D.p&&e.$$scope&&D.p(l(I,t,e,pe),r(I,t,he));var o={};e._shadowDepth&&(o.shadowDepth=t._shadowDepth),L.$set(o),t.disabled||t._noInk?C||((C=me()).c(),C.m(s,m)):C&&(C.d(1),C=null),j&&j.p&&e.$$scope&&j.p(l(M,t,e,ce),r(M,t,ue));var a=y;(y=q(t))===a?H[y].p(e,t):(A(),T(()=>{H[a].d(1),H[a]=null;}),x.o(1),R(),(x=H[y])||(x=H[y]=z[y](t)).c(),x.i(1),x.m(s,g)),t.dropdown?B?B.p(e,t):((B=ve()).c(),B.m(s,null)):B&&(B.d(1),B=null),U&&U.p&&e.$$scope&&U.p(l(K,t,e,re),r(K,t,le)),e.items&&(t.a_binding(null,n),t.a_binding(n,null)),v(n,O(P,[{href:null},e.url&&t.url,e.R_classNames&&{class:t.R_classNames},e.style&&{style:t.style},e._tabindex&&{tabindex:t._tabindex},e.testId&&{"data-test-id":t.testId}]));},i(e){k||(D&&D.i&&D.i(e),L.$$.fragment.i(e),j&&j.i&&j.i(e),x&&x.i(),U&&U.i&&U.i(e),k=!0);},o(e){D&&D.o&&D.o(e),L.$$.fragment.o(e),j&&j.o&&j.o(e),x&&x.o(),U&&U.o&&U.o(e),k=!1;},d(t){t&&p(n),D&&D.d(t),L.$destroy(),C&&C.d(),j&&j.d(t),H[y].d(),B&&B.d(),U&&U.d(t),e.a_binding(null,n),a(E);}}}function _e(t,n,o){let a;const s=function(t,n=e){let o;const a=[];function s(e){if(i(t,e)){if(t=e,!o)return;a.forEach(e=>e[1]()),a.forEach(e=>e[0](t));}}return {set:s,update:function(e){s(e(t));},subscribe:function(i,d=e){const r=[i,d];return a.push(r),1===a.length&&(o=n(s)||e),i(t),()=>{const e=a.indexOf(r);-1!==e&&a.splice(e,1),0===a.length&&o();}}}}(!1);let d;!function(e,t,n){const o=t.subscribe(n);e.$$.on_destroy.push(o.unsubscribe?()=>o.unsubscribe():o);}(t,s,e=>{o("$isInactive",a=e);});let{className:r="",content:l,style:c,testId:u,tone:p="",animateOnTap:h,border:m=!1,borders:b=!1,contained:$=!1,disabled:f=!1,dropdown:v,extraWide:w=!1,events:_={},highLabel:y=!1,inactivate:x=!1,inactive:g=!1,ink:N=!1,label:S,parentClassName:k="",raised:E=!1,selected:I=!1,separatorAtStart:D=!1,shadowDepth:L,tabindex:C=0,textStyle:A,url:R={href:"javascript:false"},wash:T}=n;const O=_.onclick||(()=>{}),W=_.onkeyup||O,M=e=>{d.blur(),d.removeEventListener("mouseleave",M);},j=!1!==h,z=!f&&!I&&(E?T:!1!==T),H=E?void 0!==L?parseInt(L,10):1:0,q=void 0!==N&&!1===N,B=f||g?-1:C||0;let K,U,{$$slots:P={},$$scope:F}=n;return t.$set=e=>{"className"in e&&o("className",r=e.className),"content"in e&&o("content",l=e.content),"style"in e&&o("style",c=e.style),"testId"in e&&o("testId",u=e.testId),"tone"in e&&o("tone",p=e.tone),"animateOnTap"in e&&o("animateOnTap",h=e.animateOnTap),"border"in e&&o("border",m=e.border),"borders"in e&&o("borders",b=e.borders),"contained"in e&&o("contained",$=e.contained),"disabled"in e&&o("disabled",f=e.disabled),"dropdown"in e&&o("dropdown",v=e.dropdown),"extraWide"in e&&o("extraWide",w=e.extraWide),"events"in e&&o("events",_=e.events),"highLabel"in e&&o("highLabel",y=e.highLabel),"inactivate"in e&&o("inactivate",x=e.inactivate),"inactive"in e&&o("inactive",g=e.inactive),"ink"in e&&o("ink",N=e.ink),"label"in e&&o("label",S=e.label),"parentClassName"in e&&o("parentClassName",k=e.parentClassName),"raised"in e&&o("raised",E=e.raised),"selected"in e&&o("selected",I=e.selected),"separatorAtStart"in e&&o("separatorAtStart",D=e.separatorAtStart),"shadowDepth"in e&&o("shadowDepth",L=e.shadowDepth),"tabindex"in e&&o("tabindex",C=e.tabindex),"textStyle"in e&&o("textStyle",A=e.textStyle),"url"in e&&o("url",R=e.url),"wash"in e&&o("wash",T=e.wash),"$$scope"in e&&o("$$scope",F=e.$$scope);},t.$$.update=(e={inactive:1,$isInactive:1,parentClassName:1,contained:1,raised:1,selected:1,highLabel:1,extraWide:1,disabled:1,R_inactive:1,separatorAtStart:1,border:1,borders:1,dropdown:1,tone:1,className:1})=>{(e.inactive||e.$isInactive)&&o("R_inactive",K=g||a),(e.parentClassName||e.contained||e.raised||e.selected||e.highLabel||e.extraWide||e.disabled||e.R_inactive||e.separatorAtStart||e.border||e.borders||e.dropdown||e.tone||e.className)&&o("R_classNames",U=[ae.super,k||ae.component,$?ae.contained:void 0,E?ae.contained:void 0,E?ae.raised:void 0,E&&j?G.with_active_shadow:void 0,E&&j?J(H+1):void 0,z?ae.hasHover:void 0,I?ae.selected:void 0,y?ae.highLabel:void 0,w?ae.extraWide:void 0,f?ae.disabled:void 0,K?ae.inactive:void 0,D?ae.separatorAtStart:void 0,m||b?ae.border:void 0,v?ae.hasDropdown:void 0,v?v.open?ae.dropdownOpen:ae.dropdownClosed:void 0,"dark"===p?"pe-dark-tone":void 0,"light"===p?"pe-light-tone":void 0,r].join(" "));},{isInactive:s,domElement:d,className:r,content:l,style:c,testId:u,tone:p,animateOnTap:h,border:m,borders:b,contained:$,disabled:f,dropdown:v,extraWide:w,events:_,highLabel:y,inactivate:x,inactive:g,ink:N,label:S,parentClassName:k,raised:E,selected:I,separatorAtStart:D,shadowDepth:L,tabindex:C,textStyle:A,url:R,wash:T,onClick:e=>{console.log("domElement",d),console.log("document.activeElement",document.activeElement),document.activeElement===d&&document.activeElement.blur(),x&&(s.set(!0),setTimeout(()=>s.set(!1),1e3*x)),O(e);},onMouseDown:e=>{d&&d.addEventListener&&d.addEventListener("mouseleave",M);},onKeyUp:e=>{13===e.keyCode&&document.activeElement===d&&(document.activeElement.blur(),W&&W(e));},_shadowDepth:H,_noInk:q,_tabindex:B,undefined:void 0,R_classNames:U,a_binding:function(e,t){o("domElement",d=e);},$$slots:P,$$scope:F}}class ye extends z{constructor(e){super(),j(this,e,_e,we,i,["className","content","style","testId","tone","animateOnTap","border","borders","contained","disabled","dropdown","extraWide","events","highLabel","inactivate","inactive","ink","label","parentClassName","raised","selected","separatorAtStart","shadowDepth","tabindex","textStyle","url","wash"]);}}

    const depth = writable(1);

    var emptyArray = [];
    var emptyObject = {};
    var type = emptyObject.toString;
    var ARRAY =  type.call(emptyArray);
    var OBJECT = type.call(emptyObject);
    var STRING = type.call('');
    var FUNCTION = type.call(type);
    var own =  emptyObject.hasOwnProperty;
    var freeze = Object.freeze || function(o) {return o};


    function defaults(target, source) {
      for (var k in source) if (own.call(source, k)) {
        if (k.indexOf('$') && !(k in target)) target[k] = source[k];
      }
      return target
    }

    function cartesian(a,b) {
      var res = [], i, j;
      for (j in b) if(own.call(b, j))
        for (i in a) if(own.call(a, i))
          res.push(a[i] + b[j]);
      return res
    }

    // "Tokenizes" the selectors into parts relevant for the next function.
    // Strings and comments are matched, but ignored afterwards.
    // This is not a full tokenizers. It only recognizes comas, parentheses,
    // strings and comments.
    // regexp generated by scripts/regexps.js then trimmed by hand
    var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;


    /**
     * This will split a coma-separated selector list into individual selectors,
     * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
     *
     * @param {string} selector
     * @return {string[]}
     */

    function splitSelector(selector) {
      var indices = [], res = [], inParen = 0, o;
      /*eslint-disable no-cond-assign*/
      while (o = selectorTokenizer.exec(selector)) {
      /*eslint-enable no-cond-assign*/
        switch (o[0]) {
        case '(': inParen++; break
        case ')': inParen--; break
        case ',': if (inParen) break; indices.push(o.index);
        }
      }
      for (o = indices.length; o--;){
        res.unshift(selector.slice(indices[o] + 1));
        selector = selector.slice(0, indices[o]);
      }
      res.unshift(selector);
      return res
    }

    // Like the `selectorTokenizer`, but for the `&` operator
    var ampersandTokenizer = /&|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;

    function ampersand (selector, parents) {
      var indices = [], split = [], res, o;
      /*eslint-disable no-cond-assign*/
      while (o = ampersandTokenizer.exec(selector)) {
      /*eslint-enable no-cond-assign*/
        if (o[0] == '&') indices.push(o.index);
      }
      for (o = indices.length; o--;){
        split.unshift(selector.slice(indices[o] + 1));
        selector = selector.slice(0, indices[o]);
      }
      split.unshift(selector);
      if (split.length === 1) split.unshift('');
      res = [split[0]];
      for (o = 1; o < split.length; o++) {
        res = cartesian(res, cartesian(parents, [split[o]]));
      }
      return res.join(',')
    }

    function flatIter (f) {
      return function iter(arg) {
        if (type.call(arg) === ARRAY) for (var i= 0 ; i < arg.length; i ++) iter(arg[i]);
        else f(arg);
      }
    }

    function decamelize(match) {
      return '-' + match.toLowerCase()
    }

    /**
     * Handles the property:value; pairs.
     *
     * @param {object} state - holds the localizer- and walker-related methods
     *                         and state
     * @param {object} emit - the contextual emitters to the final buffer
     * @param {string} prefix - the current property or a prefix in case of nested
     *                          sub-properties.
     * @param {array|object|string} o - the declarations.
     * @param {boolean} local - are we in @local or in @global scope.
     */

    function declarations(state, emit, prefix, o, local) {
      var k, v, kk;
      if (o==null) return

      switch ( type.call(o = o.valueOf()) ) {
      case ARRAY:
        for (k = 0; k < o.length; k++)

          declarations(state, emit, prefix, o[k], local);

        break
      case OBJECT:
        // prefix is falsy iif it is the empty string, which means we're at the root
        // of the declarations list.
        prefix = (prefix && prefix + '-');
        for (k in o) if (own.call(o, k)){
          v = o[k];
          if (/\$/.test(k)) {
            for (kk in (k = k.split('$'))) if (own.call(k, kk)) {

              declarations(state, emit, prefix + k[kk], v, local);

            }
          } else {

            declarations(state, emit, prefix + k, v, local);

          }
        }
        break
      default:
        // prefix is falsy when it is "", which means that we're
        // at the top level.
        // `o` is then treated as a `property:value` pair, or a
        // semi-colon-separated list thereof.
        // Otherwise, `prefix` is the property name, and
        // `o` is the value.

        // restore the dashes
        k = prefix.replace(/_/g, '-').replace(/[A-Z]/g, decamelize);

        if (local && (k == 'animation-name' || k == 'animation' || k == 'list-style')) {
          // no need to tokenize here a plain `.split(',')` has all bases covered.
          // We may 'localize' a comment, but it's not a big deal.
          o = o.split(',').map(function (o) {

            return o.replace(/^\s*(?:(var\([^)]+\))|:?global\(\s*([_A-Za-z][-\w]*)\s*\)|()(-?[_A-Za-z][-\w]*))/, state.localizeReplacer)

          }).join(',');
        }

        emit.decl(k, o);

      }
    }

    /**
     * Handles a single at-rules
     *
     * @param {object} state - holds the localizer- and walker-related methods
     *                         and state
     * @param {object} emit - the contextual emitters to the final buffer
     * @param {array} k - The parsed at-rule, including the parameters,
     *                    if takes both parameters and a block.
     *                    k == [match, fullAtRule, atRuleType, params?]
     *                    So in `@-webkit-keyframes foo`, we have
     *                     - match = "@-webkit-keyframes foo"
     *                     - fullAtRule = "@-webkit-keyframes"
     *                     - atRuleType = "keyframes"
     *                     - params = "foo"
     * @param {string|string[]|object|object[]} v - Either parameters for
     *                                              block-less rules or
     *                                              their block
     *                                              for the others.
     * @param {string} prefix - the current selector or the selector prefix
     *                          in case of nested rules
     * @param {boolean} local - are we in @local or in @global scope?
     * @param {string} nestingDepth - are we nested in an at-rule or a selector?
     */

    function atRules(state, emit, k, v, prefix, local, nestingDepth) {

      // First iterate over user-provided at-rules and return if one of them corresponds to the current one
      for (var i = 0; i < state.$atHandlers.length; i++) {

        if (state.$atHandlers[i](state, emit, k, v, prefix, local, nestingDepth)) return

      }

      // using `/^global$/.test(k[2])` rather that 'global' == k[2] gzips
      // slightly better thanks to the regexps tests further down.
      // It is slightly less efficient but this isn't a critical path.

      if (!k[3] && /^global$/.test(k[2])) {

        rules(state, emit, prefix, v, 0, nestingDepth);


      } else if (!k[3] && /^local$/.test(k[2])) {

        rules(state, emit, prefix, v, 1, nestingDepth);


      } else if (k[3] && /^adopt$/.test(k[2])) {

        if (!local || nestingDepth) return emit.err('@adopt global or nested: ' + k[0])

        if (!/^\.?[_A-Za-z][-\w]*$/.test(k[3])) return emit.err('bad adopter ' + JSON.stringify(k[3]) + ' in ' + k[0])

        i = [];
        flatIter(function(adoptee, asString) {

          if(adoptee == null || !/^\.?[_A-Za-z][-\w]*(?:\s+\.?[_A-Za-z][-\w]*)*$/.test(asString = adoptee + '')) emit.err('bad adoptee '+ JSON.stringify(adoptee) + ' in ' + k[0]);

          else i.push(asString.replace(/\./g, ''));

        })(v);

        // we may end up with duplicate classes but AFAIK it has no consequences on specificity.
        if (i.length) {
          state.localize(k[3] = k[3].replace(/\./g, ''));
          state.names[k[3]] += (' ' + i.join(' '));
        }


      } else if (!k[3] && /^(?:namespace|import|charset)$/.test(k[2])) {
        flatIter(function(v) {

          emit.atrule(k[1], k[2], v);

        })(v);


      } else if (!k[3] && /^(?:font-face|viewport)$/.test(k[2])) {
        flatIter(function(v) {

          emit.atrule(k[1], k[2], k[3], 1);

          declarations(state, emit, '', v, local);

          emit._atrule();

        })(v);

      } else if (k[3] && /^(?:media|supports|page|keyframes)$/.test(k[2])) {

        if (local && 'keyframes' == k[2]) {
          k[3] = k[3].replace(
            // generated by script/regexps.js
            /(var\([^)]+\))|:?global\(\s*([_A-Za-z][-\w]*)\s*\)|()(-?[_A-Za-z][-\w]*)/,
            state.localizeReplacer
          );
        }


        emit.atrule(k[1], k[2], k[3], 1);

        if ('page' == k[2]) {

          declarations(state, emit, '', v, local);

        } else {

          rules(
            state, emit,
            'keyframes' == k[2] ? '' : prefix,
            v, local, nestingDepth + 1
          );

        }

        emit._atrule();

      } else {

        emit.err('Unsupported at-rule: ' + k[0]);

      }
    }

    /**
     * Add rulesets and other CSS tree to the sheet.
     *
     * @param {object} state - holds the localizer- and walker-related methods
     *                         and state
     * @param {object} emit - the contextual emitters to the final buffer
     * @param {string} prefix - the current selector or a prefix in case of nested rules
     * @param {array|string|object} tree - a source object or sub-object.
     * @param {string} nestingDepth - are we nested in an at-rule?
     * @param {boolean} local - are we in @local or in @global scope?
     */
    function rules(state, emit, prefix, tree, local, nestingDepth) {
      var k, v, inDeclaration, kk;

      switch (type.call(tree)) {

      case OBJECT:
        for (k in tree) if (own.call(tree, k)) {
          v = tree[k];

          if (prefix.length > 0 && /^[-\w$]+$/.test(k)) {
            if (!inDeclaration) {
              inDeclaration = 1;

              emit.rule(prefix);

            }
            if (/\$/.test(k)) {
              for (kk in (k = k.split('$'))) if (own.call(k, kk)) {

                declarations(state, emit, k[kk], v, local);

              }
            } else {

              declarations(state, emit, k, v, local);

            }

          } else if (/^@/.test(k)) {
            // Handle At-rules
            inDeclaration = 0;

            atRules(state, emit,
              /^(.(?:-[\w]+-)?([_A-Za-z][-\w]*))\b\s*(.*?)\s*$/.exec(k) || [k,'@','',''],
              v, prefix, local, nestingDepth
            );

          } else {
            // selector or nested sub-selectors
            inDeclaration = 0;

            rules(
              state, emit,
              // build the selector `prefix` for the next iteration.
              // ugly and full of redundant bits but so far the fastest/shortest.gz
              /*0 if*/(prefix.length > 0 && (/,/.test(prefix) || /,/.test(k))) ?

                /*0 then*/ (kk = splitSelector(prefix), splitSelector(
                  local ?

                    k.replace(
                      /("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,
                      state.localizeReplacer
                    ) :

                    k
                ).map(function (k) {
                  return /&/.test(k) ? ampersand(k, kk) : kk.map(function(kk) {
                    return kk + k
                  }).join(',')
                }).join(',')) :

                /*0 else*/ /*1 if*/ /&/.test(k) ?

                  /*1 then*/ ampersand(
                    local ?

                      k.replace(
                        /("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,
                        state.localizeReplacer
                      ) :

                      k,
                    [prefix]
                  ) :

                  /*1 else*/ prefix + (
                    local ?

                      k.replace(
                        /("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,
                        state.localizeReplacer
                      ) :

                      k
                    ),
               v, local, nestingDepth + 1
            );

          }
        }

        break

      case ARRAY:
        for (k = 0; k < tree.length; k++){

          rules(state, emit, prefix, tree[k], local, nestingDepth);

        }
        break

      case STRING:
        // CSS hacks or ouptut of `j2c.inline`.
        if (!prefix.length) emit.err('No selector');
        emit.rule(prefix || ' ');

        declarations(state, emit, '', tree, local);

      }
    }

    // This is the first entry in the filters array, which is
    // actually the last step of the compiler. It inserts
    // closing braces to close normal (non at-) rules (those
    // that start with a selector). Doing it earlier is
    // impossible without passing state around in unrelated code
    // or ending up with duplicated selectors when the source tree
    // contains arrays.
    // There's no `_rule` handler, because the core compiler never
    // calls it.
    function closeSelectors(next, inline) {
      var lastSelector;
      return inline ? next : {
        init: function(){lastSelector = 0; next.init();},
        done: function (raw) {
          if (lastSelector) {next._rule(); lastSelector = 0;}
          return next.done(raw)
        },
        atrule: function (rule, kind, param, takesBlock) {
          if (lastSelector) {next._rule(); lastSelector = 0;}
          next.atrule(rule, kind, param, takesBlock);
        },
        _atrule: function (rule) {
          if (lastSelector) {next._rule(); lastSelector = 0;}
          next._atrule(rule);
        },
        rule: function (selector) {
          if (selector !== lastSelector){
            if (lastSelector) next._rule();
            next.rule(selector);
            lastSelector = selector;
          }
        }
      }
    }

    function global(x) {
      return ':global(' + x + ')'
    }

    function kv (k, v, o) {
      o = {};
      o[k] = v;
      return o
    }

    function at (rule, params, block) {
      if (
        arguments.length < 3
      ) {
        // inner curry!
        var _at = at.bind.apply(at, [null].concat([].slice.call(arguments,0)));
        // So that it can be used as a key in an ES6 object literal.
        _at.toString = function(){return '@' + rule + ' ' + params};
        return _at
      }
      else return kv('@' + rule +' ' + params, block)
    }

    function j2c() {

      // the buffer that accumulates the output. Initialized in `$sink.i()`
      var buf, err;

      // the bottom of the 'codegen' stream. Mirrors the `$filter` plugin API.
      var $sink = {
        init: function(){buf=[], err=[];},
        done: function (raw) {
          if (err.length != 0) throw new Error('j2c error(s): ' + JSON.stringify(err,null,2) + 'in context:\n' + buf.join(''))
          return raw ? buf : buf.join('')
        },
        err: function(msg) {
          err.push(msg);
          buf.push('/* +++ ERROR +++ ' + msg + ' */\n');
        },
        atrule: function (rule, kind, param, takesBlock) {
          buf.push(rule, param && ' ', param, takesBlock ? ' {' : ';', _instance.endline);
        },
        // close atrule
        _atrule: function () {buf.push('}', _instance.endline);},
        rule: function (selector) {buf.push(selector, ' {', _instance.endline);},
        // close rule
        _rule: function () {buf.push('}', _instance.endline);},
        decl: function (prop, value) {buf.push(prop, prop && ':', value, ';', _instance.endline);}
      };

      // holds the `$filter` and `$at` handlers
      var $filters = [closeSelectors];
      var $atHandlers = [];

      // the public API (see the main docs)
      var _instance = {
        at: at,
        global: global,
        kv: kv,
        names: {},
        endline: '\n',
        suffix: '__j2c-' +
          // 128 bits of randomness
          Math.floor(Math.random() * 0x100000000).toString(36) + '-' +
          Math.floor(Math.random() * 0x100000000).toString(36) + '-' +
          Math.floor(Math.random() * 0x100000000).toString(36) + '-' +
          Math.floor(Math.random() * 0x100000000).toString(36),
        $plugins: [],
        sheet: function(tree) {
          var emit = _createOrRetrieveStream(0);
          emit.init();
          rules(
            _walkers[0],
            emit,
            '', // prefix
            tree,
            1,  // local, by default
            0   // nesting depth
          );

          return emit.done()
        },
        inline: function (tree, options) {
          var emit = _createOrRetrieveStream(1);
          emit.init();
          declarations(
            _walkers[1],
            emit,
            '', // prefix
            tree,
            !(options && options.global)   // local, by default
          );
          return emit.done()
        }
      };

      // The `state` (for the core functions) / `walker` (for the plugins) tables.
      var _walkers = [
        // for j2c.sheet
        {
          // helpers for locaizing class and animation names
          localizeReplacer: _localizeReplacer, // second argument to String.prototype.replace
          localize: _localize,                 // mangles local names
          names: _instance.names,              // local => mangled mapping
          $atHandlers: $atHandlers,            // extra at-rules
          // The core walker methods, to be provided to plugins
          atrule: atRules,
          decl: declarations,
          rule: rules
        },
        // likewise, for j2c.inline (idem with `$a`, `a` and `s` removed)
        {
          localizeReplacer: _localizeReplacer,
          localize: _localize,
          names: _instance.names,
          decl: declarations
        }
      ];


      // inner helpers

      var _use = flatIter(function(plugin) {
        // `~n` is falsy for `n === -1` and truthy otherwise.
        // Works well to turn the  result of `a.indexOf(x)`
        // into a value that reflects the presence of `x` in
        // `a`.
        if (~_instance.$plugins.indexOf(plugin)) return

        _instance.$plugins.push(plugin);

        if (type.call(plugin) === FUNCTION) plugin = plugin(_instance);

        if (!plugin) return

        flatIter(function(filter) {
          $filters.push(filter);
        })(plugin.$filter || emptyArray);

        flatIter(function(handler) {
          $atHandlers.push(handler);
        })(plugin.$at || emptyArray);

        defaults(_instance.names, plugin.$names || emptyObject);

        _use(plugin.$plugins || emptyArray);

        $sink = plugin.$sink || $sink;

        defaults(_instance, plugin);
      });


      var _streams = [];
      /**
       * returns the codegen streams, creating them if necessary
       * @param
       */
      function _createOrRetrieveStream(inline) {
        // build the stream processors if needed
        if (!_streams.length) {
          // append the $sink as the ultimate filter
          $filters.push(function(_, inline) {return inline ? {init:$sink.init, decl:$sink.decl, done:$sink.done, err: $sink.err} : $sink});
          for(var i = 0; i < 2; i++){ // 0 for j2c.sheet, 1 for j2c.inline
            for (var j = $filters.length; j--;) {
              _streams[i] = freeze(
                defaults(
                  $filters[j](_streams[i], !!i),
                  _streams[i]
                )
              );
            }
          }
        }
        return _streams[inline]
      }

      /**
       * Returns a localized version of a given name.
       * Registers the pair in `instnace.name` if needed.
       *
       * @param {string} name - the name to localize
       * @return {string} - the localized version
       */
      function _localize(name) {
        if (!_instance.names[name]) _instance.names[name] = name + _instance.suffix;
        return _instance.names[name].match(/^\S+/)
      }

      /**
       * Used as second argument for str.replace(localizeRegex, replacer)
       * `ignore`, `global` and `(dot, name)` are mutually exclusive
       *
       * @param {string} match - the whole match (ignored)
       * @param {string|null} ignore - a comment or a string literal
       * @param {string|null} global - a global name
       * @param {string|null} dot - either '.' for a local class name or the empty string otherwise
       * @param {string|null} name - the name to localize
       * @return {string}
       */
      function _localizeReplacer(match, ignore, global$$1, dot, name) {
        return ignore || global$$1 || dot + _localize(name)
      }

      _use(emptyArray.slice.call(arguments));
      return _instance
    }

    var j2c_commonjs = j2c;

    var isClient = typeof document !== "undefined";
    var isServer = !isClient;

    // @ts-check
    var isTouch = isServer ? false : "ontouchstart" in document.documentElement;
    var pointerEndEvent = isTouch ? ["click", "mouseup"] : ["mouseup"];

    if (isClient) {
      var htmlElement = document.querySelector("html");

      if (htmlElement) {
        htmlElement.classList.add(isTouch ? "pe-touch" : "pe-no-touch");
      }
    }

    // @ts-check
    /**
     * @type {{[s: string]: Array<function>}} listeners
     */

    var listeners = {};
    /**
     * 
     * @param {string} eventName 
     * @param {object} event 
     */

    var emit = function emit(eventName, event) {
      if (!listeners[eventName]) {
        return;
      }

      listeners[eventName].forEach(function (listener) {
        return listener(event);
      });
    };

    if (isClient) {
      window.addEventListener("resize", function (e) {
        return emit("resize", e);
      });
      window.addEventListener("scroll", function (e) {
        return emit("scroll", e);
      });
      window.addEventListener("keydown", function (e) {
        return emit("keydown", e);
      });
      pointerEndEvent.forEach(function (eventName) {
        return window.addEventListener(eventName, function (e) {
          return emit(eventName, e);
        });
      });
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      }

      return target;
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    function _objectWithoutProperties(source, excluded) {
      if (source == null) return {};

      var target = _objectWithoutPropertiesLoose(source, excluded);

      var key, i;

      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0) continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
          target[key] = source[key];
        }
      }

      return target;
    }

    // @ts-check

    /**
     * @typedef {object} StyleObject 
     */

    /**
     * Centers an item absolutely within relative parent.
     * @param {number} [offset=0] 
     * @returns {StyleObject}
     */
    var fit = function fit() {
      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var offsetPx = offset + "px";
      return {
        position: "absolute",
        top: offsetPx,
        right: offsetPx,
        bottom: offsetPx,
        left: offsetPx
      };
    };
    /**
     * Breaks off a line with ... unless lines is "none"
     * @param {number|"none"} lines 
     * @param {number} lineHeight 
     * @param {string} [unit=px]
     * @example
     * // max 1 line, 16px high
     * mixin.ellipsis(1, 16)
     * @example 
     * // max 2 lines, 2.6em high
     * mixin.ellipsis(2, 1.3, "em")
     * @returns {StyleObject} 
     */


    var ellipsis = function ellipsis(lines, lineHeight) {
      var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "px";

      if (lines === "none") {
        return {
          textOverflow: "initial",
          overflow: "initial",
          display: "block",
          height: "auto",
          maxHeight: "none",
          whiteSpace: "normal"
        };
      }

      return [{
        "@supports (-webkit-line-clamp: 2)": lines !== undefined ? {
          "-webkit-line-clamp": lines,
          "-webkit-box-orient": "vertical",
          display: "-webkit-box",
          wordBreak: "break-word"
        } : undefined
      }, _objectSpread({
        overflow: "hidden",
        textOverflow: "ellipsis",
        textRendering: "auto"
      }, lineHeight !== undefined ? {
        maxHeight: lines * lineHeight + unit
      } : undefined, lineHeight === 1 ? {
        wordWrap: "nowrap"
      } : undefined)];
    };
    /**
     * Clears float.
     * @returns {StyleObject} 
     */


    var clearfix = function clearfix() {
      return {
        "&:after": {
          content: "\"\"",
          display: "table",
          clear: "both"
        }
      };
    };
    /**
     * Creates sticky headers in a scrollable list.
     * Does not work in IE 11, Edge < 16.
     * @param {number} [zIndex=1] 
     * @returns {StyleObject} 
     */


    var sticky = function sticky() {
      var zIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return {
        position: "sticky",
        top: 0,
        zIndex: zIndex
      };
    };
    /**
     * Creates a transition with presets
     * @param {string} [properties=all]
     * @param {string} [duration=".18s"] 
     * @param {string} [curve=ease-out] 
     * @example
     * mixin.defaultTransition("opacity", vars.animation_duration)
     * @returns {StyleObject} 
     */


    var defaultTransition = function defaultTransition() {
      var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".18s";
      var curve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "ease-out";
      return {
        transitionDelay: "0ms",
        transitionDuration: duration,
        transitionTimingFunction: curve,
        transitionProperty: properties
      };
    };

    var mixin = {
      clearfix: clearfix,
      defaultTransition: defaultTransition,
      ellipsis: ellipsis,
      fit: fit,
      sticky: sticky
    };

    function unwrapExports (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    function createCommonjsModule(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var j2cPluginPrefixBrowser_commonjs = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, '__esModule', { value: true });

    // Derived from Lea Verou's PrefixFree

    var allStyles;
    var styleAttr;
    var styleElement;
    var supportedProperty;
    var supportedDecl;

    function init() {
      allStyles = getComputedStyle(document.documentElement, null);
      styleAttr = document.createElement('div').style;
      styleElement = document.documentElement.appendChild(document.createElement('style'));
      supportedDecl = _supportedDecl;
      supportedProperty = _supportedProperty;
      if ('zIndex' in styleAttr && !('z-index' in styleAttr)) {
        // Some browsers like it dash-cased, some camelCased, most like both.
        supportedDecl = function(property, value) {return _supportedDecl(camelCase(property), value)};
        supportedProperty = function(property) {return _supportedProperty(camelCase(property))};
      }
    }
    function finalize() {
      if (typeof document !== 'undefined') document.documentElement.removeChild(styleElement);
      // `styleAttr` is used at run time via `supportedProperty()`
      // `allStyles` and `styleElement` can be displosed of after initialization.
      allStyles = styleElement = null;
    }


    // Helpers, in alphabetic order

    function camelCase(str) {
      return str.replace(/-([a-z])/g, function($0, $1) { return $1.toUpperCase() }).replace('-','')
    }
    function deCamelCase(str) {
      return str.replace(/[A-Z]/g, function($0) { return '-' + $0.toLowerCase() })
    }
    function _supportedDecl(property, value) {
      styleAttr[property] = '';
      styleAttr[property] = value;
      return !!styleAttr[property]
    }
    function supportedMedia(property, value) {
      styleElement.textContent = '@media (' + property + ':' + value +'){}';
      // The !!~indexOf trick. False for -1, true otherwise.
      return !!~styleElement.sheet.cssRules[0].cssText.indexOf(value)
    }
    function _supportedProperty(property) {
      return property in styleAttr
    }
    function supportedRule(selector) {
      styleElement.textContent = selector + '{}';
      return !!styleElement.sheet.cssRules.length
    }

    // Derived from Lea Verou's PrefixFree

    // TODO: http://caniuse.com/#feat=css-media-resolution

    function detectAtrules(fixers) {
      if (fixers.prefix === '') return
      var atrules = {
        'keyframes': 'name',
        'viewport': null,
        'document': 'regexp(".")'
      };

      // build a map of {'@ruleX': '@-prefix-ruleX'}
      for(var atrule in atrules) {
        var test = atrule + ' ' + (atrules[atrule] || '');
        for (var i = fixers.prefixes.length; i--;) {
          if (!supportedRule('@' + test) && supportedRule('@' + fixers.prefixes[i] + test)) {

            fixers.hasAtrules = true;
            fixers.atrules['@' + atrule] = '@' + fixers.prefixes[i] + atrule;
          }
        }
      }

      // Standard
      fixers.hasDppx = supportedMedia('resolution', '1dppx');
      // Webkit
      fixers.hasPixelRatio = supportedMedia(fixers.prefix + 'device-pixel-ratio', '1');
      // Opera
      fixers.hasPixelRatioFraction = supportedMedia(fixers.prefix + 'device-pixel-ratio', '1/1');

      if (fixers.hasPixelRatio || fixers.hasPixelRatioFraction) {
        fixers.properties['resolution'] = fixers.prefix + 'device-pixel-ratio';
        fixers.properties['min-resolution'] = fixers.prefix + 'min-device-pixel-ratio';
        fixers.properties['max-resolution'] = fixers.prefix + 'max-device-pixel-ratio';
        if (supportedMedia('min-' + fixers.prefix + 'device-pixel-ratio', '1')) {
          // Mozilla/Firefox tunred a vendor prefix into a vendor infix
          fixers.properties['min-resolution'] = 'min-' + fixers.prefix + 'device-pixel-ratio';
          fixers.properties['max-resolution'] = 'max-' + fixers.prefix + 'device-pixel-ratio';
        }
      }
    }

    // Derived from Lea Verou's PrefixFree

    function detectFunctions(fixers) {
      // Values that might need prefixing
      if (fixers.prefix === '') return
      var functions = {
        'linear-gradient': {
          property: 'background-image',
          params: 'red, teal'
        },
        'calc': {
          property: 'width',
          params: '1px + 5%'
        },
        'element': {
          property: 'background-image',
          params: '#foo'
        },
        'cross-fade': {
          property: 'backgroundImage',
          params: 'url(a.png), url(b.png), 50%'
        }
      };
      functions['repeating-linear-gradient'] =
      functions['repeating-radial-gradient'] =
      functions['radial-gradient'] =
      functions['linear-gradient'];

      // build an array of prefixable functions
      for (var func in functions) {
        var test = functions[func],
          property = test.property,
          value = func + '(' + test.params + ')';

        if (!supportedDecl(property, value) && supportedDecl(property, fixers.prefix + value)) {
          // It's only supported with a prefix
          fixers.functions.push(func);
        }
      }
    }

    // Derived from Lea Verou's PrefixFree and Robin Frischmann's Inline Style Prefixer

    // TODO: http://caniuse.com/#feat=css-writing-mode

    // db of prop/value pairs whose values may need treatment.

    var keywords = [

      // `initial` applies to all properties and is thus handled separately.
      {
        props: ['cursor'],
        values: [ 'grab', 'grabbing', 'zoom-in', 'zoom-out']
      },
      {
        props: ['display'],
        values:['box', 'inline-box', 'flexbox', 'inline-flexbox', 'flex', 'inline-flex', 'grid', 'inline-grid']
      },
      {
        props: ['position'],
        values: [ 'sticky' ]
      },
      {
        props: ['width', 'column-width', 'height', 'max-height', 'max-width', 'min-height', 'min-width'],
        values: ['contain-floats', 'fill-available', 'fit-content', 'max-content', 'min-content']
      }
    ];
    // The flexbox zoo
    //
    // ## Specs:
    // - box     (2009/old):  https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/
    // - flexbox (2012/ie10): https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/
    // - flex    (final):     https://www.w3.org/TR/css-flexbox-1/
    var flex2009Props = {
      // ?align-content =>
      // ?align-self =>
      'align-items': 'box-align',
      'flex': 'box-flex', // https://css-tricks.com/snippets/css/a-guide-to-flexbox/#comment-371025,
      // ?flex-basis =>
      // !!flex-direction => box-direction + box-orient, covered in `plugin.js`
      'box-direction' : 'box-direction', // we prepopulate the cache for the above case.
      'box-orient': 'box-orient',
      // !!flex-flow => flex-direction and/or flex-wrap, covered in `plugin.js`
      'flex-grow': 'box-flex', // https://compat.spec.whatwg.org/#propdef--webkit-box-flex
      // ?flex-shrink =>
      'flex-wrap': 'box-lines',
      'justify-content': 'box-pack',
      'order': 'box-ordinal-group' // https://css-tricks.com/snippets/css/a-guide-to-flexbox/#comment-371025
    };
    var flex2009Values = {
      // flex => box || only for display? handled in the code
      'flex-end': 'end',
      'flex-start': 'start',
      // inline-flex => inline-box || see flex
      'nowrap': 'single',
      'space-around': 'justify',
      'space-between': 'justify',
      'wrap': 'multiple',
      'wrap-reverse': 'multiple'
    };
    var flex2012Props = {
      'align-content': '-ms-flex-line-pack',
      'align-items': '-ms-flex-align',
      'align-self': '-ms-flex-item-align',
      // flex => -ms-flex
      'flex-basis': '-ms-preferred-size',
      // flex-direction => -ms-flex-direction
      // flex-flow => -ms-flex-flow
      'flex-grow': '-ms-flex-positive',
      'flex-shrink': '-ms-flex-negative',
      // flex-wrap => -ms-flex-wrap
      'justify-content': '-ms-flex-pack',
      'order': '-ms-flex-order'
    };
    var flex2012Values = {
      // flex => flexbox || only for display? handled in the code
      'flex-end': 'end',
      'flex-start': 'start',
      // inline-flex => inline-flexbox || see 'flex'
      // nowrap => nowrap
      'space-around': 'distribute',
      'space-between': 'justify'
      // wrap => wrap
      // wrap-reverse => wrap-reverse
    };

    function detectKeywords(fixers) {
      if (fixers.prefixes.length === 0) return

      // build a map of {propertyI: {keywordJ: previxedKeywordJ, ...}, ...}
      for (var i = 0; i < keywords.length; i++) {
        var map = {}, property = keywords[i].props[0];
        // eslint-disable-next-line
        for (var j = 0, keyword; keyword = keywords[i].values[j]; j++) {
          for (var k = fixers.prefixes.length; k--;) {
            if (
              !supportedDecl(property, keyword) &&
              supportedDecl(property, fixers.prefixes[k] + keyword)
            ) {
              fixers.hasKeywords = true;
              map[keyword] = fixers.prefixes[k] + keyword;
            }
          }
        }
        // eslint-disable-next-line
        for (j = 0; property = keywords[i].props[j]; j++) {
          fixers.keywords[property] = map;
        }
      }
      if (fixers.keywords.display && fixers.keywords.display.flexbox && !supportedDecl('display', 'flex')) {
        // IE 10, Flexbox 2012
        fixers.keywords.display.flex = fixers.keywords.display.flexbox;
        fixers.keywords.display['inline-flex'] = fixers.keywords.display['inline-flexbox'];
        fixers.flexbox2012 = true;
        for (k in flex2012Props) {
          fixers.properties[k] = flex2012Props[k];
          fixers.keywords[k] = flex2012Values;
        }
      } else if (
        fixers.keywords.display &&
        fixers.keywords.display.box &&
        !supportedDecl('display', 'flex') &&
        !supportedDecl('display', fixers.prefix + 'flex')
      ) {
        // old flexbox spec
        fixers.keywords.display.flex = fixers.keywords.display.box;
        fixers.keywords.display['inline-flex'] = fixers.keywords.display['inline-box'];
        fixers.flexbox2009 = true;
        for (k in flex2009Props) {
          fixers.properties[k] = fixers.prefix + flex2009Props[k];
          fixers.keywords[k] = flex2009Values;
        }
      } else if (
        fixers.keywords.display &&
        !fixers.keywords.display.box &&
        !fixers.keywords.display.flex &&
        !fixers.keywords.display.flexbox &&
        !supportedDecl('display', 'flex')
      ) {
        fixers.jsFlex = true;
      }
      if (
        !supportedDecl('color', 'initial') &&
        supportedDecl('color', fixers.prefix + 'initial')
      ) {
        // `initial` does not use the `hasKeywords` branch, no need to set it to true.
        fixers.initial = fixers.prefix + 'initial';
      }
    }

    // Derived from Lea Verou's PrefixFree

    function detectPrefix(fixers) {
      var prefixCounters = {};
      // Why are we doing this instead of iterating over properties in a .style object? Because Webkit.
      // 1. Older Webkit won't iterate over those.
      // 2. Recent Webkit will, but the 'Webkit'-prefixed properties are not enumerable. The 'webkit'
      //    (lower case 'w') ones are, but they don't `deCamelCase()` into a prefix that we can detect.

      function iteration(property) {
        if(property.charAt(0) === '-') {
          var prefix = property.split('-')[1];

          // Count prefix uses
          prefixCounters[prefix] = ++prefixCounters[prefix] || 1;
        }
      }

      // Some browsers have numerical indices for the properties, some don't
      if(allStyles && allStyles.length > 0) {
        for(var i=0; i<allStyles.length; i++) {
          iteration(allStyles[i]);
        }
      } else {
        for(var property in allStyles) {
          iteration(deCamelCase(property));
        }
      }

      var prefixes = [];
      for (var p in prefixCounters) prefixes.push(p);
      prefixes.sort(function(a,b) {return prefixCounters[b] - prefixCounters[a]});

      fixers.prefixes = prefixes.map(function(p){return '-' + p + '-'});
      fixers.prefix = fixers.prefixes[0] || '';
      // Edge supports both `webkit` and `ms` prefixes, but `ms` isn't detected with the method above.
      // the selector comes from http://browserstrangeness.com/css_hacks.html
      if (supportedRule('_:-ms-lang(x), _:-webkit-full-screen')) fixers.prefixes.push('-ms-');
      fixers.Prefix = camelCase(fixers.prefix);
    }

    // Derived from Lea Verou's PrefixFree

    function detectSelectors(fixers) {
      var selector, prefixed;
      function prefixSelector(selector) {
        return selector.replace(/^::?/, function($0) { return $0 + fixers.prefix })
      }

      if (fixers.prefix === '') return
      var selectors = {
        ':any-link': null,
        '::backdrop': null,
        ':fullscreen': null, //TODO sort out what changed between specs
        ':full-screen': ':fullscreen',
        //sigh
        '::placeholder': null,
        ':placeholder': '::placeholder',
        '::input-placeholder': '::placeholder',
        ':input-placeholder': '::placeholder',
        ':read-only': null,
        ':read-write': null,
        '::selection': null
      };

      // builds an array of selectors that need a prefix.
      for (selector in selectors) {
        prefixed = prefixSelector(selector);
        if(!supportedRule(selectors[selector] || selector) && supportedRule(prefixed)) {
          fixers.hasSelectors = true;
          fixers.selectorList.push(selectors[selector] || selector);
          fixers.selectorMap[selectors[selector] || selector] = prefixed;
        }
      }
    }

    function detectWebkitCompat(fixers) {
      if (!supportedDecl('background-clip', 'text') && supportedDecl('-webkit-background-clip', 'text')) fixers.WkBCTxt = true
      ;['background-clip', 'text-fill-color', 'text-stroke-color', 'text-stroke-width', 'text-stroke'].forEach(function(prop){
        if(!supportedProperty(prop) && supportedProperty('-webkit-' + prop)) fixers.properties[prop] = '-webkit-' + prop;
      });
    }

    function blankFixers() {
      return {
        atrules: {},
        hasAtrules: false,
        hasDppx: null,
        hasKeywords: false,
        hasPixelRatio: false,
        hasPixelRatioFraction: false,
        hasSelectors: false,
        hasValues: false,
        fixAtMediaParams: null,
        fixAtSupportsParams: null,
        fixProperty: null,
        fixSelector: null,
        fixValue: null,
        flexbox2009: false,
        flexbox2012: false,
        functions: [],
        initial: null,
        jsFlex: false,
        keywords: {},
        placeholder: null,
        prefix: '',
        prefixes: [],
        Prefix: '',
        properties: {},
        selectorList: [],
        selectorMap: {},
        valueProperties: {
          'transition': 1,
          'transition-property': 1,
          'will-change': 1
        },
        WkBCTxt: false // -webkit-background-clip: text
      }
    }


    function browserDetector(fixers) {
      // add the required data to the fixers object.
      init();
      detectPrefix(fixers);
      detectSelectors(fixers);
      detectAtrules(fixers);
      detectKeywords(fixers);
      detectFunctions(fixers);
      detectWebkitCompat(fixers);
      finalize();
    }

    var emptySet = {};

    var valueTokenizer = /[(),]|\/\*[\s\S]*?\*\//g;

    /**
     * For properties whose values are also properties, this will split a coma-separated
     * value list into individual values, ignoring comas in comments and in
     * functions(parameter, lists).
     *
     * @param {string} selector
     * @return {string[]}
     */

    function splitValue(value) {
      var indices = [], res = [], inParen = 0, o;
      /*eslint-disable no-cond-assign*/
      while (o = valueTokenizer.exec(value)) {
      /*eslint-enable no-cond-assign*/
        switch (o[0]) {
        case '(': inParen++; break
        case ')': inParen--; break
        case ',': if (inParen) break; indices.push(o.index);
        }
      }
      for (o = indices.length; o--;){
        res.unshift(value.slice(indices[o] + 1));
        value = value.slice(0, indices[o]);
      }
      res.unshift(value);
      return res
    }

    function makeDetector (before, targets, after) {
      return new RegExp(before + '(?:' + targets.join('|') + ')' + after)
    }

    function makeLexer (before, targets, after) {
      return new RegExp(
            "\"(?:\\\\[\\S\\s]|[^\"])*\"|'(?:\\\\[\\S\\s]|[^'])*'|\\/\\*[\\S\\s]*?\\*\\/|" +
                before + '((?:' +
                targets.join('|') +
                '))' + after,
            'gi'
        )
    }

    // declarations
    // ------------
    // function trim(s) {
    //   return s.replace(/^\s*(.*?)\s*$/, '$1')
    // }

    function fixDecl(fixers, emit, property, value) {
      if (typeof property !== 'string' || property.charAt(0) === '-') return emit(property, value)

      if (!(typeof value === 'string' || typeof value === 'number')){
        return emit(fixers.properties[property] || fixers.fixProperty(property), value)
      }

      value = value + '';
      if (fixers.jsFlex) {
        if (property === 'display' && (value === 'flex' || value === 'inline-flex')) {
          emit('-js-display', value);
          return
        }
      } else if (fixers.flexbox2009) {
          // TODO: flex only takes one value in the 2009 spec
        // if (property === 'flex') {
        //   value = trim(value)
        //   if (value === 'none' || value === 'initial') emit(property, '0')
        //   else if (value === 'auto') emit(property, '1')
        //   else emit(property, value.replace(/^(\d+)(?=\W|$).*/, '$1'))
        //   return
        // } else
        if (property === 'flex-flow') {
          value.split(/\s+/).forEach(function(v){
            // recurse! The lack of `next.` is intentional.
            if (v.indexOf('wrap') > -1) fixDecl(fixers, emit, 'flex-wrap', v);
            else if(v !== '') fixDecl(fixers, emit, 'flex-direction', v);
          });
          return
        } else if (property === 'flex-direction') {
          emit(fixers.properties['box-orient'], value.indexOf('column') > -1 ? 'block-axis' : 'inline-axis');
          emit(fixers.properties['box-direction'], value.indexOf('-reverse') > -1 ? 'reverse' : 'normal');
          return
        }
      }
      // else if (fixers.flexbox2012) {
      //   // if (property === 'flex' && value.indexOf('calc(') !== -1) {
      //   //   var parsed =
      //   // }
      // }
      if(fixers.WkBCTxt && property === 'background-clip' && value === 'text') {
        emit('-webkit-background-clip', value);
      } else {
        emit(
          fixers.properties[property] || fixers.fixProperty(property),
          fixers.fixValue(value, property)
        );
      }
    }


    function finalizeFixers(fixers) {
      var prefix = fixers.prefix;


      // properties
      // ----------

      fixers.fixProperty = fixers.fixProperty || function(prop) {
        var prefixed;
        return fixers.properties[prop] = (
          supportedProperty(prop) ||
          !supportedProperty(prefixed = prefix + prop)
        ) ? prop : prefixed
      };


      // selectors
      // ----------

      var selectorDetector = makeDetector('', fixers.selectorList, '(?:\\b|$|[^-])');
      var selectorMatcher = makeLexer('', fixers.selectorList, '(?:\\b|$|[^-])');
      var selectorReplacer = function(match, selector) {
        return selector != null ? fixers.selectorMap[selector] : match
      };
      fixers.fixSelector = function(selector) {
        return selectorDetector.test(selector) ? selector.replace(selectorMatcher, selectorReplacer) : selector
      };


      // values
      // ------

      // When gradients are supported with a prefix, convert angles to legacy
      // (from clockwise to trigonometric)
      var hasGradients = fixers.functions.indexOf('linear-gradient') > -1;
      var gradientDetector = /\blinear-gradient\(/;
      var gradientMatcher = /(^|\s|,|\()((?:repeating-)?linear-gradient\()\s*(-?\d*\.?\d*)deg/ig;
      var gradientReplacer = function (match, delim, gradient, deg) {
        return delim + gradient + (90-deg) + 'deg'
      };

      // functions
      var hasFunctions = !!fixers.functions.length;
      var functionsDetector = makeDetector('(?:^|\\s|,|\\()', fixers.functions, '\\s*\\(');
      var functionsMatcher = makeLexer('(^|\\s|,|\\()', fixers.functions, '(?=\\s*\\()');
      function functionReplacer (match, $1, $2) {
        return $1 + prefix + $2
      }

      // properties as values (for transition, ...)
      // No need to look for strings in these properties. We may insert prefixes in comments. Oh the humanity.
      var valuePropertiesMatcher = /^\s*([-\w]+)/gi;
      var valuePropertiesReplacer = function(match, prop){
        return fixers.properties[prop] || fixers.fixProperty(prop)
      };

      fixers.fixValue = function (value, property) {
        var res;
        if (fixers.initial != null && value === 'initial') return fixers.initial

        if (fixers.hasKeywords && (res = (fixers.keywords[property] || emptySet)[value])) return res

        res = value;

        if (fixers.valueProperties.hasOwnProperty(property)) {
          res = (value.indexOf(',') === -1) ?
            value.replace(valuePropertiesMatcher, valuePropertiesReplacer) :
            splitValue(value).map(function(v) {
              return v.replace(valuePropertiesMatcher, valuePropertiesReplacer)
            }).join(',');
        }

        if (hasFunctions && functionsDetector.test(value)) {
          if (hasGradients && gradientDetector.test(value)) {
            res = res.replace(gradientMatcher, gradientReplacer);
          }
          res = res.replace(functionsMatcher, functionReplacer);
        }
        return res
      };

      // @media (resolution:...) {
      // -------------------------

      var resolutionMatcher = /((?:min-|max-)?resolution)\s*:\s*((?:\d*\.)?\d+)dppx/g;
      var resolutionReplacer = (
        fixers.hasPixelRatio ? function(_, prop, param){return fixers.properties[prop] + ':' + param} :
        fixers.hasPixelRatioFraction ? function(_, prop, param){return fixers.properties[prop] + ':' + Math.round(param*10) + '/10'} :
        function(_, prop, param){return prop + ':' + Math.round(param * 96) +'dpi'}
      );

      fixers.fixAtMediaParams = fixers.hasDppx !== false /*it may be null*/ ?
        function(p) {return p} :
        function (params) {
          return (params.indexOf('reso') !== -1) ?
            params.replace(resolutionMatcher, resolutionReplacer) :
            params
        };


      // @supports ... {
      // ---------------

      var supportsProp, supportsValue;
      var atSupportsParamsFixer = function (property, value) {
        supportsProp = property;
        supportsValue = value;
      };
      // regexp built by scripts/regexps.js
      var atSupportsParamsMatcher =  /\(\s*([-\w]+)\s*:\s*((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|\((?:'(?:\\[\S\s]|[^'])*'|"(?:\\[\S\s]|[^"])*"|\/\*[\S\s]*?\*\/|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*)/g;
      function atSupportsParamsReplacer(match, prop, value) {
        fixDecl(fixers, atSupportsParamsFixer, prop, value);
        return '(' + supportsProp + ':' + supportsValue
      }
      fixers.fixAtSupportsParams = function(params) {
        return params.replace(atSupportsParamsMatcher, atSupportsParamsReplacer)
      };
    }

    var commonFixers;

    function initBrowser() { // exported for the test suite
      commonFixers = blankFixers();
      if (typeof getComputedStyle === 'function') browserDetector(commonFixers);
      finalizeFixers(commonFixers);
    }
    initBrowser();

    function prefixPlugin(){
      var fixers = commonFixers;
      var cache = [];
      return {
        set: {
          setPrefixDb: function(f) {
            if (cache.indexOf(f) === -1) {
              finalizeFixers(f);
              cache.push(f);
            }
            fixers = f;
            return prefixPlugin
          }
        },
        filter: function(next) {
          return {
            atrule: function(rule, kind, params, hasBlock) {
              next.atrule(
                fixers.hasAtrules && fixers.atrules[rule] || rule,
                kind,
                (
                  rule === '@media'    ? fixers.fixAtMediaParams(params) :
                  rule === '@supports' ? fixers.fixAtSupportsParams(params) :
                  params
                ),
                hasBlock
              );
            },
            decl: function(property, value) {
              fixDecl(fixers, next.decl, property, value);
            },
            rule: function(selector) {
              next.rule(
                fixers.hasSelectors ? fixers.fixSelector(selector) : selector
              );
            }
          }
        }
      }
    }

    exports.prefixPlugin = prefixPlugin;
    });

    unwrapExports(j2cPluginPrefixBrowser_commonjs);
    var j2cPluginPrefixBrowser_commonjs_1 = j2cPluginPrefixBrowser_commonjs.prefixPlugin;

    // @ts-ignore
    var j2c$1 = new j2c_commonjs(j2cPluginPrefixBrowser_commonjs_1);

    var ID_REGEX = /[^a-z0-9\\-]/g;
    /**
     * @typedef {object} StyleObject 
     * @typedef {(selector: string|Array<string>, vars: object, customVars?: object) => Array<object>} StyleFn
     */

    /**
     * Adds styles to head.
     * @param {string} id - Identifier, used as HTMLElement id for the attached <style></style> element.
     * @param {...Array<StyleObject>} styles - List of style Objects
     * @returns {void}
     */

    var add = function add(id) {
      for (var _len = arguments.length, styles = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        styles[_key - 1] = arguments[_key];
      }

      return addToDocument.apply(void 0, [{
        id: id
      }].concat(styles));
    };
    /**
     * Removes a style from head.
     * @param {string} id - Identifier, used as HTMLElement id for the attached <style></style> element.
     * @returns {void}
     */


    var remove = function remove(id) {
      if (isServer) return;

      if (id) {
        var old = document.getElementById(id);

        if (old && old.parentNode) {
          old.parentNode.removeChild(old);
        }
      }
    };
    /**
     * Adds styles to the head.
     * @param {object} params
     * @param {string} params.id - Identifier, used as HTMLElement id for the attached <style></style> element.
     * @param {object} [params.document] - Document reference.
     * @param {...Array<StyleObject>} styles - List of style Objects.
     * @returns {void}
     */


    var addToDocument = function addToDocument(_ref) {
      var id = _ref.id,
          document = _ref.document;
      if (isServer) return;
      var safeId = id.replace(ID_REGEX, "_");
      remove(safeId);
      var documentRef = document || window.document;
      var styleEl = documentRef.createElement("style");

      if (safeId) {
        styleEl.setAttribute("id", safeId);
      }

      for (var _len2 = arguments.length, styles = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        styles[_key2 - 1] = arguments[_key2];
      }

      styles.forEach(function (styles) {
        // each style returns a list
        if (Object.keys(styles).length) {
          styles.forEach(function (style) {
            var scoped = {
              "@global": style
            };
            var sheet = j2c$1.sheet(scoped);
            styleEl.appendChild(documentRef.createTextNode(sheet));
          });
        }
      });
      documentRef.head.appendChild(styleEl);
    };
    /**
     * 
     * @param {object} params
     * @param {StyleObject|Array<StyleObject>} params.styles
     * @param {string} [params.scope]
     * @returns {Array<StyleObject>}
     */


    var wrapInScope = function wrapInScope(_ref2) {
      var styles = _ref2.styles,
          scope = _ref2.scope;
      return scope ? [_defineProperty({}, scope, styles)] : styles;
    };
    /**
     * Adds component styles to head.
     * @param {object} params
     * @param {Array<string>} params.selectors
     * @param {Array<StyleFn>} params.fns
     * @param {object} params.vars
     * @param {object} [params.customVars]
     * @param {string} [params.mediaQuery]
     * @param {string} [params.scope]
     * @returns {void}
     */


    var addStyle = function addStyle(_ref4) {
      var selectors = _ref4.selectors,
          styleFns = _ref4.fns,
          vars = _ref4.vars,
          customVars = _ref4.customVars,
          mediaQuery = _ref4.mediaQuery,
          scope = _ref4.scope;
      var prefix = scope ? " " : "";
      var selector = prefix + selectors.join("");
      var styles = styleFns.map(function (fn) {
        return fn(selector, vars, customVars);
      }).filter(function (list) {
        return list.length > 0;
      });

      if (styles.length === 0) {
        return;
      }

      var id = selector.trim().replace(/^[^a-z]?(.*)/, "$1");
      add(id, wrapInScope({
        styles: wrapInScope({
          styles: styles,
          scope: scope
        }),
        scope: mediaQuery
      }));
    };
    /**
     * Returns a list of style objects for a component.
     * @param {object} params
     * @param {Array<string>} params.selectors
     * @param {Array<StyleFn>} params.fns
     * @param {object} params.vars - Style configuration variables
     * @param {object} [params.customVars] - Style configuration variables
     * @param {string} [params.mediaQuery] - Mediaquery string
     * @param {string} [params.scope] - Scope selector
     * @returns {Array<StyleObject>}
     */


    var getStyle = function getStyle(_ref5) {
      var selectors = _ref5.selectors,
          styleFns = _ref5.fns,
          vars = _ref5.vars,
          customVars = _ref5.customVars,
          mediaQuery = _ref5.mediaQuery,
          scope = _ref5.scope;
      var prefix = scope ? " " : "";
      var selector = prefix + selectors.join("");
      var styles = styleFns.map(function (fn) {
        return fn(selector, vars, customVars);
      });
      return wrapInScope({
        styles: wrapInScope({
          styles: styles,
          scope: scope
        }),
        scope: mediaQuery
      });
    };
    /**
     * Adds component styles to head.
     * @param {string} selector 
     * @param {Array<StyleFn>} fns 
     * @param {object} vars - Style configuration variables
     */


    var createAddStyle = function createAddStyle(selector, fns, vars) {
      return (
        /**
         * @param {string} [customSelector=""]
         * @param {object} customVars
         * @param {object} [scoping={}]
         * @param {string} [scoping.mediaQuery]
         * @param {string} [scoping.scope]
         * @returns {void}
         */
        function () {
          var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var customVars = arguments.length > 1 ? arguments[1] : undefined;

          var _ref6 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
              mediaQuery = _ref6.mediaQuery,
              scope = _ref6.scope;

          return addStyle({
            selectors: [selector, customSelector],
            fns: fns,
            vars: vars,
            customVars: customVars,
            mediaQuery: mediaQuery,
            scope: scope
          });
        }
      );
    };
    /**
     * Returns styles for a component.
     * @param {string} selector 
     * @param {Array<StyleFn>} fns 
     * @param {object} vars - Style configuration variables
     */


    var createGetStyle = function createGetStyle(selector, fns, vars) {
      return (
        /**
         * @param {string} [customSelector=""]
         * @param {object} customVars
         * @param {object} [scoping={}]
         * @param {string} [scoping.mediaQuery]
         * @param {string} [scoping.scope]
         * @returns {Array<StyleObject>}
         */
        function () {
          var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
          var customVars = arguments.length > 1 ? arguments[1] : undefined;

          var _ref7 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
              mediaQuery = _ref7.mediaQuery,
              scope = _ref7.scope;

          return [getStyle({
            selectors: [selector, customSelector],
            fns: fns,
            vars: vars,
            customVars: customVars,
            mediaQuery: mediaQuery,
            scope: scope
          })];
        }
      );
    };

    var styler = {
      add: add,
      addStyle: addStyle,
      addToDocument: addToDocument,
      createAddStyle: createAddStyle,
      createGetStyle: createGetStyle,
      getStyle: getStyle,
      remove: remove
    };

    // @ts-check

    /**
     * @typedef {(selector: string, vars: object, customVars?: object) => Array<object>} StyleFn
     * @typedef {{[s: string]: StyleFn}} StyleCollection
     */

    /**
     * Wraps an object with a selector.
     * @param {string} selector 
     * @param {object} o 
     * @returns {object}
     */
    var sel = function sel(selector, o) {
      return _defineProperty({}, selector, o);
    };
    /**
     * @param {object} params
     * @param {string} [params.selector]
     * @param {string} [params.scopedSelector]
     * @param {StyleCollection} [params.varFns]
     * @param {StyleCollection} [params.customVarFns]
     * @param {StyleFn} [params.superStyle]
     * @param {(_:any) => StyleCollection} [params.varMixin]
     * @param {StyleCollection} [params.componentVars]
     * @param {StyleCollection} [params.customVars]
     * @returns {Array<object>}
     */

    var createStyle = function createStyle(_ref2) {
      var varFns = _ref2.varFns,
          customVarFns = _ref2.customVarFns,
          superStyle = _ref2.superStyle,
          varMixin = _ref2.varMixin,
          selector = _ref2.selector,
          scopedSelector = _ref2.scopedSelector,
          _ref2$componentVars = _ref2.componentVars,
          componentVars = _ref2$componentVars === void 0 ? {} : _ref2$componentVars,
          customVars = _ref2.customVars;

      var allVars = _objectSpread({}, componentVars, customVars);

      var currentVars = customVars ? customVars : allVars;

      var general_styles = componentVars.general_styles,
          otherVars = _objectWithoutProperties(componentVars, ["general_styles"]);

      var baseLayout = superStyle !== undefined ? customVars !== undefined ? superStyle(selector, componentVars, customVars) : superStyle(selector, otherVars) : [];

      var fns = _objectSpread({}, customVars ? customVarFns : {}, varFns);

      return baseLayout.concat(Object.keys(varMixin(currentVars)).map(function (v) {
        return fns && fns[v] !== undefined ? fns[v](scopedSelector, allVars) : null;
      }).filter(function (s) {
        return s;
      }));
    };
    /**
     * 
     * @param {object} params
     * @param {StyleCollection} [params.varFns]
     * @param {StyleCollection} [params.customVarFns]
     * @param {StyleFn} [params.superLayout]
     * @param {(_:any) => StyleCollection} [params.varMixin]
     * @returns {StyleFn}
     */


    var createLayout = function createLayout(_ref3) {
      var varFns = _ref3.varFns,
          customVarFns = _ref3.customVarFns,
          superLayout = _ref3.superLayout,
          _ref3$varMixin = _ref3.varMixin,
          varMixin = _ref3$varMixin === void 0 ? function (o) {
        return o;
      } : _ref3$varMixin;
      return (
        /**
         * @param {string} selector
         * @param {object} componentVars
         * @param {object} [customVars]
         * @returns {Array<object>}
         */
        function (selector, componentVars, customVars) {
          return createStyle({
            varFns: varFns,
            customVarFns: customVarFns,
            superStyle: superLayout,
            varMixin: varMixin,
            selector: selector,
            scopedSelector: selector,
            componentVars: componentVars,
            customVars: customVars
          });
        }
      );
    };

    // @ts-check
    // Global style variables
    var grid_unit = 4;
    var grid_unit_component = 8;
    var increment = 7 * grid_unit_component; // 7 * 8 = 56

    var increment_large = 8 * grid_unit_component; // 8 * 8 = 64

    var vars = {
      // grid
      grid_unit: grid_unit,
      grid_unit_component: grid_unit_component,
      increment: increment,
      increment_large: increment_large,
      grid_unit_menu: 56,
      grid_unit_icon_button: 6 * grid_unit_component,
      // 48
      // common sizes
      unit_block_border_radius: 4,
      unit_item_border_radius: 4,
      unit_indent: 72,
      unit_indent_large: 80,
      unit_side_padding: 16,
      // buttons
      unit_touch_height: 48,
      unit_icon_size_small: 2 * grid_unit_component,
      // 16
      unit_icon_size: 3 * grid_unit_component,
      // 24
      unit_icon_size_medium: 4 * grid_unit_component,
      // 32
      unit_icon_size_large: 5 * grid_unit_component,
      // 40
      // screen dimensions
      unit_screen_size_extra_large: 1280,
      unit_screen_size_large: 960,
      unit_screen_size_medium: 480,
      unit_screen_size_small: 320,
      // transitions
      animation_duration: ".18s",
      animation_curve_slow_in_fast_out: "cubic-bezier(.4, 0, .2, 1)",
      animation_curve_slow_in_linear_out: "cubic-bezier(0, 0, .2, 1)",
      animation_curve_linear_in_fast_out: "cubic-bezier(.4, 0, 1, 1)",
      animation_curve_default: "ease-out",
      // font
      font_weight_light: 300,
      font_weight_normal: 400,
      font_weight_medium: 500,
      font_weight_bold: 700,
      font_size_title: 20,
      line_height: 1.5,
      // base colors
      color_primary: "33, 150, 243",
      // blue 500
      color_primary_active: "30, 136, 229",
      // blue 600
      color_primary_dark: "25, 118, 210",
      // blue 700
      color_primary_faded: "100, 181, 249",
      // blue 300
      color_primary_foreground: "255, 255, 255",
      color_light_background: "255, 255, 255",
      color_light_foreground: "0, 0, 0",
      color_dark_background: "34, 34, 34",
      color_dark_foreground: "255, 255, 255",
      // blends
      blend_light_text_primary: .87,
      blend_light_text_regular: .73,
      blend_light_text_secondary: .54,
      blend_light_text_tertiary: .40,
      blend_light_text_disabled: .26,
      blend_light_border_medium: .24,
      blend_light_border_light: .11,
      blend_light_background_active: .14,
      blend_light_background_hover: .06,
      blend_light_background_hover_medium: .12,
      // for the lighter tinted icon buttons
      blend_light_background_disabled: .09,
      blend_light_overlay_background: .3,
      blend_dark_text_primary: 1,
      blend_dark_text_regular: .87,
      blend_dark_text_secondary: .70,
      blend_dark_text_tertiary: .40,
      blend_dark_text_disabled: .26,
      blend_dark_border_medium: .22,
      blend_dark_border_light: .10,
      blend_dark_background_active: .14,
      blend_dark_background_hover: .08,
      blend_dark_background_hoverMedium: .12,
      // for the lighter tinted icon buttons
      blend_dark_background_disabled: .12,
      blend_dark_overlay_background: .3,

      /*
      Breakpoints
      Specs: https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints
      Breakbpoint naming: inspiration from
      https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862
      */
      breakpoint_for_phone_only: 599,
      // set max-width  cols: 4,  gutter: 16
      breakpoint_for_tablet_portrait_up: 600,
      // set min-width  cols: 8,  gutter: 24
      breakpoint_for_tablet_landscape_up: 840,
      // etc.           cols: 12, gutter: 24
      breakpoint_for_desktop_up: 1280,
      breakpoint_for_big_desktop_up: 1600,
      breakpoint_for_tv_up: 1920,
      // z-index
      z_toolbar: 100,
      z_menu: 1000,
      z_app_bar: 2000,
      z_drawer: 3000,
      z_notification: 5000,
      z_dialog: 7000
    };

    var classes = {
      component: "pe-shadow",
      // elements      
      bottomShadow: "pe-shadow__bottom",
      topShadow: "pe-shadow__top",
      // states
      animated: "pe-shadow--animated",
      depth_n: "pe-shadow--depth-",
      with_active_shadow: "pe-with-active-shadow"
    };

    function _defineProperty$1(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }

      return obj;
    }

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function _objectSpread$1(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty$1(target, key, source[key]);
        });
      }

      return target;
    }

    var _createShadowForSelector = function _createShadowForSelector(which, depth) {
      return function (selector, vars) {
        return [_createRegularShadowForSelector(which, depth, selector, vars), _createActiveShadowForSelector(which, depth, selector, vars)];
      };
    };

    var _createRegularShadowForSelector = function _createRegularShadowForSelector(which, depth, selector, vars) {
      return sel(selector, _defineProperty$1({}, ".pe-shadow--depth-".concat(depth, " .pe-shadow__").concat(which), {
        boxShadow: vars["shadow_".concat(which, "_depth_").concat(depth)]
      }));
    };

    var _createActiveShadowForSelector = function _createActiveShadowForSelector(which, depth, selector, vars) {
      if (depth === 5) {
        return [];
      }

      var hoverDepth = depth + 1;
      var hoverSelector = ".pe-with-active-shadow.pe-shadow--depth-".concat(hoverDepth);
      return [sel("".concat(hoverSelector, ":focus ").concat(selector, ", ").concat(hoverSelector, ":active ").concat(selector), _defineProperty$1({}, " .pe-shadow__".concat(which), {
        boxShadow: vars["shadow_".concat(which, "_depth_").concat(hoverDepth)]
      }))];
    };

    var _createActiveShadowTransition = function _createActiveShadowTransition(selector, vars) {
      return sel(".pe-with-active-shadow ".concat(selector), {
        " .pe-shadow__bottom, .pe-shadow__top": {
          transition: vars.transition
        }
      });
    };
    /**
     * @param {string} selector 
     * @param {object} vars 
     * @param {number} depth 
     * @param {"top"|"bottom"} which 
     */


    var _createShadow = function _createShadow(selector, vars, depth, which) {
      return sel(selector, _defineProperty$1({}, " .pe-shadow__".concat(which), {
        boxShadow: vars["shadow_".concat(which, "_depth_").concat(depth)]
      }));
    };
    /**
     * @param {string} selector 
     * @param {object} vars 
     * @param {number} depth
     * @returns {object}
     */


    var shadow = function shadow(selector, vars, depth) {
      return [_createShadow(selector, vars, depth, "top"), _createShadow(selector, vars, depth, "bottom")];
    };
    /**
     * @param {string} selector 
     * @param {object} vars 
     * @returns {object}
     */


    var shadow_depth = function shadow_depth(selector, vars) {
      return vars.shadow_depth !== undefined ? shadow(selector, vars, vars.shadow_depth) : null;
    };

    var transition = function transition(selector, vars) {
      return [sel(selector, {
        ".pe-shadow--animated": {
          " .pe-shadow__bottom, .pe-shadow__top": {
            transition: vars.transition
          }
        }
      }), _createActiveShadowTransition(selector, vars)];
    };

    var sharedVarFns = {
      shadow_depth: shadow_depth
    };

    var varFns = _extends({}, {
      general_styles: function general_styles(selector, vars) {
        return [sel(selector, [mixin.fit(), shadow(selector, vars, 1), {
          borderRadius: "inherit",
          pointerEvents: "none",
          " .pe-shadow__bottom, .pe-shadow__top": [mixin.fit(), {
            borderRadius: "inherit"
          }]
        }])];
      },
      transition: transition,
      shadow_depth: shadow_depth
    }, [0, 1, 2, 3, 4, 5].reduce(function (acc, depth) {
      return acc["shadow_top_depth_".concat(depth)] = _createShadowForSelector("top", depth), acc["shadow_bottom_depth_".concat(depth)] = _createShadowForSelector("bottom", depth), acc;
    }, {}));

    var layout = createLayout({
      varFns: varFns
    });

    var sharedVars = {
      shadow_top_depth_0: "none",
      shadow_bottom_depth_0: "none",
      shadow_top_depth_1: "none",
      shadow_bottom_depth_1: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
      shadow_top_depth_2: "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
      shadow_bottom_depth_2: "0 6px 10px 0 rgba(0, 0, 0, 0.3)",
      shadow_top_depth_3: "0 11px 7px 0 rgba(0, 0, 0, 0.19)",
      shadow_bottom_depth_3: "0 13px 25px 0 rgba(0, 0, 0, 0.3)",
      shadow_top_depth_4: "0 14px 12px 0 rgba(0, 0, 0, 0.17)",
      shadow_bottom_depth_4: "0 20px 40px 0 rgba(0, 0, 0, 0.3)",
      shadow_top_depth_5: "0 17px 17px 0 rgba(0, 0, 0, 0.15)",
      shadow_bottom_depth_5: "0 27px 55px 0 rgba(0, 0, 0, 0.3)",
      // theme vars
      shadow_depth: undefined
    };
    var vars$1 = _objectSpread$1({
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      transition: "box-shadow ".concat(vars.animation_duration, " ease-out")
    }, sharedVars);

    // @ts-check
    var fns = [layout];
    var selector = ".".concat(classes.component);
    var addStyle$1 = styler.createAddStyle(selector, fns, vars$1);
    var getStyle$1 = styler.createGetStyle(selector, fns, vars$1);
    styler.addStyle({
      selectors: [selector],
      fns: fns,
      vars: vars$1
    });

    var _ShadowCSS = /*#__PURE__*/Object.freeze({
        addStyle: addStyle$1,
        getStyle: getStyle$1,
        layout: layout,
        sharedVarFns: sharedVarFns,
        sharedVars: sharedVars,
        vars: vars$1
    });

    var ShadowCSS = _ShadowCSS;

    /* src/examples/shadow/interactive/Interactive.svelte generated by Svelte v3.4.4 */

    const file = "src/examples/shadow/interactive/Interactive.svelte";

    function create_fragment$1(ctx) {
    	var div2, div0, p0, t1, p1, t2, t3, t4, t5, div1, current, dispose;

    	var shadow = new oe({
    		props: {
    		className: "example-shadow-themed-transition",
    		shadowDepth: ctx.shadowDepth,
    		animated: true
    	},
    		$$inline: true
    	});

    	return {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			p0 = element("p");
    			p0.textContent = "Themed shadow transition";
    			t1 = space();
    			p1 = element("p");
    			t2 = text("The shadowDepth is: ");
    			t3 = text(ctx.shadowDepth);
    			t4 = text(". Click to change.");
    			t5 = space();
    			div1 = element("div");
    			shadow.$$.fragment.c();
    			add_location(p0, file, 22, 4, 477);
    			add_location(p1, file, 23, 4, 513);
    			div0.className = "example-info";
    			add_location(div0, file, 21, 2, 446);
    			div1.className = "shadow-example";
    			add_location(div1, file, 25, 2, 583);
    			div2.className = "example";
    			add_location(div2, file, 20, 0, 422);
    			dispose = listen(div1, "click", ctx.increment);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, div2, anchor);
    			append(div2, div0);
    			append(div0, p0);
    			append(div0, t1);
    			append(div0, p1);
    			append(p1, t2);
    			append(p1, t3);
    			append(p1, t4);
    			append(div2, t5);
    			append(div2, div1);
    			mount_component(shadow, div1, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (!current || changed.shadowDepth) {
    				set_data(t3, ctx.shadowDepth);
    			}

    			var shadow_changes = {};
    			if (changed.shadowDepth) shadow_changes.shadowDepth = ctx.shadowDepth;
    			shadow.$set(shadow_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			shadow.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			shadow.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div2);
    			}

    			shadow.$destroy();

    			dispose();
    		}
    	};
    }

    function instance$1($$self, $$props, $$invalidate) {
    	

      ShadowCSS.addStyle(".example-shadow-themed-transition", {
        transition: `box-shadow .25s ease-in-out`
      });

      let shadowDepth;

      const unsubscribe = depth.subscribe(value =>
        { const $$result = shadowDepth = value; $$invalidate('shadowDepth', shadowDepth); return $$result; }
      );

      const increment = () =>
    		depth.update(n => (n + 1) % 6);

    	return { shadowDepth, increment };
    }

    class Interactive extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, []);
    	}
    }

    /* src/examples/shadow/Shadow.svelte generated by Svelte v3.4.4 */

    const file$1 = "src/examples/shadow/Shadow.svelte";

    function create_fragment$2(ctx) {
    	var div18, h1, t1, div2, div0, p0, t3, div1, t4, div5, div3, p1, t6, div4, t7, div8, div6, p2, t9, div7, t10, div11, div9, p3, t12, div10, t13, div14, div12, p4, t15, div13, t16, div17, div15, p5, t18, div16, t19, current;

    	var shadow0 = new oe({
    		props: { shadowDepth: "1" },
    		$$inline: true
    	});

    	var shadow1 = new oe({
    		props: { shadowDepth: "3" },
    		$$inline: true
    	});

    	var shadow2 = new oe({
    		props: { shadowDepth: "5" },
    		$$inline: true
    	});

    	var shadow3 = new oe({
    		props: { shadowDepth: "0" },
    		$$inline: true
    	});

    	var shadow4 = new oe({
    		props: {
    		className: "example-shadow-themed-shadow",
    		style: "background-color: rgba(243, 229, 245,1.0)"
    	},
    		$$inline: true
    	});

    	var shadow5 = new oe({
    		props: {
    		className: "example-shadow-themed-shadow-depth"
    	},
    		$$inline: true
    	});

    	var interactive = new Interactive({ $$inline: true });

    	return {
    		c: function create() {
    			div18 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Shadow";
    			t1 = space();
    			div2 = element("div");
    			div0 = element("div");
    			p0 = element("p");
    			p0.textContent = "shadowDepth=\"1\"";
    			t3 = space();
    			div1 = element("div");
    			shadow0.$$.fragment.c();
    			t4 = space();
    			div5 = element("div");
    			div3 = element("div");
    			p1 = element("p");
    			p1.textContent = "shadowDepth=\"3\"";
    			t6 = space();
    			div4 = element("div");
    			shadow1.$$.fragment.c();
    			t7 = space();
    			div8 = element("div");
    			div6 = element("div");
    			p2 = element("p");
    			p2.textContent = "shadowDepth=\"5\"";
    			t9 = space();
    			div7 = element("div");
    			shadow2.$$.fragment.c();
    			t10 = space();
    			div11 = element("div");
    			div9 = element("div");
    			p3 = element("p");
    			p3.textContent = "shadowDepth=\"0\"";
    			t12 = space();
    			div10 = element("div");
    			shadow3.$$.fragment.c();
    			t13 = space();
    			div14 = element("div");
    			div12 = element("div");
    			p4 = element("p");
    			p4.textContent = "Themed shadow";
    			t15 = space();
    			div13 = element("div");
    			shadow4.$$.fragment.c();
    			t16 = space();
    			div17 = element("div");
    			div15 = element("div");
    			p5 = element("p");
    			p5.textContent = "Themed shadow depth";
    			t18 = space();
    			div16 = element("div");
    			shadow5.$$.fragment.c();
    			t19 = space();
    			interactive.$$.fragment.c();
    			add_location(h1, file$1, 24, 2, 525);
    			add_location(p0, file$1, 28, 6, 603);
    			div0.className = "example-info";
    			add_location(div0, file$1, 27, 4, 570);
    			div1.className = "shadow-example";
    			add_location(div1, file$1, 30, 4, 641);
    			div2.className = "example";
    			add_location(div2, file$1, 26, 2, 544);
    			add_location(p1, file$1, 37, 6, 785);
    			div3.className = "example-info";
    			add_location(div3, file$1, 36, 4, 752);
    			div4.className = "shadow-example";
    			add_location(div4, file$1, 39, 4, 823);
    			div5.className = "example";
    			add_location(div5, file$1, 35, 2, 726);
    			add_location(p2, file$1, 46, 6, 967);
    			div6.className = "example-info";
    			add_location(div6, file$1, 45, 4, 934);
    			div7.className = "shadow-example";
    			add_location(div7, file$1, 48, 4, 1005);
    			div8.className = "example";
    			add_location(div8, file$1, 44, 2, 908);
    			add_location(p3, file$1, 55, 6, 1149);
    			div9.className = "example-info";
    			add_location(div9, file$1, 54, 4, 1116);
    			div10.className = "shadow-example";
    			add_location(div10, file$1, 57, 4, 1187);
    			div11.className = "example";
    			add_location(div11, file$1, 53, 2, 1090);
    			add_location(p4, file$1, 64, 6, 1331);
    			div12.className = "example-info";
    			add_location(div12, file$1, 63, 4, 1298);
    			div13.className = "shadow-example";
    			add_location(div13, file$1, 66, 4, 1367);
    			div14.className = "example";
    			add_location(div14, file$1, 62, 2, 1272);
    			add_location(p5, file$1, 75, 6, 1602);
    			div15.className = "example-info";
    			add_location(div15, file$1, 74, 4, 1569);
    			div16.className = "shadow-example";
    			add_location(div16, file$1, 77, 4, 1644);
    			div17.className = "example";
    			add_location(div17, file$1, 73, 2, 1543);
    			div18.className = "page";
    			add_location(div18, file$1, 22, 0, 503);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, div18, anchor);
    			append(div18, h1);
    			append(div18, t1);
    			append(div18, div2);
    			append(div2, div0);
    			append(div0, p0);
    			append(div2, t3);
    			append(div2, div1);
    			mount_component(shadow0, div1, null);
    			append(div18, t4);
    			append(div18, div5);
    			append(div5, div3);
    			append(div3, p1);
    			append(div5, t6);
    			append(div5, div4);
    			mount_component(shadow1, div4, null);
    			append(div18, t7);
    			append(div18, div8);
    			append(div8, div6);
    			append(div6, p2);
    			append(div8, t9);
    			append(div8, div7);
    			mount_component(shadow2, div7, null);
    			append(div18, t10);
    			append(div18, div11);
    			append(div11, div9);
    			append(div9, p3);
    			append(div11, t12);
    			append(div11, div10);
    			mount_component(shadow3, div10, null);
    			append(div18, t13);
    			append(div18, div14);
    			append(div14, div12);
    			append(div12, p4);
    			append(div14, t15);
    			append(div14, div13);
    			mount_component(shadow4, div13, null);
    			append(div18, t16);
    			append(div18, div17);
    			append(div17, div15);
    			append(div15, p5);
    			append(div17, t18);
    			append(div17, div16);
    			mount_component(shadow5, div16, null);
    			append(div18, t19);
    			mount_component(interactive, div18, null);
    			current = true;
    		},

    		p: noop,

    		i: function intro(local) {
    			if (current) return;
    			shadow0.$$.fragment.i(local);

    			shadow1.$$.fragment.i(local);

    			shadow2.$$.fragment.i(local);

    			shadow3.$$.fragment.i(local);

    			shadow4.$$.fragment.i(local);

    			shadow5.$$.fragment.i(local);

    			interactive.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			shadow0.$$.fragment.o(local);
    			shadow1.$$.fragment.o(local);
    			shadow2.$$.fragment.o(local);
    			shadow3.$$.fragment.o(local);
    			shadow4.$$.fragment.o(local);
    			shadow5.$$.fragment.o(local);
    			interactive.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div18);
    			}

    			shadow0.$destroy();

    			shadow1.$destroy();

    			shadow2.$destroy();

    			shadow3.$destroy();

    			shadow4.$destroy();

    			shadow5.$destroy();

    			interactive.$destroy();
    		}
    	};
    }

    function instance$2($$self) {
    	

      ShadowCSS.addStyle(".example-shadow-themed-shadow", {
        shadow_bottom_depth_1: "5px 5px 5px 0px rgba(142, 36, 170, 0.5)"
      });

      ShadowCSS.addStyle(".example-shadow-themed-shadow-depth", {
        shadow_depth: 3
      });

    	return {};
    }

    class Shadow_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, []);
    	}
    }

    /* src/examples/button/Button.svelte generated by Svelte v3.4.4 */

    const file$2 = "src/examples/button/Button.svelte";

    function create_fragment$3(ctx) {
    	var div12, h1, t1, div1, div0, t3, t4, div3, div2, t6, t7, div5, div4, t9, t10, div7, div6, t12, t13, div9, div8, t15, t16, div11, div10, t18, current;

    	var button0 = new ye({
    		props: { label: "Button" },
    		$$inline: true
    	});

    	var button1 = new ye({
    		props: { raised: true, label: "Button" },
    		$$inline: true
    	});

    	var button2 = new ye({
    		props: {
    		raised: true,
    		label: "Button",
    		inactivate: "2"
    	},
    		$$inline: true
    	});

    	var button3 = new ye({
    		props: {
    		raised: true,
    		label: "Button",
    		shadowDepth: "1",
    		textStyle: "color: red",
    		testId: "A test id"
    	},
    		$$inline: true
    	});

    	var button4 = new ye({
    		props: {
    		url: { href: '#/shadow', use: link },
    		raised: true,
    		label: "Go"
    	},
    		$$inline: true
    	});

    	var button5 = new ye({
    		props: {
    		raised: true,
    		label: "Button",
    		dropdown: true
    	},
    		$$inline: true
    	});

    	return {
    		c: function create() {
    			div12 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Button";
    			t1 = space();
    			div1 = element("div");
    			div0 = element("div");
    			div0.textContent = "Regular button";
    			t3 = space();
    			button0.$$.fragment.c();
    			t4 = space();
    			div3 = element("div");
    			div2 = element("div");
    			div2.textContent = "Raised button";
    			t6 = space();
    			button1.$$.fragment.c();
    			t7 = space();
    			div5 = element("div");
    			div4 = element("div");
    			div4.textContent = "Inactivated for 2 secs";
    			t9 = space();
    			button2.$$.fragment.c();
    			t10 = space();
    			div7 = element("div");
    			div6 = element("div");
    			div6.textContent = "Styled button";
    			t12 = space();
    			button3.$$.fragment.c();
    			t13 = space();
    			div9 = element("div");
    			div8 = element("div");
    			div8.textContent = "Link to shadow";
    			t15 = space();
    			button4.$$.fragment.c();
    			t16 = space();
    			div11 = element("div");
    			div10 = element("div");
    			div10.textContent = "Dropdown";
    			t18 = space();
    			button5.$$.fragment.c();
    			add_location(h1, file$2, 10, 2, 305);
    			div0.className = "example-info";
    			add_location(div0, file$2, 13, 4, 350);
    			div1.className = "example";
    			add_location(div1, file$2, 12, 2, 324);
    			div2.className = "example-info";
    			add_location(div2, file$2, 18, 4, 465);
    			div3.className = "example";
    			add_location(div3, file$2, 17, 2, 439);
    			div4.className = "example-info";
    			add_location(div4, file$2, 23, 4, 586);
    			div5.className = "example";
    			add_location(div5, file$2, 22, 2, 560);
    			div6.className = "example-info";
    			add_location(div6, file$2, 50, 4, 1302);
    			div7.className = "example";
    			add_location(div7, file$2, 49, 2, 1276);
    			div8.className = "example-info";
    			add_location(div8, file$2, 60, 4, 1511);
    			div9.className = "example";
    			add_location(div9, file$2, 59, 2, 1485);
    			div10.className = "example-info";
    			add_location(div10, file$2, 65, 4, 1667);
    			div11.className = "example";
    			add_location(div11, file$2, 64, 2, 1641);
    			div12.className = "page";
    			add_location(div12, file$2, 8, 0, 283);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, div12, anchor);
    			append(div12, h1);
    			append(div12, t1);
    			append(div12, div1);
    			append(div1, div0);
    			append(div1, t3);
    			mount_component(button0, div1, null);
    			append(div12, t4);
    			append(div12, div3);
    			append(div3, div2);
    			append(div3, t6);
    			mount_component(button1, div3, null);
    			append(div12, t7);
    			append(div12, div5);
    			append(div5, div4);
    			append(div5, t9);
    			mount_component(button2, div5, null);
    			append(div12, t10);
    			append(div12, div7);
    			append(div7, div6);
    			append(div7, t12);
    			mount_component(button3, div7, null);
    			append(div12, t13);
    			append(div12, div9);
    			append(div9, div8);
    			append(div9, t15);
    			mount_component(button4, div9, null);
    			append(div12, t16);
    			append(div12, div11);
    			append(div11, div10);
    			append(div11, t18);
    			mount_component(button5, div11, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var button4_changes = {};
    			if (changed.link) button4_changes.url = { href: '#/shadow', use: link };
    			button4.$set(button4_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			button0.$$.fragment.i(local);

    			button1.$$.fragment.i(local);

    			button2.$$.fragment.i(local);

    			button3.$$.fragment.i(local);

    			button4.$$.fragment.i(local);

    			button5.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			button0.$$.fragment.o(local);
    			button1.$$.fragment.o(local);
    			button2.$$.fragment.o(local);
    			button3.$$.fragment.o(local);
    			button4.$$.fragment.o(local);
    			button5.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div12);
    			}

    			button0.$destroy();

    			button1.$destroy();

    			button2.$destroy();

    			button3.$destroy();

    			button4.$destroy();

    			button5.$destroy();
    		}
    	};
    }

    class Button_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, null, create_fragment$3, safe_not_equal, []);
    	}
    }

    /* src/Home.svelte generated by Svelte v3.4.4 */

    const file$3 = "src/Home.svelte";

    function create_fragment$4(ctx) {
    	var ul, li0, a0, link_action, t_1, li1, a1, link_action_1;

    	return {
    		c: function create() {
    			ul = element("ul");
    			li0 = element("li");
    			a0 = element("a");
    			a0.textContent = "Button";
    			t_1 = space();
    			li1 = element("li");
    			a1 = element("a");
    			a1.textContent = "Shadow";
    			a0.href = "/button";
    			add_location(a0, file$3, 6, 4, 80);
    			add_location(li0, file$3, 5, 2, 71);
    			a1.href = "/shadow";
    			add_location(a1, file$3, 9, 4, 137);
    			add_location(li1, file$3, 8, 2, 128);
    			add_location(ul, file$3, 4, 0, 64);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, ul, anchor);
    			append(ul, li0);
    			append(li0, a0);
    			link_action = link.call(null, a0) || {};
    			append(ul, t_1);
    			append(ul, li1);
    			append(li1, a1);
    			link_action_1 = link.call(null, a1) || {};
    		},

    		p: noop,
    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(ul);
    			}

    			if (link_action && typeof link_action.destroy === 'function') link_action.destroy();
    			if (link_action_1 && typeof link_action_1.destroy === 'function') link_action_1.destroy();
    		}
    	};
    }

    class Home extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, null, create_fragment$4, safe_not_equal, []);
    	}
    }

    var routes = {
      "/": Home,
      "/shadow": Shadow_1,
      "/button": Button_1,
    };

    /* src/App.svelte generated by Svelte v3.4.4 */

    function create_fragment$5(ctx) {
    	var current;

    	var router = new Router({
    		props: { routes: routes },
    		$$inline: true
    	});

    	return {
    		c: function create() {
    			router.$$.fragment.c();
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			mount_component(router, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var router_changes = {};
    			if (changed.routes) router_changes.routes = routes;
    			router.$set(router_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			router.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			router.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			router.$destroy(detaching);
    		}
    	};
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, null, create_fragment$5, safe_not_equal, []);
    	}
    }

    // import "polythene-css/dist/polythene-typography.css"; // Default Material Design styles including Roboto font. Put this import before other CSS.
    // import "polythene-css/dist/polythene.css";            // Component CSS

    const app = new App({
    	target: document.body,
    	props: {},
    });

    return app;

}());
//# sourceMappingURL=app.js.map
