define(function(require) {
    'use strict';

    var NAME = 'Icon Button',
        m = require('mithril'),
        icon = require('polythene/icon/icon'),
        iconBtn = require('polythene/icon-button/icon-button'),
        app,
        nav = require('nav'),
        github = require('github'),
        iconBlock,
        content,
        myIcon,
        myCustomIconComponent;

    require('css!polythene/theme/theme');
    require('css!app-css');
    require('css!./main');

    iconBlock = {
        view: function(ctrl, args) {
            return m('.p-block', {class: args.class || ''}, [
                m('.p-block-header', args.label),
                m.component(iconBtn, args.btn)
            ]);
        }
    };

    myIcon = {
        svg: {
            iconset: 'mdi',
            name: 'heart'
        },
        class: 'mdi'
    };

    myCustomIconComponent = m.component(icon, {
        src: 'app/icon/img/ic_chat_black_48dp.png'
    });

    content = m('.demo-content', [
        m.component(iconBlock, {
            label: 'Normal',
            btn: {
                icon: myIcon
            }
        }),
        m.component(iconBlock, {
            label: 'Colored',
            btn: {
                class: 'colored',
                icon: myIcon
            }
        }),
        m.component(iconBlock, {
            label: 'Disabled',
            btn: {
                disabled: true,
                icon: myIcon
            }
        }),
        m.component(iconBlock, {
            label: 'Dark theme',
            class: 'dark-theme',
            btn: {
                icon: myIcon
            }
        }),
        m.component(iconBlock, {
            label: 'Dark theme disabled',
            class: 'dark-theme',
            btn: {
                disabled: true,
                icon: myIcon
            }
        }),
        m.component(iconBlock, {
            label: 'Custom component with PNG',
            btn: {
                content: myCustomIconComponent
            }
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