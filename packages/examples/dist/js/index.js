/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = m;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return component$3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return component$8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAB", function() { return component$13; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderPanel", function() { return component$15; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return component$5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return component$11; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return component$18; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTile", function() { return component$7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return component$20; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return notification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return component$23; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return component$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return component$25; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shadow", function() { return component$2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return component$28; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snackbar", function() { return snackbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOSSpinner", function() { return component$30; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeterminateSpinner", function() { return component$33; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndeterminateSpinner", function() { return component$35; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return component$6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return component$37; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return component$39; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return component$27; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Theme", function() { return index; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return component$17; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return common$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom", function() { return custom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styler", function() { return styler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationHelper", function() { return validationHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_j2c__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_j2c___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_j2c__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_theme__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__);




/*
Polyfill
*/
if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function value(target) {
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert first argument to object');
            }

            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }
                nextSource = Object(nextSource);

                var keysArray = Object.keys(nextSource);
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
    });
}

var isTouch = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

document.querySelector('html').classList.add(isTouch ? 'pe-touch' : 'pe-no-touch');

var p = {
    isTouch: isTouch
};

var whichTransitionEvent = (function () {
    var el = document.createElement('fakeelement');
    var animations = {
        'animation': 'animationend',
        'OAnimation': 'oAnimationEnd',
        'MozAnimation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd'
    };
    for (var a in animations) {
        if (el.style[a] !== undefined) {
            return animations[a];
        }
    }
});

var remove = function remove(id) {
    if (id) {
        var old = document.getElementById(id);
        if (old) {
            old.parentNode.removeChild(old);
        }
    }
};

/*
* id: identifier, used as HTMLElement id for the attached <style></style> element
* styles: list of lists style Objects
*/
var add = function add(id) {
    for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        styles[_key - 1] = arguments[_key];
    }

    addToDocument.apply(undefined, [{ id: id }].concat(styles));
};

/*
* opts: options object
  * id: identifier, used as HTMLElement id for the attached <style></style> element
  * document: document reference; default window.document
* styles: list of lists style Objects
*/
var addToDocument = function addToDocument(opts) {
    for (var _len2 = arguments.length, styles = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        styles[_key2 - 1] = arguments[_key2];
    }

    var id = opts.id;
    var documentRef = opts.document || window.document;
    remove(id);
    var styleEl = documentRef.createElement('style');
    if (id) {
        styleEl.setAttribute('id', id);
    }
    styles.forEach(function (styleList) {
        // each style returns a list
        if (Object.keys(styleList).length) {
            styleList.forEach(function (style) {
                var scoped = { '@global': style };
                var sheet = __WEBPACK_IMPORTED_MODULE_1_j2c___default.a.sheet(scoped);
                styleEl.appendChild(documentRef.createTextNode(sheet));
            });
        }
    });
    documentRef.head.appendChild(styleEl);
};

var styler = {
    add: add,
    addToDocument: addToDocument,
    remove: remove
};

var componentConfig = {
    start_scale: 0.1,
    end_scale: 2,
    start_opacity: 0.2,
    end_opacity: 0
};

// Global theme variables
// How to change these variables for your app - see the README.

var hex = function hex(_hex) {
    var bigint = parseInt(_hex.substring(1), 16);
    var r = bigint >> 16 & 255;
    var g = bigint >> 8 & 255;
    var b = bigint & 255;
    return r + ',' + g + ',' + b;
};

var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return 'rgba(' + colorStr + ',' + opacity + ')';
};

var isInteger = function isInteger(nVal) {
    return typeof nVal === 'number' && isFinite(nVal) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor(nVal) === nVal;
};

//const isTablet = window.innerWidth >= 600;
var isDesktop = window.innerWidth >= 1024;

var grid_unit = 4;
var grid_unit_component = 8;

var animation_curve_slow_in_fast_out = 'cubic-bezier(.4, 0, .2, 1)';
var animation_curve_slow_in_linear_out = 'cubic-bezier(0, 0, .2, 1)';
var animation_curve_linear_in_fast_out = 'cubic-bezier(.4, 0, 1, 1)';

var common$1 = {
    // util functions
    rgba: rgba,
    hex: hex,
    isInteger: isInteger,

    grid_unit: grid_unit,
    grid_unit_component: grid_unit_component,
    grid_unit_menu: 56,
    grid_unit_icon_button: 6 * grid_unit_component, // 48

    // common sizes
    unit_block_border_radius: 2,
    unit_item_border_radius: 2,
    unit_indent: 72,
    unit_side_padding: isDesktop ? 24 : 16,

    // buttons
    unit_touch_height: 48,
    unit_icon_size_small: 2 * grid_unit_component, // 16
    unit_icon_size: 3 * grid_unit_component, // 24
    unit_icon_size_medium: 4 * grid_unit_component, // 32
    unit_icon_size_large: 5 * grid_unit_component, // 40

    // screen dimensions
    unit_screen_size_extra_large: 1280,
    unit_screen_size_large: 960,
    unit_screen_size_medium: 480,
    unit_screen_size_small: 320,

    // transitions
    animation_duration: '.18s',
    animation_curve_slow_in_fast_out: animation_curve_slow_in_fast_out,
    animation_curve_slow_in_linear_out: animation_curve_slow_in_linear_out,
    animation_curve_linear_in_fast_out: animation_curve_linear_in_fast_out,
    animation_curve_default: 'ease-out',

    // font
    font_weight_light: 300,
    font_weight_normal: 400,
    font_weight_medium: 500,
    font_weight_bold: 700,
    font_size_title: 20,
    line_height: 1.3,

    // base colors
    color_primary: '33, 150, 243', // blue 500
    color_primary_active: '30, 136, 229', // blue 600
    color_primary_dark: '25, 118, 210', // blue 700
    color_primary_faded: '100, 181, 249', // blue 300
    color_primary_foreground: '255, 255, 255',

    color_light_background: '255, 255, 255',
    color_light_foreground: '0, 0, 0',
    color_dark_background: '34, 34, 34',
    color_dark_foreground: '255, 255, 255',

    // blends
    blend_light_text_primary: .87,
    blend_light_text_regular: .73,
    blend_light_text_secondary: .54,
    blend_light_text_tertiary: .40,
    blend_light_text_disabled: .26,
    blend_light_border_light: .11,
    blend_light_background_active: .14,
    blend_light_background_hover: .06,
    blend_light_background_hover_medium: .12, // for the lighter tinted icon buttons
    blend_light_background_disabled: .09,
    blend_light_overlay_background: .3,

    blend_dark_text_primary: 1,
    blend_dark_text_regular: .87,
    blend_dark_text_secondary: .70,
    blend_dark_text_tertiary: .40,
    blend_dark_text_disabled: .26,
    blend_dark_border_light: .10,
    blend_dark_background_active: .14,
    blend_dark_background_hover: .08,
    blend_dark_background_hoverMedium: .12, // for the lighter tinted icon buttons
    blend_dark_background_disabled: .12,
    blend_dark_overlay_background: .3,

    // css vendor prefixes
    prefixes_animation: ['o', 'moz', 'webkit'],
    prefixes_appearance: ['o', 'moz', 'ms', 'webkit'],
    prefixes_background_size: ['o', 'moz', 'webkit'],
    prefixes_box_shadow: ['moz', 'webkit'],
    prefixes_keyframes: ['o', 'moz', 'webkit'],
    prefixes_transform: ['o', 'moz', 'ms', 'webkit'],
    prefixes_transition: ['o', 'moz', 'webkit'],
    prefixes_user_select: ['moz', 'ms', 'webkit'],

    // breakpoints
    breakpoint_small_handset_portrait: 0,
    breakpoint_medium_handset_portrait: 360,
    breakpoint_large_handset_portrait: 400,
    breakpoint_small_tablet_portrait: 600,
    breakpoint_large_tablet_portrait: 720,
    // landscape
    breakpoint_small_handset_landscape: 480,
    breakpoint_medium_handset_landscape: 600,
    breakpoint_large_handset_landscape: 720,

    // environment
    env_tablet: window.innerWidth >= 600,
    env_desktop: window.innerWidth >= 1024,

    // z-index
    z_menu: 1000,
    z_header_container: 2000,
    z_fixed_header_container: 3000,
    z_notification: 4000,
    z_dialog: 5000
};

// Conduit for global theme variables
// In your app paths setup, change the current path to your custom config file; see the theme README.



// Example customization in custom config file:
//
// import 'polythene/common/object.assign';
// import config from 'polythene/config/default';
//
// export default Object.assign({}, config, {
//     // this site's base colors
//     color_primary: '255, 152, 0', // orange 500
//     color_primary_active: '251, 140, 0', // orange 600
//     color_primary_dark: '245, 124, 0', // orange 700
//     color_primary_faded: '255, 183, 77', // orange 300
//     color_primary_foreground: '255, 255, 255'
// });

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Mixins for j2c

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
    return _extends$1({}, {
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
var createStyles$1 = function createStyles(common, fn) {
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
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : common$1.animation_duration;
    var curve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : common$1.animation_curve_default;

    return [vendorize({
        'transition-delay': 0
    }, common$1.prefixes_transition), vendorize({
        'transition-duration': duration
    }, common$1.prefixes_transition), vendorize({
        'transition-timing-function': curve
    }, common$1.prefixes_transition), vendorize({
        'transition-property': properties
    }, common$1.prefixes_transition)];
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

var mixin = {
    clearfix: clearfix,
    createStyles: createStyles$1,
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

var kfRipple = function kfRipple(config$$1) {
    return {
        ' 100%': {
            transform: 'scale(' + config$$1.end_scale + ')',
            'opacity': config$$1.end_opacity
        }
    };
};

var createStyles = function createStyles(config$$1) {
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
            }, common$1.prefixes_transform)],

            ' .pe-ripple__waves': [mixin.vendorize({
                'transform': 'scale(' + config$$1.start_scale + ')'
            }, common$1.prefixes_transform), mixin.vendorize({
                'animation': 'ripple ' + common$1.animation_curve_default
            }, common$1.prefixes_animation),
            // default durations; finally set in js
            mixin.vendorize({
                'animation-duration': common$1.animation_duration
            }, common$1.prefixes_animation), {
                outline: '1px solid transparent', // for IE10
                position: 'absolute',
                'border-radius': '50%',
                opacity: config$$1.start_opacity,
                'pointer-events': 'none',
                display: 'none'
            }],
            ' .pe-ripple__waves--animated': {
                display: 'block'
            }
        }],

        '@keyframes ripple': kfRipple(config$$1)
    }];
};

var layout = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles);
});

// Does not contain color styles

var themeConfigFn = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].ripple;
var config$1 = themeConfigFn ? themeConfigFn(componentConfig) : componentConfig;
var id = 'pe-ripple';

styler.add(id, layout(config$1));

var transitionEvent = whichTransitionEvent();
var DEFAULT_START_OPACITY = 0.2;
var OPACITY_DECAY_VELOCITY = 0.35;

var CSS_CLASSES$1 = {
    ripple: 'pe-ripple',
    waves: 'pe-ripple__waves',
    mask: 'pe-ripple__mask',
    constrained: 'pe-ripple--constrained',
    animated: 'pe-ripple__waves--animated'
};

var makeRipple = function makeRipple(e, ctrl) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var el = ctrl.ripple();
    var wavesEl = ctrl.waves();
    var w = el.offsetWidth;
    var h = el.offsetHeight;
    var waveRadius = Math.sqrt(w * w + h * h);
    var rect = el.getBoundingClientRect();
    var x = p.isTouch && e.touches ? e.touches[0].pageX : e.clientX;
    var y = p.isTouch && e.touches ? e.touches[0].pageY : e.clientY;
    var mx = opts.center ? rect.left + rect.width / 2 : x;
    var my = opts.center ? rect.top + rect.height / 2 : y;
    var rx = mx - rect.left - waveRadius / 2;
    var ry = my - rect.top - waveRadius / 2;
    var initialOpacity = opts.initialOpacity !== undefined ? opts.initialOpacity : DEFAULT_START_OPACITY;
    var opacityDecayVelocity = opts.opacityDecayVelocity !== undefined ? opts.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
    var duration = 1 / opacityDecayVelocity * initialOpacity;
    var color = window.getComputedStyle(el).color;
    var onEnd = function onEnd(evt) {
        wavesEl.classList.remove(CSS_CLASSES$1.animated);
        wavesEl.removeEventListener(transitionEvent, onEnd, false);
        if (opts.end) {
            opts.end(evt);
        }
    };

    wavesEl.classList.remove(CSS_CLASSES$1.animated);
    var style = wavesEl.style;
    style.width = style.height = waveRadius + 'px';
    style.top = ry + 'px';
    style.left = rx + 'px';
    style['animation-duration'] = style['-webkit-animation-duration'] = style['-moz-animation-duration'] = style['-o-animation-duration'] = duration + 's';
    style.backgroundColor = color;
    style.opacity = initialOpacity;
    wavesEl.addEventListener(transitionEvent, onEnd, false);

    if (opts.start) {
        opts.start(e);
    }
    wavesEl.classList.add(CSS_CLASSES$1.animated);
};

var createView$1 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (opts.disabled) {
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()('');
    }
    var initRipple = function initRipple(el, inited, context) {
        if (inited) {
            return;
        }
        ctrl.ripple(el);
        var parent = el.parentElement;
        if (!opts.inactive) {
            var onClick = function onClick(e) {
                makeRipple(e, ctrl, opts);
            };
            var endType = p.isTouch ? 'click' : 'mouseup';
            parent.addEventListener(endType, onClick, false);
            context.onunload = function () {
                parent.removeEventListener(endType, onClick, false);
            };
        }
    };
    var initWaves = function initWaves(waves, inited) {
        if (inited) {
            return;
        }
        ctrl.waves(waves);
    };
    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES$1.ripple, opts.constrained !== false ? CSS_CLASSES$1.constrained : null, opts.class].join(' '),
        id: opts.id || '',
        config: initRipple
    };
    var content = __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$1.mask
    }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$1.waves,
        config: initWaves
    }));
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, content);
};

var component$1 = {
    controller: function controller() {
        return {
            ripple: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.prop(),
            waves: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.prop(),
            delegate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.prop()
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$1(ctrl, opts);
    }
};

var componentConfig$1 = {
    transition: 'box-shadow 0.18s ease-out',

    'shadow-top-z-1': 'none',
    'shadow-bottom-z-1': '0 1px 4px 0 rgba(0, 0, 0, 0.37)',

    'shadow-top-z-2': '0 2px 2px 0 rgba(0, 0, 0, 0.2)',
    'shadow-bottom-z-2': '0 6px 10px 0 rgba(0, 0, 0, 0.3)',

    'shadow-top-z-3': '0 11px 7px 0 rgba(0, 0, 0, 0.19)',
    'shadow-bottom-z-3': '0 13px 25px 0 rgba(0, 0, 0, 0.3)',

    'shadow-top-z-4': '0 14px 12px 0 rgba(0, 0, 0, 0.17)',
    'shadow-bottom-z-4': '0 20px 40px 0 rgba(0, 0, 0, 0.3)',

    'shadow-top-z-5': '0 17px 17px 0 rgba(0, 0, 0, 0.15)',
    'shadow-bottom-z-5': '0 27px 55px 0 rgba(0, 0, 0, 0.3)',

    'shadow-down-z-1': 'inset 0px 1px 2px -1px rgba(0, 0, 0, 0.15)',
    'shadow-down-z-2': 'inset 0px 4px 6px -3px rgba(0, 0, 0, 0.25)'
};

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var shadowDirective = function shadowDirective(dir) {
    return mixin.vendorize({
        'box-shadow': dir
    }, common$1.prefixes_box_shadow);
};

var createStyles$2 = function createStyles(config$$1) {
    return [{
        '.pe-shadow': [mixin.fit(), {
            'border-radius': 'inherit',
            'pointer-events': 'none',

            ' .pe-shadow__bottom, .pe-shadow__top': [mixin.fit(), {
                'border-radius': 'inherit'
            }],

            '&.pe-shadow--animated': {
                ' .pe-shadow__bottom, .pe-shadow__top': mixin.vendorize({
                    'transition': config$$1.transition
                }, common$1.prefixes_transition)
            }
        }, [1, 2, 3, 4, 5].map(function (index) {
            var _ref;

            return _ref = {}, _defineProperty$1(_ref, ' .pe-shadow__top.pe-shadow--z-' + index, shadowDirective(config$$1['shadow-top-z-' + index])), _defineProperty$1(_ref, ' .pe-shadow__bottom.pe-shadow--z-' + index, shadowDirective(config$$1['shadow-bottom-z-' + index])), _ref;
        })]
    }];
};

var layout$1 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$2);
});

// Does not contain color styles

var themeConfigFn$1 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].shadow;
var config$2 = themeConfigFn$1 ? themeConfigFn$1(componentConfig$1) : componentConfig$1;
var id$1 = 'pe-shadow';

styler.add(id$1, layout$1(config$2));

var CSS_CLASSES$2 = {
    block: 'pe-shadow',
    topShadow: 'pe-shadow__top',
    bottomShadow: 'pe-shadow__bottom',
    animated: 'pe-shadow--animated',
    depth_n: 'pe-shadow--z-'
};

var classForDepth = function classForDepth() {
    var z = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return CSS_CLASSES$2.depth_n + Math.min(5, z);
};

var createView$2 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var depthClass = classForDepth(opts.z);
    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES$2.block, opts.animated ? CSS_CLASSES$2.animated : '', opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var content = [opts.content ? opts.content : null, __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: [CSS_CLASSES$2.bottomShadow, depthClass].join(' ')
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: [CSS_CLASSES$2.topShadow, depthClass].join(' ')
    })];
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, content);
};

var component$2 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$2(ctrl, opts);
    }
};

var style = [{
    '.pe-button': [mixin.vendorize({
        'user-select': 'none'
    }, common$1.prefixes_user_select), {
        outline: 'none',
        padding: 0,
        'text-decoration': 'none',
        'text-align': 'center',
        cursor: 'pointer',

        '&.pe-button--selected, &.pe-button--disabled, &.pe-button--inactive': {
            cursor: 'default',
            'pointer-events': 'none'
        },

        ' .pe-button__content': {
            position: 'relative',
            'border-radius': 'inherit'
        },

        ' .pe-button__label': [mixin.fontSmoothing(), {
            position: 'relative',
            'z-index': 1, // stick above wash that has position absolute
            display: 'block',
            'border-radius': 'inherit',
            'pointer-events': 'none'
        }],

        ' .pe-button__wash, .pe-button__focus': [mixin.defaultTransition('background-color'), mixin.fit(), {
            'border-radius': 'inherit',
            'pointer-events': 'none'
        }],

        ' .pe-button__focus': {
            opacity: 0
        },

        '&.pe-button--focus': {
            ' .pe-button__focus': {
                opacity: 1
            }
        },

        ' .pe-button__wash': {
            'z-index': 1
        }
    }]
}];

var id$2 = 'pe-base-button';

styler.add(id$2, style);

var rgba$1 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].rgba;

var touch_height = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].unit_touch_height;
var height = 36;

var buttonConfig = {
    margin_h: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].grid_unit,
    border_radius: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].unit_item_border_radius,
    font_size: 14,
    font_weight: 500,
    outer_padding_v: (touch_height - height) / 2,
    padding_h: 2 * __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].grid_unit,
    padding_v: 11,
    min_width: 8 * __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].grid_unit_component,
    text_transform: 'uppercase',
    border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border

    color_light_flat_normal_background: 'transparent',
    color_light_flat_normal_text: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_light_text_primary),
    color_light_flat_hover_background: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_light_background_hover),
    color_light_flat_focus_background: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_light_background_hover),
    color_light_flat_active_background: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_light_background_active),
    color_light_flat_disabled_background: 'transparent',
    color_light_flat_disabled_text: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_light_text_disabled),

    // border colors  may be set in theme; disabled by default
    // color_light_flat_normal_border: 'transparent',
    // color_light_flat_hover_border: 'transparent',
    // color_light_flat_active_border: 'transparent',
    // color_light_flat_disabled_border: 'transparent',

    color_light_raised_normal_background: '#E0E0E0',
    color_light_raised_normal_text: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_light_text_primary),
    color_light_raised_hover_background: 'transparent',
    color_light_raised_focus_background: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_light_background_hover),
    color_light_raised_active_background: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_light_background_hover), // same as hover
    color_light_raised_disabled_background: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_light_background_disabled),
    color_light_raised_disabled_text: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_light_text_disabled),

    color_dark_flat_normal_background: 'transparent',
    color_dark_flat_normal_text: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_dark_text_primary),
    color_dark_flat_hover_background: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_dark_background_hover),
    color_dark_flat_focus_background: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_dark_background_hover),
    color_dark_flat_active_background: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_dark_background_active),
    color_dark_flat_disabled_background: 'transparent',
    color_dark_flat_disabled_text: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_dark_text_disabled),

    // border colors  may be set in theme; disabled by default
    // color_dark_flat_normal_border: 'transparent',
    // color_dark_flat_hover_border: 'transparent',
    // color_dark_flat_active_border: 'transparent',
    // color_dark_flat_disabled_border: 'transparent',

    color_dark_raised_normal_background: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_primary),
    color_dark_raised_normal_text: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_dark_text_primary),
    color_dark_raised_hover_background: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_primary_active,
    color_dark_raised_focus_background: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_primary_active,
    color_dark_raised_active_background: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_primary_dark,
    color_dark_raised_disabled_background: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_dark_background_disabled),
    color_dark_raised_disabled_text: rgba$1(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["defaults"].blend_dark_text_disabled)
};

var createStyles$3 = function createStyles(config$$1) {
    return [{
        '.pe-button--text': {
            display: 'inline-block',
            'min-width': config$$1.min_width + 'px',
            margin: '0 ' + config$$1.margin_h + 'px',
            padding: config$$1.outer_padding_v + 'px 0',
            background: 'transparent',
            border: 'none',

            ' .pe-button__content': {
                'border-width': 0,
                padding: '0 ' + config$$1.padding_h + 'px',
                'border-radius': config$$1.border_radius + 'px'
            },

            ' .pe-button__label': {
                padding: config$$1.padding_v + 'px 0',
                'font-size': config$$1.font_size + 'px',
                'line-height': config$$1.font_size + 'px',
                'font-weight': config$$1.font_weight,
                'text-transform': config$$1.text_transform,
                'white-space': 'pre'
            },

            '&.pe-button--borders': {
                ' .pe-button__wash, pe-button__focus, .pe-ripple': mixin.fit(-1),

                ' .pe-button__content': {
                    'border-style': 'solid',
                    'border-width': '1px'
                },
                ' .pe-button__label': {
                    padding: config$$1.padding_v - 1 + 'px 0'
                }
            }
        }
    }];
};

var layout$3 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$3);
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$1 = function style(config$$1, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var normalBorder = config$$1['color_' + tint + '_' + type + '_normal_border'] || 'transparent';
    var activeBorder = config$$1['color_' + tint + '_' + type + '_active_border'] || normalBorder;
    var disabledBorder = config$$1['color_' + tint + '_' + type + '_disabled_border'] || normalBorder;
    return [_defineProperty$2({}, scope + '.pe-button', {
        '&, &:link, &:visited': {
            color: config$$1['color_' + tint + '_' + type + '_normal_text']
        },

        ' .pe-button__content': {
            'background-color': config$$1['color_' + tint + '_' + type + '_normal_background'],
            'border-color': normalBorder
        },

        '&.pe-button--disabled': {
            color: config$$1['color_' + tint + '_' + type + '_disabled_text'],

            ' .pe-button__content': {
                'background-color': config$$1['color_' + tint + '_' + type + '_disabled_background'],
                'border-color': disabledBorder
            }
        },

        '&.pe-button--selected': {
            ' .pe-button__content': {
                'background-color': config$$1['color_' + tint + '_' + type + '_active_background'],
                'border-color': activeBorder
            },
            ' .pe-button__focus': {
                opacity: 1,
                'background-color': config$$1['color_' + tint + '_' + type + '_focus_background']
            }
        },

        '&.pe-button--focus': {
            ' .pe-button__focus': {
                opacity: 1,
                'background-color': config$$1['color_' + tint + '_' + type + '_focus_background']
            }
        }
    })];
};

var noTouch = function noTouch(config$$1, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var normalBorder = config$$1['color_' + tint + '_' + type + '_normal_border'];
    var hoverBorder = config$$1['color_' + tint + '_' + type + '_normal_border'] || normalBorder;
    return [_defineProperty$2({}, scope + '.pe-button:hover', {
        '&:not(.pe-button--selected) .pe-button__wash': {
            'background-color': config$$1['color_' + tint + '_' + type + '_hover_background'],
            'border-color': hoverBorder
        }
    })];
};

var createStyles$4 = function createStyles(config$$1) {
    return [style$1(config$$1, 'light', 'flat'), style$1(config$$1, 'light', 'raised', '.pe-button--raised'), {
        'html.pe-no-touch': [noTouch(config$$1, 'light', 'flat', ' '), noTouch(config$$1, 'light', 'raised', ' .pe-button--raised')]
    }, {
        '.pe-dark-theme': [
        // inside dark theme
        style$1(config$$1, 'dark', 'flat', ' '),
        // has dark theme
        style$1(config$$1, 'dark', 'flat', '&'),
        //
        style$1(config$$1, 'dark', 'raised', ' .pe-button--raised')]
    }, {
        'html.pe-no-touch .pe-dark-theme': [noTouch(config$$1, 'dark', 'flat', ' '), noTouch(config$$1, 'dark', 'flat', '&'), noTouch(config$$1, 'dark', 'raised', ' .pe-button--raised')]
    }];
};

var color = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$4);
});

var themeConfigFn$2 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].button;
var config$3 = themeConfigFn$2 ? themeConfigFn$2(buttonConfig) : buttonConfig;
var id$3 = 'pe-button-text';

styler.add(id$3, layout$3(config$3), color(config$3));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES = {
    block: 'pe-button pe-button--text',
    content: 'pe-button__content',
    label: 'pe-button__label',
    raised: 'pe-button--raised',
    wash: 'pe-button__wash',
    focus: 'pe-button__focus',
    selected: 'pe-button--selected',
    disabled: 'pe-button--disabled',
    borders: 'pe-button--borders',
    inactive: 'pe-button--inactive',
    focusState: 'pe-button--focus'
};

var MAX_Z = 5;

var startType = window.PointerEvent ? 'pointerdown' : 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchstart' : 'mousedown';
var endType = window.PointerEvent ? 'pointerup' : 'ontouchend' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchend' : 'mouseup';

var tapStart = void 0;
var tapEnd = void 0;
var tapEndAll = void 0;
var downButtons = [];

var animateZ = function animateZ(ctrl, opts, name) {
    var baseZ = ctrl.baseZ();
    var increase = opts.increase || 1;
    var z = ctrl.z();
    if (name === 'down' && baseZ !== 5) {
        z = z + increase;
        z = Math.min(z, MAX_Z);
    } else if (name === 'up') {
        z = z - increase;
        z = Math.max(z, baseZ);
    }
    if (z !== ctrl.z()) {
        ctrl.z(z);
        __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw(); // make animation visible
    }
};

var inactivate = function inactivate(ctrl, opts) {
    ctrl.inactive = true;
    __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
    setTimeout(function () {
        ctrl.inactive = false;
        __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
    }, opts.inactivate * 1000);
};

var initTapEvents = function initTapEvents(el, ctrl, opts) {
    var tapHandler = function tapHandler(ctrl, opts, name) {
        if (name === 'down') {
            downButtons.push({ ctrl: ctrl, opts: opts });
        } else if (name === 'up') {
            if (opts.inactivate && !ctrl.inactive) {
                inactivate(ctrl, opts);
            }
        }
        // no z animation on touch
        if (opts.animateOnTap && !p.isTouch) {
            animateZ(ctrl, opts, name);
        }
    };
    tapStart = function tapStart() {
        return tapHandler(ctrl, opts, 'down');
    };
    tapEnd = function tapEnd() {
        return tapHandler(ctrl, opts, 'up');
    };
    tapEndAll = function tapEndAll() {
        downButtons.map(function (btn) {
            tapHandler(btn.ctrl, btn.opts, 'up');
        });
        downButtons = [];
    };
    el.addEventListener(startType, tapStart);
    el.addEventListener(endType, tapEnd);
    window.addEventListener(endType, tapEndAll);
};

var clearTapEvents = function clearTapEvents(el) {
    el.removeEventListener(startType, tapStart);
    el.removeEventListener(endType, tapEnd);
    window.removeEventListener(endType, tapEndAll);
};

var createView = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var noink = opts.ink !== undefined && opts.ink === false;
    var disabled = opts.disabled;
    var tag = opts.tag || 'a';
    ctrl.inactive = opts.inactive !== undefined ? opts.inactive === false ? false : true : ctrl.inactive;
    var tabIndex = disabled || ctrl.inactive ? -1 : opts.tabindex || 0;

    // handle multiple configs:
    // - passed as param in the url Object
    // - passed as opts.config
    // - the default button config
    var buttonConfig = function buttonConfig(el, isInited, context) {
        if (isInited) {
            return;
        }
        ctrl.el = el;
        if (!disabled && !ctrl.inactive) {
            initTapEvents(el, ctrl, _extends({}, opts, { animateOnTap: opts.animateOnTap !== false ? true : false }));
            context.onunload = function () {
                clearTapEvents(el);
            };
        }
    };
    var optsConfig = opts.config || function () {};
    var urlConfig = opts.url && opts.url.config ? opts.url.config : function () {};

    var props = _extends({}, {
        class: [opts.parentClass || CSS_CLASSES.block, opts.selected ? CSS_CLASSES.selected : null, disabled ? CSS_CLASSES.disabled : null, ctrl.inactive ? CSS_CLASSES.inactive : null, opts.borders ? CSS_CLASSES.borders : null, opts.raised ? CSS_CLASSES.raised : null, ctrl.focus ? CSS_CLASSES.focusState : null, opts.class].join(' '),
        id: opts.id || '',
        tabindex: tabIndex,
        // handle focus events
        onfocus: function onfocus() {
            return ctrl.focus = !ctrl.mouseover;
        },
        onblur: function onblur() {
            return ctrl.focus = false;
        },
        // don't show focus on click (detected by not being in mouse over state)
        onmouseover: function onmouseover() {
            return ctrl.mouseover = true;
        },
        onmouseout: function onmouseout() {
            return ctrl.mouseover = false;
        },
        // if focus, dispatch click event on ENTER
        onkeydown: function onkeydown(e) {
            if (e.which === 13 && ctrl.focus && ctrl.el) {
                // ENTER
                var event = new MouseEvent('click', {
                    view: window,
                    bubbles: true,
                    cancelable: true
                });
                ctrl.el.dispatchEvent(event);
            }
        }
    }, opts.url ? opts.url : null, opts.formaction ? { formaction: opts.formaction } : null, opts.type ? { type: opts.type } : null, opts.events ? opts.events : null, {
        config: function config$$1() {
            return [buttonConfig.apply(undefined, arguments), optsConfig.apply(undefined, arguments), urlConfig.apply(undefined, arguments)];
        }
    }, disabled ? {
        disabled: true
    } : null);

    var label = opts.content ? opts.content : opts.label ? _typeof(opts.label) === 'object' ? opts.label : __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES.label }, opts.label) : null;

    var noWash = disabled || opts.wash !== undefined && !opts.wash;
    var wash = !noWash;
    var rippleOpts = _extends({}, opts.ripple, { inactive: noink });
    var content = __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        'class': CSS_CLASSES.content
    }, [opts.raised && !disabled ? __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.component(component$2, {
        z: ctrl.z(),
        animated: true
    }) : null,
    // ripple
    disabled ? null : __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.component(component$1, rippleOpts),
    // hover
    wash ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES.wash }) : null,
    // focus
    disabled ? null : __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES.focus }), label]);
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var component = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var z = opts.z !== undefined ? opts.z : 1;

        return {
            el: undefined,
            baseZ: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.prop(z),
            z: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.prop(z),
            inactive: undefined,
            focus: false,
            mouseover: false
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView(ctrl, opts);
    }
};

// No styles for this component

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$5 = {
    block: 'pe-svg'
};

var createView$5 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = _extends$4({}, {
        class: [CSS_CLASSES$5.block, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.events ? opts.events : null);
    var content = opts.content;
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var component$6 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$5(ctrl, opts);
    }
};

var componentConfig$2 = {
    size_small: common$1.unit_icon_size_small,
    size_regular: common$1.unit_icon_size,
    size_medium: common$1.unit_icon_size_medium,
    size_large: common$1.unit_icon_size_large
};

var iconSizesPx = function iconSizesPx() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : common$1.unit_icon_size;
    return {
        width: size + 'px',
        height: size + 'px'
    };
};

var createStyles$5 = function createStyles(config$$1) {
    return [{
        '.pe-icon': {
            display: 'inline-block',
            'vertical-align': 'middle',
            'background-repeat': 'no-repeat',
            fill: 'currentcolor',
            position: 'relative',
            'font-size': 0,
            'line-height': 0,

            '&.pe-icon--avatar img': {
                border: 'none',
                'border-radius': '50%',
                width: '100%',
                height: '100%'
            },

            ' i': [mixin.fit(), {
                display: 'block',
                'font-size': 'inherit',
                color: 'inherit',
                'line-height': 'inherit',
                height: '100%',

                ' img': {
                    height: '100%'
                },

                ' svg': {
                    width: '100%',
                    height: '100%',
                    fill: 'currentcolor',
                    color: 'inherit',

                    ' path, rect, polygon': {
                        '&:not([fill=none])': {
                            fill: 'currentcolor'
                        }
                    }
                }
            }],

            '&.pe-icon--small': iconSizesPx(config$$1.size_small),
            '&.pe-icon--regular': iconSizesPx(config$$1.size_regular),
            '&.pe-icon--medium': iconSizesPx(config$$1.size_medium),
            '&.pe-icon--large': iconSizesPx(config$$1.size_large)
        }
    }];
};

var layout$4 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$5);
});

// Does not contain color styles

var themeConfigFn$3 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].icon;
var config$4 = themeConfigFn$3 ? themeConfigFn$3(componentConfig$2) : componentConfig$2;
var id$4 = 'pe-icon';

styler.add(id$4, layout$4(config$4));

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$4 = {
    icon: 'pe-icon',
    avatar: 'pe-icon--avatar',
    small: 'pe-icon--small',
    regular: 'pe-icon--regular',
    medium: 'pe-icon--medium',
    large: 'pe-icon--large'
};

var typeClasses = {
    small: CSS_CLASSES$4.small,
    regular: CSS_CLASSES$4.regular,
    medium: CSS_CLASSES$4.medium,
    large: CSS_CLASSES$4.large
};

var classForType = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return typeClasses[mode];
};

var layoutContent = function layoutContent(opts) {
    if (opts.content) {
        return opts.content;
    } else if (opts.svg) {
        var svgOpts = _extends$3({}, opts.svg);
        svgOpts.tag = svgOpts.tag || 'i';
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$6, svgOpts);
    } else if (opts.msvg) {
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()('i.pe-svg', __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(opts.msvg));
    } else {
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()('i', __WEBPACK_IMPORTED_MODULE_0_mithril___default()('img', {
            src: opts.src
        }));
    }
};

var createView$4 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = _extends$3({}, {
        class: [CSS_CLASSES$4.icon, classForType(opts.type), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.events ? opts.events : null);
    var content = layoutContent(opts);
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var component$5 = {
    controller: function controller() {
        __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw.strategy('none');
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$4(ctrl, opts);
    }
};

var rgba$2 = common$1.rgba;

// SPECS
// heights:
// single line: 48
// single line, dense: 40
// single line, with icon: 48
// single line, with icon, dense: 40
// single line, with avatar: 56
// single line, with avatar, dense: 48
// two-line: 72
// two-line, dense: 60
// three-line: 88
// three-line, dense: 76


var single_height = 48;
var padding = 8;
var single_with_icon_height = 56;

var componentConfig$3 = {
    single_height: single_height,
    single_line_height: single_height - 2 * padding - (2 * 5 + 1),
    single_with_icon_height: single_with_icon_height,
    single_with_icon_line_height: single_with_icon_height - 2 * padding - (2 * 5 + 1),
    padding: 13,
    compact_padding: 9,
    subtitle_line_count: 1,
    has_subtitle_padding: 15,
    high_subtitle_line_count: 2,
    has_high_subtitle_padding: 13,
    front_item_width: 72,
    side_padding: 2 * common$1.grid_unit_component,
    font_size_title: 16,
    font_size_subtitle: 14,
    line_height_subtitle: 20,
    font_size_list_header: 14,
    font_size_small: 12,

    color_light_title: rgba$2(common$1.color_light_foreground, common$1.blend_light_text_primary),
    color_light_subtitle: rgba$2(common$1.color_light_foreground, common$1.blend_light_text_secondary),
    color_light_info: rgba$2(common$1.color_light_foreground, common$1.blend_light_text_tertiary),
    color_light_text_disabled: rgba$2(common$1.color_light_foreground, common$1.blend_light_text_disabled),
    color_light_list_header: rgba$2(common$1.color_light_foreground, common$1.blend_light_text_tertiary),
    color_light_background_hover: rgba$2(common$1.color_light_foreground, common$1.blend_light_background_hover),
    color_light_background_selected: rgba$2(common$1.color_light_foreground, common$1.blend_light_background_hover),

    color_dark_title: rgba$2(common$1.color_dark_foreground, common$1.blend_dark_text_primary),
    color_dark_subtitle: rgba$2(common$1.color_dark_foreground, common$1.blend_dark_text_secondary),
    color_dark_info: rgba$2(common$1.color_dark_foreground, common$1.blend_dark_text_tertiary),
    color_dark_text_disabled: rgba$2(common$1.color_dark_foreground, common$1.blend_dark_text_disabled),
    color_dark_list_header: rgba$2(common$1.color_dark_foreground, common$1.blend_dark_text_tertiary),
    color_dark_background_hover: rgba$2(common$1.color_dark_foreground, common$1.blend_dark_background_hover),
    color_dark_background_selected: rgba$2(common$1.color_dark_foreground, common$1.blend_dark_background_hover)
};

var layout$6 = [{
    'display': '-webkit-box'
}, {
    'display': '-moz-box'
}, {
    'display': '-ms-flexbox',
    '-ms-flex-preferred-size': 'initial' // IE10
}, {
    'display': '-webkit-flex'
}, {
    'display': 'flex'
}];

var layoutInline = [layout$6, {
    'display': '-ms-inline-flexbox'
}, {
    'display': '-webkit-inline-flex'
}, {
    'display': 'inline-flex'
}];

var layoutHorizontal = [layout$6, {
    '-ms-flex-direction': 'row',
    '-webkit-flex-direction': 'row',
    'flex-direction': 'row'
}];

var layoutHorizontalReverse = [layout$6, {
    '-ms-flex-direction': 'row-reverse',
    '-webkit-flex-direction': 'row-reverse',
    'flex-direction': 'row-reverse'
}];

var layoutVertical = [layout$6, {
    '-ms-flex-direction': 'column',
    '-webkit-flex-direction': 'column',
    'flex-direction': 'column'
}];

var layoutVerticalReverse = [layout$6, {
    '-ms-flex-direction': 'column-reverse',
    '-webkit-flex-direction': 'column-reverse',
    'flex-direction': 'column-reverse'
}];

var layoutWrap = [layout$6, {
    '-ms-flex-wrap': 'wrap',
    '-webkit-flex-wrap': 'wrap',
    'flex-wrap': 'wrap'
}];

var layoutWrapReverse = [layout$6, {
    '-ms-flex-wrap': 'wrap-reverse',
    '-webkit-flex-wrap': 'wrap-reverse',
    'flex-wrap': 'wrap-reverse'
}];

var layoutStart = [layout$6, {
    '-ms-flex-align': 'start',
    '-webkit-align-items': 'flex-start',
    'align-items': 'flex-start'
}];

var layoutCenter = [layout$6, {
    '-ms-flex-align': 'center',
    '-webkit-align-items': 'center',
    'align-items': 'center'
}];

var layoutEnd = [layout$6, {
    '-ms-flex-align': 'end',
    '-webkit-align-items': 'flex-end',
    'align-items': 'flex-end'
}];

var layoutJustified = [layout$6, {
    '-ms-flex-line-pack': 'stretch', // IE10
    '-ms-flex-pack': 'justify',
    '-webkit-justify-content': 'space-between',
    'justify-content': 'space-between'
}];

var layoutStartJustified = [layout$6, {
    '-ms-flex-align': 'start', // IE10
    '-ms-flex-pack': 'start',
    '-webkit-justify-content': 'flex-start',
    'justify-content': 'flex-start'
}];

var layoutCenterJustified = [layout$6, {
    '-ms-flex-pack': 'center',
    '-webkit-justify-content': 'center',
    'justify-content': 'center'
}];

var layoutEndJustified = [layout$6, {
    '-ms-flex-pack': 'end',
    '-webkit-justify-content': 'flex-end',
    'justify-content': 'flex-end'
}];

var layoutCenterCenter = [layoutCenterJustified, layoutCenter];

var layoutAroundJustified = [layout$6, {
    '-ms-flex-pack': 'distribute',
    '-webkit-justify-content': 'space-around',
    'justify-content': 'space-around'
}];

var flex = function flex() {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return [{
        '-webkit-box-flex': num
    }, {
        '-moz-box-flex': num
    }, {
        '-webkit-flex': num
    }, {
        '-ms-flex': num
    }, {
        'flex': num
    }, num === 1 ? {
        '-webkit-flex-basis': '0.000000001px'
    } : {}, num === 1 ? {
        'flex-basis': '0.000000001px'
    } : {}];
};

var flexAuto = {
    '-ms-flex': '1 1 auto',
    '-webkit-flex-basis': 'auto',
    'flex-basis': 'auto'
};

var flexAutoVertical = {
    '-ms-flex': '1 1 auto',
    '-webkit-flex-basis': 'auto',
    'flex-basis': 'auto'
};

var flexIndex = function flexIndex(index) {
    return {
        '-ms-flex': index,
        '-webkit-flex': index,
        'flex': index
    };
};

var flexGrow = function flexGrow(value) {
    return {
        '-webkit-flex-grow': value,
        'flex-grow': value
    };
};

var selfStart = {
    '-ms-flex-item-align': 'start', // IE10
    '-ms-align-self': 'flex-start',
    '-webkit-align-self': 'flex-start',
    'align-self': 'flex-start'
};

var selfCenter = {
    '-ms-flex-item-align': 'center', // IE10
    '-ms-align-self': 'center',
    '-webkit-align-self': 'center',
    'align-self': 'center'
};

var selfEnd = {
    '-ms-flex-item-align': 'end', // IE10
    '-ms-align-self': 'flex-end',
    '-webkit-align-self': 'flex-end',
    'align-self': 'flex-end'
};

var selfStretch = {
    '-ms-flex-item-align': 'stretch', // IE10
    '-ms-align-self': 'stretch',
    '-webkit-align-self': 'stretch',
    'align-self': 'stretch'
};

var flex$1 = {
    flex: flex,
    flexAuto: flexAuto,
    flexAutoVertical: flexAutoVertical,
    flexIndex: flexIndex,
    flexGrow: flexGrow,
    layout: layout$6,
    layoutAroundJustified: layoutAroundJustified,
    layoutCenter: layoutCenter,
    layoutCenterCenter: layoutCenterCenter,
    layoutCenterJustified: layoutCenterJustified,
    layoutEnd: layoutEnd,
    layoutEndJustified: layoutEndJustified,
    layoutHorizontal: layoutHorizontal,
    layoutHorizontalReverse: layoutHorizontalReverse,
    layoutInline: layoutInline,
    layoutJustified: layoutJustified,
    layoutStart: layoutStart,
    layoutStartJustified: layoutStartJustified,
    layoutVertical: layoutVertical,
    layoutVerticalReverse: layoutVerticalReverse,
    layoutWrap: layoutWrap,
    layoutWrapReverse: layoutWrapReverse,
    selfCenter: selfCenter,
    selfEnd: selfEnd,
    selfStart: selfStart,
    selfStretch: selfStretch
};

var paddingH = function paddingH(h) {
    return {
        'padding-left': h + 'px',
        'padding-right': h + 'px'
    };
};

var paddingV = function paddingV(top, bottom) {
    return {
        'padding-top': top + 'px',
        'padding-bottom': (bottom || top) + 'px'
    };
};

var createStyles$6 = function createStyles(config$$1) {
    return [{
        '.pe-list-tile': [flex$1.layout, {
            position: 'relative',
            overflow: 'hidden',

            '&.pe-list-tile--sticky': [mixin.sticky(2)],

            ' .pe-list-tile__primary, .pe-list-tile__secondary': [flex$1.layoutHorizontal, {
                ' a&': {
                    'text-decoration': 'none',
                    color: 'inherit',
                    border: 'none'
                }
            }],

            ' .pe-list-tile__primary': [flex$1.flex(), {
                position: 'relative',
                'z-index': 1, // in case a ripple is used (positioned absolute)

                ' .pe-list-tile__content:not(.pe-list-tile__content--front)': [flex$1.flex(), paddingV(config$$1.padding, config$$1.padding + 1)]
            }],

            ' .pe-list-tile__secondary': {
                'text-align': 'right',
                'font-size': config$$1.font_size_title + 'px',
                position: 'relative',
                'z-index': 1 // in case a ripple is used (positioned absolute)
            },

            ' .pe-list-tile__content': [flex$1.layoutVertical, flex$1.selfCenter, paddingH(config$$1.side_padding), {
                '&.pe-list-tile__content--front': [paddingV(config$$1.padding - 5), {
                    width: config$$1.front_item_width + 'px'
                }],

                ' small': {
                    'font-size': config$$1.font_size_small + 'px'
                }
            }],

            ' .pe-list-tile__content--front + .pe-list-tile__content': {
                'padding-left': 0
            },

            ' .pe-list-tile__title': [mixin.ellipsis(1), {
                'font-size': config$$1.font_size_title + 'px',
                'font-weight': common$1.font_weight_normal,
                'line-height': config$$1.single_line_height + 'px'
            }],

            ' .pe-list-tile__subtitle': [mixin.ellipsis(config$$1.subtitle_line_count, config$$1.line_height_subtitle), {
                'font-size': config$$1.font_size_subtitle + 'px',
                'line-height': config$$1.line_height_subtitle + 'px',

                '&.pe-list-tile__subtitle--high': [mixin.ellipsis(config$$1.high_subtitle_line_count, config$$1.line_height_subtitle), {
                    'white-space': 'normal'
                }]
            }],

            '&.pe-list-tile--selected, &.pe-list-tile--disabled': {
                cursor: 'default'
            },

            '&.pe-list-tile--subtitle': {
                ' .pe-list-tile__content': [paddingV(config$$1.has_subtitle_padding, config$$1.has_subtitle_padding + 1), {
                    ' .pe-list-tile__title': {
                        padding: 0
                    }
                }]
            },

            '&.pe-list-tile--high-subtitle': {
                ' .pe-list-tile--high-subtitle .pe-list-tile__secondary': [flex$1.layoutHorizontal, flex$1.layoutStart],
                ' .pe-list-tile__content': [flex$1.selfStart, paddingV(config$$1.has_high_subtitle_padding, config$$1.has_high_subtitle_padding + 1), {
                    ' .pe-list-tile__title': {
                        padding: 0
                    }
                }]
            },

            // List header
            '&.pe-list__header': {
                height: config$$1.single_height + 'px',

                ' .pe-list-tile__content': {
                    'padding-top': 0,
                    'padding-bottom': 0
                },
                ' .pe-list-tile__title': [mixin.ellipsis(1, config$$1.single_height), {
                    'font-size': config$$1.font_size_list_header + 'px',
                    'font-weight': common$1.font_weight_medium,
                    'line-height': config$$1.single_height + 'px',
                    padding: 0
                }]
            },

            // Compact list

            ' .pe-list--compact &, &.pe-list-tile--compact': {
                '&:not(.pe-list__header)': {
                    ' .pe-list-tile__content': paddingV(config$$1.compact_padding, config$$1.compact_padding + 1)
                }
            },

            // Firefox only
            '@supports (-moz-appearance:none) and (display:contents)': {
                ' .pe-list-tile__primary, .pe-list-tile__content': {
                    overflow: 'hidden'
                }
            },

            // Menu

            '.pe-dialog .pe-menu__content &': {
                ' .pe-list-tile__title': mixin.ellipsis('none')
            },

            '.pe-menu__content &': {
                '&:not(.pe-list-tile--disabled)': {
                    cursor: 'default',

                    '&, .pe-list-tile__primary, .pe-list-tile__secondary': {
                        ' .pe-list-tile__title, .pe-list-tile__subtitle': [mixin.vendorize({
                            'user-select': 'none'
                        }, common$1.prefixes_user_select)]
                    }
                }
            },

            // Non-touch

            'html.pe-no-touch .pe-list--hoverable &, \
                html.pe-no-touch .pe-list--selectable &, \
                html.pe-no-touch &.pe-list-tile--hoverable, \
                html.pe-no-touch &.pe-list-tile--selectable': {
                '&:not(.pe-list__header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover': {
                    cursor: 'pointer'
                }
            }
        }]
    }];
};

var layout$5 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$6);
});

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$2 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$3({}, scope + '.pe-list-tile', {
        ' .pe-list-tile__title': {
            color: config$$1['color_' + tint + '_title']
        },

        '&.pe-list__header': {
            'background-color': 'inherit',

            ' .pe-list-tile__title': {
                color: config$$1['color_' + tint + '_list_header']
            }
        },

        ' .pe-list-tile__content, .pe-list-tile__subtitle': {
            color: config$$1['color_' + tint + '_subtitle']
        },

        '&.pe-list-tile--disabled': {
            '&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle': {
                color: config$$1['color_' + tint + '_text_disabled']
            }
        },
        '&.pe-list-tile--selected': {
            'background-color': config$$1['color_' + tint + '_background_selected']
        }
    })];
};

var noTouch$1 = function noTouch(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$3({}, scope + '.pe-list-tile', {
        '&:not(.pe-list__header):not(.pe-list-tile--disabled):hover': {
            'background-color': config$$1['color_' + tint + '_background_hover']
        }
    })];
};

var createStyles$7 = function createStyles(config$$1) {
    return [style$2(config$$1, 'light'), {
        'html.pe-no-touch': [noTouch$1(config$$1, 'light', ' .pe-list--hoverable'), noTouch$1(config$$1, 'light', ' .pe-list--hoverable ')]
    }, {
        '.pe-dark-theme': [
        // inside dark theme
        style$2(config$$1, 'dark', ' '),
        // has dark theme
        style$2(config$$1, 'dark', '&')]
    }, {
        'html.pe-no-touch .pe-dark-theme': [noTouch$1(config$$1, 'dark', ' .pe-list-tile--hoverable'), noTouch$1(config$$1, 'dark', '.pe-list--hoverable '), noTouch$1(config$$1, 'dark', ' .pe-list--hoverable ')],
        'html.pe-no-touch .pe-list--hoverable .pe-dark-theme': noTouch$1(config$$1, 'dark')
    }];
};

var color$1 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$7);
});

var themeConfigFn$4 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"]['list-tile'];
var config$5 = themeConfigFn$4 ? themeConfigFn$4(componentConfig$3) : componentConfig$3;
var id$5 = 'pe-list-tile';

styler.add(id$5, layout$5(config$5), color$1(config$5));

var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$6 = {
    block: 'pe-list-tile',
    primary: 'pe-list-tile__primary',
    secondary: 'pe-list-tile__secondary',
    content: 'pe-list-tile__content',
    contentFront: 'pe-list-tile__content--front',
    title: 'pe-list-tile__title',
    subtitle: 'pe-list-tile__subtitle',
    highSubtitle: 'pe-list-tile__subtitle--high',
    selected: 'pe-list-tile--selected',
    disabled: 'pe-list-tile--disabled',
    sticky: 'pe-list-tile--sticky',
    hasSubtitle: 'pe-list-tile--subtitle',
    hasHighSubtitle: 'pe-list-tile--high-subtitle',
    hasFront: 'pe-list-tile--front',
    isCompact: 'pe-list-tile--compact',
    isHoverable: 'pe-list-tile--hoverable',
    isSelectable: 'pe-list-tile--selectable'
};

var parsePrimaryContent = function parsePrimaryContent(opts) {
    var tag = opts.tag ? opts.tag : opts.url ? 'a' : 'div';

    var frontComp = opts.front ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$6.content + ' ' + CSS_CLASSES$6.contentFront
    }, opts.front) : opts.indent ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$6.content + ' ' + CSS_CLASSES$6.contentFront
    }) : null;

    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, _extends$5({}, {
        class: CSS_CLASSES$6.primary
    }, opts.url, opts.events), [frontComp, __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$6.content
    }, [opts.content ? opts.content : null, opts.title ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$6.title }, opts.title) : null, opts.subtitle ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$6.subtitle }, opts.subtitle) : null, opts.highSubtitle ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$6.subtitle + ' ' + CSS_CLASSES$6.highSubtitle }, opts.highSubtitle) : null])]);
};

var parseSecondaryContent = function parseSecondaryContent(opts) {
    var secondaryOpts = opts.secondary || {};
    var tag = void 0;
    if (secondaryOpts.tag) {
        tag = secondaryOpts.tag;
    } else {
        if (secondaryOpts.url) {
            tag = 'a';
        } else {
            tag = 'div';
        }
    }
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, _extends$5({}, {
        class: CSS_CLASSES$6.secondary
    }, secondaryOpts.url, secondaryOpts.events), __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$6.content
    }, [secondaryOpts.icon ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$5, secondaryOpts.icon) : null, secondaryOpts.content ? secondaryOpts.content : null]));
};

var createView$6 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';

    var heightClass = opts.subtitle ? CSS_CLASSES$6.hasSubtitle : opts.highSubtitle ? CSS_CLASSES$6.hasHighSubtitle : opts.front || opts.indent ? CSS_CLASSES$6.hasFront : null;

    var props = {
        class: [CSS_CLASSES$6.block, opts.selected ? CSS_CLASSES$6.selected : null, opts.disabled ? CSS_CLASSES$6.disabled : null, opts.sticky ? CSS_CLASSES$6.sticky : null, opts.compact ? CSS_CLASSES$6.isCompact : null, opts.hoverable ? CSS_CLASSES$6.isHoverable : null, opts.selectable ? CSS_CLASSES$6.isSelectable : null, heightClass, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
        // events and url are attached to primary content to not interfere with controls
    };
    var content = [opts.ink && !opts.disabled ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$1, opts.ripple) : null, parsePrimaryContent(opts), opts.secondary ? parseSecondaryContent(opts) : null];
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var component$7 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$6(ctrl, opts);
    }
};

var rgba$3 = common$1.rgba;

var padding_v = 24;
var padding_actions_v = 8;
var actions_button_margin_v = 2;

var componentConfig$4 = {
    image_size_small: 1 * 80,
    image_size_regular: 1.4 * 80,
    image_size_medium: 2 * 80,
    image_size_large: 3 * 80,
    border_radius: common$1.unit_block_border_radius,
    padding_h: 16,
    offset_small_padding_v: padding_v - 16,
    padding_actions_h: 8,
    title_padding_h: 16,
    title_padding_v: 24,
    tight_title_padding_bottom: 16,
    text_padding_h: 16,
    text_padding_v: 16,
    text_padding_bottom: 24,
    tight_text_padding_bottom: 16,
    subtitle_line_height_padding_bottom: 7,
    text_line_height_padding_top: 6,
    text_line_height_padding_bottom: 7,
    one_line_height_with_icon: 72,
    icon_element_width: 72 - 4,
    one_line_padding_v: 8,
    actions_padding_v: padding_actions_v - 6,
    actions_button_margin_v: actions_button_margin_v,
    actions_vertical_padding_v: padding_actions_v - actions_button_margin_v,

    color_light_main_background: rgba$3(common$1.color_light_background),
    color_light_title_text: rgba$3(common$1.color_light_foreground, common$1.blend_light_text_primary),
    color_light_subtitle_text: rgba$3(common$1.color_light_foreground, common$1.blend_light_text_secondary),
    color_light_text: rgba$3(common$1.color_light_foreground, common$1.blend_light_text_regular),
    color_light_actions_border: rgba$3(common$1.color_light_foreground, common$1.blend_light_border_light),
    color_light_overlay_background: rgba$3(common$1.color_light_foreground, common$1.blend_light_overlay_background),

    color_dark_main_background: rgba$3(common$1.color_dark_background),
    color_dark_title_text: rgba$3(common$1.color_dark_foreground, common$1.blend_dark_text_primary),
    color_dark_subtitle_text: rgba$3(common$1.color_dark_foreground, common$1.blend_dark_text_secondary),
    color_dark_text: rgba$3(common$1.color_dark_foreground, common$1.blend_dark_text_regular),
    color_dark_actions_border: rgba$3(common$1.color_dark_foreground, common$1.blend_dark_border_light),
    color_dark_overlay_background: rgba$3(common$1.color_dark_foreground, common$1.blend_dark_overlay_background)
};

var createStyles$8 = function createStyles(config$$1) {
    return [{
        '.pe-card': {
            display: 'block',
            position: 'relative',
            'border-radius': config$$1.border_radius + 'px',

            ' .pe-card__media': {
                position: 'relative',
                overflow: 'hidden',
                'border-top-left-radius': 'inherit',
                'border-top-right-radius': 'inherit',
                'z-index': 1, // makes rounded corners on absolute imgages work

                '&.pe-card__media--landscape': {
                    'padding-bottom': 100 / 16 * 9 + '%'
                },
                '&.pe-card__media--square': {
                    'padding-bottom': '100%'
                },
                '&:last-child': {
                    '&, img': {
                        'border-bottom-left-radius': config$$1.border_radius + 'px',
                        'border-bottom-right-radius': config$$1.border_radius + 'px'
                    }
                },
                ' img': [mixin.fit(), {
                    display: 'none',
                    width: '100%',

                    '&.pe-card__media--crop-x': {
                        width: '100%',
                        height: 'auto',
                        display: 'block'
                    },
                    '&.pe-card__media--crop-y': {
                        height: '100%',
                        width: 'auto',
                        display: 'block'
                    }
                }]
            },

            ' .pe-card__header + .pe-card__media': {
                'border-top-left-radius': 0,
                'border-top-right-radius': 0
            },

            ' .pe-card__primary__media': {
                margin: '16px 16px 0 16px',

                ' .pe-card__media--small': {
                    width: config$$1.image_size_small + 'px'
                },
                ' .pe-card__media--regular': {
                    width: config$$1.image_size_regular + 'px'
                },
                ' .pe-card__media--medium': {
                    width: config$$1.image_size_medium + 'px'
                },
                ' .pe-card__media--large': {
                    width: config$$1.image_size_large + 'px',
                    'margin-bottom': '16px'
                },
                ' .pe-card__media': {
                    '&, img': {
                        'border-radius': 0
                    }
                },

                ' .shadow + &': {
                    // first child
                    '&, img': {
                        'border-top-left-radius': config$$1.border_radius + 'px',
                        'border-top-right-radius': config$$1.border_radius + 'px'
                    }
                }
            },

            ' .pe-card__overlay': mixin.fit(),

            ' .pe-card__media__dimmer': [mixin.fit(), {
                'z-index': 1
            }],

            ' .pe-card__overlay__content': {
                position: 'absolute',
                bottom: 0,
                top: 'auto',
                right: 0,
                left: 0,
                'z-index': 2
            },

            ' .pe-card__header': {
                height: config$$1.one_line_height_with_icon + 'px',

                ' .pe-list-tile__title': {
                    'font-size': '14px',
                    'font-weight': common$1.font_weight_normal,
                    'line-height': '20px',
                    'margin-top': '2px'
                },
                ' .pe-list-tile__subtitle': {
                    'margin-top': '-1px'
                }
            },

            ' .pe-card__primary': [flex$1.layoutHorizontal, {
                position: 'relative',

                '&.pe-card__primary--media:not(:last-child)': {
                    'padding-bottom': '16px'
                },
                '&.pe-card__primary--media + .pe-card__actions': {
                    'margin-top': '-16px'
                },
                '& + .pe-card__text': {
                    'margin-top': '-16px'
                },
                '&.pe-card__primary--tight': {
                    ' .pe-card__title': {
                        'padding-bottom': config$$1.tight_title_padding_bottom - config$$1.subtitle_line_height_padding_bottom + 'px'
                    }
                }
            }],
            ' .pe-card__title': [flex$1.flex(), {
                padding: [config$$1.title_padding_v, config$$1.title_padding_h, config$$1.title_padding_v - config$$1.subtitle_line_height_padding_bottom, config$$1.title_padding_h].map(function (v) {
                    return v + 'px';
                }).join(' '),
                'font-size': '24px',
                'line-height': '29px'
            }],
            ' .pe-card__subtitle': {
                'font-size': '14px',
                'line-height': '24px'
            },

            ' .pe-card__actions': [{
                'min-height': 36 + 2 * 8 + 'px',
                padding: config$$1.actions_padding_v + 'px' + ' ' + config$$1.padding_actions_h + 'px',

                '&.pe-card__actions--tight': {
                    'min-height': 0
                },
                '&.pe-card__actions--horizontal:not(.pe-card__actions--justified)': [flex$1.layoutHorizontal, flex$1.layoutCenter, {
                    ' :first-child': {
                        'margin-left': 0
                    },
                    ' .pe-button': {
                        'min-width': 0
                    },
                    ' .pe-button--icon': {
                        'margin-right': '8px'
                    }
                }],

                '&.pe-card__actions--justified': [flex$1.layoutJustified],

                '&.pe-card__actions--vertical': [flex$1.layoutVertical, {
                    // vertical flex layout
                    'padding-top': config$$1.actions_vertical_padding_v + 'px',
                    'padding-bottom': config$$1.actions_vertical_padding_v + 'px',

                    // nested
                    ' .pe-card__actions': [{
                        'margin-left': -config$$1.padding_actions_h + 'px',
                        'margin-right': -config$$1.padding_actions_h + 'px',
                        'min-height': 0,

                        '&:first-child': {
                            'margin-top': -config$$1.actions_vertical_padding_v + 'px'
                        },
                        '&:last-child': {
                            'margin-bottom': -config$$1.actions_vertical_padding_v + 'px'
                        }
                    }],

                    ' .pe-button': {
                        height: '36px',
                        padding: 0,
                        'margin-top': config$$1.actions_button_margin_v + 'px',
                        'margin-bottom': config$$1.actions_button_margin_v + 'px'
                    }
                }]
            }],

            ' .pe-card__text': {
                'padding-top': config$$1.text_padding_v - config$$1.text_line_height_padding_top + 'px',
                'padding-right': config$$1.text_padding_h + 'px',
                'padding-left': config$$1.text_padding_h + 'px',
                'padding-bottom': config$$1.tight_text_padding_bottom - config$$1.text_line_height_padding_bottom + 'px',
                'font-size': '14px',
                'line-height': '24px',

                '&:last-child': {
                    'padding-bottom': config$$1.text_padding_bottom - config$$1.text_line_height_padding_bottom + 'px'
                },
                '&.pe-card__text--tight, &.pe-card__text--tight:last-child': {
                    'padding-bottom': config$$1.tight_text_padding_bottom - config$$1.text_line_height_padding_bottom + 'px'
                },
                ' .pe-card__actions + &': {
                    'margin-top': '8px'
                }
            },

            ' .pe-card__text, .pe-card__primary': {
                '& + .pe-card__actions:not(:last-child)': {
                    'margin-top': -(config$$1.offset_small_padding_v + 1) + 'px',
                    'margin-bottom': -(config$$1.offset_small_padding_v - 1) + 'px'
                }
            }
        }
    }];
};

var layout$7 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$8);
});

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$3 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$4({}, scope + '.pe-card', {
        'background-color': config$$1['color_' + tint + '_main_background']
    })];
};

var content = function content(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$4({}, scope, {
        ' .pe-card__title, .pe-list-tile__title': {
            'color': config$$1['color_' + tint + '_title_text']
        },
        ' .pe-card__subtitle, .pe-list-tile__subtitle': {
            'color': config$$1['color_' + tint + '_subtitle_text']
        },
        ' .pe-card__text': {
            'color': config$$1['color_' + tint + '_text']
        },
        ' .pe-card__actions--borders': [mixin.hairline('border-top'), {
            'border-top': '1px solid ' + config$$1['color_' + tint + '_actions_border']
        }]
    })];
};

var overlay = function overlay(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$4({}, scope + '.pe-card__overlay--sheet', {
        ' .pe-card__overlay__content': {
            'background-color': config$$1['color_' + tint + '_overlay_background']
        }
    })];
};

var createStyles$9 = function createStyles(config$$1) {
    return [style$3(config$$1, 'light'), content(config$$1, 'light', '.pe-card'), overlay(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$3(config$$1, 'dark', ' '), content(config$$1, 'dark', ' '), overlay(config$$1, 'dark', ' ')]
    },
    // is dark theme
    style$3(config$$1, 'dark', '.pe-dark-theme'), overlay(config$$1, 'dark', '.pe-dark-theme '), content(config$$1, 'dark', '.pe-card.pe-dark-theme')];
};

var color$2 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$9);
});

var themeConfigFn$5 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].card;
var config$6 = themeConfigFn$5 ? themeConfigFn$5(componentConfig$4) : componentConfig$4;
var id$6 = 'pe-card';

styler.add(id$6, layout$7(config$6), color$2(config$6));

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$3 = {
    block: 'pe-card',
    overlay: 'pe-card__overlay',
    overlaySheet: 'pe-card__overlay--sheet',
    overlayContent: 'pe-card__overlay__content',
    mediaDimmer: 'pe-card__media__dimmer',
    mediaCropX: 'pe-card__media--crop-x',
    mediaCropY: 'pe-card__media--crop-y',
    media: 'pe-card__media',
    header: 'pe-card__header',
    headerTitle: 'pe-card__header-title',
    title: 'pe-card__title',
    subtitle: 'pe-card__subtitle',
    text: 'pe-card__text',
    primary: 'pe-card__primary',
    primaryMedia: 'pe-card__primary__media',
    actions: 'pe-card__actions',
    actionsHorizontal: 'pe-card__actions--horizontal',
    actionsVertical: 'pe-card__actions--vertical',
    actionsJustified: 'pe-card__actions--justified',
    actionsBordered: 'pe-card__actions--borders',
    mediaRatioSquare: 'pe-card__media--square',
    mediaRatioLandscape: 'pe-card__media--landscape',
    primaryHasMedia: 'pe-card__primary--media',
    mediaSmall: 'pe-card__media--small',
    mediaRegular: 'pe-card__media--regular',
    mediaMedium: 'pe-card__media--medium',
    mediaLarge: 'pe-card__media--large'
};

var imageRatios = {
    landscape: 16 / 9,
    square: 1
};

var createOverlay = function createOverlay() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var tag = opts.tag || 'div';
    var content = opts.content.map(function (o) {
        var key = Object.keys(o)[0];
        return contentMap[key](o);
    });
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: [CSS_CLASSES$3.overlay, opts.sheet ? CSS_CLASSES$3.overlaySheet : null].join(' ')
    }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, {
        class: [CSS_CLASSES$3.overlayContent, opts.class].join(' ')
    }, content), __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$3.mediaDimmer
    })]);
};

var createText = function createText(o) {
    var opts = o.text || {};
    var tag = opts.tag || 'div';
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, {
        class: [CSS_CLASSES$3.text, opts.class].join(' ')
    }, opts.content);
};

// media type to class

var mediaTypeClasses = {
    small: CSS_CLASSES$3.mediaSmall,
    regular: CSS_CLASSES$3.mediaRegular,
    medium: CSS_CLASSES$3.mediaMedium,
    large: CSS_CLASSES$3.mediaLarge
};

var mediaClassForType = function mediaClassForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return mediaTypeClasses[mode];
};

var createMedia = function createMedia(o) {
    var opts = o.media || {};
    var ratio = opts.ratio || 'landscape';
    var origin = opts.origin || 'center';
    var tag = opts.tag || 'div';

    var initImage = function initImage(el, inited) {
        if (inited) {
            return;
        }
        var img = el.querySelector('img');
        if (img) {
            img.onload = function () {
                var w = this.naturalWidth;
                var h = this.naturalHeight;
                var naturalRatio = w / h;
                // crop-x: crop over x axis
                // crop-y: crop over y axis
                var cropClass = naturalRatio < imageRatios[ratio] ? CSS_CLASSES$3.mediaCropX : CSS_CLASSES$3.mediaCropY;
                img.className = cropClass;

                if (origin !== 'start') {
                    var clientWidth = el.clientWidth;
                    var clientHeight = el.clientHeight;
                    if (naturalRatio < imageRatios[ratio]) {
                        // orient on y axis
                        var imageHeight = clientWidth / naturalRatio;
                        var diff = clientHeight - imageHeight;
                        var offset = Math.ceil(origin === 'center' ? diff / 2 : diff);
                        this.style.marginTop = offset + 'px';
                    } else {
                        // orient on x axis
                        var imageWidth = clientHeight * naturalRatio;
                        var _diff = clientWidth - imageWidth;
                        var _offset = Math.ceil(origin === 'center' ? _diff / 2 : _diff);
                        this.style.marginLeft = _offset + 'px';
                    }
                }
            };
        }
    };

    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, {
        class: [CSS_CLASSES$3.media, mediaClassForType(opts.type), ratio === 'landscape' ? CSS_CLASSES$3.mediaRatioLandscape : CSS_CLASSES$3.mediaRatioSquare, opts.class].join(' '),
        config: initImage
    }, [opts.content, opts.overlay ? createOverlay(opts.overlay) : __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$3.mediaDimmer })]);
};

var createHeader = function createHeader(o) {
    var opts = o.header || {};
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$7, _extends$2({}, opts, {
        class: [CSS_CLASSES$3.header, opts.class].join(' ')
    }, opts.icon ? {
        front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$5, opts.icon)
    } : null));
};

var actionLayoutClasses = {
    horizontal: CSS_CLASSES$3.actionsHorizontal,
    vertical: CSS_CLASSES$3.actionsVertical,
    justified: CSS_CLASSES$3.actionsJustified
};
var actionClassForLayout = function actionClassForLayout() {
    var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'horizontal';
    return actionLayoutClasses[layout];
};

var createActions = function createActions(o) {
    var opts = o.actions || {};
    var tag = opts.tag || 'div';
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, {
        class: [CSS_CLASSES$3.actions, actionClassForLayout(opts.layout), opts.class].join(' ')
    }, opts.content);
};

var createPrimary = function createPrimary(o) {
    var content = void 0,
        key = void 0,
        partOpts = void 0;
    var opts = o.primary || {};
    var tag = opts.tag || 'div';
    var primaryHasMedia = false;

    var lookup = {
        title: function title(pops) {
            return pops.attrs ? pops : __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$3.title }, [pops.title ? pops.title : null, pops.subtitle ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$3.subtitle }, pops.subtitle) : null]);
        },
        media: function media(pops) {
            primaryHasMedia = true;
            return __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
                class: CSS_CLASSES$3.primaryMedia
            }, createMedia({
                media: pops
            }));
        },
        actions: function actions(pops) {
            return createActions({
                actions: pops
            });
        }
    };

    if (Array.isArray(opts.content)) {
        content = opts.content.map(function (part) {
            key = Object.keys(part)[0];
            partOpts = part[key];
            if (lookup[key]) {
                return lookup[key](partOpts);
            } else {
                return part;
            }
        });
    } else {
        // shorthand for simple primary titles
        content = [opts.title ? lookup.title({
            title: opts.title,
            subtitle: opts.subtitle
        }) : null, opts.media ? lookup.media(opts.media) : null, opts.actions ? lookup.actions(opts.actions) : null, opts.content ? opts.content : null];
    }
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, {
        class: [CSS_CLASSES$3.primary, primaryHasMedia ? CSS_CLASSES$3.primaryHasMedia : null].join(' ')
    }, content);
};

var contentMap = {
    text: createText,
    media: createMedia,
    header: createHeader,
    primary: createPrimary,
    actions: createActions
};

var createView$3 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || opts.url ? 'a' : 'div';
    var props = _extends$2({}, {
        class: [CSS_CLASSES$3.block, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.url ? opts.url : null, opts.events ? opts.events : null);

    var content = void 0;
    if (Array.isArray(opts.content)) {
        content = opts.content.map(function (o) {
            var key = Object.keys(o)[0];
            return contentMap[key](o);
        });
        content.unshift(__WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$2, {
            z: ctrl.z(),
            animated: true
        }));
    } else {
        content = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$2, {
            z: ctrl.z(),
            animated: true
        }), opts.content];
    }
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var component$3 = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var z = opts.z !== undefined ? opts.z : 1;
        return {
            z: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.prop(z)
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$3(ctrl, opts);
    }
};

// No styles for this component

var _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$7 = {
    block: 'pe-control',
    label: 'pe-control__label',
    input: 'pe-control__input',
    box: 'pe-control__box',
    on: 'pe-control--on',
    off: 'pe-control--off',
    disabled: 'pe-control--disabled',
    inactive: 'pe-control--inactive',
    small: 'pe-control--small',
    regular: 'pe-control--regular',
    medium: 'pe-control--medium',
    large: 'pe-control--large'
};

var typeClasses$1 = {
    small: CSS_CLASSES$7.small,
    regular: CSS_CLASSES$7.regular,
    medium: CSS_CLASSES$7.medium,
    large: CSS_CLASSES$7.large
};

var classForType$1 = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return typeClasses$1[mode];
};

var createView$8 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof opts.checked === 'function') {
        ctrl.setChecked(opts.checked());
    }
    var checked = ctrl.checked();
    var selectable = opts.selectable(checked);
    var inactive = opts.disabled || !selectable;
    var tag = opts.tag || 'div';
    var name = opts.name || '';
    var props = _extends$6({}, {
        class: [CSS_CLASSES$7.block, opts.defaultClass, checked ? CSS_CLASSES$7.on : CSS_CLASSES$7.off, opts.disabled ? CSS_CLASSES$7.disabled : null, inactive ? CSS_CLASSES$7.inactive : null, classForType$1(opts.size), opts.class].join(' '),
        id: opts.id || '',
        config: function config$$1(el, inited, context, vdom) {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
        }
    }, opts.events ? opts.events : null);
    var content = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()('input', {
        class: CSS_CLASSES$7.input,
        name: name,
        value: ctrl.value(),
        type: opts.type, // set by checkbox / radio-button
        tabindex: -1, // set in selectionView / icon-button
        checked: checked,
        config: function config$$1(el, inited) {
            if (inited) return;
            ctrl.setInputEl(el);
        }
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()('label', _extends$6({}, {
        class: CSS_CLASSES$7.label,
        tabindex: -1 // set in selectionView
    }, inactive ? null : {
        onclick: function onclick() {
            return ctrl.toggle();
        }
    }), [opts.selectionView ? opts.selectionView(checked, opts) : null, opts.label ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('span', opts.label) : null])];
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var component$10 = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        // Because this module also supports radio buttons (paired control elements)
        // we won't keep a separate 'checked' value but instead keep the checked value
        // as a HTMLElement checked state.
        var defaultChecked = false;
        var _value = opts.value || '1';
        var inputEl = void 0;

        var setInputElChecked = function setInputElChecked(isChecked) {
            if (inputEl) {
                inputEl.checked = isChecked;
            }
        };

        var getOptsChecked = function getOptsChecked() {
            if (typeof opts.checked === 'function') {
                var v = opts.checked();
                return v !== undefined ? v : defaultChecked;
            } else {
                return opts.checked !== undefined ? opts.checked : defaultChecked;
            }
        };

        var setInputEl = function setInputEl(el) {
            inputEl = el;
            setInputElChecked(getOptsChecked());
        };

        var setChecked = function setChecked(isChecked) {
            setInputElChecked(isChecked);
            if (opts.getState) {
                opts.getState({
                    checked: inputEl ? inputEl.checked : getOptsChecked(),
                    value: _value,
                    el: inputEl
                });
            }
        };

        var toggle = function toggle() {
            return setChecked(!inputEl.checked);
        };

        return {
            setInputEl: setInputEl,
            setChecked: setChecked,
            checked: function checked() {
                return inputEl ? inputEl.checked : getOptsChecked();
            },
            toggle: toggle,
            value: function value() {
                return _value;
            }
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$8(ctrl, opts);
    }
};

var padding$1 = (common$1.grid_unit_icon_button - common$1.unit_icon_size) / 2; // 12
var padding_compact = (common$1.grid_unit_icon_button - common$1.unit_icon_size) / 3; // 8

var iconButtonConfig = {
  padding: padding$1,
  padding_compact: padding_compact,

  color_light_wash_opacity: common$1.blend_light_background_hover_medium,
  color_light_focus_opacity: common$1.blend_light_background_hover_medium,
  color_light_flat_normal_text: common$1.rgba(common$1.color_light_foreground, common$1.blend_light_text_secondary),

  color_dark_wash_opacity: common$1.blend_dark_background_hover_medium,
  color_dark_focus_opacity: common$1.blend_dark_background_hover_medium,
  color_dark_flat_normal_text: common$1.rgba(common$1.color_dark_foreground, common$1.blend_dark_text_secondary)
};

var createStyles$10 = function createStyles(config$$1) {
    return [{
        '.pe-button--icon': {
            // don't set button size to facilitate different icon sizes
            display: 'inline-block',
            'vertical-align': 'middle',
            cursor: 'pointer',
            position: 'relative',
            'font-size': '1rem',
            'border-radius': '50%',
            border: 'none',

            ' .pe-button__content': {
                padding: 0
            },

            ' .pe-button__label': {
                'line-height': 1,
                padding: config$$1.padding + 'px'
            },

            '&.pe-button--compact': {
                ' .pe-button__label': {
                    padding: config$$1.padding_compact + 'px'
                }
            }
        }
    }];
};

var layout$8 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$10);
});

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$4 = function style(config$$1, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    return [_defineProperty$5({}, scope + '.pe-button.pe-button--icon', {
        color: config$$1['color_' + tint + '_' + type + '_normal_text'],
        background: 'none',

        ' .pe-button__wash': {
            opacity: config$$1['color_' + tint + '_wash_opacity']
        },

        '&.pe-button--focus, &.pe-button--selected': {
            ' .pe-button__focus': {
                opacity: config$$1['color_' + tint + '_focus_opacity'],
                'background-color': 'currentcolor'
            }
        },

        '&.pe-button--disabled': {
            color: config$$1['color_' + tint + '_' + type + '_disabled_text']
        },

        '&.pe-button--raised': {
            'background-color': config$$1['color_' + tint + '_background'],

            ' .pe-button__content': {
                background: 'transparent'
            }
        }
    })];
};

var noTouch$2 = function noTouch(config$$1, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    return [_defineProperty$5({}, scope + '.pe-button.pe-button--icon:hover', tint === 'light' ? {
        ' .pe-button__wash': {
            'background-color': 'currentcolor'
        }
    } : {
        ' .pe-button__wash': {
            'background-color': config$$1['color_' + tint + '_' + type + '_normal_text']
        }
    })];
};

var createStyles$11 = function createStyles(config$$1) {
    return [style$4(config$$1, 'light', 'flat'), {
        'html.pe-no-touch': [noTouch$2(config$$1, 'light', 'flat', ' ')]
    }, {
        '.pe-dark-theme': [
        // inside dark theme
        style$4(config$$1, 'dark', 'flat', ' '),
        // has dark theme
        style$4(config$$1, 'dark', 'flat', '&')]
    }, {
        'html.pe-no-touch .pe-dark-theme': [noTouch$2(config$$1, 'dark', 'flat', ' ')]
    }];
};

var color$3 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$11);
});

var themeConfigFn$6 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"]['icon-button'];
var config$7 = themeConfigFn$6 ? themeConfigFn$6(iconButtonConfig) : iconButtonConfig;
var id$7 = 'pe-icon-button';

styler.add(id$7, layout$8(config$7), color$3(config$7));

var _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$9 = {
    block: 'pe-button pe-button--icon',
    label: 'pe-button__label',
    compact: 'pe-button--compact'
};

var createView$9 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var content = opts.icon ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$5, opts.icon) : opts.content ? opts.content : null;
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component, _extends$8({}, opts, {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
            class: CSS_CLASSES$9.label
        }, content),
        parentClass: [opts.parentClass || CSS_CLASSES$9.block, opts.compact ? CSS_CLASSES$9.compact : null].join(' '),
        // default do not show hover effect
        wash: opts.wash !== undefined ? opts.wash : false,
        ripple: opts.ripple || null,
        animateOnTap: opts.animateOnTap !== undefined ? opts.animateOnTap : false
    }));
};

var component$11 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$9(ctrl, opts);
    }
};

var _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Helper function for checkbox and radio button
var CSS_CLASSES$8 = {
    box: 'pe-control__box',
    button: 'pe-control__button',
    buttonOn: 'pe-control__button--on',
    buttonOff: 'pe-control__button--off'
};

var createIcon = function createIcon(onOffType, opts) {
    // if opts.iconOn/Off is passed, use that icon options object and ignore size
    // otherwise create a new object
    return _extends$7({}, opts[onOffType] ? opts[onOffType] : {
        msvg: opts.theme[onOffType]
    }, {
        class: opts.class
    }, opts.icon, opts.size ? {
        type: opts.size
    } : null);
};

var createSelection = function createSelection(checked, opts) {
    var selectable = opts.selectable(checked);
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$8.box
    }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$11, _extends$7({}, {
        tag: 'div',
        class: CSS_CLASSES$8.button,
        content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$5, createIcon('iconOn', _extends$7({}, {
            class: CSS_CLASSES$8.buttonOn
        }, opts))), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$5, createIcon('iconOff', _extends$7({}, {
            class: CSS_CLASSES$8.buttonOff
        }, opts)))],
        ripple: {
            center: true
        },
        disabled: opts.disabled,
        inactive: !selectable
    }, opts.iconButton)));
};

var activeColor = common$1.color_primary; // or override in CSS by setting 'color' property on '.pe-checkbox' / '.pe-radio-button'
var rgba$4 = common$1.rgba;
var label_padding = (common$1.grid_unit_icon_button - common$1.unit_icon_size) / 2; // 12

var selectionControlConfig = {
    label_font_size: 2 * common$1.grid_unit_component, // 16
    label_height: 3 * common$1.grid_unit_component, // 24
    padding: Math.floor(1.7 * common$1.grid_unit_component),
    label_padding: label_padding,
    button_size: 6 * common$1.grid_unit_component,
    icon_size: 3 * common$1.grid_unit_component,
    animation_duration: common$1.animation_duration,

    color_light_on_text: common$1.rgba(activeColor),
    color_light_off_text: rgba$4(common$1.color_light_foreground, common$1.blend_light_text_secondary),
    color_light_off_icon: rgba$4(common$1.color_light_foreground, common$1.blend_light_text_secondary),
    color_light_label_text: rgba$4(common$1.color_light_foreground, common$1.blend_light_text_secondary),
    color_light_disabled_text: rgba$4(common$1.color_light_foreground, common$1.blend_light_text_disabled),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on_focus_opacity: .11,

    color_light_focus_on: rgba$4(common$1.color_primary),
    color_light_focus_on_opacity: .11,
    color_light_focus_off: rgba$4(common$1.color_light_foreground),
    color_light_focus_off_opacity: .07,

    color_dark_on_text: common$1.rgba(activeColor),
    color_dark_off_text: rgba$4(common$1.color_dark_foreground, common$1.blend_dark_text_secondary),
    color_dark_off_icon: '#fff',
    color_dark_label_text: rgba$4(common$1.color_dark_foreground, common$1.blend_dark_text_secondary),
    color_dark_disabled_text: rgba$4(common$1.color_dark_foreground, common$1.blend_dark_text_disabled),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on_focus_opacity: .11,

    color_dark_focus_on: rgba$4(common$1.color_primary), // or '#80cbc4'
    color_dark_focus_on_opacity: .14,
    color_dark_focus_off: rgba$4(common$1.color_dark_foreground),
    color_dark_focus_off_opacity: .09
};

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Returns a style function to be used by checkbox and radio-button

var getSize = function getSize(config$$1, height) {
    var iconSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : common$1.unit_icon_size;

    var labelSize = iconSize + 2 * config$$1.label_padding;
    var iconOffset = (labelSize - iconSize) / 2;
    return {
        ' .pe-control__label': {
            height: height + 'px'
        },
        ' .pe-control__box': {
            width: iconSize + 'px',
            height: iconSize + 'px'
        },
        ' .pe-button__label': {
            width: labelSize + 'px',
            height: labelSize + 'px',

            ' .pe-icon': [mixin.fit(iconOffset)]
        }
    };
};

var activeButton = function activeButton() {
    return {
        opacity: 1,
        'z-index': 1
    };
};

var inactiveButton = function inactiveButton() {
    return {
        opacity: 0,
        'z-index': 0
    };
};

var createStyles$12 = function createStyles(config$$1, className, type) {
    var _peControl;

    return [{
        '.pe-control': (_peControl = {
            display: 'inline-block',
            'box-sizing': 'border-box',
            margin: 0,
            padding: 0,

            ' .pe-control__label': [flex$1.layoutHorizontal, flex$1.layoutCenter, {
                position: 'relative',
                cursor: 'pointer',
                'font-size': config$$1.label_font_size + 'px',
                'line-height': config$$1.label_height + 'px',
                margin: 0,
                color: 'inherit',

                ':focus': {
                    outline: 0
                }
            }],

            '&.pe-control--inactive': {
                ' .pe-control__label': {
                    cursor: 'default'
                }
            }

        }, _defineProperty$6(_peControl, ' input[type=' + type + '].pe-control__input', [mixin.vendorize({
            'appearance': 'none'
        }, common$1.prefixes_appearance), {
            'line-height': config$$1.label_height + 'px',
            // Hide input element
            position: 'absolute',
            'z-index': '-1',
            width: 0,
            height: 0,
            margin: 0,
            padding: 0,
            opacity: 0,
            border: 'none',
            'pointer-events': 'none'
        }]), _defineProperty$6(_peControl, ' .pe-control__box', {
            position: 'relative',
            display: 'inline-block',
            'box-sizing': 'border-box',
            width: config$$1.label_height + 'px',
            height: config$$1.label_height + 'px',
            color: 'inherit',

            ':focus': {
                outline: 0
            }
        }), _defineProperty$6(_peControl, ' .pe-control__button', [mixin.defaultTransition('opacity', config$$1.animation_duration), {
            position: 'absolute',
            left: -((config$$1.button_size - config$$1.icon_size) / 2) + 'px',
            top: -((config$$1.button_size - config$$1.icon_size) / 2) + 'px',
            'z-index': 1
            // opacity: 0,
            // 'pointer-events': 'auto'
        }]), _defineProperty$6(_peControl, '&.pe-control--off', {
            ' .pe-control__button--on': inactiveButton(),
            ' .pe-control__button--off': activeButton()
        }), _defineProperty$6(_peControl, '&.pe-control--on', {
            ' .pe-control__button--on': activeButton(),
            ' .pe-control__button--off': inactiveButton()
        }), _defineProperty$6(_peControl, ' .pe-control__label span', {
            'padding-left': config$$1.padding + 'px',
            'padding-right': config$$1.padding + 'px'
        }), _defineProperty$6(_peControl, '&.pe-control--disabled', {
            ' .pe-control__label': {
                cursor: 'auto'
            },
            ' .pe-control__button': {
                'pointer-events': 'none'
            }
        }), _defineProperty$6(_peControl, ' .pe-button__label', {
            ' .pe-icon': {
                position: 'absolute'
            }
        }), _defineProperty$6(_peControl, '&.pe-control--small', getSize(config$$1, common$1.unit_icon_size_small, common$1.unit_icon_size_small)), _defineProperty$6(_peControl, '&.pe-control--regular', getSize(config$$1, config$$1.label_height, common$1.unit_icon_size)), _defineProperty$6(_peControl, '&.pe-control--medium', getSize(config$$1, common$1.unit_icon_size_medium, common$1.unit_icon_size_medium)), _defineProperty$6(_peControl, '&.pe-control--large', getSize(config$$1, common$1.unit_icon_size_large, common$1.unit_icon_size_large)), _peControl)
    }];
};

var layout$9 = (function (config$$1) {
    return mixin.createStyles(config$$1, function (config$$1) {
        return createStyles$12(config$$1, '.pe-control--checkbox', 'checkbox');
    });
});

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Returns a style function to be used by checkbox and radio-button

var style$5 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$7({}, scope + '.pe-control', {
        color: config$$1['color_' + tint + '_on_text'], // override by specifying 'color'

        ' .pe-control__label': {
            ' span': {
                color: config$$1['color_' + tint + '_label_text']
            }
        },
        ' .pe-control__box': {
            ' .pe-control__button': {
                color: 'currentcolor',

                ' .pe-control__button--on': {
                    color: 'currentcolor'
                },

                ' .pe-control__button--off': {
                    color: config$$1['color_' + tint + '_off_icon']
                }
            }
        },
        '&.pe-control--off': {
            ' .pe-button--focus .pe-button__focus': {
                opacity: config$$1['color_' + tint + '_focus_off_opacity'],
                'background-color': config$$1['color_' + tint + '_focus_off']
            },
            // reverse the ripple color so that it corresponds to the resulting state
            ' .pe-ripple': {
                color: config$$1['color_' + tint + '_focus_on']
            }
        },
        '&.pe-control--on': {
            ' .pe-button--focus .pe-button__focus': {
                opacity: config$$1['color_' + tint + '_focus_on_opacity'],
                'background-color': config$$1['color_' + tint + '_focus_on']
            },
            // reverse the ripple color so that it corresponds to the resulting state
            ' .pe-ripple': {
                color: config$$1['color_' + tint + '_focus_off']
            }
        },

        '&.pe-control--disabled': {
            ' .pe-control__label span': {
                color: config$$1['color_' + tint + '_disabled_text']
            },
            ' .pe-control__box': {
                ' .pe-control__button--on, .pe-control__button--off': {
                    color: config$$1['color_' + tint + '_disabled_text']
                }
            }
        }
    })];
};

var createStyles$13 = function createStyles(config$$1) {
    return [style$5(config$$1, 'light', '.pe-control--checkbox'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$5(config$$1, 'dark', ' '),
        // has dark theme
        style$5(config$$1, 'dark', '&')]
    }];
};

var color$4 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$13);
});

var themeConfigFn$7 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].checkbox;
var config$8 = themeConfigFn$7 ? themeConfigFn$7(selectionControlConfig) : selectionControlConfig;
var id$8 = 'pe-checkbox';

styler.add(id$8, layout$9(config$8), color$4(config$8));

// default icons
var iconOff = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>');
var iconOn = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');

var theme = {
    iconOff: iconOff,
    iconOn: iconOn
};

var selectable = function selectable() {
    return true;
};

var createView$7 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.theme = theme;
    opts.defaultClass = 'pe-control--checkbox';
    opts.type = 'checkbox';
    opts.selectionView = createSelection;
    opts.selectable = selectable;
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$10, opts);
};

var component$8 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$7(ctrl, opts);
    }
};

var _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
Helper module to manage multiple items of the same component type.
*/
/*
mOpts:
- instance
- defaultId
- tag
- noneTag
- bodyShowClass
*/
var multiple = function multiple(mOpts) {
    var items = [];

    var itemIndex = function itemIndex(id) {
        var item = findItem(id);
        return items.indexOf(item);
    };

    var removeItem = function removeItem(id) {
        var index = itemIndex(id);
        if (index !== -1) {
            items.splice(index, 1);
        }
    };

    var replaceItem = function replaceItem(id, newItem) {
        var index = itemIndex(id);
        if (index !== -1) {
            items[index] = newItem;
        }
    };

    var findItem = function findItem(id) {
        // traditional for loop for IE10
        for (var i = 0; i < items.length; i++) {
            if (items[i].instanceId === id) {
                return items[i];
            }
        }
    };

    var next = function next() {
        if (items.length) {
            items[0].show = true;
            __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
        }
    };

    var _remove = function _remove(instanceId) {
        if (mOpts.queue) {
            items.shift();
            // add time to remove the previous instance before drawing the next one
            setTimeout(next, 0);
        } else {
            removeItem(instanceId);
        }
    };

    var setPauseState = function setPauseState(pause, instanceId) {
        var item = findItem(instanceId);
        if (item) {
            item.pause = pause;
            item.unpause = !pause;
        }
    };

    var makeItem = function makeItem(itemOpts, instanceId) {
        var resolveShow = void 0;
        var didShow = function didShow() {
            var opts = typeof itemOpts === 'function' ? itemOpts() : itemOpts;
            if (opts.didShow) {
                opts.didShow(instanceId);
            }
            return resolveShow(instanceId);
        };
        var showPromise = new Promise(function (resolve) {
            resolveShow = resolve;
        });

        var resolveHide = void 0;
        var didHide = function didHide() {
            var opts = typeof itemOpts === 'function' ? itemOpts() : itemOpts;
            if (opts.didHide) {
                opts.didHide(instanceId);
            }
            if (mOpts.queue) {
                _remove(instanceId);
            }
            return resolveHide(instanceId);
        };
        var hidePromise = new Promise(function (resolve) {
            resolveHide = resolve;
        });

        return _extends$9({}, mOpts, {
            instanceId: instanceId,
            opts: itemOpts,
            show: mOpts.queue ? false : true,
            showPromise: showPromise,
            hidePromise: hidePromise,
            didShow: didShow,
            didHide: didHide
        });
    };

    return {

        count: function count() {
            return items.length;
        },

        clear: function clear() {
            return items.length = 0;
        },

        show: function show(opts) {
            var instanceId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mOpts.defaultId;

            var item = void 0;
            if (mOpts.queue) {
                item = makeItem(opts, instanceId);
                items.push(item);
                if (items.length === 1) {
                    next();
                }
            } else {
                var storedItem = findItem(instanceId);
                item = makeItem(opts, instanceId);
                if (!storedItem) {
                    items.push(item);
                } else {
                    replaceItem(instanceId, item);
                }
            }
            return item.showPromise;
        },

        hide: function hide() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            var item = void 0;
            if (mOpts.queue) {
                if (items.length) {
                    item = items[0];
                }
            } else {
                item = findItem(instanceId);
            }
            if (item) {
                item.hide = true;
                return item.hidePromise;
            }
            return Promise.resolve(instanceId);
        },

        remove: function remove() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            _remove(instanceId);
        },

        pause: function pause() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            setPauseState(true, instanceId);
        },

        unpause: function unpause() {
            var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

            setPauseState(false, instanceId);
        },

        view: function view() {
            var toShowItems = items.filter(function (item) {
                return item.show;
            });
            if (!toShowItems.length) {
                document.body.classList.remove(mOpts.bodyShowClass);
                // placeholder because we cannot return null
                return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(mOpts.noneTag);
            } else {
                document.body.classList.add(mOpts.bodyShowClass);
            }
            return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(mOpts.tag, toShowItems.map(function (itemData) {
                return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(mOpts.instance, _extends$9({}, itemData, {
                    transitions: mOpts.transitions,
                    key: itemData.key || itemData.instanceId
                }));
            }));
        }
    };
};

var listeners = {};

// https://gist.github.com/Eartz/fe651f2fadcc11444549
var throttle = function throttle(func) {
    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

    var wait = false;
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var later = function later() {
            func.apply(context, args);
        };
        if (!wait) {
            later();
            wait = true;
            setTimeout(function () {
                wait = false;
            }, s);
        }
    };
};

var subscribe = function subscribe(eventName, listener, delay) {
    listeners[eventName] = listeners[eventName] || [];
    listeners[eventName].push(delay ? throttle(listener, delay) : listener);
};

var unsubscribe = function unsubscribe(eventName, listener) {
    if (!listeners[eventName]) {
        return;
    }
    var index = listeners[eventName].indexOf(listener);
    if (index > -1) {
        listeners[eventName].splice(index, 1);
    }
};

var emit = function emit(eventName, event) {
    if (!listeners[eventName]) {
        return;
    }
    listeners[eventName].forEach(function (listener) {
        listener(event);
    });
};

window.addEventListener('resize', function (e) {
    return emit('resize', e);
});
window.addEventListener('scroll', function (e) {
    return emit('scroll', e);
});
window.addEventListener('keydown', function (e) {
    return emit('keydown', e);
});

var events = {
    throttle: throttle,
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    emit: emit
};

/*
Generic show/hide transition module
*/

// defaults
var SHOW_DURATION = .220; // default dialog timing
var HIDE_DURATION = .200; // default dialog timing
var SHOW_DELAY = 0;
var HIDE_DELAY = 0;
var TRANSITION = 'both';

// See: transition
var show$1 = function show(opts) {
    return transition(opts, 'show');
};

var hide$1 = function hide(opts) {
    return transition(opts, 'hide');
};

/*
opts:
- transition
- showDuration
- hideDuration

- state (show, hide)
*/
var getDuration = function getDuration(opts, state) {
    var transition = opts.transition || TRANSITION;
    if (transition === 'none') {
        return 0;
    } else if (transition === 'show' && state === 'hide') {
        return 0;
    } else if (transition === 'hide' && state === 'show') {
        return 0;
    } else {
        // both
        return state === 'show' ? opts.showDuration !== undefined ? opts.showDuration : SHOW_DURATION : opts.hideDuration !== undefined ? opts.hideDuration : HIDE_DURATION;
    }
};

/*
opts:
- transition (show, hide, both)
- showDelay
- hideDelay

- state (show, hide)
*/
var getDelay = function getDelay(opts, state) {
    var transition = opts.transition || TRANSITION;
    if (transition === 'none') {
        return 0;
    } else if (transition === 'show' && state === 'hide') {
        return 0;
    } else if (transition === 'hide' && state === 'show') {
        return 0;
    } else {
        // both
        return state === 'show' ? opts.showDelay !== undefined ? opts.showDelay : SHOW_DELAY : opts.hideDelay !== undefined ? opts.hideDelay : HIDE_DELAY;
    }
};

/*
opts:
- el
- duration
- delay
- showClass
- beforeShow
- show
- hide
- afterHide
- showDelay
- hideDelay

- state (show, hide)
*/
var transition = function transition(opts, state) {
    var deferred = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.deferred();
    var el = opts.el;
    if (!el) {
        deferred.resolve();
        return deferred.promise;
    }
    var transitionDuration = getDuration(opts, state) * 1000;
    var delay = getDelay(opts, state) * 1000;
    var style = el.style;
    var beforeTransition = opts.beforeShow && state === 'show' ? function () {
        style.transitionDuration = '0ms';
        style.transitionDelay = '0ms';
        opts.beforeShow();
    } : null;
    var applyTransition = function applyTransition() {
        style.transitionDuration = transitionDuration + 'ms';
        style.transitionDelay = delay + 'ms';
        if (opts.showClass) {
            el.classList[state === 'show' ? 'add' : 'remove'](opts.showClass);
        }
        if (opts.show && typeof opts.show === 'function' && state === 'show') {
            opts.show();
        }
        if (opts.hide && typeof opts.hide === 'function' && state === 'hide') {
            opts.hide();
        }
    };
    var applyAfterTransition = function applyAfterTransition() {
        if (opts.afterHide && state === 'hide') {
            style.transitionDuration = '0ms';
            style.transitionDelay = '0ms';
            opts.afterHide();
        }
    };

    var doTransition = function doTransition() {
        applyTransition();
        setTimeout(function () {
            applyAfterTransition();
            deferred.resolve();
        }, transitionDuration + delay);
    };

    var maybeDelayTransition = function maybeDelayTransition() {
        if (transitionDuration === 0) {
            doTransition();
        } else {
            setTimeout(function () {
                doTransition();
            }, 0);
        }
    };

    if (beforeTransition) {
        beforeTransition();
        setTimeout(function () {
            maybeDelayTransition();
        }, 0);
    } else {
        maybeDelayTransition();
    }

    return deferred.promise;
};

var transition$1 = {
    show: show$1,
    hide: hide$1
};

var rgba$5 = common$1.rgba;

var componentConfig$6 = {
    border_radius: common$1.unit_block_border_radius,
    padding: 3 * common$1.grid_unit_component,
    header_bottom: 20,
    header_height: 60,
    footer_height: 52,

    color_light_content_background: rgba$5(common$1.color_light_background),
    color_light_title_text: rgba$5(common$1.color_light_foreground, common$1.blend_light_text_primary),
    color_light_body_text: rgba$5(common$1.color_light_foreground, common$1.blend_light_text_regular),
    color_light_body_border: rgba$5(common$1.color_light_foreground, common$1.blend_light_border_light),
    color_light_backdrop_background: 'rgba(0, 0, 0, .4)',

    color_dark_content_background: rgba$5(common$1.color_dark_background),
    color_dark_title_text: rgba$5(common$1.color_dark_foreground, common$1.blend_dark_text_primary),
    color_dark_body_text: rgba$5(common$1.color_dark_foreground, common$1.blend_dark_text_regular),
    color_dark_body_border: rgba$5(common$1.color_dark_foreground, common$1.blend_dark_border_light),
    color_dark_backdrop_background: 'rgba(0, 0, 0, .5)'
};

var createStyles$14 = function createStyles(config$$1) {
    var padding = config$$1.padding;
    var lineHeightTitle = 24;

    return [{
        '.pe-dialog': [flex$1.layoutCenterCenter,
        // transition-duration set in js
        mixin.vendorize({
            'transition-timing-function': 'ease-out'
        }, common$1.prefixes_transition), mixin.vendorize({
            'transition-property': 'opacity'
        }, common$1.prefixes_transition), {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            'z-index': common$1.z_dialog,
            height: '100%', // 100vh would make the dialog go beneath Mobile Safari toolbar
            padding: padding + 'px 40px',
            opacity: 0,

            '&.pe-dialog--visible': {
                opacity: 1
            },

            '&.pe-dialog--fullscreen': {
                padding: 0,

                ' .pe-dialog__content': {
                    'border-radius': 0,
                    'max-width': 'none',
                    height: '100%',
                    width: '100%',

                    ' .pe-dialog__header, .pe-dialog__footer': {
                        display: 'none'
                    },

                    ' .pe-dialog__body': {
                        padding: 0,
                        height: '100%',
                        'max-height': 'calc(100%)',
                        border: 'none'
                    }
                }
            },

            ' .pe-dialog__header, pe-dialog__body, pe-dialog__header': {
                'z-index': 1
            },

            ' .pe-dialog__content': [flex$1.layoutVertical, {
                position: 'relative',
                'max-height': '100%',
                'min-width': 56 * 5 + 'px',
                'max-width': 7 * common$1.grid_unit_menu + 'px',
                'border-radius': config$$1.border_radius + 'px',

                ' > .pe-shadow': {
                    'z-index': -1 // For IE10 to get click events on content
                },

                '&.pe-menu__content': {
                    ' .pe-dialog__body': {
                        padding: 0,
                        border: 'none'
                    }
                }
            }],

            ' .pe-dialog__title': {
                'font-size': common$1.font_size_title + 'px',
                'line-height': lineHeightTitle + 'px',
                'font-weight': common$1.font_weight_medium,

                '& + div': {
                    'margin-top': '16px'
                }
            },

            ' .pe-dialog__header': {
                padding: [padding - 4, padding, config$$1.header_bottom - 4, padding].map(function (v) {
                    return v + 'px';
                }).join(' '),
                'min-height': config$$1.header_height + 'px',

                ' .pe-dialog__title': [mixin.ellipsis(1), {
                    width: '100%'
                }]
            },

            ' .pe-dialog__body': [flex$1.selfStretch, mixin.hairline('border-top'), {
                'border-top-style': 'solid'
            }, mixin.hairline('border-top'), {
                'border-bottom-style': 'solid'
            }, {
                padding: [padding, padding, padding - 5, padding].map(function (v) {
                    return v + 'px';
                }).join(' '),
                'overflow-y': 'auto',
                '-webkit-overflow-scrolling': 'touch',
                'border-width': '1px',
                'border-style': 'solid none',
                'border-color': 'transparent',
                // initially set max-height; will be overridden by dialog core with actual heights
                'max-height': 'calc(100vh - ' + 2 * padding + 'px - ' + (config$$1.header_height + config$$1.footer_height) + 'px)'
            }],
            ' .pe-dialog__header + .pe-dialog__body': {
                'padding-top': 0
            },

            ' .pe-dialog__footer': {
                padding: '2px 8px',
                'min-height': config$$1.footer_height + 'px',
                'font-size': 0, // remove inline block spacing

                '&.pe-dialog__footer--high': {
                    // when buttons are stacked vertically
                    'padding-bottom': '8px'
                }
            },

            ' .pe-dialog__actions': [flex$1.layoutHorizontal, flex$1.layoutEndJustified, flex$1.layoutWrap, {
                margin: '0 -4px',

                ' .pe-button': {
                    height: '36px',
                    'margin-top': '6px',
                    'margin-bottom': '6px',
                    padding: 0
                }
            }]
        }],

        ' body.pe-dialog--open': {
            overflow: 'hidden',
            left: 0,
            '-webkit-overflow-scrolling': 'touch',
            top: 0,
            width: '100%'
        }
    }];
};

var layout$10 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$14);
});

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$6 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$8({}, scope + '.pe-dialog', {
        '&.pe-dialog--backdrop': {
            'background-color': config$$1['color_' + tint + '_backdrop_background']
        },
        ' .pe-dialog__content': {
            'background-color': config$$1['color_' + tint + '_content_background']
        },
        ' .pe-dialog__header .pe-dialog__title': {
            'color': config$$1['color_' + tint + '_title_text']
        },
        ' .pe-dialog__body': {
            'color': config$$1['color_' + tint + '_body_text']
        },
        '&.pe-dialog--overflow-top .pe-dialog__body': {
            'border-top-color': config$$1['color_' + tint + '_body_border']
        },
        '&.pe-dialog--overflow-bottom .pe-dialog__body': {
            'border-bottom-color': config$$1['color_' + tint + '_body_border']
        }
    })];
};

var createStyles$15 = function createStyles(config$$1) {
    return [style$6(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$6(config$$1, 'dark', ' '),
        // has dark theme
        style$6(config$$1, 'dark', '&')]
    }];
};

var color$5 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$15);
});

var themeConfigFn$8 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].dialog;
var config$9 = themeConfigFn$8 ? themeConfigFn$8(componentConfig$6) : componentConfig$6;
var id$9 = 'pe-dialog';

styler.add(id$9, layout$10(config$9), color$5(config$9));

var _extends$10 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$10 = {
    block: 'pe-dialog',
    visible: 'pe-dialog--visible',
    body: 'pe-dialog__body',
    fullscreen: 'pe-dialog--fullscreen',
    content: 'pe-dialog__content',
    header: 'pe-dialog__header',
    footer: 'pe-dialog__footer',
    footerHigh: 'pe-dialog__footer--high',
    title: 'pe-dialog__title',
    actions: 'pe-dialog__actions',
    hasBackdrop: 'pe-dialog--backdrop',
    hasTopOverflow: 'pe-dialog--overflow-top',
    hasBottomOverflow: 'pe-dialog--overflow-bottom',
    menuContent: 'pe-menu__content'
};

var SCROLL_WATCH_TIMER = 150;

var updateScrollState = function updateScrollState(ctrl) {
    var scroller = ctrl.scrollEl;
    if (!scroller) {
        return;
    }
    ctrl.topOverflow = scroller.scrollTop > 0;
    ctrl.bottomOverflow = scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0;
};

var updateFooterState = function updateFooterState(ctrl) {
    var footerEl = ctrl.footerEl;
    if (footerEl) {
        var style = window.getComputedStyle(footerEl);
        var height = footerEl.getBoundingClientRect().height;
        var minHeight = parseInt(style.minHeight, 10);
        if (height > minHeight) {
            footerEl.classList.add(CSS_CLASSES$10.footerHigh);
        } else {
            footerEl.classList.remove(CSS_CLASSES$10.footerHigh);
        }
    }
};

var show = function show(ctrl, opts) {
    var id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return transition$1.show(_extends$10({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES$10.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = true;
        if (ctrl.didShow) {
            // notify multiple
            ctrl.didShow(id);
            // this will call opts.didShow
        }
    });
};

var hide = function hide(ctrl, opts) {
    var id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return transition$1.hide(_extends$10({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES$10.visible
    })).then(function () {
        dialog.remove(id);
        ctrl.isTransitioning = false;
        ctrl.visible = false;
        if (ctrl.didHide) {
            // notify multiple
            ctrl.didHide(id);
            // this will call opts.didHide
        }
        setTimeout(__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw, 0); // removes remainder of drawn component
    });
};

var createViewContent = function createViewContent(ctrl, opts) {
    // if flex "self-stretch" is not supported, calculate the maximum height
    var style = {};
    var bodyOpts = opts.body || opts.menu;

    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$10.body,
        style: style,
        config: function config$$1(el, inited) {
            if (inited) {
                return;
            }
            ctrl.scrollEl = el;
        },
        onscroll: function onscroll() {
            ctrl.isScrolling = true;
            updateScrollState(ctrl);

            clearTimeout(ctrl.scrollWatchId);
            ctrl.scrollWatchId = setTimeout(function () {
                ctrl.isScrolling = false;
            }, SCROLL_WATCH_TIMER);
        }
    }, bodyOpts);
};

var createView$10 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var bodyOpts = opts.body || opts.menu;
    var updateContentOnScroll = opts.updateContentOnScroll || false;
    var ignoreContent = !updateContentOnScroll && ctrl.isScrolling;
    var tag = opts.tag || 'form';

    var update = function update() {
        updateScrollState(ctrl);
        updateFooterState(ctrl);
        __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
    };

    var props = _extends$10({}, {
        class: [CSS_CLASSES$10.block, opts.fullscreen ? CSS_CLASSES$10.fullscreen : null, opts.backdrop ? CSS_CLASSES$10.hasBackdrop : null, ctrl.topOverflow || opts.borders ? CSS_CLASSES$10.hasTopOverflow : null, ctrl.bottomOverflow || opts.borders ? CSS_CLASSES$10.hasBottomOverflow : null, ctrl.visible ? CSS_CLASSES$10.visible : null, opts.class].join(' '),
        id: opts.id || '',
        config: function config$$1(el, inited, context, vdom) {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;

            var cleanup = function cleanup() {
                events.unsubscribe('resize', update);
                events.unsubscribe('keydown', handleEscape);
            };

            var handleEscape = function handleEscape(e) {
                if (opts.fullscreen || opts.modal) return;
                if (e.which === 27) {
                    cleanup();
                    hide(ctrl, _extends$10({}, opts, { hideDelay: 0 }));
                }
            };

            // resize: update scroll state ('overflow' borders)
            events.subscribe('resize', update);
            events.subscribe('keydown', handleEscape);

            context.onunload = function () {
                cleanup();
            };

            updateScrollState(ctrl);
            updateFooterState(ctrl);

            show(ctrl, opts).then(function () {
                updateScrollState(ctrl);
                updateFooterState(ctrl);
                if (ctrl.topOverflow || ctrl.bottomOverflow) {
                    setTimeout(__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw, 0);
                }
            });
        },
        // click backdrop: close dialog
        onclick: function onclick(e) {
            if (e.target !== ctrl.el) {
                return;
            }
            if (opts.modal) {
                // not allowed
                return;
            }
            if (!ctrl.isTransitioning) {
                hide(ctrl, _extends$10({}, opts, { hideDelay: 0 }));
            }
        }
    }, opts.formOptions ? opts.formOptions : null);

    var body = bodyOpts ? ignoreContent ? {
        subtree: 'retain'
    } : createViewContent(ctrl, opts) : null;

    var content = __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: [CSS_CLASSES$10.content, opts.menu ? CSS_CLASSES$10.menuContent : null].join(' ')
    }, [opts.fullscreen ? null : __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$2, {
        z: ctrl.z,
        animated: true
    }), opts.fullscreen ? null : opts.title ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$10.header,
        config: function config$$1(el) {
            ctrl.headerHeight = el.scrollHeight;
        }
    }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$10.title }, opts.title)]) : null, body, opts.fullscreen ? null : opts.footer ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$10.footer,
        config: function config$$1(el, inited) {
            ctrl.footerHeight = el.scrollHeight;
            if (inited) {
                return;
            }
            ctrl.footerEl = el;
        }
    }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$10.actions }, opts.footer)]) : null]);
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var component$12 = {
    controller: function controller() {
        var instanceData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        // instanceData contains {id, opts}
        var opts = instanceData.opts || {};
        var z = opts.z !== undefined ? opts.z : 3; // shadow depth
        return _extends$10({}, instanceData, {
            instanceId: instanceData.instanceId,
            z: z,
            scrollEl: null,
            footerEl: null,
            topOverflow: false,
            bottomOverflow: false,
            scrollWatchId: 0,
            isScrolling: false,
            headerHeight: 0,
            footerHeight: 0,
            el: null,
            visible: false,
            isTransitioning: false
        });
    },
    view: function view(ctrl, instanceData) {
        // instanceData contains {id, opts}
        var opts = typeof instanceData.opts === 'function' ? instanceData.opts() : instanceData.opts;
        if (instanceData.hide && !ctrl.isTransitioning) {
            hide(ctrl, opts);
        }
        return createView$10(ctrl, opts);
    }
};

var dialog = multiple({
    instance: component$12,
    defaultId: 'default_dialog',
    tag: '.pe-dialog__holder',
    noneTag: 'span.pe-dialog__placeholder',
    bodyShowClass: 'pe-dialog--open'
});

var rgba$6 = common$1.rgba;

var componentConfig$7 = {
    size_regular: 7 * common$1.grid_unit_component,
    size_mini: 5 * common$1.grid_unit_component,
    padding_regular: 2 * common$1.grid_unit_component,

    color_light_background: rgba$6(common$1.color_primary),
    color_light_text: rgba$6(common$1.color_primary_foreground),

    color_dark_background: rgba$6(common$1.color_primary),
    color_dark_text: rgba$6(common$1.color_primary_foreground)
};

var createStyles$16 = function createStyles(config$$1) {
    return [{
        '.pe-button--fab': [mixin.vendorize({
            'user-select': 'none'
        }, common$1.prefixes_user_select), {
            display: 'inline-block',
            position: 'relative',
            outline: 'none',
            cursor: 'pointer',
            width: config$$1.size_regular + 'px',
            height: config$$1.size_regular + 'px',
            padding: config$$1.padding_regular + 'px',
            'border-radius': '50%',
            border: 'none',

            '&.pe-button--fab-mini': {
                width: config$$1.size_mini + 'px',
                height: config$$1.size_mini + 'px',
                padding: (config$$1.size_mini - common$1.unit_icon_size) / 2 + 'px'
            },

            ' .pe-button__content': {
                padding: 0,
                'border-radius': 'inherit'
            },

            ' .pe-ripple': {
                'border-radius': 'inherit'
            },

            ' .pe-button__wash': [mixin.vendorize({
                transition: 'background-color ' + common$1.animation_duration + ' ease-in-out'
            }, common$1.prefixes_transition), {
                'border-radius': 'inherit',
                'pointer-events': 'none',
                'background-color': 'transparent'
            }]
        }]
    }];
};

var layout$11 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$16);
});

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$7 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$9({}, scope + '.pe-button.pe-button--fab', {
        'background-color': config$$1['color_' + tint + '_background'],
        color: config$$1['color_' + tint + '_text'],

        ' .pe-button__content': {
            background: 'transparent'
        }
    })];
};

var createStyles$17 = function createStyles(config$$1) {
    return [style$7(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$7(config$$1, 'dark', ' '),
        // has dark theme
        style$7(config$$1, 'dark', '&')]
    }];
};

var color$6 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$17);
});

var themeConfigFn$9 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].fab;
var config$10 = themeConfigFn$9 ? themeConfigFn$9(componentConfig$7) : componentConfig$7;
var id$10 = 'pe-fab';

styler.add(id$10, layout$11(config$10), color$6(config$10));

var _extends$11 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$11 = {
    block: 'pe-button--fab',
    mini: 'pe-button--fab-mini'
};

var createView$11 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$11, _extends$11({}, opts, {
        parentClass: [CSS_CLASSES$11.block, opts.mini ? CSS_CLASSES$11.mini : null].join(' '),
        raised: true,
        ripple: {
            center: true,
            opacityDecayVelocity: 0.24
        },
        shadow: {
            increase: 5
        },
        ink: true,
        wash: true,
        animateOnTap: true
    }));
};

var component$13 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$11(ctrl, opts);
    }
};

var margin_side = 2 * common$1.grid_unit_component - 12; // (buttonSize - iconSize) / 2 = (48 - 24) / 2
var height_desktop = common$1.grid_unit_component * 8; // 64
var height_mobile_portrait = common$1.grid_unit_component * 7; // 56
var height_mobile_landscape = common$1.grid_unit_component * 6; // 48

var componentConfig$8 = {
    margin_side: margin_side,
    indent: common$1.unit_indent,
    transition_duration: common$1.animation_duration,
    font_size: common$1.font_size_title,
    line_height: common$1.line_height,

    height_desktop: height_desktop,
    height_mobile_portrait: height_mobile_portrait,
    height_mobile_landscape: height_mobile_landscape,

    height_normal: height_desktop,
    height_medium_tall: 2 * height_desktop,
    height_tall: 3 * height_desktop,
    height_narrow: height_mobile_portrait,
    height_narrow_medium_tall: 112,
    height_narrow_tall: 168,

    color_light_text: common$1.rgba(common$1.color_light_foreground, common$1.blend_light_text_primary),
    color_dark_text: common$1.rgba(common$1.color_dark_foreground, common$1.blend_dark_text_primary)
};

var createStyles$18 = function createStyles(config$$1) {
    return [{
        '.pe-toolbar': [
        // use hardware-acceleration
        mixin.vendorize({
            transform: 'translate3d(0,0,0)'
        }, common$1.prefixes_transform), {
            display: 'block',
            position: 'relative',
            height: config$$1.height_normal + 'px',
            'font-size': config$$1.font_size + 'px',
            'line-height': config$$1.line_height + 'em',
            'background-color': '#CFD8DC', // just a default color, will normally be overridden

            '&.pe-header--animated': mixin.defaultTransition('height', config$$1.transition_duration, 'ease-in'),

            '&.pe-header--medium-tall': {
                height: config$$1.height_medium_tall + 'px'
            },

            '&.pe-header--tall': {
                height: config$$1.height_tall + 'px'
            },

            '&.pe-toolbar--narrow': {
                height: config$$1.height_narrow + 'px',

                ' .pe-toolbar__bar': {
                    height: config$$1.height_narrow + 'px',
                    padding: 0
                }
            },

            '&.pe-toolbar--narrow.pe-header--medium-tall': {
                height: config$$1.height_narrow_medium_tall + 'px'
            },

            '&.pe-toolbar--narrow.pe-header--tall': {
                height: config$$1.height_narrow_tall + 'px'
            },

            '&.pe-header--tall .pe-toolbar__bar--middle': mixin.vendorize({
                transform: 'translateY(100%)'
            }, common$1.prefixes_transform),

            ' .pe-toolbar__bar': [flex$1.layoutCenter, flex$1.layoutHorizontal, {
                '> *:not(.disabled)': {
                    // make elements (e.g. buttons) respond to mouse/touch events
                    'pointer-events': 'auto'
                }
            }, {
                '> :first-child': {
                    'margin-left': config$$1.margin_side + 'px'
                }
            }, {
                '> :last-child': {
                    'margin-right': config$$1.margin_side + 'px'
                }
            }, {
                ' .pe-button--icon + span, .pe-button--icon + .pe-title': {
                    'margin-left': config$$1.indent - config$$1.margin_side - common$1.grid_unit_icon_button + 'px'
                }
            }, {
                '> span, > .pe-title': [mixin.ellipsis(1, common$1.line_height, 'em'), mixin.vendorize({
                    'transform-origin': 'left 50%'
                }, common$1.prefixes_transform), {
                    'line-height': common$1.line_height + 'em',
                    'word-break': 'break-all'
                }]
            }, {
                '> span:first-child, .pe-toolbar__title--indent': [mixin.ellipsis(1, common$1.line_height, 'em'), {
                    'margin-left': config$$1.indent + 'px'
                }]
            }, {
                width: '100%',
                position: 'absolute',
                height: config$$1.height_normal + 'px',
                'pointer-events': 'none',

                ' .pe-fit': [mixin.fit(), {
                    width: 'auto',
                    margin: 0,

                    '.bottom': {
                        top: 'auto'
                    }
                }],
                ' .pe-header': mixin.ellipsis(1, common$1.line_height, 'em'),

                '&.pe-toolbar__bar--top': {
                    'z-index': 3
                },
                '&.pe-toolbar__bar--middle': {
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    left: 0,
                    'z-index': 2
                },
                '&.pe-toolbar__bar--bottom': {
                    position: 'absolute',
                    right: 0,
                    bottom: 0,
                    left: 0,
                    'z-index': 1
                }
            }]
        }]
    }];
};

var layout$12 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$18);
});

function _defineProperty$10(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$8 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$10({}, scope + '.pe-toolbar', {
        color: config$$1['color_' + tint + '_text']
    })];
};

var createStyles$19 = function createStyles(config$$1) {
    return [style$8(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$8(config$$1, 'dark', ' '),
        // has dark theme
        style$8(config$$1, 'dark', '&')]
    }];
};

var color$7 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$19);
});

var themeConfigFn$10 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].toolbar;
var config$11 = themeConfigFn$10 ? themeConfigFn$10(componentConfig$8) : componentConfig$8;
var id$11 = 'pe-toolbar';

styler.add(id$11, layout$12(config$11), color$7(config$11));

var CSS_CLASSES$13 = {
    block: 'pe-toolbar',
    bar: 'pe-toolbar__bar',
    topBar: 'pe-toolbar__bar--top',
    middleBar: 'pe-toolbar__bar--middle',
    bottomBar: 'pe-toolbar__bar--bottom',
    animated: 'pe-header--animated',
    mediumTall: 'pe-header--medium-tall',
    tall: 'pe-header--tall'
};

var barWrapper = function barWrapper(className, content) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: [CSS_CLASSES$13.bar, className].join(' ')
    }, content);
};

var bar = function bar() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var bars = [];
    if (opts.content) {
        bars.push(barWrapper(CSS_CLASSES$13.topBar, opts.content));
    } else {
        if (opts.topBar) {
            bars.push(barWrapper(CSS_CLASSES$13.topBar, opts.topBar));
        }
        if (opts.middleBar) {
            bars.push(barWrapper(CSS_CLASSES$13.middleBar, opts.middleBar));
        }
        if (opts.bottomBar) {
            bars.push(barWrapper(CSS_CLASSES$13.bottomBar, opts.bottomBar));
        }
    }
    return bars;
};

var modeClasses$1 = {
    'medium-tall': CSS_CLASSES$13.mediumTall,
    tall: CSS_CLASSES$13.tall
};

var classForMode$1 = function classForMode() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'standard';

    return mode === 'standard' ? '' : modeClasses$1[mode];
};

var createView$13 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES$13.block, CSS_CLASSES$13.animated, classForMode$1(opts.mode), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var content = bar(opts);
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var component$17 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$13(ctrl, opts);
    }
};

var componentConfig$9 = {
    box_shadow: 'inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4)',
    box_shadow_height: 6
};

var createStyles$20 = function createStyles(config$$1) {
    return [{
        '.pe-header-panel': {
            position: 'relative',
            overflow: 'hidden',
            height: '100%',

            '&.pe-header-panel--fit': mixin.fit(),

            ' .pe-header-panel__outer-container': [mixin.fit(), flex$1.layoutVertical],
            ' .pe-header-panel__main-container': [flex$1.flex(), {
                position: 'relative',
                'overflow-y': 'auto',
                'overflow-x': 'hidden',
                '-webkit-overflow-scrolling': 'touch'
            }],
            ' .pe-header-panel__header-container': {
                position: 'relative',

                ' .pe-toolbar': {
                    'z-index': 2
                },
                ' .pe-header-panel__drop-shadow': [mixin.vendorize({
                    transition: 'opacity 0.25s'
                }, common$1.prefixes_transition), mixin.vendorize({
                    transform: 'translate3d(0,0,0)'
                }, common$1.prefixes_transform), mixin.vendorize({
                    'box-shadow': config$$1.box_shadow
                }, common$1.prefixes_box_shadow), {
                    opacity: 0,
                    position: 'absolute',
                    top: 'auto',
                    left: 0,
                    right: 0,
                    height: config$$1.box_shadow_height + 'px',
                    'z-index': 1
                }]
            },
            ' .pe-header-panel__outer-container.pe-header-panel--cascaded > .pe-header-panel__header-container > .pe-header-panel__drop-shadow': {
                'opacity': 1
            },
            '&:not(.pe-header-panel--fixed) > .pe-header-panel__outer-container > .pe-header-panel__header-container': {
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,

                ' .pe-header-panel__background-container': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden'
                },
                ' .pe-toolbar__top-bar': {
                    'z-index': 1
                },
                ' .pe-toolbar__bottom-bar': {}
            },
            ':not(.pe-header-panel--fit):not(.pe-header-panel--fixed):not(.pe-header-panel--scroll) > .pe-header-panel__outer-container > .pe-header-panel__header-container': {
                'z-index': common$1.z_header_container
            },
            '.pe-header-panel--fit > .pe-header-panel__outer-container > .pe-header-panel__header-container': {
                'z-index': common$1.z_fixed_header_container
            },
            ' .pe-header-panel__condensed-background': {
                opacity: 0
            },
            ' .pe-header-panel__header-background, .pe-header-panel__condensed-background': [mixin.vendorize({
                'background-size': 'cover'
            }, common$1.prefixes_background_size), {
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                'background-repeat': 'no-repeat',
                'background-position': 'center center'
            }],
            ' .pe-header-panel__media-dimmer': mixin.fit(),

            '&.pe-header-panel--standard': {
                ' .pe-header-panel__drop-shadow': {
                    opacity: 1
                }
            },
            '&.pe-header-panel--seamed': {
                ' .pe-header-panel__drop-shadow': {
                    display: 'none'
                }
            },
            '&.pe-header-panel--scroll': {
                ' .pe-header-panel__main-container': {
                    overflow: 'visible'
                },
                ' .pe-header-panel__outer-container': {
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden',
                    '-webkit-overflow-scrolling': 'touch'
                }
            },
            '&.pe-header-panel--cover': {
                ' .main-panel': {
                    position: 'static'
                },
                ' .pe-header-panel__main-container': mixin.fit(),
                ' .pe-header-panel__drop-shadow': {
                    position: 'static',
                    width: '100%'
                }
            }
        }
    }];
};

var layout$13 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$20);
});

// Does not contain color styles

var themeConfigFn$11 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"]['header-panel'];
var config$12 = themeConfigFn$11 ? themeConfigFn$11(componentConfig$9) : componentConfig$9;
var id$12 = 'pe-header-panel';

styler.add(id$12, layout$13(config$12));

var _extends$12 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$12 = {
    panel: 'pe-header-panel',
    header: 'pe-header',
    dropShadow: 'pe-header-panel__drop-shadow',
    outerContainer: 'pe-header-panel__outer-container',
    headerContainer: 'pe-header-panel__header-container',
    backgroundContainer: 'pe-header-panel__background-container',
    condensedBackground: 'pe-header-panel__condensed-background',
    headerBackground: 'pe-header-panel__header-background',
    mediaDimmer: 'pe-header-panel__media-dimmer',
    mainContainer: 'pe-header-panel__main-container',

    headerAnimated: 'pe-header--animated',
    fixed: 'pe-header-panel--fixed',
    cascaded: 'pe-header-panel--cascaded',
    modeCover: 'pe-header-panel--cover',
    modeScroll: 'pe-header-panel--scroll',
    modeSeamed: 'pe-header-panel--seamed',
    modeStandard: 'pe-header-panel--standard',
    modeTall: 'pe-header-panel--tall',
    modeWaterfallTall: 'pe-header-panel--waterfall-tall',
    modeWaterfall: 'pe-header-panel--waterfall',

    // lookups:
    toolbar: 'pe-toolbar',
    toolbarTopbar: 'pe-toolbar__bar--top',
    headerTall: 'pe-header--tall'
};

var DEFAULT_SHADOW_HEIGTH = 6;
var DEFAULT_HEADER_HEIGHT = 192;
var DEFAULT_CONDENSED_HEADER_HEIGHT = DEFAULT_HEADER_HEIGHT / 3;
var SCROLL_WATCH_TIMER$1 = 150;

var scroller = void 0; // keep track of scrolling elements on the page
var scrollPositions = {};

var modeConfigs = {
    shadowAfterScroll: {
        'waterfall': 1,
        'waterfall-tall': 1
    },
    alwaysShadow: {
        'standard': 1,
        'tall': 1
    },
    noShadow: {
        'seamed': 1,
        'cover': 1,
        'scroll': 1
    },
    tallMode: {
        'tall': true,
        'waterfall-tall': true
    },
    outerScroll: {
        'scroll': 1
    }
};

var modeClasses = {
    'cover': CSS_CLASSES$12.modeCover,
    'scroll': CSS_CLASSES$12.modeScroll,
    'seamed': CSS_CLASSES$12.modeSeamed,
    'standard': CSS_CLASSES$12.modeStandard,
    'tall': CSS_CLASSES$12.modeTall,
    'waterfall-tall': CSS_CLASSES$12.modeWaterfallTall,
    'waterfall': CSS_CLASSES$12.modeWaterfall
};

var classForMode = function classForMode() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'standard';

    return modeClasses[mode];
};

var setTransform = document.documentElement.style.transform !== undefined ? function (style, string) {
    style.transform = string;
} : function (style, string) {
    style.webkitTransform = string;
};

var translateY = function translateY(style, y) {
    var t = y === null ? '' : 'translate3d(0, ' + y + 'px, 0)';
    setTransform(style, t);
};

var createHeaderComponent = function createHeaderComponent() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var tall = opts.tall || false;
    var tallClass = opts.tallClass || '';
    var toolbarOpts = opts.toolbar;
    if (toolbarOpts) {
        toolbarOpts.class = [toolbarOpts.class || null, tall ? tallClass : null].join(' ');
        if (!toolbarOpts.topBar) {
            toolbarOpts.topBar = __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div');
        }
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$17, toolbarOpts);
    } else if (opts.content) {
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
            class: [CSS_CLASSES$12.header, opts.class || null, tall ? tallClass : null, opts.animated ? CSS_CLASSES$12.headerAnimated : ''].join(' ')
        }, opts.content);
    } else {
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', opts);
    }
};

var createViewHeader = function createViewHeader(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var initHeaderContainer = function initHeaderContainer(headerContainer, inited) {
        if (inited) {
            return;
        }
        ctrl.headerContainerElem = headerContainer;
    };
    var header = opts.header ? createHeaderComponent(_extends$12({}, opts.header, ctrl.headerConfig)) : null;
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$12.headerContainer,
        config: initHeaderContainer
    }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$12.backgroundContainer
    }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$12.condensedBackground }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$12.headerBackground }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$12.mediaDimmer })]), header, ctrl.mode === 'seamed' || ctrl.shadow === false ? null : __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$12.dropShadow })]);
};

var createViewContent$1 = function createViewContent(ctrl, scrollConfig) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var initMainContainer = function initMainContainer(mainContainer, inited) {
        if (inited) {
            return;
        }
        if (scrollConfig.main) {
            ctrl.scrollerElem = mainContainer;
        }
    };
    return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$12.mainContainer,
        config: initMainContainer,
        onscroll: function onscroll(e) {
            scrollConfig.main(e);
            events.emit('scroll', e);
            ctrl.storeScrollPosition(e.target.scrollTop);
        }
    }, opts.content ? opts.content : null)];
};

var createView$12 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.header = opts.header || {};
    opts.configs = opts.configs || [];
    ctrl.init(ctrl);

    var updateContentOnScroll = opts.updateContentOnScroll || false;
    var ignoreContent = !updateContentOnScroll && ctrl.isScrolling;
    var scrollerType = modeConfigs.outerScroll[ctrl.mode] ? 'outer' : 'main';
    var handleScroll = ctrl.handleScroll.bind(ctrl);
    var header = createViewHeader(ctrl, opts);
    var tag = opts.tag || 'div';

    var scrollConfig = {};
    scrollConfig[scrollerType] = handleScroll;

    var initOuterContainer = function initOuterContainer(outerContainer, inited) {
        var headerElem = outerContainer.querySelector('.' + CSS_CLASSES$12.header) || outerContainer.querySelector('.' + CSS_CLASSES$12.toolbar);
        if (!headerElem) {
            return;
        }
        if (inited && ctrl.headerElem) {
            return;
        }
        var headerContainer = outerContainer.querySelector('.' + CSS_CLASSES$12.headerContainer);
        var topBarElem = headerContainer.querySelector('.' + CSS_CLASSES$12.toolbarTopbar);
        var headerBg = headerContainer.querySelector('.' + CSS_CLASSES$12.headerBackground);
        var condensedHeaderBg = headerContainer.querySelector('.' + CSS_CLASSES$12.condensedBackground);

        ctrl.outerContainerElem = outerContainer;
        ctrl.headerElem = headerElem;
        ctrl.headerTopBarElem = topBarElem;
        ctrl.headerBg = headerBg;
        ctrl.condensedHeaderBg = condensedHeaderBg;

        if (!opts.animated) {
            ctrl.setHeight(headerContainer.clientHeight);
        }
        if (scrollConfig.outer) {
            ctrl.scrollerElem = outerContainer;
        }

        ctrl.restoreScrollPosition();
    };

    var props = _extends$12({}, {
        class: [CSS_CLASSES$12.panel, ctrl.fixed ? CSS_CLASSES$12.fixed : null, classForMode(ctrl.mode), opts.class].join(' '),
        id: opts.id || '',
        config: function config$$1(el, inited) {
            if (inited) {
                return;
            }
            ctrl.headerPanelElem = el;
        }
    });

    var content = __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$12.outerContainer,
        config: initOuterContainer,
        onscroll: function onscroll(e) {
            scrollConfig.outer(e);
            events.emit('scroll', e);
        }
    }, [header, ignoreContent ? {
        subtree: 'retain'
    } : createViewContent$1(ctrl, scrollConfig, opts)]);
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var component$15 = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var ctrl = void 0,
            mode = void 0,
            y = void 0,
            scrolled = void 0,
            prevScrollTop = void 0,
            headerMargin = void 0,
            headerHeight = void 0;

        if (opts.mode) {
            mode = opts.mode;
        } else if (opts.header && opts.header.toolbar) {
            mode = opts.header.toolbar.mode;
        } else if (opts.header && opts.header.content) {
            mode = opts.header.mode;
        }
        mode = mode || 'standard';
        var tall = modeConfigs.tallMode[mode] || false;
        var tallClass = opts.tallClass || CSS_CLASSES$12.headerTall;
        var animated = opts.animated || false;
        var fixed = opts.fixed || false;
        var condenses = opts.condenses || false;
        var scrollAwayTopbar = opts.scrollAwayTopbar || false;
        var noReveal = opts.noReveal || false;
        var keepCondensedHeader = opts.keepCondensedHeader || false;
        var noDissolve = opts.noDissolve || false;
        var backgroundScrollSpeed = opts.backgroundScrollSpeed !== undefined ? opts.backgroundScrollSpeed : 0.5;
        y = 0;
        scrolled = false;
        prevScrollTop = 0;
        // defaults, finally set with setHeight
        var shadowHeight = DEFAULT_SHADOW_HEIGTH;
        headerHeight = (opts.headerHeight || DEFAULT_HEADER_HEIGHT) + shadowHeight;
        var condensedHeaderHeight = (opts.condensedHeaderHeight || DEFAULT_CONDENSED_HEADER_HEIGHT) + shadowHeight;
        headerMargin = headerHeight - condensedHeaderHeight;

        var handleScrollFns = {
            standard: function standard() {
                //
            },
            fixed: function fixed() {
                var isScrolled = ctrl.scrollerElem.scrollTop > 0;
                ctrl.showShadow(isScrolled);
                scrolled = isScrolled;
            },
            animated: function animated() {
                var isScrolled = ctrl.scrollerElem.scrollTop > 0;
                if (isScrolled !== scrolled) {
                    var headerElem = ctrl.headerElem;
                    if (headerElem && tall) {
                        headerElem.classList[isScrolled ? 'remove' : 'add'](tallClass);
                    }
                    ctrl.showShadow(isScrolled);
                    scrolled = isScrolled;
                }
            },
            dynamicHeader: function dynamicHeader() {
                var sy = void 0,
                    cascaded = false,
                    sTop = void 0;

                if (!ctrl.scrollInited && opts.initialScrollPosition) {
                    sTop = opts.initialScrollPosition;
                } else {
                    sTop = ctrl.scrollerElem.scrollTop;
                }

                if (!ctrl.scrollInited && opts.initialPositionFixed) {
                    prevScrollTop = sTop;
                    y = 0;
                    return;
                }

                if (sTop < headerMargin) {
                    sy = sTop;
                } else {
                    sy = Math.min(keepCondensedHeader ? headerMargin : headerHeight, Math.max(0, noReveal || keepCondensedHeader ? sTop : y + sTop - prevScrollTop));
                    if (condenses && prevScrollTop >= sTop && sTop > headerMargin) {
                        sy = Math.max(sy, headerMargin);
                    }
                }
                if (sTop > 0) {
                    ctrl.transformHeader(sy);
                } else if (p.isTouch) {
                    ctrl.enlargeImage(sy);
                }
                if (!modeConfigs.noShadow[opts.mode]) {
                    if (sTop > sy) {
                        cascaded = true;
                    }
                    ctrl.showShadow(cascaded);
                }
                y = sy;
                prevScrollTop = Math.max(sTop, 0);
            }
        };

        var handleScrollFn = void 0;
        if (animated) {
            handleScrollFn = handleScrollFns.animated;
        } else if (mode === 'standard') {
            handleScrollFn = handleScrollFns.standard;
        } else if (fixed) {
            handleScrollFn = handleScrollFns.fixed;
        } else {
            handleScrollFn = handleScrollFns.dynamicHeader;
        }

        return {
            headerPanelElem: undefined,
            scrollerElem: undefined,
            outerContainerElem: undefined,
            headerContainerElem: undefined,
            headerTopBarElem: undefined,
            headerElem: undefined,
            headerBg: undefined,
            condensedHeaderBg: undefined,
            mode: mode,
            fixed: fixed,
            shadow: opts.shadow !== undefined && !opts.shadow ? false : true,
            scrollWatchId: 0,
            isScrolling: false,
            scrollInited: false,
            headerConfig: {
                tall: tall,
                tallClass: tallClass,
                animated: animated,
                fixed: fixed
            },

            init: function init(controller) {
                ctrl = controller;
            },

            setHeight: function setHeight(h) {
                if (opts.headerHeight === undefined) {
                    headerHeight = h + shadowHeight;
                    headerMargin = headerHeight - condensedHeaderHeight;
                }
                if (!fixed) {
                    var mainContainer = ctrl.outerContainerElem.querySelector('.' + CSS_CLASSES$12.mainContainer);
                    mainContainer.style.paddingTop = h + 'px';
                }
                if (noReveal) {
                    ctrl.showShadow(false);
                }
            },

            handleScroll: function handleScroll(e) {
                if (e) {
                    // this is a real scroll event
                    // instead of a programmatic call
                    ctrl.isScrolling = true;
                    scroller = ctrl;
                    clearTimeout(ctrl.scrollWatchId);
                    ctrl.scrollWatchId = setTimeout(function () {
                        ctrl.isScrolling = false;
                        scroller = undefined;
                    }, SCROLL_WATCH_TIMER$1);
                }

                if (mode === 'scroll') {
                    return;
                }
                if (modeConfigs.alwaysShadow[mode]) {
                    ctrl.showShadow(true);
                }

                handleScrollFn();
                ctrl.scrollInited = true;

                if (e && opts.scroll) {
                    opts.scroll(e);
                }
            },

            condenseHeader: function condenseHeader(hy) {
                var reset = hy === null;

                // adjust top bar in core-header so the top bar stays at the top
                if (!scrollAwayTopbar) {
                    if (ctrl.headerTopBarElem) {
                        translateY(ctrl.headerTopBarElem.style, Math.min(hy, headerMargin));
                    }
                }

                // transition header bg
                var hbg = ctrl.headerBg.style;
                if (hbg) {
                    if (!noDissolve) {
                        hbg.opacity = reset ? '' : (headerMargin - hy) / headerMargin;
                    }

                    // adjust header bg so it stays at the center
                    translateY(hbg, reset ? null : hy * backgroundScrollSpeed);

                    // transition condensed header bg
                    if (!noDissolve) {
                        var chbg = ctrl.condensedHeaderBg.style;
                        chbg.opacity = reset ? '' : hy / headerMargin;
                        // adjust condensed header bg so it stays at the center
                        translateY(chbg, reset ? null : hy * backgroundScrollSpeed);
                    }
                }
            },

            transformHeader: function transformHeader(hy) {
                if (hy < 0) {
                    return;
                }
                translateY(ctrl.headerContainerElem.style, -hy);
                if (condenses) {
                    ctrl.condenseHeader(hy);
                }
                if (opts.transform) {
                    opts.transform({
                        y: hy,
                        height: headerHeight,
                        condensedHeight: condensedHeaderHeight
                    });
                }
            },

            enlargeImage: function enlargeImage(hy) {
                ctrl.headerBg.style.height = 100 / headerHeight * (headerHeight + Math.abs(hy / 2)) + '%';
            },

            showShadow: function showShadow(cascaded) {
                if (modeConfigs.alwaysShadow[mode]) {
                    cascaded = true;
                }
                ctrl.outerContainerElem.classList[cascaded ? 'add' : 'remove'](CSS_CLASSES$12.cascaded);
            },

            storeScrollPosition: function storeScrollPosition(scrollTop) {
                if (opts.restoreScrollPositionId) {
                    scrollPositions[opts.restoreScrollPositionId] = scrollTop;
                }
            },

            restoreScrollPosition: function restoreScrollPosition() {
                if (opts.restoreScrollPositionId) {
                    var scrollTop = scrollPositions[opts.restoreScrollPositionId];
                    if (scrollTop !== undefined) {
                        var restore = function restore() {
                            return ctrl.scrollerElem.scrollTop = scrollTop;
                        };
                        restore();
                        setTimeout(restore, 0);
                    }
                }
            }
        };
    },

    view: function view(ctrl, opts) {
        if (scroller && scroller !== ctrl) {
            // if we are scrolling,
            // don't render other header-panels
            return {
                subtree: 'retain'
            };
        } else {
            return createView$12(ctrl, opts);
        }
    }
};

var rgba$7 = common$1.rgba;

var componentConfig$10 = {
    padding: common$1.grid_unit_component,
    padding_compact: common$1.grid_unit_component / 2,
    border_width_stacked: 1,
    border_width_bordered: 1,

    color_light_border: rgba$7(common$1.color_light_foreground, common$1.blend_light_border_light),
    color_dark_border: rgba$7(common$1.color_dark_foreground, common$1.blend_dark_border_light)
};

var borderStyle = function borderStyle(config$$1) {
    return mixin.hairline('border-bottom'), {
        'border-style': 'none none solid none',
        'border-width': config$$1.border_width_bordered + 'px'
    };
};

var createStyles$21 = function createStyles(config$$1) {
    return [{
        '.pe-list': {
            padding: config$$1.padding + 'px 0',

            '&.pe-list--header': {
                'padding-top': 0
            },

            '&.pe-list--compact': {
                padding: config$$1.padding_compact + 'px 0'
            },

            '& + &': [mixin.hairline('border-top'), {
                'border-style': 'solid none none none',
                'border-width': config$$1.border_width_stacked + 'px'
            }],

            '&.pe-list--borders': {
                ' .pe-list-tile:not(.pe-list__header)': {
                    '&:not(:last-child)': {
                        '&': borderStyle(config$$1)
                    }
                }
            },

            '&.pe-list--borders-indented': {
                'border-top': 'none',

                ' .pe-list-tile:not(.pe-list__header)': {
                    '&:not(:last-child)': {
                        ' .pe-list-tile__content:not(.pe-list-tile__content--front)': borderStyle(config$$1)
                    }
                }
            }
        }
    }];
};

var layout$14 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$21);
});

function _defineProperty$11(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$9 = function style(config$$1, tint) {
    var _ref;

    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [(_ref = {}, _defineProperty$11(_ref, scope + '.pe-list', {
        '&.pe-list--borders': {
            ' .pe-list-tile:not(.pe-list__header)': {
                '&:not(:last-child)': {
                    'border-color': config$$1['color_' + tint + '_border']
                }
            }
        },

        '&.pe-list--borders-indented': {
            ' .pe-list-tile:not(.pe-list__header)': {
                ' .pe-list-tile__content:not(.pe-list-tile__content--front)': {
                    'border-color': config$$1['color_' + tint + '_border']
                }
            }
        }
    }), _defineProperty$11(_ref, ' .pe-list + .pe-list', {
        'border-color': config$$1['color_' + tint + '_border']
    }), _ref)];
};

var createStyles$22 = function createStyles(config$$1) {
    return [style$9(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$9(config$$1, 'dark', ' '),
        // has dark theme
        style$9(config$$1, 'dark', '&')]
    }];
};

var color$8 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$22);
});

var themeConfigFn$12 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].list;
var config$13 = themeConfigFn$12 ? themeConfigFn$12(componentConfig$10) : componentConfig$10;
var id$13 = 'pe-list';

styler.add(id$13, layout$14(config$13), color$8(config$13));

var _extends$13 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$14 = {
    block: 'pe-list',
    header: 'pe-list__header',
    borders: 'pe-list--borders',
    indentedBorders: 'pe-list--borders-indented',
    hasHeader: 'pe-list--header',
    isCompact: 'pe-list--compact',
    isHoverable: 'pe-list--hoverable',
    isSelectable: 'pe-list--selectable'
};

var createView$14 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES$14.block, opts.borders ? CSS_CLASSES$14.borders : null, opts.indentedBorders ? CSS_CLASSES$14.indentedBorders : null, opts.hoverable ? CSS_CLASSES$14.isHoverable : null, opts.selectable ? CSS_CLASSES$14.isSelectable : null, opts.header ? CSS_CLASSES$14.hasHeader : null, opts.compact ? CSS_CLASSES$14.isCompact : null, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var headerOpts = void 0;
    if (opts.header) {
        headerOpts = _extends$13({}, opts.header);
        headerOpts.class = [CSS_CLASSES$14.header, headerOpts.class || null].join(' ');
    }
    var content = [headerOpts ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$7, headerOpts) : null, opts.tiles ? opts.tiles : null];
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var component$18 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$14(ctrl, opts);
    }
};

var componentConfig$11 = {
    sizes: [1, 1.5, 2, 3, 4, 5, 6, 7],
    min_size: 1.5,
    max_size_small_screen: 5,
    size_factor: common$1.grid_unit_menu,
    border_radius: common$1.unit_block_border_radius,

    color_light_background: common$1.rgba(common$1.color_light_background),
    color_dark_background: common$1.rgba(common$1.color_dark_background)
};

function _defineProperty$12(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var unifySize$1 = function unifySize(config$$1, size) {
    return size < config$$1.min_size ? config$$1.min_size : size;
};

var widthClass$1 = function widthClass(config$$1, size) {
    var sizeStr = size.toString().replace('.', '-');
    return 'pe-menu--width-' + sizeStr;
};

var widthStyle = function widthStyle(config$$1, size) {
    var s = unifySize$1(config$$1, size);
    return _defineProperty$12({}, '&.' + widthClass$1(config$$1, s), {
        width: config$$1.size_factor * s + 'px',
        'max-width': '100%'
    });
};

var createStyles$23 = function createStyles(config$$1) {
    return [{
        '.pe-menu': [
        // transition-duration set in js
        mixin.vendorize({
            'transition-timing-function': 'ease-out'
        }, common$1.prefixes_transition), mixin.vendorize({
            'transition-property': 'opacity'
        }, common$1.prefixes_transition), config$$1.sizes.map(function (size) {
            return widthStyle(config$$1, size);
        }), _defineProperty$12({
            'z-index': common$1.z_menu,
            opacity: 0,
            position: 'absolute',
            width: '100%',
            'min-width': common$1.grid_unit_menu * config$$1.min_size + 'px',

            '&.pe-menu--width-auto': {
                width: 'auto'
            },

            '&.pe-menu--visible': {
                opacity: 1
            },

            '&.pe-menu--permanent': {
                position: 'relative',
                opacity: 1
            },

            ' .pe-menu__content': {
                width: '100%',
                'border-radius': config$$1.border_radius + 'px'
            }

        }, '@media (max-width: ' + common$1.unit_screen_size_large + 'px)', {
            'max-width': config$$1.max_size_small_screen * common$1.grid_unit_menu + 'px'
        })]

    }];
};

var layout$15 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$23);
});

function _defineProperty$13(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$10 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$13({}, scope + '.pe-menu', {
        ' .pe-menu__content': {
            'background-color': config$$1['color_' + tint + '_background']
        }
    })];
};

var createStyles$24 = function createStyles(config$$1) {
    return [style$10(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$10(config$$1, 'dark', ' '),
        // has dark theme
        style$10(config$$1, 'dark', '&')]
    }];
};

var color$9 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$24);
});

var themeConfigFn$13 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].menu;
var config$14 = themeConfigFn$13 ? themeConfigFn$13(componentConfig$11) : componentConfig$11;
var id$14 = 'pe-menu';

styler.add(id$14, layout$15(config$14), color$9(config$14));

var _extends$14 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$15 = {
    block: 'pe-menu',
    content: 'pe-menu__content',
    placeholder: 'pe-menu--placeholder',
    visible: 'pe-menu--visible',
    permanent: 'pe-menu--permanent',
    target: 'pe-menu--target',
    width_n: 'pe-menu--width-',
    width_auto: 'pe-menu--width-auto',

    // lookup
    listTile: 'pe-list-tile',
    selectedListTile: 'pe-list-tile--selected'
};

var OFFSET_V = -8;
var DEFAULT_OFFSET_H = 16;
var MIN_SIZE = 1.5;

var positionMenu = function positionMenu(ctrl, opts) {
    if (!opts.target) {
        return;
    }
    var targetEl = document.querySelector('#' + opts.target);
    if (!targetEl) {
        return;
    }
    var offsetH = opts.offset !== undefined ? opts.offset : DEFAULT_OFFSET_H;
    var menuEl = ctrl.el;
    if (!menuEl) {
        return;
    }
    var contentEl = ctrl.contentEl;
    var origin = opts.origin || 'top-left';
    var reposition = opts.reposition === false ? false : true;
    var positionOffset = 0;
    if (reposition) {
        var firstItem = contentEl.querySelectorAll('.' + CSS_CLASSES$15.listTile)[0];
        var selectedItem = contentEl.querySelector('.' + CSS_CLASSES$15.selectedListTile);
        if (firstItem && selectedItem) {
            // calculate v position: menu should shift upward relative to the first item
            var firstItemRect = firstItem.getBoundingClientRect();
            var selectedItemRect = selectedItem.getBoundingClientRect();
            positionOffset = selectedItemRect.top - firstItemRect.top;
        }
        // align to middle of target
        var alignEl = selectedItem || firstItem;
        var alignRect = alignEl.getBoundingClientRect();
        var _targetRect = targetEl.getBoundingClientRect();
        var heightDiff = alignRect.height - _targetRect.height;
        positionOffset += heightDiff / 2;
    }
    var targetRect = targetEl.getBoundingClientRect();
    var parentRect = menuEl.parentNode.getBoundingClientRect();
    var alignLeft = function alignLeft() {
        return menuEl.style.left = targetRect.left - parentRect.left + offsetH + 'px';
    };
    var alignRight = function alignRight() {
        return menuEl.style.right = targetRect.right - parentRect.right + offsetH + 'px';
    };
    var alignTop = function alignTop() {
        return menuEl.style.top = targetRect.top - parentRect.top - positionOffset + OFFSET_V + 'px';
    };
    var alignBottom = function alignBottom() {
        return menuEl.style.bottom = targetRect.bottom - parentRect.bottom - positionOffset + 'px';
    };
    var alignFn = {
        'top-left': function topLeft() {
            return alignTop() && alignLeft();
        },
        'top-right': function topRight() {
            return alignTop() && alignRight();
        },
        'bottom-left': function bottomLeft() {
            return alignBottom() && alignLeft();
        },
        'bottom-right': function bottomRight() {
            return alignBottom() && alignRight();
        }
    };
    alignFn[origin].call();
};

var show$2 = function show(ctrl, opts) {
    ctrl.isTransitioning = true;
    return transition$1.show(_extends$14({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES$15.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = true;
        if (opts.didShow) {
            opts.didShow(opts.id);
        }
    });
};

var hide$2 = function hide(ctrl, opts) {
    ctrl.isTransitioning = true;
    return transition$1.hide(_extends$14({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES$15.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = false;
        if (opts.didHide) {
            opts.didHide(opts.id);
        }
        __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw(); // removes remainder of drawn component
    });
};

var unifySize = function unifySize(size) {
    return size < MIN_SIZE ? MIN_SIZE : size;
};

var widthClass = function widthClass(size) {
    var sizeStr = size.toString().replace('.', '-');
    return CSS_CLASSES$15.width_n + sizeStr;
};

var createView$15 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var listenEl = document.body;
    var activateDismissTap = function activateDismissTap() {
        listenEl.addEventListener('click', handleDismissTap);
    };
    var deActivateDismissTap = function deActivateDismissTap() {
        listenEl.removeEventListener('click', handleDismissTap);
    };
    var handleDismissTap = function handleDismissTap(e) {
        if (e.target === ctrl.el) {
            return;
        }
        deActivateDismissTap();
        if (e.defaultPrevented) {
            // clicked on .pe-menu__content
            hide$2(ctrl, opts);
        } else {
            hide$2(ctrl, _extends$14({}, opts, { hideDelay: 0 }));
        }
    };
    var tag = opts.tag || 'div';
    var props = {
        class: [CSS_CLASSES$15.block, opts.permanent ? CSS_CLASSES$15.permanent : null, opts.target ? CSS_CLASSES$15.target : 'layout center-center', opts.size ? widthClass(unifySize(opts.size)) : null, opts.class].join(' '),

        id: opts.id || '',
        config: function config$$1(el, inited, context, vdom) {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;

            var update = function update() {
                positionMenu(ctrl, opts);
                __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
            };

            var handleEscape = function handleEscape(e) {
                if (e.which === 27) {
                    hide$2(ctrl, _extends$14({}, opts, { hideDelay: 0 }));
                }
            };

            if (!opts.permanent) {
                events.subscribe('resize', update);
                events.subscribe('keydown', handleEscape);
                setTimeout(function () {
                    activateDismissTap();
                    show$2(ctrl, opts);
                }, 0);
            }
            context.onunload = function () {
                events.unsubscribe('resize', update);
                events.unsubscribe('keydown', handleEscape);
                if (!opts.permanent) {
                    deActivateDismissTap();
                }
            };

            positionMenu(ctrl, opts);
        }
    };
    var content = __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$15.content,
        config: function config$$1(el, inited) {
            if (!inited) {
                ctrl.contentEl = el;
            }
        },
        onclick: function onclick(e) {
            e.preventDefault();
        }
    }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$2, {
        z: ctrl.z,
        animated: true
    }), opts.content ? opts.content : null]);
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var component$20 = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var z = opts.z !== undefined ? opts.z : 1;
        return {
            z: z,
            el: null,
            contentEl: null,
            isTransitioning: false,
            visible: opts.permanent || false
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (opts.show && !ctrl.visible) {
            ctrl.visible = true;
        }
        if (ctrl.visible) {
            return createView$15(ctrl, opts);
        } else {
            return __WEBPACK_IMPORTED_MODULE_0_mithril___default()('span', { class: CSS_CLASSES$15.placeholder });
        }
    }
};

// Simple start/stop/pause/resume timer

var Timer = function Timer(callback, delay) {
    var timerId = void 0,
        start = void 0,
        remaining = delay;

    this.stop = function () {
        window.clearTimeout(timerId);
    };

    this.pause = function () {
        window.clearTimeout(timerId);
        remaining -= new Date() - start;
    };

    this.resume = function () {
        start = new Date();
        window.clearTimeout(timerId);
        timerId = window.setTimeout(callback, remaining);
    };

    this.resume();
};

var _extends$15 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$16 = {
    content: 'pe-notification__content',
    title: 'pe-notification__title',
    multilineTitle: 'pe-notification__title--multiline',
    action: 'pe-notification__action',
    horizontal: 'pe-notification--horizontal',
    vertical: 'pe-notification--vertical'
};

var DEFAULT_TIME_OUT = 3;

var pause = function pause(ctrl) {
    ctrl.isPaused = true;
    if (ctrl.timer) {
        ctrl.timer.pause();
    }
};

var unpause = function unpause(ctrl) {
    ctrl.isPaused = false;
    if (ctrl.timer) {
        ctrl.timer.resume();
    }
};

var stopTimer = function stopTimer(ctrl) {
    if (ctrl.timer) {
        ctrl.timer.stop();
    }
};

var show$3 = function show(ctrl, opts) {
    stopTimer(ctrl);
    var id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return transition$1.show(_extends$15({}, opts, ctrl.transitions.show(ctrl, opts))).then(function () {
        ctrl.isTransitioning = false;
        if (ctrl.didShow) {
            // notify multiple
            ctrl.didShow(id);
            // this will call opts.didShow
        }

        // set timer to hide in a few seconds
        var timeout = opts.timeout;
        if (timeout === 0) {
            // do not time out
        } else {
            var timeoutSeconds = timeout !== undefined ? timeout : DEFAULT_TIME_OUT;
            ctrl.timer = new Timer(function () {
                hide$3(ctrl, opts);
            }, timeoutSeconds * 1000);
        }
    });
};

var hide$3 = function hide(ctrl, opts) {
    stopTimer(ctrl);
    var id = ctrl.instanceId;
    ctrl.isTransitioning = true;
    return transition$1.hide(_extends$15({}, opts, ctrl.transitions.hide(ctrl, opts))).then(function () {
        stopTimer(ctrl);
        ctrl.isTransitioning = false;
        if (ctrl.didHide) {
            // notify multiple
            ctrl.didHide(id);
            // this will call opts.didHide
        }
        __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw(); // removes remainder of drawn component
    });
};

var createView$16 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = {
        class: [ctrl.class, opts.layout === 'vertical' ? CSS_CLASSES$16.vertical : CSS_CLASSES$16.horizontal, opts.class].join(' '),
        id: opts.id || '',
        config: function config$$1(el, inited, context, vdom) {
            if (inited) return;
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;

            // container element is used for transitioning the notification
            ctrl.containerEl = document.querySelector(opts.containerSelector || '.pe-notification__holder');
            show$3(ctrl, opts);
        },
        onclick: function onclick(e) {
            e.preventDefault();
        }
    };
    var titleConfig = function titleConfig(el, inited) {
        if (inited) return;
        var height = el.getBoundingClientRect().height;
        var lineHeight = parseInt(window.getComputedStyle(el).lineHeight, 10);
        var paddingTop = parseInt(window.getComputedStyle(el).paddingTop, 10);
        var paddingBottom = parseInt(window.getComputedStyle(el).paddingBottom, 10);
        if (height > lineHeight + paddingTop + paddingBottom) {
            el.classList.add(CSS_CLASSES$16.multilineTitle);
        }
    };
    var title = opts.title;
    var content = __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$16.content
    }, [title ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$16.title,
        config: titleConfig
    }, title) : null, opts.action ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$16.action
    }, [opts.action]) : null]);
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, content);
};

var component$22 = {
    controller: function controller() {
        var instanceData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        // instanceData contains {id, opts}
        return _extends$15({}, instanceData, {
            el: null,
            containerEl: null,
            dismissEl: null,
            isTransitioning: false,
            timer: null,
            isPaused: false
        });
    },
    view: function view(ctrl, instanceData) {
        // instanceData contains {id, opts}
        var opts = typeof instanceData.opts === 'function' ? instanceData.opts() : instanceData.opts;
        if (instanceData.hide && !ctrl.isTransitioning) {
            hide$3(ctrl, opts);
        }
        if (instanceData.pause && !ctrl.isPaused) {
            pause(ctrl, opts);
        } else if (instanceData.unpause && ctrl.isPaused) {
            unpause(ctrl, opts);
        }
        return createView$16(ctrl, opts);
    }
};

var show$4 = function show(ctrl, opts) {
    return {
        el: ctrl.containerEl,
        showDuration: opts.showDuration || .5,
        showDelay: opts.showDelay || 0,
        beforeShow: function beforeShow() {
            return ctrl.containerEl.style.opacity = 0;
        },
        show: function show() {
            return ctrl.containerEl.style.opacity = 1;
        }
    };
};

var hide$4 = function hide(ctrl, opts) {
    return {
        el: ctrl.containerEl,
        hideDuration: opts.hideDuration || .5,
        hideDelay: opts.hideDelay || 0,
        hide: function hide() {
            return ctrl.containerEl.style.opacity = 0;
        }
    };
};

var transitions = {
    show: show$4,
    hide: hide$4
};

var buttonPaddingH = 8; // padding, inner text space

var componentConfig$12 = {
    width: 274,
    minHeight: 80,
    border_radius: common$1.unit_block_border_radius,
    title_padding_h: buttonPaddingH,
    title_single_padding_v: 14,
    title_multi_padding_v: 20,
    side_padding: 24 - buttonPaddingH,
    font_size: 14,
    line_height: 20,

    // switch light and dark: dark on light and light on dark

    color_light_background: common$1.rgba(common$1.color_dark_background, .85),
    color_light_text: common$1.rgba(common$1.color_dark_foreground, common$1.blend_light_dark_primary),

    color_dark_background: common$1.rgba(common$1.color_light_background),
    color_dark_text: common$1.rgba(common$1.color_light_foreground, common$1.blend_light_text_primary)
};

var createStyles$25 = function createStyles(config$$1) {
    return [{
        '.pe-notification__holder': [mixin.fit(), flex$1.layoutCenterCenter, {
            'z-index': common$1.z_notification
        }],
        '.pe-notification': [flex$1.layoutCenter, {
            position: 'relative',

            padding: '0 ' + config$$1.side_padding + 'px',
            margin: '0 auto',
            'border-radius': config$$1.border_radius + 'px',

            ' .pe-notification__content': {
                width: '100%'
            },

            ' .pe-notification__title': {
                'padding': config$$1.title_single_padding_v + 'px ' + config$$1.title_padding_h + 'px',
                'font-size': config$$1.font_size + 'px',
                'line-height': config$$1.line_height + 'px'
            },

            ' .pe-notification__action': {
                ' .pe-button': {
                    margin: 0
                }
            },

            '&.pe-notification--horizontal': {
                ' .pe-notification__content': flex$1.layoutHorizontal,
                ' .pe-notification__title': flex$1.flex(),
                ' .pe-notification__title--multi-line': {
                    'padding-top': config$$1.title_multi_padding_v + 'px',
                    'padding-bottom': config$$1.title_multi_padding_v + 'px'
                },
                ' .pe-notification__action': flex$1.layoutCenter
            },
            '&.pe-notification--vertical': {
                ' .pe-notification__content': flex$1.layoutVertical,
                ' .pe-notification__title': {
                    'padding-bottom': '4px'
                },
                ' .pe-notification__title--multi-line': {
                    'padding-top': config$$1.title_multi_padding_v + 'px'
                },
                ' .pe-notification__action': flex$1.layoutEndJustified
            }
        }],
        '.pe-notification--notification': {
            width: config$$1.width + 'px',
            'min-height': config$$1.minHeight + 'px'
        }
    }];
};

var layout$16 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$25);
});

function _defineProperty$14(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$11 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$14({}, scope + '.pe-notification', {
        color: config$$1['color_' + tint + '_text'],
        background: config$$1['color_' + tint + '_background']
    })];
};

var createStyles$26 = function createStyles(config$$1) {
    return [style$11(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$11(config$$1, 'dark', ' '),
        // has dark theme
        style$11(config$$1, 'dark', '&')]
    }];
};

var color$10 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$26);
});

var themeConfigFn$14 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].notification;
var config$15 = themeConfigFn$14 ? themeConfigFn$14(componentConfig$12) : componentConfig$12;
var id$15 = 'pe-notification-notification';

styler.add(id$15, layout$16(config$15), color$10(config$15));

var notification = multiple({
    instance: component$22,
    class: 'pe-notification pe-notification--notification',
    defaultId: 'default_notification',
    tag: 'div.pe-notification__holder',
    noneTag: 'span.pe-notification__placeholder',
    bodyShowClass: 'pe-notification--open',
    queue: true,
    transitions: transitions
});

var layout$17 = (function (config$$1) {
    return mixin.createStyles(config$$1, function (config$$1) {
        return createStyles$12(config$$1, '.pe-control--radio', 'radio');
    });
});

var createStyles$27 = function createStyles(config$$1) {
    return [style$5(config$$1, 'light', '.pe-control--radio'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$5(config$$1, 'dark', ' '),
        // has dark theme
        style$5(config$$1, 'dark', '&')]
    }];
};

var color$11 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$27);
});

var themeConfigFn$15 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"]['radio-button'];
var config$16 = themeConfigFn$15 ? themeConfigFn$15(selectionControlConfig) : selectionControlConfig;
var id$16 = 'pe-radio-button';

styler.add(id$16, layout$17(config$16), color$11(config$16));

// default icons
var iconOff$1 = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>');
var iconOn$1 = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>');

var theme$1 = {
    iconOff: iconOff$1,
    iconOn: iconOn$1
};

var selectable$1 = function selectable(selected) {
    return !selected;
};

var createView$17 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.theme = theme$1;
    opts.defaultClass = 'pe-control--radio';
    opts.type = 'radio';
    opts.selectionView = createSelection;
    opts.selectable = selectable$1;
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$10, opts);
};

var component$23 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$17(ctrl, opts);
    }
};

var rgba$8 = common$1.rgba;

var line_height_input = 20;
var input_padding_v = 7;

var componentConfig$14 = {
    vertical_spacing_top: 6, // 8 minus natural label height padding (1)
    vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
    input_focus_border_width: 2,
    input_focus_border_animation_duration: common$1.animation_duration,

    floating_label_vertical_spacing_top: 30, // 16 + 8 + 8 minus natural label height padding (2)
    floating_label_vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
    floating_label_top: 14,
    floating_label_animation_duration: '.12s',

    input_padding_h: 0,
    input_padding_v: input_padding_v,
    input_border_width: 1,
    margin_top_error_message: 6,
    font_size_input: 16,
    font_size_error: 12,
    font_size_floating_label: 12,

    line_height_input: line_height_input,

    dense_floating_label_vertical_spacing_top: 23, // 12 + 8 + 4 minus natural label height padding (1)
    dense_floating_label_vertical_spacing_bottom: 4, // 8 minus natural label height padding (1)
    dense_floating_label_top: 10,
    dense_font_size_input: 13,
    dense_font_size_floating_label: 13,

    full_width_input_padding_h: 20,
    full_width_input_padding_v: 18, // 20 minus natural label height padding (2)

    dense_full_width_input_padding_h: 16,
    dense_full_width_input_padding_v: 15, // 16 minus natural label height padding (1)
    dense_full_width_font_size_input: 13,

    color_light_input_text: rgba$8(common$1.color_light_foreground, common$1.blend_light_text_primary),
    color_light_input_background: rgba$8(common$1.color_light_background), // only used to 'remove' autofill color
    color_light_highlight_text: rgba$8(common$1.color_primary, common$1.blend_light_text_primary),
    color_light_input_bottom_border: rgba$8(common$1.color_light_foreground, common$1.blend_light_border_light),
    color_light_input_error_text: rgba$8('221, 44, 0'),
    color_light_input_error_border: rgba$8('221, 44, 0'),
    color_light_input_placeholder: rgba$8(common$1.color_light_foreground, common$1.blend_light_text_tertiary),
    color_light_label_text: rgba$8(common$1.color_light_foreground, common$1.blend_light_text_tertiary),
    color_light_disabled_label_text: rgba$8(common$1.color_light_foreground, common$1.blend_light_text_disabled),
    color_light_readonly_label_text: rgba$8(common$1.color_light_foreground, common$1.blend_light_text_tertiary),
    color_light_help_text: rgba$8(common$1.color_light_foreground, common$1.blend_light_text_tertiary),
    color_light_required_symbol: rgba$8('221, 44, 0'),
    color_light_focus_border: rgba$8(common$1.color_primary),
    color_light_counter_ok_border: rgba$8(common$1.color_primary),

    color_dark_input_text: rgba$8(common$1.color_dark_foreground, common$1.blend_dark_text_primary),
    color_dark_input_background: rgba$8(common$1.color_dark_background), // only used to 'remove' autofill color
    color_dark_highlight_text: rgba$8(common$1.color_primary, common$1.blend_dark_text_primary),
    color_dark_input_bottom_border: rgba$8(common$1.color_dark_foreground, common$1.blend_dark_border_light),
    color_dark_input_error_text: rgba$8('222, 50, 38'),
    color_dark_input_error_border: rgba$8('222, 50, 38'),
    color_dark_input_placeholder: rgba$8(common$1.color_dark_foreground, common$1.blend_dark_text_tertiary),
    color_dark_label_text: rgba$8(common$1.color_dark_foreground, common$1.blend_dark_text_tertiary),
    color_dark_disabled_label_text: rgba$8(common$1.color_dark_foreground, common$1.blend_dark_text_disabled),
    color_dark_readonly_label_text: rgba$8(common$1.color_dark_foreground, common$1.blend_dark_text_tertiary),
    color_dark_help_text: rgba$8(common$1.color_dark_foreground, common$1.blend_dark_text_tertiary),
    color_dark_required_symbol: rgba$8('221, 44, 0'),
    color_dark_focus_border: rgba$8(common$1.color_primary),
    color_dark_counter_ok_border: rgba$8(common$1.color_primary)
};

var createStyles$28 = function createStyles(config$$1) {
    return [{
        '.pe-textfield': [mixin.clearfix(), {
            position: 'relative',
            'line-height': common$1.line_height,
            display: 'inline-block',
            'box-sizing': 'border-box',
            margin: 0,
            overflow: 'visible', // Firefox needs this
            'padding-bottom': config$$1.vertical_spacing_bottom + 'px',
            width: '100%',
            'max-width': '100%',

            ' .pe-textfield__input-area': {
                position: 'relative',
                'padding-top': config$$1.vertical_spacing_top + 'px',

                '&:after': [mixin.defaultTransition('opacity', config$$1.input_focus_border_animation_duration), {
                    position: 'absolute',
                    content: '""',
                    bottom: 0,
                    left: 0,
                    height: config$$1.input_focus_border_width + 'px',
                    width: '100%',
                    opacity: 0
                }]
            },
            '&.pe-textfield--focused .pe-textfield__input-area:after': {
                opacity: 1
            },

            ' .pe-textfield__input': {
                display: 'block',
                'font-size': config$$1.font_size_input + 'px',
                'line-height': config$$1.line_height_input + 'px',
                width: '100%',
                background: 'none',
                'text-align': 'left',
                color: 'inherit',
                'border-width': config$$1.input_border_width + 'px',
                'border-style': 'none none solid none',
                'border-radius': 0,
                margin: 0,
                padding: config$$1.input_padding_v + 'px ' + config$$1.input_padding_h + 'px',

                // disable glow on textfield--invalid fields
                '&:textfield--invalid': {
                    'box-shadow': 'none'
                },
                ':invalid': {
                    'box-shadow': 'none'
                }
            },
            ' textarea.pe-textfield__input': {
                margin: config$$1.input_padding_v + 'px ' + config$$1.input_padding_h + 'px',
                padding: 0,
                display: 'block'
            },

            // focus border
            ' textfield__input:focus, &.pe-textfield--focused .pe-textfield__input': {
                'border-width': config$$1.input_border_width + 'px',
                outline: 'none'
            },

            ' .pe-textfield__label': {
                position: 'absolute',
                display: 'block',
                top: config$$1.vertical_spacing_top + config$$1.input_padding_v + 'px',
                bottom: 0,
                left: config$$1.input_padding_h + 'px',
                right: config$$1.input_padding_h + 'px',
                'font-size': config$$1.font_size_input + 'px',
                'line-height': config$$1.line_height_input + 'px',
                'pointer-events': 'none',
                'white-space': 'nowrap',
                'text-align': 'left',
                cursor: 'text'
            },
            '&.pe-textfield--dirty .pe-textfield__label': {
                visibility: 'hidden'
            },
            '&:not(.pe-textfield--no-char).pe-textfield--required .pe-textfield__label': {
                '&:after': {
                    content: '"*"',
                    padding: '0 0 0 .25em'
                }
            },

            '&.pe-textfield--floating-label': {
                'padding-bottom': config$$1.floating_label_vertical_spacing_bottom + 'px',

                ' .pe-textfield__input-area': {
                    'padding-top': config$$1.floating_label_vertical_spacing_top + 'px'
                },

                ' .pe-textfield__label': [mixin.defaultTransition('all', config$$1.floating_label_animation_duration), {
                    top: config$$1.floating_label_vertical_spacing_top + config$$1.input_padding_v + 'px'
                }],

                '&.pe-textfield--focused, &.pe-textfield--dirty': {
                    ' .pe-textfield__label': {
                        'font-size': config$$1.font_size_floating_label + 'px',
                        top: config$$1.floating_label_top + 'px',
                        visibility: 'visible'
                    }
                },

                '&.pe-textfield--dense': {
                    'font-size': config$$1.dense_font_size_input + 'px',
                    'padding-bottom': config$$1.dense_floating_label_vertical_spacing_bottom + 'px',

                    ' .pe-textfield__input-area': {
                        'padding-top': config$$1.dense_floating_label_vertical_spacing_top + 'px'
                    },

                    ' .pe-textfield__input': {
                        'font-size': config$$1.dense_font_size_input + 'px'
                    },
                    ' .pe-textfield__label': {
                        'font-size': config$$1.dense_font_size_input + 'px',
                        top: config$$1.dense_floating_label_vertical_spacing_top + config$$1.input_padding_v + 'px'
                    },

                    '&.pe-textfield--focused, &.pe-textfield--dirty': {
                        ' .pe-textfield__label': {
                            'font-size': config$$1.dense_font_size_floating_label + 'px',
                            top: config$$1.dense_floating_label_top + 'px'
                        }
                    }
                }
            },

            '&.pe-textfield--disabled, &.pe-textfield--readonly': {
                ' .pe-textfield__label': {
                    cursor: 'auto'
                },
                ' .pe-textfield__input': {
                    'border-bottom': 'none'
                },
                ' .pe-textfield__input-area:after': {
                    opacity: 1,
                    height: '1px',
                    bottom: '-1px',
                    'background-position': 'top',
                    'background-size': '4px 1px',
                    'background-repeat': 'repeat-x'
                }
            },

            ' .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter': {
                'margin-top': config$$1.margin_top_error_message + 'px',
                'font-size': config$$1.font_size_error + 'px',
                'line-height': common$1.line_height,
                'min-height': config$$1.font_size_error * common$1.line_height + 'px'
            },

            ' .pe-textfield__counter': {
                'text-align': 'right',
                float: 'right',
                padding: '0 0 0 16px'
            },

            ' .pe-textfield__help-focus': [mixin.defaultTransition('opacity'), {
                opacity: 0
            }],
            '&.pe-textfield--focused .pe-textfield__help-focus, &.pe-textfield--dirty .pe-textfield__help-focus': {
                opacity: 1
            },

            '&.pe-textfield--hide-clear': {
                ' .pe-textfield__input::-ms-clear': {
                    display: 'none'
                }
            },
            '&.pe-textfield--hide-spinner': {
                ' input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button': {
                    '-webkit-appearance': 'none',
                    margin: 0
                },
                ' input[type=number]': {
                    '-moz-appearance': 'textfield'
                }
            }
        }, {
            '&.pe-textfield--full-width': {
                width: '100%',
                padding: 0,

                ' .pe-textfield__input-area': {
                    padding: 0
                },

                ' .pe-textfield__input': {
                    padding: config$$1.full_width_input_padding_v + 'px ' + config$$1.full_width_input_padding_h + 'px'
                },

                ' .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter': {
                    'padding-left': config$$1.full_width_input_padding_h + 'px',
                    'padding-right': config$$1.full_width_input_padding_h + 'px'
                },

                ' .pe-textfield__label': {
                    top: config$$1.full_width_input_padding_v + 'px',
                    left: config$$1.full_width_input_padding_h + 'px',
                    right: config$$1.full_width_input_padding_h + 'px'
                },

                '&.pe-textfield--dense': {
                    ' .pe-textfield__input': {
                        'font-size': config$$1.dense_full_width_font_size_input + 'px',
                        padding: config$$1.dense_full_width_input_padding_v + 'px ' + config$$1.dense_full_width_input_padding_h + 'px'
                    },
                    ' .pe-textfield__label': {
                        'font-size': config$$1.dense_full_width_font_size_input + 'px',
                        top: config$$1.dense_full_width_input_padding_v + 'px',
                        left: config$$1.dense_full_width_input_padding_h + 'px',
                        right: config$$1.dense_full_width_input_padding_h + 'px'
                    }
                }
            }
        }]
    }];
};

var layout$18 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$28);
});

function _defineProperty$16(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$12 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$16({}, scope + '.pe-textfield', {
        // border color
        color: config$$1['color_' + tint + '_focus_border'], // override by specifying 'color'

        ' .pe-textfield__input-area': {
            color: 'inherit',

            '&:after': {
                'background-color': 'currentcolor'
            }
        },
        '&.pe-textfield--counter ': {
            ' .pe-textfield__input-area:after': {
                'background-color': config$$1['color_' + tint + '_counter_ok_border']
            }
        },

        ' .pe-textfield__input': {
            color: config$$1['color_' + tint + '_input_text'],
            'border-color': config$$1['color_' + tint + '_input_bottom_border']
        },

        ' .pe-textfield__label': {
            color: config$$1['color_' + tint + '_label_text']
        },

        '&.pe-textfield--disabled, &.pe-textfield--readonly': {
            ' .pe-textfield__input-area:after': {
                'background-color': 'transparent',
                'background-image': 'linear-gradient(to right, ' + config$$1['color_' + tint + '_disabled_label_text'] + ' 20%, rgba(255, 255, 255, 0) 0%)'
            }
        },

        '&.pe-textfield--disabled': {
            ' .pe-textfield__input, .pe-textfield__label': {
                color: config$$1['color_' + tint + '_disabled_label_text']
            }
        },

        '&.pe-textfield--readonly': {
            ' .pe-textfield__input, .pe-textfield__label': {
                color: config$$1['color_' + tint + '_readonly_label_text']
            }
        },

        '&.pe-textfield--focused': {
            // note: not when textfield--dirty and not textfield--focused
            '&.pe-textfield--floating-label .pe-textfield__label': {
                color: config$$1['color_' + tint + '_highlight_text']
            },

            '&.pe-textfield--required.pe-textfield--floating-label': {
                ' .pe-textfield__label:after': {
                    color: config$$1['color_' + tint + '_required_symbol']
                }
            }
        },

        ' .pe-textfield__help, .pe-textfield__counter': {
            color: config$$1['color_' + tint + '_help_text']
        },

        '&.pe-textfield--invalid:not(.pe-textfield--hide-validation)': {
            ' .pe-textfield__input': {
                'border-color': config$$1['color_' + tint + '_input_error_border'],
                'box-shadow': 'none'
            },
            ' .pe-textfield__label': {
                color: config$$1['color_' + tint + '_input_error_text']
            },
            ' .pe-textfield__error, .pe-textfield__counter, .pe-textfield__help': {
                color: config$$1['color_' + tint + '_input_error_text']
            },
            '&.pe-textfield--required .pe-textfield__label': {
                color: config$$1['color_' + tint + '_input_error_text']
            },
            '&, &.pe-textfield--counter': {
                ' .pe-textfield__input-area:after': {
                    'background-color': config$$1['color_' + tint + '_input_error_border']
                }
            }
        },

        ' .pe-textfield__input:-webkit-autofill': {
            '-webkit-box-shadow': '0 0 0px 1000px ' + config$$1['color_' + tint + '_input_background'] + ' inset',
            color: config$$1['color_' + tint + '_input_text'] + ' !important'
        }
    })];
};

var createStyles$29 = function createStyles(config$$1) {
    return [style$12(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$12(config$$1, 'dark', ' '),
        // has dark theme
        style$12(config$$1, 'dark', '&')]
    }];
};

var color$12 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$29);
});

var themeConfigFn$16 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].textfield;
var config$17 = themeConfigFn$16 ? themeConfigFn$16(componentConfig$14) : componentConfig$14;
var id$17 = 'pe-textfield';

styler.add(id$17, layout$18(config$17), color$12(config$17));

var _extends$17 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$15(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var startEventType = window.PointerEvent ? 'pointerdown' : 'ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchstart' : 'mousedown';

var CSS_CLASSES$18 = {
    block: 'pe-textfield',
    inputArea: 'pe-textfield__input-area',
    input: 'pe-textfield__input',
    label: 'pe-textfield__label',
    counter: 'pe-textfield__counter',
    help: 'pe-textfield__help',
    focusHelp: 'pe-textfield__help-focus',
    error: 'pe-textfield__error',
    errorPlaceholder: 'pe-textfield__error-placeholder',
    stateFocused: 'pe-textfield--focused',
    stateDisabled: 'pe-textfield--disabled',
    stateReadonly: 'pe-textfield--readonly',
    stateInvalid: 'pe-textfield--invalid',
    stateDirty: 'pe-textfield--dirty',
    hasFloatingLabel: 'pe-textfield--floating-label',
    isDense: 'pe-textfield--dense',
    isRequired: 'pe-textfield--required',
    hideRequiredChar: 'pe-textfield--no-char',
    hasFullWidth: 'pe-textfield--full-width',
    hasCounter: 'pe-textfield--counter',
    hideSpinner: 'pe-textfield--hide-spinner',
    hideClear: 'pe-textfield--hide-clear',
    hideValidation: 'pe-textfield--hide-validation'
};

var validateCustom = function validateCustom(ctrl, opts) {
    var state = opts.validate(ctrl.value);
    return {
        invalid: state && !state.valid,
        message: state && state.error
    };
};

var validateCounter = function validateCounter(ctrl, opts) {
    return {
        invalid: ctrl.value.length > opts.counter,
        message: opts.error
    };
};

var validateHTML = function validateHTML(ctrl, opts) {
    return {
        invalid: !ctrl.inputEl().checkValidity(),
        message: opts.error
    };
};

var getValidStatus = function getValidStatus(ctrl, opts) {
    var status = {
        invalid: false,
        message: undefined
    };

    // validateResetOnClear: reset validation when field is cleared
    if (ctrl.touched && ctrl.isInvalid && ctrl.value.length === 0 && opts.validateResetOnClear) {
        ctrl.touched = false;
        ctrl.isInvalid = false;
        ctrl.error = undefined;
    }

    if (!status.invalid && opts.counter) {
        status = validateCounter(ctrl, opts);
    }
    if (!status.invalid && ctrl.inputEl() && ctrl.inputEl().checkValidity) {
        status = validateHTML(ctrl, opts);
    }
    if (!status.invalid && opts.validate) {
        status = validateCustom(ctrl, opts);
    }
    return status;
};

var checkValidity = function checkValidity(ctrl, opts) {
    // default
    var status = !ctrl.touched && !opts.validateAtStart ? {
        invalid: false,
        message: undefined
    } : getValidStatus(ctrl, opts);
    var previousInvalid = ctrl.isInvalid;
    ctrl.error = status.message;
    ctrl.isInvalid = status.invalid;
    if (status.invalid !== previousInvalid) {
        setTimeout(__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw, 0);
    }

    if (!status.invalid) {
        ctrl.error = undefined;
    }
};

// dirty = contains text
var checkDirty = function checkDirty(ctrl) {
    ctrl.isDirty = ctrl.value.toString().length > 0;
};

var updateState = function updateState(ctrl, opts) {
    checkValidity(ctrl, opts);
    checkDirty(ctrl);
};

var notifyState = function notifyState(ctrl, opts) {
    if (opts.getState) {
        // get status directly without updating controller
        var status = getValidStatus(ctrl, opts);
        opts.getState({
            focus: ctrl.focus(),
            dirty: ctrl.isDirty,
            value: ctrl.value,
            el: ctrl.inputEl(),
            invalid: status.invalid,
            error: status.error
        });
    }
};

var ignoreEvent = function ignoreEvent(opts, name) {
    return opts.ignoreEvents && opts.ignoreEvents.indexOf(name) !== -1;
};

var createView$19 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    // Early state update to prevent a flash (which would happen if the update is done in config)
    updateState(ctrl, opts);

    var isInvalid = ctrl.isInvalid;
    var tag = opts.tag || 'div';
    var type = !opts.type || opts.type === 'submit' || opts.type === 'search' ? 'text' : opts.type;
    var inputTag = opts.multiline ? 'textarea' : 'input';
    var showError = isInvalid && ctrl.error;
    var validates = opts.validate || opts.min || opts.max || opts.minlength || opts.required || opts.pattern;
    var inactive = opts.disabled || opts.readonly;

    if (opts.focus && !ctrl.focus() && !inactive) {
        ctrl.focus(true);
        if (ctrl.inputEl()) {
            ctrl.inputEl().focus();
        }
    }

    // Only update from outside if the field is not being edited
    if (typeof opts.value === 'function' && ctrl.inputEl() && !ctrl.focus() && !inactive) {
        var value = opts.value();
        ctrl.value = value;
        ctrl.touched = true;
        updateState(ctrl, opts);
        notifyState(ctrl, opts);
        ctrl.inputEl().value = value;
    }

    var props = {
        class: [CSS_CLASSES$18.block, isInvalid ? CSS_CLASSES$18.stateInvalid : '', ctrl.focus() ? CSS_CLASSES$18.stateFocused : '', opts.floatingLabel ? CSS_CLASSES$18.hasFloatingLabel : '', opts.disabled ? CSS_CLASSES$18.stateDisabled : '', opts.readonly ? CSS_CLASSES$18.stateReadonly : '', ctrl.isDirty ? CSS_CLASSES$18.stateDirty : '', opts.dense ? CSS_CLASSES$18.isDense : '', opts.required ? CSS_CLASSES$18.isRequired : '', opts.fullWidth ? CSS_CLASSES$18.hasFullWidth : '', opts.counter ? CSS_CLASSES$18.hasCounter : '', opts.hideSpinner !== false ? CSS_CLASSES$18.hideSpinner : '', opts.hideClear !== false ? CSS_CLASSES$18.hideClear : '', opts.hideValidation ? CSS_CLASSES$18.hideValidation : '', opts.hideRequiredMark ? CSS_CLASSES$18.hideRequiredChar : '', opts.class].join(' '),
        id: opts.id || '',
        config: function config$$1(el, inited, context, vdom) {
            if (inited) {
                return;
            }
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;
            if (!inactive) {
                updateState(ctrl, opts);
            }
        }
    };

    var content = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$18.inputArea
    }, [opts.label ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('label', _defineProperty$15({
        class: CSS_CLASSES$18.label
    }, 'on' + startEventType, function () {
        if (!inactive) {
            setTimeout(function () {
                ctrl.inputEl().focus();
            }, 0);
        }
    }), opts.label) : null, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(inputTag, _extends$17({}, {
        class: CSS_CLASSES$18.input,
        type: type,
        name: opts.name || '',
        disabled: opts.disabled
    }, !ignoreEvent(opts, 'onclick') ? {
        onclick: function onclick() {
            if (inactive) {
                return;
            }
            // in case the browser does not give the field focus,
            // for instance when the user tapped to the current field off screen
            ctrl.focus(true);
            notifyState(ctrl, opts);
        }
    } : null, !ignoreEvent(opts, 'onfocus') ? {
        onfocus: function onfocus() {
            if (inactive) {
                return;
            }
            ctrl.focus(true);
            // set CSS class manually in case field gets focus but is off screen
            // and no redraw is triggered
            // at the next redraw ctrl.focus() will be read and the focus class be set
            // in the props.class statement
            if (ctrl.el) {
                ctrl.el.classList.add(CSS_CLASSES$18.stateFocused);
            }
            notifyState(ctrl, opts);
        }
    } : null, !ignoreEvent(opts, 'oninput') ? {
        oninput: function oninput(e) {
            // default input event
            // may be overwritten by opts.events
            ctrl.value = e.target.value;
            // Don't set ctrl.touched to true to prevent error messages popping up while typing
            if (opts.validateOnInput) {
                ctrl.touched = true;
            }
            updateState(ctrl, opts);
            notifyState(ctrl, opts);
            if (opts.oninput) {
                opts.oninput(ctrl.value, e);
            }
        }
    } : null, !ignoreEvent(opts, "onblur") ? {
        onblur: function onblur(e) {
            ctrl.focus(false);
            ctrl.touched = true;
            ctrl.value = e.target.value;
            updateState(ctrl, opts);
            notifyState(ctrl, opts);
            // same principle as onfocus
            if (ctrl.el) {
                ctrl.el.classList.remove(CSS_CLASSES$18.stateFocused);
            }
        }
    } : null, !ignoreEvent(opts, 'onkeydown') ? {
        onkeydown: function onkeydown(e) {
            if (e.which === 13) {
                // ENTER
                ctrl.touched = true;
                updateState(ctrl, opts);
                notifyState(ctrl, opts);
            } else if (e.which === 27) {
                // ESCAPE
                ctrl.inputEl().blur(e);
            } else if (e.which === 9) {
                // TAB
                // Update after the blur event when TAB is used to leave the field and no other field will get focus.
                // Safari only needs 1 tick, but Chrome needs more than 150ms to create a distinctive new redraw event.
                // But we also may have buttons that change place (search field), a large timeout works better in general.
                setTimeout(function () {
                    __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
                    setTimeout(__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw, 250);
                }, 1);
            }
        }
    } : null, {
        config: function config$$1(el, inited) {
            if (inited) {
                return;
            }
            ctrl.inputEl(el);
            el.value = ctrl.value;
            notifyState(ctrl, opts);
        }
    }, opts.events ? opts.events : null, // NOTE: may overwrite oninput
    opts.readonly !== undefined ? { readonly: true } : null, opts.pattern !== undefined ? { pattern: opts.pattern } : null, opts.maxlength !== undefined ? { maxlength: opts.maxlength } : null, opts.minlength !== undefined ? { minlength: opts.minlength } : null, opts.max !== undefined ? { max: opts.max } : null, opts.min !== undefined ? { min: opts.min } : null, opts.autofocus !== undefined ? { autofocus: opts.autofocus } : null, opts.required !== undefined ? { required: opts.required } : null, opts.tabindex !== undefined ? { tabindex: opts.tabindex } : null, opts.rows !== undefined ? { rows: opts.rows } : null))]), opts.counter ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$18.counter }, ctrl.value.length + ' / ' + opts.counter) : null, opts.help && !showError ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: [CSS_CLASSES$18.help, opts.focusHelp ? CSS_CLASSES$18.focusHelp : ''].join(' ')
    }, opts.help) : null, showError ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$18.error }, ctrl.error) : validates && !opts.help ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$18.errorPlaceholder }) : null];
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var component$27 = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var value = void 0,
            isInvalid = false,
            touched = false,
            // true when any change is made
        error = opts.error || '',
            el = void 0,
            inputEl = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.prop(),
            hasFocus = opts.focus || false;

        if (typeof opts.value === 'function') {
            var v = opts.value();
            value = v !== undefined ? v : '';
        } else {
            value = opts.value !== undefined ? opts.value : '';
        }
        if (value !== '') {
            touched = true;
        }

        var focus = function focus(state) {
            // read
            if (state === undefined) {
                return hasFocus;
            }
            // write
            hasFocus = state;
        };

        return {
            value: value,
            error: error,
            el: el,
            inputEl: inputEl,
            focus: focus,
            isInvalid: isInvalid,
            touched: touched
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$19(ctrl, opts);
    }
};

var rgba$9 = common$1.rgba;

var insetSideMargin = 8;

var line_height_input$1 = 20;
var font_size_input = 20;

var inset_height = 48;
var inset_input_indent = 16;
var inset_input_right_padding = 0;
var inset_border_radius = common$1.unit_block_border_radius;

var fullwidth_side_margin = 0;
var fullwidth_height = 56;
var fullwidth_side_padding = insetSideMargin;
var fullwidth_input_right_padding = 0;
var fullwidth_border_radius = 0;

var componentConfig$15 = {
    font_size_input: font_size_input,
    line_height_input: line_height_input$1,

    inset_height: inset_height,
    inset_input_indent: inset_input_indent,
    inset_input_right_padding: inset_input_right_padding,
    inset_border_radius: inset_border_radius,

    fullwidth_height: fullwidth_height,
    fullwidth_side_margin: fullwidth_side_margin,
    fullwidth_side_padding: fullwidth_side_padding,
    fullwidth_input_right_padding: fullwidth_input_right_padding,
    fullwidth_border_radius: fullwidth_border_radius,

    color_light_label_text: rgba$9(common$1.color_light_foreground, common$1.blend_light_text_disabled),
    color_light_background: rgba$9(common$1.color_light_background),

    color_dark_label_text: rgba$9(common$1.color_dark_foreground, common$1.blend_dark_text_disabled),
    color_dark_background: rgba$9(common$1.color_dark_background)
};

var createStyles$30 = function createStyles(config$$1) {
    var inset_input_padding_v = (config$$1.inset_height - config$$1.line_height_input) / 2;
    var fullwidth_input_padding_v = (config$$1.fullwidth_height - config$$1.line_height_input) / 2;
    var fullwidth_input_indent = common$1.unit_indent - config$$1.fullwidth_side_padding - common$1.grid_unit_icon_button;

    return [{
        '.pe-search': [flex$1.flex(), {
            position: 'relative', // necessary when a shadow is added

            ' .pe-textfield': [flex$1.flex(), {
                padding: 0,
                // prevent that neighboring icon button with ripple hides the cursor
                position: 'relative',
                'z-index': 1
            }],

            ' .pe-textfield__input-area': {
                padding: 0,
                flexGrow: 1,

                '&:after': {
                    display: 'none'
                }
            },

            ' .pe-textfield__input, .pe-textfield__label': {
                'font-size': config$$1.font_size_input + 'px',
                'line-height': config$$1.line_height_input + 'px'
            },

            ' .pe-textfield__input': {
                // reset
                border: 'none'
            },

            ' .pe-textfield__label': {
                // reset
                top: 0,
                bottom: 0
            },

            ' .pe-search__content': {
                '&, .pe-textfield': flex$1.layoutHorizontal
            },

            ' .pe-search__content > *': flex$1.layoutVertical,

            ' .pe-button--icon': flex$1.selfCenter,

            '&.pe-search--inset': {
                'border-radius': config$$1.inset_border_radius + 'px',
                padding: '0 ' + config$$1.inset_side_padding + 'px',

                '&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label': {
                    height: config$$1.inset_height + 'px'
                },
                ' .pe-textfield__input, .pe-textfield__label': {
                    'padding-top': inset_input_padding_v + 'px',
                    'padding-bottom': inset_input_padding_v + 'px',
                    'padding-left': config$$1.inset_input_indent + 'px',
                    'padding-right': config$$1.inset_input_right_padding + 'px'
                }
            },

            '&.pe-search--fullwidth': {
                'border-radius': config$$1.fullwidth_border_radius + 'px',
                padding: '0 ' + config$$1.fullwidth_side_padding + 'px',

                '&, .pe-textfield__input-area, .pe-textfield__input, .pe-textfield__label': {
                    height: config$$1.fullwidth_height + 'px'
                },
                ' .pe-textfield__input, .pe-textfield__label': {
                    'padding-top': fullwidth_input_padding_v + 'px',
                    'padding-bottom': fullwidth_input_padding_v + 'px',
                    'padding-left': fullwidth_input_indent + 'px',
                    'padding-right': config$$1.fullwidth_input_right_padding + 'px'
                }
            }
        }]
    }];
};

var layout$19 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$30);
});

function _defineProperty$17(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$13 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$17({}, scope + '.pe-search', {
        'background-color': config$$1['color_' + tint + '_background'],

        ' .pe-textfield__label': {
            color: config$$1['color_' + tint + '_label_text']
        }
    })];
};

var createStyles$31 = function createStyles(config$$1) {
    return [style$13(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$13(config$$1, 'dark', ' '),
        // has dark theme
        style$13(config$$1, 'dark', '&')]
    }];
};

var color$13 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$31);
});

var themeConfigFn$17 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].search;
var config$18 = themeConfigFn$17 ? themeConfigFn$17(componentConfig$15) : componentConfig$15;
var id$18 = 'pe-search';

styler.add(id$18, layout$19(config$18), color$13(config$18));

var _extends$16 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$17 = {
    block: 'pe-search',
    content: 'pe-search__content',
    searchInset: 'pe-search--inset',
    searchFullwidth: 'pe-search--fullwidth'
};

var mapButtonState = function mapButtonState() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (state.focus && state.dirty) {
        return 'focus_dirty';
    } else if (state.focus) {
        return 'focus';
    } else if (state.dirty) {
        return 'dirty';
    }
    return 'none';
};

var typeClasses$2 = {
    inset: CSS_CLASSES$17.searchInset,
    fullwidth: CSS_CLASSES$17.searchFullwidth
};

var classForType$2 = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'inset';

    return typeClasses$2[mode];
};

var createView$18 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = _extends$16({}, {
        class: [CSS_CLASSES$17.block, classForType$2(opts.type), opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    }, opts.events ? opts.events : null);
    var state = mapButtonState(ctrl.state());
    var buttons = (opts.buttons || {})[state] || {};
    var textfieldOpts = opts.textfield || {};
    var content = __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$17.content
    }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$27, _extends$16({}, textfieldOpts, {
        config: function config$$1() {
            __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw.strategy('none');
        },
        getState: function getState(state) {
            ctrl.state(state);
            if (textfieldOpts.getState) {
                textfieldOpts.getState(state);
            }
        },
        before: buttons.before,
        after: buttons.after
    }))]);
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var component$25 = {
    controller: function controller() {
        var state = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.prop();
        return {
            state: state
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$18(ctrl, opts);
    }
};

var rgba$10 = common$1.rgba;
var lightForeground = common$1.color_light_foreground;
var darkForeground = common$1.color_dark_foreground;
var activeColor$1 = common$1.color_primary; // or override in CSS by setting 'color' property on '.pe-slider'

var thumb_size = 12;
var thumb_touch_size = Math.max(40, thumb_size);
var thumb_border_width = 2;
var active_thumb_scale = 3 / 2;
var disabled_thumb_scale = 2 / 3;
var active_pin_thumb_scale = 2 / 6;
var largestThumbSize = active_thumb_scale * thumb_size;
var largestElement = Math.max(thumb_touch_size, largestThumbSize);
var height$1 = Math.max(52, largestThumbSize);
var side_spacing = Math.max(10, largestElement / 2 - thumb_size / 2);
var horizontal_layout_side_spacing = side_spacing + 4; // optimization for horizontal layout

var componentConfig$16 = {
    height: height$1,
    side_spacing: side_spacing,
    horizontal_layout_side_spacing: horizontal_layout_side_spacing,
    thumb_size: thumb_size,
    thumb_touch_size: thumb_touch_size,
    track_height: height$1,
    bar_height: 2,
    thumb_border_width: thumb_border_width,
    active_thumb_scale: active_thumb_scale,
    animation_duration: common$1.animation_duration,
    disabled_thumb_scale: disabled_thumb_scale,
    active_pin_thumb_scale: active_pin_thumb_scale,

    step_width: 2,
    pin_height: 32,
    pin_width: 26,
    pin_font_size: 10,

    color_light_track_active: rgba$10(lightForeground, .38),
    color_light_track_inactive: rgba$10(lightForeground, .26),
    color_light_track_value: rgba$10(activeColor$1),
    color_light_thumb_off: rgba$10(lightForeground, .26),
    color_light_thumb_off_focus: rgba$10(lightForeground),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on: rgba$10(activeColor$1),
    color_light_thumb_on_focus_opacity: .11,
    color_light_tick: rgba$10(lightForeground, 1),
    color_light_icon: common$1.rgba(common$1.color_light_foreground, common$1.blend_light_text_secondary),
    color_light_disabled_icon: common$1.rgba(common$1.color_light_foreground, common$1.blend_light_text_disabled),
    color_light_label: common$1.rgba(common$1.color_light_foreground, common$1.blend_light_text_secondary),
    color_light_disabled_label: common$1.rgba(common$1.color_light_foreground, common$1.blend_light_text_disabled),

    color_dark_track_active: rgba$10(darkForeground, 0.3),
    color_dark_track_inactive: rgba$10(darkForeground, 0.2),
    color_dark_track_value: rgba$10(activeColor$1),
    color_dark_thumb_off: rgba$10(darkForeground, 0.2),
    color_dark_thumb_off_focus: rgba$10(darkForeground),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on: rgba$10(activeColor$1),
    color_dark_thumb_on_focus_opacity: .11,
    color_dark_tick: rgba$10(darkForeground, 1),
    color_dark_icon: common$1.rgba(common$1.color_dark_foreground, common$1.blend_dark_text_secondary),
    color_dark_disabled_icon: common$1.rgba(common$1.color_dark_foreground, common$1.blend_dark_text_disabled),
    color_dark_label: common$1.rgba(common$1.color_dark_foreground, common$1.blend_dark_text_secondary),
    color_dark_disabled_label: common$1.rgba(common$1.color_dark_foreground, common$1.blend_dark_text_disabled)
};

var positionBorder = function positionBorder(thumbSize, borderWidth) {
    return {
        'border-width': borderWidth + 'px',
        width: thumbSize - 2 * borderWidth + 'px',
        height: thumbSize - 2 * borderWidth + 'px',
        left: '2px',
        top: '2px'
    };
};

var createStyles$32 = function createStyles(config$$1) {
    var thumbSize = Math.max(config$$1.thumb_size, 2 * config$$1.thumb_border_width);
    var scaledThumbDiff = (config$$1.active_thumb_scale - 1) * thumbSize / 2;
    var barOffset = thumbSize / 2;
    var scaledBorderWidth = Math.max(1, config$$1.thumb_border_width / config$$1.active_thumb_scale);
    var thumbTouchSize = config$$1.thumb_touch_size;
    var stepsOffset = barOffset - 1;

    return [{
        '.pe-slider': [mixin.vendorize({
            'user-select': 'none'
        }, common$1.prefixes_user_select), {
            height: config$$1.height + 'px',
            'margin-top': (config$$1.height - config$$1.track_height) / 2 + 'px ',

            ' > .pe-icon': {
                height: config$$1.height + 'px'
            },

            ' .pe-slider__track': [flex$1.layoutHorizontal, flex$1.flexGrow(1), mixin.defaultTransition('transform', config$$1.animation_duration), mixin.vendorize({
                'user-select': 'none'
            }, common$1.prefixes_user_select), {
                position: 'relative',
                height: config$$1.track_height + 'px',
                margin: '0 ' + config$$1.side_spacing + 'px',
                outline: 0
            }],
            ' div + .pe-slider__track': {
                margin: '0 ' + config$$1.horizontal_layout_side_spacing + 'px'
            },

            ' .pe-slider__control': [flex$1.selfCenter, mixin.defaultTransition('transform, background', config$$1.animation_duration), mixin.vendorize({
                'user-select': 'none'
            }, common$1.prefixes_user_select), {
                width: thumbSize + 'px',
                height: thumbSize + 'px',
                'line-height': 0,
                'border-radius': '50%',
                outline: 0,
                'z-index': 1,
                position: 'relative',

                // touch area
                '&:before': [mixin.defaultTransition('background-color', config$$1.animation_duration), {
                    content: '""',
                    position: 'absolute',
                    'border-radius': '50%',
                    left: -thumbTouchSize / 2 + thumbSize / 2 + 'px',
                    top: -thumbTouchSize / 2 + thumbSize / 2 + 'px',
                    width: thumbTouchSize + 'px',
                    height: thumbTouchSize + 'px'
                }],

                // border
                '&:after': [mixin.defaultTransition('border', config$$1.animation_duration), positionBorder(thumbSize, config$$1.thumb_border_width), {
                    content: '""',
                    position: 'absolute',
                    'border-radius': '50%',
                    'border-style': 'solid'
                }]
            }],

            ' .pe-slider__thumb': [mixin.defaultTransition('opacity', config$$1.animation_duration), mixin.fit(), {
                '&, .pe-icon': {
                    width: 'inherit',
                    height: 'inherit'
                }
            }],

            ' .pe-slider__label': {
                height: config$$1.height + 'px',
                'line-height': config$$1.height + 'px',
                'min-width': common$1.unit_icon_size + 'px',
                'text-align': 'center',
                'font-size': '16px',
                'font-weight': common$1.font_weight_medium
            },

            ' .pe-slider__track-part': [flex$1.flex(), mixin.vendorize({
                'user-select': 'none'
            }, common$1.prefixes_user_select), {
                height: config$$1.bar_height + 'px',
                margin: (config$$1.track_height - config$$1.bar_height) / 2 + 'px 0px',
                overflow: 'hidden' // Firefox otherwise uses 6x at 0%
            }],

            ' .pe-slider__track-value, .pe-slider__track-rest': flex$1.layoutHorizontal,

            ' .pe-slider__track-bar': [flex$1.flex(), {
                position: 'relative',
                overflow: 'hidden'
            }],
            ' .pe-slider__track-bar-value': [flex$1.flex(), mixin.defaultTransition('transform, background-color', config$$1.animation_duration), {
                height: config$$1.bar_height + 'px'
            }],
            ' .pe-slider__track-value .pe-slider__track-bar': {
                'margin-left': barOffset + 'px'
            },
            ' .pe-slider__track-rest .pe-slider__track-bar': {
                'margin-right': barOffset + 'px'
            },

            ' .pe-slider__ticks': [flex$1.layoutJustified, mixin.vendorize({
                'user-select': 'none'
            }, common$1.prefixes_user_select), {
                position: 'absolute',
                width: 'calc(100% - ' + 2 * stepsOffset + 'px)',
                height: config$$1.bar_height + 'px',
                left: 0,
                top: config$$1.height / 2 - 1 + 'px',
                margin: '0 ' + stepsOffset + 'px',
                'pointer-events': 'none'
            }],

            ' .pe-slider__ticks-tick': {
                width: config$$1.step_width + 'px',
                height: config$$1.bar_height + 'px'
            },

            ' .pe-slider__pin': [mixin.vendorize({
                'transform': 'translateZ(0) scale(0) translate(0, 0)'
            }, common$1.prefixes_transform), mixin.vendorize({
                'transform-origin': 'bottom'
            }, common$1.prefixes_transform), mixin.defaultTransition('transform', '.11s'), {
                position: 'absolute',
                'z-index': 1,
                width: config$$1.pin_width + 'px',
                height: 0,
                left: 0, // set in js
                top: 0,
                'margin': '0 ' + stepsOffset + 'px 0 ' + (stepsOffset - config$$1.pin_width / 2 + 1) + 'px',
                'pointer-events': 'none',

                '&::before': [mixin.vendorize({
                    'transform': 'rotate(-45deg)'
                }, common$1.prefixes_transform), {
                    content: '" "',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: config$$1.pin_width + 'px',
                    height: config$$1.pin_width + 'px',
                    'border-radius': '50% 50% 50% 0',
                    'background-color': 'inherit'
                }],
                '&::after': {
                    content: 'attr(value)',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: config$$1.pin_width + 'px',
                    height: config$$1.pin_height + 'px',
                    'text-align': 'center',
                    color: '#fff',
                    'font-size': config$$1.pin_font_size + 'px',
                    'line-height': config$$1.pin_width + 'px'
                }
            }],

            '&.pe-slider--active:not(.pe-slider--ticks)': {
                ' .pe-slider__control': [mixin.vendorize({
                    'transform': 'scale(' + config$$1.active_thumb_scale + ')'
                }, common$1.prefixes_transform), {
                    'border-width': scaledBorderWidth + 'px'
                }],
                // left side
                ' .pe-slider__track-value .pe-slider__track-bar-value': [mixin.vendorize({
                    'transform': 'translateX(' + -scaledThumbDiff + 'px)'
                }, common$1.prefixes_transform)],
                // right side
                ' .pe-slider__track-rest .pe-slider__track-bar-value': [mixin.vendorize({
                    'transform': 'translateX(' + scaledThumbDiff + 'px)'
                }, common$1.prefixes_transform)]
            },

            '&.pe-slider--pin.pe-slider--active, &.pe-slider--pin.pe-slider--focus': {
                ' .pe-slider__pin': [mixin.vendorize({
                    'transform': 'translateZ(0) scale(1) translate(0, -24px)'
                }, common$1.prefixes_transform)],
                ' .pe-slider__control': [mixin.vendorize({
                    'transform': 'scale(' + config$$1.active_pin_thumb_scale + ')'
                }, common$1.prefixes_transform)]
            },

            '&:not(.pe-slider--disabled)': {
                ' .pe-slider__control': {
                    cursor: 'pointer'
                },
                '&.pe-slider--track': {
                    ' .pe-slider__track': {
                        cursor: 'pointer'
                    }
                }
            },

            '&.pe-slider--disabled': {
                ' .pe-slider__control': [mixin.vendorize({
                    'transform': 'scale(' + config$$1.disabled_thumb_scale + ')'
                }, common$1.prefixes_transform), {
                    'border-width': 0
                }],
                '&.pe-slider--min': {
                    ' .pe-slider__control:after': [positionBorder(thumbSize, 1 / config$$1.disabled_thumb_scale * config$$1.thumb_border_width)]
                }
            }
        }]
    }];
};

var layout$20 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$32);
});

function _defineProperty$18(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$14 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$18({}, scope + '.pe-slider', {

        color: config$$1['color_' + tint + '_thumb_on'], // override by specifying 'color'

        ' .pe-slider__control': {
            background: config$$1['color_' + tint + '_thumb_off'],

            '&:after': {
                'border-color': 'transparent'
            }
        },
        ' .pe-slider__track-bar-value': {
            background: config$$1['color_' + tint + '_track_inactive']
        },

        ' .pe-slider__ticks-tick': {
            background: config$$1['color_' + tint + '_tick']
        },

        ' .pe-slider__pin': {
            'background-color': 'currentcolor'
        },

        ' > .pe-icon': {
            color: config$$1['color_' + tint + '_disabled_icon']
        },

        ' .pe-slider__label': {
            color: config$$1['color_' + tint + '_disabled_label']
        },

        // states

        '&.pe-slider--active': {
            ' .pe-slider__track-bar-value': {
                background: config$$1['color_' + tint + '_track_active']
            }
        },

        '&:not(.pe-slider--disabled)': {
            ' .pe-slider__control': {
                background: 'currentcolor',

                '&:before': {
                    opacity: config$$1['color_' + tint + '_thumb_off_focus_opacity']
                }
            },
            ' .pe-slider__track-value .pe-slider__track-bar-value': {
                background: 'currentcolor'
            },
            '&.pe-slider--focus.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:before,\
                &.pe-slider--min:not(.pe-slider--pin) .pe-slider__control:focus:before': {
                'background-color': config$$1['color_' + tint + '_thumb_off_focus']
            },
            '&.pe-slider--focus:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:before,\
                &:not(.pe-slider--min):not(.pe-slider--pin) .pe-slider__control:focus:before': {
                'background-color': 'currentcolor',
                opacity: config$$1['color_' + tint + '_thumb_on_focus_opacity']
            },
            ' > .pe-icon': {
                color: config$$1['color_' + tint + '_icon']
            },
            ' .pe-slider__label': {
                color: config$$1['color_' + tint + '_label']
            }
        },
        '&.pe-slider--min:not(.pe-slider--disabled)': {
            ' .pe-slider__control': {
                'background-color': 'transparent'
            },
            ' .pe-slider__thumb': {
                'opacity': 0
            },
            ' .pe-slider__control:after': {
                'border-color': config$$1['color_' + tint + '_track_inactive']
            },
            '&.pe-slider--active .pe-slider__control:after': {
                'border-color': config$$1['color_' + tint + '_track_active']
            },
            '&.pe-slider--ticks': {
                ' .pe-slider__control': {
                    'background-color': config$$1['color_' + tint + '_tick']
                },
                ' .pe-slider__control:after': {
                    'border-color': 'transparent'
                }
            },
            ' .pe-slider__pin': {
                'background-color': config$$1['color_' + tint + '_track_inactive']
            }
        }
    })];
};

var createStyles$33 = function createStyles(config$$1) {
    return [style$14(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$14(config$$1, 'dark', ' '),
        // has dark theme
        style$14(config$$1, 'dark', '&')]
    }];
};

var color$14 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$33);
});

var themeConfigFn$18 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].slider;
var config$19 = themeConfigFn$18 ? themeConfigFn$18(componentConfig$16) : componentConfig$16;
var id$19 = 'pe-slider';

styler.add(id$19, layout$20(config$19), color$14(config$19));

var _extends$18 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$19 = {
    block: 'pe-slider',
    thumb: 'pe-slider__thumb',
    label: 'pe-slider__label',
    track: 'pe-slider__track',
    trackPart: 'pe-slider__track-part',
    trackPartValue: 'pe-slider__track-value',
    trackPartRest: 'pe-slider__track-rest',
    trackBar: 'pe-slider__track-bar',
    trackBarValue: 'pe-slider__track-bar-value',

    control: 'pe-slider__control',
    ticks: 'pe-slider__ticks',
    tick: 'pe-slider__ticks-tick',
    pin: 'pe-slider__pin',

    isDisabled: 'pe-slider--disabled',
    isActive: 'pe-slider--active',
    hasTrack: 'pe-slider--track',
    hasPin: 'pe-slider--pin',
    hasFocus: 'pe-slider--focus',
    isAtMin: 'pe-slider--min',
    hasTicks: 'pe-slider--ticks'
};

var focusElement = void 0;

// const eventStartType = window.PointerEvent ? 'pointerdown' : (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) ? 'touchstart' : 'mousedown';
var eventMoveType = window.PointerEvent ? 'pointermove' : 'ontouchmove' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchmove' : 'mousemove';
var eventEndType = window.PointerEvent ? 'pointerup' : 'ontouchend' in window || window.DocumentTouch && document instanceof window.DocumentTouch ? 'touchend' : 'mouseup';

var deFocus = function deFocus(ctrl) {
    if (focusElement) {
        focusElement.blur();
    }
    focusElement = undefined;
    ctrl.hasFocus = false;
};

var focus = function focus(ctrl, el) {
    deFocus(ctrl);
    focusElement = el;
    ctrl.hasFocus = true;
};

var positionFromEvent = function positionFromEvent(e, isVertical) {
    if (p.isTouch) {
        return isVertical ? e.touches[0].pageY : e.touches[0].pageX;
    } else {
        return isVertical ? e.pageY : e.pageX;
    }
};

var updatePinPosition = function updatePinPosition(ctrl) {
    if (ctrl.controlEl && ctrl.pinEl) {
        var left = ctrl.fraction() * ctrl.rangeWidth;
        ctrl.pinEl.style.left = left + 'px';
    }
};

var updateValue = function updateValue(ctrl, value) {
    ctrl.setValue(value);
    updatePinPosition(ctrl);
};

var generateTickMarks = function generateTickMarks(min, max, stepSize) {
    var steps = Math.round((max - min) / stepSize);
    var items = [];
    var s = steps + 1;
    while (s > 0) {
        items.push(__WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$19.tick }));
        s--;
    }
    return items;
};

var readRangeData = function readRangeData(ctrl) {
    if (ctrl.controlEl) {
        // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
        ctrl.controlWidth = componentConfig$16.thumb_size;
        ctrl.rangeWidth = ctrl.trackEl.getBoundingClientRect().width - ctrl.controlWidth;
        var styles = window.getComputedStyle(ctrl.trackEl);
        ctrl.rangeOffset = parseFloat(styles.marginLeft);
    }
};

var calculateClickOffset = function calculateClickOffset(ctrl) {
    var controlOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    ctrl.clickOffset = ctrl.trackEl.getBoundingClientRect().left - (ctrl.rangeOffset - ctrl.controlWidth / 2) + controlOffset;
};

var initControlEvent = function initControlEvent(ctrl, e) {
    var controlPos = ctrl.controlEl.getBoundingClientRect().left;
    var eventPos = positionFromEvent(e);
    var controlOffset = eventPos - controlPos - ctrl.controlWidth / 2;
    calculateClickOffset(ctrl, controlOffset);
};

var initTrackEvent = function initTrackEvent(ctrl) {
    calculateClickOffset(ctrl, 0);
};

var handlePosEvent = function handlePosEvent(ctrl, e) {
    var pos = positionFromEvent(e) - ctrl.clickOffset;
    var value = ctrl.min + (pos - ctrl.rangeOffset) / ctrl.rangeWidth * (ctrl.max - ctrl.min);
    updateValue(ctrl, value);
    __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
};

var startDrag = function startDrag(ctrl, opts, e) {
    if (ctrl.isDragging) return;
    e.preventDefault();
    ctrl.isDragging = true;
    ctrl.isActive = true;
    deFocus(ctrl);

    var drag = function drag(e) {
        if (!ctrl.isDragging) return;
        handlePosEvent(ctrl, e);
    };

    var endDrag = function endDrag() {
        if (!ctrl.isDragging) return;
        ctrl.isDragging = false;
        ctrl.isActive = false;
        deFocus(ctrl);
        window.removeEventListener(eventMoveType, drag);
        window.removeEventListener(eventEndType, endDrag);
        __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
    };

    window.addEventListener(eventMoveType, drag);
    window.addEventListener(eventEndType, endDrag);

    readRangeData(ctrl);

    if (opts.pin) {
        updatePinPosition(ctrl);
    }
};

var startTrack = function startTrack(ctrl, opts, e) {
    e.preventDefault();
    if (ctrl.isDragging) return;
    readRangeData(ctrl);
    initTrackEvent(ctrl);
    handlePosEvent(ctrl, e);
    startDrag(ctrl, opts, e);
};

var createSlider = function createSlider(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var hasTicks = arguments[2];
    var interactiveTrack = arguments[3];

    var fraction = ctrl.fraction();
    var stepCount = Math.max(10, parseInt(opts.step, 10) || 1); // not more than 100 steps on the screen

    var onStartTrack = function onStartTrack(e) {
        startTrack(ctrl, opts, e);
    };

    var onInitDrag = function onInitDrag(e) {
        readRangeData(ctrl);
        initControlEvent(ctrl, e);
        startDrag(ctrl, opts, e);
    };

    var flexValueCss = fraction + ' 1 0%';
    var flexRestValue = 1 - fraction;
    var flexRestCss = flexRestValue + ' 1 0%';

    return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', _extends$18({}, {
        class: CSS_CLASSES$19.track,
        config: function config$$1(el, inited) {
            if (inited) return;
            ctrl.trackEl = el;
            if (opts.pin) {
                setTimeout(function () {
                    updatePinPosition(ctrl);
                }, 0);
            }
        }
    }, interactiveTrack && !opts.disabled && !p.isTouch ? {
        onmousedown: onStartTrack
    } : null, interactiveTrack && !opts.disabled && p.isTouch ? {
        ontouchstart: onStartTrack
    } : null), [__WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$19.trackPart + ' ' + CSS_CLASSES$19.trackPartValue,
        style: {
            flex: flexValueCss,
            '-ms-flex': flexValueCss,
            webkitFlex: flexValueCss
        }
    }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$19.trackBar }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$19.trackBarValue }))), __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', _extends$18({}, {
        class: CSS_CLASSES$19.control,
        config: function config$$1(el, inited) {
            if (inited) return;
            ctrl.controlEl = el;
        }
    }, opts.disabled ? {
        disabled: true
    } : {
        tabindex: opts.tabindex || 0,
        onfocus: function onfocus() {
            focus(ctrl, ctrl.controlEl);
        },
        onblur: function onblur() {
            deFocus(ctrl);
        },
        onkeydown: function onkeydown(e) {
            if (e.which === 27) {
                // ESCAPE
                ctrl.controlEl.blur(e);
            } else if (e.which === 37) {
                // LEFT
                ctrl.decrease(e.shiftKey);
            } else if (e.which === 38) {
                // UP
                ctrl.increase(e.shiftKey);
            } else if (e.which === 39) {
                // RIGHT
                ctrl.increase(e.shiftKey);
            } else if (e.which === 40) {
                // DOWN
                ctrl.decrease(e.shiftKey);
            }
            readRangeData(ctrl);
            updatePinPosition(ctrl);
        }
    }, !opts.disabled && !p.isTouch ? {
        onmousedown: onInitDrag
    } : null, !opts.disabled && p.isTouch ? {
        ontouchstart: onInitDrag
    } : null, opts.events ? opts.events : null, hasTicks ? {
        step: stepCount
    } : null), opts.icon ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$19.thumb }, opts.icon) : null), __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$19.trackPart + ' ' + CSS_CLASSES$19.trackPartRest,
        style: {
            flex: flexRestCss,
            '-ms-flex': flexRestCss,
            webkitFlex: flexRestCss,
            'max-width': flexRestValue * 100 + '%' // for IE Edge
        }
    }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$19.trackBar }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$19.trackBarValue }))), hasTicks && !opts.disabled ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$19.ticks }, generateTickMarks(ctrl.min, ctrl.max, stepCount)) : null, hasTicks && opts.pin && !opts.disabled ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$19.pin,
        value: Math.round(ctrl.value()),
        config: function config$$1(el, inited) {
            if (inited) return;
            ctrl.pinEl = el;
        }
    }) : null])];
};

var createView$20 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (typeof opts.value === 'function') {
        ctrl.setValue(opts.value());
    }
    var tag = opts.tag || 'div';
    var hasTicks = opts.ticks !== undefined && opts.ticks !== false;
    var interactiveTrack = opts.interactiveTrack !== undefined ? opts.interactiveTrack : true;
    var props = {
        class: [CSS_CLASSES$19.block, opts.disabled ? CSS_CLASSES$19.isDisabled : null, opts.pin ? CSS_CLASSES$19.hasPin : null, interactiveTrack ? CSS_CLASSES$19.hasTrack : null, ctrl.isActive ? CSS_CLASSES$19.isActive : null, ctrl.hasFocus ? CSS_CLASSES$19.hasFocus : null, ctrl.fraction() === 0 ? CSS_CLASSES$19.isAtMin : null, hasTicks ? CSS_CLASSES$19.hasTicks : null, opts.class].join(' '),
        id: opts.id || '',
        config: opts.config
    };
    var content = createSlider(ctrl, opts, hasTicks, interactiveTrack);
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var component$28 = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var min = opts.min !== undefined ? opts.min : 0;
        var max = opts.max !== undefined ? opts.max : 100;
        var step = opts.step !== undefined ? opts.step : 1;
        var defaultValue = 0;
        var _fraction = min;
        var _value = defaultValue;

        if (typeof opts.value === 'function') {
            var v = opts.value();
            _value = v !== undefined ? v : defaultValue;
        } else {
            _value = opts.value !== undefined ? opts.value : defaultValue;
        }

        var setValue = function setValue(v) {
            if (v < min) v = min;
            if (v > max) v = max;
            _value = step ? Math.round(v / step) * step : v;
            _fraction = (_value - min) / (max - min);
            if (opts.getValue) {
                opts.getValue(_value);
            }
        };

        setValue(_value);

        return {
            min: min,
            max: max,
            trackEl: null,
            controlEl: null,
            pinEl: null,
            setValue: setValue,
            value: function value() {
                return _value;
            },
            fraction: function fraction() {
                return _fraction;
            },
            increase: function increase(multiply) {
                return setValue(_value + (multiply ? 10 : 1) * (step || 1));
            },
            decrease: function decrease(multiply) {
                return setValue(_value - (multiply ? 10 : 1) * (step || 1));
            },
            isActive: false,
            hasFocus: false,
            isDragging: false,
            // coordinates
            controlWidth: 0,
            rangeWidth: 0,
            rangeOffset: 0,
            clickOffset: 0
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$20(ctrl, opts);
    }
};

var show$5 = function show(ctrl, opts) {
    var height = ctrl.el.getBoundingClientRect().height;
    return {
        el: ctrl.containerEl,
        showDuration: opts.showDuration || .4,
        showDelay: opts.showDelay || 0,
        beforeShow: function beforeShow() {
            return ctrl.containerEl.style.transform = 'translate3d(0, ' + height + 'px, 0)';
        },
        show: function show() {
            return ctrl.containerEl.style.transform = 'translate3d(0, ' + 0 + 'px, 0)';
        }
    };
};

var hide$5 = function hide(ctrl, opts) {
    var height = ctrl.el.getBoundingClientRect().height;
    return {
        el: ctrl.containerEl,
        hideDuration: opts.hideDuration || .4,
        hideDelay: opts.hideDelay || 0,
        hide: function hide() {
            return ctrl.containerEl.style.transform = 'translate3d(0, ' + height + 'px, 0)';
        },
        afterHide: function afterHide() {
            return ctrl.containerEl.style.transform = 'translate3d(0, ' + 0 + 'px, 0)';
        }
    };
};

var transitions$1 = {
    show: show$5,
    hide: hide$5
};

var buttonPaddingH$1 = 8; // padding, inner text space

var componentConfig$17 = {
    width: 274,
    border_radius: 0,
    title_padding_h: buttonPaddingH$1,
    title_single_padding_v: 14,
    title_multi_padding_v: 20,
    side_padding: 24 - buttonPaddingH$1,
    font_size: 14,
    line_height: 20,
    tablet_min_width: 288,
    tablet_max_width: 568,

    // switch light and dark: dark on light and light on dark

    color_light_background: common$1.rgba(common$1.color_dark_background),
    color_light_text: common$1.rgba(common$1.color_dark_foreground, common$1.blend_light_dark_primary),

    color_dark_background: common$1.rgba(common$1.color_light_background),
    color_dark_text: common$1.rgba(common$1.color_light_foreground, common$1.blend_light_text_primary)
};

function _defineProperty$19(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tabletStyle = function tabletStyle(config$$1) {
    return {
        'min-width': config$$1.tablet_min_width + 'px',
        'max-width': config$$1.tablet_max_width + 'px',
        'border-bottom-left-radius': 0,
        'border-bottom-right-radius': 0,
        'border-top-left-radius': common$1.unit_block_border_radius + 'px',
        'border-top-right-radius': common$1.unit_block_border_radius + 'px',

        '&.pe-notification--horizontal': {
            ' .pe-notification__title': {
                'padding-right': '30px'
            }
        }
    };
};

var createStyles$34 = function createStyles(config$$1) {
    return [_defineProperty$19({}, '@media (min-width: ' + common$1.breakpoint_small_handset_landscape + 'px)', {
        '.pe-notification--snackbar': tabletStyle(config$$1)
    })];
};

var layout$21 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$34);
});

function _defineProperty$20(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$15 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$20({}, scope + '.pe-notification--snackbar', {
        color: config$$1['color_' + tint + '_text'],
        background: config$$1['color_' + tint + '_background']
    })];
};

var createStyles$35 = function createStyles(config$$1) {
    return [style$15(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$15(config$$1, 'dark', ' '),
        // has dark theme
        style$15(config$$1, 'dark', '&')]
    }];
};

var color$15 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$35);
});

var themeConfigFn$19 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].snackbar;
var config$20 = themeConfigFn$19 ? themeConfigFn$19(componentConfig$17) : componentConfig$17;
var id$20 = 'pe-notification-snackbar';

styler.add(id$20, layout$21(config$20), color$15(config$20));

var snackbar = multiple({
    instance: component$22,
    class: 'pe-notification pe-notification--snackbar',
    defaultId: 'default_snackbar',
    tag: 'div.pe-snackbar__holder',
    noneTag: 'span.pe-snackbar__placeholder',
    bodyShowClass: 'pe-snackbar--open',
    queue: true,
    transitions: transitions$1
});

var rgba$11 = common$1.rgba;

var defaultConfig = {
    size_small: 24,
    size_regular: 32,
    size_medium: 40,
    size_large: 48,
    size_fab: 56,

    color_light_raised_background: rgba$11(common$1.color_light_background),
    // also use light background with dark theme
    color_dark_raised_background: rgba$11(common$1.color_light_background)
};

var sizes = function sizes(size) {
    return {
        width: size + 'px',
        height: size + 'px'
    };
};

var sizesRaised = function sizesRaised(size) {
    var padding = size / 4;
    var paddedSize = size + padding * 2;
    return {
        width: paddedSize + 'px',
        height: paddedSize + 'px',
        padding: padding + 'px'
    };
};

var createStyles$36 = function createStyles(config$$1) {
    return [{
        '.pe-spinner': [mixin.vendorize({
            'transition-timing-function': 'ease-out'
        }, common$1.prefixes_transition), mixin.vendorize({
            'transition-property': 'opacity'
        }, common$1.prefixes_transition), {
            opacity: 0,

            '&.pe-spinner--visible, &.pe-spinner--permanent': {
                opacity: 1
            },

            '&.pe-spinner--small': sizes(config$$1.size_small),
            '&.pe-spinner--regular': sizes(config$$1.size_regular),
            '&.pe-spinner--medium': sizes(config$$1.size_medium),
            '&.pe-spinner--large': sizes(config$$1.size_large),
            '&.pe-spinner--fab': sizes(config$$1.size_fab),

            '&.pe-spinner--raised': {
                position: 'relative',
                'border-radius': '50%',

                '&.pe-spinner--small': sizesRaised(config$$1.size_small),
                '&.pe-spinner--regular': sizesRaised(config$$1.size_regular),
                '&.pe-spinner--medium': sizesRaised(config$$1.size_medium),
                '&.pe-spinner--large': sizesRaised(config$$1.size_large),
                '&.pe-spinner--fab': sizesRaised(config$$1.size_fab)
            }
        }]
    }];
};

var layout$22 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$36);
});

function _defineProperty$21(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$16 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$21({}, scope + '.pe-spinner', {
        '&.pe-spinner--raised': {
            'background-color': config$$1['color_' + tint + '_raised_background']
        }
    })];
};

var createStyles$37 = function createStyles(config$$1) {
    return [style$16(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$16(config$$1, 'dark', ' '),
        // has dark theme
        style$16(config$$1, 'dark', '&')]
    }];
};

var color$16 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$37);
});

var themeConfigFn$20 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"]['spinner-default'];
var config$21 = themeConfigFn$20 ? themeConfigFn$20(defaultConfig) : defaultConfig;
var id$21 = 'pe-spinner-default';

styler.add(id$21, layout$22(config$21), color$16(config$21));

var _extends$19 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$21 = {
    block: 'pe-spinner',
    placeholder: 'pe-spinner--placeholder',
    animation: 'pe-spinner__animation',
    visible: 'pe-spinner--visible',
    small: 'pe-spinner--small',
    regular: 'pe-spinner--regular',
    medium: 'pe-spinner--medium',
    large: 'pe-spinner--large',
    fab: 'pe-spinner--fab',
    raised: 'pe-spinner--raised',
    permanent: 'pe-spinner--permanent',
    singleColor: 'pe-spinner--single-color',
    animated: 'pe-spinner--animated'
};

var typeClasses$3 = {
    small: CSS_CLASSES$21.small,
    regular: CSS_CLASSES$21.regular,
    medium: CSS_CLASSES$21.medium,
    large: CSS_CLASSES$21.large,
    fab: CSS_CLASSES$21.fab
};

var classForType$3 = function classForType() {
    var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';

    return typeClasses$3[mode];
};

var show$6 = function show(ctrl, opts) {
    if (ctrl.isTransitioning) {
        return;
    }
    ctrl.isTransitioning = true;
    return transition$1.show(_extends$19({}, opts, {
        el: ctrl.el,
        showClass: CSS_CLASSES$21.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = true;
    });
};

var hide$6 = function hide(ctrl, opts) {
    if (ctrl.isTransitioning) {
        return;
    }
    ctrl.isTransitioning = true;
    return transition$1.hide(_extends$19({}, opts, {
        el: ctrl.el,
        afterHide: function afterHide() {
            return ctrl.el.style.display = 'none';
        },
        showClass: CSS_CLASSES$21.visible
    })).then(function () {
        ctrl.isTransitioning = false;
        ctrl.visible = false;
        ctrl.hide = false;
        __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw(); // removes remainder of drawn component
    });
};

var notifyState$1 = function notifyState(ctrl, opts) {
    if (opts.percentage && opts.getPercentage) {
        var percentage = void 0;
        if (typeof opts.percentage === 'function') {
            percentage = opts.percentage();
        } else {
            percentage = opts.percentage;
        }
        opts.getPercentage(percentage, ctrl, opts);
    }
};

var createView$21 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var props = _extends$19({}, {
        class: [CSS_CLASSES$21.block, classForType$3(opts.type), opts.singleColor ? CSS_CLASSES$21.singleColor : null, opts.raised ? CSS_CLASSES$21.raised : null, opts.animated ? CSS_CLASSES$21.animated : null, opts.permanent ? CSS_CLASSES$21.permanent : null, opts.class].join(' '),
        id: opts.id || '',
        config: function config$$1(el, inited, context, vdom) {
            if (inited) return;
            if (opts.config) {
                opts.config(el, inited, context, vdom);
            }
            ctrl.el = el;

            notifyState$1(ctrl, opts);

            if (!opts.permanent) {
                setTimeout(function () {
                    show$6(ctrl, opts);
                }, 0);
            }
        }
    }, opts.events ? opts.events : null);

    notifyState$1(ctrl, opts);

    if (ctrl.hide) {
        setTimeout(function () {
            hide$6(ctrl, opts);
        }, 0);
    }

    var content = [opts.raised && opts.content ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$2, {
        z: opts.z
    }) : null, opts.content || __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$21.animation }, 'Specific spinner missing')];

    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var delay = function delay(opts, mode) {
    var value = opts[mode];
    return value !== true && !isNaN(value) ? parseFloat(value, 10) * 1000 : false;
};

var component$32 = {
    controller: function controller() {
        var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        return {
            el: null,
            isTransitioning: false,
            visible: opts.permanent || false,
            hide: false,
            percentage: 0
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        if (!ctrl.visible) {
            if (opts.hide !== undefined && !opts.hide || opts.show) {
                var showDelay = delay(opts, 'show');
                if (showDelay) {
                    setTimeout(function () {
                        return ctrl.visible = true, __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
                    }, showDelay);
                } else {
                    ctrl.visible = true;
                }
            }
        } else {
            if (opts.show !== undefined && !opts.show || opts.hide) {
                var hideDelay = delay(opts, 'hide');
                if (hideDelay) {
                    setTimeout(function () {
                        return ctrl.hide = true, __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
                    }, hideDelay);
                } else {
                    ctrl.hide = true;
                }
            }
        }
        if (ctrl.visible) {
            return createView$21(ctrl, opts);
        } else {
            return __WEBPACK_IMPORTED_MODULE_0_mithril___default()('span', { class: CSS_CLASSES$21.placeholder });
        }
    }
};

var componentConfig$18 = {
    animation_duration: 1, // seconds

    color_light: common$1.rgba(common$1.color_light_foreground),
    color_dark: common$1.rgba(common$1.color_dark_foreground)
};

function _defineProperty$22(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var positionBlades = function positionBlades(config$$1) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (i) {
        // reverse to improve performance on iOS
        var delay = -(1 / 12 * i * config$$1.animation_duration);
        var rotation = 360 - 360 / 12 * i;

        return _defineProperty$22({}, ' div:nth-of-type(' + (i + 1) + ')', [mixin.vendorize({
            'transform': 'rotate(' + rotation + 'deg) translate3d(0,-142%,0)'
        }, common$1.prefixes_transform), mixin.vendorize({
            'animation': 'iosSpinnerFade ' + config$$1.animation_duration + 's ' + delay + 's linear infinite'
        }, common$1.prefixes_animation)]);
    });
};

var createStyles$38 = function createStyles(config$$1) {
    return [{
        '.pe-spinner--ios': [mixin.vendorize({ 'transform': 'translate3d(0,0,0)' }, common$1.prefixes_transform), positionBlades(config$$1), {
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

var layout$23 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$38);
});

function _defineProperty$23(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$17 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$23({}, scope + '.pe-spinner--ios', {
        color: config$$1['color_' + tint],

        ' > div': {
            background: 'currentcolor'
        }
    })];
};

var createStyles$39 = function createStyles(config$$1) {
    return [style$17(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$17(config$$1, 'dark', ' '),
        // has dark theme
        style$17(config$$1, 'dark', '&')]
    }];
};

var color$17 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$39);
});

var themeConfigFn$21 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"]['spinner-ios'];
var config$22 = themeConfigFn$21 ? themeConfigFn$21(componentConfig$18) : componentConfig$18;
var id$22 = 'pe-spinner-ios';

styler.add(id$22, layout$23(config$22), color$17(config$22));

var CSS_CLASSES$20 = {
    block: 'pe-spinner--ios'
};

var component$30 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var blades = [];
        for (var i = 0; i < 12; i = i + 1) {
            blades.push(__WEBPACK_IMPORTED_MODULE_0_mithril___default()('div'));
        }
        opts.content = blades;
        opts.class = [CSS_CLASSES$20.block, opts.class].join(' ');
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$32, opts);
    }
};

var _extends$20 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var componentConfig$19 = _extends$20({}, defaultConfig, {
    border_width_small: defaultConfig.size_small / defaultConfig.size_regular * 3,
    border_width_regular: 3,
    border_width_medium: defaultConfig.size_medium / defaultConfig.size_regular * 3,
    border_width_large: defaultConfig.size_large / defaultConfig.size_regular * 3,
    border_width_fab: defaultConfig.size_fab / defaultConfig.size_regular * 3,

    color_light: common$1.rgba(common$1.color_primary),
    color_dark: common$1.rgba(common$1.color_primary)
});

var createStyles$40 = function createStyles() {
    return [{
        '.pe-spinner-determinate': {
            position: 'relative',

            ' .pe-spinner-determinate__animation': [mixin.vendorize({
                'animation-duration': '1.5s'
            }, common$1.prefixes_animation), {
                position: 'absolute',
                width: '100%',
                height: '100%'
            }],

            ' .pe-spinner-determinate__circle': {
                position: 'absolute',
                'box-sizing': 'border-box',
                width: '100%',
                height: '100%',
                'border-style': 'solid',
                'border-radius': '50%'
            }
        }
    }];
};

var layout$24 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$40);
});

function _defineProperty$24(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$18 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$24({}, scope + '.pe-spinner--determinate', {
        color: config$$1['color_' + tint],

        ' .pe-spinner-determinate__circle': {
            'border-color': 'currentcolor'
        }
    })];
};

var createStyles$41 = function createStyles(config$$1) {
    return [style$18(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$18(config$$1, 'dark', ' '),
        // has dark theme
        style$18(config$$1, 'dark', '&')]
    }];
};

var color$18 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$41);
});

var themeConfigFn$22 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"]['spinner-determinate'];
var config$23 = themeConfigFn$22 ? themeConfigFn$22(componentConfig$19) : componentConfig$19;
var id$23 = 'pe-spinner-determinate';

styler.add(id$23, layout$24(config$23), color$18(config$23));

/*
https://gist.github.com/gre/1650294
Easing Functions - inspired from http://gizma.com/easing/
Only considering the t value for the range [0, 1] => [0, 1]
*/

var easing = {
    // no easing, no acceleration
    linear: function linear(t) {
        return t;
    },
    // accelerating from zero velocity
    easeInQuad: function easeInQuad(t) {
        return t * t;
    },
    // decelerating to zero velocity
    easeOutQuad: function easeOutQuad(t) {
        return t * (2 - t);
    },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function easeInOutQuad(t) {
        return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    // accelerating from zero velocity
    easeInCubic: function easeInCubic(t) {
        return t * t * t;
    },
    // decelerating to zero velocity
    easeOutCubic: function easeOutCubic(t) {
        return --t * t * t + 1;
    },
    // acceleration until halfway, then deceleration
    easeInOutCubic: function easeInOutCubic(t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    // accelerating from zero velocity
    easeInQuart: function easeInQuart(t) {
        return t * t * t * t;
    },
    // decelerating to zero velocity
    easeOutQuart: function easeOutQuart(t) {
        return 1 - --t * t * t * t;
    },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function easeInOutQuart(t) {
        return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    // accelerating from zero velocity
    easeInQuint: function easeInQuint(t) {
        return t * t * t * t * t;
    },
    // decelerating to zero velocity
    easeOutQuint: function easeOutQuint(t) {
        return 1 + --t * t * t * t * t;
    },
    // acceleration until halfway, then deceleration
    easeInOutQuint: function easeInOutQuint(t) {
        return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
};

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

var CSS_CLASSES$22 = {
    block: 'pe-spinner-determinate',
    animation: 'pe-spinner-determinate__animation',
    circle: 'pe-spinner-determinate__circle',
    circleRight: 'pe-spinner-determinate__circle--right',
    circleLeft: 'pe-spinner-determinate__circle--left'
};

var sizeFromType = function sizeFromType() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'regular';
    return componentConfig$19['size_' + type];
};

var percentageValue = function percentageValue(min, max, percentage) {
    return min + (max - min) * percentage;
};

var rotateCircle = function rotateCircle(el, min, max, percentage) {
    var style = el.style;
    style['transform'] = style['-webkit-transform'] = style['-moz-transform'] = style['-ms-transform'] = style['-o-transform'] = 'rotate(' + percentageValue(min, max, percentage) + 'deg)';
};

var animate = function animate(ctrlEl, size, percentage) {
    var animationEl = ctrlEl.querySelector('.' + CSS_CLASSES$22.animation);
    var animationElStyle = animationEl.style;

    if (percentage < 0.5) {
        animationElStyle.clip = 'rect(0px, ' + size + 'px, ' + size + 'px, ' + size / 2 + 'px)';
    } else {
        animationElStyle.clip = 'rect(auto, auto, auto, auto)';
    }

    var leftCircle = ctrlEl.querySelector('.' + CSS_CLASSES$22.circleLeft);
    var rightCircle = ctrlEl.querySelector('.' + CSS_CLASSES$22.circleRight);
    leftCircle.style.clip = rightCircle.style.clip = 'rect(0px, ' + size / 2 + 'px, ' + size + 'px, ' + '0px)';
    rotateCircle(rightCircle, 0, 180, Math.min(1, percentage * 2));
    rotateCircle(leftCircle, 0, 360, percentage);
};

var handlePercentage = function handlePercentage(percentage, ctrl, size) {
    var opts = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    if (!ctrl.el) {
        return;
    }

    ctrl._previousPercentage = ctrl._previousPercentage || 0;

    if (opts.animated && ctrl._previousPercentage !== percentage) {
        var STEP_DURATION = opts.updateDuration * 1000;
        var start = null;
        var step = function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            var stepPercentage = 1.0 / STEP_DURATION * progress;
            var newPercentage = ctrl._previousPercentage + stepPercentage * (percentage - ctrl._previousPercentage);
            animate(ctrl.el, size, easing.easeInOutQuad(newPercentage));
            ctrl._previousPercentage = newPercentage;
            if (start && progress < STEP_DURATION) {
                window.requestAnimationFrame(step);
            } else {
                start = null;
            }
        };
        window.requestAnimationFrame(step);
    } else {
        animate(ctrl.el, size, percentage);
        ctrl._previousPercentage = percentage;
    }
};

var component$33 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var size = sizeFromType(opts.type);
        opts.content = __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
            class: CSS_CLASSES$22.animation
        }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
            class: [CSS_CLASSES$22.circle, CSS_CLASSES$22.circleLeft].join(' ')
        }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
            class: [CSS_CLASSES$22.circle, CSS_CLASSES$22.circleRight].join(' ')
        })]);
        opts.class = [CSS_CLASSES$22.block, opts.class].join(' ');
        opts.getPercentage = function (percentage, ctrl) {
            return handlePercentage(percentage, ctrl, size, opts);
        };
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$32, opts);
    }
};

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

var arc_size = 270; // degrees - amount of circle the arc takes up
var arc_time = 1.333; // s - time it takes to expand and contract arc
var arc_start_degrees = 360 / 5 * 3; // degrees - how much the start location of the arc should rotate each time, 216 gives us a 5 pointed star shape (it's 360/5 * 3). For a 7 pointed star, we might do 360/7 * 3 = 154.286.
var rotation_duration = 360 * arc_time / (arc_start_degrees + (360 - arc_size)); // 1.568s

var componentConfig$20 = {
    border_width_small: defaultConfig.size_small / defaultConfig.size_regular * 3,
    border_width_regular: 3,
    border_width_medium: defaultConfig.size_medium / defaultConfig.size_regular * 3,
    border_width_large: defaultConfig.size_large / defaultConfig.size_regular * 3,
    border_width_fab: defaultConfig.size_fab / defaultConfig.size_regular * 3,
    rotation_duration: rotation_duration,
    arc_size: arc_size,
    arc_time: arc_time,
    arc_start_degrees: arc_start_degrees,

    color_light_single: common$1.rgba(common$1.color_primary),
    color_light_1: '#42a5f5', // blue 400
    color_light_2: '#f44336', // red 500
    color_light_3: '#fdd835', // yellow 600,
    color_light_4: '#4caf50', // green 500

    color_dark_single: common$1.rgba(common$1.color_primary),
    color_dark_1: '#42a5f5', // blue 400
    color_dark_2: '#f44336', // red 500
    color_dark_3: '#fdd835', // yellow 600,
    color_dark_4: '#4caf50' // green 500
};

function _defineProperty$25(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var OPACITY_MIN = 0;
var OPACITY_MAX = .99;
var CURVE_INFINITE = 'cubic-bezier(0.4, 0.0, 0.2, 1) infinite both';

var createStyles$42 = function createStyles(config$$1) {
    return [{
        '.pe-spinner-indeterminate': {

            ' .pe-spinner-indeterminate__animation': [mixin.vendorize({
                'animation': 'indeterminateSpinnerRotate ' + config$$1.rotation_duration + 's linear infinite'
            }, common$1.prefixes_animation), {
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
            }, common$1.prefixes_animation), {
                'box-sizing': 'border-box',
                height: '100%',
                'border-style': 'solid',
                'border-color': 'inherit',
                'border-radius': '50%',
                'border-bottom-color': 'transparent !important'
            }],

            '&': ['small', 'regular', 'medium', 'large', 'fab'].map(function (size) {
                return _defineProperty$25({}, '&.pe-spinner--' + size, {
                    ' .pe-spinner-indeterminate__circle': {
                        'border-width': config$$1['border_width_' + size] + 'px'
                    }
                });
            }),

            ' .pe-spinner-indeterminate__circle-clipper--left .pe-spinner-indeterminate__circle': [mixin.vendorize({
                'transform': 'rotate(129deg)'
            }, common$1.prefixes_transform), mixin.vendorize({
                'animation': 'indeterminateLeftSpin ' + config$$1.arc_time + 's ' + CURVE_INFINITE
            }, common$1.prefixes_animation), {
                'border-right-color': 'transparent !important'
            }],

            ' .pe-spinner-indeterminate__circle-clipper--right .pe-spinner-indeterminate__circle': [mixin.vendorize({
                'transform': 'rotate(-129deg)'
            }, common$1.prefixes_transform), mixin.vendorize({
                'animation': 'indeterminateRightSpin ' + config$$1.arc_time + 's ' + CURVE_INFINITE
            }, common$1.prefixes_animation), {
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
                'animation': 'indeterminateFillUnfillRotate ' + 4 * config$$1.arc_time + 's ' + CURVE_INFINITE
            }, common$1.prefixes_animation), [1, 2, 3, 4].map(function (num) {
                return layerAnimation(config$$1, num);
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
            '@keyframes indeterminateFillUnfillRotate': kfFillUnfillRotate(config$$1),
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

var kfFillUnfillRotate = function kfFillUnfillRotate(config$$1) {
    return {
        ' 12.5%': {
            transform: 'rotate(' + 0.5 * config$$1.arc_size + 'deg)'
        },
        ' 25%': {
            transform: 'rotate(' + 1.0 * config$$1.arc_size + 'deg)'
        },
        ' 37.5%': {
            transform: 'rotate(' + 1.5 * config$$1.arc_size + 'deg)'
        },
        ' 50%': {
            transform: 'rotate(' + 2.0 * config$$1.arc_size + 'deg)'
        },
        ' 62.5%': {
            transform: 'rotate(' + 2.5 * config$$1.arc_size + 'deg)'
        },
        ' 75%': {
            transform: 'rotate(' + 3.0 * config$$1.arc_size + 'deg)'
        },
        ' 87.5%': {
            transform: 'rotate(' + 3.5 * config$$1.arc_size + 'deg)'
        },
        ' to': {
            transform: 'rotate(' + 4.0 * config$$1.arc_size + 'deg)'
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

var layerAnimation = function layerAnimation(config$$1, num) {
    return _defineProperty$25({}, '&.pe-spinner-indeterminate__layer--' + num, [mixin.vendorize({
        'animation': 'indeterminateFillUnfillRotate ' + 4 * config$$1.arc_time + 's ' + CURVE_INFINITE + ',  indeterminateLayer' + num + 'FadeInOut ' + 4 * config$$1.arc_time + 's ' + CURVE_INFINITE
    }, common$1.prefixes_animation)]);
};

var layout$25 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$42);
});

function _defineProperty$26(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var style$19 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$26({}, scope + '.pe-spinner-indeterminate', {

        color: config$$1['color_' + tint + '_single'],

        ' .pe-spinner-indeterminate__layer': {
            'border-color': 'currentcolor'
        },

        '&:not(.pe-spinner--single-color)': {
            ' .pe-spinner-indeterminate__layer--1': {
                'border-color': config$$1['color_' + tint + '_1']
            },
            ' .pe-spinner-indeterminate__layer--2': {
                'border-color': config$$1['color_' + tint + '_2']
            },
            ' .pe-spinner-indeterminate__layer--3': {
                'border-color': config$$1['color_' + tint + '_3']
            },
            ' .pe-spinner-indeterminate__layer--4': {
                'border-color': config$$1['color_' + tint + '_4']
            }
        }
    })];
};

var createStyles$43 = function createStyles(config$$1) {
    return [style$19(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$19(config$$1, 'dark', ' '),
        // has dark theme
        style$19(config$$1, 'dark', '&')]
    }];
};

var color$19 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$43);
});

var themeConfigFn$23 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"]['spinner-indeterminate'];
var config$24 = themeConfigFn$23 ? themeConfigFn$23(componentConfig$20) : componentConfig$20;
var id$24 = 'pe-spinner-indeterminate';

styler.add(id$24, layout$25(config$24), color$19(config$24));

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

var CSS_CLASSES$23 = {
    block: 'pe-spinner-indeterminate',
    animation: 'pe-spinner-indeterminate__animation',
    layer: 'pe-spinner-indeterminate__layer',
    layerN: 'pe-spinner-indeterminate__layer--',
    gapPatch: 'pe-spinner-indeterminate__gap-patch',
    circle: 'pe-spinner-indeterminate__circle',
    circleClipper: 'pe-spinner-indeterminate__circle-clipper',
    circleClipperLeft: 'pe-spinner-indeterminate__circle-clipper--left',
    circleClipperRight: 'pe-spinner-indeterminate__circle-clipper--right'
};

var layer = function layer(num) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: [CSS_CLASSES$23.layer, CSS_CLASSES$23.layerN + num].join(' ')
    }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: [CSS_CLASSES$23.circleClipper, CSS_CLASSES$23.circleClipperLeft].join(' ')
    }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$23.circle
    })), __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$23.gapPatch
    }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$23.circle
    })), __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: [CSS_CLASSES$23.circleClipper, CSS_CLASSES$23.circleClipperRight].join(' ')
    }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$23.circle
    }))]);
};

var component$35 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        opts.content = __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
            class: CSS_CLASSES$23.animation
        }, [1, 2, 3, 4].map(function (num) {
            return layer(num);
        }));
        opts.class = [CSS_CLASSES$23.block, opts.class].join(' ');
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$32, opts);
    }
};

var _extends$21 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba$12 = common$1.rgba;
var hit_area_padding = (common$1.grid_unit_icon_button - common$1.unit_icon_size) / 2; // 12

var config$26 = _extends$21({}, selectionControlConfig, {
    track_height: 14,
    track_length: 36,
    thumb_size: 20,
    padding: 1 * common$1.grid_unit_component,
    icon_button_padding: iconButtonConfig.padding,
    hit_area_padding: hit_area_padding,

    animation_duration: '.18s',

    color_light_thumb_on: rgba$12(common$1.color_primary),
    color_light_thumb_off: '#f1f1f1',
    color_light_thumb_disabled: '#bdbdbd',

    color_light_track_on: rgba$12(common$1.color_primary_faded),
    color_light_track_on_opacity: .55,
    color_light_track_off: rgba$12(common$1.color_light_foreground, common$1.blend_light_text_regular),
    color_light_track_off_opacity: .55,
    color_light_track_disabled: rgba$12(common$1.color_light_foreground, common$1.blend_light_background_disabled),
    color_light_track_disabled_opacity: 1,

    // color_light_focus_on and so on taken from selectionControlConfig

    color_dark_thumb_on: rgba$12(common$1.color_primary), // or '#80cbc4'
    color_dark_thumb_off: '#bdbdbd',
    color_dark_thumb_disabled: '#555',

    color_dark_track_on: rgba$12(common$1.color_primary_faded, common$1.blend_dark_text_tertiary), // or '#5a7f7c'
    color_dark_track_on_opacity: .9,
    color_dark_track_off: '#717171',
    color_dark_track_off_opacity: .55,
    color_dark_track_disabled: '#717171',
    color_dark_track_disabled_opacity: .3

    // color_dark_focus_on and so on taken from selectionControlConfig
});

var transition$2 = function transition(config$$1, properties) {
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : config$$1.animation_duration;

    return [mixin.defaultTransition(properties, duration, 'ease-out')];
};

var customSize = function customSize(config$$1, size) {
    var factor = size / common$1.unit_icon_size;
    var thumbSize = Math.floor(0.5 * config$$1.thumb_size * factor) * 2; // round to even
    var scaledTrackHeight = Math.floor(0.5 * config$$1.track_height * factor) * 2; // round to even
    var scaledTrackWidth = Math.floor(0.5 * config$$1.track_length * factor) * 2;
    var scaledThumbSize = Math.floor(0.5 * config$$1.thumb_size * factor) * 2;
    var trackTop = (config$$1.label_height * factor - scaledTrackHeight) / 2;
    var thumbPadding = config$$1.icon_button_padding;
    var thumbMargin = (size - scaledThumbSize) / 2;
    var thumbOuterSize = size + 2 * thumbPadding;
    var thumbOffsetMin = -(thumbOuterSize / 2) + thumbSize / 2;
    var thumbOffsetMax = thumbOffsetMin + scaledTrackWidth - thumbSize;
    var thumbOffsetY = thumbOffsetMin + thumbMargin;
    var trackVisualOffset = 0.3; // prevent sub pixel of track to shine through knob border

    return {
        ' .pe-control__label': {
            height: size + 'px',
            'min-width': scaledTrackWidth + 'px',

            ' span': {
                'padding-left': config$$1.padding * factor + 8 + scaledTrackWidth + 'px'
            }
        },
        ' .pe-control--switch__track': {
            left: trackVisualOffset + 'px',
            height: scaledTrackHeight + 'px',
            width: scaledTrackWidth - 2 * trackVisualOffset + 'px',
            top: trackTop + 'px',
            'border-radius': scaledTrackHeight + 'px'
        },
        ' .pe-control--switch__thumb': {
            top: thumbOffsetY + 'px',
            left: thumbOffsetMin + 'px',
            'z-index': 1
        },

        ' .pe-control--switch__knob': {
            position: 'relative',
            width: scaledThumbSize + 'px',
            height: scaledThumbSize + 'px',
            'border-radius': '50%',
            margin: thumbMargin + 'px'
        },

        ' .pe-button__label': {
            ' .pe-control--switch__knob': {
                ' .pe-icon': [mixin.fit(), {
                    width: '100%',
                    height: '100%'
                }]
            }
        },

        '&.pe-control--on': {
            ' .pe-control--switch__thumb': {
                left: thumbOffsetMax + 'px'
            }
        }
    };
};

var createStyles$44 = function createStyles(config$$1) {
    return [createStyles$12(config$$1, '.pe-control--switch', 'checkbox'), {
        '.pe-control--switch': {

            ' .pe-control--switch__track': [transition$2(config$$1, 'background, opacity'), {
                position: 'absolute',
                left: 0
            }],

            ' .pe-control--switch__thumb': [transition$2(config$$1, 'left, color'), {
                position: 'absolute',
                color: 'inherit',

                ':focus': {
                    outline: 0
                }
            }],

            ' .pe-button__focus': [transition$2(config$$1, 'all')],

            '&.pe-control--small': customSize(config$$1, common$1.unit_icon_size_small),
            '&.pe-control--regular': customSize(config$$1, common$1.unit_icon_size),
            '&.pe-control--medium': customSize(config$$1, common$1.unit_icon_size_medium),
            '&.pe-control--large': customSize(config$$1, common$1.unit_icon_size_large)
        }
    }];
};

var layout$26 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$44);
});

function _defineProperty$27(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$20 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [style$5(config$$1, tint, scope), _defineProperty$27({}, scope + '.pe-control--switch', {

        '&.pe-control--off': {
            ' .pe-control--switch__track': {
                opacity: config$$1['color_' + tint + '_track_off_opacity'],
                'background-color': config$$1['color_' + tint + '_track_off']
            },
            ' .pe-control--switch__thumb': {
                color: config$$1['color_' + tint + '_thumb_off']
            },
            ' .pe-control--switch__knob': {
                'background-color': 'currentcolor'
            },
            ' .pe-button--focus': {
                ' .pe-button__focus': {
                    opacity: config$$1['color_' + tint + '_focus_off_opacity'],
                    'background-color': config$$1['color_' + tint + '_focus_off']
                }
            }
        },

        '&.pe-control--on': {
            ' .pe-control--switch__track': {
                opacity: config$$1['color_' + tint + '_track_on_opacity'],
                'background-color': config$$1['color_' + tint + '_track_on']
            },
            ' .pe-control--switch__thumb': {
                color: config$$1['color_' + tint + '_thumb_on']
            },
            ' .pe-control--switch__knob': {
                'background-color': 'currentcolor'
            },
            ' .pe-button--focus': {
                ' .pe-button__focus': {
                    opacity: config$$1['color_' + tint + '_focus_on_opacity'],
                    'background-color': config$$1['color_' + tint + '_focus_on']
                }
            }
        },

        '&.pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled': {
            ' .pe-control--switch__track': {
                opacity: config$$1['color_' + tint + '_track_disabled_opacity'],
                'background-color': config$$1['color_' + tint + '_track_disabled']
            },
            ' .pe-control--switch__thumb': {
                color: config$$1['color_' + tint + '_thumb_disabled']
            }
        }
    })];
};

var createStyles$45 = function createStyles(config$$1) {
    return [style$20(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$20(config$$1, 'dark', ' '),
        // has dark theme
        style$20(config$$1, 'dark', '&')]
    }];
};

var color$20 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$45);
});

var themeConfigFn$24 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].switch;
var config$25 = themeConfigFn$24 ? themeConfigFn$24(config$26) : config$26;
var id$25 = 'pe-switch';

styler.add(id$25, layout$26(config$25), color$20(config$25));

var CSS_CLASSES$24 = {
    block: 'pe-control--switch',
    track: 'pe-control--switch__track',
    thumb: 'pe-control--switch__thumb',
    knob: 'pe-control--switch__knob'
};

var selectionView = function selectionView(checked, opts) {
    var zOff = opts.zOff !== undefined ? opts.zOff : 1;
    var zOn = opts.zOn !== undefined ? opts.zOn : 2;
    var z = checked ? zOn : zOff;
    var raised = opts.disabled ? false : opts.raised !== undefined ? opts.raised : true;
    return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$24.track }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$11, {
        class: CSS_CLASSES$24.thumb,
        tabindex: opts.tabindex || 0,
        ink: opts.ink !== undefined ? opts.ink : false,
        wash: opts.wash,
        disabled: opts.disabled,
        content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
            class: CSS_CLASSES$24.knob
        }, [opts.icon ? opts.icon : null, raised ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$2, {
            z: z,
            animated: true
        }) : null])]
    })];
};

var selectable$2 = function selectable() {
    return true;
};

var createView$22 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    opts.defaultClass = CSS_CLASSES$24.block;
    opts.type = 'checkbox';
    opts.selectionView = selectionView;
    opts.selectable = selectable$2;
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$10, opts);
};

var component$37 = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$22(ctrl, opts);
    }
};

/*
Animated scroll to a position.
Derived from https://github.com/madebysource/animated-scrollto
Adapted to Mithril and rewritten to es6.
*/

/*
opts:
    element: HTML Element
    to: position
    duration: seconds
    direction: 'vertical' or 'horizontal'


Function returns a Promise:

    scrollTo({
        element: scroller,
        to: left,
        duration: .5,
        direction: 'horizontal'
    }).then(() => {
        console.log('scroll done')
    });

*/
var scrollTo = function scrollTo(opts) {
    var element = opts.element;
    var which = opts.direction === 'horizontal' ? 'scrollLeft' : 'scrollTop';
    var to = opts.to;
    var duration = opts.duration * 1000;
    var start = element[which];
    var change = to - start;
    var animationStart = new Date().getTime();
    var animating = true;
    return new Promise(function (resolve) {
        var animateScroll = function animateScroll() {
            if (!animating) {
                return;
            }
            requestAnimFrame(animateScroll);
            var now = new Date().getTime();
            var percentage = (now - animationStart) / duration;
            var val = start + change * easing.easeInOutCubic(percentage);
            element[which] = val;
            if (percentage >= 1) {
                element[which] = to;
                animating = false;
                resolve();
            }
        };
        requestAnimFrame(animateScroll);
    });
};

var requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        window.setTimeout(callback, 1000 / 60);
    };
}();

var fontSize = buttonConfig.font_size;
var tab_label_line_height = 1.1 * fontSize;

var componentConfig$22 = {
    min_width: 72,
    medium_min_width: 160,
    label_max_width: 264,
    tab_height: 48,
    menu_tab_height: 44,
    menu_tab_icon_label_height: 44,
    tab_icon_label_height: 72,
    tab_icon_label_icon_spacing: 7,
    indicator_slide_speed: 600, // px per second
    indicator_slide_min_duration: .250,
    tabs_scroll_speed: 600, // px per second
    tabs_scroll_delay: .15,
    tabs_scroll_min_duration: .5,
    scroll_button_fade_duration: .2,
    scroll_button_fade_delay: .5,
    tab_label_line_height: tab_label_line_height,
    tab_label_vertical_offset: tab_label_line_height - fontSize,
    tab_content_padding_v: 12,
    tab_menu_content_padding_v: 6,
    tab_indicator_height: 2,
    scrollbar_offset: 20,
    scroll_button_opacity: .7,
    label_opacity: .7,

    color_light_selected_text: common$1.rgba(common$1.color_primary),
    color_light_selected_background: 'transparent',
    color_light_tab_indicator: common$1.rgba(common$1.color_primary),
    color_light_icon: iconButtonConfig.color_light_flat_normal_text,

    color_dark_selected_text: common$1.rgba(common$1.color_primary),
    color_dark_selected_background: 'transparent',
    color_dark_tab_indicator: common$1.rgba(common$1.color_primary),
    color_dark_icon: iconButtonConfig.color_dark_flat_normal_text
};

function _defineProperty$28(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var createStyles$46 = function createStyles(config$$1) {
    return [{
        '.pe-tabs': [mixin.vendorize({
            'user-select': 'none'
        }, common$1.prefixes_user_select), mixin.vendorize({
            transform: 'translate3d(0,0,0)'
        }, common$1.prefixes_transform), _defineProperty$28({
            '-webkit-overflow-scrolling': 'touch',

            '& ::-webkit-scrollbar': {
                'display': 'none'
            },

            '&.pe-tabs--menu': {
                // reset sizes to fit within a small space
                ' .pe-tabs__tab': {
                    height: config$$1.menu_tab_height + 'px'
                },
                ' .pe-tabs__tab---icon': {
                    height: config$$1.menu_tab_icon_label_height + 'px'
                },
                ' .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab---icon': {
                    'min-width': 0,
                    height: config$$1.menu_tab_icon_label_height + 'px',

                    ' .pe-button__content': {
                        padding: '0 ' + config$$1.tab_menu_content_padding_v + 'px',
                        height: config$$1.menu_tab_icon_label_height + 'px',

                        ' .pe-icon': {
                            'margin-bottom': 0
                        },
                        ' .pe-button__label': {
                            'font-size': '10px',
                            'line-height': '12px',
                            'text-transform': 'none'
                        }
                    }
                }
            },

            '&.pe-tabs--scrollable': {
                // hide scrollbar (this approach is required for Firefox)
                'max-height': config$$1.tab_height + 'px',
                '-ms-overflow-style': 'none',

                ' .pe-tabs__scroll-button': {
                    // default hide, show with html.pe-no-touch
                    display: 'none'
                },

                ' .pe-tabs__row': {
                    'margin-bottom': -config$$1.scrollbar_offset + 'px'
                }
            },

            ' .pe-no-touch &': {
                '&.pe-tabs--scrollable': {
                    'background-color': 'inherit'
                },

                ' .pe-tabs__scroll-button': {
                    position: 'absolute',
                    display: 'block',
                    top: 0,
                    'background-color': 'inherit',
                    'z-index': 3,

                    ' .pe-button__content': {
                        'border-radius': 0,
                        'background-color': 'inherit'
                    },
                    ' .pe-button__label': [mixin.vendorize({
                        'transition-property': 'opacity'
                    }, common$1.prefixes_transition), mixin.vendorize({
                        'transition-duration': config$$1.scroll_button_fade_duration + 's'
                    }, common$1.prefixes_transition), mixin.vendorize({
                        'transition-timing-function': 'ease-out'
                    }, common$1.prefixes_transition), mixin.vendorize({
                        'transition-delay': config$$1.scroll_button_fade_delay + 's'
                    }, common$1.prefixes_transition), {
                        opacity: config$$1.scroll_button_opacity
                    }]
                },
                '&.pe-tabs--start .pe-tabs__scroll-button--start': {
                    'pointer-events': 'none',
                    cursor: 'default',

                    ' .pe-button__label': {
                        opacity: 0
                    }
                },
                '&.pe-tabs--end .pe-tabs__scroll-button--end': {
                    'pointer-events': 'none',
                    cursor: 'default',

                    ' .pe-button__label': {
                        opacity: 0
                    }
                },

                ' .pe-tabs__scroll-button--start': {
                    left: 0
                },
                ' .pe-tabs__scroll-button--end': {
                    right: 0
                }
            },

            ' .pe-tabs__row': [flex$1.layoutHorizontal, mixin.vendorize({
                'user-select': 'none'
            }, common$1.prefixes_user_select), {
                position: 'relative',
                'white-space': 'nowrap',
                overflow: 'auto'
            }],

            ' .pe-tabs__row--centered': flex$1.layoutCenterJustified,

            ' .pe-tabs__scroll-button--offset': [flex$1.flex(), flex$1.flexIndex('none')],

            ' .pe-tabs__tab': [flex$1.flex(), flex$1.flexIndex('none'), mixin.vendorize({
                'user-select': 'none'
            }, common$1.prefixes_user_select), mixin.defaultTransition('color'), {
                margin: 0,
                'border-radius': 0,
                height: config$$1.tab_height + 'px',
                padding: 0,
                color: 'inherit',
                'min-width': config$$1.min_width + 'px', // for smaller screens, see also media query below
                // max-width: 264px, // set in theme js

                ' .pe-button__content': {
                    padding: '0 ' + config$$1.tab_content_padding_v + 'px',
                    height: config$$1.tab_height + 'px',
                    'line-height': common$1.line_height + 'em',

                    ' .pe-button__label, .pe-icon': {
                        'max-width': config$$1.label_max_width + 'px', // or .pe-tabs width minus 56dp
                        'line-height': config$$1.tab_label_line_height + 'px',
                        'max-height': 2 * config$$1.tab_label_line_height + 'px',
                        overflow: 'hidden',
                        'white-space': 'normal'
                    },
                    ' .pe-button__label': [mixin.defaultTransition('opacity', config$$1.animation_duration), {
                        margin: config$$1.tab_label_vertical_offset + 'px 0 0 0',
                        padding: 0,
                        opacity: config$$1.label_opacity
                    }],
                    ' .pe-icon': {
                        'margin-left': 'auto',
                        'margin-right': 'auto'
                    },
                    ' .pe-button__focus': {
                        display: 'none'
                    }
                },
                '&.pe-button--selected': {
                    ' .pe-button__content .pe-button__label': {
                        opacity: 1
                    }
                },
                '&.pe-tabs__tab---icon': {
                    '&, .pe-button__content': [{
                        height: config$$1.tab_icon_label_height + 'px'
                    }, {
                        ' .pe-button__label, .pe-icon': {
                            margin: '0 auto'
                        }
                    }, {
                        ' .pe-icon': {
                            'margin-bottom': config$$1.tab_icon_label_icon_spacing + 'px'
                        }
                    }]
                }
            }],

            ' .pe-tabs__tab-content': [flex$1.layoutCenterCenter, flex$1.layoutVertical, {
                height: 'inherit'
            }],

            '&.pe-tabs--autofit .pe-tabs__tab': [flex$1.flex(), {
                'max-width': 'none'
            }],

            '&.pe-tabs__active-selected': {
                ' .pe-tabs__tab.pe-button--selected': {
                    cursor: 'pointer',
                    'pointer-events': 'initial'
                }
            },

            ' .pe-tabs__indicator': [mixin.vendorize({
                'transform': 'translate3d(0,0,0)'
            }, common$1.prefixes_transform), mixin.vendorize({
                'transform-origin': 'left 50%'
            }, common$1.prefixes_transform), mixin.vendorize({
                'transition-property': 'all'
            }, common$1.prefixes_transition), mixin.vendorize({
                'transition-timing-function': 'ease-out'
            }, common$1.prefixes_transition), {
                position: 'absolute',
                height: config$$1.tab_indicator_height + 'px',
                bottom: 0,
                left: 0,
                'z-index': 3,
                width: '100%' // and transformed with js
                // background-color defined in implementation/theme css
            }],

            ' .pe-toolbar--tabs .pe-toolbar__bar &': [mixin.fit(), {
                width: 'auto',
                margin: 0,
                top: 'auto',

                ' .pe-tabs__row.pe-tabs__row--indent': {
                    margin: 0,
                    'padding-left': common$1.unit_indent + 'px',
                    overflow: 'auto'
                }
            }]

        }, '@media (min-width: ' + common$1.breakpoint_small_tablet_portrait + 'px)', {
            '&:not(.pe-tabs--small):not(.pe-tabs--menu) .pe-tabs__tab': {
                'min-width': config$$1.medium_min_width + 'px'
            }
        })],

        // toolbar with tabs
        '.pe-toolbar--tabs .pe-toolbar__bar': {
            'background-color': 'inherit'
        }
    }];
};

var layout$27 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$46);
});

function _defineProperty$29(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style$21 = function style(config$$1, tint) {
    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

    return [_defineProperty$29({}, scope + '.pe-tabs', {
        ' .pe-tabs__tab.pe-button--selected': {
            color: config$$1['color_' + tint + '_selected_text'],

            ' .pe-button__content': {
                background: config$$1['color_' + tint + '_selected_background']
            }
        },
        ' .pe-tabs__tab:not(.pe-button--selected) .pe-icon': {
            color: config$$1['color_' + tint + '_icon']
        },
        ' .pe-tabs__indicator': {
            'background-color': config$$1['color_' + tint + '_tab_indicator']
        }
    })];
};

var createStyles$47 = function createStyles(config$$1) {
    return [style$21(config$$1, 'light'), {
        '.pe-dark-theme': [
        // inside dark theme
        style$21(config$$1, 'dark', ' '),
        // has dark theme
        style$21(config$$1, 'dark', '&')]
    }];
};

var color$21 = (function (config$$1) {
    return mixin.createStyles(config$$1, createStyles$47);
});

var themeConfigFn$25 = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"] && __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["config"].tabs;
var config$27 = themeConfigFn$25 ? themeConfigFn$25(componentConfig$22) : componentConfig$22;
var id$26 = 'pe-tabs';

styler.add(id$26, layout$27(config$27), color$21(config$27));

// default icons
var arrowBackward = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust('<svg width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>');
var arrowForward = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust('<svg width="24" height="24" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>');

var theme$2 = {
    arrowBackward: arrowBackward,
    arrowForward: arrowForward
};

var _extends$22 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CSS_CLASSES$25 = {
    block: 'pe-tabs',
    scrollButton: 'pe-tabs__scroll-button',
    scrollButtonLeft: 'pe-tabs__scroll-button--start',
    scrollButtonRight: 'pe-tabs__scroll-button--end',
    scrollButtonOffset: 'pe-tabs__scroll-button--offset',
    tabRow: 'pe-tabs__row',
    tabRowCentered: 'pe-tabs__row--centered',
    tabRowIndent: 'pe-tabs__row--indent',
    tab: 'pe-tabs__tab',
    tabContent: 'pe-tabs__tab-content',
    tabHasIcon: 'pe-tabs__tab---icon',
    indicator: 'pe-tabs__indicator',
    scrollable: 'pe-tabs--scrollable',
    isAutofit: 'pe-tabs--autofit',
    isAtStart: 'pe-tabs--start',
    isAtEnd: 'pe-tabs--end',
    isMenu: 'pe-tabs--menu',
    isSmall: 'pe-tabs--small',
    activeSelected: 'pe-tabs__active-selected',
    // reference:
    label: 'pe-button__label'
};

var POSITION_LEFT = 1 << 1;
var POSITION_RIGHT = 1 << 2;

var getNewIndex = function getNewIndex(index, tabs) {
    var minTabIndex = 0;
    var maxTabIndex = tabs.length - 1;
    return {
        left: Math.max(index - 1, minTabIndex),
        right: Math.min(index + 1, maxTabIndex)
    };
};

var handleScrollButtonClick = function handleScrollButtonClick(ctrl, opts, e, direction) {
    e.stopPropagation();
    e.preventDefault();
    var tabs = ctrl.tabs;
    var currentTabIndex = ctrl.selectedTabIndex;
    var newIndex = getNewIndex(currentTabIndex, tabs)[direction];
    scrollToTab(ctrl, newIndex);
    if (newIndex !== currentTabIndex) {
        setSelectedTab(ctrl, opts, newIndex, true);
        __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
    }
};

var createScrollButton = function createScrollButton(ctrl, position, opts) {
    var scrollIconForward = { msvg: opts.scrollIconForward || theme$2.arrowForward };
    var scrollIconBackward = { msvg: opts.scrollIconBackward || theme$2.arrowBackward };

    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$11, {
        class: [CSS_CLASSES$25.scrollButton, position === POSITION_LEFT ? CSS_CLASSES$25.scrollButtonLeft : CSS_CLASSES$25.scrollButtonRight].join(' '),
        icon: position === POSITION_LEFT ? scrollIconBackward : scrollIconForward,
        ripple: {
            center: true
        },
        config: function config$$1(el) {
            if (ctrl.scrollButtonLeftEl && ctrl.scrollButtonRightEl) {
                return;
            }
            if (position === POSITION_LEFT) {
                ctrl.scrollButtonLeftEl = el;
            } else {
                ctrl.scrollButtonRightEl = el;
            }
        },
        events: {
            onclick: position === POSITION_LEFT ? function (e) {
                handleScrollButtonClick(ctrl, opts, e, 'left');
            } : function (e) {
                handleScrollButtonClick(ctrl, opts, e, 'right');
            }
        }
    });
};

var alignToTitle = function alignToTitle(ctrl) {
    var firstTab = ctrl.tabs[0].el;
    var firstInnerLabel = firstTab.querySelector('.' + CSS_CLASSES$25.label + ' span');
    var firstOuterLabelWidth = firstTab.getBoundingClientRect().width;
    var firstInnerLabelWidth = firstInnerLabel.getBoundingClientRect().width;
    var firstTabOffset = (firstOuterLabelWidth - firstInnerLabelWidth) / 2;
    firstTab.style.marginLeft = -firstTabOffset + 'px';
};

var createRightButtonOffset = function createRightButtonOffset(ctrl) {
    // add padding to right so that last item is not hidden behind scroll button
    var scrollButtonRightWidth = ctrl.scrollButtonRightEl.getBoundingClientRect().width;
    var scrollButtonOffsetEl = ctrl.tabsEl.querySelector('.' + CSS_CLASSES$25.scrollButtonOffset);
    scrollButtonOffsetEl.style.width = scrollButtonRightWidth + 'px';
};

var scrollToTab = function scrollToTab(ctrl, tabIndex) {
    var tabs = ctrl.tabs;
    var scroller = ctrl.scrollerEl;
    // scroll to position of selected tab
    var tabLeft = tabs.slice(0, tabIndex).reduce(function (totalWidth, tabData) {
        return totalWidth + tabData.el.getBoundingClientRect().width;
    }, 0);
    // tabs at the far right will not fully move to the left
    // because the scrollable row will stick to the right 
    // to get the max scroll left, we subtract the visible viewport from the scroll width
    var scrollerWidth = scroller.getBoundingClientRect().width; // frame width
    var scrollingWidth = scroller.scrollWidth;
    var maxScroll = scrollingWidth - scrollerWidth;
    var left = Math.min(tabLeft, maxScroll);
    var currentLeft = scroller.scrollLeft;
    if (currentLeft !== left) {
        var duration = Math.abs(currentLeft - left) / componentConfig$22.tabs_scroll_speed;
        var delaySeconds = componentConfig$22.tabs_scroll_delay || 0;
        setTimeout(function () {
            scrollTo({
                element: scroller,
                to: left,
                duration: Math.max(componentConfig$22.tabs_scroll_min_duration, duration),
                direction: 'horizontal'
            });
        }, delaySeconds * 1000);
    }
};

var updateScrollButtons = function updateScrollButtons(ctrl) {
    var scrollerEl = ctrl.scrollerEl;
    var scrollLeft = scrollerEl.scrollLeft;
    var currentTabIndex = ctrl.selectedTabIndex;
    var tabs = ctrl.tabs;
    var tabsEl = ctrl.tabsEl;
    var minTabIndex = 0;
    var maxTabIndex = tabs.length - 1;
    var isAtLeft = scrollerEl.scrollLeft === 0 && currentTabIndex === minTabIndex;
    var isAtRight = scrollLeft >= scrollerEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1 && currentTabIndex === maxTabIndex;
    ctrl.scrollButtonStates.left = !isAtLeft;
    ctrl.scrollButtonStates.right = !isAtRight;
};

var animateIndicator = function animateIndicator(selectedTabEl, animate, ctrl) {
    var parentRect = ctrl.tabsEl.getBoundingClientRect();
    var rect = selectedTabEl.getBoundingClientRect();
    var style = ctrl.tabIndicatorEl.style;
    var translateX = rect.left - parentRect.left + ctrl.scrollerEl.scrollLeft;
    var transformCmd = 'translate(' + translateX + 'px, 0)';
    var duration = animate ? componentConfig$22.indicator_slide_min_duration : 0;
    // use width instead of scale to please IE10
    style.width = rect.width + 'px';
    style['transition-duration'] = style['-webkit-transition-duration'] = style['-moz-transition-duration'] = style['-o-transition-duration'] = duration + 's';
    style.transform = style['-webkit-transform'] = style['-moz-transform'] = style['-ms-transform'] = style['-o-transform'] = transformCmd;
};

var setSelectedTab = function setSelectedTab(ctrl, opts, index, animate) {
    ctrl.selectedTabIndex = index;
    if (!ctrl.tabs.length) return;
    var selectedTabEl = ctrl.tabs[index].el;
    if (selectedTabEl && ctrl.tabIndicatorEl && ctrl.tabsEl) {
        animateIndicator(selectedTabEl, animate, ctrl);
    }
    if (ctrl.managesScroll) {
        updateScrollButtons(ctrl);
        scrollToTab(ctrl, index);
    }
    if (opts.getState) {
        opts.getState({
            index: index,
            data: ctrl.tabs[index].data,
            el: selectedTabEl
        });
    }
};

var createTab = function createTab(ctrl, opts, index, buttonOpts) {
    // Let internal onclick function co-exist with passed button option
    buttonOpts.events = buttonOpts.events || {};
    buttonOpts.events.onclick = buttonOpts.events.onclick || function () {};
    var tabButtonOptions = _extends$22({}, buttonOpts, {
        content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
            class: CSS_CLASSES$25.tabContent
        }, [buttonOpts.icon ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component$5, buttonOpts.icon) : null, buttonOpts.label ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$25.label }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()('span', buttonOpts.label)) : null]),
        class: [CSS_CLASSES$25.tab, buttonOpts.icon && buttonOpts.label ? CSS_CLASSES$25.tabHasIcon : null, buttonOpts.class].join(' '),
        wash: false,
        ripple: true,
        events: _extends$22({}, buttonOpts.events, {
            onclick: function onclick(e) {
                setSelectedTab(ctrl, opts, index, opts.noIndicatorSlide ? false : true);
                buttonOpts.events.onclick(e);
            }
        }),
        config: function config$$1(el, inited) {
            if (inited) {
                return;
            }
            ctrl.tabs.push({ data: buttonOpts, el: el });
        }
    });
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(component, tabButtonOptions);
};

var sortNumbers = function sortNumbers(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;else return 0;
};

var createView$23 = function createView(ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var tag = opts.tag || 'div';
    var autofit = opts.scrollable || opts.centered ? false : opts.autofit ? true : false;

    // keep selected tab up to date
    if (opts.selectedTab !== undefined && ctrl.previousOptsSelectedTab !== opts.selectedTab) {
        setSelectedTab(ctrl, opts, opts.selectedTab, true);
    }
    ctrl.previousOptsSelectedTab = opts.selectedTab;

    var props = {
        class: [CSS_CLASSES$25.block, opts.scrollable ? CSS_CLASSES$25.scrollable : null, ctrl.selectedTabIndex === 0 ? CSS_CLASSES$25.isAtStart : null, ctrl.selectedTabIndex === ctrl.tabs.length - 1 ? CSS_CLASSES$25.isAtEnd : null, opts.activeSelected ? CSS_CLASSES$25.activeSelected : null, autofit ? CSS_CLASSES$25.isAutofit : null, opts.menu ? CSS_CLASSES$25.isMenu : null, opts.small ? CSS_CLASSES$25.isSmall : null, opts.class].join(' '),
        id: opts.id || '',
        config: function config$$1(el, inited, context) {
            if (inited) {
                return;
            }
            ctrl.tabsEl = el;

            if (opts.largestWidth) {
                var widths = ctrl.tabs.map(function (tabData) {
                    return tabData.el.getBoundingClientRect().width;
                });
                var largest = widths.sort(sortNumbers).reverse()[0];
                ctrl.tabs.forEach(function (tabData) {
                    return tabData.el.style.width = largest + 'px';
                });
            }

            // align first scrollable tab to title
            if (opts.scrollable) {
                alignToTitle(ctrl);
            }
            // handle scroll
            if (opts.scrollable && !p.isTouch) {
                ctrl.managesScroll = true;
                createRightButtonOffset(ctrl);
            }

            var onResize = function onResize() {
                setSelectedTab(ctrl, opts, ctrl.selectedTabIndex, false);
                __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
            };
            events.subscribe('resize', onResize);

            context.onunload = function () {
                events.unsubscribe('resize', onResize);
            };

            setSelectedTab(ctrl, opts, ctrl.selectedTabIndex, false);
        }
    };
    var tabRow = opts.buttons.map(function (buttonOpts, index) {
        var buttonOptsCombined = _extends$22({}, buttonOpts, {
            selected: index === ctrl.selectedTabIndex,
            animateOnTap: opts.animateOnTap !== false ? true : false
        }, opts.tabsOpts || {});
        return createTab(ctrl, opts, index, buttonOptsCombined);
    }).concat([
    // offset for right scroll button
    opts.scrollable ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', { class: CSS_CLASSES$25.scrollButtonOffset }) : null]);

    var scrollButtonLeft = void 0,
        scrollButtonRight = void 0;
    if (opts.scrollable) {
        scrollButtonLeft = createScrollButton(ctrl, POSITION_LEFT, opts);
        scrollButtonRight = createScrollButton(ctrl, POSITION_RIGHT, opts);
    }

    var tabIndicator = opts.hideIndicator ? null : __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: CSS_CLASSES$25.indicator,
        config: function config$$1(el, inited) {
            if (inited) {
                return;
            }
            ctrl.tabIndicatorEl = el;
        }
    });

    var content = [opts.scrollable ? scrollButtonLeft : null, __WEBPACK_IMPORTED_MODULE_0_mithril___default()('div', {
        class: [CSS_CLASSES$25.tabRow, opts.centered ? CSS_CLASSES$25.tabRowCentered : null, opts.scrollable ? CSS_CLASSES$25.tabRowIndent : null].join(' '),
        config: function config$$1(el, inited) {
            if (inited) {
                return;
            }
            ctrl.scrollerEl = el;
        },
        onscroll: function onscroll() {
            updateScrollButtons(ctrl);
        }
    }, [tabRow, tabIndicator]), opts.scrollable ? scrollButtonRight : null];
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tag, props, [opts.before, content, opts.after]);
};

var component$39 = {
    controller: function controller() {
        return {
            tabsEl: null,
            scrollerEl: null,
            tabs: [], // {data, el}
            tabIndicatorEl: null,
            selectedTabIndex: 0,
            previousOptsSelectedTab: undefined,
            managesScroll: false,
            scrollButtonStates: {
                left: false,
                right: false
            }
        };
    },
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return createView$23(ctrl, opts);
    }
};

if (!window.WebFontConfig) {
    window.WebFontConfig = {};
    (function () {
        var wf = document.createElement('script');
        wf.src = (document.location.protocol === 'https:' ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();
}

var webfontLoader = {
    add: function add(vendor, family, key) {
        var vendorCfg = window.WebFontConfig[vendor] || {};
        vendorCfg.families = vendorCfg.families || [];
        vendorCfg.families.push(family);
        if (key) {
            vendorCfg.key = key;
        }
        window.WebFontConfig[vendor] = vendorCfg;
    }
};

webfontLoader.add('google', 'Roboto:400,500,700,400italic:latin');

var fontSize$1 = 14;

var styles = [{
    ' h1, h2, h3, h4, h5, h6, p': {
        margin: 0,
        padding: 0
    }
}, {
    ' h1 small, h2 small, h3 small, h4 small, h5 small, h6 small': {
        'font-weight': common$1.font_weight_normal,
        'line-height': common$1.line_height,
        'letter-spacing': '-0.02em',
        'font-size': '0.6em'
    }
}, {
    ' h1': {
        'font-size': '56px',
        'font-weight': common$1.font_weight_normal,
        'line-height': common$1.line_height,
        'margin-top': '24px',
        'margin-bottom': '24px'
    }
}, {
    ' h2': {
        'font-size': '45px',
        'font-weight': common$1.font_weight_normal,
        'line-height': '48px',
        'margin-top': '24px',
        'margin-bottom': '24px'
    }
}, {
    ' h3': {
        'font-size': '34px',
        'font-weight': common$1.font_weight_normal,
        'line-height': '40px',
        'margin-top': '24px',
        'margin-bottom': '24px'
    }
}, {
    ' h4': {
        'font-size': '24px',
        'font-weight': common$1.font_weight_normal,
        'line-height': '32px',
        '-moz-osx-font-smoothing': 'grayscale',
        'margin-top': '24px',
        'margin-bottom': '16px'
    }
}, {
    ' h5': {
        'font-size': '20px',
        'font-weight': common$1.font_weight_medium,
        'line-height': '1',
        'letter-spacing': '-0.02em',
        'margin-top': '24px',
        'margin-bottom': '16px'
    }
}, {
    ' h6': {
        'font-size': '16px',
        'font-weight': common$1.font_weight_normal,
        'line-height': '24px',
        'letter-spacing': '0.04em',
        'margin-top': '24px',
        'margin-bottom': '16px'
    }
}, {
    ' html, body': {
        'font-size': fontSize$1 + 'px',
        'line-height': '20px',
        'font-weight': common$1.font_weight_normal
    },
    ' p': {
        'font-size': fontSize$1 + 'px',
        'font-weight': common$1.font_weight_normal,
        'line-height': '24px',
        'letter-spacing': '0',
        'margin-bottom': '16px'
    },
    ' blockquote': {
        'position': 'relative',
        'font-size': '24px',
        'font-weight': common$1.font_weight_normal,
        'font-style': 'italic',
        'line-height': common$1.line_height,
        'letter-spacing': '0.08em',
        'margin-top': '24px',
        'margin-bottom': '16px'
    },
    ' ul, ol': {
        'font-size': fontSize$1 + 'px',
        'font-weight': common$1.font_weight_normal,
        'line-height': '24px',
        'letter-spacing': 0
    },
    'b, strong': {
        'font-weight': common$1.font_weight_medium
    }
}];

// Roboto font
// Typography
// Use Roboto font
var roboto = [{
    'html, body, input, textarea': {
        'font-family': 'Roboto, Helvetica, Arial, sans-serif'
    }
}];

var general = [{
    // apply a natural box layout model to all elements, but allow elements to change
    ' html': {
        'box-sizing': 'border-box'
    },
    ' *, *:before, *:after': {
        'box-sizing': 'inherit'
    },
    ' *': [
    // remove tap highlight in mobile Safari
    {
        '-webkit-tap-highlight-color': 'rgba(0,0,0,0)'
    }, {
        '-webkit-tap-highlight-color': 'transparent' // For some Androids
    }],

    // Remove dotted link borders in Firefox
    ' a, a:active, a:focus, input:active, input[type]:focus': {
        outline: 0
    },

    // Mobile Safari: override default fading of disabled elements
    ' input:disabled': {
        opacity: 1
    }
}];

var index = (function () {
    styler.add('pe-theme', roboto, styles, general);
})();

// Placeholder for custom theme config file
// In your app paths setup, change the current path to your custom config file; see the theme README.

// Example:

// import 'polythene/common/object.assign';
//
// export default {
//     button: (config) => {
//         const mainColor = '#e4521b';
//         const textColor = '#fff';
//         const configTestCfg = Object.assign({}, config, {
//             border_radius: 0,
//             color_light_raised_normal_background: mainColor,
//             color_light_raised_normal_text: textColor,
//             color_dark_raised_normal_background: mainColor,
//             color_dark_raised_normal_text: textColor
//         });
//         return [
//             {'': config}, // all pages
//             {'.module-custom-theme': configTestCfg} // only this page
//         ];
//     }
// };

var custom = {};

var validationHelper = (function () {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var elProp = opts.element || 'el';
    var invalidProp = opts.invalid || 'invalid';

    var fieldStates = [];

    var submit = function submit(e, onValidated) {
        e.preventDefault();
        var firstInvalidIndex = getInvalidIndex();
        if (firstInvalidIndex !== undefined) {
            if (fieldStates[firstInvalidIndex][elProp]) {
                fieldStates[firstInvalidIndex][elProp].focus();
            }
        } else {
            onValidated(e);
        }
    };

    var getIndex = function getIndex(el) {
        for (var i = 0; i < fieldStates.length; i++) {
            if (fieldStates[i][elProp] === el) {
                return i;
            }
        }
    };

    var getInvalidIndex = function getInvalidIndex() {
        for (var i = 0; i < fieldStates.length; i++) {
            if (fieldStates[i][invalidProp]) {
                return i;
            }
        }
    };

    var update = function update(state) {
        var index = getIndex(state[elProp]);
        if (index === undefined) {
            fieldStates.push(state);
        } else {
            fieldStates[index] = state;
        }
    };

    return {
        submit: submit,
        update: update
    };
});




/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
Polyfill
*/
if (!Object.assign) {
    Object.defineProperty(Object, 'assign', {
        enumerable: false,
        configurable: true,
        writable: true,
        value: function value(target) {
            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert first argument to object');
            }

            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) {
                    continue;
                }
                nextSource = Object(nextSource);

                var keysArray = Object.keys(nextSource);
                for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }
            return to;
        }
    });
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var blockMaxWidth = 720;
var listWidth = 360;
var margin = 20;

exports.default = {
    colorPrimary: '#219bf3',
    colorHeader: '#00c853',
    bodyBackgroundColor: '#eceff1',
    darkThemeBackgroundColor: '#263238',
    attentionColor: '#FF1744', // magento
    margin: margin,
    minWidth: 320,
    tabletWidth: 600,
    desktopWidth: 960,
    listWidth: listWidth,
    blockMaxWidth: blockMaxWidth,
    mediaTablet: blockMaxWidth + 2 * margin,
    mediaMobile: listWidth + 4 * margin
};

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__default__ = __webpack_require__(164);
// Conduit for global theme variables
// In your app paths setup, change the current path to your custom config file; see the theme README.


/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0__default__["a" /* default */]);

// Example customization in custom config file:
//
// import 'polythene/common/object.assign';
// import config from 'polythene/config/default';
//
// export default Object.assign({}, config, {
//     // this site's base colors
//     color_primary: '255, 152, 0', // orange 500
//     color_primary_active: '251, 140, 0', // orange 600
//     color_primary_dark: '245, 124, 0', // orange 700
//     color_primary_faded: '255, 183, 77', // orange 300
//     color_primary_foreground: '255, 255, 255'
// });

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var repeatText = function repeatText(text, count) {
    var out = '';
    while (count > 0) {
        out += text;
        count--;
    }
    return out;
};

var template = ['<div class="demo-content">', repeatText('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 16), '</div>'].join('');

var shortBodyText = 'Discard draft?';

var cancelOkButtons = [(0, _mithril2.default)(_polythene.Button, {
    label: 'Cancel',
    events: {
        onclick: function onclick() {
            return _polythene.Dialog.hide();
        }
    }
}), (0, _mithril2.default)(_polythene.Button, {
    label: 'Discard',
    events: {
        onclick: function onclick() {
            return _polythene.Dialog.hide();
        }
    }
})];

var dialogProps = {
    class: 'demo-dialog',
    footer: cancelOkButtons,
    didHide: function didHide() {
        return _mithril2.default.route('/dialog');
    }
};

exports.default = {
    dialogProps: dialogProps,
    template: template,
    shortBodyText: shortBodyText,
    cancelOkButtons: cancelOkButtons
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _arrowBack = __webpack_require__(10);

var _arrowBack2 = _interopRequireDefault(_arrowBack);

var _moreVert = __webpack_require__(12);

var _moreVert2 = _interopRequireDefault(_moreVert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createBottomBar = function createBottomBar(title, subtitle) {
    var text = '';
    if (title) {
        text += title;
    }
    if (subtitle) {
        text += ' - ';
        text += subtitle;
    }
    return [(0, _mithril2.default)('.pe-toolbar__title--indent.pe-title', text), (0, _mithril2.default)('.spacer-right')];
};

var toolbar = {
    controller: function controller() {
        return {
            menuOpen: false
        };
    },
    view: function view(ctrl, opts) {
        return (0, _mithril2.default)('.common-toolbar.layout.horizontal', [(0, _mithril2.default)(_polythene.IconButton, {
            class: 'pe-dark-theme',
            url: {
                href: '/header-panel',
                config: _mithril2.default.route
            },
            icon: {
                msvg: _arrowBack2.default
            }
        }), (0, _mithril2.default)('span.flex', opts.title), (0, _mithril2.default)(_polythene.Menu, {
            target: 'toolbar_menu_button',
            origin: 'top-right',
            show: ctrl.menuOpen,
            size: 3,
            hideDelay: 0.240,
            didHide: function didHide() {
                return ctrl.menuOpen = false;
            },
            content: (0, _mithril2.default)(_polythene.List, {
                hoverable: true,
                tiles: ['One', 'Two', 'Three', 'Four'].map(function (item) {
                    return (0, _mithril2.default)(_polythene.ListTile, {
                        title: item,
                        positionSelected: false,
                        ink: true
                    });
                })
            })
        }), (0, _mithril2.default)(_polythene.IconButton, {
            id: 'toolbar_menu_button',
            class: 'pe-dark-theme',
            icon: {
                msvg: _moreVert2.default
            },
            events: {
                onclick: function onclick() {
                    return ctrl.menuOpen = true;
                }
            }
        })]);
    }
};

var toolbarRow = function toolbarRow(title) {
    return (0, _mithril2.default)(toolbar, {
        title: title
    });
};

var repeatText = function repeatText(text, count) {
    var out = '';
    while (count > 0) {
        out += text;
        count--;
    }
    return out;
};

var textContent = function textContent() {
    var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'pe-header-panel-content';

    return ['<div class=\' + ' + className + ' + \'>', repeatText('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 16), '</div>'].join('');
};

exports.default = {
    createBottomBar: createBottomBar,
    toolbarRow: toolbarRow,
    textContent: textContent
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object_assign__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__object_assign__);
var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}

// Mixins for j2c




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
    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].animation_duration;
    var curve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].animation_curve_default;

    return [vendorize({
        'transition-delay': 0
    }, __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].prefixes_transition), vendorize({
        'transition-duration': duration
    }, __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].prefixes_transition), vendorize({
        'transition-timing-function': curve
    }, __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].prefixes_transition), vendorize({
        'transition-property': properties
    }, __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].prefixes_transition)];
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

/* harmony default export */ __webpack_exports__["default"] = ({
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
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 11.9994,21.3497L 10.5504,20.0327C 5.4014,15.3607 1.99939,12.2736 1.99939,8.49762C 1.99939,5.41364 4.41537,2.99762 7.49939,2.99762C 9.24039,2.99762 10.9084,3.80566 11.9994,5.08362C 13.0904,3.80566 14.7584,2.99762 16.4994,2.99762C 19.5834,2.99762 21.9994,5.41364 21.9994,8.49762C 21.9994,12.2736 18.5974,15.3607 13.4484,20.0327L 11.9994,21.3497 Z "/></svg>');


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>');


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>');


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>');


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>');


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 4,11L 4,13L 16.0104,13L 10.5052,18.5052L 11.9194,19.9194L 19.8388,12L 11.9194,4.08058L 10.5052,5.49479L 16.0104,11L 4,11 Z "/></svg>');


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class="st0" d="M12,0C5.4,0,0,5.4,0,12s5.4,12,12,12s12-5.4,12-12S18.6,0,12,0z M12,21.7c-5.4,0-9.7-4.4-9.7-9.7 S6.6,2.3,12,2.3s9.7,4.4,9.7,9.7S17.4,21.7,12,21.7z"/><path class="st0" d="M12,4.5c-4.2,0-7.5,3.4-7.5,7.5s3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5S16.2,4.5,12,4.5z M12,17.3 c-2.9,0-5.3-2.4-5.3-5.3S9.1,6.7,12,6.7s5.3,2.4,5.3,5.3S14.9,17.3,12,17.3z"/><circle class="st0" cx="12" cy="12" r="3"/></svg>');

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(5);

var _common2 = _interopRequireDefault(_common);

var _dialogReplaceTwo = __webpack_require__(64);

var _dialogReplaceTwo2 = _interopRequireDefault(_dialogReplaceTwo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign({}, _common2.default.dialogProps, {
    body: 'Dialog One',
    footer: (0, _mithril2.default)(_polythene.Button, {
        label: 'Show Two',
        events: {
            onclick: function onclick() {
                return _polythene.Dialog.show(_dialogReplaceTwo2.default);
            }
        }
    })
});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menuItemsTile = function menuItemsTile(left, right, disabled) {
    return (0, _mithril2.default)(_polythene.ListTile, {
        title: left,
        secondary: {
            content: right
        },
        disabled: disabled
    });
};

var _module = {};
_module.view = function (ctrl) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return (0, _mithril2.default)('div', [(0, _mithril2.default)(_polythene.List, {
        class: ['list--compact', opts.class || ''].join(' '),
        tiles: [menuItemsTile('Bold', '\u2318B'), menuItemsTile('Italic', '\u2318I'), menuItemsTile('Underline', '\u2318U'), menuItemsTile('Strikethrough', 'Alt+Shift+5'), menuItemsTile('Superscript', '\u2318.'), menuItemsTile('Subscript', '\u2318,')]
    }), (0, _mithril2.default)(_polythene.List, {
        class: ['list--compact', opts.class || ''].join(' '),
        tiles: [menuItemsTile('Clear formatting', '\u2318/', true), menuItemsTile('Custom spacing', '')]
    })]);
};

exports.default = _module;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _sliderRgbStyle = __webpack_require__(131);

var _sliderRgbStyle2 = _interopRequireDefault(_sliderRgbStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-slider-rgb', _sliderRgbStyle2.default);

var createSlider = function createSlider(ctrl, attr, label) {
    return (0, _mithril2.default)(_polythene.Slider, {
        class: 'layout horizontal',
        min: 0,
        max: 255,
        value: function value() {
            return ctrl[attr];
        },
        getValue: function getValue(value) {
            return ctrl[attr] = value;
        },
        before: (0, _mithril2.default)('.pe-slider__label', label),
        after: (0, _mithril2.default)(_polythene.TextField, {
            type: 'number',
            hideSpinner: true,
            value: function value() {
                return ctrl[attr].toString();
            },
            events: {
                oninput: function oninput() {},
                onchange: function onchange(e) {
                    return ctrl[attr] = e.target.value;
                }
            },
            maxlength: 3,
            min: 0,
            max: 255,
            hideValidation: true
        })
    });
};

var _module = {};
_module.controller = function () {
    var rnd = function rnd() {
        return Math.round(255 * Math.random());
    };

    return {
        red: rnd(),
        green: rnd(),
        blue: rnd()
    };
};
_module.view = function (ctrl) {
    return (0, _mithril2.default)('.rgb-slider', [(0, _mithril2.default)('.field', {
        style: {
            background: 'rgb(' + ctrl.red + ',' + ctrl.green + ',' + ctrl.blue + ')'
        }
    }), createSlider(ctrl, 'red', 'R'), createSlider(ctrl, 'green', 'G'), createSlider(ctrl, 'blue', 'B')]);
};

exports.default = _module;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _tabsMenuStyle = __webpack_require__(148);

var _tabsMenuStyle2 = _interopRequireDefault(_tabsMenuStyle);

var _tabsMenuScreen = __webpack_require__(147);

var _tabsMenuScreen2 = _interopRequireDefault(_tabsMenuScreen);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-tabs-menu', _tabsMenuStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', [(0, _mithril2.default)('.p-block-header', args.title), args.info ? (0, _mithril2.default)('p', args.info) : null, args.content]);
    }
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-tabs.tabs-menu', [(0, _mithril2.default)(titleBlock, {
        title: 'Menu buttons: icons only',
        content: (0, _mithril2.default)(_tabsMenuScreen2.default, {
            labels: false
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Menu buttons: icons with label',
        content: (0, _mithril2.default)(_tabsMenuScreen2.default, {
            labels: true
        })
    })]);
};
_module.isSub = true;
_module.back = '/tabs';
_module.title = 'Tabs as menu';

exports.default = _module;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _tabsRoutingStyle = __webpack_require__(149);

var _tabsRoutingStyle2 = _interopRequireDefault(_tabsRoutingStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-tabs-routing', _tabsRoutingStyle2.default);

var TABS = [{
    label: 'New',
    url: {
        href: '/tabs-routing',
        config: _mithril2.default.route
    }
}, {
    label: 'Favourites',
    url: {
        href: '/tabs-routing/favourites',
        config: _mithril2.default.route
    }
}, {
    label: 'Saved',
    url: {
        href: '/tabs-routing/saved',
        config: _mithril2.default.route
    }
}];

var tabNavigation = function tabNavigation(currentTabFn) {
    return (0, _mithril2.default)('.nav-header', (0, _mithril2.default)(_polythene.Tabs, {
        buttons: TABS,
        autofit: true,
        selectedTab: currentTabFn(),
        activeSelected: true
    }));
};

var indexForRoute = function indexForRoute(route) {
    return TABS.reduce(function (previousValue, tab, index) {
        if (route === tab.url.href) {
            return index;
        } else {
            return previousValue;
        }
    }, 0);
};

var _module = {};
_module.controller = function () {
    var index = indexForRoute(_mithril2.default.route());
    return {
        currentTab: _mithril2.default.prop(index)
    };
};
_module.view = function (ctrl) {
    var currentTabIndex = indexForRoute(_mithril2.default.route());
    ctrl.currentTab(currentTabIndex);
    var nextTabIndex = (currentTabIndex + 1) % TABS.length;
    return (0, _mithril2.default)('.module-tabs.tabs-routing', [tabNavigation(ctrl.currentTab), (0, _mithril2.default)('.tab-content.layout.center-center', (0, _mithril2.default)('h1', TABS[currentTabIndex].label)), (0, _mithril2.default)('.layout.center-center', (0, _mithril2.default)(_polythene.Button, {
        class: 'next',
        label: 'Next: ' + TABS[nextTabIndex].label,
        raised: true,
        url: {
            href: TABS[nextTabIndex].url.href,
            config: _mithril2.default.route
        }
    }))]);
};
_module.isSub = true;
_module.back = '/tabs';
_module.title = 'Tabs with routing';

exports.default = _module;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.defaults = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // theme override

var _polytheneCore = __webpack_require__(192);

var defaults = exports.defaults = _extends({}, _polytheneCore.defaultVariables, { color_primary: "255, 152, 0" // new base color: orange 500
});

var config = exports.config = {
  button: function button(vars) {
    var mainColor = '#e4521b';
    var textColor = '#fff';
    var newVars = Object.assign({}, vars, {
      border_radius: 0,
      color_light_raised_normal_background: mainColor,
      color_light_raised_normal_text: textColor,
      color_dark_raised_normal_background: mainColor,
      color_dark_raised_normal_text: textColor
    });
    return [{ '': vars }, // default vars for all pages
    { '.example-custom-theme ': newVars // custom vars for this selector
    }];
  }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_j2c__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_j2c___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_j2c__);


var remove = function remove(id) {
    if (id) {
        var old = document.getElementById(id);
        if (old) {
            old.parentNode.removeChild(old);
        }
    }
};

/*
* id: identifier, used as HTMLElement id for the attached <style></style> element
* styles: list of lists style Objects
*/
var add = function add(id) {
    for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        styles[_key - 1] = arguments[_key];
    }

    addToDocument.apply(undefined, [{ id: id }].concat(styles));
};

/*
* opts: options object
  * id: identifier, used as HTMLElement id for the attached <style></style> element
  * document: document reference; default window.document
* styles: list of lists style Objects
*/
var addToDocument = function addToDocument(opts) {
    for (var _len2 = arguments.length, styles = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        styles[_key2 - 1] = arguments[_key2];
    }

    var id = opts.id;
    var documentRef = opts.document || window.document;
    remove(id);
    var styleEl = documentRef.createElement('style');
    if (id) {
        styleEl.setAttribute('id', id);
    }
    styles.forEach(function (styleList) {
        // each style returns a list
        if (Object.keys(styleList).length) {
            styleList.forEach(function (style) {
                var scoped = { '@global': style };
                var sheet = __WEBPACK_IMPORTED_MODULE_0_j2c___default.a.sheet(scoped);
                styleEl.appendChild(documentRef.createTextNode(sheet));
            });
        }
    });
    documentRef.head.appendChild(styleEl);
};

/* harmony default export */ __webpack_exports__["default"] = ({
    add: add,
    addToDocument: addToDocument,
    remove: remove
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>');


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/></svg>');


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>');


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>');


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>');


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>');


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>');


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>');


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>');


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 14,20C 14,21.1046 13.1046,22 12,22C 10.8954,22 10,21.1046 10,20L 14,20 Z M 12,2.00001C 12.5523,2.00001 13,2.44772 13,3L 13,4.08298C 15.8377,4.55905 18,7.02702 18,10L 18,16L 21,19L 3,19L 6,16L 6.00001,9.99998C 6.00001,7.02698 8.1623,4.55902 11,4.08294L 11,3C 11,2.44772 11.4477,2.00001 12,2.00001 Z "/></svg>');


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 11.9994,0.998068C 7.02841,0.998068 2.9994,5.02706 2.9994,9.99807L 2.9994,16.9981C 2.9994,18.6551 4.3424,19.9981 5.9994,19.9981L 8.9994,19.9981L 8.9994,11.9981L 4.9994,11.9981L 4.9994,9.99807C 4.9994,6.13207 8.1334,2.99807 11.9994,2.99807C 15.8654,2.99807 18.9994,6.13207 18.9994,9.99807L 18.9994,11.9981L 14.9994,11.9981L 14.9994,19.9981L 17.9994,19.9981C 19.6564,19.9981 20.9994,18.6551 20.9994,16.9981L 20.9994,9.99807C 20.9994,5.02706 16.9704,0.998068 11.9994,0.998068 Z "/></svg>');


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 18.9994,12.998L 12.9994,12.998L 12.9994,18.998L 10.9994,18.998L 10.9994,12.998L 4.99936,12.998L 4.99936,10.998L 10.9994,10.998L 10.9994,4.99805L 12.9994,4.99805L 12.9994,10.998L 18.9994,10.998L 18.9994,12.998 Z "/></svg>');


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 11.9994,15.498C 10.0664,15.498 8.49939,13.931 8.49939,11.998C 8.49939,10.0651 10.0664,8.49805 11.9994,8.49805C 13.9324,8.49805 15.4994,10.0651 15.4994,11.998C 15.4994,13.931 13.9324,15.498 11.9994,15.498 Z M 19.4284,12.9741C 19.4704,12.6531 19.4984,12.329 19.4984,11.998C 19.4984,11.6671 19.4704,11.343 19.4284,11.022L 21.5414,9.36804C 21.7294,9.21606 21.7844,8.94604 21.6594,8.73004L 19.6594,5.26605C 19.5354,5.05005 19.2734,4.96204 19.0474,5.04907L 16.5584,6.05206C 16.0424,5.65607 15.4774,5.32104 14.8684,5.06903L 14.4934,2.41907C 14.4554,2.18103 14.2484,1.99805 13.9994,1.99805L 9.99939,1.99805C 9.74939,1.99805 9.5434,2.18103 9.5054,2.41907L 9.1304,5.06805C 8.52039,5.32104 7.95538,5.65607 7.43939,6.05206L 4.95139,5.04907C 4.7254,4.96204 4.46338,5.05005 4.33939,5.26605L 2.33939,8.73004C 2.21439,8.94604 2.26938,9.21606 2.4574,9.36804L 4.5694,11.022C 4.5274,11.342 4.49939,11.6671 4.49939,11.998C 4.49939,12.329 4.5274,12.6541 4.5694,12.9741L 2.4574,14.6271C 2.26938,14.78 2.21439,15.05 2.33939,15.2661L 4.33939,18.73C 4.46338,18.946 4.7254,19.0341 4.95139,18.947L 7.4404,17.944C 7.95639,18.34 8.52139,18.675 9.1304,18.9271L 9.5054,21.577C 9.5434,21.8151 9.74939,21.998 9.99939,21.998L 13.9994,21.998C 14.2484,21.998 14.4554,21.8151 14.4934,21.577L 14.8684,18.9271C 15.4764,18.6741 16.0414,18.34 16.5574,17.9431L 19.0474,18.947C 19.2734,19.0341 19.5354,18.946 19.6594,18.73L 21.6594,15.2661C 21.7844,15.05 21.7294,14.78 21.5414,14.6271L 19.4284,12.9741 Z "/></svg>');


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 11.9994,15.3943L 8.2364,17.6643L 9.2314,13.3833L 5.9094,10.5053L 10.2894,10.1293L 11.9994,6.09327L 13.7094,10.1293L 18.0894,10.5053L 14.7674,13.3833L 15.7624,17.6643M 21.9994,9.24227L 14.8084,8.62526L 11.9994,1.99827L 9.1904,8.62526L 1.9994,9.24227L 7.4544,13.9693L 5.8194,20.9983L 11.9994,17.2703L 18.1794,20.9983L 16.5444,13.9693L 21.9994,9.24227 Z "/></svg>');


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 11.9994,17.2708L 18.1794,20.9978L 16.5444,13.9688L 21.9994,9.24277L 14.8084,8.62477L 11.9994,1.99777L 9.1904,8.62477L 1.9994,9.24277L 7.4544,13.9688L 5.8194,20.9978L 11.9994,17.2708 Z "/></svg>');


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var emptyObject = {};
var emptyArray = [];
var type = emptyObject.toString;
var own =  emptyObject.hasOwnProperty;
var OBJECT = type.call(emptyObject);
var ARRAY =  type.call(emptyArray);
var STRING = type.call('');
/*/-inline-/*/
// function cartesian(a, b, res, i, j) {
//   res = [];
//   for (j in b) if (own.call(b, j))
//     for (i in a) if (own.call(a, i))
//       res.push(a[i] + b[j]);
//   return res;
// }
/*/-inline-/*/

/* /-statements-/*/
function cartesian(a,b, selectorP, res, i, j) {
  res = []
  for (j in b) if(own.call(b, j))
    for (i in a) if(own.call(a, i))
      res.push(concat(a[i], b[j], selectorP))
  return res
}

function concat(a, b, selectorP) {
  // `b.replace(/&/g, a)` is never falsy, since the
  // 'a' of cartesian can't be the empty string
  // in selector mode.
  return selectorP && (
    /^[-\w$]+$/.test(b) && ':-error-bad-sub-selector-' + b ||
    /&/.test(b) && /* never falsy */ b.replace(/&/g, a)
  ) || a + b
}

function decamelize(match) {
  return '-' + match.toLowerCase()
}

/**
 * Handles the property:value; pairs.
 *
 * @param {array|object|string} o - the declarations.
 * @param {string[]} buf - the buffer in which the final style sheet is built.
 * @param {string} prefix - the current property or a prefix in case of nested
 *                          sub-properties.
 * @param {string} vendors - a list of vendor prefixes.
 * @Param {boolean} local - are we in @local or in @global scope.
 * @param {object} ns - helper functions to populate or create the @local namespace
 *                      and to @extend classes.
 * @param {function} ns.e - @extend helper.
 * @param {function} ns.l - @local helper.
 */

function declarations(o, buf, prefix, vendors, local, ns, /*var*/ k, v, kk) {
  if (o==null) return
  if (/\$/.test(prefix)) {
    for (kk in (prefix = prefix.split('$'))) if (own.call(prefix, kk)) {
      declarations(o, buf, prefix[kk], vendors, local, ns)
    }
    return
  }
  switch ( type.call(o = o.valueOf()) ) {
  case ARRAY:
    for (k = 0; k < o.length; k++)
      declarations(o[k], buf, prefix, vendors, local, ns)
    break
  case OBJECT:
    // prefix is falsy iif it is the empty string, which means we're at the root
    // of the declarations list.
    prefix = (prefix && prefix + '-')
    for (k in o) if (own.call(o, k)){
      v = o[k]
      if (/\$/.test(k)) {
        for (kk in (k = k.split('$'))) if (own.call(k, kk))
          declarations(v, buf, prefix + k[kk], vendors, local, ns)
      } else {
        declarations(v, buf, prefix + k, vendors, local, ns)
      }
    }
    break
  default:
    // prefix is falsy when it is "", which means that we're
    // at the top level.
    // `o` is then treated as a `property:value` pair.
    // otherwise, `prefix` is the property name, and
    // `o` is the value.
    k = prefix.replace(/_/g, '-').replace(/[A-Z]/g, decamelize)

    if (local && (k == 'animation-name' || k == 'animation')) {
      o = o.split(',').map(function (o) {
        return o.replace(/()(?::global\(\s*([-\w]+)\s*\)|()([-\w]+))/, ns.l)
      }).join(',')
    }
    if (/^animation|^transition/.test(k)) vendors = ['webkit']
    // '@' in properties also triggers the *ielte7 hack
    // Since plugins dispatch on the /^@/ for at-rules
    // we swap the at for an asterisk
    // http://browserhacks.com/#hack-6d49e92634f26ae6d6e46b3ebc10019a

    k = k.replace(/^@/, '*')

/*/-statements-/*/
    // vendorify
    for (kk = 0; kk < vendors.length; kk++)
      buf.push('-', vendors[kk], '-', k, k ? ':': '', o, ';\n')
/*/-statements-/*/

    buf.push(k, k ? ':': '', o, ';\n')

  }
}

var findClass = /()(?::global\(\s*(\.[-\w]+)\s*\)|(\.)([-\w]+))/g

/**
 * Hanldes at-rules
 *
 * @param {string} k - The at-rule name, and, if takes both parameters and a
 *                     block, the parameters.
 * @param {string[]} buf - the buffer in which the final style sheet is built
 * @param {string[]} v - Either parameters for block-less rules or their block
 *                       for the others.
 * @param {string} prefix - the current selector or a prefix in case of nested rules
 * @param {string} rawPrefix - as above, but without localization transformations
 * @param {string} vendors - a list of vendor prefixes
 * @Param {boolean} local - are we in @local or in @global scope?
 * @param {object} ns - helper functions to populate or create the @local namespace
 *                      and to @extend classes
 * @param {function} ns.e - @extend helper
 * @param {function} ns.l - @local helper
 */

function at(k, v, buf, prefix, rawPrefix, vendors, local, ns){
  var kk
  if (/^@(?:namespace|import|charset)$/.test(k)) {
    if(type.call(v) == ARRAY){
      for (kk = 0; kk < v.length; kk++) {
        buf.push(k, ' ', v[kk], ';\n')
      }
    } else {
      buf.push(k, ' ', v, ';\n')
    }
  } else if (/^@keyframes /.test(k)) {
    k = local ? k.replace(
      // generated by script/regexps.js
      /( )(?::global\(\s*([-\w]+)\s*\)|()([-\w]+))/,
      ns.l
    ) : k
    // add a @-webkit-keyframes block too.

    buf.push('@-webkit-', k.slice(1), ' {\n')
    sheet(v, buf, '', '', ['webkit'])
    buf.push('}\n')

    buf.push(k, ' {\n')
    sheet(v, buf, '', '', vendors, local, ns)
    buf.push('}\n')

  } else if (/^@extends?$/.test(k)) {

    /*eslint-disable no-cond-assign*/
    // pick the last class to be extended
    while (kk = findClass.exec(rawPrefix)) k = kk[4]
    /*eslint-enable no-cond-assign*/
    if (k == null || !local) {
      // we're in a @global{} block
      buf.push('@-error-cannot-extend-in-global-context ', JSON.stringify(rawPrefix), ';\n')
      return
    } else if (/^@extends?$/.test(k)) {
      // no class in the selector
      buf.push('@-error-no-class-to-extend-in ', JSON.stringify(rawPrefix), ';\n')
      return
    }
    ns.e(
      type.call(v) == ARRAY ? v.map(function (parent) {
        return parent.replace(/()(?::global\(\s*(\.[-\w]+)\s*\)|()\.([-\w]+))/, ns.l)
      }).join(' ') : v.replace(/()(?::global\(\s*(\.[-\w]+)\s*\)|()\.([-\w]+))/, ns.l),
      k
    )

  } else if (/^@(?:font-face$|viewport$|page )/.test(k)) {
    sheet(v, buf, k, k, emptyArray)

  } else if (/^@global$/.test(k)) {
    sheet(v, buf, prefix, rawPrefix, vendors, 0, ns)

  } else if (/^@local$/.test(k)) {
    sheet(v, buf, prefix, rawPrefix, vendors, 1, ns)

  } else if (/^@(?:media |supports |document )./.test(k)) {
    buf.push(k, ' {\n')
    sheet(v, buf, prefix, rawPrefix, vendors, local, ns)
    buf.push('}\n')

  } else {
    buf.push('@-error-unsupported-at-rule ', JSON.stringify(k), ';\n')
  }
}

/**
 * Add rulesets and other CSS statements to the sheet.
 *
 * @param {array|string|object} statements - a source object or sub-object.
 * @param {string[]} buf - the buffer in which the final style sheet is built
 * @param {string} prefix - the current selector or a prefix in case of nested rules
 * @param {string} rawPrefix - as above, but without localization transformations
 * @param {string} vendors - a list of vendor prefixes
 * @Param {boolean} local - are we in @local or in @global scope?
 * @param {object} ns - helper functions to populate or create the @local namespace
 *                      and to @extend classes
 * @param {function} ns.e - @extend helper
 * @param {function} ns.l - @local helper
 */
function sheet(statements, buf, prefix, rawPrefix, vendors, local, ns) {
  var k, kk, v, inDeclaration

  switch (type.call(statements)) {

  case ARRAY:
    for (k = 0; k < statements.length; k++)
      sheet(statements[k], buf, prefix, rawPrefix, vendors, local, ns)
    break

  case OBJECT:
    for (k in statements) {
      v = statements[k]
      if (prefix && /^[-\w$]+$/.test(k)) {
        if (!inDeclaration) {
          inDeclaration = 1
          buf.push(( prefix || '*' ), ' {\n')
        }
        declarations(v, buf, k, vendors, local, ns)
      } else if (/^@/.test(k)) {
        // Handle At-rules
        inDeclaration = (inDeclaration && buf.push('}\n') && 0)

        at(k, v, buf, prefix, rawPrefix, vendors, local, ns)

      } else {
        // selector or nested sub-selectors

        inDeclaration = (inDeclaration && buf.push('}\n') && 0)

        sheet(v, buf,
          (kk = /,/.test(prefix) || prefix && /,/.test(k)) ?
            cartesian(prefix.split(','), ( local ?
          k.replace(
            /()(?::global\(\s*(\.[-\w]+)\s*\)|(\.)([-\w]+))/g, ns.l
          ) : k
        ).split(','), prefix).join(',') :
            concat(prefix, ( local ?
          k.replace(
            /()(?::global\(\s*(\.[-\w]+)\s*\)|(\.)([-\w]+))/g, ns.l
          ) : k
        ), prefix),
          kk ?
            cartesian(rawPrefix.split(','), k.split(','), rawPrefix).join(',') :
            concat(rawPrefix, k, rawPrefix),
          vendors,
          local, ns
        )
      }
    }
    if (inDeclaration) buf.push('}\n')
    break
  case STRING:
    buf.push(
        ( prefix || ':-error-no-selector' ) , ' {\n'
      )
    declarations(statements, buf, '', vendors, local, ns)
    buf.push('}\n')
  }
}

var scope_root = '_j2c_' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '_' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '_' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '_' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '_';
var counter = 0;
function j2c(res) {
  res = res || {}
  var extensions = []

  function finalize(buf, i) {
    for (i = 0; i< extensions.length; i++) buf = extensions[i](buf) || buf
    return buf.join('')
  }

  res.use = function() {
    var args = arguments
    for (var i = 0; i < args.length; i++){
      extensions.push(args[i])
    }
    return res
  }
/*/-statements-/*/
  res.sheet = function(ns, statements) {
    if (arguments.length === 1) {
      statements = ns; ns = {}
    }
    var
      suffix = scope_root + counter++,
      locals = {},
      k, buf = []
    // pick only non-numeric keys since `(NaN != NaN) === true`
    for (k in ns) if (k-0 != k-0 && own.call(ns, k)) {
      locals[k] = ns[k]
    }
    sheet(
      statements, buf, '', '', emptyArray /*vendors*/,
      1, // local
      {
        e: function extend(parent, child) {
          var nameList = locals[child]
          locals[child] =
            nameList.slice(0, nameList.lastIndexOf(' ') + 1) +
            parent + ' ' +
            nameList.slice(nameList.lastIndexOf(' ') + 1)
        },
        l: function localize(match, space, global, dot, name) {
          if (global) {
            return space + global
          }
          if (!locals[name]) locals[name] = name + suffix
          return space + dot + locals[name].match(/\S+$/)
        }
      }
    )
    /*jshint -W053 */
    buf = new String(finalize(buf))
    /*jshint +W053 */
    for (k in locals) if (own.call(locals, k)) buf[k] = locals[k]
    return buf
  }
/*/-statements-/*/
  res.inline = function (locals, decl, buf) {
    if (arguments.length === 1) {
      decl = locals; locals = {}
    }
    declarations(
      decl,
      buf = [],
      '', // prefix
      emptyArray, // vendors
      1,
      {
        l: function localize(match, space, global, dot, name) {
          if (global) return space + global
          if (!locals[name]) return name
          return space + dot + locals[name]
        }
      })
    return finalize(buf)
  }

  res.prefix = function(val, vendors) {
    return cartesian(
      vendors.map(function(p){return '-' + p + '-'}).concat(['']),
      [val]
    )
  }
  return res
}

j2c.global = function(x) {
  return ':global(' + x + ')'
}

j2c.kv = kv
function kv (k, v, o) {
  o = {}
  o[k] = v
  return o
}

j2c.at = function at (rule, params, block) {
  if (
    arguments.length < 3
  ) {
    var _at = at.bind.apply(at, [null].concat([].slice.call(arguments,0)))
    _at.toString = function(){return '@' + rule + ' ' + params}
    return _at
  }
  else return kv('@' + rule + ' ' + params, block)
}

j2c(j2c)
delete j2c.use

module.exports = j2c;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(163);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _nav = __webpack_require__(43);

var _nav2 = _interopRequireDefault(_nav);

var _github = __webpack_require__(41);

var _github2 = _interopRequireDefault(_github);

var _button = __webpack_require__(47);

var _button2 = _interopRequireDefault(_button);

var _card = __webpack_require__(49);

var _card2 = _interopRequireDefault(_card);

var _checkbox = __webpack_require__(51);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _dialog = __webpack_require__(53);

var _dialog2 = _interopRequireDefault(_dialog);

var _fab = __webpack_require__(70);

var _fab2 = _interopRequireDefault(_fab);

var _headerPanel = __webpack_require__(90);

var _headerPanel2 = _interopRequireDefault(_headerPanel);

var _icon = __webpack_require__(97);

var _icon2 = _interopRequireDefault(_icon);

var _iconButton = __webpack_require__(95);

var _iconButton2 = _interopRequireDefault(_iconButton);

var _layout = __webpack_require__(99);

var _layout2 = _interopRequireDefault(_layout);

var _list = __webpack_require__(113);

var _list2 = _interopRequireDefault(_list);

var _listControls = __webpack_require__(105);

var _listControls2 = _interopRequireDefault(_listControls);

var _listTile = __webpack_require__(111);

var _listTile2 = _interopRequireDefault(_listTile);

var _menu = __webpack_require__(117);

var _menu2 = _interopRequireDefault(_menu);

var _notification = __webpack_require__(121);

var _notification2 = _interopRequireDefault(_notification);

var _radioButton = __webpack_require__(123);

var _radioButton2 = _interopRequireDefault(_radioButton);

var _ripple = __webpack_require__(125);

var _ripple2 = _interopRequireDefault(_ripple);

var _search = __webpack_require__(128);

var _search2 = _interopRequireDefault(_search);

var _shadow = __webpack_require__(130);

var _shadow2 = _interopRequireDefault(_shadow);

var _slider = __webpack_require__(135);

var _slider2 = _interopRequireDefault(_slider);

var _speedTest = __webpack_require__(137);

var _speedTest2 = _interopRequireDefault(_speedTest);

var _spinner = __webpack_require__(139);

var _spinner2 = _interopRequireDefault(_spinner);

var _svg = __webpack_require__(141);

var _svg2 = _interopRequireDefault(_svg);

var _switch = __webpack_require__(143);

var _switch2 = _interopRequireDefault(_switch);

var _tabs = __webpack_require__(150);

var _tabs2 = _interopRequireDefault(_tabs);

var _tabsMenu = __webpack_require__(18);

var _tabsMenu2 = _interopRequireDefault(_tabsMenu);

var _tabsRouting = __webpack_require__(19);

var _tabsRouting2 = _interopRequireDefault(_tabsRouting);

var _textfield = __webpack_require__(152);

var _textfield2 = _interopRequireDefault(_textfield);

var _theming = __webpack_require__(153);

var _theming2 = _interopRequireDefault(_theming);

var _toolbar = __webpack_require__(156);

var _toolbar2 = _interopRequireDefault(_toolbar);

var _validation = __webpack_require__(158);

var _validation2 = _interopRequireDefault(_validation);

__webpack_require__(168);

var _appStyle = __webpack_require__(40);

var _appStyle2 = _interopRequireDefault(_appStyle);

var _arrowRight = __webpack_require__(13);

var _arrowRight2 = _interopRequireDefault(_arrowRight);

var _recycle = __webpack_require__(44);

var _recycle2 = _interopRequireDefault(_recycle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-app', _appStyle2.default);

var links = [{
    label: 'Components',
    links: [{
        url: '/header-panel',
        module: _headerPanel2.default,
        name: 'Header Panel',
        doc: 'http://polythene.js.org/#header-panel'
    }, {
        url: '/toolbar',
        module: _toolbar2.default,
        name: 'Toolbar',
        doc: 'http://polythene.js.org/#toolbar'
    }, {
        url: '/list',
        module: _list2.default,
        name: 'List'
    }, {
        url: '/list-controls',
        module: _listControls2.default,
        name: 'List Controls'
    }, {
        url: '/dialog',
        module: _dialog2.default,
        name: 'Dialog'
    }, {
        url: '/menu',
        module: _menu2.default,
        name: 'Menu'
    }, {
        url: '/tabs',
        module: _tabs2.default,
        name: 'Tabs'
    }, {
        url: '/card',
        module: _card2.default,
        name: 'Card'
    }, {
        url: '/notification',
        module: _notification2.default,
        name: 'Notification and Snackbar'
    }, {
        url: '/button',
        module: _button2.default,
        name: 'Button'
    }, {
        url: '/icon-button',
        module: _iconButton2.default,
        name: 'Icon Button'
    }, {
        url: '/fab',
        module: _fab2.default,
        name: 'Floating Action Button'
    }, {
        url: '/slider',
        module: _slider2.default,
        name: 'Slider'
    }, {
        url: '/list-tile',
        module: _listTile2.default,
        name: 'List Tile'
    }, {
        url: '/textfield',
        module: _textfield2.default,
        name: 'Text field'
    }, {
        url: '/checkbox',
        module: _checkbox2.default,
        name: 'Checkbox'
    }, {
        url: '/radio-button',
        module: _radioButton2.default,
        name: 'Radio button'
    }, {
        url: '/search',
        module: _search2.default,
        name: 'Search'
    }, {
        url: '/spinner',
        module: _spinner2.default,
        name: 'Spinner'
    }, {
        url: '/switch',
        module: _switch2.default,
        name: 'Switch'
    }, {
        url: '/svg',
        module: _svg2.default,
        name: 'SVG'
    }, {
        url: '/icon',
        module: _icon2.default,
        name: 'Icon'
    }, {
        url: '/ripple',
        module: _ripple2.default,
        name: 'Ripple'
    }, {
        url: '/shadow',
        module: _shadow2.default,
        name: 'Shadow'
    }, {
        url: '/validation',
        name: 'Validation',
        module: _validation2.default
    }]
}, {
    label: 'Layout and theming',
    links: [{
        url: '/layout',
        module: _layout2.default,
        name: 'Layout'
    }, {
        url: '/theming',
        module: _theming2.default,
        name: 'Custom theme'
    }]
}, {
    label: 'Tests',
    links: [{
        url: '/speed-test',
        module: _speedTest2.default,
        name: 'Mobile tap speed tests'
    }]
}];

var additionalRoutes = [{
    url: '/tabs-routing',
    module: _tabsRouting2.default
}, {
    url: '/tabs-menu',
    module: _tabsMenu2.default
}];

var linkMap = {};
links.forEach(function (group) {
    group.links.forEach(function (linkData) {
        linkMap[linkData.url] = linkData;
    });
});
additionalRoutes.forEach(function (linkData) {
    linkMap[linkData.url] = linkData;
});

var sortLinkData = function sortLinkData(a, b) {
    var a1 = a.name.toLowerCase();
    var b1 = b.name.toLowerCase();
    return a1 > b1 ? 1 : a1 < b1 ? -1 : 0;
};

var getRouteBase = function getRouteBase(route) {
    return '/' + route.split(/\//)[1];
};

var item = function item(link) {
    return (0, _mithril2.default)(_polythene.ListTile, {
        title: link.name,
        front: (0, _mithril2.default)(_polythene.Icon, {
            type: 'medium',
            class: 'index-cirle-icon',
            msvg: _arrowRight2.default
        }),
        url: {
            href: link.url,
            config: link.config !== undefined ? link.config : _mithril2.default.route
        }
    });
};

var indexContent = {
    view: function view() {
        var minScale = 22 / 32;
        var onHeaderTransform = function onHeaderTransform(e) {
            var titleStyle = document.querySelector('.pe-title').style;
            var middle = e.height - e.condensedHeight;
            var scale = Math.max(minScale, (middle - e.y) / (middle / (1 - minScale)) + minScale);
            titleStyle.transform = titleStyle.webkitTransform = 'scale(' + scale + ') translateZ(0)';
        };

        return (0, _mithril2.default)('.demo-content', (0, _mithril2.default)(_polythene.HeaderPanel, {
            class: 'app-header index-header',
            mode: 'waterfall-tall',
            keepCondensedHeader: true,
            header: {
                toolbar: {
                    bottomBar: (0, _mithril2.default)('.pe-toolbar__title--indent.pe-title', [(0, _mithril2.default)(_polythene.Icon, {
                        msvg: _recycle2.default,
                        class: 'logo'
                    }), 'Polythene Examples'])
                }
            },
            content: [(0, _mithril2.default)('.index', (0, _mithril2.default)('.index-list', [links.map(function (linkGroup) {
                return (0, _mithril2.default)(_polythene.List, {
                    header: {
                        title: linkGroup.label,
                        indent: true
                    },
                    tiles: linkGroup.links.sort(sortLinkData).map(function (link) {
                        return link.hidden ? null : item(link);
                    }),
                    hoverable: true
                });
            })])), _github2.default],
            transform: onHeaderTransform,
            restoreScrollPositionId: 'index'
        }));
    }
};

var getNewModule = function getNewModule(ln) {
    if (!ln) {
        return null;
    }
    var dynMod = ln.module;
    return dynMod ? dynMod.subview ? dynMod.subview(_mithril2.default.route()) : dynMod : null;
};

var app = {};
app.vm = {
    module: _mithril2.default.prop(),
    moduleName: null
};
app.controller = function () {
    _mithril2.default.redraw.strategy('diff');
    // use flexible routing to support nested route calls (f.i. in the dialog and tabs examples)
    var route = getRouteBase(_mithril2.default.route());
    var link = linkMap[route];
    app.vm.module(getNewModule(link));
    var linkName = link && link.name ? link.name : 'index';
    app.vm.moduleName = linkName;
    var baseTitle = 'Polythene Examples';
    document.title = linkName ? baseTitle + ': ' + linkName : baseTitle;
};

app.view = function () {
    var module = app.vm.module();
    if (module) {
        return [module.hideNav ? (0, _mithril2.default)('.demo-content', (0, _mithril2.default)(module)) : (0, _nav2.default)(module.title || app.vm.moduleName, [(0, _mithril2.default)('.demo-content', (0, _mithril2.default)(module)), _github2.default], {
            updateContentOnScroll: true, //module.updateContentOnScroll || false,
            isSub: module.isSub,
            back: module.back
        }), (0, _mithril2.default)(_polythene.Dialog)];
    } else {
        return [(0, _mithril2.default)(indexContent), (0, _mithril2.default)(_polythene.Dialog)];
    }
};

_mithril2.default.route.mode = 'hash';
_mithril2.default.route(document.body, '/', {
    '/:any...': app
});

// When going to another page and then hitting the back button
// on Safari 9.0.x, the scrollable panes are frozen.
// This script reloads the view.
window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
        setTimeout(function () {
            window.location.reload();
        }, 0);
    }
}, false);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__src__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__src__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = [_defineProperty({
    ' html, body': {
        'min-height': '100%',
        height: '100%'
    },
    ' body': {
        background: _commonVars2.default.bodyBackgroundColor,
        margin: 0,
        padding: 0,
        'min-width': '320px',
        color: '#333',
        overflow: 'hidden' // prevent elastic scroll because we are using a header panel on every page
    },
    ' h1': {
        margin: '20px 0 0 0',
        'font-size': '2em',
        'line-height': 1,
        padding: 0,

        ' span': {
            'font-weight': 'normal',
            color: '#aaa',
            'margin-left': '.5em'
        }
    },
    ' h1, h2': {
        color: '#37474F'
    },
    ' a:link, a:visited': {
        'text-decoration': 'none',
        color: '#1565C0'
    },
    ' .demo-content': {
        padding: '0 0 1px 0',
        height: 'inherit'
    },

    ' .index': {
        padding: 0,
        margin: '0 0 32px 0'
    },
    ' .index-list': {
        width: _commonVars2.default.listWidth + 'px',
        margin: _commonVars2.default.margin + 'px auto',
        'background-color': '#fff',

        ' .pe-icon.index-cirle-icon': {
            width: '40px',
            height: '40px',
            'border-radius': '50%',
            'background-color': 'transparent',

            ' svg path': {
                fill: 'rgba(0, 0, 0, 0.4)'
            }
        },
        ' .pe-icon.index-cirle-icon i': {
            padding: '8px'
        },
        ' .pe-list-tile-secondary': {
            color: '#757575'
        }
    },
    ' html.pe-no-touch .index-list .pe-list--hoverable .pe-list-tile:not(.pe-list__header):not(.pe-list-tile--disabled):hover': {
        'background-color': '#f7f7f7'
    },
    '.p-block, .h-block': {
        'max-width': _commonVars2.default.blockMaxWidth + 'px',
        margin: '0 auto',

        '> p': {
            margin: '0 0 16px 0'
        },
        ' .p-block-header': {
            'font-weight': 400,
            margin: '0 0 24px 0',
            'font-size': '18px',
            'line-height': 1.3,
            color: 'inherit'
        },
        ' .p-block-header + p': {
            'margin-top': '-16px'
        }
    },
    '.p-block .p-block .p-block-header': {
        'font-size': '17px'
    },
    '.p-block': {
        padding: '32px 28px'
    },
    '.h-block + .p-block': {
        'margin-top': 0
    },
    '.p-block:not(.p-inner-block) + .p-block:not(.p-inner-block)': {
        'border-top': '1px solid #d6d6d6'
    },
    '.p-block.pe-dark-theme:not(.p-inner-block) + .p-block.pe-dark-theme:not(.p-inner-block)': {
        'border-top': '1px solid #555'
    },
    '.p-block.p-block-info': {
        'margin': '20px auto 10px auto',

        '&, p': {
            'font-size': '16px',
            'line-height': '24px'
        }
    },
    '.p-block.pe-dark-theme': {
        background: _commonVars2.default.darkThemeBackgroundColor,
        color: '#fff'
    },
    '.p-block.p-inner-block': {
        padding: '10px 0',
        margin: 0,
        'font-size': '1.2em'
    },
    '.h-block': {
        padding: '24px 24px 0 24px',
        'margin-top': '24px',

        ' h1, h2, h3, h4, h5, h6': {
            margin: 0
        }
    },
    ' .avatar': {
        'border-radius': '50%',
        'background-color': '#eee'
    }
}, '@media (max-width: ' + _commonVars2.default.mediaMobile + 'px)', {
    ' .p-block, .h-block': {
        'padding-left': '16px',
        'padding-right': '16px'
    }
})];

exports.default = styles;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var content = (0, _mithril2.default)('.github', _mithril2.default.trust('Polythene, a modular implementation of Material Design for Mithril.<br /><a href="http://polythene.js.org">Documentation</a> and <a href="https://github.com/ArthurClemens/Polythene">Github project page</a>.'));

var style = [{
    '.github': {
        margin: '24px 0 0 0',
        'text-align': 'center',
        padding: '24px 16px',
        'border-top': '1px solid rgba(0,0,0,.08)',
        'font-size': '14px',
        color: 'rgba(0,0,0,.35)'
    }
}];

_polythene.styler.add('polythene-examples-github', style);

exports.default = content;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ref;

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var headerFontSizePx = '32px';
var headerBackgroundColor = _commonVars2.default.colorHeader;
var headerTextColor = '#fff';

var styles = [(_ref = {
    '.pe-header-panel.app-header': {
        ' .pe-header-panel__outer-container > .pe-header-panel__header-container:first-of-type': {
            ' .pe-toolbar': {
                'background-color': headerBackgroundColor,
                'font-size': '20px',
                padding: '0 4px',
                'font-weight': 400,

                ' .pe-toolbar__bar--top': {
                    color: headerTextColor,

                    ' a.pe-button--icon': {
                        color: headerTextColor
                    }
                }
            }
        }
    },
    /*
    Style for the large header
    */
    '.pe-header-panel.index-header': {
        ' .pe-header-panel__header-container .pe-title': {
            'font-size': headerFontSizePx,
            color: headerTextColor,
            'text-align': 'center'
        },
        ' .pe-icon.logo': {
            width: headerFontSizePx,
            height: headerFontSizePx,
            'margin-right': '16px',
            ' svg path': {
                fill: headerTextColor
            }
        }
    }
}, _defineProperty(_ref, '@media (max-width: ' + _commonVars2.default.mediaTablet + 'px)', {
    ' .pe-header-panel.index-header .pe-header-panel__header-container:first-of-type .pe-title': {
        'margin-left': '20px'
    }
}), _defineProperty(_ref, '@media (max-width: ' + _commonVars2.default.mediaMobile + 'px)', {
    ' .pe-header-panel.index-header .pe-header-panel__header-container:first-of-type .pe-title': {
        ' .pe-icon': {
            display: 'none'
        }
    }
}), _ref)];

exports.default = styles;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _navStyle = __webpack_require__(42);

var _navStyle2 = _interopRequireDefault(_navStyle);

var _apps = __webpack_require__(179);

var _apps2 = _interopRequireDefault(_apps);

var _arrowBack = __webpack_require__(10);

var _arrowBack2 = _interopRequireDefault(_arrowBack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-nav', _navStyle2.default);

var btn = function btn(name, opts) {
    var route = opts.back || '/';
    return (0, _mithril2.default)(_polythene.IconButton, {
        tag: 'a',
        url: {
            href: opts.urlConfig !== undefined ? 'index.html' : route,
            config: opts.urlConfig !== undefined ? opts.urlConfig : _mithril2.default.route
        },
        icon: {
            msvg: opts.isSub ? _arrowBack2.default : _apps2.default
            // events: {
            //     onclick: (e) => (e.preventDefault(), m.route(route))
            // }
        } });
};

var toolbarRow = function toolbarRow(title, opts) {
    return [btn('apps', opts), (0, _mithril2.default)('span.flex', title)];
};

var nav = function nav(title, content) {
    var opts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return (0, _mithril2.default)(_polythene.HeaderPanel, Object.assign(opts, {
        class: 'app-header',
        mode: 'waterfall',
        header: {
            toolbar: {
                topBar: toolbarRow(title, opts)
            }
        },
        content: content
    }));
};

exports.default = nav;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(0);module.exports = m.trust('<?xml version="1.0" encoding="utf-8"?><svg version="1.1" x="0px" y="0px" width="100px" height="100px" viewBox="-149.5 250.5 100 100" enable-background="new -149.5 250.5 100 100" xml:space="preserve"><g><path d="M-121.911,326.974l4.529,4.53h-21.011c-1.058,0-2.041-0.556-2.564-1.449c-0.507-0.868-0.507-1.945,0.001-2.814 l15.481-26.467l-7.046-4.123l-15.482,26.467c-1.995,3.412-1.995,7.65,0.002,11.062c1.984,3.385,5.666,5.487,9.609,5.487h21.007 l-4.524,4.525l5.772,5.771l14.379-14.378l-14.378-14.384L-121.911,326.974z"/><path d="M-51.021,322.837l-10.604-18.144l6.196,1.626l2.07-7.896l-19.671-5.161l-5.161,19.673l7.895,2.073l1.625-6.189 l10.599,18.134c0.533,0.917,0.55,2.048,0.048,2.941c-0.498,0.88-1.431,1.427-2.438,1.427l-30.657-0.011l-0.004,8.164l30.661,0.011 c3.942,0,7.599-2.135,9.55-5.582C-48.99,330.485-49.033,326.246-51.021,322.837z"/><path d="M-74.419,282.942l-15.458-26.484c-1.964-3.356-5.577-5.422-9.458-5.422c-0.059,0-0.117,0-0.176,0 c-3.91,0.063-7.547,2.236-9.492,5.678l-10.32,18.311l-1.718-6.167l-7.865,2.19l5.458,19.59l19.597-5.469l-2.194-7.862l-6.162,1.72 l10.312-18.301c0.524-0.923,1.487-1.508,2.515-1.525c0.016,0,0.029,0,0.045,0c0.99,0,1.912,0.528,2.41,1.38l15.455,26.478 L-74.419,282.942z"/></g></svg>');

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (opts) {
    var buttonOpts = [{
        label: 'Normal',
        raised: opts.raised
    }, {
        label: 'Disabled',
        disabled: true,
        raised: opts.raised
    }, {
        label: 'Wash only',
        ink: false,
        raised: opts.raised
    }, {
        label: 'Ink only',
        ink: true,
        raised: opts.raised,
        wash: false
    }, opts.raised ? {
        label: 'Raised more',
        raised: opts.raised,
        z: 2
    } : null, {
        label: '2 secs inactive',
        inactivate: 2,
        raised: opts.raised
    }];

    return buttonOpts.map(function (opts) {
        if (opts) {
            return (0, _mithril2.default)(_polythene.Button, opts);
        }
    });
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.module-button': {
        ' .button-row': {
            'margin-left': '-4px'
        },
        ' .p-block.pe-dark-theme': {
            'background-color': _commonVars2.default.darkThemeBackgroundColor,
            color: '#fff'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _buttonRow = __webpack_require__(45);

var _buttonRow2 = _interopRequireDefault(_buttonRow);

var _polythene = __webpack_require__(1);

var _buttonStyle = __webpack_require__(46);

var _buttonStyle2 = _interopRequireDefault(_buttonStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-button', _buttonStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', {
            class: args.class
        }, [(0, _mithril2.default)('.p-block-header', args.title), args.content ? args.content : null]);
    }
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-button', [(0, _mithril2.default)(titleBlock, {
        title: 'Raised Light / Light theme',
        content: (0, _mithril2.default)('.button-row', (0, _buttonRow2.default)({
            raised: true
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Flat Light / Light theme',
        content: (0, _mithril2.default)('.button-row', (0, _buttonRow2.default)({
            raised: false
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Raised Dark / Dark theme',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)('.button-row', (0, _buttonRow2.default)({
            raised: true
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Flat Dark / Dark theme',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)('.button-row', (0, _buttonRow2.default)({
            raised: false
        }))
    })]);
};

exports.default = _module;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(7);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.module-card': {
        ' .demo-cards': {
            margin: '-10px'
        },
        ' .demo-card': {
            width: '400px',
            margin: '10px',
            ':not(.overlay.pe-dark-theme) .button__content': {
                color: '#5C6BC0'
            },

            '&.small': {
                width: '170px',
                ' .pe-card-overlay': {
                    background: 'none'
                }
            },
            '&.on .pe-card__media__dimmer, &.small .pe-card__media__dimmer': _mixin2.default.vendorize({
                'box-shadow': 'inset 0px 0px 40px rgba(0, 0, 0, 0.6)'
            }, _config2.default.prefixes_box_shadow),
            '&.extra-large': {
                width: _commonVars2.default.listWidth + 'px'
            },
            '&.custom': {
                width: '344px',
                '&.custom-travel .pe-button .pe-button__content': {
                    color: '#5C6BC0'
                }
            },
            '&.custom-sand.pe-dark-theme': {
                'background-color': '#B89E58'
            },
            '&.custom-sky.pe-dark-theme': {
                'background-color': '#227586'
            },
            '&.custom-bucket.pe-dark-theme': {
                'background-color': '#871E6A'
            }
        },
        ' a[href].demo-card:hover .pe-card__media__dimmer': _mixin2.default.vendorize({
            'box-shadow': 'inset 0px 0px 40px rgba(0, 0, 0, 0.6)'
        }, _config2.default.prefixes_box_shadow)
    }
}];

exports.default = styles;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _cardStyle = __webpack_require__(48);

var _cardStyle2 = _interopRequireDefault(_cardStyle);

var _heart = __webpack_require__(8);

var _heart2 = _interopRequireDefault(_heart);

var _bookmark = __webpack_require__(184);

var _bookmark2 = _interopRequireDefault(_bookmark);

var _share = __webpack_require__(187);

var _share2 = _interopRequireDefault(_share);

var _expandLess = __webpack_require__(181);

var _expandLess2 = _interopRequireDefault(_expandLess);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-card', _cardStyle2.default);

var IMG_URL = 'http://arthurclemens.github.io/assets/polythene/examples/';

var listTitle = 'Title line Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';
var listSubtitle = 'Secondary text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

var titleLineText = 'Title';
var infoLineText = 'Subhead';
var ipsum = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.';
var shortIpsum = 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat';

var avatarImageUrl = function avatarImageUrl(fileName) {
    return 'http://arthurclemens.github.io/assets/polythene/examples/avatar-' + fileName;
};

var iconButtonRow = [(0, _mithril2.default)('.flex'), (0, _mithril2.default)(_polythene.IconButton, {
    icon: {
        msvg: _heart2.default
    }
}), (0, _mithril2.default)(_polythene.IconButton, {
    icon: {
        msvg: _bookmark2.default
    }
}), (0, _mithril2.default)(_polythene.IconButton, {
    icon: {
        msvg: _share2.default
    }
})];

var justifiedButtonRow = {
    layout: 'justified',
    class: 'pe-card__actions--tight',
    content: [(0, _mithril2.default)(_polythene.IconButton, {
        icon: {
            msvg: _heart2.default
        }
    }), (0, _mithril2.default)(_polythene.IconButton, {
        icon: {
            msvg: _bookmark2.default
        }
    }), (0, _mithril2.default)(_polythene.IconButton, {
        icon: {
            msvg: _share2.default
        }
    })]
};

var titleImage = function titleImage(type, title) {
    return {
        class: 'demo-card',
        content: [{
            primary: {
                title: title,
                subtitle: 'Subtitle',
                media: {
                    ratio: 'square',
                    type: type,
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }
        }, {
            actions: {
                content: [(0, _mithril2.default)(_polythene.Button, {
                    label: 'Action 1'
                }), (0, _mithril2.default)(_polythene.Button, {
                    label: 'Action 2'
                })]
            }
        }]
    };
};

var titleImageExtraLarge = function titleImageExtraLarge(ratio) {
    return {
        class: 'demo-card extra-large',
        content: [{
            primary: {
                content: [{
                    media: {
                        ratio: ratio,
                        type: 'large',
                        content: (0, _mithril2.default)('img', {
                            src: IMG_URL + '1.jpg'
                        })
                    }
                }, (0, _mithril2.default)('.flex'), {
                    actions: {
                        layout: 'vertical',
                        content: [(0, _mithril2.default)(_polythene.IconButton, {
                            icon: {
                                msvg: _heart2.default
                            }
                        }), (0, _mithril2.default)(_polythene.IconButton, {
                            icon: {
                                msvg: _bookmark2.default
                            }
                        }), (0, _mithril2.default)(_polythene.IconButton, {
                            icon: {
                                msvg: _share2.default
                            }
                        })]
                    }
                }]
            }
        }]
    };
};

var block = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', {
            class: args.class || ''
        }, [(0, _mithril2.default)('.p-block-header', args.label), args.info ? args.info : null, (0, _mithril2.default)('.demo-cards.horizontal.layout.wrap', [args.card ? (0, _mithril2.default)(_polythene.Card, args.card) : null, args.cards ? args.cards.map(function (cardArgs) {
            return (0, _mithril2.default)(_polythene.Card, cardArgs);
        }) : null])]);
    }
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-card', [(0, _mithril2.default)(block, {
        label: 'Any content: list',
        card: {
            class: 'demo-card',
            content: (0, _mithril2.default)(_polythene.List, {
                hoverable: true,
                tiles: [(0, _mithril2.default)(_polythene.ListTile, {
                    title: listTitle,
                    subtitle: listSubtitle
                }), (0, _mithril2.default)(_polythene.ListTile, {
                    title: listTitle,
                    subtitle: listSubtitle
                }), (0, _mithril2.default)(_polythene.ListTile, {
                    title: listTitle,
                    subtitle: listSubtitle
                })]
            })
        }
    }), (0, _mithril2.default)(block, {
        label: 'Text only',
        card: {
            class: 'demo-card',
            content: [{
                primary: {
                    title: 'Primary title',
                    subtitle: 'Subtitle'
                }
            }]
        }
    }), (0, _mithril2.default)(block, {
        label: 'Header with icon',
        cards: [{
            class: 'demo-card',
            content: [{
                header: {
                    title: titleLineText,
                    subtitle: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'pe-icon--avatar',
                        src: avatarImageUrl('1.png')
                    }
                }
            }, {
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'grey.jpg'
                    })
                }
            }]
        }]
    }), (0, _mithril2.default)(block, {
        label: 'Primary text',
        card: {
            class: 'demo-card',
            content: [{
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'grey.jpg'
                    })
                }
            }, {
                primary: {
                    title: 'Primary title',
                    subtitle: 'Subtitle'
                }
            }]
        }
    }), (0, _mithril2.default)(block, {
        label: 'Primary text with supporting text',
        card: {
            class: 'demo-card',
            content: [{
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'grey.jpg'
                    })
                }
            }, {
                primary: {
                    title: 'Primary title ' + shortIpsum,
                    subtitle: 'Subtitle ' + shortIpsum
                }
            }, {
                text: {
                    content: ipsum
                }
            }]
        }
    }), (0, _mithril2.default)(block, {
        label: 'Primary text with action row and text',
        card: {
            class: 'demo-card',
            content: [{
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'grey.jpg'
                    })
                }
            }, {
                primary: {
                    title: 'Primary title',
                    subtitle: 'Subtitle'
                }
            }, {
                actions: {
                    content: [(0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 1'
                    }), (0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 2'
                    }), (0, _mithril2.default)('.flex'), (0, _mithril2.default)(_polythene.IconButton, {
                        icon: {
                            type: 'medium',
                            msvg: _expandLess2.default
                        }
                    })]
                }
            }, {
                text: {
                    content: ipsum
                }
            }]
        }
    }), (0, _mithril2.default)(block, {
        label: 'Bottom action row, bordered',
        cards: [{
            class: 'demo-card',
            content: [{
                header: {
                    title: titleLineText,
                    subtitle: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'pe-icon--avatar',
                        src: avatarImageUrl('1.png')
                    }
                }
            }, {
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'grey.jpg'
                    })
                }
            }, {
                text: {
                    content: ipsum
                }
            }, {
                actions: {
                    class: 'pe-card__actions--borders',
                    content: [(0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 1'
                    }), (0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 2'
                    }), (0, _mithril2.default)('.flex'), (0, _mithril2.default)(_polythene.IconButton, {
                        icon: {
                            type: 'medium',
                            msvg: _expandLess2.default
                        }
                    })]
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                header: {
                    title: titleLineText,
                    subtitle: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'pe-icon--avatar',
                        src: avatarImageUrl('1.png')
                    }
                }
            }, {
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'grey.jpg'
                    })
                }
            }, {
                actions: {
                    layout: 'vertical',
                    content: [(0, _mithril2.default)('.pe-card__actions.pe-card__actions--borders', (0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 1'
                    })), (0, _mithril2.default)('.pe-card__actions.pe-card__actions--borders', (0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 2'
                    })), (0, _mithril2.default)('.pe-card__actions.pe-card__actions--borders', (0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 3'
                    }))]
                }
            }]
        }]
    }), (0, _mithril2.default)(block, {
        label: '16:9 media with square image',
        info: (0, _mithril2.default)('p', 'Anchor origin: default, start, end'),
        cards: [{
            class: 'demo-card',
            content: [{
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'circle.png'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    origin: 'start',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'circle.png'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    origin: 'end',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'circle.png'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }]
    }), (0, _mithril2.default)(block, {
        label: '16:9 media with landscape image',
        info: (0, _mithril2.default)('p', 'Anchor origin: default, start, end'),
        cards: [{
            class: 'demo-card',
            content: [{
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    origin: 'start',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    origin: 'end',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }]
    }), (0, _mithril2.default)(block, {
        label: '16:9 media with portrait image',
        info: (0, _mithril2.default)('p', 'Anchor origin: default, start, end'),
        cards: [{
            class: 'demo-card',
            content: [{
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '2.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    origin: 'start',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '2.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    origin: 'end',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '2.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }]
    }), (0, _mithril2.default)(block, {
        label: '1:1 media with square image',
        info: (0, _mithril2.default)('p', 'Anchor origin: default, start, end'),
        cards: [{
            class: 'demo-card',
            content: [{
                media: {
                    ratio: 'square',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    ratio: 'square',
                    origin: 'start',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                media: {
                    ratio: 'square',
                    origin: 'end',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                actions: {
                    content: iconButtonRow
                }
            }]
        }]
    }), (0, _mithril2.default)(block, {
        label: 'Overlay with sheet',
        card: {
            class: 'demo-card',
            content: [{
                media: {
                    ratio: 'square',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    }),
                    overlay: {
                        class: 'pe-dark-theme',
                        sheet: true,
                        content: [{
                            primary: {
                                title: 'Primary title',
                                subtitle: 'Subtitle'
                            }
                        }, {
                            actions: {
                                content: [(0, _mithril2.default)(_polythene.Button, {
                                    label: 'Action 1'
                                }), (0, _mithril2.default)(_polythene.Button, {
                                    label: 'Action 2'
                                })]
                            }
                        }]
                    }
                }
            }]
        }
    }), (0, _mithril2.default)(block, {
        label: 'Overlay without sheet',
        cards: [{
            class: 'demo-card small',
            content: [{
                media: {
                    ratio: 'square',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    }),
                    overlay: {
                        class: 'pe-dark-theme',
                        content: [{
                            primary: {
                                title: 'Title'
                            }
                        }]
                    }
                }
            }, {
                actions: justifiedButtonRow
            }]
        }, {
            class: 'demo-card small',
            content: [{
                media: {
                    ratio: 'square',
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    }),
                    overlay: {
                        class: 'pe-dark-theme',
                        content: [{
                            primary: {
                                title: 'Title'
                            }
                        }]
                    }
                }
            }, {
                actions: justifiedButtonRow
            }]
        }]
    }), (0, _mithril2.default)(block, {
        label: 'Title images',
        cards: [titleImage('small', 'Title image small'), titleImage('regular', 'Title image regular'), titleImage('medium', 'Title image medium')]
    }), (0, _mithril2.default)(block, {
        label: 'Title image large',
        cards: [titleImageExtraLarge('square'), titleImageExtraLarge('landscape')]
    }), (0, _mithril2.default)(block, {
        label: 'Card URL',
        cards: [{
            class: 'demo-card',
            url: {
                href: 'http://en.wikipedia.org/wiki/Road_to_Nowhere',
                config: null
            },
            content: [{
                header: {
                    title: titleLineText,
                    subtitle: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'pe-icon--avatar',
                        src: avatarImageUrl('1.png')
                    },
                    url: {
                        href: 'http://www.imdb.com/name/nm0260632/',
                        config: null
                    }
                }
            }, {
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                primary: {
                    title: 'Primary title',
                    subtitle: 'Subtitle'
                }
            }, {
                actions: {
                    content: [(0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 1',
                        events: {
                            onclick: function onclick(e) {
                                // prevent URL
                                e.preventDefault();
                            }
                        }
                    }), (0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 2',
                        events: {
                            onclick: function onclick(e) {
                                // prevent URL
                                e.preventDefault();
                            }
                        }
                    })]
                }
            }]
        }]
    }), (0, _mithril2.default)(block, {
        label: 'Card events',
        cards: [{
            class: 'demo-card',
            events: {
                onmouseover: function onmouseover() {
                    this.classList.add('on');
                },
                onmouseout: function onmouseout() {
                    this.classList.remove('on');
                },
                onclick: function onclick() {
                    window.alert('Card clicked');
                }
            },
            content: [{
                header: {
                    title: titleLineText,
                    subtitle: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'pe-icon--avatar',
                        src: avatarImageUrl('1.png')
                    }
                }
            }, {
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '1.jpg'
                    })
                }
            }, {
                primary: {
                    title: 'Primary title',
                    subtitle: 'Subtitle'
                }
            }, {
                actions: {
                    content: [(0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 1',
                        events: {
                            onclick: function onclick(e) {
                                // prevent card event
                                e.stopPropagation();
                                window.alert('Action 1 clicked');
                            }
                        }
                    }), (0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 2',
                        events: {
                            onclick: function onclick(e) {
                                // prevent card event
                                e.stopPropagation();
                                window.alert('Action 2 clicked');
                            }
                        }
                    })]
                }
            }]
        }]
    }), (0, _mithril2.default)(block, {
        label: 'Dark theme',
        card: {
            class: 'demo-card pe-dark-theme',
            content: [{
                header: {
                    title: titleLineText,
                    subtitle: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'pe-icon--avatar',
                        src: avatarImageUrl('1.png')
                    }
                }
            }, {
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + 'grey.jpg'
                    })
                }
            }, {
                primary: {
                    title: 'Primary title ' + shortIpsum,
                    subtitle: 'Subtitle ' + shortIpsum
                }
            }, {
                text: {
                    content: ipsum
                }
            }, {
                actions: {
                    class: 'pe-card__actions--borders',
                    content: [(0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 1'
                    }), (0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 2'
                    }), (0, _mithril2.default)('.flex'), (0, _mithril2.default)(_polythene.IconButton, {
                        icon: {
                            type: 'medium',
                            msvg: _expandLess2.default
                        }
                    })]
                }
            }]
        }
    }), (0, _mithril2.default)(block, {
        label: 'Custom cards',
        cards: [{
            class: 'demo-card custom custom-travel',
            content: [{
                primary: {
                    content: [{
                        title: (0, _mithril2.default)('.pe-card__title', [(0, _mithril2.default)('.pe-card__subtitle', 'Travel'), (0, _mithril2.default)('span', 'Road Trip')])
                    }, {
                        media: {
                            ratio: 'square',
                            type: 'small',
                            content: (0, _mithril2.default)('img', {
                                src: IMG_URL + '1.jpg'
                            })
                        }
                    }]
                }
            }, {
                text: {
                    content: 'A road trip is a long distance journey on the road. Typically, road trips are long distances traveled by automobile.'
                }
            }, {
                actions: {
                    content: [(0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 1'
                    }), (0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 2'
                    })]
                }
            }]
        }, {
            class: 'demo-card custom custom-sand pe-dark-theme',
            content: [{
                primary: {
                    title: 'Get Ready',
                    subtitle: '2 Unlimited',
                    media: {
                        ratio: 'square',
                        type: 'medium',
                        content: (0, _mithril2.default)('img', {
                            src: 'https://lastfm-img2.akamaized.net/i/u/avatar170s/ca297951611442bda8ea55fba764c757'
                        })
                    }
                }
            }, {
                actions: {
                    content: [(0, _mithril2.default)(_polythene.Button, {
                        label: 'Listen now'
                    })]
                }
            }]
        }, {
            class: 'demo-card custom custom-sky pe-dark-theme',
            content: [{
                primary: {
                    title: 'Supermodel',
                    subtitle: 'Foster the People',
                    media: {
                        ratio: 'square',
                        type: 'medium',
                        content: (0, _mithril2.default)('img', {
                            src: 'http://upload.wikimedia.org/wikipedia/en/f/f9/Foster_the_People_-_Supermodel.jpg'
                        })
                    }
                }
            }, {
                actions: {
                    content: [(0, _mithril2.default)(_polythene.Button, {
                        label: 'Listen now'
                    })]
                }
            }]
        }, {
            class: 'demo-card custom custom-bucket pe-dark-theme',
            content: [{
                primary: {
                    title: 'Bucket List'
                }
            }, {
                text: {
                    content: _mithril2.default.trust('<ul><li>Skydiving</li><li>Alaska</li><li>Kite surfing</li></ul>')
                }
            }, {
                actions: {
                    content: [(0, _mithril2.default)(_polythene.Button, {
                        label: 'Edit'
                    })]
                }
            }]
        }]
    }), (0, _mithril2.default)(block, {
        label: 'Depth',
        cards: [{
            class: 'demo-card small',
            content: [{
                text: {
                    class: 'pe-card__text--tight',
                    content: 'Normal'
                }
            }]
        }, {
            class: 'demo-card small',
            content: [{
                text: {
                    class: 'pe-card__text--tight',
                    content: 'Flat'
                }
            }],
            z: 0
        }, {
            class: 'demo-card small',
            content: [{
                text: {
                    class: 'pe-card__text--tight',
                    content: 'Raised'
                }
            }],
            z: 2
        }]
    }), (0, _mithril2.default)(block, {
        label: 'Separate elements combined',
        cards: [{
            class: 'demo-card',
            content: [{
                media: {
                    content: (0, _mithril2.default)('img', {
                        src: IMG_URL + '3.jpg'
                    })
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                text: {
                    content: _mithril2.default.trust('<strong>Normal - 24px bottom padding</strong> ' + ipsum)
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                text: {
                    content: _mithril2.default.trust('<strong>Class: card__text--tight: 16px bottom padding</strong> ' + ipsum),
                    class: 'pe-card__text--tight'
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                header: {
                    title: titleLineText,
                    subtitle: infoLineText,
                    icon: {
                        type: 'large',
                        class: 'pe-icon--avatar',
                        src: avatarImageUrl('1.png')
                    }
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                primary: {
                    title: 'Primary title',
                    subtitle: 'Normal - 24px bottom padding'
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                primary: {
                    title: 'Primary title',
                    subtitle: 'Class: card__primary--tight: 16px bottom padding',
                    class: 'pe-card__primary--tight'
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                actions: {
                    content: [(0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 1'
                    }), (0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 2'
                    })]
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                actions: {
                    tag: '.layout.vertical.start',
                    content: [(0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 1'
                    }), (0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 2'
                    }), (0, _mithril2.default)(_polythene.Button, {
                        label: 'Action 3'
                    })]
                }
            }]
        }, {
            class: 'demo-card',
            content: [{
                actions: {
                    content: iconButtonRow
                }
            }]
        }]
    })]);
};

exports.default = _module;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customColor = '15, 157, 88';

var styles = [{
    '.module-checkbox': {
        ' .pe-dark-theme': {
            'background-color': _commonVars2.default.darkThemeBackgroundColor
        },
        ' .custom-color': {
            ' .pe-control--checkbox': {
                color: 'rgb(' + customColor + ')'
            },
            ' .pe-control--on .pe-button--focus .pe-button__focus': {
                'background-color': 'rgb(' + customColor + ')'
            }
        },
        ' .pe-control--checkbox': {
            'margin-right': '32px'
        },
        ' .row + .row': {
            'margin-top': '20px'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _checkboxStyle = __webpack_require__(50);

var _checkboxStyle2 = _interopRequireDefault(_checkboxStyle);

var _star = __webpack_require__(30);

var _star2 = _interopRequireDefault(_star);

var _starBorder = __webpack_require__(29);

var _starBorder2 = _interopRequireDefault(_starBorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-checkbox', _checkboxStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', { class: args.class || '' }, [(0, _mithril2.default)('.p-block-header', args.title), args.content]);
    }
};

var _module = {};
_module.controller = function () {
    _mithril2.default.redraw.strategy('all');
    return {
        checkboxState: _mithril2.default.prop(false),
        checkboxValue: _mithril2.default.prop(undefined),
        checkboxListenerState: _mithril2.default.prop(false)
    };
};
_module.view = function (ctrl) {
    return (0, _mithril2.default)('.module-checkbox', [(0, _mithril2.default)('.p-block.p-block-info', [(0, _mithril2.default)('p', [(0, _mithril2.default)('span', 'See also '), (0, _mithril2.default)('a', {
        href: '/switch',
        config: _mithril2.default.route
    }, 'Switch'), (0, _mithril2.default)('span', ' and '), (0, _mithril2.default)('a', {
        href: '/radio-button',
        config: _mithril2.default.route
    }, 'Radio button'), (0, _mithril2.default)('span', '.')]), (0, _mithril2.default)('p', ['On desktop, TAB can be used to give focus, ENTER to select.'])]), (0, _mithril2.default)(titleBlock, {
        title: 'Default checkbox',
        content: (0, _mithril2.default)('.row', [(0, _mithril2.default)(_polythene.Checkbox), (0, _mithril2.default)(_polythene.Checkbox, {
            checked: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom hover behavior',
        content: (0, _mithril2.default)('.row', [(0, _mithril2.default)(_polythene.Checkbox, {
            name: 'custom1',
            checked: false,
            iconButton: {
                wash: true,
                ink: false
            }
        }), (0, _mithril2.default)(_polythene.Checkbox, {
            checked: true,
            name: 'custom2',
            iconButton: {
                wash: true,
                ink: false
            }
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'With label',
        content: [(0, _mithril2.default)(_polythene.Checkbox, {
            label: 'Checkbox',
            checked: false
        }), (0, _mithril2.default)(_polythene.Checkbox, {
            label: 'Checkbox',
            checked: true
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom color',
        class: 'custom-color',
        content: [(0, _mithril2.default)(_polythene.Checkbox, {
            label: 'Checkbox',
            checked: false
        }), (0, _mithril2.default)(_polythene.Checkbox, {
            label: 'Checkbox',
            checked: true
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom size',
        content: ['large', 'medium', 'regular', 'small'].map(function (size) {
            var sizeStr = size.toString();
            return (0, _mithril2.default)('.row', [(0, _mithril2.default)(_polythene.Checkbox, {
                label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                checked: false,
                size: size
            })]);
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom icon',
        content: ['large', 'medium', 'regular', 'small'].map(function (size) {
            var sizeStr = size.toString();
            return (0, _mithril2.default)('.row', [(0, _mithril2.default)(_polythene.Checkbox, {
                label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                checked: false,
                iconOn: {
                    msvg: _star2.default
                },
                iconOff: {
                    msvg: _starBorder2.default
                },
                size: size
            })]);
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Checked state: ' + ctrl.checkboxState(),
        content: [(0, _mithril2.default)(_polythene.Checkbox, {
            label: 'Checkbox',
            checked: ctrl.checkboxState,
            getState: function getState(state) {
                return ctrl.checkboxState(state.checked);
            }
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Setting the value from outside',
        content: [(0, _mithril2.default)(_polythene.Checkbox, {
            label: 'Initiator',
            getState: function getState(state) {
                return ctrl.checkboxListenerState(state.checked);
            }
        }), (0, _mithril2.default)(_polythene.Checkbox, {
            label: 'Result',
            disabled: true,
            checked: ctrl.checkboxListenerState
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Disabled',
        content: [(0, _mithril2.default)(_polythene.Checkbox, {
            label: 'Checkbox',
            checked: false,
            disabled: true
        }), (0, _mithril2.default)(_polythene.Checkbox, {
            label: 'Checkbox',
            checked: true,
            disabled: true
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme',
        class: 'pe-dark-theme',
        content: [(0, _mithril2.default)(_polythene.Checkbox, {
            label: 'Checkbox',
            checked: false
        }), (0, _mithril2.default)(_polythene.Checkbox, {
            label: 'Checkbox',
            checked: true
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: disabled',
        class: 'pe-dark-theme',
        content: [(0, _mithril2.default)(_polythene.Checkbox, {
            label: 'Checkbox',
            checked: false,
            disabled: true
        }), (0, _mithril2.default)(_polythene.Checkbox, {
            label: 'Checkbox',
            checked: true,
            disabled: true
        })]
    })]);
};

exports.default = _module;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(7);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.demo-dialog': {
        '&.pe-dialog--fullscreen': {
            ' .pe-header-panel .pe-header-panel__main-container': {
                padding: '24px'
            }
        },
        '&.fullwidth-dialog': {
            ' .pe-dialog__content': {
                width: '280px'
            }
        },
        ' .pe-dialog__content': {
            'max-width': 56 * 8 + 'px',

            ' .demo-content': {
                height: 'auto'
            }
        },
        ' .pe-dialog__footer': {
            ' .pe-button:not(.pe-button--disabled)': {
                color: '#009688'
            },
            ' .pe-button--disabled': {
                color: '#ccc'
            }
        },
        ' .pe-toolbar': {
            'background-color': '#009688',
            color: '#fff'
        },
        '&.dialog-simple .pe-icon': {
            color: '#00bad2'
        },
        ' .item.demo-item': {
            height: '56px'
        },
        ' .demo-dialog-settingsmenu .pe-list-item': [_mixin2.default.vendorize({
            'user-select': 'none'
        }, _config2.default.prefixes_user_select)]
    }
}];

exports.default = styles;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _dialogShort = __webpack_require__(66);

var _dialogShort2 = _interopRequireDefault(_dialogShort);

var _dialogNotransition = __webpack_require__(63);

var _dialogNotransition2 = _interopRequireDefault(_dialogNotransition);

var _dialogLong = __webpack_require__(58);

var _dialogLong2 = _interopRequireDefault(_dialogLong);

var _dialogForm = __webpack_require__(55);

var _dialogForm2 = _interopRequireDefault(_dialogForm);

var _dialogModal = __webpack_require__(59);

var _dialogModal2 = _interopRequireDefault(_dialogModal);

var _dialogDark = __webpack_require__(54);

var _dialogDark2 = _interopRequireDefault(_dialogDark);

var _dialogSimpleFullscreen = __webpack_require__(67);

var _dialogSimpleFullscreen2 = _interopRequireDefault(_dialogSimpleFullscreen);

var _dialogFullscreen = __webpack_require__(56);

var _dialogFullscreen2 = _interopRequireDefault(_dialogFullscreen);

var _dialogSimple = __webpack_require__(68);

var _dialogSimple2 = _interopRequireDefault(_dialogSimple);

var _dialogSettingsmenu = __webpack_require__(65);

var _dialogSettingsmenu2 = _interopRequireDefault(_dialogSettingsmenu);

var _dialogFullwidth = __webpack_require__(57);

var _dialogFullwidth2 = _interopRequireDefault(_dialogFullwidth);

var _dialogMultiRoute = __webpack_require__(62);

var _dialogMultiRoute2 = _interopRequireDefault(_dialogMultiRoute);

var _dialogReplace = __webpack_require__(15);

var _dialogReplace2 = _interopRequireDefault(_dialogReplace);

var _dialogStyle = __webpack_require__(52);

var _dialogStyle2 = _interopRequireDefault(_dialogStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-dialog', _dialogStyle2.default);
// import routeDialog from './dialogs/dialog-route';
/*
In index.es6.js the dialog is rendered in the app.view function.
*/


var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', {
            class: args.class
        }, [(0, _mithril2.default)('.p-block-header', args.title), args.info ? args.info : null, (0, _mithril2.default)('div', args.content)]);
    }
};

var dialogsData = [{
    title: 'Short dialog',
    dialog: _dialogShort2.default,
    info: 'Dialog without title.',
    url: '/dialog/short'
}, {
    title: 'No transition',
    dialog: _dialogNotransition2.default,
    info: 'Dialog appears without fadein/out.',
    url: '/dialog/notransition'
}, {
    title: 'Form dialog',
    dialog: _dialogForm2.default,
    info: 'Shows conditional button states.',
    url: '/dialog/form'
}, {
    title: 'Long dialog',
    dialog: _dialogLong2.default,
    info: 'Shows content borders with scrolled content.',
    url: '/dialog/long'
}, {
    title: 'Modal dialog with backdrop',
    dialog: _dialogModal2.default,
    info: 'A modal dialog can only be closed by a confirming action.',
    url: '/dialog/modal'
}, {
    title: 'Modal dialog dark theme',
    dialog: _dialogDark2.default,
    url: '/dialog/dark'
}, {
    title: 'Fullscreen dialog (simple)',
    dialog: _dialogSimpleFullscreen2.default,
    info: 'Example of a simple fullscreen dialog.',
    url: '/dialog/simple-fullscreen'
}, {
    title: 'Fullscreen dialog (confirm)',
    dialog: _dialogFullscreen2.default,
    info: 'Example with secondary (stacked) dialog with a confirm action.',
    url: '/dialog/fullscreen'
}, {
    title: 'Simple dialog',
    dialog: _dialogSimple2.default,
    info: 'Simple dialogs can present additional details about a list item or provide actions related to the primary task.',
    url: '/dialog/simple'
}, {
    title: 'Simple dialog as settings menu',
    dialog: _dialogSettingsmenu2.default,
    info: 'Simple dialogs can be used as enhanced settings menu.',
    url: '/dialog/settingsmenu'
}, {
    title: 'Full width button',
    dialog: _dialogFullwidth2.default,
    info: 'Stacked buttons.',
    url: '/dialog/fullwidth'
},
// {
//     title: 'Persistent dialog',
//     dialog: routeDialog,
//     info: 'Persists across route change.',
//     url: '/dialog/route'
// },
{
    title: 'Replace dialog',
    dialog: _dialogReplace2.default,
    info: 'Change dialog contents/behavior by calling \'show\' with new options.',
    url: '/dialog/replace'
}, {
    title: 'Routes within a dialog',
    dialog: _dialogMultiRoute2.default,
    info: 'Keep dialog, change dialog contents.',
    url: '/dialog/multi-route'
}];

// for the 'multi' demo we need to keep the dialog
var additionalRoutes = [{
    url: '/dialog/multi-route/one',
    dialog: _dialogMultiRoute2.default
}, {
    url: '/dialog/multi-route/two',
    dialog: _dialogMultiRoute2.default
}];

var dataForPath = function dataForPath(path) {
    var allData = dialogsData.concat(additionalRoutes);
    return allData.reduce(function (found, data) {
        return data.url === path ? data : found;
    }, null);
};

var _module = {};
_module.subview = function (path) {
    // see if we need to show a dialog on load
    // only when we use routes (otherwise no route in url to use)
    var data = dataForPath(path);
    if (data) {
        _polythene.Dialog.show(data.dialog).then(function (dialogId) {
            return console.log('route dialog shown', dialogId);
        });;
    } else {
        _polythene.Dialog.hide().then(function (dialogId) {
            return console.log('route dialog hidden', dialogId);
        });
    }
    return _module;
};
_module.view = function (ctrl) {
    return (0, _mithril2.default)('.module-dialog', [(0, _mithril2.default)(titleBlock, {
        content: (0, _mithril2.default)(_polythene.Switch, {
            label: 'Use routing',
            getState: function getState(state) {
                return ctrl.checked = state.checked;
            }
        })
    }), dialogsData.map(function (data) {
        return (0, _mithril2.default)(titleBlock, {
            title: data.title,
            info: data.info ? (0, _mithril2.default)('p', data.info) : null,
            content: (0, _mithril2.default)(_polythene.Button, {
                label: 'Open',
                raised: true,
                events: {
                    onclick: function onclick(e) {
                        e.preventDefault();
                        if (ctrl.checked) {
                            _mithril2.default.route(data.url);
                        } else {
                            _polythene.Dialog.show(data.dialog).then(function (dialogId) {
                                return console.log('dialog shown', dialogId);
                            });
                        }
                    }
                }
            })
        });
    })]);
};

exports.default = _module;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(2);

var _common = __webpack_require__(5);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign({}, _common2.default.dialogProps, {
    class: 'demo-dialog pe-dark-theme',
    title: 'Modal dialog dark theme',
    body: _mithril2.default.trust(_common2.default.template),
    modal: true,
    backdrop: true
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(2);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(5);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isEmptyValue = true;

// use a function to have the state of isEmptyValue reflected in the dialog
var componentFn = function componentFn() {
    return Object.assign({}, _common2.default.dialogProps, {
        title: 'Select a file...',
        body: (0, _mithril2.default)('input', {
            type: 'file',
            id: 'file',
            name: 'file',
            onchange: function onchange(e) {
                var fileInput = e.target;
                isEmptyValue = fileInput.value === undefined;
            }
        }),
        formOptions: {
            name: 'demo',
            type: 'post',
            enctype: 'multipart/form-data',
            onsubmit: function onsubmit(e) {
                e.preventDefault();
                var form = e.target;
                alert('Posted: ' + form.file.value);
                _polythene.Dialog.hide();
                isEmptyValue = true;
            }
        },
        footer: [(0, _mithril2.default)(_polythene.Button, {
            label: 'Cancel',
            events: {
                onclick: function onclick() {
                    return _polythene.Dialog.hide();
                }
            }
        }), (0, _mithril2.default)(_polythene.Button, {
            disabled: isEmptyValue ? true : false,
            label: 'Post',
            tag: 'button',
            type: 'submit'
        })],
        didHide: function didHide() {
            isEmptyValue = true;
        }
    });
};

exports.default = componentFn;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(2);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(5);

var _common2 = _interopRequireDefault(_common);

var _close = __webpack_require__(27);

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DIALOG_CONFIRM = 'confirm-fullscreen';

var fullscreenToolbarRow = function fullscreenToolbarRow(title) {
    return [(0, _mithril2.default)(_polythene.IconButton, {
        icon: {
            msvg: _close2.default
        },
        events: {
            onclick: function onclick() {
                _polythene.Dialog.show(confirmDialogOptsFn, DIALOG_CONFIRM);
            }
        }
    }), (0, _mithril2.default)('span.flex', title), (0, _mithril2.default)(_polythene.Button, {
        label: 'Save',
        events: {
            onclick: function onclick() {
                _polythene.Dialog.hide();
            }
        }
    })];
};

var fullscreenPanelBlock = {
    view: function view(ctrl, opts) {
        return (0, _mithril2.default)(_polythene.HeaderPanel, {
            class: 'pe-dark-theme',
            fixed: true,
            header: {
                toolbar: {
                    content: fullscreenToolbarRow('New event', opts)
                }
            },
            content: _mithril2.default.trust(_common2.default.template)
        });
    }
};

var confirmDialogOptsFn = function confirmDialogOptsFn() {
    return Object.assign({}, _common2.default.dialogProps, {
        class: 'demo-dialog',
        footer: [(0, _mithril2.default)(_polythene.Button, {
            label: 'Cancel',
            events: {
                onclick: function onclick() {
                    _polythene.Dialog.hide(DIALOG_CONFIRM);
                }
            }
        }), (0, _mithril2.default)(_polythene.Button, {
            label: 'Discard',
            events: {
                onclick: function onclick() {
                    _polythene.Dialog.hide(DIALOG_CONFIRM);
                    _polythene.Dialog.hide();
                }
            }
        })],
        body: _common2.default.shortBodyText,
        modal: true,
        backdrop: true
    });
};

var confirmDialogShown = _mithril2.default.prop(false);

exports.default = Object.assign({}, _common2.default.dialogProps, {
    class: 'demo-dialog',
    body: [(0, _mithril2.default)(fullscreenPanelBlock, {
        confirmDialogShown: confirmDialogShown
    })],
    fullscreen: true
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(2);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(5);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buttonEvents = {
    onclick: function onclick() {
        _polythene.Dialog.hide();
    }
};

var buttons = [(0, _mithril2.default)(_polythene.Button, {
    label: 'Turn on location services',
    events: buttonEvents
}), (0, _mithril2.default)(_polythene.Button, {
    label: 'No thanks',
    events: buttonEvents
})];

exports.default = Object.assign({}, _common2.default.dialogProps, {
    class: 'demo-dialog fullwidth-dialog',
    body: [(0, _mithril2.default)('.pe-dialog__title', 'Let your apps know your location'), (0, _mithril2.default)('div', 'This means that your location data will be sent to our servers, anonymously of course.')],
    footer: buttons
});

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(2);

var _common = __webpack_require__(5);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign({}, _common2.default.dialogProps, {
    title: 'Long dialog with a very long title that surely won\'t fit here',
    body: _mithril2.default.trust(_common2.default.template)
});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(2);

var _common = __webpack_require__(5);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign({}, _common2.default.dialogProps, {
    title: 'Modal',
    body: _mithril2.default.trust(_common2.default.template),
    modal: true,
    backdrop: true
});

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    view: function view() {
        return (0, _mithril2.default)('.layout.vertical', (0, _mithril2.default)('p', 'This is page one'), (0, _mithril2.default)(_polythene.Button, {
            raised: true,
            label: 'Go to page two',
            events: {
                onclick: function onclick() {
                    _mithril2.default.route('/dialog/multi-route/two');
                }
            }
        }));
    }
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    view: function view() {
        return (0, _mithril2.default)('.layout.vertical', (0, _mithril2.default)('p', 'This is page two'), (0, _mithril2.default)(_polythene.Button, {
            raised: true,
            label: 'Go to page one',
            events: {
                onclick: function onclick() {
                    _mithril2.default.route('/dialog/multi-route/one');
                }
            }
        }));
    }
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _dialogMultiRoutePage = __webpack_require__(60);

var _dialogMultiRoutePage2 = _interopRequireDefault(_dialogMultiRoutePage);

var _dialogMultiRoutePage3 = __webpack_require__(61);

var _dialogMultiRoutePage4 = _interopRequireDefault(_dialogMultiRoutePage3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return {
        body: (0, _mithril2.default)('div', _mithril2.default.route() === '/dialog/multi-route/two' ? _dialogMultiRoutePage4.default : _dialogMultiRoutePage2.default),
        footer: (0, _mithril2.default)(_polythene.Button, {
            label: 'Close',
            events: {
                onclick: function onclick() {
                    return _polythene.Dialog.hide();
                }
            }
        }),
        didHide: function didHide() {
            _mithril2.default.route('/dialog');
        }
    };
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _common = __webpack_require__(5);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign({}, _common2.default.dialogProps, {
    body: _common2.default.shortBodyText,
    transition: 'none'
});

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(5);

var _common2 = _interopRequireDefault(_common);

var _dialogReplace = __webpack_require__(15);

var _dialogReplace2 = _interopRequireDefault(_dialogReplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign({}, _common2.default.dialogProps, {
    body: 'Dialog Two',
    footer: (0, _mithril2.default)(_polythene.Button, {
        label: 'Show One',
        events: {
            onclick: function onclick() {
                return _polythene.Dialog.show(_dialogReplace2.default);
            }
        }
    })
});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(2);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(5);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createListTile = function createListTile(title) {
    return (0, _mithril2.default)(_polythene.ListTile, {
        title: title,
        events: {
            onclick: function onclick() {
                return _polythene.Dialog.hide();
            }
        },
        ink: true
    });
};

exports.default = Object.assign({}, _common2.default.dialogProps, {
    class: 'demo-dialog',
    menu: (0, _mithril2.default)(_polythene.List, {
        hoverable: true,
        tiles: [createListTile('Show all notification content including sensitive notification content'), createListTile('Hide sensitive notification content'), createListTile('Hide all notification content')]
    }),
    hideDelay: .15,
    header: null,
    footer: null
});

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _common = __webpack_require__(5);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign({}, _common2.default.dialogProps, {
    body: _common2.default.shortBodyText
});

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(2);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(5);

var _common2 = _interopRequireDefault(_common);

var _close = __webpack_require__(27);

var _close2 = _interopRequireDefault(_close);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fullscreenToolbarRow = function fullscreenToolbarRow(title) {
    return [(0, _mithril2.default)(_polythene.IconButton, {
        icon: {
            msvg: _close2.default
        },
        events: {
            onclick: function onclick() {
                _polythene.Dialog.hide();
            }
        }
    }), (0, _mithril2.default)('span.flex', title), (0, _mithril2.default)(_polythene.Button, {
        label: 'Save',
        events: {
            onclick: function onclick() {
                _polythene.Dialog.hide();
            }
        }
    })];
};

exports.default = Object.assign({}, _common2.default.dialogProps, {
    class: 'demo-dialog',
    body: (0, _mithril2.default)(_polythene.HeaderPanel, {
        class: 'pe-dark-theme',
        fixed: true,
        header: {
            toolbar: {
                content: fullscreenToolbarRow('New event')
            }
        },
        content: _mithril2.default.trust(_common2.default.template)
    }),
    fullscreen: true
});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

__webpack_require__(2);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(5);

var _common2 = _interopRequireDefault(_common);

var _accountCircle = __webpack_require__(174);

var _accountCircle2 = _interopRequireDefault(_accountCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = Object.assign({}, _common2.default.dialogProps, {
    class: 'demo-dialog dialog-simple',
    title: 'Set backup account',
    menu: (0, _mithril2.default)(_polythene.List, {
        hoverable: true,
        tiles: [1, 2, 3].map(function () {
            return (0, _mithril2.default)(_polythene.ListTile, {
                class: 'demo-item',
                front: (0, _mithril2.default)(_polythene.Icon, {
                    type: 'large',
                    msvg: _accountCircle2.default
                }),
                title: 'Account',
                events: {
                    onclick: function onclick() {
                        _polythene.Dialog.hide();
                    }
                }
            });
        })
    }),
    footer: null
});

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var styles = [{
    '.module-fab': {
        ' .pe-button--fab.demo-fab': {
            background: '#2196F3',
            color: '#fff',
            'svg path': {
                fill: '#fff'
            },
            '&.green': {
                background: '#00C853',
                color: '#fff'
            },
            '&.red': {
                background: '#F44336',
                color: '#fff'
            },
            '&.pe-button--fab-mini': {
                display: 'inline-block',
                margin: '0 20px 0 0'
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _fabStyle = __webpack_require__(69);

var _fabStyle2 = _interopRequireDefault(_fabStyle);

var _plus = __webpack_require__(33);

var _plus2 = _interopRequireDefault(_plus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-fab', _fabStyle2.default);

var fabIcon = {
    msvg: _plus2.default
};

var block = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)(_polythene.FAB, args.fab);
    }
};

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', { class: args.class || '' }, [(0, _mithril2.default)('.p-block-header', args.title), args.content]);
    }
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-fab', [(0, _mithril2.default)(titleBlock, {
        title: 'Default FAB',
        content: [(0, _mithril2.default)(block, {
            fab: {
                icon: fabIcon
            }
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Small size',
        content: [(0, _mithril2.default)(block, {
            fab: {
                mini: true,
                icon: fabIcon,
                class: 'demo-fab',
                z: 1
            }
        }), (0, _mithril2.default)(block, {
            fab: {
                mini: true,
                icon: fabIcon,
                class: 'demo-fab green',
                z: 1
            }
        }), (0, _mithril2.default)(block, {
            fab: {
                icon: fabIcon,
                class: 'demo-fab pe-button--fab-mini red',
                z: 1
            }
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme, raised more',
        class: 'pe-dark-theme',
        content: [(0, _mithril2.default)(block, {
            fab: {
                icon: fabIcon,
                class: 'demo-fab',
                z: 2
            }
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Fully raised',
        content: [(0, _mithril2.default)(block, {
            fab: {
                icon: fabIcon,
                class: 'demo-fab',
                z: 5
            }
        })]
    })]);
};

exports.default = _module;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(6);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TITLE = 'Animated';
var SUBTITLE = '';
var PANEL_PROPS = {
    class: 'pe-header-panel--fit',
    mode: 'waterfall-tall',
    animated: true,
    fixed: true
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.demo-header-panel', (0, _mithril2.default)(_polythene.HeaderPanel, Object.assign({}, {
        header: {
            toolbar: {
                topBar: _common2.default.toolbarRow(''),
                bottomBar: _common2.default.createBottomBar(TITLE, SUBTITLE)
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent())
    }, PANEL_PROPS)));
};

_module.hideNav = true;
_module.updateContentOnScroll = true;
exports.default = _module;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var styles = [{
    '.demo-header-panel .pe-header-panel.background1': {
        ' .pe-toolbar': {
            'background-color': 'transparent'
        },
        ' .pe-header-panel__header-background': {
            'background-image': 'url(http://arthurclemens.github.io/assets/polythene/examples/bg2.jpg)',
            'background-color': '#222'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(6);

var _common2 = _interopRequireDefault(_common);

var _background1Style = __webpack_require__(72);

var _background1Style2 = _interopRequireDefault(_background1Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-header-panel-background-1', _background1Style2.default);

var TITLE = 'Image background variant 1';
var SUBTITLE = 'No dissolve, still image';
var PANEL_PROPS = {
    class: 'pe-header-panel--fit background1',
    mode: 'waterfall-tall',
    condenses: true,
    noDissolve: true,
    noReveal: true,
    backgroundScrollSpeed: 0
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.demo-header-panel.background-1', (0, _mithril2.default)(_polythene.HeaderPanel, Object.assign({}, {
        header: {
            toolbar: {
                topBar: _common2.default.toolbarRow(''),
                bottomBar: _common2.default.createBottomBar(TITLE, SUBTITLE)
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent())
    }, PANEL_PROPS)));
};

_module.hideNav = true;

exports.default = _module;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var styles = [{
    '.demo-header-panel .pe-header-panel.background2': {
        ' .pe-header-panel__header-container': {
            'background-color': '#B71C1C' // deep red
        },
        ' .pe-toolbar': {
            'background-color': 'transparent',
            ' .pe-title': {
                color: '#fff'
            }
        },
        ' .pe-header-panel__header-background': {
            'background-image': 'url(http://arthurclemens.github.io/assets/polythene/examples/bg2.jpg)'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(6);

var _common2 = _interopRequireDefault(_common);

var _background2Style = __webpack_require__(74);

var _background2Style2 = _interopRequireDefault(_background2Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-header-panel-background-2', _background2Style2.default);

var TITLE = 'Image background variant 2';
var SUBTITLE = 'Dissolve';
var PANEL_PROPS = {
    class: 'pe-header-panel--fit background2',
    mode: 'waterfall-tall',
    condenses: true,
    noReveal: true
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.demo-header-panel.background-2', (0, _mithril2.default)(_polythene.HeaderPanel, Object.assign({}, {
        header: {
            toolbar: {
                topBar: _common2.default.toolbarRow(''),
                bottomBar: _common2.default.createBottomBar(TITLE, SUBTITLE)
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent())
    }, PANEL_PROPS)));
};

_module.hideNav = true;

exports.default = _module;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var styles = [{
    '.demo-header-panel .pe-header-panel.background3': {
        ' .pe-header--tall': {
            height: '256px'
        },
        ' .pe-header-panel__header-container': {
            'background-color': '#673ab7' // purple
        },
        ' .pe-toolbar': {
            'background-color': 'transparent',
            ' .pe-title': {
                color: '#fff'
            }
        },
        ' .pe-header-panel__header-background': {
            'background-image': 'url(http://arthurclemens.github.io/assets/polythene/examples/bg1.jpg)'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(6);

var _common2 = _interopRequireDefault(_common);

var _background3Style = __webpack_require__(76);

var _background3Style2 = _interopRequireDefault(_background3Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-header-panel-background-3', _background3Style2.default);

var TITLE = 'Image background variant 3';
var SUBTITLE = 'Keep condensed header';
var PANEL_PROPS = {
    class: 'pe-header-panel--fit background3',
    mode: 'waterfall-tall',
    condenses: true,
    keepCondensedHeader: true,
    headerHeight: 256,
    condensedHeaderHeight: 140
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.demo-header-panel.background-3', (0, _mithril2.default)(_polythene.HeaderPanel, Object.assign({}, {
        header: {
            toolbar: {
                topBar: _common2.default.toolbarRow(''),
                bottomBar: _common2.default.createBottomBar(TITLE, SUBTITLE)
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent())
    }, PANEL_PROPS)));
};

_module.hideNav = true;

exports.default = _module;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(7);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.demo-header-panel .pe-header-panel.background4': {
        ' .pe-header--tall': {
            height: '256px'
        },
        ' .pe-header-panel__header-container': {
            'background-color': '#673ab7' // purple
        },
        ' .pe-header-panel__condensed-background': {
            'background-color': '#f4b400',
            'background-image': 'url(http://arthurclemens.github.io/assets/polythene/examples/bg2.jpg)'
        },
        ' .pe-toolbar': {
            'background-color': 'transparent',
            ' .pe-title': {
                color: '#fff'
            }
        },
        ' .pe-header-panel__header-background': {
            'background-image': 'url(http://arthurclemens.github.io/assets/polythene/examples/bg1.jpg)'
        },
        ' .pe-header-panel__media-dimmer': _mixin2.default.vendorize({
            'box-shadow': 'inset 0px 0px 200px rgba(0, 0, 0, 1)'
        }, _config2.default.prefixes_box_shadow)
    }
}];

exports.default = styles;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(6);

var _common2 = _interopRequireDefault(_common);

var _background4Style = __webpack_require__(78);

var _background4Style2 = _interopRequireDefault(_background4Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-header-panel-background-4', _background4Style2.default);

var TITLE = 'Image background variant 4';
var SUBTITLE = 'Blending images';
var PANEL_PROPS = {
    class: 'pe-header-panel--fit background4',
    mode: 'waterfall-tall',
    condenses: true,
    shadow: false,
    keepCondensedHeader: true,
    headerHeight: 256,
    condensedHeaderHeight: 140
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.demo-header-panel.background-4', (0, _mithril2.default)(_polythene.HeaderPanel, Object.assign({}, {
        header: {
            toolbar: {
                topBar: _common2.default.toolbarRow(''),
                bottomBar: _common2.default.createBottomBar(TITLE, SUBTITLE)
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent())
    }, PANEL_PROPS)));
};

_module.hideNav = true;

exports.default = _module;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var styles = [{
    '.condenses-1 .pe-header-panel .pe-title': {
        'font-size': 18 / 0.65 + 'px'
    }
}];

exports.default = styles;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(6);

var _common2 = _interopRequireDefault(_common);

var _condenses1Style = __webpack_require__(80);

var _condenses1Style2 = _interopRequireDefault(_condenses1Style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-header-panel-condenses-1', _condenses1Style2.default);

var MIN_SCALE = 0.65;
var titleStyle = void 0;

var onHeaderTransform = function onHeaderTransform(e) {
    titleStyle = titleStyle || document.querySelector('.pe-header-panel .pe-title').style;
    var h = e.height - e.condensedHeight;
    var scale = Math.max(MIN_SCALE, (h - e.y) / (h / (1 - MIN_SCALE)) + MIN_SCALE);
    titleStyle.transform = titleStyle.webkitTransform = 'scale(' + scale + ') translateZ(0)';
};

var TITLE = 'Condenses variant 1';
var SUBTITLE = 'mode "waterfall-tall"';
var PANEL_PROPS = {
    class: 'pe-header-panel--fit',
    mode: 'waterfall-tall',
    condenses: true,
    transform: onHeaderTransform
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.demo-header-panel.condenses-1', (0, _mithril2.default)(_polythene.HeaderPanel, Object.assign({}, {
        header: {
            toolbar: {
                topBar: _common2.default.toolbarRow(''),
                bottomBar: _common2.default.createBottomBar(TITLE, SUBTITLE)
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent())
    }, PANEL_PROPS)));
};

_module.hideNav = true;

exports.default = _module;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(6);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TITLE = 'Condenses variant 2';
var SUBTITLE = 'mode "waterfall-tall", tallClass "medium-tall"';
var PANEL_PROPS = {
    class: 'pe-header-panel--fit',
    mode: 'waterfall-tall',
    tallClass: 'medium-tall',
    condenses: true
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.demo-header-panel', (0, _mithril2.default)(_polythene.HeaderPanel, Object.assign({}, {
        header: {
            toolbar: {
                topBar: _common2.default.toolbarRow(''),
                bottomBar: _common2.default.createBottomBar(TITLE, SUBTITLE)
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent())
    }, PANEL_PROPS)));
};

_module.hideNav = true;

exports.default = _module;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(6);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TITLE = 'Fixed header';
var SUBTITLE = '';
var PANEL_PROPS = {
    class: 'pe-header-panel--fit',
    fixed: true
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.demo-header-panel', (0, _mithril2.default)(_polythene.HeaderPanel, Object.assign({}, {
        header: {
            toolbar: {
                topBar: _common2.default.toolbarRow(''),
                bottomBar: _common2.default.createBottomBar(TITLE, SUBTITLE)
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent())
    }, PANEL_PROPS)));
};

_module.hideNav = true;

exports.default = _module;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var styles = [{
    '.keep-condensed .pe-toolbar.pe-header--tall': {
        height: '256px'
    }
}];

exports.default = styles;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(6);

var _common2 = _interopRequireDefault(_common);

var _keepCondensedStyle = __webpack_require__(84);

var _keepCondensedStyle2 = _interopRequireDefault(_keepCondensedStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-header-panel-keep-condensed', _keepCondensedStyle2.default);

var TITLE = 'Keep condensed header';
var SUBTITLE = '';
var PANEL_PROPS = {
    class: 'pe-header-panel--fit',
    mode: 'waterfall-tall',
    condenses: true,
    keepCondensedHeader: true,
    headerHeight: 256,
    condensedHeaderHeight: 140
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.demo-header-panel.keep-condensed', (0, _mithril2.default)(_polythene.HeaderPanel, Object.assign({}, {
        header: {
            toolbar: {
                topBar: _common2.default.toolbarRow(''),
                bottomBar: _common2.default.createBottomBar(TITLE, SUBTITLE)
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent())
    }, PANEL_PROPS)));
};

_module.hideNav = true;

exports.default = _module;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(7);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.kitchensink': {
        ' .panel-row': {
            'margin-left': '-20px'
        },
        ' .container': {
            width: '300px',
            height: '400px',
            margin: '0 0 20px 20px'
        },
        ' .pe-header-panel': {
            height: '100%',
            '&.pe-header-panel--cover .pe-header-panel__main-container': {
                left: '70px'
            },
            ' .demo-panel-content': {
                padding: '16px',
                height: 'auto',
                'max-width': '700px',
                'background-color': '#fff',
                ' p': {
                    margin: '0 0 1em 0'
                }
            },
            ' .pe-header': [_mixin2.default.vendorize({
                'transition': 'height 0.25s'
            }, _config2.default.prefixes_transition), {
                height: '48px',
                'line-height': '48px',
                'font-size': '18px',
                padding: '0 16px',
                'background-color': '#2196f3',
                color: '#fff'
            }],
            ' .pe-header.pe-header--tall': {
                height: '180px'
            },
            ' .pe-header.medium-tall': {
                height: '120px'
            },
            ' .pe-toolbar': _mixin2.default.vendorize({
                'transition': 'height 0.25s'
            }, _config2.default.prefixes_transition)
        },
        ' .pe-header-panel__main-container .pe-header-panel .toolbar': {
            'font-size': '18px',
            'background-color': '#2196F3',
            color: '#fff'
        },
        ' .pe-header-panel .pe-header.custom-header': {
            height: '72px',
            'line-height': '72px',
            'font-size': '18px',
            padding: '0 24px',
            'background-color': '#e91e63',
            color: '#fff',
            'text-align': 'center',
            'text-transform': 'uppercase'
        },
        ' .pe-header-panel .pe-header.pe-header--animated': {
            'background-color': '#9C27B0'
        },
        ' .p-block .pe-toolbar': {
            margin: 0
        }
    }
}];

exports.default = styles;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(6);

var _common2 = _interopRequireDefault(_common);

var _kitchensinkStyle = __webpack_require__(86);

var _kitchensinkStyle2 = _interopRequireDefault(_kitchensinkStyle);

var _menu = __webpack_require__(11);

var _menu2 = _interopRequireDefault(_menu);

var _refresh = __webpack_require__(182);

var _refresh2 = _interopRequireDefault(_refresh);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-header-panel-kitchensink', _kitchensinkStyle2.default);

var TITLE = 'Kitchen sink of small panels';
var SUBTITLE = 'waterfall transitions and toolbar components';

var btn = function btn(msvg) {
    return (0, _mithril2.default)(_polythene.IconButton, {
        icon: {
            msvg: msvg
        }
    });
};

var toolbarRow = function toolbarRow(title) {
    return [btn(_menu2.default), (0, _mithril2.default)('span.flex', title), btn(_refresh2.default)];
};

var panelBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', [(0, _mithril2.default)('.p-block-header', args.title), (0, _mithril2.default)('.horizontal.layout.wrap', {
            class: 'panel-row'
        }, [args.content.map(function (panel1) {
            return (0, _mithril2.default)('.container', [(0, _mithril2.default)(_polythene.HeaderPanel, panel1)]);
        })])]);
    }
};

var content = (0, _mithril2.default)('.demo-content', [(0, _mithril2.default)(panelBlock, {
    title: 'Scroll modes',
    content: [{
        fixed: true,
        header: {
            content: 'Standard'
        },
        content: _mithril2.default.trust(_common2.default.textContent('demo-panel-content'))
    }, {
        mode: 'seamed',
        fixed: true,
        header: {
            content: 'Seamed'
        },
        content: _mithril2.default.trust(_common2.default.textContent('demo-panel-content'))
    }, {
        mode: 'waterfall',
        fixed: true,
        header: {
            content: 'Waterfall'
        },
        content: _mithril2.default.trust(_common2.default.textContent('demo-panel-content'))
    }, {
        mode: 'waterfall-tall',
        fixed: true,
        header: {
            content: 'Waterfall tall'
        },
        content: _mithril2.default.trust(_common2.default.textContent('demo-panel-content'))
    }, {
        mode: 'waterfall-tall',
        tallClass: 'medium-tall',
        fixed: true,
        header: {
            content: 'Waterfall medium-tall'
        },
        content: _mithril2.default.trust(_common2.default.textContent('demo-panel-content'))
    }, {
        mode: 'scroll',
        header: {
            content: 'Scroll'
        },
        content: _mithril2.default.trust(_common2.default.textContent('demo-panel-content'))
    }, {
        mode: 'waterfall-tall',
        fixed: true,
        animated: true,
        header: {
            content: 'Waterfall tall animated'
        },
        content: _mithril2.default.trust(_common2.default.textContent('demo-panel-content'))
        // TODO: Cover
    }]
}), (0, _mithril2.default)(panelBlock, {
    title: 'Toolbar as header',
    content: [{
        fixed: true,
        header: {
            toolbar: {
                class: 'pe-dark-theme',
                content: toolbarRow('Toolbar component')
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent('demo-panel-content'))
    }, {
        mode: 'waterfall',
        fixed: true,
        header: {
            toolbar: {
                class: 'pe-dark-theme',
                content: toolbarRow('Toolbar waterfall')
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent('demo-panel-content'))
    }, {
        mode: 'tall',
        fixed: true,
        animated: true,
        header: {
            toolbar: {
                mode: 'tall',
                class: 'pe-dark-theme',
                content: toolbarRow('Tall animated')
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent('demo-panel-content'))
    }, {
        mode: 'waterfall-tall',
        fixed: true,
        shadow: false,
        animated: true,
        header: {
            toolbar: {
                mode: 'tall',
                class: 'pe-dark-theme',
                content: toolbarRow('Animated no shadow')
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent('demo-panel-content'))
    }]
}), (0, _mithril2.default)(panelBlock, {
    title: 'Condensing',
    content: [{
        mode: 'waterfall-tall',
        condenses: true,
        header: {
            toolbar: {
                mode: 'tall',
                class: 'pe-dark-theme',
                topBar: toolbarRow(),
                bottomBar: _mithril2.default.trust('<div class="flex bottom pe-toolbar__title--indent">Not fixed condenses</div><div class="spacer-right"></div>')
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent('demo-panel-content'))
    }, {
        mode: 'waterfall-tall',
        condenses: true,
        tallClass: 'medium-tall',
        header: {
            toolbar: {
                mode: 'tall',
                class: 'pe-dark-theme',
                topBar: toolbarRow(),
                bottomBar: _mithril2.default.trust('<div class="flex bottom pe-toolbar__title--indent">tallClass "medium-tall"</div><div class="spacer-right"></div>')
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent('demo-panel-content'))
    }, {
        mode: 'waterfall-tall',
        condenses: true,
        keepCondensedHeader: true,
        header: {
            toolbar: {
                mode: 'tall',
                class: 'pe-dark-theme',
                topBar: toolbarRow(),
                bottomBar: _mithril2.default.trust('<div class="flex bottom pe-toolbar__title--indent">Keep condensed header</div><div class="spacer-right"></div>')
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent('demo-panel-content'))
    }]
}), (0, _mithril2.default)(panelBlock, {
    title: 'Custom style',
    content: [{
        fixed: true,
        header: (0, _mithril2.default)('.pe-header.custom-header', 'Custom styled header'),
        content: _mithril2.default.trust(_common2.default.textContent('demo-panel-content'))
    }]
})]);

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.demo-header-panel.kitchensink', (0, _mithril2.default)(_polythene.HeaderPanel, {
        class: 'pe-header-panel--fit',
        mode: 'waterfall-tall',
        tallClass: 'medium-tall',
        condenses: true,
        keepCondensedHeader: true,
        header: {
            toolbar: {
                topBar: _common2.default.toolbarRow(''),
                bottomBar: _common2.default.createBottomBar(TITLE, SUBTITLE)
            }
        },
        content: content
    }));
};

_module.hideNav = true;

exports.default = _module;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(6);

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TITLE = 'No Reveal';
var SUBTITLE = '';
var PANEL_PROPS = {
    class: 'pe-header-panel--fit',
    mode: 'tall',
    condenses: true,
    noReveal: true
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.demo-header-panel', (0, _mithril2.default)(_polythene.HeaderPanel, Object.assign({}, {
        header: {
            toolbar: {
                topBar: _common2.default.toolbarRow(''),
                bottomBar: _common2.default.createBottomBar(TITLE, SUBTITLE)
            }
        },
        content: _mithril2.default.trust(_common2.default.textContent())
    }, PANEL_PROPS)));
};

_module.hideNav = true;

exports.default = _module;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var styles = [{
    ' .flex-container': {
        height: '100%'
    },
    ' .demo-header-panel .pe-header-panel': {
        ' .pe-toolbar': {
            'background-color': '#3f51b5',
            color: '#fff',

            '&.medium-tall': {
                height: '120px'
            },

            ' .common-toolbar': {
                width: '100%',
                position: 'relative'
            }
        }
    },
    ' .pe-header-panel .pe-header-panel-content': {
        padding: '16px 16px 36px 16px',
        'max-width': '700px',
        margin: '0 auto',
        color: '#444',

        ' + .pe-header-panel-content': {
            'margin-top': '-36px'
        }
    },
    ' .pe-toolbar__title--indent': {
        'word-break': 'break-all'
    },
    ' .spacer-right': {
        width: '48px'
    }
}];

exports.default = styles;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _headerPanelStyle = __webpack_require__(89);

var _headerPanelStyle2 = _interopRequireDefault(_headerPanelStyle);

var _kitchensink = __webpack_require__(87);

var _kitchensink2 = _interopRequireDefault(_kitchensink);

var _infinite = __webpack_require__(93);

var _infinite2 = _interopRequireDefault(_infinite);

var _condenses = __webpack_require__(81);

var _condenses2 = _interopRequireDefault(_condenses);

var _condenses3 = __webpack_require__(82);

var _condenses4 = _interopRequireDefault(_condenses3);

var _animated = __webpack_require__(71);

var _animated2 = _interopRequireDefault(_animated);

var _noReveal = __webpack_require__(88);

var _noReveal2 = _interopRequireDefault(_noReveal);

var _fixed = __webpack_require__(83);

var _fixed2 = _interopRequireDefault(_fixed);

var _keepCondensed = __webpack_require__(85);

var _keepCondensed2 = _interopRequireDefault(_keepCondensed);

var _background = __webpack_require__(73);

var _background2 = _interopRequireDefault(_background);

var _background3 = __webpack_require__(75);

var _background4 = _interopRequireDefault(_background3);

var _background5 = __webpack_require__(77);

var _background6 = _interopRequireDefault(_background5);

var _background7 = __webpack_require__(79);

var _background8 = _interopRequireDefault(_background7);

var _arrowRight = __webpack_require__(13);

var _arrowRight2 = _interopRequireDefault(_arrowRight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-header-panel', _headerPanelStyle2.default);

var links = [{
    label: 'Small header panels',
    links: [{
        url: '/header-panel/kitchensink',
        name: 'Kitchen sink of small panels',
        module: _kitchensink2.default
    }]
}, {
    label: 'Infinite',
    links: [{
        url: '/header-panel/infinite',
        name: 'Header panel with infinite scroll',
        module: _infinite2.default
    }]
}, {
    label: 'Page wide header panels',
    links: [{
        url: '/header-panel/condenses-1',
        name: 'Condenses variant 1',
        module: _condenses2.default
    }, {
        url: '/header-panel/condenses-2',
        name: 'Condenses variant 2',
        module: _condenses4.default
    }, {
        url: '/header-panel/animated',
        name: 'Animated',
        module: _animated2.default
    }, {
        url: '/header-panel/no-reveal',
        name: 'No reveal',
        module: _noReveal2.default
    }, {
        url: '/header-panel/fixed',
        name: 'Fixed header',
        module: _fixed2.default
    }, {
        url: '/header-panel/keep-condensed',
        name: 'Keep condensed header',
        module: _keepCondensed2.default
    }]
}, {
    label: 'Header background images',
    links: [{
        url: '/header-panel/background-1',
        name: 'Image in header',
        module: _background2.default
    }, {
        url: '/header-panel/background-2',
        name: 'Image fading out 1',
        module: _background4.default
    }, {
        url: '/header-panel/background-3',
        name: 'Image fading out 2',
        module: _background6.default
    }, {
        url: '/header-panel/background-4',
        name: 'Blending images',
        module: _background8.default
    }]
}];

var linkMap = {};
links.forEach(function (group) {
    group.links.forEach(function (linkData) {
        linkMap[linkData.url] = linkData;
    });
});

var item = function item(link) {
    return (0, _mithril2.default)(_polythene.ListTile, {
        title: link.name,
        front: (0, _mithril2.default)(_polythene.Icon, {
            type: 'medium',
            class: 'index-cirle-icon',
            msvg: _arrowRight2.default
        }),
        url: {
            href: link.url,
            config: _mithril2.default.route
        }
    });
};

var _module = {};
_module.controller = function () {
    _mithril2.default.redraw.strategy('diff');
};
_module.subview = function (path) {
    var linkData = linkMap[path];
    if (linkData) {
        var subModule = linkData.module;
        return subModule;
    }
    return _module;
};
_module.view = function () {
    return (0, _mithril2.default)('.index-list', links.map(function (linkGroup) {
        return (0, _mithril2.default)(_polythene.List, {
            header: {
                title: linkGroup.label,
                indent: true
            },
            tiles: linkGroup.links.map(function (link) {
                return item(link);
            }),
            hoverable: true
        });
    }));
};

_module.updateContentOnScroll = true;
exports.default = _module;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var gridSpacing = 8;
var itemWidth = 210;
var itemWidthPx = itemWidth + 'px';
var imageHolderPadding = 10;
var imageHolderPaddingPx = imageHolderPadding + 'px';

var makeMediaStyle = function makeMediaStyle(which, cols) {
    return _defineProperty({}, '@media (' + which + '-width: ' + ((cols + 1) * itemWidth + cols * gridSpacing) + 'px)', {
        '.mithril-infinite__scroll-view.grid': {
            ' .mithril-infinite__scroll-content': {
                ' .mithril-infinite__content': {
                    'width': cols * itemWidth + (cols - 1) * gridSpacing + 'px'
                }
            }
        }
    });
};

var styles = [makeMediaStyle('min', 4), makeMediaStyle('max', 4), makeMediaStyle('max', 3), makeMediaStyle('max', 2), makeMediaStyle('max', 1), {
    '.mithril-infinite__scroll-view.grid': {
        margin: '0 auto',

        ' .mithril-infinite__scroll-content': {
            padding: 2 * gridSpacing + 'px 0',

            ' .mithril-infinite__content': {
                margin: '0 auto',
                'font-size': 0,
                'line-height': 0,

                ' .mithril-infinite__page': {
                    margin: '0 ' + -gridSpacing / 2 + 'px'
                },
                ' .grid-item': {
                    display: 'inline-block',
                    height: itemWidthPx,
                    width: itemWidthPx,
                    'background-color': '#fff',
                    margin: [0, gridSpacing / 2, gridSpacing, gridSpacing / 2].map(function (v) {
                        return v + 'px';
                    }).join(' '),

                    ' .image-holder': {
                        height: itemWidth - 2 * imageHolderPadding + 'px',
                        width: itemWidth - 2 * imageHolderPadding + 'px',
                        overflow: 'hidden',
                        position: 'relative',
                        margin: imageHolderPaddingPx,

                        ' .image': {
                            position: 'absolute',
                            left: 'auto',
                            top: 0,
                            right: 'auto',
                            bottom: 0,
                            width: '100%',
                            'background-size': 'contain',
                            'background-repeat': 'no-repeat',
                            'background-position-x': '50%',
                            opacity: 0,
                            transition: 'opacity .7s'
                        }
                    }
                }
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var styles = [{
    '.demo-infinite': {
        ' .pe-header-panel__main-container': {
            width: '100%'
        },
        ' .demo-content': {
            height: '100%',
            padding: 0
        },
        ' .before, .after': {
            'font-size': '14px',
            padding: '16px 24px',
            margin: '0 0 16px 0',
            'background-color': '#fff'
        },
        ' .before': {
            margin: '0 0 14px 0'
        },
        ' .after': {
            margin: '8 px 0 16 px 0'
        },
        ' .github': {
            display: 'none'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _mithrilInfinite = __webpack_require__(172);

var _mithrilInfinite2 = _interopRequireDefault(_mithrilInfinite);

var _polythene = __webpack_require__(1);

var _common = __webpack_require__(6);

var _common2 = _interopRequireDefault(_common);

var _infiniteGridStyle = __webpack_require__(91);

var _infiniteGridStyle2 = _interopRequireDefault(_infiniteGridStyle);

var _infiniteStyle = __webpack_require__(92);

var _infiniteStyle2 = _interopRequireDefault(_infiniteStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-header-panel-infinite', _infiniteGridStyle2.default, _infiniteStyle2.default);

var TITLE = 'Infinite scroll';
var SUBTITLE = '';
var PANEL_PROPS = {
    class: 'pe-header-panel--fit demo-infinite',
    mode: 'waterfall'
};

var IMG_URL = 'http://arthurclemens.github.io/assets/mithril-infinite-scroll/thumbs/';

var vm = {
    seen: {}
};

// fade in first time only
var showImage = function showImage(el, imgUrl) {
    var url = IMG_URL + imgUrl;
    var populate = function populate() {
        el.style.backgroundImage = 'url(' + url + ')';
        el.style.opacity = 1;
        vm.seen[url] = 1;
    };
    if (!vm.seen[url]) {
        var img = new Image();
        img.onload = function () {
            populate();
        };
        img.src = url;
    } else {
        populate();
    }
};

var item = function item(data) {
    return (0, _mithril2.default)('a.grid-item', (0, _mithril2.default)('.image-holder', (0, _mithril2.default)('.image', {
        config: function config(el, inited, context) {
            if (context.inited) {
                return;
            }
            if (_mithrilInfinite2.default.isElementInViewport({ el: el })) {
                showImage(el, data.src);
                context.inited = true;
            }
        }
    })));
};

var content = (0, _mithril2.default)(_mithrilInfinite2.default, {
    maxPages: 16, // pages of 12 items each
    item: item,
    pageUrl: function pageUrl(page) {
        return 'assets/infinite-data/page-' + page + '.json';
    },
    scrollView: '.pe-header-panel__main-container',
    class: 'demo-content demo-infinite grid',
    before: (0, _mithril2.default)('p', _mithril2.default.trust('This example uses <a href="https://github.com/ArthurClemens/mithril-infinite">mithril-infinite</a>. In order to update the scrolling contents, we need to set <code>updateContentOnScroll</code> to <code>true</code>, and we assign header panel\'s <code>header-panel__main-container</code> as <code>scrollView</code>.')),
    after: (0, _mithril2.default)('p', _mithril2.default.trust('That was the last pug.'))
});

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.demo-header-panel', (0, _mithril2.default)(_polythene.HeaderPanel, Object.assign({}, {
        header: {
            toolbar: {
                topBar: _common2.default.toolbarRow(''),
                bottomBar: _common2.default.createBottomBar(TITLE, SUBTITLE)
            }
        },
        updateContentOnScroll: true,
        content: content
    }, PANEL_PROPS)));
};
_module.hideNav = true;

exports.default = _module;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var styles = [{
    '.pe-button--icon': {
        '&.colored': {
            color: '#FF1744' // magenta,
        },
        '&.raised': {
            background: '#fff'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _iconButtonStyle = __webpack_require__(94);

var _iconButtonStyle2 = _interopRequireDefault(_iconButtonStyle);

var _heart = __webpack_require__(8);

var _heart2 = _interopRequireDefault(_heart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-icon-button', _iconButtonStyle2.default);


var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', {
            class: args.class || ''
        }, [(0, _mithril2.default)('.p-block-header', args.label), args.content]);
    }
};

var myIcon = {
    msvg: _heart2.default
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-icon-button', [(0, _mithril2.default)(titleBlock, {
        label: 'Default settings',
        content: (0, _mithril2.default)(_polythene.IconButton, {
            icon: myIcon
        })
    }), (0, _mithril2.default)(titleBlock, {
        label: 'With wash',
        content: (0, _mithril2.default)(_polythene.IconButton, {
            icon: myIcon,
            wash: true
        })
    }), (0, _mithril2.default)(titleBlock, {
        label: 'No wash, no ink',
        content: (0, _mithril2.default)(_polythene.IconButton, {
            icon: myIcon,
            wash: false,
            ink: false
        })
    }), (0, _mithril2.default)(titleBlock, {
        label: 'Sizes',
        content: ['small', 'regular', 'medium', 'large'].map(function (type) {
            return (0, _mithril2.default)(_polythene.IconButton, {
                icon: {
                    msvg: _heart2.default,
                    type: type
                }
            });
        })
    }), (0, _mithril2.default)(titleBlock, {
        label: 'Compact',
        content: ['small', 'regular', 'medium', 'large'].map(function (type) {
            return (0, _mithril2.default)(_polythene.IconButton, {
                compact: true,
                icon: {
                    msvg: _heart2.default,
                    type: type
                }
            });
        })
    }), (0, _mithril2.default)(titleBlock, {
        label: 'Raised',
        content: (0, _mithril2.default)(_polythene.IconButton, {
            icon: myIcon,
            raised: true,
            class: 'raised'
        })
    }), (0, _mithril2.default)(titleBlock, {
        label: 'Colored, Colored with wash',
        content: [(0, _mithril2.default)(_polythene.IconButton, {
            class: 'colored',
            icon: myIcon
        }), (0, _mithril2.default)(_polythene.IconButton, {
            class: 'colored',
            icon: myIcon,
            wash: true
        })]
    }), (0, _mithril2.default)(titleBlock, {
        label: 'Inactive',
        content: (0, _mithril2.default)(_polythene.IconButton, {
            inactive: true,
            icon: myIcon
        })
    }), (0, _mithril2.default)(titleBlock, {
        label: 'Disabled',
        content: (0, _mithril2.default)(_polythene.IconButton, {
            disabled: true,
            icon: myIcon
        })
    }), (0, _mithril2.default)(titleBlock, {
        label: 'Dark theme',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)(_polythene.IconButton, {
            icon: myIcon
        })
    }), (0, _mithril2.default)(titleBlock, {
        label: 'Dark theme: colored',
        class: 'pe-dark-theme',
        content: [(0, _mithril2.default)(_polythene.IconButton, {
            class: 'colored',
            icon: myIcon
        }), (0, _mithril2.default)(_polythene.IconButton, {
            class: 'colored',
            icon: myIcon,
            wash: true
        })]
    }), (0, _mithril2.default)(titleBlock, {
        label: 'Dark theme: disabled',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)(_polythene.IconButton, {
            disabled: true,
            icon: myIcon
        })
    }), (0, _mithril2.default)(titleBlock, {
        label: 'Button events',
        content: (0, _mithril2.default)(_polythene.IconButton, {
            icon: myIcon,
            events: {
                onmouseover: function onmouseover() {
                    console.log('mouse over');
                },
                onmouseout: function onmouseout() {
                    console.log('mouse out');
                },
                onclick: function onclick() {
                    console.log('click');
                }
            }
        })
    })]);
};

exports.default = _module;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.module-icon': {
        ' .demo-icons': {
            'font-size': 0
        },
        ' .demo-icon': {
            display: 'inline-block',
            margin: '0 10px 0 0',
            'font-size': '1rem',
            color: _commonVars2.default.attentionColor,

            '& + &': {
                margin: '0 0 0 10px'
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _iconStyle = __webpack_require__(96);

var _iconStyle2 = _interopRequireDefault(_iconStyle);

var _stars = __webpack_require__(22);

var _stars2 = _interopRequireDefault(_stars);

var _group = __webpack_require__(28);

var _group2 = _interopRequireDefault(_group);

var _chatBubble = __webpack_require__(25);

var _chatBubble2 = _interopRequireDefault(_chatBubble);

var _female = __webpack_require__(190);

var _female2 = _interopRequireDefault(_female);

var _attachment = __webpack_require__(188);

var _attachment2 = _interopRequireDefault(_attachment);

var _cloudDownload = __webpack_require__(191);

var _cloudDownload2 = _interopRequireDefault(_cloudDownload);

var _barcode = __webpack_require__(183);

var _barcode2 = _interopRequireDefault(_barcode);

var _emoticonHappy = __webpack_require__(185);

var _emoticonHappy2 = _interopRequireDefault(_emoticonHappy);

var _headphones = __webpack_require__(32);

var _headphones2 = _interopRequireDefault(_headphones);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-icon', _iconStyle2.default);

var block = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.demo-icon', [(0, _mithril2.default)(_polythene.Icon, args.icon)]);
    }
};

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', [(0, _mithril2.default)('.p-block-header', args.title), args.info ? args.info : null, (0, _mithril2.default)('.demo-icons', args.content)]);
    }
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-icon', [(0, _mithril2.default)('.p-block.p-block-info', [(0, _mithril2.default)('p', _mithril2.default.trust('Mithril msvg icons are available via <a href="https://github.com/ArthurClemens/mithril-material-design-icons">mithril-material-design-icons</a>.')), (0, _mithril2.default)('p', _mithril2.default.trust('Examples loading PNG or SVG files are omitted here; see <a href="http://polythene.js.org/#icon">the documentation on icon</a> for more information.'))]), (0, _mithril2.default)(titleBlock, {
        title: 'Google icons',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('SVG icons, from <a href="https://github.com/google/material-design-icons">google/material-design-icons</a>, converted to Mithril msvg.')),
        content: [(0, _mithril2.default)(block, {
            icon: {
                msvg: _stars2.default
            }
        }), (0, _mithril2.default)(block, {
            icon: {
                msvg: _group2.default
            }
        }), (0, _mithril2.default)(block, {
            icon: {
                msvg: _chatBubble2.default
            }
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Zavoloklom icons',
        info: [(0, _mithril2.default)('p', _mithril2.default.trust('SVG icons, from <a href="https://github.com/zavoloklom/material-design-iconic-font">zavoloklom/material-design-iconic-font</a>, converted to Mithril msvg.'))],
        content: [(0, _mithril2.default)(block, {
            icon: {
                msvg: _female2.default
            }
        }), (0, _mithril2.default)(block, {
            icon: {
                msvg: _attachment2.default
            }
        }), (0, _mithril2.default)(block, {
            icon: {
                msvg: _cloudDownload2.default
            }
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Templarian icons',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('SVG icons, from <a href="https://github.com/Templarian/MaterialDesign">Templarian/MaterialDesign</a>, converted to Mithril msvg.')),
        content: [(0, _mithril2.default)(block, {
            icon: {
                msvg: _barcode2.default
            }
        }), (0, _mithril2.default)(block, {
            icon: {
                msvg: _emoticonHappy2.default
            }
        }), (0, _mithril2.default)(block, {
            icon: {
                msvg: _headphones2.default
            }
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Sizing icons',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('small, regular, medium, large')),
        content: ['small', 'regular', 'medium', 'large'].map(function (size) {
            return (0, _mithril2.default)(block, {
                icon: {
                    type: size,
                    msvg: _emoticonHappy2.default
                }
            });
        })
    })]);
};

exports.default = _module;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var blockSize = 40;
var blockSizePx = blockSize + 'px';

var styles = [{
    '.module-layout': {
        ' .screen': {
            background: '#fff',
            position: 'relative',

            '&.demo-fixed-height': {
                height: 4 * blockSize + 'px'
            },
            '&.demo-large-fixed-height': {
                height: 8 * blockSize + 'px'
            },
            '&.demo-small-width': {
                width: 3 * blockSize + 'px'
            }
        },
        ' .block': {
            'min-width': blockSizePx,
            height: blockSizePx,
            color: '#fff',
            'text-align': 'center',
            'line-height': blockSizePx,

            '&:nth-child(1)': {
                background: '#311B92'
            },
            '&:nth-child(2)': {
                background: '#4527A0'
            },
            '&:nth-child(3)': {
                background: '#512DA8'
            },
            '&:nth-child(4)': {
                background: '#5E35B1'
            },

            '&.auto-size': {
                width: 'auto',
                height: 'auto'
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _layoutStyle = __webpack_require__(98);

var _layoutStyle2 = _interopRequireDefault(_layoutStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-layout', _layoutStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', [(0, _mithril2.default)('.p-block-header', [_mithril2.default.trust(args.title), args.subtitle ? (0, _mithril2.default)('p', _mithril2.default.trust(args.subtitle)) : null]), args.info ? (0, _mithril2.default)('p', args.info) : null, args.content]);
    }
};

var blocks = [1, 2, 3, 4].map(function (num) {
    return (0, _mithril2.default)('.block', num);
});

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-layout', [(0, _mithril2.default)('.p-block.p-block-info', (0, _mithril2.default)('p', _mithril2.default.trust('Flexbox layout classes.'))), (0, _mithril2.default)('.h-block', (0, _mithril2.default)('h4', 'Horizontal')), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.horizontal',
        content: (0, _mithril2.default)('.screen.layout.horizontal', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.horizontal.inline',
        content: (0, _mithril2.default)('.screen.layout.horizontal.inline', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.horizontal.reverse',
        content: (0, _mithril2.default)('.screen.layout.horizontal.reverse', blocks)
    }), (0, _mithril2.default)('.h-block', (0, _mithril2.default)('h4', 'Vertical')), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.vertical',
        content: (0, _mithril2.default)('.screen.layout.vertical', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.vertical.inline',
        content: (0, _mithril2.default)('.screen.layout.vertical.inline', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.vertical.reverse',
        content: (0, _mithril2.default)('.screen.layout.vertical.reverse', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: '.auto-vertical',
        subtitle: 'container: div.layout.vertical',
        content: (0, _mithril2.default)('.screen.layout.vertical', (0, _mithril2.default)('.block.auto-vertical', '1'), (0, _mithril2.default)('.block.auto-vertical', '2'), (0, _mithril2.default)('.block.auto-vertical', '3'), (0, _mithril2.default)('.block.auto-vertical', '4'))
    }), (0, _mithril2.default)(titleBlock, {
        title: '.auto-vertical',
        subtitle: 'container: div.layout.horizontal',
        content: (0, _mithril2.default)('.screen.layout.horizontal', (0, _mithril2.default)('.block.auto-vertical', '1'), (0, _mithril2.default)('.block.auto-vertical', '2'), (0, _mithril2.default)('.block.auto-vertical', '3'), (0, _mithril2.default)('.block.auto-vertical', '4'))
    }), (0, _mithril2.default)('.h-block', (0, _mithril2.default)('h4', 'Wrap')), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.wrap',
        content: (0, _mithril2.default)('.screen.demo-fixed-height.demo-small-width.layout.wrap', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.wrap.reverse',
        content: (0, _mithril2.default)('.screen.demo-fixed-height.demo-small-width.layout.wrap.reverse', blocks)
    }), (0, _mithril2.default)('.h-block', (0, _mithril2.default)('h4', 'Start, Center, End')), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.start',
        content: (0, _mithril2.default)('.screen.demo-fixed-height.layout.start', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.center',
        content: (0, _mithril2.default)('.screen.demo-fixed-height.layout.center', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.end',
        content: (0, _mithril2.default)('.screen.demo-fixed-height.layout.end', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.vertical.center',
        content: (0, _mithril2.default)('.screen.demo-fixed-height.layout.vertical.center', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.center-center',
        content: (0, _mithril2.default)('.screen.demo-fixed-height.layout.center-center', blocks)
    }), (0, _mithril2.default)('.h-block', (0, _mithril2.default)('h4', 'Justified')), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.justified',
        content: (0, _mithril2.default)('.screen.demo-fixed-height.layout.justified', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.start-justified',
        content: (0, _mithril2.default)('.screen.demo-fixed-height.layout.start-justified', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.center-justified',
        content: (0, _mithril2.default)('.screen.demo-fixed-height.layout.center-justified', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.end-justified',
        content: (0, _mithril2.default)('.screen.demo-fixed-height.layout.end-justified', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.center-justified.end',
        content: (0, _mithril2.default)('.screen.demo-fixed-height.layout.center-justified.end', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.around-justified',
        content: (0, _mithril2.default)('.screen.demo-fixed-height.layout.around-justified', blocks)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.layout.around-justified.end',
        content: (0, _mithril2.default)('.screen.demo-fixed-height.layout.around-justified.end', blocks)
    }), (0, _mithril2.default)('.h-block', (0, _mithril2.default)('h4', 'Flexible children layout')), (0, _mithril2.default)(titleBlock, {
        title: '.flex, .flex.two, .flex.two, .flex.six',
        subtitle: 'container: div.layout',
        content: (0, _mithril2.default)('.screen.layout', (0, _mithril2.default)('.block.flex', '1'), (0, _mithril2.default)('.block.flex.two', '2'), (0, _mithril2.default)('.block.flex.two', '3'), (0, _mithril2.default)('.block.flex.six', '4'))
    }), (0, _mithril2.default)(titleBlock, {
        title: '&mdash;, .flex, &mdash;, &mdash;',
        subtitle: 'container: div.layout',
        content: (0, _mithril2.default)('.screen.layout', (0, _mithril2.default)('.block', '1'), (0, _mithril2.default)('.block.flex', '2'), (0, _mithril2.default)('.block', '3'), (0, _mithril2.default)('.block', '4'))
    }), (0, _mithril2.default)(titleBlock, {
        title: '.self-start, .flex, .flex, .self-end',
        subtitle: 'container: div.horizontal.layout',
        content: (0, _mithril2.default)('.screen.layout', (0, _mithril2.default)('.block.self-start', '1'), (0, _mithril2.default)('.block.flex', '2'), (0, _mithril2.default)('.block.flex', '3'), (0, _mithril2.default)('.block.self-end', '4'))
    }), (0, _mithril2.default)(titleBlock, {
        title: '.flex, .flex.two, .flex.two, .flex.six',
        subtitle: 'container: div.vertical.layout',
        content: (0, _mithril2.default)('.screen.demo-large-fixed-height.vertical.layout', (0, _mithril2.default)('.block.flex', '1'), (0, _mithril2.default)('.block.flex.two', '2'), (0, _mithril2.default)('.block.flex.two', '3'), (0, _mithril2.default)('.block.flex.six', '4'))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.vertical.layout .self-center',
        content: (0, _mithril2.default)('.screen.vertical.layout', (0, _mithril2.default)('.self-center', blocks))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.vertical.layout .self-end',
        content: (0, _mithril2.default)('.screen.vertical.layout', (0, _mithril2.default)('.self-end', blocks))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'div.self-stretch',
        content: (0, _mithril2.default)('.screen.self-stretch', blocks)
    }), (0, _mithril2.default)('.h-block', (0, _mithril2.default)('h4', 'Other')), (0, _mithril2.default)(titleBlock, {
        title: '.pe-fit',
        subtitle: 'container: div',
        content: (0, _mithril2.default)('.screen.demo-fixed-height', (0, _mithril2.default)('.block.auto-size.pe-fit', '1'))
    })]);
};

exports.default = _module;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(7);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.demo-list': {
        '&.checkbox-primary-list': {
            ' .checkbox': {
                color: '#0e9c57'
            },
            ' .pe-list-tile__title': [_mixin2.default.vendorize({
                'user-select': 'none'
            }, _config2.default.prefixes_user_select)]
        }
    }
}];

exports.default = styles;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _checkboxPrimaryStyle = __webpack_require__(100);

var _checkboxPrimaryStyle2 = _interopRequireDefault(_checkboxPrimaryStyle);

var _message = __webpack_require__(178);

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-checkbox-primary-list', _checkboxPrimaryStyle2.default);

var cbListTile = {};
cbListTile.controller = function (opts) {
    return {
        selected: _mithril2.default.prop(opts.index === 2)
    };
};
cbListTile.view = function (ctrl) {
    var events = {
        onclick: function onclick() {
            return ctrl.selected(!ctrl.selected());
        }
    };
    return (0, _mithril2.default)(_polythene.ListTile, {
        title: ctrl.selected ? 'Line item selected' : 'Line item unselected',
        front: (0, _mithril2.default)(_polythene.Checkbox, {
            checked: function checked() {
                return ctrl.selected();
            },
            getState: function getState(state) {
                return ctrl.selected(state.checked);
            },
            events: events
        }),
        secondary: {
            icon: { msvg: _message2.default }
        },
        hoverable: true,
        events: events
    });
};

var cbList = {};
cbList.view = function () {
    return (0, _mithril2.default)(_polythene.List, {
        class: 'demo-list checkbox-primary-list',
        tiles: [1, 2, 3].map(function (index) {
            return (0, _mithril2.default)(cbListTile, { index: index });
        })
    });
};

exports.default = cbList;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(7);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.demo-list': {
        '&.checkbox-secondary-list': {
            ' .checkbox': {
                color: '#e91e63'
            },
            ' .pe-list-tile__title': [_mixin2.default.vendorize({
                'user-select': 'none'
            }, _config2.default.prefixes_user_select)]
        }
    }
}];

exports.default = styles;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _checkboxSecondaryStyle = __webpack_require__(102);

var _checkboxSecondaryStyle2 = _interopRequireDefault(_checkboxSecondaryStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-checkbox-secondary-list', _checkboxSecondaryStyle2.default);

var avatarImageUrl = function avatarImageUrl(fileName) {
    return 'http://arthurclemens.github.io/assets/polythene/examples/avatar-' + fileName;
};

var cbListTile = {};
cbListTile.controller = function (opts) {
    return {
        selected: opts.index === 2
    };
};
cbListTile.view = function (ctrl, opts) {
    return (0, _mithril2.default)(_polythene.ListTile, {
        title: ctrl.selected ? 'Line item selected' : 'Line item unselected',
        front: (0, _mithril2.default)(_polythene.Icon, {
            type: 'large',
            class: 'pe-icon--avatar',
            src: avatarImageUrl(opts.index + '.png')
        }),
        secondary: {
            content: (0, _mithril2.default)(_polythene.Checkbox, {
                checked: function checked() {
                    return ctrl.selected;
                },
                getState: function getState(state) {
                    return ctrl.selected = state.checked;
                }
            })
        },
        hoverable: true,
        events: {
            onclick: function onclick() {
                return ctrl.selected = !ctrl.selected;
            }
        }
    });
};

var cbList = {};
cbList.view = function () {
    return (0, _mithril2.default)(_polythene.List, {
        class: 'demo-list checkbox-secondary-list',
        tiles: [1, 2, 3].map(function (index) {
            return (0, _mithril2.default)(cbListTile, { index: index });
        })
    });
};

exports.default = cbList;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var styles = [{
    '.module-list-controls': {
        ' .p-block': {
            background: 'none',
            'min-width': '320px',
            'max-width': '480px'
        },
        ' .demo-list': {
            width: '100%',
            'background-color': '#fff'
        },
        ' .pe-icon': {
            color: '#555'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _sortableList = __webpack_require__(107);

var _sortableList2 = _interopRequireDefault(_sortableList);

var _checkboxPrimary = __webpack_require__(101);

var _checkboxPrimary2 = _interopRequireDefault(_checkboxPrimary);

var _checkboxSecondary = __webpack_require__(103);

var _checkboxSecondary2 = _interopRequireDefault(_checkboxSecondary);

var _switchSecondary = __webpack_require__(109);

var _switchSecondary2 = _interopRequireDefault(_switchSecondary);

var _polythene = __webpack_require__(1);

var _listControlsStyle = __webpack_require__(104);

var _listControlsStyle2 = _interopRequireDefault(_listControlsStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-list-controls', _listControlsStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', [(0, _mithril2.default)('.p-block-header', args.title), args.info ? (0, _mithril2.default)('p', args.info) : null, args.content]);
    }
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-list-controls', [(0, _mithril2.default)('.p-block.p-block-info', (0, _mithril2.default)('p', _mithril2.default.trust('See also <a href="#/list">List</a> and <a href="#/list-tile">List Tile</a>.'))), (0, _mithril2.default)(titleBlock, {
        title: 'Checkbox as primary action',
        info: 'Rows are clickable',
        content: _checkboxPrimary2.default
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Checkbox as secondary action',
        info: 'Rows are clickable',
        content: _checkboxSecondary2.default
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Switch as secondary action',
        info: 'Rows are clickable',
        content: _switchSecondary2.default
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Sortable list',
        content: _sortableList2.default
    })]);
};

exports.default = _module;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(7);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.demo-list': {
        '&.sortable-list': {
            position: 'relative',
            'border-radius': '2px',

            ' a': {
                cursor: 'pointer'
            },
            ' .controls-row': {
                padding: '0 16px',
                'border-bottom': '1px solid rgba(0, 0, 0, .11)'
            },
            ' .controls': {
                'margin-left': '-8px',
                'margin-right': '-8px'
            },
            ' .pe-list-tile': [_mixin2.default.vendorize({
                'user-select': 'none'
            }, _config2.default.prefixes_user_select)]
        }
    }
}];

exports.default = styles;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _sortableListStyle = __webpack_require__(106);

var _sortableListStyle2 = _interopRequireDefault(_sortableListStyle);

var _starOutline = __webpack_require__(35);

var _starOutline2 = _interopRequireDefault(_starOutline);

var _star = __webpack_require__(36);

var _star2 = _interopRequireDefault(_star);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-sortable-list', _sortableListStyle2.default);

var sortByName = function sortByName(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    }
    return 0;
};
var sortByDate = function sortByDate(a, b) {
    if (a.date < b.date) {
        return -1;
    }
    if (a.date > b.date) {
        return 1;
    }
    return 0;
};

var sortableList = {
    controller: function controller() {
        var mode = _mithril2.default.prop('name');
        var now = new Date();
        var pastRange = 1000 * 3600 * 24 * 31 * 6;
        var isRandomFavorite = function isRandomFavorite() {
            return Math.random() < .5;
        };
        var items = [{
            name: 'John',
            date: new Date(now - Math.random() * pastRange),
            favorite: isRandomFavorite()
        }, {
            name: 'Edward',
            date: new Date(now - Math.random() * pastRange),
            favorite: isRandomFavorite()
        }, {
            name: 'Atilla',
            date: new Date(now - Math.random() * pastRange),
            favorite: isRandomFavorite()
        }, {
            name: 'Bernd',
            date: new Date(now - Math.random() * pastRange),
            favorite: isRandomFavorite()
        }, {
            name: 'George',
            date: new Date(now - Math.random() * pastRange),
            favorite: isRandomFavorite()
        }, {
            name: 'Cedric',
            date: new Date(now - Math.random() * pastRange),
            favorite: isRandomFavorite()
        }];
        return {
            mode: mode,
            items: items,
            toggleFavorite: function toggleFavorite(item) {
                item.favorite = 1 - item.favorite;
            }
        };
    },
    view: function view(ctrl) {
        var sortList = function sortList() {
            return ctrl.mode() === 'name' ? sortByName : sortByDate;
        };
        var sortedList = ctrl.items.sort(sortList());
        return (0, _mithril2.default)('.demo-list.sortable-list', (0, _mithril2.default)('.controls-row', (0, _mithril2.default)('.controls.layout.horizontal', (0, _mithril2.default)(_polythene.Button, {
            tag: '.flex',
            label: 'Sort by name',
            selected: ctrl.mode() === 'name',
            events: {
                onclick: function onclick() {
                    ctrl.mode('name');
                }
            }
        }), (0, _mithril2.default)(_polythene.Button, {
            tag: '.flex',
            label: 'Sort by date',
            selected: ctrl.mode() === 'date',
            events: {
                onclick: function onclick() {
                    ctrl.mode('date');
                }
            }
        }))), (0, _mithril2.default)(_polythene.List, {
            tiles: sortedList.map(function (item) {
                return (0, _mithril2.default)(_polythene.ListTile, {
                    title: item.name,
                    subtitle: item.date.toLocaleDateString(),
                    secondary: {
                        icon: {
                            msvg: item.favorite ? _star2.default : _starOutline2.default
                        },
                        events: {
                            onclick: function onclick() {
                                ctrl.toggleFavorite(item);
                            }
                        }
                    },
                    events: {
                        onclick: function onclick() {
                            ctrl.toggleFavorite(item);
                        }
                    },
                    ink: true
                });
            }),
            borders: true
        }));
    }
};

exports.default = sortableList;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(7);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.demo-list': {
        '&.switch-secondary-list': {
            ' .pe-control--switch': {
                ' .pe-control--switch__track': {
                    'background-color': '#f7bcd0'
                },
                '&.pe-control--off': {
                    ' .pe-control--switch__thumb': {
                        color: '#fff'
                    }
                },
                '&.pe-control--on': {
                    ' .pe-control--switch__thumb': {
                        color: '#e91e63'
                    }
                }
            },
            ' .pe-list-tile__title': [_mixin2.default.vendorize({
                'user-select': 'none'
            }, _config2.default.prefixes_user_select)]
        }
    }
}];

exports.default = styles;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _switchSecondaryStyle = __webpack_require__(108);

var _switchSecondaryStyle2 = _interopRequireDefault(_switchSecondaryStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-switch-secondary-list', _switchSecondaryStyle2.default);

var avatarImageUrl = function avatarImageUrl(fileName) {
    return 'http://arthurclemens.github.io/assets/polythene/examples/avatar-' + fileName;
};

var cbListTile = {};
cbListTile.controller = function (opts) {
    return {
        selected: opts.index === 2
    };
};
cbListTile.view = function (ctrl, opts) {
    return (0, _mithril2.default)(_polythene.ListTile, {
        title: ctrl.selected ? 'Line item selected' : 'Line item unselected',
        front: (0, _mithril2.default)(_polythene.Icon, {
            type: 'large',
            class: 'pe-icon--avatar',
            src: avatarImageUrl(opts.index + '.png')
        }),
        secondary: {
            content: (0, _mithril2.default)(_polythene.Switch, {
                checked: function checked() {
                    return ctrl.selected;
                },
                getState: function getState(state) {
                    return ctrl.selected = state.checked;
                }
            })
        },
        hoverable: true,
        events: {
            onclick: function onclick() {
                return ctrl.selected = !ctrl.selected;
            }
        }
    });
};

var cbList = {};
cbList.view = function () {
    return (0, _mithril2.default)(_polythene.List, {
        class: 'demo-list switch-secondary-list',
        tiles: [1, 2, 3].map(function (index) {
            return (0, _mithril2.default)(cbListTile, { index: index });
        })
    });
};

exports.default = cbList;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.module-list-tile': {
        ' .demo-list': {
            width: '100%',
            'max-width': _commonVars2.default.blockMaxWidth + 'px',

            ' .pe-icon': {
                color: '#757575'
            },

            ' .pe-icon.demo-cirle-icon': {
                width: '40px',
                height: '40px',
                'border-radius': '50%',
                'background-color': '#ddd',
                ' i': {
                    padding: '8px'
                },
                'svg path': {
                    fill: '#fff'
                }
            },
            '&.links': {
                ' .pe-list-tile': {
                    ' a:hover': {
                        'background-color': _commonVars2.default.colorPrimary,
                        color: '#fff',

                        ' .pe-list-tile__title, .pe-list-tile__subtitle, , .pe-icon': {
                            color: '#fff'
                        }
                    }
                }
            },
            '&.custom': {
                ' .custom-secondary': {
                    'text-align': 'center'
                }
            }
        },
        ' .pe-list-tile-secondary .pe-icon': {
            color: '#aaa'
        },
        ' .p-block.pe-dark-theme': {
            background: '#222',

            ' .demo-list': {
                ' .pe-list-tile': {
                    background: _commonVars2.default.darkThemeBackgroundColor
                }
            }
        },
        ' :not(.pe-dark-theme) .demo-list:not(.demo-no-zebra)': {
            ' .pe-list-tile:nth-child(even)': {
                'background-color': '#f8f8f8'
            },
            ' .pe-list-tile:nth-child(odd)': {
                'background-color': '#fff'
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _listTileStyle = __webpack_require__(110);

var _listTileStyle2 = _interopRequireDefault(_listTileStyle);

var _starOutline = __webpack_require__(35);

var _starOutline2 = _interopRequireDefault(_starOutline);

var _star = __webpack_require__(36);

var _star2 = _interopRequireDefault(_star);

var _heartOutline = __webpack_require__(186);

var _heartOutline2 = _interopRequireDefault(_heartOutline);

var _heart = __webpack_require__(8);

var _heart2 = _interopRequireDefault(_heart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-list-tile', _listTileStyle2.default);

var titleLineText = 'Title line Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';
var infoDoubleLineText = 'Secondary text Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

var avatarImageUrl = function avatarImageUrl(fileName) {
    return 'http://arthurclemens.github.io/assets/polythene/examples/avatar-' + fileName;
};

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', {
            class: args.class || ''
        }, [(0, _mithril2.default)('.p-block-header', args.title), args.info ? (0, _mithril2.default)('p', args.info) : null, args.content]);
    }
};

var textListTile = function textListTile() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return (0, _mithril2.default)(_polythene.ListTile, Object.assign({
        title: titleLineText
    }, opts));
};

var avatarListTile = function avatarListTile(index) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return (0, _mithril2.default)(_polythene.ListTile, Object.assign({
        title: titleLineText,
        front: (0, _mithril2.default)(_polythene.Icon, {
            type: 'large',
            class: 'pe-icon--avatar',
            src: avatarImageUrl(index + '.png')
        })
    }, opts));
};

var iconListTile = function iconListTile(index) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return (0, _mithril2.default)(_polythene.ListTile, Object.assign({
        title: titleLineText,
        front: (0, _mithril2.default)(_polythene.Icon, {
            msvg: index === 2 ? _star2.default : _starOutline2.default
        })
    }, opts));
};

var avatarIconListTile = function avatarIconListTile(index) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return (0, _mithril2.default)(_polythene.ListTile, Object.assign({
        title: titleLineText,
        front: (0, _mithril2.default)(_polythene.Icon, {
            type: 'large',
            class: 'pe-icon--avatar',
            src: avatarImageUrl(index + '.png')
        }),
        secondary: Object.assign({
            icon: {
                msvg: index === 2 ? _heart2.default : _heartOutline2.default
            }
        }, opts.secondaryUrl ? { url: opts.secondaryUrl } : null)
    }, opts));
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-list-tile', [(0, _mithril2.default)('.p-block.p-block-info', (0, _mithril2.default)('p', _mithril2.default.trust('See also <a href="#/list">List</a> and <a href="#/list-controls">List Controls</a>.'))),

    // Text only

    (0, _mithril2.default)(titleBlock, {
        title: 'Single line, no icons',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function () {
            return textListTile();
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Subtitle',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function () {
            return textListTile({ subtitle: infoDoubleLineText });
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'High subtitle',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function () {
            return textListTile({ highSubtitle: infoDoubleLineText });
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Compact',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function () {
            return textListTile({ compact: true, subtitle: infoDoubleLineText });
        })])
    }),

    // Avatars

    (0, _mithril2.default)(titleBlock, {
        title: 'Single line with avatar',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function (index) {
            return avatarListTile(index);
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Subtitle with avatar',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function (index) {
            return avatarListTile(index, { subtitle: infoDoubleLineText });
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'High subtitle with avatar',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function (index) {
            return avatarListTile(index, { highSubtitle: infoDoubleLineText });
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Compact with avatar',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function (index) {
            return avatarListTile(index, { compact: true, subtitle: infoDoubleLineText });
        })])
    }),

    // Icons

    (0, _mithril2.default)(titleBlock, {
        title: 'Single line with icon',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function (index) {
            return iconListTile(index);
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Subtitle with icon',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function (index) {
            return iconListTile(index, { subtitle: infoDoubleLineText });
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'High subtitle with icon',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function (index) {
            return iconListTile(index, { highSubtitle: infoDoubleLineText });
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Compact with icon',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function (index) {
            return iconListTile(index, { compact: true, subtitle: infoDoubleLineText });
        })])
    }),

    // Secondary content

    (0, _mithril2.default)(titleBlock, {
        title: 'Single line with secondary item',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function (index) {
            return avatarIconListTile(index, {});
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Subtitle with secondary item',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function (index) {
            return avatarIconListTile(index, { subtitle: infoDoubleLineText });
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'High subtitle with secondary item',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function (index) {
            return avatarIconListTile(index, { highSubtitle: infoDoubleLineText });
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Primary and secondary action',
        info: _mithril2.default.trust('Primary content (avatar and title) and secondary content (icon) are separate links'),
        content: (0, _mithril2.default)('.demo-list.links', [[1].map(function (index) {
            return avatarIconListTile(index, {
                subtitle: infoDoubleLineText,
                url: {
                    href: 'javascript: void(0)'
                },
                secondaryUrl: {
                    href: 'javascript: void(0)'
                }
            });
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Background ripple',
        info: (0, _mithril2.default)('p', 'Demonstrating ripple on tap.'),
        content: (0, _mithril2.default)('.demo-list', [[1].map(function (index) {
            return avatarListTile(index, {
                subtitle: infoDoubleLineText,
                url: {
                    href: 'javascript: void(0)'
                },
                ink: true
            });
        })])
    }),

    // Custom content

    (0, _mithril2.default)(titleBlock, {
        title: 'Custom secondary content',
        content: (0, _mithril2.default)('.demo-list.custom', [(0, _mithril2.default)(_polythene.ListTile, {
            title: 'Ali Connors',
            highSubtitle: [(0, _mithril2.default)('.demo-first', 'Brunch this weekend?'), (0, _mithril2.default)('.demo-second', 'I\'ll be in your neighborhood doing errands.')],
            secondary: {
                content: (0, _mithril2.default)('.custom-secondary', (0, _mithril2.default)('small', '15 min'), (0, _mithril2.default)('.flex'), (0, _mithril2.default)(_polythene.Icon, {
                    msvg: _starOutline2.default
                }))
            }
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Disabled',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function () {
            return textListTile({
                subtitle: infoDoubleLineText,
                disabled: true
            });
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: subtitle',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function () {
            return textListTile({ subtitle: infoDoubleLineText });
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function (index) {
            return avatarIconListTile(index, { subtitle: infoDoubleLineText });
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: disabled',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)('.demo-list', [[1].map(function () {
            return textListTile({
                subtitle: infoDoubleLineText,
                disabled: true
            });
        })])
    })]);
};

exports.default = _module;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.module-list': {
        ' .p-block': {
            background: 'none',
            'min-width': '320px',
            'max-width': '480px'
        },
        ' .demo-list': {
            width: '100%',
            'background-color': '#fff',

            '&.menu-list': {
                'max-width': _commonVars2.default.listWidth + 'px',
                margin: '0 auto'
            }
        },
        ' .pe-dark-theme .demo-list.pe-list, .demo-list.pe-list.pe-dark-theme': {
            'background-color': _commonVars2.default.darkThemeBackgroundColor
        },
        ' .scrollable-list': {
            height: '300px',
            'overflow-y': 'auto',
            '-webkit-overflow-scrolling': 'touch',

            ' .pe-list-tile.pe-list-header': {
                top: 0
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _formattingList = __webpack_require__(16);

var _formattingList2 = _interopRequireDefault(_formattingList);

var _listStyle = __webpack_require__(112);

var _listStyle2 = _interopRequireDefault(_listStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-list', _listStyle2.default);

var titleLineText = 'Lorem ipsum dolor sit amet, in et consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco';
var infoDoubleLineText = 'Lorem ipsum dolor sit amet, in et consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

var avatarImageUrl = function avatarImageUrl(fileName) {
    return 'http://arthurclemens.github.io/assets/polythene/examples/avatar-' + fileName;
};

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', [(0, _mithril2.default)('.p-block-header', args.title), args.info ? (0, _mithril2.default)('p', args.info) : null, args.content]);
    }
};

var exampleTiles = [(0, _mithril2.default)(_polythene.ListTile, {
    title: titleLineText,
    subtitle: infoDoubleLineText
}), (0, _mithril2.default)(_polythene.ListTile, {
    title: titleLineText,
    subtitle: infoDoubleLineText
}), (0, _mithril2.default)(_polythene.ListTile, {
    title: titleLineText,
    subtitle: infoDoubleLineText
})];

var exampleList = function exampleList() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var noHeader = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    return (0, _mithril2.default)(_polythene.List, Object.assign({}, {
        class: ['demo-list', opts.class ? opts.class : null].join(' '),
        borders: opts.borders,
        indentedBorders: opts.indentedBorders,
        hoverable: opts.hoverable,
        compact: opts.compact,
        tiles: [1, 2, 3].map(function (index) {
            return (0, _mithril2.default)(_polythene.ListTile, {
                title: titleLineText,
                subtitle: infoDoubleLineText,
                front: (0, _mithril2.default)(_polythene.Icon, {
                    type: 'large',
                    class: 'pe-icon--avatar',
                    src: avatarImageUrl(index + '.png')
                })
            });
        })
    }, noHeader ? null : {
        header: {
            title: 'Subheader',
            indent: opts.indent
        }
    }));
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-list', [(0, _mithril2.default)('.p-block.p-block-info', (0, _mithril2.default)('p', _mithril2.default.trust('See also <a href="#/list-controls">List Controls</a> and <a href="#/list-tile">List Tile</a>.'))), (0, _mithril2.default)(titleBlock, {
        title: 'List as menu contents',
        content: (0, _mithril2.default)(_formattingList2.default, {
            class: 'demo-list menu-list'
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Bordered list items with avatars',
        content: (0, _mithril2.default)('div', [exampleList({
            borders: true
        }), exampleList({
            borders: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Indented borders and sub-headers',
        content: (0, _mithril2.default)('div', [exampleList({
            indentedBorders: true,
            indent: true
        }), exampleList({
            indentedBorders: true,
            indent: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Hoverable (not on touch device)',
        content: (0, _mithril2.default)(_polythene.List, {
            class: 'demo-list',
            tiles: exampleTiles,
            hoverable: true
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'No sub-header',
        content: (0, _mithril2.default)(_polythene.List, {
            class: 'demo-list',
            tiles: exampleTiles
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Subheader',
        content: (0, _mithril2.default)(_polythene.List, {
            class: 'demo-list',
            header: {
                title: 'Subheader'
            },
            tiles: exampleTiles
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Compact',
        content: exampleList({
            class: 'demo-list',
            compact: true
        }, true)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Subheaders in a scrollable list',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('<a href="http://caniuse.com/#feat=css-sticky">Does not work in IE/Edge</a>')),
        content: (0, _mithril2.default)('.scrollable-list', [0, 1, 2, 3, 4].map(function () {
            return (0, _mithril2.default)(_polythene.List, {
                class: 'demo-list',
                header: {
                    title: 'Subheader',
                    sticky: true
                },
                tiles: exampleTiles
            });
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Bordered list items',
        content: (0, _mithril2.default)(_polythene.List, {
            class: 'demo-list',
            borders: true,
            header: {
                title: 'Subheader'
            },
            tiles: exampleTiles
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Avatars',
        content: (0, _mithril2.default)('div', [exampleList(), exampleList()])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Bordered, dark theme',
        content: (0, _mithril2.default)(_polythene.List, {
            class: 'demo-list pe-dark-theme',
            borders: true,
            header: {
                title: 'Subheader'
            },
            tiles: exampleTiles
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Avatars dark theme',
        content: (0, _mithril2.default)('.pe-dark-theme', [exampleList({ hoverable: true }), exampleList({ hoverable: true })])
    })]);
};

exports.default = _module;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createTile = function createTile(title, selected, disabled) {
    return (0, _mithril2.default)(_polythene.ListTile, {
        title: title,
        selected: selected,
        disabled: disabled,
        ink: true,
        events: {
            onclick: function onclick() {
                if (!disabled) {
                    _polythene.Dialog.hide();
                }
            }
        }
    });
};

exports.default = {
    class: 'demo-menu',
    menu: (0, _mithril2.default)(_polythene.List, {
        hoverable: true,
        tiles: [createTile('Any bar, any cross, any impediment will be medicinable to me: I am sick in displeasure to him', true, false), createTile('and whatsoever comes athwart his affection ranges', false, false), createTile('evenly with mine. How canst thou cross this marriage?', false, true)]
    }),
    hideDelay: .240,
    header: null,
    footer: null
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var settings = {};
settings.controller = function () {
    var lockedMenu = {
        show: false,
        selectedIndex: 0,
        options: ['Show all notification content', 'Hide sensitive notification content', 'Hide all notification content']
    };
    return {
        lockedMenu: lockedMenu
    };
};
settings.view = function (ctrl) {
    return (0, _mithril2.default)('.settings', [(0, _mithril2.default)(_polythene.Menu, {
        target: 'choice_device_locked',
        show: ctrl.lockedMenu.show,
        hideDelay: .240,
        didHide: function didHide() {
            ctrl.lockedMenu.show = false;
        },
        size: 5,
        content: (0, _mithril2.default)(_polythene.List, {
            hoverable: true,
            tiles: ctrl.lockedMenu.options.map(function (setting, index) {
                return (0, _mithril2.default)(_polythene.ListTile, {
                    title: setting,
                    selected: index === ctrl.lockedMenu.selectedIndex,
                    ink: true,
                    events: {
                        onclick: function onclick() {
                            return ctrl.lockedMenu.selectedIndex = index;
                        }
                    }
                });
            })
        })
    }), (0, _mithril2.default)(_polythene.List, {
        class: 'selectable-list',
        selectable: true,
        tiles: [(0, _mithril2.default)(_polythene.ListTile, {
            id: 'choice_device_locked',
            title: 'When device is locked',
            subtitle: ctrl.lockedMenu.options[ctrl.lockedMenu.selectedIndex],
            events: {
                onclick: function onclick() {
                    ctrl.lockedMenu.show = true;
                }
            }
        }), (0, _mithril2.default)(_polythene.ListTile, {
            title: 'Item 2',
            disabled: true
        }), (0, _mithril2.default)(_polythene.ListTile, {
            title: 'Item 3',
            disabled: true
        })]
    })]);
};

exports.default = settings;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(7);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.module-menu': {
        'padding-bottom': '100px',

        ' .simple-menu': {
            ' .container': {
                position: 'relative'
            }
        },
        ' .menu-items .pe-menu': {
            display: 'inline-block',
            margin: '0 24px 24px 0'
        },
        ' .selectable-list': {
            width: '100%',
            'min-width': 280 + 2 * 16 + 'px',
            'max-width': 280 + 2 * 16 + 'px',
            'background-color': '#fff'
        },
        ' .demo-list, .pe-dialog': {
            ' .pe-list-item': [_mixin2.default.vendorize({
                'user-select': 'none'
            }, _config2.default.prefixes_user_select)]
        },
        ' .positioning': {
            margin: '0 -10px',

            ' .container': {
                position: 'relative',
                width: '47%',
                height: '230px',
                background: '#fff',
                margin: '10px',

                ' .bar': {
                    position: 'relative',
                    background: '#3F51B5',
                    width: '100%',
                    padding: '4px 0'
                }
            }
        },
        ' .settings': {
            position: 'relative'
        },
        ' .short-simple-menu': {
            display: 'inline-block',
            margin: '0 16px 16px 0'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _formattingList = __webpack_require__(16);

var _formattingList2 = _interopRequireDefault(_formattingList);

var _dialogSettingsMenu = __webpack_require__(114);

var _dialogSettingsMenu2 = _interopRequireDefault(_dialogSettingsMenu);

var _menuSettings = __webpack_require__(115);

var _menuSettings2 = _interopRequireDefault(_menuSettings);

var _moreVert = __webpack_require__(12);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _menuStyle = __webpack_require__(116);

var _menuStyle2 = _interopRequireDefault(_menuStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-menu', _menuStyle2.default);

var dialogsData = [{
    dialog: _dialogSettingsMenu2.default,
    url: '/menu/settingsmenu'
}];

var dataForPath = function dataForPath(path) {
    return dialogsData.reduce(function (found, data) {
        return data.url === path ? data : found;
    }, null);
};

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', {
            class: args.class || ''
        }, [(0, _mithril2.default)('.p-block-header', args.title), args.info ? args.info : null, args.content]);
    }
};

var simpleContainer = {};
simpleContainer.controller = function () {
    return {
        open: false
    };
};
simpleContainer.view = function (ctrl) {
    return (0, _mithril2.default)('.container', (0, _mithril2.default)('a', {
        href: 'javascript: void(0)',
        id: 'simple_btn', // use as menu's target
        onclick: function onclick(e) {
            return e.preventDefault(), ctrl.open = true;
        } // opens at next redraw
    }, 'Open menu'), (0, _mithril2.default)(_polythene.Menu, {
        target: 'simple_btn', // to align with the link
        offset: 0, // horizontally align with link
        size: 'auto',
        show: ctrl.open, // should the menu be open or closed
        didHide: function didHide() {
            return ctrl.open = false;
        }, // called after closing
        content: (0, _mithril2.default)(_polythene.List, {
            tiles: [(0, _mithril2.default)(_polythene.ListTile, {
                title: 'Yes',
                ink: true
            }), (0, _mithril2.default)(_polythene.ListTile, {
                title: 'No',
                ink: true
            })]
        })
    }));
};

var menuItems = function menuItems(theme) {
    return (0, _mithril2.default)(_polythene.Menu, {
        class: theme,
        size: 5,
        permanent: true,
        content: _formattingList2.default
    });
};

var shortSimpleMenu = function shortSimpleMenu(size) {
    var sizeTexts = {
        '1': ['en', 'nl', 'de'],
        '1.5': ['Yes', 'No', 'Maybe'],
        '2': ['Copy', 'Paste', 'Undo'],
        '3': ['Home', 'Back', 'Recently viewed'],
        '4': ['Paragraph styles', 'Line spacing', 'Numbered list'],
        '5': ['Add space before paragraph', 'Add space after paragraph', 'Custom spacing'],
        '6': ['The Mind Is Its Own Beautiful Prisoner', 'If I Should Sleep With A Lady Called Death', 'It May Not Always Be So; And I Say'],
        '7': ['Any bar, any cross, any impediment will be', 'medicinable to me: I am sick in displeasure to him', 'and whatsoever comes athwart his affection ranges', 'evenly with mine. How canst thou cross this marriage?'],
        'auto': ['Paragraph styles', 'Line spacing', 'Numbered list']
    };
    var sizeStr = size.toString();
    return (0, _mithril2.default)(_polythene.Menu, {
        class: 'short-simple-menu',
        size: size,
        permanent: true,
        content: [(0, _mithril2.default)(_polythene.List, {
            class: 'list--compact',
            header: {
                title: size
            },
            tiles: sizeTexts[sizeStr].map(function (label) {
                return (0, _mithril2.default)(_polythene.ListTile, {
                    title: label
                });
            })
        })]
    });
};

var positionContainer = {};
positionContainer.controller = function () {
    return {
        showMenu: false
    };
};
positionContainer.view = function (ctrl, opts) {
    return (0, _mithril2.default)('.container.layout.vertical', opts.barPosition === 'bottom' ? (0, _mithril2.default)('.flex') : null, (0, _mithril2.default)('.bar', [(0, _mithril2.default)(_polythene.Shadow, {
        z: 1
    }), (0, _mithril2.default)(_polythene.Menu, {
        class: 'light-theme',
        target: opts.id,
        origin: opts.origin,
        show: ctrl.showMenu,
        size: 3,
        hideDelay: .240,
        didHide: function didHide() {
            return ctrl.showMenu = false;
        },
        content: (0, _mithril2.default)(_polythene.List, {
            hoverable: true,
            tiles: ['Refresh', 'Help & Feedback', 'Settings', 'Sign Out'].map(function (item) {
                return (0, _mithril2.default)(_polythene.ListTile, {
                    title: item,
                    positionSelected: false,
                    ink: true
                });
            })
        })
    }), (0, _mithril2.default)('.pe-dark-theme.layout.horizontal', [opts.buttonPosition === 'right' ? (0, _mithril2.default)('.flex') : null, (0, _mithril2.default)(_polythene.IconButton, {
        id: opts.id,
        icon: {
            msvg: _moreVert2.default
        },
        events: {
            onclick: function onclick(e) {
                return e.preventDefault(), ctrl.showMenu = true;
            }
        }
    })])]));
};

var _module = {};
_module.subview = function (path) {
    // see if we need to show a dialog on load
    var data = dataForPath(path);
    if (data) {
        _polythene.Dialog.show(Object.assign({}, data.dialog, {
            transition: 'hide'
        }));
    }
    return _module;
};

_module.view = function () {
    return (0, _mithril2.default)('.module-menu', [(0, _mithril2.default)(titleBlock, {
        title: 'Simple example',
        content: (0, _mithril2.default)('.simple-menu', simpleContainer)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Menu items',
        content: (0, _mithril2.default)('.menu-items', [menuItems(''), menuItems('pe-dark-theme')])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Simple dialog as settings menu',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('This is a dialog that uses property "menu" to behave like a menu.')),
        content: (0, _mithril2.default)(_polythene.Button, {
            label: 'Open',
            raised: true,
            events: {
                onclick: function onclick(e) {
                    e.preventDefault();
                    _polythene.Dialog.show(_dialogSettingsMenu2.default);
                }
            }
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Positioning',
        content: (0, _mithril2.default)('.positioning', [(0, _mithril2.default)('.layout.horizontal', [(0, _mithril2.default)(positionContainer, {
            id: 'show_menu_top_left',
            origin: 'top-left',
            barPosition: 'top',
            buttonPosition: 'left'
        }), (0, _mithril2.default)('.flex'), (0, _mithril2.default)(positionContainer, {
            id: 'show_menu_top_right',
            origin: 'top-right',
            barPosition: 'top',
            buttonPosition: 'right'
        })]), (0, _mithril2.default)('.layout.horizontal', [(0, _mithril2.default)(positionContainer, {
            id: 'show_menu_bottom_left',
            origin: 'bottom-left',
            barPosition: 'bottom',
            buttonPosition: 'left'
        }), (0, _mithril2.default)('.flex'), (0, _mithril2.default)(positionContainer, {
            id: 'show_menu_bottom_right',
            origin: 'bottom-right',
            barPosition: 'bottom',
            buttonPosition: 'right'
        })])])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Change setting and reposition according to selected item',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('The selected value from the menu is stored and displayed in the list.')),
        content: (0, _mithril2.default)(_menuSettings2.default)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Sizes',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('Widths are reduced to fit on small screen.')),
        content: [shortSimpleMenu(1.5), shortSimpleMenu(2), shortSimpleMenu(3), shortSimpleMenu(4), shortSimpleMenu(5), shortSimpleMenu(6), shortSimpleMenu(7), shortSimpleMenu('auto')]
    })]);
};

_module.updateContentOnScroll = false;
exports.default = _module;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var primaryColor = '#448AFF';

var pattern = function pattern(foreground, background) {
    return {
        'background-image': 'radial-gradient(circle at 100% 150%, ' + foreground + ' 24%, ' + background + ' 25%, ' + background + ' 28%, ' + foreground + ' 29%, ' + foreground + ' 36%, ' + background + ' 36%, ' + background + ' 40%, transparent 40%, transparent), radial-gradient(circle at 0 150%, ' + foreground + ' 24%, ' + background + ' 25%, ' + background + ' 28%, ' + foreground + ' 29%, ' + foreground + ' 36%, ' + background + ' 36%, ' + background + ' 40%, transparent 40%, transparent), radial-gradient(circle at 50%  100%, ' + background + ' 10%, ' + foreground + ' 11%, ' + foreground + ' 23%, ' + background + ' 24%, ' + background + ' 30%, ' + foreground + ' 31%, ' + foreground + ' 43%, ' + background + ' 44%, ' + background + ' 50%, ' + foreground + ' 51%, ' + foreground + ' 63%, ' + background + ' 64%, ' + background + ' 71%, transparent 71%, transparent), radial-gradient(circle at 100% 50%, ' + background + ' 5%, ' + foreground + ' 6%, ' + foreground + ' 15%, ' + background + ' 16%, ' + background + ' 20%, ' + foreground + ' 21%, ' + foreground + ' 30%, ' + background + ' 31%, ' + background + ' 35%, ' + foreground + ' 36%, ' + foreground + ' 45%, ' + background + ' 46%, ' + background + ' 49%, transparent 50%, transparent), radial-gradient(circle at 0 50%, ' + background + ' 5%, ' + foreground + ' 6%, ' + foreground + ' 15%, ' + background + ' 16%, ' + background + ' 20%, ' + foreground + ' 21%, ' + foreground + ' 30%, ' + background + ' 31%, ' + background + ' 35%, ' + foreground + ' 36%, ' + foreground + ' 45%, ' + background + ' 46%, ' + background + ' 49%, transparent 50%, transparent)',
        'background-size': '100px 50px'
    };
};

var styles = [{
    '.module-notification': {
        ' .container': {
            '&': pattern('#fff', _commonVars2.default.bodyBackgroundColor),
            position: 'relative',
            overflow: 'hidden',
            'max-width': '100%',
            height: _commonVars2.default.minWidth * .8 + 'px',
            margin: '16px 0',

            '&.mobile': {
                width: _commonVars2.default.minWidth + 'px'
            },
            '&.tablet': {
                width: _commonVars2.default.tabletWidth + 'px'
            },
            '&.desktop': {
                width: _commonVars2.default.desktopWidth + 'px'
            },
            ' p': {
                padding: '16px'
            },
            ' .bottom': {
                position: 'absolute',
                width: '100%',
                left: 0,
                bottom: 0
            },
            ' .pe-notification__holder': {
                width: '100%'
            },
            ' .pe-button--fab': {
                margin: '0 16px 16px 0',
                'background-color': primaryColor,
                color: '#fff'
            },
            ' .pe-notification-snackbar .pe-button, .pe-notification .pe-button': {
                color: primaryColor
            }
        },
        ' .pe-dark-theme .container': pattern('#444', _commonVars2.default.darkThemeBackgroundColor),
        ' .button-row': {
            margin: '0 -4px',

            ' .pe-button--selected .pe-button__content': {
                'background-color': primaryColor,
                color: '#fff'
            }
        }
    },
    '.message-action-dialog': {
        ' .pe-dialog-footer': {
            ' .pe-button': {
                color: primaryColor
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _notificationMessagesStyle = __webpack_require__(118);

var _notificationMessagesStyle2 = _interopRequireDefault(_notificationMessagesStyle);

var _plus = __webpack_require__(33);

var _plus2 = _interopRequireDefault(_plus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-notification-messages', _notificationMessagesStyle2.default);

var fabIcon = {
    msvg: _plus2.default
};

var actionDialog = function actionDialog(instance) {
    return {
        class: 'message-action-dialog',
        body: 'You pressed a message action',
        footer: [(0, _mithril2.default)(_polythene.Button, {
            label: 'Cancel',
            events: {
                onclick: function onclick() {
                    _polythene.Dialog.hide();
                    instance.unpause();
                }
            }
        }), (0, _mithril2.default)(_polythene.Button, {
            label: 'OK',
            events: {
                onclick: function onclick() {
                    _polythene.Dialog.hide();
                    instance.hide();
                }
            }
        })],
        backdrop: true,
        modal: true
    };
};

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', {
            class: args.class || ''
        }, [args.title ? (0, _mithril2.default)('.p-block-header', args.title) : null, args.info ? args.info : null, args.content ? args.content : null]);
    }
};

var buttonRow = function buttonRow(instance, containerSelector, dismissSelector) {
    return (0, _mithril2.default)('.button-row', [(0, _mithril2.default)(_polythene.Button, {
        label: '1 line',
        raised: true,
        events: {
            onclick: function onclick() {
                instance.show({
                    title: 'A one line message',
                    containerSelector: containerSelector,
                    dismissSelector: dismissSelector
                }).then(function () {
                    return console.log("item 1 shown");
                });
            }
        }
    }), (0, _mithril2.default)(_polythene.Button, {
        label: '2 line',
        raised: true,
        events: {
            onclick: function onclick() {
                return instance.show({
                    title: 'This message tells some things using two lines',
                    containerSelector: containerSelector,
                    dismissSelector: dismissSelector
                });
            }
        }
    }), (0, _mithril2.default)(_polythene.Button, {
        label: '1 line action',
        raised: true,
        events: {
            onclick: function onclick() {
                return instance.show({
                    title: 'Archived',
                    action: (0, _mithril2.default)(_polythene.Button, {
                        label: 'Undo',
                        events: {
                            onclick: function onclick() {
                                instance.pause();
                                _polythene.Dialog.show(actionDialog(instance));
                            }
                        }
                    }),
                    containerSelector: containerSelector,
                    dismissSelector: dismissSelector
                });
            }
        }
    }), (0, _mithril2.default)(_polythene.Button, {
        label: '2 line action',
        raised: true,
        events: {
            onclick: function onclick() {
                return instance.show({
                    title: 'This message tells some things using two lines',
                    action: (0, _mithril2.default)(_polythene.Button, {
                        label: 'Undo',
                        events: {
                            onclick: function onclick() {
                                instance.pause();
                                _polythene.Dialog.show(actionDialog(instance));
                            }
                        }
                    }),
                    containerSelector: containerSelector,
                    dismissSelector: dismissSelector
                });
            }
        }
    }), (0, _mithril2.default)(_polythene.Button, {
        label: '2 line long action',
        raised: true,
        events: {
            onclick: function onclick() {
                return instance.show({
                    title: 'This message tells some things using two lines',
                    layout: 'vertical',
                    action: (0, _mithril2.default)(_polythene.Button, {
                        label: 'Let me think about it',
                        events: {
                            onclick: function onclick() {
                                instance.pause();
                                _polythene.Dialog.show(actionDialog(instance));
                            }
                        }
                    }),
                    containerSelector: containerSelector,
                    dismissSelector: dismissSelector
                });
            }
        }
    }), (0, _mithril2.default)(_polythene.Button, {
        label: 'Custom timing',
        raised: true,
        events: {
            onclick: function onclick() {
                return instance.show({
                    title: 'Custom timing',
                    containerSelector: containerSelector,
                    dismissSelector: dismissSelector,
                    showDelay: .2,
                    showDuration: 1,
                    hideDuration: .2
                });
            }
        }
    }), (0, _mithril2.default)(_polythene.Button, {
        label: 'Dismiss',
        raised: true,
        disabled: instance.count() === 0,
        events: {
            onclick: function onclick() {
                return instance.hide();
            }
        }
    }), (0, _mithril2.default)(_polythene.Button, {
        label: 'Clear',
        raised: true,
        disabled: instance.count() === 0,
        events: {
            onclick: function onclick() {
                instance.hide().then(function () {
                    instance.clear();
                    _mithril2.default.redraw();
                });
            }
        }
    })]);
};

var snackbarContainer = function snackbarContainer(sizeSelector, idSelector) {
    return (0, _mithril2.default)('.container' + sizeSelector + idSelector, [(0, _mithril2.default)('p', 'Message count: ' + _polythene.Snackbar.count()), (0, _mithril2.default)('.bottom.layout.vertical', {
        id: 'bottom_container'
    }, [(0, _mithril2.default)(_polythene.FAB, {
        class: 'self-end',
        icon: fabIcon,
        z: 1
    }), (0, _mithril2.default)(_polythene.Snackbar)])]);
};

var notificationContainer = function notificationContainer(sizeSelector, idSelector) {
    return (0, _mithril2.default)('.container' + sizeSelector + idSelector, [(0, _mithril2.default)('p', 'Message count: ' + _polythene.Notification.count()), (0, _mithril2.default)('#notifications.pe-fit.layout.center-center', (0, _mithril2.default)(_polythene.Notification))]);
};

var containerSizes = [{
    sel: '.mobile',
    title: 'Mobile'
}, {
    sel: '.tablet',
    title: 'Tablet'
}, {
    sel: '.desktop',
    title: 'Desktop'
}];

var themeSettings = [{
    class: 'light-theme',
    title: 'Light theme'
}, {
    class: 'pe-dark-theme',
    title: 'Dark theme'
}];

var controlButtons = function controlButtons(ctrl) {
    return [(0, _mithril2.default)('.button-row', containerSizes.map(function (s, index) {
        return (0, _mithril2.default)(_polythene.Button, {
            label: s.title,
            selected: ctrl.sizeIndex === index,
            events: {
                onclick: function onclick() {
                    return ctrl.sizeIndex = index;
                }
            }
        });
    })), (0, _mithril2.default)('.button-row', themeSettings.map(function (s, index) {
        return (0, _mithril2.default)(_polythene.Button, {
            label: s.title,
            selected: ctrl.themeIndex === index,
            events: {
                onclick: function onclick() {
                    return ctrl.themeIndex = index;
                }
            }
        });
    }))];
};

var _module = {};
_module.controller = function () {
    return {
        sizeIndex: 0,
        themeIndex: 0
    };
};
_module.view = function (ctrl) {
    var size = containerSizes[ctrl.sizeIndex];
    var theme = themeSettings[ctrl.themeIndex];

    return (0, _mithril2.default)('.module-notification', [(0, _mithril2.default)(titleBlock, {
        content: controlButtons(ctrl)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Snackbar',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('Add messages to the queue:')),
        class: theme.class,
        content: [buttonRow(_polythene.Snackbar, '#bottom_container', '#snackbar_container'), snackbarContainer(size.sel, '#snackbar_container')]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Notification',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('Add messages to the queue:')),
        class: theme.class,
        content: [buttonRow(_polythene.Notification, '#notifications', '#notification_container'), notificationContainer(size.sel, '#notification_container')]
    })]);
};
_module.updateContentOnScroll = true;

_module.isSub = true;
_module.back = '/notification';
_module.title = 'Notification message variations';

exports.default = _module;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', {
            class: args.class || ''
        }, [args.title ? (0, _mithril2.default)('.p-block-header', args.title) : null, args.info ? args.info : null, args.content ? args.content : null]);
    }
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-notification', [(0, _mithril2.default)('#notifications.pe-fit.layout.center-center', (0, _mithril2.default)(_polythene.Notification)), (0, _mithril2.default)(titleBlock, {
        title: 'Page notification',
        content: (0, _mithril2.default)(_polythene.Button, {
            label: 'Show',
            raised: true,
            disabled: _polythene.Notification.count() !== 0,
            events: {
                onclick: function onclick() {
                    _polythene.Notification.show({
                        title: 'Done!',
                        containerSelector: '#notifications'
                    }, 'body');
                }
            }
        })
    })]);
};

_module.updateContentOnScroll = true;
_module.isSub = true;
_module.back = '/notification';
_module.title = 'Simple page notification';

exports.default = _module;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _arrowRight = __webpack_require__(13);

var _arrowRight2 = _interopRequireDefault(_arrowRight);

var _notificationSimple = __webpack_require__(120);

var _notificationSimple2 = _interopRequireDefault(_notificationSimple);

var _notificationMessages = __webpack_require__(119);

var _notificationMessages2 = _interopRequireDefault(_notificationMessages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var links = [{
    label: 'Notifications',
    links: [{
        url: '/notification/simple',
        name: 'Simple page notification',
        module: _notificationSimple2.default
    }, {
        url: '/notification/messages',
        name: 'Snackbars and Notifications',
        module: _notificationMessages2.default
    }]
}];

var linkMap = {};
links.forEach(function (group) {
    group.links.forEach(function (linkData) {
        linkMap[linkData.url] = linkData;
    });
});

var item = function item(link) {
    return (0, _mithril2.default)(_polythene.ListTile, {
        title: link.name,
        front: (0, _mithril2.default)(_polythene.Icon, {
            type: 'medium',
            class: 'index-cirle-icon',
            msvg: _arrowRight2.default
        }),
        url: {
            href: link.url,
            config: _mithril2.default.route
        }
    });
};

var _module = {};
_module.controller = function () {
    _mithril2.default.redraw.strategy('diff');
};
_module.subview = function (path) {
    var linkData = linkMap[path];
    if (linkData) {
        var subModule = linkData.module;
        return subModule;
    }
    return _module;
};
_module.view = function () {
    return (0, _mithril2.default)('.index-list', links.map(function (linkGroup) {
        return (0, _mithril2.default)(_polythene.List, {
            header: {
                title: linkGroup.label,
                indent: true
            },
            tiles: linkGroup.links.map(function (link) {
                return item(link);
            })
        });
    }));
};

exports.default = _module;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customColor = '15, 157, 88';

var styles = [{
    '.module-radio-button': {
        ' .pe-dark-theme': {
            'background-color': _commonVars2.default.darkThemeBackgroundColor
        },
        ' .custom-color .pe-control--radio': {
            color: 'rgb(' + customColor + ')'
        },
        ' .pe-control--radio': {
            'margin-right': '32px'
        },
        ' .row + .row': {
            'margin-top': '20px'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(2);

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _radioButtonStyle = __webpack_require__(122);

var _radioButtonStyle2 = _interopRequireDefault(_radioButtonStyle);

var _star = __webpack_require__(30);

var _star2 = _interopRequireDefault(_star);

var _starBorder = __webpack_require__(29);

var _starBorder2 = _interopRequireDefault(_starBorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-radio-button', _radioButtonStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', { class: args.class || '' }, [(0, _mithril2.default)('.p-block-header', args.title), args.content]);
    }
};

var _module = {};
_module.controller = function () {
    _mithril2.default.redraw.strategy('all');
    return {
        radioState: _mithril2.default.prop(false),
        radioValue: _mithril2.default.prop(undefined),
        radioListenerState: _mithril2.default.prop(false),
        radioListenerValue: _mithril2.default.prop(undefined)
    };
};
_module.view = function (ctrl) {
    return (0, _mithril2.default)('.module-radio-button', [(0, _mithril2.default)('.p-block.p-block-info', [(0, _mithril2.default)('p', [(0, _mithril2.default)('span', 'See also '), (0, _mithril2.default)('a', {
        href: '/checkbox',
        config: _mithril2.default.route
    }, 'Checkbox'), (0, _mithril2.default)('span', ' and '), (0, _mithril2.default)('a', {
        href: '/switch',
        config: _mithril2.default.route
    }, 'Switch'), (0, _mithril2.default)('span', '.')]), (0, _mithril2.default)('p', ['On desktop, TAB can be used to give focus, ENTER to select.'])]), (0, _mithril2.default)(titleBlock, {
        title: 'Default radio button',
        content: (0, _mithril2.default)('form.row', [(0, _mithril2.default)(_polythene.RadioButton, {
            name: 'default'
        }), (0, _mithril2.default)(_polythene.RadioButton, {
            name: 'default',
            checked: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom hover behavior',
        content: (0, _mithril2.default)('form.row', [(0, _mithril2.default)(_polythene.RadioButton, {
            name: 'default',
            iconButton: {
                wash: true,
                ink: false
            }
        }), (0, _mithril2.default)(_polythene.RadioButton, {
            name: 'default',
            checked: true,
            iconButton: {
                wash: true,
                ink: false
            }
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'With label',
        content: (0, _mithril2.default)('form.row', [(0, _mithril2.default)(_polythene.RadioButton, {
            name: 'label',
            label: 'First'
        }), (0, _mithril2.default)(_polythene.RadioButton, {
            name: 'label',
            label: 'Second',
            checked: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom color',
        class: 'custom-color',
        content: (0, _mithril2.default)('form.row', [(0, _mithril2.default)(_polythene.RadioButton, {
            name: 'color',
            label: 'First'
        }), (0, _mithril2.default)(_polythene.RadioButton, {
            name: 'color',
            label: 'Second',
            checked: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom size',
        content: ['large', 'medium', 'regular', 'small'].map(function (size) {
            var sizeStr = size.toString();
            return (0, _mithril2.default)('form.row', [(0, _mithril2.default)(_polythene.RadioButton, {
                name: size,
                label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                checked: false,
                size: size
            }), (0, _mithril2.default)(_polythene.RadioButton, {
                name: size,
                label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                checked: true,
                size: size
            })]);
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom icon',
        content: ['large', 'medium', 'regular', 'small'].map(function (size) {
            var sizeStr = size.toString();
            return (0, _mithril2.default)('form.row', [(0, _mithril2.default)(_polythene.RadioButton, {
                name: 'icons_' + size,
                label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                iconOn: {
                    msvg: _star2.default
                },
                iconOff: {
                    msvg: _starBorder2.default
                },
                size: size
            }), (0, _mithril2.default)(_polythene.RadioButton, {
                name: 'icons_' + size,
                label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                iconOn: {
                    msvg: _star2.default
                },
                iconOff: {
                    msvg: _starBorder2.default
                },
                size: size,
                checked: true
            })]);
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Checked state: ' + ctrl.radioState() + (ctrl.radioState() !== false ? ', value: ' + ctrl.radioValue() : ''),
        content: (0, _mithril2.default)('form.row', [(0, _mithril2.default)(_polythene.RadioButton, {
            name: 'read',
            label: 'First',
            value: 'first',
            getState: function getState(state) {
                return ctrl.radioState(state.checked), ctrl.radioValue(state.value);
            }
        }), (0, _mithril2.default)(_polythene.RadioButton, {
            name: 'read',
            label: 'Second',
            value: 'second',
            getState: function getState(state) {
                return ctrl.radioState(state.checked), ctrl.radioValue(state.value);
            }
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Setting the value from outside',
        content: [(0, _mithril2.default)('form.row', [(0, _mithril2.default)(_polythene.RadioButton, {
            name: 'initiate',
            label: 'Initiator 1',
            value: 'first',
            getState: function getState(state) {
                return ctrl.radioListenerState(state.checked), ctrl.radioListenerValue(state.value);
            }
        }), (0, _mithril2.default)(_polythene.RadioButton, {
            name: 'initiate',
            label: 'Initiator 2',
            value: 'second',
            getState: function getState(state) {
                return ctrl.radioListenerState(state.checked), ctrl.radioListenerValue(state.value);
            }
        })]), (0, _mithril2.default)('form.row', [(0, _mithril2.default)(_polythene.RadioButton, {
            name: 'listener',
            label: 'Listener 1',
            disabled: true,
            value: ctrl.radioListenerValue,
            checked: function checked() {
                return ctrl.radioListenerState() && ctrl.radioListenerValue() === 'first';
            }
        }), (0, _mithril2.default)(_polythene.RadioButton, {
            name: 'listener',
            label: 'Listener 2',
            disabled: true,
            value: ctrl.radioListenerValue,
            checked: function checked() {
                return ctrl.radioListenerState() && ctrl.radioListenerValue() === 'second';
            }
        })])]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Disabled',
        content: (0, _mithril2.default)('form.row', [(0, _mithril2.default)(_polythene.RadioButton, {
            name: 'disabled',
            label: 'First',
            disabled: true
        }), (0, _mithril2.default)(_polythene.RadioButton, {
            name: 'disabled',
            label: 'Second',
            checked: true,
            disabled: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)('form.row', [(0, _mithril2.default)(_polythene.RadioButton, {
            name: 'dark',
            label: 'First'
        }), (0, _mithril2.default)(_polythene.RadioButton, {
            name: 'dark',
            label: 'Second',
            checked: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: disabled',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)('form.row', [(0, _mithril2.default)(_polythene.RadioButton, {
            name: 'dark',
            label: 'First',
            disabled: true
        }), (0, _mithril2.default)(_polythene.RadioButton, {
            name: 'dark',
            label: 'Second',
            checked: true,
            disabled: true
        })])
    })]);
};

exports.default = _module;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.module-ripple': {
        ' .demo-button + .demo-button': {
            'margin-left': '20px'
        },
        ' .demo-list.demo-bordered': {
            background: 'none',
            'max-width': '100%',

            ' .pe-list-tile': {
                'border-top': '1px solid #ddd',
                'border-bottom': '1px solid #ddd'
            }
        },
        ' .demo-button .pe-ripple.colored-ripple': {
            color: 'green'
        },
        ' .p-block.pe-dark-theme': {
            'background-color': _commonVars2.default.darkThemeBackgroundColor,
            color: '#fff'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _rippleStyle = __webpack_require__(124);

var _rippleStyle2 = _interopRequireDefault(_rippleStyle);

var _menu = __webpack_require__(11);

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-ripple', _rippleStyle2.default);

var titleLineText = 'Two-line item';
var infoLineText = 'Secondary text';


var iconButtons = function iconButtons() {
    var rippleOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var iconOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var makeIconButton = function makeIconButton(type) {
        return (0, _mithril2.default)(_polythene.IconButton, {
            icon: {
                msvg: _menu2.default,
                type: type,
                class: 'md'
            },
            ripple: rippleOpts,
            wash: false,
            center: iconOpts.center || false,
            disabled: iconOpts.disabled,
            class: 'demo-button'
        });
    };
    return [makeIconButton('large')];
};

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', { class: args.class }, [(0, _mithril2.default)('.p-block-header', args.title), args.content]);
    }
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-ripple', [(0, _mithril2.default)(titleBlock, {
        title: 'Constrained ripple',
        content: iconButtons()
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Centered ripple',
        content: iconButtons({ center: true })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Unconstrained ripple',
        content: iconButtons({ constrained: false })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Disabled ripple',
        content: iconButtons({ constrained: false, disabled: true }, { disabled: true })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Colored ripple',
        content: iconButtons({ class: 'colored-ripple' })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark ripple',
        class: 'pe-dark-theme',
        content: iconButtons()
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Large ripple',
        content: (0, _mithril2.default)(_polythene.List, {
            class: 'demo-list demo-bordered',
            tiles: [(0, _mithril2.default)(_polythene.ListTile, {
                title: titleLineText,
                subtitle: infoLineText,
                after: (0, _mithril2.default)(_polythene.Ripple)
            })]
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom opacity and speed',
        content: (0, _mithril2.default)(_polythene.List, {
            class: 'demo-list demo-bordered',
            tiles: [(0, _mithril2.default)(_polythene.ListTile, {
                title: titleLineText,
                subtitle: infoLineText,
                after: (0, _mithril2.default)(_polythene.Ripple, {
                    class: 'colored-ripple',
                    initialOpacity: 0.6,
                    opacityDecayVelocity: 0.24
                })
            })]
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Callbacks',
        content: (0, _mithril2.default)(_polythene.List, {
            class: 'demo-list demo-bordered',
            tiles: [(0, _mithril2.default)(_polythene.ListTile, {
                title: titleLineText,
                subtitle: infoLineText,
                after: (0, _mithril2.default)(_polythene.Ripple, {
                    start: function start(e) {
                        console.log('ripple start', e);
                    },
                    end: function end(e) {
                        console.log('ripple end', e);
                    }
                })
            })]
        })
    })]);
};

exports.default = _module;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _search = __webpack_require__(9);

var _search2 = _interopRequireDefault(_search);

var _arrowBack = __webpack_require__(10);

var _arrowBack2 = _interopRequireDefault(_arrowBack);

var _clear = __webpack_require__(26);

var _clear2 = _interopRequireDefault(_clear);

var _mic = __webpack_require__(23);

var _mic2 = _interopRequireDefault(_mic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchButton = {
  view: function view() {
    return (0, _mithril2.default)(_polythene.IconButton, {
      icon: { msvg: _search2.default },
      inactive: true
    });
  }
};

var BackButton = {
  view: function view(ctrl, opts) {
    return (0, _mithril2.default)(_polythene.IconButton, {
      icon: { msvg: _arrowBack2.default },
      ink: false,
      events: { onclick: opts.leave }
    });
  }
};

var ClearButton = {
  view: function view(ctrl, opts) {
    return (0, _mithril2.default)(_polythene.IconButton, {
      icon: { msvg: _clear2.default },
      ink: false,
      events: { onclick: opts.clear }
    });
  }
};

var MicButton = {
  view: function view() {
    return (0, _mithril2.default)(_polythene.IconButton, {
      icon: { msvg: _mic2.default },
      inactive: true
    });
  }
};

exports.default = {
  controller: function controller() {
    var value = _mithril2.default.prop('');
    var fieldState = _mithril2.default.prop({});
    var clear = function clear() {
      value('');
      setTimeout(function () {
        return fieldState().el.focus();
      }, 0);
      _mithril2.default.redraw();
    };
    var leave = function leave() {
      value('');
      _mithril2.default.redraw();
    };
    return {
      fieldState: fieldState,
      value: value,
      clear: clear,
      leave: leave
    };
  },
  view: function view(ctrl, opts) {
    return (0, _mithril2.default)(_polythene.Search, Object.assign({}, {
      textfield: {
        label: 'Search',
        key: 'input',
        value: function value() {
          return ctrl.value();
        },
        getState: function getState(fieldState) {
          return ctrl.fieldState(fieldState), ctrl.value(fieldState.value);
        }
      },
      buttons: {
        none: {
          before: (0, _mithril2.default)(SearchButton, { key: 'search' }),
          after: (0, _mithril2.default)(MicButton, { key: 'mic' })
        },
        focus: {
          before: (0, _mithril2.default)(SearchButton, { key: 'search' }),
          after: (0, _mithril2.default)(MicButton, { key: 'mic' })
        },
        focus_dirty: {
          before: (0, _mithril2.default)(BackButton, { key: 'back', leave: ctrl.leave }),
          after: (0, _mithril2.default)(ClearButton, { key: 'clear', clear: ctrl.clear })
        },
        dirty: {
          before: (0, _mithril2.default)(BackButton, { key: 'back', leave: ctrl.leave }),
          after: (0, _mithril2.default)(ClearButton, { key: 'clear', clear: ctrl.clear })
        }
      },
      before: (0, _mithril2.default)(_polythene.Shadow)
    }, opts));
  }
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var primaryColor = '#448AFF';

var styles = [{
    '.module-search': {
        ' .p-block': {
            background: 'none'
        },
        ' .demo-search': {
            'background-color': '#e4e4e4',
            'min-height': '200px',
            'max-width': '100%',
            padding: '8px',

            '&.mobile': {
                width: _commonVars2.default.minWidth + 'px'
            },
            '&.tablet': {
                width: _commonVars2.default.tabletWidth + 'px'
            },
            '&.desktop': {
                width: _commonVars2.default.desktopWidth + 'px'
            }
        },
        ' .demo-search.fullwidth': {
            padding: 0
        },

        ' .size-buttons': {
            margin: '0 -4px',

            ' .pe-button--selected .pe-button__content': {
                'background-color': primaryColor,
                color: '#fff'
            }
        },

        ' .drop-shadow': {
            'box-shadow': 'inset 0px 4px 4px -3px rgba(0, 0, 0, 0.4)',
            height: '4px'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _searchField = __webpack_require__(126);

var _searchField2 = _interopRequireDefault(_searchField);

var _searchStyle = __webpack_require__(127);

var _searchStyle2 = _interopRequireDefault(_searchStyle);

var _search = __webpack_require__(9);

var _search2 = _interopRequireDefault(_search);

var _arrowBack = __webpack_require__(10);

var _arrowBack2 = _interopRequireDefault(_arrowBack);

var _mic = __webpack_require__(23);

var _mic2 = _interopRequireDefault(_mic);

var _clear = __webpack_require__(26);

var _clear2 = _interopRequireDefault(_clear);

var _filterList = __webpack_require__(189);

var _filterList2 = _interopRequireDefault(_filterList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-search', _searchStyle2.default);

var containerSizes = [{
    class: 'mobile',
    title: 'Mobile'
}, {
    class: 'tablet',
    title: 'Tablet'
}, {
    class: 'desktop',
    title: 'Desktop'
}];

var types = [{
    type: 'inset',
    title: 'Inset'
}, {
    type: 'fullwidth',
    title: 'Full width'
}];

var controlButtons = function controlButtons(ctrl) {
    return [(0, _mithril2.default)('.size-buttons', containerSizes.map(function (s, index) {
        return (0, _mithril2.default)(_polythene.Button, {
            label: s.title,
            selected: ctrl.sizeIndex === index,
            events: {
                onclick: function onclick() {
                    return ctrl.sizeIndex = index;
                }
            }
        });
    })), (0, _mithril2.default)('.size-buttons', types.map(function (s, index) {
        return (0, _mithril2.default)(_polythene.Button, {
            label: s.title,
            selected: ctrl.typeIndex === index,
            events: {
                onclick: function onclick() {
                    return ctrl.typeIndex = index;
                }
            }
        });
    }))];
};

var titleBlock = {
    view: function view(ctrl) {
        var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return (0, _mithril2.default)('.p-block', {
            class: args.class || ''
        }, [(0, _mithril2.default)('.p-block-header', args.title), args.info ? (0, _mithril2.default)('p', args.info) : null, args.content]);
    }
};

var SearchBlock = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        return (0, _mithril2.default)("form", {
            class: ['demo-search', opts.sizeClass].join(' '),
            style: Object.assign({}, {
                minHeight: "130px",
                overflow: "hidden" // hides top and side shadow with full width search field
            }, opts.dark ? { backgroundColor: "transparent" } : { backgroundColor: "#e4e4e4" }, opts.type && opts.type === 'fullwidth' ? { padding: "0" } : { padding: "8px" }) }, (0, _mithril2.default)(_searchField2.default, opts));
    }
};

var _module = {};
_module.controller = function () {
    return {
        sizeIndex: 0,
        typeIndex: 0
    };
};
_module.view = function (ctrl) {
    var sizeClass = containerSizes[ctrl.sizeIndex].class;
    var type = types[ctrl.typeIndex].type;

    return (0, _mithril2.default)('.module-search', [(0, _mithril2.default)(titleBlock, {
        content: controlButtons(ctrl)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Inset search (default)',
        info: (0, _mithril2.default)('p', 'Icons specified as component options'),
        content: (0, _mithril2.default)(SearchBlock, { type: type, sizeClass: sizeClass })
    })]);
};

exports.default = _module;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _mixin = __webpack_require__(7);

var _mixin2 = _interopRequireDefault(_mixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.module-shadow': {
        ' .has-background': {
            background: '#fff',
            padding: '20px'
        },
        ' .shadow-card, .shadow-fab': [_mixin2.default.vendorize({
            'user-select': 'none'
        }, _config2.default.prefixes_user_select), {
            display: 'inline-block',
            position: 'relative',
            'text-align': 'center',
            width: '90px',
            height: '90px',
            margin: '0 20px 20px 0',
            'line-height': '90px',
            background: '#BBDEFB',
            'box-sizing': 'border-box',
            '-webkit-touch-callout': 'none'
        }],

        ' .shadow-card': {
            'border-radius': '2px'
        },
        ' .shadow-fab': {
            'border-radius': '50%',
            'text-align': 'center'
        },
        ' .shadow-card.animated, .shadow-fab.animated': {
            cursor: 'pointer',
            background: '#FFC400'
        },
        ' .shadow-card .self-center, .shadow-fab .self-center': {
            width: '100%',
            'pointer-events': 'none'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _shadowStyle = __webpack_require__(129);

var _shadowStyle2 = _interopRequireDefault(_shadowStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-shadow', _shadowStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', [(0, _mithril2.default)('.p-block-header', args.title), args.content]);
    }
};

var interactiveShadow = {
    controller: function controller(args) {
        var STEPS = 5;

        return {
            z: _mithril2.default.prop(STEPS + args.initZ),

            getZ: function getZ() {
                return Math.abs(this.z() % (2 * STEPS) - STEPS);
            }
        };
    },
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('div.animated.layout.horizontal', {
            class: args.class,
            onclick: function onclick() {
                var z = ctrl.z();
                ctrl.z(++z);
            }
        }, [(0, _mithril2.default)('div.self-center', 'z = ' + ctrl.getZ()), (0, _mithril2.default)(_polythene.Shadow, {
            z: ctrl.getZ(),
            animated: true,
            refresh: true
        })]);
    }
};

var indices = [0, 1, 2, 3, 4, 5];
var tapItems = [{
    id: 1,
    class: 'shadow-card',
    initZ: 1
}, {
    id: 2,
    class: 'shadow-fab',
    initZ: 3
}];

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-shadow', [(0, _mithril2.default)(titleBlock, {
        title: 'Shadows',
        content: (0, _mithril2.default)('div.layout.horizontal.wrap', [indices.map(function (z) {
            return (0, _mithril2.default)('div.layout.horizontal', {
                class: 'shadow-card'
            }, [(0, _mithril2.default)('div.self-center', 'z = ' + z), (0, _mithril2.default)(_polythene.Shadow, {
                z: z
            })]);
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Interactive and animated',
        content: (0, _mithril2.default)('div.layout.horizontal', [tapItems.map(function (item) {
            return (0, _mithril2.default)(interactiveShadow, {
                id: item.id,
                class: item.class,
                initZ: item.initZ
            });
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Element shadows',
        content: (0, _mithril2.default)('.has-background.layout.horizontal', [(0, _mithril2.default)(_polythene.Button, {
            raised: true,
            label: 'Normal'
        }), (0, _mithril2.default)(_polythene.Button, {
            raised: true,
            label: 'Raised more',
            z: 2
        })])
    })]);
};

exports.default = _module;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

var _config3 = __webpack_require__(170);

var _config4 = _interopRequireDefault(_config3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var labelWidth = 24;
var trackWidth = 164;
var inputWidth = 32;

var styles = [{
    ' .rgb-slider': {
        ' .field': {
            width: labelWidth + trackWidth + 2 * _config4.default.horizontal_layout_side_spacing + inputWidth + 'px',
            height: '100px',
            'margin-bottom': '10px'
        },
        ' .pe-header': {
            'font-size': '14px',
            color: _config2.default.rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_secondary)
        },
        ' .pe-slider': {
            color: '#009688',
            'margin-top': '0 !important',
            'margin-bottom': '0 !important',

            ' .pe-slider__label': {
                width: labelWidth + 'px'
            },
            ' .pe-slider__track': {
                width: trackWidth + 'px'
            }
        },
        ' .pe-textfield': {
            color: '#009688',
            width: inputWidth + 'px',

            ' .pe-textfield__input': {
                'text-align': 'center'
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var purpleStr = '156, 39, 176';
var redStr = '255, 0, 0';

var styles = [{
    '.module-slider': {
        ' .pe-slider': {
            'margin-top': '20px'
        },
        ' .has-pins .pe-slider': {
            'margin-top': '50px'
        },
        ' .pe-dark-theme': {
            'background-color': _commonVars2.default.darkThemeBackgroundColor
        },
        ' .custom-color': {
            ' .pe-slider': {
                color: 'rgb(' + redStr + ')'
            }
        },
        ' .custom-thumb': {
            ' .pe-slider': {
                color: 'rgb(' + purpleStr + ')'
            },
            ' .pe-slider__control': {
                'background-color': '#fff'
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(4);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.module-slider': {
        ' .icons': {
            ' .pe-header': {
                'font-size': '14px',
                color: _config2.default.rgba(_config2.default.color_light_foreground, _config2.default.blend_light_text_secondary)
            },
            ' .pe-slider': {
                color: '#009688',
                margin: '13px 0 11px 0',

                ' .pe-slider__track': {
                    width: '204px'
                }
            }
        },
        ' .pe-dark-theme.icons': {
            ' .pe-header': {
                color: _config2.default.rgba(_config2.default.color_dark_foreground, _config2.default.blend_dark_text_secondary)
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _sliderVolumeStyle = __webpack_require__(133);

var _sliderVolumeStyle2 = _interopRequireDefault(_sliderVolumeStyle);

var _volumeUp = __webpack_require__(24);

var _volumeUp2 = _interopRequireDefault(_volumeUp);

var _alarm = __webpack_require__(175);

var _alarm2 = _interopRequireDefault(_alarm);

var _headphones = __webpack_require__(32);

var _headphones2 = _interopRequireDefault(_headphones);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-slider-volume', _sliderVolumeStyle2.default);

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.volume', [(0, _mithril2.default)('.header', 'Media volume'), (0, _mithril2.default)(_polythene.Slider, {
        class: 'layout horizontal',
        min: 0,
        max: 10,
        value: 4,
        step: 0,
        before: (0, _mithril2.default)(_polythene.Icon, {
            msvg: _volumeUp2.default
        })
    }), (0, _mithril2.default)('.header', 'Alarm volume'), (0, _mithril2.default)(_polythene.Slider, {
        class: 'layout horizontal',
        min: 0,
        max: 10,
        value: 2,
        step: 0,
        before: (0, _mithril2.default)(_polythene.Icon, {
            msvg: _alarm2.default
        })
    }), (0, _mithril2.default)('.header', 'Headphone volume'), (0, _mithril2.default)(_polythene.Slider, {
        class: 'layout horizontal',
        min: 0,
        max: 10,
        value: 2,
        disabled: true,
        before: (0, _mithril2.default)(_polythene.Icon, {
            msvg: _headphones2.default
        })
    })]);
};

exports.default = _module;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _sliderVolume = __webpack_require__(134);

var _sliderVolume2 = _interopRequireDefault(_sliderVolume);

var _sliderRgb = __webpack_require__(17);

var _sliderRgb2 = _interopRequireDefault(_sliderRgb);

var _sliderStyle = __webpack_require__(132);

var _sliderStyle2 = _interopRequireDefault(_sliderStyle);

var _bullseye = __webpack_require__(14);

var _bullseye2 = _interopRequireDefault(_bullseye);

var _volumeUp = __webpack_require__(24);

var _volumeUp2 = _interopRequireDefault(_volumeUp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-slider', _sliderStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', { class: args.class || '' }, [(0, _mithril2.default)('.p-block-header', args.title), args.content]);
    }
};

var _module = {};
_module.controller = function () {
    return {
        sliderRead: 0,
        sliderSmallRange: 0,
        sliderNegative: -1,
        sliderUnspecified: -1
    };
};
_module.view = function (ctrl) {
    return (0, _mithril2.default)('.module-slider', [(0, _mithril2.default)('.p-block.p-block-info', (0, _mithril2.default)('p', ['On desktop, TAB can be used to give focus, arrow buttons RIGHT and LEFT to increase/decrease the value.'])), (0, _mithril2.default)(titleBlock, {
        title: 'Default slider',
        content: [(0, _mithril2.default)('p', 'Range 0-100, steps are rounded to 1'), (0, _mithril2.default)(_polythene.Slider)]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Smooth slider',
        content: [(0, _mithril2.default)('p', 'Range 0-100, step=0'), (0, _mithril2.default)(_polythene.Slider, {
            step: 0,
            value: 50
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Ticks',
        content: [(0, _mithril2.default)(_polythene.Slider, {
            min: 0,
            max: 100,
            step: 10,
            ticks: true
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Ticks with pin',
        class: 'has-pins',
        content: [(0, _mithril2.default)(_polythene.Slider, {
            min: 0,
            max: 100,
            step: 10,
            value: 2,
            pin: true,
            ticks: true
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'No interactive track',
        content: [(0, _mithril2.default)('p', 'Only use the thumb to update the slider'), (0, _mithril2.default)(_polythene.Slider, {
            interactiveTrack: false
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom color',
        class: 'custom-color',
        content: [(0, _mithril2.default)(_polythene.Slider, {
            min: 0,
            max: 100,
            value: 50
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom thumb',
        class: 'custom-thumb',
        content: [(0, _mithril2.default)(_polythene.Slider, {
            min: 0,
            max: 100,
            value: 50,
            icon: (0, _mithril2.default)(_polythene.Icon, {
                msvg: _bullseye2.default
            })
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'With icons',
        class: 'icons',
        content: (0, _mithril2.default)(_sliderVolume2.default)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'With an editable numeric value',
        class: 'rgb',
        content: (0, _mithril2.default)(_sliderRgb2.default)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'With icon, pin and ticks',
        class: 'has-pins',
        content: (0, _mithril2.default)(_polythene.Slider, {
            class: 'layout horizontal',
            min: 0,
            max: 100,
            step: 10,
            value: 2,
            pin: true,
            ticks: true,
            before: (0, _mithril2.default)(_polythene.Icon, {
                msvg: _volumeUp2.default
            })
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Read value',
        content: [(0, _mithril2.default)('p', ctrl.sliderRead !== undefined ? 'Value is: ' + ctrl.sliderRead : 'Get value...'), (0, _mithril2.default)(_polythene.Slider, {
            min: 0,
            max: 100,
            value: ctrl.sliderRead,
            getValue: function getValue(value) {
                ctrl.sliderRead = value;
            }
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Small range, no step',
        content: [(0, _mithril2.default)('p', ctrl.sliderSmallRange !== undefined ? 'Value is: ' + ctrl.sliderSmallRange : 'Get value...'), (0, _mithril2.default)(_polythene.Slider, {
            min: 0,
            max: 1,
            step: 0,
            value: ctrl.sliderSmallRange,
            getValue: function getValue(value) {
                ctrl.sliderSmallRange = value;
            }
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Negative range, step=0.1',
        content: [(0, _mithril2.default)('p', ctrl.sliderNegative !== undefined ? 'Value is: ' + ctrl.sliderNegative : 'Get value...'), (0, _mithril2.default)(_polythene.Slider, {
            min: -1,
            max: 1,
            step: 0.1,
            value: ctrl.sliderNegative,
            getValue: function getValue(value) {
                ctrl.sliderNegative = value;
            }
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Use left value for extra "unspecified value" step',
        content: [(0, _mithril2.default)('p', ctrl.sliderUnspecified !== undefined && ctrl.sliderUnspecified !== -1 ? 'Age: ' + ctrl.sliderUnspecified : 'Age (not set)'), (0, _mithril2.default)(_polythene.Slider, {
            min: -1,
            max: 100,
            value: -1,
            getValue: function getValue(value) {
                return ctrl.sliderUnspecified = value;
            }
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: default slider',
        class: 'pe-dark-theme',
        content: [(0, _mithril2.default)(_polythene.Slider)]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: ticks',
        class: 'pe-dark-theme',
        content: [(0, _mithril2.default)(_polythene.Slider, {
            min: 0,
            max: 100,
            step: 10,
            ticks: true
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: ticks with pin',
        class: 'pe-dark-theme has-pins',
        content: [(0, _mithril2.default)(_polythene.Slider, {
            min: 0,
            max: 100,
            step: 10,
            ticks: true,
            pin: true
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: with icons',
        class: 'icons pe-dark-theme',
        content: (0, _mithril2.default)(_sliderVolume2.default)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Disabled (value)',
        content: [(0, _mithril2.default)(_polythene.Slider, {
            min: 0,
            max: 100,
            value: 50,
            disabled: true
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Disabled (zero)',
        content: [(0, _mithril2.default)(_polythene.Slider, {
            min: 0,
            max: 100,
            value: 0,
            disabled: true
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Disabled ticks',
        content: [(0, _mithril2.default)(_polythene.Slider, {
            min: 0,
            max: 100,
            step: 10,
            value: 50,
            ticks: true,
            disabled: true
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: disabled',
        class: 'pe-dark-theme',
        content: [(0, _mithril2.default)(_polythene.Slider, {
            min: 0,
            max: 100,
            value: 50,
            disabled: true
        })]
    })]);
};

exports.default = _module;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var baselineSize = '120px';

var styles = [{
    '.example-speed-test': {
        ' .click-time': {
            margin: '0 0 20px 0'
        },
        ' .baseline': {
            height: baselineSize,
            'line-height': baselineSize,
            width: baselineSize,
            'text-align': 'center',
            background: '#fff'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _speedTestStyle = __webpack_require__(136);

var _speedTestStyle2 = _interopRequireDefault(_speedTestStyle);

var _heart = __webpack_require__(8);

var _heart2 = _interopRequireDefault(_heart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-speed-test', _speedTestStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', {
            class: args.class
        }, [(0, _mithril2.default)('.p-block-header', args.title), args.content ? args.content : null]);
    }
};

var clickTime = function clickTime(ctrl, id) {
    return (0, _mithril2.default)('.click-time', 'Click Time: ' + (ctrl.clickTimes[id] !== undefined ? ctrl.clickTimes[id] + 'ms' : '...'));
};

var startType = window.PointerEvent ? 'pointerdown' : 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch ? 'touchstart' : 'mousedown';
var endType = window.PointerEvent ? 'pointerup' : 'ontouchend' in window || window.DocumentTouch && document instanceof DocumentTouch ? 'touchend' : 'mouseup';

var _config = function _config(ctrl, id, el, inited, context) {
    if (inited) return;
    el.style['touch-action'] = 'none';
    var setStartClick = function setStartClick() {
        return ctrl.setStartClick(id);
    };
    var setEndClick = function setEndClick() {
        return ctrl.setEndClick(id);
    };
    el.addEventListener(startType, setStartClick);
    el.addEventListener(endType, setEndClick);
    context.onunload = function () {
        el.removeEventListener(startType, setStartClick);
        el.removeEventListener(endType, setEndClick);
    };
};

var _module = {};
_module.controller = function () {
    var startTimes = {};
    var clickTimes = {};

    var setStartClick = function setStartClick(id) {
        startTimes[id] = Date.now();
    };
    var setEndClick = function setEndClick(id) {
        clickTimes[id] = Date.now() - startTimes[id];
        _mithril2.default.redraw();
    };

    return {
        clickTimes: clickTimes,
        setStartClick: setStartClick,
        setEndClick: setEndClick,
        checkboxChecked: _mithril2.default.prop(false)
    };
};
_module.view = function (ctrl) {
    return (0, _mithril2.default)('.example-speed-test', [(0, _mithril2.default)('.p-block.p-block-info', (0, _mithril2.default)('p', ['Using Fastclick (installed in this app).'])), (0, _mithril2.default)(titleBlock, {
        title: 'Baseline div',
        content: [clickTime(ctrl, 'div'), (0, _mithril2.default)('.baseline', {
            style: {
                cursor: 'pointer',
                'touch-action': 'none',
                '-ms-touch-action': 'none'
            },
            config: function config(el, inited, context) {
                return _config(ctrl, 'div', el, inited, context);
            }
        }, 'Click')]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Button',
        content: [clickTime(ctrl, 'button'), (0, _mithril2.default)('.button-row', (0, _mithril2.default)(_polythene.Button, {
            config: function config(el, inited, context) {
                return _config(ctrl, 'button', el, inited, context);
            },
            label: 'Click',
            raised: true
        }))]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Icon button',
        content: [clickTime(ctrl, 'icon-button'), (0, _mithril2.default)(_polythene.IconButton, {
            icon: {
                msvg: _heart2.default
            },
            config: function config(el, inited, context) {
                return _config(ctrl, 'icon-button', el, inited, context);
            }
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Checkbox (' + (ctrl.checkboxChecked() ? 'checked' : 'unchecked') + ')',
        content: [clickTime(ctrl, 'checkbox'), (0, _mithril2.default)('div', (0, _mithril2.default)(_polythene.Checkbox, {
            config: function config(el, inited, context) {
                return _config(ctrl, 'checkbox', el, inited, context);
            },
            checked: ctrl.checkboxChecked(),
            getState: function getState(state) {
                return ctrl.checkboxChecked(state.checked);
            },
            label: 'Click'
        }))]
    })]);
};

exports.default = _module;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var purpleStr = '156, 39, 176';
var redStr = '255, 0, 0';
var yellow = '#fdd835';
var green = '#4caf50';

var styles = [{
    '.module-spinner': {
        ' .pe-button + .pe-spinner': {
            'margin-top': '20px'
        },
        ' .row .pe-spinner': {
            margin: '20px 20px 0 0'
        },
        ' .colors': {
            // ' .pe-spinner': {
            //     margin: '0 20px 0 0'
            // },
            ' .pe-spinner.custom-color ': {
                color: 'rgb(' + purpleStr + ')'
            },
            ' .pe-spinner--ios.custom-color-1 ': {
                color: 'rgb(' + purpleStr + ')'
            },
            ' .pe-spinner--ios.custom-color-2 ': {
                color: 'rgb(' + redStr + ')'
            },
            ' .pe-spinner--ios.custom-color-3 ': {
                color: yellow
            },
            ' .pe-spinner--ios.custom-color-4 ': {
                color: green
            }
        },
        ' .toggle': {
            ' .pe-spinner': {
                'margin-left': '30px',
                'margin-top': '4px'
            }
        },
        ' .pe-slider__track': {
            width: '204px'
        },
        ' .raised': {
            ' .pe-spinner': {
                color: '#aaa'
            }
        },
        ' .sizes': {
            ' .pe-spinner + .pe-spinner': {
                'margin-top': '20px'
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _spinnerStyle = __webpack_require__(138);

var _spinnerStyle2 = _interopRequireDefault(_spinnerStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-spinner', _spinnerStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', { class: args.class || '' }, [(0, _mithril2.default)('.p-block-header', args.title), args.content]);
    }
};

var _module = {};
_module.controller = function () {
    var percentage = _mithril2.default.prop(0);
    var STEP_DURATION = 2000;

    var start = null;
    var resetStep = function resetStep() {
        start = null;
    };
    var step = function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        percentage(1.0 / STEP_DURATION * progress);
        _mithril2.default.redraw();
        if (progress < STEP_DURATION) {
            window.requestAnimationFrame(step);
        }
    };

    return {
        indeterminateVisible: true,
        delayVisible: false,
        iosVisible: false,
        colorsVisible: false,
        raisedVisible: false,
        sizesVisible: false,
        iosColorsVisible: false,
        iosSizesVisible: false,
        darkIndeterminateVisible: false,
        darkRaisedVisible: false,
        darkIndeterminateColorVisible: false,
        darkIosVisible: false,
        percentage: percentage,
        animPercentage: _mithril2.default.prop(0),
        step: step,
        resetStep: resetStep
    };
};
_module.view = function (ctrl) {
    return (0, _mithril2.default)('.module-spinner', [(0, _mithril2.default)('.p-block.p-block-info', (0, _mithril2.default)('p', _mithril2.default.trust('For performance reasons not all spinners are shown simultaneously.'))), (0, _mithril2.default)(titleBlock, {
        title: 'Indeterminate spinner',
        content: [(0, _mithril2.default)(_polythene.Button, {
            label: 'Toggle',
            raised: true,
            events: {
                onclick: function onclick() {
                    return ctrl.indeterminateVisible = !ctrl.indeterminateVisible;
                }
            }
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            show: ctrl.indeterminateVisible
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Delayed spinner',
        content: [(0, _mithril2.default)(_polythene.Button, {
            label: 'Toggle',
            raised: true,
            events: {
                onclick: function onclick() {
                    return ctrl.delayVisible = !ctrl.delayVisible;
                }
            }
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            show: ctrl.delayVisible ? 1 : false
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Determinate spinner',
        content: (0, _mithril2.default)('.slider-control', [(0, _mithril2.default)(_polythene.Slider, {
            class: 'layout horizontal',
            min: 0,
            max: 1,
            step: 0,
            value: ctrl.percentage,
            getValue: ctrl.percentage,
            after: (0, _mithril2.default)(_polythene.DeterminateSpinner, {
                class: 'self-center',
                singleColor: true,
                percentage: ctrl.percentage,
                show: true
            })
        }), (0, _mithril2.default)(_polythene.Button, {
            label: 'Run',
            raised: true,
            events: {
                onclick: function onclick() {
                    return ctrl.resetStep(), window.requestAnimationFrame(ctrl.step);
                }
            }
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Determinate spinner, animated steps',
        content: (0, _mithril2.default)('.slider-control', [(0, _mithril2.default)(_polythene.Slider, {
            class: 'layout horizontal',
            min: 0,
            max: 1,
            step: 0,
            value: ctrl.animPercentage,
            getValue: ctrl.animPercentage,
            after: (0, _mithril2.default)(_polythene.DeterminateSpinner, {
                class: 'self-center',
                singleColor: true,
                percentage: ctrl.animPercentage,
                show: true,
                animated: true,
                updateDuration: 1.0
            })
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'iOS spinner',
        content: [(0, _mithril2.default)(_polythene.Button, {
            label: 'Toggle',
            raised: true,
            events: {
                onclick: function onclick() {
                    return ctrl.iosVisible = !ctrl.iosVisible;
                }
            }
        }), (0, _mithril2.default)(_polythene.IOSSpinner, {
            show: ctrl.iosVisible
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Indeterminate spinner: single color and custom color',
        class: 'colors',
        content: [(0, _mithril2.default)(_polythene.Button, {
            label: 'Toggle',
            raised: true,
            events: {
                onclick: function onclick() {
                    return ctrl.colorsVisible = !ctrl.colorsVisible;
                }
            }
        }), (0, _mithril2.default)('.row.layout.horizontal', [(0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            show: ctrl.colorsVisible,
            singleColor: true
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            show: ctrl.colorsVisible,
            class: 'custom-color',
            singleColor: true
        })])]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Sizes',
        class: 'sizes',
        content: [(0, _mithril2.default)(_polythene.Button, {
            label: 'Toggle',
            raised: true,
            events: {
                onclick: function onclick() {
                    return ctrl.sizesVisible = !ctrl.sizesVisible;
                }
            }
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            show: ctrl.sizesVisible,
            type: 'small'
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            show: ctrl.sizesVisible,
            type: 'regular'
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            show: ctrl.sizesVisible,
            type: 'medium'
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            show: ctrl.sizesVisible,
            type: 'large'
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            show: ctrl.sizesVisible,
            type: 'fab'
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Raised',
        class: 'raised sizes',
        content: [(0, _mithril2.default)(_polythene.Button, {
            label: 'Toggle',
            raised: true,
            events: {
                onclick: function onclick() {
                    return ctrl.raisedVisible = !ctrl.raisedVisible;
                }
            }
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            raised: true,
            type: 'small',
            singleColor: true,
            show: ctrl.raisedVisible
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            raised: true,
            type: 'regular',
            singleColor: true,
            show: ctrl.raisedVisible
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            raised: true,
            type: 'medium',
            singleColor: true,
            show: ctrl.raisedVisible
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            raised: true,
            type: 'large',
            singleColor: true,
            show: ctrl.raisedVisible
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            raised: true,
            type: 'fab',
            singleColor: true,
            show: ctrl.raisedVisible
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'iOS spinner: custom color',
        class: 'colors',
        content: [(0, _mithril2.default)(_polythene.Button, {
            label: 'Toggle',
            raised: true,
            events: {
                onclick: function onclick() {
                    return ctrl.iosColorsVisible = !ctrl.iosColorsVisible;
                }
            }
        }), (0, _mithril2.default)('.row.layout.horizontal', [(0, _mithril2.default)(_polythene.IOSSpinner, {
            class: 'custom-color-1',
            show: ctrl.iosColorsVisible
        }), (0, _mithril2.default)(_polythene.IOSSpinner, {
            class: 'custom-color-2',
            show: ctrl.iosColorsVisible
        })])]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'iOS spinner: sizes',
        class: 'sizes',
        content: [(0, _mithril2.default)(_polythene.Button, {
            label: 'Toggle',
            raised: true,
            events: {
                onclick: function onclick() {
                    return ctrl.iosSizesVisible = !ctrl.iosSizesVisible;
                }
            }
        }), (0, _mithril2.default)(_polythene.IOSSpinner, {
            show: ctrl.iosSizesVisible,
            type: 'small'
        }), (0, _mithril2.default)(_polythene.IOSSpinner, {
            show: ctrl.iosSizesVisible,
            type: 'regular'
        }), (0, _mithril2.default)(_polythene.IOSSpinner, {
            show: ctrl.iosSizesVisible,
            type: 'medium'
        }), (0, _mithril2.default)(_polythene.IOSSpinner, {
            show: ctrl.iosSizesVisible,
            type: 'large'
        }), (0, _mithril2.default)(_polythene.IOSSpinner, {
            show: ctrl.iosSizesVisible,
            type: 'fab'
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: indeterminate spinner',
        class: 'pe-dark-theme',
        content: [(0, _mithril2.default)(_polythene.Button, {
            label: 'Toggle',
            raised: true,
            events: {
                onclick: function onclick() {
                    return ctrl.darkIndeterminateVisible = !ctrl.darkIndeterminateVisible;
                }
            }
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            show: ctrl.darkIndeterminateVisible
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: raised indeterminate spinner',
        class: 'pe-dark-theme floating',
        content: [(0, _mithril2.default)(_polythene.Button, {
            label: 'Toggle',
            raised: true,
            events: {
                onclick: function onclick() {
                    return ctrl.darkRaisedVisible = !ctrl.darkRaisedVisible;
                }
            }
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            raised: true,
            show: ctrl.darkRaisedVisible
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: indeterminate spinner, normal and colored',
        class: 'pe-dark-theme colors',
        content: [(0, _mithril2.default)(_polythene.Button, {
            label: 'Toggle',
            raised: true,
            events: {
                onclick: function onclick() {
                    return ctrl.darkIndeterminateColorVisible = !ctrl.darkIndeterminateColorVisible;
                }
            }
        }), (0, _mithril2.default)('.row.layout.horizontal', [(0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            show: ctrl.darkIndeterminateColorVisible
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            singleColor: true,
            show: ctrl.darkIndeterminateColorVisible
        }), (0, _mithril2.default)(_polythene.IndeterminateSpinner, {
            class: 'custom-color',
            singleColor: true,
            show: ctrl.darkIndeterminateColorVisible
        })])]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: iOS spinner, normal and colored',
        class: 'pe-dark-theme colors',
        content: [(0, _mithril2.default)(_polythene.Button, {
            label: 'Toggle',
            raised: true,
            events: {
                onclick: function onclick() {
                    return ctrl.darkIosVisible = !ctrl.darkIosVisible;
                }
            }
        }), (0, _mithril2.default)('.row.layout.horizontal', [(0, _mithril2.default)(_polythene.IOSSpinner, {
            show: ctrl.darkIosVisible
        }), (0, _mithril2.default)(_polythene.IOSSpinner, {
            class: 'custom-color-3',
            show: ctrl.darkIosVisible
        }), (0, _mithril2.default)(_polythene.IOSSpinner, {
            class: 'custom-color-4',
            show: ctrl.darkIosVisible
        })])]
    })]);
};

_module.updateContentOnScroll = false;

exports.default = _module;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.module-svg': {
        ' .demo-icons': {
            'font-size': 0,
            'line-height': 0,
            height: '30px'
        },

        ' .demo-icon': {
            display: 'inline-block',
            'font-size': '1rem',
            color: _commonVars2.default.attentionColor,

            '& + &': {
                margin: '0 0 0 10px'
            }
        },

        ' .p-block': {
            ' .demo-svg': {
                display: 'inline-block',
                'vertical-align': 'middle',
                fill: 'currentcolor',

                '& + span': {
                    'margin-left': '5px'
                },

                ' svg': {
                    width: '24px',
                    height: '24px'
                },

                ' path:not([fill="none"])': {
                    fill: 'currentcolor'
                }
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _svgStyle = __webpack_require__(140);

var _svgStyle2 = _interopRequireDefault(_svgStyle);

var _stars = __webpack_require__(22);

var _stars2 = _interopRequireDefault(_stars);

var _group = __webpack_require__(28);

var _group2 = _interopRequireDefault(_group);

var _chatBubble = __webpack_require__(25);

var _chatBubble2 = _interopRequireDefault(_chatBubble);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-svg', _svgStyle2.default);

var ICON_FOLDER = '../assets/svg/mmsvg-google-content/';
var LOADER_EXTENSION = '!text';

var block = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.demo-icon', [args.svg ? (0, _mithril2.default)(_polythene.SVG, args.svg) : null, args.icon ? (0, _mithril2.default)(_polythene.Icon, args.icon) : null, (0, _mithril2.default)('span', args.label)]);
    }
};

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', [(0, _mithril2.default)('.p-block-header', args.title), args.info ? args.info : null, (0, _mithril2.default)('.demo-icons', args.content)]);
    }
};

var dynamic = {
    controller: function controller() {
        var icons = ['add-box.svg', 'add-circle-outline.svg', 'add-circle.svg', 'add.svg', 'archive.svg', 'backspace.svg', 'block.svg', 'clear.svg', 'content-copy.svg', 'content-cut.svg', 'content-paste.svg', 'create.svg', 'drafts.svg', 'filter-list.svg', 'flag.svg', 'font-download.svg', 'forward.svg', 'gesture.svg', 'inbox.svg', 'link.svg', 'mail.svg', 'markunread.svg', 'redo.svg', 'remove-circle-outline.svg', 'remove-circle.svg', 'remove.svg', 'reply-all.svg', 'reply.svg', 'report.svg', 'save.svg', 'select-all.svg', 'send.svg', 'sort.svg', 'text-format.svg', 'undo.svg'];
        var getIcon = function getIcon() {
            return icons[Math.floor(Math.random() * icons.length)];
        };
        var icon = _mithril2.default.prop(getIcon());

        return {
            icon: icon,
            icons: icons,
            refreshIcon: function refreshIcon() {
                icon(getIcon());
            }
        };
    },
    view: function view(ctrl) {
        var icon = ctrl.icon();

        return (0, _mithril2.default)(titleBlock, {
            title: 'Dynamic loading from a set of .svg files',
            info: (0, _mithril2.default)('p', (0, _mithril2.default)(_polythene.Button, {
                label: 'Refresh',
                raised: 1,
                events: {
                    onclick: function onclick(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        ctrl.refreshIcon();
                        _mithril2.default.redraw();
                    }
                }
            })),
            content: [(0, _mithril2.default)(block, {
                svg: {
                    key: icon,
                    src: ICON_FOLDER + icon + LOADER_EXTENSION,
                    preload: ctrl.icons.map(function (name) {
                        return ICON_FOLDER + name + LOADER_EXTENSION;
                    }),
                    class: 'demo-svg mdi'
                }
            })]
        });
    }
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-svg', (0, _mithril2.default)(titleBlock, {
        title: 'Using msvg files',
        info: (0, _mithril2.default)('p', [_mithril2.default.trust('See '), (0, _mithril2.default)('a', { href: '/icon', config: _mithril2.default.route }, 'Icon'), _mithril2.default.trust(' for info about msvg.')]),
        content: [(0, _mithril2.default)(block, {
            svg: {
                content: _stars2.default,
                class: 'demo-svg md'
            }
        }), (0, _mithril2.default)(block, {
            svg: {
                content: _group2.default,
                class: 'demo-svg md'
            }
        }), (0, _mithril2.default)(block, {
            svg: {
                content: _chatBubble2.default,
                class: 'demo-svg md'
            }
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Using SVG XML',
        content: [(0, _mithril2.default)(block, {
            svg: {
                content: _mithril2.default.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>'),
                class: 'demo-svg md'
            }
        }), (0, _mithril2.default)(block, {
            svg: {
                content: _mithril2.default.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>'),
                class: 'demo-svg md'
            }
        }), (0, _mithril2.default)(block, {
            svg: {
                content: _mithril2.default.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>'),
                class: 'demo-svg md'
            }
        })]
    })
    /*
            m(titleBlock, {
                title: 'Dynamic loading of .svg files',
                info: m('p',
                    m.trust('Using SystemJS module loader.')
                ),
                content: [
                    m(block, {
                        svg: {
                            src: ICON_FOLDER + 'add.svg' + LOADER_EXTENSION,
                            class: 'demo-svg md'
                        }
                    }),
                    m(block, {
                        svg: {
                            src: ICON_FOLDER + 'filter-list.svg' + LOADER_EXTENSION,
                            class: 'demo-svg md'
                        }
                    }),
                    m(block, {
                        svg: {
                            src: ICON_FOLDER + 'backspace.svg' + LOADER_EXTENSION,
                            class: 'demo-svg md'
                        }
                    })
                ]
            }),
    
            dynamic,
    
            m(titleBlock, {
                title: 'Usage with Icon',
                info: m('p', [
                    m.trust('SVG as param for '),
                    m('a', {href: '/icon', config: m.route}, 'Icon'),
                    m.trust('.')
                ]),
                content: [
                    m(block, {
                        icon: {
                            svg: {
                                src: ICON_FOLDER + 'add.svg' + LOADER_EXTENSION
                            }
                        }
                    }),
                    m(block, {
                        icon: {
                            svg: {
                                src: ICON_FOLDER + 'filter-list.svg' + LOADER_EXTENSION
                            }
                        }
                    }),
                    m(block, {
                        icon: {
                            svg: {
                                src: ICON_FOLDER + 'backspace.svg' + LOADER_EXTENSION
                            }
                        }
                    })
                ]
            })
    */
    );
};

exports.default = _module;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var customThumbColor = '#fc4482';
var neutralStr = '100, 100, 100';
var purpleStr = '156, 39, 176';

var styles = [{
    '.module-switch': {
        ' .pe-dark-theme': {
            'background-color': _commonVars2.default.darkThemeBackgroundColor
        },
        ' .custom-color': {
            ' .pe-control--switch__track': {
                'background-color': '#fd8b83'
            },
            ' .pe-control--off .pe-control--switch__thumb': {
                color: '#fff'
            },
            ' .pe-control--on .pe-control--switch__thumb': {
                color: customThumbColor
            },
            ' .pe-control--on .pe-button--focus .pe-button__focus': {
                'background-color': customThumbColor
            }
        },
        ' .pe-control--switch': {
            'margin-right': '32px'
        },
        ' .row + .row': {
            'margin-top': '20px'
        },
        ' .custom-icon': {
            ' .pe-control--off': {
                ' .pe-control--switch__track': {
                    'background-color': '#aaa'
                },
                ' .pe-control--switch__thumb': {
                    color: '#fff'
                },
                ' .pe-icon': {
                    color: 'rgb(' + neutralStr + ')'
                }
            },
            ' .pe-control--on': {
                ' .pe-control--switch__track': {
                    'background-color': '#ba83fd'
                },
                ' .pe-control--switch__thumb': {
                    color: '#fff'
                },
                ' .pe-icon': {
                    color: 'rgb(' + purpleStr + ')'
                }
            },
            ' .pe-control--on .pe-button--focus .pe-button__focus': {
                'background-color': 'rgb(' + purpleStr + ')'
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _switchStyle = __webpack_require__(142);

var _switchStyle2 = _interopRequireDefault(_switchStyle);

var _bullseye = __webpack_require__(14);

var _bullseye2 = _interopRequireDefault(_bullseye);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-switch', _switchStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', { class: args.class || '' }, [(0, _mithril2.default)('.p-block-header', args.title), args.info ? args.info : null, args.content]);
    }
};

var _module = {};
_module.controller = function () {
    return {
        switchState: _mithril2.default.prop(false),
        switchListenerState: _mithril2.default.prop(false)
    };
};
_module.view = function (ctrl) {
    return (0, _mithril2.default)('.module-switch', [(0, _mithril2.default)('.p-block.p-block-info', [(0, _mithril2.default)('p', [(0, _mithril2.default)('span', 'See also '), (0, _mithril2.default)('a', {
        href: '/checkbox',
        config: _mithril2.default.route
    }, 'Checkbox'), (0, _mithril2.default)('span', ' and '), (0, _mithril2.default)('a', {
        href: '/radio-button',
        config: _mithril2.default.route
    }, 'Radio button'), (0, _mithril2.default)('span', '.')]), (0, _mithril2.default)('p', ['On desktop, TAB can be used to give focus, ENTER to select.'])]), (0, _mithril2.default)(titleBlock, {
        title: 'Default switch',
        content: (0, _mithril2.default)('.row', [(0, _mithril2.default)(_polythene.Switch)])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'With label',
        content: [(0, _mithril2.default)(_polythene.Switch, {
            label: 'Switch'
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom color',
        class: 'custom-color',
        content: [(0, _mithril2.default)(_polythene.Switch)]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom icon',
        class: 'custom-icon',
        content: [(0, _mithril2.default)(_polythene.Switch, {
            icon: (0, _mithril2.default)(_polythene.Icon, {
                msvg: _bullseye2.default
            })
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'No shadow, custom color',
        class: 'custom-color',
        content: (0, _mithril2.default)('.row', [(0, _mithril2.default)(_polythene.Switch, {
            raised: false,
            wash: false
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom shadow depth',
        info: (0, _mithril2.default)('p', 'Starting at depth 0.'),
        class: 'custom-color',
        content: (0, _mithril2.default)('.row', [(0, _mithril2.default)(_polythene.Switch, {
            zOff: 0,
            zOn: 1
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom size',
        content: ['large', 'medium', 'regular', 'small'].map(function (size) {
            var sizeStr = size.toString();
            return (0, _mithril2.default)('.row', [(0, _mithril2.default)(_polythene.Switch, {
                label: sizeStr.charAt(0).toUpperCase() + sizeStr.slice(1),
                size: size
            })]);
        })
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Checked state: ' + ctrl.switchState(),
        content: [(0, _mithril2.default)(_polythene.Switch, {
            checked: ctrl.switchState,
            getState: function getState(state) {
                return ctrl.switchState(state.checked);
            }
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Setting the value from outside',
        content: [(0, _mithril2.default)(_polythene.Switch, {
            label: 'Initiator',
            getState: function getState(state) {
                return ctrl.switchListenerState(state.checked);
            }
        }), (0, _mithril2.default)(_polythene.Switch, {
            label: 'Result',
            disabled: true,
            checked: ctrl.switchListenerState
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Disabled',
        content: [(0, _mithril2.default)(_polythene.Switch, {
            label: 'Off',
            disabled: true
        }), (0, _mithril2.default)(_polythene.Switch, {
            label: 'On',
            disabled: true,
            checked: true
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme',
        class: 'pe-dark-theme',
        content: [(0, _mithril2.default)(_polythene.Switch, {
            label: 'Switch'
        }), (0, _mithril2.default)(_polythene.Switch, {
            label: 'Switch',
            checked: true
        })]
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: disabled',
        class: 'pe-dark-theme',
        content: [(0, _mithril2.default)(_polythene.Switch, {
            label: 'Off',
            disabled: true
        }), (0, _mithril2.default)(_polythene.Switch, {
            label: 'On',
            disabled: true,
            checked: true
        })]
    })]);
};

exports.default = _module;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Style: Use tabs-routing-style

var TABS = [{
    id: 'new',
    label: 'New'
}, {
    id: 'favourites',
    label: 'Favourites'
}, {
    id: 'saved',
    label: 'Saved'
}];

var tabNavigation = function tabNavigation(currentTabFn) {
    return (0, _mithril2.default)('.nav-header', (0, _mithril2.default)(_polythene.Tabs, {
        buttons: TABS,
        autofit: true,
        selectedTab: currentTabFn(),
        activeSelected: true,
        getState: function getState(state) {
            currentTabFn(state.index);
        }
    }));
};

var _module = {};
_module.controller = function () {
    return {
        currentTab: _mithril2.default.prop(0)
    };
};
_module.view = function (ctrl) {
    var currentTabIndex = ctrl.currentTab();
    var nextTabIndex = (currentTabIndex + 1) % TABS.length;
    return (0, _mithril2.default)('.module-tabs.tabs-routing', [tabNavigation(ctrl.currentTab), (0, _mithril2.default)('.tab-content.layout.center-center', (0, _mithril2.default)('h1', TABS[currentTabIndex].label)),
    // For the fun of it, let the Next button also use events instead of url
    (0, _mithril2.default)('.layout.center-center', (0, _mithril2.default)(_polythene.Button, {
        class: 'next',
        label: 'Next: ' + TABS[nextTabIndex].label,
        raised: true,
        events: {
            onclick: function onclick() {
                return ctrl.currentTab(nextTabIndex);
            }
        }
    }))]);
};
_module.isSub = true;
_module.back = '/tabs';
_module.title = 'Tabs with events';

exports.default = _module;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var accentColor = '#ff9800';
var toolbarBackgroundColor = '#00BCD4';
var toolbarAccentColor = '#FFFF8D';

var styles = [{
    '.module-tabs.tabs-kitchensink': {
        ' .custom-color': {
            ' .pe-tabs__tab.pe-button--selected': {
                color: accentColor
            },
            ' .pe-tabs__indicator': {
                'background-color': accentColor
            }
        },
        ' .pe-tabs.pe-dark-theme': {
            'background-color': _commonVars2.default.darkThemeBackgroundColor,
            color: '#fff'
        },

        ' .tabArea': {
            'background-color': '#FAFAFA',

            '&.small': {
                'max-width': _commonVars2.default.listWidth + 'px'
            },

            '&.hasToolbar': {
                ' .demo-tabs': {
                    'border-bottom': 0
                }
            }
        },

        ' .demo-tabs.small': {
            'max-width': _commonVars2.default.listWidth + 'px'
        },

        ' .demo-tabs.fixedWidth': {
            '&.pe-tabs:not(.pe-tabs--small) .pe-tabs__tab': {
                'min-width': '100px'
            }
        },

        ' .p-block .pe-toolbar': {
            background: toolbarBackgroundColor,
            color: '#fff',

            ' .pe-button--icon': {
                color: '#fff'
            },
            ' .pe-tabs__tab.pe-button--selected': {
                color: '#fff'
            },
            ' .pe-tabs__indicator': {
                'background-color': toolbarAccentColor
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _tabsKitchensinkStyle = __webpack_require__(145);

var _tabsKitchensinkStyle2 = _interopRequireDefault(_tabsKitchensinkStyle);

var _heart = __webpack_require__(8);

var _heart2 = _interopRequireDefault(_heart);

var _bell = __webpack_require__(31);

var _bell2 = _interopRequireDefault(_bell);

var _settings = __webpack_require__(34);

var _settings2 = _interopRequireDefault(_settings);

var _menu = __webpack_require__(11);

var _menu2 = _interopRequireDefault(_menu);

var _search = __webpack_require__(9);

var _search2 = _interopRequireDefault(_search);

var _moreVert = __webpack_require__(12);

var _moreVert2 = _interopRequireDefault(_moreVert);

var _arrowBack = __webpack_require__(10);

var _arrowBack2 = _interopRequireDefault(_arrowBack);

var _arrowForward = __webpack_require__(180);

var _arrowForward2 = _interopRequireDefault(_arrowForward);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-tabs', _tabsKitchensinkStyle2.default);

var threeButtons = [{
    label: 'New'
}, {
    label: 'My Favorites'
}, {
    label: 'Saved'
}];

var iconButtons = [{
    icon: {
        msvg: _heart2.default
    }
}, {
    icon: {
        msvg: _bell2.default
    }
}, {
    icon: {
        msvg: _settings2.default
    }
}];

var iconTextButtons = [{
    icon: {
        msvg: _heart2.default
    },
    label: 'Favs'
}, {
    icon: {
        msvg: _bell2.default
    },
    label: 'Notifs'
}, {
    icon: {
        msvg: _settings2.default
    },
    label: 'Custom'
}];

var longLabels = [{
    label: 'New'
}, {
    label: 'A very long label that does not fit'
}, {
    label: 'Saved'
}];

var longList = [{
    label: 'Web'
}, {
    label: 'Shopping'
}, {
    label: 'Videos'
}, {
    label: 'Images'
}, {
    label: 'Books'
}, {
    label: 'More'
}];

var btn = function btn(msvg) {
    return (0, _mithril2.default)(_polythene.IconButton, {
        icon: {
            msvg: msvg
        }
    });
};

var toolbarRow = [btn(_menu2.default), (0, _mithril2.default)('span.flex', 'Page title'), btn(_search2.default), btn(_moreVert2.default)];

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', { class: args.class || '' }, [(0, _mithril2.default)('.p-block-header', args.title), args.info ? (0, _mithril2.default)('p', args.info) : null, args.content]);
    }
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-tabs.tabs-kitchensink', [(0, _mithril2.default)(titleBlock, {
        title: 'Autofit',
        content: (0, _mithril2.default)('.tabArea', (0, _mithril2.default)(_polythene.Tabs, {
            class: 'demo-tabs',
            buttons: threeButtons,
            autofit: true
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Default (no autofit)',
        content: (0, _mithril2.default)('.tabArea', (0, _mithril2.default)(_polythene.Tabs, {
            class: 'demo-tabs',
            buttons: threeButtons
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Centered (auto width)',
        content: (0, _mithril2.default)('.tabArea', (0, _mithril2.default)(_polythene.Tabs, {
            class: 'demo-tabs',
            buttons: threeButtons,
            centered: true,
            autofit: false
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Centered (largest tab width)',
        content: (0, _mithril2.default)('.tabArea', (0, _mithril2.default)(_polythene.Tabs, {
            class: 'demo-tabs',
            buttons: threeButtons,
            centered: true,
            largestWidth: true
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Centered (fixed width in CSS)',
        content: (0, _mithril2.default)('.tabArea', (0, _mithril2.default)(_polythene.Tabs, {
            class: 'demo-tabs fixedWidth',
            buttons: threeButtons,
            centered: true
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Preselected tab',
        content: (0, _mithril2.default)('.tabArea', (0, _mithril2.default)(_polythene.Tabs, {
            class: 'demo-tabs',
            buttons: threeButtons,
            autofit: true,
            selectedTab: 1
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom color',
        class: 'custom-color',
        content: (0, _mithril2.default)('.tabArea', (0, _mithril2.default)(_polythene.Tabs, {
            class: 'demo-tabs',
            buttons: threeButtons,
            autofit: true
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'In toolbar',
        content: (0, _mithril2.default)('.tabArea.hasToolbar', (0, _mithril2.default)(_polythene.Toolbar, {
            mode: 'medium-tall',
            class: 'pe-toolbar--tabs',
            topBar: toolbarRow,
            bottomBar: (0, _mithril2.default)(_polythene.Tabs, {
                class: 'demo-tabs',
                buttons: threeButtons,
                autofit: true
            })
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'In toolbar and scrollable (small)',
        content: (0, _mithril2.default)('.tabArea.small.hasToolbar', (0, _mithril2.default)(_polythene.Toolbar, {
            mode: 'medium-tall',
            class: 'pe-toolbar--tabs',
            topBar: toolbarRow,
            bottomBar: (0, _mithril2.default)(_polythene.Tabs, {
                class: 'demo-tabs',
                buttons: longList,
                scrollable: true,
                small: true
            })
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'In toolbar and scrollable (desktop)',
        content: (0, _mithril2.default)('.tabArea.hasToolbar', (0, _mithril2.default)(_polythene.Toolbar, {
            mode: 'medium-tall',
            class: 'pe-toolbar--tabs',
            topBar: toolbarRow,
            bottomBar: (0, _mithril2.default)(_polythene.Tabs, {
                class: 'demo-tabs',
                buttons: longList,
                scrollable: true
            })
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom arrows',
        content: (0, _mithril2.default)('.tabArea.hasToolbar', (0, _mithril2.default)(_polythene.Toolbar, {
            mode: 'medium-tall',
            class: 'pe-toolbar--tabs',
            topBar: toolbarRow,
            bottomBar: (0, _mithril2.default)(_polythene.Tabs, {
                class: 'demo-tabs',
                buttons: longList,
                scrollable: true,
                scrollIconBackward: {
                    msvg: _arrowBack2.default
                },
                scrollIconForward: {
                    msvg: _arrowForward2.default
                }
            })
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Long label: wrap to second line',
        content: (0, _mithril2.default)('.tabArea.small', (0, _mithril2.default)(_polythene.Tabs, {
            class: 'demo-tabs',
            buttons: longLabels,
            autofit: true,
            small: true
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Hide indicator',
        content: (0, _mithril2.default)('.tabArea.small', (0, _mithril2.default)(_polythene.Tabs, {
            class: 'demo-tabs',
            buttons: threeButtons,
            autofit: true,
            hideIndicator: true,
            small: true
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'No indicator slide',
        content: (0, _mithril2.default)('.tabArea.small', (0, _mithril2.default)(_polythene.Tabs, {
            class: 'demo-tabs',
            buttons: threeButtons,
            autofit: true,
            noIndicatorSlide: true,
            small: true
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'No ink',
        content: (0, _mithril2.default)('.tabArea.small', (0, _mithril2.default)(_polythene.Tabs, {
            class: 'demo-tabs',
            buttons: threeButtons,
            autofit: true,
            tabsOpts: {
                ink: false
            },
            small: true
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Tabs with icons',
        content: (0, _mithril2.default)('.tabArea.small', (0, _mithril2.default)(_polythene.Tabs, {
            class: 'demo-tabs',
            buttons: iconButtons,
            autofit: true,
            small: true
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Tabs with icons (dark theme)',
        content: (0, _mithril2.default)('.tabArea.small', (0, _mithril2.default)(_polythene.Tabs, {
            class: 'pe-dark-theme demo-tabs',
            buttons: iconButtons,
            autofit: true,
            small: true
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Tabs with icons and text',
        content: (0, _mithril2.default)('.tabArea.small', (0, _mithril2.default)(_polythene.Tabs, {
            class: 'demo-tabs',
            buttons: iconTextButtons,
            autofit: true,
            small: true
        }))
    }

    /*
    m(titleBlock, {
        title: 'More button dropdown TODO',
        content: m('.tabArea.small',
            m(Tabs, {
                class: 'demo-tabs small',
                buttons: threeButtons,
                autofit: false,
                scrollable: true
            })
        )
    }),
    */

    )]);
};
_module.isSub = true;
_module.back = '/tabs';
_module.title = 'Tabs kitchen sink';

exports.default = _module;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _home = __webpack_require__(177);

var _home2 = _interopRequireDefault(_home);

var _heart = __webpack_require__(8);

var _heart2 = _interopRequireDefault(_heart);

var _bell = __webpack_require__(31);

var _bell2 = _interopRequireDefault(_bell);

var _settings = __webpack_require__(34);

var _settings2 = _interopRequireDefault(_settings);

var _search = __webpack_require__(9);

var _search2 = _interopRequireDefault(_search);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menu = [{
    label: 'Home',
    icon: {
        msvg: _home2.default
    },
    url: {
        href: '/tabs-menu',
        config: _mithril2.default.route
    }
}, {
    label: 'Search',
    icon: {
        msvg: _search2.default
    },
    url: {
        href: '/tabs-menu/search',
        config: _mithril2.default.route
    }
}, {
    label: 'Favs',
    icon: {
        msvg: _heart2.default
    },
    url: {
        href: '/tabs-menu/favorites',
        config: _mithril2.default.route
    }
}, {
    label: 'Notifs',
    icon: {
        msvg: _bell2.default
    },
    url: {
        href: '/tabs-menu/notifs',
        config: _mithril2.default.route
    }
}, {
    label: 'Settings',
    icon: {
        msvg: _settings2.default
    },
    url: {
        href: '/tabs-menu/settings',
        config: _mithril2.default.route
    }
}];

var menuNoTitle = menu.map(function (tab) {
    var copy = Object.assign({}, tab);
    copy.label = undefined;
    return copy;
});

var repeatText = function repeatText(text, count) {
    var out = '';
    while (count > 0) {
        out += text;
        count--;
    }
    return out;
};
var demoContent = repeatText('<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>', 16);

var indexForRoute = function indexForRoute(route) {
    return menu.reduce(function (previousValue, tab, index) {
        if (route === tab.url.href) {
            return index;
        } else {
            return previousValue;
        }
    }, 0);
};

var content = {};
content.view = function (ctrl, opts) {
    return (0, _mithril2.default)('.demo-content.flex', {
        config: function config(el) {
            if (opts.reset) {
                el.scrollTop = 0;
            }
        }
    }, [(0, _mithril2.default)('h1', opts.title), _mithril2.default.trust(demoContent)]);
};

var _module = {};
_module.controller = function () {
    _mithril2.default.redraw.strategy('diff');
    return {
        selectedTabIndex: -1,
        previousSelectedTab: -1
    };
};
_module.view = function (ctrl, opts) {
    var selectedTabIndex = indexForRoute(_mithril2.default.route());
    var resetContent = false;
    if (ctrl.selectedTabIndex !== selectedTabIndex) {
        ctrl.selectedTabIndex = selectedTabIndex;
        resetContent = true;
    }
    return (0, _mithril2.default)('.screen.layout.vertical', [(0, _mithril2.default)(content, {
        title: menu[selectedTabIndex].label,
        reset: resetContent
    }), (0, _mithril2.default)(_polythene.Tabs, {
        class: 'demo-tabs end',
        menu: true,
        buttons: opts.labels ? menu : menuNoTitle,
        autofit: true,
        hideIndicator: true,
        selectedTab: selectedTabIndex
    })]);
};

exports.default = _module;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var scale = .95;
var width = 320 * scale;
var height = 480 * scale;

var styles = [{
    '.module-tabs.tabs-menu': {
        ' .screen': {
            position: 'relative',
            width: width + 'px',
            height: height + 'px',
            background: '#fff',
            margin: '0 auto'
        },
        ' .demo-content': {
            padding: '16px',
            'overflow-x': 'hidden',
            'overflow-y': 'auto',

            ' h1': {
                'font-size': '20px',
                'line-heigth': '24px',
                margin: '8px 0 16px 0'
            }
        },
        ' .pe-tabs--menu': {
            width: width + 'px',
            'border-top': '1px solid #ddd',

            ' .pe-tabs__tab': {
                background: '#fff',
                ' .pe-icon': {
                    color: '#aaa'
                },
                ' .pe-button__label': {
                    color: '#777'
                },
                '&.pe-button--selected .pe-icon': {
                    color: '#FF1744'
                },
                '&.pe-button--selected .button__label': {
                    color: '#444'
                }
            }
        }
    }
}];

exports.default = styles;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var accentColor = '#00bcd4';

var styles = [{
    '.module-tabs.tabs-routing': {
        ' .nav-header': {
            'background-color': '#fff'
        },
        ' .pe-tabs': {
            'max-width': _commonVars2.default.blockMaxWidth + 'px',
            margin: '0 auto',

            ' .pe-tabs__tab.pe-button--selected': {
                color: accentColor
            },
            ' .pe-tabs__indicator': {
                'background-color': accentColor
            }
        },
        ' .tab-content': {
            padding: '16px',
            'min-height': '320px'
        },
        ' h1': {
            color: '#aaa',
            'font-size': '48px',
            'text-align': 'center'
        },
        ' .next': {
            margin: '0 auto',
            width: '200px'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _arrowRight = __webpack_require__(13);

var _arrowRight2 = _interopRequireDefault(_arrowRight);

var _tabsKitchensink = __webpack_require__(146);

var _tabsKitchensink2 = _interopRequireDefault(_tabsKitchensink);

var _tabsRouting = __webpack_require__(19);

var _tabsRouting2 = _interopRequireDefault(_tabsRouting);

var _tabsEvents = __webpack_require__(144);

var _tabsEvents2 = _interopRequireDefault(_tabsEvents);

var _tabsMenu = __webpack_require__(18);

var _tabsMenu2 = _interopRequireDefault(_tabsMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var links = [{
    label: 'Tabs variations',
    links: [{
        url: '/tabs/tabs-kitchensink',
        name: 'Tabs kitchen sink',
        module: _tabsKitchensink2.default
    }, {
        url: '/tabs/tabs-routing',
        name: 'Tabs with routing',
        module: _tabsRouting2.default
    }, {
        url: '/tabs/tabs-events',
        name: 'Click events instead of routing',
        module: _tabsEvents2.default
    }, {
        url: '/tabs/tabs-menu',
        name: 'Tabs as menu',
        module: _tabsMenu2.default
    }]
}];

var linkMap = {};
links.forEach(function (group) {
    group.links.forEach(function (linkData) {
        linkMap[linkData.url] = linkData;
    });
});

var item = function item(link) {
    return (0, _mithril2.default)(_polythene.ListTile, {
        title: link.name,
        front: (0, _mithril2.default)(_polythene.Icon, {
            type: 'medium',
            class: 'index-cirle-icon',
            msvg: _arrowRight2.default
        }),
        url: {
            href: link.url,
            config: _mithril2.default.route
        }
    });
};

var _module = {};
_module.controller = function () {
    _mithril2.default.redraw.strategy('diff');
};
_module.subview = function (path) {
    var linkData = linkMap[path];
    if (linkData) {
        var subModule = linkData.module;
        return subModule;
    }
    return _module;
};
_module.view = function () {
    return (0, _mithril2.default)('.index-list', links.map(function (linkGroup) {
        return (0, _mithril2.default)(_polythene.List, {
            header: {
                title: linkGroup.label,
                indent: true
            },
            tiles: linkGroup.links.map(function (link) {
                return item(link);
            }),
            hoverable: true
        });
    }));
};

exports.default = _module;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.module-textfield': {
        ' .form': {
            width: _commonVars2.default.listWidth + 'px',
            padding: '16px 24px',
            'background-color': '#fff'
        },
        ' .form.fullWidth': {
            width: '320px',
            padding: 0
        },
        ' .pe-textfield': {
            display: 'block'
        },
        ' .pe-dark-theme .form': {
            'background-color': _commonVars2.default.darkThemeBackgroundColor
        }
    }
}];

exports.default = styles;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _sliderRgb = __webpack_require__(17);

var _sliderRgb2 = _interopRequireDefault(_sliderRgb);

var _textfieldStyle = __webpack_require__(151);

var _textfieldStyle2 = _interopRequireDefault(_textfieldStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-textfield', _textfieldStyle2.default);

var ipsum = 'Lorem ipsum dolor sit amet, idque signiferumque at usu, eum recusabo aliquando id. Deleniti percipitur concludaturque eu eos. Vix elitr feugait ne. Mel agam integre eu, has minim aliquid salutandi eu. Est nusquam abhorreant ne. Ei wisi dicant eam, vix tota reque persequeris an. Quo in theophrastus reprehendunt, ius te graecis epicuri volutpat.';

var shortIpsum = 'Lorem ipsum dolor sit amet,';

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', {
            class: args.class || ''
        }, [(0, _mithril2.default)('.p-block-header', args.title), args.info ? args.info : null, args.content]);
    }
};

var _module = {};
_module.controller = function () {
    return {
        focusState: false
    };
};
_module.view = function (ctrl) {
    return (0, _mithril2.default)('.module-textfield', [(0, _mithril2.default)('.p-block.p-block-info', (0, _mithril2.default)('p', ['See text field in use at ', (0, _mithril2.default)('a', { href: '/search', config: _mithril2.default.route }, 'Search'), ' and ', (0, _mithril2.default)('a', { href: '/validation', config: _mithril2.default.route }, 'Validation'), '.'])), (0, _mithril2.default)(titleBlock, {
        title: 'Default text fields',
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            value: 'Some input with autofocus',
            autofocus: true
        }), (0, _mithril2.default)(_polythene.TextField, {
            value: 'Some input'
        }), (0, _mithril2.default)(_polythene.TextField, {
            value: 'Some input'
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Password, number, email',
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            type: 'password',
            value: 'Some input'
        }), (0, _mithril2.default)(_polythene.TextField, {
            type: 'number',
            value: '1234'
        }), (0, _mithril2.default)(_polythene.TextField, {
            type: 'email',
            value: 'a@b.com'
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Hint label',
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            label: 'Your name'
        }), (0, _mithril2.default)(_polythene.TextField, {
            label: 'Your email'
        }), (0, _mithril2.default)(_polythene.TextField, {
            label: 'Your address'
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Floating hint label',
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            label: 'Your name',
            floatingLabel: true
        }), (0, _mithril2.default)(_polythene.TextField, {
            label: 'Your email',
            floatingLabel: true
        }), (0, _mithril2.default)(_polythene.TextField, {
            label: 'Your address',
            floatingLabel: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dense floating hint label',
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            label: 'Your name',
            floatingLabel: true,
            dense: true
        }), (0, _mithril2.default)(_polythene.TextField, {
            label: 'Your email',
            floatingLabel: true,
            dense: true
        }), (0, _mithril2.default)(_polythene.TextField, {
            label: 'Your address',
            floatingLabel: true,
            dense: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Helper message: permanent and on focus',
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            label: 'Your Name',
            floatingLabel: true,
            help: 'Enter the name as written on the credit card'
        }), (0, _mithril2.default)(_polythene.TextField, {
            label: 'Your Name',
            floatingLabel: true,
            help: 'Enter the name as written on the credit card',
            focusHelp: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Full width text fields',
        content: (0, _mithril2.default)('.form.fullWidth', [(0, _mithril2.default)(_polythene.TextField, {
            label: 'To',
            fullWidth: true
        }), (0, _mithril2.default)(_polythene.TextField, {
            label: 'Subject',
            fullWidth: true
        }), (0, _mithril2.default)(_polythene.TextField, {
            label: 'Message',
            fullWidth: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dense full width text fields',
        content: (0, _mithril2.default)('.form.fullWidth', [(0, _mithril2.default)(_polythene.TextField, {
            label: 'To',
            fullWidth: true,
            dense: true
        }), (0, _mithril2.default)(_polythene.TextField, {
            label: 'Subject',
            fullWidth: true,
            dense: true
        }), (0, _mithril2.default)(_polythene.TextField, {
            label: 'Message',
            fullWidth: true,
            dense: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Multi-line',
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            label: 'Label in multi-line input',
            multiline: true,
            rows: 2
        }), (0, _mithril2.default)(_polythene.TextField, {
            label: 'Floating label in multi-line input',
            floatingLabel: true,
            multiline: true,
            rows: 2
        }), (0, _mithril2.default)(_polythene.TextField, {
            value: '4 rows: ' + ipsum,
            multiline: true,
            rows: 4
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Required field',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('By default the to-be-validated fields are validated only after user interaction. This to prevent screaming red errors everywhere when the page loads.')),
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            label: 'Your Name',
            floatingLabel: true,
            help: 'Enter the name as written on the credit card',
            required: true
        }), (0, _mithril2.default)(_polythene.TextField, {
            label: 'Your Name',
            floatingLabel: true,
            help: 'This required field does not show a *',
            error: 'Please enter your name',
            focusHelp: true,
            required: true,
            hideRequiredMark: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Validation: max length',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('Uses HTML5 constraints. Testing "maxlength: 3". Will not generate an error.')),
        content: (0, _mithril2.default)('.form', (0, _mithril2.default)(_polythene.TextField, {
            value: '123',
            maxlength: 3,
            error: 'Enter max 3 characters'
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Validation: min and max value',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('Uses HTML5 constraints.')),
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            type: 'number',
            min: 3,
            max: 9,
            value: 10,
            error: 'Enter a value between 3 and 9'
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Validation: email (and required)',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('Uses HTML5 constraints.')),
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            label: 'Email',
            type: 'email',
            value: 'a@com',
            required: true,
            error: 'Enter a valid email address'
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Validation: pattern',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('Uses HTML5 constraints.')),
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            label: 'Number',
            type: 'text',
            value: 'abc',
            pattern: '[0-9]+',
            error: 'Enter a number',
            validateAtStart: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Custom validation',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('Testing lowercase.')),
        content: (0, _mithril2.default)('.form', (0, _mithril2.default)(_polythene.TextField, {
            value: 'abC',
            validate: function validate(value) {
                if (value !== value.toLowerCase()) {
                    return {
                        valid: false,
                        error: 'Only use lowercase characters.'
                    };
                }
            },
            validateAtStart: true
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Counter without validation',
        content: (0, _mithril2.default)('.form', (0, _mithril2.default)(_polythene.TextField, {
            label: 'Description',
            floatingLabel: true,
            value: shortIpsum,
            counter: 30
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Counter with validation',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('Uses HTML5 constraints.')),
        content: (0, _mithril2.default)('.form', (0, _mithril2.default)(_polythene.TextField, {
            label: 'Description',
            floatingLabel: true,
            value: shortIpsum,
            counter: 30,
            maxlength: 30,
            error: 'You have exceeded the maximum number of characters.'
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Give focus',
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            label: 'Your name',
            focus: ctrl.focusState,
            getState: function getState(state) {
                return ctrl.focusState = state.focus;
            }
        }), (0, _mithril2.default)(_polythene.Button, {
            label: 'Give focus',
            raised: true,
            events: {
                onclick: function onclick() {
                    return ctrl.focusState = true;
                }
            }
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Update value from outside',
        class: 'rgb',
        content: (0, _mithril2.default)(_sliderRgb2.default)
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Disabled label',
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            label: 'Your name',
            disabled: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Disabled input',
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            value: 'John',
            disabled: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Readonly input',
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            value: 'Your name',
            readonly: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: hint label',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)('.form', (0, _mithril2.default)(_polythene.TextField, {
            label: 'Your name'
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: floating hint label',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)('.form', (0, _mithril2.default)(_polythene.TextField, {
            label: 'Your name',
            floatingLabel: true
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: validation error',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)('.form', [(0, _mithril2.default)(_polythene.TextField, {
            label: 'Email',
            type: 'email',
            value: '.com',
            required: true,
            error: 'Enter a valid email address',
            validateAtStart: true
        })])
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: disabled',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)('.form', (0, _mithril2.default)(_polythene.TextField, {
            value: 'Input text',
            disabled: true
        }))
    }), (0, _mithril2.default)(titleBlock, {
        title: 'Dark theme: readonly',
        class: 'pe-dark-theme',
        content: (0, _mithril2.default)('.form', (0, _mithril2.default)(_polythene.TextField, {
            value: 'Your name',
            readonly: true
        }))
    })]);
};

exports.default = _module;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _primaryButton = __webpack_require__(154);

var _primaryButton2 = _interopRequireDefault(_primaryButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', {
            class: args.class
        }, [(0, _mithril2.default)('.p-block-header', args.title), args.info ? args.info : null, args.content ? args.content : null]);
    }
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('div', [(0, _mithril2.default)('.p-block.p-block-info', (0, _mithril2.default)('p', _mithril2.default.trust('Theming is described in the <a href="https://github.com/ArthurClemens/Polythene/blob/master/theme/theme.md">Polythene theme documentation</a>.'))), (0, _mithril2.default)(titleBlock, {
        title: 'Sub-classing a component',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('Creating a wrapper around a Polythene component.')),
        content: (0, _mithril2.default)('div', {
            style: {
                margin: '0 -4px'
            }
        }, [(0, _mithril2.default)(_primaryButton2.default, { label: 'One' }), (0, _mithril2.default)(_primaryButton2.default, { label: 'Two' }), (0, _mithril2.default)(_primaryButton2.default, { label: 'Three' })])
    }), _mithril2.default.component(titleBlock, {
        title: 'Custom style as configuration',
        info: (0, _mithril2.default)('p', _mithril2.default.trust('Enhancing/replacing styles with configuration per component. This new configuration is scoped to this page.')),
        class: 'example-custom-theme',
        content: (0, _mithril2.default)('div', {
            style: {
                margin: '0 -4px'
            }
        }, [(0, _mithril2.default)(_polythene.Button, { raised: true, label: 'One' }), (0, _mithril2.default)(_polythene.Button, { raised: true, label: 'Two' }), (0, _mithril2.default)(_polythene.Button, { raised: true, label: 'Three' })])
    })]);
};

exports.default = _module;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

__webpack_require__(2);

var _config = __webpack_require__(160);

var _config2 = _interopRequireDefault(_config);

var _layout = __webpack_require__(161);

var _layout2 = _interopRequireDefault(_layout);

var _color = __webpack_require__(159);

var _color2 = _interopRequireDefault(_color);

var _styler = __webpack_require__(21);

var _styler2 = _interopRequireDefault(_styler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reconfig = function reconfig(cfg) {
    return [{ '.my-button--primary': Object.assign({}, cfg, {
            border_radius: 0,
            text_transform: 'none',
            color_light_flat_normal_background: '#673ab7',
            color_light_flat_normal_text: '#fff'
        }) }];
};

var newConfig = reconfig(_config2.default);
_styler2.default.add('my-button-primary', (0, _layout2.default)(newConfig), (0, _color2.default)(newConfig));

exports.default = {
    view: function view(ctrl) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        opts.class = (opts.class || '') + ' my-button--primary';
        opts.borders = true;
        return (0, _mithril2.default)(_polythene.Button, opts);
    }
};

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.module-toolbar': {
        ' .pe-toolbar': {
            'background-color': '#84dee9'
        },
        ' .pe-toolbar.pe-dark-theme': {
            'background-color': _commonVars2.default.darkThemeBackgroundColor,
            color: '#fff'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _toolbarStyle = __webpack_require__(155);

var _toolbarStyle2 = _interopRequireDefault(_toolbarStyle);

var _menu = __webpack_require__(11);

var _menu2 = _interopRequireDefault(_menu);

var _search = __webpack_require__(9);

var _search2 = _interopRequireDefault(_search);

var _favorite = __webpack_require__(176);

var _favorite2 = _interopRequireDefault(_favorite);

var _moreVert = __webpack_require__(12);

var _moreVert2 = _interopRequireDefault(_moreVert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-toolbar', _toolbarStyle2.default);

var btn = function btn(msvg) {
    return (0, _mithril2.default)(_polythene.IconButton, {
        icon: {
            msvg: msvg
        }
    });
};

var toolbarRow = [btn(_menu2.default), (0, _mithril2.default)('span.flex', 'Toolbar title lorem ipsum dolor sit amet'), btn(_search2.default), btn(_favorite2.default), btn(_moreVert2.default)];

var toolbarBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', [(0, _mithril2.default)('.p-block-header', args.label), (0, _mithril2.default)(_polythene.Toolbar, args.toolbar)]);
    }
};

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.module-toolbar', [(0, _mithril2.default)(toolbarBlock, {
        label: 'Content',
        toolbar: {
            topBar: toolbarRow
        }
    }), (0, _mithril2.default)(toolbarBlock, {
        label: 'Dark theme',
        toolbar: {
            class: 'pe-dark-theme',
            topBar: toolbarRow
        }
    }), (0, _mithril2.default)(toolbarBlock, {
        label: 'Tall with elements pinned to the bottom',
        toolbar: {
            mode: 'tall',
            bottomBar: toolbarRow
        }
    }), (0, _mithril2.default)(toolbarBlock, {
        label: 'Medium-tall with label aligns to the bottom',
        toolbar: {
            mode: 'medium-tall',
            topBar: toolbarRow,
            bottomBar: _mithril2.default.trust('<span flex class="pe-toolbar__title--indent">Bottom content</span>')
        }
    }), (0, _mithril2.default)(toolbarBlock, {
        label: 'Three bars',
        toolbar: {
            mode: 'tall',
            topBar: toolbarRow,
            middleBar: _mithril2.default.trust('<div flex class="middle pe-toolbar__title--indent">label aligns to the middle</div>'),
            bottomBar: _mithril2.default.trust('<div class="bottom pe-toolbar__title--indent" style="color: #666; font-size: 18px;">some stuffs align to the bottom</div>')
        }
    }), (0, _mithril2.default)(toolbarBlock, {
        label: 'With loader bar',
        toolbar: {
            mode: 'tall',
            topBar: toolbarRow,
            middleBar: _mithril2.default.trust('<div flex class="middle pe-toolbar__title--indent">element (e.g. progress) fits at the bottom of the toolbar</div>'),
            bottomBar: _mithril2.default.trust('<div flex class="bottom pe-fit" style="height: 20px; background-color: #0f9d58;"></div>')
        }
    })]);
};

exports.default = _module;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _commonVars = __webpack_require__(3);

var _commonVars2 = _interopRequireDefault(_commonVars);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = [{
    '.example-validation': {
        ' #notifications': {
            'pointer-events': 'none',
            'z-index': 1
        },
        ' .form-container': {
            position: 'relative',
            width: _commonVars2.default.minWidth + 'px',
            margin: '0 auto'
        },
        ' .form': {
            padding: '8px 24px 24px 24px',
            'background-color': '#fff',
            width: '100%'
        },
        ' .pe-textfield': {
            display: 'block'
        },
        ' .footer': {
            margin: '20px -4px 0 -4px'
        }
    }
}];

exports.default = styles;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mithril = __webpack_require__(0);

var _mithril2 = _interopRequireDefault(_mithril);

var _polythene = __webpack_require__(1);

var _validationStyle = __webpack_require__(157);

var _validationStyle2 = _interopRequireDefault(_validationStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_polythene.styler.add('polythene-examples-validation', _validationStyle2.default);

var titleBlock = {
    view: function view(ctrl, args) {
        return (0, _mithril2.default)('.p-block', {
            class: args.class || ''
        }, [(0, _mithril2.default)('.p-block-header', args.title), args.info ? args.info : null, args.content]);
    }
};

var validationHelper = new _polythene.ValidationHelper({
    element: 'el',
    invalid: 'invalid'
});

var _module = {};
_module.view = function () {
    return (0, _mithril2.default)('.example-validation', [(0, _mithril2.default)(titleBlock, {
        title: 'Form with input fields',
        info: (0, _mithril2.default)('p', 'This form uses "polythene/common/validation-helper" to only submit the form when all fields are valid, and on submit to jump to the next invalid field.'),
        content: (0, _mithril2.default)('.form-container layout center-center', (0, _mithril2.default)('#notifications.pe-fit.layout.center-center', (0, _mithril2.default)(_polythene.Notification)), (0, _mithril2.default)('form.form', {
            onsubmit: function onsubmit(e) {
                return validationHelper.submit(e, function () {
                    _polythene.Notification.show({
                        containerSelector: '#notifications',
                        title: 'Form submitted!',
                        timeout: 1.5
                    });
                });
            },
            novalidate: true
        }, (0, _mithril2.default)('.fields', [(0, _mithril2.default)(_polythene.TextField, {
            label: 'First name',
            floatingLabel: true,
            autofocus: true,
            required: true,
            error: 'Please fill out your first name',
            getState: validationHelper.update
        }), (0, _mithril2.default)(_polythene.TextField, {
            label: 'Last name',
            floatingLabel: true,
            required: true,
            error: 'Please fill out your last name',
            getState: validationHelper.update
        }), (0, _mithril2.default)(_polythene.TextField, {
            type: 'email',
            label: 'Your email address',
            floatingLabel: true,
            required: true,
            error: 'Please fill out your email address',
            getState: validationHelper.update
        }), (0, _mithril2.default)(_polythene.TextField, {
            type: 'password',
            label: 'Your password',
            floatingLabel: true,
            required: true,
            error: 'Please enter your password',
            getState: validationHelper.update
        })]), (0, _mithril2.default)('.footer', [(0, _mithril2.default)(_polythene.Button, {
            tag: 'button',
            type: 'submit',
            label: 'Send',
            raised: true,
            disabled: _polythene.Notification.count() !== 0
        })])))
    })]);
};

exports.default = _module;

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_mixin__ = __webpack_require__(7);
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
    } else {
        obj[key] = value;
    }return obj;
}



var style = function style(config, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var normalBorder = config['color_' + tint + '_' + type + '_normal_border'] || 'transparent';
    var activeBorder = config['color_' + tint + '_' + type + '_active_border'] || normalBorder;
    var disabledBorder = config['color_' + tint + '_' + type + '_disabled_border'] || normalBorder;
    return [_defineProperty({}, scope + '.pe-button', {
        '&, &:link, &:visited': {
            color: config['color_' + tint + '_' + type + '_normal_text']
        },

        ' .pe-button__content': {
            'background-color': config['color_' + tint + '_' + type + '_normal_background'],
            'border-color': normalBorder
        },

        '&.pe-button--disabled': {
            color: config['color_' + tint + '_' + type + '_disabled_text'],

            ' .pe-button__content': {
                'background-color': config['color_' + tint + '_' + type + '_disabled_background'],
                'border-color': disabledBorder
            }
        },

        '&.pe-button--selected': {
            ' .pe-button__content': {
                'background-color': config['color_' + tint + '_' + type + '_active_background'],
                'border-color': activeBorder
            },
            ' .pe-button__focus': {
                opacity: 1,
                'background-color': config['color_' + tint + '_' + type + '_focus_background']
            }
        },

        '&.pe-button--focus': {
            ' .pe-button__focus': {
                opacity: 1,
                'background-color': config['color_' + tint + '_' + type + '_focus_background']
            }
        }
    })];
};

var noTouch = function noTouch(config, tint, type) {
    var scope = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

    var normalBorder = config['color_' + tint + '_' + type + '_normal_border'];
    var hoverBorder = config['color_' + tint + '_' + type + '_normal_border'] || normalBorder;
    return [_defineProperty({}, scope + '.pe-button:hover', {
        '&:not(.pe-button--selected) .pe-button__wash': {
            'background-color': config['color_' + tint + '_' + type + '_hover_background'],
            'border-color': hoverBorder
        }
    })];
};

var createStyles = function createStyles(config) {
    return [style(config, 'light', 'flat'), style(config, 'light', 'raised', '.pe-button--raised'), {
        'html.pe-no-touch': [noTouch(config, 'light', 'flat', ' '), noTouch(config, 'light', 'raised', ' .pe-button--raised')]
    }, {
        '.pe-dark-theme': [
        // inside dark theme
        style(config, 'dark', 'flat', ' '),
        // has dark theme
        style(config, 'dark', 'flat', '&'),
        //
        style(config, 'dark', 'raised', ' .pe-button--raised')]
    }, {
        'html.pe-no-touch .pe-dark-theme': [noTouch(config, 'dark', 'flat', ' '), noTouch(config, 'dark', 'flat', '&'), noTouch(config, 'dark', 'raised', ' .pe-button--raised')]
    }];
};

/* harmony default export */ __webpack_exports__["default"] = (function (config) {
    return __WEBPACK_IMPORTED_MODULE_0__common_mixin__["default"].createStyles(config, createStyles);
});

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__);


var rgba = __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].rgba;

var touch_height = __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].unit_touch_height;
var height = 36;

/* harmony default export */ __webpack_exports__["default"] = ({
    margin_h: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].grid_unit,
    border_radius: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].unit_item_border_radius,
    font_size: 14,
    font_weight: 500,
    outer_padding_v: (touch_height - height) / 2,
    padding_h: 2 * __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].grid_unit,
    padding_v: 11,
    min_width: 8 * __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].grid_unit_component,
    text_transform: 'uppercase',
    border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border

    color_light_flat_normal_background: 'transparent',
    color_light_flat_normal_text: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_light_text_primary),
    color_light_flat_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_light_background_hover),
    color_light_flat_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_light_background_hover),
    color_light_flat_active_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_light_background_active),
    color_light_flat_disabled_background: 'transparent',
    color_light_flat_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_light_text_disabled),

    // border colors  may be set in theme; disabled by default
    // color_light_flat_normal_border: 'transparent',
    // color_light_flat_hover_border: 'transparent',
    // color_light_flat_active_border: 'transparent',
    // color_light_flat_disabled_border: 'transparent',

    color_light_raised_normal_background: '#E0E0E0',
    color_light_raised_normal_text: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_light_text_primary),
    color_light_raised_hover_background: 'transparent',
    color_light_raised_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_light_background_hover),
    color_light_raised_active_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_light_background_hover), // same as hover
    color_light_raised_disabled_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_light_background_disabled),
    color_light_raised_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_light_text_disabled),

    color_dark_flat_normal_background: 'transparent',
    color_dark_flat_normal_text: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_dark_text_primary),
    color_dark_flat_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_dark_background_hover),
    color_dark_flat_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_dark_background_hover),
    color_dark_flat_active_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_dark_background_active),
    color_dark_flat_disabled_background: 'transparent',
    color_dark_flat_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_dark_text_disabled),

    // border colors  may be set in theme; disabled by default
    // color_dark_flat_normal_border: 'transparent',
    // color_dark_flat_hover_border: 'transparent',
    // color_dark_flat_active_border: 'transparent',
    // color_dark_flat_disabled_border: 'transparent',

    color_dark_raised_normal_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_primary),
    color_dark_raised_normal_text: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_dark_text_primary),
    color_dark_raised_hover_background: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_primary_active,
    color_dark_raised_focus_background: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_primary_active,
    color_dark_raised_active_background: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_primary_dark,
    color_dark_raised_disabled_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_dark_background_disabled),
    color_dark_raised_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["defaults"].blend_dark_text_disabled)
});

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_mixin__ = __webpack_require__(7);


var createStyles = function createStyles(config) {
    return [{
        '.pe-button--text': {
            display: 'inline-block',
            'min-width': config.min_width + 'px',
            margin: '0 ' + config.margin_h + 'px',
            padding: config.outer_padding_v + 'px 0',
            background: 'transparent',
            border: 'none',

            ' .pe-button__content': {
                'border-width': 0,
                padding: '0 ' + config.padding_h + 'px',
                'border-radius': config.border_radius + 'px'
            },

            ' .pe-button__label': {
                padding: config.padding_v + 'px 0',
                'font-size': config.font_size + 'px',
                'line-height': config.font_size + 'px',
                'font-weight': config.font_weight,
                'text-transform': config.text_transform,
                'white-space': 'pre'
            },

            '&.pe-button--borders': {
                ' .pe-button__wash, pe-button__focus, .pe-ripple': __WEBPACK_IMPORTED_MODULE_0__common_mixin__["default"].fit(-1),

                ' .pe-button__content': {
                    'border-style': 'solid',
                    'border-width': '1px'
                },
                ' .pe-button__label': {
                    padding: config.padding_v - 1 + 'px 0'
                }
            }
        }
    }];
};

/* harmony default export */ __webpack_exports__["default"] = (function (config) {
    return __WEBPACK_IMPORTED_MODULE_0__common_mixin__["default"].createStyles(config, createStyles);
});

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var listeners = {};

// https://gist.github.com/Eartz/fe651f2fadcc11444549
var throttle = function throttle(func) {
    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

    var wait = false;
    return function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        var later = function later() {
            func.apply(context, args);
        };
        if (!wait) {
            later();
            wait = true;
            setTimeout(function () {
                wait = false;
            }, s);
        }
    };
};

var subscribe = function subscribe(eventName, listener, delay) {
    listeners[eventName] = listeners[eventName] || [];
    listeners[eventName].push(delay ? throttle(listener, delay) : listener);
};

var unsubscribe = function unsubscribe(eventName, listener) {
    if (!listeners[eventName]) {
        return;
    }
    var index = listeners[eventName].indexOf(listener);
    if (index > -1) {
        listeners[eventName].splice(index, 1);
    }
};

var emit = function emit(eventName, event) {
    if (!listeners[eventName]) {
        return;
    }
    listeners[eventName].forEach(function (listener) {
        listener(event);
    });
};

window.addEventListener('resize', function (e) {
    return emit('resize', e);
});
window.addEventListener('scroll', function (e) {
    return emit('scroll', e);
});
window.addEventListener('keydown', function (e) {
    return emit('keydown', e);
});

/* harmony default export */ __webpack_exports__["a"] = ({
    throttle: throttle,
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    emit: emit
});

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fastclick__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__polythene_polythene__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events__ = __webpack_require__(162);




var layer = document.body;
var throttleDelay = 150;
var reInitDelay = throttleDelay + 50;
var fastClick = void 0;
var timeoutId = void 0;
var enabled = void 0;

var remove = function remove() {
    if (enabled) {
        fastClick.destroy();
        enabled = false;
    }
};

var add = function add() {
    if (!enabled) {
        fastClick = new __WEBPACK_IMPORTED_MODULE_0_fastclick___default.a(layer);
        enabled = true;
    }
};

var handleScroll = function handleScroll() {
    remove();
    if (timeoutId) {
        window.clearTimeout(timeoutId);
    }
    timeoutId = window.setTimeout(add, reInitDelay);
};

var init = function init() {
    if (__WEBPACK_IMPORTED_MODULE_1__polythene_polythene__["a" /* default */].isTouch) {
        __WEBPACK_IMPORTED_MODULE_2__events__["a" /* default */].subscribe('scroll', handleScroll, throttleDelay);
        add();
    }
};

init();

/* harmony default export */ __webpack_exports__["default"] = ({
    add: add,
    remove: remove
});

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Global theme variables
// How to change these variables for your app - see the README.

var hex = function hex(_hex) {
    var bigint = parseInt(_hex.substring(1), 16);
    var r = bigint >> 16 & 255;
    var g = bigint >> 8 & 255;
    var b = bigint & 255;
    return r + ',' + g + ',' + b;
};

var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return 'rgba(' + colorStr + ',' + opacity + ')';
};

var isInteger = function isInteger(nVal) {
    return typeof nVal === 'number' && isFinite(nVal) && nVal > -9007199254740992 && nVal < 9007199254740992 && Math.floor(nVal) === nVal;
};

//const isTablet = window.innerWidth >= 600;
var isDesktop = window.innerWidth >= 1024;

var grid_unit = 4;
var grid_unit_component = 8;

var animation_curve_slow_in_fast_out = 'cubic-bezier(.4, 0, .2, 1)';
var animation_curve_slow_in_linear_out = 'cubic-bezier(0, 0, .2, 1)';
var animation_curve_linear_in_fast_out = 'cubic-bezier(.4, 0, 1, 1)';

/* harmony default export */ __webpack_exports__["a"] = ({
    // util functions
    rgba: rgba,
    hex: hex,
    isInteger: isInteger,

    grid_unit: grid_unit,
    grid_unit_component: grid_unit_component,
    grid_unit_menu: 56,
    grid_unit_icon_button: 6 * grid_unit_component, // 48

    // common sizes
    unit_block_border_radius: 2,
    unit_item_border_radius: 2,
    unit_indent: 72,
    unit_side_padding: isDesktop ? 24 : 16,

    // buttons
    unit_touch_height: 48,
    unit_icon_size_small: 2 * grid_unit_component, // 16
    unit_icon_size: 3 * grid_unit_component, // 24
    unit_icon_size_medium: 4 * grid_unit_component, // 32
    unit_icon_size_large: 5 * grid_unit_component, // 40

    // screen dimensions
    unit_screen_size_extra_large: 1280,
    unit_screen_size_large: 960,
    unit_screen_size_medium: 480,
    unit_screen_size_small: 320,

    // transitions
    animation_duration: '.18s',
    animation_curve_slow_in_fast_out: animation_curve_slow_in_fast_out,
    animation_curve_slow_in_linear_out: animation_curve_slow_in_linear_out,
    animation_curve_linear_in_fast_out: animation_curve_linear_in_fast_out,
    animation_curve_default: 'ease-out',

    // font
    font_weight_light: 300,
    font_weight_normal: 400,
    font_weight_medium: 500,
    font_weight_bold: 700,
    font_size_title: 20,
    line_height: 1.3,

    // base colors
    color_primary: '33, 150, 243', // blue 500
    color_primary_active: '30, 136, 229', // blue 600
    color_primary_dark: '25, 118, 210', // blue 700
    color_primary_faded: '100, 181, 249', // blue 300
    color_primary_foreground: '255, 255, 255',

    color_light_background: '255, 255, 255',
    color_light_foreground: '0, 0, 0',
    color_dark_background: '34, 34, 34',
    color_dark_foreground: '255, 255, 255',

    // blends
    blend_light_text_primary: .87,
    blend_light_text_regular: .73,
    blend_light_text_secondary: .54,
    blend_light_text_tertiary: .40,
    blend_light_text_disabled: .26,
    blend_light_border_light: .11,
    blend_light_background_active: .14,
    blend_light_background_hover: .06,
    blend_light_background_hover_medium: .12, // for the lighter tinted icon buttons
    blend_light_background_disabled: .09,
    blend_light_overlay_background: .3,

    blend_dark_text_primary: 1,
    blend_dark_text_regular: .87,
    blend_dark_text_secondary: .70,
    blend_dark_text_tertiary: .40,
    blend_dark_text_disabled: .26,
    blend_dark_border_light: .10,
    blend_dark_background_active: .14,
    blend_dark_background_hover: .08,
    blend_dark_background_hoverMedium: .12, // for the lighter tinted icon buttons
    blend_dark_background_disabled: .12,
    blend_dark_overlay_background: .3,

    // css vendor prefixes
    prefixes_animation: ['o', 'moz', 'webkit'],
    prefixes_appearance: ['o', 'moz', 'ms', 'webkit'],
    prefixes_background_size: ['o', 'moz', 'webkit'],
    prefixes_box_shadow: ['moz', 'webkit'],
    prefixes_keyframes: ['o', 'moz', 'webkit'],
    prefixes_transform: ['o', 'moz', 'ms', 'webkit'],
    prefixes_transition: ['o', 'moz', 'webkit'],
    prefixes_user_select: ['moz', 'ms', 'webkit'],

    // breakpoints
    breakpoint_small_handset_portrait: 0,
    breakpoint_medium_handset_portrait: 360,
    breakpoint_large_handset_portrait: 400,
    breakpoint_small_tablet_portrait: 600,
    breakpoint_large_tablet_portrait: 720,
    // landscape
    breakpoint_small_handset_landscape: 480,
    breakpoint_medium_handset_landscape: 600,
    breakpoint_large_handset_landscape: 720,

    // environment
    env_tablet: window.innerWidth >= 600,
    env_desktop: window.innerWidth >= 1024,

    // z-index
    z_menu: 1000,
    z_header_container: 2000,
    z_fixed_header_container: 3000,
    z_notification: 4000,
    z_dialog: 5000
});

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var styles = [{
    '.pe-block': {
        display: 'block'
    },

    // ie support for hidden
    '.pe-hidden': {
        display: 'none !important'
    },

    '.pe-relative': {
        position: 'relative'
    },
    '.pe-fit': {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    },
    'body.pe-fullbleed': {
        margin: 0,
        height: '100vh'
    }
}];

/* harmony default export */ __webpack_exports__["a"] = (styles);

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flex__ = __webpack_require__(167);


var styles = [{
    '.layout, .layout.horizontal, .flex.vertical': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layout,
    '.layout.horizontal.inline, .layout.vertical.inline': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layoutInline,
    '.layout.horizontal': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layoutHorizontal,
    '.layout.horizontal.reverse': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layoutHorizontalReverse,
    '.layout.vertical': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layoutVertical,
    '.layout.vertical.reverse': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layoutVerticalReverse,
    '.layout.wrap': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layoutWrap,
    '.layout.wrap.reverse': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layoutWrapReverse,
    '.flex': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flex(1),
    '.span.flex': {
        'display': 'block' // for IE 10
    },
    '.vertical.layout > .flex.auto-vertical': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flexAutoVertical,
    '.flex.auto': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flexAuto,
    '.flex.none': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flexIndex('none'),
    '.flex.one': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flexIndex(1),
    '.flex.two': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flexIndex(2),
    '.flex.three': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flexIndex(3),
    '.flex.four': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flexIndex(4),
    '.flex.five': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flexIndex(5),
    '.flex.six': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flexIndex(6),
    '.flex.seven': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flexIndex(7),
    '.flex.eight': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flexIndex(8),
    '.flex.nine': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flexIndex(9),
    '.flex.ten': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flexIndex(10),
    '.flex.eleven': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flexIndex(11),
    '.flex.twelve': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].flexIndex(12),

    // alignment in cross axis
    '.layout.start': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layoutStart,
    '.layout.center, .layout.center-center': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layoutCenter,
    '.layout.end': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layoutEnd,

    // alignment in main axis
    '.layout.start-justified': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layoutStartJustified,
    '.layout.center-justified, .layout.center-center': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layoutCenterJustified,
    '.layout.end-justified': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layoutEndJustified,
    '.layout.around-justified': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layoutAroundJustified,
    '.layout.justified': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].layoutJustified,

    // self alignment
    '.self-start': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].selfStart,
    '.self-center': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].selfCenter,
    '.self-end': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].selfEnd,
    '.self-stretch': __WEBPACK_IMPORTED_MODULE_0__flex__["a" /* default */].selfStretch
}];

/* harmony default export */ __webpack_exports__["a"] = (styles);

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var layout = [{
    'display': '-webkit-box'
}, {
    'display': '-moz-box'
}, {
    'display': '-ms-flexbox',
    '-ms-flex-preferred-size': 'initial' // IE10
}, {
    'display': '-webkit-flex'
}, {
    'display': 'flex'
}];

var layoutInline = [layout, {
    'display': '-ms-inline-flexbox'
}, {
    'display': '-webkit-inline-flex'
}, {
    'display': 'inline-flex'
}];

var layoutHorizontal = [layout, {
    '-ms-flex-direction': 'row',
    '-webkit-flex-direction': 'row',
    'flex-direction': 'row'
}];

var layoutHorizontalReverse = [layout, {
    '-ms-flex-direction': 'row-reverse',
    '-webkit-flex-direction': 'row-reverse',
    'flex-direction': 'row-reverse'
}];

var layoutVertical = [layout, {
    '-ms-flex-direction': 'column',
    '-webkit-flex-direction': 'column',
    'flex-direction': 'column'
}];

var layoutVerticalReverse = [layout, {
    '-ms-flex-direction': 'column-reverse',
    '-webkit-flex-direction': 'column-reverse',
    'flex-direction': 'column-reverse'
}];

var layoutWrap = [layout, {
    '-ms-flex-wrap': 'wrap',
    '-webkit-flex-wrap': 'wrap',
    'flex-wrap': 'wrap'
}];

var layoutWrapReverse = [layout, {
    '-ms-flex-wrap': 'wrap-reverse',
    '-webkit-flex-wrap': 'wrap-reverse',
    'flex-wrap': 'wrap-reverse'
}];

var layoutStart = [layout, {
    '-ms-flex-align': 'start',
    '-webkit-align-items': 'flex-start',
    'align-items': 'flex-start'
}];

var layoutCenter = [layout, {
    '-ms-flex-align': 'center',
    '-webkit-align-items': 'center',
    'align-items': 'center'
}];

var layoutEnd = [layout, {
    '-ms-flex-align': 'end',
    '-webkit-align-items': 'flex-end',
    'align-items': 'flex-end'
}];

var layoutJustified = [layout, {
    '-ms-flex-line-pack': 'stretch', // IE10
    '-ms-flex-pack': 'justify',
    '-webkit-justify-content': 'space-between',
    'justify-content': 'space-between'
}];

var layoutStartJustified = [layout, {
    '-ms-flex-align': 'start', // IE10
    '-ms-flex-pack': 'start',
    '-webkit-justify-content': 'flex-start',
    'justify-content': 'flex-start'
}];

var layoutCenterJustified = [layout, {
    '-ms-flex-pack': 'center',
    '-webkit-justify-content': 'center',
    'justify-content': 'center'
}];

var layoutEndJustified = [layout, {
    '-ms-flex-pack': 'end',
    '-webkit-justify-content': 'flex-end',
    'justify-content': 'flex-end'
}];

var layoutCenterCenter = [layoutCenterJustified, layoutCenter];

var layoutAroundJustified = [layout, {
    '-ms-flex-pack': 'distribute',
    '-webkit-justify-content': 'space-around',
    'justify-content': 'space-around'
}];

var flex = function flex() {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    return [{
        '-webkit-box-flex': num
    }, {
        '-moz-box-flex': num
    }, {
        '-webkit-flex': num
    }, {
        '-ms-flex': num
    }, {
        'flex': num
    }, num === 1 ? {
        '-webkit-flex-basis': '0.000000001px'
    } : {}, num === 1 ? {
        'flex-basis': '0.000000001px'
    } : {}];
};

var flexAuto = {
    '-ms-flex': '1 1 auto',
    '-webkit-flex-basis': 'auto',
    'flex-basis': 'auto'
};

var flexAutoVertical = {
    '-ms-flex': '1 1 auto',
    '-webkit-flex-basis': 'auto',
    'flex-basis': 'auto'
};

var flexIndex = function flexIndex(index) {
    return {
        '-ms-flex': index,
        '-webkit-flex': index,
        'flex': index
    };
};

var flexGrow = function flexGrow(value) {
    return {
        '-webkit-flex-grow': value,
        'flex-grow': value
    };
};

var selfStart = {
    '-ms-flex-item-align': 'start', // IE10
    '-ms-align-self': 'flex-start',
    '-webkit-align-self': 'flex-start',
    'align-self': 'flex-start'
};

var selfCenter = {
    '-ms-flex-item-align': 'center', // IE10
    '-ms-align-self': 'center',
    '-webkit-align-self': 'center',
    'align-self': 'center'
};

var selfEnd = {
    '-ms-flex-item-align': 'end', // IE10
    '-ms-align-self': 'flex-end',
    '-webkit-align-self': 'flex-end',
    'align-self': 'flex-end'
};

var selfStretch = {
    '-ms-flex-item-align': 'stretch', // IE10
    '-ms-align-self': 'stretch',
    '-webkit-align-self': 'stretch',
    'align-self': 'stretch'
};

/* harmony default export */ __webpack_exports__["a"] = ({
    flex: flex,
    flexAuto: flexAuto,
    flexAutoVertical: flexAutoVertical,
    flexIndex: flexIndex,
    flexGrow: flexGrow,
    layout: layout,
    layoutAroundJustified: layoutAroundJustified,
    layoutCenter: layoutCenter,
    layoutCenterCenter: layoutCenterCenter,
    layoutCenterJustified: layoutCenterJustified,
    layoutEnd: layoutEnd,
    layoutEndJustified: layoutEndJustified,
    layoutHorizontal: layoutHorizontal,
    layoutHorizontalReverse: layoutHorizontalReverse,
    layoutInline: layoutInline,
    layoutJustified: layoutJustified,
    layoutStart: layoutStart,
    layoutStartJustified: layoutStartJustified,
    layoutVertical: layoutVertical,
    layoutVerticalReverse: layoutVerticalReverse,
    layoutWrap: layoutWrap,
    layoutWrapReverse: layoutWrapReverse,
    selfCenter: selfCenter,
    selfEnd: selfEnd,
    selfStart: selfStart,
    selfStretch: selfStretch
});

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_styler__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flex_style__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_style__ = __webpack_require__(165);




__WEBPACK_IMPORTED_MODULE_0__common_styler__["default"].add('pe-layout', __WEBPACK_IMPORTED_MODULE_1__flex_style__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__common_style__["a" /* default */]);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var isTouch = 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

document.querySelector('html').classList.add(isTouch ? 'pe-touch' : 'pe-no-touch');

/* harmony default export */ __webpack_exports__["a"] = ({
    isTouch: isTouch
});

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_config__ = __webpack_require__(4);


var rgba = __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].rgba;
var lightForeground = __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].color_light_foreground;
var darkForeground = __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].color_dark_foreground;
var activeColor = __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].color_primary; // or override in CSS by setting 'color' property on '.pe-slider'

var thumb_size = 12;
var thumb_touch_size = Math.max(40, thumb_size);
var thumb_border_width = 2;
var active_thumb_scale = 3 / 2;
var disabled_thumb_scale = 2 / 3;
var active_pin_thumb_scale = 2 / 6;
var largestThumbSize = active_thumb_scale * thumb_size;
var largestElement = Math.max(thumb_touch_size, largestThumbSize);
var height = Math.max(52, largestThumbSize);
var side_spacing = Math.max(10, largestElement / 2 - thumb_size / 2);
var horizontal_layout_side_spacing = side_spacing + 4; // optimization for horizontal layout

/* harmony default export */ __webpack_exports__["default"] = ({
    height: height,
    side_spacing: side_spacing,
    horizontal_layout_side_spacing: horizontal_layout_side_spacing,
    thumb_size: thumb_size,
    thumb_touch_size: thumb_touch_size,
    track_height: height,
    bar_height: 2,
    thumb_border_width: thumb_border_width,
    active_thumb_scale: active_thumb_scale,
    animation_duration: __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].animation_duration,
    disabled_thumb_scale: disabled_thumb_scale,
    active_pin_thumb_scale: active_pin_thumb_scale,

    step_width: 2,
    pin_height: 32,
    pin_width: 26,
    pin_font_size: 10,

    color_light_track_active: rgba(lightForeground, .38),
    color_light_track_inactive: rgba(lightForeground, .26),
    color_light_track_value: rgba(activeColor),
    color_light_thumb_off: rgba(lightForeground, .26),
    color_light_thumb_off_focus: rgba(lightForeground),
    color_light_thumb_off_focus_opacity: .08,
    color_light_thumb_on: rgba(activeColor),
    color_light_thumb_on_focus_opacity: .11,
    color_light_tick: rgba(lightForeground, 1),
    color_light_icon: __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].rgba(__WEBPACK_IMPORTED_MODULE_0__config_config__["default"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].blend_light_text_secondary),
    color_light_disabled_icon: __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].rgba(__WEBPACK_IMPORTED_MODULE_0__config_config__["default"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].blend_light_text_disabled),
    color_light_label: __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].rgba(__WEBPACK_IMPORTED_MODULE_0__config_config__["default"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].blend_light_text_secondary),
    color_light_disabled_label: __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].rgba(__WEBPACK_IMPORTED_MODULE_0__config_config__["default"].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].blend_light_text_disabled),

    color_dark_track_active: rgba(darkForeground, 0.3),
    color_dark_track_inactive: rgba(darkForeground, 0.2),
    color_dark_track_value: rgba(activeColor),
    color_dark_thumb_off: rgba(darkForeground, 0.2),
    color_dark_thumb_off_focus: rgba(darkForeground),
    color_dark_thumb_off_focus_opacity: .08,
    color_dark_thumb_on: rgba(activeColor),
    color_dark_thumb_on_focus_opacity: .11,
    color_dark_tick: rgba(darkForeground, 1),
    color_dark_icon: __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].rgba(__WEBPACK_IMPORTED_MODULE_0__config_config__["default"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].blend_dark_text_secondary),
    color_dark_disabled_icon: __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].rgba(__WEBPACK_IMPORTED_MODULE_0__config_config__["default"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].blend_dark_text_disabled),
    color_dark_label: __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].rgba(__WEBPACK_IMPORTED_MODULE_0__config_config__["default"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].blend_dark_text_secondary),
    color_dark_disabled_label: __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].rgba(__WEBPACK_IMPORTED_MODULE_0__config_config__["default"].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0__config_config__["default"].blend_dark_text_disabled)
});

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var emptyArray = [];
var emptyObject = {};
var type = emptyObject.toString;
var ARRAY =  type.call(emptyArray);
var OBJECT = type.call(emptyObject);
var STRING = type.call('');
var FUNCTION = type.call(type);
var own =  emptyObject.hasOwnProperty;
var freeze = Object.freeze || function(o) {return o};


function defaults(target, source) {
  for (var k in source) if (own.call(source, k)) {
    if (k.indexOf('$') && !(k in target)) target[k] = source[k];
  }
  return target
}

function cartesian(a,b) {
  var res = [], i, j;
  for (j in b) if(own.call(b, j))
    for (i in a) if(own.call(a, i))
      res.push(a[i] + b[j]);
  return res
}

// "Tokenizes" the selectors into parts relevant for the next function.
// Strings and comments are matched, but ignored afterwards.
// This is not a full tokenizers. It only recognizes comas, parentheses,
// strings and comments.
// regexp generated by scripts/regexps.js then trimmed by hand
var selectorTokenizer = /[(),]|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;


/**
 * This will split a coma-separated selector list into individual selectors,
 * ignoring comas in strings, comments and in :pseudo-selectors(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */

function splitSelector(selector) {
  var indices = [], res = [], inParen = 0, o;
  /*eslint-disable no-cond-assign*/
  while (o = selectorTokenizer.exec(selector)) {
  /*eslint-enable no-cond-assign*/
    switch (o[0]) {
    case '(': inParen++; break
    case ')': inParen--; break
    case ',': if (inParen) break; indices.push(o.index);
    }
  }
  for (o = indices.length; o--;){
    res.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }
  res.unshift(selector);
  return res
}

// Like the `selectorTokenizer`, but for the `&` operator
var ampersandTokenizer = /&|"(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\//g;

function ampersand (selector, parents) {
  var indices = [], split = [], res, o;
  /*eslint-disable no-cond-assign*/
  while (o = ampersandTokenizer.exec(selector)) {
  /*eslint-enable no-cond-assign*/
    if (o[0] == '&') indices.push(o.index);
  }
  for (o = indices.length; o--;){
    split.unshift(selector.slice(indices[o] + 1));
    selector = selector.slice(0, indices[o]);
  }
  split.unshift(selector);
  if (split.length === 1) split.unshift('');
  res = [split[0]];
  for (o = 1; o < split.length; o++) {
    res = cartesian(res, cartesian(parents, [split[o]]));
  }
  return res.join(',')
}

function flatIter (f) {
  return function iter(arg) {
    if (type.call(arg) === ARRAY) for (var i= 0 ; i < arg.length; i ++) iter(arg[i]);
    else f(arg);
  }
}

function decamelize(match) {
  return '-' + match.toLowerCase()
}

/**
 * Handles the property:value; pairs.
 *
 * @param {object} state - holds the localizer- and walker-related methods
 *                         and state
 * @param {object} emit - the contextual emitters to the final buffer
 * @param {string} prefix - the current property or a prefix in case of nested
 *                          sub-properties.
 * @param {array|object|string} o - the declarations.
 * @param {boolean} local - are we in @local or in @global scope.
 */

function declarations(state, emit, prefix, o, local) {
  var k, v, kk;
  if (o==null) return

  switch ( type.call(o = o.valueOf()) ) {
  case ARRAY:
    for (k = 0; k < o.length; k++)

      declarations(state, emit, prefix, o[k], local);

    break
  case OBJECT:
    // prefix is falsy iif it is the empty string, which means we're at the root
    // of the declarations list.
    prefix = (prefix && prefix + '-');
    for (k in o) if (own.call(o, k)){
      v = o[k];
      if (/\$/.test(k)) {
        for (kk in (k = k.split('$'))) if (own.call(k, kk)) {

          declarations(state, emit, prefix + k[kk], v, local);

        }
      } else {

        declarations(state, emit, prefix + k, v, local);

      }
    }
    break
  default:
    // prefix is falsy when it is "", which means that we're
    // at the top level.
    // `o` is then treated as a `property:value` pair, or a
    // semi-colon-separated list thereof.
    // Otherwise, `prefix` is the property name, and
    // `o` is the value.

    // restore the dashes
    k = prefix.replace(/_/g, '-').replace(/[A-Z]/g, decamelize);

    if (local && (k == 'animation-name' || k == 'animation' || k == 'list-style')) {
      // no need to tokenize here a plain `.split(',')` has all bases covered.
      // We may 'localize' a comment, but it's not a big deal.
      o = o.split(',').map(function (o) {

        return o.replace(/^\s*(?:(var\([^)]+\))|:?global\(\s*([_A-Za-z][-\w]*)\s*\)|()(-?[_A-Za-z][-\w]*))/, state.localizeReplacer)

      }).join(',');
    }

    emit.decl(k, o);

  }
}

/**
 * Handles a single at-rules
 *
 * @param {object} state - holds the localizer- and walker-related methods
 *                         and state
 * @param {object} emit - the contextual emitters to the final buffer
 * @param {array} k - The parsed at-rule, including the parameters,
 *                    if takes both parameters and a block.
 *                    k == [match, fullAtRule, atRuleType, params?]
 *                    So in `@-webkit-keyframes foo`, we have
 *                     - match = "@-webkit-keyframes foo"
 *                     - fullAtRule = "@-webkit-keyframes"
 *                     - atRuleType = "keyframes"
 *                     - params = "foo"
 * @param {string|string[]|object|object[]} v - Either parameters for
 *                                              block-less rules or
 *                                              their block
 *                                              for the others.
 * @param {string} prefix - the current selector or the selector prefix
 *                          in case of nested rules
 * @param {boolean} local - are we in @local or in @global scope?
 * @param {string} nestingDepth - are we nested in an at-rule or a selector?
 */

function atRules(state, emit, k, v, prefix, local, nestingDepth) {

  // First iterate over user-provided at-rules and return if one of them corresponds to the current one
  for (var i = 0; i < state.$atHandlers.length; i++) {

    if (state.$atHandlers[i](state, emit, k, v, prefix, local, nestingDepth)) return

  }

  // using `/^global$/.test(k[2])` rather that 'global' == k[2] gzips
  // slightly better thanks to the regexps tests further down.
  // It is slightly less efficient but this isn't a critical path.

  if (!k[3] && /^global$/.test(k[2])) {

    rules(state, emit, prefix, v, 0, nestingDepth);


  } else if (!k[3] && /^local$/.test(k[2])) {

    rules(state, emit, prefix, v, 1, nestingDepth);


  } else if (k[3] && /^adopt$/.test(k[2])) {

    if (!local || nestingDepth) return emit.err('@adopt global or nested: ' + k[0])

    if (!/^\.?[_A-Za-z][-\w]*$/.test(k[3])) return emit.err('bad adopter ' + JSON.stringify(k[3]) + ' in ' + k[0])

    i = [];
    flatIter(function(adoptee, asString) {

      if(adoptee == null || !/^\.?[_A-Za-z][-\w]*(?:\s+\.?[_A-Za-z][-\w]*)*$/.test(asString = adoptee + '')) emit.err('bad adoptee '+ JSON.stringify(adoptee) + ' in ' + k[0]);

      else i.push(asString.replace(/\./g, ''));

    })(v);

    // we may end up with duplicate classes but AFAIK it has no consequences on specificity.
    if (i.length) {
      state.localize(k[3] = k[3].replace(/\./g, ''));
      state.names[k[3]] += (' ' + i.join(' '));
    }


  } else if (!k[3] && /^(?:namespace|import|charset)$/.test(k[2])) {
    flatIter(function(v) {

      emit.atrule(k[1], k[2], v);

    })(v);


  } else if (!k[3] && /^(?:font-face|viewport)$/.test(k[2])) {
    flatIter(function(v) {

      emit.atrule(k[1], k[2], k[3], 1);

      declarations(state, emit, '', v, local);

      emit._atrule();

    })(v);

  } else if (k[3] && /^(?:media|supports|page|keyframes)$/.test(k[2])) {

    if (local && 'keyframes' == k[2]) {
      k[3] = k[3].replace(
        // generated by script/regexps.js
        /(var\([^)]+\))|:?global\(\s*([_A-Za-z][-\w]*)\s*\)|()(-?[_A-Za-z][-\w]*)/,
        state.localizeReplacer
      );
    }


    emit.atrule(k[1], k[2], k[3], 1);

    if ('page' == k[2]) {

      declarations(state, emit, '', v, local);

    } else {

      rules(
        state, emit,
        'keyframes' == k[2] ? '' : prefix,
        v, local, nestingDepth + 1
      );

    }

    emit._atrule();

  } else {

    emit.err('Unsupported at-rule: ' + k[0]);

  }
}

/**
 * Add rulesets and other CSS tree to the sheet.
 *
 * @param {object} state - holds the localizer- and walker-related methods
 *                         and state
 * @param {object} emit - the contextual emitters to the final buffer
 * @param {string} prefix - the current selector or a prefix in case of nested rules
 * @param {array|string|object} tree - a source object or sub-object.
 * @param {string} nestingDepth - are we nested in an at-rule?
 * @param {boolean} local - are we in @local or in @global scope?
 */
function rules(state, emit, prefix, tree, local, nestingDepth) {
  var k, v, inDeclaration, kk;

  switch (type.call(tree)) {

  case OBJECT:
    for (k in tree) if (own.call(tree, k)) {
      v = tree[k];

      if (prefix.length > 0 && /^[-\w$]+$/.test(k)) {
        if (!inDeclaration) {
          inDeclaration = 1;

          emit.rule(prefix);

        }
        if (/\$/.test(k)) {
          for (kk in (k = k.split('$'))) if (own.call(k, kk)) {

            declarations(state, emit, k[kk], v, local);

          }
        } else {

          declarations(state, emit, k, v, local);

        }

      } else if (/^@/.test(k)) {
        // Handle At-rules
        inDeclaration = 0;

        atRules(state, emit,
          /^(.(?:-[\w]+-)?([_A-Za-z][-\w]*))\b\s*(.*?)\s*$/.exec(k) || [k,'@','',''],
          v, prefix, local, nestingDepth
        );

      } else {
        // selector or nested sub-selectors
        inDeclaration = 0;

        rules(
          state, emit,
          // build the selector `prefix` for the next iteration.
          // ugly and full of redundant bits but so far the fastest/shortest.gz
          /*0 if*/(prefix.length > 0 && (/,/.test(prefix) || /,/.test(k))) ?

            /*0 then*/ (kk = splitSelector(prefix), splitSelector(
              local ?

                k.replace(
                  /("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,
                  state.localizeReplacer
                ) :

                k
            ).map(function (k) {
              return /&/.test(k) ? ampersand(k, kk) : kk.map(function(kk) {
                return kk + k
              }).join(',')
            }).join(',')) :

            /*0 else*/ /*1 if*/ /&/.test(k) ?

              /*1 then*/ ampersand(
                local ?

                  k.replace(
                    /("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,
                    state.localizeReplacer
                  ) :

                  k,
                [prefix]
              ) :

              /*1 else*/ prefix + (
                local ?

                  k.replace(
                    /("(?:\\.|[^"\n])*"|'(?:\\.|[^'\n])*'|\/\*[\s\S]*?\*\/)|:global\(\s*(\.-?[_A-Za-z][-\w]*)\s*\)|(\.)(-?[_A-Za-z][-\w]*)/g,
                    state.localizeReplacer
                  ) :

                  k
                ),
           v, local, nestingDepth + 1
        );

      }
    }

    break

  case ARRAY:
    for (k = 0; k < tree.length; k++){

      rules(state, emit, prefix, tree[k], local, nestingDepth);

    }
    break

  case STRING:
    // CSS hacks or ouptut of `j2c.inline`.
    if (!prefix.length) emit.err('No selector');
    emit.rule(prefix || ' ');

    declarations(state, emit, '', tree, local);

  }
}

// This is the first entry in the filters array, which is
// actually the last step of the compiler. It inserts
// closing braces to close normal (non at-) rules (those
// that start with a selector). Doing it earlier is
// impossible without passing state around in unrelated code
// or ending up with duplicated selectors when the source tree
// contains arrays.
// There's no `_rule` handler, because the core compiler never
// calls it.
function closeSelectors(next, inline) {
  var lastSelector;
  return inline ? next : {
    init: function(){lastSelector = 0; next.init();},
    done: function (raw) {
      if (lastSelector) {next._rule(); lastSelector = 0;}
      return next.done(raw)
    },
    atrule: function (rule, kind, param, takesBlock) {
      if (lastSelector) {next._rule(); lastSelector = 0;}
      next.atrule(rule, kind, param, takesBlock);
    },
    _atrule: function (rule) {
      if (lastSelector) {next._rule(); lastSelector = 0;}
      next._atrule(rule);
    },
    rule: function (selector) {
      if (selector !== lastSelector){
        if (lastSelector) next._rule();
        next.rule(selector);
        lastSelector = selector;
      }
    }
  }
}

function global(x) {
  return ':global(' + x + ')'
}

function kv (k, v, o) {
  o = {};
  o[k] = v;
  return o
}

function at (rule, params, block) {
  if (
    arguments.length < 3
  ) {
    // inner curry!
    var _at = at.bind.apply(at, [null].concat([].slice.call(arguments,0)));
    // So that it can be used as a key in an ES6 object literal.
    _at.toString = function(){return '@' + rule + ' ' + params};
    return _at
  }
  else return kv('@' + rule +' ' + params, block)
}

function j2c() {

  // the buffer that accumulates the output. Initialized in `$sink.i()`
  var buf, err;

  // the bottom of the 'codegen' stream. Mirrors the `$filter` plugin API.
  var $sink = {
    init: function(){buf=[], err=[];},
    done: function (raw) {
      if (err.length != 0) throw new Error('j2c error(s): ' + JSON.stringify(err,null,2) + 'in context:\n' + buf.join(''))
      return raw ? buf : buf.join('')
    },
    err: function(msg) {
      err.push(msg);
      buf.push('/* +++ ERROR +++ ' + msg + ' */\n');
    },
    atrule: function (rule, kind, param, takesBlock) {
      buf.push(rule, param && ' ', param, takesBlock ? ' {' : ';', _instance.endline);
    },
    // close atrule
    _atrule: function () {buf.push('}', _instance.endline);},
    rule: function (selector) {buf.push(selector, ' {', _instance.endline);},
    // close rule
    _rule: function () {buf.push('}', _instance.endline);},
    decl: function (prop, value) {buf.push(prop, prop && ':', value, ';', _instance.endline);}
  };

  // holds the `$filter` and `$at` handlers
  var $filters = [closeSelectors];
  var $atHandlers = [];

  // the public API (see the main docs)
  var _instance = {
    at: at,
    global: global,
    kv: kv,
    names: {},
    endline: '\n',
    suffix: '__j2c-' +
      // 128 bits of randomness
      Math.floor(Math.random() * 0x100000000).toString(36) + '-' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '-' +
      Math.floor(Math.random() * 0x100000000).toString(36) + '-' +
      Math.floor(Math.random() * 0x100000000).toString(36),
    $plugins: [],
    sheet: function(tree) {
      var emit = _createOrRetrieveStream(0);
      emit.init();
      rules(
        _walkers[0],
        emit,
        '', // prefix
        tree,
        1,  // local, by default
        0   // nesting depth
      );

      return emit.done()
    },
    inline: function (tree, options) {
      var emit = _createOrRetrieveStream(1);
      emit.init();
      declarations(
        _walkers[1],
        emit,
        '', // prefix
        tree,
        !(options && options.global)   // local, by default
      );
      return emit.done()
    }
  };

  // The `state` (for the core functions) / `walker` (for the plugins) tables.
  var _walkers = [
    // for j2c.sheet
    {
      // helpers for locaizing class and animation names
      localizeReplacer: _localizeReplacer, // second argument to String.prototype.replace
      localize: _localize,                 // mangles local names
      names: _instance.names,              // local => mangled mapping
      $atHandlers: $atHandlers,            // extra at-rules
      // The core walker methods, to be provided to plugins
      atrule: atRules,
      decl: declarations,
      rule: rules
    },
    // likewise, for j2c.inline (idem with `$a`, `a` and `s` removed)
    {
      localizeReplacer: _localizeReplacer,
      localize: _localize,
      names: _instance.names,
      decl: declarations
    }
  ];


  // inner helpers

  var _use = flatIter(function(plugin) {
    // `~n` is falsy for `n === -1` and truthy otherwise.
    // Works well to turn the  result of `a.indexOf(x)`
    // into a value that reflects the presence of `x` in
    // `a`.
    if (~_instance.$plugins.indexOf(plugin)) return

    _instance.$plugins.push(plugin);

    if (type.call(plugin) === FUNCTION) plugin = plugin(_instance);

    if (!plugin) return

    flatIter(function(filter) {
      $filters.push(filter);
    })(plugin.$filter || emptyArray);

    flatIter(function(handler) {
      $atHandlers.push(handler);
    })(plugin.$at || emptyArray);

    defaults(_instance.names, plugin.$names || emptyObject);

    _use(plugin.$plugins || emptyArray);

    $sink = plugin.$sink || $sink;

    defaults(_instance, plugin);
  });


  var _streams = [];
  /**
   * returns the codegen streams, creating them if necessary
   * @param
   */
  function _createOrRetrieveStream(inline) {
    // build the stream processors if needed
    if (!_streams.length) {
      // append the $sink as the ultimate filter
      $filters.push(function(_, inline) {return inline ? {init:$sink.init, decl:$sink.decl, done:$sink.done, err: $sink.err} : $sink});
      for(var i = 0; i < 2; i++){ // 0 for j2c.sheet, 1 for j2c.inline
        for (var j = $filters.length; j--;) {
          _streams[i] = freeze(
            defaults(
              $filters[j](_streams[i], !!i),
              _streams[i]
            )
          );
        }
      }
    }
    return _streams[inline]
  }

  /**
   * Returns a localized version of a given name.
   * Registers the pair in `instnace.name` if needed.
   *
   * @param {string} name - the name to localize
   * @return {string} - the localized version
   */
  function _localize(name) {
    if (!_instance.names[name]) _instance.names[name] = name + _instance.suffix;
    return _instance.names[name].match(/^\S+/)
  }

  /**
   * Used as second argument for str.replace(localizeRegex, replacer)
   * `ignore`, `global` and `(dot, name)` are mutually exclusive
   *
   * @param {string} match - the whole match (ignored)
   * @param {string|null} ignore - a comment or a string literal
   * @param {string|null} global - a global name
   * @param {string|null} dot - either '.' for a local class name or the empty string otherwise
   * @param {string|null} name - the name to localize
   * @return {string}
   */
  function _localizeReplacer(match, ignore, global$$1, dot, name) {
    return ignore || global$$1 || dot + _localize(name)
  }

  _use(emptyArray.slice.call(arguments));
  return _instance
}

module.exports = j2c;


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_verge__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_verge___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_verge__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_j2c__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_j2c___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_j2c__);




var classes = {
  scrollView: "mithril-infinite__scroll-view",
  scrollViewX: "mithril-infinite__scroll-view--x",
  scrollViewY: "mithril-infinite__scroll-view--y",
  scrollContent: "mithril-infinite__scroll-content",
  content: "mithril-infinite__content",
  pages: "mithril-infinite__pages",
  page: "mithril-infinite__page",
  pageEven: "mithril-infinite__page--even",
  pageOdd: "mithril-infinite__page--odd",
  before: "mithril-infinite__before",
  after: "mithril-infinite__after"
};

var LEEWAY = 300;

var getElementSize = function getElementSize(el, axis) {
  var styles = window.getComputedStyle(el);
  if (axis === "x") {
    var margin = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
    return el.scrollWidth + margin;
  } else {
    var _margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
    return el.scrollHeight + _margin;
  }
};

// el, axis = "y", expand = LEEWAY
var isElementInViewport = function isElementInViewport(_ref) {
  var el = _ref.el,
      _ref$axis = _ref.axis,
      axis = _ref$axis === undefined ? "y" : _ref$axis,
      _ref$leeway = _ref.leeway,
      leeway = _ref$leeway === undefined ? LEEWAY : _ref$leeway;

  return axis === "y" ? __WEBPACK_IMPORTED_MODULE_1_verge___default.a.inY(el, leeway) || __WEBPACK_IMPORTED_MODULE_1_verge___default.a.inY(el, -leeway) : axis === "x" ? __WEBPACK_IMPORTED_MODULE_1_verge___default.a.inX(el, leeway) || __WEBPACK_IMPORTED_MODULE_1_verge___default.a.inX(el, -leeway) : __WEBPACK_IMPORTED_MODULE_1_verge___default.a.inViewport(el, leeway) || __WEBPACK_IMPORTED_MODULE_1_verge___default.a.inViewport(el, -leeway);
};

var makeClassName = function makeClassName(pageNum) {
  return [classes.page, pageNum % 2 === 0 ? classes.pageEven : classes.pageOdd].join(" ");
};

var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var getPageData = function getPageData(url) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.request({
    method: "GET",
    url: url,
    initialValue: [],
    background: true
  });
};

var page = {};

page.controller = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var pageNum = opts.pageNum;
  var content = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.prop([]);
  if (opts.pageData) {
    var result = opts.pageData(pageNum);
    if (result.then) {
      // A Promise
      result.then(function (r) {
        content(r);
      });
    } else {
      content = result;
    }
  } else if (opts.pageUrl) {
    var url = opts.pageUrl(pageNum);
    getPageData(url).then(function (data) {
      return content(data), __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
    });
  }

  return {
    content: content,
    // Memoize some properties that do not change
    className: makeClassName(pageNum),
    pageTag: opts.pageTag || "div"
  };
};

page.view = function (ctrl) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var pageId = opts.pageId;
  var storedPageSize = opts.pageSizes[pageId] || 0;

  // pageSize overrides all measurements on elements here
  var pageSize = 0;
  if (opts.pageSize) {
    pageSize = opts.pageSize(ctrl.content());
    opts.updatePageSize(pageId, pageSize);
  }
  var cssSize = pageSize ? pageSize + "px" : !opts.autoSize || opts.isScrolling && storedPageSize ? storedPageSize + "px" : "auto";
  var processPageData = opts.processPageData || function (content, opts1) {
    return content ? content.map(function (data, index) {
      return opts.item(data, opts1, index);
    }) : null;
  };

  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(ctrl.pageTag, {
    "data-page": pageId,
    class: ctrl.className,
    style: storedPageSize ? _extends({}, opts.axis === "x" ? { width: cssSize } : { height: cssSize }) : {},
    config: pageSize ? null : function (el) {
      // always update the natural size
      var size = getElementSize(el, opts.axis);
      if (size) {
        opts.updatePageSize(pageId, size);
      }
      if (!storedPageSize) {
        // this is the very first measurement
        // make sure we use the first page size by calling the view again
        setTimeout(__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw, 0);
      }
    }
  }, processPageData(ctrl.content(), opts));
};

var placeholder = {};

placeholder.controller = function () {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  // Memoize some properties that do not change
  return {
    className: makeClassName(opts.pageNum)
  };
};

placeholder.view = function (ctrl) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var pageId = opts.pageId;
  var storedPageSize = opts.pageSizes[pageId] || 0;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    "data-page": pageId,
    class: ctrl.className,
    style: _extends({}, opts.axis === "x" ? { width: storedPageSize + "px" } : { height: storedPageSize + "px" })
  });
};

var j2c = new __WEBPACK_IMPORTED_MODULE_2_j2c___default.a();

/*
 * @param id: identifier, used as HTMLElement id for the attached <style></style> element
 * @param styles: list of lists style Objects
 */
var addStyle = function addStyle(id) {
  for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    styles[_key - 1] = arguments[_key];
  }

  removeStyle(id);
  var styleEl = document.createElement("style");
  if (id) {
    styleEl.setAttribute("id", id);
  }
  styles.forEach(function (styleList) {
    // each style returns a list
    if (Object.keys(styleList).length) {
      styleList.forEach(function (style) {
        var scoped = { "@global": style };
        var sheet = j2c.sheet(scoped);
        styleEl.appendChild(document.createTextNode(sheet));
      });
    }
  });
  document.head.appendChild(styleEl);
};

var removeStyle = function removeStyle(id) {
  if (id) {
    var old = document.getElementById(id);
    if (old) {
      old.parentNode.removeChild(old);
    }
  }
};

var _ref3;

var styles = [defineProperty({}, "." + classes.scrollView, (_ref3 = {
  "-webkit-overflow-scrolling": "touch",
  height: "100%"

}, defineProperty(_ref3, "&." + classes.scrollViewY, defineProperty({
  overflowX: "hidden",
  overflowY: "auto",
  height: "100%"

}, " ." + classes.scrollContent, {
  height: "100%"
})), defineProperty(_ref3, "&." + classes.scrollViewX, defineProperty({
  overflowX: "auto",
  overflowY: "hidden",
  width: "100%"

}, " ." + classes.scrollContent, {
  width: "100%"
})), _ref3))];

addStyle("mithril-infinite", styles);

var SCROLL_WATCH_TIMER = 200;
var SEL_PADDING = "000000";

var numToId = function numToId(pageNum) {
  return SEL_PADDING.substring(0, SEL_PADDING.length - ("" + pageNum).length) + pageNum;
};

var calculateCurrentPageNum = function calculateCurrentPageNum(scrollAmount, state) {
  var pageNumKeys = state.sortedKeys;
  var acc = state.beforeSize || 0;
  var currentPageNum = 1;
  for (var i = 0; i < pageNumKeys.length; i = i + 1) {
    var pageKey = pageNumKeys[i];
    if (scrollAmount > acc) {
      currentPageNum = parseInt(pageKey, 10);
    }
    acc += state.pageSizes[pageKey];
  }
  return currentPageNum;
};

var calculateContentSize = function calculateContentSize(from, to, state) {
  var fromIndex = Math.max(0, from - 1);
  if (to < fromIndex) {
    return 0;
  }
  var toIndex = to;
  var pageNumKeys = state.sortedKeys.slice(fromIndex, toIndex);
  var size = state.beforeSize || 0;
  size = pageNumKeys.reduce(function (total, pageKey) {
    return total += state.pageSizes[pageKey] || 0;
  }, size);
  size += state.afterSize || 0;
  return size;
};

var isPageInViewport = function isPageInViewport(page$$1, axis, state, scrollView) {
  if (!scrollView) {
    return false;
  }
  var id = numToId(page$$1);
  var el = scrollView.querySelector("[data-page=\"" + id + "\"]");
  return isElementInViewport({ el: el, axis: axis });
};

var updatePageSize = function updatePageSize(ctrl) {
  return function (pageId, size) {
    return ctrl.state.pageSizes[pageId] = size, ctrl.state.sortedKeys = Object.keys(ctrl.state.pageSizes).sort();
  };
};

var infinite$1 = {};

infinite$1.controller = function (opts) {
  // Memoize some properties that do not change
  var whichScroll = opts.axis === "x" ? "scrollLeft" : "scrollTop";
  var maxPages = opts.maxPages !== undefined ? opts.maxPages : Number.MAX_VALUE;
  var autoSize = opts.autoSize !== undefined && opts.autoSize === false ? false : true;
  var scrollThrottle = opts.throttle !== undefined ? opts.throttle * 1000 : SCROLL_WATCH_TIMER;
  var contentTag = opts.contentTag || "div";

  return {
    state: {
      pageSizes: {},
      sortedKeys: [],
      beforeSize: null,
      afterSize: null
    },
    scrollView: null,
    isScrolling: false,
    scrollWatchScrollingStateId: null,
    scrollWatchUpdateStateId: null,
    preloadSlots: opts.preloadPages || 1,
    boundingClientRect: {},
    currentPageNum: 0,
    scrollAmount: 0,

    // Memoized
    whichScroll: whichScroll,
    maxPages: maxPages,
    autoSize: autoSize,
    scrollThrottle: scrollThrottle,
    contentTag: contentTag
  };
};

infinite$1.view = function (ctrl, opts) {
  var state = ctrl.state;
  ctrl.scrollAmount = ctrl.scrollView ? ctrl.scrollView[ctrl.whichScroll] : 0;

  var currentPageNum = opts.currentPage ? parseInt(opts.currentPage, 10) : calculateCurrentPageNum(ctrl.scrollAmount, state);

  if (currentPageNum !== ctrl.currentPageNum && opts.pageChange) {
    opts.pageChange(currentPageNum);
  }
  ctrl.currentPageNum = currentPageNum;

  if (ctrl.scrollView && opts.getDimensions) {
    opts.getDimensions({
      scrolled: ctrl.scrollAmount,
      size: ctrl.contentSize
    });
  }

  var minPageNum = opts.from ? parseInt(opts.from, 10) : opts.currentPage ? opts.currentPage : 1;
  var maxPageNum = opts.to ? parseInt(opts.to, 10) : opts.currentPage ? opts.currentPage : ctrl.maxPages;
  var pages = [];
  var prePages = [];
  for (var i = -ctrl.preloadSlots; i <= ctrl.preloadSlots; i = i + 1) {
    var pageNum = currentPageNum + i;
    if (pageNum >= minPageNum && pageNum <= maxPageNum) {
      pages.push(pageNum);
    }
  }
  for (var _pageNum = 1; _pageNum < pages[0]; _pageNum = _pageNum + 1) {
    prePages.push(_pageNum);
  }

  var classList = [classes.scrollView, opts.axis === "x" ? classes.scrollViewX : classes.scrollViewY, opts.class].join(" ");
  ctrl.contentSize = calculateContentSize(1, maxPageNum, state);
  var isLastPageVisible = maxPageNum ? isPageInViewport(maxPageNum, opts.axis, state, ctrl.scrollView) : true;

  if (ctrl.scrollView) {
    // in case the screen size was changed, reset preloadSlots
    var boundingClientRect = ctrl.scrollView.getBoundingClientRect();
    ctrl.boundingClientRect = ctrl.boundingClientRect || boundingClientRect;
    if (boundingClientRect.width !== ctrl.boundingClientRect.width || boundingClientRect.height !== ctrl.boundingClientRect.height) {
      ctrl.preloadSlots = opts.preloadPages || 1;
    }
    ctrl.boundingClientRect = boundingClientRect;
    // calculate if we have room to load more
    var maxSlots = opts.maxPreloadPages || Number.MAX_VALUE;

    if (ctrl.contentSize && ctrl.preloadSlots < pages.length && ctrl.preloadSlots <= maxSlots && ctrl.contentSize < boundingClientRect.height) {
      ctrl.preloadSlots++;
      setTimeout(__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw, 0);
    }
  }

  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    config: function config(el, inited, context) {
      if (inited) {
        return;
      }
      if (opts.scrollView) {
        ctrl.scrollView = document.querySelector(opts.scrollView);
      } else {
        ctrl.scrollView = el;
      }
      ctrl.scrollView.className += " " + classList;

      if (opts.setDimensions) {
        var dimensions = opts.setDimensions();
        var whichSize = opts.axis === "x" ? "width" : "height";
        if (dimensions.size > 0) {
          el.style[whichSize] = dimensions.size + "px";
        }
        ctrl.scrollView[ctrl.whichScroll] = dimensions.scrolled;
      }

      var handleScroll = function handleScroll() {
        ctrl.isScrolling = true;

        // reset isScrolling state only when scrolling is done
        clearTimeout(ctrl.scrollWatchScrollingStateId);
        ctrl.scrollWatchScrollingStateId = setTimeout(function () {
          ctrl.isScrolling = false;
          // update pages
          __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
        }, ctrl.scrollThrottle);

        // throttle updates while scrolling
        if (!ctrl.scrollWatchUpdateStateId) {
          ctrl.scrollWatchUpdateStateId = setTimeout(function () {
            // update pages
            __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
            ctrl.scrollWatchUpdateStateId = null;
          }, ctrl.scrollThrottle);
        }
      };
      ctrl.scrollView.addEventListener("scroll", handleScroll);
      context.onunload = function () {
        ctrl.scrollView.removeEventListener("scroll", handleScroll);
      };
    }
  }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.scrollContent,
    style: !ctrl.autoSize ? {} : _extends({}, opts.axis === "x" ? { width: ctrl.contentSize + "px" } : { height: ctrl.contentSize + "px" }, opts.contentSize ? opts.axis === "x" ? { "min-width": opts.contentSize + "px" } : { "min-height": opts.contentSize + "px" } : {})
  }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(ctrl.contentTag, { class: classes.content }, [opts.before ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.before,
    config: function config(el) {
      // always update the natural size
      var size = getElementSize(el, opts.axis);
      if (size) {
        state.beforeSize = size;
      }
    }
  }, opts.before) : null, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.pages }, [prePages.map(function (pageNum) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(placeholder, _extends({}, opts, {
      pageNum: pageNum,
      pageId: numToId(pageNum),
      pageSizes: state.pageSizes
    }));
  }), pages.map(function (pageNum) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(page, _extends({}, opts, {
      pageNum: pageNum,
      pageId: numToId(pageNum),
      isScrolling: ctrl.isScrolling,
      pageSizes: state.pageSizes,
      updatePageSize: updatePageSize(ctrl),
      autoSize: ctrl.autoSize
    }));
  })]),
  // only show "after" when content is available
  opts.after && ctrl.contentSize ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.after,
    style: {
      // visually hide this element until the last page is into view
      // to prevent flashes of after content when scrolling fast
      visibility: isLastPageVisible ? "visible" : "hidden"
    },
    config: function config(el) {
      // always update the natural size
      var size = getElementSize(el, opts.axis);
      if (size) {
        state.afterSize = size;
      }
    }
  }, opts.after) : null])]));
};

infinite$1.isElementInViewport = isElementInViewport;

/* harmony default export */ __webpack_exports__["default"] = (infinite$1);


/***/ }),
/* 173 */
/***/ (function(module, exports) {

/*!
 * verge 1.9.1+201402130803
 * https://github.com/ryanve/verge
 * MIT License 2013 Ryan Van Etten
 */

(function(root, name, make) {
  if (typeof module != 'undefined' && module['exports']) module['exports'] = make();
  else root[name] = make();
}(this, 'verge', function() {

  var xports = {}
    , win = typeof window != 'undefined' && window
    , doc = typeof document != 'undefined' && document
    , docElem = doc && doc.documentElement
    , matchMedia = win['matchMedia'] || win['msMatchMedia']
    , mq = matchMedia ? function(q) {
        return !!matchMedia.call(win, q).matches;
      } : function() {
        return false;
      }
    , viewportW = xports['viewportW'] = function() {
        var a = docElem['clientWidth'], b = win['innerWidth'];
        return a < b ? b : a;
      }
    , viewportH = xports['viewportH'] = function() {
        var a = docElem['clientHeight'], b = win['innerHeight'];
        return a < b ? b : a;
      };
  
  /** 
   * Test if a media query is active. Like Modernizr.mq
   * @since 1.6.0
   * @return {boolean}
   */  
  xports['mq'] = mq;

  /** 
   * Normalized matchMedia
   * @since 1.6.0
   * @return {MediaQueryList|Object}
   */ 
  xports['matchMedia'] = matchMedia ? function() {
    // matchMedia must be binded to window
    return matchMedia.apply(win, arguments);
  } : function() {
    // Gracefully degrade to plain object
    return {};
  };

  /**
   * @since 1.8.0
   * @return {{width:number, height:number}}
   */
  function viewport() {
    return {'width':viewportW(), 'height':viewportH()};
  }
  xports['viewport'] = viewport;
  
  /** 
   * Cross-browser window.scrollX
   * @since 1.0.0
   * @return {number}
   */
  xports['scrollX'] = function() {
    return win.pageXOffset || docElem.scrollLeft; 
  };

  /** 
   * Cross-browser window.scrollY
   * @since 1.0.0
   * @return {number}
   */
  xports['scrollY'] = function() {
    return win.pageYOffset || docElem.scrollTop; 
  };

  /**
   * @param {{top:number, right:number, bottom:number, left:number}} coords
   * @param {number=} cushion adjustment
   * @return {Object}
   */
  function calibrate(coords, cushion) {
    var o = {};
    cushion = +cushion || 0;
    o['width'] = (o['right'] = coords['right'] + cushion) - (o['left'] = coords['left'] - cushion);
    o['height'] = (o['bottom'] = coords['bottom'] + cushion) - (o['top'] = coords['top'] - cushion);
    return o;
  }

  /**
   * Cross-browser element.getBoundingClientRect plus optional cushion.
   * Coords are relative to the top-left corner of the viewport.
   * @since 1.0.0
   * @param {Element|Object} el element or stack (uses first item)
   * @param {number=} cushion +/- pixel adjustment amount
   * @return {Object|boolean}
   */
  function rectangle(el, cushion) {
    el = el && !el.nodeType ? el[0] : el;
    if (!el || 1 !== el.nodeType) return false;
    return calibrate(el.getBoundingClientRect(), cushion);
  }
  xports['rectangle'] = rectangle;

  /**
   * Get the viewport aspect ratio (or the aspect ratio of an object or element)
   * @since 1.7.0
   * @param {(Element|Object)=} o optional object with width/height props or methods
   * @return {number}
   * @link http://w3.org/TR/css3-mediaqueries/#orientation
   */
  function aspect(o) {
    o = null == o ? viewport() : 1 === o.nodeType ? rectangle(o) : o;
    var h = o['height'], w = o['width'];
    h = typeof h == 'function' ? h.call(o) : h;
    w = typeof w == 'function' ? w.call(o) : w;
    return w/h;
  }
  xports['aspect'] = aspect;

  /**
   * Test if an element is in the same x-axis section as the viewport.
   * @since 1.0.0
   * @param {Element|Object} el
   * @param {number=} cushion
   * @return {boolean}
   */
  xports['inX'] = function(el, cushion) {
    var r = rectangle(el, cushion);
    return !!r && r.right >= 0 && r.left <= viewportW();
  };

  /**
   * Test if an element is in the same y-axis section as the viewport.
   * @since 1.0.0
   * @param {Element|Object} el
   * @param {number=} cushion
   * @return {boolean}
   */
  xports['inY'] = function(el, cushion) {
    var r = rectangle(el, cushion);
    return !!r && r.bottom >= 0 && r.top <= viewportH();
  };

  /**
   * Test if an element is in the viewport.
   * @since 1.0.0
   * @param {Element|Object} el
   * @param {number=} cushion
   * @return {boolean}
   */
  xports['inViewport'] = function(el, cushion) {
    // Equiv to `inX(el, cushion) && inY(el, cushion)` but just manually do both 
    // to avoid calling rectangle() twice. It gzips just as small like this.
    var r = rectangle(el, cushion);
    return !!r && r.bottom >= 0 && r.right >= 0 && r.top <= viewportH() && r.left <= viewportW();
  };

  return xports;
}));

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>');


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>');


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>');


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>');


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/></svg>');


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>');


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg>');


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/></svg>');


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>');


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 2,6L 4,6L 4,18L 2,18L 2,6 Z M 5,6.00001L 6,6.00001L 6,18L 5,18L 5,6.00001 Z M 7,6.00001L 10,6.00001L 10,18L 7,18L 7,6.00001 Z M 11,6L 12,6L 12,18L 11,18L 11,6 Z M 14,6L 16,6L 16,18L 14,18L 14,6 Z M 17,6L 20,6L 20,18L 17,18L 17,6 Z M 21,6L 22,6L 22,18L 21,18L 21,6 Z "/></svg>');


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#050708" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 16.9994,2.99805L 6.9994,2.99805C 5.8954,2.99805 5.0104,3.89404 5.0104,4.99805L 4.9994,20.998L 11.9994,17.998L 18.9994,20.998L 18.9994,4.99805C 18.9994,3.89404 18.1044,2.99805 16.9994,2.99805 Z "/></svg>');


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 20,12C 20,7.58172 16.4183,4 12,4C 7.58172,4 4,7.58172 4,12C 4,16.4183 7.58172,20 12,20C 16.4183,20 20,16.4183 20,12 Z M 22,12C 22,17.5228 17.5228,22 12,22C 6.47715,22 2,17.5228 2,12C 2,6.47715 6.47715,2.00001 12,2.00001C 17.5228,2.00001 22,6.47715 22,12 Z M 10,9.5C 10,10.3 9.3,11 8.5,11C 7.7,11 7,10.3 7,9.5C 7,8.7 7.7,8 8.5,8C 9.3,8 10,8.7 10,9.5 Z M 17,9.5C 17,10.3 16.3,11 15.5,11C 14.7,11 14,10.3 14,9.5C 14,8.7 14.7,8 15.5,8C 16.3,8 17,8.7 17,9.5 Z M 12,17.2303C 10.2476,17.2303 8.7057,16.509 7.81291,15.4173L 9.23025,14C 9.68254,14.7225 10.7523,15.2302 12,15.2302C 13.2477,15.2302 14.3175,14.7225 14.7697,14L 16.1871,15.4173C 15.2943,16.509 13.7524,17.2303 12,17.2303 Z "/></svg>');


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 12.1044,18.5522L 11.9994,18.6472L 11.8944,18.5522C 7.14038,14.2372 3.99939,11.3873 3.99939,8.49823C 3.99939,6.50323 5.50439,4.99823 7.49939,4.99823C 9.03738,4.99823 10.5384,5.99023 11.0664,7.35925L 12.9324,7.35925C 13.4604,5.99023 14.9614,4.99823 16.4994,4.99823C 18.4944,4.99823 19.9994,6.50323 19.9994,8.49823C 19.9994,11.3873 16.8584,14.2372 12.1044,18.5522 Z M 16.4994,2.99823C 14.7584,2.99823 13.0904,3.80524 11.9994,5.08423C 10.9084,3.80524 9.24039,2.99823 7.49939,2.99823C 4.41537,2.99823 1.99939,5.41425 1.99939,8.49823C 1.99939,12.2733 5.4014,15.3602 10.5504,20.0333L 11.9994,21.3492L 13.4484,20.0333C 18.5974,15.3602 21.9994,12.2733 21.9994,8.49823C 21.9994,5.41425 19.5834,2.99823 16.4994,2.99823 Z "/></svg>');


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="full" width="24" height="24" viewBox="0 0 24.00 24.00" enable-background="new 0 0 24.00 24.00" xml:space="preserve"><path fill="#000000" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 20.9994,10.9981L 13.9994,3.99807L 13.9994,7.99807C 6.9994,8.99807 3.9994,13.9981 2.9994,18.9981C 5.4994,15.4981 8.9994,13.8981 13.9994,13.8981L 13.9994,17.9981L 20.9994,10.9981 Z "/></svg>');


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg2" viewBox="0 0 240 240" height="240" width="240"><metadata id="metadata10"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs id="defs8" /><path id="path4" d="M 75,175 C 44.6,175 20,150.4 20,120 20,89.6 44.6,65 75,65 l 105,0 c 22.1,0 40,17.9 40,40 0,22.1 -17.9,40 -40,40 l -85,0 C 81.2,145 70,133.8 70,120 70,106.2 81.2,95 95,95 l 75,0 0,15 -75,0 c -5.5,0 -10,4.5 -10,10 0,5.5 4.5,10 10,10 l 85,0 c 13.8,0 25,-11.2 25,-25 0,-13.8 -11.2,-25 -25,-25 L 75,80 c -22.1,0 -40,17.9 -40,40 0,22.1 17.9,40 40,40 l 95,0 0,15 -95,0 z" /></svg>');


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg>');


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg2" viewBox="0 0 24 24" height="24" width="24"><metadata id="metadata10"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs id="defs8" /><path id="path4-3" d="m 13.5,22 0,-6 3,0 -2.54,-7.6299999 c -0.28,-0.82 -1.04,-1.37 -1.9,-1.37 l -0.12,0 c -0.86,0 -1.63,0.55 -1.9,1.37 L 7.5,16 l 3,0 0,6 z M 12,6.0000001 c 1.11,0 2,-0.89 2,-2 0,-1.11 -0.89,-2 -2,-2 -1.11,0 -2,0.89 -2,2 0,1.11 0.89,2 2,2 z" /></svg>');


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>');


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultVariables", function() { return variables; });
var hex = function hex(_hex) {
    var bigint = parseInt(_hex.substring(1), 16);
    var r = bigint >> 16 & 255;
    var g = bigint >> 8 & 255;
    var b = bigint & 255;
    return r + ',' + g + ',' + b;
};

var rgba = function rgba(colorStr) {
    var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    return 'rgba(' + colorStr + ',' + opacity + ')';
};

//const isTablet = window.innerWidth >= 600;
var isDesktop = window.innerWidth >= 1024;

var grid_unit = 4;
var grid_unit_component = 8;

var animation_curve_slow_in_fast_out = 'cubic-bezier(.4, 0, .2, 1)';
var animation_curve_slow_in_linear_out = 'cubic-bezier(0, 0, .2, 1)';
var animation_curve_linear_in_fast_out = 'cubic-bezier(.4, 0, 1, 1)';

var variables = {
    // util functions
    rgba: rgba,
    hex: hex,

    grid_unit: grid_unit,
    grid_unit_component: grid_unit_component,
    grid_unit_menu: 56,
    grid_unit_icon_button: 6 * grid_unit_component, // 48

    // common sizes
    unit_block_border_radius: 2,
    unit_item_border_radius: 2,
    unit_indent: 72,
    unit_side_padding: isDesktop ? 24 : 16,

    // buttons
    unit_touch_height: 48,
    unit_icon_size_small: 2 * grid_unit_component, // 16
    unit_icon_size: 3 * grid_unit_component, // 24
    unit_icon_size_medium: 4 * grid_unit_component, // 32
    unit_icon_size_large: 5 * grid_unit_component, // 40

    // screen dimensions
    unit_screen_size_extra_large: 1280,
    unit_screen_size_large: 960,
    unit_screen_size_medium: 480,
    unit_screen_size_small: 320,

    // transitions
    animation_duration: '.18s',
    animation_curve_slow_in_fast_out: animation_curve_slow_in_fast_out,
    animation_curve_slow_in_linear_out: animation_curve_slow_in_linear_out,
    animation_curve_linear_in_fast_out: animation_curve_linear_in_fast_out,
    animation_curve_default: 'ease-out',

    // font
    font_weight_light: 300,
    font_weight_normal: 400,
    font_weight_medium: 500,
    font_weight_bold: 700,
    font_size_title: 20,
    line_height: 1.3,

    // base colors
    color_primary: '33, 150, 243', // blue 500
    color_primary_active: '30, 136, 229', // blue 600
    color_primary_dark: '25, 118, 210', // blue 700
    color_primary_faded: '100, 181, 249', // blue 300
    color_primary_foreground: '255, 255, 255',

    color_light_background: '255, 255, 255',
    color_light_foreground: '0, 0, 0',
    color_dark_background: '34, 34, 34',
    color_dark_foreground: '255, 255, 255',

    // blends
    blend_light_text_primary: .87,
    blend_light_text_regular: .73,
    blend_light_text_secondary: .54,
    blend_light_text_tertiary: .40,
    blend_light_text_disabled: .26,
    blend_light_border_light: .11,
    blend_light_background_active: .14,
    blend_light_background_hover: .06,
    blend_light_background_hover_medium: .12, // for the lighter tinted icon buttons
    blend_light_background_disabled: .09,
    blend_light_overlay_background: .3,

    blend_dark_text_primary: 1,
    blend_dark_text_regular: .87,
    blend_dark_text_secondary: .70,
    blend_dark_text_tertiary: .40,
    blend_dark_text_disabled: .26,
    blend_dark_border_light: .10,
    blend_dark_background_active: .14,
    blend_dark_background_hover: .08,
    blend_dark_background_hoverMedium: .12, // for the lighter tinted icon buttons
    blend_dark_background_disabled: .12,
    blend_dark_overlay_background: .3,

    // breakpoints
    breakpoint_small_handset_portrait: 0,
    breakpoint_medium_handset_portrait: 360,
    breakpoint_large_handset_portrait: 400,
    breakpoint_small_tablet_portrait: 600,
    breakpoint_large_tablet_portrait: 720,
    // landscape
    breakpoint_small_handset_landscape: 480,
    breakpoint_medium_handset_landscape: 600,
    breakpoint_large_handset_landscape: 720,

    // environment
    env_tablet: window.innerWidth >= 600,
    env_desktop: window.innerWidth >= 1024,

    // z-index
    z_menu: 1,
    z_header_container: 2000,
    z_fixed_header_container: 3000,
    z_notification: 4000,
    z_dialog: 5000
};




/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return FastClick;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map