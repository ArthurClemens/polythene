'use strict';

import m from 'mithril';
import item from 'polythene/item/item';
import icon from 'polythene/icon/icon';
import nav from 'app/app/nav';
import github from 'app/app/github';

require('polythene-theme/theme');
require('app/app/app.css!');
require('./item.css!');

const NAME = 'Item';

let app,
    block,
    titleBlock,
    content,
    settingsIcon,
    accountIcon,
    accountCircleIcon;

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

    m('.p-block.p-block-separate',
        m('p', m.trust('This component does not belong to the Material Design specification, but was introduced by <a href="https://www.polymer-project.org/0.5/docs/elements/core-item.html" target="_blank">Polymer</a>.'))
    ),

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
    })
]);

app = {};
app.view = function() {
    return [
        nav(NAME, [content, github])
    ];
};

m.mount(document.body, app);
