import mixin from 'polythene/common/mixin';

const style = (config, tint, scope = '') => {
    return [{
        [scope + '.pe-spinner--determinate']: {
            color: config['color_' + tint],

            ' .pe-spinner-determinate__circle': {
                'border-width': 'currentcolor'
            }
        }
    }];
};

const createStyles = (config) => {
    return [
        style(config, 'light'),
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
