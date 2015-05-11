define(function(require) {
    'use strict';

    var NAME = 'Card',
        m = require('mithril'),
        card = require('polythene/card/card'),
        app,
        nav = require('nav'),
        github = require('github'),
        titleLineText,
        infoLineText,
        block,
        content;

    require('css!polythene/theme/theme');
    require('css!app-css');
    require('css!./main');

    titleLineText = 'Title';
    infoLineText = 'Subhead';

    block = {
        view: function(ctrl, args) {
            return m('.p-block', {
                class: args.class || ''
            }, [
                m('.p-block-header', args.label),
                args.card ? m.component(card, args.card) : null,
                args.cards ? args.cards.map(function(cardArgs) {
                    return m.component(card, cardArgs);
                }) : null,
            ]);
        }
    };

    content = [
        m.component(block, {
            label: 'Depth',
            cards: [{
                class: 'demo-card',
                content: 'Normal',
            }, {
                class: 'demo-card',
                content: 'Flat',
                z: 0
            }, {
                class: 'demo-card',
                content: 'Raised',
                z: 2
            }]
        }),
        m.component(block, {
            label: 'Media',
            card: {
                class: 'demo-card',
                media: m('img', {
                    src: 'app/images/bg1.jpg'
                }),
                content: 'hello'
            }
        }),
        m.component(block, {
            label: 'Header with icon',
            card: {
                class: 'demo-card',
                header: {
                    title: titleLineText,
                    info: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/1.png'
                    }
                },
                media: m('img', {
                    src: 'app/images/bg1.jpg'
                }),
                content: 'hello'
            }
        }),
        m.component(block, {
            label: 'Primary text',
            card: {
                class: 'demo-card',
                primary: {
                    title: 'Primary title',
                    info: 'Subtitle'
                },
                media: m('img', {
                    src: 'app/images/bg1.jpg'
                }),
                content: 'hello'
            }
        }),
        m.component(block, {
            label: 'Combined',
            cards: [{
                class: 'demo-card',
                header: {
                    title: titleLineText,
                    info: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/1.png'
                    }
                }
            }]
        }),
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