import m from 'mithril';
import { Button, Dialog, IconButton, List, ListTile, Menu, Shadow } from 'polythene';
import { styler } from 'polythene-core-css';
import formattingList from './formatting-list';
import settingsMenuDialog from './dialog-settings-menu';
import settings from './menu-settings';
import iconMoreVert from 'mmsvg/google/msvg/navigation/more-vert';
import style from './menu-style';
styler.add('polythene-examples-menu', style);

const dialogsData = [{
    dialog: settingsMenuDialog,
    url: '/menu/settingsmenu'
}];

const dataForPath = (path) => {
    return dialogsData.reduce((found, data) => {
        return (data.url === path) ? data : found;
    }, null);
};

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class || ''
        }, [
            m('.p-block-header', args.title),
            args.info ? args.info : null,
            args.content
        ]);
    }
};

const simpleContainer = {};
simpleContainer.controller = () => {
    return {
        open: false
    };
};
simpleContainer.view = (ctrl) => {
    return m('.container',
        m('a', {
            href: 'javascript: void(0)',
            id: 'simple_btn', // use as menu's target
            onclick: (e) => (e.preventDefault(), ctrl.open = true) // opens at next redraw
        }, 'Open menu'),
        m(Menu, {
            target: 'simple_btn', // to align with the link
            offset: 0, // horizontally align with link
            size: 'auto',
            show: ctrl.open, // should the menu be open or closed
            didHide: () => (ctrl.open = false), // called after closing
            content: m(List, {
                tiles: [
                    m(ListTile, {
                        title: 'Yes',
                        ink: true
                    }),
                    m(ListTile, {
                        title: 'No',
                        ink: true
                    })
                ]
            })
        })
    );
};

const menuItems = (theme) => {
    return m(Menu, {
        class: theme,
        size: 5,
        permanent: true,
        content: formattingList
    });
};

const shortSimpleMenu = (size) => {
    const sizeTexts = {
        '1': ['en', 'nl', 'de'],
        '1.5': ['Yes', 'No', 'Maybe'],
        '2': ['Copy', 'Paste', 'Undo'],
        '3': ['Home', 'Back', 'Recently viewed'],
        '4': ['Paragraph styles', 'Line spacing', 'Numbered list'],
        '5': ['Add space before paragraph', 'Add space after paragraph', 'Custom spacing'],
        '6': ['The Mind Is Its Own Beautiful Prisoner', 'If I Should Sleep With A Lady Called Death', 'It May Not Always Be So; And I Say'],
        '7': ['Any bar, any cross, any impediment will be', 'medicinable to me: I am sick in displeasure to him', 'and whatsoever comes athwart his affection ranges', 'evenly with mine. How canst thou cross this marriage?'],
        'auto': ['Paragraph styles', 'Line spacing', 'Numbered list']
    };
    const sizeStr = size.toString();
    return m(Menu, {
        class: 'short-simple-menu',
        size: size,
        permanent: true,
        content: [
            m(List, {
                class: 'list--compact',
                header: {
                    title: size
                },
                tiles: sizeTexts[sizeStr].map((label) => {
                    return m(ListTile, {
                        title: label
                    });
                })
            })
        ]
    });
};

const positionContainer = {};
positionContainer.controller = () => {
    return {
        showMenu: false
    };
};
positionContainer.view = (ctrl, opts) => {
    return m('.container.layout.vertical',
        opts.barPosition === 'bottom' ? m('.flex') : null,
        m('.bar', [
            m(Shadow, {
                z: 1
            }),
            m(Menu, {
                class: 'light-theme',
                target: opts.id,
                origin: opts.origin,
                show: ctrl.showMenu,
                size: 3,
                hideDelay: .240,
                didHide: () => (ctrl.showMenu = false),
                content: m(List, {
                    hoverable: true,
                    tiles: ['Refresh', 'Help & Feedback', 'Settings', 'Sign Out'].map((item) => {
                        return m(ListTile, {
                            title: item,
                            positionSelected: false,
                            ink: true
                        });
                    })
                })
            }),
            m('.pe-dark-theme.layout.horizontal', [
                opts.buttonPosition === 'right' ? m('.flex') : null,
                m(IconButton, {
                    id: opts.id,
                    icon: {
                        msvg: iconMoreVert
                    },
                    events: {
                        onclick: (e) => (e.preventDefault(), ctrl.showMenu = true)
                    }
                })
            ])
        ])
    );
};

const module = {};
module.subview = (path) => {
    // see if we need to show a dialog on load
    const data = dataForPath(path);
    if (data) {
        Dialog.show(Object.assign({}, data.dialog, {
            transition: 'hide'
        }));
    }
    return module;
};

module.view = () => {
    return m('.module-menu', [

        m(titleBlock, {
            title: 'Simple example',
            content: m('.simple-menu',
                simpleContainer
            )
        }),

        m(titleBlock, {
            title: 'Menu items',
            content: m('.menu-items', [
                menuItems(''),
                menuItems('pe-dark-theme')
            ])
        }),

        m(titleBlock, {
            title: 'Simple dialog as settings menu',
            info: m('p', m.trust('This is a dialog that uses property "menu" to behave like a menu.')),
            content: m(Button, {
                label: 'Open',
                raised: true,
                events: {
                    onclick: (e) => {
                        e.preventDefault();
                        Dialog.show(settingsMenuDialog);
                    }
                }
            })
        }),

        m(titleBlock, {
            title: 'Positioning',
            content: m('.positioning', [
                m('.layout.horizontal', [
                    m(positionContainer, {
                        id: 'show_menu_top_left',
                        origin: 'top-left',
                        barPosition: 'top',
                        buttonPosition: 'left'
                    }),
                    m('.flex'),
                    m(positionContainer, {
                        id: 'show_menu_top_right',
                        origin: 'top-right',
                        barPosition: 'top',
                        buttonPosition: 'right'
                    })
                ]),
                m('.layout.horizontal', [
                    m(positionContainer, {
                        id: 'show_menu_bottom_left',
                        origin: 'bottom-left',
                        barPosition: 'bottom',
                        buttonPosition: 'left'
                    }),
                    m('.flex'),
                    m(positionContainer, {
                        id: 'show_menu_bottom_right',
                        origin: 'bottom-right',
                        barPosition: 'bottom',
                        buttonPosition: 'right'
                    })
                ])
            ])
        }),

        m(titleBlock, {
            title: 'Change setting and reposition according to selected item',
            info: m('p', m.trust('The selected value from the menu is stored and displayed in the list.')),
            content: m(settings)
        }),

        m(titleBlock, {
            title: 'Sizes',
            info: m('p', m.trust('Widths are reduced to fit on small screen.')),
            content: [
                shortSimpleMenu(1.5),
                shortSimpleMenu(2),
                shortSimpleMenu(3),
                shortSimpleMenu(4),
                shortSimpleMenu(5),
                shortSimpleMenu(6),
                shortSimpleMenu(7),
                shortSimpleMenu('auto')
            ]
        })
    ]);
};

module.updateContentOnScroll = false;
export default module;
