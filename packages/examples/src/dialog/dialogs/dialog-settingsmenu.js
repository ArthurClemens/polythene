
import m from 'mithril';
import 'polythene/common/object.assign';
import { List, Dialog, ListTile } from 'polythene';
import common from './common';

const createListTile = title => {
    return m(ListTile, {
        title,
        events: {
            onclick: () => Dialog.hide()
        },
        ink: true
    });
};

export default Object.assign(
    {},
    common.dialogProps, {
        class: 'demo-dialog',
        menu: m(List, {
            hoverable: true,
            tiles: [
                createListTile('Show all notification content including sensitive notification content'),
                createListTile('Hide sensitive notification content'),
                createListTile('Hide all notification content')
            ]
        }),
        hideDelay: .15,
        header: null,
        footer: null
    }
);
