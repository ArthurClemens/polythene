define(function(require) {
    'use strict';

    var NAME = 'Shadow',
        m = require('mithril'),
        shadow = require('polythene/shadow/shadow'),
        nav = require('nav'),
        github = require('github'),
        app,
        titleBlock,
        interactiveShadow,
        content;

    require('css!polythene/theme/theme');
    require('css!app-css');
    require('css!./main');

    titleBlock = {
        view: function(ctrl, args) {
            return m('.p-block', [
                m('.p-block-header', args.title),
                args.content
            ]);
        }
    };

    interactiveShadow = {
        controller: function(args) {
            var STEPS = 5;

            return {
                z: m.prop(STEPS + args.initZ),

                getZ: function() {
                    return Math.abs((this.z() % (2 * STEPS)) - STEPS);
                }
            };
        },
        view: function(ctrl, args) {
            return m('div[animated][layout][horizontal]', {
                class: args.class,
                onclick: function() {
                    var z = ctrl.z();
                    ctrl.z(++z);
                }
            }, [
                m('div[self-center]', 'z = ' + ctrl.getZ()),
                m.component(shadow, {
                    z: ctrl.getZ(),
                    animated: true,
                    refresh: true
                })
            ]);
        }
    };

    content = function() {
        var indices = [0, 1, 2, 3, 4, 5];
        var tapItems = [{
            id: 1,
            class: 'card',
            initZ: 1
        }, {
            id: 2,
            class: 'fab',
            initZ: 3
        }];
        return [
            m.component(titleBlock, {
                title: 'Shadows',
                content: m('div[layout][horizontal]', [
                    indices.map(function(z) {
                        return m('div[layout][horizontal]', {
                            class: 'card'
                        }, [
                            m('div[self-center]', 'z = ' + z),
                            m.component(shadow, {
                                z: z
                            })
                        ]);
                    })
                ])
            }),
            m.component(titleBlock, {
                title: 'Interactive and animated',
                content: m('div[layout][horizontal]', [
                    tapItems.map(function(item) {
                        return m.component(interactiveShadow, {
                            id: item.id,
                            class: item.class,
                            initZ: item.initZ
                        });
                    })
                ])
            })
        ];
    };

    app = {};
    app.view = function() {
        return [
            nav(NAME, content()),
            github
        ];
    };

    m.mount(document.body, app);
});