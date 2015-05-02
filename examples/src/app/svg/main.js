define(function(require) {
    'use strict';

    var m = require('mithril'),
        svg = require('polythene/svg/svg'),
        nav = require('nav'),
        github = require('github'),
        block,
        titleBlock,
        navContent,
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

    navContent = {
        view: function() {
            return m('div',
                m.component(nav, {
                    baseFileName: 'svg',
                    title: 'SVG',
                    subtitle: 'Mithril version'
                })
            );
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
                                className: 'demo-svg md'
                            }
                        }),
                        m.component(block, {
                            svg: {
                                group: 'content',
                                name: 'add',
                                className: 'demo-svg md'
                            }
                        }),
                        m.component(block, {
                            svg: {
                                group: 'navigation',
                                name: 'refresh',
                                className: 'demo-svg md'
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
                                className: 'demo-svg mdi'
                            }
                        }),
                        m.component(block, {
                            svg: {
                                name: 'emoticon-happy',
                                iconset: 'mdi',
                                className: 'demo-svg mdi'
                            }
                        }),
                        m.component(block, {
                            svg: {
                                name: 'headphones',
                                iconset: 'mdi',
                                className: 'demo-svg mdi'
                            }
                        })
                    ]
                }),

                m.component(titleBlock, {
                    title: 'svg.src',
                    content: [
                        m.component(block, {
                            svg: {
                                src: 'app/icon/img/ic_flight_24px.svg',
                                className: 'demo-svg google'
                            }
                        }),
                        m.component(block, {
                            svg: {
                                src: 'app/icon/img/ic_pin_drop_48px.svg',
                                className: 'demo-svg google'
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
                                className: 'demo-svg mdi'
                            }
                        }),
                        m.component(block, {
                            label: 'refresh: true',
                            svg: {
                                name: 'barcode',
                                iconset: 'mdi',
                                className: 'demo-svg mdi',
                                refresh: true
                            }
                        })
                    ]
                })
            );
        }
    };

    app = {};
    app.controller = function() {};
    app.view = function() {
        return m('.app', [
            navContent,
            dynamic,
            m('div', content),
            github
        ]);
    };

    m.route.mode = 'hash';
    m.route(document.body, '/', {
        '/': app,
        '/:refresh': app
    });

    //m.mount(document.body, content);
});