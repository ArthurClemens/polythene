function noop() { }
function assign(tar, src) {
    for (const k in src)
        tar[k] = src[k];
    return tar;
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
function add_binding_callback(fn) {
    binding_callbacks.push(fn);
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

var isClient = typeof document !== "undefined";
var isServer = !isClient;
var iconDropdownDown = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"dd-down-svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>";

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

function noop$1() { }
function assign$1(tar, src) {
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function run$1(fn) {
    return fn();
}
function blank_object$1() {
    return Object.create(null);
}
function run_all$1(fns) {
    fns.forEach(run$1);
}
function is_function$1(thing) {
    return typeof thing === 'function';
}
function safe_not_equal$1(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function create_slot$1(definition, ctx, fn) {
    if (definition) {
        const slot_ctx = get_slot_context$1(definition, ctx, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context$1(definition, ctx, fn) {
    return definition[1]
        ? assign$1({}, assign$1(ctx.$$scope.ctx, definition[1](fn ? fn(ctx) : {})))
        : ctx.$$scope.ctx;
}
function get_slot_changes$1(definition, ctx, changed, fn) {
    return definition[1]
        ? assign$1({}, assign$1(ctx.$$scope.changed || {}, definition[1](fn ? fn(changed) : {})))
        : ctx.$$scope.changed || {};
}

function append$1(target, node) {
    target.appendChild(node);
}
function insert$1(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach$1(node) {
    node.parentNode.removeChild(node);
}
function element$1(name) {
    return document.createElement(name);
}
function text$1(data) {
    return document.createTextNode(data);
}
function space$1() {
    return text$1(' ');
}
function attr$1(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else
        node.setAttribute(attribute, value);
}
function set_attributes$1(node, attributes) {
    for (const key in attributes) {
        if (key === 'style') {
            node.style.cssText = attributes[key];
        }
        else if (key in node) {
            node[key] = attributes[key];
        }
        else {
            attr$1(node, key, attributes[key]);
        }
    }
}
function children$1(element) {
    return Array.from(element.childNodes);
}
function set_data$1(text, data) {
    data = '' + data;
    if (text.data !== data)
        text.data = data;
}

let current_component$1;
function set_current_component$1(component) {
    current_component$1 = component;
}

const dirty_components$1 = [];
const resolved_promise$1 = Promise.resolve();
let update_scheduled$1 = false;
const binding_callbacks$1 = [];
const render_callbacks$1 = [];
const flush_callbacks$1 = [];
function schedule_update$1() {
    if (!update_scheduled$1) {
        update_scheduled$1 = true;
        resolved_promise$1.then(flush$1);
    }
}
function add_render_callback$1(fn) {
    render_callbacks$1.push(fn);
}
function flush$1() {
    const seen_callbacks = new Set();
    do {
        // first, call beforeUpdate functions
        // and update components
        while (dirty_components$1.length) {
            const component = dirty_components$1.shift();
            set_current_component$1(component);
            update$1(component.$$);
        }
        while (binding_callbacks$1.length)
            binding_callbacks$1.shift()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        while (render_callbacks$1.length) {
            const callback = render_callbacks$1.pop();
            if (!seen_callbacks.has(callback)) {
                callback();
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
            }
        }
    } while (dirty_components$1.length);
    while (flush_callbacks$1.length) {
        flush_callbacks$1.pop()();
    }
    update_scheduled$1 = false;
}
function update$1($$) {
    if ($$.fragment) {
        $$.update($$.dirty);
        run_all$1($$.before_render);
        $$.fragment.p($$.dirty, $$.ctx);
        $$.dirty = null;
        $$.after_render.forEach(add_render_callback$1);
    }
}
let outros$1;
function group_outros$1() {
    outros$1 = {
        remaining: 0,
        callbacks: []
    };
}
function check_outros$1() {
    if (!outros$1.remaining) {
        run_all$1(outros$1.callbacks);
    }
}
function on_outro$1(callback) {
    outros$1.callbacks.push(callback);
}

function get_spread_update$1(levels, updates) {
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
function mount_component$1(component, target, anchor) {
    const { fragment, on_mount, on_destroy, after_render } = component.$$;
    fragment.m(target, anchor);
    // onMount happens after the initial afterUpdate. Because
    // afterUpdate callbacks happen in reverse order (inner first)
    // we schedule onMount callbacks before afterUpdate callbacks
    add_render_callback$1(() => {
        const new_on_destroy = on_mount.map(run$1).filter(is_function$1);
        if (on_destroy) {
            on_destroy.push(...new_on_destroy);
        }
        else {
            // Edge case - component was destroyed immediately,
            // most likely as a result of a binding initialising
            run_all$1(new_on_destroy);
        }
        component.$$.on_mount = [];
    });
    after_render.forEach(add_render_callback$1);
}
function destroy$1(component, detaching) {
    if (component.$$) {
        run_all$1(component.$$.on_destroy);
        component.$$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        component.$$.on_destroy = component.$$.fragment = null;
        component.$$.ctx = {};
    }
}
function make_dirty$1(component, key) {
    if (!component.$$.dirty) {
        dirty_components$1.push(component);
        schedule_update$1();
        component.$$.dirty = blank_object$1();
    }
    component.$$.dirty[key] = true;
}
function init$1(component, options, instance, create_fragment, not_equal$$1, prop_names) {
    const parent_component = current_component$1;
    set_current_component$1(component);
    const props = options.props || {};
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props: prop_names,
        update: noop$1,
        not_equal: not_equal$$1,
        bound: blank_object$1(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        before_render: [],
        after_render: [],
        context: new Map(parent_component ? parent_component.$$.context : []),
        // everything else
        callbacks: blank_object$1(),
        dirty: null
    };
    let ready = false;
    $$.ctx = instance
        ? instance(component, props, (key, value) => {
            if ($$.ctx && not_equal$$1($$.ctx[key], $$.ctx[key] = value)) {
                if ($$.bound[key])
                    $$.bound[key](value);
                if (ready)
                    make_dirty$1(component, key);
            }
        })
        : props;
    $$.update();
    ready = true;
    run_all$1($$.before_render);
    $$.fragment = create_fragment($$.ctx);
    if (options.target) {
        if (options.hydrate) {
            $$.fragment.l(children$1(options.target));
        }
        else {
            $$.fragment.c();
        }
        if (options.intro && component.$$.fragment.i)
            component.$$.fragment.i();
        mount_component$1(component, options.target, options.anchor);
        flush$1();
    }
    set_current_component$1(parent_component);
}
class SvelteComponent$1 {
    $destroy() {
        destroy$1(this, true);
        this.$destroy = noop$1;
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

/* Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-svelte-shadow/src/Shadow.svelte generated by Svelte v3.4.4 */

const get_after_slot_changes = ({}) => ({});
const get_after_slot_context = ({}) => ({});

const get_before_slot_changes = ({}) => ({});
const get_before_slot_context = ({}) => ({});

// (32:2) {:else}
function create_else_block(ctx) {
	var current;

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot$1(default_slot_1, ctx, null);

	return {
		c() {
			if (default_slot) default_slot.c();
		},

		l(nodes) {
			if (default_slot) default_slot.l(nodes);
		},

		m(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},

		p(changed, ctx) {
			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes$1(default_slot_1, ctx, changed, null), get_slot_context$1(default_slot_1, ctx, null));
			}
		},

		i(local) {
			if (current) return;
			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o(local) {
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (30:2) {#if content}
function create_if_block(ctx) {
	var t;

	return {
		c() {
			t = text$1(ctx.content);
		},

		m(target, anchor) {
			insert$1(target, t, anchor);
		},

		p(changed, ctx) {
			if (changed.content) {
				set_data$1(t, ctx.content);
			}
		},

		i: noop$1,
		o: noop$1,

		d(detaching) {
			if (detaching) {
				detach$1(t);
			}
		}
	};
}

function create_fragment(ctx) {
	var div2, t0, current_block_type_index, if_block, t1, t2, div0, div0_class_value, t3, div1, div1_class_value, current;

	const before_slot_1 = ctx.$$slots.before;
	const before_slot = create_slot$1(before_slot_1, ctx, get_before_slot_context);

	var if_block_creators = [
		create_if_block,
		create_else_block
	];

	var if_blocks = [];

	function select_block_type(ctx) {
		if (ctx.content) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const after_slot_1 = ctx.$$slots.after;
	const after_slot = create_slot$1(after_slot_1, ctx, get_after_slot_context);

	var div2_levels = [
		{ class: ctx.R_classNames },
		{ style: ctx.style },
		{ 'data-test-id': ctx.testId }
	];

	var div2_data = {};
	for (var i = 0; i < div2_levels.length; i += 1) {
		div2_data = assign$1(div2_data, div2_levels[i]);
	}

	return {
		c() {
			div2 = element$1("div");

			if (before_slot) before_slot.c();
			t0 = space$1();
			if_block.c();
			t1 = space$1();

			if (after_slot) after_slot.c();
			t2 = space$1();
			div0 = element$1("div");
			t3 = space$1();
			div1 = element$1("div");

			div0.className = div0_class_value = shadowClasses.bottomShadow;
			div1.className = div1_class_value = shadowClasses.topShadow;
			set_attributes$1(div2, div2_data);
		},

		l(nodes) {
			if (before_slot) before_slot.l(div2_nodes);

			if (after_slot) after_slot.l(div2_nodes);
		},

		m(target, anchor) {
			insert$1(target, div2, anchor);

			if (before_slot) {
				before_slot.m(div2, null);
			}

			append$1(div2, t0);
			if_blocks[current_block_type_index].m(div2, null);
			append$1(div2, t1);

			if (after_slot) {
				after_slot.m(div2, null);
			}

			append$1(div2, t2);
			append$1(div2, div0);
			append$1(div2, t3);
			append$1(div2, div1);
			current = true;
		},

		p(changed, ctx) {
			if (before_slot && before_slot.p && changed.$$scope) {
				before_slot.p(get_slot_changes$1(before_slot_1, ctx, changed, get_before_slot_changes), get_slot_context$1(before_slot_1, ctx, get_before_slot_context));
			}

			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				group_outros$1();
				on_outro$1(() => {
					if_blocks[previous_block_index].d(1);
					if_blocks[previous_block_index] = null;
				});
				if_block.o(1);
				check_outros$1();

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}
				if_block.i(1);
				if_block.m(div2, t1);
			}

			if (after_slot && after_slot.p && changed.$$scope) {
				after_slot.p(get_slot_changes$1(after_slot_1, ctx, changed, get_after_slot_changes), get_slot_context$1(after_slot_1, ctx, get_after_slot_context));
			}

			set_attributes$1(div2, get_spread_update$1(div2_levels, [
				(changed.R_classNames) && { class: ctx.R_classNames },
				(changed.style) && { style: ctx.style },
				(changed.testId) && { 'data-test-id': ctx.testId }
			]));
		},

		i(local) {
			if (current) return;
			if (before_slot && before_slot.i) before_slot.i(local);
			if (if_block) if_block.i();
			if (after_slot && after_slot.i) after_slot.i(local);
			current = true;
		},

		o(local) {
			if (before_slot && before_slot.o) before_slot.o(local);
			if (if_block) if_block.o();
			if (after_slot && after_slot.o) after_slot.o(local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				detach$1(div2);
			}

			if (before_slot) before_slot.d(detaching);
			if_blocks[current_block_type_index].d();

			if (after_slot) after_slot.d(detaching);
		}
	};
}

const getShadowDepthClass$1 = getShadowDepthClass; // workaround

function instance($$self, $$props, $$invalidate) {
	// Common vars
  let { className = "", content = undefined, style = undefined, testId = undefined, shadowDepth = 1, animated = false } = $$props;

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('className' in $$props) $$invalidate('className', className = $$props.className);
		if ('content' in $$props) $$invalidate('content', content = $$props.content);
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
		content,
		style,
		testId,
		shadowDepth,
		animated,
		R_classNames,
		$$slots,
		$$scope
	};
}

class Shadow extends SvelteComponent$1 {
	constructor(options) {
		super();
		init$1(this, options, instance, create_fragment, safe_not_equal$1, ["className", "content", "style", "testId", "shadowDepth", "animated"]);
	}
}

var classes = {
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

/* src/TextLabel.svelte generated by Svelte v3.4.4 */

function create_fragment$1(ctx) {
	var div1, div0, t, div0_class_value, div1_class_value;

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			t = text(ctx.label);
			div0.className = div0_class_value = classes.textLabel;
			div0.style.cssText = ctx.textStyle;
			div1.className = div1_class_value = classes.label;
		},

		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			append(div0, t);
		},

		p(changed, ctx) {
			if (changed.label) {
				set_data(t, ctx.label);
			}

			if (changed.textStyle) {
				div0.style.cssText = ctx.textStyle;
			}
		},

		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(div1);
			}
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	let { label = "", textStyle = undefined } = $$props;

	$$self.$set = $$props => {
		if ('label' in $$props) $$invalidate('label', label = $$props.label);
		if ('textStyle' in $$props) $$invalidate('textStyle', textStyle = $$props.textStyle);
	};

	return { label, textStyle };
}

class TextLabel extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, create_fragment$1, safe_not_equal, ["label", "textStyle"]);
	}
}

/* src/Button.svelte generated by Svelte v3.4.4 */

const get_after_slot_changes$1 = ({}) => ({});
const get_after_slot_context$1 = ({}) => ({});

const get_label_slot_changes = ({}) => ({});
const get_label_slot_context = ({}) => ({});

const get_before_slot_changes$1 = ({}) => ({});
const get_before_slot_context$1 = ({}) => ({});

// (147:4) {#if disabled || _noInk}
function create_if_block_3(ctx) {
	var div;

	return {
		c() {
			div = element("div");
			div.className = "pe-ripple";
		},

		m(target, anchor) {
			insert(target, div, anchor);
		},

		d(detaching) {
			if (detaching) {
				detach(div);
			}
		}
	};
}

// (160:4) {:else}
function create_else_block$1(ctx) {
	var current;

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	return {
		c() {
			if (default_slot) default_slot.c();
		},

		l(nodes) {
			if (default_slot) default_slot.l(nodes);
		},

		m(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},

		p(changed, ctx) {
			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}
		},

		i(local) {
			if (current) return;
			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o(local) {
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (158:34) 
function create_if_block_2(ctx) {
	var current;

	var textlabel = new TextLabel({
		props: {
		label: ctx.label,
		textStyle: ctx.textStyle
	}
	});

	return {
		c() {
			textlabel.$$.fragment.c();
		},

		m(target, anchor) {
			mount_component(textlabel, target, anchor);
			current = true;
		},

		p(changed, ctx) {
			var textlabel_changes = {};
			if (changed.label) textlabel_changes.label = ctx.label;
			if (changed.textStyle) textlabel_changes.textStyle = ctx.textStyle;
			textlabel.$set(textlabel_changes);
		},

		i(local) {
			if (current) return;
			textlabel.$$.fragment.i(local);

			current = true;
		},

		o(local) {
			textlabel.$$.fragment.o(local);
			current = false;
		},

		d(detaching) {
			textlabel.$destroy(detaching);
		}
	};
}

// (156:4) {#if content}
function create_if_block_1(ctx) {
	var t;

	return {
		c() {
			t = text(ctx.content);
		},

		m(target, anchor) {
			insert(target, t, anchor);
		},

		p(changed, ctx) {
			if (changed.content) {
				set_data(t, ctx.content);
			}
		},

		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

// (165:4) {#if dropdown}
function create_if_block$1(ctx) {
	var t;

	return {
		c() {
			t = text(iconDropdownDown);
		},

		m(target, anchor) {
			insert(target, t, anchor);
		},

		p: noop,

		d(detaching) {
			if (detaching) {
				detach(t);
			}
		}
	};
}

function create_fragment$2(ctx) {
	var a, t0, div2, t1, t2, div1, t3, t4, current_block_type_index, if_block1, t5, t6, current, dispose;

	const before_slot_1 = ctx.$$slots.before;
	const before_slot = create_slot(before_slot_1, ctx, get_before_slot_context$1);

	var shadow = new Shadow({
		props: {
		shadowDepth: ctx._shadowDepth,
		animated: true
	}
	});

	var if_block0 = (ctx.disabled || ctx._noInk) && create_if_block_3(ctx);

	const label_slot_1 = ctx.$$slots.label;
	const label_slot = create_slot(label_slot_1, ctx, get_label_slot_context);

	var if_block_creators = [
		create_if_block_1,
		create_if_block_2,
		create_else_block$1
	];

	var if_blocks = [];

	function select_block_type(ctx) {
		if (ctx.content) return 0;
		if (ctx.label !== ctx.undefined) return 1;
		return 2;
	}

	current_block_type_index = select_block_type(ctx);
	if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	var if_block2 = (ctx.dropdown) && create_if_block$1(ctx);

	const after_slot_1 = ctx.$$slots.after;
	const after_slot = create_slot(after_slot_1, ctx, get_after_slot_context$1);

	var a_levels = [
		{ href: null },
		ctx.url,
		{ class: ctx.R_classNames },
		{ style: ctx.style },
		{ tabindex: ctx._tabindex },
		{ 'data-test-id': ctx.testId }
	];

	var a_data = {};
	for (var i = 0; i < a_levels.length; i += 1) {
		a_data = assign(a_data, a_levels[i]);
	}

	return {
		c() {
			a = element("a");

			if (before_slot) before_slot.c();
			t0 = space();
			div2 = element("div");
			shadow.$$.fragment.c();
			t1 = space();
			if (if_block0) if_block0.c();
			t2 = space();
			div1 = element("div");
			div1.innerHTML = `<div class="pe-button__wash-color"></div>`;
			t3 = space();

			if (label_slot) label_slot.c();
			t4 = space();
			if_block1.c();
			t5 = space();
			if (if_block2) if_block2.c();
			t6 = space();

			if (after_slot) after_slot.c();

			div1.className = "pe-button__wash";

			div2.className = "pe-button__content";

			set_attributes(a, a_data);

			dispose = [
				listen(a, "mousedown", ctx.onMouseDown),
				listen(a, "keyup", ctx.onKeyUp),
				listen(a, "click", ctx.onClick)
			];
		},

		l(nodes) {
			if (before_slot) before_slot.l(a_nodes);

			if (label_slot) label_slot.l(div2_nodes);

			if (after_slot) after_slot.l(a_nodes);
		},

		m(target, anchor) {
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

			add_binding_callback(() => ctx.a_binding(a, null));
			current = true;
		},

		p(changed, ctx) {
			if (before_slot && before_slot.p && changed.$$scope) {
				before_slot.p(get_slot_changes(before_slot_1, ctx, changed, get_before_slot_changes$1), get_slot_context(before_slot_1, ctx, get_before_slot_context$1));
			}

			var shadow_changes = {};
			if (changed._shadowDepth) shadow_changes.shadowDepth = ctx._shadowDepth;
			shadow.$set(shadow_changes);

			if (ctx.disabled || ctx._noInk) {
				if (!if_block0) {
					if_block0 = create_if_block_3(ctx);
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
				} else {
					if_block2 = create_if_block$1(ctx);
					if_block2.c();
					if_block2.m(div2, null);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}

			if (after_slot && after_slot.p && changed.$$scope) {
				after_slot.p(get_slot_changes(after_slot_1, ctx, changed, get_after_slot_changes$1), get_slot_context(after_slot_1, ctx, get_after_slot_context$1));
			}

			if (changed.items) {
				ctx.a_binding(null, a);
				ctx.a_binding(a, null);
			}

			set_attributes(a, get_spread_update(a_levels, [
				{ href: null },
				(changed.url) && ctx.url,
				(changed.R_classNames) && { class: ctx.R_classNames },
				(changed.style) && { style: ctx.style },
				(changed._tabindex) && { tabindex: ctx._tabindex },
				(changed.testId) && { 'data-test-id': ctx.testId }
			]));
		},

		i(local) {
			if (current) return;
			if (before_slot && before_slot.i) before_slot.i(local);

			shadow.$$.fragment.i(local);

			if (label_slot && label_slot.i) label_slot.i(local);
			if (if_block1) if_block1.i();
			if (after_slot && after_slot.i) after_slot.i(local);
			current = true;
		},

		o(local) {
			if (before_slot && before_slot.o) before_slot.o(local);
			shadow.$$.fragment.o(local);
			if (label_slot && label_slot.o) label_slot.o(local);
			if (if_block1) if_block1.o();
			if (after_slot && after_slot.o) after_slot.o(local);
			current = false;
		},

		d(detaching) {
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
			ctx.a_binding(null, a);
			run_all(dispose);
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	let $isInactive;

	

  // Store
  const isInactive = writable(false); subscribe($$self, isInactive, $$value => { $isInactive = $$value; $$invalidate('$isInactive', $isInactive); });

  // DOM bindings
  let domElement;

  // Common vars
  let { className = "", content = undefined, style = undefined, testId = undefined, tone = "", animateOnTap = undefined, border = false, borders = false, contained = false, disabled = false, dropdown = undefined, extraWide = false, events = {}, highLabel = false, inactivate = false, inactive = false, ink = false, label = undefined, parentClassName = "", raised = false, selected = false, separatorAtStart = false, shadowDepth = undefined, tabindex = 0, textStyle = undefined, url = { href: "javascript:false" }, wash = undefined } = $$props;

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
    console.log("domElement", domElement);
    console.log("document.activeElement", document.activeElement);
    document.activeElement === domElement && document.activeElement.blur();
    handleInactivate(e);
    onClickHandler(e);
  };

  const handleMouseLeave = e => {
    domElement.blur();
    domElement.removeEventListener("mouseleave", handleMouseLeave);
  };

  const onMouseDown = e => {
    domElement &&
      domElement.addEventListener &&
      domElement.addEventListener("mouseleave", handleMouseLeave);
    // props.events && props.events[a.onmousedown] && props.events[a.onmousedown](e)
  };

  const onKeyUp = e => {
    if (e.keyCode === 13 && document.activeElement === domElement) {
      document.activeElement.blur();
      if (onKeyUpHandler) {
        onKeyUpHandler(e);
      }
    }
    // props.events && props.events[a.onkeyup] && props.events[a.onkeyup](e)
  };

  const doesAnimateOnTap = animateOnTap !== false ? true : false;
  const hasHover = !disabled && !selected && (raised ? wash : wash !== false);
  const _shadowDepth = raised
    ? shadowDepth !== undefined
      ? parseInt(shadowDepth, 10)
      : 1
    : 0;
  const _noInk = ink !== undefined && ink === false;
  const _tabindex = disabled || inactive ? -1 : tabindex || 0;

	let { $$slots = {}, $$scope } = $$props;

	function a_binding($$node, check) {
		domElement = $$node;
		$$invalidate('domElement', domElement);
	}

	$$self.$set = $$props => {
		if ('className' in $$props) $$invalidate('className', className = $$props.className);
		if ('content' in $$props) $$invalidate('content', content = $$props.content);
		if ('style' in $$props) $$invalidate('style', style = $$props.style);
		if ('testId' in $$props) $$invalidate('testId', testId = $$props.testId);
		if ('tone' in $$props) $$invalidate('tone', tone = $$props.tone);
		if ('animateOnTap' in $$props) $$invalidate('animateOnTap', animateOnTap = $$props.animateOnTap);
		if ('border' in $$props) $$invalidate('border', border = $$props.border);
		if ('borders' in $$props) $$invalidate('borders', borders = $$props.borders);
		if ('contained' in $$props) $$invalidate('contained', contained = $$props.contained);
		if ('disabled' in $$props) $$invalidate('disabled', disabled = $$props.disabled);
		if ('dropdown' in $$props) $$invalidate('dropdown', dropdown = $$props.dropdown);
		if ('extraWide' in $$props) $$invalidate('extraWide', extraWide = $$props.extraWide);
		if ('events' in $$props) $$invalidate('events', events = $$props.events);
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

	let R_inactive, R_classNames;

	$$self.$$.update = ($$dirty = { inactive: 1, $isInactive: 1, parentClassName: 1, contained: 1, raised: 1, selected: 1, highLabel: 1, extraWide: 1, disabled: 1, R_inactive: 1, separatorAtStart: 1, border: 1, borders: 1, dropdown: 1, tone: 1, className: 1 }) => {
		if ($$dirty.inactive || $$dirty.$isInactive) { $$invalidate('R_inactive', R_inactive = inactive || $isInactive); }
		if ($$dirty.parentClassName || $$dirty.contained || $$dirty.raised || $$dirty.selected || $$dirty.highLabel || $$dirty.extraWide || $$dirty.disabled || $$dirty.R_inactive || $$dirty.separatorAtStart || $$dirty.border || $$dirty.borders || $$dirty.dropdown || $$dirty.tone || $$dirty.className) { $$invalidate('R_classNames', R_classNames = [
        classes.super,
        parentClassName || classes.component,
        contained ? classes.contained : undefined,
        // Raised button classes
        raised ? classes.contained : undefined,
        raised ? classes.raised : undefined,
        raised && doesAnimateOnTap ? shadowClasses.with_active_shadow : undefined,
        raised && doesAnimateOnTap
          ? getShadowDepthClass$1(_shadowDepth + 1)
          : undefined,
        //
        hasHover ? classes.hasHover : undefined,
        selected ? classes.selected : undefined,
        highLabel ? classes.highLabel : undefined,
        extraWide ? classes.extraWide : undefined,
        disabled ? classes.disabled : undefined,
        R_inactive ? classes.inactive : undefined,
        separatorAtStart ? classes.separatorAtStart : undefined,
        border || borders ? classes.border : undefined,
        dropdown ? classes.hasDropdown : undefined,
        !!dropdown
          ? dropdown.open
            ? classes.dropdownOpen
            : classes.dropdownClosed
          : undefined,
        tone === "dark" ? "pe-dark-tone" : undefined,
        tone === "light" ? "pe-light-tone" : undefined,
        className
      ].join(" ")); }
	};

	return {
		isInactive,
		domElement,
		className,
		content,
		style,
		testId,
		tone,
		animateOnTap,
		border,
		borders,
		contained,
		disabled,
		dropdown,
		extraWide,
		events,
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
		onClick,
		onMouseDown,
		onKeyUp,
		_shadowDepth,
		_noInk,
		_tabindex,
		undefined,
		R_classNames,
		a_binding,
		$$slots,
		$$scope
	};
}

class Button extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$2, create_fragment$2, safe_not_equal, ["className", "content", "style", "testId", "tone", "animateOnTap", "border", "borders", "contained", "disabled", "dropdown", "extraWide", "events", "highLabel", "inactivate", "inactive", "ink", "label", "parentClassName", "raised", "selected", "separatorAtStart", "shadowDepth", "tabindex", "textStyle", "url", "wash"]);
	}
}

export default Button;
//# sourceMappingURL=polythene-svelte-button.mjs.map
