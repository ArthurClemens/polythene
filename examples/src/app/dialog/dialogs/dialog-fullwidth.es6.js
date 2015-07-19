'use strict';

import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import button from 'polythene/button/button';
import common from './common';

const buttons = [
    m.component(button, {
        label: 'Turn on location services',
        url: {href: '/dialog', config: m.route},
        events: {
            onclick: () => {
                window.dialog.shouldHide = true;
            }
        }
    }),
    m.component(button, {
        label: 'No thanks',
        url: {href: '/dialog', config: m.route},
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
            footer: buttons,
            transition: (window.dialog && window.dialog.transition === false) ? 'out' : 'both'
        }));
    }
};

export default fullWidthDialog;
