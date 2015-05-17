define(function(require) {
    'use strict';

    var NAME = 'Item',
        m = require('mithril'),
        item = require('polythene/item/item'),
        icon = require('polythene/icon/icon'),
        nav = require('nav'),
        github = require('github'),
        app,
        block,
        titleBlock,
        content,
        settingsIcon,
        accountIcon,
        accountCircleIcon;

    require('polythene/font-roboto/font-roboto');
    require('polythene/theme/theme');
    require('css!app-css');
    require('css!./main');

    settingsIcon = {
        class: 'md',
        svg: {
            group: 'action',
            name: 'settings'
        }
    };

    accountIcon = {
        class: 'md',
        svg: {
            group: 'action',
            name: 'account-box'
        }
    };

    accountCircleIcon = {
        class: 'md',
        svg: {
            group: 'action',
            name: 'account-circle'
        }
    };

    block = {
        view: function(ctrl, args) {
            return m('.p-block.p-inner-block', [
                m.component(item, args.item)
            ]);
        }
    };

    titleBlock = {
        view: function(ctrl, args) {
            return m('.p-block', [
                m('.p-block-header', args.title),
                args.content
            ]);
        }
    };

    content = m('.demo-content', [
        m.component(titleBlock, {
            title: 'Items with icon and label',
            content: [
                m.component(block, {
                    item: {
                        icon: settingsIcon,
                        label: 'Settings'
                    }
                }),
                m.component(block, {
                    item: {
                        icon: accountIcon,
                        label: 'Account'
                    }
                })
            ]
        }),
        m.component(titleBlock, {
            title: 'Items with label only',
            content: [
                m.component(block, {
                    item: {
                        label: 'Settings'
                    }
                }),
                m.component(block, {
                    item: {
                        label: 'Account'
                    }
                })
            ]
        }),
        m.component(titleBlock, {
            title: 'Links (using <a>)',
            content: [
                m.component(block, {
                    item: {
                        icon: settingsIcon,
                        label: 'Settings',
                        content: m('a', {
                            href: '#settings',
                            target: '_self'
                        })
                    }
                }),
                m.component(block, {
                    item: {
                        icon: accountIcon,
                        label: 'Account',
                        content: m('a', {
                            href: '#account',
                            target: '_self'
                        })
                    }
                })
            ]
        }),
        m.component(titleBlock, {
            title: 'Items sized with CSS',
            content: [
                m.component(block, {
                    item: {
                        class: 'font-scalable big',
                        icon: settingsIcon,
                        label: 'Settings'
                    }
                }),
                m.component(block, {
                    item: {
                        class: 'font-scalable big',
                        icon: accountIcon,
                        label: 'Account'
                    }
                }),
                m.component(block, {
                    item: {
                        class: 'font-scalable small',
                        icon: settingsIcon,
                        label: 'Settings'
                    }
                }),
                m.component(block, {
                    item: {
                        class: 'font-scalable small',
                        icon: accountIcon,
                        label: 'Account'
                    }
                })
            ]
        }),
        m.component(titleBlock, {
            title: 'Custom item',
            content: [
                m.component(block, {
                    item: {
                        class: 'contact-item',
                        icon: accountCircleIcon,
                        content: [
                            m('div[flex]', [
                                m('div', {
                                    class: 'name'
                                }, 'John Doe'),
                                m('div', {
                                    class: 'address'
                                }, '123 A Street, San Francisco, CA')
                            ]),
                            m.component(icon, {
                                attr: {
                                    role: 'img'
                                },
                                svg: {
                                    group: 'navigation',
                                    name: 'more-vert'
                                }
                            })
                        ]
                    }
                })
            ]
        }),

        github
    ]);

    app = {};
    app.view = function() {
        return [
            nav(NAME, content)
        ];
    };

    m.mount(document.body, app);
});