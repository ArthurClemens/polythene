import m from 'mithril';
import { Button, Dialog } from 'polythene';

export default {
    body: m(Button, {
        raised: true,
        label: 'Go to home',
        events: {
            onclick: () => {
                m.route('/');
            }
        }
    }),
    footer: m(Button, {
        label: 'Close',
        events: {
            onclick: () => Dialog.hide()
        }
    })
};