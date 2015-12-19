import 'polythene/common/object.assign';
import p from 'polythene/polythene/polythene';
import m from 'mithril';
import ripple from 'polythene/ripple/ripple';
import shadow from 'polythene/shadow/shadow';
import 'polythene-theme/button/button';

let startType,
    endType,
    tapStart,
    tapEnd;

const initTapEvents = (el, ctrl, opts) => {
    const isTouch = p.isTouch();
    startType = isTouch ? 'click' : 'mousedown';
    endType = 'mouseup';
    // disable z animation on touch
    const animateOnTap = opts.animateOnTap && !isTouch;

    const tapHandler = function tapHandler(evt) {
        if (opts.onTap) {
            opts.onTap(evt);
        }
        if (!animateOnTap) {
            return;
        }
        const baseZ = ctrl.baseZ();
        if (baseZ === 5) {
            return;
        }
        const MAX_Z = 5;
        const increase = opts.increase || 1;
        let z = ctrl.z();
        if (evt === 'down') {
            z = z + increase;
            z = Math.min(z, MAX_Z);
        } else if (evt === 'up') {
            z = z - increase;
            z = Math.max(z, baseZ);
        }
        if (z !== ctrl.z()) {
            ctrl.z(z);
            m.redraw();
        }
    };
    tapStart = function(e) {
        e.preventDefault();
        tapHandler('down');
    };
    tapEnd = function(e) {
        e.preventDefault();
        tapHandler('up');
    };
    el.addEventListener(startType, tapStart);
    document.body.addEventListener(endType, tapEnd);
};

const clearTapEvents = function(el) {
    el.removeEventListener(startType, tapStart);
    document.body.removeEventListener(endType, tapEnd);
};

const createView = (ctrl, opts = {}) => {
    let tag, label;
    opts.ripple = opts.ripple || {};
    opts.shadow = opts.shadow || {};
    opts.animateOnTap = (opts.animateOnTap !== undefined) ? opts.animateOnTap : true;

    tag = opts.tag || 'a';
    const noink = opts.ink !== undefined && !opts.ink;
    const disabled = !!opts.disabled;

    if (disabled) {
        tag += '[disabled]';
    }
    if (noink) {
        tag += '.noink';
    }
    if (opts.raised) {
        tag += '.raised';
    }
    const props0 = {
        'class': [opts.parentClass || 'button', opts.selected ? 'selected' : null, opts.disabled ? 'disabled' : null, opts.class].join(' '),
        id: opts.id || ''
    };

    // handle multiple configs:
    // - passed as param in the url Object
    // - passed as opts.config
    // - the default buton config
    const buttonConfig = (el, isInited, context) => {
        if (isInited) {
            return;
        }
        initTapEvents(el, ctrl, opts);
        context.onunload = function() {
            clearTapEvents(el);
        };
    };
    const optsConfig = opts.config || (() => {});
    const urlConfig = (opts.url && opts.url.config) ? opts.url.config : (() => {});

    const props = Object.assign({},
        props0,
        opts.url ? opts.url : null,
        opts.events ? opts.events : null, {
            config: (...args) => [
                buttonConfig(...args),
                optsConfig(...args),
                urlConfig(...args)
            ]
        }
    );
    label = null;
    if (opts.content) {
        label = opts.content;
    } else if (opts.label) {
        if (typeof opts.label === 'object') {
            label = opts.label;
        } else {
            label = m('.label', opts.label);
        }
    }
    const content = m('div', {
        'class': 'content'
    }, [
        label,
        disabled || noink ? null : m.component(ripple, opts.ripple),
        disabled || opts.wash !== undefined && !opts.wash ? null : m('.wash.fit'),
        opts.raised && !disabled ? m.component(shadow, {
            z: ctrl.z(),
            animated: true
        }) : null
    ]);

    return m(tag, props, p.insertContent(content, opts));
};

const component = {
    controller: (opts = {}) => {
        let z = (opts.z !== undefined) ? opts.z : 1;

        return {
            baseZ: m.prop(z),
            z: m.prop(z)
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
