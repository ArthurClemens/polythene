/*
In this example, variable window.dialog holds the active dialog component (as a create function).
In index.es6.js the dialog is rendered in the app.view function.
*/

'use strict';

import m from 'mithril';
import button from 'polythene/button/button';
import shortDialog from './dialogs/dialog-short';
import noTransitionDialog from './dialogs/dialog-notransition';
import longDialog from './dialogs/dialog-long';
import formDialog from './dialogs/dialog-form';
import modalDialog from './dialogs/dialog-modal';
import darkDialog from './dialogs/dialog-dark';
import fullscreenDialog from './dialogs/dialog-fullscreen';
import simpleDialog from './dialogs/dialog-simple';
import fullWidthDialog from './dialogs/dialog-fullwidth';
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

const dialogsData = [
    {
        title: 'Short dialog',
        dialog: m.component(shortDialog),
        info: 'Dialog without title.',
        url: '/dialog/short'
    },
    {
        title: 'No transition',
        dialog: m.component(noTransitionDialog),
        info: 'Dialog appears without fadein/out.',
        url: '/dialog/notransition'
    },
    {
        title: 'Form dialog',
        dialog: m.component(formDialog),
        info: 'Shows conditional button states.',
        url: '/dialog/form'
    },
    {
        title: 'Long dialog',
        dialog: m.component(longDialog),
        info: 'Shows content borders with scrolled content.',
        url: '/dialog/long'
    },
    {
        title: 'Modal dialog with backdrop',
        dialog: m.component(modalDialog),
        info: 'A modal dialog can only be closed by a confirming action.',
        url: '/dialog/modal'
    },
    {
        title: 'Modal dialog dark theme',
        dialog: m.component(darkDialog),
        url: '/dialog/dark'
    },
    {
        title: 'Fullscreen dialog',
        dialog: m.component(fullscreenDialog),
        info: 'Example for mobile screen. Click the close button to see the second dialog.',
        url: '/dialog/fullscreen'
    },
    {
        title: 'Simple dialog',
        dialog: m.component(simpleDialog),
        info: 'Simple dialogs can present additional details about a list item or provide actions related to the primary task.',
        url: '/dialog/simple'
    },
    {
        title: 'Full width button',
        dialog: m.component(fullWidthDialog),
        info: 'Stacked buttons.',
        url: '/dialog/fullwidth'
    }
];

const dataForPath = (path) => {
    return dialogsData.reduce((found, data) => {
        return (data.url === path) ? data : found;
    }, null);
};

let moduleShown = false;

let module = {};
module.subview = (path) => {
    const data = dataForPath(path);
    if (data) {
        window.dialog = data.dialog;
        window.dialog.transition = moduleShown;
    } else {
        if (window.dialog) {
            window.dialog.shouldHide = true;
        }
    }
    return module;
};
module.view = () => {
    moduleShown = true;
    return m('.module-dialog', [
        m('.p-block.p-block-separate',
            m('p', m.trust('Note the individual URL for each dialog. Reload the page when the dialog is visible. Use browser back to hide the dialog.'))
        ),
        dialogsData.map(data => {
            return m.component(titleBlock, {
                title: data.title,
                content: [
                    data.info ? m('p', data.info) : null,
                    m.component(button, {
                        label: 'Open',
                        raised: true,
                        url: data.url ? {
                            href: data.url,
                            config: m.route
                        } : null
                    })
                ]
            });
        })
    ]);
};

export default module;
