define(function(require) {
    'use strict';

    var NAME = 'Card',
        m = require('mithril'),
        card = require('polythene/card/card'),
        app,
        nav = require('nav'),
        github = require('github'),
        block,
        content;

    require('css!polythene/theme/theme');
    require('css!app-css');
    require('css!./main');

    block = {
        view: function(ctrl, args) {
            return m('.p-block', {class: args.class || ''}, [
                m('.p-block-header', args.label),
                m.component(card, args.card)
            ]);
        }
    };

    content = [
        m.component(block, {
            label: 'Normal',
            card: {
                class: 'demo-card',
                content: 'hello',
            }
        }),
        m.component(block, {
            label: 'Flat',
            card: {
                class: 'demo-card',
                content: 'hello',
                z: 0
            }
        }),
        m.component(block, {
            label: 'Raised',
            card: {
                class: 'demo-card',
                content: 'hello',
                z: 2
            }
        })
    ];

    app = {};
    app.view = function() {
        return [
            nav(NAME, content),
            github
        ];
    };

    m.mount(document.body, app);

});