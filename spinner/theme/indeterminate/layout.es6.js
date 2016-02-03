import common from 'polythene/config/config';
import mixin from 'polythene/common/mixin';

const kfRotate = () => ({
    ' 100%': {
        transform: 'rotate(360deg)'
    }
});

const kfIndeterminateDash = () => ({
    ' 0%, 10%': {
        'stroke-dasharray': '1,270',
        'stroke-dashoffset': 0
    },
    ' 40%': {
        'stroke-dasharray': '89,240',
        'stroke-dashoffset': 0
    },
    ' 100%': {
        'stroke-dasharray': '1,240',
        'stroke-dashoffset': -110
    }
});

const createStyles = (config) => {
    return [{
        '.pe-spinner--indeterminate': {
            ' .pe-spinner__animation': [
                mixin.vendorize({
                    'animation': 'indeterminateSpinnerRotate ' + config.animation_duration + 's linear infinite'
                }, common.prefixes_animation)
            ],

            ' circle': {
                'stroke-width': config.circle_stroke_width
            },

            '&:not(.pe-spinner--single-color)': {
                ' circle': mixin.vendorize({
                    'animation': 'indeterminateSpinnerDash ' + config.stroke_animation_duration + 's ease-in-out infinite, indeterminateSpinnerColor ' + config.color_animation_duration + 's linear infinite'
                }, common.prefixes_animation)
            },
            '&.pe-spinner--single-color': {
                ' circle': mixin.vendorize({
                    'animation': 'indeterminateSpinnerDash ' + config.stroke_animation_duration + 's ease-in-out infinite'
                }, common.prefixes_animation)
            },

            '@keyframes indeterminateSpinnerRotate': kfRotate(),
            '@keyframes indeterminateSpinnerDash': kfIndeterminateDash()
        }
    }];
};

export default (config) => (mixin.createStyles(config, createStyles));
