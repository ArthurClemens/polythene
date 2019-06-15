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

var classes = {
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
    ? `${classes.depth_n}${Math.min(5, shadowDepth)}`
    : undefined
);

/* src/Shadow.svelte generated by Svelte v3.4.4 */

const get_after_slot_changes = ({}) => ({});
const get_after_slot_context = ({}) => ({});

const get_before_slot_changes = ({}) => ({});
const get_before_slot_context = ({}) => ({});

// (32:2) {:else}
function create_else_block(ctx) {
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

// (30:2) {#if content}
function create_if_block(ctx) {
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

function create_fragment(ctx) {
	var div2, t0, current_block_type_index, if_block, t1, t2, div0, div0_class_value, t3, div1, div1_class_value, current;

	const before_slot_1 = ctx.$$slots.before;
	const before_slot = create_slot(before_slot_1, ctx, get_before_slot_context);

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
	const after_slot = create_slot(after_slot_1, ctx, get_after_slot_context);

	var div2_levels = [
		{ class: ctx.R_classNames },
		{ style: ctx.style },
		{ 'data-test-id': ctx.testId }
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
			if_block.c();
			t1 = space();

			if (after_slot) after_slot.c();
			t2 = space();
			div0 = element("div");
			t3 = space();
			div1 = element("div");

			div0.className = div0_class_value = classes.bottomShadow;
			div1.className = div1_class_value = classes.topShadow;
			set_attributes(div2, div2_data);
		},

		l(nodes) {
			if (before_slot) before_slot.l(div2_nodes);

			if (after_slot) after_slot.l(div2_nodes);
		},

		m(target, anchor) {
			insert(target, div2, anchor);

			if (before_slot) {
				before_slot.m(div2, null);
			}

			append(div2, t0);
			if_blocks[current_block_type_index].m(div2, null);
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
				before_slot.p(get_slot_changes(before_slot_1, ctx, changed, get_before_slot_changes), get_slot_context(before_slot_1, ctx, get_before_slot_context));
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
				if_block.m(div2, t1);
			}

			if (after_slot && after_slot.p && changed.$$scope) {
				after_slot.p(get_slot_changes(after_slot_1, ctx, changed, get_after_slot_changes), get_slot_context(after_slot_1, ctx, get_after_slot_context));
			}

			set_attributes(div2, get_spread_update(div2_levels, [
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
				detach(div2);
			}

			if (before_slot) before_slot.d(detaching);
			if_blocks[current_block_type_index].d();

			if (after_slot) after_slot.d(detaching);
		}
	};
}

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
        classes.component,
        animated ? classes.animated : undefined,
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

class Shadow extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, ["className", "content", "style", "testId", "shadowDepth", "animated"]);
	}
}

export default Shadow;
export { getShadowDepthClass };
//# sourceMappingURL=polythene-svelte-shadow.mjs.map
