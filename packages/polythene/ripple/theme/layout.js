import common from '../../config/config';
import mixin from '../../common/mixin';

var kfRipple = function kfRipple(config) {
    return {
        ' 100%': {
            transform: 'scale(' + config.end_scale + ')',
            'opacity': config.end_opacity
        }
    };
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-ripple': [mixin.fit(), {
            color: 'inherit',
            'border-radius': 'inherit',

            '&.pe-ripple--constrained': {
                'border-radius': 'inherit',

                ' .pe-ripple__mask': {
                    overflow: 'hidden',
                    'border-radius': 'inherit'
                }
            },
            ' .pe-ripple__mask': [mixin.fit(), mixin.vendorize({
                'transform': 'translate3d(0,0,0)'
            }, common.prefixes_transform)],

            ' .pe-ripple__waves': [mixin.vendorize({
                'transform': 'scale(' + config.start_scale + ')'
            }, common.prefixes_transform), mixin.vendorize({
                'animation': 'ripple ' + common.animation_curve_default
            }, common.prefixes_animation),
            // default durations; finally set in js
            mixin.vendorize({
                'animation-duration': common.animation_duration
            }, common.prefixes_animation), {
                outline: '1px solid transparent', // for IE10
                position: 'absolute',
                'border-radius': '50%',
                opacity: config.start_opacity,
                'pointer-events': 'none',
                display: 'none'
            }],
            ' .pe-ripple__waves--animated': {
                display: 'block'
            }
        }],

        '@keyframes ripple': kfRipple(config)
    }];
};

export default (function (config) {
    return mixin.createStyles(config, createStyles);
});