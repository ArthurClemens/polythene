define(function(require) {
    'use strict';

    var NAME = 'Card',
        m = require('mithril'),
        card = require('polythene/card/card'),
        button = require('polythene/button/button'),
        iconBtn = require('polythene/icon-button/icon-button'),
        app,
        nav = require('nav'),
        github = require('github'),
        titleLineText,
        infoLineText,
        ipsum,
        shortIpsum,
        iconButtonRow,
        justifiedButtonRow,
        floatingImage,
        block,
        content;

    require('polythene/font-roboto/font-roboto');
    require('css!polythene/theme/theme');
    require('css!app-css');
    require('css!./main');

    titleLineText = 'Title';
    infoLineText = 'Subhead';

    ipsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.';

    shortIpsum = 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

    iconButtonRow = [
        m('[flex]'),
        m.component(iconBtn, {
            icon: {
                svg: {
                    iconset: 'mdi',
                    name: 'heart'
                }
            }
        }),
        m.component(iconBtn, {
            icon: {
                svg: {
                    iconset: 'mdi',
                    name: 'bookmark'
                }
            }
        }),
        m.component(iconBtn, {
            icon: {
                svg: {
                    iconset: 'mdi',
                    name: 'share'
                }
            }
        })
    ];

    justifiedButtonRow = {
        tag: '[layout][horizontal][justified]',
        class: 'tight',
        content: [
            m.component(iconBtn, {
                icon: {
                    svg: {
                        iconset: 'mdi',
                        name: 'heart'
                    }
                }
            }),
            m.component(iconBtn, {
                icon: {
                    svg: {
                        iconset: 'mdi',
                        name: 'bookmark'
                    }
                }
            }),
            m.component(iconBtn, {
                icon: {
                    svg: {
                        iconset: 'mdi',
                        name: 'share'
                    }
                }
            })
        ]
    };

    floatingImage = function(type, title) {
        return {
            class: 'demo-card',
            content: [{
                primary: {
                    title: title,
                    subtitle: 'Subtitle',
                    media: {
                        ratio: 'square',
                        type: type,
                        content: m('img', {
                            src: 'app/images/1.jpg'
                        })
                    }
                }
            }, {
                actions: {
                    content: [
                        m.component(button, {
                            label: 'Action 1'
                        }),
                        m.component(button, {
                            label: 'Action 2'
                        })
                    ]
                }
            }]
        };
    };

    block = {
        view: function(ctrl, args) {
            return m('.p-block', {
                class: args.class || ''
            }, [
                m('.p-block-header', args.label),
                m('.demo-cards[horizontal][layout][wrap]', [
                    args.card ? m.component(card, args.card) : null,
                    args.cards ? args.cards.map(function(cardArgs) {
                        return m.component(card, cardArgs);
                    }) : null
                ])
            ]);
        }
    };

    content = m('.demo-content', [
        m.component(block, {
            label: 'Depth',
            cards: [{
                class: 'demo-card small',
                content: [{
                    text: {
                        class: 'tight',
                        content: 'Normal'
                    }
                }]
            }, {
                class: 'demo-card small',
                content: [{
                    text: {
                        class: 'tight',
                        content: 'Flat'
                    }
                }],
                z: 0
            }, {
                class: 'demo-card small',
                content: [{
                    text: {
                        class: 'tight',
                        content: 'Raised'
                    }
                }],
                z: 2
            }]
        }),

        m.component(block, {
            label: 'Header with icon',
            cards: [{
                class: 'demo-card',
                content: [{
                    header: {
                        title: titleLineText,
                        subtitle: infoLineText,
                        icon: {
                            type: 'large',
                            class: 'avatar',
                            src: 'app/list-tile/avatars/1.png'
                        }
                    }
                }, {
                    media: {
                        content: m('img', {
                            src: 'app/images/grey.jpg'
                        })
                    }
                }]
            }]
        }),

        m.component(block, {
            label: 'Primary text',
            card: {
                class: 'demo-card',
                content: [{
                    media: {
                        content: m('img', {
                            src: 'app/images/grey.jpg'
                        })
                    }
                }, {
                    primary: {
                        title: 'Primary title',
                        subtitle: 'Subtitle'
                    }
                }]
            }
        }),

        m.component(block, {
            label: 'Primary text with supporting text',
            card: {
                class: 'demo-card',
                content: [{
                    media: {
                        content: m('img', {
                            src: 'app/images/grey.jpg'
                        })
                    }
                }, {
                    primary: {
                        title: 'Primary title ' + shortIpsum,
                        subtitle: 'Subtitle ' + shortIpsum
                    }
                }, {
                    text: {
                        content: ipsum
                    }
                }]
            }
        }),

        m.component(block, {
            label: 'Primary text with action row and text',
            card: {
                class: 'demo-card',
                content: [{
                    media: {
                        content: m('img', {
                            src: 'app/images/grey.jpg'
                        })
                    }
                }, {
                    primary: {
                        title: 'Primary title',
                        subtitle: 'Subtitle'
                    }
                }, {
                    actions: {
                        content: [
                            m.component(button, {
                                label: 'Action 1'
                            }),
                            m.component(button, {
                                label: 'Action 2'
                            }),
                            m('[flex]'),
                            m.component(iconBtn, {
                                icon: {
                                    type: 'medium',
                                    svg: {
                                        group: 'navigation',
                                        name: 'expand-less'
                                    }
                                }
                            })
                        ]
                    }
                }, {
                    text: {
                        content: ipsum
                    }
                }]
            }
        }),

        m.component(block, {
            label: 'Bottom action row, bordered',
            cards: [{
                class: 'demo-card',
                content: [{
                    header: {
                        title: titleLineText,
                        subtitle: infoLineText,
                        icon: {
                            type: 'large',
                            class: 'avatar',
                            src: 'app/list-tile/avatars/1.png'
                        }
                    }
                }, {
                    media: {
                        content: m('img', {
                            src: 'app/images/grey.jpg'
                        })
                    }
                }, {
                    text: {
                        content: ipsum
                    }
                }, {
                    actions: {
                        class: 'bordered',
                        content: [
                            m.component(button, {
                                label: 'Action 1'
                            }),
                            m.component(button, {
                                label: 'Action 2'
                            }),
                            m('[flex]'),
                            m.component(iconBtn, {
                                icon: {
                                    type: 'medium',
                                    svg: {
                                        group: 'navigation',
                                        name: 'expand-more'
                                    }
                                }
                            })
                        ]
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    header: {
                        title: titleLineText,
                        subtitle: infoLineText,
                        icon: {
                            type: 'large',
                            class: 'avatar',
                            src: 'app/list-tile/avatars/1.png'
                        }
                    }
                }, {
                    media: {
                        content: m('img', {
                            src: 'app/images/grey.jpg'
                        })
                    }
                }, {
                    actions: {
                        tag: '[layout][vertical]',
                        content: [
                            m('.card-actions bordered',
                                m.component(button, {
                                    label: 'Action 1'
                                })
                            ),
                            m('.card-actions bordered',
                                m.component(button, {
                                    label: 'Action 2'
                                })
                            ),
                            m('.card-actions bordered',
                                m.component(button, {
                                    label: 'Action 3'
                                })
                            )
                        ]
                    }
                }]
            }]
        }),

        m.component(block, {
            label: 'Media, default center',
            cards: [{
                class: 'demo-card',
                content: [{
                    media: {
                        content: m('img', {
                            src: 'app/images/circle.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    media: {
                        content: m('img', {
                            src: 'app/images/1.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    media: {
                        content: m('img', {
                            src: 'app/images/2.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }]
        }),

        m.component(block, {
            label: 'Media origin start',
            cards: [{
                class: 'demo-card',
                content: [{
                    media: {
                        origin: 'start',
                        content: m('img', {
                            src: 'app/images/circle.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    media: {
                        origin: 'start',
                        content: m('img', {
                            src: 'app/images/1.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    media: {
                        origin: 'start',
                        content: m('img', {
                            src: 'app/images/2.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }]
        }),

        m.component(block, {
            label: 'Media origin end',
            cards: [{
                class: 'demo-card',
                content: [{
                    media: {
                        origin: 'end',
                        content: m('img', {
                            src: 'app/images/circle.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    media: {
                        origin: 'end',
                        content: m('img', {
                            src: 'app/images/1.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    media: {
                        origin: 'end',
                        content: m('img', {
                            src: 'app/images/2.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }]
        }),

        m.component(block, {
            label: 'Media square, default center',
            card: {
                class: 'demo-card',
                content: [{
                    media: {
                        ratio: 'square',
                        content: m('img', {
                            src: 'app/images/1.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }
        }),
        m.component(block, {
            label: 'Media square, origin start',
            card: {
                class: 'demo-card',
                content: [{
                    media: {
                        ratio: 'square',
                        origin: 'start',
                        content: m('img', {
                            src: 'app/images/1.jpg'
                        })
                    }
                }, {
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }
        }),

        m.component(block, {
            label: 'Overlay',
            card: {
                class: 'demo-card',
                content: [{
                    media: {
                        ratio: 'square',
                        content: m('img', {
                            src: 'app/images/1.jpg'
                        }),
                        overlay: {
                            class: 'dark-theme',
                            content: [{
                                primary: {
                                    title: 'Primary title',
                                    subtitle: 'Subtitle'
                                }
                            }, {
                                actions: {
                                    content: [
                                        m.component(button, {
                                            label: 'Action 1'
                                        }),
                                        m.component(button, {
                                            label: 'Action 2'
                                        })
                                    ]
                                }
                            }]
                        }
                    }
                }]
            }
        }),

        m.component(block, {
            label: 'Overlay',
            cards: [{
                class: 'demo-card small',
                content: [{
                    media: {
                        ratio: 'square',
                        content: m('img', {
                            src: 'app/images/1.jpg'
                        }),
                        overlay: {
                            class: 'dark-theme',
                            content: [{
                                primary: {
                                    title: 'Title'
                                }
                            }]
                        }
                    }
                }, {
                    actions: justifiedButtonRow
                }]
            }, {
                class: 'demo-card small',
                content: [{
                    media: {
                        ratio: 'square',
                        content: m('img', {
                            src: 'app/images/1.jpg'
                        }),
                        overlay: {
                            class: 'dark-theme',
                            content: [{
                                primary: {
                                    title: 'Title'
                                }
                            }]
                        }
                    }
                }, {
                    actions: justifiedButtonRow
                }]
            }]
        }),

        m.component(block, {
            label: 'Floating images',
            cards: [
                floatingImage('small', 'Floating image small'),
                floatingImage('medium', 'Floating image medium'),
                floatingImage('large', 'Floating image large'), {
                    class: 'demo-card extra-large',
                    content: [{
                        primary: {
                            content: [{
                                    media: {
                                        ratio: 'square',
                                        type: 'extra-large',
                                        content: m('img', {
                                            src: 'app/images/1.jpg'
                                        })
                                    }
                                },
                                m('[flex]'), {
                                    actions: {
                                        tag: '[layout][vertical]',
                                        content: [
                                            m.component(iconBtn, {
                                                icon: {
                                                    svg: {
                                                        iconset: 'mdi',
                                                        name: 'heart'
                                                    }
                                                }
                                            }),
                                            m.component(iconBtn, {
                                                icon: {
                                                    svg: {
                                                        iconset: 'mdi',
                                                        name: 'bookmark'
                                                    }
                                                }
                                            }),
                                            m.component(iconBtn, {
                                                icon: {
                                                    svg: {
                                                        iconset: 'mdi',
                                                        name: 'share'
                                                    }
                                                }
                                            })
                                        ]
                                    }
                                }
                            ]
                        }
                    }]
                }
            ]
        }),

        m.component(block, {
            label: 'Combined',
            cards: [{
                class: 'demo-card',
                content: [{
                    media: {
                        content: m('img', {
                            src: 'app/images/3.jpg'
                        })
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    text: {
                        content: '<strong>Normal - 24px bottom padding</strong> ' + ipsum
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    text: {
                        content: '<strong>Class: tight - 16px bottom padding</strong> ' + ipsum,
                        class: 'tight'
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    header: {
                        title: titleLineText,
                        subtitle: infoLineText,
                        icon: {
                            type: 'large',
                            class: 'avatar',
                            src: 'app/list-tile/avatars/1.png'
                        }
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    primary: {
                        title: 'Primary title',
                        subtitle: 'Normal - 24px bottom padding',
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    primary: {
                        title: 'Primary title',
                        subtitle: 'Class: tight - 16px bottom padding',
                        class: 'tight'
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    actions: {
                        content: [
                            m.component(button, {
                                label: 'Action 1'
                            }),
                            m.component(button, {
                                label: 'Action 2'
                            })
                        ]
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    actions: {
                        tag: '[layout][vertical][start]',
                        content: [
                            m.component(button, {
                                label: 'Action 1'
                            }),
                            m.component(button, {
                                label: 'Action 2'
                            }),
                            m.component(button, {
                                label: 'Action 3'
                            })
                        ]
                    }
                }]
            }, {
                class: 'demo-card',
                content: [{
                    actions: {
                        content: iconButtonRow
                    }
                }]
            }]
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