'use strict';

import m from 'mithril';
import headerPanel from 'polythene/header-panel/header-panel';
import iconBtn from 'polythene/icon-button/icon-button';

require('./kitchensink.css!');

let btn,
    toolbarRow,
    panel,
    panelBlock,
    content,
    repeatText,
    template;

repeatText = function(text, count) {
    let out = '';
    while (count > 0) {
        out += text;
        count--;
    }
    return out;
};

template = [
    '<div class="demo-content">',
    repeatText('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 16),
    '</div>'
].join('');

btn = function(group, name) {
    return m.component(iconBtn, {
        icon: {
            svg: {
                group: group,
                name: name
            }
        }
    });
};

toolbarRow = function(title) {
    return [
        btn('navigation', 'menu', '#'),
        m('span.flex', title),
        btn('navigation', 'refresh')
    ];
};

panel = {
    view: function(ctrl, args) {
        return m('.container', [
            m.component(headerPanel, args.panel)
        ]);
    }
};

panelBlock = {
    view: function(ctrl, args) {
        return m('.p-block', [
            m('.p-block-header', args.title),
            m('.horizontal.layout.wrap', {class: 'panel-row'}, [
                args.content.map(function(panel1) {
                    return m('.container', [
                        m.component(headerPanel, panel1)
                    ]);
                })
            ])
        ]);
    }
};

content = m('.demo-content', [
    m.component(panelBlock, {
        title: 'Scroll modes',
        content: [{
                fixed: true,
                header: {
                    content: 'Standard'
                },
                content: m.trust(template)
            }, {
                mode: 'seamed',
                fixed: true,
                header: {
                    content: 'Seamed'
                },
                content: m.trust(template)
            }, {
                mode: 'waterfall',
                fixed: true,
                header: {
                    content: 'Waterfall'
                },
                content: m.trust(template)
            }, {
                mode: 'waterfall-tall',
                fixed: true,
                header: {
                    content: 'Waterfall tall'
                },
                content: m.trust(template)
            }, {
                mode: 'waterfall-tall',
                tallClass: 'medium-tall',
                fixed: true,
                header: {
                    content: 'Waterfall medium-tall'
                },
                content: m.trust(template)
            }, {
                mode: 'scroll',
                header: {
                    content: 'Scroll'
                },
                content: m.trust(template)
            }, {
                mode: 'waterfall-tall',
                fixed: true,
                animated: true,
                header: {
                    content: 'Waterfall tall animated'
                },
                content: m.trust(template)
            }
            // TODO: Cover
        ]
    }),
    m.component(panelBlock, {
        title: 'Toolbar as header',
        content: [{
            fixed: true,
            header: {
                toolbar: {
                    content: toolbarRow('Toolbar component')
                }
            },
            content: m.trust(template)
        }, {
            mode: 'waterfall',
            fixed: true,
            header: {
                toolbar: {
                    content: toolbarRow('Toolbar waterfall')
                }
            },
            content: m.trust(template)
        }, {
            mode: 'tall',
            fixed: true,
            animated: true,
            header: {
                toolbar: {
                    mode: 'tall',
                    content: toolbarRow('Tall animated')
                }
            },
            content: m.trust(template)
        }, {
            mode: 'waterfall-tall',
            fixed: true,
            shadow: false,
            animated: true,
            header: {
                toolbar: {
                    mode: 'tall',
                    content: toolbarRow('Animated no shadow')
                }
            },
            content: m.trust(template)
        }]
    }),
    m.component(panelBlock, {
        title: 'Condensing',
        content: [{
            mode: 'waterfall-tall',
            condenses: true,
            header: {
                toolbar: {
                    mode: 'tall',
                    topBar: toolbarRow(),
                    bottomBar: m.trust('<div flex class="bottom indent">Not fixed condenses</div>')
                }
            },
            content: m.trust(template)
        }, {
            mode: 'waterfall-tall',
            condenses: true,
            tallClass: 'medium-tall',
            header: {
                toolbar: {
                    mode: 'tall',
                    topBar: toolbarRow(),
                    bottomBar: m.trust('<div flex class="bottom indent">tallClass "medium-tall"</div>')
                }
            },
            content: m.trust(template)
        }, {
            mode: 'waterfall-tall',
            condenses: true,
            keepCondensedHeader: true,
            header: {
                toolbar: {
                    mode: 'tall',
                    topBar: toolbarRow(),
                    bottomBar: m.trust('<div flex class="bottom indent">Keep condensed header</div>')
                }
            },
            content: m.trust(template)
        }]
    }),
    m.component(panelBlock, {
        title: 'Custom style',
        content: [{
            fixed: true,
            header: m('.header.demo-header', 'Custom styled header'),
            content: m.trust(template)
        }]
    })
]);

export default content;
