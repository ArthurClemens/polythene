function noop() { }
function assign(tar, src) {
    // @ts-ignore
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

var url = 'bjectSymhasOwnProp-0123456789ABCDEFGHIJKLMNQRTUVWXYZ_dfgiklquvxz';

/**
 * Generate URL-friendly unique ID. This method use non-secure predictable
 * random generator.
 *
 * By default, ID will have 21 symbols to have a collision probability similar
 * to UUID v4.
 *
 * @param {number} [size=21] The number of symbols in ID.
 *
 * @return {string} Random string.
 *
 * @example
 * const nanoid = require('nanoid/non-secure')
 * model.id = nanoid() //=> "Uakgb_J5m9g-0JDMbcJqL"
 *
 * @name nonSecure
 * @function
 */
var nonSecure = function (size) {
  size = size || 21;
  var id = '';
  while (0 < size--) {
    id += url[Math.random() * 64 | 0];
  }
  return id
};

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

// @ts-check
/**
 * @type {{[s: string]: string}} evts
 */

var evts = {
  "animation": "animationend",
  "OAnimation": "oAnimationEnd",
  "MozAnimation": "animationend",
  "WebkitAnimation": "webkitAnimationEnd"
};
var getAnimationEndEvent = function getAnimationEndEvent() {
  if (isClient) {
    var el = document.createElement("fakeelement");
    /**
     * @type {string} a
     */

    for (var a in evts) {
      /**
       * @type {object} style
       */
      var style = el.style;

      if (style[a] !== undefined) {
        return evts[a];
      }
    }
  }
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

var classes = {
  component: "pe-svg"
};

/* src/svg/SVG.svelte generated by Svelte v3.5.1 */

const get_after_slot_changes = ({}) => ({});
const get_after_slot_context = ({}) => ({});

const get_before_slot_changes = ({}) => ({});
const get_before_slot_context = ({}) => ({});

function create_fragment(ctx) {
	var div, t0, t1, current;

	const before_slot_1 = ctx.$$slots.before;
	const before_slot = create_slot(before_slot_1, ctx, get_before_slot_context);

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	const after_slot_1 = ctx.$$slots.after;
	const after_slot = create_slot(after_slot_1, ctx, get_after_slot_context);

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
		c() {
			div = element("div");

			if (before_slot) before_slot.c();
			t0 = space();

			if (default_slot) default_slot.c();
			t1 = space();

			if (after_slot) after_slot.c();

			set_attributes(div, div_data);
		},

		l(nodes) {
			if (before_slot) before_slot.l(div_nodes);

			if (default_slot) default_slot.l(div_nodes);

			if (after_slot) after_slot.l(div_nodes);
		},

		m(target, anchor) {
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

		p(changed, ctx) {
			if (before_slot && before_slot.p && changed.$$scope) {
				before_slot.p(get_slot_changes(before_slot_1, ctx, changed, get_before_slot_changes), get_slot_context(before_slot_1, ctx, get_before_slot_context));
			}

			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}

			if (after_slot && after_slot.p && changed.$$scope) {
				after_slot.p(get_slot_changes(after_slot_1, ctx, changed, get_after_slot_changes), get_slot_context(after_slot_1, ctx, get_after_slot_context));
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

		i(local) {
			if (current) return;
			if (before_slot && before_slot.i) before_slot.i(local);
			if (default_slot && default_slot.i) default_slot.i(local);
			if (after_slot && after_slot.i) after_slot.i(local);
			current = true;
		},

		o(local) {
			if (before_slot && before_slot.o) before_slot.o(local);
			if (default_slot && default_slot.o) default_slot.o(local);
			if (after_slot && after_slot.o) after_slot.o(local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				detach(div);
			}

			if (before_slot) before_slot.d(detaching);

			if (default_slot) default_slot.d(detaching);

			if (after_slot) after_slot.d(detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	

  // DOM bindings
  let domElement;
  const uid = nonSecure();

  // Common vars
  let { className = "", events = {}, id = undefined, style = undefined, testId = undefined, tone = undefined } = $$props;
  
  onMount(() => {
    console.log("SVG onMount");
    domElement = document.querySelector(`[data-uid="${uid}"]`);
    console.log("SVG domElement=", domElement);
    if (domElement && domElement.querySelector) {
      const svgElement = domElement.querySelector("svg");
      if (svgElement) {
        svgElement.setAttribute("focusable", "false");
      }
    }
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
        classes.component,
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

class SVG extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, ["className", "events", "id", "style", "testId", "tone"]);
	}
}

var classes$1 = {
  component: "pe-icon",

  // states
  avatar:    "pe-icon--avatar",
  large:     "pe-icon--large",
  medium:    "pe-icon--medium",
  regular:   "pe-icon--regular",
  small:     "pe-icon--small",
};

/* src/icon/Icon.svelte generated by Svelte v3.5.1 */

const get_after_slot_changes$1 = ({}) => ({});
const get_after_slot_context$1 = ({}) => ({});

const get_before_slot_changes$1 = ({}) => ({});
const get_before_slot_context$1 = ({}) => ({});

// (41:2) {:else}
function create_else_block(ctx) {
	var current;

	var svg_1_spread_levels = [
		ctx.svg
	];

	let svg_1_props = {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};
	for (var i = 0; i < svg_1_spread_levels.length; i += 1) {
		svg_1_props = assign(svg_1_props, svg_1_spread_levels[i]);
	}
	var svg_1 = new SVG({ props: svg_1_props });

	return {
		c() {
			svg_1.$$.fragment.c();
		},

		m(target, anchor) {
			mount_component(svg_1, target, anchor);
			current = true;
		},

		p(changed, ctx) {
			var svg_1_changes = changed.svg ? get_spread_update(svg_1_spread_levels, [
				ctx.svg
			]) : {};
			if (changed.$$scope) svg_1_changes.$$scope = { changed, ctx };
			svg_1.$set(svg_1_changes);
		},

		i(local) {
			if (current) return;
			svg_1.$$.fragment.i(local);

			current = true;
		},

		o(local) {
			svg_1.$$.fragment.o(local);
			current = false;
		},

		d(detaching) {
			svg_1.$destroy(detaching);
		}
	};
}

// (39:2) {#if src !== undefined}
function create_if_block(ctx) {
	var img;

	return {
		c() {
			img = element("img");
			img.src = ctx.src;
			img.alt = ctx.alt;
		},

		m(target, anchor) {
			insert(target, img, anchor);
		},

		p(changed, ctx) {
			if (changed.src) {
				img.src = ctx.src;
			}

			if (changed.alt) {
				img.alt = ctx.alt;
			}
		},

		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(img);
			}
		}
	};
}

// (42:4) <SVG {...svg}>
function create_default_slot(ctx) {
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

function create_fragment$1(ctx) {
	var div, t0, current_block_type_index, if_block, t1, current;

	const before_slot_1 = ctx.$$slots.before;
	const before_slot = create_slot(before_slot_1, ctx, get_before_slot_context$1);

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
	const after_slot = create_slot(after_slot_1, ctx, get_after_slot_context$1);

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
		c() {
			div = element("div");

			if (before_slot) before_slot.c();
			t0 = space();
			if_block.c();
			t1 = space();

			if (after_slot) after_slot.c();

			set_attributes(div, div_data);
		},

		l(nodes) {
			if (before_slot) before_slot.l(div_nodes);

			if (after_slot) after_slot.l(div_nodes);
		},

		m(target, anchor) {
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

		p(changed, ctx) {
			if (before_slot && before_slot.p && changed.$$scope) {
				before_slot.p(get_slot_changes(before_slot_1, ctx, changed, get_before_slot_changes$1), get_slot_context(before_slot_1, ctx, get_before_slot_context$1));
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
				after_slot.p(get_slot_changes(after_slot_1, ctx, changed, get_after_slot_changes$1), get_slot_context(after_slot_1, ctx, get_after_slot_context$1));
			}

			set_attributes(div, get_spread_update(div_levels, [
				(changed.R_classNames) && { class: ctx.R_classNames },
				(changed.style) && (ctx.style && {style: ctx.style}),
				(changed.id) && (ctx.id && { 'id': ctx.id }),
				(changed.testId) && { 'data-test-id': ctx.testId },
				(changed.events) && ctx.events
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
				detach(div);
			}

			if (before_slot) before_slot.d(detaching);
			if_blocks[current_block_type_index].d();

			if (after_slot) after_slot.d(detaching);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	

  // Common vars
  let { className = "", events = {}, id = undefined, style = undefined, testId = undefined, tone = undefined, alt = "", avatar = false, size = undefined, src = undefined, svg = {} } = $$props;

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
		if ('svg' in $$props) $$invalidate('svg', svg = $$props.svg);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	let R_classNames;

	$$self.$$.update = ($$dirty = { size: 1, avatar: 1, tone: 1, className: 1 }) => {
		if ($$dirty.size || $$dirty.avatar || $$dirty.tone || $$dirty.className) { $$invalidate('R_classNames', R_classNames = [
        classes$1.component,
        classForSize(classes$1, size),
        avatar ? classes$1.avatar : null,
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
		svg,
		undefined,
		R_classNames,
		$$slots,
		$$scope
	};
}

class Icon extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$1, create_fragment$1, safe_not_equal, ["className", "events", "id", "style", "testId", "tone", "alt", "avatar", "size", "src", "svg"]);
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

/* src/shadow/Shadow.svelte generated by Svelte v3.5.1 */

const get_after_slot_changes$2 = ({}) => ({});
const get_after_slot_context$2 = ({}) => ({});

const get_before_slot_changes$2 = ({}) => ({});
const get_before_slot_context$2 = ({}) => ({});

function create_fragment$2(ctx) {
	var div2, t0, t1, t2, div0, div0_class_value, t3, div1, div1_class_value, current;

	const before_slot_1 = ctx.$$slots.before;
	const before_slot = create_slot(before_slot_1, ctx, get_before_slot_context$2);

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	const after_slot_1 = ctx.$$slots.after;
	const after_slot = create_slot(after_slot_1, ctx, get_after_slot_context$2);

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
		c() {
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
			div1.className = div1_class_value = shadowClasses.topShadow;
			set_attributes(div2, div2_data);
		},

		l(nodes) {
			if (before_slot) before_slot.l(div2_nodes);

			if (default_slot) default_slot.l(div2_nodes);

			if (after_slot) after_slot.l(div2_nodes);
		},

		m(target, anchor) {
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

		p(changed, ctx) {
			if (before_slot && before_slot.p && changed.$$scope) {
				before_slot.p(get_slot_changes(before_slot_1, ctx, changed, get_before_slot_changes$2), get_slot_context(before_slot_1, ctx, get_before_slot_context$2));
			}

			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}

			if (after_slot && after_slot.p && changed.$$scope) {
				after_slot.p(get_slot_changes(after_slot_1, ctx, changed, get_after_slot_changes$2), get_slot_context(after_slot_1, ctx, get_after_slot_context$2));
			}

			set_attributes(div2, get_spread_update(div2_levels, [
				(changed.R_classNames) && { class: ctx.R_classNames },
				(changed.id) && ctx.id && {id: ctx.id},
				(changed.style) && ctx.style && {style: ctx.style},
				(changed.testId) && { 'data-test-id': ctx.testId },
				(changed.events) && ctx.events
			]));
		},

		i(local) {
			if (current) return;
			if (before_slot && before_slot.i) before_slot.i(local);
			if (default_slot && default_slot.i) default_slot.i(local);
			if (after_slot && after_slot.i) after_slot.i(local);
			current = true;
		},

		o(local) {
			if (before_slot && before_slot.o) before_slot.o(local);
			if (default_slot && default_slot.o) default_slot.o(local);
			if (after_slot && after_slot.o) after_slot.o(local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				detach(div2);
			}

			if (before_slot) before_slot.d(detaching);

			if (default_slot) default_slot.d(detaching);

			if (after_slot) after_slot.d(detaching);
		}
	};
}

function instance$2($$self, $$props, $$invalidate) {
	// Common vars
  let { className = "", events = {}, id = undefined, style = undefined, testId = undefined, shadowDepth = 1, animated = false } = $$props;

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

class Shadow extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$2, create_fragment$2, safe_not_equal, ["className", "events", "id", "style", "testId", "shadowDepth", "animated"]);
	}
}

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

var ANIMATION_END_EVENT = getAnimationEndEvent();
var DEFAULT_START_OPACITY = 0.2;
var DEFAULT_END_OPACITY = 0.0;
var DEFAULT_START_SCALE = 0.1;
var DEFAULT_END_SCALE = 2.0;
var OPACITY_DECAY_VELOCITY = 0.35;

var addStyleToHead = function addStyleToHead(id, stylesheet) {
  if (isServer) return;
  var documentRef = window.document;
  var styleEl = documentRef.createElement("style");
  styleEl.setAttribute("id", id);
  styleEl.appendChild(documentRef.createTextNode(stylesheet));
  documentRef.head.appendChild(styleEl);
};

var removeStyleFromHead = function removeStyleFromHead(id) {
  if (isServer) return;
  var el = document.getElementById(id);

  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
};

var rippleAnimation = function rippleAnimation(_ref) {
  var e = _ref.e,
      id = _ref.id,
      el = _ref.el,
      props = _ref.props,
      classes = _ref.classes;
  return new Promise(function (resolve) {
    var container = document.createElement("div");
    container.setAttribute("class", classes.mask);
    el.appendChild(container);
    var waves = document.createElement("div");
    waves.setAttribute("class", classes.waves);
    container.appendChild(waves);
    var rect = el.getBoundingClientRect();
    var x = isTouch && e.touches ? e.touches[0].pageX : e.clientX;
    var y = isTouch && e.touches ? e.touches[0].pageY : e.clientY;
    var w = el.offsetWidth;
    var h = el.offsetHeight;
    var waveRadius = Math.sqrt(w * w + h * h);
    var mx = props.center ? rect.left + rect.width / 2 : x;
    var my = props.center ? rect.top + rect.height / 2 : y;
    var rx = mx - rect.left - waveRadius / 2;
    var ry = my - rect.top - waveRadius / 2;
    var startOpacity = props.startOpacity !== undefined ? props.startOpacity : DEFAULT_START_OPACITY;
    var opacityDecayVelocity = props.opacityDecayVelocity !== undefined ? props.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
    var endOpacity = props.endOpacity || DEFAULT_END_OPACITY;
    var startScale = props.startScale || DEFAULT_START_SCALE;
    var endScale = props.endScale || DEFAULT_END_SCALE;
    var duration = props.duration ? props.duration : 1 / opacityDecayVelocity * 0.2;
    var color = window.getComputedStyle(el).color;
    var style = waves.style;
    style.width = style.height = waveRadius + "px";
    style.top = ry + "px";
    style.left = rx + "px";
    style["animation-duration"] = style["-webkit-animation-duration"] = style["-moz-animation-duration"] = style["-o-animation-duration"] = duration + "s";
    style.backgroundColor = color;
    style.opacity = startOpacity;
    style.animationName = id;
    style.animationTimingFunction = props.animationTimingFunction || vars.animation_curve_default;
    var rippleStyleSheet = "@keyframes ".concat(id, " {\n      0% {\n        transform:scale(").concat(startScale, ");\n        opacity: ").concat(startOpacity, "\n      }\n      100% {\n        transform:scale(").concat(endScale, ");\n        opacity: ").concat(endOpacity, ";\n      }\n    }");
    addStyleToHead(id, rippleStyleSheet);

    var animationDone = function animationDone(evt) {
      removeStyleFromHead(id);
      waves.removeEventListener(ANIMATION_END_EVENT, animationDone, false);

      if (props.persistent) {
        style.opacity = endOpacity;
        style.transform = "scale(" + endScale + ")";
      } else {
        waves.classList.remove(classes.wavesAnimating);
        container.removeChild(waves);
        el.removeChild(container);
      }

      resolve(evt);
    };

    waves.addEventListener(ANIMATION_END_EVENT, animationDone, false);
    waves.classList.add(classes.wavesAnimating);
  });
};

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

var classes$2 = {
  component:      "pe-ripple",

  // elements
  mask:           "pe-ripple__mask",
  waves:          "pe-ripple__waves",

  // states
  unconstrained:  "pe-ripple--unconstrained",
  wavesAnimating: "pe-ripple__waves--animating",
};

/* src/ripple/Ripple.svelte generated by Svelte v3.5.1 */

const get_after_slot_changes$3 = ({}) => ({});
const get_after_slot_context$3 = ({}) => ({});

const get_before_slot_changes$3 = ({}) => ({});
const get_before_slot_context$3 = ({}) => ({});

function create_fragment$3(ctx) {
	var div, t0, t1, current;

	const before_slot_1 = ctx.$$slots.before;
	const before_slot = create_slot(before_slot_1, ctx, get_before_slot_context$3);

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	const after_slot_1 = ctx.$$slots.after;
	const after_slot = create_slot(after_slot_1, ctx, get_after_slot_context$3);

	var div_levels = [
		{ "data-uid": ctx.uid },
		{ class: ctx.R_classNames },
		(ctx.style && {style: ctx.style}),
		(ctx.id && { 'id': ctx.id }),
		{ 'data-test-id': ctx.testId }
	];

	var div_data = {};
	for (var i = 0; i < div_levels.length; i += 1) {
		div_data = assign(div_data, div_levels[i]);
	}

	return {
		c() {
			div = element("div");

			if (before_slot) before_slot.c();
			t0 = space();

			if (default_slot) default_slot.c();
			t1 = space();

			if (after_slot) after_slot.c();

			set_attributes(div, div_data);
		},

		l(nodes) {
			if (before_slot) before_slot.l(div_nodes);

			if (default_slot) default_slot.l(div_nodes);

			if (after_slot) after_slot.l(div_nodes);
		},

		m(target_1, anchor) {
			insert(target_1, div, anchor);

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

		p(changed, ctx) {
			if (before_slot && before_slot.p && changed.$$scope) {
				before_slot.p(get_slot_changes(before_slot_1, ctx, changed, get_before_slot_changes$3), get_slot_context(before_slot_1, ctx, get_before_slot_context$3));
			}

			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}

			if (after_slot && after_slot.p && changed.$$scope) {
				after_slot.p(get_slot_changes(after_slot_1, ctx, changed, get_after_slot_changes$3), get_slot_context(after_slot_1, ctx, get_after_slot_context$3));
			}

			set_attributes(div, get_spread_update(div_levels, [
				(changed.uid) && { "data-uid": ctx.uid },
				(changed.R_classNames) && { class: ctx.R_classNames },
				(changed.style) && (ctx.style && {style: ctx.style}),
				(changed.id) && (ctx.id && { 'id': ctx.id }),
				(changed.testId) && { 'data-test-id': ctx.testId }
			]));
		},

		i(local) {
			if (current) return;
			if (before_slot && before_slot.i) before_slot.i(local);
			if (default_slot && default_slot.i) default_slot.i(local);
			if (after_slot && after_slot.i) after_slot.i(local);
			current = true;
		},

		o(local) {
			if (before_slot && before_slot.o) before_slot.o(local);
			if (default_slot && default_slot.o) default_slot.o(local);
			if (after_slot && after_slot.o) after_slot.o(local);
			current = false;
		},

		d(detaching) {
			if (detaching) {
				detach(div);
			}

			if (before_slot) before_slot.d(detaching);

			if (default_slot) default_slot.d(detaching);

			if (after_slot) after_slot.d(detaching);
		}
	};
}

function instance$3($$self, $$props, $$invalidate) {
	let $animationCount;

	
   
  // Store
  const animationCount = writable(0); subscribe($$self, animationCount, $$value => { $animationCount = $$value; $$invalidate('$animationCount', $animationCount); });

  // DOM bindings
  let domElement;
  const uid = nonSecure();

  // Common vars
  let { className = "", id = undefined, style = undefined, testId = undefined, tone = undefined, disabled = false, unconstrained = false, multi = false, target = undefined, start = undefined, end = undefined, duration = undefined, center = false, startOpacity = undefined, endOpacity = undefined, opacityDecayVelocity = undefined, startScale = undefined, endScale = undefined, animationTimingFunction = undefined, persistent = false } = $$props;

  const tap = e => {
    if (disabled || !domElement || (!multi && $animationCount > 0)) {
      return;
    }
    if (start) {
      start(e);
    }
    const id = `ripple_animation_${new Date().getTime()}`;
    const props = {
      duration,
      center,
      startOpacity,
      endOpacity,
      opacityDecayVelocity,
      startScale,
      endScale,
      animationTimingFunction,
      persistent,
    };
    const animation = rippleAnimation({ e, id, el: domElement, props, classes: classes$2 })
      .then(evt => {
        if (end) {
          end(evt);
        }
        animationCount.set($animationCount - 1);
      });
    animationCount.set($animationCount + 1);
  };

  onMount(() => {
    domElement = document.querySelector(`[data-uid="${uid}"]`);
    const triggerEl = target || (domElement ? domElement.parentElement : undefined);
    if (triggerEl && triggerEl.addEventListener) {
      pointerEndEvent.forEach(evt =>
        triggerEl.addEventListener(evt, tap, false));
    
      return () => {
        pointerEndEvent.forEach(evt =>
          triggerEl.removeEventListener(evt, tap, false));
      };
    }
  });

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('className' in $$props) $$invalidate('className', className = $$props.className);
		if ('id' in $$props) $$invalidate('id', id = $$props.id);
		if ('style' in $$props) $$invalidate('style', style = $$props.style);
		if ('testId' in $$props) $$invalidate('testId', testId = $$props.testId);
		if ('tone' in $$props) $$invalidate('tone', tone = $$props.tone);
		if ('disabled' in $$props) $$invalidate('disabled', disabled = $$props.disabled);
		if ('unconstrained' in $$props) $$invalidate('unconstrained', unconstrained = $$props.unconstrained);
		if ('multi' in $$props) $$invalidate('multi', multi = $$props.multi);
		if ('target' in $$props) $$invalidate('target', target = $$props.target);
		if ('start' in $$props) $$invalidate('start', start = $$props.start);
		if ('end' in $$props) $$invalidate('end', end = $$props.end);
		if ('duration' in $$props) $$invalidate('duration', duration = $$props.duration);
		if ('center' in $$props) $$invalidate('center', center = $$props.center);
		if ('startOpacity' in $$props) $$invalidate('startOpacity', startOpacity = $$props.startOpacity);
		if ('endOpacity' in $$props) $$invalidate('endOpacity', endOpacity = $$props.endOpacity);
		if ('opacityDecayVelocity' in $$props) $$invalidate('opacityDecayVelocity', opacityDecayVelocity = $$props.opacityDecayVelocity);
		if ('startScale' in $$props) $$invalidate('startScale', startScale = $$props.startScale);
		if ('endScale' in $$props) $$invalidate('endScale', endScale = $$props.endScale);
		if ('animationTimingFunction' in $$props) $$invalidate('animationTimingFunction', animationTimingFunction = $$props.animationTimingFunction);
		if ('persistent' in $$props) $$invalidate('persistent', persistent = $$props.persistent);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	let R_classNames;

	$$self.$$.update = ($$dirty = { unconstrained: 1, tone: 1, className: 1 }) => {
		if ($$dirty.unconstrained || $$dirty.tone || $$dirty.className) { $$invalidate('R_classNames', R_classNames = [
        classes$2.component,
        unconstrained ? classes$2.unconstrained : null,
        tone === "dark" ? "pe-dark-tone" : undefined,
        tone === "light" ? "pe-light-tone" : undefined,
        className,
      ].join(" ")); }
	};

	return {
		animationCount,
		uid,
		className,
		id,
		style,
		testId,
		tone,
		disabled,
		unconstrained,
		multi,
		target,
		start,
		end,
		duration,
		center,
		startOpacity,
		endOpacity,
		opacityDecayVelocity,
		startScale,
		endScale,
		animationTimingFunction,
		persistent,
		R_classNames,
		$$slots,
		$$scope
	};
}

class Ripple extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$3, create_fragment$3, safe_not_equal, ["className", "id", "style", "testId", "tone", "disabled", "unconstrained", "multi", "target", "start", "end", "duration", "center", "startOpacity", "endOpacity", "opacityDecayVelocity", "startScale", "endScale", "animationTimingFunction", "persistent"]);
	}
}

var classes$3 = {
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

/* src/button/IconDropdownDown.svelte generated by Svelte v3.5.1 */

function create_fragment$4(ctx) {
	var svg, path;

	return {
		c() {
			svg = svg_element("svg");
			path = svg_element("path");
			attr(path, "d", "M7 10l5 5 5-5z");
			attr(svg, "xmlns", "http://www.w3.org/2000/svg");
			attr(svg, "id", "dd-down-svg");
			attr(svg, "width", "24");
			attr(svg, "height", "24");
			attr(svg, "viewBox", "0 0 24 24");
		},

		m(target, anchor) {
			insert(target, svg, anchor);
			append(svg, path);
		},

		p: noop,
		i: noop,
		o: noop,

		d(detaching) {
			if (detaching) {
				detach(svg);
			}
		}
	};
}

class IconDropdownDown extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, null, create_fragment$4, safe_not_equal, []);
	}
}

/* src/button/TextLabel.svelte generated by Svelte v3.5.1 */

function create_fragment$5(ctx) {
	var div1, div0, t, div0_class_value, div1_class_value;

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			t = text(ctx.label);
			div0.className = div0_class_value = classes$3.textLabel;
			div0.style.cssText = ctx.textStyle;
			div1.className = div1_class_value = classes$3.label;
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

function instance$4($$self, $$props, $$invalidate) {
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
		init(this, options, instance$4, create_fragment$5, safe_not_equal, ["label", "textStyle"]);
	}
}

/* src/button/Button.svelte generated by Svelte v3.5.1 */

const get_after_slot_changes$4 = ({}) => ({});
const get_after_slot_context$4 = ({}) => ({});

const get_label_slot_changes = ({}) => ({});
const get_label_slot_context = ({}) => ({});

const get_before_slot_changes$4 = ({}) => ({});
const get_before_slot_context$4 = ({}) => ({});

// (166:4) {#if disabled || noInk}
function create_if_block_2(ctx) {
	var current;

	var ripple_1_spread_levels = [
		ctx.ripple,
		{ target: ctx.domElement }
	];

	let ripple_1_props = {};
	for (var i = 0; i < ripple_1_spread_levels.length; i += 1) {
		ripple_1_props = assign(ripple_1_props, ripple_1_spread_levels[i]);
	}
	var ripple_1 = new Ripple({ props: ripple_1_props });

	return {
		c() {
			ripple_1.$$.fragment.c();
		},

		m(target, anchor) {
			mount_component(ripple_1, target, anchor);
			current = true;
		},

		p(changed, ctx) {
			var ripple_1_changes = (changed.ripple || changed.domElement) ? get_spread_update(ripple_1_spread_levels, [
				(changed.ripple) && ctx.ripple,
				(changed.domElement) && { target: ctx.domElement }
			]) : {};
			ripple_1.$set(ripple_1_changes);
		},

		i(local) {
			if (current) return;
			ripple_1.$$.fragment.i(local);

			current = true;
		},

		o(local) {
			ripple_1.$$.fragment.o(local);
			current = false;
		},

		d(detaching) {
			ripple_1.$destroy(detaching);
		}
	};
}

// (177:4) {:else}
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

// (175:4) {#if label !== undefined}
function create_if_block_1(ctx) {
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

// (181:4) {#if dropdown}
function create_if_block$1(ctx) {
	var current;

	var icon = new Icon({
		props: {
		className: classes$3.dropdown,
		$$slots: { default: [create_default_slot$1] },
		$$scope: { ctx }
	}
	});

	return {
		c() {
			icon.$$.fragment.c();
		},

		m(target, anchor) {
			mount_component(icon, target, anchor);
			current = true;
		},

		p(changed, ctx) {
			var icon_changes = {};
			if (changed.classes) icon_changes.className = classes$3.dropdown;
			if (changed.$$scope) icon_changes.$$scope = { changed, ctx };
			icon.$set(icon_changes);
		},

		i(local) {
			if (current) return;
			icon.$$.fragment.i(local);

			current = true;
		},

		o(local) {
			icon.$$.fragment.o(local);
			current = false;
		},

		d(detaching) {
			icon.$destroy(detaching);
		}
	};
}

// (182:6) <Icon className={classes.dropdown}>
function create_default_slot$1(ctx) {
	var current;

	var icondropdowndown = new IconDropdownDown({});

	return {
		c() {
			icondropdowndown.$$.fragment.c();
		},

		m(target, anchor) {
			mount_component(icondropdowndown, target, anchor);
			current = true;
		},

		i(local) {
			if (current) return;
			icondropdowndown.$$.fragment.i(local);

			current = true;
		},

		o(local) {
			icondropdowndown.$$.fragment.o(local);
			current = false;
		},

		d(detaching) {
			icondropdowndown.$destroy(detaching);
		}
	};
}

function create_fragment$6(ctx) {
	var a, t0, div2, t1, t2, div1, t3, t4, current_block_type_index, if_block1, t5, t6, current;

	const before_slot_1 = ctx.$$slots.before;
	const before_slot = create_slot(before_slot_1, ctx, get_before_slot_context$4);

	var shadow = new Shadow({
		props: {
		shadowDepth: ctx._shadowDepth,
		animated: true
	}
	});

	var if_block0 = (ctx.disabled || ctx.noInk) && create_if_block_2(ctx);

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
	const after_slot = create_slot(after_slot_1, ctx, get_after_slot_context$4);

	var a_levels = [
		{ href: null },
		ctx.elementProps
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

			current = true;
		},

		p(changed, ctx) {
			if (before_slot && before_slot.p && changed.$$scope) {
				before_slot.p(get_slot_changes(before_slot_1, ctx, changed, get_before_slot_changes$4), get_slot_context(before_slot_1, ctx, get_before_slot_context$4));
			}

			var shadow_changes = {};
			if (changed._shadowDepth) shadow_changes.shadowDepth = ctx._shadowDepth;
			shadow.$set(shadow_changes);

			if (ctx.disabled || ctx.noInk) {
				if (if_block0) {
					if_block0.p(changed, ctx);
					if_block0.i(1);
				} else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.i(1);
					if_block0.m(div2, t2);
				}
			} else if (if_block0) {
				group_outros();
				on_outro(() => {
					if_block0.d(1);
					if_block0 = null;
				});

				if_block0.o(1);
				check_outros();
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
				after_slot.p(get_slot_changes(after_slot_1, ctx, changed, get_after_slot_changes$4), get_slot_context(after_slot_1, ctx, get_after_slot_context$4));
			}

			set_attributes(a, get_spread_update(a_levels, [
				{ href: null },
				(changed.elementProps) && ctx.elementProps
			]));
		},

		i(local) {
			if (current) return;
			if (before_slot && before_slot.i) before_slot.i(local);

			shadow.$$.fragment.i(local);

			if (if_block0) if_block0.i();
			if (label_slot && label_slot.i) label_slot.i(local);
			if (if_block1) if_block1.i();
			if (if_block2) if_block2.i();
			if (after_slot && after_slot.i) after_slot.i(local);
			current = true;
		},

		o(local) {
			if (before_slot && before_slot.o) before_slot.o(local);
			shadow.$$.fragment.o(local);
			if (if_block0) if_block0.o();
			if (label_slot && label_slot.o) label_slot.o(local);
			if (if_block1) if_block1.o();
			if (if_block2) if_block2.o();
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
		}
	};
}

function instance$5($$self, $$props, $$invalidate) {
	let $isInactive;

	

  // Store
  const isInactive = writable(false); subscribe($$self, isInactive, $$value => { $isInactive = $$value; $$invalidate('$isInactive', $isInactive); });

  // DOM bindings
  const uid = nonSecure();
  let domElement;
  
  onMount(() => {
    $$invalidate('domElement', domElement = document.querySelector(`[data-uid="${uid}"]`));
  });

  // Common vars
  let { className = "", events = {}, id = undefined, style = undefined, testId = undefined, tone = undefined, animateOnTap = undefined, border = false, contained = false, disabled = false, dropdown = undefined, extraWide = false, highLabel = false, inactivate = false, inactive = false, ink = false, label = undefined, parentClassName = "", raised = false, ripple = {}, selected = false, separatorAtStart = false, shadowDepth = undefined, tabindex = 0, textStyle = undefined, url = { href: "javascript:false" }, wash = undefined } = $$props;

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
		if ('ripple' in $$props) $$invalidate('ripple', ripple = $$props.ripple);
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
        classes$3.super,
        parentClassName || classes$3.component,
        contained ? classes$3.contained : undefined,
        // Raised button classes
        raised ? classes$3.contained : undefined,
        raised ? classes$3.raised : undefined,
        raised && doesAnimateOnTap ? shadowClasses.with_active_shadow : undefined,
        raised && doesAnimateOnTap
          ? getShadowDepthClass(_shadowDepth + 1)
          : undefined,
        //
        hasHover ? classes$3.hasHover : undefined,
        selected ? classes$3.selected : undefined,
        highLabel ? classes$3.highLabel : undefined,
        extraWide ? classes$3.extraWide : undefined,
        disabled ? classes$3.disabled : undefined,
        R_inactive ? classes$3.inactive : undefined,
        separatorAtStart ? classes$3.separatorAtStart : undefined,
        border ? classes$3.border : undefined,
        dropdown ? classes$3.hasDropdown : undefined,
        !!dropdown
          ? dropdown.open
            ? classes$3.dropdownOpen
            : classes$3.dropdownClosed
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
		domElement,
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
		ripple,
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

class Button extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$5, create_fragment$6, safe_not_equal, ["className", "events", "id", "style", "testId", "tone", "animateOnTap", "border", "contained", "disabled", "dropdown", "extraWide", "highLabel", "inactivate", "inactive", "ink", "label", "parentClassName", "raised", "ripple", "selected", "separatorAtStart", "shadowDepth", "tabindex", "textStyle", "url", "wash"]);
	}
}

