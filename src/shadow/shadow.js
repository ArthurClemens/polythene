import m from 'mithril';
import '../common/object.assign';
import './theme/theme';

const CSS_CLASSES = {
    component: 'pe-shadow',
    topShadow: 'pe-shadow__top',
    bottomShadow: 'pe-shadow__bottom',
    animated: 'pe-shadow--animated',
    depth_n: 'pe-shadow--z-'
};

const createView = (vnode) => {
    const attrs = vnode.attrs || {};
    const depthClass = `${CSS_CLASSES.depth_n}${Math.min(5, attrs.z !== undefined ? attrs.z : 1)}`;
    const tag = attrs.tag || 'div';
    const props = {
        class: [
            CSS_CLASSES.component,
            attrs.animated && CSS_CLASSES.animated,
            attrs.class
        ].join(' '),
        id: attrs.id || '',
        config: attrs.config
    };
    const content = [
        attrs.content && attrs.content,
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
    view: createView
};

export default component;
