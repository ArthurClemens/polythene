import mixin from '../../common/mixin';
import style from '../../selection-control/theme/color';

var createStyles = function createStyles(config) {
    return [style(config, 'light', '.pe-control--checkbox'), {
        '.pe-dark-theme': [
        // inside dark theme
        style(config, 'dark', ' '),
        // has dark theme
        style(config, 'dark', '&')]
    }];
};

export default (function (config) {
    return mixin.createStyles(config, createStyles);
});