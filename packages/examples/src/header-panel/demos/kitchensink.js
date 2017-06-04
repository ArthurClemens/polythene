import m from 'mithril';
import { HeaderPanel, IconButton, styler } from 'polythene';
import common from './common';
import style from './kitchensink-style';
styler.add('polythene-examples-header-panel-kitchensink', style);

const TITLE = 'Kitchen sink of small panels';
const SUBTITLE = 'waterfall transitions and toolbar components';

import iconMenu from 'mmsvg/google/msvg/navigation/menu';
import iconRefresh from 'mmsvg/google/msvg/navigation/refresh';

const btn = function(msvg) {
    return m(IconButton, {
        icon: {
            msvg: msvg
        }
    });
};

const toolbarRow = function(title) {
    return [
        btn(iconMenu),
        m('span.flex', title),
        btn(iconRefresh)
    ];
};

const panelBlock = {
    view: function(ctrl, args) {
        return m('.p-block', [
            m('.p-block-header', args.title),
            m('.horizontal.layout.wrap', {
                class: 'panel-row'
            }, [
                args.content.map(function(panel1) {
                    return m('.container', [
                        m(HeaderPanel, panel1)
                    ]);
                })
            ])
        ]);
    }
};

const content = m('.demo-content', [
    m(panelBlock, {
        title: 'Scroll modes',
        content: [
            {
                fixed: true,
                header: {
                    content: 'Standard'
                },
                content: m.trust(common.textContent('demo-panel-content'))
            }, {
                mode: 'seamed',
                fixed: true,
                header: {
                    content: 'Seamed'
                },
                content: m.trust(common.textContent('demo-panel-content'))
            }, {
                mode: 'waterfall',
                fixed: true,
                header: {
                    content: 'Waterfall'
                },
                content: m.trust(common.textContent('demo-panel-content'))
            }, {
                mode: 'waterfall-tall',
                fixed: true,
                header: {
                    content: 'Waterfall tall'
                },
                content: m.trust(common.textContent('demo-panel-content'))
            }, {
                mode: 'waterfall-tall',
                tallClass: 'medium-tall',
                fixed: true,
                header: {
                    content: 'Waterfall medium-tall'
                },
                content: m.trust(common.textContent('demo-panel-content'))
            }, {
                mode: 'scroll',
                header: {
                    content: 'Scroll'
                },
                content: m.trust(common.textContent('demo-panel-content'))
            }, {
                mode: 'waterfall-tall',
                fixed: true,
                animated: true,
                header: {
                    content: 'Waterfall tall animated'
                },
                content: m.trust(common.textContent('demo-panel-content'))
            }
            // TODO: Cover
        ]
    }),
    m(panelBlock, {
        title: 'Toolbar as header',
        content: [{
            fixed: true,
            header: {
                toolbar: {
                    class: 'pe-dark-theme',
                    content: toolbarRow('Toolbar component')
                }
            },
            content: m.trust(common.textContent('demo-panel-content'))
        }, {
            mode: 'waterfall',
            fixed: true,
            header: {
                toolbar: {
                    class: 'pe-dark-theme',
                    content: toolbarRow('Toolbar waterfall')
                }
            },
            content: m.trust(common.textContent('demo-panel-content'))
        }, {
            mode: 'tall',
            fixed: true,
            animated: true,
            header: {
                toolbar: {
                    mode: 'tall',
                    class: 'pe-dark-theme',
                    content: toolbarRow('Tall animated')
                }
            },
            content: m.trust(common.textContent('demo-panel-content'))
        }, {
            mode: 'waterfall-tall',
            fixed: true,
            shadow: false,
            animated: true,
            header: {
                toolbar: {
                    mode: 'tall',
                    class: 'pe-dark-theme',
                    content: toolbarRow('Animated no shadow')
                }
            },
            content: m.trust(common.textContent('demo-panel-content'))
        }]
    }),
    m(panelBlock, {
        title: 'Condensing',
        content: [{
            mode: 'waterfall-tall',
            condenses: true,
            header: {
                toolbar: {
                    mode: 'tall',
                    class: 'pe-dark-theme',
                    topBar: toolbarRow(),
                    bottomBar: m.trust('<div class="flex bottom pe-toolbar__title--indent">Not fixed condenses</div><div class="spacer-right"></div>')
                }
            },
            content: m.trust(common.textContent('demo-panel-content'))
        }, {
            mode: 'waterfall-tall',
            condenses: true,
            tallClass: 'medium-tall',
            header: {
                toolbar: {
                    mode: 'tall',
                    class: 'pe-dark-theme',
                    topBar: toolbarRow(),
                    bottomBar: m.trust('<div class="flex bottom pe-toolbar__title--indent">tallClass "medium-tall"</div><div class="spacer-right"></div>')
                }
            },
            content: m.trust(common.textContent('demo-panel-content'))
        }, {
            mode: 'waterfall-tall',
            condenses: true,
            keepCondensedHeader: true,
            header: {
                toolbar: {
                    mode: 'tall',
                    class: 'pe-dark-theme',
                    topBar: toolbarRow(),
                    bottomBar: m.trust('<div class="flex bottom pe-toolbar__title--indent">Keep condensed header</div><div class="spacer-right"></div>')
                }
            },
            content: m.trust(common.textContent('demo-panel-content'))
        }]
    }),
    m(panelBlock, {
        title: 'Custom style',
        content: [{
            fixed: true,
            header: m('.pe-header.custom-header', 'Custom styled header'),
            content: m.trust(common.textContent('demo-panel-content'))
        }]
    })
]);

const module = {};
module.view = function() {
    return m('.demo-header-panel.kitchensink', m(HeaderPanel, {
        class: 'pe-header-panel--fit',
        mode: 'waterfall-tall',
        tallClass: 'medium-tall',
        condenses: true,
        keepCondensedHeader: true,
        header: {
            toolbar: {
                topBar: common.toolbarRow(''),
                bottomBar: common.createBottomBar(TITLE, SUBTITLE)
            }
        },
        content: content
    }));
};

module.hideNav = true;

export default module;
