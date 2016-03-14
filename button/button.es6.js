import 'polythene/common/object.assign';
import p from 'polythene/polythene/polythene';
import m from 'mithril';
import ripple from 'polythene/ripple/ripple';
import shadow from 'polythene/shadow/shadow';
import 'polythene/base-button/base-button';
import 'polythene/button/theme/theme';

const CSS_CLASSES = {
    block: 'pe-button pe-button--text',
    content: 'pe-button__content',
    label: 'pe-button__label',
    raised: 'pe-button--raised',
    wash: 'pe-button__wash',
    selected: 'pe-button--selected',
    disabled: 'pe-button--disabled',
    borders: 'pe-button--borders',
    inactive: 'pe-button--inactive',
};

const MAX_Z = 5;

const startType = window.PointerEvent ? 'pointerdown' : (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? 'touchstart' : 'mousedown';
const endType = window.PointerEvent ? 'pointerup' : (('ontouchend' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? 'touchend' : 'mouseup';

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
    const tapHandler = (ctrl, opts, name) => {
        if (name === 'down') {
            downButtons.push({ctrl, opts});
        } else if (name === 'up') {
            if (opts.inactivate && !opts.inactive) {
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
    el.removeEventListener(startType, tapStart);
    el.removeEventListener(endType, tapEnd);
    window.removeEventListener(endType, tapEndAll);
};

const createView = (ctrl, opts = {}) => {
    const noink = opts.ink !== undefined && !opts.ink;
    const disabled = opts.disabled;
    const inactive = ctrl.inactive;
    const tag = opts.tag || 'a';

    // handle multiple configs:
    // - passed as param in the url Object
    // - passed as opts.config
    // - the default button config
    const buttonConfig = (el, isInited, context) => {
        if (isInited) {
            return;
        }
        if (!disabled && !inactive) {
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
                (inactive ? CSS_CLASSES.inactive : null),
                (opts.borders ? CSS_CLASSES.borders : null),
                (opts.raised ? CSS_CLASSES.raised : null),
                opts.class
            ].join(' '),
            id: opts.id || ''
        },
        opts.url ? opts.url : null,
        opts.formaction ? {formaction: opts.formaction} : null,
        opts.type ? {type: opts.type} : null,
        opts.events ? opts.events : null, {
            config: (...args) => [
                buttonConfig(...args),
                optsConfig(...args),
                urlConfig(...args)
            ]
        },
        disabled ? {disabled: true} : null
    );

    const label = opts.content
        ? opts.content
        : (opts.label)
            ? (typeof opts.label === 'object')
                ? opts.label
                : m('div', {class: CSS_CLASSES.label}, opts.label)
            : null;

    const content = m('div', {
        'class': CSS_CLASSES.content
    }, [
        opts.raised && !disabled ? m.component(shadow, {
            z: ctrl.z(),
            animated: true
        }) : null,
        (disabled || noink) ? null : m.component(ripple, opts.ripple || {}),
        (disabled || (opts.wash !== undefined && !opts.wash)) ? null : m('div', {class: CSS_CLASSES.wash}),
        label
    ]);
    return m(tag, props, [opts.before, content, opts.after]);
};

const component = {
    controller: (opts = {}) => {
        let z = (opts.z !== undefined) ? opts.z : 1;

        return {
            baseZ: m.prop(z),
            z: m.prop(z),
            inactive: opts.inactive || false
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
