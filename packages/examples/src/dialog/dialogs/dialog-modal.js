
import m from 'mithril';
import 'polythene/common/object.assign';
import common from './common';

export default Object.assign(
    {},
    common.dialogProps, {
        title: 'Modal',
        body: m.trust(common.template),
        modal: true,
        backdrop: true
    }
);
