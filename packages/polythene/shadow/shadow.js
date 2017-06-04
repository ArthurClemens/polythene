import m from 'mithril';
import './theme/theme';

var CSS_CLASSES = {
    block: 'pe-shadow',
    topShadow: 'pe-shadow__top',
    bottomShadow: 'pe-shadow__bottom',
    animated: 'pe-shadow--animated',
    depth_n: 'pe-shadow--z-'
};

var classForDepth = function classForDepth() {
    var z = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return CSS_CLASSES.depth_n + Math.min(5, z);
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var depthClass = classForDepth(opts.z);
    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES.block, opts.animated ? CSS_CLASSES.animated : '', opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var content = [opts.content ? opts.content : null, m('div', {
        class: [CSS_CLASSES.bottomShadow, depthClass].join(' ')
    }), m('div', {
        class: [CSS_CLASSES.topShadow, depthClass].join(' ')
    })];
    return m(tag, props, content);
};

var component = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

export default component;