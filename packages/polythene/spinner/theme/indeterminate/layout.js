function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
Derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { appConfig } from "polythene-theme";
import mixin from '../../../common/mixin';

var OPACITY_MIN = 0;
var OPACITY_MAX = .99;
var CURVE_INFINITE = 'cubic-bezier(0.4, 0.0, 0.2, 1) infinite both';

var createStyles = function createStyles(config) {
    return [{
        '.pe-spinner-indeterminate': {

            ' .pe-spinner-indeterminate__animation': [mixin.vendorize({
                'animation': 'indeterminateSpinnerRotate ' + config.rotation_duration + 's linear infinite'
            }, appConfig.prefixes_animation), {
                position: 'relative',
                width: '100%',
                height: '100%',

                /* The spinner does not have any contents that would have to be
                * flipped if the direction changes. Always use ltr so that the
                * style works out correctly in both cases. */
                direction: 'ltr'
            }],

            /**
            * Patch the gap that appear between the two adjacent div.pe-spinner-indeterminate__circle-clipper while the
            * spinner is rotating (appears on Chrome 38, Safari 7.1, and IE 11).
            *
            * Update: the gap no longer appears on Chrome when .pe-spinner-indeterminate__layer's opacity is 0.99,
            * but still does on Safari and IE.
            */
            ' .pe-spinner-indeterminate__gap-patch': {
                position: 'absolute',
                'box-sizing': 'border-box',
                top: 0,
                left: '45%',
                width: '10%',
                height: '100%',
                overflow: 'hidden',
                'border-color': 'inherit'
            },

            ' .pe-spinner-indeterminate__gap-patch .pe-spinner-indeterminate__circle': {
                width: '1000%',
                left: '-450%'
            },

            ' .pe-spinner-indeterminate__circle-clipper': {
                display: 'inline-block',
                'font-size': 0,
                'line-height': 0,
                position: 'relative',
                width: '50%',
                height: '100%',
                overflow: 'hidden',
                'border-color': 'inherit'
            },

            ' .pe-spinner-indeterminate__circle-clipper .pe-spinner-indeterminate__circle': {
                width: '200%'
            },

            ' .pe-spinner-indeterminate__circle': [mixin.fit(), mixin.vendorize({
                'animation': 'none'
            }, appConfig.prefixes_animation), {
                'box-sizing': 'border-box',
                height: '100%',
                'border-style': 'solid',
                'border-color': 'inherit',
                'border-radius': '50%',
                'border-bottom-color': 'transparent !important'
            }],

            '&': ['small', 'regular', 'medium', 'large', 'fab'].map(function (size) {
                return _defineProperty({}, '&.pe-spinner--' + size, {
                    ' .pe-spinner-indeterminate__circle': {
                        'border-width': config['border_width_' + size] + 'px'
                    }
                });
            }),

            ' .pe-spinner-indeterminate__circle-clipper--left .pe-spinner-indeterminate__circle': [mixin.vendorize({
                'transform': 'rotate(129deg)'
            }, appConfig.prefixes_transform), mixin.vendorize({
                'animation': 'indeterminateLeftSpin ' + config.arc_time + 's ' + CURVE_INFINITE
            }, appConfig.prefixes_animation), {
                'border-right-color': 'transparent !important'
            }],

            ' .pe-spinner-indeterminate__circle-clipper--right .pe-spinner-indeterminate__circle': [mixin.vendorize({
                'transform': 'rotate(-129deg)'
            }, appConfig.prefixes_transform), mixin.vendorize({
                'animation': 'indeterminateRightSpin ' + config.arc_time + 's ' + CURVE_INFINITE
            }, appConfig.prefixes_animation), {
                left: '-100%',
                'border-left-color': 'transparent !important'
            }],

            /**
            * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
            *
            * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
            * guarantee that the animation will start _exactly_ after that value. So we avoid using
            * animation-delay and instead set custom keyframes for each color (as redundant as it
            * seems).
            *
            * We write out each animation in full (instead of separating animation-name,
            * animation-duration, etc.) because under the polyfill, Safari does not recognize those
            * specific properties properly, treats them as -webkit-animation, and overrides the
            * other animation rules. See https://github.com/Polymer/platform/issues/53.
            */
            ' .pe-spinner-indeterminate__layer': [mixin.vendorize({
                'animation': 'indeterminateFillUnfillRotate ' + 4 * config.arc_time + 's ' + CURVE_INFINITE
            }, appConfig.prefixes_animation), [1, 2, 3, 4].map(function (num) {
                return layerAnimation(config, num);
            }), {
                position: 'absolute',
                width: '100%',
                height: '100%',
                'white-space': 'nowrap'
            }],

            '@keyframes indeterminateSpinnerRotate': kfRotate(),
            '@keyframes indeterminateRightSpin': kfRightSpin(),
            '@keyframes indeterminateLeftSpin': kfLeftSpin(),
            '@keyframes indeterminateFadeOut': kfFadeOut(),
            '@keyframes indeterminateFillUnfillRotate': kfFillUnfillRotate(config),
            '@keyframes indeterminateLayer1FadeInOut': kfLayer1FadeInOut(),
            '@keyframes indeterminateLayer2FadeInOut': kfLayer2FadeInOut(),
            '@keyframes indeterminateLayer3FadeInOut': kfLayer3FadeInOut(),
            '@keyframes indeterminateLayer4FadeInOut': kfLayer4FadeInOut()
        }
    }];
};

