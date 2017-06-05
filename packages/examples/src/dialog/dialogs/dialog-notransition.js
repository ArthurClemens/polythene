import 'polythene/common/object.assign';
import common from './common';

export default Object.assign(
    {},
    common.dialogProps, {
        body: common.shortBodyText,
        transition: 'none'
    }
);
