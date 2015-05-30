'use strict';

import p from 'polythene/polythene/polythene';
import m from 'mithril';
import svg from 'polythene/svg/svg';
require('polythene-theme/icon/icon');

let component,
    createView,
    layoutContent;

createView = (ctrl, opts = {}) => {
    let tag, props, content;

    tag = opts.tag || 'div';
    props = {
        class: ['icon', 'icon-' + (opts.type || 'normal'), opts.class].join(' '),
        config: opts.config
    };
    content = [
        layoutContent(opts)
    ];
    return m(tag, props, p.insertContent(content, opts));
};

layoutContent = (opts) => {
    let svgOpts;
    if (opts.content) {
        return opts.content;
    } else if (opts.svg) {
        svgOpts = Object.assign({}, opts.svg);
        svgOpts.tag = svgOpts.tag || 'i[fit]';
        return m.component(svg, svgOpts);
    } else {
        return m('i[fit]',
            m('img', {
                src: opts.src
            })
        );
    }
};

component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
