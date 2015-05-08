define(function(require) {
    'use strict';

    var m = require('mithril'),
        button = require('polythene/button/button'),
        nav = require('nav'),
        github = require('github'),
        block,
        buttonComponent,
        titleBlock,
        buttonRow,
        content;

    require('css!polythene/theme/theme');
    require('css!app-css');
    require('css!./main');

    block = {
        view: function(ctrl, args) {
            return m('.p-block.p-inner-block', [
                m.component(button, args.button)
            ]);
        }
    };

    buttonComponent = function(opts) {
        return m.component(button, opts);
    };

    buttonRow = function(opts) {
        return [{
            label: 'Normal',
            raised: opts.raised
        }, {
            label: 'Linked',
            url: {href: 'index.html'},
            raised: opts.raised
        }, {
            label: 'Disabled',
            disabled: true,
            raised: opts.raised
        }, {
            label: 'Wash only',
            ink: false,
            raised: opts.raised
        },
        {
            label: 'Ink only',
            ink: true,
            raised: opts.raised,
            wash: false
        }, {
            label: 'Raised more',
            raised: opts.raised,
            z: 2
        }];
    };

    titleBlock = {
        view: function(ctrl, args) {
            return m('.p-block', {
                class: args.class
            }, [
                m('.p-block-header', args.title),
                args.content.map(function(c) {
                    return buttonComponent(c);
                })
            ]);
        }
    };

    content = {
        view: function() {
            return [
                m.component(nav, {
                    baseFileName: 'button',
                    title: 'Button',
                    subtitle: 'Mithril version'
                }),
                m('div', 
                    m.component(titleBlock, {
                        title: 'Raised Light / Light theme',
                        class: '',
                        content: buttonRow({
                            raised: true
                        })
                    }),
                    m.component(titleBlock, {
                        title: 'Flat Light / Light theme',
                        content: buttonRow({
                            raised: false
                        })
                    }),
                    m.component(titleBlock, {
                        title: 'Raised Dark / Dark theme',
                        class: 'dark-theme',
                        content: buttonRow({
                            raised: true
                        })
                    }),
                    m.component(titleBlock, {
                        title: 'Flat Dark / Dark theme',
                        class: 'dark-theme',
                        content: buttonRow({
                            raised: false
                        })
                    }),
                    m.component(titleBlock, {
                        title: 'Custom label color',
                        class: 'custom-label',
                        content: buttonRow({
                            raised: false
                        })
                    }),
                    m.component(titleBlock, {
                        title: 'Custom background color',
                        class: 'custom-bg',
                        content: buttonRow({
                            raised: true
                        })
                    })
                ),
                github
            ];
        }
    };

    m.mount(document.body, content);
});