/*
In this example, variable window.dialog holds the active dialog component (as a create function).
In index.es6.js the dialog is rendered in the app.view function.
*/

'use strict';

import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import button from 'polythene/button/button';
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
                window.dialog.hide = true;
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

let isEmptyValue = true;

let module = {};
module.view = () => {

    const commonDialogProps = {
        class: 'demo-dialog',
        footer: cancelOkButtons,
        shouldHide: () => {
            return window.dialog.hide;
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
                        window.dialog.hide = true;
                        isEmptyValue = true;
                        m.redraw(); // remove dialog from app.view
                    }
                },
                footer: [
                    m.component(button, {
                        label: 'Cancel',
                        events: {
                            onclick: () => {
                                window.dialog.hide = true;
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

    return m('.module-dialog', [

        m.component(titleBlock, {
            title: 'Short dialog',
            content: m.component(button, {
                label: 'Open',
                raised: true,
                events: {
					onclick: () => {
						window.dialog = shortDialog;
					}
                }
            })
        }),

        m.component(titleBlock, {
            title: 'Form dialog',
            content: m.component(button, {
                label: 'Open',
                raised: true,
                events: {
                    onclick: () => {
                        window.dialog = formDialog;
                    }
                }
            })
        }),

        m.component(titleBlock, {
            title: 'Long dialog',
            content: m.component(button, {
                label: 'Open',
                raised: true,
                events: {
					onclick: () => {
						window.dialog = longDialog;
					}
                }
            })
        }),

        m.component(titleBlock, {
            title: 'Modal dialog with backdrop',
            content: m.component(button, {
                label: 'Open',
                raised: true,
                events: {
					onclick: () => {
						window.dialog = modalDialog;
					}
                }
            })
        }),

        m.component(titleBlock, {
            title: 'Modal dialog dark theme',
            content: m.component(button, {
                label: 'Open',
                raised: true,
                events: {
                    onclick: () => {
                        window.dialog = darkDialog;
                    }
                }
            })
        })
    ]);
};

export default module;
