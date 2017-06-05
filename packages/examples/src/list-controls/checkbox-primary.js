import m from 'mithril';
import { Checkbox, List, ListTile } from 'polythene';
import { styler } from 'polythene-core-css';
import style from './checkbox-primary-style';
styler.add('polythene-examples-checkbox-primary-list', style);

import iconMessage from 'mmsvg/google/msvg/communication/message';

const cbListTile = {};
cbListTile.controller = (opts) => {
    return {
        selected: m.prop(opts.index === 2)
    };
};
cbListTile.view = (ctrl) => {
    const events = {
        onclick: () => ctrl.selected(!ctrl.selected())
    };
    return m(ListTile, {
        title: ctrl.selected() ? 'Line item selected' : 'Line item unselected',
        front: m(Checkbox, {
            checked: () => ctrl.selected(),
            getState: state => ctrl.selected(state.checked),
            events
        }),
        secondary: {
            icon: { msvg: iconMessage }
        },
        hoverable: true,
        events
    });
};

const cbList = {};
cbList.view = () => {
    return m(List, {
        class: 'demo-list checkbox-primary-list',
        tiles: [1,2,3].map(index => m(cbListTile, {index}))
    });
};

export default cbList;
