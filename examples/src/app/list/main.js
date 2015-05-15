define(function(require) {
    'use strict';

    var NAME = 'List',
        m = require('mithril'),
        list = require('polythene/list/list'),
        listTile = require('polythene/list-tile/list-tile'),
        nav = require('nav'),
        github = require('github'),
        app,
        titleBlock,
        exampleTiles,
        titleLineText,
        infoLineText,
        exampleList,
        content;

    require('polythene/font-roboto/font-roboto');
    require('css!polythene/theme/theme');
    require('css!app-css');
    require('css!./main');

    titleLineText = 'Two-line item';
    infoLineText = 'Secondary text';

    titleBlock = {
        view: function(ctrl, args) {
            return m('.p-block', [
                m('.p-block-header', args.title),
                args.info ? m('p', args.info) : null,
                args.content
            ]);
        }
    };

    exampleTiles = [
        m.component(listTile, {
            title: titleLineText,
            info: infoLineText
        }),
        m.component(listTile, {
            title: titleLineText,
            info: infoLineText
        }),
        m.component(listTile, {
            title: titleLineText,
            info: infoLineText
        })
    ];

    exampleList = function(opts) {
        opts = opts || {};
        return m.component(list, {
            class: [opts.class ? opts.class : null, 'demo-list'].join(' '),
            mode: opts.mode,
            header: {
                title: 'Subheader',
                indent: opts.indent
            },
            tiles: [
                m.component(listTile, {
                    title: titleLineText,
                    info: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/1.png'
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    info: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/2.png'
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    info: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/3.png'
                    }
                })
            ]
        });
    };

    content = m('.demo-content', [
        m.component(titleBlock, {
            title: 'No subheader',
            content: m.component(list, {
                class: 'demo-list',
                tiles: exampleTiles
            })
        }),

        m.component(titleBlock, {
            title: 'Subheader',
            content: m.component(list, {
                class: 'demo-list',
                header: {
                    title: 'Subheader'
                },
                tiles: exampleTiles
            })
        }),

        m.component(titleBlock, {
            title: 'Avatars',
            content: m('div', [
                exampleList(),
                exampleList()
            ])
        }),

        m.component(titleBlock, {
            title: 'Avatars dark theme',
            content: m('.dark-theme', [
                exampleList(),
                exampleList()
            ])
        }),

        m.component(titleBlock, {
            title: 'Bordered list items',
            content: m.component(list, {
                class: 'demo-list',
                mode: 'bordered',
                header: {
                    title: 'Subheader'
                },
                tiles: exampleTiles
            })
        }),

        m.component(titleBlock, {
            title: 'Bordered list items with avatars',
            content: m('div', [
                exampleList({
                    mode: 'bordered'
                }),
                exampleList({
                    mode: 'bordered'
                })
            ])
        }),

        m.component(titleBlock, {
            title: 'Indented borders and subheaders',
            content: m('div', [
                exampleList({
                    mode: 'bordered-indent',
                    indent: true
                }),
                exampleList({
                    mode: 'bordered-indent',
                    indent: true
                })
            ])
        })
    ]);

    app = {};
    app.view = function() {
        return [
            nav(NAME, content),
            github
        ];
    };

    m.mount(document.body, app);
});