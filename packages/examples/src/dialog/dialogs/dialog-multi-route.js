import m from 'mithril';
import { Button, Dialog } from 'polythene';
import pageOne from './dialog-multi-route-page-1';
import pageTwo from './dialog-multi-route-page-2';

export default () => ({
    body: m('div',
        (m.route() === '/dialog/multi-route/two') ? pageTwo : pageOne
    ),
    footer: m(Button, {
        label: 'Close',
        events: {
            onclick: () => Dialog.hide()
        }
    }),
    didHide: () => {
        m.route('/dialog');
    }
});