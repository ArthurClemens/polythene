/*
In index.es6.js the dialog is rendered in the app.view function.
*/
import 'polythene/common/object.assign';
import m from 'mithril';
import { Button, Dialog, Switch } from 'polythene';
import { styler } from 'polythene-core-css';
import shortDialog from './dialogs/dialog-short';
import noTransitionDialog from './dialogs/dialog-notransition';
import longDialog from './dialogs/dialog-long';
import formDialog from './dialogs/dialog-form';
import modalDialog from './dialogs/dialog-modal';
import darkDialog from './dialogs/dialog-dark';
import fullscreenSimpleDialog from './dialogs/dialog-simple-fullscreen';
import fullscreenDialog from './dialogs/dialog-fullscreen';
import simpleDialog from './dialogs/dialog-simple';
import settingsMenuDialog from './dialogs/dialog-settingsmenu';
import fullWidthDialog from './dialogs/dialog-fullwidth';
// import routeDialog from './dialogs/dialog-route';
import multiRouteDialog from './dialogs/dialog-multi-route';
import replaceDialog from './dialogs/dialog-replace';
import style from './dialog-style';
styler.add('polythene-examples-dialog', style);

const titleBlock = {
    view: function(ctrl, args) {
        return m('.p-block', {
            class: args.class
        }, [
            m('.p-block-header', args.title),
            args.info ? args.info : null,
            m('div', args.content)
        ]);
    }
};

const dialogsData = [
    {
        title: 'Short dialog',
        dialog: shortDialog,
        info: 'Dialog without title.',
        url: '/dialog/short'
    },
    {
        title: 'No transition',
        dialog: noTransitionDialog,
        info: 'Dialog appears without fadein/out.',
        url: '/dialog/notransition'
    },
    {
        title: 'Form dialog',
        dialog: formDialog,
        info: 'Shows conditional button states.',
        url: '/dialog/form'
    },
    {
        title: 'Long dialog',
        dialog: longDialog,
        info: 'Shows content borders with scrolled content.',
        url: '/dialog/long'
    },
    {
        title: 'Modal dialog with backdrop',
        dialog: modalDialog,
        info: 'A modal dialog can only be closed by a confirming action.',
        url: '/dialog/modal'
    },
    {
        title: 'Modal dialog dark theme',
        dialog: darkDialog,
        url: '/dialog/dark'
    },
    {
        title: 'Fullscreen dialog (simple)',
        dialog: fullscreenSimpleDialog,
        info: 'Example of a simple fullscreen dialog.',
        url: '/dialog/simple-fullscreen'
    },
    {
        title: 'Fullscreen dialog (confirm)',
        dialog: fullscreenDialog,
        info: 'Example with secondary (stacked) dialog with a confirm action.',
        url: '/dialog/fullscreen'
    },
    {
        title: 'Simple dialog',
        dialog: simpleDialog,
        info: 'Simple dialogs can present additional details about a list item or provide actions related to the primary task.',
        url: '/dialog/simple'
    },
    {
        title: 'Simple dialog as settings menu',
        dialog: settingsMenuDialog,
        info: 'Simple dialogs can be used as enhanced settings menu.',
        url: '/dialog/settingsmenu'
    },
    {
        title: 'Full width button',
        dialog: fullWidthDialog,
        info: 'Stacked buttons.',
        url: '/dialog/fullwidth'
    },
    // {
    //     title: 'Persistent dialog',
    //     dialog: routeDialog,
    //     info: 'Persists across route change.',
    //     url: '/dialog/route'
    // },
    {
        title: 'Replace dialog',
        dialog: replaceDialog,
        info: 'Change dialog contents/behavior by calling \'show\' with new options.',
        url: '/dialog/replace'
    },
    {
        title: 'Routes within a dialog',
        dialog: multiRouteDialog,
        info: 'Keep dialog, change dialog contents.',
        url: '/dialog/multi-route'
    }
];

// for the 'multi' demo we need to keep the dialog
const additionalRoutes = [{
    url: '/dialog/multi-route/one',
    dialog: multiRouteDialog
}, {
    url: '/dialog/multi-route/two',
    dialog: multiRouteDialog
}];

const dataForPath = (path) => {
    const allData = dialogsData.concat(additionalRoutes);
    return allData.reduce((found, data) => {
        return (data.url === path) ? data : found;
    }, null);
};

const module = {};
module.subview = (path) => {
    // see if we need to show a dialog on load
    // only when we use routes (otherwise no route in url to use)
    const data = dataForPath(path);
    if (data) {
        Dialog.show(data.dialog).then((dialogId) => (console.log('route dialog shown', dialogId)));;
    } else {
        Dialog.hide().then((dialogId) => (console.log('route dialog hidden', dialogId)));
    }
    return module;
};
module.view = (ctrl) => {
    return m('.module-dialog', [
        m(titleBlock, {
            content: m(Switch, {
                label: 'Use routing',
                getState: (state) => (ctrl.checked = state.checked)
            })
        }),
        dialogsData.map(data => {
            return m(titleBlock, {
                title: data.title,
                info: data.info ? m('p', data.info) : null,
                content: m(Button, {
                    label: 'Open',
                    raised: true,
                    events: {
                        onclick: (e) => {
                            e.preventDefault();
                            if (ctrl.checked) {
                                m.route(data.url);
                            } else {
                                Dialog.show(data.dialog).then((dialogId) => (console.log('dialog shown', dialogId)));
                            }
                        }
                    }
                })
            });
        })
    ]);
};

export default module;
