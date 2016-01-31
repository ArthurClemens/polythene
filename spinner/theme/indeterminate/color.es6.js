import mixin from 'polythene/common/mixin';

const keyframes = (config, tint) => {
    const keyframesColor = () => ({
        ' 0%, 20%, 100%': {
            stroke: config['color_' + tint + '_1']
        },
        ' 30%, 45%': {
            stroke: config['color_' + tint + '_2']
        },
        ' 50%, 70%': {
            stroke: config['color_' + tint + '_3']
        },
        ' 75%, 95%': {
            stroke: config['color_' + tint + '_4']
        }
    });

    return {
        '@keyframes indeterminateSpinnerColor': keyframesColor(),
        '@-moz-keyframes indeterminateSpinnerColor': keyframesColor(),
        '@-o-keyframes indeterminateSpinnerColor': keyframesColor()
    };
};

const style = (config, tint, scope = '') => {
    return [{
        [scope + '.pe-spinner--indeterminate']: {

            color: config['color_' + tint + '_single'],

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
        keyframes(config, 'light'),
        keyframes(config, 'dark'),

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
