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
        titleImage,
        titleImageExtraLarge,
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

    titleImage = function(type, title) {
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

    titleImageExtraLarge = function(ratio) {
        return {
            class: 'demo-card extra-large',
            content: [{
                primary: {
                    content: [{
                            media: {
                                ratio: ratio,
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
        };
    };

    block = {
        view: function(ctrl, args) {
            return m('.p-block', {
                class: args.class || ''
            }, [
                m('.p-block-header', args.label),
                args.info ? args.info : null,
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
                            m('.actions bordered',
                                m.component(button, {
                                    label: 'Action 1'
                                })
                            ),
                            m('.actions bordered',
                                m.component(button, {
                                    label: 'Action 2'
                                })
                            ),
                            m('.actions bordered',
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
            label: '16:9 media with square image',
            info: m('p', 'Anchor origin: default, start, end'),
            cards: [{
                class: 'demo-card',
                content: [{
                    media: {
                        content: m('img', {
                            src: 'app/images/circle.png'
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
                            src: 'app/images/circle.png'
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
                            src: 'app/images/circle.png'
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
            label: '16:9 media with landscape image',
            info: m('p', 'Anchor origin: default, start, end'),
            cards: [{
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
            }]
        }),

        m.component(block, {
            label: '16:9 media with portrait image',
            info: m('p', 'Anchor origin: default, start, end'),
            cards: [{
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
            label: '1:1 media with square image',
            info: m('p', 'Anchor origin: default, start, end'),
            cards: [{
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
            }, {
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
            }, {
                class: 'demo-card',
                content: [{
                    media: {
                        ratio: 'square',
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
            }]
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
            label: 'Title images',
            cards: [
                titleImage('small', 'Title image small'),
                titleImage('medium', 'Title image medium'),
                titleImage('large', 'Title image large')
            ]
        }),

        m.component(block, {
            label: 'Title image extra large',
            cards: [
                titleImageExtraLarge('square'),
                titleImageExtraLarge('landscape')
            ]
        }),

        m.component(block, {
            label: 'Card URL',
            cards: [{
                class: 'demo-card',
                url: {
                    href: 'http://en.wikipedia.org/wiki/Road_to_Nowhere',
                    config: null
                },
                content: [{
                    header: {
                        title: titleLineText,
                        subtitle: infoLineText,
                        icon: {
                            type: 'large',
                            class: 'avatar',
                            src: 'app/list-tile/avatars/1.png'
                        },
                        url: {href: 'http://www.imdb.com/name/nm0260632/', config: null}
                    }
                }, {
                    media: {
                        content: m('img', {
                            src: 'app/images/1.jpg'
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
                                label: 'Action 1',
                                events: {
                                    onclick: function(e) {
                                        // prevent URL
                                        e.preventDefault();
                                    }
                                },
                            }),
                            m.component(button, {
                                label: 'Action 2',
                                events: {
                                    onclick: function(e) {
                                        // prevent URL
                                        e.preventDefault();
                                    }
                                },
                            })
                        ]
                    }
                }]
            }]
        }),

        m.component(block, {
            label: 'Card events',
            cards: [{
                class: 'demo-card',
                events: {
                    onmouseover: function() {
                        this.classList.add('on');
                    },
                    onmouseout: function() {
                        this.classList.remove('on');
                    },
                    onclick: function() {
                        window.alert('Card clicked');
                    }
                },
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
                            src: 'app/images/1.jpg'
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
                                label: 'Action 1',
                                events: {
                                    onclick: function(e) {
                                        // prevent card event
                                        e.stopPropagation();
                                        window.alert('Action 1 clicked');
                                    }
                                },
                            }),
                            m.component(button, {
                                label: 'Action 2',
                                events: {
                                    onclick: function(e) {
                                        // prevent card event
                                        e.stopPropagation();
                                        window.alert('Action 2 clicked');
                                    }
                                },
                            })
                        ]
                    }
                }]
            }]
        }),

        m.component(block, {
            label: 'Custom cards',
            cards: [{
                class: 'demo-card custom custom-travel',
                content: [{
                    primary: {
                        content: [{
                            title: m('.title[flex]', [
                                m('.subtitle', 'Travel'),
                                m('span', 'Road Trip')
                            ])
                        }, {
                            media: {
                                ratio: 'square',
                                type: 'small',
                                content: m('img', {
                                    src: 'app/images/1.jpg'
                                })
                            }
                        }]
                    },
                }, {
                    text: {
                        content: 'A road trip is a long distance journey on the road. Typically, road trips are long distances traveled by automobile.'
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
            }, {
                class: 'demo-card custom custom-sand dark-theme',
                content: [{
                    primary: {
                        title: 'Get Ready',
                        subtitle: '2 Unlimited',
                        media: {
                            ratio: 'square',
                            type: 'medium',
                            content: m('img', {
                                src: 'http://www.the2unlimited.com/pochettes/GET%20READY%2001.JPG'
                            })
                        }
                    }
                }, {
                    actions: {
                        content: [
                            m.component(button, {
                                label: 'Listen now'
                            })
                        ]
                    }
                }] 
            }, {
                class: 'demo-card custom custom-sky dark-theme',
                content: [{
                    primary: {
                        title: 'Supermodel',
                        subtitle: 'Foster the People',
                        media: {
                            ratio: 'square',
                            type: 'medium',
                            content: m('img', {
                                src: 'http://upload.wikimedia.org/wikipedia/en/f/f9/Foster_the_People_-_Supermodel.jpg'
                            })
                        }
                    }
                }, {
                    actions: {
                        content: [
                            m.component(button, {
                                label: 'Listen now'
                            })
                        ]
                    }
                }]
            }, {
                class: 'demo-card custom custom-bucket dark-theme',
                content: [{
                    primary: {
                        title: 'Bucket List'
                    }
                }, {
                    text: {
                        content: m.trust('<ul><li>Skydiving</li><li>Alaska</li><li>Kite surfing</li></ul>')
                    }
                }, {
                    actions: {
                        content: [
                            m.component(button, {
                                label: 'Edit'
                            })
                        ]
                    }
                }]
            }]
        }),

        m.component(block, {
            label: 'Separate elements combined',
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