define(function(require) {
    'use strict';

    var NAME = 'SVG',
        m = require('mithril'),
        svg = require('polythene/svg/svg'),
        nav = require('nav'),
        github = require('github'),
        block,
        titleBlock,
        content,
        app;

    require('css!polythene/theme/theme');
    require('css!app-css');
    require('css!./main');

    block = {
        view: function(ctrl, args) {
            return m('.demo-icon', [
                m.component(svg, args.svg),
                m('span', args.label)
            ]);
        }
    };

    titleBlock = {
        view: function(ctrl, args) {
            return m('.p-block', [
                m('.p-block-header', args.title),
                args.info ? args.info : null,
                m('.demo-icons', args.content)
            ]);
        }
    };

    content = {
        view: function() {
            return m('div', [
                m.component(titleBlock, {
                    title: 'Iconset: Material Design Icon Font',
                    info: m('p',
                        m.trust('SVG icons from <a href="https://github.com/zavoloklom/material-design-iconic-font">Material Design Iconic Font</a>')
                    ),
                    content: [
                        m.component(block, {
                            svg: {
                                group: 'navigation',
                                name: 'menu',
                                class: 'demo-svg md'
                            }
                        }),
                        m.component(block, {
                            svg: {
                                group: 'content',
                                name: 'add',
                                class: 'demo-svg md'
                            }
                        }),
                        m.component(block, {
                            svg: {
                                group: 'navigation',
                                name: 'refresh',
                                class: 'demo-svg md'
                            }
                        })
                    ]
                }),

                m.component(titleBlock, {
                    title: 'Iconset: Templarian Material Design',
                    info: m('p',
                        m.trust('SVG icons from <a href="https://github.com/Templarian/MaterialDesign">Templarian / Material Design</a>')
                    ),
                    content: [
                        m.component(block, {
                            svg: {
                                name: 'barcode',
                                iconset: 'mdi',
                                class: 'demo-svg mdi'
                            }
                        }),
                        m.component(block, {
                            svg: {
                                name: 'emoticon-happy',
                                iconset: 'mdi',
                                class: 'demo-svg mdi'
                            }
                        }),
                        m.component(block, {
                            svg: {
                                name: 'headphones',
                                iconset: 'mdi',
                                class: 'demo-svg mdi'
                            }
                        })
                    ]
                }),

                m.component(titleBlock, {
                    title: 'File reference',
                    info: m('p',
                        m.trust('src: file.svg')
                    ),
                    content: [
                        m.component(block, {
                            svg: {
                                src: 'app/icon/img/ic_flight_24px.svg',
                                class: 'demo-svg google'
                            }
                        }),
                        m.component(block, {
                            svg: {
                                src: 'app/icon/img/ic_pin_drop_48px.svg',
                                class: 'demo-svg google'
                            }
                        })
                    ]
                })
            ]);
        }
    };

    var dynamic = {
        view: function() {
            return m('div',
                m.component(titleBlock, {
                    title: 'Dynamic content',
                    info: m('p',
                        m('a', {
                            href: '#',
                            onclick: function(e) {
                                e.preventDefault();
                                m.route('/' + new Date().getMilliseconds());
                            }
                        }, 'Refresh'),
                        m.trust(' '),
                        m('span.secondary', new Date())
                    ),
                    content: [
                        m.component(block, {
                            label: 'cached (default)',
                            svg: {
                                name: 'headphones',
                                iconset: 'mdi',
                                class: 'demo-svg mdi'
                            }
                        }),
                        m.component(block, {
                            label: 'refresh: true',
                            svg: {
                                name: 'barcode',
                                iconset: 'mdi',
                                class: 'demo-svg mdi',
                                refresh: true
                            }
                        })
                    ]
                })
            );
        }
    };

    app = {};
    app.view = function() {
        return [
            nav(NAME, [
                dynamic,
                m('div', content)
            ]),
            github
        ];
    };

    m.route.mode = 'hash';
    m.route(document.body, '/', {
        '/': app,
        '/:refresh': app
    });

});