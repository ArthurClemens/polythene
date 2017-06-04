
import m from 'mithril';
import 'polythene/common/object.assign';
import common from './common';

export default Object.assign(
    {},
    common.dialogProps, {
        class: 'demo-dialog pe-dark-theme',
        title: 'Modal dialog dark theme',
        body: m.trust(common.template),
        modal: true,
        backdrop: true
    }
);
