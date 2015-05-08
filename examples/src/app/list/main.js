define(function(require) {
    'use strict';

    var m = require('mithril'),
        list = require('polythene/list/list'),
        listTile = require('polythene/list-tile/list-tile'),
        nav = require('nav'),
        github = require('github'),
        titleBlock,
        titleLineText,
        infoLineText,
        content;

    require('css!polythene/theme/theme');
    require('css!app-css');
    //require('css!app/list-tile/main');
    require('css!./main');

    titleLineText = 'Two-line item';
    infoLineText = 'Secondary text';

    titleBlock = {
        view: function(ctrl, args) {
            return m('.p-block', [
                m('h2', args.title),
                args.info ? m('p', args.info) : null,
                args.content
            ]);
        }
    };

    content = {
        view: function() {
            return [
                m.component(nav, {
                    baseFileName: 'list',
                    title: 'List',
                    subtitle: 'Mithril version'
                }),

                m.component(titleBlock, {
                    title: 'No subheader',
                    content: m.component(list, {
                        class: 'demo-list',
                        tiles: [
                            m.component(listTile, {
                                title: titleLineText,
                                info: infoLineText
                            }),
                            m.component(listTile, {
                                title: titleLineText,
                                info: infoLineText
                            }),
                            m.component(listTile, {
                                title: titleLineText,
                                info: infoLineText
                            })
                        ]
                    })
                }),

                m.component(titleBlock, {
                    title: 'Subheader',
                    content: m.component(list, {
                        class: 'demo-list',
                        header: {
                            title: 'Subheader'
                        },
                        tiles: [
                            m.component(listTile, {
                                title: titleLineText,
                                info: infoLineText
                            }),
                            m.component(listTile, {
                                title: titleLineText,
                                info: infoLineText
                            }),
                            m.component(listTile, {
                                title: titleLineText,
                                info: infoLineText
                            })
                        ]
                    })
                }),

                m.component(titleBlock, {
                    title: 'Indented subheader',
                    content: m.component(list, {
                        class: 'demo-list',
                        header: {
                            title: 'Subheader',
                            class: 'indent'
                        },
                        tiles: [
                            m.component(listTile, {
                                title: titleLineText,
                                info: infoLineText,
                                icon: {
                                    type: 'large',
                                    class: 'avatar',
                                    src: 'app/list-tile/avatars/1.png'
                                }
                            }),
                            m.component(listTile, {
                                title: titleLineText,
                                info: infoLineText,
                                icon: {
                                    type: 'large',
                                    class: 'avatar',
                                    src: 'app/list-tile/avatars/2.png'
                                }
                            }),
                            m.component(listTile, {
                                title: titleLineText,
                                info: infoLineText,
                                icon: {
                                    type: 'large',
                                    class: 'avatar',
                                    src: 'app/list-tile/avatars/3.png'
                                }
                            })
                        ]
                    })
                }),

                m.component(titleBlock, {
                    title: 'Dark theme',
                    content: m.component(list, {
                        class: 'demo-list demo-no-zebra dark-theme',
                        header: {
                            title: 'Subheader',
                            class: 'indent'
                        },
                        tiles: [
                            m.component(listTile, {
                                title: titleLineText,
                                info: infoLineText,
                                icon: {
                                    type: 'large',
                                    class: 'avatar',
                                    src: 'app/list-tile/avatars/1.png'
                                }
                            }),
                            m.component(listTile, {
                                title: titleLineText,
                                info: infoLineText,
                                icon: {
                                    type: 'large',
                                    class: 'avatar',
                                    src: 'app/list-tile/avatars/2.png'
                                }
                            }),
                            m.component(listTile, {
                                title: titleLineText,
                                info: infoLineText,
                                icon: {
                                    type: 'large',
                                    class: 'avatar',
                                    src: 'app/list-tile/avatars/3.png'
                                }
                            })
                        ]
                    })
                }),

                github
            ];
        }
    };

    m.mount(document.body, content);
});