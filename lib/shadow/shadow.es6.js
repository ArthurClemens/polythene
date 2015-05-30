'use strict';

import m from 'mithril';
require('polythene-theme/shadow/shadow');

let component,
    createView;

createView = (ctrl, opts = {}) => {
    let tag, props, content,
        helperTag,
        z;

    z = opts.z;

    tag = opts.tag || 'div[fit]';
    props = {
        class: ['shadow', opts.class].join(' '),
        config: opts.config
    };
    helperTag = 'div[fit]' + (opts.animated ? '[animated]' : null);
    content = [
        opts.content ? opts.content : null,
        m(helperTag, {
            class: 'shadow-bottom shadow-bottom-z-' + z
        }),
        m(helperTag, {
            class: 'shadow-top shadow-top-z-' + z
        })
    ];

    return m(tag, props, content);
};

component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;

