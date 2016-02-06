import mixin from 'polythene/common/mixin';
import style from 'polythene/selection-control/theme/color';

const createStyles = (config) => {
    return [
        style(config, 'light', '.pe-control--radio'),
        {
            '.pe-dark-theme': [
                // inside dark theme
                style(config, 'dark', ' '),
                // has dark theme
                style(config, 'dark', '&')
            ]
        }
    ];
};

export default (config) => (mixin.createStyles(config, createStyles));
