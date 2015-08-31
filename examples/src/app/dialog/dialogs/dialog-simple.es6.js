'use strict';

import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import item from 'polythene/item/item';
import common from './common';

const accountCircleIcon = {
    class: 'accountCircleIcon',
    type: 'large',
    svg: {
        group: 'google/action',
        name: 'account-circle'
    }
};

const simpleDialog = {
    view: () => {
        return m.component(dialog, Object.assign({}, common.dialogProps, {
            class: 'demo-dialog',
            title: 'Set backup account',
            body: [1, 2, 3].map(() => {
                return m.component(item, {
                    icon: accountCircleIcon,
                    class: 'demo-item',
                    label: 'Account',
                    content: m('a', {
                        href: '/dialog',
                        config: m.route
                    }),
                    events: {
                        onclick: () => {
                            window.dialog.shouldHide = true;
                        }
                    }
                });
            }),
            footer: null,
            transition: (window.dialog && window.dialog.transition === false) ? 'out' : 'both'
        }));
    }
};

export default simpleDialog;
