import m from 'mithril';
import { Button, Dialog, FAB, Notification, Snackbar } from 'polythene';
import { styler } from 'polythene-core-css';
import style from './notification-messages-style';
styler.add('polythene-examples-notification-messages', style);

import iconPlus from 'mmsvg/templarian/msvg/plus';

const fabIcon = {
    msvg: iconPlus
};

const actionDialog = (instance) => {
    return {
        class: 'message-action-dialog',
        body: 'You pressed a message action',
        footer: [
            m(Button, {
                label: 'Cancel',
                events: {
                    onclick: () => {
                        Dialog.hide();
                        instance.unpause();
                    }
                }
            }),
            m(Button, {
                label: 'OK',
                events: {
                    onclick: () => {
                        Dialog.hide();
                        instance.hide();
                    }
                }
            })
        ],
        backdrop: true,
        modal: true
    };
};

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class || ''
        }, [
            args.title ? m('.p-block-header', args.title) : null,
            args.info ? args.info : null,
            args.content ? args.content : null
        ]);
    }
};

const buttonRow = (instance, containerSelector, dismissSelector) => {
    return m('.button-row', [
        m(Button, {
            label: '1 line',
            raised: true,
            events: {
                onclick: () => {
                    instance.show({
                        title: 'A one line message',
                        containerSelector,
                        dismissSelector
                    }).then(() => (console.log("item 1 shown")));
                }
            }
        }),
        m(Button, {
            label: '2 line',
            raised: true,
            events: {
                onclick: () => (instance.show({
                    title: 'This message tells some things using two lines',
                    containerSelector,
                    dismissSelector
                }))
            }
        }),
        m(Button, {
            label: '1 line action',
            raised: true,
            events: {
                onclick: () => (instance.show({
                    title: 'Archived',
                    action: m(Button, {
                        label: 'Undo',
                        events: {
                            onclick: () => {
                                instance.pause();
                                Dialog.show(actionDialog(instance));
                            }
                        }
                    }),
                    containerSelector,
                    dismissSelector
                }))
            }
        }),
        m(Button, {
            label: '2 line action',
            raised: true,
            events: {
                onclick: () => (instance.show({
                    title: 'This message tells some things using two lines',
                    action: m(Button, {
                        label: 'Undo',
                        events: {
                            onclick: () => {
                                instance.pause();
                                Dialog.show(actionDialog(instance));
                            }
                        }
                    }),
                    containerSelector,
                    dismissSelector
                }))
            }
        }),
        m(Button, {
            label: '2 line long action',
            raised: true,
            events: {
                onclick: () => (instance.show({
                    title: 'This message tells some things using two lines',
                    layout: 'vertical',
                    action: m(Button, {
                        label: 'Let me think about it',
                        events: {
                            onclick: () => {
                                instance.pause();
                                Dialog.show(actionDialog(instance));
                            }
                        }
                    }),
                    containerSelector,
                    dismissSelector
                }))
            }
        }),
        m(Button, {
            label: 'Custom timing',
            raised: true,
            events: {
                onclick: () => (instance.show({
                    title: 'Custom timing',
                    containerSelector,
                    dismissSelector,
                    showDelay: .2,
                    showDuration: 1,
                    hideDuration: .2
                }))
            }
        }),
        m(Button, {
            label: 'Dismiss',
            raised: true,
            disabled: instance.count() === 0,
            events: {
                onclick: () => (instance.hide())
            }
        }),
        m(Button, {
            label: 'Clear',
            raised: true,
            disabled: instance.count() === 0,
            events: {
                onclick: () => {
                    instance.hide().then(() => {
                        instance.clear();
                        m.redraw();
                    });
                }
            }
        })
    ]);
};

const snackbarContainer = (sizeSelector, idSelector) => {
    return m('.container' + sizeSelector + idSelector, [
        m('p', 'Message count: ' + Snackbar.count()),
        m('.bottom.layout.vertical', {
            id: 'bottom_container'
        }, [
            m(FAB, {
                class: 'self-end',
                icon: fabIcon,
                z: 1
            }),
            m(Snackbar)
        ])
    ]);
};

const notificationContainer = (sizeSelector, idSelector) => {
    return m('.container' + sizeSelector + idSelector, [
        m('p', 'Message count: ' + Notification.count()),
        m('#notifications.pe-fit.layout.center-center',
            m(Notification)
        )
    ]);
};

const containerSizes = [
    {
        sel: '.mobile',
        title: 'Mobile'
    },
    {
        sel: '.tablet',
        title: 'Tablet'
    },
    {
        sel: '.desktop',
        title: 'Desktop'
    }
];

const themeSettings = [
    {
        class: 'light-theme',
        title: 'Light theme'
    },
    {
        class: 'pe-dark-theme',
        title: 'Dark theme'
    }
];

const controlButtons = (ctrl) => {
    return [
        m('.button-row', containerSizes.map((s, index) => {
            return m(Button, {
                label: s.title,
                selected: ctrl.sizeIndex === index,
                events: {
                    onclick: () => (ctrl.sizeIndex = index)
                }
            });
        })),
        m('.button-row', themeSettings.map((s, index) => {
            return m(Button, {
                label: s.title,
                selected: ctrl.themeIndex === index,
                events: {
                    onclick: () => (ctrl.themeIndex = index)
                }
            });
        }))
    ];
};

const module = {};
module.controller = () => {
    return {
        sizeIndex: 0,
        themeIndex: 0
    };
};
module.view = (ctrl) => {
    const size = containerSizes[ctrl.sizeIndex];
    const theme = themeSettings[ctrl.themeIndex];

    return m('.module-notification', [
        m(titleBlock, {
            content: controlButtons(ctrl)
        }),
        m(titleBlock, {
            title: 'Snackbar',
            info: m('p', m.trust('Add messages to the queue:')),
            class: theme.class,
            content: [
                buttonRow(Snackbar, '#bottom_container', '#snackbar_container'),
                snackbarContainer(size.sel, '#snackbar_container')
            ]
        }),
        m(titleBlock, {
            title: 'Notification',
            info: m('p', m.trust('Add messages to the queue:')),
            class: theme.class,
            content: [
                buttonRow(Notification, '#notifications', '#notification_container'),
                notificationContainer(size.sel, '#notification_container')
            ]
        })
    ]);
};
module.updateContentOnScroll = true;

module.isSub = true;
module.back = '/notification';
module.title = 'Notification message variations';

export default module;
