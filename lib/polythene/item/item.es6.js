'use strict';

import p from 'polythene/polythene/polythene';
import m from 'mithril';
import icon from 'polythene/icon/icon';
require('polythene-theme/item/item');

let component,
    createView;

createView = (ctrl, opts = {}) => {
    let tag, props, content;

    tag = opts.tag || 'div[center][horizontal][layout]';
    props = {
        class: ['item', opts.class].join(' '),
        config: opts.config
    };
    content = [
        opts.icon ? m.component(icon, opts.icon) : null,
        opts.label ? m('div', opts.label) : null,
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
