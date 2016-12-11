'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _config = require('../config/config.js');

var _config2 = _interopRequireDefault(_config);

require('./object.assign.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Creates j2c vendor key string from vendor list
// mixin.vendorize({'user-select': 'none'}, common.prefixes_user_select)
// Mixins for j2c

var vendorize = function vendorize(what, prefixes) {
    var vendorsSel = prefixes.map(function (v) {
        return '_' + v + '$';
    }).join('');
    return (0, _defineProperty3.default)({}, vendorsSel, what);
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
    return (0, _assign2.default)({}, {
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
                return (0, _defineProperty3.default)({}, scope, fn(o[scope]));
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
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config2.default.animation_duration;
    var curve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config2.default.animation_curve_default;

    return [vendorize({
        'transition-delay': 0
    }, _config2.default.prefixes_transition), vendorize({
        'transition-duration': duration
    }, _config2.default.prefixes_transition), vendorize({
        'transition-timing-function': curve
    }, _config2.default.prefixes_transition), vendorize({
        'transition-property': properties
    }, _config2.default.prefixes_transition)];
};

exports.default = {
    clearfix: clearfix,
    createStyles: createStyles,
    defaultTransition: defaultTransition,
    ellipsis: ellipsis,
    fit: fit,
    fontSmoothing: fontSmoothing,
    hairline: hairline,
    sticky: sticky,
    vendorize: vendorize
};
module.exports = exports['default'];
//# sourceMappingURL=mixin.js.map