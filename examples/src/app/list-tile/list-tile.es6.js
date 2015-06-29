'use strict';

import m from 'mithril';
import listTile from 'polythene/list-tile/list-tile';
import icon from 'polythene/icon/icon';
require('./list-tile.css!');

const titleLineText = 'Title line Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';
const infoDoubleLineText = 'Secondary text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', [
            m('.p-block-header', args.title),
            args.info ? m('p', args.info) : null,
            args.content
        ]);
    }
};

const urlListTile = m.component(listTile, {
    title: 'Click to go to Toolbar',
    icon: {
        type: 'medium',
        class: 'demo-cirle-icon',
        svg: {
            name: 'folder',
            iconSet: 'mdi'
        }
    },
    url: {
        href: '/toolbar',
        config: m.route
    },
    secondary: {
        icon: {
            svg: {
                name: 'star-outline',
                iconSet: 'mdi'
            }
        },
        url: {
            href: 'http://en.wiktionary.org/wiki/favorite',
            target: '_blank',
            config: null
        }
    }
});

const createFavoritesRow = (ctrl, opts = {}) => {
    return m.component(listTile, {
        title: (opts.favorited ? 'Starred!' : 'Click the star'),
        icon: {
            type: 'medium',
            class: 'demo-cirle-icon',
            svg: {
                name: 'folder',
                iconSet: 'mdi'
            }
        },
        secondary: {
            icon: {
                svg: {
                    name: opts.favorited ? 'star' : 'star-outline',
                    iconSet: 'mdi'
                }
            },
            events: {
                onclick: function(e) {
                    e.preventDefault();
                    ctrl.toggleFavorite(opts.item);
                }
            }
        }
    });
};

const favorites = {
    controller: () => {
        return {
            items: [{
                favorite: 0
            }, {
                favorite: 0
            }, {
                favorite: 0
            }],

            toggleFavorite: (item) => {
                item.favorite = 1 - item.favorite;
            }
        };
    },
    view: (ctrl) => {
        let rows = ctrl.items.map(function(item) {
            return createFavoritesRow(ctrl, {
                item: item,
                favorited: item.favorite
            });
        });
        return m('.demo-list', rows);
    }
};

