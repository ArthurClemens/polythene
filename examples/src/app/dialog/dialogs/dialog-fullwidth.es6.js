'use strict';

import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import button from 'polythene/button/button';
import common from './common';

const buttons = [
    m.component(button, {
        label: 'Turn on location services',
        events: {
            onclick: () => {
                window.dialog.shouldHide = true;
            }
        }
    }),
    m.component(button, {
        label: 'No thanks',
        events: {
            onclick: () => {
                window.dialog.shouldHide = true;
            }
        }
    })
];

const fullWidthDialog = {
    view: () => {
        return m.component(dialog, Object.assign({}, common.dialogProps, {
        	class: 'demo-dialog fullwidth-dialog',
            body: [
            	m('.title', 'Let your apps know your location'),
            	m('div', 'This means that your location data will be sent to our servers, anonymously of course.')
            ],
            footer: buttons
        }));
    }
};

export default fullWidthDialog;
