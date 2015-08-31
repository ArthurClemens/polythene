'use strict';

import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import headerPanel from 'polythene/header-panel/header-panel';
import button from 'polythene/button/button';
import iconBtn from 'polythene/icon-button/icon-button';
import common from './common';

const fullscreenToolbarRow = function(title, opts) {
    return [
        m.component(iconBtn, {
            icon: {
                svg: {
                    group: 'google/navigation',
                    name: 'close'
                }
            },
            events: {
                onclick: () => {
                    opts.confirmDialogShown(true);
                }
            }
        }),
        m('span.flex', title),
        m.component(button, {
            label: 'Save',
            url: {href: '/dialog', config: m.route},
            events: {
                onclick: () => {
                    alert('Settings saved. Of course this message should be a notification...');
                    window.dialog.shouldHide = true;
                    // redraw because of the time passed during alert shown
                    m.redraw();
                }
            }
        })
    ];
};

const fullscreenPanelBlock = {
    view: function(ctrl, opts) {
        return m.component(headerPanel, {
            class: 'dark-theme',
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

const fullscreenPanelConfirmDialog = {
    view: (ctrl, opts) => {
        return m.component(dialog, {
            class: 'demo-dialog',
            footer: [
                m.component(button, {
                    label: 'Cancel',
                    events: {
                        onclick: () => {
                            // start hiding confirm dialog
                            opts.shouldHideConfirmDialog(true);
                        }
                    }
                }),
                m.component(button, {
                    label: 'Discard',
                    events: {
                        onclick: () => {
                            // start hiding fullscreen dialog
                            window.dialog.shouldHide = true;
                        }
                    }
                })
            ],
            body: common.shortBodyText,
            modal: true,
            backdrop: true,
            shouldHide: () => {
                return opts.shouldHideConfirmDialog();
            },
            didHide: () => {
                opts.confirmDialogShown(false);
                // reset for next time
                opts.shouldHideConfirmDialog(false);
                m.route('/dialog');
                m.redraw(); // remove dialog from app.view
            },
            transition: 'both'
        });
    }
};

const fullscreenDialog = {
    controller: () => {
        return {
            confirmDialogShown: m.prop(false),
            shouldHideConfirmDialog: m.prop(false)
        };
    },
    view: (ctrl) => {
        return m.component(dialog, Object.assign({}, common.dialogProps, {
            class: 'demo-dialog',
            body: [
                ctrl.confirmDialogShown() ? m.component(fullscreenPanelConfirmDialog, {
                    confirmDialogShown: ctrl.confirmDialogShown,
                    shouldHideConfirmDialog: ctrl.shouldHideConfirmDialog
                }) : null,
                m.component(fullscreenPanelBlock, {
                    confirmDialogShown: ctrl.confirmDialogShown
                })
            ],
            fullscreen: true,
            transition: (window.dialog && window.dialog.transition === false) ? 'out' : 'both'
        }));
    }
};

export default fullscreenDialog;
