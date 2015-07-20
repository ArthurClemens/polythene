'use strict';

import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import button from 'polythene/button/button';
import common from './common';

let isEmptyValue = true;

const formDialog = {
    view: () => {
        return m.component(dialog, Object.assign({}, common.dialogProps, {
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
            ],
            didHide: () => {
                if (window.dialog) {
                    window.dialog.shouldHide = false; // yes, this is really necessary, even when window.dialog is nullified
                }
                window.dialog = null;
                isEmptyValue = true;
                m.redraw(); // remove dialog from app.view
            },
            transition: (window.dialog && window.dialog.transition === false) ? 'out' : 'both'
        }));
    }
};

export default formDialog;
