import mixin from 'polythene/common/mixin';
import selectionControlStyle from 'polythene/selection-control/theme/layout';

export default (config) => (mixin.createStyles(config, (config) => {
    return selectionControlStyle(config, '.pe-control--checkbox', 'checkbox');
}));
