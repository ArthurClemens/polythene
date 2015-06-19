'use strict';

import m from 'mithril';
import headerPanel from 'polythene/header-panel/header-panel';
import iconBtn from 'polythene/icon-button/icon-button';

const btn = function (group, name, url) {
    return m.component(iconBtn, {
        url: url ? {href: url, config: null} : null,
        icon: {
            svg: {
                group: group,
                name: name
            }
        }
    });
};

const toolbarRow = function (title) {
    return [
        btn('navigation', 'apps', 'index.html'),
        m('span.flex', title)
    ];
};

const nav = function(title, content, opts = {}) {
    return m.component(headerPanel, Object.assign(opts, {
        class: 'app-header',
        mode: 'waterfall',
        header: {
            toolbar: {
                topBar: toolbarRow(title)
            }
        },
        content: content
    }));
};

export default nav;
