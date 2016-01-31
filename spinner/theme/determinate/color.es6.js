import mixin from 'polythene/common/mixin';

const style = (config, tint, scope = '') => {
    return [{
        [scope + '.pe-spinner--determinate']: {
            color: config['color_' + tint],

            ' circle': {
                fill: 'transparent'
            },

            '&.pe-spinner--single-color circle': {
                stroke: 'currentcolor'
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
