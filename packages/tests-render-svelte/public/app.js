
(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
var app = (function () {
    'use strict';

    function noop() { }
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
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
    function create_slot(definition, ctx, fn) {
        if (definition) {
            const slot_ctx = get_slot_context(definition, ctx, fn);
            return definition[0](slot_ctx);
        }
    }
    function get_slot_context(definition, ctx, fn) {
        return definition[1]
            ? assign({}, assign(ctx.$$scope.ctx, definition[1](fn ? fn(ctx) : {})))
            : ctx.$$scope.ctx;
    }
    function get_slot_changes(definition, ctx, changed, fn) {
        return definition[1]
            ? assign({}, assign(ctx.$$scope.changed || {}, definition[1](fn ? fn(changed) : {})))
            : ctx.$$scope.changed || {};
    }
    function exclude_internal_props(props) {
        const result = {};
        for (const k in props)
            if (k[0] !== '$')
                result[k] = props[k];
        return result;
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
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function svg_element(name) {
        return document.createElementNS('http://www.w3.org/2000/svg', name);
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
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else
            node.setAttribute(attribute, value);
    }
    function set_attributes(node, attributes) {
        for (const key in attributes) {
            if (key === 'style') {
                node.style.cssText = attributes[key];
            }
            else if (key in node) {
                node[key] = attributes[key];
            }
            else {
                attr(node, key, attributes[key]);
            }
        }
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function set_data(text, data) {
        data = '' + data;
        if (text.data !== data)
            text.data = data;
    }
    function set_style(node, key, value) {
        node.style.setProperty(key, value);
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error(`Function called outside component initialization`);
        return current_component;
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
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

    function get_spread_update(levels, updates) {
        const update = {};
        const to_null_out = {};
        const accounted_for = { $$scope: 1 };
        let i = levels.length;
        while (i--) {
            const o = levels[i];
            const n = updates[i];
            if (n) {
                for (const key in o) {
                    if (!(key in n))
                        to_null_out[key] = 1;
                }
                for (const key in n) {
                    if (!accounted_for[key]) {
                        update[key] = n[key];
                        accounted_for[key] = 1;
                    }
                }
                levels[i] = n;
            }
            else {
                for (const key in o) {
                    accounted_for[key] = 1;
                }
            }
        }
        for (const key in to_null_out) {
            if (!(key in update))
                update[key] = undefined;
        }
        return update;
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
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment.l(children(options.target));
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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
        const invalidators = [];
        const store = readable(initial_value, (set) => {
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
                run_all(invalidators);
                pending |= (1 << i);
            }));
            inited = true;
            sync();
            return function stop() {
                run_all(unsubscribers);
                cleanup();
            };
        });
        return {
            subscribe(run, invalidate = noop) {
                invalidators.push(invalidate);
                const unsubscribe = store.subscribe(run, invalidate);
                return () => {
                    const index = invalidators.indexOf(invalidate);
                    if (index !== -1) {
                        invalidators.splice(index, 1);
                    }
                    unsubscribe();
                };
            }
        };
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

    /* node_modules/svelte-spa-router/router.svelte generated by Svelte v3.5.1 */

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

    var shadowClasses = {
      component:          "pe-shadow",
          
      // elements      
      bottomShadow:       "pe-shadow__bottom",
      topShadow:          "pe-shadow__top",

      // states
      animated:           "pe-shadow--animated",
      depth_n:            "pe-shadow--depth-",
      with_active_shadow: "pe-with-active-shadow",
    };

    const getShadowDepthClass = shadowDepth => (
      shadowDepth !== undefined
        ? `${shadowClasses.depth_n}${Math.min(5, shadowDepth)}`
        : undefined
    );

    /* src/lib/shadow/Shadow.svelte generated by Svelte v3.5.1 */

    const file = "src/lib/shadow/Shadow.svelte";

    const get_after_slot_changes = ({}) => ({});
    const get_after_slot_context = ({}) => ({});

    const get_before_slot_changes = ({}) => ({});
    const get_before_slot_context = ({}) => ({});

    function create_fragment$1(ctx) {
    	var div2, t0, t1, t2, div0, div0_class_value, t3, div1, div1_class_value, current;

    	const before_slot_1 = ctx.$$slots.before;
    	const before_slot = create_slot(before_slot_1, ctx, get_before_slot_context);

    	const default_slot_1 = ctx.$$slots.default;
    	const default_slot = create_slot(default_slot_1, ctx, null);

    	const after_slot_1 = ctx.$$slots.after;
    	const after_slot = create_slot(after_slot_1, ctx, get_after_slot_context);

    	var div2_levels = [
    		{ class: ctx.R_classNames },
    		ctx.id && {id: ctx.id},
    		ctx.style && {style: ctx.style},
    		{ 'data-test-id': ctx.testId },
    		ctx.events
    	];

    	var div2_data = {};
    	for (var i = 0; i < div2_levels.length; i += 1) {
    		div2_data = assign(div2_data, div2_levels[i]);
    	}

    	return {
    		c: function create() {
    			div2 = element("div");

    			if (before_slot) before_slot.c();
    			t0 = space();

    			if (default_slot) default_slot.c();
    			t1 = space();

    			if (after_slot) after_slot.c();
    			t2 = space();
    			div0 = element("div");
    			t3 = space();
    			div1 = element("div");

    			div0.className = div0_class_value = shadowClasses.bottomShadow;
    			add_location(div0, file, 38, 2, 850);
    			div1.className = div1_class_value = shadowClasses.topShadow;
    			add_location(div1, file, 39, 2, 889);
    			set_attributes(div2, div2_data);
    			add_location(div2, file, 28, 0, 668);
    		},

    		l: function claim(nodes) {
    			if (before_slot) before_slot.l(div2_nodes);

    			if (default_slot) default_slot.l(div2_nodes);

    			if (after_slot) after_slot.l(div2_nodes);
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, div2, anchor);

    			if (before_slot) {
    				before_slot.m(div2, null);
    			}

    			append(div2, t0);

    			if (default_slot) {
    				default_slot.m(div2, null);
    			}

    			append(div2, t1);

    			if (after_slot) {
    				after_slot.m(div2, null);
    			}

    			append(div2, t2);
    			append(div2, div0);
    			append(div2, t3);
    			append(div2, div1);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (before_slot && before_slot.p && changed.$$scope) {
    				before_slot.p(get_slot_changes(before_slot_1, ctx, changed, get_before_slot_changes), get_slot_context(before_slot_1, ctx, get_before_slot_context));
    			}

    			if (default_slot && default_slot.p && changed.$$scope) {
    				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
    			}

    			if (after_slot && after_slot.p && changed.$$scope) {
    				after_slot.p(get_slot_changes(after_slot_1, ctx, changed, get_after_slot_changes), get_slot_context(after_slot_1, ctx, get_after_slot_context));
    			}

    			set_attributes(div2, get_spread_update(div2_levels, [
    				(changed.R_classNames) && { class: ctx.R_classNames },
    				(changed.id) && ctx.id && {id: ctx.id},
    				(changed.style) && ctx.style && {style: ctx.style},
    				(changed.testId) && { 'data-test-id': ctx.testId },
    				(changed.events) && ctx.events
    			]));
    		},

    		i: function intro(local) {
    			if (current) return;
    			if (before_slot && before_slot.i) before_slot.i(local);
    			if (default_slot && default_slot.i) default_slot.i(local);
    			if (after_slot && after_slot.i) after_slot.i(local);
    			current = true;
    		},

    		o: function outro(local) {
    			if (before_slot && before_slot.o) before_slot.o(local);
    			if (default_slot && default_slot.o) default_slot.o(local);
    			if (after_slot && after_slot.o) after_slot.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div2);
    			}

    			if (before_slot) before_slot.d(detaching);

    			if (default_slot) default_slot.d(detaching);

    			if (after_slot) after_slot.d(detaching);
    		}
    	};
    }

    function instance$1($$self, $$props, $$invalidate) {
    	// Common vars
      let { className = "", events = {}, id = undefined, style = undefined, testId = undefined, shadowDepth = 1, animated = false } = $$props;

    	const writable_props = ['className', 'events', 'id', 'style', 'testId', 'shadowDepth', 'animated'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Shadow> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;

    	$$self.$set = $$props => {
    		if ('className' in $$props) $$invalidate('className', className = $$props.className);
    		if ('events' in $$props) $$invalidate('events', events = $$props.events);
    		if ('id' in $$props) $$invalidate('id', id = $$props.id);
    		if ('style' in $$props) $$invalidate('style', style = $$props.style);
    		if ('testId' in $$props) $$invalidate('testId', testId = $$props.testId);
    		if ('shadowDepth' in $$props) $$invalidate('shadowDepth', shadowDepth = $$props.shadowDepth);
    		if ('animated' in $$props) $$invalidate('animated', animated = $$props.animated);
    		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
    	};

    	let R_classNames;

    	$$self.$$.update = ($$dirty = { animated: 1, className: 1, shadowDepth: 1 }) => {
    		if ($$dirty.animated || $$dirty.className || $$dirty.shadowDepth) { $$invalidate('R_classNames', R_classNames = [
            shadowClasses.component,
            animated ? shadowClasses.animated : undefined,
            className,
            getShadowDepthClass(shadowDepth)
          ].join(" ")); }
    	};

    	return {
    		className,
    		events,
    		id,
    		style,
    		testId,
    		shadowDepth,
    		animated,
    		R_classNames,
    		$$slots,
    		$$scope
    	};
    }

    class Shadow extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$1, create_fragment$1, safe_not_equal, ["className", "events", "id", "style", "testId", "shadowDepth", "animated"]);
    	}

    	get className() {
    		throw new Error("<Shadow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<Shadow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get events() {
    		throw new Error("<Shadow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set events(value) {
    		throw new Error("<Shadow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get id() {
    		throw new Error("<Shadow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<Shadow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<Shadow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<Shadow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get testId() {
    		throw new Error("<Shadow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set testId(value) {
    		throw new Error("<Shadow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get shadowDepth() {
    		throw new Error("<Shadow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set shadowDepth(value) {
    		throw new Error("<Shadow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get animated() {
    		throw new Error("<Shadow>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set animated(value) {
    		throw new Error("<Shadow>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

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

    /**
     * 
     * @param {{[s: string]: string}} classes 
     * @returns {{[s: string]: string}}
     */

    var sizeClasses = function sizeClasses(classes) {
      return {
        small: classes.small,
        regular: classes.regular,
        medium: classes.medium,
        large: classes.large,
        fab: classes.fab
      };
    };
    /**
     * 
     * @param {{[s: string]: string}} classes 
     * @param {string} [size] 
     * @returns {object}
     */


    var classForSize = function classForSize(classes) {
      var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "regular";
      return sizeClasses(classes)[size];
    };

    var isClient = typeof document !== "undefined";
    var isServer = !isClient;
    /**
     * 
     * @param {string} durationStr 
     * @returns {number}
     */

    var styleDurationToMs = function styleDurationToMs(durationStr) {
      var parsed = parseFloat(durationStr) * (durationStr.indexOf("ms") === -1 ? 1000 : 1);
      return isNaN(parsed) ? 0 : parsed;
    };

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

    // @ts-check

    /**
     * @typedef {{[selector:string] : object}} Style
     * @typedef {Array<Style> | Style} Styles
     */

    /**
     * @type {Styles} layout
     */
    var layout = [{
      "display": "-webkit-box"
    }, {
      "display": "-moz-box"
    }, {
      "display": "-ms-flexbox"
    }, {
      "display": "-webkit-flex"
    }, {
      "display": "flex"
    }];
    /**
     * @type {Styles} layoutInline
     */

    var layoutInline = [layout, {
      "display": "-ms-inline-flexbox"
    }, {
      "display": "-webkit-inline-flex"
    }, {
      "display": "inline-flex"
    }];
    /**
     * @type {Styles} layoutHorizontal
     */

    var layoutHorizontal = [layout, {
      "-ms-flex-direction": "row",
      "-webkit-flex-direction": "row",
      "flex-direction": "row"
    }];
    /**
     * @type {Styles} layoutHorizontalReverse
     */

    var layoutHorizontalReverse = [layout, {
      "-ms-flex-direction": "row-reverse",
      "-webkit-flex-direction": "row-reverse",
      "flex-direction": "row-reverse"
    }];
    /**
     * @type {Styles} layoutVertical
     */

    var layoutVertical = [layout, {
      "-ms-flex-direction": "column",
      "-webkit-flex-direction": "column",
      "flex-direction": "column"
    }];
    /**
     * @type {Styles} layoutVerticalReverse
     */

    var layoutVerticalReverse = [layout, {
      "-ms-flex-direction": "column-reverse",
      "-webkit-flex-direction": "column-reverse",
      "flex-direction": "column-reverse"
    }];
    /**
     * @type {Styles} layoutWrap
     */

    var layoutWrap = [layout, {
      "-ms-flex-wrap": "wrap",
      "-webkit-flex-wrap": "wrap",
      "flex-wrap": "wrap"
    }];
    /**
     * @type {Styles} layoutWrapReverse
     */

    var layoutWrapReverse = [layout, {
      "-ms-flex-wrap": "wrap-reverse",
      "-webkit-flex-wrap": "wrap-reverse",
      "flex-wrap": "wrap-reverse"
    }];
    /**
     * @type {Styles} layoutStart
     */

    var layoutStart = [layout, {
      "-ms-flex-align": "start",
      "-webkit-align-items": "flex-start",
      "align-items": "flex-start"
    }];
    /**
     * @type {Styles} layoutCenter
     */

    var layoutCenter = [layout, {
      "-ms-flex-align": "center",
      "-webkit-align-items": "center",
      "align-items": "center"
    }];
    /**
     * @type {Styles} layoutEnd
     */

    var layoutEnd = [layout, {
      "-ms-flex-align": "end",
      "-webkit-align-items": "flex-end",
      "align-items": "flex-end"
    }];
    /**
     * @type {Styles} layoutJustified
     */

    var layoutJustified = [layout, {
      "-ms-flex-pack": "justify",
      "-webkit-justify-content": "space-between",
      "justify-content": "space-between"
    }];
    /**
     * @type {Styles} layoutStartJustified
     */

    var layoutStartJustified = [layout, {
      "-ms-flex-pack": "start",
      "-webkit-justify-content": "flex-start",
      "justify-content": "flex-start"
    }];
    /**
     * @type {Styles} layoutCenterJustified
     */

    var layoutCenterJustified = [layout, {
      "-ms-flex-pack": "center",
      "-webkit-justify-content": "center",
      "justify-content": "center"
    }];
    /**
     * @type {Styles} layoutEndJustified
     */

    var layoutEndJustified = [layout, {
      "-ms-flex-pack": "end",
      "-webkit-justify-content": "flex-end",
      "justify-content": "flex-end"
    }];
    /**
     * @type {Styles} layoutCenterCenter
     */

    var layoutCenterCenter = [layoutCenterJustified, layoutCenter];
    /**
     * @type {Styles} layoutAroundJustified
     */

    var layoutAroundJustified = [layout, {
      "-ms-flex-pack": "distribute",
      "-webkit-justify-content": "space-around",
      "justify-content": "space-around"
    }];
    /**
     * @param {number} [num=1] 
     * @returns {Styles}
     */

    var flex = function flex() {
      var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      return [{
        "-webkit-box-flex": num
      }, {
        "-moz-box-flex": num
      }, {
        "-webkit-flex": num
      }, {
        "-ms-flex": num
      }, {
        "flex": num
      }, num === 1 ? {
        "-webkit-flex-basis": "0.000000001px"
      } : {}, num === 1 ? {
        "flex-basis": "0.000000001px"
      } : {}];
    };
    /**
     * @type {Styles} flexAuto
     */


    var flexAuto = {
      "-ms-flex": "1 1 auto",
      "-webkit-flex-basis": "auto",
      "flex-basis": "auto"
    };
    /**
     * @type {Styles} flexAutoVertical
     */

    var flexAutoVertical = {
      "-ms-flex": "1 1 auto",
      "-webkit-flex-basis": "auto",
      "flex-basis": "auto"
    };
    /**
     * 
     * @param {number|"none"} index 
     * @returns {Styles}
     */

    var flexIndex = function flexIndex(index) {
      return {
        "-ms-flex": index,
        "-webkit-flex": index,
        "flex": index
      };
    };
    /**
     * 
     * @param {number} value 
     * @returns {Styles}
     */


    var flexGrow = function flexGrow(value) {
      return {
        "-webkit-flex-grow": value,
        "flex-grow": value
      };
    };
    /**
     * 
     * @param {number} value 
     * @returns {Styles}
     */


    var flexShrink = function flexShrink(value) {
      return {
        "-webkit-flex-shrink": value,
        "flex-shrink": value
      };
    };
    /**
     * @type {Styles} selfStart
     */


    var selfStart = {
      "-ms-align-self": "flex-start",
      "-webkit-align-self": "flex-start",
      "align-self": "flex-start"
    };
    /**
     * @type {Styles} selfCenter
     */

    var selfCenter = {
      "-ms-align-self": "center",
      "-webkit-align-self": "center",
      "align-self": "center"
    };
    /**
     * @type {Styles} selfEnd
     */

    var selfEnd = {
      "-ms-align-self": "flex-end",
      "-webkit-align-self": "flex-end",
      "align-self": "flex-end"
    };
    /**
     * @type {Styles} selfStretch
     */

    var selfStretch = {
      "-ms-align-self": "stretch",
      "-webkit-align-self": "stretch",
      "align-self": "stretch"
    };
    var flex$1 = {
      flex: flex,
      flexAuto: flexAuto,
      flexAutoVertical: flexAutoVertical,
      flexIndex: flexIndex,
      flexGrow: flexGrow,
      flexShrink: flexShrink,
      layout: layout,
      layoutAroundJustified: layoutAroundJustified,
      layoutCenter: layoutCenter,
      layoutCenterCenter: layoutCenterCenter,
      layoutCenterJustified: layoutCenterJustified,
      layoutEnd: layoutEnd,
      layoutEndJustified: layoutEndJustified,
      layoutHorizontal: layoutHorizontal,
      layoutHorizontalReverse: layoutHorizontalReverse,
      layoutInline: layoutInline,
      layoutJustified: layoutJustified,
      layoutStart: layoutStart,
      layoutStartJustified: layoutStartJustified,
      layoutVertical: layoutVertical,
      layoutVerticalReverse: layoutVerticalReverse,
      layoutWrap: layoutWrap,
      layoutWrapReverse: layoutWrapReverse,
      selfCenter: selfCenter,
      selfEnd: selfEnd,
      selfStart: selfStart,
      selfStretch: selfStretch
    };

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
     * Creates a right-to-left selector.
     * @param {string} selector
     * @returns {string}
     */

    var selectorRTL = function selectorRTL(selector) {
      return "*[dir=rtl] ".concat(selector, ", .pe-rtl ").concat(selector);
    };
    /**
     * Creates a rgba CSS color string.
     * @param {string} colorStr 
     * @param {number} opacity 
     * @returns {string}
     */

    var rgba = function rgba(colorStr) {
      var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      return "rgba(".concat(colorStr, ", ").concat(opacity, ")");
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
    /**
     * 
     * @param {object} params
     * @param {string} [params.selector]
     * @param {string} [params.scopedSelector]
     * @param {object} [params.componentVars]
     * @param {object} [params.customVars]  
     * @param {StyleFn} [params.superColor]
     * @param {StyleCollection} [params.varFns]
     * @param {(_:any) => StyleCollection} [params.varMixin]
     * @returns {Array<object>}
     */

    var createColorStyle = function createColorStyle(_ref4) {
      var selector = _ref4.selector,
          scopedSelector = _ref4.scopedSelector,
          componentVars = _ref4.componentVars,
          customVars = _ref4.customVars,
          varFns = _ref4.varFns,
          superColor = _ref4.superColor,
          varMixin = _ref4.varMixin;
      return createStyle({
        varFns: varFns,
        superStyle: superColor,
        varMixin: varMixin,
        selector: selector,
        scopedSelector: scopedSelector,
        componentVars: componentVars,
        customVars: customVars
      });
    };
    /**
     * 
     * @param {object} params 
     * @param {Array<string>} params.scopes
     * @param {string} params.selector
     * @param {boolean} params.isNoTouch
    * @returns {string}
     */

    var appendPseudoClass = function appendPseudoClass(_ref5) {
      var scopes = _ref5.scopes,
          selector = _ref5.selector,
          isNoTouch = _ref5.isNoTouch;
      return isNoTouch ? scopes.map(function (s) {
        return s + selector + ":hover";
      }).join(",") : scopes.map(function (s) {
        return s + selector;
      }).join(",");
    };
    /**
     * 
     * @param {object} params 
     * @param {Array<string>} params.scopes
     * @param {string} params.selector
     * @param {boolean} [params.isNoTouch]
     * @returns {string}
     */


    var createScopedSelector = function createScopedSelector(_ref6) {
      var scopes = _ref6.scopes,
          selector = _ref6.selector,
          _ref6$isNoTouch = _ref6.isNoTouch,
          isNoTouch = _ref6$isNoTouch === void 0 ? false : _ref6$isNoTouch;
      return selector.split(/\s*,\s*/).map(function (s) {
        return appendPseudoClass({
          scopes: scopes,
          selector: s,
          isNoTouch: isNoTouch
        });
      }).join("");
    };
    /**
     * @typedef {object} ColorScopeObject
     * @property {Array<string>} scopes
     * @property {string} varFnName
     * @property {boolean} isNoTouch
     */

    /**
     * @type {Array<ColorScopeObject>} colorScopes
     */


    var colorScopes = [{
      // has/inside dark tone
      scopes: [".pe-dark-tone", ".pe-dark-tone "],
      varFnName: "darkTintFns",
      isNoTouch: false
    }, {
      // normal, has/inside light tone
      scopes: ["", ".pe-light-tone", ".pe-light-tone "],
      varFnName: "lightTintFns",
      isNoTouch: false
    }, {
      // has/inside dark tone
      scopes: [".pe-no-touch .pe-dark-tone "],
      varFnName: "darkTintHoverFns",
      isNoTouch: true
    }, {
      // normal, has/inside light tone
      scopes: [".pe-no-touch ", ".pe-no-touch .pe-light-tone "],
      varFnName: "lightTintHoverFns",
      isNoTouch: true
    }];
    /**
     * 
     * @param {object} params
     * @param {object} [params.varFns]
     * @param {StyleFn} [params.superColor]
     * @param {(_:any) => StyleCollection} [params.varMixin]
     * @returns {StyleFn}
     */

    var createColor = function createColor(_ref7) {
      var _ref7$varFns = _ref7.varFns,
          varFns = _ref7$varFns === void 0 ? {} : _ref7$varFns,
          superColor = _ref7.superColor,
          _ref7$varMixin = _ref7.varMixin,
          varMixin = _ref7$varMixin === void 0 ? function (o) {
        return o;
      } : _ref7$varMixin;
      return (
        /**
         * @param {string} selector
         * @param {object} componentVars
         * @param {object} [customVars]
         * @returns {Array<object>}
         */
        function (selector, componentVars, customVars) {
          return colorScopes.map(function (_ref8) {
            var scopes = _ref8.scopes,
                varFnName = _ref8.varFnName,
                isNoTouch = _ref8.isNoTouch;
            return createColorStyle({
              selector: selector,
              scopedSelector: createScopedSelector({
                scopes: scopes,
                selector: selector,
                isNoTouch: isNoTouch
              }),
              componentVars: componentVars,
              customVars: customVars,
              varFns: varFns[varFnName],
              superColor: superColor,
              varMixin: varMixin
            });
          });
        }
      );
    };
    /**
     * @param {object} vars 
     * @param {object} behaviorVars
     * @returns {string|undefined} 
     */

    var createMarkerValue = function createMarkerValue(vars, behaviorVars) {
      var marker = Object.keys(behaviorVars).filter(function (bvar) {
        return vars[bvar] === true;
      }).join(".");
      return marker ? "\"".concat(marker, "\"") : undefined;
    };
    /**
     * Creates a CSS style from which the key can be read from the `content` property.
     * @param {object} vars 
     * @param {object} behaviorVars 
     * @returns {object}
     */


    var createMarker = function createMarker(vars, behaviorVars) {
      if (!vars) {
        console.error("createMarker requires param `vars`"); // eslint-disable-line no-console
      }

      var value = createMarkerValue(vars, behaviorVars);
      return value ? {
        ":before": {
          content: value,
          display: "none"
        }
      } : undefined;
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
      component: "pe-spinner",
      // elements
      animation: "pe-spinner__animation",
      placeholder: "pe-spinner__placeholder",
      // states
      animated: "pe-spinner--animated",
      fab: "pe-spinner--fab",
      large: "pe-spinner--large",
      medium: "pe-spinner--medium",
      permanent: "pe-spinner--permanent",
      raised: "pe-spinner--raised",
      regular: "pe-spinner--regular",
      singleColor: "pe-spinner--single-color",
      small: "pe-spinner--small",
      visible: "pe-spinner--visible"
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

    var generalFns = {
      general_styles: function general_styles(selector) {
        return [];
      } // eslint-disable-line no-unused-vars

    };

    var tintFns = function tintFns(tint) {
      return _defineProperty$1({}, "color_" + tint + "_raised_background", function (selector, vars) {
        return [sel(selector, {
          ".pe-spinner--raised": {
            backgroundColor: vars["color_" + tint + "_raised_background"]
          }
        })];
      });
    };

    var lightTintFns = _extends({}, generalFns, tintFns("light"));

    var darkTintFns = _extends({}, generalFns, tintFns("dark"));

    var color = createColor({
      varFns: {
        lightTintFns: lightTintFns,
        darkTintFns: darkTintFns
      }
    });

    var sizes = function sizes(size) {
      return {
        width: size + "px",
        height: size + "px"
      };
    };

    var raisedSize = function raisedSize(size) {
      var padding = Math.round(size * 0.25); // only use rounded number to prevent sub-pixel alignment issues

      var paddedSize = size + padding * 2;
      return {
        width: paddedSize + "px",
        height: paddedSize + "px",
        padding: padding + "px"
      };
    };

    var varFns = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          transitionProperty: "all",
          ".pe-spinner--raised": {
            position: "relative",
            borderRadius: "50%"
          }
        })];
      },
      animation_show_css: function animation_show_css(selector, vars) {
        return [sel(selector, {
          ".pe-spinner--visible, &.pe-spinner--permanent": [vars.animation_show_css]
        })];
      },
      animation_hide_css: function animation_hide_css(selector, vars) {
        return _defineProperty$1({}, selector, vars.animation_hide_css);
      },
      animation_delay: function animation_delay(selector, vars) {
        return [sel(selector, {
          transitionDelay: vars.animation_delay
        })];
      },
      animation_duration: function animation_duration(selector, vars) {
        return [sel(selector, {
          transitionDuration: vars.animation_duration
        })];
      },
      animation_timing_function: function animation_timing_function(selector, vars) {
        return [sel(selector, {
          transitionTimingFunction: vars.animation_timing_function
        })];
      },
      size_small: function size_small(selector, vars) {
        return [sel(selector, {
          ".pe-spinner--small": sizes(vars.size_small),
          ".pe-spinner--raised": {
            ".pe-spinner--small": raisedSize(vars.size_small)
          }
        })];
      },
      size_regular: function size_regular(selector, vars) {
        return [sel(selector, {
          ".pe-spinner--regular": sizes(vars.size_regular),
          ".pe-spinner--raised": {
            ".pe-spinner--regular": raisedSize(vars.size_regular)
          }
        })];
      },
      size_medium: function size_medium(selector, vars) {
        return [sel(selector, {
          ".pe-spinner--medium": sizes(vars.size_medium),
          ".pe-spinner--raised": {
            ".pe-spinner--medium": raisedSize(vars.size_medium)
          }
        })];
      },
      size_large: function size_large(selector, vars) {
        return [sel(selector, {
          ".pe-spinner--large": sizes(vars.size_large),
          ".pe-spinner--raised": {
            ".pe-spinner--large": raisedSize(vars.size_large)
          }
        })];
      },
      size_fab: function size_fab(selector, vars) {
        return [sel(selector, {
          ".pe-spinner--fab": sizes(vars.size_fab),
          ".pe-spinner--raised": {
            ".pe-spinner--fab": raisedSize(vars.size_fab)
          }
        })];
      }
    };
    var layout$1 = createLayout({
      varFns: varFns
    });

    // @ts-check
    /**
     * @type {BaseSpinnerVars} baseSpinnerVars
     */

    var baseSpinnerVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      animation_delay: "0s",
      animation_duration: ".220s",
      animation_hide_css: "opacity: 0;",
      animation_show_css: "opacity: 1;",
      animation_timing_function: "ease-in-out",
      size_fab: 7 * vars.grid_unit_component,
      size_large: 6 * vars.grid_unit_component,
      size_medium: 5 * vars.grid_unit_component,
      size_regular: 4 * vars.grid_unit_component,
      size_small: 3 * vars.grid_unit_component,
      color_light_raised_background: rgba(vars.color_light_background),
      color_dark_raised_background: rgba(vars.color_light_background) // also use light background with dark tone

    };

    // @ts-check
    var fns = [layout$1, color];
    var selector = ".".concat(classes.component);

    var addGeneralStyleToHead = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector],
        fns: fns,
        vars: baseSpinnerVars
      });
    };

    var classes$1 = {
      component: "pe-shadow",
      // elements      
      bottomShadow: "pe-shadow__bottom",
      topShadow: "pe-shadow__top",
      // states
      animated: "pe-shadow--animated",
      depth_n: "pe-shadow--depth-",
      with_active_shadow: "pe-with-active-shadow"
    };

    function _defineProperty$2(obj, key, value) {
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

    function _extends$1() {
      _extends$1 = Object.assign || function (target) {
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

      return _extends$1.apply(this, arguments);
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
          _defineProperty$2(target, key, source[key]);
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
      return sel(selector, _defineProperty$2({}, ".pe-shadow--depth-".concat(depth, " .pe-shadow__").concat(which), {
        boxShadow: vars["shadow_".concat(which, "_depth_").concat(depth)]
      }));
    };

    var _createActiveShadowForSelector = function _createActiveShadowForSelector(which, depth, selector, vars) {
      if (depth === 5) {
        return [];
      }

      var hoverDepth = depth + 1;
      var hoverSelector = ".pe-with-active-shadow.pe-shadow--depth-".concat(hoverDepth);
      return [sel("".concat(hoverSelector, ":focus ").concat(selector, ", ").concat(hoverSelector, ":active ").concat(selector), _defineProperty$2({}, " .pe-shadow__".concat(which), {
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
      return sel(selector, _defineProperty$2({}, " .pe-shadow__".concat(which), {
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

    var varFns$1 = _extends$1({}, {
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

    var layout$2 = createLayout({
      varFns: varFns$1
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
    var fns$1 = [layout$2];
    var selector$1 = ".".concat(classes$1.component);
    var addStyle$1 = styler.createAddStyle(selector$1, fns$1, vars$1);

    var addGeneralStyleToHead$1 = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$1],
        fns: fns$1,
        vars: vars$1
      });
    };

    var classes$2 = {
      component: "pe-text-button",
      "super": "pe-button",
      row: "pe-button-row",
      // elements      
      content: "pe-button__content",
      label: "pe-button__label",
      textLabel: "pe-button__text-label",
      wash: "pe-button__wash",
      washColor: "pe-button__wash-color",
      dropdown: "pe-button__dropdown",
      // states      
      border: "pe-button--border",
      contained: "pe-button--contained",
      disabled: "pe-button--disabled",
      dropdownClosed: "pe-button--dropdown-closed",
      dropdownOpen: "pe-button--dropdown-open",
      extraWide: "pe-button--extra-wide",
      hasDropdown: "pe-button--dropdown",
      highLabel: "pe-button--high-label",
      inactive: "pe-button--inactive",
      raised: "pe-button--raised",
      selected: "pe-button--selected",
      separatorAtStart: "pe-button--separator-start",
      hasHover: "pe-button--has-hover"
    };

    function _defineProperty$3(obj, key, value) {
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

    function _extends$2() {
      _extends$2 = Object.assign || function (target) {
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

      return _extends$2.apply(this, arguments);
    }

    function _objectSpread$2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty$3(target, key, source[key]);
        });
      }

      return target;
    }

    var varFns$2 = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          userSelect: "none",
          "-moz-user-select": "none",
          outline: "none",
          padding: 0,
          textDecoration: "none",
          textAlign: "center",
          cursor: "pointer",
          ".pe-button--selected, &.pe-button--disabled, &.pe-button--inactive": {
            cursor: "default",
            pointerEvents: "none"
          },
          " .pe-button__content": {
            position: "relative",
            borderRadius: "inherit"
          },
          " .pe-button__label": {
            position: "relative",
            display: "block",
            borderRadius: "inherit",
            pointerEvents: "none"
          },
          " .pe-button__wash, .pe-button__wash-color": [mixin.fit(), {
            zIndex: 0,
            borderRadius: "inherit",
            pointerEvents: "none"
          }]
        }), {
          ".pe-button-row": {
            // prevent inline block style to add extra space:
            fontSize: 0,
            lineHeight: 0
          }
        }];
      },
      row_margin_h: function row_margin_h(selector, vars) {
        return [{
          ".pe-button-row": _defineProperty$3({
            margin: "0 -".concat(vars.row_margin_h, "px")
          }, " ".concat(selector), {
            margin: "0 ".concat(vars.row_margin_h, "px")
          })
        }];
      }
    };
    var superLayout = createLayout({
      varFns: varFns$2
    });

    var _border = function border(selector, vars, tint) {
      return sel(selector, {
        ":not(.pe-button--disabled)": {
          " .pe-button__content": {
            borderColor: vars["color_" + tint + "_border"]
          }
        }
      });
    };

    var generalFns$1 = {
      general_styles: function general_styles() {
        return [];
      }
    };
    /**
     * @param {tint} tint 
     */

    var tintFns$1 = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$3(_ref, "color_" + tint + "_text", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-button--disabled)": {
            "&, &:link, &:visited": {
              color: vars["color_" + tint + "_text"]
            }
          }
        })];
      }), _defineProperty$3(_ref, "color_" + tint + "_disabled_text", function (selector, vars) {
        return [sel(selector, {
          ".pe-button--disabled": {
            color: vars["color_" + tint + "_disabled_text"]
          }
        })];
      }), _defineProperty$3(_ref, "color_" + tint + "_background", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-button--disabled):not(.pe-button--selected)": {
            " .pe-button__content": {
              backgroundColor: vars["color_" + tint + "_background"]
            }
          }
        })];
      }), _defineProperty$3(_ref, "color_" + tint + "_active_background", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-button--disabled)": {
            ".pe-button--selected": {
              " .pe-button__content": {
                backgroundColor: vars["color_" + tint + "_active_background"]
              }
            }
          }
        })];
      }), _defineProperty$3(_ref, "color_" + tint + "_disabled_background", function (selector, vars) {
        return [sel(selector, {
          ".pe-button--disabled": {
            " .pe-button__content": {
              backgroundColor: vars["color_" + tint + "_disabled_background"]
            }
          }
        })];
      }), _defineProperty$3(_ref, "color_" + tint + "_wash_background", function (selector, vars) {
        return [sel(selector, {
          " .pe-button__wash-color": {
            backgroundColor: vars["color_" + tint + "_wash_background"]
          }
        })];
      }), _defineProperty$3(_ref, "color_" + tint + "_wash_opacity", function (selector, vars) {
        return [sel(selector, {
          " .pe-button__wash-color": {
            opacity: vars["color_" + tint + "_wash_opacity"]
          }
        })];
      }), _defineProperty$3(_ref, "color_" + tint + "_border", function (selector, vars) {
        return [_border("".concat(selector, ".pe-button--border"), vars, tint)];
      }), _defineProperty$3(_ref, "border", function border(selector, vars) {
        return [_border(selector, vars, tint)];
      }), _defineProperty$3(_ref, "color_" + tint + "_active_border", function (selector, vars) {
        return [sel(selector, {
          ".pe-button--border.pe-button--selected": {
            " .pe-button__content": {
              borderColor: vars["color_" + tint + "_active_border"]
            }
          }
        })];
      }), _defineProperty$3(_ref, "color_" + tint + "_disabled_border", function (selector, vars) {
        return [sel(selector, {
          ".pe-button--border.pe-button--disabled": {
            " .pe-button__content": {
              borderColor: vars["color_" + tint + "_disabled_border"]
            }
          }
        })];
      }), _defineProperty$3(_ref, "color_" + tint + "_icon", function (selector, vars) {
        return [sel(selector, {
          " .pe-button__dropdown": {
            color: vars["color_" + tint + "_icon"]
          }
        })];
      }), _defineProperty$3(_ref, "color_" + tint + "_separator", function (selector, vars) {
        return [sel(selector, {
          ".pe-button--separator-start": {
            " .pe-button__content": {
              borderColor: vars["color_" + tint + "_separator"]
            }
          }
        })];
      }), _ref;
    };
    /**
     * @param {tint} tint 
     */


    var hoverTintFns = function hoverTintFns(tint) {
      var _ref2;

      return _ref2 = {}, _defineProperty$3(_ref2, "color_" + tint + "_hover", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-button--disabled):not(.pe-button--selected)": {
            color: vars["color_" + tint + "_hover"]
          }
        })];
      }), _defineProperty$3(_ref2, "color_" + tint + "_hover_border", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-button--disabled):not(.pe-button--selected)": {
            " .pe-button__content": {
              borderColor: vars["color_" + tint + "_hover_border"]
            }
          }
        })];
      }), _defineProperty$3(_ref2, "color_" + tint + "_hover_background", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-button--disabled):not(.pe-button--selected)": {
            " .pe-button__content": {
              backgroundColor: vars["color_" + tint + "_hover_background"]
            }
          }
        })];
      }), _defineProperty$3(_ref2, "color_" + tint + "_hover_icon", function (selector, vars) {
        return [sel(selector, {
          " .pe-button__dropdown": {
            color: vars["color_" + tint + "_hover_icon"]
          }
        })];
      }), _ref2;
    };

    var lightTintFns$1 = _objectSpread$2({}, generalFns$1, tintFns$1("light"));

    var darkTintFns$1 = _objectSpread$2({}, generalFns$1, tintFns$1("dark"));

    var lightTintHoverFns = hoverTintFns("light");
    var darkTintHoverFns = hoverTintFns("dark");
    var superColor = createColor({
      varFns: {
        lightTintFns: lightTintFns$1,
        darkTintFns: darkTintFns$1,
        lightTintHoverFns: lightTintHoverFns,
        darkTintHoverFns: darkTintHoverFns
      }
    });

    /** 
     * @param {boolean} isRTL 
     */

    var alignSide = function alignSide(isRTL) {
      return function () {
        return {
          ".pe-button--separator-start .pe-button__content": {
            borderStyle: isRTL ? "none solid none none" : "none none none solid"
          }
        };
      };
    };

    var alignLeft = alignSide(false);
    var alignRight = alignSide(true);

    var line_height_label_padding_v = function line_height_label_padding_v(selector, vars) {
      return sel(selector, {
        " .pe-button__dropdown": {
          minHeight: "calc((1em * ".concat(vars.line_height, ") + 2 * ").concat(vars.label_padding_v, "px)")
        }
      });
    };

    var outer_padding_v_label_padding_v = function outer_padding_v_label_padding_v(selector, vars) {
      return sel(selector, {
        ".pe-button--high-label": {
          padding: 0,
          " .pe-button__label": {
            padding: vars.outer_padding_v + vars.label_padding_v + "px 0"
          }
        }
      });
    };

    var line_height_outer_padding_v_label_padding_v = function line_height_outer_padding_v_label_padding_v(selector, vars) {
      return sel(selector, {
        ".pe-button--high-label": {
          " .pe-button__label, .pe-button__dropdown": {
            minHeight: "calc((1em * ".concat(vars.line_height, ") + 2 * ").concat(vars.outer_padding_v + vars.label_padding_v, "px)")
          }
        }
      });
    };

    var border_radius_button_group = function border_radius_button_group(selector, vars, isRTL) {
      var _peButton__content, _peButton__content2;

      return sel(selector, {
        " .pe-button__content": {
          borderRadius: vars.border_radius + "px"
        },
        ":not(:first-child)": {
          " .pe-button__content": (_peButton__content = {}, _defineProperty$3(_peButton__content, isRTL ? "borderTopRightRadius" : "borderTopLeftRadius", 0), _defineProperty$3(_peButton__content, isRTL ? "borderBottomRightRadius" : "borderBottomLeftRadius", 0), _peButton__content)
        },
        ":not(:last-child)": {
          " .pe-button__content": (_peButton__content2 = {}, _defineProperty$3(_peButton__content2, isRTL ? "borderTopLeftRadius" : "borderTopRightRadius", 0), _defineProperty$3(_peButton__content2, isRTL ? "borderBottomLeftRadius" : "borderBottomRightRadius", 0), _peButton__content2)
        }
      });
    };

    var _border$1 = function border(selector) {
      return sel(selector, {
        " .pe-button__wash, .pe-ripple": mixin.fit(-1),
        " .pe-button__content": {
          borderStyle: "solid"
        }
      });
    };

    var _border_width = function border_width(selector, vars) {
      return sel(selector, {
        " .pe-button__content": {
          borderWidth: vars.border_width + "px"
        },
        " .pe-button-group & + &": {
          marginLeft: -vars.border_width + "px"
        }
      });
    };

    var _contained = function contained(selector) {
      return sel(selector, {//
      });
    };

    var varFns$1$1 = _objectSpread$2({
      general_styles: function general_styles(selector) {
        return [sel(selector, [alignLeft(), {
          display: "inline-block",
          background: "transparent",
          border: "none",
          " .pe-button__content": {
            position: "relative",
            borderWidth: "1px",
            // default
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 0,
            paddingBottom: 0
          },
          ".pe-button--border": _border$1(selector),
          // TODO: move wash styles to base button
          " .pe-button__wash": {
            opacity: 0
          },
          // Always show wash on focus but not on click
          "&:focus:not(:active) .pe-button__wash": {
            opacity: 1
          },
          // Only show wash on hover when "has hover" class set
          ".pe-button--has-hover:hover": {
            " .pe-button__wash": {
              opacity: 1
            }
          },
          " .pe-button__label, .pe-button__dropdown": {
            whiteSpace: "pre",
            userSelect: "none",
            "-moz-user-select": "none"
          },
          " .pe-button__text-label": {
            display: "inline-block",
            lineHeight: 1
          },
          ".pe-button--dropdown": {
            minWidth: "0",
            // IE 11 does not recognize "initial" here
            " .pe-button__dropdown": {
              position: "relative"
            },
            " .pe-svg": {
              position: "absolute",
              left: 0,
              top: "50%"
            },
            " .pe-button__label + .pe-button__dropdown": {
              marginLeft: "6px",
              minWidth: 0
            }
          },
          " .pe-button-group &": {
            minWidth: 0
          },
          " .pe-button__dropdown .pe-svg": mixin.defaultTransition("transform"),
          ".pe-button--dropdown-open": {
            " .pe-button__dropdown .pe-svg": {
              transform: "rotate(-180deg)"
            }
          }
        }]), [sel(selectorRTL(selector), alignRight())]];
      },
      border_radius: function border_radius(selector, vars) {
        return [sel(selector, {
          " .pe-button__content": {
            borderRadius: vars.border_radius + "px"
          }
        }), border_radius_button_group(".pe-button-group ".concat(selector), vars, false), border_radius_button_group(selectorRTL(".pe-button-group ".concat(selector)), vars, true)];
      },
      border_width: function border_width(selector, vars) {
        return [_border_width(selector, vars)];
      },
      min_width: function min_width(selector, vars) {
        return [sel(selector, {
          minWidth: vars.min_width + "px"
        })];
      },
      animation_duration: function animation_duration(selector, vars) {
        return [sel(selector, {
          " .pe-button__content, .pe-button__wash": [mixin.defaultTransition("all", vars.animation_duration)]
        })];
      },
      padding_h: function padding_h(selector, vars) {
        return [sel(selector, {
          " .pe-button__content": {
            paddingLeft: vars.padding_h + "px",
            paddingRight: vars.padding_h + "px",
            " .pe-button__dropdown": {
              minWidth: "calc(36px - 2 * ".concat(vars.padding_h, "px)")
            },
            ".pe-button--dropdown": {
              " .pe-button__label + .pe-button__dropdown": {
                marginRight: "calc(7px - ".concat(vars.padding_h, "px)")
              }
            }
          }
        })];
      },
      padding_h_extra_wide: function padding_h_extra_wide(selector, vars) {
        return [sel(selector, {
          ".pe-button--extra-wide .pe-button__content": {
            padding: "0 " + vars.padding_h_extra_wide + "px"
          }
        })];
      },
      label_padding_v: function label_padding_v(selector, vars) {
        return [sel(selector, {
          " .pe-button__label": {
            padding: vars.label_padding_v + "px 0"
          },
          ".pe-button--border": {
            " .pe-button__label": {
              padding: vars.label_padding_v - 1 + "px 0"
            }
          }
        }), vars.line_height !== undefined && line_height_label_padding_v(selector, vars), vars.outer_padding_v !== undefined && outer_padding_v_label_padding_v(selector, vars), vars.line_height !== undefined && vars.outer_padding_v !== undefined && vars.label_padding_v !== undefined && line_height_outer_padding_v_label_padding_v(selector, vars)];
      },
      font_weight: function font_weight(selector, vars) {
        return [sel(selector, {
          " .pe-button__label": {
            fontWeight: vars.font_weight
          }
        })];
      },
      text_transform: function text_transform(selector, vars) {
        return [sel(selector, {
          " .pe-button__label": {
            textTransform: vars.text_transform
          }
        })];
      },
      font_size: function font_size(selector, vars) {
        return [sel(selector, {
          " .pe-button__label, .pe-button__dropdown": {
            fontSize: vars.font_size + "px"
          }
        })];
      },
      line_height: function line_height(selector, vars) {
        return [sel(selector, {
          " .pe-button__label, .pe-button__dropdown": {
            lineHeight: vars.line_height
          }
        }), vars.label_padding_v !== undefined && line_height_label_padding_v(selector, vars), vars.outer_padding_v !== undefined && vars.label_padding_v !== undefined && line_height_outer_padding_v_label_padding_v(selector, vars)];
      },
      dropdown_icon_size: function dropdown_icon_size(selector, vars) {
        return [sel(selector, {
          ".pe-button--dropdown": {
            " .pe-button__dropdown": {
              width: vars.dropdown_icon_size + "px"
            },
            " .pe-svg": {
              width: vars.dropdown_icon_size + "px",
              height: vars.dropdown_icon_size + "px",
              marginTop: -vars.dropdown_icon_size / 2 + "px"
            }
          }
        })];
      },
      outer_padding_v: function outer_padding_v(selector, vars) {
        return [sel(selector, {
          padding: vars.outer_padding_v + "px 0",
          ".pe-button--high-label": {
            padding: 0
          }
        }), vars.label_padding_v !== undefined && outer_padding_v_label_padding_v(selector, vars), vars.line_height !== undefined && vars.outer_padding_v !== undefined && vars.label_padding_v !== undefined && line_height_outer_padding_v_label_padding_v(selector, vars)];
      },
      separator_width: function separator_width(selector, vars) {
        return [sel(selector, {
          ".pe-button--separator-start": {
            " .pe-button__content": {
              borderWidth: vars.separator_width + "px"
            }
          }
        })];
      },
      letter_spacing: function letter_spacing(selector, vars) {
        return [sel(selector, {
          letterSpacing: vars.letter_spacing + "px"
        })];
      },
      // Theme vars
      border: function border(selector, vars) {
        return vars.border && _border$1(selector);
      },
      contained: function contained(selector, vars) {
        return vars.contained && _contained(selector);
      }
    }, sharedVarFns);

    var superLayout$1 = createLayout({
      varFns: varFns$1$1
    });

    var touch_height = vars.unit_touch_height; // 48

    var height = 36;
    var border_width = 1;

    var themeVars = _extends$2({}, {
      border: false,
      contained: false
    }, sharedVars);

    var borderVars = {
      border_width: border_width,
      color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_medium),
      // only specify this variable to get all 4 states
      // color_light_hover_border:             "transparent",
      // color_light_active_border:            "transparent",
      color_light_disabled_border: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
      //
      color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_medium),
      // only specify this variable to get all 4 states
      // color_dark_hover_border:              "transparent",
      // color_dark_active_border:             "transparent",
      color_dark_disabled_border: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled)
    };
    /**
     * @type {TextButtonVars} textButtonVars
     */

    var textButtonVars = _objectSpread$2({
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      animation_duration: vars.animation_duration,
      border_radius: vars.unit_item_border_radius,
      dropdown_icon_size: 24,
      font_size: 14,
      font_weight: 500,
      label_padding_v: 11,
      letter_spacing: 0.75,
      line_height: 1,
      min_width: 8 * vars.grid_unit_component,
      outer_padding_v: (touch_height - height) / 2,
      // (48 - 36) / 2 = 6
      padding_h: 2 * vars.grid_unit,
      // 8
      padding_h_extra_wide: 6 * vars.grid_unit,
      // 24
      row_margin_h: vars.grid_unit,
      separator_width: border_width,
      text_transform: "uppercase",
      color_light_background: "transparent",
      color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
      color_light_wash_background: "currentColor",
      color_light_wash_opacity: 0.1,
      color_light_active_background: rgba(vars.color_light_foreground, vars.blend_light_background_active),
      color_light_disabled_background: "transparent",
      color_light_disabled_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
      color_light_icon: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
      color_light_separator: rgba(vars.color_light_foreground, vars.blend_light_border_light),
      color_dark_background: "transparent",
      color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
      color_dark_wash_background: "currentColor",
      color_dark_wash_opacity: 0.1,
      color_dark_active_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_active),
      color_dark_disabled_background: "transparent",
      color_dark_disabled_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
      color_dark_icon: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
      color_dark_separator: rgba(vars.color_dark_foreground, vars.blend_dark_border_light)
    }, borderVars, themeVars);

    var themeVars$1 = _objectSpread$2({
      border: false,
      contained: true
    }, sharedVars);
    /**
     * @type {ContainedButtonVars} containedButtonVars
     */

    var containedButtonVars = _objectSpread$2({
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      padding_h: 4 * vars.grid_unit,
      // 16
      color_light_background: "#fff",
      color_light_disabled_background: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
      color_dark_active_background: rgba(vars.color_primary_dark),
      color_dark_background: rgba(vars.color_primary),
      color_dark_disabled_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_disabled)
    }, themeVars$1);

    // @ts-check
    var fns$2 = [superLayout$1, superColor];
    var superFns = [superLayout];
    var superSelector = ".".concat(classes$2["super"]);
    var selector$2 = ".".concat(classes$2.component);
    /**
     * @param {string} customSelector 
     * @param {object} [customVars]
     * @param {object} [scoping]
     * @param {string} [scoping.mediaQuery]
     * @param {string} [scoping.scope]
     */

    var addStyle$2 = function addStyle(customSelector, customVars) {
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref$mediaQuery = _ref.mediaQuery,
          mediaQuery = _ref$mediaQuery === void 0 ? "" : _ref$mediaQuery,
          _ref$scope = _ref.scope,
          scope = _ref$scope === void 0 ? "" : _ref$scope;

      var finalVars = customVars && customVars.contained ? containedButtonVars : textButtonVars;
      customSelector && styler.addStyle({
        selectors: [superSelector, customSelector],
        fns: superFns,
        vars: finalVars,
        customVars: customVars,
        mediaQuery: mediaQuery,
        scope: scope
      });
      customSelector && styler.addStyle({
        selectors: [selector$2, customSelector],
        fns: fns$2,
        vars: finalVars,
        customVars: customVars,
        mediaQuery: mediaQuery,
        scope: scope
      });
    };

    var addGeneralStyleToHead$2 = function addGeneralStyleToHead() {
      styler.addStyle({
        selectors: [superSelector],
        fns: superFns,
        vars: textButtonVars
      });
      styler.addStyle({
        selectors: [selector$2],
        fns: fns$2,
        vars: textButtonVars
      });
    };

    // @ts-check
    var color$1 = createColor({
      superColor: superColor
    });

    // @ts-check
    var layout$3 = createLayout({
      superLayout: superLayout$1
    });

    // @ts-check
    var fns$1$1 = [layout$3, color$1];
    var selectors = [classes$2.component, classes$2.contained].join(" ");
    var selector$1$1 = ".".concat(selectors.split(/\s/).join("."));

    var addGeneralStyleToHead$1$1 = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$1$1],
        fns: fns$1$1,
        vars: containedButtonVars
      });
    };

    // @ts-check
    /**
     * @param {string} customSelector 
     * @param {object} [customVars]
     * @param {object} [scoping]
     * @param {string} [scoping.mediaQuery]
     * @param {string} [scoping.scope]
     */

    var addStyle$2$1 = function addStyle$1(customSelector, customVars) {
      var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          _ref$mediaQuery = _ref.mediaQuery,
          mediaQuery = _ref$mediaQuery === void 0 ? "" : _ref$mediaQuery,
          _ref$scope = _ref.scope,
          scope = _ref$scope === void 0 ? "" : _ref$scope;

      addStyle$2(customSelector, customVars, {
        mediaQuery: mediaQuery,
        scope: scope
      });
    };

    var textButtonVars$1 = textButtonVars;

    var addGeneralStyleToHead$2$1 = function addGeneralStyleToHead$2$1() {
      addGeneralStyleToHead$1$1();
      addGeneralStyleToHead$2();
    };

    var classes$3 = {
      component: "pe-button-group"
    };

    // @ts-check
    var varFns$3 = {
      /**
       * @param {string} selector
       */
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          display: "flex"
        })];
      }
    };
    var layout$4 = createLayout({
      varFns: varFns$3
    });

    // @ts-check

    /**
     * @typedef {import("../index").ButtonGroupVars} ButtonGroupVars
     */

    /**
     * @type {ButtonGroupVars} buttonGroupVars
     */
    var buttonGroupVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true
    };

    // @ts-check
    var fns$3 = [layout$4];
    var selector$3 = ".".concat(classes$3.component);

    var addGeneralStyleToHead$3 = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$3],
        fns: fns$3,
        vars: buttonGroupVars
      });
    };

    var classes$4 = {
      component: "pe-card",
      // elements
      actions: "pe-card__actions",
      any: "pe-card__any",
      content: "pe-card__content",
      header: "pe-card__header",
      headerTitle: "pe-card__header-title",
      media: "pe-card__media",
      mediaDimmer: "pe-card__media__dimmer",
      overlay: "pe-card__overlay",
      overlayContent: "pe-card__overlay__content",
      primary: "pe-card__primary",
      primaryMedia: "pe-card__primary-media",
      subtitle: "pe-card__subtitle",
      text: "pe-card__text",
      title: "pe-card__title",
      // states
      actionsBorder: "pe-card__actions--border",
      actionsHorizontal: "pe-card__actions--horizontal",
      actionsJustified: "pe-card__actions--justified",
      actionsTight: "pe-card__actions--tight",
      actionsVertical: "pe-card__actions--vertical",
      mediaCropX: "pe-card__media--crop-x",
      mediaCropY: "pe-card__media--crop-y",
      mediaOriginStart: "pe-card__media--origin-start",
      mediaOriginCenter: "pe-card__media--origin-center",
      mediaOriginEnd: "pe-card__media--origin-end",
      mediaLarge: "pe-card__media--large",
      mediaMedium: "pe-card__media--medium",
      mediaRatioLandscape: "pe-card__media--landscape",
      mediaRatioSquare: "pe-card__media--square",
      mediaRegular: "pe-card__media--regular",
      mediaSmall: "pe-card__media--small",
      overlaySheet: "pe-card__overlay--sheet",
      primaryHasMedia: "pe-card__primary--media",
      primaryTight: "pe-card__primary--tight",
      textTight: "pe-card__text--tight"
    };

    function _defineProperty$4(obj, key, value) {
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

    function _extends$3() {
      _extends$3 = Object.assign || function (target) {
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

      return _extends$3.apply(this, arguments);
    }

    var generalFns$2 = {
      general_styles: function general_styles(selector) {
        return [];
      } // eslint-disable-line no-unused-vars

    };

    var tintFns$2 = function tintFns(tint) {
      return _defineProperty$4({}, "color_" + tint + "_main_background", function (selector, vars) {
        return [sel(selector, {
          backgroundColor: vars["color_" + tint + "_main_background"]
        })];
      });
    };

    var lightTintFns$2 = _extends$3({}, generalFns$2, tintFns$2("light"));

    var darkTintFns$2 = _extends$3({}, generalFns$2, tintFns$2("dark"));

    var color$2 = createColor({
      varFns: {
        lightTintFns: lightTintFns$2,
        darkTintFns: darkTintFns$2
      }
    });

    var generalFns$1$1 = {
      general_styles: function general_styles(selector) {
        return [];
      } // eslint-disable-line no-unused-vars

    };

    var tintFns$1$1 = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$4(_ref, "color_" + tint + "_title_text", function (selector, vars) {
        return [sel(selector, {
          " .pe-card__title": {
            color: vars["color_" + tint + "_title_text"]
          }
        })];
      }), _defineProperty$4(_ref, "color_" + tint + "_subtitle_text", function (selector, vars) {
        return [sel(selector, {
          " .pe-card__subtitle": {
            color: vars["color_" + tint + "_subtitle_text"]
          }
        })];
      }), _defineProperty$4(_ref, "color_" + tint + "_text", function (selector, vars) {
        return [sel(selector, {
          " .pe-card__text": {
            color: vars["color_" + tint + "_text"]
          }
        })];
      }), _defineProperty$4(_ref, "color_" + tint + "_actions_border", function (selector, vars) {
        return [sel(selector, {
          " .pe-card__actions--border": {
            borderTop: "1px solid " + vars["color_" + tint + "_actions_border"]
          }
        })];
      }), _ref;
    };

    var lightTintFns$1$1 = _extends$3({}, generalFns$1$1, tintFns$1$1("light"));

    var darkTintFns$1$1 = _extends$3({}, generalFns$1$1, tintFns$1$1("dark"));

    var contentColor = createColor({
      varFns: {
        lightTintFns: lightTintFns$1$1,
        darkTintFns: darkTintFns$1$1
      }
    });

    /** 
     * @param {boolean} isRTL 
     */

    var alignSide$1 = function alignSide(isRTL) {
      return (// eslint-disable-line no-unused-vars

        /**
         * @param {string} [selector]
         * @param {object} [vars]
         */
        function (selector, vars) {
          return {};
        }
      );
    }; // eslint-disable-line no-unused-vars


    var alignLeft$1 = alignSide$1();
    var alignRight$1 = alignSide$1();

    var tight_title_padding_bottom_subtitle_line_height_padding_bottom = function tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars) {
      return sel(selector, {
        " .pe-card__primary": {
          ".pe-card__primary--tight": {
            " .pe-card__title": {
              paddingBottom: vars.tight_title_padding_bottom - vars.subtitle_line_height_padding_bottom + "px"
            }
          }
        }
      });
    };

    var title_padding_v_title_padding_h_subtitle_line_height_padding_bottom = function title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars) {
      return sel(selector, {
        " .pe-card__title": {
          padding: [vars.title_padding_v, vars.title_padding_h, vars.title_padding_v - vars.subtitle_line_height_padding_bottom, vars.title_padding_h].map(function (v) {
            return v + "px";
          }).join(" ")
        }
      });
    };

    var text_padding_v_text_line_height_padding_top = function text_padding_v_text_line_height_padding_top(selector, vars) {
      return sel(selector, {
        " .pe-card__text": {
          paddingTop: vars.text_padding_v - vars.text_line_height_padding_top + "px"
        }
      });
    };

    var text_padding_bottom_text_line_height_padding_bottom = function text_padding_bottom_text_line_height_padding_bottom(selector, vars) {
      return sel(selector, {
        " .pe-card__text": {
          "&:last-child": {
            paddingBottom: vars.text_padding_bottom - vars.text_line_height_padding_bottom + "px"
          }
        }
      });
    };

    var tight_text_padding_bottom_text_line_height_padding_bottom = function tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars) {
      return sel(selector, {
        " .pe-card__text": {
          paddingBottom: vars.tight_text_padding_bottom - vars.text_line_height_padding_bottom + "px",
          ".pe-card__text--tight, &.pe-card__text--tight:last-child": {
            paddingBottom: vars.tight_text_padding_bottom - vars.text_line_height_padding_bottom + "px"
          }
        }
      });
    };

    var varFns$4 = {
      general_styles: function general_styles(selector, vars$1) {
        return [sel(selector, [alignLeft$1(vars$1), {
          display: "block",
          position: "relative",
          "&, a:link, a:visited": {
            textDecoration: "none"
          },
          // Content
          " .pe-card__content": {
            position: "relative",
            borderRadius: "inherit",
            overflow: "hidden",
            width: "inherit",
            height: "inherit"
          },
          // Media
          " .pe-card__media": {
            position: "relative",
            overflow: "hidden",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            ".pe-card__media--landscape": {
              paddingBottom: 100 / 16 * 9 + "%"
            },
            ".pe-card__media--square": {
              paddingBottom: "100%"
            },
            ".pe-card__media--crop-x": {
              width: "100%",
              height: "auto",
              display: "block",
              ".pe-card__media--origin-start": {
                backgroundPositionY: "top"
              },
              ".pe-card__media--origin-end": {
                backgroundPositionY: "bottom"
              }
            },
            ".pe-card__media--crop-y": {
              height: "100%",
              width: "auto",
              display: "block",
              ".pe-card__media--origin-start": {
                backgroundPositionX: "left"
              },
              ".pe-card__media--origin-end": {
                backgroundPositionX: "right"
              }
            },
            " img, iframe": [mixin.fit(), {
              width: "100%",
              height: "100%",
              maxWidth: "none"
            }],
            " img": {
              opacity: 0
              /* allows right-click on image */

            },
            " .pe-card__header + .pe-card__media": {
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0
            }
          },
          " .pe-card__primary-media": {
            margin: "16px"
          },
          // Overlay
          " .pe-card__overlay": mixin.fit(),
          // Dimmer
          " .pe-card__media__dimmer": [mixin.fit(), {
            zIndex: 1,
            pointerEvents: "all"
          }],
          " .pe-card__overlay__content": {
            position: "absolute",
            bottom: 0,
            top: "auto",
            right: 0,
            left: 0,
            zIndex: 2
          },
          // Header
          " .pe-card__header": {
            " .pe-list-tile__title": {
              fontSize: "14px",
              fontWeight: vars.font_weight_normal,
              lineHeight: "20px",
              marginTop: "2px"
            },
            " .pe-list-tile__subtitle": {
              marginTop: "-1px"
            }
          },
          // Primary 
          " .pe-card__primary": [flex$1.layoutHorizontal, {
            position: "relative",
            "& + .pe-card__text": {
              marginTop: "-16px"
            }
          }],
          // Title
          " .pe-card__title": [flex$1.flex(), {
            fontSize: "24px",
            lineHeight: "29px"
          }],
          // Subtitle
          " .pe-card__subtitle": {
            fontSize: "14px",
            lineHeight: "24px"
          },
          // Actions
          " .pe-card__actions": {
            ".pe-card__actions--tight": {
              minHeight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              ".pe-card__actions--vertical": {
                paddingLeft: 0,
                paddingRight: 0
              }
            },
            ".pe-card__actions--horizontal": {
              minHeight: 36 + 2 * 8 + "px",
              height: 36 + 2 * 8 + "px" // make align-items work on IE 11: https://github.com/philipwalton/flexbugs/issues/231

            },
            ".pe-card__actions--horizontal:not(.pe-card__actions--justified)": [flex$1.layoutHorizontal, flex$1.layoutCenter, {
              " .pe-button": {
                minWidth: 0
              }
            }],
            ".pe-card__actions--justified": [flex$1.layoutJustified],
            ".pe-card__actions--vertical": [flex$1.layoutVertical, {
              // nested
              " .pe-card__actions": [{
                minHeight: 0
              }],
              " .pe-button": {
                height: "36px",
                padding: 0
              },
              " .pe-list": {
                padding: 0
              }
            }]
          },
          " .pe-card__primary.pe-card__primary--media + .pe-card__actions": {
            marginTop: "-16px"
          },
          // Text
          " .pe-card__text": {
            fontSize: "14px",
            lineHeight: "24px",
            " .pe-card__actions + &": {
              marginTop: "8px"
            }
          },
          " .pe-card__text, .pe-card__primary": {
            "& + .pe-card__actions:not(:last-child)": {
              // Lift up so that full button area is usable
              position: "relative",
              zIndex: 1
            }
          }
        }, {
          // RTL
          "*[dir=rtl], .pe-rtl ": _defineProperty$4({}, selector, alignRight$1(vars$1))
        }])];
      },
      border_radius: function border_radius(selector, vars) {
        return [sel(selector, {
          borderRadius: vars.border_radius + "px",
          " .pe-card__content .pe-card__media": {
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          },
          " .pe-card__content .pe-card__media:not(.pe-card__media--square):not(.pe-card__media--landscape)": {
            ":first-child": {
              borderTopLeftRadius: vars.border_radius + "px",
              borderTopRightRadius: vars.border_radius + "px"
            },
            ":last-child": {
              borderBottomLeftRadius: vars.border_radius + "px",
              borderBottomRightRadius: vars.border_radius + "px"
            }
          }
        })];
      },
      image_size_small: function image_size_small(selector, vars) {
        return [sel(selector, {
          " .pe-card__primary-media": {
            " .pe-card__media--small": {
              width: vars.image_size_small + "px",
              height: vars.image_size_small + "px"
            }
          }
        })];
      },
      image_size_regular: function image_size_regular(selector, vars) {
        return [sel(selector, {
          " .pe-card__primary-media": {
            " .pe-card__media--regular": {
              width: vars.image_size_regular + "px"
            }
          }
        })];
      },
      image_size_medium: function image_size_medium(selector, vars) {
        return [sel(selector, {
          " .pe-card__primary-media": {
            " .pe-card__media--medium": {
              width: vars.image_size_medium + "px"
            }
          }
        })];
      },
      image_size_large: function image_size_large(selector, vars) {
        return [sel(selector, {
          " .pe-card__primary-media": {
            " .pe-card__media--large": {
              width: vars.image_size_large + "px"
            }
          }
        })];
      },
      one_line_height_with_icon: function one_line_height_with_icon(selector, vars) {
        return [sel(selector, {
          " .pe-card__header": {
            height: vars.one_line_height_with_icon + "px"
          }
        })];
      },
      tight_title_padding_bottom: function tight_title_padding_bottom(selector, vars) {
        return [sel(selector, {}), tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars)];
      },
      subtitle_line_height_padding_bottom: function subtitle_line_height_padding_bottom(selector, vars) {
        return [sel(selector, {}), tight_title_padding_bottom_subtitle_line_height_padding_bottom(selector, vars), title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars)];
      },
      title_padding_v: function title_padding_v(selector, vars) {
        return [sel(selector, {}), title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars)];
      },
      title_padding_h: function title_padding_h(selector, vars) {
        return [sel(selector, {}), title_padding_v_title_padding_h_subtitle_line_height_padding_bottom(selector, vars)];
      },
      actions_button_margin_h: function actions_button_margin_h(selector, vars) {
        return [sel(selector, {
          " .pe-card__actions.pe-card__actions--horizontal": {
            margin: "0 -".concat(vars.actions_button_margin_h, "px"),
            " .pe-button": {
              margin: "0 ".concat(vars.actions_button_margin_h, "px")
            }
          }
        })];
      },
      actions_padding_v: function actions_padding_v(selector, vars) {
        return [sel(selector, {
          " .pe-card__actions": {
            paddingTop: vars.actions_padding_v + "px",
            paddingBottom: vars.actions_padding_v + "px"
          }
        })];
      },
      actions_padding_h: function actions_padding_h(selector, vars) {
        return [sel(selector, {
          " .pe-card__actions": {
            paddingRight: vars.actions_padding_h + "px",
            paddingLeft: vars.actions_padding_h + "px"
          }
        })];
      },
      actions_button_margin_v: function actions_button_margin_v(selector, vars) {
        return [sel(selector, {
          " .pe-card__actions": {
            ".pe-card__actions--vertical": {
              " .pe-button": {
                marginTop: vars.actions_button_margin_v + "px",
                marginBottom: vars.actions_button_margin_v + "px"
              }
            }
          }
        })];
      },
      actions_vertical_padding_v: function actions_vertical_padding_v(selector, vars) {
        return [sel(selector, {
          " .pe-card__actions": {
            ".pe-card__actions--vertical": {
              ":not(.pe-card__actions--tight)": {
                paddingTop: vars.actions_vertical_padding_v + "px",
                paddingBottom: vars.actions_vertical_padding_v + "px"
              },
              // nested
              " .pe-card__actions": [{
                "&:first-child": {
                  marginTop: -vars.actions_vertical_padding_v + "px"
                },
                "&:last-child": {
                  marginBottom: -vars.actions_vertical_padding_v + "px"
                }
              }]
            }
          }
        })];
      },
      offset_small_padding_v: function offset_small_padding_v(selector, vars) {
        return [sel(selector, {
          " .pe-card__text, .pe-card__primary": {
            "& + .pe-card__actions:not(:last-child)": {
              marginTop: -(vars.offset_small_padding_v + 3) + "px"
            }
          }
        })];
      },
      text_padding_h: function text_padding_h(selector, vars) {
        return [sel(selector, {
          " .pe-card__text": {
            paddingRight: vars.text_padding_h + "px",
            paddingLeft: vars.text_padding_h + "px"
          }
        })];
      },
      text_padding_v: function text_padding_v(selector, vars) {
        return [sel(selector, {}), text_padding_v_text_line_height_padding_top(selector, vars)];
      },
      text_line_height_padding_top: function text_line_height_padding_top(selector, vars) {
        return [sel(selector, {}), text_padding_v_text_line_height_padding_top(selector, vars)];
      },
      text_padding_bottom: function text_padding_bottom(selector, vars) {
        return [sel(selector, {}), text_padding_bottom_text_line_height_padding_bottom(selector, vars)];
      },
      tight_text_padding_bottom: function tight_text_padding_bottom(selector, vars) {
        return [sel(selector, {}), tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars)];
      },
      text_line_height_padding_bottom: function text_line_height_padding_bottom(selector, vars) {
        return [sel(selector, {}), text_padding_bottom_text_line_height_padding_bottom(selector, vars), tight_text_padding_bottom_text_line_height_padding_bottom(selector, vars)];
      }
    };
    var layout$5 = createLayout({
      varFns: varFns$4
    });

    var generalFns$2$1 = {
      general_styles: function general_styles(selector) {
        return [];
      } // eslint-disable-line no-unused-vars

    };

    var tintFns$2$1 = function tintFns(tint) {
      return _defineProperty$4({}, "color_" + tint + "_overlay_background", function (selector, vars) {
        return [sel(selector, {
          " .pe-card__overlay__content": {
            backgroundColor: vars["color_" + tint + "_overlay_background"]
          }
        })];
      });
    };

    var lightTintFns$2$1 = _extends$3({}, generalFns$2$1, tintFns$2$1("light"));

    var darkTintFns$2$1 = _extends$3({}, generalFns$2$1, tintFns$2$1("dark"));

    var overlayColor = createColor({
      varFns: {
        lightTintFns: lightTintFns$2$1,
        darkTintFns: darkTintFns$2$1
      }
    });

    // @ts-check
    var padding_v = 24;
    var padding_actions_v = 8;
    var actions_button_margin_v = 2;
    /**
     * @type {CardVars} cardVars
     */

    var cardVars = {
      general_styles: true,
      actions_button_margin_h: vars.grid_unit,
      actions_button_margin_v: actions_button_margin_v,
      actions_padding_h: 8,
      actions_padding_v: 0,
      actions_vertical_padding_v: padding_actions_v - actions_button_margin_v,
      border_radius: vars.unit_block_border_radius,
      icon_element_width: 72 - 4,
      image_size_large: 3 * 80,
      image_size_medium: 2 * 80,
      image_size_regular: 1.4 * 80,
      image_size_small: 1 * 80,
      offset_small_padding_v: padding_v - 16,
      one_line_height_with_icon: 72,
      one_line_padding_v: 8,
      padding_h: 16,
      subtitle_line_height_padding_bottom: 7,
      text_line_height_padding_bottom: 7,
      text_line_height_padding_top: 6,
      text_padding_bottom: 24,
      text_padding_h: 16,
      text_padding_v: 16,
      tight_text_padding_bottom: 16,
      tight_title_padding_bottom: 16,
      title_padding_h: 16,
      title_padding_v: 24,
      color_light_main_background: rgba(vars.color_light_background),
      color_light_title_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
      color_light_subtitle_text: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
      color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_regular),
      color_light_actions_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
      color_light_overlay_background: rgba(vars.color_light_background, vars.blend_light_overlay_background),
      color_dark_main_background: rgba(vars.color_dark_background),
      color_dark_title_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
      color_dark_subtitle_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
      color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_regular),
      color_dark_actions_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
      color_dark_overlay_background: rgba(vars.color_dark_background, vars.blend_dark_overlay_background)
    };

    // @ts-check
    var selector$4 = ".".concat(classes$4.component);
    var contentSelector = ".".concat(classes$4.content);
    var overlaySheetSelector = ".".concat(classes$4.overlaySheet);
    var overlayContentSelector = ".".concat(classes$4.overlayContent);
    var baseFns = [layout$5, color$2];
    var overlayColorFns = [overlayColor];
    var contentColorFns = [contentColor];

    var addGeneralStyleToHead$4 = function addGeneralStyleToHead() {
      styler.addStyle({
        selectors: [selector$4],
        fns: baseFns,
        vars: cardVars
      });
      styler.addStyle({
        selectors: [overlaySheetSelector],
        fns: overlayColorFns,
        vars: cardVars
      });
      styler.addStyle({
        selectors: [contentSelector],
        fns: contentColorFns,
        vars: cardVars
      });
      styler.addStyle({
        selectors: [overlayContentSelector],
        fns: contentColorFns,
        vars: cardVars
      });
    };

    var classes$5 = {
      component: "pe-control",
      // elements
      formLabel: "pe-control__form-label",
      input: "pe-control__input",
      label: "pe-control__label",
      // states
      disabled: "pe-control--disabled",
      inactive: "pe-control--inactive",
      large: "pe-control--large",
      medium: "pe-control--medium",
      off: "pe-control--off",
      on: "pe-control--on",
      regular: "pe-control--regular",
      small: "pe-control--small",
      // control view elements
      box: "pe-control__box",
      button: "pe-control__button",
      // control view states
      buttonOff: "pe-control__button--off",
      buttonOn: "pe-control__button--on"
    };

    function _defineProperty$5(obj, key, value) {
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

    function _extends$4() {
      _extends$4 = Object.assign || function (target) {
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

      return _extends$4.apply(this, arguments);
    }

    var generalFns$3 = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          " .pe-control__box": {
            " .pe-control__button": {
              color: "inherit"
            },
            " .pe-control__button--on": {
              color: "inherit"
            }
          }
        })];
      }
    };

    var tintFns$3 = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$5(_ref, "color_" + tint + "_on", function (selector, vars) {
        return [sel(selector, {
          color: vars["color_" + tint + "_on"] // override by specifying "color"

        })];
      }), _defineProperty$5(_ref, "color_" + tint + "_off", function (selector, vars) {
        return [sel(selector, {
          " .pe-control__button--off": {
            color: vars["color_" + tint + "_off"]
          }
        })];
      }), _defineProperty$5(_ref, "color_" + tint + "_disabled", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--disabled": {
            " .pe-control__label": {
              color: vars["color_" + tint + "_disabled"]
            },
            " .pe-control__box": {
              " .pe-control__button--on, .pe-control__button--off": {
                color: vars["color_" + tint + "_disabled"]
              }
            }
          }
        })];
      }), _defineProperty$5(_ref, "color_" + tint + "_label", function (selector, vars) {
        return [sel(selector, {
          " .pe-control__label": {
            color: vars["color_" + tint + "_label"]
          }
        })];
      }), _defineProperty$5(_ref, "color_" + tint + "_on_icon", function (selector, vars) {
        return [sel(selector, {
          " .pe-control__box": {
            " .pe-control__button--on": {
              color: vars["color_" + tint + "_on_icon"]
            }
          }
        })];
      }), _defineProperty$5(_ref, "color_" + tint + "_off_icon", function (selector, vars) {
        return [sel(selector, {
          " .pe-control__box": {
            " .pe-control__button--off": {
              color: vars["color_" + tint + "_off_icon"]
            }
          }
        })];
      }), _defineProperty$5(_ref, "color_" + tint + "_on_label", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--on": {
            " .pe-control__label": {
              color: vars["color_" + tint + "_on_label"]
            }
          }
        })];
      }), _defineProperty$5(_ref, "color_" + tint + "_off_label", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--off": {
            " .pe-control__label": {
              color: vars["color_" + tint + "_off_label"]
            }
          }
        })];
      }), _ref;
    };

    var lightTintFns$3 = _extends$4({}, generalFns$3, tintFns$3("light"));

    var darkTintFns$3 = _extends$4({}, generalFns$3, tintFns$3("dark"));

    var color$3 = createColor({
      varFns: {
        lightTintFns: lightTintFns$3,
        darkTintFns: darkTintFns$3
      }
    });

    var alignSide$2 = function alignSide(isRTL) {
      return function (vars) {
        return {};
      };
    }; // eslint-disable-line no-unused-vars


    var alignLeft$2 = alignSide$2();
    var alignRight$2 = alignSide$2();

    var makeSize = function makeSize(vars$1, height) {
      var iconSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : vars.unit_icon_size;
      var labelSize = iconSize + vars$1.label_height;
      var iconOffset = (labelSize - iconSize) / 2;
      return {
        " .pe-control__form-label": {
          height: height + "px"
        },
        " .pe-control__box": {
          width: iconSize + "px",
          height: iconSize + "px"
        },
        " .pe-button__content": {
          width: labelSize + "px",
          height: labelSize + "px",
          flexShrink: 0,
          " .pe-icon": [mixin.fit(iconOffset)]
        }
      };
    };

    var activeButton = function activeButton() {
      return {
        opacity: 1,
        zIndex: 0
      };
    };

    var inactiveButton = function inactiveButton() {
      return {
        opacity: 0,
        zIndex: -1
      };
    };

    var button_size_icon_size = function button_size_icon_size(selector, vars, isRTL) {
      var _peButtonPeContr;

      return sel(selector, {
        " .pe-button.pe-control__button": (_peButtonPeContr = {
          top: -((vars.button_size - vars.icon_size) / 2) + "px"
        }, _defineProperty$5(_peButtonPeContr, isRTL ? "right" : "left", -((vars.button_size - vars.icon_size) / 2) + "px"), _defineProperty$5(_peButtonPeContr, isRTL ? "left" : "right", "auto"), _peButtonPeContr)
      });
    };

    var _label_padding_before = function label_padding_before(selector, vars, isRTL) {
      return sel(selector, {
        " .pe-control__label": _defineProperty$5({}, isRTL ? "paddingRight" : "paddingLeft", vars.label_padding_before + "px")
      });
    };

    var _label_padding_after = function label_padding_after(selector, vars, isRTL) {
      return sel(selector, {
        " .pe-control__label": _defineProperty$5({}, isRTL ? "paddingLeft" : "paddingRight", vars.label_padding_after + "px")
      });
    };

    var varFns$5 = {
      general_styles: function general_styles(selector, vars) {
        return [sel(selector, [alignLeft$2(vars), {
          display: "inline-block",
          boxSizing: "border-box",
          margin: 0,
          padding: 0,
          " input[type=checkbox], input[type=radio]": {
            display: "none"
          },
          " .pe-control__form-label": [flex$1.layoutHorizontal, flex$1.layoutCenter, {
            position: "relative",
            cursor: "pointer",
            margin: 0,
            color: "inherit",
            ":focus": {
              outline: 0
            }
          }],
          ".pe-control--inactive": {
            " .pe-control__form-label": {
              cursor: "default"
            }
          },
          " .pe-control__box": {
            position: "relative",
            display: "inline-block",
            boxSizing: "border-box",
            color: "inherit",
            flexShrink: 0,
            ":focus": {
              outline: 0
            }
          },
          " .pe-button.pe-control__button": {
            position: "absolute"
          },
          ".pe-control--off": {
            " .pe-control__button--on": inactiveButton(),
            " .pe-control__button--off": activeButton()
          },
          ".pe-control--on": {
            " .pe-control__button--on": activeButton(),
            " .pe-control__button--off": inactiveButton()
          },
          " .pe-control__label": {
            // padding: RTL
            alignSelf: "center"
          },
          ".pe-control--disabled": {
            " .pe-control__form-label": {
              cursor: "auto"
            },
            " .pe-control__button": {
              pointerEvents: "none"
            }
          },
          " .pe-button__content": {
            " .pe-icon": {
              position: "absolute"
            }
          }
        }, _defineProperty$5({}, "*[dir=rtl] ".concat(selector, ", .pe-rtl ").concat(selector), [alignRight$2(vars)])])];
      },
      label_font_size: function label_font_size(selector, vars) {
        return [sel(selector, {
          " .pe-control__form-label": {
            fontSize: vars.label_font_size + "px"
          }
        })];
      },
      label_height: function label_height(selector, vars$1) {
        return [sel(selector, {
          " .pe-control__box": {
            width: vars$1.label_height + "px",
            height: vars$1.label_height + "px"
          },
          ".pe-control--small": makeSize(vars$1, vars.unit_icon_size_small, vars.unit_icon_size_small),
          ".pe-control--regular": makeSize(vars$1, vars$1.label_height, vars.unit_icon_size),
          ".pe-control--medium": makeSize(vars$1, vars.unit_icon_size_medium, vars.unit_icon_size_medium),
          ".pe-control--large": makeSize(vars$1, vars.unit_icon_size_large, vars.unit_icon_size_large)
        })];
      },
      animation_duration: function animation_duration(selector, vars) {
        return [sel(selector, {
          " .pe-button.pe-control__button": [mixin.defaultTransition("opacity", vars.animation_duration)],
          " .pe-control__label": [mixin.defaultTransition("all", vars.animation_duration)]
        })];
      },
      button_size: function button_size(selector, vars) {
        return [sel(selector, {}), button_size_icon_size(selector, vars, false), button_size_icon_size(selectorRTL(selector), vars, true)];
      },
      icon_size: function icon_size(selector, vars) {
        return [sel(selector, {}), button_size_icon_size(selector, vars, false), button_size_icon_size(selectorRTL(selector), vars, true)];
      },
      label_padding_after: function label_padding_after(selector, vars) {
        return [sel(selector, {}), _label_padding_after(selector, vars, false), _label_padding_after(selectorRTL(selector), vars, true)];
      },
      label_padding_before: function label_padding_before(selector, vars) {
        return [sel(selector, {}), _label_padding_before(selector, vars, false), _label_padding_before(selectorRTL(selector), vars, true)];
      }
    };
    var layout$6 = createLayout({
      varFns: varFns$5
    });

    // @ts-check
    /**
     * @typedef {import("../index").SelectionControlVars} SelectionControlVars
     */

    /**
    * @type {SelectionControlVars} selectionControlVars
    */

    var selectionControlVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      animation_duration: vars.animation_duration,
      button_size: 6 * vars.grid_unit_component,
      icon_size: 3 * vars.grid_unit_component,
      label_font_size: 2 * vars.grid_unit_component,
      // 16
      label_height: 3 * vars.grid_unit_component,
      // 24
      label_padding_after: 0,
      label_padding_before: vars.grid_unit * 4,
      // 16
      color_light_on: rgba(vars.color_primary),
      color_light_off: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
      color_light_label: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
      color_light_disabled: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
      // color_light_thumb_off_focus_opacity: .08,
      // color_light_thumb_on_focus_opacity:  .11,
      // icon colors may be set in theme; set to "inherit" by default
      color_light_on_icon: "inherit",
      color_light_off_icon: "inherit",
      // label on/off colors may be set in theme; set to color_light_label by default
      color_light_on_label: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
      color_light_off_label: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
      // color_light_focus_on:                rgba(vars.color_primary),
      // color_light_focus_on_opacity:        .11,
      // color_light_focus_off:               rgba(vars.color_light_foreground),
      // color_light_focus_off_opacity:       .07,
      color_dark_on: rgba(vars.color_primary),
      color_dark_off: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
      color_dark_label: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
      color_dark_disabled: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
      // color_dark_thumb_off_focus_opacity:  .08,
      // color_dark_thumb_on_focus_opacity:   .11,
      // icon color may be set in theme; set to "inherit" by default
      color_dark_on_icon: "inherit",
      color_dark_off_icon: "inherit",
      // label on/off colors may be set in theme; set to color_dark_label by default
      color_dark_on_label: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
      color_dark_off_label: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary) // color_dark_focus_on:                 rgba(vars.color_primary), // or '#80cbc4'
      // color_dark_focus_on_opacity:         .14,
      // color_dark_focus_off:                rgba(vars.color_dark_foreground),
      // color_dark_focus_off_opacity:        .09

    };

    // @ts-check
    var fns$4 = [layout$6, color$3];
    var selector$5 = ".".concat(classes$5.component);

    var addGeneralStyleToHead$5 = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$5],
        fns: fns$4,
        vars: selectionControlVars
      });
    };

    var classes$6 = {
      component: "pe-checkbox-control"
    };

    // @ts-check
    var color$4 = createColor({
      superColor: color$3
    });

    // @ts-check
    var layout$7 = createLayout({
      superLayout: layout$6
    });

    // @ts-check

    /**
     * @typedef {import("../index").CheckboxVars} CheckboxVars
     */

    /**
     * @type {CheckboxVars} checkboxVars
     */
    var checkboxVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true
    };

    // @ts-check
    var fns$5 = [layout$7, color$4];
    var selector$6 = ".".concat(classes$6.component);

    var addGeneralStyleToHead$6 = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$6],
        fns: fns$5,
        vars: checkboxVars
      });
    };

    var classes$7 = {
      component: "pe-dialog-pane",
      // elements
      actions: "pe-dialog-pane__actions",
      body: "pe-dialog-pane__body",
      content: "pe-dialog-pane__content",
      footer: "pe-dialog-pane__footer",
      header: "pe-dialog-pane__header",
      title: "pe-dialog-pane__title",
      // states
      withHeader: "pe-dialog-pane--header",
      withFooter: "pe-dialog-pane--footer",
      headerWithTitle: "pe-dialog-pane__header--title",
      footerWithButtons: "pe-dialog-pane__footer--buttons",
      footerHigh: "pe-dialog-pane__footer--high",
      borderBottom: "pe-dialog-pane--border-bottom",
      borderTop: "pe-dialog-pane--border-top",
      fullBleed: "pe-dialog-pane--body-full-bleed"
    };

    function _defineProperty$6(obj, key, value) {
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

    function _extends$5() {
      _extends$5 = Object.assign || function (target) {
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

      return _extends$5.apply(this, arguments);
    }

    var generalFns$4 = {
      general_styles: function general_styles() {
        return [{
          " .pe-dialog-pane__body": {
            borderColor: "transparent"
          }
        }];
      }
    };

    var tintFns$4 = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$6(_ref, "color_" + tint + "_background", function (selector, vars) {
        return [sel(selector, {
          backgroundColor: vars["color_" + tint + "_background"]
        })];
      }), _defineProperty$6(_ref, "color_" + tint + "_title_text", function (selector, vars) {
        return [sel(selector, {
          " .pe-dialog-pane__header .pe-dialog-pane__title": {
            color: vars["color_" + tint + "_title_text"]
          }
        })];
      }), _defineProperty$6(_ref, "color_" + tint + "_body_text", function (selector, vars) {
        return [sel(selector, {
          " .pe-dialog-pane__body": {
            color: vars["color_" + tint + "_body_text"]
          }
        })];
      }), _defineProperty$6(_ref, "color_" + tint + "_body_border", function (selector, vars) {
        return [sel(selector, {
          ".pe-dialog-pane--border-top .pe-dialog-pane__body": {
            borderTopColor: vars["color_" + tint + "_body_border"]
          },
          ".pe-dialog-pane--border-bottom .pe-dialog-pane__body": {
            borderBottomStyle: "solid",
            borderBottomColor: vars["color_" + tint + "_body_border"]
          }
        })];
      }), _ref;
    };

    var lightTintFns$4 = _extends$5({}, generalFns$4, tintFns$4("light"));

    var darkTintFns$4 = _extends$5({}, generalFns$4, tintFns$4("dark"));

    var color$5 = createColor({
      varFns: {
        lightTintFns: lightTintFns$4,
        darkTintFns: darkTintFns$4
      }
    });

    var max_width_side_padding_mobile = function max_width_side_padding_mobile(selector, vars) {
      var _ref3;

      var maxWidthBreakpointMobile = vars.max_width + 2 * vars.side_padding_mobile;
      return _ref3 = {}, _defineProperty$6(_ref3, "@media (max-width: " + maxWidthBreakpointMobile + "px)", _defineProperty$6({}, selector, {
        maxWidth: "calc(100vw - ".concat(2 * vars.side_padding_mobile, "px)")
      })), _defineProperty$6(_ref3, "@media (min-width: " + (maxWidthBreakpointMobile + 1) + "px)", _defineProperty$6({}, selector, {
        maxWidth: vars.max_width + "px"
      })), _ref3;
    };

    var padding_header_bottom = function padding_header_bottom(selector, vars) {
      return sel(selector, {
        " .pe-dialog-pane__header--title": {
          paddingTop: vars.padding - 4 + "px",
          paddingRight: vars.padding + "px",
          paddingBottom: vars.header_bottom - 4 + "px",
          paddingLeft: vars.padding + "px"
        }
      });
    };
    /*
    Setting an explicit max-height is needed for IE 11
    */


    var header_height_footer_height_margin_vertical = function header_height_footer_height_margin_vertical(selector, vars) {
      return sel(selector, {
        " .pe-dialog-pane__body": {
          maxHeight: "calc(100vh - (".concat(vars.header_height, "px + ").concat(vars.footer_height, "px + 2 * ").concat(vars.margin_vertical, "px))")
        }
      });
    };
    /**
     * @param {string} selector 
     */


    var fullScreen = function fullScreen(selector) {
      return sel(selector, {
        " .pe-dialog-pane": {
          borderRadius: 0
        },
        " .pe-dialog-pane__content": {
          borderRadius: 0,
          maxWidth: "none",
          height: "100vh",
          width: "100vw",
          " > *": {
            flexShrink: 0
          },
          " > .pe-dialog-pane__body": {
            flexShrink: 1,
            maxHeight: "none" // IE 11 doesn't know "initial"

          }
        },
        " .pe-dialog-pane, .pe-dialog-pane__body": {
          height: "100vh",
          maxHeight: "100vh",
          borderTopStyle: "none",
          maxWidth: "none" // IE 11 doesn't know "initial"

        }
      });
    };
    var varFns$6 = {
      general_styles: function general_styles(selector) {
        return [sel(selector, [flex$1.layoutVertical, {
          position: "relative",
          borderTopLeftRadius: "inherit",
          borderTopRightRadius: "inherit",
          borderBottomLeftRadius: "inherit",
          borderBottomRightRadius: "inherit",
          margin: 0,
          " .pe-dialog-pane__content": {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
            borderBottomLeftRadius: "inherit",
            borderBottomRightRadius: "inherit"
          },
          " .pe-dialog-pane__title": {
            fontSize: vars.font_size_title + "px",
            fontWeight: vars.font_weight_medium,
            "& + div": {
              marginTop: "16px"
            }
          },
          " .pe-dialog-pane__header, .pe-dialog-pane__content > .pe-toolbar": {
            borderTopLeftRadius: "inherit",
            borderTopRightRadius: "inherit",
            " .pe-dialog-pane__title": {
              width: "100%",
              wordBreak: "break-all",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }
          },
          " .pe-dialog-pane__body": [{
            overflowY: "auto",
            "-webkit-overflow-scrolling": "touch",
            borderTopStyle: "solid",
            borderBottomStyle: "solid",
            " p": {
              margin: 0
            },
            " p + p": {
              marginTop: "16px"
            }
          }],
          ".pe-dialog-pane--body-full-bleed .pe-dialog-pane__body": {
            padding: 0,
            borderStyle: "none"
          },
          " .pe-dialog-pane__header--title + .pe-dialog-pane__body": {
            paddingTop: 0
          },
          " .pe-dialog-pane__footer": {
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            justifyContent: "center",
            "&, > .pe-toolbar": {
              borderBottomLeftRadius: "inherit",
              borderBottomRightRadius: "inherit"
            },
            ".pe-dialog-pane__footer--high": {
              // when buttons are stacked vertically
              paddingBottom: "8px"
            },
            ".pe-dialog-pane__footer--buttons": {
              padding: "0 8px",
              fontSize: 0 // remove inline block spacing

            }
          },
          " .pe-dialog-pane__actions": [flex$1.layoutHorizontal, flex$1.layoutEndJustified, flex$1.layoutWrap, {
            alignItems: "center"
          }]
        }]), {
          " .pe-dialog__content.pe-menu__content": _defineProperty$6({}, " ".concat(selector), {
            " .pe-dialog-pane__body": {
              padding: 0,
              border: "none"
            }
          })
        }];
      },
      max_width: function max_width(selector, vars) {
        return [vars.side_padding_mobile !== undefined && max_width_side_padding_mobile(selector, vars)];
      },
      side_padding_mobile: function side_padding_mobile(selector, vars) {
        return [vars.side_padding_mobile !== undefined && max_width_side_padding_mobile(selector, vars)];
      },
      min_width: function min_width(selector, vars) {
        return [sel(selector, {
          minWidth: vars.min_width + "px"
        })];
      },
      margin_vertical: function margin_vertical(selector, vars) {
        return [sel(selector, {
          maxHeight: "calc(100vh - 2 * ".concat(vars.margin_vertical, "px)")
        }), vars.header_height !== undefined && vars.footer_height !== undefined && header_height_footer_height_margin_vertical(selector, vars)];
      },
      line_height_title: function line_height_title(selector, vars) {
        return [sel(selector, {
          " .pe-dialog-pane__title": {
            lineHeight: vars.line_height_title + "px"
          }
        })];
      },
      header_height: function header_height(selector, vars) {
        return [sel(selector, {
          " .pe-dialog-pane__header": {
            height: vars.header_height + "px"
          }
        }), vars.footer_height !== undefined && vars.margin_vertical !== undefined && header_height_footer_height_margin_vertical(selector, vars)];
      },
      footer_height: function footer_height(selector, vars) {
        return [sel(selector, {
          " .pe-dialog-pane__footer--buttons .pe-dialog-pane__actions": {
            minHeight: vars.footer_height + "px"
          }
        }), vars.header_height !== undefined && vars.footer_height !== undefined && vars.margin_vertical !== undefined && header_height_footer_height_margin_vertical(selector, vars)];
      },
      padding: function padding(selector, vars) {
        return [sel(selector, {
          " .pe-dialog-pane__body": {
            padding: vars.padding + "px"
          },
          ".pe-dialog-pane--footer": {
            " .pe-dialog-pane__body": {
              paddingBottom: vars.padding - 10 + "px"
            }
          }
        }), vars.header_bottom !== undefined && padding_header_bottom(selector, vars)];
      },
      header_bottom: function header_bottom(selector, vars) {
        return [padding_header_bottom(selector, vars)];
      },
      border_width: function border_width(selector, vars) {
        return [sel(selector, {
          " .pe-dialog-pane__body": {
            borderWidth: vars.border_width + "px"
          }
        })];
      }
    };
    var layout$8 = createLayout({
      varFns: varFns$6
    });

    // @ts-check
    /**
     * @type {DialogPaneVars} dialogPaneVars
     */

    var dialogPaneVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      border_width: 1,
      footer_height: 52,
      header_bottom: 20,
      header_height: 64,
      line_height_title: 24,
      max_width: 7 * vars.grid_unit_menu,
      // 7 * 56 = 392 
      min_width: 5 * vars.grid_unit_menu,
      // 5 * 56 = 280
      padding: 3 * vars.grid_unit_component,
      // 3 * 8 = 24
      side_padding_mobile: 6 * vars.grid_unit,
      // 6 * 4 = 48
      max_height: 8 * vars.grid_unit_component,
      margin_vertical: 8 * vars.grid_unit_component,
      color_light_title_text: "inherit",
      color_light_body_text: "inherit",
      color_light_body_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
      color_light_background: "inherit",
      color_dark_title_text: "inherit",
      color_dark_body_text: "inherit",
      color_dark_body_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
      color_dark_background: "inherit"
    };

    // @ts-check
    var fns$6 = [layout$8, color$5];
    var selector$7 = ".".concat(classes$7.component);

    var addGeneralStyleToHead$7 = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$7],
        fns: fns$6,
        vars: dialogPaneVars
      });
    };

    var listTileClasses = {
      component: "pe-list-tile",
      // elements
      content: "pe-list-tile__content",
      highSubtitle: "pe-list-tile__high-subtitle",
      primary: "pe-list-tile__primary",
      secondary: "pe-list-tile__secondary",
      subtitle: "pe-list-tile__subtitle",
      title: "pe-list-tile__title",
      contentFront: "pe-list-tile__content-front",
      // states  
      compact: "pe-list-tile--compact",
      compactFront: "pe-list-tile--compact-front",
      disabled: "pe-list-tile--disabled",
      hasFront: "pe-list-tile--front",
      hasHighSubtitle: "pe-list-tile--high-subtitle",
      hasSubtitle: "pe-list-tile--subtitle",
      header: "pe-list-tile--header",
      hoverable: "pe-list-tile--hoverable",
      insetH: "pe-list-tile--inset-h",
      insetV: "pe-list-tile--inset-v",
      selectable: "pe-list-tile--selectable",
      selected: "pe-list-tile--selected",
      rounded: "pe-list-tile--rounded",
      highlight: "pe-list-tile--highlight",
      sticky: "pe-list-tile--sticky",
      navigation: "pe-list-tile--navigation"
    };

    var menuClasses = {
      component: "pe-menu",
      // elements
      panel: "pe-menu__panel",
      content: "pe-menu__content",
      placeholder: "pe-menu__placeholder",
      backdrop: "pe-menu__backdrop",
      // states
      floating: "pe-menu--floating",
      origin: "pe-menu--origin",
      permanent: "pe-menu--permanent",
      showBackdrop: "pe-menu--backdrop",
      visible: "pe-menu--visible",
      width_auto: "pe-menu--width-auto",
      width_n: "pe-menu--width-",
      isTopMenu: "pe-menu--top-menu",
      // lookup
      listTile: listTileClasses.component,
      selectedListTile: listTileClasses.selected
    };

    var classes$8 = {
      component: "pe-dialog",
      // elements
      placeholder: "pe-dialog__placeholder",
      holder: "pe-dialog__holder",
      content: "pe-dialog__content",
      backdrop: "pe-dialog__backdrop",
      touch: "pe-dialog__touch",
      // states
      fullScreen: "pe-dialog--full-screen",
      modal: "pe-dialog--modal",
      open: "pe-dialog--open",
      // class set to html element
      visible: "pe-dialog--visible",
      // class set to dialog element
      showBackdrop: "pe-dialog--backdrop",
      transition: "pe-dialog--transition",
      // lookup
      menuContent: menuClasses.content
    };

    function _defineProperty$7(obj, key, value) {
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

    function _extends$6() {
      _extends$6 = Object.assign || function (target) {
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

      return _extends$6.apply(this, arguments);
    }

    function _objectSpread$3(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty$7(target, key, source[key]);
        });
      }

      return target;
    }

    var generalFns$5 = {
      general_styles: function general_styles(selector) {
        return [];
      } // eslint-disable-line no-unused-vars

    };

    var tintFns$5 = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$7(_ref, "color_" + tint + "_background", function (selector, vars) {
        return [sel(selector, {
          " .pe-dialog__content": {
            backgroundColor: vars["color_" + tint + "_background"]
          }
        })];
      }), _defineProperty$7(_ref, "color_" + tint + "_text", function (selector, vars) {
        return [sel(selector, {
          " .pe-dialog__content": {
            color: vars["color_" + tint + "_text"]
          }
        })];
      }), _defineProperty$7(_ref, "color_" + tint + "_backdrop_background", function (selector, vars) {
        return [sel(selector, {
          " .pe-dialog__backdrop": {
            backgroundColor: vars["color_" + tint + "_backdrop_background"]
          }
        })];
      }), _ref;
    };

    var lightTintFns$5 = _extends$6({}, generalFns$5, tintFns$5("light"));

    var darkTintFns$5 = _extends$6({}, generalFns$5, tintFns$5("dark"));

    var color$6 = createColor({
      varFns: {
        lightTintFns: lightTintFns$5,
        darkTintFns: darkTintFns$5
      }
    });

    var behaviorVars = {
      full_screen: false,
      modal: false
    };

    var themeVars$2 = _extends$6({}, {
      backdrop: false,
      z_index: vars.z_dialog
    }, behaviorVars, sharedVars);
    /**
     * @type {DialogVars} dialogVars
     */


    var dialogVars = _objectSpread$3({
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      animation_delay: "0s",
      animation_duration: ".220s",
      animation_hide_css: "opacity: 0;",
      animation_show_css: "opacity: 1;",
      animation_timing_function: "ease-in-out",
      border_radius: vars.unit_block_border_radius,
      position: "fixed",
      // color vars
      color_light_backdrop_background: "rgba(0, 0, 0, .4)",
      color_dark_backdrop_background: "rgba(0, 0, 0, .5)",
      color_light_background: rgba(vars.color_light_background),
      color_dark_background: rgba(vars.color_dark_background),
      color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_regular),
      color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_regular)
    }, themeVars$2);

    var minWidth = "320px";
    /**
     * @param {string} selector 
     * @param {object} vars 
     */

    var _backdrop = function backdrop(selector, vars) {
      return (// eslint-disable-line no-unused-vars
        sel(selector, {
          ".pe-dialog--visible .pe-dialog__backdrop": {
            display: "block",
            opacity: 1
          }
        })
      );
    };

    var fullScreen$1 = function fullScreen$1(selector, vars) {
      return sel(selector, [createMarker(vars, behaviorVars), {
        padding: 0,
        " .pe-dialog__content": {
          width: "100%" // for IE 11

        }
      }, fullScreen(selector)]);
    };

    var _modal = function modal(selector, vars) {
      return sel(selector, [createMarker(vars, behaviorVars)]);
    };

    var varFns$7 = _objectSpread$3({
      /**
       * @param {string} selector
       * @param {object} vars 
       */
      general_styles: function general_styles(selector, vars) {
        return [sel(selector, [flex$1.layoutCenterCenter, {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: vars.z_index,
          height: "100%",
          // 100vh would make the dialog go beneath Mobile Safari toolbar        
          transitionProperty: "opacity,background-color,transform",
          ".pe-dialog--full-screen": fullScreen$1(selector, vars),
          ".pe-dialog--modal": _modal(selector, vars),
          " .pe-dialog__content": {
            position: "relative",
            transitionProperty: "all"
          },
          " .pe-dialog__backdrop": [mixin.defaultTransition("all"), // animation duration is set in component options
          {
            position: "absolute",
            opacity: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none"
          }],
          ".pe-dialog--backdrop": _backdrop(selector)
        }]), {
          ".pe-dialog__holder": {
            height: "100%",
            minWidth: minWidth
          }
        }];
      },
      animation_hide_css: function animation_hide_css(selector, vars) {
        return [sel(selector, [vars.animation_hide_css])];
      },
      position: function position(selector, vars) {
        return [sel(selector, {
          position: vars.position
        })];
      },
      animation_delay: function animation_delay(selector, vars) {
        return [sel(selector, {
          "&, .pe-dialog__content": {
            transitionDelay: vars.animation_delay
          }
        })];
      },
      animation_duration: function animation_duration(selector, vars) {
        return [sel(selector, {
          "&, .pe-dialog__content": {
            transitionDuration: vars.animation_duration
          }
        })];
      },
      animation_timing_function: function animation_timing_function(selector, vars) {
        return [sel(selector, {
          "&, .pe-dialog__content": {
            transitionTimingFunction: vars.animation_timing_function
          }
        })];
      },
      animation_show_css: function animation_show_css(selector, vars) {
        return [sel(selector, {
          ".pe-dialog--visible": vars.animation_show_css
        })];
      },
      border_radius: function border_radius(selector, vars) {
        return [!vars.full_screen && sel(selector, {
          " .pe-dialog__content": {
            borderTopLeftRadius: vars.border_radius + "px",
            borderTopRightRadius: vars.border_radius + "px",
            borderBottomLeftRadius: vars.border_radius + "px",
            borderBottomRightRadius: vars.border_radius + "px"
          }
        })];
      },
      // Theme vars
      backdrop: function backdrop(selector, vars) {
        return vars.backdrop && _backdrop(selector);
      },
      full_screen: function full_screen(selector, vars) {
        return vars.full_screen && fullScreen$1(selector, vars);
      },
      modal: function modal(selector, vars) {
        return vars.modal && _modal(selector, vars);
      }
    }, sharedVarFns);

    var layout$9 = createLayout({
      varFns: varFns$7
    });

    // @ts-check
    var fns$7 = [layout$9, color$6];
    var selector$8 = ".".concat(classes$8.component);

    var addGeneralStyleToHead$8 = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$8],
        fns: fns$7,
        vars: dialogVars
      });
    };

    var listTileClasses$1 = {
      component: "pe-list-tile",
      // elements
      content: "pe-list-tile__content",
      highSubtitle: "pe-list-tile__high-subtitle",
      primary: "pe-list-tile__primary",
      secondary: "pe-list-tile__secondary",
      subtitle: "pe-list-tile__subtitle",
      title: "pe-list-tile__title",
      contentFront: "pe-list-tile__content-front",
      // states  
      compact: "pe-list-tile--compact",
      compactFront: "pe-list-tile--compact-front",
      disabled: "pe-list-tile--disabled",
      hasFront: "pe-list-tile--front",
      hasHighSubtitle: "pe-list-tile--high-subtitle",
      hasSubtitle: "pe-list-tile--subtitle",
      header: "pe-list-tile--header",
      hoverable: "pe-list-tile--hoverable",
      insetH: "pe-list-tile--inset-h",
      insetV: "pe-list-tile--inset-v",
      selectable: "pe-list-tile--selectable",
      selected: "pe-list-tile--selected",
      rounded: "pe-list-tile--rounded",
      highlight: "pe-list-tile--highlight",
      sticky: "pe-list-tile--sticky",
      navigation: "pe-list-tile--navigation"
    };

    var menuClasses$1 = {
      component: "pe-menu",
      // elements
      panel: "pe-menu__panel",
      content: "pe-menu__content",
      placeholder: "pe-menu__placeholder",
      backdrop: "pe-menu__backdrop",
      // states
      floating: "pe-menu--floating",
      origin: "pe-menu--origin",
      permanent: "pe-menu--permanent",
      showBackdrop: "pe-menu--backdrop",
      visible: "pe-menu--visible",
      width_auto: "pe-menu--width-auto",
      width_n: "pe-menu--width-",
      isTopMenu: "pe-menu--top-menu",
      // lookup
      listTile: listTileClasses$1.component,
      selectedListTile: listTileClasses$1.selected
    };

    var dialogClasses = {
      component: "pe-dialog",
      // elements
      placeholder: "pe-dialog__placeholder",
      holder: "pe-dialog__holder",
      content: "pe-dialog__content",
      backdrop: "pe-dialog__backdrop",
      touch: "pe-dialog__touch",
      // states
      fullScreen: "pe-dialog--full-screen",
      modal: "pe-dialog--modal",
      open: "pe-dialog--open",
      // class set to html element
      visible: "pe-dialog--visible",
      // class set to dialog element
      showBackdrop: "pe-dialog--backdrop",
      transition: "pe-dialog--transition",
      // lookup
      menuContent: menuClasses$1.content
    };

    var classes$9 = {
      component: "pe-dialog pe-drawer",
      // states
      cover: "pe-drawer--cover",
      push: "pe-drawer--push",
      mini: "pe-drawer--mini",
      permanent: "pe-drawer--permanent",
      border: "pe-drawer--border",
      floating: "pe-drawer--floating",
      fixed: "pe-drawer--fixed",
      anchorEnd: "pe-drawer--anchor-end",
      visible: dialogClasses.visible
    };

    function _defineProperty$8(obj, key, value) {
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

    function _extends$7() {
      _extends$7 = Object.assign || function (target) {
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

      return _extends$7.apply(this, arguments);
    }

    function _objectSpread$4(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty$8(target, key, source[key]);
        });
      }

      return target;
    }

    var generalFns$6 = {
      general_styles: function general_styles() {
        return [{
          " .pe-dialog__content": {
            background: "none"
          }
        }];
      }
    };

    var tintFns$6 = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$8(_ref, "color_" + tint + "_border", function (selector, vars) {
        return [sel(selector, {
          " .pe-dialog__content": {
            borderColor: vars["color_" + tint + "_border"]
          }
        })];
      }), _defineProperty$8(_ref, "color_" + tint + "_background", function (selector, vars) {
        return [sel(selector, {
          " .pe-dialog-pane": {
            backgroundColor: vars["color_" + tint + "_background"]
          }
        })];
      }), _defineProperty$8(_ref, "color_" + tint + "_backdrop_background", function (selector, vars) {
        return [sel(selector, {
          " .pe-dialog__backdrop": {
            backgroundColor: vars["color_" + tint + "_backdrop_background"]
          }
        })];
      }), _ref;
    };

    var lightTintFns$6 = _extends$7({}, generalFns$6, tintFns$6("light"));

    var darkTintFns$6 = _extends$7({}, generalFns$6, tintFns$6("dark"));

    var color$7 = createColor({
      varFns: {
        lightTintFns: lightTintFns$6,
        darkTintFns: darkTintFns$6
      }
    });

    var SHADOW_WIDTH = 15;

    var _border$2 = function _border(selector, vars, isRTL) {
      return sel(selector, {
        " .pe-dialog__content": {
          borderWidth: "".concat(vars.border ? 1 : 0, "px"),
          borderStyle: isRTL ? "none none none solid" : "none solid none none"
        }
      });
    };

    var _border2 = function border(selector, vars) {
      return [_border$2(selector, vars, false), _border$2(selectorRTL(selector), vars, true)];
    };

    var alignSide$3 = function alignSide(isRTL) {
      return function (selector, vars) {
        var _peDrawerFixed;

        return [{
          // Fixed
          ".pe-drawer--fixed": (_peDrawerFixed = {}, _defineProperty$8(_peDrawerFixed, isRTL ? "right" : "left", 0), _defineProperty$8(_peDrawerFixed, isRTL ? "left" : "right", "auto"), _peDrawerFixed)
        }, _border$2("".concat(selector, ".pe-drawer--border"), _extends$7({}, vars, {
          border: true
        }), isRTL)];
      };
    };

    var alignLeft$3 = alignSide$3(false);
    var alignRight$3 = alignSide$3(true);

    var _backdrop$1 = function backdrop(selector) {
      return sel(selector, {
        ".pe-dialog--visible .pe-dialog__backdrop": {
          opacity: 1
        }
      });
    };

    var selectorAnchorEnd = function selectorAnchorEnd(selector) {
      return "".concat(selector, ".pe-drawer--anchor-end");
    }; // fn: miniSelector contains .pe-drawer--mini


    var _content_width_mini_collapsed = function content_width_mini_collapsed(miniSelector, vars) {
      return sel(miniSelector, {
        ":not(.pe-dialog--visible) .pe-dialog__content": {
          width: "".concat(vars.content_width_mini_collapsed, "px")
        }
      });
    }; // fn: coverSelector contains .pe-drawer--cover


    var _cover_content_max_width = function _cover_content_max_width(coverSelector, vars, isRTL) {
      var _peDialog__content, _peDialogVisible;

      return sel(coverSelector, {
        " .pe-dialog__content": (_peDialog__content = {
          maxWidth: "".concat(vars.content_max_width, "px")
        }, _defineProperty$8(_peDialog__content, isRTL ? "right" : "left", "".concat(-vars.content_max_width - SHADOW_WIDTH, "px")), _defineProperty$8(_peDialog__content, isRTL ? "left" : "right", "auto"), _peDialog__content),
        ".pe-dialog--visible .pe-dialog__content": (_peDialogVisible = {}, _defineProperty$8(_peDialogVisible, isRTL ? "right" : "left", 0), _defineProperty$8(_peDialogVisible, isRTL ? "left" : "right", "auto"), _peDialogVisible)
      });
    };

    var cover_content_max_width = function cover_content_max_width(coverSelector, vars) {
      return [_cover_content_max_width(coverSelector, vars, false), _cover_content_max_width(selectorRTL(coverSelector), vars, true), _cover_content_max_width(selectorAnchorEnd(coverSelector), vars, true), _cover_content_max_width(selectorAnchorEnd(selectorRTL(coverSelector)), vars, false)];
    }; // fn: selector contains .pe-drawer--permanent


    var _content_width = function content_width(selector, vars) {
      return sel(selector, {
        " .pe-dialog__content": {
          width: "".concat(vars.content_width, "px")
        }
      });
    }; // fn: pushSelector contains .pe-drawer--push


    var _push_content_width = function _push_content_width(pushSelector, vars, isRTL) {
      var _peDialog__content2, _peDialogVisible2;

      return sel(pushSelector, {
        " .pe-dialog__content": (_peDialog__content2 = {}, _defineProperty$8(_peDialog__content2, isRTL ? "marginRight" : "marginLeft", "".concat(-vars.content_width - SHADOW_WIDTH, "px")), _defineProperty$8(_peDialog__content2, isRTL ? "marginLeft" : "marginRight", "auto"), _peDialog__content2),
        ".pe-dialog--visible .pe-dialog__content": (_peDialogVisible2 = {
          width: "".concat(vars.content_width, "px")
        }, _defineProperty$8(_peDialogVisible2, isRTL ? "marginRight" : "marginLeft", 0), _defineProperty$8(_peDialogVisible2, isRTL ? "marginLeft" : "marginRight", "auto"), _peDialogVisible2)
      });
    };

    var push_content_width = function push_content_width(pushSelector, vars) {
      return [_push_content_width(pushSelector, vars, false), _push_content_width(selectorRTL(pushSelector), vars, true), _push_content_width(selectorAnchorEnd(pushSelector), vars, true), _push_content_width(selectorAnchorEnd(selectorRTL(pushSelector)), vars, false)];
    };

    var _cover = function cover(selector, vars) {
      return sel(selector, {
        " .pe-dialog__content": {
          position: "absolute",
          top: 0,
          zIndex: vars.z_index
        },
        ".pe-dialog--visible": {
          " .pe-dialog__touch": {
            display: "block"
          }
        }
      });
    };
    /**
     * @param {string} miniSelector 
     * @param {object} [vars] 
     */


    var _mini = function mini(miniSelector, vars) {
      return (// eslint-disable-line no-unused-vars
        sel(miniSelector, {
          " .pe-dialog__content": {
            marginLeft: 0,
            marginRight: 0
          }
        })
      );
    };
    /**
     * @param {string} permanentSelector 
     * @param {object} [vars] 
     */


    var _permanent = function permanent(permanentSelector, vars) {
      return (// eslint-disable-line no-unused-vars
        sel(permanentSelector, {
          position: "static",
          display: "block",
          padding: 0,
          overflow: "initial",
          " .pe-dialog__content": {
            overflow: "visible",
            maxHeight: "initial",
            marginLeft: 0,
            marginRight: 0
          }
        })
      );
    };
    /**
     * @param {string} pushSelector 
     * @param {object} [vars] 
     */
    // fn: pushSelector contains .pe-drawer--push


    var _push = function push(pushSelector, vars) {
      return (// eslint-disable-line no-unused-vars
        sel(pushSelector, {
          position: "static"
        })
      );
    };
    /**
     * @param {string} selector 
     * @param {object} [vars] 
     */


    var borderRadius = function borderRadius(selector, vars) {
      return sel(selector, {
        " .pe-dialog__content": {
          borderRadius: vars.border_radius + "px"
        }
      });
    };
    /**
     * @param {string} selector 
     * @param {object} [vars] 
     */


    var _floating = function floating(selector, vars) {
      return (// eslint-disable-line no-unused-vars
        sel(selector, {
          height: "auto",
          " .pe-dialog__content": {
            height: "auto"
          }
        })
      );
    };

    var varFns$8 = _objectSpread$4({
      /**
       * @param {string} selector 
       * @param {object} [vars] 
       */
      general_styles: function general_styles(selector, vars$1) {
        return [sel(selector, [alignLeft$3(selector, vars$1), {
          justifyContent: "flex-start",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
          height: "100%",
          minWidth: 0,
          // IE 11 does not accept "none" or "inital" here
          padding: 0,
          opacity: 1,
          flexShrink: 0,
          transitionProperty: "all",
          ":not(.pe-dialog--transition)": {
            " .pe-dialog__content": {
              transitionDuration: "0s"
            }
          },
          " .pe-dialog__content": {
            position: "relative",
            // transitionProperty: "all",
            height: "100%",
            overflow: "visible",
            minWidth: 0,
            // IE 11 does not accept "none" or "inital" here
            flexShrink: 0
          },
          " .pe-dialog-pane__content": {
            height: "100%",
            overflowY: "auto",
            overflowX: "hidden"
          },
          " .pe-dialog-pane": {
            height: "100%",
            maxHeight: "none",
            minWidth: 0 // IE 11 does not accept "none" or "inital" here

          },
          " .pe-dialog-pane__body": {
            overflow: "visible",
            maxHeight: "none",
            border: "none"
          },
          // Fixed
          ".pe-drawer--fixed": {
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: vars.z_drawer
          },
          // Mini
          ".pe-drawer--mini": _mini(selector),
          // Permanent
          ".pe-drawer--permanent": _permanent(selector),
          // Floating
          ".pe-drawer--floating": _floating(selector),
          // Cover (default)
          ".pe-drawer--cover": _cover(selector, vars$1),
          // Push
          ".pe-drawer--push": _push(selector),
          // Backdrop
          " .pe-dialog__backdrop": {
            pointerEvents: "none",
            opacity: 0,
            display: "block"
          },
          " .pe-dialog__touch": {
            display: "none",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          },
          ".pe-dialog--backdrop": _backdrop$1(selector)
        }]), [sel(selectorRTL(selector), alignRight$3(selector, vars$1))]];
      },
      animation_delay: function animation_delay(selector, vars) {
        return [sel(selector, {
          "&, .pe-dialog__content, .pe-dialog__backdrop": {
            transitionDelay: vars.animation_delay
          }
        })];
      },
      animation_duration: function animation_duration(selector, vars) {
        return [sel(selector, {
          "&, .pe-dialog__content, .pe-dialog__backdrop": {
            transitionDuration: vars.animation_duration
          }
        })];
      },
      animation_timing_function: function animation_timing_function(selector, vars) {
        return [sel(selector, {
          "&, .pe-dialog__content, .pe-dialog__backdrop": {
            transitionTimingFunction: vars.animation_timing_function
          }
        })];
      },
      border_radius: function border_radius(selector, vars) {
        return [borderRadius(selector, vars)];
      },
      content_max_width: function content_max_width(selector, vars) {
        return [cover_content_max_width("".concat(selector, ".pe-drawer--cover"), vars)];
      },
      content_width: function content_width(selector, vars) {
        return [_content_width(selector, vars), _content_width("".concat(selector, ".pe-dialog--visible"), vars), _content_width("".concat(selector, ".pe-drawer--permanent"), vars), push_content_width("".concat(selector, ".pe-drawer--push"), vars)];
      },
      content_width_mini_collapsed: function content_width_mini_collapsed(selector, vars) {
        return [_content_width_mini_collapsed("".concat(selector, ".pe-drawer--mini"), vars)];
      },
      // Theme vars
      cover: function cover(selector, vars) {
        return vars.cover && [_cover(selector, vars), cover_content_max_width(selector, vars)];
      },
      backdrop: function backdrop(selector, vars) {
        return [vars.backdrop && _backdrop$1(selector)];
      },
      border: function border(selector, vars) {
        return [_border2(selector, vars)];
      },
      mini: function mini(selector, vars) {
        return vars.mini && [_mini(selector), _content_width_mini_collapsed(selector, vars)];
      },
      permanent: function permanent(selector, vars) {
        return [vars.permanent && _permanent(selector)];
      },
      floating: function floating(selector, vars) {
        return [vars.floating && _floating(selector)];
      },
      push: function push(selector, vars) {
        return vars.push && [_push(selector), push_content_width(selector, vars)];
      }
    }, sharedVarFns);

    var layout$a = createLayout({
      varFns: varFns$8
    });

    var themeVars$3 = _objectSpread$4({
      backdrop: false,
      border: undefined,
      // set to `true` or `false`
      cover: false,
      floating: false,
      mini: false,
      permanent: false,
      push: false,
      z_index: vars.z_drawer
    }, sharedVars);
    /**
     * @type {DrawerVars} drawerVars
     */


    var drawerVars = _objectSpread$4({
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      animation_delay: "0s",
      animation_duration: ".260s",
      animation_timing_function: "ease-in-out",
      border_radius: 0,
      content_max_width: 5 * vars.increment,
      // 5 * 56
      content_width: 240,
      content_width_mini_collapsed: vars.increment,
      // 1 * 56
      // color vars
      color_light_backdrop_background: "rgba(0, 0, 0, .4)",
      color_dark_backdrop_background: "rgba(0, 0, 0, .5)",
      color_light_background: rgba(vars.color_light_background),
      color_dark_background: rgba(vars.color_dark_background),
      color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
      color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light)
    }, themeVars$3);

    // @ts-check
    var fns$8 = [layout$a, color$7];
    var selector$9 = ".".concat(classes$9.component.replace(/ /g, "."));

    var addGeneralStyleToHead$9 = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$9],
        fns: fns$8,
        vars: drawerVars
      });
    };

    var classes$a = {
      component: "pe-fab",
      // elements
      content: "pe-fab__content",
      // states
      mini: "pe-fab--mini"
    };

    function _defineProperty$9(obj, key, value) {
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

    function _extends$8() {
      _extends$8 = Object.assign || function (target) {
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

      return _extends$8.apply(this, arguments);
    }

    var generalFns$7 = {
      general_styles: function general_styles(selector) {
        return [];
      }
    };

    var tintFns$7 = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$9(_ref, "color_" + tint, function (selector, vars) {
        return [sel(selector, {
          " .pe-button__content": {
            color: vars["color_" + tint]
          }
        })];
      }), _defineProperty$9(_ref, "color_" + tint + "_background", function (selector, vars) {
        return [sel(selector, {
          " .pe-button__content": {
            backgroundColor: vars["color_" + tint + "_background"]
          }
        })];
      }), _defineProperty$9(_ref, "color_" + tint + "_wash_background", function (selector, vars) {
        return [sel(selector, {
          " .pe-button__wash-color": {
            backgroundColor: vars["color_" + tint + "_wash_background"]
          }
        })];
      }), _defineProperty$9(_ref, "color_" + tint + "_wash_opacity", function (selector, vars) {
        return [sel(selector, {
          " .pe-button__wash-color": {
            opacity: vars["color_" + tint + "_wash_opacity"]
          }
        })];
      }), _ref;
    };

    var lightTintFns$7 = _extends$8({}, generalFns$7, tintFns$7("light"));

    var darkTintFns$7 = _extends$8({}, generalFns$7, tintFns$7("dark"));

    var color$8 = createColor({
      varFns: {
        lightTintFns: lightTintFns$7,
        darkTintFns: darkTintFns$7
      }
    });

    // @ts-check
    var varFns$9 = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          userSelect: "none",
          "-moz-user-select": "none",
          display: "inline-block",
          position: "relative",
          outline: "none",
          cursor: "pointer",
          padding: 0,
          border: "none",
          " .pe-button__content": {
            position: "relative",
            borderRadius: "50%"
          },
          " .pe-fab__content": {
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center"
          },
          " .pe-ripple": {
            borderRadius: "inherit"
          },
          " .pe-button__wash": [mixin.fit(), {
            borderRadius: "inherit",
            transition: "background-color " + vars.animation_duration + " ease-in-out",
            pointerEvents: "none",
            backgroundColor: "transparent"
          }]
        })];
      },
      size_regular: function size_regular(selector, vars) {
        return [sel(selector, {
          " .pe-button__content": {
            width: vars.size_regular + "px",
            height: vars.size_regular + "px"
          }
        })];
      },
      size_mini: function size_mini(selector, vars$1) {
        return [sel(selector, {
          ".pe-fab--mini": {
            " .pe-button__content": {
              width: vars$1.size_mini + "px",
              height: vars$1.size_mini + "px",
              padding: (vars$1.size_mini - vars.unit_icon_size) / 2 + "px"
            }
          }
        })];
      }
    };
    var layout$b = createLayout({
      varFns: varFns$9
    });

    // @ts-check
    /**
     * @type {DrawerVars} drawerVars
     */

    var drawerVars$1 = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      size_mini: 5 * vars.grid_unit_component,
      // 5 * 8 = 40
      size_regular: 7 * vars.grid_unit_component,
      // 7 * 8 = 56
      color_light: rgba(vars.color_primary_foreground),
      color_light_background: rgba(vars.color_primary),
      color_light_wash_background: "currentColor",
      color_light_wash_opacity: 0.1,
      color_dark: rgba(vars.color_primary_foreground),
      color_dark_background: rgba(vars.color_primary),
      color_dark_wash_background: "currentColor",
      color_dark_wash_opacity: 0.1
    };

    // @ts-check
    var fns$9 = [layout$b, color$8];
    var selector$a = ".".concat(classes$a.component);

    var addGeneralStyleToHead$a = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$a],
        fns: fns$9,
        vars: drawerVars$1
      });
    };

    var classes$b = {
      component: "pe-icon",
      // states
      avatar: "pe-icon--avatar",
      large: "pe-icon--large",
      medium: "pe-icon--medium",
      regular: "pe-icon--regular",
      small: "pe-icon--small"
    };

    function _defineProperty$a(obj, key, value) {
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

    function _extends$9() {
      _extends$9 = Object.assign || function (target) {
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

      return _extends$9.apply(this, arguments);
    }

    var generalFns$8 = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          color: "currentColor"
        })];
      }
    };

    var tintFns$8 = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$a(_ref, "color_" + tint, function (selector, vars) {
        return [sel(selector, {
          color: vars["color_" + tint]
        })];
      }), _defineProperty$a(_ref, "color_" + tint + "_avatar_background", function (selector, vars) {
        return [sel(selector, {
          ".pe-icon--avatar": {
            backgroundColor: vars["color_" + tint + "_avatar_background"]
          }
        })];
      }), _ref;
    };

    var lightTintFns$8 = _extends$9({}, generalFns$8, tintFns$8("light"));

    var darkTintFns$8 = _extends$9({}, generalFns$8, tintFns$8("dark"));

    var color$9 = createColor({
      varFns: {
        lightTintFns: lightTintFns$8,
        darkTintFns: darkTintFns$8
      }
    });

    var sizeDirective = function sizeDirective(size) {
      return function (selector, vars) {
        return sel(selector, _defineProperty$a({}, ".pe-icon--".concat(size), {
          width: vars["size_".concat(size)] + "px",
          height: vars["size_".concat(size)] + "px"
        }));
      };
    };

    var varFns$a = _extends$9({}, {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          display: "inline-block",
          verticalAlign: "middle",
          backgroundRepeat: "no-repeat",
          position: "relative",
          fontSize: 0,
          lineHeight: 0,
          ".pe-icon--avatar": {
            borderRadius: "50%"
          },
          ".pe-icon--avatar img": {
            border: "none",
            borderRadius: "50%",
            width: "inherit",
            height: "inherit"
          },
          " img": {
            height: "inherit"
          },
          " .pe-svg, .pe-svg > div": {
            /* React creates an additional div when wrapping an SVG */
            width: "inherit",
            height: "inherit"
          }
        })];
      }
    }, ["small", "regular", "medium", "large"].reduce(function (acc, size) {
      return acc["size_".concat(size)] = sizeDirective(size), acc;
    }, {}));

    var layout$c = createLayout({
      varFns: varFns$a
    });

    // @ts-check
    /**
     * @type {IconVars} iconVars
     */

    var iconVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      size_small: vars.unit_icon_size_small,
      // 16 
      size_regular: vars.unit_icon_size,
      // 24
      size_medium: vars.unit_icon_size_medium,
      // 32
      size_large: vars.unit_icon_size_large,
      // 40
      // avatar background is visible when image is not yet loaded
      color_light_avatar_background: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
      color_dark_avatar_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_disabled),
      color_light: "currentcolor",
      color_dark: "currentcolor"
    };

    // @ts-check
    var fns$a = [layout$c, color$9];
    var selector$b = ".".concat(classes$b.component);
    var addStyle$3 = styler.createAddStyle(selector$b, fns$a, iconVars);

    var addGeneralStyleToHead$b = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$b],
        fns: fns$a,
        vars: iconVars
      });
    };

    var classes$c = {
      component: "pe-button pe-icon-button",
      // elements
      content: "pe-icon-button__content",
      label: "pe-icon-button__label",
      // states
      compact: "pe-icon-button--compact"
    };

    function _defineProperty$b(obj, key, value) {
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

    function _extends$a() {
      _extends$a = Object.assign || function (target) {
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

      return _extends$a.apply(this, arguments);
    }

    var generalFns$9 = {
      general_styles: function general_styles(selector) {
        return [];
      }
    };

    var tintFns$9 = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$b(_ref, "color_" + tint, function (selector, vars) {
        return [sel(selector, {
          "&, .pe-icon-button__label": {
            color: vars["color_" + tint]
          }
        })];
      }), _defineProperty$b(_ref, "color_" + tint + "_background", function (selector, vars) {
        return [sel(selector, {
          " .pe-icon-button__content": {
            backgroundColor: vars["color_" + tint + "_background"]
          }
        })];
      }), _defineProperty$b(_ref, "color_" + tint + "_disabled", function (selector, vars) {
        return [sel(selector, {
          ".pe-button--disabled": {
            " .pe-button__content, .pe-icon-button__label": {
              color: vars["color_" + tint + "_disabled"]
            }
          }
        })];
      }), _defineProperty$b(_ref, "color_" + tint + "_wash_background", function (selector, vars) {
        return [sel(selector, {
          " .pe-button__wash-color": {
            backgroundColor: vars["color_" + tint + "_wash_background"]
          }
        })];
      }), _defineProperty$b(_ref, "color_" + tint + "_wash_opacity", function (selector, vars) {
        return [sel(selector, {
          " .pe-button__wash-color": {
            opacity: vars["color_" + tint + "_wash_opacity"]
          }
        })];
      }), _ref;
    };

    var hoverTintFns$1 = function hoverTintFns(tint) {
      var _ref2;

      return _ref2 = {}, _defineProperty$b(_ref2, "color_" + tint + "_hover", function (selector, vars) {
        return [sel(selector, {
          " .pe-icon-button__content": {
            color: vars["color_" + tint + "_hover"]
          }
        })];
      }), _defineProperty$b(_ref2, "color_" + tint + "_label_hover", function (selector, vars) {
        return [sel(selector, {
          " .pe-icon-button__label": {
            color: vars["color_" + tint + "_label_hover"]
          }
        })];
      }), _defineProperty$b(_ref2, "color_" + tint + "_background_hover", function (selector, vars) {
        return [sel(selector, {
          " .pe-icon-button__content": {
            backgroundColor: vars["color_" + tint + "_background_hover"]
          }
        })];
      }), _ref2;
    };

    var lightTintFns$9 = _extends$a({}, generalFns$9, tintFns$9("light"));

    var darkTintFns$9 = _extends$a({}, generalFns$9, tintFns$9("dark"));

    var lightTintHoverFns$1 = hoverTintFns$1("light");
    var darkTintHoverFns$1 = hoverTintFns$1("dark");
    var color$a = createColor({
      varFns: {
        lightTintFns: lightTintFns$9,
        darkTintFns: darkTintFns$9,
        lightTintHoverFns: lightTintHoverFns$1,
        darkTintHoverFns: darkTintHoverFns$1
      }
    });

    var alignSide$4 = function alignSide(isRTL) {
      return function (vars) {
        return {};
      };
    }; // eslint-disable-line no-unused-vars


    var alignLeft$4 = alignSide$4();
    var alignRight$4 = alignSide$4();

    var _label_padding_before$1 = function label_padding_before(selector, vars, isRTL) {
      return sel(selector, {
        " .pe-icon-button__label": _defineProperty$b({}, isRTL ? "paddingRight" : "paddingLeft", vars.label_padding_before + "px")
      });
    };

    var _label_padding_after$1 = function label_padding_after(selector, vars, isRTL) {
      return sel(selector, {
        " .pe-icon-button__label": _defineProperty$b({}, isRTL ? "paddingLeft" : "paddingRight", vars.label_padding_after + "px")
      });
    };

    var varFns$b = {
      general_styles: function general_styles(selector, vars) {
        return [sel(selector, [alignLeft$4(vars), {
          // don't set button size to facilitate different icon sizes
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
          border: "none",
          " .pe-button__content": {
            display: "flex",
            alignItems: "center",
            fontSize: "1rem",
            borderRadius: "50%",
            position: "relative"
          },
          " .pe-icon-button__content": {
            lineHeight: 1,
            borderRadius: "50%",
            pointerEvents: "none"
          },
          // TODO: move wash styles to base button
          " .pe-button__wash": [mixin.fit(), {
            zIndex: 0,
            borderRadius: "inherit",
            pointerEvents: "none",
            opacity: 0
          }],
          // Always show wash on focus but not on click
          "&:focus:not(:active)": {
            " .pe-button__wash": {
              opacity: 1
            }
          },
          // Only show wash on hover when "has hover" class set
          ".pe-button--has-hover:hover": {
            " .pe-button__wash": {
              opacity: 1
            }
          }
        }, _defineProperty$b({}, "*[dir=rtl] ".concat(selector, ", .pe-rtl ").concat(selector), [alignRight$4(vars)])])];
      },
      padding: function padding(selector, vars) {
        return [sel(selector, {
          " .pe-icon-button__content": {
            padding: vars.padding + "px"
          }
        })];
      },
      padding_compact: function padding_compact(selector, vars) {
        return [sel(selector, {
          ".pe-icon-button--compact": {
            " .pe-icon-button__content": {
              padding: vars.padding_compact + "px"
            }
          }
        })];
      },
      animation_duration: function animation_duration(selector, vars) {
        return [sel(selector, {
          " .pe-button__content, .pe-button__wash": [mixin.defaultTransition("all", vars.animation_duration)]
        })];
      },
      label_font_size: function label_font_size(selector, vars) {
        return [sel(selector, {
          " .pe-icon-button__label": {
            fontSize: vars.label_font_size + "px"
          }
        })];
      },
      label_line_height: function label_line_height(selector, vars) {
        return [sel(selector, {
          " .pe-icon-button__label": {
            lineHeight: vars.label_line_height + "px"
          }
        })];
      },
      label_font_weight: function label_font_weight(selector, vars) {
        return [sel(selector, {
          " .pe-icon-button__label": {
            fontWeight: vars.label_font_weight
          }
        })];
      },
      label_text_transform: function label_text_transform(selector, vars) {
        return [sel(selector, {
          " .pe-icon-button__label": {
            textTransform: vars.label_text_transform
          }
        })];
      },
      label_padding_after: function label_padding_after(selector, vars) {
        return [sel(selector, {}), _label_padding_after$1(selector, vars, false), _label_padding_after$1(selectorRTL(selector), vars, true)];
      },
      label_padding_before: function label_padding_before(selector, vars) {
        return [sel(selector, {}), _label_padding_before$1(selector, vars, false), _label_padding_before$1(selectorRTL(selector), vars, true)];
      }
    };
    var layout$d = createLayout({
      varFns: varFns$b
    });

    // @ts-check
    /**
     * @type {IconButtonVars} iconButtonVars
     */

    var iconButtonVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      animation_duration: vars.animation_duration,
      label_font_size: 16,
      label_font_weight: 400,
      label_line_height: 20,
      label_padding_after: 0,
      label_padding_before: vars.grid_unit * 1,
      // 4
      label_text_transform: "initial",
      label_top_margin_factor: 1 / 12,
      // align with icon
      padding: (vars.grid_unit_icon_button - vars.unit_icon_size) / 2,
      // 12
      padding_compact: (vars.grid_unit_icon_button - vars.unit_icon_size) / 3,
      // 8
      color_background: "transparent",
      // only specify this variable to get all 2 states
      // theme specific background colors may be set in theme; disabled by default
      // color_light_background:    "none",
      // color_dark_background:     "none",
      // color_light_hover:         "inherit",
      // color_dark_hover:          "inherit",
      // color_light_label_hover:   "inherit",
      // color_dark_label_hover:    "inherit",
      color_light: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
      color_light_label: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
      color_light_disabled: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
      color_light_wash_background: "currentColor",
      color_light_wash_opacity: 0.1,
      color_dark: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
      color_dark_label: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
      color_dark_disabled: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
      color_dark_wash_background: "currentColor",
      color_dark_wash_opacity: 0.1 // hover colors may be set in theme; disabled by default
      // color_light_background_hover:         "currentColor",
      // color_dark_background_hover:          "currentColor",

    };

    // @ts-check
    var fns$b = [layout$d, color$a];
    var selector$c = ".".concat(classes$c.component.replace(/ /g, "."));
    var addStyle$4 = styler.createAddStyle(selector$c, fns$b, iconButtonVars);

    var addGeneralStyleToHead$c = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$c],
        fns: fns$b,
        vars: iconButtonVars
      });
    };

    var classes$d = {
      component: "pe-ios-spinner",
      // elements
      blades: "pe-ios-spinner__blades",
      blade: "pe-ios-spinner__blade"
    };

    function _defineProperty$c(obj, key, value) {
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

    function _extends$b() {
      _extends$b = Object.assign || function (target) {
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

      return _extends$b.apply(this, arguments);
    }

    var generalFns$a = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          " .pe-ios-spinner__blade": {
            background: "currentcolor"
          }
        })];
      }
    };

    var tintFns$a = function tintFns(tint) {
      return _defineProperty$c({}, "color_" + tint, function (selector, vars) {
        return [sel(selector, {
          color: vars["color_" + tint]
        })];
      });
    };

    var lightTintFns$a = _extends$b({}, generalFns$a, tintFns$a("light"));

    var darkTintFns$a = _extends$b({}, generalFns$a, tintFns$a("dark"));

    var color$b = createColor({
      varFns: {
        lightTintFns: lightTintFns$a,
        darkTintFns: darkTintFns$a
      },
      superColor: color
    });

    var bladeWidth = 9; // percent

    var bladeHeight = 28; // percent

    var kfFade = function kfFade() {
      return {
        " 0%": {
          opacity: .640
        },
        " 100%": {
          opacity: .035
        }
      };
    };

    var positionBlades = function positionBlades(vars) {
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (i) {
        // reverse to improve performance on iOS
        var delay = -1 / 12 * i * styleDurationToMs(vars.rotation_animation_duration);
        var rotation = 360 - 360 / 12 * i;
        return _defineProperty$c({}, " .pe-ios-spinner__blade:nth-of-type(" + (i + 1) + ")", {
          transform: "rotate(" + rotation + "deg) translate3d(0,-140%,0)",
          animation: "iosSpinnerFade " + vars.rotation_animation_duration + " " + delay + "ms linear infinite"
        });
      });
    };

    var varFns$c = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          " .pe-ios-spinner__blades": {
            transform: "translate3d(0,0,0)",
            position: "relative",
            width: "100%",
            height: "100%"
          },
          " .pe-ios-spinner__blade": {
            position: "absolute",
            width: bladeWidth + "%",
            height: bladeHeight + "%",
            left: (100 - bladeWidth) / 2 + "%",
            top: (100 - bladeHeight) / 2 + "%",
            opacity: 0,
            borderRadius: "50px"
          },
          "@keyframes iosSpinnerFade": kfFade()
        })];
      },
      rotation_animation_duration: function rotation_animation_duration(selector, vars) {
        return [sel(selector, {
          " .pe-ios-spinner__blades": [positionBlades(vars)]
        })];
      }
    };
    var layout$e = createLayout({
      varFns: varFns$c,
      superLayout: layout$1
    });

    // @ts-check
    /**
     * @type {IOSSpinnerVars} iOSSpinnerVars
     */

    var iOSSpinnerVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      rotation_animation_duration: "1s",
      color_light: rgba(vars.color_light_foreground),
      color_dark: rgba(vars.color_dark_foreground)
    };

    // @ts-check
    var fns$c = [layout$e, color$b];
    var selector$d = ".".concat(classes$d.component);

    var addGeneralStyleToHead$d = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$d],
        fns: fns$c,
        vars: iOSSpinnerVars
      });
    };

    var listTileClasses$2 = {
      component: "pe-list-tile",
      // elements
      content: "pe-list-tile__content",
      highSubtitle: "pe-list-tile__high-subtitle",
      primary: "pe-list-tile__primary",
      secondary: "pe-list-tile__secondary",
      subtitle: "pe-list-tile__subtitle",
      title: "pe-list-tile__title",
      contentFront: "pe-list-tile__content-front",
      // states  
      compact: "pe-list-tile--compact",
      compactFront: "pe-list-tile--compact-front",
      disabled: "pe-list-tile--disabled",
      hasFront: "pe-list-tile--front",
      hasHighSubtitle: "pe-list-tile--high-subtitle",
      hasSubtitle: "pe-list-tile--subtitle",
      header: "pe-list-tile--header",
      hoverable: "pe-list-tile--hoverable",
      insetH: "pe-list-tile--inset-h",
      insetV: "pe-list-tile--inset-v",
      selectable: "pe-list-tile--selectable",
      selected: "pe-list-tile--selected",
      rounded: "pe-list-tile--rounded",
      highlight: "pe-list-tile--highlight",
      sticky: "pe-list-tile--sticky",
      navigation: "pe-list-tile--navigation"
    };

    var classes$e = {
      component: "pe-list",
      // states
      border: "pe-list--border",
      compact: "pe-list--compact",
      hasHeader: "pe-list--header",
      indentedBorder: "pe-list--indented-border",
      padding: "pe-list--padding",
      paddingTop: "pe-list--padding-top",
      paddingBottom: "pe-list--padding-bottom",
      // lookup
      header: listTileClasses$2.header
    };

    function _defineProperty$d(obj, key, value) {
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

    function _extends$c() {
      _extends$c = Object.assign || function (target) {
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

      return _extends$c.apply(this, arguments);
    }

    var generalFns$b = {
      general_styles: function general_styles() {
        return [];
      }
    };

    var tintFns$b = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$d(_ref, "color_" + tint + "_background", function (selector, vars) {
        return [sel(selector, {
          backgroundColor: vars["color_" + tint + "_background"]
        })];
      }), _defineProperty$d(_ref, "color_" + tint + "_border", function (selector, vars) {
        var _sel;

        return [sel(selector, (_sel = {}, _defineProperty$d(_sel, "& + .pe-list", {
          borderTopColor: vars["color_" + tint + "_border"]
        }), _defineProperty$d(_sel, ".pe-list--border", {
          " .pe-list-tile": {
            ":not(:last-child)": {
              borderColor: vars["color_" + tint + "_border"]
            }
          }
        }), _defineProperty$d(_sel, ".pe-list--indented-border", {
          " .pe-list-tile": {
            " .pe-list-tile__content:not(.pe-list-tile__content-front)": {
              borderColor: vars["color_" + tint + "_border"]
            }
          }
        }), _sel))];
      }), _ref;
    };

    var lightTintFns$b = _extends$c({}, generalFns$b, tintFns$b("light"));

    var darkTintFns$b = _extends$c({}, generalFns$b, tintFns$b("dark"));

    var color$c = createColor({
      varFns: {
        lightTintFns: lightTintFns$b,
        darkTintFns: darkTintFns$b
      }
    });

    // @ts-check

    var borderStyle = function borderStyle(vars) {
      return {
        borderStyle: "none none solid none",
        borderWidth: vars.border_width_bordered + "px"
      };
    };

    var varFns$d = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          flexGrow: 1,
          ".pe-list--header": {
            paddingTop: 0
          },
          ".pe-list--indented-border": {
            borderTop: "none"
          }
        })];
      },
      padding: function padding(selector, vars) {
        return [sel(selector, {
          ".pe-list--padding": {
            padding: vars.padding + "px 0"
          },
          ".pe-list--padding-top": {
            paddingTop: vars.padding + "px"
          },
          ".pe-list--padding-bottom": {
            paddingBottom: vars.padding + "px"
          }
        })];
      },
      padding_compact: function padding_compact(selector, vars) {
        return [sel(selector, {
          ".pe-list--compact": {
            padding: vars.padding_compact + "px 0"
          }
        })];
      },
      border_width_stacked: function border_width_stacked(selector, vars) {
        return [sel(selector, {
          "& + &": {
            borderStyle: "solid none none none",
            borderWidth: vars.border_width_stacked + "px"
          }
        })];
      },
      border_width_bordered: function border_width_bordered(selector, vars) {
        return [sel(selector, {
          ".pe-list--border": {
            " .pe-list-tile": {
              ":not(.pe-list-tile--header):not(:last-child)": {
                "&": borderStyle(vars)
              }
            }
          },
          ".pe-list--indented-border": {
            " .pe-list-tile": {
              ":not(.pe-list-tile--header):not(:last-child)": {
                " .pe-list-tile__content:not(.pe-list-tile__content-front)": borderStyle(vars)
              }
            }
          }
        })];
      }
    };
    var layout$f = createLayout({
      varFns: varFns$d
    });

    // @ts-check
    /**
     * @type {ListVars} listVars
     */

    var listVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      border_width_bordered: 1,
      border_width_stacked: 1,
      padding: vars.grid_unit_component,
      // vertical padding
      padding_compact: vars.grid_unit_component * 3 / 4,
      color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
      color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light) // background color may be set in theme; disabled by default
      // color_light_background: "inherit",
      // color_dark_background:  "inherit"

    };

    // @ts-check
    var fns$d = [layout$f, color$c];
    var selector$e = ".".concat(classes$e.component);

    var addGeneralStyleToHead$e = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$e],
        fns: fns$d,
        vars: listVars
      });
    };

    var classes$f = {
      component: "pe-list-tile",
      // elements
      content: "pe-list-tile__content",
      highSubtitle: "pe-list-tile__high-subtitle",
      primary: "pe-list-tile__primary",
      secondary: "pe-list-tile__secondary",
      subtitle: "pe-list-tile__subtitle",
      title: "pe-list-tile__title",
      contentFront: "pe-list-tile__content-front",
      // states  
      compact: "pe-list-tile--compact",
      compactFront: "pe-list-tile--compact-front",
      disabled: "pe-list-tile--disabled",
      hasFront: "pe-list-tile--front",
      hasHighSubtitle: "pe-list-tile--high-subtitle",
      hasSubtitle: "pe-list-tile--subtitle",
      header: "pe-list-tile--header",
      hoverable: "pe-list-tile--hoverable",
      insetH: "pe-list-tile--inset-h",
      insetV: "pe-list-tile--inset-v",
      selectable: "pe-list-tile--selectable",
      selected: "pe-list-tile--selected",
      rounded: "pe-list-tile--rounded",
      highlight: "pe-list-tile--highlight",
      sticky: "pe-list-tile--sticky",
      navigation: "pe-list-tile--navigation"
    };

    function _defineProperty$e(obj, key, value) {
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

    function _extends$d() {
      _extends$d = Object.assign || function (target) {
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

      return _extends$d.apply(this, arguments);
    }

    function _objectSpread$5(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty$e(target, key, source[key]);
        });
      }

      return target;
    }

    var _selected = function selected(selector, vars, tint) {
      var selectedTextColor = vars["color_" + tint + "_selected_text"];
      return sel(selector, _objectSpread$5({}, selectedTextColor !== "inherit" ? {
        "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
          color: selectedTextColor
        }
      } : undefined, {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          backgroundColor: vars["color_" + tint + "_selected_background"]
        }
      }));
    };

    var generalFns$c = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          ".pe-list-tile--header": {
            " .pe-list-tile__primary, pe-list-tile__secondary": {
              backgroundColor: "inherit"
            }
          },
          ":not(.pe-list-tile--disabled):not(.pe-list-tile--selected)": {
            " a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus": {
              outline: "none",
              backgroundColor: "inherit"
            }
          },
          "&.pe-list-tile--sticky": {
            backgroundColor: "inherit"
          }
        })];
      }
    };

    var tintFns$c = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$e(_ref, "color_" + tint + "_title", function (selector, vars) {
        return [sel(selector, {
          color: vars["color_" + tint + "_title"]
        })];
      }), _defineProperty$e(_ref, "color_" + tint + "_background", function (selector, vars) {
        return [sel(selector, {
          backgroundColor: vars["color_" + tint + "_background"],
          "&.pe-list-tile--sticky": {
            backgroundColor: vars["color_" + tint + "_background"]
          }
        })];
      }), _defineProperty$e(_ref, "color_" + tint + "_list_header", function (selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--header": {
            color: vars["color_" + tint + "_list_header"]
          }
        })];
      }), _defineProperty$e(_ref, "color_" + tint + "_subtitle", function (selector, vars) {
        return [sel(selector, {
          " .pe-list-tile__subtitle": {
            color: vars["color_" + tint + "_subtitle"]
          }
        })];
      }), _defineProperty$e(_ref, "color_" + tint + "_secondary", function (selector, vars) {
        return [sel(selector, {
          " .pe-list-tile__secondary": {
            color: vars["color_" + tint + "_secondary"]
          }
        })];
      }), _defineProperty$e(_ref, "color_" + tint + "_front", function (selector, vars) {
        return [sel(selector, {
          " .pe-list-tile__content-front": {
            color: vars["color_" + tint + "_front"]
          }
        })];
      }), _defineProperty$e(_ref, "color_" + tint + "_text_disabled", function (selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--disabled": {
            "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
              color: vars["color_" + tint + "_text_disabled"]
            }
          }
        })];
      }), _defineProperty$e(_ref, "color_" + tint + "_highlight_background", function (selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--highlight:not(.pe-list-tile--selected)": {
            " .pe-list-tile__primary, pe-list-tile__secondary": {
              backgroundColor: vars["color_" + tint + "_highlight_background"]
            }
          }
        })];
      }), _defineProperty$e(_ref, "color_" + tint + "_focus_background", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-list-tile--disabled):not(.pe-list-tile--selected)": {
            " a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus": {
              backgroundColor: vars["color_" + tint + "_focus_background"]
            }
          }
        })];
      }), _defineProperty$e(_ref, "color_" + tint + "_selected_text", function (selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--selected": _selected(selector, vars, tint)
        })];
      }), _defineProperty$e(_ref, "color_" + tint + "_selected_background", function (selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--selected": _selected(selector, vars, tint)
        })];
      }), _ref;
    };

    var hoverTintFns$2 = function hoverTintFns(tint) {
      var _ref2;

      return _ref2 = {}, _defineProperty$e(_ref2, "color_" + tint + "_hover", function (selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--hoverable:not(.pe-list-tile--selected)": {
            color: vars["color_" + tint + "_hover"]
          }
        })];
      }), _defineProperty$e(_ref2, "color_" + tint + "_hover_background", function (selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--hoverable:not(.pe-list-tile--selected)": {
            " .pe-list-tile__primary, .pe-list-tile__secondary": {
              backgroundColor: vars["color_" + tint + "_hover_background"]
            }
          }
        })];
      }), _defineProperty$e(_ref2, "color_" + tint + "_hover_front", function (selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--hoverable:not(.pe-list-tile--selected)": {
            " .pe-list-tile__primary .pe-list-tile__content-front": {
              color: vars["color_" + tint + "_hover_front"]
            }
          }
        })];
      }), _ref2;
    };

    var themeFns = function themeFns(tint) {
      return {
        selected: function selected(selector, vars) {
          return vars.selected && _selected(selector, vars, tint);
        }
      };
    };

    var lightTintFns$c = _extends$d({}, generalFns$c, tintFns$c("light"), themeFns("light"));

    var darkTintFns$c = _extends$d({}, generalFns$c, tintFns$c("dark"), themeFns("dark"));

    var lightTintHoverFns$2 = hoverTintFns$2("light");
    var darkTintHoverFns$2 = hoverTintFns$2("dark");
    var color$d = createColor({
      varFns: {
        lightTintFns: lightTintFns$c,
        darkTintFns: darkTintFns$c,
        lightTintHoverFns: lightTintHoverFns$2,
        darkTintHoverFns: darkTintHoverFns$2
      }
    });

    var alignSide$5 = function alignSide(isRTL) {
      return function (vars) {
        return {
          // eslint-disable-line no-unused-vars
          " .pe-list-tile__content-front + .pe-list-tile__content": _defineProperty$e({}, isRTL ? "paddingRight" : "paddingLeft", 0)
        };
      };
    }; // eslint-disable-line no-unused-vars


    var alignLeft$5 = alignSide$5(false);
    var alignRight$5 = alignSide$5(true);
    /**
     * @param {number} left
     * @param {number} [right]
     */

    var paddingH = function paddingH(left) {
      var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : left;
      return {
        "padding-left": left + "px",
        "padding-right": right + "px"
      };
    };
    /**
     * @param {number} top 
     * @param {number} [bottom] 
     */


    var paddingV = function paddingV(top) {
      var bottom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : top;
      return {
        "padding-top": top + "px",
        "padding-bottom": bottom + "px"
      };
    };
    /**
     * @param {string} selector 
     * @param {ListTileVars} vars 
     */


    var title_line_count_single_line_height = function title_line_count_single_line_height(selector, vars) {
      return sel(selector, {
        lineHeight: vars.single_line_height + "px",
        ".pe-list-tile--navigation": {
          " .pe-list-tile__title": {
            minHeight: vars.single_line_height + "px"
          }
        },
        " .pe-list-tile__title": [mixin.ellipsis(vars.title_line_count, vars.single_line_height, "px")]
      });
    };
    /**
     * @param {string} selector 
     * @param {ListTileVars} vars 
     */


    var unSelectable = function unSelectable(selector, vars) {
      return (// eslint-disable-line no-unused-vars 
        sel(selector, {
          "&, a": {
            pointerEvents: "none"
          }
        })
      );
    };
    /**
     * @param {string} selector 
     * @param {ListTileVars} vars 
     */


    var _inset = function inset(selector, vars) {
      return insetH(selector, vars), insetV(selector, vars);
    };
    /**
     * @param {string} selector 
     * @param {ListTileVars} vars 
     */


    var insetH = function insetH(selector, vars) {
      var margin = vars.inset_h_size;
      return sel(selector, {
        marginLeft: margin + "px",
        marginRight: margin + "px",
        " .pe-list-tile__content": {
          marginLeft: -margin + "px",
          marginRight: -margin + "px"
        }
      });
    };
    /**
     * @param {string} selector 
     * @param {ListTileVars} vars 
     */


    var insetV = function insetV(selector, vars) {
      var margin = vars.inset_v_size;
      return sel(selector, {
        marginTop: margin + "px",
        marginBottom: margin + "px"
      });
    };
    /**
     * @param {string} selector 
     * @param {ListTileVars} vars 
     */


    var _rounded = function rounded(selector, vars) {
      return sel(selector, {
        "&, .pe-list-tile__primary": {
          borderRadius: vars.rounded_border_radius + "px"
        }
      });
    };

    var varFns$e = {
      /**
       * @param {string} selector 
       * @param {ListTileVars} vars 
       */
      general_styles: function general_styles(selector, vars) {
        return [sel(selector, [alignLeft$5(vars), flex$1.layout, {
          position: "relative",
          ".pe-list-tile--navigation": {
            " .pe-list-tile__title": {
              whiteSpace: "pre-wrap"
            }
          },
          ".pe-list-tile--sticky": mixin.sticky(2),
          ".pe-list-tile--inset-h": insetH(selector, vars),
          ".pe-list-tile--inset-v": insetV(selector, vars),
          " .pe-list-tile__primary": {
            width: "100%"
          },
          " .pe-list-tile__primary, .pe-list-tile__secondary": [flex$1.layoutHorizontal, mixin.defaultTransition("background", ".200s"), {
            textDecoration: "none",
            color: "inherit",
            border: "none"
          }],
          ":not(.pe-list-tile--header) .pe-list-tile__primary": [flex$1.flex(), {
            position: "relative",
            " .pe-list-tile__content:not(.pe-list-tile__content-front)": [flex$1.flex()]
          }],
          ":not(.pe-list-tile--disabled)": {
            outline: "none"
          },
          " .pe-list-tile__secondary": {
            textAlign: "right",
            position: "relative"
          },
          " .pe-list-tile__content": [flex$1.layoutVertical, flex$1.selfCenter, {
            width: "100%",
            ".pe-list-tile__content-front": {
              flexShrink: 0
            }
          }],
          " .pe-list-tile__title": {
            whiteSpace: "normal"
          },
          " .pe-list-tile__subtitle": [mixin.ellipsis(vars.subtitle_line_count, vars.line_height_subtitle, "px"), {
            fontSize: vars.font_size_subtitle + "px",
            fontWeight: vars.font_weight_subtitle,
            lineHeight: vars.line_height_subtitle + "px",
            ".pe-list-tile__high-subtitle": [mixin.ellipsis(vars.high_subtitle_line_count, vars.line_height_subtitle, "px"), {
              whiteSpace: "normal"
            }]
          }],
          ".pe-list-tile--selected, &.pe-list-tile--disabled": unSelectable(selector),
          ".pe-list-tile--subtitle": {
            " .pe-list-tile__content": {
              " .pe-list-tile__title": {
                padding: 0
              }
            }
          },
          ".pe-list-tile--high-subtitle": {
            " .pe-list-tile--high-subtitle .pe-list-tile__secondary": [flex$1.layoutHorizontal, flex$1.layoutStart],
            " .pe-list-tile__content": [flex$1.selfStart, {
              " .pe-list-tile__title": {
                padding: 0
              }
            }]
          },
          // List header
          ".pe-list-tile--header": {
            pointerEvents: "none",
            " .pe-list-tile__content": {
              paddingTop: 0,
              paddingBottom: 0
            },
            " .pe-list-tile__title": {
              padding: 0
            }
          },
          // Firefox only
          "@supports (-moz-appearance:none) and (display:contents)": {
            " .pe-list-tile__primary, .pe-list-tile__content": {
              overflow: "hidden"
            }
          },
          // Menu
          ".pe-dialog .pe-menu__content &": {
            " .pe-list-tile__content": {
              paddingLeft: "24px",
              paddingRight: "24px"
            },
            " .pe-list-tile__content-front": {
              paddingRight: 0,
              width: "64px",
              marginRight: "-7px"
            },
            " .pe-list-tile__title": mixin.ellipsis("none")
          },
          ".pe-menu__content &": {
            ":not(.pe-list-tile--disabled)": {
              cursor: "default",
              "&, .pe-list-tile__primary, .pe-list-tile__secondary": {
                " .pe-list-tile__title, .pe-list-tile__subtitle": {
                  userSelect: "none",
                  "-moz-user-select": "none"
                }
              }
            }
          },
          // Non-touch
          "html.pe-no-touch &.pe-list-tile--hoverable, \
        html.pe-no-touch &.pe-list-tile--selectable": {
            ":not(.pe-list-tile--header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover": {
              cursor: "pointer"
            }
          }
        }]), _defineProperty$e({}, selectorRTL(selector), alignRight$5(vars))];
      },
      title_line_count: function title_line_count(selector, vars) {
        return [title_line_count_single_line_height(selector, vars)];
      },
      single_line_height: function single_line_height(selector, vars) {
        return [title_line_count_single_line_height(selector, vars)];
      },
      font_size_title: function font_size_title(selector, vars) {
        return [sel(selector, {
          fontSize: vars.font_size_title + "px",
          " .pe-list-tile__secondary": {
            fontSize: vars.font_size_title + "px"
          }
        })];
      },
      font_weight_title: function font_weight_title(selector, vars) {
        return [sel(selector, {
          fontWeight: vars.font_weight_title
        })];
      },
      font_size_navigation_title: function font_size_navigation_title(selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--navigation": {
            fontSize: vars.font_size_navigation_title + "px"
          }
        })];
      },
      font_weight_navigation_title: function font_weight_navigation_title(selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--navigation": {
            fontWeight: vars.font_weight_navigation_title
          }
        })];
      },
      padding: function padding(selector, vars) {
        return [sel(selector, {
          ":not(.pe-list-tile--header)": {
            " .pe-list-tile__content:not(.pe-list-tile__content-front)": [paddingV(vars.padding, vars.padding + 1)]
          },
          " .pe-list-tile__content": {
            ".pe-list-tile__content-front": [paddingV(vars.padding - 5)]
          }
        })];
      },
      side_padding: function side_padding(selector, vars) {
        return [sel(selector, {
          " .pe-list-tile__content": [paddingH(vars.side_padding)]
        })];
      },
      inset_size: function inset_size(selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--inset": _inset(selector, vars)
        })];
      },
      rounded_border_radius: function rounded_border_radius(selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--rounded": _rounded(selector, vars)
        })];
      },
      compact_front_item_width: function compact_front_item_width(selector, vars) {
        return [sel(selector, {
          " .pe-list-tile__content-front": {
            ".pe-list-tile--compact-front": {
              width: vars.compact_front_item_width + "px"
            }
          }
        })];
      },
      front_item_width: function front_item_width(selector, vars) {
        return [sel(selector, {
          " .pe-list-tile__content-front": {
            ":not(.pe-list-tile--compact-front)": {
              width: vars.front_item_width + "px"
            }
          }
        })];
      },
      font_size_small: function font_size_small(selector, vars) {
        return [sel(selector, {
          " .pe-list-tile__content": {
            " small": {
              fontSize: vars.font_size_small + "px"
            }
          }
        })];
      },
      has_high_subtitle_padding: function has_high_subtitle_padding(selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--high-subtitle": {
            " .pe-list-tile__content": [paddingV(vars.has_high_subtitle_padding, vars.has_high_subtitle_padding + 1)]
          }
        })];
      },
      has_subtitle_padding: function has_subtitle_padding(selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--subtitle": {
            " .pe-list-tile__content": [paddingV(vars.has_subtitle_padding, vars.has_subtitle_padding + 1)]
          }
        })];
      },
      single_height: function single_height(selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--header": {
            height: vars.single_height + "px",
            " .pe-list-tile__title": [mixin.ellipsis(1, vars.single_height, "px"), {
              lineHeight: vars.single_height + "px",
              padding: 0
            }]
          }
        })];
      },
      font_size_list_header: function font_size_list_header(selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--header": {
            " .pe-list-tile__title": {
              fontSize: vars.font_size_list_header + "px"
            }
          }
        })];
      },
      font_weight_list_header: function font_weight_list_header(selector, vars) {
        return [sel(selector, {
          ".pe-list-tile--header": {
            " .pe-list-tile__title": {
              fontWeight: vars.font_weight_list_header
            }
          }
        })];
      },
      compact_padding: function compact_padding(selector, vars) {
        return [sel(selector, {
          " .pe-list--compact &, &.pe-list-tile--compact": {
            ":not(.pe-list-tile--header)": {
              " .pe-list-tile__content:not(.pe-list-tile__content-front)": paddingV(vars.compact_padding, vars.compact_padding + 1)
            }
          }
        })];
      },
      // Theme vars
      inset: function inset(selector, vars) {
        return vars.inset && _inset(selector, vars);
      },
      inset_h: function inset_h(selector, vars) {
        return vars.inset_h && insetH(selector, vars);
      },
      inset_v: function inset_v(selector, vars) {
        return vars.inset_h && insetV(selector, vars);
      },
      rounded: function rounded(selector, vars) {
        return vars.rounded && _rounded(selector, vars);
      },
      selected: function selected(selector, vars) {
        return vars.selected && unSelectable(selector);
      }
    };
    var layout$g = createLayout({
      varFns: varFns$e
    });

    //
    // heights:
    // single line: 48
    // single line, dense: 40
    // single line, with icon: 48
    // single line, with icon, dense: 40
    // single line, with avatar: 56
    // single line, with avatar, dense: 48
    // two-line: 72
    // two-line, dense: 60
    // three-line: 88
    // three-line, dense: 76

    var single_height = 48;
    var padding = 8;
    var single_with_icon_height = 56;
    var themeVars$4 = {
      inset: false,
      inset_h: false,
      inset_v: false,
      selected: false,
      rounded: false
    };
    /**
     * @type {ListTileVars} listTileVars
     */

    var listTileVars = _objectSpread$5({
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      compact_front_item_width: 64,
      compact_padding: 9,
      compact_side_padding: 1 * vars.grid_unit_component,
      font_size_list_header: 14,
      font_size_navigation_title: 14,
      font_size_small: 12,
      font_size_subtitle: 14,
      font_size_title: 16,
      font_weight_list_header: vars.font_weight_medium,
      font_weight_navigation_title: vars.font_weight_medium,
      font_weight_subtitle: vars.font_weight_normal,
      font_weight_title: vars.font_weight_normal,
      front_item_width: 72,
      has_high_subtitle_padding: 13,
      has_subtitle_padding: 15,
      high_subtitle_line_count: 2,
      inset_h_size: 1 * vars.grid_unit_component,
      // 8
      inset_v_size: 1 * vars.grid_unit_component,
      // 8
      line_height_subtitle: 20,
      padding: 13,
      rounded_border_radius: vars.unit_item_border_radius,
      side_padding: 2 * vars.grid_unit_component,
      // 16
      single_height: single_height,
      single_line_height: single_height - 2 * padding - (2 * 5 + 1),
      single_with_icon_height: single_with_icon_height,
      single_with_icon_line_height: single_with_icon_height - 2 * padding - (2 * 5 + 1),
      subtitle_line_count: 1,
      title_line_count: 1,
      color_light_title: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
      color_light_subtitle: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
      color_light_info: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
      color_light_front: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
      color_light_text_disabled: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
      color_light_list_header: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
      color_light_secondary: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
      color_light_hover: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
      color_light_hover_front: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
      color_light_hover_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
      color_light_focus_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
      color_light_selected_text: "inherit",
      color_light_selected_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
      color_light_highlight_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
      // background color may be set in theme; disabled by default
      // color_light_background:          "inherit",
      color_dark_title: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
      color_dark_subtitle: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
      color_dark_info: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
      color_dark_front: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
      color_dark_text_disabled: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
      color_dark_list_header: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
      color_dark_secondary: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
      color_dark_hover: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
      color_dark_hover_front: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
      color_dark_hover_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
      color_dark_selected_text: "inherit",
      color_dark_selected_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
      color_dark_highlight_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover)
    }, themeVars$4);

    // @ts-check
    var fns$e = [layout$g, color$d];
    var selector$f = ".".concat(classes$f.component);

    var addGeneralStyleToHead$f = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$f],
        fns: fns$e,
        vars: listTileVars
      });
    };

    var classes$g = {
      component: "pe-md-spinner",
      // elements
      animation: "pe-md-spinner__animation",
      circle: "pe-md-spinner__circle",
      circleClipper: "pe-md-spinner__circle-clipper",
      circleClipperLeft: "pe-md-spinner__circle-clipper-left",
      circleClipperRight: "pe-md-spinner__circle-clipper-right",
      gapPatch: "pe-md-spinner__gap-patch",
      layer: "pe-md-spinner__layer",
      layerN: "pe-md-spinner__layer-"
    };

    function _defineProperty$f(obj, key, value) {
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

    function _extends$e() {
      _extends$e = Object.assign || function (target) {
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

      return _extends$e.apply(this, arguments);
    }

    /*
    Styling derived from https://github.com/PolymerElements/paper-spinner

    @license
    Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */

    var generalFns$d = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          " .pe-md-spinner__layer": {
            borderColor: "currentcolor"
          }
        })];
      }
    };

    var tintFns$d = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$f(_ref, "color_" + tint + "_single", function (selector, vars) {
        return [sel(selector, {
          color: vars["color_" + tint + "_single"]
        })];
      }), _defineProperty$f(_ref, "color_" + tint + "_1", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-spinner--single-color)": {
            " .pe-md-spinner__layer-1": {
              borderColor: vars["color_" + tint + "_1"]
            }
          }
        })];
      }), _defineProperty$f(_ref, "color_" + tint + "_2", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-spinner--single-color)": {
            " .pe-md-spinner__layer-2": {
              borderColor: vars["color_" + tint + "_2"]
            }
          }
        })];
      }), _defineProperty$f(_ref, "color_" + tint + "_3", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-spinner--single-color)": {
            " .pe-md-spinner__layer-3": {
              borderColor: vars["color_" + tint + "_3"]
            }
          }
        })];
      }), _defineProperty$f(_ref, "color_" + tint + "_4", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-spinner--single-color)": {
            " .pe-md-spinner__layer-4": {
              borderColor: vars["color_" + tint + "_4"]
            }
          }
        })];
      }), _ref;
    };

    var lightTintFns$d = _extends$e({}, generalFns$d, tintFns$d("light"));

    var darkTintFns$d = _extends$e({}, generalFns$d, tintFns$d("dark"));

    var color$e = createColor({
      varFns: {
        lightTintFns: lightTintFns$d,
        darkTintFns: darkTintFns$d
      },
      superColor: color
    });

    var OPACITY_MIN = 0;
    var OPACITY_MAX = .99;
    var CURVE_INFINITE = "cubic-bezier(0.4, 0.0, 0.2, 1) infinite both";

    var kfRotate = function kfRotate() {
      return {
        " to": {
          transform: "rotate(360deg)"
        }
      };
    };

    var kfLeftSpin = function kfLeftSpin() {
      return kfSpin(1);
    };

    var kfRightSpin = function kfRightSpin() {
      return kfSpin(-1);
    };

    var kfSpin = function kfSpin(direction) {
      return {
        " from": {
          "transform": "rotate(" + direction * 130 + "deg)"
        },
        " 50%": {
          "transform": "rotate(" + direction * -5 + "deg)"
        },
        " to": {
          "transform": "rotate(" + direction * 130 + "deg)"
        }
      };
    };

    var kfFadeOut = function kfFadeOut() {
      return {
        " from": {
          opacity: OPACITY_MAX
        },
        " to": {
          opacity: OPACITY_MIN
        }
      };
    };

    var kfFillUnfillRotate = function kfFillUnfillRotate(arcSize) {
      return {
        " 12.5%": {
          transform: "rotate(" + 0.5 * arcSize + "deg)"
        },
        " 25%": {
          transform: "rotate(" + 1.0 * arcSize + "deg)"
        },
        " 37.5%": {
          transform: "rotate(" + 1.5 * arcSize + "deg)"
        },
        " 50%": {
          transform: "rotate(" + 2.0 * arcSize + "deg)"
        },
        " 62.5%": {
          transform: "rotate(" + 2.5 * arcSize + "deg)"
        },
        " 75%": {
          transform: "rotate(" + 3.0 * arcSize + "deg)"
        },
        " 87.5%": {
          transform: "rotate(" + 3.5 * arcSize + "deg)"
        },
        " to": {
          transform: "rotate(" + 4.0 * arcSize + "deg)"
        }
      };
    };
    /**
     * HACK: Even though the intention is to have the current .pe-md-spinner__layer at
     * `opacity: 1`, we set it to `opacity: 0.99` instead since this forces Chrome
     * to do proper subpixel rendering for the elements being animated. This is
     * especially visible in Chrome 39 on Ubuntu 14.04. See:
     *
     * - https://github.com/Polymer/paper-spinner/issues/9
     * - https://code.google.com/p/chromium/issues/detail?id=436255
     */


    var kfLayer1FadeInOut = function kfLayer1FadeInOut() {
      return {
        " from": {
          opacity: OPACITY_MAX
        },
        " 25%": {
          opacity: OPACITY_MAX
        },
        " 26%": {
          opacity: OPACITY_MIN
        },
        " 89%": {
          opacity: OPACITY_MIN
        },
        " 90%": {
          opacity: OPACITY_MAX
        },
        " 100%": {
          opacity: OPACITY_MAX
        }
      };
    };

    var kfLayer2FadeInOut = function kfLayer2FadeInOut() {
      return {
        " from": {
          opacity: OPACITY_MIN
        },
        " 15%": {
          opacity: OPACITY_MIN
        },
        " 25%": {
          opacity: OPACITY_MAX
        },
        " 50%": {
          opacity: OPACITY_MAX
        },
        " 51%": {
          opacity: OPACITY_MIN
        }
      };
    };

    var kfLayer3FadeInOut = function kfLayer3FadeInOut() {
      return {
        " from": {
          opacity: OPACITY_MIN
        },
        " 40%": {
          opacity: OPACITY_MIN
        },
        " 50%": {
          opacity: OPACITY_MAX
        },
        " 75%": {
          opacity: OPACITY_MAX
        },
        " 76%": {
          opacity: OPACITY_MIN
        }
      };
    };

    var kfLayer4FadeInOut = function kfLayer4FadeInOut() {
      return {
        " from": {
          opacity: OPACITY_MIN
        },
        " 65%": {
          opacity: OPACITY_MIN
        },
        " 75%": {
          opacity: OPACITY_MAX
        },
        " 90%": {
          opacity: OPACITY_MAX
        },
        " 100%": {
          opacity: OPACITY_MIN
        }
      };
    };

    var layerAnimation = function layerAnimation(vars, num) {
      return _defineProperty$f({}, ".pe-md-spinner__layer-" + num, {
        animation: "mdSpinnerFillUnfillRotate " + 4 * vars.arc_time + "s " + CURVE_INFINITE + ",  mdSpinnerLayer" + num + "FadeInOut " + 4 * vars.arc_time + "s " + CURVE_INFINITE
      });
    };

    var varFns$f = {
      general_styles: function general_styles(selector, vars) {
        return [sel(selector, {
          "@keyframes mdSpinnerRotate": kfRotate(),
          "@keyframes mdSpinnerRightSpin": kfRightSpin(),
          "@keyframes mdSpinnerLeftSpin": kfLeftSpin(),
          "@keyframes mdSpinnerFadeOut": kfFadeOut(),
          "@keyframes mdSpinnerLayer1FadeInOut": kfLayer1FadeInOut(),
          "@keyframes mdSpinnerLayer2FadeInOut": kfLayer2FadeInOut(),
          "@keyframes mdSpinnerLayer3FadeInOut": kfLayer3FadeInOut(),
          "@keyframes mdSpinnerLayer4FadeInOut": kfLayer4FadeInOut(),
          " .pe-md-spinner__animation": {
            position: "relative",
            width: "100%",
            height: "100%",

            /* The spinner does not have any contents that would have to be
            * flipped if the direction changes. Always use ltr so that the
            * style works out correctly in both cases. */
            direction: "ltr"
          },

          /**
          * Patch the gap that appear between the two adjacent div.pe-md-spinner__circle-clipper while the
          * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).
          *
          * Update: the gap no longer appears on Chrome when .pe-md-spinner__layer"s opacity is 0.99,
          * but still does on Safari and IE.
          */
          " .pe-md-spinner__gap-patch": {
            position: "absolute",
            boxSizing: "border-box",
            top: 0,
            left: "45%",
            width: "10%",
            height: "100%",
            overflow: "hidden",
            borderColor: "inherit"
          },
          " .pe-md-spinner__gap-patch .pe-md-spinner__circle": {
            width: "1000%",
            left: "-450%"
          },
          " .pe-md-spinner__circle-clipper": {
            display: "inline-block",
            fontSize: 0,
            lineHeight: 0,
            position: "relative",
            width: "50%",
            height: "100%",
            overflow: "hidden",
            borderColor: "inherit"
          },
          " .pe-md-spinner__circle-clipper .pe-md-spinner__circle": {
            width: "200%"
          },
          " .pe-md-spinner__circle": [mixin.fit(), {
            animation: "none",
            boxSizing: "border-box",
            height: "100%",
            borderStyle: "solid",
            borderColor: "inherit",
            borderRadius: "50%",
            borderBottomColor: "transparent !important"
          }],
          " .pe-md-spinner__circle-clipper-left .pe-md-spinner__circle": {
            transform: "rotate(129deg)",
            borderRightColor: "transparent !important"
          },
          " .pe-md-spinner__circle-clipper-right .pe-md-spinner__circle": {
            transform: "rotate(-129deg)",
            left: "-100%",
            borderLeftColor: "transparent !important"
          },

          /**
          * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
          *
          * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn"t
          * guarantee that the animation will start _exactly_ after that value. So we avoid using
          * animation-delay and instead set custom keyframes for each color (as redundant as it
          * seems).
          *
          * We write out each animation in full (instead of separating animation-name,
          * animation-duration, etc.) because under the polyfill, Safari does not recognize those
          * specific properties properly, treats them as -webkit-animation, and overrides the
          * other animation rules. See https://github.com/Polymer/platform/issues/53.
          */
          " .pe-md-spinner__layer": [[1, 2, 3, 4].map(function (num) {
            return layerAnimation(vars, num);
          }), {
            position: "absolute",
            width: "100%",
            height: "100%",
            whiteSpace: "nowrap"
          }]
        })];
      },
      rotation_duration: function rotation_duration(selector, vars) {
        return [sel(selector, {
          " .pe-md-spinner__animation": {
            animation: "mdSpinnerRotate " + vars.rotation_duration + "s linear infinite"
          }
        })];
      },
      border_width_small: function border_width_small(selector, vars) {
        return [sel(selector, {
          ".pe-spinner--small": {
            " .pe-md-spinner__circle": {
              borderWidth: vars.border_width_small + "px"
            }
          }
        })];
      },
      border_width_regular: function border_width_regular(selector, vars) {
        return [sel(selector, {
          ".pe-spinner--regular": {
            " .pe-md-spinner__circle": {
              borderWidth: vars.border_width_regular + "px"
            }
          }
        })];
      },
      border_width_medium: function border_width_medium(selector, vars) {
        return [sel(selector, {
          ".pe-spinner--medium": {
            " .pe-md-spinner__circle": {
              borderWidth: vars.border_width_medium + "px"
            }
          }
        })];
      },
      border_width_large: function border_width_large(selector, vars) {
        return [sel(selector, {
          ".pe-spinner--large": {
            " .pe-md-spinner__circle": {
              borderWidth: vars.border_width_large + "px"
            }
          }
        })];
      },
      border_width_fab: function border_width_fab(selector, vars) {
        return [sel(selector, {
          ".pe-spinner--fab": {
            " .pe-md-spinner__circle": {
              borderWidth: vars.border_width_fab + "px"
            }
          }
        })];
      },
      arc_size: function arc_size(selector, vars) {
        return [sel(selector, {
          "@keyframes mdSpinnerFillUnfillRotate": kfFillUnfillRotate(vars.arc_size)
        })];
      },
      arc_time: function arc_time(selector, vars) {
        return [sel(selector, {
          " .pe-md-spinner__circle-clipper-left .pe-md-spinner__circle": {
            animation: "mdSpinnerLeftSpin " + vars.arc_time + "s " + CURVE_INFINITE
          },
          " .pe-md-spinner__circle-clipper-right .pe-md-spinner__circle": {
            animation: "mdSpinnerRightSpin " + vars.arc_time + "s " + CURVE_INFINITE
          },
          " .pe-md-spinner__layer": {
            animation: "mdSpinnerFillUnfillRotate " + 4 * vars.arc_time + "s " + CURVE_INFINITE
          }
        })];
      }
    };
    var layout$h = createLayout({
      varFns: varFns$f,
      superLayout: layout$1
    });

    // @ts-check
    var arc_size = 270; // degrees - amount of circle the arc takes up

    var arc_time = 1.333; // s - time it takes to expand and contract arc

    var arc_start_degrees = 360 / 5 * 3; // degrees - how much the start location of the arc should rotate each time, 216 gives us a 5 pointed star shape (it"s 360/5 * 3). For a 7 pointed star, we might do 360/7 * 3 = 154.286.

    var rotation_duration = 360 * arc_time / (arc_start_degrees + (360 - arc_size)); // 1.568s

    var blue400 = "#42a5f5";
    var red500 = "#f44336";
    var yellow600 = "#fdd835";
    var green500 = "#4caf50";
    /**
     * @type {MaterialDesignSpinnerVars} materialDesignSpinnerVars
     */

    var materialDesignSpinnerVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      arc_size: arc_size,
      arc_start_degrees: arc_start_degrees,
      arc_time: arc_time,
      border_width_fab: baseSpinnerVars.size_fab / baseSpinnerVars.size_regular * 3,
      border_width_large: baseSpinnerVars.size_large / baseSpinnerVars.size_regular * 3,
      border_width_medium: baseSpinnerVars.size_medium / baseSpinnerVars.size_regular * 3,
      border_width_regular: 3,
      border_width_small: baseSpinnerVars.size_small / baseSpinnerVars.size_regular * 3,
      rotation_duration: rotation_duration,
      color_light_single: rgba(vars.color_primary),
      color_light_1: blue400,
      color_light_2: red500,
      color_light_3: yellow600,
      color_light_4: green500,
      color_dark_single: rgba(vars.color_primary),
      color_dark_1: blue400,
      color_dark_2: red500,
      color_dark_3: yellow600,
      color_dark_4: green500
    };

    // @ts-check
    var fns$f = [layout$h, color$e];
    var selector$g = ".".concat(classes$g.component);

    var addGeneralStyleToHead$g = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$g],
        fns: fns$f,
        vars: materialDesignSpinnerVars
      });
    };

    var classes$h = {
      component: "pe-md-progress-spinner",
      // elements
      animation: "pe-md-progress-spinner__animation",
      circle: "pe-md-progress-spinner__circle",
      circleRight: "pe-md-progress-spinner__circle-right",
      circleLeft: "pe-md-progress-spinner__circle-left"
    };

    function _defineProperty$g(obj, key, value) {
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

    function _extends$f() {
      _extends$f = Object.assign || function (target) {
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

      return _extends$f.apply(this, arguments);
    }

    var generalFns$e = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          " .pe-md-progress-spinner__circle": {
            borderColor: "currentcolor"
          }
        })];
      }
    };

    var tintFns$e = function tintFns(tint) {
      return _defineProperty$g({}, "color_" + tint, function (selector, vars) {
        return [sel(selector, {
          color: vars["color_" + tint]
        })];
      });
    };

    var lightTintFns$e = _extends$f({}, generalFns$e, tintFns$e("light"));

    var darkTintFns$e = _extends$f({}, generalFns$e, tintFns$e("dark"));

    var color$f = createColor({
      varFns: {
        lightTintFns: lightTintFns$e,
        darkTintFns: darkTintFns$e
      },
      superColor: color$e
    });

    // @ts-check
    var varFns$g = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          position: "relative",
          " .pe-md-progress-spinner__animation": {
            position: "absolute",
            width: "100%",
            height: "100%"
          },
          " .pe-md-progress-spinner__circle": {
            position: "absolute",
            boxSizing: "border-box",
            width: "100%",
            height: "100%",
            borderStyle: "solid",
            borderRadius: "50%"
          },
          " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
            transform: "rotate(0)",
            clip: "rect(0, 0, 0, 0)"
          }
        })];
      },
      progress_animation_duration: function progress_animation_duration(selector, vars) {
        return [sel(selector, {
          " .pe-md-progress-spinner__animation": {
            animationDuration: vars.progress_animation_duration
          }
        })];
      }
    };
    var layout$i = createLayout({
      varFns: varFns$g,
      superLayout: layout$h
    });

    // @ts-check
    /**
     * @type {MaterialDesignProgressSpinnerVars} materialDesignProgressSpinnerVars
     */

    var materialDesignProgressSpinnerVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      progress_animation_duration: ".8s",
      color_light: rgba(vars.color_primary),
      color_dark: rgba(vars.color_primary)
    };

    // @ts-check
    var fns$g = [layout$i, color$f];
    var selector$h = ".".concat(classes$h.component);

    var addGeneralStyleToHead$h = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$h],
        fns: fns$g,
        vars: materialDesignProgressSpinnerVars
      });
    };

    var listTileClasses$3 = {
      component: "pe-list-tile",
      // elements
      content: "pe-list-tile__content",
      highSubtitle: "pe-list-tile__high-subtitle",
      primary: "pe-list-tile__primary",
      secondary: "pe-list-tile__secondary",
      subtitle: "pe-list-tile__subtitle",
      title: "pe-list-tile__title",
      contentFront: "pe-list-tile__content-front",
      // states  
      compact: "pe-list-tile--compact",
      compactFront: "pe-list-tile--compact-front",
      disabled: "pe-list-tile--disabled",
      hasFront: "pe-list-tile--front",
      hasHighSubtitle: "pe-list-tile--high-subtitle",
      hasSubtitle: "pe-list-tile--subtitle",
      header: "pe-list-tile--header",
      hoverable: "pe-list-tile--hoverable",
      insetH: "pe-list-tile--inset-h",
      insetV: "pe-list-tile--inset-v",
      selectable: "pe-list-tile--selectable",
      selected: "pe-list-tile--selected",
      rounded: "pe-list-tile--rounded",
      highlight: "pe-list-tile--highlight",
      sticky: "pe-list-tile--sticky",
      navigation: "pe-list-tile--navigation"
    };

    var classes$i = {
      component: "pe-menu",
      // elements
      panel: "pe-menu__panel",
      content: "pe-menu__content",
      placeholder: "pe-menu__placeholder",
      backdrop: "pe-menu__backdrop",
      // states
      floating: "pe-menu--floating",
      origin: "pe-menu--origin",
      permanent: "pe-menu--permanent",
      showBackdrop: "pe-menu--backdrop",
      visible: "pe-menu--visible",
      width_auto: "pe-menu--width-auto",
      width_n: "pe-menu--width-",
      isTopMenu: "pe-menu--top-menu",
      // lookup
      listTile: listTileClasses$3.component,
      selectedListTile: listTileClasses$3.selected
    };

    function _defineProperty$h(obj, key, value) {
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

    function _extends$g() {
      _extends$g = Object.assign || function (target) {
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

      return _extends$g.apply(this, arguments);
    }

    function _objectSpread$6(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty$h(target, key, source[key]);
        });
      }

      return target;
    }

    var generalFns$f = {
      general_styles: function general_styles(selector) {
        return [];
      } // eslint-disable-line no-unused-vars

    };

    var tintFns$f = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$h(_ref, "color_" + tint + "_background", function (selector, vars) {
        return [sel(selector, {
          " .pe-menu__panel": {
            "background-color": vars["color_" + tint + "_background"]
          }
        })];
      }), _defineProperty$h(_ref, "color_" + tint + "_backdrop_background", function (selector, vars) {
        return [sel(selector, {
          " .pe-menu__backdrop": {
            "background-color": vars["color_" + tint + "_backdrop_background"]
          }
        })];
      }), _ref;
    };

    var lightTintFns$f = _extends$g({}, generalFns$f, tintFns$f("light"));

    var darkTintFns$f = _extends$g({}, generalFns$f, tintFns$f("dark"));

    var color$g = createColor({
      varFns: {
        lightTintFns: lightTintFns$f,
        darkTintFns: darkTintFns$f
      }
    });

    var behaviorVars$1 = {
      top_menu: false // set to true to position the menu at the top of the screen, full width

    };

    var themeVars$5 = _objectSpread$6({
      backdrop: undefined,
      // (Boolean) - if not set, backdrop existence is set by component option
      z: vars.z_menu
    }, behaviorVars$1, sharedVars);
    /**
     * @type {MenuVars} menuVars
     */


    var menuVars = _objectSpread$6({
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      animation_delay: "0s",
      animation_duration: ".180s",
      animation_hide_css: "opacity: 0;",
      animation_hide_origin_effect_css: "transform: scale(0.75);",
      // set to "transform: scale(1)" to reset scaling
      animation_show_css: "opacity: 1;",
      animation_show_origin_effect_css: "transform: scale(1);",
      animation_timing_function: "ease-in-out",
      border_radius: vars.unit_block_border_radius,
      height: undefined,
      // (height value with unit) - if not set, height is set by component option
      min_width: 1.5,
      width_factor: vars.grid_unit_menu,
      widths: [1, 1.5, 2, 3, 4, 5, 6, 7],
      // color vars
      color_light_background: rgba(vars.color_light_background),
      color_dark_background: rgba(vars.color_dark_background),
      color_light_backdrop_background: "rgba(0, 0, 0, .1)",
      color_dark_backdrop_background: "rgba(0, 0, 0, .5)"
    }, themeVars$5);

    /**
     * 
     * @param {boolean} isRTL 
     */

    var alignSide$6 = function alignSide(isRTL) {
      return function () {
        return {
          textAlign: isRTL ? "right" : "left"
        };
      };
    };

    var alignLeft$6 = alignSide$6(false);
    var alignRight$6 = alignSide$6(true);

    var unifyWidth = function unifyWidth(vars, width) {
      return width < vars.min_width ? vars.min_width : width;
    };

    var widthClass = function widthClass(width) {
      var widthStr = width.toString().replace(".", "-");
      return "pe-menu--width-" + widthStr;
    };
    /**
     * 
     * @param {object} params
     * @param {object} params.vars
     * @param {number} params.width
     * @param {string} [params.value]
     */


    var widthStyle = function widthStyle(_ref) {
      var vars = _ref.vars,
          width = _ref.width,
          value = _ref.value;
      var s = unifyWidth(vars, width);
      return _defineProperty$h({}, "." + widthClass(s), {
        " .pe-menu__panel": {
          width: value || vars.width_factor * s + "px" // We can't set maxWidth because we don't know the width of the container

        }
      });
    };

    var widths_min_width_width_factor = function widths_min_width_width_factor(selector, vars$1) {
      return sel(selector, [vars$1.widths.map(function (width) {
        return widthStyle({
          vars: vars$1,
          width: width
        });
      }), {
        " .pe-menu__panel": {
          minWidth: vars.grid_unit_menu * vars$1.min_width + "px"
        }
      }]);
    };

    var _backdrop$2 = function backdrop(selector, vars) {
      return (// eslint-disable-line no-unused-vars
        sel(selector, {
          " .pe-menu__backdrop": {
            display: "block"
          }
        })
      );
    };

    var _top_menu = function top_menu(selector, vars) {
      return sel(selector, [vars.widths.map(function (width) {
        return widthStyle({
          vars: vars,
          width: width,
          value: "100vw"
        });
      }), createMarker(vars, behaviorVars$1), {
        " .pe-menu__panel": {
          position: "fixed",
          width: "100vw",
          top: 0,
          left: 0,
          right: 0,
          bottom: "auto",
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0
        }
      }]);
    };

    var _z = function z(selector, vars) {
      return sel(selector, {
        ".pe-menu--floating": {
          " .pe-menu__panel, .pe-menu__backdrop": {
            zIndex: vars.z
          }
        }
      });
    };

    var varFns$h = _objectSpread$6({
      general_styles: function general_styles(selector, vars) {
        return [sel(selector, [alignLeft$6(), {
          position: "static",
          ".pe-menu--width-auto": {
            width: "auto"
          },
          ".pe-menu--permanent": {
            " .pe-menu__panel": {
              opacity: 1,
              position: "relative"
            }
          },
          ".pe-menu--floating": {
            " .pe-menu__panel": {
              transitionProperty: "opacity, transform"
            }
          },
          " .pe-menu__panel": {
            transitionProperty: "all",
            opacity: 0,
            position: "absolute"
          },
          " .pe-menu__backdrop": {
            display: "none",
            transitionProperty: "all",
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: 0
          },
          ".pe-menu--backdrop": _backdrop$2(selector),
          ".pe-menu--visible .pe-menu__backdrop": {
            opacity: 1
          },
          ".pe-menu--top-menu": _top_menu(selector, vars),
          " .pe-menu__content": {
            overflowX: "auto",
            overflowY: "auto",
            width: "100%",
            height: "100%"
          },
          ".pe-menu--full-height": {
            height: "100%",
            " .pe-menu__panel": {
              height: "100%"
            }
          }
        }]), _defineProperty$h({}, selectorRTL(selector), alignRight$6())];
      },
      animation_delay: function animation_delay(selector, vars) {
        return [sel(selector, {
          " .pe-menu__panel, .pe-menu__backdrop": {
            transitionDelay: vars.animation_delay
          }
        })];
      },
      animation_duration: function animation_duration(selector, vars) {
        return [sel(selector, {
          " .pe-menu__panel, .pe-menu__backdrop": {
            transitionDuration: vars.animation_duration
          }
        })];
      },
      animation_timing_function: function animation_timing_function(selector, vars) {
        return [sel(selector, {
          " .pe-menu__panel, .pe-menu__backdrop": {
            transitionTimingFunction: vars.animation_timing_function
          }
        })];
      },
      animation_show_css: function animation_show_css(selector, vars) {
        return [sel(selector, {
          ".pe-menu--visible": {
            " .pe-menu__panel": vars.animation_show_css
          }
        })];
      },
      animation_hide_css: function animation_hide_css(selector, vars) {
        return [sel(selector, {
          " .pe-menu__panel": vars.animation_hide_css
        })];
      },
      animation_show_origin_effect_css: function animation_show_origin_effect_css(selector, vars) {
        return [sel(selector, {
          ".pe-menu--origin.pe-menu--visible": {
            " .pe-menu__panel": vars.animation_show_origin_effect_css
          }
        })];
      },
      animation_hide_origin_effect_css: function animation_hide_origin_effect_css(selector, vars) {
        return [sel(selector, {
          ".pe-menu--origin:not(.pe-menu--visible)": {
            " .pe-menu__panel": vars.animation_hide_origin_effect_css
          }
        })];
      },
      height: function height(selector, vars) {
        return [vars.height !== undefined && sel(selector, {
          " .pe-menu__panel": {
            height: vars.height
          }
        })];
      },
      widths: function widths(selector, vars) {
        return [widths_min_width_width_factor(selector, vars)];
      },
      min_width: function min_width(selector, vars) {
        return [widths_min_width_width_factor(selector, vars)];
      },
      width_factor: function width_factor(selector, vars) {
        return [widths_min_width_width_factor(selector, vars)];
      },
      border_radius: function border_radius(selector, vars) {
        return [sel(selector, {
          " .pe-menu__panel": {
            borderRadius: vars.border_radius + "px"
          }
        })];
      },
      // Theme vars
      backdrop: function backdrop(selector, vars) {
        return [vars.backdrop && _backdrop$2(selector)];
      },
      top_menu: function top_menu(selector, vars) {
        return [vars.top_menu && _top_menu(selector, vars)];
      },
      z: function z(selector, vars) {
        return [vars.z && _z(selector, vars)];
      }
    }, sharedVarFns);

    var layout$j = createLayout({
      varFns: varFns$h
    });

    // @ts-check
    var fns$h = [layout$j, color$g];
    var selector$i = ".".concat(classes$i.component);

    var addGeneralStyleToHead$i = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$i],
        fns: fns$h,
        vars: menuVars
      });
    };

    var classes$j = {
      component: "pe-notification",
      // elements
      action: "pe-notification__action",
      content: "pe-notification__content",
      holder: "pe-notification__holder",
      placeholder: "pe-notification__placeholder",
      title: "pe-notification__title",
      // states
      hasContainer: "pe-notification--container",
      horizontal: "pe-notification--horizontal",
      multilineTitle: "pe-notification__title--multi-line",
      vertical: "pe-notification--vertical",
      visible: "pe-notification--visible"
    };

    function _defineProperty$i(obj, key, value) {
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

    function _extends$h() {
      _extends$h = Object.assign || function (target) {
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

      return _extends$h.apply(this, arguments);
    }

    var generalFns$g = {
      general_styles: function general_styles(selector) {
        return [];
      } // eslint-disable-line no-unused-vars

    };

    var tintFns$g = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$i(_ref, "color_" + tint + "_text", function (selector, vars) {
        return [sel(selector, {
          " .pe-notification__content": {
            color: vars["color_" + tint + "_text"]
          }
        })];
      }), _defineProperty$i(_ref, "color_" + tint + "_background", function (selector, vars) {
        return [sel(selector, {
          " .pe-notification__content": {
            background: vars["color_" + tint + "_background"]
          }
        })];
      }), _ref;
    };

    var lightTintFns$g = _extends$h({}, generalFns$g, tintFns$g("light"));

    var darkTintFns$g = _extends$h({}, generalFns$g, tintFns$g("dark"));

    var color$h = createColor({
      varFns: {
        lightTintFns: lightTintFns$g,
        darkTintFns: darkTintFns$g
      }
    });

    // @ts-check
    var varFns$i = {
      general_styles: function general_styles(selector) {
        return [sel(selector, [flex$1.layoutCenterCenter, {
          // assumes position relative
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          pointerEvents: "none",
          justifyContent: "flex-start",
          // For IE 11
          ".pe-multiple--screen": {
            position: "fixed",
            zIndex: vars.z_notification
          }
        }]), {
          ":not(.pe-notification--container) .pe-multiple--container": {
            position: "absolute"
          }
        }];
      }
    };
    var holderLayout = createLayout({
      varFns: varFns$i
    });

    var title_single_padding_v_title_padding_h = function title_single_padding_v_title_padding_h(selector, vars) {
      return sel(selector, {
        " .pe-notification__title": {
          padding: vars.title_single_padding_v + "px " + vars.title_padding_h + "px"
        }
      });
    };

    var customLayoutFns = {
      animation_hide_css: function animation_hide_css(selector, vars) {
        return [sel(selector, vars.animation_hide_css)];
      },
      animation_show_css: function animation_show_css(selector, vars) {
        return [sel(selector, {
          ".pe-notification--visible": [vars.animation_show_css]
        })];
      },
      width: function width(selector, vars) {
        return [sel(selector, {
          " .pe-notification__content": {
            width: vars.width + "px"
          }
        })];
      },
      animation_delay: function animation_delay(selector, vars) {
        return [sel(selector, {
          transitionDelay: vars.animation_delay
        })];
      },
      animation_duration: function animation_duration(selector, vars) {
        return [sel(selector, {
          transitionDuration: vars.animation_duration
        })];
      },
      animation_timing_function: function animation_timing_function(selector, vars) {
        return [sel(selector, {
          transitionTimingFunction: vars.animation_timing_function
        })];
      },
      side_padding: function side_padding(selector, vars) {
        return [sel(selector, {
          " .pe-notification__content": {
            padding: "0 " + vars.side_padding + "px"
          }
        })];
      },
      border_radius: function border_radius(selector, vars) {
        return [sel(selector, {
          " .pe-notification__content": {
            borderRadius: vars.border_radius + "px"
          }
        })];
      },
      title_single_padding_v: function title_single_padding_v(selector, vars) {
        return [title_single_padding_v_title_padding_h(selector, vars)];
      },
      title_padding_h: function title_padding_h(selector, vars) {
        return [title_single_padding_v_title_padding_h(selector, vars)];
      },
      font_size: function font_size(selector, vars) {
        return [sel(selector, {
          " .pe-notification__title": {
            fontSize: vars.font_size + "px"
          }
        })];
      },
      line_height: function line_height(selector, vars) {
        return [sel(selector, {
          " .pe-notification__title": {
            lineHeight: vars.line_height + "px"
          }
        })];
      },
      title_multi_padding_v: function title_multi_padding_v(selector, vars) {
        return [sel(selector, {
          ".pe-notification--horizontal": {
            " .pe-notification__title--multi-line": {
              paddingTop: vars.title_multi_padding_v + "px",
              paddingBottom: vars.title_multi_padding_v + "px"
            }
          },
          ".pe-notification--vertical": {
            " .pe-notification__title--multi-line": {
              paddingTop: vars.title_multi_padding_v + "px"
            }
          }
        })];
      }
    };

    var varFns$1$2 = _extends$h({}, {
      general_styles: function general_styles(selector) {
        return [sel(selector, [flex$1.layoutCenter, {
          pointerEvents: "all",
          justifyContent: "center",
          margin: "0 auto",
          transitionProperty: "all",
          opacity: 0,
          " .pe-notification__title": {
            flex: "1 0 auto"
          },
          " .pe-notification__action": {
            " .pe-button": {
              margin: 0
            }
          },
          " .pe-notification__content": {
            maxWidth: "100%"
          },
          ".pe-notification--horizontal": {
            " .pe-notification__content": flex$1.layoutHorizontal,
            " .pe-notification__title": [flex$1.flex(), {
              alignSelf: "center"
            }],
            " .pe-notification__action": flex$1.layoutCenter
          },
          ".pe-notification--vertical": {
            " .pe-notification__content": [flex$1.layoutVertical],
            " .pe-notification__title": {
              paddingBottom: "6px"
            },
            " .pe-notification__action": [flex$1.layoutEndJustified, {
              width: "100%"
            }]
          }
        }])];
      }
    }, customLayoutFns);

    var layout$k = createLayout({
      varFns: varFns$1$2
    });

    // @ts-check
    var buttonPaddingH = 8; // padding, inner text space

    /**
     * @type {NotificationVars} notificationVars
     */

    var notificationVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      animation_delay: "0s",
      animation_duration: ".3s",
      animation_hide_css: "opacity: 0;",
      animation_show_css: "opacity: 1;",
      animation_timing_function: "ease-in-out",
      border_radius: vars.unit_block_border_radius,
      font_size: 14,
      line_height: 20,
      min_height: 80,
      side_padding: 24 - buttonPaddingH,
      title_multi_padding_v: 20,
      // 24 - natural line height
      title_padding_h: buttonPaddingH,
      title_single_padding_v: 14,
      width: 288,
      color_light_background: rgba(vars.color_light_background),
      color_light_text: rgba(vars.color_light_foreground, vars.blend_light_dark_primary),
      color_dark_background: rgba(vars.color_dark_background),
      color_dark_text: rgba(vars.color_dark_foreground, vars.blend_light_text_primary)
    };

    // @ts-check
    var fns$i = [layout$k, color$h];
    var selector$j = ".".concat(classes$j.component);
    var holderFns = [holderLayout];
    var holderSelector = ".".concat(classes$j.holder);

    var addGeneralStyleToHead$j = function addGeneralStyleToHead() {
      styler.addStyle({
        selectors: [holderSelector],
        fns: holderFns,
        vars: notificationVars
      });
      styler.addStyle({
        selectors: [selector$j],
        fns: fns$i,
        vars: notificationVars
      });
    };

    var classes$k = {
      component: "pe-radio-control"
    };

    // @ts-check
    var color$i = createColor({
      superColor: color$3
    });

    // @ts-check
    var varFns$j = {
      general_styles: function general_styles() {
        return {
          " .pe-radio-group": {
            display: "flex"
          }
        };
      }
    };
    var layout$l = createLayout({
      varFns: varFns$j,
      superLayout: layout$6
    });

    // @ts-check

    /**
     * @typedef {import("../index").RadioButtonVars} RadioButtonVars
     */

    /**
     * @type {RadioButtonVars} radioButtonVars
     */
    var radioButtonVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true
    };

    // @ts-check
    var fns$j = [layout$l, color$i];
    var selector$k = ".".concat(classes$k.component);

    var addGeneralStyleToHead$k = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$k],
        fns: fns$j,
        vars: radioButtonVars
      });
    };

    var classes$l = {
      component: "pe-ripple",
      // elements
      mask: "pe-ripple__mask",
      waves: "pe-ripple__waves",
      // states
      unconstrained: "pe-ripple--unconstrained",
      wavesAnimating: "pe-ripple__waves--animating"
    };

    function _defineProperty$j(obj, key, value) {
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

    function _extends$i() {
      _extends$i = Object.assign || function (target) {
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

      return _extends$i.apply(this, arguments);
    }

    var generalFns$h = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          color: "inherit"
        })];
      }
    };

    var tintFns$h = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$j(_ref, "color", function color(selector, vars) {
        return [sel(selector, {
          color: vars["color"]
        })];
      }), _defineProperty$j(_ref, "color_" + tint, function (selector, vars) {
        return [sel(selector, {
          color: vars["color_" + tint]
        })];
      }), _ref;
    };

    var lightTintFns$h = _extends$i({}, generalFns$h, tintFns$h("light"));

    var darkTintFns$h = _extends$i({}, generalFns$h, tintFns$h("dark"));

    var color$j = createColor({
      varFns: {
        lightTintFns: lightTintFns$h,
        darkTintFns: darkTintFns$h
      }
    });

    // @ts-check
    var varFns$k = {
      general_styles: function general_styles(selector) {
        return [sel(selector, [mixin.fit(), {
          color: "inherit",
          borderRadius: "inherit",
          pointerEvents: "none",
          ":not(.pe-ripple--unconstrained)": {
            borderRadius: "inherit",
            " .pe-ripple__mask": {
              overflow: "hidden",
              borderRadius: "inherit"
            }
          },
          " .pe-ripple__mask": [mixin.fit(), {
            transform: "translate3d(0,0,0)"
          }],
          " .pe-ripple__waves": {
            outline: "1px solid transparent",
            // for IE10
            position: "absolute",
            borderRadius: "50%",
            pointerEvents: "none",
            display: "none"
          },
          " .pe-ripple__waves--animating": {
            display: "block"
          }
        }])];
      }
    };
    var layout$m = createLayout({
      varFns: varFns$k
    });

    // @ts-check

    /**
     * @typedef {import("../index").RippleVars} RippleVars
     */

    /**
     * @type {RippleVars} rippleVars
     */
    var rippleVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      color: "inherit" // only specify this variable to get both states
      // color_light:   "inherit",
      // color_dark:    "inherit"

    };

    // @ts-check
    var fns$k = [layout$m, color$j];
    var selector$l = ".".concat(classes$l.component);

    var addGeneralStyleToHead$l = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$l],
        fns: fns$k,
        vars: rippleVars
      });
    };

    var classes$m = {
      component: "pe-search",
      // elements
      content: "pe-search__content",
      // states
      searchFullWidth: "pe-search--full-width",
      searchInset: "pe-search--inset"
    };

    function _defineProperty$k(obj, key, value) {
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

    function _extends$j() {
      _extends$j = Object.assign || function (target) {
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

      return _extends$j.apply(this, arguments);
    }

    var generalFns$i = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          " .pe-textfield__input-area": {
            backgroundColor: "transparent"
          }
        })];
      }
    };

    var tintFns$i = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$k(_ref, "color_" + tint + "_background", function (selector, vars) {
        return [sel(selector, {
          backgroundColor: vars["color_" + tint + "_background"]
        })];
      }), _defineProperty$k(_ref, "color_" + tint + "_label_text", function (selector, vars) {
        return [sel(selector, {
          " .pe-textfield": {
            " .pe-textfield__label": {
              color: vars["color_" + tint + "_label_text"]
            }
          }
        })];
      }), _defineProperty$k(_ref, "color_" + tint + "_input_text", function (selector, vars) {
        return [sel(selector, {
          " .pe-textfield": {
            " .pe-textfield__input": {
              color: vars["color_" + tint + "_input_text"]
            }
          }
        })];
      }), _ref;
    };

    var lightTintFns$i = _extends$j({}, generalFns$i, tintFns$i("light"));

    var darkTintFns$i = _extends$j({}, generalFns$i, tintFns$i("dark"));

    var color$k = createColor({
      varFns: {
        lightTintFns: lightTintFns$i,
        darkTintFns: darkTintFns$i
      }
    });

    // @ts-check

    var inset_height_line_height_input = function inset_height_line_height_input(selector, vars) {
      var inset_input_padding_v = (vars.inset_height - vars.line_height_input) / 2;
      return sel(selector, {
        ".pe-search--inset": {
          " .pe-textfield__input, .pe-textfield__label": {
            paddingTop: inset_input_padding_v + "px",
            paddingBottom: inset_input_padding_v + "px"
          }
        }
      });
    };

    var full_width_height_line_height_input = function full_width_height_line_height_input(selector, vars) {
      var full_width_input_padding_v = (vars.full_width_height - vars.line_height_input) / 2;
      return sel(selector, {
        ".pe-search--full-width": {
          " .pe-textfield__input, .pe-textfield__label": {
            paddingTop: full_width_input_padding_v + "px",
            paddingBottom: full_width_input_padding_v + "px"
          }
        }
      });
    };

    var varFns$l = {
      general_styles: function general_styles(selector) {
        return [sel(selector, [flex$1.flex(), {
          position: "relative",
          // necessary when a shadow is added
          " .pe-textfield": [flex$1.flex(), {
            alignItems: "center",
            padding: 0,
            // prevent that neighboring icon button with ripple hides the cursor
            position: "relative",
            zIndex: 1,
            " .pe-textfield__input-area": {
              padding: 0,
              ":after": {
                display: "none"
              }
            },
            " .pe-textfield__input": {
              // reset
              border: "none"
            },
            " .pe-textfield__label": {
              // reset
              top: 0,
              bottom: 0
            }
          }],
          " .pe-search__content": {
            "&, .pe-textfield": flex$1.layoutHorizontal,
            "&, .pe-textfield__input-area": {
              flexGrow: 1
            }
          },
          " .pe-search__content > *": [flex$1.layoutVertical, flex$1.selfCenter],
          ".pe-search--inset": {
            "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
              padding: 0
            }
          }
        }])];
      },
      font_size_input: function font_size_input(selector, vars) {
        return [sel(selector, {
          " .pe-textfield": {
            " .pe-textfield__input, .pe-textfield__label": {
              fontSize: vars.font_size_input + "px"
            }
          }
        })];
      },
      line_height_input: function line_height_input(selector, vars) {
        return [sel(selector, {
          " .pe-textfield__input, .pe-textfield__label": {
            lineHeight: vars.line_height_input + "px"
          }
        }), inset_height_line_height_input(selector, vars)];
      },
      inset_border_radius: function inset_border_radius(selector, vars) {
        return [sel(selector, {
          ".pe-search--inset": {
            "border-radius": vars.inset_border_radius + "px"
          }
        })];
      },
      inset_side_padding: function inset_side_padding(selector, vars) {
        return [sel(selector, {
          ".pe-search--inset": {
            padding: "0 " + vars.inset_side_padding + "px"
          }
        })];
      },
      inset_height: function inset_height(selector, vars) {
        return [sel(selector, {
          ".pe-search--inset": {
            "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
              padding: 0,
              height: vars.inset_height + "px"
            }
          }
        }), inset_height_line_height_input(selector, vars)];
      },
      full_width_height: function full_width_height(selector, vars) {
        return [sel(selector, {
          ".pe-search--full-width": {
            "&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label": {
              height: vars.full_width_height + "px"
            }
          }
        }), full_width_height_line_height_input(selector, vars)];
      },
      inset_input_indent: function inset_input_indent(selector, vars) {
        return [sel(selector, {
          ".pe-search--inset": {
            " .pe-textfield__input, .pe-textfield__label": {
              paddingLeft: vars.inset_input_indent + "px"
            }
          }
        })];
      },
      inset_input_right_padding: function inset_input_right_padding(selector, vars) {
        return [sel(selector, {
          ".pe-search--inset": {
            " .pe-textfield__input, .pe-textfield__label": {
              paddingRight: vars.inset_input_right_padding + "px"
            }
          }
        })];
      },
      full_width_side_padding: function full_width_side_padding(selector, vars$1) {
        var full_width_input_indent = vars.unit_indent - vars$1.full_width_side_padding - vars.grid_unit_icon_button;
        return sel(selector, {
          ".pe-search--full-width": {
            padding: "0 " + vars$1.full_width_side_padding + "px",
            " .pe-textfield__input, .pe-textfield__label": {
              paddingLeft: full_width_input_indent + "px"
            }
          },
          ".pe-search--full-width + .pe-list .pe-list-tile": {
            "> :first-child": {
              paddingLeft: vars$1.full_width_side_padding + "px"
            },
            "> :last-child": {
              paddingRight: vars$1.full_width_side_padding + "px"
            }
          }
        });
      },
      full_width_border_radius: function full_width_border_radius(selector, vars) {
        return [sel(selector, {
          ".pe-search--full-width": {
            borderRadius: vars.full_width_border_radius + "px"
          }
        })];
      },
      full_width_input_right_padding: function full_width_input_right_padding(selector, vars) {
        return [sel(selector, {
          ".pe-search--full-width": {
            " .pe-textfield__input, .pe-textfield__label": {
              paddingRight: vars.full_width_input_right_padding + "px"
            }
          }
        })];
      }
    };
    var layout$n = createLayout({
      varFns: varFns$l
    });

    // @ts-check
    /**
     * @type {SearchVars} searchVars
     */

    var searchVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      font_size_input: 20,
      full_width_border_radius: 0,
      full_width_height: 56,
      full_width_input_right_padding: 0,
      full_width_side_margin: 0,
      full_width_side_padding: 8,
      inset_border_radius: vars.unit_block_border_radius,
      inset_height: 48,
      inset_input_indent: 16,
      inset_input_right_padding: 0,
      inset_side_padding: 0,
      line_height_input: 20,
      color_light_label_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
      color_light_input_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
      color_light_background: rgba(vars.color_light_background),
      color_dark_label_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
      color_dark_input_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
      color_dark_background: rgba(vars.color_dark_background)
    };

    // @ts-check
    var fns$l = [layout$n, color$k];
    var selector$m = ".".concat(classes$m.component);

    var addGeneralStyleToHead$m = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$m],
        fns: fns$l,
        vars: searchVars
      });
    };

    var classes$n = {
      component: "pe-slider",
      // elements
      control: "pe-slider__control",
      label: "pe-slider__label",
      pin: "pe-slider__pin",
      thumb: "pe-slider__thumb",
      tick: "pe-slider__tick",
      ticks: "pe-slider__ticks",
      track: "pe-slider__track",
      trackBar: "pe-slider__track-bar",
      trackBarValue: "pe-slider__track-bar-value",
      trackPart: "pe-slider__track-part",
      trackPartRest: "pe-slider__track-rest",
      trackPartValue: "pe-slider__track-value",
      // states
      hasFocus: "pe-slider--focus",
      hasPin: "pe-slider--pin",
      hasTicks: "pe-slider--ticks",
      hasTrack: "pe-slider--track",
      isActive: "pe-slider--active",
      isAtMin: "pe-slider--min",
      isDisabled: "pe-slider--disabled",
      tickValue: "pe-slider__tick--value"
    };

    function _defineProperty$l(obj, key, value) {
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

    function _extends$k() {
      _extends$k = Object.assign || function (target) {
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

      return _extends$k.apply(this, arguments);
    }

    var generalFns$j = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          " .pe-slider__control": {
            ":after": {
              borderColor: "transparent"
            }
          },
          " .pe-slider__pin": {
            backgroundColor: "currentcolor",
            ":before": {
              backgroundColor: "inherit"
            }
          },
          ":not(.pe-slider--disabled)": {
            " .pe-slider__control": {
              backgroundColor: "currentcolor"
            },
            " .pe-slider__track-value .pe-slider__track-bar-value": {
              background: "currentcolor"
            },
            ".pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,\
        &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before": {
              backgroundColor: "currentcolor"
            }
          },
          ".pe-slider--min:not(.pe-slider--disabled):not(.pe-slider--ticks)": {
            " .pe-slider__control": {
              backgroundColor: "transparent"
            },
            " .pe-slider__thumb": {
              opacity: 0
            },
            ".pe-slider--ticks": {
              " .pe-slider__control:after": {
                borderColor: "transparent"
              }
            }
          }
        })];
      }
    };

    var tintFns$j = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$l(_ref, "color_" + tint + "_icon", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-slider--disabled)": {
            " .pe-icon": {
              color: vars["color_" + tint + "_icon"]
            }
          }
        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_label", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-slider--disabled)": {
            " .pe-slider__label": {
              color: vars["color_" + tint + "_label"]
            }
          }
        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_thumb_on", function (selector, vars) {
        return [sel(selector, {
          color: vars["color_" + tint + "_thumb_on"] // override by specifying "color"

        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_track_inactive", function (selector, vars) {
        return [sel(selector, {
          " .pe-slider__track-bar-value": {
            background: vars["color_" + tint + "_track_inactive"]
          },
          ".pe-slider--min:not(.pe-slider--disabled):not(.pe-slider--ticks)": {
            " .pe-slider__control:after": {
              borderColor: vars["color_" + tint + "_track_inactive"]
            }
          }
        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_tick", function (selector, vars) {
        return [sel(selector, {
          " .pe-slider__tick": {
            background: vars["color_" + tint + "_tick"]
          },
          ".pe-slider--min:not(.pe-slider--disabled)": {
            ".pe-slider--tick": {
              backgroundColor: vars["color_" + tint + "_tick"]
            }
          }
        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_tick_value", function (selector, vars) {
        return [sel(selector, {
          " .pe-slider__tick--value": {
            background: vars["color_" + tint + "_tick_value"]
          },
          ".pe-slider--min:not(.pe-slider--disabled)": {
            ".pe-slider--tick--value": {
              backgroundColor: vars["color_" + tint + "_tick_value"]
            }
          }
        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_disabled_icon", function (selector, vars) {
        return [sel(selector, {
          " .pe-icon": {
            color: vars["color_" + tint + "_disabled_icon"]
          }
        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_disabled_label", function (selector, vars) {
        return [sel(selector, {
          " .pe-slider__label": {
            color: vars["color_" + tint + "_disabled_label"]
          }
        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_track_active", function (selector, vars) {
        return [sel(selector, {
          ".pe-slider--active": {
            " .pe-slider__track-bar-value": {
              background: vars["color_" + tint + "_track_active"]
            }
          },
          ".pe-slider--min:not(.pe-slider--disabled)": {
            ".pe-slider--active .pe-slider__control:after": {
              borderColor: vars["color_" + tint + "_track_active"]
            }
          }
        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_thumb_inactive", function (selector, vars) {
        return [sel(selector, {
          ".pe-slider--disabled": {
            " .pe-slider__control": {
              background: vars["color_" + tint + "_thumb_inactive"]
            }
          }
        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_thumb_background", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-slider--disabled)": {
            " .pe-slider__control": {
              backgroundColor: vars["color_" + tint + "_thumb_background"]
            }
          }
        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_thumb_off_focus_opacity", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-slider--disabled)": {
            " .pe-slider__control": {
              ":before": {
                opacity: vars["color_" + tint + "_thumb_off_focus_opacity"]
              }
            }
          }
        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_thumb_off_focus", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-slider--disabled)": {
            ".pe-slider--focus.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:before,\
        .pe-slider--min:not(.pe-slider--pin) .pe-slider__control:focus:before": {
              backgroundColor: vars["color_" + tint + "_thumb_off_focus"]
            }
          }
        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_thumb_on_focus_opacity", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-slider--disabled)": {
            ".pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,\
        &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before": {
              opacity: vars["color_" + tint + "_thumb_on_focus_opacity"]
            }
          }
        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_pin_label", function (selector, vars) {
        return [sel(selector, {
          " .pe-slider__pin:after": {
            color: vars["color_" + tint + "_pin_label"]
          }
        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_pin_background", function (selector, vars) {
        return [sel(selector, {
          " .pe-slider__pin": {
            backgroundColor: vars["color_" + tint + "_pin_background"]
          }
        })];
      }), _defineProperty$l(_ref, "color_" + tint + "_track_value", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-slider--disabled)": {
            " .pe-slider__track-value .pe-slider__track-bar-value": {
              backgroundColor: vars["color_" + tint + "_track_value"]
            }
          }
        })];
      }), _ref;
    };

    var lightTintFns$j = _extends$k({}, generalFns$j, tintFns$j("light"));

    var darkTintFns$j = _extends$k({}, generalFns$j, tintFns$j("dark"));

    var color$l = createColor({
      varFns: {
        lightTintFns: lightTintFns$j,
        darkTintFns: darkTintFns$j
      }
    });

    // @ts-check

    var getThumbSize = function getThumbSize(vars) {
      var thumbSize = Math.max(vars.thumb_size, 2 * vars.thumb_border_width);
      var barOffset = thumbSize / 2;
      var stepsOffset = barOffset - 1;
      return {
        normalThumbSize: thumbSize,
        disabledThumbSize: thumbSize - 2 * vars.thumb_border_width,
        barOffset: barOffset,
        stepsOffset: stepsOffset
      };
    };

    var getBorderWidth = function getBorderWidth(vars) {
      var borderWidth = vars.thumb_border_width;
      var scaledBorderWidth = Math.max(1, vars.thumb_border_width / vars.active_thumb_scale);
      return {
        normalBorderWidth: borderWidth,
        disabledBorderWidth: 1 / vars.disabled_thumb_scale * vars.thumb_border_width,
        scaledBorderWidth: scaledBorderWidth
      };
    };

    var thumb_size_thumb_border_width_disabled_thumb_scale = function thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars) {
      var _getThumbSize = getThumbSize(vars),
          normalThumbSize = _getThumbSize.normalThumbSize,
          disabledThumbSize = _getThumbSize.disabledThumbSize;

      var _getBorderWidth = getBorderWidth(vars),
          normalBorderWidth = _getBorderWidth.normalBorderWidth,
          disabledBorderWidth = _getBorderWidth.disabledBorderWidth;

      return sel(selector, {
        " .pe-slider__control:after": {
          borderWidth: normalBorderWidth + "px",
          width: normalThumbSize + "px",
          height: normalThumbSize + "px",
          left: 0,
          top: 0
        },
        ".pe-slider--disabled .pe-slider__control:after": {
          borderWidth: disabledBorderWidth + "px",
          width: disabledThumbSize + "px",
          height: disabledThumbSize + "px",
          left: normalThumbSize - disabledThumbSize + "px",
          top: normalThumbSize - disabledThumbSize + "px"
        },
        ".pe-slider--ticks .pe-slider__control:after": {
          borderWidth: 0
        }
      });
    };

    var height_track_height = function height_track_height(selector, vars) {
      return sel(selector, {
        marginTop: (vars.height - vars.track_height) / 2 + "px "
      });
    };

    var track_height_bar_height = function track_height_bar_height(selector, vars) {
      return sel(selector, {
        " .pe-slider__track-part": {
          margin: (vars.track_height - vars.bar_height) / 2 + "px 0"
        }
      });
    };

    var thumb_size_thumb_touch_size = function thumb_size_thumb_touch_size(selector, vars) {
      var _getThumbSize2 = getThumbSize(vars),
          normalThumbSize = _getThumbSize2.normalThumbSize;

      return sel(selector, {
        " .pe-slider__control:before": {
          left: -vars.thumb_touch_size / 2 + normalThumbSize / 2 + "px",
          top: -vars.thumb_touch_size / 2 + normalThumbSize / 2 + "px"
        }
      });
    };

    var thumb_size_active_thumb_scale = function thumb_size_active_thumb_scale(selector, vars) {
      var _getThumbSize3 = getThumbSize(vars),
          normalThumbSize = _getThumbSize3.normalThumbSize;

      var _getBorderWidth2 = getBorderWidth(vars),
          scaledBorderWidth = _getBorderWidth2.scaledBorderWidth;

      var scaledThumbDiff = (vars.active_thumb_scale - 1) * normalThumbSize / 2;
      return sel(selector, {
        ".pe-slider--active:not(.pe-slider--ticks)": {
          " .pe-slider__control": {
            borderWidth: scaledBorderWidth + "px"
          },
          // left side
          " .pe-slider__track-value .pe-slider__track-bar-value": {
            transform: "translateX(" + -scaledThumbDiff + "px)"
          },
          // right side
          " .pe-slider__track-rest .pe-slider__track-bar-value": {
            transform: "translateX(" + scaledThumbDiff + "px)"
          }
        },
        ".pe-slider--active.pe-slider--ticks": {
          " .pe-slider__control:after": {
            borderWidth: 0
          }
        }
      });
    };

    var thumb_size_pin_width = function thumb_size_pin_width(selector, vars) {
      var _getThumbSize4 = getThumbSize(vars),
          stepsOffset = _getThumbSize4.stepsOffset;

      return sel(selector, {
        " .pe-slider__pin": {
          margin: "0 " + stepsOffset + "px 0 " + (stepsOffset - vars.pin_width / 2 + 1) + "px"
        }
      });
    };

    var varFns$m = {
      general_styles: function general_styles(selector) {
        return [sel(selector, [flex$1.layoutHorizontal, flex$1.flexGrow(1), {
          userSelect: "none",
          "-moz-user-select": "none",
          alignItems: "center",
          " > .pe-icon": flex$1.layoutCenter,
          " .pe-slider__track": [flex$1.layoutHorizontal, flex$1.flexGrow(1), {
            userSelect: "none",
            "-moz-user-select": "none",
            position: "relative",
            outline: 0
          }],
          " .pe-slider__control": [flex$1.selfCenter, mixin.defaultTransition("transform, background", ".200s"), {
            transform: "scale(1)",
            userSelect: "none",
            "-moz-user-select": "none",
            lineHeight: 0,
            borderRadius: "50%",
            outline: 0,
            zIndex: 1,
            position: "relative",
            // touch area
            ":before": {
              content: "\"\"",
              position: "absolute",
              borderRadius: "50%"
            },
            // border
            ":after": {
              content: "\"\"",
              position: "absolute",
              borderRadius: "50%",
              borderStyle: "solid"
            }
          }],
          " .pe-slider__thumb": [mixin.fit(), {
            "&, .pe-icon": {
              width: "inherit",
              height: "inherit"
            }
          }],
          " .pe-slider__label": {
            minWidth: vars.unit_icon_size + "px",
            textAlign: "center",
            fontSize: "16px",
            fontWeight: vars.font_weight_medium
          },
          " .pe-slider__track-part": [flex$1.flex(), {
            userSelect: "none",
            "-moz-user-select": "none",
            overflow: "hidden" // Firefox otherwise uses 6x at 0%

          }],
          " .pe-slider__track-value, .pe-slider__track-rest": flex$1.layoutHorizontal,
          " .pe-slider__track-bar": [flex$1.flex(), {
            position: "relative",
            overflow: "hidden"
          }],
          " .pe-slider__track-bar-value": flex$1.flex(),
          " .pe-slider__ticks": [flex$1.layoutJustified, {
            userSelect: "none",
            "-moz-user-select": "none",
            position: "absolute",
            left: 0,
            pointerEvents: "none"
          }],
          " .pe-slider__pin": [mixin.defaultTransition("transform", ".11s"), {
            transform: "translateZ(0) scale(0) translate(0, 0)",
            transformOrigin: "bottom",
            position: "absolute",
            zIndex: 1,
            height: 0,
            left: 0,
            // set in js
            top: 0,
            pointerEvents: "none",
            "&::before, &::after": {
              position: "absolute",
              top: 0,
              left: 0
            },
            "::before": {
              transform: "rotate(-45deg)",
              content: "\"\"",
              borderRadius: "50% 50% 50% 0"
            },
            "::after": {
              content: "attr(value)",
              textAlign: "center"
            }
          }],
          ".pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus": {
            " .pe-slider__pin": {
              transform: "translateZ(0) scale(1) translate(0, -24px)"
            }
          },
          ":not(.pe-slider--disabled)": {
            " .pe-slider__control": {
              cursor: "pointer"
            },
            ".pe-slider--track": {
              " .pe-slider__track": {
                cursor: "pointer"
              }
            }
          },
          ".pe-slider--disabled": {
            " .pe-slider__control": {
              borderWidth: 0
            }
          }
        }])];
      },
      thumb_size: function thumb_size(selector, vars) {
        var _getThumbSize5 = getThumbSize(vars),
            normalThumbSize = _getThumbSize5.normalThumbSize,
            barOffset = _getThumbSize5.barOffset,
            stepsOffset = _getThumbSize5.stepsOffset;

        return [sel(selector, {
          " .pe-slider__control": {
            width: normalThumbSize + "px",
            height: normalThumbSize + "px"
          },
          " .pe-slider__track-value .pe-slider__track-bar": {
            marginLeft: barOffset + "px"
          },
          " .pe-slider__track-rest .pe-slider__track-bar": {
            marginRight: barOffset + "px"
          },
          " .pe-slider__ticks": {
            width: "calc(100% - " + 2 * stepsOffset + "px)",
            margin: "0 " + stepsOffset + "px"
          }
        }), thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars), thumb_size_thumb_touch_size(selector, vars), thumb_size_active_thumb_scale(selector, vars), thumb_size_pin_width(selector, vars)];
      },
      active_thumb_scale: function active_thumb_scale(selector, vars) {
        return [sel(selector, {
          ".pe-slider--active:not(.pe-slider--ticks)": {
            " .pe-slider__control": {
              transform: "scale(" + vars.active_thumb_scale + ")"
            }
          }
        }), thumb_size_active_thumb_scale(selector, vars)];
      },
      thumb_touch_size: function thumb_touch_size(selector, vars) {
        return [sel(selector, {
          " .pe-slider__control": {
            ":before": {
              width: vars.thumb_touch_size + "px",
              height: vars.thumb_touch_size + "px"
            }
          }
        }), thumb_size_thumb_touch_size(selector, vars)];
      },
      thumb_border_width: function thumb_border_width(selector, vars) {
        return [sel(selector, {}), thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars)];
      },
      disabled_thumb_scale: function disabled_thumb_scale(selector, vars) {
        return [sel(selector, {
          ".pe-slider--disabled": {
            " .pe-slider__control": {
              transform: "scale(" + vars.disabled_thumb_scale + ")"
            }
          }
        }), thumb_size_thumb_border_width_disabled_thumb_scale(selector, vars)];
      },
      active_pin_thumb_scale: function active_pin_thumb_scale(selector, vars) {
        return [sel(selector, {
          ".pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus": {
            " .pe-slider__control": {
              transform: "scale(" + vars.active_pin_thumb_scale + ")"
            }
          }
        })];
      },
      height: function height(selector, vars) {
        return [sel(selector, {
          height: vars.height + "px",
          " > .pe-icon": {
            height: vars.height + "px"
          },
          " .pe-slider__label": {
            height: vars.height + "px",
            lineHeight: vars.height + "px"
          },
          " .pe-slider__ticks": {
            top: vars.height / 2 - 1 + "px"
          }
        }), height_track_height(selector, vars)];
      },
      track_height: function track_height(selector, vars) {
        return [sel(selector, {
          " .pe-slider__track": {
            height: vars.track_height + "px"
          }
        }), height_track_height(selector, vars), track_height_bar_height(selector, vars)];
      },
      animation_duration: function animation_duration(selector, vars) {
        return [sel(selector, {
          " .pe-slider__track": mixin.defaultTransition("transform", vars.animation_duration),
          " .pe-slider__control:before": mixin.defaultTransition("background-color", vars.animation_duration),
          " .pe-slider__control:after": mixin.defaultTransition("border", vars.animation_duration),
          " .pe-slider__thumb": mixin.defaultTransition("opacity", vars.animation_duration),
          " .pe-slider__track-bar-value": mixin.defaultTransition("transform, background-color", vars.animation_duration)
        })];
      },
      side_spacing: function side_spacing(selector, vars) {
        return [sel(selector, {
          " .pe-slider__track": {
            margin: "0 " + vars.side_spacing + "px"
          }
        })];
      },
      horizontal_layout_side_spacing: function horizontal_layout_side_spacing(selector, vars) {
        return [sel(selector, {
          " div + .pe-slider__track": {
            margin: "0 " + vars.horizontal_layout_side_spacing + "px"
          }
        })];
      },
      bar_height: function bar_height(selector, vars) {
        return [sel(selector, {
          " .pe-slider__track-part,\
        .pe-slider__track-bar-value,\
        .pe-slider__ticks,\
        .pe-slider__tick": {
            height: vars.bar_height + "px"
          }
        }), track_height_bar_height(selector, vars)];
      },
      step_width: function step_width(selector, vars) {
        return [sel(selector, {
          " .pe-slider__tick": {
            width: vars.step_width + "px"
          }
        })];
      },
      pin_width: function pin_width(selector, vars) {
        return [sel(selector, {
          " .pe-slider__pin": {
            width: vars.pin_width + "px",
            "::before": {
              width: vars.pin_width + "px",
              height: vars.pin_width + "px"
            },
            "::after": {
              width: vars.pin_width + "px",
              height: vars.pin_height + "px",
              lineHeight: vars.pin_width + "px"
            }
          }
        }), thumb_size_pin_width(selector, vars)];
      },
      pin_font_size: function pin_font_size(selector, vars) {
        return [sel(selector, {
          " .pe-slider__pin::after": {
            fontSize: vars.pin_font_size + "px"
          }
        })];
      }
    };
    var layout$o = createLayout({
      varFns: varFns$m
    });

    // @ts-check
    var lightForeground = vars.color_light_foreground;
    var darkForeground = vars.color_dark_foreground;
    var activeColor = vars.color_primary; // or override in CSS by setting 'color' property on '.pe-slider'

    var thumb_size = 12;
    var thumb_touch_size = Math.max(40, thumb_size);
    var thumb_border_width = 2;
    var active_thumb_scale = 3 / 2;
    var disabled_thumb_scale = 1 / 2;
    var active_pin_thumb_scale = 2 / 6;
    var largestThumbSize = active_thumb_scale * thumb_size;
    var largestElement = Math.max(thumb_touch_size, largestThumbSize);
    var height$1 = Math.max(52, largestThumbSize);
    var side_spacing = Math.max(10, largestElement / 2 - thumb_size / 2);
    var horizontal_layout_side_spacing = side_spacing + 4; // optimization for horizontal layout

    var vars$2 = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      active_pin_thumb_scale: active_pin_thumb_scale,
      active_thumb_scale: active_thumb_scale,
      animation_duration: vars.animation_duration,
      bar_height: 2,
      disabled_thumb_scale: disabled_thumb_scale,
      height: height$1,
      horizontal_layout_side_spacing: horizontal_layout_side_spacing,
      pin_font_size: 10,
      pin_height: 32,
      pin_width: 26,
      side_spacing: side_spacing,
      step_width: 2,
      thumb_border_width: thumb_border_width,
      thumb_size: thumb_size,
      thumb_touch_size: thumb_touch_size,
      track_height: height$1,
      color_light_track_active: rgba(lightForeground, .38),
      color_light_track_inactive: rgba(lightForeground, .26),
      color_light_track_value: "currentColor",
      // background color may be set in theme; disabled by default
      // color_light_thumb_background:        undefined,
      color_light_thumb_off: rgba(lightForeground, .26),
      color_light_thumb_off_focus: rgba(lightForeground),
      color_light_thumb_off_focus_opacity: .08,
      color_light_thumb_on: rgba(activeColor),
      color_light_thumb_on_focus_opacity: .11,
      color_light_thumb_inactive: rgba(lightForeground, .26),
      color_light_tick: rgba(lightForeground, 1),
      color_light_tick_value: rgba(lightForeground, 1),
      color_light_icon: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
      color_light_disabled_icon: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
      color_light_label: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
      color_light_disabled_label: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
      color_light_pin_label: "#fff",
      color_light_pin_background: "currentColor",
      color_dark_track_active: rgba(darkForeground, .3),
      color_dark_track_inactive: rgba(darkForeground, .2),
      color_dark_track_value: "currentColor",
      // background color may be set in theme; disabled by default
      // color_dark_thumb_background:         undefined,
      color_dark_thumb_off: rgba(darkForeground, .2),
      color_dark_thumb_off_focus: rgba(darkForeground),
      color_dark_thumb_off_focus_opacity: .08,
      color_dark_thumb_on: rgba(activeColor),
      color_dark_thumb_on_focus_opacity: .11,
      color_dark_thumb_inactive: rgba(darkForeground, .2),
      color_dark_tick: rgba(darkForeground, 1),
      color_dark_tick_value: rgba(darkForeground, 1),
      color_dark_icon: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
      color_dark_disabled_icon: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
      color_dark_label: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
      color_dark_disabled_label: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
      color_dark_pin_label: "#fff",
      color_dark_pin_background: "currentColor"
    };

    // @ts-check
    var fns$m = [layout$o, color$l];
    var selector$n = ".".concat(classes$n.component);

    var addGeneralStyleToHead$n = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$n],
        fns: fns$m,
        vars: vars$2
      });
    };

    function _defineProperty$m(obj, key, value) {
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

    function _objectSpread$7(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);

        if (typeof Object.getOwnPropertySymbols === 'function') {
          ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
          }));
        }

        ownKeys.forEach(function (key) {
          _defineProperty$m(target, key, source[key]);
        });
      }

      return target;
    }

    var notificationClasses = {
      component: "pe-notification",
      // elements
      action: "pe-notification__action",
      content: "pe-notification__content",
      holder: "pe-notification__holder",
      placeholder: "pe-notification__placeholder",
      title: "pe-notification__title",
      // states
      hasContainer: "pe-notification--container",
      horizontal: "pe-notification--horizontal",
      multilineTitle: "pe-notification__title--multi-line",
      vertical: "pe-notification--vertical",
      visible: "pe-notification--visible"
    };

    var classes$o = _objectSpread$7({}, notificationClasses, {
      component: "pe-notification pe-snackbar",
      // elements
      holder: "pe-snackbar__holder",
      placeholder: "pe-snackbar__placeholder",
      // states
      open: "pe-snackbar--open"
    });

    // @ts-check
    var color$m = createColor({
      superColor: color$h
    });

    var varFns$n = {
      general_styles: function general_styles(selector) {
        return [sel(selector, [flex$1.layoutCenterCenter, {
          position: "fixed",
          top: "auto",
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: vars.z_notification,
          pointerEvents: "none",
          justifyContent: "flex-start",
          // For IE11
          width: "100%"
        }]), _defineProperty$m({}, ".pe-notification--container ".concat(selector), {
          position: "relative"
        })];
      }
    };
    var holderLayout$1 = createLayout({
      varFns: varFns$n
    });

    var breakpoint = function breakpoint(breakpointSel) {
      return function (selector, o) {
        return _defineProperty$m({}, breakpointSel, _defineProperty$m({}, selector, o));
      };
    };

    var breakpointTabletPortraitUp = breakpoint("@media (min-width: ".concat(vars.breakpoint_for_tablet_portrait_up, "px)"));
    var varFns$1$3 = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          width: "100%",
          opacity: 1,
          display: "none",
          " .pe-notification__content": {
            width: "100%",
            margin: "0 auto",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }
        }), breakpointTabletPortraitUp(selector, {
          ".pe-notification--horizontal": {
            " .pe-notification__title": {
              paddingRight: "30px"
            }
          }
        })];
      },
      min_width: function min_width(selector, vars) {
        return [breakpointTabletPortraitUp(selector, {
          minWidth: vars.min_width + "px"
        })];
      },
      max_width: function max_width(selector, vars) {
        return [breakpointTabletPortraitUp(selector, {
          maxWidth: vars.max_width + "px"
        })];
      },
      border_radius: function border_radius(selector, vars) {
        return [sel(selector, {
          " .pe-notification__content": {
            borderTopLeftRadius: vars.border_radius + "px",
            borderTopRightRadius: vars.border_radius + "px",
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          }
        })];
      }
    };
    var layout$p = createLayout({
      varFns: varFns$1$3,
      customVarFns: customLayoutFns
    });

    // @ts-check
    /**
     * @type {SnackbarVars} snackbarVars
     */

    var snackbarVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      animation_hide_css: "",
      animation_show_css: "",
      border_radius: 0,
      max_width: 568,
      min_height: 0,
      min_width: 288,
      color_light_background: rgba(vars.color_light_background),
      color_dark_background: rgba(vars.color_dark_background)
    };

    // @ts-check
    var fns$n = [layout$p, color$m];
    var selector$o = ".".concat(classes$o.component.replace(/ /g, "."));
    var holderFns$1 = [holderLayout$1];
    var holderSelector$1 = ".".concat(classes$o.holder.replace(/ /g, "."));

    var addGeneralStyleToHead$o = function addGeneralStyleToHead() {
      styler.addStyle({
        selectors: [holderSelector$1],
        fns: holderFns$1,
        vars: snackbarVars
      });
      styler.addStyle({
        selectors: [selector$o],
        fns: fns$n,
        vars: snackbarVars
      });
    };

    var classes$p = {
      component: "pe-svg"
    };

    function _defineProperty$n(obj, key, value) {
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

    function _extends$l() {
      _extends$l = Object.assign || function (target) {
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

      return _extends$l.apply(this, arguments);
    }

    var generalFns$k = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          color: "inherit",
          " svg": {
            color: "inherit",
            " path, rect, circle, polygon": {
              "&:not([fill=none])": {
                fill: "currentcolor"
              }
            }
          }
        })];
      }
    };

    var tintFns$k = function tintFns(tint) {
      return _defineProperty$n({}, "color_" + tint, function (selector, vars) {
        return [sel(selector, {
          " svg": {
            " path, rect, circle, polygon": {
              "&:not([fill=none])": {
                fill: vars["color_" + tint]
              }
            }
          }
        })];
      });
    };

    var lightTintFns$k = _extends$l({}, generalFns$k, tintFns$k("light"));

    var darkTintFns$k = _extends$l({}, generalFns$k, tintFns$k("dark"));

    var color$n = createColor({
      varFns: {
        lightTintFns: lightTintFns$k,
        darkTintFns: darkTintFns$k
      }
    });

    // @ts-check
    var varFns$o = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          lineHeight: 1,
          " > div, svg": {
            width: "inherit",
            height: "inherit"
          }
        })];
      }
    };
    var layout$q = createLayout({
      varFns: varFns$o
    });

    // @ts-check

    /**
     * @typedef {import("../index").SVGVars} SVGVars
     */

    /**
     * @type {SVGVars} svgVars
     */
    var svgVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      color_light: "currentcolor",
      color_dark: "currentcolor"
    };

    // @ts-check
    var fns$o = [layout$q, color$n];
    var selector$p = ".".concat(classes$p.component);
    var addStyle$5 = styler.createAddStyle(selector$p, fns$o, svgVars);

    var addGeneralStyleToHead$p = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$p],
        fns: fns$o,
        vars: svgVars
      });
    };

    var classes$q = {
      component: "pe-switch-control",
      // elements
      knob: "pe-switch-control__knob",
      thumb: "pe-switch-control__thumb",
      track: "pe-switch-control__track"
    };

    function _defineProperty$o(obj, key, value) {
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

    function _extends$m() {
      _extends$m = Object.assign || function (target) {
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

      return _extends$m.apply(this, arguments);
    }

    var generalFns$l = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {})];
      }
    };

    var tintFns$l = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$o(_ref, "color_" + tint + "_label", function (selector, vars) {
        return [sel(selector, {
          " .pe-control__label": {
            color: vars["color_" + tint + "_label"]
          }
        })];
      }), _defineProperty$o(_ref, "color_" + tint + "_track_off", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--off": {
            " .pe-switch-control__track": {
              backgroundColor: vars["color_" + tint + "_track_off"]
            }
          }
        })];
      }), _defineProperty$o(_ref, "color_" + tint + "_track_off_opacity", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--off": {
            " .pe-switch-control__track": {
              opacity: vars["color_" + tint + "_track_off_opacity"]
            }
          }
        })];
      }), _defineProperty$o(_ref, "color_" + tint + "_thumb_off", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--off": {
            " .pe-switch-control__knob": {
              backgroundColor: vars["color_" + tint + "_thumb_off"]
            }
          }
        })];
      }), _defineProperty$o(_ref, "color_" + tint + "_icon_off", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--off": {
            " .pe-icon": {
              color: vars["color_" + tint + "_icon_off"]
            }
          }
        })];
      }), _defineProperty$o(_ref, "color_" + tint + "_off_label", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--off": {
            " .pe-control__label": {
              color: vars["color_" + tint + "_off_label"]
            }
          }
        })];
      }), _defineProperty$o(_ref, "color_" + tint + "_track_on", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--on": {
            " .pe-switch-control__track": {
              backgroundColor: vars["color_" + tint + "_track_on"]
            }
          }
        })];
      }), _defineProperty$o(_ref, "color_" + tint + "_track_on_opacity", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--on": {
            " .pe-switch-control__track": {
              opacity: vars["color_" + tint + "_track_on_opacity"]
            }
          }
        })];
      }), _defineProperty$o(_ref, "color_" + tint + "_thumb_on", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--on": {
            " .pe-switch-control__knob": {
              backgroundColor: vars["color_" + tint + "_thumb_on"]
            }
          }
        })];
      }), _defineProperty$o(_ref, "color_" + tint + "_icon_on", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--on": {
            " .pe-icon": {
              color: vars["color_" + tint + "_icon_on"]
            }
          }
        })];
      }), _defineProperty$o(_ref, "color_" + tint + "_on_label", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--on": {
            " .pe-control__label": {
              color: vars["color_" + tint + "_on_label"]
            }
          }
        })];
      }), _defineProperty$o(_ref, "color_" + tint + "_disabled", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
            " .pe-control__label": {
              color: vars["color_" + tint + "_disabled"]
            }
          }
        })];
      }), _defineProperty$o(_ref, "color_" + tint + "_track_disabled", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
            " .pe-switch-control__track": {
              backgroundColor: vars["color_" + tint + "_track_disabled"]
            }
          }
        })];
      }), _defineProperty$o(_ref, "color_" + tint + "_track_disabled_opacity", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
            " .pe-switch-control__track": {
              opacity: vars["color_" + tint + "_track_disabled_opacity"]
            }
          }
        })];
      }), _defineProperty$o(_ref, "color_" + tint + "_thumb_disabled", function (selector, vars) {
        return [sel(selector, {
          ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
            " .pe-switch-control__thumb, .pe-button__content": {
              color: vars["color_" + tint + "_thumb_disabled"]
            }
          }
        })];
      }), _ref;
    };

    var hoverTintFns$3 = function hoverTintFns(tint) {
      return {// ["color_" + tint + "_wash_on"]: (selector, vars) => [
        //   sel(selector, {
        //     ".pe-control--on": {
        //       " .pe-button__wash": {
        //         backgroundColor: vars["color_" + tint + "_wash_on"]
        //       }
        //     },
        //   })
        // ],
        // ["color_" + tint + "_wash_off"]: (selector, vars) => [
        //   sel(selector, {
        //     ".pe-control--off": {
        //       " .pe-button__wash": {
        //         backgroundColor: vars["color_" + tint + "_wash_off"]
        //       }
        //     }
        //   })
        // ],
      };
    };

    var lightTintFns$l = _extends$m({}, generalFns$l, tintFns$l("light"));

    var darkTintFns$l = _extends$m({}, generalFns$l, tintFns$l("dark"));

    var lightTintHoverFns$3 = hoverTintFns$3();
    var darkTintHoverFns$3 = hoverTintFns$3();
    var color$o = createColor({
      varFns: {
        lightTintFns: lightTintFns$l,
        darkTintFns: darkTintFns$l,
        lightTintHoverFns: lightTintHoverFns$3,
        darkTintHoverFns: darkTintHoverFns$3
      }
    });

    var transition$1 = function transition(vars, properties) {
      var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : vars.animation_duration;
      return mixin.defaultTransition(properties, duration, "ease-out");
    };

    var getSizeData = function getSizeData(vars$1, size) {
      var factor = size / vars.unit_icon_size;
      var thumbSize = Math.floor(0.5 * vars$1.thumb_size * factor) * 2; // round to even

      var scaledTrackHeight = Math.floor(0.5 * vars$1.track_height * factor) * 2; // round to even

      var scaledTrackWidth = Math.floor(0.5 * vars$1.track_length * factor) * 2;
      var scaledThumbSize = Math.floor(0.5 * vars$1.thumb_size * factor) * 2;
      var trackTop = (vars$1.label_height * factor - scaledTrackHeight) / 2;
      var thumbPadding = vars$1.icon_button_padding;
      var thumbMargin = (size - scaledThumbSize) / 2;
      var thumbOuterSize = size + 2 * thumbPadding;
      var thumbOffsetMin = -(thumbOuterSize / 2) + thumbSize / 2;
      var thumbOffsetMax = thumbOffsetMin + scaledTrackWidth - thumbSize;
      var thumbOffsetY = thumbOffsetMin + thumbMargin;
      var trackVisualOffset = 0.3; // prevent sub pixel of track to shine through knob border

      return {
        factor: factor,
        scaledThumbSize: scaledThumbSize,
        scaledTrackHeight: scaledTrackHeight,
        scaledTrackWidth: scaledTrackWidth,
        size: size,
        thumbMargin: thumbMargin,
        thumbOffsetMax: thumbOffsetMax,
        thumbOffsetMin: thumbOffsetMin,
        thumbOffsetY: thumbOffsetY,
        thumbPadding: thumbPadding,
        trackTop: trackTop,
        trackVisualOffset: trackVisualOffset
      };
    };

    var customSize = function customSize(vars, _ref) {
      var scaledThumbSize = _ref.scaledThumbSize,
          scaledTrackHeight = _ref.scaledTrackHeight,
          scaledTrackWidth = _ref.scaledTrackWidth,
          size = _ref.size,
          thumbMargin = _ref.thumbMargin,
          thumbOffsetY = _ref.thumbOffsetY,
          thumbPadding = _ref.thumbPadding,
          trackTop = _ref.trackTop,
          trackVisualOffset = _ref.trackVisualOffset;
      return {
        " .pe-control__form-label": {
          height: size + "px",
          minWidth: scaledTrackWidth + "px"
        },
        " .pe-switch-control__track": {
          height: scaledTrackHeight + "px",
          width: scaledTrackWidth - 2 * trackVisualOffset + "px",
          top: trackTop + "px",
          borderRadius: scaledTrackHeight + "px"
        },
        " .pe-switch-control__thumb": {
          top: thumbOffsetY + "px"
        },
        " .pe-switch-control__knob": {
          width: scaledThumbSize + "px",
          height: scaledThumbSize + "px",
          margin: thumbMargin + "px"
        },
        " .pe-button__content": {
          padding: thumbPadding + "px"
        }
      };
    };

    var customSpacing = function customSpacing(vars, _ref2, isRTL) {
      var _peControl__label, _peSwitchControl_, _peSwitchControl_2, _peSwitchControl_3;

      var factor = _ref2.factor,
          scaledTrackWidth = _ref2.scaledTrackWidth,
          thumbOffsetMax = _ref2.thumbOffsetMax,
          thumbOffsetMin = _ref2.thumbOffsetMin,
          trackVisualOffset = _ref2.trackVisualOffset;
      return {
        " .pe-control__label": (_peControl__label = {}, _defineProperty$o(_peControl__label, isRTL ? "paddingRight" : "paddingLeft", vars.padding * factor + 8 + scaledTrackWidth + "px"), _defineProperty$o(_peControl__label, isRTL ? "paddingLeft" : "paddingRight", 0), _peControl__label),
        " .pe-switch-control__track": (_peSwitchControl_ = {}, _defineProperty$o(_peSwitchControl_, isRTL ? "right" : "left", trackVisualOffset + "px"), _defineProperty$o(_peSwitchControl_, isRTL ? "left" : "right", "auto"), _peSwitchControl_),
        " .pe-switch-control__thumb": (_peSwitchControl_2 = {}, _defineProperty$o(_peSwitchControl_2, isRTL ? "right" : "left", thumbOffsetMin + "px"), _defineProperty$o(_peSwitchControl_2, isRTL ? "left" : "right", "auto"), _peSwitchControl_2),
        ".pe-control--on": {
          " .pe-switch-control__thumb": (_peSwitchControl_3 = {}, _defineProperty$o(_peSwitchControl_3, isRTL ? "right" : "left", thumbOffsetMax + "px"), _defineProperty$o(_peSwitchControl_3, isRTL ? "left" : "right", "auto"), _peSwitchControl_3)
        }
      };
    };

    var alignSide$7 = function alignSide(isRTL) {
      return function () {
        var _peSwitchControl_4;

        return {
          " .pe-switch-control__track": (_peSwitchControl_4 = {}, _defineProperty$o(_peSwitchControl_4, isRTL ? "right" : "left", 0), _defineProperty$o(_peSwitchControl_4, isRTL ? "left" : "right", "auto"), _peSwitchControl_4)
        };
      };
    };

    var alignLeft$7 = alignSide$7(false);
    var alignRight$7 = alignSide$7(true);

    var createSize = function createSize(selector, vars$1) {
      var sizeData = {
        small: getSizeData(vars$1, vars.unit_icon_size_small),
        regular: getSizeData(vars$1, vars.unit_icon_size),
        medium: getSizeData(vars$1, vars.unit_icon_size_medium),
        large: getSizeData(vars$1, vars.unit_icon_size_large)
      };
      return [sel(selector, {
        ".pe-control--small": [customSize(vars$1, sizeData.small), customSpacing(vars$1, sizeData.small, false)],
        ".pe-control--regular": [customSize(vars$1, sizeData.regular), customSpacing(vars$1, sizeData.regular, false)],
        ".pe-control--medium": [customSize(vars$1, sizeData.medium), customSpacing(vars$1, sizeData.medium, false)],
        ".pe-control--large": [customSize(vars$1, sizeData.large), customSpacing(vars$1, sizeData.large, false)]
      }), _defineProperty$o({}, "*[dir=rtl] ".concat(selector, ", .pe-rtl ").concat(selector), [alignRight$7(), {
        ".pe-control--small": [customSpacing(vars$1, sizeData.small, true)],
        ".pe-control--regular": [customSpacing(vars$1, sizeData.regular, true)],
        ".pe-control--medium": [customSpacing(vars$1, sizeData.medium, true)],
        ".pe-control--large": [customSpacing(vars$1, sizeData.large, true)]
      }])];
    };

    var varFns$p = {
      general_styles: function general_styles(selector) {
        return [sel(selector, [alignLeft$7(), {
          " .pe-switch-control__track": [{
            position: "absolute"
          }],
          " .pe-switch-control__thumb": {
            position: "absolute",
            zIndex: 1,
            // Prevents flickering of text label when toggling
            color: "inherit",
            ":focus": {
              outline: 0
            }
          },
          " .pe-switch-control__knob": {
            position: "relative",
            borderRadius: "50%"
          },
          " .pe-icon-button .pe-button__content": {
            transition: "none",
            " .pe-switch-control__knob .pe-icon": [mixin.fit(), {
              width: "100%",
              height: "100%"
            }]
          }
        }]), _defineProperty$o({}, "_:-ms-fullscreen, :root ".concat(selector), {
          " input": {
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            display: "block",
            opacity: 0,
            cursor: "pointer"
          },
          " label": {
            cursor: "auto"
          }
        })];
      },
      animation_duration: function animation_duration(selector, vars) {
        return [sel(selector, {
          " .pe-switch-control__track, .pe-switch-control__thumb, .pe-control__label": transition$1(vars, "all")
        })];
      },
      createSize: createSize
    };

    var withCreateSizeVar = function withCreateSizeVar(vars) {
      return vars.thumb_size || vars.track_height || vars.track_length || vars.label_height || vars.icon_button_padding ? _extends$m({}, vars, {
        createSize: true
      }) : vars;
    };

    var layout$r = createLayout({
      varFns: varFns$p,
      superLayout: layout$6,
      varMixin: withCreateSizeVar
    });

    // @ts-check
    /**
     * @type {SwitchVars} switchVars
     */

    var switchVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      animation_duration: vars.animation_duration,
      hit_area_padding: (vars.grid_unit_icon_button - vars.unit_icon_size) / 2,
      // 12
      icon_button_padding: iconButtonVars.padding,
      padding: vars.grid_unit_component,
      thumb_size: 20,
      track_height: 14,
      track_length: 36,
      label_height: selectionControlVars.label_height,
      color_light_thumb_on: rgba(vars.color_primary),
      color_light_thumb_off: "#f1f1f1",
      color_light_thumb_disabled: "#eee",
      color_light_wash_on: rgba(vars.color_primary, vars.blend_light_background_active),
      color_light_wash_off: iconButtonVars.color_light_wash_background,
      color_light_track_on: rgba(vars.color_primary_faded),
      color_light_track_on_opacity: .55,
      color_light_track_off: rgba(vars.color_light_foreground, vars.blend_light_text_regular),
      color_light_track_off_opacity: .55,
      color_light_track_disabled: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
      color_light_track_disabled_opacity: 1,
      // icon color may be set in theme; default "currentcolor"
      // color_light_icon_on:                   "currentcolor",
      // color_light_icon_off:                  "currentcolor",
      // color_light_focus_on and so on taken from selectionControlVars
      color_dark_thumb_on: rgba(vars.color_primary),
      color_dark_thumb_off: "#bdbdbd",
      color_dark_thumb_disabled: "#555",
      color_dark_wash_on: rgba(vars.color_primary, vars.blend_dark_background_active),
      color_dark_wash_off: iconButtonVars.color_dark_wash_background,
      color_dark_track_on: rgba(vars.color_primary_faded, vars.blend_dark_text_tertiary),
      // or "#5a7f7c"
      color_dark_track_on_opacity: 9,
      color_dark_track_off: "#717171",
      color_dark_track_off_opacity: .55,
      color_dark_track_disabled: "#717171",
      color_dark_track_disabled_opacity: .3 // icon color may be set in theme; default "currentcolor"
      // color_dark_icon_on:                    "currentcolor"
      // color_dark_icon_off:                   "currentcolor"
      // color_dark_focus_on and so on taken from selectionControlVars

    };

    // @ts-check
    var fns$p = [layout$r, color$o];
    var selector$q = ".".concat(classes$q.component);

    var addGeneralStyleToHead$q = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$q],
        fns: fns$p,
        vars: switchVars
      });
    };

    var buttonClasses = {
      component: "pe-text-button",
      "super": "pe-button",
      row: "pe-button-row",
      // elements      
      content: "pe-button__content",
      label: "pe-button__label",
      textLabel: "pe-button__text-label",
      wash: "pe-button__wash",
      washColor: "pe-button__wash-color",
      dropdown: "pe-button__dropdown",
      // states      
      border: "pe-button--border",
      contained: "pe-button--contained",
      disabled: "pe-button--disabled",
      dropdownClosed: "pe-button--dropdown-closed",
      dropdownOpen: "pe-button--dropdown-open",
      extraWide: "pe-button--extra-wide",
      hasDropdown: "pe-button--dropdown",
      highLabel: "pe-button--high-label",
      inactive: "pe-button--inactive",
      raised: "pe-button--raised",
      selected: "pe-button--selected",
      separatorAtStart: "pe-button--separator-start",
      hasHover: "pe-button--has-hover"
    };

    var classes$r = {
      component: "pe-tabs",
      // elements
      indicator: "pe-tabs__indicator",
      scrollButton: "pe-tabs__scroll-button",
      scrollButtonAtEnd: "pe-tabs__scroll-button-end",
      scrollButtonAtStart: "pe-tabs__scroll-button-start",
      tab: "pe-tab",
      tabContent: "pe-tabs__tab-content",
      tabRow: "pe-tabs__row",
      // states
      activeSelectable: "pe-tabs__active--selectable",
      isAtEnd: "pe-tabs--end",
      isAtStart: "pe-tabs--start",
      isAutofit: "pe-tabs--autofit",
      isMenu: "pe-tabs--menu",
      scrollable: "pe-tabs--scrollable",
      compactTabs: "pe-tabs--compact",
      tabHasIcon: "pe-tabs__tab--icon",
      tabRowCentered: "pe-tabs__row--centered",
      tabRowIndent: "pe-tabs__row--indent",
      // lookup
      label: buttonClasses.label
    };

    function _defineProperty$p(obj, key, value) {
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

    function _extends$n() {
      _extends$n = Object.assign || function (target) {
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

      return _extends$n.apply(this, arguments);
    }

    var generalFns$m = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          ".pe-button--selected": {
            " .pe-button__content": {
              background: "transparent"
            }
          }
        })];
      }
    };

    var tintFns$m = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$p(_ref, "color_" + tint + "_selected", function (selector, vars) {
        return [sel(selector, {
          ".pe-button--selected": {
            " .pe-button__content": {
              color: vars["color_" + tint + "_selected"]
            }
          }
        })];
      }), _defineProperty$p(_ref, "color_" + tint + "_selected_background", function (selector, vars) {
        return [sel(selector, {
          ".pe-button--selected": {
            " .pe-button__content": {
              background: vars["color_" + tint + "_selected_background"]
            }
          }
        })];
      }), _defineProperty$p(_ref, "color_" + tint + "_icon", function (selector, vars) {
        return [sel(selector, {
          ":not(.pe-button--selected) .pe-icon": {
            color: vars["color_" + tint + "_icon"]
          }
        })];
      }), _ref;
    };

    var lightTintFns$m = _extends$n({}, generalFns$m, tintFns$m("light"));

    var darkTintFns$m = _extends$n({}, generalFns$m, tintFns$m("dark"));

    var tabColor = createColor({
      varFns: {
        lightTintFns: lightTintFns$m,
        darkTintFns: darkTintFns$m
      }
    });

    var tab_label_transition_property_animation_duration = function tab_label_transition_property_animation_duration(selector, vars) {
      return sel(selector, {
        " .pe-button__content": mixin.defaultTransition(vars.tab_label_transition_property, vars.animation_duration)
      });
    };

    var varFns$q = {
      general_styles: function general_styles(selector) {
        return [sel(selector, [flex$1.flex(), flex$1.flexIndex("none"), {
          userSelect: "none",
          "-moz-user-select": "none",
          margin: 0,
          borderRadius: 0,
          padding: 0,
          " .pe-button__content": {
            lineHeight: vars.line_height + "em",
            borderRadius: 0,
            position: "relative",
            " .pe-button__label, .pe-icon": {
              overflow: "hidden",
              whiteSpace: "normal"
            },
            " .pe-button__label": {
              padding: 0,
              width: "100%" // for IE 11

            },
            " .pe-icon": {
              marginLeft: "auto",
              marginRight: "auto"
            }
          },
          ".pe-tabs__tab--icon": {
            "&, .pe-button__content": {
              " .pe-button__content, .pe-icon": {
                margin: "0 auto"
              }
            }
          },
          ".pe-tabs--menu &": {
            "&, &.pe-tabs__tab--icon, &.pe-text-button": {
              minWidth: 0,
              " .pe-button__content": {
                " .pe-icon": {
                  marginBottom: 0
                },
                " .pe-button__content": {
                  fontSize: "10px",
                  lineHeight: "12px",
                  textTransform: "none"
                }
              }
            }
          },
          ".pe-tabs--compact &": {
            minWidth: "initial"
          },
          " .pe-tabs__tab-content": [flex$1.layoutCenterCenter, flex$1.layoutVertical, {
            height: "inherit"
          }],
          ".pe-tabs--autofit &": [flex$1.flex(), {
            minWidth: "initial",
            maxWidth: "none"
          }],
          ".pe-tabs__active--selectable &": {
            ".pe-button--selected": {
              cursor: "pointer",
              pointerEvents: "initial"
            }
          }
        }])];
      },
      tab_height: function tab_height(selector, vars) {
        return [sel(selector, {
          height: vars.tab_height + "px",
          " .pe-button__content": {
            height: vars.tab_height + "px"
          }
        })];
      },
      tab_min_width: function tab_min_width(selector, vars) {
        return [sel(selector, {
          minWidth: vars.tab_min_width + "px" // for smaller screens, see also media query

        })];
      },
      tab_max_width: function tab_max_width(selector, vars) {
        return [sel(selector, {
          maxWidth: isNaN(vars.tab_max_width) ? vars.tab_max_width : vars.tab_max_width + "px"
        })];
      },
      tab_min_width_tablet: function tab_min_width_tablet(selector, vars$1) {
        return _defineProperty$p({}, "@media (min-width: " + vars.breakpoint_for_tablet_landscape_up + "px)", _defineProperty$p({}, ".pe-tabs:not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit):not(.pe-tabs--scrollable):not(.pe-tabs--compact) ".concat(selector), {
          minWidth: vars$1.tab_min_width_tablet + "px"
        }));
      },
      tab_icon_label_height: function tab_icon_label_height(selector, vars) {
        return [sel(selector, {
          ".pe-tabs__tab--icon": {
            "&, .pe-button__content": {
              height: vars.tab_icon_label_height + "px"
            }
          }
        })];
      },
      tab_label_transition_property: function tab_label_transition_property(selector, vars) {
        return [tab_label_transition_property_animation_duration(selector, vars)];
      },
      animation_duration: function animation_duration(selector, vars) {
        return [tab_label_transition_property_animation_duration(selector, vars)];
      },
      tab_content_padding_v: function tab_content_padding_v(selector, vars) {
        return [sel(selector, {
          " .pe-button__content": {
            padding: "0 " + vars.tab_content_padding_v + "px"
          }
        })];
      },
      label_max_width: function label_max_width(selector, vars) {
        return [sel(selector, {
          " .pe-button__content": {
            " .pe-button__label, .pe-icon": {
              maxWidth: vars.label_max_width + "px" // or .pe-tabs width minus 56dp

            }
          }
        })];
      },
      tab_label_line_height: function tab_label_line_height(selector, vars) {
        return [sel(selector, {
          " .pe-button__content": {
            " .pe-button__label, .pe-icon": {
              lineHeight: vars.tab_label_line_height + "px",
              maxHeight: 2 * vars.tab_label_line_height + "px"
            }
          }
        })];
      },
      tab_label_vertical_offset: function tab_label_vertical_offset(selector, vars) {
        return [sel(selector, {
          " .pe-button__content": {
            " .pe-button__label": {
              margin: vars.tab_label_vertical_offset + "px 0 0 0"
            }
          }
        })];
      },
      tab_icon_label_icon_spacing: function tab_icon_label_icon_spacing(selector, vars) {
        return [sel(selector, {
          ".pe-tabs__tab--icon": {
            "&, .pe-button__content": {
              " .pe-icon": {
                marginBottom: vars.tab_icon_label_icon_spacing + "px"
              }
            }
          }
        })];
      },
      menu_tab_height: function menu_tab_height(selector, vars) {
        return [sel(selector, {
          ".pe-tabs--menu &": {
            // reset sizes to fit within a small space
            height: vars.menu_tab_height + "px",
            "&, &.pe-tabs__tab--icon, &.pe-text-button": {
              " .pe-button__content": {
                height: vars.menu_tab_height + "px"
              }
            }
          }
        })];
      },
      menu_tab_icon_label_height: function menu_tab_icon_label_height(selector, vars) {
        return [sel(selector, {
          ".pe-tabs--menu &": {
            "&.pe-tabs__tab--icon": {
              height: vars.menu_tab_icon_label_height + "px"
            }
          }
        })];
      },
      tab_menu_content_padding_v: function tab_menu_content_padding_v(selector, vars) {
        return [sel(selector, {
          ".pe-tabs--menu &": {
            "&, &.pe-tabs__tab--icon, &.pe-text-button": {
              " .pe-button__content": {
                padding: "0 " + vars.tab_menu_content_padding_v + "px"
              }
            }
          }
        })];
      }
    };
    var tabLayout = createLayout({
      varFns: varFns$q
    });

    var generalFns$1$2 = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          " .pe-tabs__scroll-button": {
            color: "inherit"
          },
          " .pe-no-touch &": {
            ".pe-tabs--scrollable": {
              backgroundColor: "inherit"
            },
            " .pe-tabs__scroll-button": {
              backgroundColor: "inherit",
              " .pe-button__content": {
                backgroundColor: "inherit"
              }
            }
          }
        })];
      }
    };

    var tintFns$1$2 = function tintFns(tint) {
      return _defineProperty$p({}, "color_" + tint + "_tab_indicator", function (selector, vars) {
        return [sel(selector, {
          " .pe-tabs__indicator": {
            backgroundColor: vars["color_" + tint + "_tab_indicator"]
          }
        })];
      });
    };

    var lightTintFns$1$2 = _extends$n({}, generalFns$1$2, tintFns$1$2("light"));

    var darkTintFns$1$2 = _extends$n({}, generalFns$1$2, tintFns$1$2("dark"));

    var tabsColor = createColor({
      varFns: {
        lightTintFns: lightTintFns$1$2,
        darkTintFns: darkTintFns$1$2
      }
    });

    var alignSide$8 = function alignSide(isRTL) {
      return function () {
        return {
          " .pe-tabs__indicator": _defineProperty$p({
            transformOrigin: isRTL ? "right 50%" : "left 50%"
          }, isRTL ? "right" : "left", 0)
        };
      };
    };

    var alignLeft$8 = alignSide$8(false);
    var alignRight$8 = alignSide$8(true);

    var _tabs_indent = function tabs_indent(selector, vars, isRTL) {
      return sel(selector, {
        " .pe-tabs__row": {
          ".pe-tabs__row--indent": _defineProperty$p({}, isRTL ? "paddingRight" : "paddingLeft", vars.tabs_indent + "px")
        }
      });
    };

    var varFns$1$4 = {
      general_styles: function general_styles(selector) {
        return [sel(selector, [alignLeft$8(), {
          userSelect: "none",
          "-moz-user-select": "none",
          transform: "translate3d(0,0,0)",
          "-webkit-overflow-scrolling": "touch",
          "& ::-webkit-scrollbar": {
            "display": "none"
          },
          ".pe-tabs--scrollable": {
            display: "flex",
            "-ms-overflow-style": "none",
            " .pe-tabs__scroll-button": {
              // default hide, show with html.pe-no-touch
              display: "none"
            },
            " .pe-tabs__tab": {
              minWidth: 0
            }
          },
          " .pe-no-touch &": {
            " .pe-tabs__scroll-button": {
              position: "relative",
              display: "block",
              zIndex: 1,
              borderRadius: 0,
              " .pe-button__content": {
                borderRadius: 0,
                transitionProperty: "all",
                transitionTimingFunction: "ease-in-out"
              }
            },
            ".pe-tabs--start .pe-tabs__scroll-button-start": {
              pointerEvents: "none",
              cursor: "default",
              opacity: 0
            },
            ".pe-tabs--end .pe-tabs__scroll-button-end": {
              pointerEvents: "none",
              cursor: "default",
              opacity: 0
            }
          },
          " .pe-tabs__row": [flex$1.layoutHorizontal, {
            userSelect: "none",
            "-moz-user-select": "none",
            position: "relative",
            whiteSpace: "nowrap",
            ".pe-tabs__row--indent": {
              margin: 0,
              overflow: "auto"
            },
            ".pe-tabs__row--centered": flex$1.layoutCenterJustified
          }],
          " .pe-tabs__scroll-button-offset": [flex$1.flex(), flex$1.flexIndex("none")],
          " .pe-tabs__indicator": {
            transform: "translate3d(0,0,0)",
            // transformOrigin set in alignSide
            transitionProperty: "all",
            transitionTimingFunction: "ease-in-out",
            position: "absolute",
            zIndex: 1,
            bottom: 0,
            // left/right set in alignSide
            width: "100%",
            // and transformed with js
            // background-color defined in implementation/theme css
            opacity: 0 // set to 1 in js

          },
          " .pe-toolbar--tabs .pe-toolbar__bar &": [mixin.fit(), {
            width: "auto",
            margin: 0,
            top: "auto"
          }]
        }]), _defineProperty$p({}, "*[dir=rtl] ".concat(selector, ", .pe-rtl ").concat(selector), [alignRight$8()])];
      },
      tabs_indent: function tabs_indent(selector, vars) {
        return [_tabs_indent(selector, vars, false), _tabs_indent(selectorRTL(selector), vars, true)];
      },
      tab_height: function tab_height(selector, vars) {
        return [sel(selector, {
          ".pe-tabs--scrollable": {
            display: "flex",
            // hide scrollbar (this approach is required for Firefox)
            "max-height": vars.tab_height + "px"
          }
        })];
      },
      scrollbar_offset: function scrollbar_offset(selector, vars) {
        return [sel(selector, {
          ".pe-tabs--scrollable": {
            " .pe-tabs__row": {
              marginBottom: -vars.scrollbar_offset + "px"
            }
          }
        })];
      },
      scroll_button_size: function scroll_button_size(selector, vars) {
        return [sel(selector, {
          " .pe-no-touch &": {
            " .pe-tabs__scroll-button": {
              width: vars.scroll_button_size + "px",
              height: vars.scroll_button_size + "px"
            }
          }
        })];
      },
      scroll_button_fade_duration: function scroll_button_fade_duration(selector, vars) {
        return [sel(selector, {
          " .pe-no-touch &": {
            " .pe-tabs__scroll-button": {
              " .pe-button__content": {
                transitionDuration: vars.scroll_button_fade_duration
              }
            }
          }
        })];
      },
      scroll_button_fade_delay: function scroll_button_fade_delay(selector, vars) {
        return [sel(selector, {
          " .pe-no-touch &": {
            " .pe-tabs__scroll-button": {
              " .pe-button__content": {
                transitionDelay: vars.scroll_button_fade_delay
              }
            }
          }
        })];
      },
      scroll_button_opacity: function scroll_button_opacity(selector, vars) {
        return [sel(selector, {
          " .pe-no-touch &": {
            " .pe-tabs__scroll-button": {
              " .pe-button__content": {
                opacity: vars.scroll_button_opacity
              }
            }
          }
        })];
      },
      tab_indicator_height: function tab_indicator_height(selector, vars) {
        return [sel(selector, {
          " .pe-tabs__indicator": {
            height: vars.tab_indicator_height + "px"
          }
        })];
      }
    };
    var tabsLayout = createLayout({
      varFns: varFns$1$4
    });

    // @ts-check
    var fontSize = textButtonVars$1.font_size;
    var tab_label_line_height = 1.1 * fontSize;
    var tab_height = 48;
    var scroll_button_size = tab_height;
    /**
     * @type {TabsVars} tabsVars
     */

    var tabsVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      animation_duration: textButtonVars$1.animation_duration,
      indicator_slide_speed: 600,
      // px per second
      label_max_width: 264,
      menu_tab_height: 44,
      menu_tab_icon_label_height: 44,
      scroll_button_fade_delay: ".25s",
      scroll_button_fade_duration: ".2s",
      scroll_button_opacity: .7,
      scroll_button_size: scroll_button_size,
      scrollbar_offset: 0,
      tab_content_padding_v: 12,
      tab_height: tab_height,
      tab_icon_label_height: 72,
      tab_icon_label_icon_spacing: 7,
      tab_indicator_height: 2,
      tab_label_line_height: tab_label_line_height,
      tab_label_transition_property: "opacity, color, backgroundColor",
      tab_label_vertical_offset: tab_label_line_height - fontSize,
      tab_max_width: "initial",
      tab_menu_content_padding_v: 6,
      tab_min_width: 72,
      tab_min_width_tablet: 160,
      tabs_indent: 0,
      color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_regular),
      color_light_selected: rgba(vars.color_primary),
      color_light_selected_background: "transparent",
      color_light_tab_indicator: rgba(vars.color_primary),
      color_light_icon: iconButtonVars.color_light,
      color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_regular),
      color_dark_selected: rgba(vars.color_primary),
      color_dark_selected_background: "transparent",
      color_dark_tab_indicator: rgba(vars.color_primary),
      color_dark_icon: iconButtonVars.color_dark // hover colors may be set in theme; disabled by default
      // color_light_hover:                    rgba(vars.color_light_foreground, vars.blend_light_text_primary),
      // color_light_hover_background:         "transparent",
      //
      // color_dark_hover:                     rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
      // color_dark_hover_background:          "transparent",

    };

    // @ts-check
    var tabsFns = [tabsLayout, tabsColor];
    var tabFns = [tabLayout, tabColor];
    var tabsSelector = ".".concat(classes$r.component);
    var tabClass = "".concat(classes$r.tab, " pe-text-button pe-button");
    var tabSelector = " .".concat(tabClass.replace(/ /g, "."));

    var addGeneralStyleToHead$r = function addGeneralStyleToHead() {
      styler.addStyle({
        selectors: [tabsSelector],
        fns: tabsFns,
        vars: tabsVars
      });
      styler.addStyle({
        selectors: [tabSelector],
        fns: tabFns,
        vars: tabsVars
      });
    };

    var classes$s = {
      component: "pe-textfield",
      // elements
      counter: "pe-textfield__counter",
      error: "pe-textfield__error",
      errorPlaceholder: "pe-textfield__error-placeholder",
      focusHelp: "pe-textfield__help-focus",
      help: "pe-textfield__help",
      input: "pe-textfield__input",
      inputArea: "pe-textfield__input-area",
      label: "pe-textfield__label",
      optionalIndicator: "pe-textfield__optional-indicator",
      requiredIndicator: "pe-textfield__required-indicator",
      // states
      hasCounter: "pe-textfield--counter",
      hasFloatingLabel: "pe-textfield--floating-label",
      hasFullWidth: "pe-textfield--full-width",
      hideClear: "pe-textfield--hide-clear",
      hideSpinner: "pe-textfield--hide-spinner",
      hideValidation: "pe-textfield--hide-validation",
      isDense: "pe-textfield--dense",
      isRequired: "pe-textfield--required",
      stateDirty: "pe-textfield--dirty",
      stateDisabled: "pe-textfield--disabled",
      stateFocused: "pe-textfield--focused",
      stateInvalid: "pe-textfield--invalid",
      stateReadonly: "pe-textfield--readonly"
    };

    function _defineProperty$q(obj, key, value) {
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

    function _extends$o() {
      _extends$o = Object.assign || function (target) {
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

      return _extends$o.apply(this, arguments);
    }

    var generalFns$n = {
      general_styles: function general_styles(selector) {
        return [sel(selector, {
          " .pe-textfield__input-area": {
            color: "inherit",
            "&:after": {
              backgroundColor: "currentcolor"
            }
          },
          ".pe-textfield--disabled, &.pe-textfield--readonly": {
            " .pe-textfield__input-area:after": {
              backgroundColor: "transparent"
            }
          },
          ".pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
            " .pe-textfield__input": {
              boxShadow: "none"
            }
          }
        })];
      }
    };

    var tintFns$n = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$q(_ref, "color_" + tint + "_focus_border", function (selector, vars) {
        return [sel(selector, {
          color: vars["color_" + tint + "_focus_border"] // override by specifying "color"

        })];
      }), _defineProperty$q(_ref, "color_" + tint + "_input_background", function (selector, vars) {
        return [sel(selector, {
          " .pe-textfield__input-area": {
            backgroundColor: vars["color_" + tint + "_input_background"]
          },
          " .pe-textfield__input:-webkit-autofill": {
            "-webkit-box-shadow": "0 0 0px 1000px " + vars["color_" + tint + "_input_background"] + " inset"
          }
        })];
      }), _defineProperty$q(_ref, "color_" + tint + "_input_text", function (selector, vars) {
        return [sel(selector, {
          " .pe-textfield__input": {
            color: vars["color_" + tint + "_input_text"]
          },
          " .pe-textfield__input:-webkit-autofill": {
            color: vars["color_" + tint + "_input_text"] + " !important"
          }
        })];
      }), _defineProperty$q(_ref, "color_" + tint + "_counter_ok_border", function (selector, vars) {
        return [sel(selector, {
          ".pe-textfield--counter ": {
            " .pe-textfield__input-area:after": {
              backgroundColor: vars["color_" + tint + "_counter_ok_border"]
            }
          }
        })];
      }), _defineProperty$q(_ref, "color_" + tint + "_input_bottom_border", function (selector, vars) {
        return [sel(selector, {
          " .pe-textfield__input": {
            borderColor: vars["color_" + tint + "_input_bottom_border"]
          }
        })];
      }), _defineProperty$q(_ref, "color_" + tint + "_label_text", function (selector, vars) {
        return [sel(selector, {
          " .pe-textfield__label": {
            color: vars["color_" + tint + "_label_text"]
          }
        })];
      }), _defineProperty$q(_ref, "color_" + tint + "_disabled_label_text", function (selector, vars) {
        return [sel(selector, {
          ".pe-textfield--disabled, &.pe-textfield--readonly": {
            " .pe-textfield__input-area:after": {
              backgroundImage: "linear-gradient(to right, " + vars["color_" + tint + "_disabled_label_text"] + " 20%, rgba(255, 255, 255, 0) 0%)"
            }
          },
          ".pe-textfield--disabled": {
            " .pe-textfield__input, .pe-textfield__label": {
              color: vars["color_" + tint + "_disabled_label_text"]
            }
          }
        })];
      }), _defineProperty$q(_ref, "color_" + tint + "_readonly_label_text", function (selector, vars) {
        return [sel(selector, {
          ".pe-textfield--readonly": {
            " .pe-textfield__input, .pe-textfield__label": {
              color: vars["color_" + tint + "_readonly_label_text"]
            }
          }
        })];
      }), _defineProperty$q(_ref, "color_" + tint + "_highlight_text", function (selector, vars) {
        return [sel(selector, {
          ".pe-textfield--focused": {
            // note: not when textfield--dirty and not textfield--focused
            ".pe-textfield--floating-label .pe-textfield__label": {
              color: vars["color_" + tint + "_highlight_text"]
            }
          }
        })];
      }), _defineProperty$q(_ref, "color_" + tint + "_required_symbol", function (selector, vars) {
        return [sel(selector, {
          ".pe-textfield--focused": {
            ".pe-textfield--required.pe-textfield--floating-label": {
              " .pe-textfield__required-indicator": {
                color: vars["color_" + tint + "_required_symbol"]
              }
            }
          }
        })];
      }), _defineProperty$q(_ref, "color_" + tint + "_help_text", function (selector, vars) {
        return [sel(selector, {
          " .pe-textfield__help, .pe-textfield__counter": {
            color: vars["color_" + tint + "_help_text"]
          }
        })];
      }), _defineProperty$q(_ref, "color_" + tint + "_input_error_border", function (selector, vars) {
        return [sel(selector, {
          ".pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
            " .pe-textfield__input": {
              borderColor: vars["color_" + tint + "_input_error_border"]
            },
            "&, &.pe-textfield--counter": {
              " .pe-textfield__input-area:after": {
                backgroundColor: vars["color_" + tint + "_input_error_border"]
              }
            }
          }
        })];
      }), _defineProperty$q(_ref, "color_" + tint + "_input_error_text", function (selector, vars) {
        return [sel(selector, {
          ".pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
            " .pe-textfield__label": {
              color: vars["color_" + tint + "_input_error_text"]
            },
            " .pe-textfield__error, .pe-textfield__counter, .pe-textfield__help": {
              color: vars["color_" + tint + "_input_error_text"]
            },
            ".pe-textfield--required .pe-textfield__label": {
              color: vars["color_" + tint + "_input_error_text"]
            }
          }
        })];
      }), _ref;
    };

    var lightTintFns$n = _extends$o({}, generalFns$n, tintFns$n("light"));

    var darkTintFns$n = _extends$o({}, generalFns$n, tintFns$n("dark"));

    var color$p = createColor({
      varFns: {
        lightTintFns: lightTintFns$n,
        darkTintFns: darkTintFns$n
      }
    });

    var alignSide$9 = function alignSide(isRTL) {
      return function () {
        return {
          " .pe-textfield__counter": {
            textAlign: isRTL ? "left" : "right",
            "float": isRTL ? "left" : "right",
            padding: isRTL ? "0 16px 0 0" : "0 0 0 16px"
          }
        };
      };
    };

    var alignLeft$9 = alignSide$9(false);
    var alignRight$9 = alignSide$9(true);

    var vertical_spacing_top_input_padding_v = function vertical_spacing_top_input_padding_v(selector, vars) {
      return sel(selector, {
        " .pe-textfield__label": {
          top: vars.vertical_spacing_top + vars.input_padding_v + "px"
        }
      });
    };

    var floating_label_vertical_spacing_top_input_padding_v = function floating_label_vertical_spacing_top_input_padding_v(selector, vars) {
      return sel(selector, {
        ".pe-textfield--floating-label .pe-textfield__label": {
          top: vars.floating_label_vertical_spacing_top + vars.input_padding_v + "px"
        }
      });
    };

    var dense_floating_label_vertical_spacing_top_input_padding_v = function dense_floating_label_vertical_spacing_top_input_padding_v(selector, vars) {
      return sel(selector, {
        ".pe-textfield--floating-label.pe-textfield--dense .pe-textfield__label": {
          top: vars.dense_floating_label_vertical_spacing_top + vars.input_padding_v + "px"
        }
      });
    };

    var input_padding_v_input_padding_h = function input_padding_v_input_padding_h(selector, vars) {
      return sel(selector, {
        " .pe-textfield__input": {
          padding: vars.input_padding_v + "px " + vars.input_padding_h + "px"
        },
        " textarea.pe-textfield__input": {
          margin: vars.input_padding_v + "px " + vars.input_padding_h + "px"
        }
      });
    };

    var full_width_input_padding_v_full_width_input_padding_h = function full_width_input_padding_v_full_width_input_padding_h(selector, vars) {
      return sel(selector, {
        ".pe-textfield--full-width": {
          " .pe-textfield__input": {
            padding: vars.full_width_input_padding_v + "px " + vars.full_width_input_padding_h + "px"
          }
        }
      });
    };

    var dense_full_width_input_padding_v_dense_full_width_input_padding_h = function dense_full_width_input_padding_v_dense_full_width_input_padding_h(selector, vars) {
      return sel(selector, {
        ".pe-textfield--full-width.pe-textfield--dense": {
          " .pe-textfield__input": {
            padding: vars.dense_full_width_input_padding_v + "px " + vars.dense_full_width_input_padding_h + "px"
          }
        }
      });
    };

    var varFns$r = {
      general_styles: function general_styles(selector) {
        return [sel(selector, [alignLeft$9(), mixin.clearfix(), {
          position: "relative",
          lineHeight: vars.line_height,
          display: "inline-block",
          boxSizing: "border-box",
          margin: 0,
          overflow: "visible",
          // Firefox needs this
          width: "100%",
          maxWidth: "100%",
          " .pe-textfield__input-area": {
            position: "relative",
            "&:after": {
              position: "absolute",
              content: "\"\"",
              bottom: 0,
              left: 0,
              width: "100%",
              opacity: 0
            }
          },
          ".pe-textfield--focused .pe-textfield__input-area:after": {
            opacity: 1
          },
          " .pe-textfield__input": {
            display: "block",
            width: "100%",
            background: "none",
            color: "inherit",
            borderStyle: "none none solid none",
            borderRadius: 0,
            margin: 0,
            // disable glow on textfield--invalid fields
            "&:textfield--invalid": {
              boxShadow: "none"
            },
            ":invalid": {
              boxShadow: "none"
            },
            // Remove clear cross icon from IE
            "::-ms-clear": {
              width: 0,
              height: 0
            }
          },
          " textarea.pe-textfield__input": {
            padding: 0,
            display: "block"
          },
          // focus border
          ".pe-textfield--focused .pe-textfield__input": {
            outline: "none"
          },
          " .pe-textfield__label": {
            position: "absolute",
            display: "block",
            bottom: 0,
            pointerEvents: "none",
            whiteSpace: "nowrap",
            cursor: "text"
          },
          ".pe-textfield--dirty .pe-textfield__label": {
            visibility: "hidden"
          },
          "&:not(.pe-textfield--no-char)": {
            " .pe-textfield__required-indicator, .pe-textfield__optional-indicator": {
              padding: "0 0 0 .25em"
            }
          },
          ".pe-textfield--floating-label": {
            ".pe-textfield--focused, &.pe-textfield--dirty": {
              " .pe-textfield__label": {
                visibility: "visible"
              }
            }
          },
          ".pe-textfield--disabled, &.pe-textfield--readonly": {
            " .pe-textfield__label": {
              cursor: "auto"
            },
            " .pe-textfield__input": {
              "border-bottom": "none"
            },
            " .pe-textfield__input-area:after": {
              opacity: 1,
              height: "1px",
              bottom: "-1px",
              backgroundPosition: "top",
              backgroundSize: "4px 1px",
              backgroundRepeat: "repeat-x"
            }
          },
          " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
            lineHeight: vars.line_height
          },
          " .pe-textfield__help-focus": [mixin.defaultTransition("opacity"), {
            opacity: 0
          }],
          ".pe-textfield--focused .pe-textfield__help-focus, &.pe-textfield--dirty .pe-textfield__help-focus": {
            opacity: 1
          },
          ".pe-textfield--hide-clear": {
            " .pe-textfield__input::-ms-clear": {
              display: "none"
            }
          },
          ".pe-textfield--hide-spinner": {
            " input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button": {
              "-webkit-appearance": "none",
              margin: 0
            },
            " input[type=number]": {
              "-moz-appearance": "textfield"
            }
          },
          ".pe-textfield--full-width": {
            width: "100%",
            padding: 0,
            " .pe-textfield__input-area": {
              padding: 0
            }
          }
        }]), _defineProperty$q({}, "*[dir=rtl] ".concat(selector, ", .pe-rtl ").concat(selector), [alignRight$9()])];
      },
      vertical_spacing_bottom: function vertical_spacing_bottom(selector, vars) {
        return [sel(selector, {
          paddingBottom: vars.vertical_spacing_bottom + "px"
        })];
      },
      floating_label_vertical_spacing_bottom: function floating_label_vertical_spacing_bottom(selector, vars) {
        return [sel(selector, {
          ".pe-textfield--floating-label": {
            paddingBottom: vars.floating_label_vertical_spacing_bottom + "px"
          },
          ".pe-textfield--dense": {
            paddingBottom: vars.dense_floating_label_vertical_spacing_bottom + "px"
          }
        })];
      },
      vertical_spacing_top: function vertical_spacing_top(selector, vars) {
        return [sel(selector, {
          " .pe-textfield__input-area": {
            paddingTop: vars.vertical_spacing_top + "px"
          }
        }), vertical_spacing_top_input_padding_v(selector, vars)];
      },
      input_padding_v: function input_padding_v(selector, vars) {
        return [vertical_spacing_top_input_padding_v(selector, vars), floating_label_vertical_spacing_top_input_padding_v(selector, vars), dense_floating_label_vertical_spacing_top_input_padding_v(selector, vars), input_padding_v_input_padding_h(selector, vars)];
      },
      input_padding_h: function input_padding_h(selector, vars) {
        return [sel(selector, {
          " .pe-textfield__label": {
            left: vars.input_padding_h + "px",
            right: vars.input_padding_h + "px"
          }
        }), input_padding_v_input_padding_h(selector, vars)];
      },
      floating_label_vertical_spacing_top: function floating_label_vertical_spacing_top(selector, vars) {
        return [sel(selector, {
          ".pe-textfield--floating-label": {
            " .pe-textfield__input-area": {
              paddingTop: vars.floating_label_vertical_spacing_top + "px"
            }
          }
        }), floating_label_vertical_spacing_top_input_padding_v(selector, vars)];
      },
      dense_floating_label_vertical_spacing_top: function dense_floating_label_vertical_spacing_top(selector, vars) {
        return [sel(selector, {
          ".pe-textfield--floating-label.pe-textfield--dense": {
            " .pe-textfield__input-area": {
              paddingTop: vars.dense_floating_label_vertical_spacing_top + "px"
            }
          }
        }), dense_floating_label_vertical_spacing_top_input_padding_v(selector, vars)];
      },
      input_focus_border_animation_duration: function input_focus_border_animation_duration(selector, vars) {
        return [sel(selector, {
          " .pe-textfield__input-area:after": mixin.defaultTransition("opacity", vars.input_focus_border_animation_duration)
        })];
      },
      input_focus_border_width: function input_focus_border_width(selector, vars) {
        return [sel(selector, {
          " .pe-textfield__input-area:after": {
            height: vars.input_focus_border_width + "px"
          }
        })];
      },
      font_size_error: function font_size_error(selector, vars$1) {
        return [sel(selector, {
          " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
            fontSize: vars$1.font_size_error + "px",
            minHeight: vars$1.font_size_error * vars.line_height + "px"
          }
        })];
      },
      font_size_input: function font_size_input(selector, vars) {
        return [sel(selector, {
          " .pe-textfield__input, .pe-textfield__label": {
            fontSize: vars.font_size_input + "px"
          }
        })];
      },
      line_height_input: function line_height_input(selector, vars) {
        return [sel(selector, {
          " .pe-textfield__input, .pe-textfield__label": {
            lineHeight: vars.line_height_input + "px"
          }
        })];
      },
      input_border_width: function input_border_width(selector, vars) {
        return [sel(selector, {
          " .pe-textfield__input": {
            borderWidth: vars.input_border_width + "px"
          },
          // focus border
          ".pe-textfield--focused .pe-textfield__input": {
            borderWidth: vars.input_border_width + "px",
            outline: "none"
          }
        })];
      },
      full_width_input_padding_v: function full_width_input_padding_v(selector, vars) {
        return [sel(selector, {
          ".pe-textfield--full-width": {
            " .pe-textfield__label": {
              top: vars.full_width_input_padding_v + "px"
            }
          }
        }), full_width_input_padding_v_full_width_input_padding_h(selector, vars)];
      },
      full_width_input_padding_h: function full_width_input_padding_h(selector, vars) {
        return [sel(selector, {
          ".pe-textfield--full-width": {
            " .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter": {
              paddingLeft: vars.full_width_input_padding_h + "px",
              paddingRight: vars.full_width_input_padding_h + "px"
            },
            " .pe-textfield__label": {
              left: vars.full_width_input_padding_h + "px",
              right: vars.full_width_input_padding_h + "px"
            }
          }
        }), full_width_input_padding_v_full_width_input_padding_h(selector, vars)];
      },
      dense_font_size_input: function dense_font_size_input(selector, vars) {
        return [sel(selector, {
          ".pe-textfield--dense": {
            "&, .pe-textfield__input, .pe-textfield__label": {
              fontSize: vars.dense_font_size_input + "px"
            }
          }
        })];
      },
      dense_full_width_font_size_input: function dense_full_width_font_size_input(selector, vars) {
        return [sel(selector, {
          ".pe-textfield--dense": {
            " .pe-textfield__input": {
              fontSize: vars.dense_full_width_font_size_input + "px"
            },
            " .pe-textfield__label": {
              fontSize: vars.dense_full_width_font_size_input + "px"
            }
          }
        })];
      },
      dense_full_width_input_padding_v: function dense_full_width_input_padding_v(selector, vars) {
        return [sel(selector, {
          ".pe-textfield--full-width": {
            ".pe-textfield--dense": {
              " .pe-textfield__label": {
                top: vars.dense_full_width_input_padding_v + "px"
              }
            }
          }
        }), dense_full_width_input_padding_v_dense_full_width_input_padding_h(selector, vars)];
      },
      dense_full_width_input_padding_h: function dense_full_width_input_padding_h(selector, vars) {
        return [sel(selector, {
          ".pe-textfield--full-width": {
            ".pe-textfield--dense": {
              " .pe-textfield__label": {
                left: vars.dense_full_width_input_padding_h + "px",
                right: vars.dense_full_width_input_padding_h + "px"
              }
            }
          }
        }), dense_full_width_input_padding_v_dense_full_width_input_padding_h(selector, vars)];
      },
      margin_top_error_message: function margin_top_error_message(selector, vars) {
        return [sel(selector, {
          " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
            marginTop: vars.margin_top_error_message + "px"
          }
        })];
      },
      floating_label_animation_duration: function floating_label_animation_duration(selector, vars) {
        return [sel(selector, {
          ".pe-textfield--floating-label": {
            " .pe-textfield__label": mixin.defaultTransition("all", vars.floating_label_animation_duration)
          }
        })];
      },
      dense_font_size_floating_label: function dense_font_size_floating_label(selector, vars) {
        return [sel(selector, {
          ".pe-textfield--floating-label": {
            ".pe-textfield--dense": {
              ".pe-textfield--focused, &.pe-textfield--dirty": {
                fontSize: vars.dense_font_size_floating_label + "px"
              }
            }
          }
        })];
      },
      dense_floating_label_top: function dense_floating_label_top(selector, vars) {
        return [sel(selector, {
          ".pe-textfield--floating-label": {
            ".pe-textfield--dense": {
              ".pe-textfield--focused, &.pe-textfield--dirty": {
                " .pe-textfield__label": {
                  top: vars.dense_floating_label_top + "px"
                }
              }
            }
          }
        })];
      },
      floating_label_top: function floating_label_top(selector, vars) {
        return [sel(selector, {
          ".pe-textfield--floating-label": {
            ".pe-textfield--focused, &.pe-textfield--dirty": {
              " .pe-textfield__label": {
                top: vars.floating_label_top + "px"
              }
            }
          }
        })];
      },
      font_size_floating_label: function font_size_floating_label(selector, vars) {
        return [sel(selector, {
          ".pe-textfield--floating-label": {
            ".pe-textfield--focused, &.pe-textfield--dirty": {
              " .pe-textfield__label": {
                fontSize: vars.font_size_floating_label + "px"
              }
            }
          }
        })];
      }
    };
    var layout$s = createLayout({
      varFns: varFns$r
    });

    // @ts-check
    /**
     * @type {TextfieldVars} textfieldVars
     */

    var textfieldVars = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      dense_floating_label_top: 10,
      dense_floating_label_vertical_spacing_bottom: 4,
      // 8 minus natural label height padding (1)
      dense_floating_label_vertical_spacing_top: 23,
      // 12 + 8 + 4 minus natural label height padding (1)
      dense_font_size_floating_label: 13,
      dense_font_size_input: 13,
      dense_full_width_font_size_input: 13,
      dense_full_width_input_padding_h: 16,
      dense_full_width_input_padding_v: 15,
      // 16 minus natural label height padding (1)
      floating_label_animation_duration: ".12s",

      /**
       * Top position in pixels
       */
      floating_label_top: 14,
      floating_label_vertical_spacing_bottom: 7,
      // 8 minus natural label height padding (1)
      floating_label_vertical_spacing_top: 30,
      // 16 + 8 + 8 minus natural label height padding (2)
      font_size_error: 12,
      font_size_floating_label: 12,
      font_size_input: 16,
      full_width_input_padding_h: 20,
      full_width_input_padding_v: 18,
      // 20 minus natural label height padding (2)
      input_border_width: 1,
      input_focus_border_animation_duration: vars.animation_duration,
      input_focus_border_width: 2,
      input_padding_h: 0,
      input_padding_v: 7,
      line_height_input: 20,
      margin_top_error_message: 6,
      vertical_spacing_bottom: 7,
      // 8 minus natural label height padding (1)
      vertical_spacing_top: 6,
      // 8 minus natural label height padding (1)
      color_light_input_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
      color_light_input_background: "transparent",
      // only used to "remove" autofill color
      color_light_highlight_text: rgba(vars.color_primary, vars.blend_light_text_primary),
      color_light_input_bottom_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
      color_light_input_error_text: rgba("221, 44, 0"),
      color_light_input_error_border: rgba("221, 44, 0"),
      color_light_input_placeholder: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
      color_light_label_text: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
      color_light_disabled_label_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
      color_light_readonly_label_text: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
      color_light_help_text: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
      color_light_required_symbol: rgba("221, 44, 0"),
      color_light_focus_border: rgba(vars.color_primary),
      color_light_counter_ok_border: rgba(vars.color_primary),
      color_dark_input_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
      color_dark_input_background: "transparent",
      // only used to "remove" autofill color
      color_dark_highlight_text: rgba(vars.color_primary, vars.blend_dark_text_primary),
      color_dark_input_bottom_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
      color_dark_input_error_text: rgba("222, 50, 38"),
      color_dark_input_error_border: rgba("222, 50, 38"),
      color_dark_input_placeholder: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
      color_dark_label_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
      color_dark_disabled_label_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
      color_dark_readonly_label_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
      color_dark_help_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
      color_dark_required_symbol: rgba("221, 44, 0"),
      color_dark_focus_border: rgba(vars.color_primary),
      color_dark_counter_ok_border: rgba(vars.color_primary)
    };

    // @ts-check
    var fns$q = [layout$s, color$p];
    var selector$r = ".".concat(classes$s.component);

    var addGeneralStyleToHead$s = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$r],
        fns: fns$q,
        vars: textfieldVars
      });
    };

    var classes$t = {
      // Toolbar
      component: "pe-toolbar",
      // states
      compact: "pe-toolbar--compact",
      appBar: "pe-toolbar--app-bar",
      // Toolbar title
      // elements
      title: "pe-toolbar__title",
      // states
      centeredTitle: "pe-toolbar__title--center",
      indentedTitle: "pe-toolbar__title--indent",
      fullbleed: "pe-toolbar--fullbleed",
      border: "pe-toolbar--border"
    };

    function _defineProperty$r(obj, key, value) {
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

    function _extends$p() {
      _extends$p = Object.assign || function (target) {
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

      return _extends$p.apply(this, arguments);
    }

    var generalFns$o = {
      general_styles: function general_styles(selector) {
        return [];
      } // eslint-disable-line no-unused-vars

    };

    var tintFns$o = function tintFns(tint) {
      var _ref;

      return _ref = {}, _defineProperty$r(_ref, "color_" + tint + "_text", function (selector, vars) {
        return [sel(selector, {
          " .pe-toolbar__title": {
            "&, a:link, a:visited": {
              color: vars["color_" + tint + "_text"]
            }
          }
        })];
      }), _defineProperty$r(_ref, "color_" + tint + "_background", function (selector, vars) {
        return [sel(selector, {
          backgroundColor: vars["color_" + tint + "_background"]
        })];
      }), _defineProperty$r(_ref, "color_" + tint + "_border", function (selector, vars) {
        return [sel(selector, {
          ".pe-toolbar--border": {
            borderColor: vars["color_" + tint + "_border"]
          }
        })];
      }), _ref;
    };

    var lightTintFns$o = _extends$p({}, generalFns$o, tintFns$o("light"));

    var darkTintFns$o = _extends$p({}, generalFns$o, tintFns$o("dark"));

    var color$q = createColor({
      varFns: {
        lightTintFns: lightTintFns$o,
        darkTintFns: darkTintFns$o
      }
    });

    /**
     * 
     * @param {string} breakpointSel 
     */

    var breakpoint$1 = function breakpoint(breakpointSel) {
      return (
        /**
         * @param {string} selector
         * @param {object} o
         */
        function (selector, o) {
          return _defineProperty$r({}, breakpointSel, _defineProperty$r({}, selector, o));
        }
      );
    };
    /**
     * @param {object} params
     * @param {string} params.selector
     * @param {object} params.vars
     * @param {boolean} [params.isRTL]
     * @param {boolean} [params.isLarge]
     */


    var indent_padding_side = function indent_padding_side(_ref2) {
      var _peToolbar__title;

      var selector = _ref2.selector,
          vars = _ref2.vars,
          isRTL = _ref2.isRTL,
          isLarge = _ref2.isLarge;
      var indent = isLarge ? vars.indent_large : vars.indent;
      var fn = isLarge ? breakpointTabletPortraitUp$1 : sel;
      return fn(selector, {
        " .pe-toolbar__title--indent, .pe-toolbar__title.pe-toolbar__title--indent": (_peToolbar__title = {}, _defineProperty$r(_peToolbar__title, isRTL ? "marginLeft" : "marginRight", 0), _defineProperty$r(_peToolbar__title, isRTL ? "marginRight" : "marginLeft", indent + "px"), _peToolbar__title)
      });
    };
    /**
     * @param {object} params
     * @param {string} params.selector
     * @param {object} params.vars
     * @param {boolean} [params.isRTL]
     * @param {boolean} [params.isLarge]
     */


    var _title_padding = function title_padding(_ref3) {
      var _spanPeToolbar;

      var selector = _ref3.selector,
          vars = _ref3.vars,
          isRTL = _ref3.isRTL,
          isLarge = _ref3.isLarge;
      var title_padding = isLarge ? vars.title_padding_large : vars.title_padding;
      var fn = isLarge ? breakpointTabletPortraitUp$1 : sel;
      return fn(selector, {
        " > span, .pe-toolbar__title": (_spanPeToolbar = {}, _defineProperty$r(_spanPeToolbar, isRTL ? "marginLeft" : "marginRight", 0), _defineProperty$r(_spanPeToolbar, isRTL ? "marginRight" : "marginLeft", title_padding + "px"), _spanPeToolbar),
        " .pe-toolbar__title--center": {
          marginLeft: title_padding + "px",
          marginRight: title_padding + "px"
        }
      });
    };
    /**
     * @param {object} params
     * @param {string} params.selector
     * @param {object} params.vars
     * @param {boolean} [params.isRTL]
     * @param {boolean} [params.isLarge]
     */


    var title_padding_title_after_icon_padding = function title_padding_title_after_icon_padding(_ref4) {
      var _notPeToolbar_;

      var selector = _ref4.selector,
          vars = _ref4.vars,
          isRTL = _ref4.isRTL,
          isLarge = _ref4.isLarge;
      var padding = isLarge ? vars.title_after_icon_padding_large : vars.title_after_icon_padding;
      var fn = isLarge ? breakpointTabletPortraitUp$1 : sel;
      return fn(selector, {
        " > :not(.pe-toolbar__title):first-child:not(.pe-toolbar__title--indent):first-child": (_notPeToolbar_ = {}, _defineProperty$r(_notPeToolbar_, isRTL ? "marginRight" : "marginLeft", 0), _defineProperty$r(_notPeToolbar_, isRTL ? "marginLeft" : "marginRight", padding + "px"), _notPeToolbar_)
      });
    };

    var breakpointPhoneOnly = breakpoint$1("@media (min-width: ".concat(vars.breakpoint_for_phone_only, "px) and (orientation: landscape)"));
    var breakpointTabletPortraitUp$1 = breakpoint$1("@media (min-width: ".concat(vars.breakpoint_for_tablet_portrait_up, "px)"));
    var varFns$s = {
      general_styles: function general_styles(selector) {
        return [sel(selector, [flex$1.layout, flex$1.layoutHorizontal, flex$1.layoutCenter, {
          position: "relative",
          zIndex: vars.z_toolbar,
          " > a": {
            textDecoration: "none"
          },
          ".pe-toolbar--fullbleed": {
            padding: 0
          },
          ".pe-toolbar--border": {
            borderWidth: "1px",
            borderStyle: "none none solid none"
          },
          " > *": {
            flexShrink: 0
          },
          " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
            width: "100%",
            display: "block",
            wordBreak: "break-all",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            flexShrink: 1
          },
          " .pe-toolbar__title--center": {
            textAlign: "center",
            justifyContent: "center"
          },
          " > .pe-action": {
            paddingLeft: "12px",
            paddingRight: "12px"
          },
          " .pe-fit": [mixin.fit(), {
            margin: 0
          }]
        }])];
      },
      height: function height(selector, vars) {
        return [sel(selector, {
          height: vars.height + "px"
        })];
      },
      height_compact: function height_compact(selector, vars) {
        return [sel(selector, {
          ".pe-toolbar--compact": {
            height: vars.height_compact + "px"
          }
        }), breakpointPhoneOnly(selector, {
          height: vars.height + "px"
        })];
      },
      line_height: function line_height(selector, vars) {
        return [sel(selector, {
          lineHeight: vars.line_height + "em",
          " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
            lineHeight: vars.line_height
          }
        })];
      },
      font_size: function font_size(selector, vars) {
        return [sel(selector, {
          " > span, .pe-toolbar__title, .pe-toolbar__title--indent, .pe-action": {
            fontSize: vars.font_size + "px"
          }
        })];
      },
      font_weight: function font_weight(selector, vars) {
        return [sel(selector, {
          " > span, .pe-toolbar__title, .pe-toolbar__title--indent": {
            fontWeight: vars.font_weight
          }
        })];
      },
      padding_side: function padding_side(selector, vars) {
        return [sel(selector, {
          padding: "0 " + vars.padding_side + "px"
        }), indent_padding_side({
          selector: selector,
          vars: vars
        }), indent_padding_side({
          selector: selectorRTL(selector),
          vars: vars,
          isRTL: true
        })];
      },
      indent: function indent(selector, vars) {
        return [indent_padding_side({
          selector: selector,
          vars: vars
        }), indent_padding_side({
          selector: selectorRTL(selector),
          vars: vars,
          isRTL: true
        })];
      },
      indent_large: function indent_large(selector, vars) {
        return [indent_padding_side({
          selector: selector,
          vars: vars,
          isLarge: true
        }), indent_padding_side({
          selector: selectorRTL(selector),
          vars: vars,
          isRTL: true,
          isLarge: true
        })];
      },
      title_padding: function title_padding(selector, vars) {
        return [_title_padding({
          selector: selector,
          vars: vars
        }), _title_padding({
          selector: selectorRTL(selector),
          vars: vars,
          isRTL: true
        })];
      },
      title_padding_large: function title_padding_large(selector, vars) {
        return [_title_padding({
          selector: selector,
          vars: vars,
          isLarge: true
        }), _title_padding({
          selector: selectorRTL(selector),
          vars: vars,
          isRTL: true,
          isLarge: true
        })];
      },
      title_after_icon_padding: function title_after_icon_padding(selector, vars) {
        return [title_padding_title_after_icon_padding({
          selector: selector,
          vars: vars
        }), title_padding_title_after_icon_padding({
          selector: selectorRTL(selector),
          vars: vars,
          isRTL: true
        })];
      },
      title_after_icon_padding_large: function title_after_icon_padding_large(selector, vars) {
        return [title_padding_title_after_icon_padding({
          selector: selector,
          vars: vars,
          isLarge: true
        }), title_padding_title_after_icon_padding({
          selector: selectorRTL(selector),
          vars: vars,
          isRTL: true,
          isLarge: true
        })];
      },
      height_large: function height_large(selector, vars) {
        return [breakpointTabletPortraitUp$1(selector, {
          height: vars.height_large + "px"
        })];
      },
      padding_side_large: function padding_side_large(selector, vars) {
        return [breakpointTabletPortraitUp$1(selector, {
          padding: "0 " + vars.padding_side_large + "px"
        })];
      }
    };
    var layout$t = createLayout({
      varFns: varFns$s
    });

    // @ts-check
    var padding_side = vars.grid_unit_component * 2 - 12; // 16 - 12 = 4

    var padding_side_large = vars.grid_unit_component * 3 - 12; // 24 - 12 = 12

    var vars$3 = {
      /**
       * Generate general styles, not defined by variables
       */
      general_styles: true,
      font_size: 20,
      font_weight: 400,
      height: vars.grid_unit_component * 7,
      // 56
      height_compact: vars.grid_unit_component * 6,
      // 48
      height_large: vars.grid_unit_component * 8,
      // 64
      line_height: vars.line_height,
      padding_side: padding_side,
      padding_side_large: padding_side_large,
      indent: vars.unit_indent - padding_side,
      indent_large: vars.unit_indent_large - padding_side_large,
      title_after_icon_padding: 4,
      title_after_icon_padding_large: 12,
      title_padding: 16,
      title_padding_large: 8,
      color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
      color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
      color_light_background: rgba(vars.color_light_background),
      color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
      color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
      color_dark_background: rgba(vars.color_dark_background)
    };

    // @ts-check
    var fns$r = [layout$t, color$q];
    var selector$s = ".".concat(classes$t.component);

    var addGeneralStyleToHead$t = function addGeneralStyleToHead() {
      return styler.addStyle({
        selectors: [selector$s],
        fns: fns$r,
        vars: vars$3
      });
    };

    addGeneralStyleToHead();
    addGeneralStyleToHead$2$1();
    addGeneralStyleToHead$3();
    addGeneralStyleToHead$4();
    addGeneralStyleToHead$6();
    addGeneralStyleToHead$8();
    addGeneralStyleToHead$7();
    addGeneralStyleToHead$9();
    addGeneralStyleToHead$a();
    addGeneralStyleToHead$b();
    addGeneralStyleToHead$c();
    addGeneralStyleToHead$d();
    addGeneralStyleToHead$e();
    addGeneralStyleToHead$f();
    addGeneralStyleToHead$h();
    addGeneralStyleToHead$g();
    addGeneralStyleToHead$i();
    addGeneralStyleToHead$j();
    addGeneralStyleToHead$k();
    addGeneralStyleToHead$l();
    addGeneralStyleToHead$m();
    addGeneralStyleToHead$5();
    addGeneralStyleToHead$1();
    addGeneralStyleToHead$n();
    addGeneralStyleToHead$o();
    addGeneralStyleToHead$p();
    addGeneralStyleToHead$q();
    addGeneralStyleToHead$r();
    addGeneralStyleToHead$s();
    addGeneralStyleToHead$t();

    /* src/examples/shadow/interactive/Interactive.svelte generated by Svelte v3.5.1 */

    const file$1 = "src/examples/shadow/interactive/Interactive.svelte";

    function create_fragment$2(ctx) {
    	var div3, div0, p0, t1, p1, t2, t3, t4, t5, div2, div1, current, dispose;

    	var shadow = new Shadow({
    		props: {
    		className: "example-shadow-themed-transition",
    		shadowDepth: ctx.shadowDepth,
    		animated: true
    	},
    		$$inline: true
    	});

    	return {
    		c: function create() {
    			div3 = element("div");
    			div0 = element("div");
    			p0 = element("p");
    			p0.textContent = "Themed shadow transition";
    			t1 = space();
    			p1 = element("p");
    			t2 = text("The shadowDepth is: ");
    			t3 = text(ctx.shadowDepth);
    			t4 = text(". Click to change.");
    			t5 = space();
    			div2 = element("div");
    			div1 = element("div");
    			shadow.$$.fragment.c();
    			add_location(p0, file$1, 22, 4, 492);
    			add_location(p1, file$1, 23, 4, 528);
    			div0.className = "example-info";
    			add_location(div0, file$1, 21, 2, 461);
    			div1.className = "shadow-example";
    			add_location(div1, file$1, 26, 4, 634);
    			div2.className = "example-component";
    			add_location(div2, file$1, 25, 2, 598);
    			div3.className = "example interactive";
    			add_location(div3, file$1, 20, 0, 425);
    			dispose = listen(div1, "click", ctx.increment);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, div3, anchor);
    			append(div3, div0);
    			append(div0, p0);
    			append(div0, t1);
    			append(div0, p1);
    			append(p1, t2);
    			append(p1, t3);
    			append(p1, t4);
    			append(div3, t5);
    			append(div3, div2);
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
    				detach(div3);
    			}

    			shadow.$destroy();

    			dispose();
    		}
    	};
    }

    function instance$2($$self, $$props, $$invalidate) {
    	

      addStyle$1(".example-shadow-themed-transition", {
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
    		init(this, options, instance$2, create_fragment$2, safe_not_equal, []);
    	}
    }

    /* src/examples/shadow/Shadow.svelte generated by Svelte v3.5.1 */

    const file$2 = "src/examples/shadow/Shadow.svelte";

    function create_fragment$3(ctx) {
    	var div24, h1, t1, div3, div0, p0, t3, div2, div1, t4, div7, div4, p1, t6, div6, div5, t7, div11, div8, p2, t9, div10, div9, t10, div15, div12, p3, t12, div14, div13, t13, div19, div16, p4, t15, div18, div17, t16, div23, div20, p5, t18, div22, div21, t19, current;

    	var shadow0 = new Shadow({
    		props: { shadowDepth: "1" },
    		$$inline: true
    	});

    	var shadow1 = new Shadow({
    		props: { shadowDepth: "3" },
    		$$inline: true
    	});

    	var shadow2 = new Shadow({
    		props: { shadowDepth: "5" },
    		$$inline: true
    	});

    	var shadow3 = new Shadow({
    		props: { shadowDepth: "0" },
    		$$inline: true
    	});

    	var shadow4 = new Shadow({
    		props: {
    		className: "example-shadow-themed-shadow",
    		style: "background-color: rgba(243, 229, 245,1.0)"
    	},
    		$$inline: true
    	});

    	var shadow5 = new Shadow({
    		props: {
    		className: "example-shadow-themed-shadow-depth"
    	},
    		$$inline: true
    	});

    	var interactive = new Interactive({ $$inline: true });

    	return {
    		c: function create() {
    			div24 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Shadow";
    			t1 = space();
    			div3 = element("div");
    			div0 = element("div");
    			p0 = element("p");
    			p0.textContent = "shadowDepth=\"1\"";
    			t3 = space();
    			div2 = element("div");
    			div1 = element("div");
    			shadow0.$$.fragment.c();
    			t4 = space();
    			div7 = element("div");
    			div4 = element("div");
    			p1 = element("p");
    			p1.textContent = "shadowDepth=\"3\"";
    			t6 = space();
    			div6 = element("div");
    			div5 = element("div");
    			shadow1.$$.fragment.c();
    			t7 = space();
    			div11 = element("div");
    			div8 = element("div");
    			p2 = element("p");
    			p2.textContent = "shadowDepth=\"5\"";
    			t9 = space();
    			div10 = element("div");
    			div9 = element("div");
    			shadow2.$$.fragment.c();
    			t10 = space();
    			div15 = element("div");
    			div12 = element("div");
    			p3 = element("p");
    			p3.textContent = "shadowDepth=\"0\"";
    			t12 = space();
    			div14 = element("div");
    			div13 = element("div");
    			shadow3.$$.fragment.c();
    			t13 = space();
    			div19 = element("div");
    			div16 = element("div");
    			p4 = element("p");
    			p4.textContent = "Themed shadow";
    			t15 = space();
    			div18 = element("div");
    			div17 = element("div");
    			shadow4.$$.fragment.c();
    			t16 = space();
    			div23 = element("div");
    			div20 = element("div");
    			p5 = element("p");
    			p5.textContent = "Themed shadow depth";
    			t18 = space();
    			div22 = element("div");
    			div21 = element("div");
    			shadow5.$$.fragment.c();
    			t19 = space();
    			interactive.$$.fragment.c();
    			add_location(h1, file$2, 24, 2, 528);
    			add_location(p0, file$2, 28, 6, 606);
    			div0.className = "example-info";
    			add_location(div0, file$2, 27, 4, 573);
    			div1.className = "shadow-example";
    			add_location(div1, file$2, 31, 6, 682);
    			div2.className = "example-component";
    			add_location(div2, file$2, 30, 4, 644);
    			div3.className = "example";
    			add_location(div3, file$2, 26, 2, 547);
    			add_location(p1, file$2, 39, 6, 841);
    			div4.className = "example-info";
    			add_location(div4, file$2, 38, 4, 808);
    			div5.className = "shadow-example";
    			add_location(div5, file$2, 42, 6, 917);
    			div6.className = "example-component";
    			add_location(div6, file$2, 41, 4, 879);
    			div7.className = "example";
    			add_location(div7, file$2, 37, 2, 782);
    			add_location(p2, file$2, 50, 6, 1076);
    			div8.className = "example-info";
    			add_location(div8, file$2, 49, 4, 1043);
    			div9.className = "shadow-example";
    			add_location(div9, file$2, 53, 6, 1152);
    			div10.className = "example-component";
    			add_location(div10, file$2, 52, 4, 1114);
    			div11.className = "example";
    			add_location(div11, file$2, 48, 2, 1017);
    			add_location(p3, file$2, 61, 6, 1311);
    			div12.className = "example-info";
    			add_location(div12, file$2, 60, 4, 1278);
    			div13.className = "shadow-example";
    			add_location(div13, file$2, 64, 6, 1387);
    			div14.className = "example-component";
    			add_location(div14, file$2, 63, 4, 1349);
    			div15.className = "example";
    			add_location(div15, file$2, 59, 2, 1252);
    			add_location(p4, file$2, 72, 6, 1546);
    			div16.className = "example-info";
    			add_location(div16, file$2, 71, 4, 1513);
    			div17.className = "shadow-example";
    			add_location(div17, file$2, 75, 6, 1620);
    			div18.className = "example-component";
    			add_location(div18, file$2, 74, 4, 1582);
    			div19.className = "example";
    			add_location(div19, file$2, 70, 2, 1487);
    			add_location(p5, file$2, 85, 6, 1874);
    			div20.className = "example-info";
    			add_location(div20, file$2, 84, 4, 1841);
    			div21.className = "shadow-example";
    			add_location(div21, file$2, 88, 6, 1954);
    			div22.className = "example-component";
    			add_location(div22, file$2, 87, 4, 1916);
    			div23.className = "example";
    			add_location(div23, file$2, 83, 2, 1815);
    			div24.className = "page";
    			add_location(div24, file$2, 22, 0, 506);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, div24, anchor);
    			append(div24, h1);
    			append(div24, t1);
    			append(div24, div3);
    			append(div3, div0);
    			append(div0, p0);
    			append(div3, t3);
    			append(div3, div2);
    			append(div2, div1);
    			mount_component(shadow0, div1, null);
    			append(div24, t4);
    			append(div24, div7);
    			append(div7, div4);
    			append(div4, p1);
    			append(div7, t6);
    			append(div7, div6);
    			append(div6, div5);
    			mount_component(shadow1, div5, null);
    			append(div24, t7);
    			append(div24, div11);
    			append(div11, div8);
    			append(div8, p2);
    			append(div11, t9);
    			append(div11, div10);
    			append(div10, div9);
    			mount_component(shadow2, div9, null);
    			append(div24, t10);
    			append(div24, div15);
    			append(div15, div12);
    			append(div12, p3);
    			append(div15, t12);
    			append(div15, div14);
    			append(div14, div13);
    			mount_component(shadow3, div13, null);
    			append(div24, t13);
    			append(div24, div19);
    			append(div19, div16);
    			append(div16, p4);
    			append(div19, t15);
    			append(div19, div18);
    			append(div18, div17);
    			mount_component(shadow4, div17, null);
    			append(div24, t16);
    			append(div24, div23);
    			append(div23, div20);
    			append(div20, p5);
    			append(div23, t18);
    			append(div23, div22);
    			append(div22, div21);
    			mount_component(shadow5, div21, null);
    			append(div24, t19);
    			mount_component(interactive, div24, null);
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
    				detach(div24);
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

    function instance$3($$self) {
    	

      addStyle$1(".example-shadow-themed-shadow", {
        shadow_bottom_depth_1: "10px 10px 10px 0px rgba(142, 36, 170, 0.3)"
      });

      addStyle$1(".example-shadow-themed-shadow-depth", {
        shadow_depth: 3
      });

    	return {};
    }

    class Shadow_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$3, create_fragment$3, safe_not_equal, []);
    	}
    }

    function createCommonjsModule$1(fn, module) {
    	return module = { exports: {} }, fn(module, module.exports), module.exports;
    }

    var rngBrowser = createCommonjsModule$1(function (module) {
    // Unique ID creation requires a high quality random # generator.  In the
    // browser this is a little complicated due to unknown quality of Math.random()
    // and inconsistent support for the `crypto` API.  We do the best we can via
    // feature-detection

    // getRandomValues needs to be invoked in a context where "this" is a Crypto
    // implementation. Also, find the complete implementation of crypto on IE11.
    var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                          (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

    if (getRandomValues) {
      // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
      var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

      module.exports = function whatwgRNG() {
        getRandomValues(rnds8);
        return rnds8;
      };
    } else {
      // Math.random()-based (RNG)
      //
      // If all else fails, use Math.random().  It's fast, but is of unspecified
      // quality.
      var rnds = new Array(16);

      module.exports = function mathRNG() {
        for (var i = 0, r; i < 16; i++) {
          if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
          rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
        }

        return rnds;
      };
    }
    });

    /**
     * Convert array of 16 byte values to UUID string format of the form:
     * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
     */
    var byteToHex = [];
    for (var i = 0; i < 256; ++i) {
      byteToHex[i] = (i + 0x100).toString(16).substr(1);
    }

    function bytesToUuid(buf, offset) {
      var i = offset || 0;
      var bth = byteToHex;
      // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
      return ([bth[buf[i++]], bth[buf[i++]], 
    	bth[buf[i++]], bth[buf[i++]], '-',
    	bth[buf[i++]], bth[buf[i++]], '-',
    	bth[buf[i++]], bth[buf[i++]], '-',
    	bth[buf[i++]], bth[buf[i++]], '-',
    	bth[buf[i++]], bth[buf[i++]],
    	bth[buf[i++]], bth[buf[i++]],
    	bth[buf[i++]], bth[buf[i++]]]).join('');
    }

    var bytesToUuid_1 = bytesToUuid;

    function v4(options, buf, offset) {
      var i = buf && offset || 0;

      if (typeof(options) == 'string') {
        buf = options === 'binary' ? new Array(16) : null;
        options = null;
      }
      options = options || {};

      var rnds = options.random || (options.rng || rngBrowser)();

      // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
      rnds[6] = (rnds[6] & 0x0f) | 0x40;
      rnds[8] = (rnds[8] & 0x3f) | 0x80;

      // Copy bytes to buffer, if provided
      if (buf) {
        for (var ii = 0; ii < 16; ++ii) {
          buf[i + ii] = rnds[ii];
        }
      }

      return buf || bytesToUuid_1(rnds);
    }

    var v4_1 = v4;

    var classes$u = {
      component: "pe-svg"
    };

    /* src/lib/svg/SVG.svelte generated by Svelte v3.5.1 */

    const file$3 = "src/lib/svg/SVG.svelte";

    const get_after_slot_changes$1 = ({}) => ({});
    const get_after_slot_context$1 = ({}) => ({});

    const get_before_slot_changes$1 = ({}) => ({});
    const get_before_slot_context$1 = ({}) => ({});

    function create_fragment$4(ctx) {
    	var div, t0, t1, current;

    	const before_slot_1 = ctx.$$slots.before;
    	const before_slot = create_slot(before_slot_1, ctx, get_before_slot_context$1);

    	const default_slot_1 = ctx.$$slots.default;
    	const default_slot = create_slot(default_slot_1, ctx, null);

    	const after_slot_1 = ctx.$$slots.after;
    	const after_slot = create_slot(after_slot_1, ctx, get_after_slot_context$1);

    	var div_levels = [
    		{ "data-uid": ctx.uid },
    		{ class: ctx.R_classNames },
    		(ctx.style && {style: ctx.style}),
    		(ctx.id && { 'id': ctx.id }),
    		{ 'data-test-id': ctx.testId },
    		ctx.events
    	];

    	var div_data = {};
    	for (var i = 0; i < div_levels.length; i += 1) {
    		div_data = assign(div_data, div_levels[i]);
    	}

    	return {
    		c: function create() {
    			div = element("div");

    			if (before_slot) before_slot.c();
    			t0 = space();

    			if (default_slot) default_slot.c();
    			t1 = space();

    			if (after_slot) after_slot.c();

    			set_attributes(div, div_data);
    			add_location(div, file$3, 40, 0, 964);
    		},

    		l: function claim(nodes) {
    			if (before_slot) before_slot.l(div_nodes);

    			if (default_slot) default_slot.l(div_nodes);

    			if (after_slot) after_slot.l(div_nodes);
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, div, anchor);

    			if (before_slot) {
    				before_slot.m(div, null);
    			}

    			append(div, t0);

    			if (default_slot) {
    				default_slot.m(div, null);
    			}

    			append(div, t1);

    			if (after_slot) {
    				after_slot.m(div, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (before_slot && before_slot.p && changed.$$scope) {
    				before_slot.p(get_slot_changes(before_slot_1, ctx, changed, get_before_slot_changes$1), get_slot_context(before_slot_1, ctx, get_before_slot_context$1));
    			}

    			if (default_slot && default_slot.p && changed.$$scope) {
    				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
    			}

    			if (after_slot && after_slot.p && changed.$$scope) {
    				after_slot.p(get_slot_changes(after_slot_1, ctx, changed, get_after_slot_changes$1), get_slot_context(after_slot_1, ctx, get_after_slot_context$1));
    			}

    			set_attributes(div, get_spread_update(div_levels, [
    				(changed.uid) && { "data-uid": ctx.uid },
    				(changed.R_classNames) && { class: ctx.R_classNames },
    				(changed.style) && (ctx.style && {style: ctx.style}),
    				(changed.id) && (ctx.id && { 'id': ctx.id }),
    				(changed.testId) && { 'data-test-id': ctx.testId },
    				(changed.events) && ctx.events
    			]));
    		},

    		i: function intro(local) {
    			if (current) return;
    			if (before_slot && before_slot.i) before_slot.i(local);
    			if (default_slot && default_slot.i) default_slot.i(local);
    			if (after_slot && after_slot.i) after_slot.i(local);
    			current = true;
    		},

    		o: function outro(local) {
    			if (before_slot && before_slot.o) before_slot.o(local);
    			if (default_slot && default_slot.o) default_slot.o(local);
    			if (after_slot && after_slot.o) after_slot.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div);
    			}

    			if (before_slot) before_slot.d(detaching);

    			if (default_slot) default_slot.d(detaching);

    			if (after_slot) after_slot.d(detaching);
    		}
    	};
    }

    function instance$4($$self, $$props, $$invalidate) {
    	

      // DOM bindings
      let domElement;
      const uid = v4_1();

      // Common vars
      let { className = "", events = {}, id = undefined, style = undefined, testId = undefined, tone = undefined } = $$props;

      onMount(() => {
        domElement = document.querySelector(`[data-uid="${uid}"]`);
        const svgElement = domElement.querySelector("svg");
        if (svgElement) {
          svgElement.setAttribute("focusable", "false");
        }
      });

    	const writable_props = ['className', 'events', 'id', 'style', 'testId', 'tone'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<SVG> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;

    	$$self.$set = $$props => {
    		if ('className' in $$props) $$invalidate('className', className = $$props.className);
    		if ('events' in $$props) $$invalidate('events', events = $$props.events);
    		if ('id' in $$props) $$invalidate('id', id = $$props.id);
    		if ('style' in $$props) $$invalidate('style', style = $$props.style);
    		if ('testId' in $$props) $$invalidate('testId', testId = $$props.testId);
    		if ('tone' in $$props) $$invalidate('tone', tone = $$props.tone);
    		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
    	};

    	let R_classNames;

    	$$self.$$.update = ($$dirty = { tone: 1, className: 1 }) => {
    		if ($$dirty.tone || $$dirty.className) { $$invalidate('R_classNames', R_classNames = [
            classes$u.component,
            tone === "dark" ? "pe-dark-tone" : undefined,
            tone === "light" ? "pe-light-tone" : undefined,
            className,
          ].join(" ")); }
    	};

    	return {
    		uid,
    		className,
    		events,
    		id,
    		style,
    		testId,
    		tone,
    		R_classNames,
    		$$slots,
    		$$scope
    	};
    }

    class SVG extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, ["className", "events", "id", "style", "testId", "tone"]);
    	}

    	get className() {
    		throw new Error("<SVG>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<SVG>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get events() {
    		throw new Error("<SVG>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set events(value) {
    		throw new Error("<SVG>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get id() {
    		throw new Error("<SVG>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<SVG>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<SVG>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<SVG>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get testId() {
    		throw new Error("<SVG>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set testId(value) {
    		throw new Error("<SVG>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get tone() {
    		throw new Error("<SVG>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set tone(value) {
    		throw new Error("<SVG>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    var classes$v = {
      component: "pe-icon",

      // states
      avatar:    "pe-icon--avatar",
      large:     "pe-icon--large",
      medium:    "pe-icon--medium",
      regular:   "pe-icon--regular",
      small:     "pe-icon--small",
    };

    /* src/lib/icon/Icon.svelte generated by Svelte v3.5.1 */

    const file$4 = "src/lib/icon/Icon.svelte";

    const get_after_slot_changes$2 = ({}) => ({});
    const get_after_slot_context$2 = ({}) => ({});

    const get_before_slot_changes$2 = ({}) => ({});
    const get_before_slot_context$2 = ({}) => ({});

    // (40:2) {:else}
    function create_else_block(ctx) {
    	var current;

    	var svg = new SVG({
    		props: {
    		$$slots: { default: [create_default_slot] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	return {
    		c: function create() {
    			svg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(svg, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var svg_changes = {};
    			if (changed.$$scope) svg_changes.$$scope = { changed, ctx };
    			svg.$set(svg_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			svg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			svg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			svg.$destroy(detaching);
    		}
    	};
    }

    // (38:2) {#if src !== undefined}
    function create_if_block(ctx) {
    	var img;

    	return {
    		c: function create() {
    			img = element("img");
    			img.src = ctx.src;
    			img.alt = ctx.alt;
    			add_location(img, file$4, 38, 4, 927);
    		},

    		m: function mount(target, anchor) {
    			insert(target, img, anchor);
    		},

    		p: function update(changed, ctx) {
    			if (changed.src) {
    				img.src = ctx.src;
    			}

    			if (changed.alt) {
    				img.alt = ctx.alt;
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(img);
    			}
    		}
    	};
    }

    // (41:4) <SVG>
    function create_default_slot(ctx) {
    	var current;

    	const default_slot_1 = ctx.$$slots.default;
    	const default_slot = create_slot(default_slot_1, ctx, null);

    	return {
    		c: function create() {
    			if (default_slot) default_slot.c();
    		},

    		l: function claim(nodes) {
    			if (default_slot) default_slot.l(nodes);
    		},

    		m: function mount(target, anchor) {
    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (default_slot && default_slot.p && changed.$$scope) {
    				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			if (default_slot && default_slot.i) default_slot.i(local);
    			current = true;
    		},

    		o: function outro(local) {
    			if (default_slot && default_slot.o) default_slot.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (default_slot) default_slot.d(detaching);
    		}
    	};
    }

    function create_fragment$5(ctx) {
    	var div, t0, current_block_type_index, if_block, t1, current;

    	const before_slot_1 = ctx.$$slots.before;
    	const before_slot = create_slot(before_slot_1, ctx, get_before_slot_context$2);

    	var if_block_creators = [
    		create_if_block,
    		create_else_block
    	];

    	var if_blocks = [];

    	function select_block_type(ctx) {
    		if (ctx.src !== ctx.undefined) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	const after_slot_1 = ctx.$$slots.after;
    	const after_slot = create_slot(after_slot_1, ctx, get_after_slot_context$2);

    	var div_levels = [
    		{ class: ctx.R_classNames },
    		(ctx.style && {style: ctx.style}),
    		(ctx.id && { 'id': ctx.id }),
    		{ 'data-test-id': ctx.testId },
    		ctx.events
    	];

    	var div_data = {};
    	for (var i = 0; i < div_levels.length; i += 1) {
    		div_data = assign(div_data, div_levels[i]);
    	}

    	return {
    		c: function create() {
    			div = element("div");

    			if (before_slot) before_slot.c();
    			t0 = space();
    			if_block.c();
    			t1 = space();

    			if (after_slot) after_slot.c();

    			set_attributes(div, div_data);
    			add_location(div, file$4, 29, 0, 740);
    		},

    		l: function claim(nodes) {
    			if (before_slot) before_slot.l(div_nodes);

    			if (after_slot) after_slot.l(div_nodes);
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, div, anchor);

    			if (before_slot) {
    				before_slot.m(div, null);
    			}

    			append(div, t0);
    			if_blocks[current_block_type_index].m(div, null);
    			append(div, t1);

    			if (after_slot) {
    				after_slot.m(div, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (before_slot && before_slot.p && changed.$$scope) {
    				before_slot.p(get_slot_changes(before_slot_1, ctx, changed, get_before_slot_changes$2), get_slot_context(before_slot_1, ctx, get_before_slot_context$2));
    			}

    			var previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);
    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(changed, ctx);
    			} else {
    				group_outros();
    				on_outro(() => {
    					if_blocks[previous_block_index].d(1);
    					if_blocks[previous_block_index] = null;
    				});
    				if_block.o(1);
    				check_outros();

    				if_block = if_blocks[current_block_type_index];
    				if (!if_block) {
    					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block.c();
    				}
    				if_block.i(1);
    				if_block.m(div, t1);
    			}

    			if (after_slot && after_slot.p && changed.$$scope) {
    				after_slot.p(get_slot_changes(after_slot_1, ctx, changed, get_after_slot_changes$2), get_slot_context(after_slot_1, ctx, get_after_slot_context$2));
    			}

    			set_attributes(div, get_spread_update(div_levels, [
    				(changed.R_classNames) && { class: ctx.R_classNames },
    				(changed.style) && (ctx.style && {style: ctx.style}),
    				(changed.id) && (ctx.id && { 'id': ctx.id }),
    				(changed.testId) && { 'data-test-id': ctx.testId },
    				(changed.events) && ctx.events
    			]));
    		},

    		i: function intro(local) {
    			if (current) return;
    			if (before_slot && before_slot.i) before_slot.i(local);
    			if (if_block) if_block.i();
    			if (after_slot && after_slot.i) after_slot.i(local);
    			current = true;
    		},

    		o: function outro(local) {
    			if (before_slot && before_slot.o) before_slot.o(local);
    			if (if_block) if_block.o();
    			if (after_slot && after_slot.o) after_slot.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div);
    			}

    			if (before_slot) before_slot.d(detaching);
    			if_blocks[current_block_type_index].d();

    			if (after_slot) after_slot.d(detaching);
    		}
    	};
    }

    function instance$5($$self, $$props, $$invalidate) {
    	

      // Common vars
      let { className = "", events = {}, id = undefined, style = undefined, testId = undefined, tone = undefined, alt = "", avatar = false, size = undefined, src = undefined } = $$props;

    	const writable_props = ['className', 'events', 'id', 'style', 'testId', 'tone', 'alt', 'avatar', 'size', 'src'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Icon> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;

    	$$self.$set = $$props => {
    		if ('className' in $$props) $$invalidate('className', className = $$props.className);
    		if ('events' in $$props) $$invalidate('events', events = $$props.events);
    		if ('id' in $$props) $$invalidate('id', id = $$props.id);
    		if ('style' in $$props) $$invalidate('style', style = $$props.style);
    		if ('testId' in $$props) $$invalidate('testId', testId = $$props.testId);
    		if ('tone' in $$props) $$invalidate('tone', tone = $$props.tone);
    		if ('alt' in $$props) $$invalidate('alt', alt = $$props.alt);
    		if ('avatar' in $$props) $$invalidate('avatar', avatar = $$props.avatar);
    		if ('size' in $$props) $$invalidate('size', size = $$props.size);
    		if ('src' in $$props) $$invalidate('src', src = $$props.src);
    		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
    	};

    	let R_classNames;

    	$$self.$$.update = ($$dirty = { size: 1, avatar: 1, tone: 1, className: 1 }) => {
    		if ($$dirty.size || $$dirty.avatar || $$dirty.tone || $$dirty.className) { $$invalidate('R_classNames', R_classNames = [
            classes$v.component,
            classForSize(classes$v, size),
            avatar ? classes$v.avatar : null,
            tone === "dark" ? "pe-dark-tone" : undefined,
            tone === "light" ? "pe-light-tone" : undefined,
            className
          ].join(" ")); }
    	};

    	return {
    		className,
    		events,
    		id,
    		style,
    		testId,
    		tone,
    		alt,
    		avatar,
    		size,
    		src,
    		undefined,
    		R_classNames,
    		$$slots,
    		$$scope
    	};
    }

    class Icon extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, ["className", "events", "id", "style", "testId", "tone", "alt", "avatar", "size", "src"]);
    	}

    	get className() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get events() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set events(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get id() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get testId() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set testId(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get tone() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set tone(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get alt() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set alt(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get avatar() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set avatar(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get size() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set size(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get src() {
    		throw new Error("<Icon>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set src(value) {
    		throw new Error("<Icon>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    var classes$w = {
      component:        "pe-text-button",
      super:            "pe-button",
      row:              "pe-button-row",
          
      // elements      
      content:          "pe-button__content",
      label:            "pe-button__label",
      textLabel:        "pe-button__text-label",
      wash:             "pe-button__wash",
      washColor:        "pe-button__wash-color",
      dropdown:         "pe-button__dropdown",
          
      // states      
      border:           "pe-button--border",
      contained:        "pe-button--contained",
      disabled:         "pe-button--disabled",
      dropdownClosed:   "pe-button--dropdown-closed",
      dropdownOpen:     "pe-button--dropdown-open",
      extraWide:        "pe-button--extra-wide",
      hasDropdown:      "pe-button--dropdown",
      highLabel:        "pe-button--high-label",
      inactive:         "pe-button--inactive",
      raised:           "pe-button--raised",
      selected:         "pe-button--selected",
      separatorAtStart: "pe-button--separator-start",
      hasHover:         "pe-button--has-hover",
    };

    /* src/lib/button/IconDropdownDown.svelte generated by Svelte v3.5.1 */

    const file$5 = "src/lib/button/IconDropdownDown.svelte";

    function create_fragment$6(ctx) {
    	var svg, path;

    	return {
    		c: function create() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			attr(path, "d", "M7 10l5 5 5-5z");
    			add_location(path, file$5, 0, 100, 100);
    			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr(svg, "id", "dd-down-svg");
    			attr(svg, "width", "24");
    			attr(svg, "height", "24");
    			attr(svg, "viewBox", "0 0 24 24");
    			add_location(svg, file$5, 0, 0, 0);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},

    		p: noop,
    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(svg);
    			}
    		}
    	};
    }

    class IconDropdownDown extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, null, create_fragment$6, safe_not_equal, []);
    	}
    }

    /* src/lib/button/TextLabel.svelte generated by Svelte v3.5.1 */

    const file$6 = "src/lib/button/TextLabel.svelte";

    function create_fragment$7(ctx) {
    	var div1, div0, t, div0_class_value, div1_class_value;

    	return {
    		c: function create() {
    			div1 = element("div");
    			div0 = element("div");
    			t = text(ctx.label);
    			div0.className = div0_class_value = classes$w.textLabel;
    			div0.style.cssText = ctx.textStyle;
    			add_location(div0, file$6, 8, 2, 168);
    			div1.className = div1_class_value = classes$w.label;
    			add_location(div1, file$6, 7, 0, 138);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, div1, anchor);
    			append(div1, div0);
    			append(div0, t);
    		},

    		p: function update(changed, ctx) {
    			if (changed.label) {
    				set_data(t, ctx.label);
    			}

    			if (changed.textStyle) {
    				div0.style.cssText = ctx.textStyle;
    			}
    		},

    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div1);
    			}
    		}
    	};
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { label = "", textStyle = undefined } = $$props;

    	const writable_props = ['label', 'textStyle'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<TextLabel> was created with unknown prop '${key}'`);
    	});

    	$$self.$set = $$props => {
    		if ('label' in $$props) $$invalidate('label', label = $$props.label);
    		if ('textStyle' in $$props) $$invalidate('textStyle', textStyle = $$props.textStyle);
    	};

    	return { label, textStyle };
    }

    class TextLabel extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$6, create_fragment$7, safe_not_equal, ["label", "textStyle"]);
    	}

    	get label() {
    		throw new Error("<TextLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set label(value) {
    		throw new Error("<TextLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get textStyle() {
    		throw new Error("<TextLabel>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set textStyle(value) {
    		throw new Error("<TextLabel>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/lib/button/Button.svelte generated by Svelte v3.5.1 */

    const file$7 = "src/lib/button/Button.svelte";

    const get_after_slot_changes$3 = ({}) => ({});
    const get_after_slot_context$3 = ({}) => ({});

    const get_label_slot_changes = ({}) => ({});
    const get_label_slot_context = ({}) => ({});

    const get_before_slot_changes$3 = ({}) => ({});
    const get_before_slot_context$3 = ({}) => ({});

    // (164:4) {#if disabled || noInk}
    function create_if_block_2(ctx) {
    	var div;

    	return {
    		c: function create() {
    			div = element("div");
    			div.className = "pe-ripple";
    			add_location(div, file$7, 164, 6, 4808);
    		},

    		m: function mount(target, anchor) {
    			insert(target, div, anchor);
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div);
    			}
    		}
    	};
    }

    // (175:4) {:else}
    function create_else_block$1(ctx) {
    	var current;

    	const default_slot_1 = ctx.$$slots.default;
    	const default_slot = create_slot(default_slot_1, ctx, null);

    	return {
    		c: function create() {
    			if (default_slot) default_slot.c();
    		},

    		l: function claim(nodes) {
    			if (default_slot) default_slot.l(nodes);
    		},

    		m: function mount(target, anchor) {
    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (default_slot && default_slot.p && changed.$$scope) {
    				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			if (default_slot && default_slot.i) default_slot.i(local);
    			current = true;
    		},

    		o: function outro(local) {
    			if (default_slot && default_slot.o) default_slot.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (default_slot) default_slot.d(detaching);
    		}
    	};
    }

    // (173:4) {#if label !== undefined}
    function create_if_block_1(ctx) {
    	var current;

    	var textlabel = new TextLabel({
    		props: {
    		label: ctx.label,
    		textStyle: ctx.textStyle
    	},
    		$$inline: true
    	});

    	return {
    		c: function create() {
    			textlabel.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(textlabel, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var textlabel_changes = {};
    			if (changed.label) textlabel_changes.label = ctx.label;
    			if (changed.textStyle) textlabel_changes.textStyle = ctx.textStyle;
    			textlabel.$set(textlabel_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			textlabel.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			textlabel.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			textlabel.$destroy(detaching);
    		}
    	};
    }

    // (179:4) {#if dropdown}
    function create_if_block$1(ctx) {
    	var current;

    	var icon = new Icon({
    		props: {
    		className: classes$w.dropdown,
    		$$slots: { default: [create_default_slot$1] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	return {
    		c: function create() {
    			icon.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(icon, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var icon_changes = {};
    			if (changed.classes) icon_changes.className = classes$w.dropdown;
    			if (changed.$$scope) icon_changes.$$scope = { changed, ctx };
    			icon.$set(icon_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			icon.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			icon.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			icon.$destroy(detaching);
    		}
    	};
    }

    // (180:6) <Icon className={classes.dropdown}>
    function create_default_slot$1(ctx) {
    	var current;

    	var icondropdowndown = new IconDropdownDown({ $$inline: true });

    	return {
    		c: function create() {
    			icondropdowndown.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(icondropdowndown, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			icondropdowndown.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			icondropdowndown.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			icondropdowndown.$destroy(detaching);
    		}
    	};
    }

    function create_fragment$8(ctx) {
    	var a, t0, div2, t1, t2, div1, div0, t3, t4, current_block_type_index, if_block1, t5, t6, current;

    	const before_slot_1 = ctx.$$slots.before;
    	const before_slot = create_slot(before_slot_1, ctx, get_before_slot_context$3);

    	var shadow = new Shadow({
    		props: {
    		shadowDepth: ctx._shadowDepth,
    		animated: true
    	},
    		$$inline: true
    	});

    	var if_block0 = (ctx.disabled || ctx.noInk) && create_if_block_2();

    	const label_slot_1 = ctx.$$slots.label;
    	const label_slot = create_slot(label_slot_1, ctx, get_label_slot_context);

    	var if_block_creators = [
    		create_if_block_1,
    		create_else_block$1
    	];

    	var if_blocks = [];

    	function select_block_type(ctx) {
    		if (ctx.label !== ctx.undefined) return 0;
    		return 1;
    	}

    	current_block_type_index = select_block_type(ctx);
    	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

    	var if_block2 = (ctx.dropdown) && create_if_block$1(ctx);

    	const after_slot_1 = ctx.$$slots.after;
    	const after_slot = create_slot(after_slot_1, ctx, get_after_slot_context$3);

    	var a_levels = [
    		{ href: null },
    		ctx.elementProps
    	];

    	var a_data = {};
    	for (var i = 0; i < a_levels.length; i += 1) {
    		a_data = assign(a_data, a_levels[i]);
    	}

    	return {
    		c: function create() {
    			a = element("a");

    			if (before_slot) before_slot.c();
    			t0 = space();
    			div2 = element("div");
    			shadow.$$.fragment.c();
    			t1 = space();
    			if (if_block0) if_block0.c();
    			t2 = space();
    			div1 = element("div");
    			div0 = element("div");
    			t3 = space();

    			if (label_slot) label_slot.c();
    			t4 = space();
    			if_block1.c();
    			t5 = space();
    			if (if_block2) if_block2.c();
    			t6 = space();

    			if (after_slot) after_slot.c();

    			div0.className = "pe-button__wash-color";
    			add_location(div0, file$7, 167, 6, 4884);
    			div1.className = "pe-button__wash";
    			add_location(div1, file$7, 166, 4, 4848);

    			div2.className = "pe-button__content";
    			add_location(div2, file$7, 161, 2, 4690);

    			set_attributes(a, a_data);
    			add_location(a, file$7, 159, 0, 4629);
    		},

    		l: function claim(nodes) {
    			if (before_slot) before_slot.l(a_nodes);

    			if (label_slot) label_slot.l(div2_nodes);

    			if (after_slot) after_slot.l(a_nodes);
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, a, anchor);

    			if (before_slot) {
    				before_slot.m(a, null);
    			}

    			append(a, t0);
    			append(a, div2);
    			mount_component(shadow, div2, null);
    			append(div2, t1);
    			if (if_block0) if_block0.m(div2, null);
    			append(div2, t2);
    			append(div2, div1);
    			append(div1, div0);
    			append(div2, t3);

    			if (label_slot) {
    				label_slot.m(div2, null);
    			}

    			append(div2, t4);
    			if_blocks[current_block_type_index].m(div2, null);
    			append(div2, t5);
    			if (if_block2) if_block2.m(div2, null);
    			append(a, t6);

    			if (after_slot) {
    				after_slot.m(a, null);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (before_slot && before_slot.p && changed.$$scope) {
    				before_slot.p(get_slot_changes(before_slot_1, ctx, changed, get_before_slot_changes$3), get_slot_context(before_slot_1, ctx, get_before_slot_context$3));
    			}

    			var shadow_changes = {};
    			if (changed._shadowDepth) shadow_changes.shadowDepth = ctx._shadowDepth;
    			shadow.$set(shadow_changes);

    			if (ctx.disabled || ctx.noInk) {
    				if (!if_block0) {
    					if_block0 = create_if_block_2();
    					if_block0.c();
    					if_block0.m(div2, t2);
    				}
    			} else if (if_block0) {
    				if_block0.d(1);
    				if_block0 = null;
    			}

    			if (label_slot && label_slot.p && changed.$$scope) {
    				label_slot.p(get_slot_changes(label_slot_1, ctx, changed, get_label_slot_changes), get_slot_context(label_slot_1, ctx, get_label_slot_context));
    			}

    			var previous_block_index = current_block_type_index;
    			current_block_type_index = select_block_type(ctx);
    			if (current_block_type_index === previous_block_index) {
    				if_blocks[current_block_type_index].p(changed, ctx);
    			} else {
    				group_outros();
    				on_outro(() => {
    					if_blocks[previous_block_index].d(1);
    					if_blocks[previous_block_index] = null;
    				});
    				if_block1.o(1);
    				check_outros();

    				if_block1 = if_blocks[current_block_type_index];
    				if (!if_block1) {
    					if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    					if_block1.c();
    				}
    				if_block1.i(1);
    				if_block1.m(div2, t5);
    			}

    			if (ctx.dropdown) {
    				if (if_block2) {
    					if_block2.p(changed, ctx);
    					if_block2.i(1);
    				} else {
    					if_block2 = create_if_block$1(ctx);
    					if_block2.c();
    					if_block2.i(1);
    					if_block2.m(div2, null);
    				}
    			} else if (if_block2) {
    				group_outros();
    				on_outro(() => {
    					if_block2.d(1);
    					if_block2 = null;
    				});

    				if_block2.o(1);
    				check_outros();
    			}

    			if (after_slot && after_slot.p && changed.$$scope) {
    				after_slot.p(get_slot_changes(after_slot_1, ctx, changed, get_after_slot_changes$3), get_slot_context(after_slot_1, ctx, get_after_slot_context$3));
    			}

    			set_attributes(a, get_spread_update(a_levels, [
    				{ href: null },
    				(changed.elementProps) && ctx.elementProps
    			]));
    		},

    		i: function intro(local) {
    			if (current) return;
    			if (before_slot && before_slot.i) before_slot.i(local);

    			shadow.$$.fragment.i(local);

    			if (label_slot && label_slot.i) label_slot.i(local);
    			if (if_block1) if_block1.i();
    			if (if_block2) if_block2.i();
    			if (after_slot && after_slot.i) after_slot.i(local);
    			current = true;
    		},

    		o: function outro(local) {
    			if (before_slot && before_slot.o) before_slot.o(local);
    			shadow.$$.fragment.o(local);
    			if (label_slot && label_slot.o) label_slot.o(local);
    			if (if_block1) if_block1.o();
    			if (if_block2) if_block2.o();
    			if (after_slot && after_slot.o) after_slot.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(a);
    			}

    			if (before_slot) before_slot.d(detaching);

    			shadow.$destroy();

    			if (if_block0) if_block0.d();

    			if (label_slot) label_slot.d(detaching);
    			if_blocks[current_block_type_index].d();
    			if (if_block2) if_block2.d();

    			if (after_slot) after_slot.d(detaching);
    		}
    	};
    }

    function instance$7($$self, $$props, $$invalidate) {
    	let $isInactive;

    	

      // Store
      const isInactive = writable(false); validate_store(isInactive, 'isInactive'); subscribe($$self, isInactive, $$value => { $isInactive = $$value; $$invalidate('$isInactive', $isInactive); });

      // DOM bindings
      const uid = v4_1();
      let domElement;

      onMount(() => {
        domElement = document.querySelector(`[data-uid="${uid}"]`);
      });

      // Common vars
      let { className = "", events = {}, id = undefined, style = undefined, testId = undefined, tone = undefined, animateOnTap = undefined, border = false, contained = false, disabled = false, dropdown = undefined, extraWide = false, highLabel = false, inactivate = false, inactive = false, ink = false, label = undefined, parentClassName = "", raised = false, selected = false, separatorAtStart = false, shadowDepth = undefined, tabindex = 0, textStyle = undefined, url = { href: "javascript:false" }, wash = undefined } = $$props;

      const onClickHandler = events.onclick || (() => {});
      const onKeyUpHandler = events.onkeyup || onClickHandler;

      const handleInactivate = () => {
        if (!inactivate) {
          return;
        }
        isInactive.set(true);
        setTimeout(() => (
          isInactive.set(false)
        ), inactivate * 1000);
      };

      const onClick = e => {
        document.activeElement === domElement && document.activeElement.blur();
        handleInactivate();
        onClickHandler(e);
        events && events.onclick && events.onclick(e);
      };

      const handleMouseLeave = e => {
        domElement.blur();
        domElement.removeEventListener("mouseleave", handleMouseLeave);
      };

      const onMouseDown = e => {
        domElement &&
          domElement.addEventListener &&
          domElement.addEventListener("mouseleave", handleMouseLeave);
        events && events.onmousedown && events.onmousedown(e);
      };

      const onKeyUp = e => {
        if (e.keyCode === 13 && document.activeElement === domElement) {
          document.activeElement.blur();
          if (onKeyUpHandler) {
            onKeyUpHandler(e);
          }
        }
        events && events.onkeyup && events.onkeyup(e);
      };

      const doesAnimateOnTap = animateOnTap !== false ? true : false;
      const hasHover = !disabled && !selected && (raised ? wash : wash !== false);
      const _shadowDepth = raised
        ? shadowDepth !== undefined
          ? parseInt(shadowDepth, 10)
          : 1
        : 0;
      const noInk = ink !== undefined && ink === false;
      const tabIndex = disabled || inactive ? -1 : tabindex || 0;

    	const writable_props = ['className', 'events', 'id', 'style', 'testId', 'tone', 'animateOnTap', 'border', 'contained', 'disabled', 'dropdown', 'extraWide', 'highLabel', 'inactivate', 'inactive', 'ink', 'label', 'parentClassName', 'raised', 'selected', 'separatorAtStart', 'shadowDepth', 'tabindex', 'textStyle', 'url', 'wash'];
    	Object.keys($$props).forEach(key => {
    		if (!writable_props.includes(key) && !key.startsWith('$$')) console.warn(`<Button> was created with unknown prop '${key}'`);
    	});

    	let { $$slots = {}, $$scope } = $$props;

    	$$self.$set = $$props => {
    		if ('className' in $$props) $$invalidate('className', className = $$props.className);
    		if ('events' in $$props) $$invalidate('events', events = $$props.events);
    		if ('id' in $$props) $$invalidate('id', id = $$props.id);
    		if ('style' in $$props) $$invalidate('style', style = $$props.style);
    		if ('testId' in $$props) $$invalidate('testId', testId = $$props.testId);
    		if ('tone' in $$props) $$invalidate('tone', tone = $$props.tone);
    		if ('animateOnTap' in $$props) $$invalidate('animateOnTap', animateOnTap = $$props.animateOnTap);
    		if ('border' in $$props) $$invalidate('border', border = $$props.border);
    		if ('contained' in $$props) $$invalidate('contained', contained = $$props.contained);
    		if ('disabled' in $$props) $$invalidate('disabled', disabled = $$props.disabled);
    		if ('dropdown' in $$props) $$invalidate('dropdown', dropdown = $$props.dropdown);
    		if ('extraWide' in $$props) $$invalidate('extraWide', extraWide = $$props.extraWide);
    		if ('highLabel' in $$props) $$invalidate('highLabel', highLabel = $$props.highLabel);
    		if ('inactivate' in $$props) $$invalidate('inactivate', inactivate = $$props.inactivate);
    		if ('inactive' in $$props) $$invalidate('inactive', inactive = $$props.inactive);
    		if ('ink' in $$props) $$invalidate('ink', ink = $$props.ink);
    		if ('label' in $$props) $$invalidate('label', label = $$props.label);
    		if ('parentClassName' in $$props) $$invalidate('parentClassName', parentClassName = $$props.parentClassName);
    		if ('raised' in $$props) $$invalidate('raised', raised = $$props.raised);
    		if ('selected' in $$props) $$invalidate('selected', selected = $$props.selected);
    		if ('separatorAtStart' in $$props) $$invalidate('separatorAtStart', separatorAtStart = $$props.separatorAtStart);
    		if ('shadowDepth' in $$props) $$invalidate('shadowDepth', shadowDepth = $$props.shadowDepth);
    		if ('tabindex' in $$props) $$invalidate('tabindex', tabindex = $$props.tabindex);
    		if ('textStyle' in $$props) $$invalidate('textStyle', textStyle = $$props.textStyle);
    		if ('url' in $$props) $$invalidate('url', url = $$props.url);
    		if ('wash' in $$props) $$invalidate('wash', wash = $$props.wash);
    		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
    	};

    	let R_inactive, R_classNames, elementProps;

    	$$self.$$.update = ($$dirty = { inactive: 1, $isInactive: 1, parentClassName: 1, contained: 1, raised: 1, selected: 1, highLabel: 1, extraWide: 1, disabled: 1, R_inactive: 1, separatorAtStart: 1, border: 1, dropdown: 1, tone: 1, className: 1, R_classNames: 1, style: 1, id: 1, testId: 1, events: 1, url: 1 }) => {
    		if ($$dirty.inactive || $$dirty.$isInactive) { $$invalidate('R_inactive', R_inactive = inactive || $isInactive); }
    		if ($$dirty.parentClassName || $$dirty.contained || $$dirty.raised || $$dirty.selected || $$dirty.highLabel || $$dirty.extraWide || $$dirty.disabled || $$dirty.R_inactive || $$dirty.separatorAtStart || $$dirty.border || $$dirty.dropdown || $$dirty.tone || $$dirty.className) { $$invalidate('R_classNames', R_classNames = [
            classes$w.super,
            parentClassName || classes$w.component,
            contained ? classes$w.contained : undefined,
            // Raised button classes
            raised ? classes$w.contained : undefined,
            raised ? classes$w.raised : undefined,
            raised && doesAnimateOnTap ? shadowClasses.with_active_shadow : undefined,
            raised && doesAnimateOnTap
              ? getShadowDepthClass(_shadowDepth + 1)
              : undefined,
            //
            hasHover ? classes$w.hasHover : undefined,
            selected ? classes$w.selected : undefined,
            highLabel ? classes$w.highLabel : undefined,
            extraWide ? classes$w.extraWide : undefined,
            disabled ? classes$w.disabled : undefined,
            R_inactive ? classes$w.inactive : undefined,
            separatorAtStart ? classes$w.separatorAtStart : undefined,
            border ? classes$w.border : undefined,
            dropdown ? classes$w.hasDropdown : undefined,
            !!dropdown
              ? dropdown.open
                ? classes$w.dropdownOpen
                : classes$w.dropdownClosed
              : undefined,
            tone === "dark" ? "pe-dark-tone" : undefined,
            tone === "light" ? "pe-light-tone" : undefined,
            className
          ].join(" ")); }
    		if ($$dirty.R_classNames || $$dirty.style || $$dirty.id || $$dirty.testId || $$dirty.events || $$dirty.url) { $$invalidate('elementProps', elementProps = {
            "data-uid": uid,
            class: R_classNames,
            ...(style ? { style } : undefined),
            ...(id ? { id } : undefined),
            "data-test-id": testId,
            ...events,
            ...url,
            tabindex: tabIndex,
            onmousedown: onMouseDown,
            onkeyup: onKeyUp,
            onclick: onClick,
          }); }
    	};

    	return {
    		isInactive,
    		className,
    		events,
    		id,
    		style,
    		testId,
    		tone,
    		animateOnTap,
    		border,
    		contained,
    		disabled,
    		dropdown,
    		extraWide,
    		highLabel,
    		inactivate,
    		inactive,
    		ink,
    		label,
    		parentClassName,
    		raised,
    		selected,
    		separatorAtStart,
    		shadowDepth,
    		tabindex,
    		textStyle,
    		url,
    		wash,
    		_shadowDepth,
    		noInk,
    		undefined,
    		elementProps,
    		$$slots,
    		$$scope
    	};
    }

    class Button extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$7, create_fragment$8, safe_not_equal, ["className", "events", "id", "style", "testId", "tone", "animateOnTap", "border", "contained", "disabled", "dropdown", "extraWide", "highLabel", "inactivate", "inactive", "ink", "label", "parentClassName", "raised", "selected", "separatorAtStart", "shadowDepth", "tabindex", "textStyle", "url", "wash"]);
    	}

    	get className() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set className(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get events() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set events(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get id() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set id(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get style() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set style(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get testId() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set testId(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get tone() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set tone(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get animateOnTap() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set animateOnTap(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get border() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set border(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get contained() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set contained(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get disabled() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set disabled(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get dropdown() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set dropdown(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get extraWide() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set extraWide(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get highLabel() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set highLabel(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get inactivate() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set inactivate(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get inactive() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set inactive(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get ink() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set ink(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get label() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set label(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get parentClassName() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set parentClassName(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get raised() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set raised(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get selected() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set selected(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get separatorAtStart() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set separatorAtStart(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get shadowDepth() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set shadowDepth(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get tabindex() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set tabindex(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get textStyle() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set textStyle(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get url() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set url(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get wash() {
    		throw new Error("<Button>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set wash(value) {
    		throw new Error("<Button>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/examples/button/Button.svelte generated by Svelte v3.5.1 */

    const file$8 = "src/examples/button/Button.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.called = list[i];
    	return child_ctx;
    }

    // (120:6) {#if R_onMouseUpCalled.length}
    function create_if_block$2(ctx) {
    	var div;

    	var each_value = ctx.R_onMouseUpCalled;

    	var each_blocks = [];

    	for (var i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	return {
    		c: function create() {
    			div = element("div");

    			for (var i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}
    			set_style(div, "margin-top", "1em");
    			add_location(div, file$8, 120, 8, 3206);
    		},

    		m: function mount(target, anchor) {
    			insert(target, div, anchor);

    			for (var i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div, null);
    			}
    		},

    		p: function update(changed, ctx) {
    			if (changed.R_onMouseUpCalled) {
    				each_value = ctx.R_onMouseUpCalled;

    				for (var i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].m(div, null);
    					}
    				}

    				for (; i < each_blocks.length; i += 1) {
    					each_blocks[i].d(1);
    				}
    				each_blocks.length = each_value.length;
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div);
    			}

    			destroy_each(each_blocks, detaching);
    		}
    	};
    }

    // (122:10) {#each R_onMouseUpCalled as called}
    function create_each_block(ctx) {
    	var div, t_value = ctx.called, t;

    	return {
    		c: function create() {
    			div = element("div");
    			t = text(t_value);
    			set_style(div, "border-top", "1px solid #eee");
    			set_style(div, "padding", "5px 0");
    			set_style(div, "color", "#aaa");
    			add_location(div, file$8, 122, 12, 3295);
    		},

    		m: function mount(target, anchor) {
    			insert(target, div, anchor);
    			append(div, t);
    		},

    		p: function update(changed, ctx) {
    			if ((changed.R_onMouseUpCalled) && t_value !== (t_value = ctx.called)) {
    				set_data(t, t_value);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div);
    			}
    		}
    	};
    }

    function create_fragment$9(ctx) {
    	var div27, h1, t1, div2, div0, t3, div1, t4, div5, div3, t6, div4, t7, div8, div6, t9, div7, t10, div11, div9, t12, div10, t13, div14, div12, t15, div13, t16, div17, div15, t18, div16, t19, div20, div18, t21, div19, t22, div23, div21, t24, div22, t25, div26, div24, t27, div25, t28, current;

    	var button0 = new Button({
    		props: { label: "Button" },
    		$$inline: true
    	});

    	var button1 = new Button({
    		props: { raised: true, label: "Button" },
    		$$inline: true
    	});

    	var button2 = new Button({
    		props: { label: "Button", inactivate: "2" },
    		$$inline: true
    	});

    	var button3 = new Button({
    		props: {
    		raised: true,
    		label: "Button",
    		className: "tests-button-themed-button"
    	},
    		$$inline: true
    	});

    	var button4 = new Button({
    		props: {
    		raised: true,
    		label: "Button",
    		className: "tests-button-themed-button"
    	},
    		$$inline: true
    	});

    	var button5 = new Button({
    		props: {
    		raised: true,
    		label: "Button",
    		shadowDepth: "1",
    		style: "color: red",
    		testId: "A test id"
    	},
    		$$inline: true
    	});

    	var button6 = new Button({
    		props: { label: "Button", dropdown: true },
    		$$inline: true
    	});

    	var button7 = new Button({
    		props: {
    		url: { href: '#/shadow', use: link },
    		raised: true,
    		label: "Go"
    	},
    		$$inline: true
    	});

    	var button8 = new Button({
    		props: { label: "Button", events: {
            onmouseup: ctx.addOnMouseUp
          } },
    		$$inline: true
    	});

    	var if_block = (ctx.R_onMouseUpCalled.length) && create_if_block$2(ctx);

    	return {
    		c: function create() {
    			div27 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Button";
    			t1 = space();
    			div2 = element("div");
    			div0 = element("div");
    			div0.textContent = "Regular button";
    			t3 = space();
    			div1 = element("div");
    			button0.$$.fragment.c();
    			t4 = space();
    			div5 = element("div");
    			div3 = element("div");
    			div3.textContent = "Raised button";
    			t6 = space();
    			div4 = element("div");
    			button1.$$.fragment.c();
    			t7 = space();
    			div8 = element("div");
    			div6 = element("div");
    			div6.textContent = "Option: inactivate (for 2 secs)";
    			t9 = space();
    			div7 = element("div");
    			button2.$$.fragment.c();
    			t10 = space();
    			div11 = element("div");
    			div9 = element("div");
    			div9.textContent = "Themed (color)";
    			t12 = space();
    			div10 = element("div");
    			button3.$$.fragment.c();
    			t13 = space();
    			div14 = element("div");
    			div12 = element("div");
    			div12.textContent = "Themed (color) -- dark tone";
    			t15 = space();
    			div13 = element("div");
    			button4.$$.fragment.c();
    			t16 = space();
    			div17 = element("div");
    			div15 = element("div");
    			div15.textContent = "Styled button";
    			t18 = space();
    			div16 = element("div");
    			button5.$$.fragment.c();
    			t19 = space();
    			div20 = element("div");
    			div18 = element("div");
    			div18.textContent = "Option: dropdown with label (not interactive) -- see Menu examples";
    			t21 = space();
    			div19 = element("div");
    			button6.$$.fragment.c();
    			t22 = space();
    			div23 = element("div");
    			div21 = element("div");
    			div21.textContent = "Link to shadow";
    			t24 = space();
    			div22 = element("div");
    			button7.$$.fragment.c();
    			t25 = space();
    			div26 = element("div");
    			div24 = element("div");
    			div24.textContent = "Option: events (onmouseup)";
    			t27 = space();
    			div25 = element("div");
    			button8.$$.fragment.c();
    			t28 = space();
    			if (if_block) if_block.c();
    			add_location(h1, file$8, 22, 2, 510);
    			div0.className = "example-info";
    			add_location(div0, file$8, 25, 4, 555);
    			div1.className = "example-component";
    			add_location(div1, file$8, 26, 4, 606);
    			div2.className = "example";
    			add_location(div2, file$8, 24, 2, 529);
    			div3.className = "example-info";
    			add_location(div3, file$8, 32, 4, 719);
    			div4.className = "example-component";
    			add_location(div4, file$8, 33, 4, 769);
    			div5.className = "example";
    			add_location(div5, file$8, 31, 2, 693);
    			div6.className = "example-info";
    			add_location(div6, file$8, 39, 4, 889);
    			div7.className = "example-component";
    			add_location(div7, file$8, 40, 4, 957);
    			div8.className = "example";
    			add_location(div8, file$8, 38, 2, 863);
    			div9.className = "example-info";
    			add_location(div9, file$8, 46, 4, 1085);
    			div10.className = "example-component";
    			add_location(div10, file$8, 47, 4, 1136);
    			div11.className = "example";
    			add_location(div11, file$8, 45, 2, 1059);
    			div12.className = "example-info";
    			add_location(div12, file$8, 53, 4, 1308);
    			div13.className = "example-component";
    			add_location(div13, file$8, 54, 4, 1372);
    			div14.className = "example pe-dark-tone";
    			add_location(div14, file$8, 52, 2, 1269);
    			div15.className = "example-info";
    			add_location(div15, file$8, 88, 4, 2263);
    			div16.className = "example-component";
    			add_location(div16, file$8, 89, 4, 2313);
    			div17.className = "example";
    			add_location(div17, file$8, 87, 2, 2237);
    			div18.className = "example-info";
    			add_location(div18, file$8, 100, 4, 2527);
    			div19.className = "example-component";
    			add_location(div19, file$8, 101, 4, 2630);
    			div20.className = "example";
    			add_location(div20, file$8, 99, 2, 2501);
    			div21.className = "example-info";
    			add_location(div21, file$8, 107, 4, 2766);
    			div22.className = "example-component";
    			add_location(div22, file$8, 108, 4, 2817);
    			div23.className = "example interactive";
    			add_location(div23, file$8, 106, 2, 2728);
    			div24.className = "example-info";
    			add_location(div24, file$8, 114, 4, 2983);
    			div25.className = "example-component";
    			add_location(div25, file$8, 115, 4, 3046);
    			div26.className = "example interactive";
    			add_location(div26, file$8, 113, 2, 2945);
    			div27.className = "page";
    			add_location(div27, file$8, 20, 0, 488);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, div27, anchor);
    			append(div27, h1);
    			append(div27, t1);
    			append(div27, div2);
    			append(div2, div0);
    			append(div2, t3);
    			append(div2, div1);
    			mount_component(button0, div1, null);
    			append(div27, t4);
    			append(div27, div5);
    			append(div5, div3);
    			append(div5, t6);
    			append(div5, div4);
    			mount_component(button1, div4, null);
    			append(div27, t7);
    			append(div27, div8);
    			append(div8, div6);
    			append(div8, t9);
    			append(div8, div7);
    			mount_component(button2, div7, null);
    			append(div27, t10);
    			append(div27, div11);
    			append(div11, div9);
    			append(div11, t12);
    			append(div11, div10);
    			mount_component(button3, div10, null);
    			append(div27, t13);
    			append(div27, div14);
    			append(div14, div12);
    			append(div14, t15);
    			append(div14, div13);
    			mount_component(button4, div13, null);
    			append(div27, t16);
    			append(div27, div17);
    			append(div17, div15);
    			append(div17, t18);
    			append(div17, div16);
    			mount_component(button5, div16, null);
    			append(div27, t19);
    			append(div27, div20);
    			append(div20, div18);
    			append(div20, t21);
    			append(div20, div19);
    			mount_component(button6, div19, null);
    			append(div27, t22);
    			append(div27, div23);
    			append(div23, div21);
    			append(div23, t24);
    			append(div23, div22);
    			mount_component(button7, div22, null);
    			append(div27, t25);
    			append(div27, div26);
    			append(div26, div24);
    			append(div26, t27);
    			append(div26, div25);
    			mount_component(button8, div25, null);
    			append(div25, t28);
    			if (if_block) if_block.m(div25, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var button7_changes = {};
    			if (changed.link) button7_changes.url = { href: '#/shadow', use: link };
    			button7.$set(button7_changes);

    			var button8_changes = {};
    			if (changed.addOnMouseUp) button8_changes.events = {
            onmouseup: ctx.addOnMouseUp
          };
    			button8.$set(button8_changes);

    			if (ctx.R_onMouseUpCalled.length) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    				} else {
    					if_block = create_if_block$2(ctx);
    					if_block.c();
    					if_block.m(div25, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			button0.$$.fragment.i(local);

    			button1.$$.fragment.i(local);

    			button2.$$.fragment.i(local);

    			button3.$$.fragment.i(local);

    			button4.$$.fragment.i(local);

    			button5.$$.fragment.i(local);

    			button6.$$.fragment.i(local);

    			button7.$$.fragment.i(local);

    			button8.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			button0.$$.fragment.o(local);
    			button1.$$.fragment.o(local);
    			button2.$$.fragment.o(local);
    			button3.$$.fragment.o(local);
    			button4.$$.fragment.o(local);
    			button5.$$.fragment.o(local);
    			button6.$$.fragment.o(local);
    			button7.$$.fragment.o(local);
    			button8.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div27);
    			}

    			button0.$destroy();

    			button1.$destroy();

    			button2.$destroy();

    			button3.$destroy();

    			button4.$destroy();

    			button5.$destroy();

    			button6.$destroy();

    			button7.$destroy();

    			button8.$destroy();

    			if (if_block) if_block.d();
    		}
    	};
    }

    function instance$8($$self, $$props, $$invalidate) {
    	

      addStyle$2$1(".tests-button-themed-button", {
        color_light_background: "#2196F3",
        color_light_text: "#fff",
        color_dark_background: "#2196F3",
        letter_spacing: 0
      });
      const addOnMouseUp = () => {
        $$invalidate('R_onMouseUpCalled', R_onMouseUpCalled = [...R_onMouseUpCalled, `onmouseup: ${new Date()}`]);
      };

    	let R_onMouseUpCalled;

    	$$invalidate('R_onMouseUpCalled', R_onMouseUpCalled = []);

    	return { addOnMouseUp, R_onMouseUpCalled };
    }

    class Button_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$8, create_fragment$9, safe_not_equal, []);
    	}
    }

    /* src/examples/icon/StarSVG.svelte generated by Svelte v3.5.1 */

    const file$9 = "src/examples/icon/StarSVG.svelte";

    function create_fragment$a(ctx) {
    	var svg, path;

    	return {
    		c: function create() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			attr(path, "d", "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z");
    			add_location(path, file$9, 0, 48, 48);
    			attr(svg, "width", "24");
    			attr(svg, "height", "24");
    			attr(svg, "viewBox", "0 0 24 24");
    			add_location(svg, file$9, 0, 0, 0);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},

    		p: noop,
    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(svg);
    			}
    		}
    	};
    }

    class StarSVG extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, null, create_fragment$a, safe_not_equal, []);
    	}
    }

    /* src/examples/icon/Icon.svelte generated by Svelte v3.5.1 */

    const file$a = "src/examples/icon/Icon.svelte";

    function get_each_context$1(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.sizeName = list[i];
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.sizeName = list[i];
    	return child_ctx;
    }

    // (22:6) <Icon>
    function create_default_slot_6(ctx) {
    	var current;

    	var starsvg = new StarSVG({ $$inline: true });

    	return {
    		c: function create() {
    			starsvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(starsvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			starsvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			starsvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			starsvg.$destroy(detaching);
    		}
    	};
    }

    // (31:6) <Icon>
    function create_default_slot_5(ctx) {
    	var current;

    	var starsvg = new StarSVG({ $$inline: true });

    	return {
    		c: function create() {
    			starsvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(starsvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			starsvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			starsvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			starsvg.$destroy(detaching);
    		}
    	};
    }

    // (41:8) <Icon size={sizeName}>
    function create_default_slot_4(ctx) {
    	var current;

    	var starsvg = new StarSVG({ $$inline: true });

    	return {
    		c: function create() {
    			starsvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(starsvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			starsvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			starsvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			starsvg.$destroy(detaching);
    		}
    	};
    }

    // (40:6) {#each sizeNames as sizeName}
    function create_each_block_1(ctx) {
    	var current;

    	var icon = new Icon({
    		props: {
    		size: ctx.sizeName,
    		$$slots: { default: [create_default_slot_4] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	return {
    		c: function create() {
    			icon.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(icon, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var icon_changes = {};
    			if (changed.sizeNames) icon_changes.size = ctx.sizeName;
    			if (changed.$$scope) icon_changes.$$scope = { changed, ctx };
    			icon.$set(icon_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			icon.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			icon.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			icon.$destroy(detaching);
    		}
    	};
    }

    // (70:6) <Icon style="color: #EF6C00">
    function create_default_slot_3(ctx) {
    	var current;

    	var starsvg = new StarSVG({ $$inline: true });

    	return {
    		c: function create() {
    			starsvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(starsvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			starsvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			starsvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			starsvg.$destroy(detaching);
    		}
    	};
    }

    // (79:6) <Icon className="tests-icon-themed-icon">
    function create_default_slot_2(ctx) {
    	var current;

    	var starsvg = new StarSVG({ $$inline: true });

    	return {
    		c: function create() {
    			starsvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(starsvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			starsvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			starsvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			starsvg.$destroy(detaching);
    		}
    	};
    }

    // (89:8) <Icon size={sizeName}>
    function create_default_slot_1(ctx) {
    	var current;

    	var starsvg = new StarSVG({ $$inline: true });

    	return {
    		c: function create() {
    			starsvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(starsvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			starsvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			starsvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			starsvg.$destroy(detaching);
    		}
    	};
    }

    // (88:6) {#each sizeNames as sizeName}
    function create_each_block$1(ctx) {
    	var current;

    	var icon = new Icon({
    		props: {
    		size: ctx.sizeName,
    		$$slots: { default: [create_default_slot_1] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	return {
    		c: function create() {
    			icon.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(icon, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var icon_changes = {};
    			if (changed.sizeNames) icon_changes.size = ctx.sizeName;
    			if (changed.$$scope) icon_changes.$$scope = { changed, ctx };
    			icon.$set(icon_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			icon.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			icon.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			icon.$destroy(detaching);
    		}
    	};
    }

    // (99:6) <Icon className="tests-icon-themed-icon">
    function create_default_slot$2(ctx) {
    	var current;

    	var starsvg = new StarSVG({ $$inline: true });

    	return {
    		c: function create() {
    			starsvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(starsvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			starsvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			starsvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			starsvg.$destroy(detaching);
    		}
    	};
    }

    function create_fragment$b(ctx) {
    	var div27, h1, t1, div2, div0, t3, div1, t4, div5, div3, t6, div4, t7, div8, div6, t9, div7, t10, div11, div9, t12, div10, t13, div14, div12, t15, div13, t16, div17, div15, t18, div16, t19, div20, div18, t21, div19, t22, div23, div21, t24, div22, t25, div26, div24, t27, div25, current;

    	var icon0 = new Icon({
    		props: {
    		$$slots: { default: [create_default_slot_6] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	var icon1 = new Icon({
    		props: {
    		$$slots: { default: [create_default_slot_5] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	var each_value_1 = ctx.sizeNames;

    	var each_blocks_1 = [];

    	for (var i = 0; i < each_value_1.length; i += 1) {
    		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	function outro_block(i, detaching, local) {
    		if (each_blocks_1[i]) {
    			if (detaching) {
    				on_outro(() => {
    					each_blocks_1[i].d(detaching);
    					each_blocks_1[i] = null;
    				});
    			}

    			each_blocks_1[i].o(local);
    		}
    	}

    	var icon2 = new Icon({
    		props: {
    		src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
    		size: "large"
    	},
    		$$inline: true
    	});

    	var icon3 = new Icon({
    		props: {
    		src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
    		size: "large",
    		avatar: true
    	},
    		$$inline: true
    	});

    	var icon4 = new Icon({
    		props: {
    		style: "color: #EF6C00",
    		$$slots: { default: [create_default_slot_3] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	var icon5 = new Icon({
    		props: {
    		className: "tests-icon-themed-icon",
    		$$slots: { default: [create_default_slot_2] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	var each_value = ctx.sizeNames;

    	var each_blocks = [];

    	for (var i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
    	}

    	function outro_block_1(i, detaching, local) {
    		if (each_blocks[i]) {
    			if (detaching) {
    				on_outro(() => {
    					each_blocks[i].d(detaching);
    					each_blocks[i] = null;
    				});
    			}

    			each_blocks[i].o(local);
    		}
    	}

    	var icon6 = new Icon({
    		props: {
    		className: "tests-icon-themed-icon",
    		$$slots: { default: [create_default_slot$2] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	return {
    		c: function create() {
    			div27 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Icon";
    			t1 = space();
    			div2 = element("div");
    			div0 = element("div");
    			div0.textContent = "Child content";
    			t3 = space();
    			div1 = element("div");
    			icon0.$$.fragment.c();
    			t4 = space();
    			div5 = element("div");
    			div3 = element("div");
    			div3.textContent = "Child content";
    			t6 = space();
    			div4 = element("div");
    			icon1.$$.fragment.c();
    			t7 = space();
    			div8 = element("div");
    			div6 = element("div");
    			div6.textContent = "Option: size";
    			t9 = space();
    			div7 = element("div");

    			for (var i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].c();
    			}

    			t10 = space();
    			div11 = element("div");
    			div9 = element("div");
    			div9.textContent = "Option: src (size large)";
    			t12 = space();
    			div10 = element("div");
    			icon2.$$.fragment.c();
    			t13 = space();
    			div14 = element("div");
    			div12 = element("div");
    			div12.textContent = "Option: avatar (size large)";
    			t15 = space();
    			div13 = element("div");
    			icon3.$$.fragment.c();
    			t16 = space();
    			div17 = element("div");
    			div15 = element("div");
    			div15.textContent = "Style (color)";
    			t18 = space();
    			div16 = element("div");
    			icon4.$$.fragment.c();
    			t19 = space();
    			div20 = element("div");
    			div18 = element("div");
    			div18.textContent = "Themed (color and size)";
    			t21 = space();
    			div19 = element("div");
    			icon5.$$.fragment.c();
    			t22 = space();
    			div23 = element("div");
    			div21 = element("div");
    			div21.textContent = "Option: size -- dark tone";
    			t24 = space();
    			div22 = element("div");

    			for (var i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t25 = space();
    			div26 = element("div");
    			div24 = element("div");
    			div24.textContent = "Themed (color and size) -- dark tone";
    			t27 = space();
    			div25 = element("div");
    			icon6.$$.fragment.c();
    			add_location(h1, file$a, 16, 2, 359);
    			div0.className = "example-info";
    			add_location(div0, file$a, 19, 4, 402);
    			div1.className = "example-component";
    			add_location(div1, file$a, 20, 4, 452);
    			div2.className = "example";
    			add_location(div2, file$a, 18, 2, 376);
    			div3.className = "example-info";
    			add_location(div3, file$a, 28, 4, 580);
    			div4.className = "example-component";
    			add_location(div4, file$a, 29, 4, 630);
    			div5.className = "example";
    			add_location(div5, file$a, 27, 2, 554);
    			div6.className = "example-info";
    			add_location(div6, file$a, 37, 4, 758);
    			div7.className = "example-component";
    			add_location(div7, file$a, 38, 4, 807);
    			div8.className = "example";
    			add_location(div8, file$a, 36, 2, 732);
    			div9.className = "example-info";
    			add_location(div9, file$a, 48, 4, 1007);
    			div10.className = "example-component";
    			add_location(div10, file$a, 49, 4, 1068);
    			div11.className = "example";
    			add_location(div11, file$a, 47, 2, 981);
    			div12.className = "example-info";
    			add_location(div12, file$a, 57, 4, 1269);
    			div13.className = "example-component";
    			add_location(div13, file$a, 58, 4, 1333);
    			div14.className = "example";
    			add_location(div14, file$a, 56, 2, 1243);
    			div15.className = "example-info";
    			add_location(div15, file$a, 67, 4, 1549);
    			div16.className = "example-component";
    			add_location(div16, file$a, 68, 4, 1599);
    			div17.className = "example";
    			add_location(div17, file$a, 66, 2, 1523);
    			div18.className = "example-info";
    			add_location(div18, file$a, 76, 4, 1750);
    			div19.className = "example-component";
    			add_location(div19, file$a, 77, 4, 1810);
    			div20.className = "example";
    			add_location(div20, file$a, 75, 2, 1724);
    			div21.className = "example-info";
    			add_location(div21, file$a, 85, 4, 1986);
    			div22.className = "example-component";
    			add_location(div22, file$a, 86, 4, 2048);
    			div23.className = "example pe-dark-tone";
    			add_location(div23, file$a, 84, 2, 1947);
    			div24.className = "example-info";
    			add_location(div24, file$a, 96, 4, 2261);
    			div25.className = "example-component";
    			add_location(div25, file$a, 97, 4, 2334);
    			div26.className = "example pe-dark-tone";
    			add_location(div26, file$a, 95, 2, 2222);
    			div27.className = "page";
    			add_location(div27, file$a, 14, 0, 337);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, div27, anchor);
    			append(div27, h1);
    			append(div27, t1);
    			append(div27, div2);
    			append(div2, div0);
    			append(div2, t3);
    			append(div2, div1);
    			mount_component(icon0, div1, null);
    			append(div27, t4);
    			append(div27, div5);
    			append(div5, div3);
    			append(div5, t6);
    			append(div5, div4);
    			mount_component(icon1, div4, null);
    			append(div27, t7);
    			append(div27, div8);
    			append(div8, div6);
    			append(div8, t9);
    			append(div8, div7);

    			for (var i = 0; i < each_blocks_1.length; i += 1) {
    				each_blocks_1[i].m(div7, null);
    			}

    			append(div27, t10);
    			append(div27, div11);
    			append(div11, div9);
    			append(div11, t12);
    			append(div11, div10);
    			mount_component(icon2, div10, null);
    			append(div27, t13);
    			append(div27, div14);
    			append(div14, div12);
    			append(div14, t15);
    			append(div14, div13);
    			mount_component(icon3, div13, null);
    			append(div27, t16);
    			append(div27, div17);
    			append(div17, div15);
    			append(div17, t18);
    			append(div17, div16);
    			mount_component(icon4, div16, null);
    			append(div27, t19);
    			append(div27, div20);
    			append(div20, div18);
    			append(div20, t21);
    			append(div20, div19);
    			mount_component(icon5, div19, null);
    			append(div27, t22);
    			append(div27, div23);
    			append(div23, div21);
    			append(div23, t24);
    			append(div23, div22);

    			for (var i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div22, null);
    			}

    			append(div27, t25);
    			append(div27, div26);
    			append(div26, div24);
    			append(div26, t27);
    			append(div26, div25);
    			mount_component(icon6, div25, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var icon0_changes = {};
    			if (changed.$$scope) icon0_changes.$$scope = { changed, ctx };
    			icon0.$set(icon0_changes);

    			var icon1_changes = {};
    			if (changed.$$scope) icon1_changes.$$scope = { changed, ctx };
    			icon1.$set(icon1_changes);

    			if (changed.sizeNames) {
    				each_value_1 = ctx.sizeNames;

    				for (var i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks_1[i]) {
    						each_blocks_1[i].p(changed, child_ctx);
    						each_blocks_1[i].i(1);
    					} else {
    						each_blocks_1[i] = create_each_block_1(child_ctx);
    						each_blocks_1[i].c();
    						each_blocks_1[i].i(1);
    						each_blocks_1[i].m(div7, null);
    					}
    				}

    				group_outros();
    				for (; i < each_blocks_1.length; i += 1) outro_block(i, 1, 1);
    				check_outros();
    			}

    			var icon4_changes = {};
    			if (changed.$$scope) icon4_changes.$$scope = { changed, ctx };
    			icon4.$set(icon4_changes);

    			var icon5_changes = {};
    			if (changed.$$scope) icon5_changes.$$scope = { changed, ctx };
    			icon5.$set(icon5_changes);

    			if (changed.sizeNames) {
    				each_value = ctx.sizeNames;

    				for (var i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$1(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						each_blocks[i].i(1);
    					} else {
    						each_blocks[i] = create_each_block$1(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].i(1);
    						each_blocks[i].m(div22, null);
    					}
    				}

    				group_outros();
    				for (; i < each_blocks.length; i += 1) outro_block_1(i, 1, 1);
    				check_outros();
    			}

    			var icon6_changes = {};
    			if (changed.$$scope) icon6_changes.$$scope = { changed, ctx };
    			icon6.$set(icon6_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			icon0.$$.fragment.i(local);

    			icon1.$$.fragment.i(local);

    			for (var i = 0; i < each_value_1.length; i += 1) each_blocks_1[i].i();

    			icon2.$$.fragment.i(local);

    			icon3.$$.fragment.i(local);

    			icon4.$$.fragment.i(local);

    			icon5.$$.fragment.i(local);

    			for (var i = 0; i < each_value.length; i += 1) each_blocks[i].i();

    			icon6.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			icon0.$$.fragment.o(local);
    			icon1.$$.fragment.o(local);

    			each_blocks_1 = each_blocks_1.filter(Boolean);
    			for (let i = 0; i < each_blocks_1.length; i += 1) outro_block(i, 0, 0);

    			icon2.$$.fragment.o(local);
    			icon3.$$.fragment.o(local);
    			icon4.$$.fragment.o(local);
    			icon5.$$.fragment.o(local);

    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) outro_block_1(i, 0, 0);

    			icon6.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div27);
    			}

    			icon0.$destroy();

    			icon1.$destroy();

    			destroy_each(each_blocks_1, detaching);

    			icon2.$destroy();

    			icon3.$destroy();

    			icon4.$destroy();

    			icon5.$destroy();

    			destroy_each(each_blocks, detaching);

    			icon6.$destroy();
    		}
    	};
    }

    function instance$9($$self) {
    	

      const sizeNames = ["small", "regular", "medium", "large"];

      addStyle$3(".tests-icon-themed-icon", {
        size_regular: 50,
        color_light: "purple",
        color_dark: "orange"
      });

    	return { sizeNames };
    }

    class Icon_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$9, create_fragment$b, safe_not_equal, []);
    	}
    }

    var classes$x = {
      component: "pe-button pe-icon-button",

      // elements
      content:   "pe-icon-button__content",
      label:     "pe-icon-button__label",

      // states
      compact:   "pe-icon-button--compact",
    };

    /* src/lib/icon-button/IconButton.svelte generated by Svelte v3.5.1 */

    const file$b = "src/lib/icon-button/IconButton.svelte";

    // (30:4) <Icon {...icon}>
    function create_default_slot_1$1(ctx) {
    	var current;

    	const default_slot_1 = ctx.$$slots.default;
    	const default_slot = create_slot(default_slot_1, ctx, null);

    	return {
    		c: function create() {
    			if (default_slot) default_slot.c();
    		},

    		l: function claim(nodes) {
    			if (default_slot) default_slot.l(nodes);
    		},

    		m: function mount(target, anchor) {
    			if (default_slot) {
    				default_slot.m(target, anchor);
    			}

    			current = true;
    		},

    		p: function update(changed, ctx) {
    			if (default_slot && default_slot.p && changed.$$scope) {
    				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
    			}
    		},

    		i: function intro(local) {
    			if (current) return;
    			if (default_slot && default_slot.i) default_slot.i(local);
    			current = true;
    		},

    		o: function outro(local) {
    			if (default_slot && default_slot.o) default_slot.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (default_slot) default_slot.d(detaching);
    		}
    	};
    }

    // (36:4) {#if label}
    function create_if_block$3(ctx) {
    	var div, t, div_class_value;

    	return {
    		c: function create() {
    			div = element("div");
    			t = text(ctx.label);
    			div.className = div_class_value = classes$x.label;
    			add_location(div, file$b, 36, 6, 811);
    		},

    		m: function mount(target, anchor) {
    			insert(target, div, anchor);
    			append(div, t);
    		},

    		p: function update(changed, ctx) {
    			if (changed.label) {
    				set_data(t, ctx.label);
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div);
    			}
    		}
    	};
    }

    // (35:2) <span slot="after">
    function create_after_slot(ctx) {
    	var span;

    	var if_block = (ctx.label) && create_if_block$3(ctx);

    	return {
    		c: function create() {
    			span = element("span");
    			if (if_block) if_block.c();
    			attr(span, "slot", "after");
    			add_location(span, file$b, 34, 2, 769);
    		},

    		m: function mount(target, anchor) {
    			insert(target, span, anchor);
    			if (if_block) if_block.m(span, null);
    		},

    		p: function update(changed, ctx) {
    			if (ctx.label) {
    				if (if_block) {
    					if_block.p(changed, ctx);
    				} else {
    					if_block = create_if_block$3(ctx);
    					if_block.c();
    					if_block.m(span, null);
    				}
    			} else if (if_block) {
    				if_block.d(1);
    				if_block = null;
    			}
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(span);
    			}

    			if (if_block) if_block.d();
    		}
    	};
    }

    // (28:0) <Button {...defaultButtonProps} {...$$props}>
    function create_default_slot$3(ctx) {
    	var div, div_class_value, t, current;

    	var icon_1_spread_levels = [
    		ctx.icon
    	];

    	let icon_1_props = {
    		$$slots: { default: [create_default_slot_1$1] },
    		$$scope: { ctx }
    	};
    	for (var i = 0; i < icon_1_spread_levels.length; i += 1) {
    		icon_1_props = assign(icon_1_props, icon_1_spread_levels[i]);
    	}
    	var icon_1 = new Icon({ props: icon_1_props, $$inline: true });

    	return {
    		c: function create() {
    			div = element("div");
    			icon_1.$$.fragment.c();
    			t = space();
    			div.className = div_class_value = classes$x.content;
    			add_location(div, file$b, 28, 2, 651);
    		},

    		m: function mount(target, anchor) {
    			insert(target, div, anchor);
    			mount_component(icon_1, div, null);
    			insert(target, t, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var icon_1_changes = changed.icon ? get_spread_update(icon_1_spread_levels, [
    				ctx.icon
    			]) : {};
    			if (changed.$$scope) icon_1_changes.$$scope = { changed, ctx };
    			icon_1.$set(icon_1_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			icon_1.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			icon_1.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div);
    			}

    			icon_1.$destroy();

    			if (detaching) {
    				detach(t);
    			}
    		}
    	};
    }

    function create_fragment$c(ctx) {
    	var current;

    	var button_spread_levels = [
    		ctx.defaultButtonProps,
    		ctx.$$props
    	];

    	let button_props = {
    		$$slots: {
    		default: [create_default_slot$3],
    		after: [create_after_slot]
    	},
    		$$scope: { ctx }
    	};
    	for (var i = 0; i < button_spread_levels.length; i += 1) {
    		button_props = assign(button_props, button_spread_levels[i]);
    	}
    	var button = new Button({ props: button_props, $$inline: true });

    	return {
    		c: function create() {
    			button.$$.fragment.c();
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			mount_component(button, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var button_changes = (changed.defaultButtonProps || changed.$$props) ? get_spread_update(button_spread_levels, [
    				(changed.defaultButtonProps) && ctx.defaultButtonProps,
    				(changed.$$props) && ctx.$$props
    			]) : {};
    			if (changed.$$scope || changed.label || changed.icon) button_changes.$$scope = { changed, ctx };
    			button.$set(button_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			button.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			button.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			button.$destroy(detaching);
    		}
    	};
    }

    function instance$a($$self, $$props, $$invalidate) {
    	

      let { compact = false, icon = undefined, label = undefined, parentClassName = undefined } = $$props;

      const parentClassNames = [
        parentClassName || classes$x.component,
        compact ? classes$x.compact : null,
      ].join(" ");

      const defaultButtonProps = {
        wash: false,
        animateOnTap: false,
        parentClassName: parentClassNames,
      };

      // Reset pass through
      delete $$props.icon;
      delete $$props.label;

    	let { $$slots = {}, $$scope } = $$props;

    	$$self.$set = $$new_props => {
    		$$invalidate('$$props', $$props = assign(assign({}, $$props), $$new_props));
    		if ('compact' in $$props) $$invalidate('compact', compact = $$props.compact);
    		if ('icon' in $$props) $$invalidate('icon', icon = $$props.icon);
    		if ('label' in $$props) $$invalidate('label', label = $$props.label);
    		if ('parentClassName' in $$props) $$invalidate('parentClassName', parentClassName = $$props.parentClassName);
    		if ('$$scope' in $$new_props) $$invalidate('$$scope', $$scope = $$new_props.$$scope);
    	};

    	return {
    		compact,
    		icon,
    		label,
    		parentClassName,
    		defaultButtonProps,
    		$$props,
    		$$props: $$props = exclude_internal_props($$props),
    		$$slots,
    		$$scope
    	};
    }

    class IconButton extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$a, create_fragment$c, safe_not_equal, ["compact", "icon", "label", "parentClassName"]);
    	}

    	get compact() {
    		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set compact(value) {
    		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get icon() {
    		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set icon(value) {
    		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get label() {
    		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set label(value) {
    		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get parentClassName() {
    		throw new Error("<IconButton>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set parentClassName(value) {
    		throw new Error("<IconButton>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/examples/icon-button/LockSVG.svelte generated by Svelte v3.5.1 */

    const file$c = "src/examples/icon-button/LockSVG.svelte";

    function create_fragment$d(ctx) {
    	var svg, path;

    	return {
    		c: function create() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			attr(path, "d", "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z");
    			add_location(path, file$c, 0, 83, 83);
    			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
    			attr(svg, "width", "24");
    			attr(svg, "height", "24");
    			attr(svg, "viewBox", "0 0 24 24");
    			add_location(svg, file$c, 0, 0, 0);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},

    		p: noop,
    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(svg);
    			}
    		}
    	};
    }

    class LockSVG extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, null, create_fragment$d, safe_not_equal, []);
    	}
    }

    /* src/examples/icon-button/IconButton.svelte generated by Svelte v3.5.1 */

    const file$d = "src/examples/icon-button/IconButton.svelte";

    function get_each_context$2(ctx, list, i) {
    	const child_ctx = Object.create(ctx);
    	child_ctx.sizeName = list[i];
    	return child_ctx;
    }

    // (33:6) <IconButton>
    function create_default_slot_7(ctx) {
    	var current;

    	var locksvg = new LockSVG({ $$inline: true });

    	return {
    		c: function create() {
    			locksvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(locksvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			locksvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			locksvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			locksvg.$destroy(detaching);
    		}
    	};
    }

    // (43:8) <IconButton icon={{ size: sizeName }}>
    function create_default_slot_6$1(ctx) {
    	var current;

    	var locksvg = new LockSVG({ $$inline: true });

    	return {
    		c: function create() {
    			locksvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(locksvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			locksvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			locksvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			locksvg.$destroy(detaching);
    		}
    	};
    }

    // (42:6) {#each iconSizeNames as sizeName}
    function create_each_block$2(ctx) {
    	var current;

    	var iconbutton = new IconButton({
    		props: {
    		icon: { size: ctx.sizeName },
    		$$slots: { default: [create_default_slot_6$1] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	return {
    		c: function create() {
    			iconbutton.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(iconbutton, target, anchor);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var iconbutton_changes = {};
    			if (changed.iconSizeNames) iconbutton_changes.icon = { size: ctx.sizeName };
    			if (changed.$$scope) iconbutton_changes.$$scope = { changed, ctx };
    			iconbutton.$set(iconbutton_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			iconbutton.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			iconbutton.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			iconbutton.$destroy(detaching);
    		}
    	};
    }

    // (53:6) <IconButton label="Label">
    function create_default_slot_5$1(ctx) {
    	var current;

    	var locksvg = new LockSVG({ $$inline: true });

    	return {
    		c: function create() {
    			locksvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(locksvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			locksvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			locksvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			locksvg.$destroy(detaching);
    		}
    	};
    }

    // (62:6) <IconButton disabled>
    function create_default_slot_4$1(ctx) {
    	var current;

    	var locksvg = new LockSVG({ $$inline: true });

    	return {
    		c: function create() {
    			locksvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(locksvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			locksvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			locksvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			locksvg.$destroy(detaching);
    		}
    	};
    }

    // (71:6) <IconButton wash>
    function create_default_slot_3$1(ctx) {
    	var current;

    	var locksvg = new LockSVG({ $$inline: true });

    	return {
    		c: function create() {
    			locksvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(locksvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			locksvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			locksvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			locksvg.$destroy(detaching);
    		}
    	};
    }

    // (80:6) <IconButton className="tests-icon-button-themed-icon-button">
    function create_default_slot_2$1(ctx) {
    	var current;

    	var locksvg = new LockSVG({ $$inline: true });

    	return {
    		c: function create() {
    			locksvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(locksvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			locksvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			locksvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			locksvg.$destroy(detaching);
    		}
    	};
    }

    // (89:6) <IconButton className="tests-icon-button-themed-hover" wash label="Hover">
    function create_default_slot_1$2(ctx) {
    	var current;

    	var locksvg = new LockSVG({ $$inline: true });

    	return {
    		c: function create() {
    			locksvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(locksvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			locksvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			locksvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			locksvg.$destroy(detaching);
    		}
    	};
    }

    // (98:6) <IconButton label="ضع الكلمة المناسبة">
    function create_default_slot$4(ctx) {
    	var current;

    	var locksvg = new LockSVG({ $$inline: true });

    	return {
    		c: function create() {
    			locksvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(locksvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			locksvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			locksvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			locksvg.$destroy(detaching);
    		}
    	};
    }

    function create_fragment$e(ctx) {
    	var div24, h1, t1, div2, div0, t3, div1, t4, div5, div3, t6, div4, t7, div8, div6, t9, div7, t10, div11, div9, t12, div10, t13, div14, div12, t15, div13, t16, div17, div15, t18, div16, t19, div20, div18, t21, div19, t22, div23, div21, t24, div22, current;

    	var iconbutton0 = new IconButton({
    		props: {
    		$$slots: { default: [create_default_slot_7] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	var each_value = ctx.iconSizeNames;

    	var each_blocks = [];

    	for (var i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block$2(get_each_context$2(ctx, each_value, i));
    	}

    	function outro_block(i, detaching, local) {
    		if (each_blocks[i]) {
    			if (detaching) {
    				on_outro(() => {
    					each_blocks[i].d(detaching);
    					each_blocks[i] = null;
    				});
    			}

    			each_blocks[i].o(local);
    		}
    	}

    	var iconbutton1 = new IconButton({
    		props: {
    		label: "Label",
    		$$slots: { default: [create_default_slot_5$1] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	var iconbutton2 = new IconButton({
    		props: {
    		disabled: true,
    		$$slots: { default: [create_default_slot_4$1] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	var iconbutton3 = new IconButton({
    		props: {
    		wash: true,
    		$$slots: { default: [create_default_slot_3$1] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	var iconbutton4 = new IconButton({
    		props: {
    		className: "tests-icon-button-themed-icon-button",
    		$$slots: { default: [create_default_slot_2$1] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	var iconbutton5 = new IconButton({
    		props: {
    		className: "tests-icon-button-themed-hover",
    		wash: true,
    		label: "Hover",
    		$$slots: { default: [create_default_slot_1$2] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	var iconbutton6 = new IconButton({
    		props: {
    		label: "ضع الكلمة المناسبة",
    		$$slots: { default: [create_default_slot$4] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	return {
    		c: function create() {
    			div24 = element("div");
    			h1 = element("h1");
    			h1.textContent = "Icon Button";
    			t1 = space();
    			div2 = element("div");
    			div0 = element("div");
    			div0.textContent = "Icon";
    			t3 = space();
    			div1 = element("div");
    			iconbutton0.$$.fragment.c();
    			t4 = space();
    			div5 = element("div");
    			div3 = element("div");
    			div3.textContent = "Option: size";
    			t6 = space();
    			div4 = element("div");

    			for (var i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t7 = space();
    			div8 = element("div");
    			div6 = element("div");
    			div6.textContent = "Option: label";
    			t9 = space();
    			div7 = element("div");
    			iconbutton1.$$.fragment.c();
    			t10 = space();
    			div11 = element("div");
    			div9 = element("div");
    			div9.textContent = "Option: disabled";
    			t12 = space();
    			div10 = element("div");
    			iconbutton2.$$.fragment.c();
    			t13 = space();
    			div14 = element("div");
    			div12 = element("div");
    			div12.textContent = "Option: wash (true)";
    			t15 = space();
    			div13 = element("div");
    			iconbutton3.$$.fragment.c();
    			t16 = space();
    			div17 = element("div");
    			div15 = element("div");
    			div15.textContent = "Themed (color and padding)";
    			t18 = space();
    			div16 = element("div");
    			iconbutton4.$$.fragment.c();
    			t19 = space();
    			div20 = element("div");
    			div18 = element("div");
    			div18.textContent = "Themed (hover color)";
    			t21 = space();
    			div19 = element("div");
    			iconbutton5.$$.fragment.c();
    			t22 = space();
    			div23 = element("div");
    			div21 = element("div");
    			div21.textContent = "Option: label (RTL)";
    			t24 = space();
    			div22 = element("div");
    			iconbutton6.$$.fragment.c();
    			add_location(h1, file$d, 27, 2, 776);
    			div0.className = "example-info";
    			add_location(div0, file$d, 30, 4, 826);
    			div1.className = "example-component";
    			add_location(div1, file$d, 31, 4, 867);
    			div2.className = "example";
    			add_location(div2, file$d, 29, 2, 800);
    			div3.className = "example-info";
    			add_location(div3, file$d, 39, 4, 1007);
    			div4.className = "example-component";
    			add_location(div4, file$d, 40, 4, 1056);
    			div5.className = "example";
    			add_location(div5, file$d, 38, 2, 981);
    			div6.className = "example-info";
    			add_location(div6, file$d, 50, 4, 1282);
    			div7.className = "example-component";
    			add_location(div7, file$d, 51, 4, 1332);
    			div8.className = "example";
    			add_location(div8, file$d, 49, 2, 1256);
    			div9.className = "example-info";
    			add_location(div9, file$d, 59, 4, 1486);
    			div10.className = "example-component";
    			add_location(div10, file$d, 60, 4, 1539);
    			div11.className = "example";
    			add_location(div11, file$d, 58, 2, 1460);
    			div12.className = "example-info";
    			add_location(div12, file$d, 68, 4, 1700);
    			div13.className = "example-component";
    			add_location(div13, file$d, 69, 4, 1756);
    			div14.className = "example interactive";
    			add_location(div14, file$d, 67, 2, 1662);
    			div15.className = "example-info";
    			add_location(div15, file$d, 77, 4, 1901);
    			div16.className = "example-component";
    			add_location(div16, file$d, 78, 4, 1964);
    			div17.className = "example";
    			add_location(div17, file$d, 76, 2, 1875);
    			div18.className = "example-info";
    			add_location(div18, file$d, 86, 4, 2153);
    			div19.className = "example-component";
    			add_location(div19, file$d, 87, 4, 2210);
    			div20.className = "example";
    			add_location(div20, file$d, 85, 2, 2127);
    			div21.className = "example-info";
    			add_location(div21, file$d, 95, 4, 2412);
    			div22.className = "example-component pe-rtl";
    			add_location(div22, file$d, 96, 4, 2468);
    			div23.className = "example";
    			add_location(div23, file$d, 94, 2, 2386);
    			div24.className = "page";
    			add_location(div24, file$d, 25, 0, 754);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, div24, anchor);
    			append(div24, h1);
    			append(div24, t1);
    			append(div24, div2);
    			append(div2, div0);
    			append(div2, t3);
    			append(div2, div1);
    			mount_component(iconbutton0, div1, null);
    			append(div24, t4);
    			append(div24, div5);
    			append(div5, div3);
    			append(div5, t6);
    			append(div5, div4);

    			for (var i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(div4, null);
    			}

    			append(div24, t7);
    			append(div24, div8);
    			append(div8, div6);
    			append(div8, t9);
    			append(div8, div7);
    			mount_component(iconbutton1, div7, null);
    			append(div24, t10);
    			append(div24, div11);
    			append(div11, div9);
    			append(div11, t12);
    			append(div11, div10);
    			mount_component(iconbutton2, div10, null);
    			append(div24, t13);
    			append(div24, div14);
    			append(div14, div12);
    			append(div14, t15);
    			append(div14, div13);
    			mount_component(iconbutton3, div13, null);
    			append(div24, t16);
    			append(div24, div17);
    			append(div17, div15);
    			append(div17, t18);
    			append(div17, div16);
    			mount_component(iconbutton4, div16, null);
    			append(div24, t19);
    			append(div24, div20);
    			append(div20, div18);
    			append(div20, t21);
    			append(div20, div19);
    			mount_component(iconbutton5, div19, null);
    			append(div24, t22);
    			append(div24, div23);
    			append(div23, div21);
    			append(div23, t24);
    			append(div23, div22);
    			mount_component(iconbutton6, div22, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var iconbutton0_changes = {};
    			if (changed.$$scope) iconbutton0_changes.$$scope = { changed, ctx };
    			iconbutton0.$set(iconbutton0_changes);

    			if (changed.iconSizeNames) {
    				each_value = ctx.iconSizeNames;

    				for (var i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context$2(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(changed, child_ctx);
    						each_blocks[i].i(1);
    					} else {
    						each_blocks[i] = create_each_block$2(child_ctx);
    						each_blocks[i].c();
    						each_blocks[i].i(1);
    						each_blocks[i].m(div4, null);
    					}
    				}

    				group_outros();
    				for (; i < each_blocks.length; i += 1) outro_block(i, 1, 1);
    				check_outros();
    			}

    			var iconbutton1_changes = {};
    			if (changed.$$scope) iconbutton1_changes.$$scope = { changed, ctx };
    			iconbutton1.$set(iconbutton1_changes);

    			var iconbutton2_changes = {};
    			if (changed.$$scope) iconbutton2_changes.$$scope = { changed, ctx };
    			iconbutton2.$set(iconbutton2_changes);

    			var iconbutton3_changes = {};
    			if (changed.$$scope) iconbutton3_changes.$$scope = { changed, ctx };
    			iconbutton3.$set(iconbutton3_changes);

    			var iconbutton4_changes = {};
    			if (changed.$$scope) iconbutton4_changes.$$scope = { changed, ctx };
    			iconbutton4.$set(iconbutton4_changes);

    			var iconbutton5_changes = {};
    			if (changed.$$scope) iconbutton5_changes.$$scope = { changed, ctx };
    			iconbutton5.$set(iconbutton5_changes);

    			var iconbutton6_changes = {};
    			if (changed.$$scope) iconbutton6_changes.$$scope = { changed, ctx };
    			iconbutton6.$set(iconbutton6_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			iconbutton0.$$.fragment.i(local);

    			for (var i = 0; i < each_value.length; i += 1) each_blocks[i].i();

    			iconbutton1.$$.fragment.i(local);

    			iconbutton2.$$.fragment.i(local);

    			iconbutton3.$$.fragment.i(local);

    			iconbutton4.$$.fragment.i(local);

    			iconbutton5.$$.fragment.i(local);

    			iconbutton6.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			iconbutton0.$$.fragment.o(local);

    			each_blocks = each_blocks.filter(Boolean);
    			for (let i = 0; i < each_blocks.length; i += 1) outro_block(i, 0, 0);

    			iconbutton1.$$.fragment.o(local);
    			iconbutton2.$$.fragment.o(local);
    			iconbutton3.$$.fragment.o(local);
    			iconbutton4.$$.fragment.o(local);
    			iconbutton5.$$.fragment.o(local);
    			iconbutton6.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div24);
    			}

    			iconbutton0.$destroy();

    			destroy_each(each_blocks, detaching);

    			iconbutton1.$destroy();

    			iconbutton2.$destroy();

    			iconbutton3.$destroy();

    			iconbutton4.$destroy();

    			iconbutton5.$destroy();

    			iconbutton6.$destroy();
    		}
    	};
    }

    function instance$b($$self) {
    	


      addStyle$4(".tests-icon-button-themed-icon-button", {
        padding: 24,
        color_light_background: "purple",
        color_dark_background: "orange",
        color_light: "white"
      });

      addStyle$4(".tests-icon-button-themed-hover", {
        color_light_hover:            "#fff",
        color_light_label_hover:      "#673ab7",
        color_dark_label_hover:       "#fff",
        color_light_background_hover: "#673ab7",
        animation_duration:           "100ms",
      });

      const iconSizeNames = ["small", "regular", "medium", "large"];

    	return { iconSizeNames };
    }

    class IconButton_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$b, create_fragment$e, safe_not_equal, []);
    	}
    }

    /* src/examples/svg/StarSVG.svelte generated by Svelte v3.5.1 */

    const file$e = "src/examples/svg/StarSVG.svelte";

    function create_fragment$f(ctx) {
    	var svg, path;

    	return {
    		c: function create() {
    			svg = svg_element("svg");
    			path = svg_element("path");
    			attr(path, "d", "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z");
    			add_location(path, file$e, 0, 48, 48);
    			attr(svg, "width", "24");
    			attr(svg, "height", "24");
    			attr(svg, "viewBox", "0 0 24 24");
    			add_location(svg, file$e, 0, 0, 0);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, svg, anchor);
    			append(svg, path);
    		},

    		p: noop,
    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(svg);
    			}
    		}
    	};
    }

    class StarSVG$1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, null, create_fragment$f, safe_not_equal, []);
    	}
    }

    /* src/examples/svg/SVG.svelte generated by Svelte v3.5.1 */

    const file$f = "src/examples/svg/SVG.svelte";

    // (32:6) <SVG>
    function create_default_slot_4$2(ctx) {
    	var current;

    	var starsvg = new StarSVG$1({ $$inline: true });

    	return {
    		c: function create() {
    			starsvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(starsvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			starsvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			starsvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			starsvg.$destroy(detaching);
    		}
    	};
    }

    // (42:6) <SVG {style}>
    function create_default_slot_3$2(ctx) {
    	var current;

    	var starsvg = new StarSVG$1({ $$inline: true });

    	return {
    		c: function create() {
    			starsvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(starsvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			starsvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			starsvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			starsvg.$destroy(detaching);
    		}
    	};
    }

    // (51:6) <SVG className="tests-svg-themed-svg">
    function create_default_slot_2$2(ctx) {
    	var current;

    	var starsvg = new StarSVG$1({ $$inline: true });

    	return {
    		c: function create() {
    			starsvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(starsvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			starsvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			starsvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			starsvg.$destroy(detaching);
    		}
    	};
    }

    // (60:6) <SVG>
    function create_default_slot_1$3(ctx) {
    	var current;

    	var starsvg = new StarSVG$1({ $$inline: true });

    	return {
    		c: function create() {
    			starsvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(starsvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			starsvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			starsvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			starsvg.$destroy(detaching);
    		}
    	};
    }

    // (69:6) <SVG className="tests-svg-themed-svg">
    function create_default_slot$5(ctx) {
    	var current;

    	var starsvg = new StarSVG$1({ $$inline: true });

    	return {
    		c: function create() {
    			starsvg.$$.fragment.c();
    		},

    		m: function mount(target, anchor) {
    			mount_component(starsvg, target, anchor);
    			current = true;
    		},

    		i: function intro(local) {
    			if (current) return;
    			starsvg.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			starsvg.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			starsvg.$destroy(detaching);
    		}
    	};
    }

    function create_fragment$g(ctx) {
    	var div15, h1, t1, div2, div0, t3, div1, t4, div5, div3, t6, div4, button, t8, t9, div8, div6, t11, div7, t12, div11, div9, t14, div10, t15, div14, div12, t17, div13, current, dispose;

    	var svg0 = new SVG({
    		props: {
    		$$slots: { default: [create_default_slot_4$2] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	var svg1 = new SVG({
    		props: {
    		style: ctx.style,
    		$$slots: { default: [create_default_slot_3$2] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	var svg2 = new SVG({
    		props: {
    		className: "tests-svg-themed-svg",
    		$$slots: { default: [create_default_slot_2$2] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	var svg3 = new SVG({
    		props: {
    		$$slots: { default: [create_default_slot_1$3] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	var svg4 = new SVG({
    		props: {
    		className: "tests-svg-themed-svg",
    		$$slots: { default: [create_default_slot$5] },
    		$$scope: { ctx }
    	},
    		$$inline: true
    	});

    	return {
    		c: function create() {
    			div15 = element("div");
    			h1 = element("h1");
    			h1.textContent = "SVG";
    			t1 = space();
    			div2 = element("div");
    			div0 = element("div");
    			div0.textContent = "Child content";
    			t3 = space();
    			div1 = element("div");
    			svg0.$$.fragment.c();
    			t4 = space();
    			div5 = element("div");
    			div3 = element("div");
    			div3.textContent = "Style";
    			t6 = space();
    			div4 = element("div");
    			button = element("button");
    			button.textContent = "Toggle";
    			t8 = space();
    			svg1.$$.fragment.c();
    			t9 = space();
    			div8 = element("div");
    			div6 = element("div");
    			div6.textContent = "Themed (color)";
    			t11 = space();
    			div7 = element("div");
    			svg2.$$.fragment.c();
    			t12 = space();
    			div11 = element("div");
    			div9 = element("div");
    			div9.textContent = "Child content -- dark tone";
    			t14 = space();
    			div10 = element("div");
    			svg3.$$.fragment.c();
    			t15 = space();
    			div14 = element("div");
    			div12 = element("div");
    			div12.textContent = "Themed (color) -- dark tone";
    			t17 = space();
    			div13 = element("div");
    			svg4.$$.fragment.c();
    			add_location(h1, file$f, 26, 2, 524);
    			div0.className = "example-info";
    			add_location(div0, file$f, 29, 4, 566);
    			div1.className = "example-component";
    			add_location(div1, file$f, 30, 4, 616);
    			div2.className = "example";
    			add_location(div2, file$f, 28, 2, 540);
    			div3.className = "example-info";
    			add_location(div3, file$f, 38, 4, 754);
    			add_location(button, file$f, 40, 6, 834);
    			div4.className = "example-component";
    			add_location(div4, file$f, 39, 4, 796);
    			div5.className = "example interactive";
    			add_location(div5, file$f, 37, 2, 716);
    			div6.className = "example-info";
    			add_location(div6, file$f, 48, 4, 983);
    			div7.className = "example-component";
    			add_location(div7, file$f, 49, 4, 1034);
    			div8.className = "example";
    			add_location(div8, file$f, 47, 2, 957);
    			div9.className = "example-info";
    			add_location(div9, file$f, 57, 4, 1206);
    			div10.className = "example-component";
    			add_location(div10, file$f, 58, 4, 1269);
    			div11.className = "example pe-dark-tone";
    			add_location(div11, file$f, 56, 2, 1167);
    			div12.className = "example-info";
    			add_location(div12, file$f, 66, 4, 1408);
    			div13.className = "example-component";
    			add_location(div13, file$f, 67, 4, 1472);
    			div14.className = "example pe-dark-tone";
    			add_location(div14, file$f, 65, 2, 1369);
    			div15.className = "page";
    			add_location(div15, file$f, 24, 0, 502);
    			dispose = listen(button, "click", ctx.toggleStyle);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, div15, anchor);
    			append(div15, h1);
    			append(div15, t1);
    			append(div15, div2);
    			append(div2, div0);
    			append(div2, t3);
    			append(div2, div1);
    			mount_component(svg0, div1, null);
    			append(div15, t4);
    			append(div15, div5);
    			append(div5, div3);
    			append(div5, t6);
    			append(div5, div4);
    			append(div4, button);
    			append(div4, t8);
    			mount_component(svg1, div4, null);
    			append(div15, t9);
    			append(div15, div8);
    			append(div8, div6);
    			append(div8, t11);
    			append(div8, div7);
    			mount_component(svg2, div7, null);
    			append(div15, t12);
    			append(div15, div11);
    			append(div11, div9);
    			append(div11, t14);
    			append(div11, div10);
    			mount_component(svg3, div10, null);
    			append(div15, t15);
    			append(div15, div14);
    			append(div14, div12);
    			append(div14, t17);
    			append(div14, div13);
    			mount_component(svg4, div13, null);
    			current = true;
    		},

    		p: function update(changed, ctx) {
    			var svg0_changes = {};
    			if (changed.$$scope) svg0_changes.$$scope = { changed, ctx };
    			svg0.$set(svg0_changes);

    			var svg1_changes = {};
    			if (changed.style) svg1_changes.style = ctx.style;
    			if (changed.$$scope) svg1_changes.$$scope = { changed, ctx };
    			svg1.$set(svg1_changes);

    			var svg2_changes = {};
    			if (changed.$$scope) svg2_changes.$$scope = { changed, ctx };
    			svg2.$set(svg2_changes);

    			var svg3_changes = {};
    			if (changed.$$scope) svg3_changes.$$scope = { changed, ctx };
    			svg3.$set(svg3_changes);

    			var svg4_changes = {};
    			if (changed.$$scope) svg4_changes.$$scope = { changed, ctx };
    			svg4.$set(svg4_changes);
    		},

    		i: function intro(local) {
    			if (current) return;
    			svg0.$$.fragment.i(local);

    			svg1.$$.fragment.i(local);

    			svg2.$$.fragment.i(local);

    			svg3.$$.fragment.i(local);

    			svg4.$$.fragment.i(local);

    			current = true;
    		},

    		o: function outro(local) {
    			svg0.$$.fragment.o(local);
    			svg1.$$.fragment.o(local);
    			svg2.$$.fragment.o(local);
    			svg3.$$.fragment.o(local);
    			svg4.$$.fragment.o(local);
    			current = false;
    		},

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div15);
    			}

    			svg0.$destroy();

    			svg1.$destroy();

    			svg2.$destroy();

    			svg3.$destroy();

    			svg4.$destroy();

    			dispose();
    		}
    	};
    }

    let initialStyle = "color: inherit";

    function instance$c($$self, $$props, $$invalidate) {
    	

      let showStyle = false;
      let style = undefined;

      const toggleStyle = () => {
        showStyle = !showStyle;
        if (showStyle) {
          $$invalidate('style', style = "color: #EF6C00");
        } else {
          $$invalidate('style', style = initialStyle);
        }
      };

      addStyle$5(".tests-svg-themed-svg", {
        color_light: "#0D47A1",
        color_dark: "orange"
      });

    	return { style, toggleStyle };
    }

    class SVG_1 extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$c, create_fragment$g, safe_not_equal, []);
    	}
    }

    /* src/Home.svelte generated by Svelte v3.5.1 */

    const file$g = "src/Home.svelte";

    function create_fragment$h(ctx) {
    	var div, t0, ul, li0, a0, link_action, t2, li1, a1, link_action_1, t4, li2, a2, link_action_2, t6, li3, a3, link_action_3, t8, li4, a4, link_action_4;

    	return {
    		c: function create() {
    			div = element("div");
    			t0 = text("Home\n  ");
    			ul = element("ul");
    			li0 = element("li");
    			a0 = element("a");
    			a0.textContent = "Button";
    			t2 = space();
    			li1 = element("li");
    			a1 = element("a");
    			a1.textContent = "Icon";
    			t4 = space();
    			li2 = element("li");
    			a2 = element("a");
    			a2.textContent = "Icon Button";
    			t6 = space();
    			li3 = element("li");
    			a3 = element("a");
    			a3.textContent = "Shadow";
    			t8 = space();
    			li4 = element("li");
    			a4 = element("a");
    			a4.textContent = "SVG";
    			a0.href = "/button";
    			add_location(a0, file$g, 8, 6, 99);
    			add_location(li0, file$g, 7, 4, 88);
    			a1.href = "/icon";
    			add_location(a1, file$g, 11, 6, 162);
    			add_location(li1, file$g, 10, 4, 151);
    			a2.href = "/icon-button";
    			add_location(a2, file$g, 14, 6, 221);
    			add_location(li2, file$g, 13, 4, 210);
    			a3.href = "/shadow";
    			add_location(a3, file$g, 17, 6, 294);
    			add_location(li3, file$g, 16, 4, 283);
    			a4.href = "/svg";
    			add_location(a4, file$g, 20, 6, 357);
    			add_location(li4, file$g, 19, 4, 346);
    			add_location(ul, file$g, 6, 2, 79);
    			add_location(div, file$g, 4, 0, 64);
    		},

    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},

    		m: function mount(target, anchor) {
    			insert(target, div, anchor);
    			append(div, t0);
    			append(div, ul);
    			append(ul, li0);
    			append(li0, a0);
    			link_action = link.call(null, a0) || {};
    			append(ul, t2);
    			append(ul, li1);
    			append(li1, a1);
    			link_action_1 = link.call(null, a1) || {};
    			append(ul, t4);
    			append(ul, li2);
    			append(li2, a2);
    			link_action_2 = link.call(null, a2) || {};
    			append(ul, t6);
    			append(ul, li3);
    			append(li3, a3);
    			link_action_3 = link.call(null, a3) || {};
    			append(ul, t8);
    			append(ul, li4);
    			append(li4, a4);
    			link_action_4 = link.call(null, a4) || {};
    		},

    		p: noop,
    		i: noop,
    		o: noop,

    		d: function destroy(detaching) {
    			if (detaching) {
    				detach(div);
    			}

    			if (link_action && typeof link_action.destroy === 'function') link_action.destroy();
    			if (link_action_1 && typeof link_action_1.destroy === 'function') link_action_1.destroy();
    			if (link_action_2 && typeof link_action_2.destroy === 'function') link_action_2.destroy();
    			if (link_action_3 && typeof link_action_3.destroy === 'function') link_action_3.destroy();
    			if (link_action_4 && typeof link_action_4.destroy === 'function') link_action_4.destroy();
    		}
    	};
    }

    class Home extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, null, create_fragment$h, safe_not_equal, []);
    	}
    }

    var routes = {
      "/": Home,
      "/shadow": Shadow_1,
      "/button": Button_1,
      "/icon": Icon_1,
      "/icon-button": IconButton_1,
      "/svg": SVG_1,
    };

    /* src/App.svelte generated by Svelte v3.5.1 */

    function create_fragment$i(ctx) {
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
    		init(this, options, null, create_fragment$i, safe_not_equal, []);
    	}
    }

    const app = new App({
    	target: document.body,
    	props: {},
    });

    return app;

}());
//# sourceMappingURL=app.js.map
