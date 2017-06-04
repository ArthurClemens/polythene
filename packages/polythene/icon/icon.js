var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import '../common/object.assign';
import m from 'mithril';
import svg from '../svg/svg';
import './theme';

var CSS_CLASSES = {
    icon: 'pe-icon',
    avatar: 'pe-icon--avatar',
    small: 'pe-icon--small',
    regular: 'pe-icon--regular',
    medium: 'pe-icon--medium',
    large: 'pe-icon--large'
};

var typeClasses = {
    small: CSS_CLASSES.small,
    regular: CSS_CLASSES.regular,
    medium: CSS_CLASSES.medium,
    large: CSS_CLASSES.large
};

var classForType = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return typeClasses[mode];
};

var layoutContent = function layoutContent(opts) {
    if (opts.content) {
        return opts.content;
    } else if (opts.svg) {
        var svgOpts = _extends({}, opts.svg);
        svgOpts.tag = svgOpts.tag || 'i';
        return m(svg, svgOpts);
    } else if (opts.msvg) {
        return m('i.pe-svg', m.trust(opts.msvg));
    } else {
        return m('i', m('img', {
            src: opts.src
        }));
    }
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = _extends({}, {
        class: [CSS_CLASSES.icon, classForType(opts.type), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.events ? opts.events : null);
    var content = layoutContent(opts);
    return m(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        m.redraw.strategy('none');
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

export default component;