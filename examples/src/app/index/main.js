define(function(require) {
    'use strict';

    var m = require('mithril'),
        listTile = require('polythene/list-tile/list-tile'),
        github = require('github'),
        item,
        content,
        links;

    require('css!polythene/theme/theme');
    require('css!app-css');
    require('css!./main');

    links = [{
        baseUrl: 'svg',
        name: 'SVG'
    }, {
        baseUrl: 'icon',
        name: 'Icon'
    }, {
        baseUrl: 'button',
        name: 'Button'
    }, {
        baseUrl: 'icon-button',
        name: 'Icon Button'
    }, {
        baseUrl: 'fab',
        name: 'Floating Action Button'
    }, {
        baseUrl: 'item',
        name: 'Item'
    }, {
        baseUrl: 'toolbar',
        name: 'Toolbar'
    }, {
        baseUrl: 'header-panel',
        name: 'Header Panel'
    }, {
        baseUrl: 'scroll-header-panel',
        name: 'Scroll Header Panel'
    }, {
        baseUrl: 'shadow',
        name: 'Shadow'
    }, {
        baseUrl: 'ripple',
        name: 'Ripple'
    }, {
        baseUrl: 'list-tile',
        name: 'List Tile'
    }, {
        baseUrl: 'list',
        name: 'List'
    }];

    item = function(title, url, secondaryUrl) {
        return m.component(listTile, {
            title: title,
            icon: {
                type: 'medium',
                className: 'index-cirle-icon',
                svg: {
                    name: 'folder',
                    iconset: 'mdi'
                }
            },
            url: {href: url}
        });
    };

    content = {
        view: function() {
            return [
                m('div', {
                        class: 'p-title-block'
                    },
                    m('h1', 'Polythene Examples')
                ),
                m('div', {
                    class: 'index'
                }, m('.index-list', links.map(function(link) {
                    return item(link.name, link.baseUrl + '.html');
                }))),
                github
            ];
        }
    };

    m.mount(document.body, content);
});