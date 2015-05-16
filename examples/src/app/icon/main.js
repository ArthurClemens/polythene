define(function(require) {
    'use strict';

    var NAME = 'Icon',
        m = require('mithril'),
        icon = require('polythene/icon/icon'),
        nav = require('nav'),
        github = require('github'),
        app,
        block,
        titleBlock,
        content;

    require('polythene/font-roboto/font-roboto');
    require('css!polythene/theme/theme');
    require('css!app-css');
    require('css!./main');

    block = {
        view: function(ctrl, args) {
            return m('.demo-icon', [
                m.component(icon, args.icon)
            ]);
        }
    };

    titleBlock = {
        view: function(ctrl, args) {
            return m('.p-block', [
                m('.p-block-header', args.title),
                args.info ? args.info : null,
                m('.demo-icons', args.content)
            ]);
        }
    };

    content = m('.demo-content', [
        m.component(titleBlock, {
            title: 'Iconset',
            info: m('p', 
                m.trust('SVG icons from <a href="https://github.com/zavoloklom/material-design-iconic-font">Material Design Iconic Font</a>')
            ),
            content: [
                m.component(block, {
                    label: 'Menu',
                    icon: {
                        svg: {
                            group: 'navigation',
                            name: 'menu'
                        },
                        class: 'md'
                    }
                }),
                m.component(block, {
                    label: 'Add',
                    icon: {
                        svg: {
                            group: 'content',
                            name: 'add'
                        },
                        class: 'md'
                    }
                }),
                m.component(block, {
                    label: 'Refresh',
                    icon: {
                        svg: {
                            group: 'navigation',
                            name: 'refresh'
                        },
                        class: 'md'
                    }
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'Iconset',
            info: m('p', 
                m.trust('SVG icons from <a href="https://github.com/Templarian/MaterialDesign">Templarian / Material Design</a>')
            ),
            content: [
                m.component(block, {
                    label: 'Barcode',
                    icon: {
                        svg: {
                            name: 'barcode',
                            iconset: 'mdi'
                        },
                        class: 'mdi'
                    }
                }),
                m.component(block, {
                    label: 'Happy',
                    icon: {
                        svg: {
                            name: 'emoticon-happy',
                            iconset: 'mdi'
                        },
                        class: 'mdi'
                    }
                }),
                m.component(block, {
                    label: 'Headphones',
                    icon: {
                        svg: {
                            name: 'headphones',
                            iconset: 'mdi'
                        },
                        class: 'mdi'
                    }
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'Sizing icons',
            info: m('p', 
                m.trust('large, medium, normal, small')
            ),
            content: [
                m.component(block, {
                    label: 'Happy',
                    icon: {
                        type: 'large',
                        svg: {
                            name: 'emoticon-happy',
                            iconset: 'mdi'
                        },
                        class: 'mdi'
                    }
                }),
                m.component(block, {
                    label: 'Happy',
                    icon: {
                        type: 'medium',
                        svg: {
                            name: 'emoticon-happy',
                            iconset: 'mdi'
                        },
                        class: 'mdi'
                    }
                }),
                m.component(block, {
                    label: 'Happy',
                    icon: {
                        type: 'normal',
                        svg: {
                            name: 'emoticon-happy',
                            iconset: 'mdi'
                        },
                        class: 'mdi'
                    }
                }),
                m.component(block, {
                    label: 'Happy',
                    icon: {
                        type: 'small',
                        svg: {
                            name: 'emoticon-happy',
                            iconset: 'mdi'
                        },
                        class: 'mdi'
                    }
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'File reference',
            info: m('p', 
                m.trust('src: file.svg')
            ),
            content: [
                m.component(block, {
                    label: 'Flight',
                    icon: {
                        svg: {
                            src: 'app/icon/img/ic_flight_24px.svg'
                        },
                        class: 'google'
                    }
                }),
                m.component(block, {
                    label: 'Pin drop',
                    icon: {
                        svg: {
                            src: 'app/icon/img/ic_pin_drop_48px.svg'
                        },
                        class: 'google'
                    }
                })
            ]
        }),

        m.component(titleBlock, {
            title: 'File reference',
            info: m('p', 
                m.trust('src: file.png')
            ),
            content: [
                m.component(block, {
                    label: 'Directions',
                    icon: {
                        src: 'app/icon/img/ic_directions_black_48dp.png'
                    }
                }),
                m.component(block, {
                    label: 'Chat',
                    icon: {
                        src: 'app/icon/img/ic_chat_black_48dp.png'
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