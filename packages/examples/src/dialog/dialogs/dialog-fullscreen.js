import m from 'mithril';
import 'polythene/common/object.assign';
import { Button, Dialog, HeaderPanel, IconButton } from 'polythene';
import common from './common';
import iconClose from 'mmsvg/google/msvg/navigation/close';

const DIALOG_CONFIRM = 'confirm-fullscreen';

const fullscreenToolbarRow = (title) => {
    return [
        m(IconButton, {
            icon: {
                msvg: iconClose
            },
            events: {
                onclick: () => {
                    Dialog.show(confirmDialogOptsFn, DIALOG_CONFIRM);
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

const fullscreenPanelBlock = {
    view: function(ctrl, opts) {
        return m(HeaderPanel, {
            class: 'pe-dark-theme',
            fixed: true,
            header: {
                toolbar: {
                    content: fullscreenToolbarRow('New event', opts)
                }
            },
            content: m.trust(common.template)
        });
    }
};

const confirmDialogOptsFn = () => {
    return Object.assign({}, common.dialogProps, {
        class: 'demo-dialog',
        footer: [
            m(Button, {
                label: 'Cancel',
                events: {
                    onclick: () => {
                        Dialog.hide(DIALOG_CONFIRM);
                    }
                }
            }),
            m(Button, {
                label: 'Discard',
                events: {
                    onclick: () => {
                        Dialog.hide(DIALOG_CONFIRM);
                        Dialog.hide();
                    }
                }
            })
        ],
        body: common.shortBodyText,
        modal: true,
        backdrop: true
    });
};

const confirmDialogShown = m.prop(false);

export default Object.assign(
    {},
    common.dialogProps, {
        class: 'demo-dialog',
        body: [
            m(fullscreenPanelBlock, {
                confirmDialogShown
            })
        ],
        fullscreen: true
    }
);
