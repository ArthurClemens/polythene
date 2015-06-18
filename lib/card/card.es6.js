'use strict';

import p from 'polythene/polythene/polythene';
import m from 'mithril';
import shadow from 'polythene/shadow/shadow';
import icon from 'polythene/icon/icon';
require('polythene-theme/card/card');

const imageRatios = {
    landscape: 16 / 9,
    square: 1
};

let contentMap;

const createOverlay = (opts = {}) => {
    const tag = opts.tag || 'div';
    const className = ['overlay-content', opts.class].join(' ');
    const content = opts.content.map(function(o) {
        const key = Object.keys(o)[0];
        return contentMap[key](o);
    });
    return m('.overlay', [
        m(tag, {
            class: className
        }, content),
        m('.image-dimmer')
    ]);
};

const createText = o => {
    const opts = o.text || {};
    const className = ['text', opts.class].join(' ');
    const tag = 'div' || opts.tag;

    return m(tag, {
        class: className
    }, m.trust(opts.content));
};

const createMedia = o => {
    const opts = o.media || {};
    const ratio = opts.ratio || 'landscape';
    const origin = opts.origin || 'center';
    const className = ['media', opts.type || null, ratio, opts.class].join(' ');
    const tag = 'div' || opts.tag;

    let initImage = function(el, inited) {
        if (inited) {
            return;
        }
        let img = el.querySelector('img');
        if (img) {
            img.onload = function() {
                const w = this.naturalWidth;
                const h = this.naturalHeight;
                const naturalRatio = w / h;
                // crop-x: crop over x axis; crop-y: crop over y axis
                const cropClass = (naturalRatio < imageRatios[ratio]) ? 'crop-x' : 'crop-y';
                img.className = cropClass;

                if (origin !== 'start') {
                    const clientWidth = el.clientWidth;
                    const clientHeight = el.clientHeight;
                    if (naturalRatio < imageRatios[ratio]) {
                        // orient on y axis
                        const imageHeight = clientWidth / naturalRatio;
                        const diff = clientHeight - imageHeight;
                        const offset = (origin === 'center') ? diff / 2 : diff;
                        this.style.marginTop = offset + 'px';
                    } else {
                        // orient on x axis
                        const imageWidth = clientHeight * naturalRatio;
                        const diff = clientWidth - imageWidth;
                        const offset = (origin === 'center') ? diff / 2 : diff;
                        this.style.marginLeft = offset + 'px';
                    }
                }
            };
        }
    };
    return m(tag, {
        class: className,
        config: initImage
    }, [
        opts.content,
        opts.overlay ? createOverlay(opts.overlay) : m('.image-dimmer')
    ]);
};

const createHeader = o => {
    const opts = o.header || {};
    const tag = opts.tag || 'a[layout][horizontal][center]';
    const props = Object.assign({
        class: ['header', opts.class].join(' '),
        config: opts.config
    }, (opts.url ? opts.url : null), (opts.events ? opts.events : null));
    return m(tag, props, [
        opts.icon ? m('.content-icon', m.component(icon, opts.icon)) : null,
        m('.title[flex]', [
            opts.title ? m.trust(opts.title) : null,
            opts.subtitle ? m('.subtitle', m.trust(opts.subtitle)) : null
        ])
    ]);
};

const createActions = o => {
    const opts = o.actions || {};
    const tag = opts.tag || '[layout][horizontal][center]';
    const className = ['actions', opts.class].join(' ');
    return m(tag, {
        class: className
    }, opts.content);
};

const createPrimary = o => {
    let className, content, key, partOpts, hasMedia;
    const opts = o.primary || {};
    const tag = '[layout][horizontal]' || opts.tag;
    className = ['primary', opts.media ? 'has-media' : null, opts.class].join(' ');
    hasMedia = false;

    const lookup = {
        title: function(pops) {
            return pops.attrs ? pops : m('.title[flex]', [
                pops.title ? m.trust(pops.title) : null,
                pops.subtitle ? m('.subtitle', m.trust(pops.subtitle)) : null
            ]);
        },
        media: function(pops) {
            hasMedia = true;
            return m('div', {
                class: ['primary-media', pops.type].join(' ')
            }, createMedia({
                media: pops
            }));
        },
        actions: function(pops) {
            return createActions({
                actions: pops
            });
        }
    };

    if (Array.isArray(opts.content)) {
        content = opts.content.map(function(part) {
            key = Object.keys(part)[0];
            partOpts = part[key];
            if (lookup[key]) {
                return lookup[key](partOpts);
            } else {
                return part;
            }
        });
    } else {
        // shorthand for simple primary titles
        content = [
            opts.title ? lookup.title({
                title: opts.title,
                subtitle: opts.subtitle
            }) : null,
            opts.media ? lookup.media(opts.media) : null,
            opts.actions ? lookup.actions(opts.actions) : null
        ];
    }
    if (hasMedia) {
        className += ' has-media';
    }
    return m(tag, {
        class: className
    }, content);
};

const createView = (ctrl, opts = {}) => {
    const tag = opts.tag || opts.url ? 'a' : 'div';
    const props = Object.assign({
        class: ['card', opts.class].join(' '),
        config: opts.config
    }, (opts.url ? opts.url : null), (opts.events ? opts.events : null));
    let content = opts.content.map(function(o) {
        const key = Object.keys(o)[0];
        return contentMap[key](o);
    });
    content.unshift(m.component(shadow, {
        z: ctrl.z(),
        animated: true
    }));
    return m(tag, props, p.insertContent(content, opts));
};

contentMap = {
    text: createText,
    media: createMedia,
    header: createHeader,
    primary: createPrimary,
    actions: createActions
};

const component = {
    controller: (opts = {}) => {
        let z = (opts.z !== undefined) ? opts.z : 1;
        return {
            z: m.prop(z)
        };
    },
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
