var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../common/object.assign';
import p from '../polythene/polythene';
import m from 'mithril';
import ripple from '../ripple/ripple';
import shadow from '../shadow/shadow';
import '../base-button/base-button';
import { customTheme } from "./theme/theme";

var CSS_CLASSES = {
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
    focusState: 'pe-button--focus'
};

var MAX_Z = 5;

var startType = window.PointerEvent ? 'pointerdown' : 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchstart' : 'mousedown';
var endType = window.PointerEvent ? 'pointerup' : 'ontouchend' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchend' : 'mouseup';

var tapStart = void 0,
    tapEnd = void 0,
    tapEndAll = void 0,
    downButtons = [];

var animateZ = function animateZ(ctrl, opts, name) {
    var baseZ = ctrl.baseZ();
    var increase = opts.increase || 1;
    var z = ctrl.z();
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

var inactivate = function inactivate(ctrl, opts) {
    ctrl.inactive = true;
    m.redraw();
    setTimeout(function () {
        ctrl.inactive = false;
        m.redraw();
    }, opts.inactivate * 1000);
};

var initTapEvents = function initTapEvents(el, ctrl, opts) {
    var tapHandler = function tapHandler(ctrl, opts, name) {
        if (name === 'down') {
            downButtons.push({ ctrl: ctrl, opts: opts });
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
    tapStart = function tapStart() {
        return tapHandler(ctrl, opts, 'down');
    };
    tapEnd = function tapEnd() {
        return tapHandler(ctrl, opts, 'up');
    };
    tapEndAll = function tapEndAll() {
        downButtons.map(function (btn) {
            tapHandler(btn.ctrl, btn.opts, 'up');
        });
        downButtons = [];
    };
    el.addEventListener(startType, tapStart);
    el.addEventListener(endType, tapEnd);
    window.addEventListener(endType, tapEndAll);
};

var clearTapEvents = function clearTapEvents(el) {
    el.removeEventListener(startType, tapStart);
    el.removeEventListener(endType, tapEnd);
    window.removeEventListener(endType, tapEndAll);
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var noink = opts.ink !== undefined && opts.ink === false;
    var disabled = opts.disabled;
    var tag = opts.tag || 'a';
    ctrl.inactive = opts.inactive !== undefined ? opts.inactive === false ? false : true : ctrl.inactive;
    var tabIndex = disabled || ctrl.inactive ? -1 : opts.tabindex || 0;

    // handle multiple configs:
    // - passed as param in the url Object
    // - passed as opts.config
    // - the default button config
    var buttonConfig = function buttonConfig(el, isInited, context) {
        if (isInited) {
            return;
        }
        ctrl.el = el;
        if (!disabled && !ctrl.inactive) {
            initTapEvents(el, ctrl, _extends({}, opts, { animateOnTap: opts.animateOnTap !== false ? true : false }));
            context.onunload = function () {
                clearTapEvents(el);
            };
        }
    };
    var optsConfig = opts.config || function () {};
    var urlConfig = opts.url && opts.url.config ? opts.url.config : function () {};

    var props = _extends({}, {
        class: [opts.parentClass || CSS_CLASSES.block, opts.selected ? CSS_CLASSES.selected : null, disabled ? CSS_CLASSES.disabled : null, ctrl.inactive ? CSS_CLASSES.inactive : null, opts.borders ? CSS_CLASSES.borders : null, opts.raised ? CSS_CLASSES.raised : null, ctrl.focus ? CSS_CLASSES.focusState : null, opts.class].join(' '),
        id: opts.id || '',
        tabindex: tabIndex,
        // handle focus events
        onfocus: function onfocus() {
            return ctrl.focus = !ctrl.mouseover;
        },
        onblur: function onblur() {
            return ctrl.focus = false;
        },
        // don't show focus on click (detected by not being in mouse over state)
        onmouseover: function onmouseover() {
            return ctrl.mouseover = true;
        },
        onmouseout: function onmouseout() {
            return ctrl.mouseover = false;
        },
        // if focus, dispatch click event on ENTER
        onkeydown: function onkeydown(e) {
            if (e.which === 13 && ctrl.focus && ctrl.el) {
                // ENTER
                var event = new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: true
                });
                ctrl.el.dispatchEvent(event);
            }
        }
    }, opts.url ? opts.url : null, opts.formaction ? { formaction: opts.formaction } : null, opts.type ? { type: opts.type } : null, opts.events ? opts.events : null, {
        config: function config() {
            return [buttonConfig.apply(undefined, arguments), optsConfig.apply(undefined, arguments), urlConfig.apply(undefined, arguments)];
        }
    }, disabled ? {
        disabled: true
    } : null);

    var label = opts.content ? opts.content : opts.label ? _typeof(opts.label) === 'object' ? opts.label : m('div', { class: CSS_CLASSES.label }, opts.label) : null;

    var noWash = disabled || opts.wash !== undefined && !opts.wash;
    var wash = !noWash;
    var rippleOpts = _extends({}, opts.ripple, { inactive: noink });
    var content = m('div', {
        'class': CSS_CLASSES.content
    }, [opts.raised && !disabled ? m.component(shadow, {
        z: ctrl.z(),
        animated: true
    }) : null,
    // ripple
    disabled ? null : m.component(ripple, rippleOpts),
    // hover
    wash ? m('div', { class: CSS_CLASSES.wash }) : null,
    // focus
    disabled ? null : m('div', { class: CSS_CLASSES.focus }), label]);
    return m(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var z = opts.z !== undefined ? opts.z : 1;

        return {
            el: undefined,
            baseZ: m.prop(z),
            z: m.prop(z),
            inactive: undefined,
            focus: false,
            mouseover: false
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    },
    theme: customTheme
};

export default component;