var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../common/object.assign';
import m from 'mithril';
import iconBtn from '../icon-button/icon-button';
import './theme';

var CSS_CLASSES = {
    block: 'pe-button--fab',
    mini: 'pe-button--fab-mini'
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return m(iconBtn, _extends({}, opts, {
        parentClass: [CSS_CLASSES.block, opts.mini ? CSS_CLASSES.mini : null].join(' '),
        raised: true,
        ripple: {
            center: true,
            opacityDecayVelocity: 0.24
        },
        shadow: {
            increase: 5
        },
        ink: true,
        wash: true,
        animateOnTap: true
    }));
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

export default component;