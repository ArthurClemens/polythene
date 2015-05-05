define(function(require) {
    'use strict';

    var m = require('mithril'),
        headerPanel = require('polythene/header-panel/header-panel'),
        iconBtn = require('polythene/icon-button/icon-button'),
        btn,
        toolbarRow,
        panel,
        content,
        repeatText,
        template;

    require('css!./kitchensink');

    repeatText = function(text, count) {
        var out = '';
        while (count > 0) {
            out += text;
            count--;
        }
        return out;
    };

    template = [
        '<div class="content">',
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

    toolbarRow = function (title) {
        return [
            btn('navigation', 'menu', '#'),
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

    content = [
        m.component(panel, {
            props: {
                className: 'container'
            },
            panel: {
                fixed: true,
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
                fixed: true,
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
                fixed: true,
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
                fixed: true,
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
                fixed: true,
                animated: true,
                header: {
                    content: 'Waterfall tall animated'
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
                fixed: true,
                header: {
                    content: 'Waterfall medium-tall'
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
                fixed: true,
                header: {
                    toolbar: {
                        content: toolbarRow('Toolbar component')
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
                fixed: true,
                header: {
                    toolbar: {
                        content: toolbarRow('Toolbar waterfall')
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
            }
        }),
        m.component(panel, {
            props: {
                className: 'container'
            },
            panel: {
                mode: 'waterfall-tall',
                fixed: true,
                shadow: false,
                animated: true,
                header: {
                    toolbar: {
                        mode: 'tall',
                        content: toolbarRow('Waterfall no shadow')
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
                fixed: true,
                header: m('.demo-header', 'Custom styled header'),
                content: m.trust(template)
            }
        }),
        m.component(panel, {
            props: {
                className: 'container'
            },
            panel: {
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
            }
        }),
    ];

    return content;
});