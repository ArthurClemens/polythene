'use strict';

import m from 'mithril';
import list from 'polythene/list/list';
import listTile from 'polythene/list-tile/list-tile';
import button from 'polythene/button/button';
require('./list.css!');

const titleLineText = 'Two-line item';
const infoLineText = 'Secondary text';

const titleBlock = {
    view: (ctrl, args) => {
        return m('.p-block', [
            m('.p-block-header', args.title),
            args.info ? m('p', args.info) : null,
            args.content
        ]);
    }
};

const exampleTiles = [
    m.component(listTile, {
        title: titleLineText,
        subtitle: infoLineText
    }),
    m.component(listTile, {
        title: titleLineText,
        subtitle: infoLineText
    }),
    m.component(listTile, {
        title: titleLineText,
        subtitle: infoLineText
    })
];

const exampleList = (opts = {}) => {
    return m.component(list, {
        class: [opts.class ? opts.class : null, 'demo-list'].join(' '),
        mode: opts.mode,
        hoverable: opts.hoverable,
        header: {
            title: 'Subheader',
            indent: opts.indent
        },
        tiles: [
            m.component(listTile, {
                title: titleLineText,
                subtitle: infoLineText,
                icon: {
                    type: 'large',
                    class: 'avatar',
                    src: 'app/list-tile/avatars/1.png'
                }
            }),
            m.component(listTile, {
                title: titleLineText,
                subtitle: infoLineText,
                icon: {
                    type: 'large',
                    class: 'avatar',
                    src: 'app/list-tile/avatars/2.png'
                }
            }),
            m.component(listTile, {
                title: titleLineText,
                subtitle: infoLineText,
                icon: {
                    type: 'large',
                    class: 'avatar',
                    src: 'app/list-tile/avatars/3.png'
                }
            })
        ]
    });
};

const sortableList = {
    controller: () => {
        const mode = m.prop('name');
        const now = new Date();
        const pastRange = 1000 * 3600 * 24 * 31 * 6;
        const items = [{
            name: 'John',
            date: new Date(now - Math.random() * pastRange),
            favorite: 0
        }, {
            name: 'Edward',
            date: new Date(now - Math.random() * pastRange),
            favorite: 0
        }, {
            name: 'Atilla',
            date: new Date(now - Math.random() * pastRange),
            favorite: 0
        }, {
            name: 'Bernd',
            date: new Date(now - Math.random() * pastRange),
            favorite: 0
        }, {
            name: 'George',
            date: new Date(now - Math.random() * pastRange),
            favorite: 0
        }, {
            name: 'Cedric',
            date: new Date(now - Math.random() * pastRange),
            favorite: 0
        }];
        return {
            mode: mode,
            items: items,
            toggleFavorite: item => {
                item.favorite = 1 - item.favorite;
            }
        };
    },
    view: ctrl => {
        const sortByName = (a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
            }
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
            }
            return 0;
        };
        const sortByDate = (a, b) => {
            if (a.date < b.date) {
                return -1;
            }
            if (a.date > b.date) {
                return 1;
            }
            return 0;
        };
        const sortList = () => ctrl.mode() === 'name' ? sortByName : sortByDate;
        const sortedList = ctrl.items.sort(sortList());
        return m('.demo-list.sortable-list',
            m('.controls-row',
                m('.controls.layout.horizontal',
                    m.component(button, {
                        tag: '.flex',
                        label: 'Sort by name',
                        selected: ctrl.mode() === 'name',
                        events: {
                            onclick: function() {
                                ctrl.mode('name');
                            }
                        }
                    }),
                    m.component(button, {
                        tag: '.flex',
                        label: 'Sort by date',
                        selected: ctrl.mode() === 'date',
                        events: {
                            onclick: function() {
                                ctrl.mode('date');
                            }
                        }
                    })
                )
            ),
            m.component(list, {
                tiles: sortedList.map(function(item) {
                    return m.component(listTile, {
                        title: item.name,
                        subtitle: item.date.toLocaleDateString(),
                        secondary: {
                            icon: {
                                svg: {
                                    name: item.favorite ? 'star' : 'star-outline',
                                    iconSet: 'mdi',
                                    preload: [{
                                        name: item.favorite ? 'star-outline' : 'star',
                                        iconSet: 'mdi'
                                    }]
                                }
                            },
                            events: {
                                onclick: function(e) {
                                    e.preventDefault();
                                    ctrl.toggleFavorite(item);
                                }
                            }
                        },
                        events: {
                            onclick: function(e) {
                                e.preventDefault();
                                ctrl.toggleFavorite(item);
                            }
                        }
                    });
                }),
                hoverable: true,
                mode: 'bordered'
            })
        );
    }
};

let module = {};
module.view = () => {
    return m('.module-list', [

        m.component(titleBlock, {
            title: 'Sorting a list',
            content: sortableList
        }),

        m.component(titleBlock, {
            title: 'No subheader',
            content: m.component(list, {
                class: 'demo-list',
                tiles: exampleTiles
            })
        }),

        m.component(titleBlock, {
            title: 'Hoverable (not on touch device)',
            content: m.component(list, {
                class: 'demo-list',
                tiles: exampleTiles,
                hoverable: true
            })
        }),

        m.component(titleBlock, {
            title: 'Subheader',
            content: m.component(list, {
                class: 'demo-list',
                header: {
                    title: 'Subheader'
                },
                tiles: exampleTiles
            })
        }),

        m.component(titleBlock, {
            title: 'Avatars',
            content: m('div', [
                exampleList(),
                exampleList()
            ])
        }),

        m.component(titleBlock, {
            title: 'Avatars dark theme',
            content: m('.dark-theme', [
                exampleList({hoverable: true}),
                exampleList({hoverable: true})
            ])
        }),

        m.component(titleBlock, {
            title: 'Bordered list items',
            content: m.component(list, {
                class: 'demo-list',
                mode: 'bordered',
                header: {
                    title: 'Subheader'
                },
                tiles: exampleTiles
            })
        }),

        m.component(titleBlock, {
            title: 'Bordered list items with avatars',
            content: m('div', [
                exampleList({
                    mode: 'bordered'
                }),
                exampleList({
                    mode: 'bordered'
                })
            ])
        }),

        m.component(titleBlock, {
            title: 'Indented borders and subheaders',
            content: m('div', [
                exampleList({
                    mode: 'bordered-indent',
                    indent: true
                }),
                exampleList({
                    mode: 'bordered-indent',
                    indent: true
                })
            ])
        })

    ]);
};

export default module;
