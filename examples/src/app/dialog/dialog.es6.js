/*
In this example, variable window.dialog holds the active dialog component (as a create function).
In index.es6.js the dialog is rendered in the app.view function.
*/

'use strict';

import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import button from 'polythene/button/button';
import shortDialog from './dialogs/dialog-short';
import longDialog from './dialogs/dialog-long';
import formDialog from './dialogs/dialog-form';
import modalDialog from './dialogs/dialog-modal';
import darkDialog from './dialogs/dialog-dark';
import fullscreenDialog from './dialogs/dialog-fullscreen';
import simpleDialog from './dialogs/dialog-simple';
import common from './dialogs/common';
require('./dialog.css!');

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

let module = {};
module.view = () => {
    const exampleData = [
        {
            title: 'Short dialog',
            dialog: m.component(shortDialog)
        },
        {
            title: 'Form dialog',
            dialog: m.component(formDialog),
            info: 'Shows conditional button states.'
        },
        {
            title: 'Long dialog',
            dialog: m.component(longDialog),
            info: 'Shows content borders with scrolled content.'
        },
        {
            title: 'Modal dialog with backdrop',
            dialog: m.component(modalDialog)
        },
        {
            title: 'Modal dialog dark theme',
            dialog: m.component(darkDialog)
        },
        {
            title: 'Fullscreen dialog',
            dialog: m.component(fullscreenDialog),
            info: 'Example for mobile screen. Click the close button to see the second dialog.'
        },
        {
            title: 'Simple dialog',
            dialog: simpleDialog,
            info: 'Simple dialogs can present additional details about a list item or provide actions related to the primary task.'
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
