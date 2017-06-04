import mixin from '../../common/mixin';
import selectionControlStyle from '../../selection-control/theme/layout';

export default (config) => (mixin.createStyles(config, (config) => {
    return selectionControlStyle(config, '.pe-control--radio', 'radio');
}));
