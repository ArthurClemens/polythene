'use strict';

import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import common from './common';

const shortDialog = {
    view: () => {
        return m.component(dialog, Object.assign({}, common.dialogProps, {
            body: common.shortBodyText,
            transition: (window.dialog && window.dialog.transition === false) ? 'out' : 'both'
        }));
    }
};

export default shortDialog;