let module = {};
module.view = () => {
    return m('.module-list-tile', [

        m('.p-block p-block-separate',
            m('p', 'List tiles with zebra stripes to show demarcations.')
        ),

        // Text only

        m.component(titleBlock, {
            title: 'Single line, no icons',
            content: m('.demo-list', [
                m.component(listTile, {
                    title: titleLineText
                }),
                m.component(listTile, {
                    title: titleLineText
                }),
                m.component(listTile, {
                    title: titleLineText
                })
            ])
        }),
        m.component(titleBlock, {
            title: 'Double line',
            content: m('.demo-list', [
                m.component(listTile, {
                    title: titleLineText,
                    subtitle: infoDoubleLineText
                }),
                m.component(listTile, {
                    title: titleLineText,
                    subtitle: infoDoubleLineText
                }),
                m.component(listTile, {
                    title: titleLineText,
                    subtitle: infoDoubleLineText
                })
            ])
        }),
        m.component(titleBlock, {
            title: 'Three lines',
            content: m('.demo-list', [
                m.component(listTile, {
                    title: titleLineText,
                    highSubtitle: infoDoubleLineText
                }),
                m.component(listTile, {
                    title: titleLineText,
                    highSubtitle: infoDoubleLineText
                }),
                m.component(listTile, {
                    title: titleLineText,
                    highSubtitle: infoDoubleLineText
                })
            ])
        }),

        // Avatars

        m.component(titleBlock, {
            title: 'Single line with avatar',
            content: m('.demo-list', [
                m.component(listTile, {
                    title: titleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/1.png'
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/2.png'
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/3.png'
                    }
                })
            ])
        }),
        m.component(titleBlock, {
            title: 'Double line with avatar',
            content: m('.demo-list', [
                m.component(listTile, {
                    title: titleLineText,
                    subtitle: infoDoubleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/1.png'
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    subtitle: infoDoubleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/2.png'
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    subtitle: infoDoubleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/3.png'
                    }
                })
            ])
        }),
        m.component(titleBlock, {
            title: 'Three lines with avatar',
            content: m('.demo-list', [
                m.component(listTile, {
                    title: titleLineText,
                    highSubtitle: infoDoubleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/1.png'
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    highSubtitle: infoDoubleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/2.png'
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    highSubtitle: infoDoubleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/3.png'
                    }
                })
            ])
        }),

        // Icons

        m.component(titleBlock, {
            title: 'Single line with icon',
            content: m('.demo-list', [
                m.component(listTile, {
                    title: titleLineText,
                    icon: {
                        svg: {
                            name: 'star-outline',
                            iconSet: 'mdi'
                        }
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    icon: {
                        svg: {
                            name: 'star-outline',
                            iconSet: 'mdi'
                        }
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    icon: {
                        svg: {
                            name: 'star-outline',
                            iconSet: 'mdi'
                        }
                    }
                })
            ])
        }),
        m.component(titleBlock, {
            title: 'Double line with icon',
            content: m('.demo-list', [
                m.component(listTile, {
                    title: 'Double line tile',
                    subtitle: infoDoubleLineText,
                    icon: {
                        svg: {
                            name: 'star-outline',
                            iconSet: 'mdi'
                        }
                    }
                }),
                m.component(listTile, {
                    title: 'Double line tile',
                    subtitle: infoDoubleLineText,
                    icon: {
                        svg: {
                            name: 'star-outline',
                            iconSet: 'mdi'
                        }
                    }
                }),
                m.component(listTile, {
                    title: 'Double line tile',
                    subtitle: infoDoubleLineText,
                    icon: {
                        svg: {
                            name: 'star-outline',
                            iconSet: 'mdi'
                        }
                    }
                })
            ])
        }),
        m.component(titleBlock, {
            title: 'Three lines with icon',
            content: m('.demo-list', [
                m.component(listTile, {
                    title: titleLineText,
                    highSubtitle: infoDoubleLineText,
                    icon: {
                        svg: {
                            name: 'star-outline',
                            iconSet: 'mdi'
                        }
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    highSubtitle: infoDoubleLineText,
                    icon: {
                        svg: {
                            name: 'star-outline',
                            iconSet: 'mdi'
                        }
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    highSubtitle: infoDoubleLineText,
                    icon: {
                        svg: {
                            name: 'star-outline',
                            iconSet: 'mdi'
                        }
                    }
                })
            ])
        }),

        // Secondary content

        m.component(titleBlock, {
            title: 'Single line with secondary item, small icon',
            content: m('.demo-list', [
                m.component(listTile, {
                    title: titleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/1.png'
                    },
                    secondary: {
                        icon: {
                            type: 'small',
                            svg: {
                                name: 'heart-outline',
                                iconSet: 'mdi'
                            }
                        }
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/2.png'
                    },
                    secondary: {
                        icon: {
                            type: 'small',
                            svg: {
                                name: 'heart-outline',
                                iconSet: 'mdi'
                            }
                        }
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/3.png'
                    },
                    secondary: {
                        icon: {
                            type: 'small',
                            svg: {
                                name: 'heart',
                                iconSet: 'mdi'
                            }
                        }
                    }
                })
            ])
        }),
        m.component(titleBlock, {
            title: 'Double line with secondary item, normal icon',
            content: m('.demo-list', [
                m.component(listTile, {
                    title: titleLineText,
                    subtitle: infoDoubleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/1.png'
                    },
                    secondary: {
                        icon: {
                            svg: {
                                name: 'heart-outline',
                                iconSet: 'mdi'
                            }
                        }
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    subtitle: infoDoubleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/2.png'
                    },
                    secondary: {
                        icon: {
                            svg: {
                                name: 'heart-outline',
                                iconSet: 'mdi'
                            }
                        }
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    subtitle: infoDoubleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/3.png'
                    },
                    secondary: {
                        icon: {
                            svg: {
                                name: 'heart',
                                iconSet: 'mdi'
                            }
                        }
                    }
                })
            ])
        }),
        m.component(titleBlock, {
            title: 'Three lines with secondary item, medium icon',
            content: m('.demo-list', [
                m.component(listTile, {
                    title: titleLineText,
                    highSubtitle: infoDoubleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/1.png'
                    },
                    secondary: {
                        icon: {
                            type: 'medium',
                            svg: {
                                name: 'heart-outline',
                                iconSet: 'mdi'
                            }
                        }
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    highSubtitle: infoDoubleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/2.png'
                    },
                    secondary: {
                        icon: {
                            type: 'medium',
                            svg: {
                                name: 'heart-outline',
                                iconSet: 'mdi'
                            }
                        }
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    highSubtitle: infoDoubleLineText,
                    icon: {
                        type: 'large',
                        class: 'avatar',
                        src: 'app/list-tile/avatars/3.png'
                    },
                    secondary: {
                        icon: {
                            type: 'medium',
                            svg: {
                                name: 'heart',
                                iconSet: 'mdi'
                            }
                        }
                    }
                })
            ])
        }),

        // Custom content

        m.component(titleBlock, {
            title: 'SVG icon',
            content: m('.demo-list.demo-no-zebra.demo-bordered', [
                m.component(listTile, {
                    title: titleLineText,
                    subtitle: infoDoubleLineText,
                    icon: {
                        type: 'medium',
                        class: 'demo-cirle-icon',
                        svg: {
                            name: 'folder',
                            iconSet: 'mdi'
                        }
                    },
                    secondary: {
                        icon: {
                            type: 'small',
                            svg: {
                                name: 'information',
                                iconSet: 'mdi'
                            }
                        }
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    subtitle: infoDoubleLineText,
                    icon: {
                        type: 'medium',
                        class: 'demo-cirle-icon',
                        svg: {
                            name: 'folder',
                            iconSet: 'mdi'
                        }
                    },
                    secondary: {
                        icon: {
                            type: 'small',
                            svg: {
                                name: 'information',
                                iconSet: 'mdi'
                            }
                        }
                    }
                }),
                m.component(listTile, {
                    title: titleLineText,
                    subtitle: infoDoubleLineText,
                    icon: {
                        type: 'medium',
                        class: 'demo-cirle-icon',
                        svg: {
                            name: 'folder',
                            iconSet: 'mdi'
                        }
                    },
                    secondary: {
                        icon: {
                            type: 'small',
                            svg: {
                                name: 'information',
                                iconSet: 'mdi'
                            }
                        }
                    }
                })
            ])
        }),
        m.component(titleBlock, {
            title: 'Custom secondary content',
            info: m.trust('This example uses parameter <code>secondary.tag: \'div.layout.vertical.end\'</code>'),
            content: m('.demo-list.demo-no-zebra.demo-bordered', [
                m.component(listTile, {
                    title: 'Ali Connors',
                    highSubtitle: [
                        m('.demo-first', 'Brunch this weekend?'),
                        m('.demo-second', 'I\'ll be in your neighborhood doing errands.')
                    ],
                    secondary: {
                        content: [
                            m('div', '15 min'),
                            m('div.flex'),
                            m.component(icon, {
                                svg: {
                                    name: 'star-outline',
                                    iconSet: 'mdi'
                                }
                            })
                        ],
                        tag: 'div.layout.vertical.end'
                    }
                }),
                m.component(listTile, {
                    title: 'me, Scott, Jennifer',
                    highSubtitle: [
                        m('.demo-first', 'Summer BBQ'),
                        m('.demo-second', 'I wish I could come, but I am out of town this weekend.')
                    ],
                    secondary: {
                        content: [
                            m('div', '2 hr'),
                            m('div.flex'),
                            m.component(icon, {
                                svg: {
                                    name: 'star-outline',
                                    iconSet: 'mdi'
                                }
                            })
                        ],
                        tag: 'div.layout.vertical.end'
                    }
                }),
                m.component(listTile, {
                    title: 'Sandra Adams',
                    highSubtitle: [
                        m('.demo-first', 'Oui oui'),
                        m('.demo-second', 'Do you have any recommendations? Have received some nice stories but cannot make up my mind.')
                    ],
                    secondary: {
                        content: [
                            m('div', '6 hr'),
                            m('div.flex'),
                            m.component(icon, {
                                svg: {
                                    name: 'star-outline',
                                    iconSet: 'mdi'
                                }
                            })
                        ],
                        tag: 'div.layout.vertical.end'
                    }
                })
            ])
        }),

        // Interactive

        m.component(titleBlock, {
            title: 'URLs',
            info: m.trust('Passing parameters <code>url</code> for the primary content, and <code>secondary.url</code> for the secondary content (the fav icon).'),
            content: m('.demo-list', [
                urlListTile,
                urlListTile,
                urlListTile
            ])
        }),

        m.component(titleBlock, {
            title: 'Events',
            info: m('p', 'Demonstrating onclick event and SVG reloading.'),
            content: m.component(favorites)
        })

    ]);
};

export default module;

