'use strict';

import button from 'polythene/button/button';

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
    m.component(button, {
        label: 'Cancel',
        url: {href: '/dialog', config: m.route},
        events: {
            onclick: () => {
                window.dialog.shouldHide = true;
            }
        }
    }),
    m.component(button, {
        label: 'Discard',
        url: {href: '/dialog', config: m.route},
        events: {
            onclick: () => {
                window.dialog.shouldHide = true;
            }
        }
    })
];

const dialogProps = {
    class: 'demo-dialog',
    footer: cancelOkButtons,
    shouldHide: () => {
        return window.dialog.shouldHide;
    },
    willHide: () => {
        m.route('/dialog');
    },
    didHide: () => {
        if (window.dialog) {
            window.dialog.shouldHide = false; // yes, this is really necessary, even when window.dialog is nullified
        }
        window.dialog = null;
        m.redraw(); // remove dialog from app.view
    }
};

export default {
	dialogProps: dialogProps,
	template: template,
	shortBodyText: shortBodyText,
	cancelOkButtons: cancelOkButtons
};
