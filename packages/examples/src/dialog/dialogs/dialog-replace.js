import 'polythene/common/object.assign';
import m from 'mithril';
import { Button, Dialog } from 'polythene';
import common from './common';
import dialogTwoOptions from './dialog-replace-two';

export default Object.assign(
    {},
    common.dialogProps, {
        body: 'Dialog One',
        footer: m(Button, {
            label: 'Show Two',
            events: {
                onclick: () => Dialog.show(dialogTwoOptions)
            }
        })
    }
);
