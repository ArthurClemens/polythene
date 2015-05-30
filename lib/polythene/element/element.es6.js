'use strict';

import p from 'polythene/polythene/polythene';
import m from 'mithril';
require('polythene-theme/element/element');

let component,
    createView;

createView = (ctrl, opts = {}) => {
    let tag, props, content;

    tag = opts.tag || 'div';
    props = {
        class: ['element', opts.class].join(' '),
        config: opts.config
    };
    content = [
        opts.content ? opts.content : null
    ];
    return m(tag, props, p.insertContent(content, opts));
};

component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
