import mixin from '../../common/mixin';
import selectionControlStyle from '../../selection-control/theme/layout';

export default (function (config) {
    return mixin.createStyles(config, function (config) {
        return selectionControlStyle(config, '.pe-control--radio', 'radio');
    });
});