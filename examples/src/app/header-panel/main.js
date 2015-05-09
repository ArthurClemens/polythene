define(function (require) {
    'use strict';

    var NAME = 'Scroll Header Panel',
        m = require('mithril'),
        nav = require('nav'),
        kitchensinkContent = require('header-panel/kitchensink'),
        listTile = require('polythene/list-tile/list-tile'),
        headerPanel = require('polythene/header-panel/header-panel'),
        iconBtn = require('polythene/icon-button/icon-button'),
        github = require('github'),
        links,
        linkMap,
        routeMap,
        item,
        btn,
        toolbarRow,
        panel,
        template,
        repeatText,
        createBottomBarTemplate;

    require('css!polythene/theme/theme');
    require('css!app-css');
    require('css!index/main');
    require('css!./main');

    links = [{
        url: 'kitchensink',
        name: 'Kitchen sink of small panels',
        sub: 'waterfall transitions and toolbar components',
        icon: 'app/header-panel/svg/grid.svg'
    }, {
        url: 'demo1',
        name: 'Condenses variant 1',
        sub: 'mode "waterfall-tall"'
    }, {
        url: 'demo2',
        name: 'Condenses variant 2',
        sub: 'mode "waterfall-tall", tallClass "medium-tall"'
    }, {
        url: 'demo3',
        name: 'Animated'
    }, {
        url: 'demo4',
        name: 'No reveal'
    }, {
        url: 'demo5',
        name: 'Fixed header'
    }, {
        url: 'demo6',
        name: 'Keep condensed header'
    }];

    linkMap = {};
    links.map(function(link) {
        linkMap[link.url] = link;
    });

    item = function (link) {
        return m.component(listTile, {
            title: link.name,
            icon: {
                type: 'medium',
                class: 'index-cirle-icon',
                svg: link.icon ? {src: link.icon} : {
                    name: 'arrow-right',
                    iconset: 'mdi'
                }
            },
            url: {href: link.url, config: m.route}
        });
    };

    repeatText = function(text, count) {
        var out = '';
        while (count > 0) {
            out += text;
            count--;
        }
        return out;
    };

    template = [
        '<div class="content">',
        repeatText('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 16),
        '</div>'
    ].join('');

    createBottomBarTemplate = function(currentLink) {
        var text = '';
        if (currentLink.name) {
            text += currentLink.name;
        }
        if (currentLink.sub) {
            text += ': ';
            text += currentLink.sub;
        }
        return m.trust('<div class="bottom indent title">' + text + '</div>');
    };

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
            btn('navigation', 'arrow-back', 'header-panel.html'),
            m('span[flex]', title),
            btn('action', 'search')
        ];
    };

    panel = {
        view: function (ctrl, args) {
            return m('div', args.props, [
                m.component(headerPanel, args.panel)
            ]);
        }
    };

    var list = {};
    list.controller = function () {};
    list.view = function () {
        return nav(NAME, 
            m('div', {
                class: 'index'
            }, m('.index-list', links.map(function (link) {
                return item(link);
            }))),
            github
        );
    };

    var kitchensink = {};
    kitchensink.view = function () {
        var currentLink = linkMap[m.route()];
        return m('.' + currentLink.url, m.component(headerPanel, {
                tag: 'div[fit]',
                class: 'dark-theme',
                mode: 'waterfall-tall',
                tallClass: 'medium-tall',
                condenses: true,
                keepCondensedHeader: true,
                header: {
                    toolbar: {
                        topBar: toolbarRow(''),
                        bottomBar: createBottomBarTemplate(currentLink)
                    } 
                },
                content: kitchensinkContent
            }));
    };

    var demo1 = {};
    demo1.view = function () {
        var panel,
            currentLink,
            onHeaderTransform,
            minScale;

        currentLink = linkMap[m.route()];
        minScale = 0.65;

        onHeaderTransform = function (e) {
            var titleStyle = document.querySelector('.title').style;
            var m = e.height - e.condensedHeight;
            var scale = Math.max(minScale, (m - e.y) / (m / (1 - minScale)) + minScale);
            titleStyle.transform = titleStyle.webkitTransform =
                'scale(' + scale + ') translateZ(0)';
        };

        panel = m.component(headerPanel, {
            tag: 'div[fit]',
            class: 'dark-theme',
            mode: 'waterfall-tall',
            condenses: true,
            header: {
                toolbar: {
                    topBar: toolbarRow(''),
                    bottomBar: createBottomBarTemplate(currentLink)
                } 
            },
            content: m.trust(template),
            transform: onHeaderTransform
        });
        return m('.' + currentLink.url, panel);
    };

    var demo2 = {};
    demo2.view = function () {
        var currentLink = linkMap[m.route()];
        return m('.' + currentLink.url, m.component(headerPanel, {
                tag: 'div[fit]',
                class: 'dark-theme',
                mode: 'waterfall-tall',
                tallClass: 'medium-tall',
                condenses: true,
                header: {
                    toolbar: {
                        topBar: toolbarRow(''),
                        bottomBar: createBottomBarTemplate(currentLink)
                    } 
                },
                content: m.trust(template)
            }));
    };

    var demo3 = {};
    demo3.view = function () {
        var currentLink = linkMap[m.route()];
        return m('.' + currentLink.url, m.component(headerPanel, {
                tag: 'div[fit]',
                class: 'dark-theme animate',
                mode: 'waterfall-tall',
                animated: true,
                fixed: true,
                header: {
                    toolbar: {
                        topBar: toolbarRow(''),
                        bottomBar: createBottomBarTemplate(currentLink)
                    } 
                },
                content: m.trust(template)
            }));
    };

    var demo4 = {};
    demo4.view = function () {
        var currentLink = linkMap[m.route()];
        return m('.' + currentLink.url, m.component(headerPanel, {
                tag: 'div[fit]',
                class: 'dark-theme noReveal',
                mode: 'tall',
                condenses: true,
                noReveal: true,
                header: {
                    toolbar: {
                        topBar: toolbarRow(''),
                        bottomBar: createBottomBarTemplate(currentLink)
                    } 
                },
                content: m.trust(template)
            }));
    };

    var demo5 = {};
    demo5.view = function () {
        var currentLink = linkMap[m.route()];
        return m('.' + currentLink.url, m.component(headerPanel, {
                tag: 'div[fit]',
                class: 'dark-theme',
                fixed: true,
                header: {
                    toolbar: {
                        topBar: toolbarRow(''),
                        bottomBar: createBottomBarTemplate(currentLink)
                    } 
                },
                content: m.trust(template)
            }));
    };

    var demo6 = {};
    demo6.view = function () {
        var currentLink = linkMap[m.route()];
        return m('.' + currentLink.url, m.component(headerPanel, {
                tag: 'div[fit]',
                class: 'dark-theme keepCondensed',
                mode: 'waterfall-tall',
                condenses: true,
                keepCondensedHeader: true,
                headerHeight: 256,
                condensedHeaderHeight: 140,
                header: {
                    toolbar: {
                        topBar: toolbarRow(''),
                        bottomBar: createBottomBarTemplate(currentLink)
                    } 
                },
                content: m.trust(template)
            }));
    };

    routeMap = {
        '/': list
    };
    links.map(function(link) {
        routeMap[link.url] = eval(link.url);
    });

    m.route.mode = 'hash';
    m.route(document.body, '/', routeMap);
});
