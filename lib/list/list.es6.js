'use strict';

import p from 'polythene/polythene/polythene';
import m from 'mithril';
import listTile from 'polythene/list-tile/list-tile';
require('polythene-theme/list/list');

let component,
    createView;

createView = (ctrl, opts = {}) => {
    let listModeClass, tag, props, content, headerOpts;

    tag = opts.tag || 'div';
    // create class for mode 'bordered' and 'bordered-indent'
    listModeClass = opts.mode ? opts.mode : null;

    props = {
        class: ['list', listModeClass, (opts.hoverable ? 'hoverable' : null), (opts.header ? 'has-subheader' : null), opts.class].join(' '),
        config: opts.config
    };

    if (opts.header) {
        headerOpts = Object.assign({}, opts.header);
        headerOpts.class = ['subheader', (headerOpts.class || null)].join(' ');
    }
    content = [
        headerOpts ? m.component(listTile, headerOpts) : null,
        opts.tiles ? opts.tiles : null
    ];

    return m(tag, props, p.insertContent(content, opts));
};

component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
