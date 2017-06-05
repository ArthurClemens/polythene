import m from 'mithril';
import { List, ListTile } from 'polythene';

const menuItemsTile = (left, right, disabled) => {
    return m(ListTile, {
        title: left,
        secondary: {
            content: right
        },
        disabled
    });
};

const module = {};
module.view = (ctrl, opts = {}) => {
    return m('div', [
        m(List, {
            class: ['list--compact', opts.class || ''].join(' '),
            tiles: [
                menuItemsTile('Bold', '\u2318B'),
                menuItemsTile('Italic', '\u2318I'),
                menuItemsTile('Underline', '\u2318U'),
                menuItemsTile('Strikethrough', 'Alt+Shift+5'),
                menuItemsTile('Superscript', '\u2318.'),
                menuItemsTile('Subscript', '\u2318,'),
            ]
        }),
        m(List, {
            class: ['list--compact', opts.class || ''].join(' '),
            tiles: [
                menuItemsTile('Clear formatting', '\u2318/', true),
                menuItemsTile('Custom spacing', '')
            ]
        })
    ]);
};

export default module;
