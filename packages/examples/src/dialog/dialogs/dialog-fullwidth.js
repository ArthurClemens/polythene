import m from 'mithril';
import 'polythene/common/object.assign';
import { Button, Dialog } from 'polythene';
import common from './common';

const buttonEvents = {
    onclick: () => {
        Dialog.hide();
    }
};

const buttons = [
    m(Button, {
        label: 'Turn on location services',
        events: buttonEvents
    }),
    m(Button, {
        label: 'No thanks',
        events: buttonEvents
    })
];

export default Object.assign(
    {},
    common.dialogProps, {
        class: 'demo-dialog fullwidth-dialog',
        body: [
            m('.pe-dialog__title', 'Let your apps know your location'),
            m('div', 'This means that your location data will be sent to our servers, anonymously of course.')
        ],
        footer: buttons
    }
);
