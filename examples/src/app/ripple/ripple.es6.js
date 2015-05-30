'use strict';

import m from 'mithril';
import ripple from 'polythene/ripple/ripple';
import list from 'polythene/list/list';
import listTile from 'polythene/list-tile/list-tile';
import toolbar from 'polythene/toolbar/toolbar';
import iconBtn from 'polythene/icon-button/icon-button';
import nav from 'app/app/nav';
import github from 'app/app/github';

require('polythene-theme/theme');
require('app/app/app.css!');
require('./ripple.css!');

const NAME = 'Ripple';

let app,
    titleBlock,
    titleLineText,
    infoLineText,
    iconButtons,
    btn,
    toolbarRow,
    content;

titleLineText = 'Two-line item';
infoLineText = 'Secondary text';

btn = function(group, name) {
    return m.component(iconBtn, {
        icon: {
            svg: {
                group: group,
                name: name
            }
        },
        after: m.component(ripple)
    });
};

toolbarRow = [
    btn('navigation', 'menu'),
    m('span[flex]', 'Toolbar'),
    btn('navigation', 'refresh'),
    btn('content', 'add')
];

iconButtons = function(opts, iconOpts) {
    opts = opts || {};
    iconOpts = iconOpts || {};
    return [
        m.component(iconBtn, {
            icon: {
                svg: {
                    group: 'navigation',
                    name: 'menu'
                },
                type: 'large',
                class: 'md'
            },
            wash: (iconOpts.wash !== undefined) ? iconOpts.wash : true,
            disabled: iconOpts.disabled,
            class: 'demo-button',
            after: m.component(ripple, opts)
        }),
        m.component(iconBtn, {
            icon: {
                svg: {
                    group: 'navigation',
                    name: 'menu'
                },
                class: 'md'
            },
            wash: (iconOpts.wash !== undefined) ? iconOpts.wash : true,
            disabled: iconOpts.disabled,
            class: 'demo-button',
            after: m.component(ripple, opts)
        })
    ];
};

titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {class: args.class}, [
            m('.p-block-header', args.title),
            args.content
        ]);
    }
};

content = m('.demo-content', [
    m.component(titleBlock, {
        title: 'Constrained ripple',
        content: iconButtons()
    }),

    m.component(titleBlock, {
        title: 'Unconstrained ripple',
        content: iconButtons({constrained: false}, {wash: false})
    }),

    m.component(titleBlock, {
        title: 'Disabled ripple',
        content: iconButtons({constrained: false, disabled: true}, {disabled: true})
    }),

    m.component(titleBlock, {
        title: 'Colored ripple',
        content: iconButtons({class: 'colored-ripple'}, {wash: false})
    }),

    m.component(titleBlock, {
        title: 'Dark ripple',
        class: 'dark-theme',
        content: iconButtons()
    }),

    m.component(titleBlock, {
        title: 'Large ripple',
        content: m.component(list, {
            class: 'demo-list demo-bordered',
            tiles: [
                m.component(listTile, {
                    title: titleLineText,
                    subtitle: infoLineText,
                    after: m.component(ripple)
                })
            ]
        })
    }),

    m.component(titleBlock, {
        title: 'Custom opacity and speed',
        content: m.component(list, {
            class: 'demo-list demo-bordered',
            tiles: [
                m.component(listTile, {
                    title: titleLineText,
                    subtitle: infoLineText,
                    after: m.component(ripple, {
                        class: 'colored-ripple',
                        initialOpacity: 0.6,
                        opacityDecayVelocity: 0.24
                    })
                })
            ]
        })
    }),

    m.component(titleBlock, {
        title: 'Callbacks',
        content: m.component(list, {
            class: 'demo-list demo-bordered',
            tiles: [
                m.component(listTile, {
                    title: titleLineText,
                    subtitle: infoLineText,
                    after: m.component(ripple, {
                        start: function(e) {
                            console.log('ripple start', e);
                        },
                        end: function(e) {
                            console.log('ripple end', e);
                        }
                    })
                })
            ]
        })
    }),

    m.component(titleBlock, {
        title: 'Combined ripples',
        content: m.component(toolbar, {
            mode: 'tall',
            topBar: toolbarRow,
            middleBar: m.trust('<div flex class="middle indent">label aligns to the middle</div>'),
            bottomBar: m.trust('<div class="bottom indent" style="color: #666; font-size: 18px;">some stuffs align to the bottom</div>'),
            after: m.component(ripple)
        })
    })

]);

app = {};
app.view = function() {
    return [
        nav(NAME, [content, github])
    ];
};

m.mount(document.body, app);
