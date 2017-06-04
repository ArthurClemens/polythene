import m from 'mithril';
import { Checkbox, Icon, List, ListTile, styler } from 'polythene';
import style from './checkbox-secondary-style';
styler.add('polythene-examples-checkbox-secondary-list', style);

const avatarImageUrl = (fileName) => 'http://arthurclemens.github.io/assets/polythene/examples/avatar-' + fileName;

const cbListTile = {};
cbListTile.controller = (opts) => {
    return {
        selected: opts.index === 2
    };
};
cbListTile.view = (ctrl, opts) => {
    return m(ListTile, {
        title: ctrl.selected ? 'Line item selected' : 'Line item unselected',
        front: m(Icon, {
            type: 'large',
            class: 'pe-icon--avatar',
            src: avatarImageUrl(opts.index + '.png')
        }),
        secondary: {
            content: m(Checkbox, {
                checked: () => ctrl.selected,
                getState: (state) => (ctrl.selected = state.checked)
            })
        },
        hoverable: true,
        events: {
            onclick: () => ctrl.selected = !ctrl.selected
        }
    });
};

const cbList = {};
cbList.view = () => {
    return m(List, {
        class: 'demo-list checkbox-secondary-list',
        tiles: [1,2,3].map((index) => (m(cbListTile, {index})))
    });
};

export default cbList;
