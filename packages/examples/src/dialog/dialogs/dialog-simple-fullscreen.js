import m from 'mithril';
import 'polythene/common/object.assign';
import { Dialog, HeaderPanel, Button, IconButton } from 'polythene';
import common from './common';
import iconClose from 'mmsvg/google/msvg/navigation/close';

const fullscreenToolbarRow = function(title) {
    return [
        m(IconButton, {
            icon: {
                msvg: iconClose
            },
            events: {
                onclick: () => {
                    Dialog.hide();
                }
            }
        }),
        m('span.flex', title),
        m(Button, {
            label: 'Save',
            events: {
                onclick: () => {
                    Dialog.hide();
                }
            }
        })
    ];
};

export default Object.assign(
    {},
    common.dialogProps, {
        class: 'demo-dialog',
        body: m(HeaderPanel, {
            class: 'pe-dark-theme',
            fixed: true,
            header: {
                toolbar: {
                    content: fullscreenToolbarRow('New event')
                }
            },
            content: m.trust(common.template)
        }),
        fullscreen: true
    }
);
