define(function(require) {
    'use strict';

    var m = require('mithril'),
        _ = require('lodash'),
        headerPanel = require('polythene/header-panel/header-panel'),
        list = require('polythene/list/list'),
        listTile = require('polythene/list-tile/list-tile'),
        icon = require('polythene/icon/icon'),
        github = require('github'),
        linkMap,
        item,
        content,
        links;

    require('polythene/font-roboto/font-roboto');
    require('polythene/theme/theme');
    require('css!app-css');
    require('css!./main');

    links = [{
        label: 'Combined components',
        links: [{
            url: 'header-panel',
            name: 'Header Panel'
        }, {
            url: 'toolbar',
            name: 'Toolbar'
        }, {
            url: 'list',
            name: 'List'
        }]
    }, {
        label: 'Components',
        links: [{
            url: 'card',
            name: 'Card'
        }, {
            url: 'button',
            name: 'Button'
        }, {
            url: 'icon-button',
            name: 'Icon Button'
        }, {
            url: 'fab',
            name: 'Floating Action Button'
        }, {
            url: 'item',
            name: 'Item'
        }, {
            url: 'list-tile',
            name: 'List Tile'
        }]
    }, {
        label: 'Elementary components',
        links: [{
            url: 'svg',
            name: 'SVG'
        }, {
            url: 'icon',
            name: 'Icon'
        }, {
            url: 'ripple',
            name: 'Ripple'
        }, {
            url: 'shadow',
            name: 'Shadow'
        }]
    }];

    linkMap = {};
    _.forEach(_.flatten(_.pluck(links, 'links')), function(link) {
        linkMap[link.url] = link;
    });

    item = function(title, url) {
        return m.component(listTile, {
            title: title,
            icon: {
                type: 'medium',
                class: 'index-cirle-icon',
                svg: {
                    name: 'arrow-right',
                    iconset: 'mdi'
                }
            },
            url: {
                href: url
            }
        });
    };

    content = {
        view: function() {
            var minScale,
                onHeaderTransform;

            minScale = 0.65;

            onHeaderTransform = function(e) {
                var titleStyle = document.querySelector('.title').style;
                var m = e.height - e.condensedHeight;
                var scale = Math.max(minScale, (m - e.y) / (m / (1 - minScale)) + minScale);
                titleStyle.transform = titleStyle.webkitTransform =
                    'scale(' + scale + ') translateZ(0)';
            };

            return [
                m.component(headerPanel, {
                    class: 'app-header index-header',
                    mode: 'waterfall-tall',
                    keepCondensedHeader: true,
                    header: {
                        toolbar: {
                            bottomBar: m('.indent.title', [
                                m.component(icon, {
                                    svg: {
                                        src: 'app/images/recycle.svg'
                                    },
                                    class: 'logo'
                                }),
                                'Polythene Examples'
                            ])
                        }
                    },
                    content: [
                        m('.demo-content.index',
                            m('.index-list', links.map(function(linkGroup) {
                                return m.component(list, {
                                    header: {
                                        title: linkGroup.label,
                                        indent: true
                                    },
                                    tiles: linkGroup.links.map(function(link) {
                                        return item(link.name, link.url + '.html');
                                    })
                                });
                            }))),
                        github
                    ],
                    transform: onHeaderTransform
                })
            ];
        }
    };

    m.mount(document.body, content);
});