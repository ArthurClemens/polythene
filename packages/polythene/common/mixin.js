var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Mixins for j2c

import common from '../config/config';
import './object.assign';

// Creates j2c vendor key string from vendor list
// mixin.vendorize({'user-select': 'none'}, common.prefixes_user_select)
var vendorize = function vendorize(what, prefixes) {
    var vendorsSel = prefixes.map(function (v) {
        return '_' + v + '$';
    }).join('');
    return _defineProperty({}, vendorsSel, what);
};

// Centers an item absolutely within relative parent
// mixin.fit()
var fit = function fit() {
    var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    var offsetPx = offset + 'px';
    return {
        position: 'absolute',
        top: offsetPx,
        right: offsetPx,
        bottom: offsetPx,
        left: offsetPx
    };
};

// Optional font smoothing
// mixin.fontSmoothing()
var fontSmoothing = function fontSmoothing() {
    var smoothing = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

    if (smoothing) {
        return {
            '-webkit-font-smoothing': 'antialiased',
            '-moz-osx-font-smoothing': 'grayscale'
        };
    } else {
        return {
            '-webkit-font-smoothing': 'subpixel-antialiased',
            '-moz-osx-font-smoothing': 'auto'
        };
    }
};

// Breaks off a line with ...
// unless lines is 'none'
// mixin.ellipsis(1, 16) // max 1 line, 16px high
// mixin.ellipsis(2, 1.3, 'em') // max 2 lines, 2.6em high
var ellipsis = function ellipsis(lines, lineHeight) {
    var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'px';

    if (lines === 'none') {
        return {
            'text-overflow': 'initial',
            overflow: 'initial',
            display: 'block',
            height: 'auto'
        };
    }
    return _extends({}, {
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        'text-rendering': 'auto' // Samsung Android
    }, lines !== undefined ? {
        '-webkit-line-clamp': lines,
        '-webkit-box-orient': 'vertical',
        display: '-webkit-box'
    } : null, lineHeight !== undefined ? {
        'max-height': lines * lineHeight + unit
    } : null);
};

// Clears float
// mixin.clearfix()
var clearfix = function clearfix() {
    return {
        '&:after': {
            content: '""',
            display: 'table',
            clear: 'both'
        }
    };
};

// Creates a very thin line
// disabled, does not work in Chrome
// mixin.hairline()
var hairline = function hairline() {
    return {};
};

// const hairline = (which) => ({
//     [`${which}-width`]: '1px',
//
//     ' html.pe-hairlines &': {
//         [`${which}-width`]: '0.5px'
//     }
// });

// Test if browser handles 0.5px borders
// and add class pe-hairlines if so
// if (window.devicePixelRatio && devicePixelRatio >= 2) {
//     const el = document.createElement('div');
//     el.style.border = '.5px solid transparent';
//     document.body.appendChild(el);
//     if (el.offsetHeight === 1) {
//         document.querySelector('html').classList.add('pe-hairlines');
//     }
//     document.body.removeChild(el);
// }

// Creates sticky headers in a scrollable list
// Does not work in Chrome: http://caniuse.com/#feat=css-sticky
// mixin.sticky()
var sticky = function sticky() {
    var zIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return [{ position: '-webkit-sticky' }, { position: '-moz-sticky' }, { position: '-o-sticky' }, { position: '-ms-sticky' }, { position: 'sticky' }, {
        top: 0,
        'z-index': zIndex
    }];
};

// Polythene utility function to generate style objects with scopes
// Used in theme files
var createStyles = function createStyles(common, fn) {
    if (Array.isArray(common)) {
        return common.map(function (o) {
            for (var scope in o) {
                return _defineProperty({}, scope, fn(o[scope]));
            }
        });
    } else {
        return fn(common);
    }
};

