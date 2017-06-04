import m from 'mithril';
import 'polythene/common/object.assign';
import { Dialog, Icon, List, ListTile } from 'polythene';
import common from './common';

import iconAccount from 'mmsvg/google/msvg/action/account-circle';

export default Object.assign({},
    common.dialogProps, {
        class: 'demo-dialog dialog-simple',
        title: 'Set backup account',
        menu: m(List, {
            hoverable: true,
            tiles: [1, 2, 3].map(() => {
                return m(ListTile, {
                    class: 'demo-item',
                    front: m(Icon, {
                        type: 'large',
                        msvg: iconAccount
                    }),
                    title: 'Account',
                    events: {
                        onclick: () => {
                            Dialog.hide();
                        }
                    }
                });
            })
        }),
        footer: null
    }
);
