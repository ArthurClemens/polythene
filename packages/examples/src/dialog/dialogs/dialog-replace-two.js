import 'polythene/common/object.assign';
import m from 'mithril';
import { Button, Dialog } from 'polythene';
import common from './common';
import dialogOneOptions from './dialog-replace';

export default Object.assign(
    {},
    common.dialogProps, {
        body: 'Dialog Two',
        footer: m(Button, {
            label: 'Show One',
            events: {
                onclick: () => Dialog.show(dialogOneOptions)
            }
        })
    }
);