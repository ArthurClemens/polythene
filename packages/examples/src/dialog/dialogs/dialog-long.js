
import m from 'mithril';
import 'polythene/common/object.assign';
import common from './common';

export default Object.assign(
    {},
    common.dialogProps, {
        title: 'Long dialog with a very long title that surely won\'t fit here',
        body: m.trust(common.template)
    }
);
