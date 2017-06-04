function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import common from '../../../config/config';
import mixin from '../../../common/mixin';

var kfFade = function kfFade() {
    return {
        ' 0%': {
            opacity: .640
        },
        ' 100%': {
            opacity: .035
        }
    };
};

var positionBlades = function positionBlades(config) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (i) {
        // reverse to improve performance on iOS
        var delay = -(1 / 12 * i * config.animation_duration);
        var rotation = 360 - 360 / 12 * i;

        return _defineProperty({}, ' div:nth-of-type(' + (i + 1) + ')', [mixin.vendorize({
            'transform': 'rotate(' + rotation + 'deg) translate3d(0,-142%,0)'
        }, common.prefixes_transform), mixin.vendorize({
            'animation': 'iosSpinnerFade ' + config.animation_duration + 's ' + delay + 's linear infinite'
        }, common.prefixes_animation)]);
    });
};

var createStyles = function createStyles(config) {
    return [{
        '.pe-spinner--ios': [mixin.vendorize({ 'transform': 'translate3d(0,0,0)' }, common.prefixes_transform), positionBlades(config), {
            position: 'relative',

            ' > div': {
                position: 'absolute',
                width: '10%',
                height: '28%',
                left: '44.5%',
                top: '37%',
                opacity: 0,
                'border-radius': '50px'
            },

            '@keyframes iosSpinnerFade': kfFade()
        }]
    }];
};

export default (function (config) {
    return mixin.createStyles(config, createStyles);
});