import { appConfig } from "polythene-theme";
import mixin from '../../common/mixin';

const kfRipple = config => ({
    ' 100%': {
        transform: 'scale(' + config.end_scale + ')',
        'opacity': config.end_opacity
    }
});

const createStyles = config => {
    return [{
        '.pe-ripple': [
            mixin.fit(),
            {
                color: 'inherit',
                'border-radius': 'inherit',

                '&.pe-ripple--constrained': {
                    'border-radius': 'inherit',

                    ' .pe-ripple__mask': {
                        overflow: 'hidden',
                        'border-radius': 'inherit'
                    }
                },
                ' .pe-ripple__mask': [
                    mixin.fit(),
                    mixin.vendorize({
                        'transform': 'translate3d(0,0,0)'
                    }, appConfig.prefixes_transform)
                ],

                ' .pe-ripple__waves': [
                    mixin.vendorize({
                        'transform': 'scale(' + config.start_scale + ')'
                    }, appConfig.prefixes_transform),
                    mixin.vendorize({
                        'animation': 'ripple ' + appConfig.animation_curve_default
                    }, appConfig.prefixes_animation),
                    // default durations; finally set in js
                    mixin.vendorize({
                        'animation-duration': appConfig.animation_duration
                    }, appConfig.prefixes_animation), {
                        outline: '1px solid transparent', // for IE10
                        position: 'absolute',
                        'border-radius': '50%',
                        opacity: config.start_opacity,
                        'pointer-events': 'none',
                        display: 'none'
                    }
                ],
                ' .pe-ripple__waves--animated': {
                    display: 'block'
                }
            }
        ],

        '@keyframes ripple': kfRipple(config)
    }];
};

export default config => mixin.createStyles(config, createStyles);
