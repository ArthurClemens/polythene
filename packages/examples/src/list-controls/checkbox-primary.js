import m from 'mithril';
import { Checkbox, List, ListTile, styler } from 'polythene';
import style from './checkbox-primary-style';
styler.add('polythene-examples-checkbox-primary-list', style);

import iconMessage from 'mmsvg/google/msvg/communication/message';

const cbListTile = {};
cbListTile.controller = (opts) => {
    return {
        selected: opts.index === 2
    };
};
cbListTile.view = (ctrl) => {
    return m(ListTile, {
        title: ctrl.selected ? 'Line item selected' : 'Line item unselected',
        front: m(Checkbox, {
            checked: () => ctrl.selected,
            getState: (state) => (ctrl.selected = state.checked)
        }),
        secondary: {
            icon: {
                msvg: iconMessage
            }
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
        class: 'demo-list checkbox-primary-list',
        tiles: [1,2,3].map((index) => (m(cbListTile, {index})))
    });
};

export default cbList;
