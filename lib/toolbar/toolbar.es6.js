'use strict';

import p from 'polythene/polythene/polythene';
import m from 'mithril';
require('polythene-theme/toolbar/toolbar');

let component,
    createView,
    bar,
    barWrapper;

barWrapper = (className, content) => {
    return m('div[center][horizontal][layout]', {
        class: ['toolbar-tools', className].join(' ')
    }, content);
};

bar = (opts = {}) => {
    let bars = [];
    if (opts.content) {
        bars.push(barWrapper('topBar', opts.content));
    } else {
        if (opts.topBar) {
            bars.push(barWrapper('topBar', opts.topBar));
        }
        if (opts.middleBar) {
            bars.push(barWrapper('middleBar', opts.middleBar));
        }
        if (opts.bottomBar) {
            bars.push(barWrapper('bottomBar', opts.bottomBar));
        }
    }
    return bars;
};

createView = (ctrl, opts = {}) => {
    let tag, props, content;

    tag = opts.tag || 'div';
    props = {
        class: ['toolbar animate', (opts.mode || 'standard'), opts.class].join(' '),
        config: opts.config
    };
    content = bar(opts);

    return m(tag, props, p.insertContent(content, opts));
};

component = {
    view: (ctrl, opts = {}) => {
        return createView(ctrl, opts);
    }
};

export default component;
