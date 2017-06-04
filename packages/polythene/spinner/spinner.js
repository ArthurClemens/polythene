var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../common/object.assign';
import m from 'mithril';
import transition from '../common/transition';
import shadow from '../shadow/shadow';
import './theme/common/theme';

var CSS_CLASSES = {
    block: 'pe-spinner',
    placeholder: 'pe-spinner--placeholder',
    animation: 'pe-spinner__animation',
    visible: 'pe-spinner--visible',
    small: 'pe-spinner--small',
    regular: 'pe-spinner--regular',
    medium: 'pe-spinner--medium',
    large: 'pe-spinner--large',
    fab: 'pe-spinner--fab',
    raised: 'pe-spinner--raised',
    permanent: 'pe-spinner--permanent',
    singleColor: 'pe-spinner--single-color',
    animated: 'pe-spinner--animated'
};

var typeClasses = {
    small: CSS_CLASSES.small,
    regular: CSS_CLASSES.regular,
    medium: CSS_CLASSES.medium,
    large: CSS_CLASSES.large,
    fab: CSS_CLASSES.fab
};

var classForType = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return typeClasses[mode];
};

var show = function show(ctrl, opts) {
    if (ctrl.isTransitioning) {
        return;
    }
    ctrl.isTransitioning = true;
    return transition.show(_extends({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = true;
    });
};

var hide = function hide(ctrl, opts) {
    if (ctrl.isTransitioning) {
        return;
    }
    ctrl.isTransitioning = true;
    return transition.hide(_extends({}, opts, {
        el: ctrl.el,
        afterHide: function afterHide() {
            return ctrl.el.style.display = 'none';
        },
        showClass: CSS_CLASSES.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = false;
        ctrl.hide = false;
        m.redraw(); // removes remainder of drawn component
    });
};

var notifyState = function notifyState(ctrl, opts) {
    if (opts.percentage && opts.getPercentage) {
        var percentage = void 0;
        if (typeof opts.percentage === 'function') {
            percentage = opts.percentage();
        } else {
            percentage = opts.percentage;
        }
        opts.getPercentage(percentage, ctrl, opts);
    }
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = _extends({}, {
        class: [CSS_CLASSES.block, classForType(opts.type), opts.singleColor ? CSS_CLASSES.singleColor : null, opts.raised ? CSS_CLASSES.raised : null, opts.animated ? CSS_CLASSES.animated : null, opts.permanent ? CSS_CLASSES.permanent : null, opts.class].join(' '),
        id: opts.id || '',
        config: function config(el, inited, context, vdom) {
            if (inited) return;
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;

            notifyState(ctrl, opts);

            if (!opts.permanent) {
                setTimeout(function () {
                    show(ctrl, opts);
                }, 0);
            }
        }
    }, opts.events ? opts.events : null);

    notifyState(ctrl, opts);

    if (ctrl.hide) {
        setTimeout(function () {
            hide(ctrl, opts);
        }, 0);
    }

    var content = [opts.raised && opts.content ? m(shadow, {
        z: opts.z
    }) : null, opts.content || m('div', { class: CSS_CLASSES.animation }, 'Specific spinner missing')];

    return m(tag, props, [opts.before, content, opts.after]);
};

var delay = function delay(opts, mode) {
    var value = opts[mode];
    return value !== true && !isNaN(value) ? parseFloat(value, 10) * 1000 : false;
};

var component = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return {
            el: null,
            isTransitioning: false,
            visible: opts.permanent || false,
            hide: false,
            percentage: 0
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!ctrl.visible) {
            if (opts.hide !== undefined && !opts.hide || opts.show) {
                var showDelay = delay(opts, 'show');
                if (showDelay) {
                    setTimeout(function () {
                        return ctrl.visible = true, m.redraw();
                    }, showDelay);
                } else {
                    ctrl.visible = true;
                }
            }
        } else {
            if (opts.show !== undefined && !opts.show || opts.hide) {
                var hideDelay = delay(opts, 'hide');
                if (hideDelay) {
                    setTimeout(function () {
                        return ctrl.hide = true, m.redraw();
                    }, hideDelay);
                } else {
                    ctrl.hide = true;
                }
            }
        }
        if (ctrl.visible) {
            return createView(ctrl, opts);
        } else {
            return m('span', { class: CSS_CLASSES.placeholder });
        }
    }
};

export default component;