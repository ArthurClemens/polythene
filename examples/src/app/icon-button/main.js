define(function(require) {
    'use strict';

    var m = require('mithril'),
        icon = require('polythene/icon/icon'),
        iconBtn = require('polythene/icon-button/icon-button'),
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
            return m('.p-block', {class: args.className || ''}, [
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
        className: 'mdi'
    };

    myCustomIconComponent = m.component(icon, {
        src: 'app/icon/img/ic_chat_black_48dp.png'
    });

    content = {
        view: function() {
            return [
                m.component(nav, {
                    baseFileName: 'icon-button',
                    title: 'Icon Button',
                    subtitle: 'Mithril version'
                }),
                m('div', 
                    m.component(iconBlock, {
                        label: 'Normal',
                        btn: {
                            icon: myIcon
                        }
                    }),
                    m.component(iconBlock, {
                        label: 'Colored',
                        btn: {
                            className: 'colored',
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
                        className: 'dark-theme',
                        btn: {
                            icon: myIcon
                        }
                    }),
                    m.component(iconBlock, {
                        label: 'Dark theme disabled',
                        className: 'dark-theme',
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
                ),
                github
            ];
        }
    };

    m.mount(document.body, content);
});