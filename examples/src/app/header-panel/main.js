define(function(require) {
    'use strict';

    var m = require('mithril'),
        headerPanel = require('polythene/header-panel/header-panel'),
        iconBtn = require('polythene/icon-button/icon-button'),
        nav = require('nav'),
        btn,
        toolbarRow,
        panel,
        content,
        template;

    require('css!polythene/theme/theme');
    require('css!app-css');
    require('css!./main');

    template = [
        '<div class="content">', [
            'Once a dream did weave a shade',
            'O\'er my angel-guarded bed,',
            'That an emmet lost its way',
            'Where on grass methought I lay.',
            '',
            'Troubled, wildered, and forlorn,',
            'Dark, benighted, travel-worn,',
            'Over many a tangle spray,',
            'All heart-broke, I heard her say:',
            '',
            '"Oh my children! do they cry,',
            'Do they hear their father sigh?',
            'Now they look abroad to see,',
            'Now return and weep for me."',
            '',
            'Pitying, I dropped a tear:',
            'But I saw a glow-worm near,',
            'Who replied, "What wailing wight',
            'Calls the watchman of the night?',
            '',
            '"I am set to light the ground,',
            'While the beetle goes his round:',
            'Follow now the beetle\'s hum;',
            'Little wanderer, hie thee home!"'
        ].join('<br />'),
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
            btn('navigation', 'menu'),
            m('span[flex]', title),
            btn('navigation', 'refresh')
        ];
    };

    panel = {
        view: function(ctrl, args) {
            return m('div', args.props, [
                m.component(headerPanel, args.panel)
            ]);
        }
    };

    content = {
        view: function() {
            return [
                m.component(nav, {
                    baseFileName: 'header-panel',
                    title: 'Header Panel',
                    subtitle: 'Mithril version'
                }),
                m('.p-block p-block-separate',
                    m('p', 'Kitchen sink examples of header panels with waterfall transitions and toolbar components.')
                ),
                m.component(panel, {
                    props: {
                        className: 'flex-container'
                    },
                    panel: {
                        tag: 'div[flex]',
                        header: {
                            content: 'Flex'
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        header: {
                            content: 'Standard'
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        mode: 'seamed',
                        header: {
                            content: 'Seamed'
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        mode: 'waterfall',
                        header: {
                            content: 'Waterfall'
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        mode: 'waterfall-tall',
                        header: {
                            content: 'Waterfall tall'
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        mode: 'waterfall-tall',
                        tallClass: 'medium-tall',
                        header: {
                            content: 'Waterfall tall (tallClass: medium-tall)'
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        mode: 'scroll',
                        header: {
                            content: 'Scroll'
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        header: {
                            toolbar: {
                                content: toolbarRow('Toolbar comp')
                            }
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        mode: 'waterfall',
                        header: {
                            toolbar: {
                                content: toolbarRow('Waterfall')
                            }
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        mode: 'waterfall-tall',
                        header: {
                            toolbar: {
                                mode: 'tall',
                                content: toolbarRow('Waterfall tall')
                            }
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        mode: 'waterfall-tall',
                        shadow: false,
                        header: {
                            toolbar: {
                                mode: 'tall',
                                content: toolbarRow('No shadow')
                            }
                        },
                        content: m.trust(template)
                    }
                }),
                m.component(panel, {
                    props: {
                        className: 'container'
                    },
                    panel: {
                        header: m('.demo-header', 'My custom header'),
                        content: m.trust(template)
                    }
                })
            ];
        }
    };

    m.mount(document.body, content);
});