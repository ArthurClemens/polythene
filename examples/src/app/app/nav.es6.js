'use strict';

import m from 'mithril';
require('polythene/polythene/polythene');
import headerPanel from 'polythene/header-panel/header-panel';
import iconBtn from 'polythene/icon-button/icon-button';

const btn = function (group, name, opts) {
    return m.component(iconBtn, {
        url: {
            href: (opts.urlConfig !== undefined) ? 'index.html' : '/',
            config: (opts.urlConfig !== undefined) ? opts.urlConfig : m.route
        },
        icon: {
            svg: {
                group: group,
                name: name
            }
        }
    });
};

const toolbarRow = function (title, opts) {
    return [
        btn('google/navigation', 'apps', opts),
        m('span.flex', title)
    ];
};

const nav = function(title, content, opts = {}) {
    return m.component(headerPanel, Object.assign(opts, {
        class: 'app-header',
        mode: 'waterfall',
        header: {
            toolbar: {
                topBar: toolbarRow(title, opts)
            }
        },
        content: content
    }));
};

export default nav;
