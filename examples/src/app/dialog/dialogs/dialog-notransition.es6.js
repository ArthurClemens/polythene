'use strict';

import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import common from './common';

const noTransitionDialog = {
    view: () => {
        return m.component(dialog, Object.assign({}, common.dialogProps, {
            body: common.shortBodyText,
            transition: 'none'
        }));
    }
};

export default noTransitionDialog;
