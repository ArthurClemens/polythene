define(function(require) {
    'use strict';

    var m = require('mithril'),
        headerPanel = require('polythene/header-panel/header-panel'),
        iconBtn = require('polythene/icon-button/icon-button'),
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

    return function(title, content) {
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

});