/*
In this example, variable window.dialog holds the active dialog component (as a create function).
In index.es6.js the dialog is rendered in the app.view function.
*/

'use strict';

import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import button from 'polythene/button/button';
import iconBtn from 'polythene/icon-button/icon-button';
import headerPanel from 'polythene/header-panel/header-panel';
require('./dialog.css!');

const repeatText = function(text, count) {
    let out = '';
    while (count > 0) {
        out += text;
        count--;
    }
    return out;
};

const shortBodyText = 'Discard draft?';

const template = [
    '<div class="demo-content">',
    repeatText('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 16),
    '</div>'
].join('');

const cancelOkButtons = [
    m.component(button, {
        label: 'Cancel',
        events: {
            onclick: () => {
                window.dialog.shouldHide = true;
            }
        }
    }),
    m.component(button, {
        label: 'Discard'
    })
];

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class
        }, [
            m('.p-block-header', args.title),
            m('div', args.content)
        ]);
    }
};

const fullscreenToolbarRow = function(title, opts) {
    return [
        m.component(iconBtn, {
            icon: {
                svg: {
                    group: 'navigation',
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
            content: m.trust(template)
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
            body: shortBodyText,
            modal: true,
            backdrop: true,
            shouldHide: () => {
                return opts.shouldHideConfirmDialog();
            },
            didHide: () => {
                opts.confirmDialogShown(false);
                // reset for next time
                opts.shouldHideConfirmDialog(false);
                m.redraw(); // remove dialog from app.view
            }
        });
    }
};
let isEmptyValue = true;

let module = {};
module.view = () => {

    const commonDialogProps = {
        class: 'demo-dialog',
        footer: cancelOkButtons,
        shouldHide: () => {
            return window.dialog.shouldHide;
        },
        didHide: () => {
            window.dialog = null;
            isEmptyValue = true;
            m.redraw(); // remove dialog from app.view
        }
    };

	const shortDialog = {
        view: () => {
            return m.component(dialog, Object.assign({}, commonDialogProps, {
                body: shortBodyText
            }));
        }
    };

    const formDialog = {
        view: () => {
            return m.component(dialog, Object.assign({}, commonDialogProps, {
                title: 'Select a file...',
                body: m('input', {
                    type: 'file',
                    id: 'file',
                    name: 'file',
                    onchange: (e) => {
                        const fileInput = e.target;
                        isEmptyValue = (fileInput.value === undefined);
                        m.redraw();
                    }
                }),
                formOptions: {
                    name: 'demo',
                    type: 'post',
                    enctype: 'multipart/form-data',
                    onsubmit: (e) => {
                        e.preventDefault();
                        const form = e.target;
                        alert('Posted: ' + form.file.value);
                        window.dialog.shouldHide = true;
                        isEmptyValue = true;
                        m.redraw(); // remove dialog from app.view
                    }
                },
                footer: [
                    m.component(button, {
                        label: 'Cancel',
                        events: {
                            onclick: () => {
                                window.dialog.shouldHide = true;
                            }
                        }
                    }),
                    m.component(button, {
                        disabled: isEmptyValue ? true : false,
                        label: 'Post',
                        tag: 'button',
                        type: 'submit'
                    })
                ]
            }));
        }
    };

	const longDialog = {
        view: () => {
            return m.component(dialog, Object.assign({}, commonDialogProps, {
                title: 'Long dialog with a very long title that surely won\'t fit here',
                body: m.trust(template)
            }));
        }
    };

	const modalDialog = {
        view: () => {
            return m.component(dialog, Object.assign({}, commonDialogProps, {
                title: 'Modal',
                body: m.trust(template),
                modal: true,
                backdrop: true
            }));
        }
    };

    const darkDialog = {
        view: () => {
            return m.component(dialog, Object.assign({}, commonDialogProps, {
                class: 'demo-dialog dark-theme',
                title: 'Modal dialog dark theme',
                body: m.trust(template),
                modal: true,
                backdrop: true
            }));
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
            return m.component(dialog, Object.assign({}, commonDialogProps, {
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
                fullscreen: true
            }));
        }
    };

    const exampleData = [
        {
            title: 'Short dialog',
            dialog: shortDialog
        },
        {
            title: 'Form dialog',
            dialog: formDialog,
            info: 'Shows conditional button states.'
        },
        {
            title: 'Long dialog',
            dialog: longDialog,
            info: 'Shows content borders with scrolled content.'
        },
        {
            title: 'Modal dialog with backdrop',
            dialog: modalDialog
        },
        {
            title: 'Modal dialog dark theme',
            dialog: darkDialog
        },
        {
            title: 'Fullscreen dialog',
            dialog: fullscreenDialog,
            info: 'Example for mobile screen. Click the close button to see the second dialog.'
        }
    ];

    return m('.module-dialog', exampleData.map(exampleData1 => {
        return m.component(titleBlock, {
            title: exampleData1.title,
            content: [
                exampleData1.info ? m('p', exampleData1.info) : null,
                m.component(button, {
                    label: 'Open',
                    raised: true,
                    events: {
                        onclick: () => {
                            window.dialog = exampleData1.dialog;
                        }
                    }
                })
            ]
        });
    }));
};

export default module;
