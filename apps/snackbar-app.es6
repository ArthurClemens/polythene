import m from 'mithril';
import snackbar from '../notification/snackbar';
import button from '../button/button';
import dialog from '../dialog/dialog';

const actionDialog = (instance) => {
    return {
        class: 'message-action-dialog',
        body: 'You would like to think about it',
        footer: [
            m.component(button, {
                label: 'No',
                events: {
                    onclick: () => {
                        dialog.hide();
                        instance.unpause();
                    }
                }
            }),
            m.component(button, {
                label: 'Yes',
                events: {
                    onclick: () => {
                        dialog.hide();
                        instance.hide();
                    }
                }
            })
        ],
        backdrop: true,
        modal: true
    };
};

const app = {};
app.view = () => {
    return m('.app', [
        m('#snackbar', m.component(snackbar)),
        m.component(button, {
            label: 'Show',
            raised: true,
            events: {
                onclick: () => {
                    snackbar.show({
                        containerSelector: '#snackbar',
                        title: 'This message tells some things using quite a few words.',
                        layout: 'vertical',
                        action: m.component(button, {
                            label: 'Let me think about it',
                            events: {
                                onclick: () => {
                                    snackbar.pause();
                                    dialog.show(actionDialog(snackbar));
                                }
                            }
                        }),
                    });
                }
            }
        }),
        m.component(dialog)
    ]);
};

m.mount(document.body, app);