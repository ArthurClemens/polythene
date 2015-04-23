define(function(require) {
    'use strict';

    var m = require('mithril'),
        _ = require('lodash'),
        marked = require('marked'),
        listTile = require('polythene/list-tile/list-tile'),
        icon = require('polythene/icon/icon'),
        app,
        doc,
        navItem,
        drawer,
        main,
        links,
        defaultTitle,
        baseUrl;

    require('polythene/layout/layout');
    require('css!polythene/polythene/typography');
    require('polythene/font-roboto/font-roboto');
    require('css!app-css');

    defaultTitle = 'Polythene Documentation';

    links = [{
        url: 'polythene',
        name: 'Introduction',
        title: defaultTitle
    }, {
        url: 'svg',
        name: 'SVG'
    }, {
        url: 'icon',
        name: 'Icon'
    }, {
        url: 'icon-button',
        name: 'Icon Button'
    }, {
        url: 'item',
        name: 'Item'
    }, {
        url: 'list-tile',
        name: 'List Tile'
    }, {
        url: 'paper-shadow',
        name: 'Paper Shadow'
    }, {
        url: 'toolbar',
        name: 'Toolbar'
    }, {
        url: 'header-panel',
        name: 'Header Panel'
    }, {
        url: 'font-roboto',
        name: 'Roboto Font'
    }, {
        url: 'layout',
        name: 'Layout'
    }];

    baseUrl = links[0].url;

    navItem = function(title, url, highlight) {
        return m.component(listTile, {
            title: title,
            url: url,
            className: highlight ? 'highlight' : ''
        });
    };

    drawer = function() {
        var highlight;
        return m('.drawer', [
            m.component(icon, {
                svg: {
                    src: 'app/img/recycle.svg'
                },
                className: 'logo'
            }),
            m('h2', m('a', {
                href: baseUrl,
                config: m.route
            }, 'Polythene')),
            links.map(function(link) {
                highlight = (m.route() === link.url);
                return navItem(link.name, link.url, highlight);
            })
        ]);
    };

    main = function(content) {
        var parsed = content ? marked(content) : '';
        return m('.main', m.trust(parsed));
    };

    app = {};

    app.vm = {
        init: function() {
            app.vm.data = function() {
                var moduleName, url;
                moduleName = m.route.param('module');
                url = 'app/docs/' + moduleName + '.md';
                return m.request({
                    method: 'GET',
                    url: url,
                    deserialize: function(value) {
                        return value;
                    }
                });
            };

            app.vm.currentLink = function() {
                var moduleName, currentLink;
                moduleName = m.route.param('module');
                currentLink = _.find(links, function(link) {
                    return link.url === moduleName;
                });
                return currentLink;
            };

            app.vm.updateHead = function() {
                var currentLink, title;
                currentLink = app.vm.currentLink() || {};
                title = currentLink.title || (currentLink.name + ' - ' + defaultTitle);
                document.title = title;
            };
        }
    };

    app.controller = function() {
        app.vm.init();
        this.data = app.vm.data().then(function(data) {
            return data;
        }, function(error) {
            if (console) console.log('no data loaded:', error);
        });
    };

    app.view = function(ctrl) {
        var docData;
        docData = ctrl.data();
        return [
            m('.scaffold[layout][horizontal][reverse]', {config: app.vm.updateHead}, [
                main(docData),
                drawer()
            ]),
            m('.footer', m.trust('Polythene by Arthur Clemens 2015. Project page on <a href="https://github.com/ArthurClemens/Polythene">Github</a>. Logo icon design by <a href="https://thenounproject.com/acider/">Miguel C Balandrano</a>.'))
        ];
    };

    doc = {};
    

    m.route.mode = 'hash';
    m.route(document.body, baseUrl, {
        ':module': app
    });

});