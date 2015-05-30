'use strict';

import _ from 'lodash';
import m from 'mithril';
import icon from 'polythene/icon/icon';
import list from 'polythene/list/list';
import listTile from 'polythene/list-tile/list-tile';
import headerPanel from 'polythene/header-panel/header-panel';
import github from 'app/app/github';

require('polythene-theme/theme');
require('app/app/app.css!');
require('./index.css!');

let linkMap,
    item,
    content,
    links;

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
                iconSet: 'mdi'
            }
        },
        url: {
            href: url
        }
    });
};

content = {
    view: function() {
        let minScale,
            onHeaderTransform;

        minScale = 20/32;

        onHeaderTransform = function(e) {
            let titleStyle = document.querySelector('.title').style;
            let middle = e.height - e.condensedHeight;
            let scale = Math.max(minScale, (middle - e.y) / (middle / (1 - minScale)) + minScale);
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
                    m('.demo-content',
                        m('.index',
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
                            })))
                        ),
                    github
                ],
                transform: onHeaderTransform
            })
        ];
    }
};

m.mount(document.body, content);
