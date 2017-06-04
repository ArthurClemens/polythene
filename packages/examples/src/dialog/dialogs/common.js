import m from 'mithril';
import { Button, Dialog } from 'polythene';

const repeatText = function(text, count) {
    let out = '';
    while (count > 0) {
        out += text;
        count--;
    }
    return out;
};

const template = [
    '<div class="demo-content">',
    repeatText('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 16),
    '</div>'
].join('');

const shortBodyText = 'Discard draft?';

const cancelOkButtons = [
    m(Button, {
        label: 'Cancel',
        events: {
            onclick: () => (Dialog.hide())
        }
    }),
    m(Button, {
        label: 'Discard',
        events: {
            onclick: () => (Dialog.hide())
        }
    })
];

const dialogProps = {
    class: 'demo-dialog',
    footer: cancelOkButtons,
    didHide: () => (m.route('/dialog'))
};

export default {
    dialogProps: dialogProps,
    template: template,
    shortBodyText: shortBodyText,
    cancelOkButtons: cancelOkButtons
};
