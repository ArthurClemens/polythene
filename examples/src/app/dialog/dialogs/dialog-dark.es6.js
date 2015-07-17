'use strict';

import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import common from './common';

const darkDialog = {
    view: () => {
        return m.component(dialog, Object.assign({}, common.dialogProps, {
            class: 'demo-dialog dark-theme',
            title: 'Modal dialog dark theme',
            body: m.trust(common.template),
            modal: true,
            backdrop: true
        }));
    }
};

export default darkDialog;
