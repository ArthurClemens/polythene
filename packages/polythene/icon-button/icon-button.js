var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../common/object.assign';
import m from 'mithril';
import icon from '../icon/icon';
import button from '../button/button';
import './theme';

var CSS_CLASSES = {
    block: 'pe-button pe-button--icon',
    label: 'pe-button__label',
    compact: 'pe-button--compact'
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var content = opts.icon ? m(icon, opts.icon) : opts.content ? opts.content : null;
    return m(button, _extends({}, opts, {
        content: m('div', {
            class: CSS_CLASSES.label
        }, content),
        parentClass: [opts.parentClass || CSS_CLASSES.block, opts.compact ? CSS_CLASSES.compact : null].join(' '),
        // default do not show hover effect
        wash: opts.wash !== undefined ? opts.wash : false,
        ripple: opts.ripple || null,
        animateOnTap: opts.animateOnTap !== undefined ? opts.animateOnTap : false
    }));
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

export default component;