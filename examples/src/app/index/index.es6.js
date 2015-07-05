'use strict';

import _ from 'lodash';
import m from 'mithril';
import icon from 'polythene/icon/icon';
import list from 'polythene/list/list';
import listTile from 'polythene/list-tile/list-tile';
import headerPanel from 'polythene/header-panel/header-panel';
import nav from 'app/app/nav';
import github from 'app/app/github';

require('polythene-theme/theme');
require('app/app/app.css!');
require('./index.css!');

const links = [{
    label: 'Combined components',
    links: [{
        url: 'header-panel.html',
        config: null,
        name: 'Header Panel'
    }, {
        url: 'infinite.html',
        config: null,
        name: 'Header Panel with infinite scroll'
    }, {
        url: '/toolbar',
        import: 'app/toolbar/toolbar',
        name: 'Toolbar'
    }, {
        url: '/list',
        import: 'app/list/list',
        name: 'List'
    }, {
        url: '/dialog',
        import: 'app/dialog/dialog',
        name: 'Dialog'
    }]
}, {
    label: 'Components',
    links: [{
        url: '/card',
        import: 'app/card/card',
        name: 'Card'
    }, {
        url: '/tabs',
        import: 'app/tabs/tabs',
        name: 'Tabs'
    }, {
        url: '/button',
        import: 'app/button/button',
        name: 'Button'
    }, {
        url: '/icon-button',
        import: 'app/icon-button/icon-button',
        name: 'Icon Button'
    }, {
        url: '/fab',
        import: 'app/fab/fab',
        name: 'Floating Action Button'
    }, {
        url: '/item',
        import: 'app/item/item',
        name: 'Item'
    }, {
        url: '/list-tile',
        import: 'app/list-tile/list-tile',
        name: 'List Tile'
    }]
}, {
    label: 'Elementary components',
    links: [{
        url: '/svg',
        import: 'app/svg/svg',
        name: 'SVG'
    }, {
        url: '/icon',
        import: 'app/icon/icon',
        name: 'Icon'
    }, {
        url: '/ripple',
        import: 'app/ripple/ripple',
        name: 'Ripple'
    }, {
        url: '/shadow',
        import: 'app/shadow/shadow',
        name: 'Shadow'
    }, {
        url: '/element',
        name: 'Element',
        import: 'app/element/element',
        hidden: true
    }]
}];

let linkMap = {};
_.forEach(_.flatten(_.pluck(links, 'links')), function(link) {
    linkMap[link.url] = link;
});

const item = function(link) {
    return m.component(listTile, {
        title: link.name,
        icon: {
            type: 'medium',
            class: 'index-cirle-icon',
            svg: {
                name: 'arrow-right',
                iconSet: 'mdi'
            }
        },
        url: {
            href: link.url,
            config: (link.config !== undefined) ? link.config : m.route
        }
    });
};

const content = {
    view: function() {
        let minScale = 22 / 32;
        let onHeaderTransform = function(e) {
            let titleStyle = document.querySelector('.title').style;
            let middle = e.height - e.condensedHeight;
            let scale = Math.max(minScale, (middle - e.y) / (middle / (1 - minScale)) + minScale);
            titleStyle.transform = titleStyle.webkitTransform =
                'scale(' + scale + ') translateZ(0)';
        };

        return m('.demo-content',
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
                    m('.index',
                        m('.index-list', links.map(function(linkGroup) {
                            return m.component(list, {
                                header: {
                                    title: linkGroup.label,
                                    indent: true
                                },
                                tiles: linkGroup.links.map(function(link) {
                                    return link.hidden ? null : item(link);
                                })
                            });
                        }))
                    ),
                    github
                ],
                transform: onHeaderTransform
            })
        );
    }
};

window.dialog = null;

let app = {};
app.controller = () => {
    let module = m.prop();
    let loading = m.prop(false);

    const link = linkMap[m.route()];
    if (link) {
        const importPath = link.import;
        if (importPath) {
            loading(true);
            System.import(importPath).then(function(imported) {
                loading(false);
                module(imported);
                m.redraw();
            });
        }
    }
    return {
        module: module,
        loading: loading
    };
};
app.view = (ctrl) => {
    if (ctrl.loading()) {
        return {subtree: 'retain'};
    }
    const module = ctrl.module();
    if (module) {
        const name = linkMap[m.route()].name;
        return [
            window.dialog ? window.dialog.call() : null,
            nav(name, [
                m('.demo-content', m.component(module)),
                github
            ])
        ];
    } else {
        return m.component(content);
    }
};

m.route.mode = 'hash';
m.route(document.body, '/', {
    '/:any...': app
});
