import m from 'mithril';
import 'polythene/shadow/theme/theme';

const CSS_CLASSES = {
    block: 'pe-shadow',
    topShadow: 'pe-shadow__top',
    bottomShadow: 'pe-shadow__bottom',
    animated: 'pe-shadow--animated',
    depth_n: 'pe-shadow--z-'
};

const classForDepth = (z = 1) => (CSS_CLASSES.depth_n + Math.min(5, z));

const createView = (ctrl, opts = {}) => {
    const depthClass = classForDepth(opts.z);
    const tag = opts.tag || 'div';
    const props = {
        class: [CSS_CLASSES.block, (opts.animated ? CSS_CLASSES.animated : ''), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    const content = [
        opts.content ? opts.content : null,
        m('div', {
            class: [CSS_CLASSES.bottomShadow, depthClass].join(' ')
        }),
        m('div', {
            class: [CSS_CLASSES.topShadow, depthClass].join(' ')
        })
    ];
    return m(tag, props, content);
};

const component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