// Creats a transition with presets
// mixin.defaultTransition('opacity', config.animation_duration)
var defaultTransition = function defaultTransition() {
    var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : common.animation_duration;
    var curve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : common.animation_curve_default;

    return [vendorize({
        'transition-delay': 0
    }, common.prefixes_transition), vendorize({
        'transition-duration': duration
    }, common.prefixes_transition), vendorize({
        'transition-timing-function': curve
    }, common.prefixes_transition), vendorize({
        'transition-property': properties
    }, common.prefixes_transition)];
};

// Scales an item dynamically between 2 screen sizes
// mixin.fluidScale('font-size', 'px', 50, 100);
// => 50px at 320 and below; scaling between sizes 50px and 100px in between the breakpoints; 100px at 1920 and above
var fluidScale = function fluidScale(property, unit, minValue, maxValue) {
    var minBreakpoint = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 320;
    var maxBreakpoint = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1920;
    var orientation = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 'horizontal';
    return fluidScales([property], unit, [[minBreakpoint, minValue], [maxBreakpoint, maxValue]], orientation);
};

// Scales an item dynamically between multiple screen sizes
// mixin.fluidScales(['padding-left', 'padding-right'], 'px', [[375, 40], [320, 35], [480, 55]])
// => 35px padding-left and padding-right at 320 and below; scaling between sizes 35px and 40px in between the breakpoints 320 and 375; scaling between sizes 40px and 55px in between the breakpoints 375 and 480; 55px at 480 and above
var fluidScales = function fluidScales(property, unit, sizes, orientation) {
    var sorted = sizes.sort();
    var minBreakpoints = sorted.map(function (data) {
        return data[0];
    });
    var maxBreakpoints = sorted.map(function (data) {
        return data[0];
    });
    maxBreakpoints.shift();
    maxBreakpoints.push(minBreakpoints[minBreakpoints.length - 1]);
    var minValues = sorted.map(function (data) {
        return data[1];
    });
    var maxValues = sorted.map(function (data) {
        return data[1];
    });
    maxValues.shift();
    maxValues.push(minValues[minValues.length - 1]);
    return sorted.map(function (data, index) {
        return fluidRule(property, unit, orientation, minBreakpoints[index], maxBreakpoints[index], minValues[index], maxValues[index], index === 0, index === sorted.length - 1);
    });
};

var fluidRule = function fluidRule(property, unit) {
    var orientation = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'horizontal';
    var minBreakpoint = arguments[3];
    var maxBreakpoint = arguments[4];
    var minValue = arguments[5];
    var maxValue = arguments[6];
    var isFirst = arguments[7];
    var isLast = arguments[8];

    var orientationUnit = orientation === 'vertical' ? 'vh' : 'vw';
    var orientationRule = orientation === 'vertical' ? 'height' : 'width';
    var rule = isLast ? ['@media (min-' + orientationRule + ': ' + minBreakpoint + 'px)'] : ['@media (min-' + orientationRule + ': ' + minBreakpoint + 'px) and (max-' + orientationRule + ': ' + maxBreakpoint + 'px)'];
    var multiplier = '((' + maxValue + ' - ' + minValue + ') / (' + maxBreakpoint + ' - ' + minBreakpoint + ') * 100' + orientationUnit + ')';
    var adder = '(((' + minValue + ' * ' + maxBreakpoint + ') - (' + maxValue + ' * ' + minBreakpoint + ')) / (' + maxBreakpoint + ' - ' + minBreakpoint + ')) * 1' + unit;
    var formula = 'calc(' + multiplier + ' + ' + adder + ')';
    var properties = Array.isArray(property) ? property : [property];
    return [isFirst ? properties.map(function (p) {
        return _defineProperty({}, p, '' + minValue + unit);
    }) : null, _defineProperty({}, rule, properties.map(function (p) {
        return _defineProperty({}, p, isLast ? '' + maxValue + unit : formula);
    }))];
};

export default {
    clearfix: clearfix,
    createStyles: createStyles,
    defaultTransition: defaultTransition,
    ellipsis: ellipsis,
    fit: fit,
    fontSmoothing: fontSmoothing,
    fluidScale: fluidScale,
    fluidScales: fluidScales,
    hairline: hairline,
    sticky: sticky,
    vendorize: vendorize
};