var classes$4 = {
  component: "pe-button pe-icon-button",

  // elements
  content:   "pe-icon-button__content",
  label:     "pe-icon-button__label",

  // states
  compact:   "pe-icon-button--compact",
};

/* src/icon-button/IconButton.svelte generated by Svelte v3.5.1 */

// (30:4) <Icon {...icon}>
function create_default_slot_1(ctx) {
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

// (36:4) {#if label}
function create_if_block$2(ctx) {
	var div, t, div_class_value;

	return {
		c() {
			div = element("div");
			t = text(ctx.label);
			div.className = div_class_value = classes$4.label;
		},

		m(target, anchor) {
			insert(target, div, anchor);
			append(div, t);
		},

		p(changed, ctx) {
			if (changed.label) {
				set_data(t, ctx.label);
			}
		},

		d(detaching) {
			if (detaching) {
				detach(div);
			}
		}
	};
}

// (35:2) <span slot="after">
function create_after_slot(ctx) {
	var span;

	var if_block = (ctx.label) && create_if_block$2(ctx);

	return {
		c() {
			span = element("span");
			if (if_block) if_block.c();
			attr(span, "slot", "after");
		},

		m(target, anchor) {
			insert(target, span, anchor);
			if (if_block) if_block.m(span, null);
		},

		p(changed, ctx) {
			if (ctx.label) {
				if (if_block) {
					if_block.p(changed, ctx);
				} else {
					if_block = create_if_block$2(ctx);
					if_block.c();
					if_block.m(span, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},

		d(detaching) {
			if (detaching) {
				detach(span);
			}

			if (if_block) if_block.d();
		}
	};
}

// (28:0) <Button {...defaultButtonProps} {...$$props}>
function create_default_slot$2(ctx) {
	var div, div_class_value, t, current;

	var icon_1_spread_levels = [
		ctx.icon
	];

	let icon_1_props = {
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	};
	for (var i = 0; i < icon_1_spread_levels.length; i += 1) {
		icon_1_props = assign(icon_1_props, icon_1_spread_levels[i]);
	}
	var icon_1 = new Icon({ props: icon_1_props });

	return {
		c() {
			div = element("div");
			icon_1.$$.fragment.c();
			t = space();
			div.className = div_class_value = classes$4.content;
		},

		m(target, anchor) {
			insert(target, div, anchor);
			mount_component(icon_1, div, null);
			insert(target, t, anchor);
			current = true;
		},

		p(changed, ctx) {
			var icon_1_changes = changed.icon ? get_spread_update(icon_1_spread_levels, [
				ctx.icon
			]) : {};
			if (changed.$$scope) icon_1_changes.$$scope = { changed, ctx };
			icon_1.$set(icon_1_changes);
		},

		i(local) {
			if (current) return;
			icon_1.$$.fragment.i(local);

			current = true;
		},

		o(local) {
			icon_1.$$.fragment.o(local);
			current = false;
		},

		d(detaching) {
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

function create_fragment$7(ctx) {
	var current;

	var button_spread_levels = [
		ctx.defaultButtonProps,
		ctx.$$props
	];

	let button_props = {
		$$slots: {
		default: [create_default_slot$2],
		after: [create_after_slot]
	},
		$$scope: { ctx }
	};
	for (var i = 0; i < button_spread_levels.length; i += 1) {
		button_props = assign(button_props, button_spread_levels[i]);
	}
	var button = new Button({ props: button_props });

	return {
		c() {
			button.$$.fragment.c();
		},

		m(target, anchor) {
			mount_component(button, target, anchor);
			current = true;
		},

		p(changed, ctx) {
			var button_changes = (changed.defaultButtonProps || changed.$$props) ? get_spread_update(button_spread_levels, [
				(changed.defaultButtonProps) && ctx.defaultButtonProps,
				(changed.$$props) && ctx.$$props
			]) : {};
			if (changed.$$scope || changed.label || changed.icon) button_changes.$$scope = { changed, ctx };
			button.$set(button_changes);
		},

		i(local) {
			if (current) return;
			button.$$.fragment.i(local);

			current = true;
		},

		o(local) {
			button.$$.fragment.o(local);
			current = false;
		},

		d(detaching) {
			button.$destroy(detaching);
		}
	};
}

function instance$6($$self, $$props, $$invalidate) {
	

  let { compact = false, icon = undefined, label = undefined, parentClassName = undefined } = $$props;

  const parentClassNames = [
    parentClassName || classes$4.component,
    compact ? classes$4.compact : null,
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

class IconButton extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance$6, create_fragment$7, safe_not_equal, ["compact", "icon", "label", "parentClassName"]);
	}
}

export { Button, Icon, IconButton, Ripple, SVG, Shadow, getShadowDepthClass };
//# sourceMappingURL=polythene-svelte.mjs.map
