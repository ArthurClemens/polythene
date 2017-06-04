import m from 'mithril';
import { IconButton, List, ListTile, Menu } from 'polythene';

import iconArrowBack from 'mmsvg/google/msvg/navigation/arrow-back';
import iconMore from 'mmsvg/google/msvg/navigation/more-vert';

const createBottomBar = (title, subtitle) => {
    let text = '';
    if (title) {
        text += title;
    }
    if (subtitle) {
        text += ' - ';
        text += subtitle;
    }
    return [
        m('.pe-toolbar__title--indent.pe-title', text),
        m('.spacer-right')
    ];
};

const toolbar = {
    controller: () => {
        return {
            menuOpen: false
        };
    },
    view: (ctrl, opts) => {
        return m('.common-toolbar.layout.horizontal', [
            m(IconButton, {
                class: 'pe-dark-theme',
                url: {
                    href: '/header-panel',
                    config: m.route
                },
                icon: {
                    msvg: iconArrowBack
                }
            }),
            m('span.flex', opts.title),
            m(Menu, {
                target: 'toolbar_menu_button',
                origin: 'top-right',
                show: ctrl.menuOpen,
                size: 3,
                hideDelay: 0.240,
                didHide: () => (ctrl.menuOpen = false),
                content: m(List, {
                    hoverable: true,
                    tiles: ['One', 'Two', 'Three', 'Four'].map(function(item) {
                        return m(ListTile, {
                            title: item,
                            positionSelected: false,
                            ink: true
                        });
                    })
                })
            }),
            m(IconButton, {
                id: 'toolbar_menu_button',
                class: 'pe-dark-theme',
                icon: {
                    msvg: iconMore
                },
                events: {
                    onclick: () => (ctrl.menuOpen = true)
                }
            }),
        ]);
    }
};


const toolbarRow = function(title) {
    return m(toolbar, {
        title
    });
};

const repeatText = function(text, count) {
    let out = '';
    while (count > 0) {
        out += text;
        count--;
    }
    return out;
};

const textContent = (className = 'pe-header-panel-content') => {
    return [
        `<div class=' + ${className} + '>`,
        repeatText('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 16),
        '</div>'
    ].join('');
};

export
default {
    createBottomBar,
    toolbarRow,
    textContent
};