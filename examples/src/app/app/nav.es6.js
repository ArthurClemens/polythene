'use strict';

import m from 'mithril';
import headerPanel from 'polythene/header-panel/header-panel';
import iconBtn from 'polythene/icon-button/icon-button';

let nav,
    btn,
    toolbarRow;

btn = function (group, name, url) {
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

toolbarRow = function (title) {
    return [
        btn('navigation', 'apps', 'index.html'),
        m('span[flex]', title)
    ];
};

nav = function(title, content) {
    return m.component(headerPanel, {
        class: 'app-header',
        mode: 'waterfall',
        header: {
            toolbar: {
                topBar: toolbarRow(title)
            }
        },
        content: content
    });
};

export default nav;
