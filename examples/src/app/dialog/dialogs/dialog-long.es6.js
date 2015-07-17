'use strict';

import m from 'mithril';
import dialog from 'polythene/dialog/dialog';
import common from './common';

const longDialog = {
    view: () => {
        return m.component(dialog, Object.assign({}, common.dialogProps, {
            title: 'Long dialog with a very long title that surely won\'t fit here',
            body: m.trust(common.template)
        }));
    }
};

export default longDialog;
