import 'polythene/common/object.assign';
import p from 'polythene/polythene/polythene';
import m from 'mithril';
import ripple from 'polythene/ripple/ripple';
import shadow from 'polythene/shadow/shadow';
import isomorphic from 'polythene/common/isomorphic';
import 'polythene/base-button/base-button';
import 'polythene/button/theme/theme';

const CSS_CLASSES = {
    block: 'pe-button pe-button--text',
    content: 'pe-button__content',
    label: 'pe-button__label',
    raised: 'pe-button--raised',
    wash: 'pe-button__wash',
    focus: 'pe-button__focus',
    selected: 'pe-button--selected',
    disabled: 'pe-button--disabled',
    borders: 'pe-button--borders',
    inactive: 'pe-button--inactive',
    focusState: 'pe-button--focus',
};

const MAX_Z = 5;

let startType = 'mousedown';
let endType = 'mouseup';

if(isomorphic.isClient()) {
	startType = window.PointerEvent ? 'pointerdown' : (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? 'touchstart' : 'mousedown';
	endType = window.PointerEvent ? 'pointerup' : (('ontouchend' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? 'touchend' : 'mouseup';
}

let tapStart,
    tapEnd,
    tapEndAll,
    downButtons = [];

const animateZ = (ctrl, opts, name) => {
    const baseZ = ctrl.baseZ();
    const increase = opts.increase || 1;
    let z = ctrl.z();
    if (name === 'down' && baseZ !== 5) {
        z = z + increase;
        z = Math.min(z, MAX_Z);
    } else if (name === 'up') {
        z = z - increase;
        z = Math.max(z, baseZ);
    }
    if (z !== ctrl.z()) {
        ctrl.z(z);
        m.redraw(); // make animation visible
    }
};

const inactivate = (ctrl, opts) => {
    ctrl.inactive = true;
    m.redraw();
    setTimeout(() => {
        ctrl.inactive = false;
        m.redraw();
    }, opts.inactivate * 1000);
};

const initTapEvents = (el, ctrl, opts) => {
	if(isomorphic.isServer()) {
		return;
	}
    const tapHandler = (ctrl, opts, name) => {
        if (name === 'down') {
            downButtons.push({ctrl, opts});
        } else if (name === 'up') {
            if (opts.inactivate && !ctrl.inactive) {
                inactivate(ctrl, opts);
            }
        }
        // no z animation on touch
        if (opts.animateOnTap && !p.isTouch) {
            animateZ(ctrl, opts, name);
        }
    };
    tapStart = () => (tapHandler(ctrl, opts, 'down'));
    tapEnd = () => (tapHandler(ctrl, opts, 'up'));
    tapEndAll = () => {
        downButtons.map((btn) => {
            tapHandler(btn.ctrl, btn.opts, 'up');
        });
        downButtons = [];
    };
    el.addEventListener(startType, tapStart);
    el.addEventListener(endType, tapEnd);
    window.addEventListener(endType, tapEndAll);
};

const clearTapEvents = function(el) {
	if(isomorphic.isServer()) {
		return;
	}
    el.removeEventListener(startType, tapStart);
    el.removeEventListener(endType, tapEnd);
    window.removeEventListener(endType, tapEndAll);
};

const createView = (ctrl, opts = {}) => {
    const noink = (opts.ink !== undefined && opts.ink === false);
    const disabled = opts.disabled;
    const tag = opts.tag || 'a';
    ctrl.inactive = (opts.inactive !== undefined)
        ? (opts.inactive === false)
            ? false
            : true
        : ctrl.inactive;
    const tabIndex = (disabled || ctrl.inactive)
        ? -1
        : opts.tabindex || 0;

    // handle multiple configs:
    // - passed as param in the url Object
    // - passed as opts.config
    // - the default button config
    const buttonConfig = (el, isInited, context) => {
        if (isInited) {
            return;
        }
        ctrl.el = el;
        if (!disabled && !ctrl.inactive) {
            initTapEvents(el, ctrl, Object.assign(
                {},
                opts,
                {animateOnTap: (opts.animateOnTap !== false) ? true : false}
            ));
            context.onunload = () => {
                clearTapEvents(el);
            };
        }
    };
    const optsConfig = opts.config || (() => {});
    const urlConfig = (opts.url && opts.url.config) ? opts.url.config : (() => {});

    const props = Object.assign(
        {},
        {
            class: [
                (opts.parentClass || CSS_CLASSES.block),
                (opts.selected ? CSS_CLASSES.selected : null),
                (disabled ? CSS_CLASSES.disabled : null),
                (ctrl.inactive ? CSS_CLASSES.inactive : null),
                (opts.borders ? CSS_CLASSES.borders : null),
                (opts.raised ? CSS_CLASSES.raised : null),
                (ctrl.focus ? CSS_CLASSES.focusState : null),
                opts.class
            ].join(' '),
            id: opts.id || '',
            tabindex: tabIndex,
            // handle focus events
            onfocus: () => ctrl.focus = !ctrl.mouseover,
            onblur: () => ctrl.focus = false,
            // don't show focus on click (detected by not being in mouse over state)
            onmouseover: () => ctrl.mouseover = true,
            onmouseout: () => ctrl.mouseover = false,
            // if focus, dispatch click event on ENTER
            onkeydown: (e) => {
                if (e.which === 13 && ctrl.focus && ctrl.el) {
                    // ENTER
                    const event = new MouseEvent('click', {
                        view: isomorphic.isClient()? window: {},
                        bubbles: true,
                        cancelable: true
                    });
                    ctrl.el.dispatchEvent(event);
                }
            }
        },
        opts.url ? opts.url : null,
        opts.formaction ? {formaction: opts.formaction} : null,
        opts.type ? {type: opts.type} : null,
        opts.events ? opts.events : null,
        {
            config: (...args) => [
                buttonConfig(...args),
                optsConfig(...args),
                urlConfig(...args)
            ]
        },
        disabled
            ? {
                disabled: true
            }
            : null
    );

    const label = opts.content
        ? opts.content
        : (opts.label)
            ? (typeof opts.label === 'object')
                ? opts.label
                : m('div', {class: CSS_CLASSES.label}, opts.label)
            : null;

    const noWash = disabled || (opts.wash !== undefined && !opts.wash);
    const wash = !noWash;
    const rippleOpts = Object.assign(
        {},
        opts.ripple,
        {inactive: noink}
    );
    const content = m('div', {
        'class': CSS_CLASSES.content
    }, [
        (opts.raised && !disabled)
            ? m.component(shadow, {
                z: ctrl.z(),
                animated: true
            })
            : null,
        // ripple
        disabled ? null : m.component(ripple, rippleOpts),
        // hover
        wash ? m('div', {class: CSS_CLASSES.wash}) : null,
        // focus
        disabled ? null : m('div', {class: CSS_CLASSES.focus}),
        label
    ]);
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    controller: (opts = {}) => {
        let z = (opts.z !== undefined) ? opts.z : 1;

        return {
            el: undefined,
            baseZ: m.prop(z),
            z: m.prop(z),
            inactive: undefined,
            focus: false,
            mouseover: false
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
