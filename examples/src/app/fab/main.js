define(function(require) {
    'use strict';

    var m = require('mithril'),
        fab = require('polythene/fab/fab'),
        nav = require('nav'),
        github = require('github'),
        fabIcon,
        block,
        titleBlock,
        content;

    require('polythene/layout/layout');
    require('css!app-css');
    require('css!./main');

    fabIcon = {
        svg: {
            iconset: 'mdi',
            name: 'plus'
        }
    };

    block = {
        view: function(ctrl, args) {
            return m.component(fab, args.fab);
        }
    };

    titleBlock = {
        view: function(ctrl, args) {
            return m('.p-block', {class: args.class || ''}, [
                m('.p-block-header', args.title),
                args.content
            ]);
        }
    };

    content = {
        view: function() {
            return [
                m.component(nav, {
                    baseFileName: 'fab',
                    title: 'Floating Action Button',
                    subtitle: 'Mithril version'
                }),
                m('div', 
                    m.component(titleBlock, {
                        title: 'Regular size',
                        content: [
                            m.component(block, {
                                fab: {
                                    icon: fabIcon,
                                    class: 'demo-fab',
                                    z: 1
                                }
                            })
                        ]
                    }),
                    m.component(titleBlock, {
                        title: 'Small size',
                        content: [
                            m.component(block, {
                                fab: {
                                    mini: true,
                                    icon: fabIcon,
                                    class: 'demo-fab green',
                                    z: 1
                                }
                            }),
                            m.component(block, {
                                fab: {
                                    icon: fabIcon,
                                    class: 'demo-fab mini red',
                                    z: 1
                                }
                            })
                        ]
                    }),
                    m.component(titleBlock, {
                        title: 'Dark theme, raised more',
                        class: 'dark-theme',
                        content: [
                            m.component(block, {
                                fab: {
                                    icon: fabIcon,
                                    class: 'demo-fab',
                                    z: 2
                                }
                            })
                        ]
                    }),
                    m.component(titleBlock, {
                        title: 'Fully raised',
                        content: [
                            m.component(block, {
                                fab: {
                                    icon: fabIcon,
                                    class: 'demo-fab',
                                    z: 5
                                }
                            })
                        ]
                    })
                ),
                github
            ];
        }
    };

    m.mount(document.body, content);
});