var kfRotate = function kfRotate() {
    return {
        ' to': {
            transform: 'rotate(360deg)'
        }
    };
};

var kfLeftSpin = function kfLeftSpin() {
    return kfSpin(1);
};
var kfRightSpin = function kfRightSpin() {
    return kfSpin(-1);
};

var kfSpin = function kfSpin(direction) {
    return {
        ' from': {
            'transform': 'rotate(' + direction * 130 + 'deg)'
        },
        ' 50%': {
            'transform': 'rotate(' + direction * -5 + 'deg)'
        },
        ' to': {
            'transform': 'rotate(' + direction * 130 + 'deg)'
        }
    };
};

var kfFadeOut = function kfFadeOut() {
    return {
        ' from': {
            opacity: OPACITY_MAX
        },
        ' to': {
            opacity: OPACITY_MIN
        }
    };
};

var kfFillUnfillRotate = function kfFillUnfillRotate(config) {
    return {
        ' 12.5%': {
            transform: 'rotate(' + 0.5 * config.arc_size + 'deg)'
        },
        ' 25%': {
            transform: 'rotate(' + 1.0 * config.arc_size + 'deg)'
        },
        ' 37.5%': {
            transform: 'rotate(' + 1.5 * config.arc_size + 'deg)'
        },
        ' 50%': {
            transform: 'rotate(' + 2.0 * config.arc_size + 'deg)'
        },
        ' 62.5%': {
            transform: 'rotate(' + 2.5 * config.arc_size + 'deg)'
        },
        ' 75%': {
            transform: 'rotate(' + 3.0 * config.arc_size + 'deg)'
        },
        ' 87.5%': {
            transform: 'rotate(' + 3.5 * config.arc_size + 'deg)'
        },
        ' to': {
            transform: 'rotate(' + 4.0 * config.arc_size + 'deg)'
        }
    };
};

/**
* HACK: Even though the intention is to have the current .pe-spinner-indeterminate__layer at
* `opacity: 1`, we set it to `opacity: 0.99` instead since this forces Chrome
* to do proper subpixel rendering for the elements being animated. This is
* especially visible in Chrome 39 on Ubuntu 14.04. See:
*
* - https://github.com/Polymer/paper-spinner/issues/9
* - https://code.google.com/p/chromium/issues/detail?id=436255
*/

var kfLayer1FadeInOut = function kfLayer1FadeInOut() {
    return {
        ' from': {
            opacity: OPACITY_MAX
        },
        ' 25%': {
            opacity: OPACITY_MAX
        },
        ' 26%': {
            opacity: OPACITY_MIN
        },
        ' 89%': {
            opacity: OPACITY_MIN
        },
        ' 90%': {
            opacity: OPACITY_MAX
        },
        ' 100%': {
            opacity: OPACITY_MAX
        }
    };
};

var kfLayer2FadeInOut = function kfLayer2FadeInOut() {
    return {
        ' from': {
            opacity: OPACITY_MIN
        },
        ' 15%': {
            opacity: OPACITY_MIN
        },
        ' 25%': {
            opacity: OPACITY_MAX
        },
        ' 50%': {
            opacity: OPACITY_MAX
        },
        ' 51%': {
            opacity: OPACITY_MIN
        }
    };
};

var kfLayer3FadeInOut = function kfLayer3FadeInOut() {
    return {
        ' from': {
            opacity: OPACITY_MIN
        },
        ' 40%': {
            opacity: OPACITY_MIN
        },
        ' 50%': {
            opacity: OPACITY_MAX
        },
        ' 75%': {
            opacity: OPACITY_MAX
        },
        ' 76%': {
            opacity: OPACITY_MIN
        }
    };
};

var kfLayer4FadeInOut = function kfLayer4FadeInOut() {
    return {
        ' from': {
            opacity: OPACITY_MIN
        },
        ' 65%': {
            opacity: OPACITY_MIN
        },
        ' 75%': {
            opacity: OPACITY_MAX
        },
        ' 90%': {
            opacity: OPACITY_MAX
        },
        ' 100%': {
            opacity: OPACITY_MIN
        }
    };
};

var layerAnimation = function layerAnimation(config, num) {
    return _defineProperty({}, '&.pe-spinner-indeterminate__layer--' + num, [mixin.vendorize({
        'animation': 'indeterminateFillUnfillRotate ' + 4 * config.arc_time + 's ' + CURVE_INFINITE + ',  indeterminateLayer' + num + 'FadeInOut ' + 4 * config.arc_time + 's ' + CURVE_INFINITE
    }, appConfig.prefixes_animation)]);
};

export default (function (config) {
    return mixin.createStyles(config, createStyles);
});