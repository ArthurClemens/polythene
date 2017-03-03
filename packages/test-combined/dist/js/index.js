/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 44);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_j2c_plugin_prefix_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_j2c_plugin_prefix_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_j2c_plugin_prefix_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_j2c__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_j2c___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_j2c__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mixinFlex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return styler; });




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Mixins for j2c

// Creates j2c vendor key string from vendor list
// mixin.vendorize({"user-select": "none"}, vars.prefixes_user_select)
var vendorize = function vendorize(what, prefixes) {
  var vendorsSel = prefixes.map(function (v) {
    return "_" + v + "$";
  }).join("");
  return _defineProperty({}, vendorsSel, what);
};

// Centers an item absolutely within relative parent
// mixin.fit()
var fit = function fit() {
  var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  var offsetPx = offset + "px";
  return {
    position: "absolute",
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
      "-webkit-font-smoothing": "antialiased",
      "-moz-osx-font-smoothing": "grayscale"
    };
  } else {
    return {
      "-webkit-font-smoothing": "subpixel-antialiased",
      "-moz-osx-font-smoothing": "auto"
    };
  }
};

// Breaks off a line with ...
// unless lines is "none"
// mixin.ellipsis(1, 16) // max 1 line, 16px high
// mixin.ellipsis(2, 1.3, "em") // max 2 lines, 2.6em high
var ellipsis = function ellipsis(lines, lineHeight) {
  var unit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "px";

  if (lines === "none") {
    return {
      textOverflow: "initial",
      overflow: "initial",
      display: "block",
      height: "auto"
    };
  }
  return _extends({}, {
    overflow: "hidden",
    "text-overflow": "ellipsis",
    "text-rendering": "auto" // Samsung Android
  }, lines !== undefined ? {
    "-webkit-line-clamp": lines,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box"
  } : null, lineHeight !== undefined ? {
    "max-height": lines * lineHeight + unit
  } : null);
};

// Clears float
// mixin.clearfix()
var clearfix = function clearfix() {
  return {
    "&:after": {
      content: "\"\"",
      display: "table",
      clear: "both"
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
//     [`${which}-width`]: "1px",
//
//     " html.pe-hairlines &": {
//         [`${which}-width`]: "0.5px"
//     }
// });

// Test if browser handles 0.5px borders
// and add class pe-hairlines if so
// if (window.devicePixelRatio && devicePixelRatio >= 2) {
//     const el = document.createElement("div");
//     el.style.border = ".5px solid transparent";
//     document.body.appendChild(el);
//     if (el.offsetHeight === 1) {
//         document.querySelector("html").classList.add("pe-hairlines");
//     }
//     document.body.removeChild(el);
// }

// Creates sticky headers in a scrollable list
// Does not work in Chrome: http://caniuse.com/#feat=css-sticky
// mixin.sticky()
var sticky = function sticky() {
  var zIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return {
    position: "sticky",
    top: 0,
    zIndex: zIndex
  };
};

// Creats a transition with presets
// mixin.defaultTransition("opacity", vars.animation_duration)
var defaultTransition = function defaultTransition() {
  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "all";
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].animation_duration;
  var curve = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].animation_curve_default;
  return {
    transitionDelay: 0,
    transitionDuration: duration,
    transitionTimingFunction: curve,
    transitionProperty: properties
  };
};

var mixin = {
  clearfix: clearfix,
  defaultTransition: defaultTransition,
  ellipsis: ellipsis,
  fit: fit,
  fontSmoothing: fontSmoothing,
  hairline: hairline,
  sticky: sticky,
  vendorize: vendorize
};

var layout = [{
  "display": "-webkit-box"
}, {
  "display": "-moz-box"
}, {
  "display": "-ms-flexbox",
  "-ms-flex-preferred-size": "initial" // IE10
}, {
  "display": "-webkit-flex"
}, {
  "display": "flex"
}];

var layoutInline = [layout, {
  "display": "-ms-inline-flexbox"
}, {
  "display": "-webkit-inline-flex"
}, {
  "display": "inline-flex"
}];

var layoutHorizontal = [layout, {
  "-ms-flex-direction": "row",
  "-webkit-flex-direction": "row",
  "flex-direction": "row"
}];

var layoutHorizontalReverse = [layout, {
  "-ms-flex-direction": "row-reverse",
  "-webkit-flex-direction": "row-reverse",
  "flex-direction": "row-reverse"
}];

var layoutVertical = [layout, {
  "-ms-flex-direction": "column",
  "-webkit-flex-direction": "column",
  "flex-direction": "column"
}];

var layoutVerticalReverse = [layout, {
  "-ms-flex-direction": "column-reverse",
  "-webkit-flex-direction": "column-reverse",
  "flex-direction": "column-reverse"
}];

var layoutWrap = [layout, {
  "-ms-flex-wrap": "wrap",
  "-webkit-flex-wrap": "wrap",
  "flex-wrap": "wrap"
}];

var layoutWrapReverse = [layout, {
  "-ms-flex-wrap": "wrap-reverse",
  "-webkit-flex-wrap": "wrap-reverse",
  "flex-wrap": "wrap-reverse"
}];

var layoutStart = [layout, {
  "-ms-flex-align": "start",
  "-webkit-align-items": "flex-start",
  "align-items": "flex-start"
}];

var layoutCenter = [layout, {
  "-ms-flex-align": "center",
  "-webkit-align-items": "center",
  "align-items": "center"
}];

var layoutEnd = [layout, {
  "-ms-flex-align": "end",
  "-webkit-align-items": "flex-end",
  "align-items": "flex-end"
}];

var layoutJustified = [layout, {
  "-ms-flex-line-pack": "stretch", // IE10
  "-ms-flex-pack": "justify",
  "-webkit-justify-content": "space-between",
  "justify-content": "space-between"
}];

var layoutStartJustified = [layout, {
  "-ms-flex-align": "start", // IE10
  "-ms-flex-pack": "start",
  "-webkit-justify-content": "flex-start",
  "justify-content": "flex-start"
}];

var layoutCenterJustified = [layout, {
  "-ms-flex-pack": "center",
  "-webkit-justify-content": "center",
  "justify-content": "center"
}];

var layoutEndJustified = [layout, {
  "-ms-flex-pack": "end",
  "-webkit-justify-content": "flex-end",
  "justify-content": "flex-end"
}];

var layoutCenterCenter = [layoutCenterJustified, layoutCenter];

var layoutAroundJustified = [layout, {
  "-ms-flex-pack": "distribute",
  "-webkit-justify-content": "space-around",
  "justify-content": "space-around"
}];

var flex = function flex() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  return [{
    "-webkit-box-flex": num
  }, {
    "-moz-box-flex": num
  }, {
    "-webkit-flex": num
  }, {
    "-ms-flex": num
  }, {
    "flex": num
  }, num === 1 ? {
    "-webkit-flex-basis": "0.000000001px"
  } : {}, num === 1 ? {
    "flex-basis": "0.000000001px"
  } : {}];
};

var flexAuto = {
  "-ms-flex": "1 1 auto",
  "-webkit-flex-basis": "auto",
  "flex-basis": "auto"
};

var flexAutoVertical = {
  "-ms-flex": "1 1 auto",
  "-webkit-flex-basis": "auto",
  "flex-basis": "auto"
};

var flexIndex = function flexIndex(index) {
  return {
    "-ms-flex": index,
    "-webkit-flex": index,
    "flex": index
  };
};

var flexGrow = function flexGrow(value) {
  return {
    "-webkit-flex-grow": value,
    "flex-grow": value
  };
};

var selfStart = {
  "-ms-flex-item-align": "start", // IE10
  "-ms-align-self": "flex-start",
  "-webkit-align-self": "flex-start",
  "align-self": "flex-start"
};

var selfCenter = {
  "-ms-flex-item-align": "center", // IE10
  "-ms-align-self": "center",
  "-webkit-align-self": "center",
  "align-self": "center"
};

var selfEnd = {
  "-ms-flex-item-align": "end", // IE10
  "-ms-align-self": "flex-end",
  "-webkit-align-self": "flex-end",
  "align-self": "flex-end"
};

var selfStretch = {
  "-ms-flex-item-align": "stretch", // IE10
  "-ms-align-self": "stretch",
  "-webkit-align-self": "stretch",
  "align-self": "stretch"
};

var mixinFlex = {
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
};

var j2c = new __WEBPACK_IMPORTED_MODULE_2_j2c___default.a(__WEBPACK_IMPORTED_MODULE_1_j2c_plugin_prefix_browser__["prefixPlugin"]);
var ID_REGEX = /[^a-z0-9\-]/g;

/*
 * @param id: identifier, used as HTMLElement id for the attached <style></style> element
 * @param styles: list of lists style Objects
 */
var add = function add(id) {
  for (var _len = arguments.length, styles = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    styles[_key - 1] = arguments[_key];
  }

  addToDocument.apply(undefined, [{
    id: id
  }].concat(styles));
};

/*
 * Removes a style from head.
 */
var remove = function remove(id) {
  if (id) {
    var old = document.getElementById(id);
    if (old && old.parentNode) {
      old.parentNode.removeChild(old);
    }
  }
};

/*
 * opts: options object
 * id: identifier, used as HTMLElement id for the attached <style></style> element
 * document: document reference; default window.document
 * styles: list of lists style objects
 */
var addToDocument = function addToDocument(opts) {
  for (var _len2 = arguments.length, styles = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    styles[_key2 - 1] = arguments[_key2];
  }

  var id = opts.id.replace(ID_REGEX, "_");
  var documentRef = opts.document || window.document;
  remove(id);
  var styleEl = documentRef.createElement("style");
  if (id) {
    styleEl.setAttribute("id", id);
  }
  styles.forEach(function (styleList) {
    // each style returns a list
    if (Object.keys(styleList).length) {
      styleList.forEach(function (style) {
        var scoped = {
          "@global": style
        };
        var sheet = j2c.sheet(scoped);
        styleEl.appendChild(documentRef.createTextNode(sheet));
      });
    }
  });
  documentRef.head.appendChild(styleEl);
};

/*
 * Adds styles to head for a component.
 * @param selector: Array of Strings: selectors
 * @param vars: Object configuration variables
 * @param styleFns: Array of Functions: (selector, componentVars) => [j2c style objects]
*/
var generateStyles = function generateStyles(selectors, vars$$1, styleFns) {
  var selector = selectors.join("");
  var id = selector.trim().replace(/^[^a-z]?(.*)/, "$1");
  add(id, styleFns.map(function (fn) {
    return fn(selector, vars$$1);
  }));
};

var styler = {
  add: add,
  addToDocument: addToDocument,
  remove: remove,
  generateStyles: generateStyles
};




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(3);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_polythene_core__["a"]; });


// Find the complete info in the README!




/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return variables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return touchStartEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return touchEndEvent; });
/* unused harmony export throttle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return unsubscribe; });
/* unused harmony export emit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return animationEndEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return multiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return filterSupportedAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return prop; });


// Theme variables
// How to change these variables for your app - see the README.

var hex = function hex(_hex) {
  var bigint = parseInt(_hex.substring(1), 16);
  var r = bigint >> 16 & 255;
  var g = bigint >> 8 & 255;
  var b = bigint & 255;
  return r + "," + g + "," + b;
};

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + "," + opacity + ")";
};

//const isTablet = window.innerWidth >= 600;
var isDesktop = window.innerWidth >= 1024;

var grid_unit = 4;
var grid_unit_component = 8;

var animation_curve_slow_in_fast_out = "cubic-bezier(.4, 0, .2, 1)";
var animation_curve_slow_in_linear_out = "cubic-bezier(0, 0, .2, 1)";
var animation_curve_linear_in_fast_out = "cubic-bezier(.4, 0, 1, 1)";

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
  animation_duration: ".18s",
  animation_curve_slow_in_fast_out: animation_curve_slow_in_fast_out,
  animation_curve_slow_in_linear_out: animation_curve_slow_in_linear_out,
  animation_curve_linear_in_fast_out: animation_curve_linear_in_fast_out,
  animation_curve_default: "ease-out",

  // font
  font_weight_light: 300,
  font_weight_normal: 400,
  font_weight_medium: 500,
  font_weight_bold: 700,
  font_size_title: 20,
  line_height: 1.3,

  // base colors
  color_primary: "33, 150, 243", // blue 500
  color_primary_active: "30, 136, 229", // blue 600
  color_primary_dark: "25, 118, 210", // blue 700
  color_primary_faded: "100, 181, 249", // blue 300
  color_primary_foreground: "255, 255, 255",

  color_light_background: "255, 255, 255",
  color_light_foreground: "0, 0, 0",
  color_dark_background: "34, 34, 34",
  color_dark_foreground: "255, 255, 255",

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
  prefixes_animation: ["o", "moz", "webkit"],
  prefixes_appearance: ["o", "moz", "ms", "webkit"],
  prefixes_background_size: ["o", "moz", "webkit"],
  prefixes_box_shadow: ["moz", "webkit"],
  prefixes_keyframes: ["o", "moz", "webkit"],
  prefixes_transform: ["o", "moz", "ms", "webkit"],
  prefixes_transition: ["o", "moz", "webkit"],
  prefixes_user_select: ["moz", "ms", "webkit"],

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

var isTouch = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

var touchStartEvent = isTouch ? "click" : "mousedown";

var touchEndEvent = isTouch ? "click" : "mouseup";

document.querySelector("html").classList.add(isTouch ? "pe-touch" : "pe-no-touch");

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

window.addEventListener("resize", function (e) {
  return emit("resize", e);
});
window.addEventListener("scroll", function (e) {
  return emit("scroll", e);
});
window.addEventListener("keydown", function (e) {
  return emit("keydown", e);
});
window.addEventListener(touchEndEvent, function (e) {
  return emit(touchEndEvent, e);
});

var evts = {
  "animation": "animationend",
  "OAnimation": "oAnimationEnd",
  "MozAnimation": "animationend",
  "WebkitAnimation": "webkitAnimationEnd"
};

var element = function element() {
  return document.createElement("fakeelement");
};

var animationEndEvent = function animationEndEvent() {
  var el = element();
  for (var a in evts) {
    if (el.style[a] !== undefined) {
      return evts[a];
    }
  }
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
Helper module to manage multiple items of the same component type.
*/
/*
mOpts:
- instance
- defaultId
- element
- placeholder
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
      var opts = typeof itemOpts === "function" ? itemOpts() : itemOpts;
      if (opts.didShow) {
        opts.didShow(instanceId);
      }
      return resolveShow(instanceId);
    };
    var showPromise = new Promise(function (resolve) {
      return resolveShow = resolve;
    });

    var resolveHide = void 0;
    var didHide = function didHide() {
      var opts = typeof itemOpts === "function" ? itemOpts() : itemOpts;
      if (opts.didHide) {
        opts.didHide(instanceId);
      }
      if (mOpts.queue) {
        _remove(instanceId);
      }
      return resolveHide(instanceId);
    };

    var hidePromise = new Promise(function (resolve) {
      return resolveHide = resolve;
    });

    return _extends({}, mOpts, {
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
      return _remove(instanceId);
    },

    pause: function pause() {
      var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;
      return setPauseState(true, instanceId);
    },

    unpause: function unpause() {
      var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;
      return setPauseState(false, instanceId);
    },

    view: function view() {
      var candidates = items.filter(function (item) {
        return item.show;
      });
      document.body.classList[candidates.length ? "add" : "remove"](mOpts.bodyShowClass);
      return !candidates.length ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(mOpts.placeholder) // placeholder because we cannot return null
      : __WEBPACK_IMPORTED_MODULE_0_mithril___default()(mOpts.element, candidates.map(function (itemData) {
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(mOpts.instance, _extends({}, itemData, {
          transitions: mOpts.transitions,
          key: itemData.key || itemData.instanceId
        }));
      }));
    }
  };
};

/*
Generic show/hide transition module
*/

// defaults
var SHOW_DURATION = .220; // default dialog timing
var HIDE_DURATION = .200; // default dialog timing
var SHOW_DELAY = 0;
var HIDE_DELAY = 0;
var TRANSITION = "both";

// See: transition
var show = function show(opts) {
  return transition(opts, "show");
};

var hide = function hide(opts) {
  return transition(opts, "hide");
};

var getTiming = function getTiming(opts, state, showAttr, hideAttr, defaultShowTiming, defaultHideTiming) {
  var transition = opts.transition || TRANSITION;
  if (transition === "none") {
    return 0;
  } else if (transition === "show" && state === "hide") {
    return 0;
  } else if (transition === "hide" && state === "show") {
    return 0;
  } else {
    // both
    return state === "show" ? opts[showAttr] !== undefined ? opts[showAttr] : defaultShowTiming : opts[hideAttr] !== undefined ? opts[hideAttr] : defaultHideTiming;
  }
};

/*
opts:
- transition
- showDuration
- hideDuration

- state (show, hide)
*/
var getDuration = function getDuration(opts, state) {
  return getTiming(opts, state, "showDuration", "hideDuration", SHOW_DURATION, HIDE_DURATION);
};

/*
opts:
- transition (show, hide, both)
- showDelay
- hideDelay

- state (show, hide)
*/
var getDelay = function getDelay(opts, state) {
  return getTiming(opts, state, "showDelay", "hideDelay", SHOW_DELAY, HIDE_DELAY);
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
  var el = opts.el;
  if (!el) {
    return Promise.resolve();
  } else {
    return new Promise(function (resolve) {
      var transitionDuration = getDuration(opts, state) * 1000;
      var delay = getDelay(opts, state) * 1000;
      var style = el.style;

      var beforeTransition = opts.beforeShow && state === "show" ? function () {
        style.transitionDuration = "0ms";
        style.transitionDelay = "0ms";
        opts.beforeShow();
      } : null;

      var applyTransition = function applyTransition() {
        style.transitionDuration = transitionDuration + "ms";
        style.transitionDelay = delay + "ms";
        if (opts.showClass) {
          el.classList[state === "show" ? "add" : "remove"](opts.showClass);
        }
        if (opts.show && typeof opts.show === "function" && state === "show") {
          opts.show();
        }
        if (opts.hide && typeof opts.hide === "function" && state === "hide") {
          opts.hide();
        }
      };

      var applyAfterTransition = function applyAfterTransition() {
        if (opts.afterHide && state === "hide") {
          style.transitionDuration = "0ms";
          style.transitionDelay = "0ms";
          opts.afterHide();
        }
      };

      var doTransition = function doTransition() {
        applyTransition();
        setTimeout(function () {
          return applyAfterTransition(), resolve();
        }, transitionDuration + delay);
      };

      var maybeDelayTransition = function maybeDelayTransition() {
        if (transitionDuration === 0) {
          doTransition();
        } else {
          setTimeout(doTransition, 0);
        }
      };

      if (beforeTransition) {
        beforeTransition();
        setTimeout(maybeDelayTransition, 0);
      } else {
        maybeDelayTransition();
      }
    });
  }
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var r = function r(acc, p) {
  return acc[p] = 1, acc;
};

/* 
Separately handled props:
- class
- element
*/

var defaultAttrs = [
// Mithril
"key", "oninit", "oncreate", "onupdate", "onbeforeremove", "onremove", "onbeforeupdate", "style", "href",
// Polythene
// see also "Separately handled props" above
"id", "tabindex"].reduce(r, {});

var filterSupportedAttributes = function filterSupportedAttributes(attrs) {
  var componentAttrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var supported = _extends$1({}, defaultAttrs, componentAttrs.reduce(r, {}));
  return Object.keys(attrs).reduce(function (acc, key) {
    return supported[key] ? acc[key] = attrs[key] : null, acc;
  }, {});
};

var prop = function prop(x) {
  var p = x;
  return function (args) {
    if (args === undefined) {
      return p;
    } else {
      p = args;
    }
  };
};




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_svg__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */






var vars$1 = {
  size_small: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_small,
  size_regular: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size,
  size_medium: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_medium,
  size_large: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_large,
  color_light: "currentcolor",
  color_dark: "currentcolor"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iconSizesPx = function iconSizesPx() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size;
  return {
    width: size + "px",
    height: size + "px"
  };
};

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
    display: "inline-block",
    verticalAlign: "middle",
    backgroundRepeat: "no-repeat",
    position: "relative",
    fontSize: 0,
    lineHeight: 0,

    ".pe-icon--avatar img": {
      border: "none",
      borderRadius: "50%",
      width: "100%",
      height: "100%"
    },

    " img": {
      height: "100%"
    },

    " svg": {
      width: "100%",
      height: "100%"
    },

    ".pe-icon--small": iconSizesPx(componentVars.size_small),
    ".pe-icon--regular": iconSizesPx(componentVars.size_regular),
    ".pe-icon--medium": iconSizesPx(componentVars.size_medium),
    ".pe-icon--large": iconSizesPx(componentVars.size_large)
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector, {
    color: componentVars["color_" + tint] || "currentcolor"
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-icon";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  icon: "pe-icon",
  avatar: "pe-icon--avatar",
  small: "pe-icon--small",
  regular: "pe-icon--regular",
  medium: "pe-icon--medium",
  large: "pe-icon--large"
};

var typeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large
};

var classForType = function classForType() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return typeClasses[mode];
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["d" /* filterSupportedAttributes */])(attrs), {
    class: [classes.icon, classForType(attrs.type), attrs.avatar ? classes.avatar : null, attrs.class].join(" ")
  }, attrs.events ? attrs.events : null);
  var content = attrs.content ? attrs.content : attrs.svg ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_svg__["a" /* default */], _extends({}, attrs.svg)) : attrs.msvg ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_svg__["a" /* default */], attrs.msvg) : attrs.src ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", { src: attrs.src }) : attrs.children || vnode.children;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var icon = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = icon;


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */





var vars$1 = {
  transition: "box-shadow " + __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].animation_duration + " ease-out",

  "shadow-top-z-1": "initial",
  "shadow-bottom-z-1": "0 1px 4px 0 rgba(0, 0, 0, 0.37)",

  "shadow-top-z-2": "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
  "shadow-bottom-z-2": "0 6px 10px 0 rgba(0, 0, 0, 0.3)",

  "shadow-top-z-3": "0 11px 7px 0 rgba(0, 0, 0, 0.19)",
  "shadow-bottom-z-3": "0 13px 25px 0 rgba(0, 0, 0, 0.3)",

  "shadow-top-z-4": "0 14px 12px 0 rgba(0, 0, 0, 0.17)",
  "shadow-bottom-z-4": "0 20px 40px 0 rgba(0, 0, 0, 0.3)",

  "shadow-top-z-5": "0 17px 17px 0 rgba(0, 0, 0, 0.15)",
  "shadow-bottom-z-5": "0 27px 55px 0 rgba(0, 0, 0, 0.3)",

  "shadow-down-z-1": "inset 0px 1px 2px -1px rgba(0, 0, 0, 0.15)",
  "shadow-down-z-2": "inset 0px 4px 6px -3px rgba(0, 0, 0, 0.25)"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var shadowDirective = function shadowDirective(dir) {
  return {
    boxShadow: dir
  };
};

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].fit(), {
    borderRadius: "inherit",
    pointerEvents: "none",

    " .pe-shadow__bottom, .pe-shadow__top": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].fit(), {
      borderRadius: "inherit"
    }],

    ".pe-shadow--animated": {
      " .pe-shadow__bottom, .pe-shadow__top": {
        transition: componentVars.transition
      }
    }
  }, [1, 2, 3, 4, 5].map(function (index) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, " .pe-shadow__top.pe-shadow--z-" + index, shadowDirective(componentVars["shadow-top-z-" + index])), _defineProperty(_ref, " .pe-shadow__bottom.pe-shadow--z-" + index, shadowDirective(componentVars["shadow-bottom-z-" + index])), _ref;
  })])];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout];
var selector = ".pe-shadow";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-shadow",
  topShadow: "pe-shadow__top",
  bottomShadow: "pe-shadow__bottom",
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--z-"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var depthClass = "" + classes.depth_n + Math.min(5, attrs.z !== undefined ? attrs.z : 1);
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["d" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.animated && classes.animated, attrs.class].join(" ")
  });
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  var shadowContent = [content, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: [classes.bottomShadow, depthClass].join(" ")
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: [classes.topShadow, depthClass].join(" ")
  })];
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, shadowContent, attrs.after]);
};

var shadow = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = shadow;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_ripple__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return vars$1; });






var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;
var touch_height = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_touch_height;
var height = 36;

var vars$1 = {
  margin_h: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit,
  border_radius: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_item_border_radius,
  font_size: 14,
  font_weight: 500,
  outer_padding_v: (touch_height - height) / 2,
  padding_h: 2 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit,
  padding_v: 11,
  min_width: 8 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component,
  text_transform: "uppercase",
  border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border

  color_light_background: "transparent",
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_active_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_background_active),
  color_light_disabled_background: "transparent",
  color_light_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_disabled),

  // border colors may be set in theme; disabled by default
  // color_light_border:              "transparent", // only specify this variable to get all 4 states
  // color_light_hover_border:        "transparent",
  // color_light_active_border:       "transparent",
  // color_light_disabled_border:     "transparent",

  color_dark_background: "transparent",
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_active_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_background_active),
  color_dark_disabled_background: "transparent",
  color_dark_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_disabled)

};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseLayout = (function (selector) {
  return [_defineProperty({}, selector, [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].vendorize({
    userSelect: "none"
  }, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].prefixes_user_select), {
    outline: "none",
    padding: 0,
    textDecoration: "none",
    textAlign: "center",
    cursor: "pointer",

    ".pe-button--selected, &.pe-button--disabled, &.pe-button--inactive": {
      cursor: "default",
      pointerEvents: "none"
    },

    ".pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1
      }
    },

    " .pe-button__content": {
      position: "relative",
      borderRadius: "inherit"
    },

    " .pe-button__label": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].fontSmoothing(), {
      position: "relative",
      display: "block",
      borderRadius: "inherit",
      pointerEvents: "none"
    }],

    " .pe-button__wash, .pe-button__focus": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].defaultTransition("background-color"), __WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].fit(), {
      borderRadius: "inherit",
      pointerEvents: "none"
    }],

    " .pe-button__focus": {
      opacity: 0
    },

    " .pe-button__wash": {
      zIndex: 0
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty$1({}, selector, {
    display: "inline-block",
    minWidth: componentVars.min_width + "px",
    margin: "0 " + componentVars.margin_h + "px",
    padding: componentVars.outer_padding_v + "px 0",
    background: "transparent",
    border: "none",

    " .pe-button__content": {
      position: "relative",
      borderWidth: 0,
      padding: "0 " + componentVars.padding_h + "px",
      borderRadius: componentVars.border_radius + "px"
    },

    " .pe-button__label": {
      padding: componentVars.padding_v + "px 0",
      fontSize: componentVars.font_size + "px",
      lineHeight: componentVars.font_size + "px",
      fontWeight: componentVars.font_weight,
      textTransform: componentVars.text_transform,
      whiteSpace: "pre"
    },

    ".pe-button--borders": {
      " .pe-button__wash, pe-button__focus, .pe-ripple": __WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].fit(-1),

      " .pe-button__content": {
        borderStyle: "solid",
        borderWidth: "1px"
      },
      " .pe-button__label": {
        padding: componentVars.padding_v - 1 + "px 0"
      }
    }
  })];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var activeBorder = componentVars["color_" + tint + "_active_border"] || normalBorder;
  var disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
  return [_defineProperty$2({}, scope + selector, {
    "&, &:link, &:visited": {
      color: componentVars["color_" + tint + "_text"]
    },

    " .pe-button__content": {
      backgroundColor: componentVars["color_" + tint + "_background"],
      borderColor: normalBorder
    },

    ".pe-button--disabled": {
      color: componentVars["color_" + tint + "_disabled_text"],

      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_disabled_background"],
        borderColor: disabledBorder
      }
    },

    ".pe-button--selected": {
      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_active_background"],
        borderColor: activeBorder
      },
      " .pe-button__focus": {
        opacity: 1,
        backgroundColor: componentVars["color_" + tint + "_focus_background"]
      }
    },

    ".pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1,
        backgroundColor: componentVars["color_" + tint + "_focus_background"]
      }
    }
  })];
};

var noTouchStyle = function noTouchStyle(scope, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
  return [_defineProperty$2({}, scope + selector + ":hover", {
    ":not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
      backgroundColor: componentVars["color_" + tint + "_hover_background"],
      borderColor: hoverBorder
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark"), // inside dark theme
  noTouchStyle("html.pe-no-touch ", selector, componentVars, "light"), noTouchStyle("html.pe-no-touch .pe-dark-theme ", selector, componentVars, "dark")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var baseSelector = ".pe-button";
var selector = ".pe-button.pe-text-button";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([baseSelector], vars$1, [baseLayout]);
__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-button pe-text-button",
  content: "pe-button__content",
  label: "pe-button__label",
  wash: "pe-button__wash",
  focus: "pe-button__focus",
  selected: "pe-button--selected",
  disabled: "pe-button--disabled",
  borders: "pe-button--borders",
  inactive: "pe-button--inactive",
  focused: "pe-button--focus"
};

var EL_ATTRS = ["formaction", "type"];

var view = function view(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  var noink = attrs.ink !== undefined && attrs.ink === false;
  var disabled = attrs.disabled;
  var element = attrs.element || "a";
  var tabIndex = disabled || attrs.inactive ? -1 : attrs.tabindex || 0;
  var onClickHandler = attrs.events && attrs.events.onclick;
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["d" /* filterSupportedAttributes */])(attrs, EL_ATTRS), {
    class: [attrs.parentClass || classes.component, attrs.selected ? classes.selected : null, disabled ? classes.disabled : null, attrs.inactive ? classes.inactive : null, attrs.borders ? classes.borders : null, state.focus ? classes.focused : null, attrs.class].join(" "),
    tabIndex: tabIndex,
    // handle focus events
    onfocus: function onfocus() {
      return state.focus = !state.mouseover;
    },
    onblur: function onblur() {
      return state.focus = false;
    },
    // don"t show focus on click (detected by not being in mouse over state)
    onmouseover: function onmouseover() {
      return state.mouseover = true;
    },
    onmouseout: function onmouseout() {
      return state.mouseover = false;
    },
    // if focus, dispatch click event on ENTER
    onkeydown: function onkeydown(e) {
      if (e.which === 13 && state.focus) {
        state.focus = false;
        if (onClickHandler) {
          onClickHandler(e);
        }
      }
    }
  }, attrs.style ? { style: {} } : null, attrs.events, attrs.url, disabled ? { disabled: true } : null);
  var children = attrs.children || vnode.children;
  var label = attrs.content ? attrs.content : attrs.label ? _typeof(attrs.label) === "object" ? attrs.label : __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.label }, attrs.label) : children && children[0] ? children : null;
  var noWash = disabled || attrs.wash !== undefined && !attrs.wash;
  var content = label ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.content,
    style: attrs.style || {}
  }, [!disabled && attrs.shadowComponent // "protected" option, used by raised-button
  ? attrs.shadowComponent : null,
  // ripple
  disabled || noink ? null : __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_ripple__["a" /* default */], _extends({}, attrs.ripple, {
    getTarget: function getTarget() {
      return vnode.dom;
    }
  })),
  // hover
  noWash ? null : __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.wash }),
  // focus
  disabled ? null : __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.focus }), label]) : null;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var button = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    vnode.state.focus = false;
    vnode.state.mouseover = false;
  },
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = button;


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return vars$1; });






var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;
var padding = (__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_icon_button - __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size) / 2; // 12
var padding_compact = (__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_icon_button - __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size) / 3; // 8

var vars$1 = {
  padding: padding,
  padding_compact: padding_compact,

  color_background: "transparent", // only specify this variable to get all 2 states
  // theme specific background colors may be set in theme; disabled by default
  // color_light_background:    "none",
  // color_dark_background:     "none",

  color_light: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_disabled: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_wash_opacity: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_background_hover_medium,
  color_light_focus_opacity: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_background_hover_medium,

  color_dark: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_disabled: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_wash_opacity: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_background_hover_medium,
  color_dark_focus_opacity: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_background_hover_medium

};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
    // don"t set button size to facilitate different icon sizes
    display: "inline-block",
    "vertical-align": "middle",
    cursor: "pointer",
    position: "relative",
    "font-size": "1rem",
    "border-radius": "50%",
    border: "none",

    " .pe-icon-button__content": {
      "line-height": 1,
      padding: componentVars.padding + "px"
    },

    ".pe-icon-button--compact": {
      " .pe-icon-button__content": {
        padding: componentVars.padding_compact + "px"
      }
    }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector, {
    color: componentVars["color_" + tint],
    backgroundColor: componentVars["color_" + tint + "_background"] || componentVars["color_background"],
    " .pe-button__wash": {
      opacity: componentVars["color_" + tint + "_wash_opacity"]
    },

    ".pe-button--focus, &.pe-button--selected": {
      " .pe-button__focus": {
        opacity: componentVars["color_" + tint + "_focus_opacity"],
        backgroundColor: "currentcolor"
      }
    },

    ".pe-button--disabled": {
      color: componentVars["color_" + tint + "_disabled"]
    }
  })];
};

var noTouchStyle = function noTouchStyle(scope, selector, componentVars, tint) {
  var backgroundColor = tint === "light" ? "currentcolor" : componentVars["color_" + tint];
  return [_defineProperty$1({}, scope + selector + ":hover", {
    " .pe-button__wash": {
      backgroundColor: backgroundColor
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark"), // inside dark theme
  noTouchStyle("html.pe-no-touch ", selector, componentVars, "light"), noTouchStyle("html.pe-no-touch .pe-dark-theme ", selector, componentVars, "dark")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-button.pe-icon-button";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-button pe-icon-button",
  content: "pe-icon-button__content",
  compact: "pe-icon-button--compact"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.icon ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */], attrs.icon) : attrs.children || vnode.children;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_button__["a" /* default */], _extends({}, {
    content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.content }, content),
    parentClass: [attrs.parentClass || classes.component, attrs.compact ? classes.compact : null].join(" "),
    // defaults
    wash: false,
    animateOnTap: false
  }, attrs));
};

var iconButton = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = iconButton;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_dialog__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_fab__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_polythene_icon_button__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_polythene_list__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_polythene_list_tile__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_polythene_menu__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_polythene_radio_button__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_polythene_raised_button__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_polythene_ripple__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_polythene_shadow__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_polythene_svg__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_polythene_switch_button__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_polythene_tabs__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_polythene_textfield__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_polythene_toolbar__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_polythene_utilities__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_polythene_theme__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "button", function() { return __WEBPACK_IMPORTED_MODULE_0_polythene_button__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "checkbox", function() { return __WEBPACK_IMPORTED_MODULE_1_polythene_checkbox__["a"]; });
/* unused harmony reexport defaultVariables */
/* unused harmony reexport isTouch */
/* unused harmony reexport touchStartEvent */
/* unused harmony reexport touchEndEvent */
/* unused harmony reexport throttle */
/* unused harmony reexport subscribe */
/* unused harmony reexport unsubscribe */
/* unused harmony reexport emit */
/* unused harmony reexport animationEndEvent */
/* unused harmony reexport multiple */
/* unused harmony reexport show */
/* unused harmony reexport hide */
/* unused harmony reexport filterSupportedAttributes */
/* unused harmony reexport prop */
/* unused harmony reexport mixin */
/* unused harmony reexport flex */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "styler", function() { return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dialog", function() { return __WEBPACK_IMPORTED_MODULE_4_polythene_dialog__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "fab", function() { return __WEBPACK_IMPORTED_MODULE_5_polythene_fab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return __WEBPACK_IMPORTED_MODULE_6_polythene_icon__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "iconButton", function() { return __WEBPACK_IMPORTED_MODULE_7_polythene_icon_button__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return __WEBPACK_IMPORTED_MODULE_8_polythene_list__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "listTile", function() { return __WEBPACK_IMPORTED_MODULE_9_polythene_list_tile__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return __WEBPACK_IMPORTED_MODULE_10_polythene_menu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "radioButton", function() { return __WEBPACK_IMPORTED_MODULE_11_polythene_radio_button__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "raisedButton", function() { return __WEBPACK_IMPORTED_MODULE_12_polythene_raised_button__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ripple", function() { return __WEBPACK_IMPORTED_MODULE_13_polythene_ripple__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "shadow", function() { return __WEBPACK_IMPORTED_MODULE_14_polythene_shadow__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "svg", function() { return __WEBPACK_IMPORTED_MODULE_15_polythene_svg__["a"]; });
/* unused harmony reexport switchButton */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tabs", function() { return __WEBPACK_IMPORTED_MODULE_17_polythene_tabs__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "textfield", function() { return __WEBPACK_IMPORTED_MODULE_18_polythene_textfield__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "toolbar", function() { return __WEBPACK_IMPORTED_MODULE_19_polythene_toolbar__["a"]; });
/* unused harmony reexport easing */
/* unused harmony reexport scrollTo */
/* unused harmony reexport Timer */
/* unused harmony reexport vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_polythene_fastclick__ = __webpack_require__(29);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_polythene_css_classes__ = __webpack_require__(24);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_polythene_material_design__ = __webpack_require__(32);
/* unused harmony namespace reexport */
































/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */





var vars$1 = {
  color: "inherit" // only specify this variable to get both states
  // color_light:   "inherit",
  // color_dark:    "inherit"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector) {
  return [_defineProperty({}, selector, [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].fit(), {
    color: "inherit",
    borderRadius: "inherit",
    pointerEvents: "none",

    ".pe-ripple--constrained": {
      borderRadius: "inherit",

      " .pe-ripple__mask": {
        overflow: "hidden",
        borderRadius: "inherit"
      }
    },
    " .pe-ripple__mask": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].fit(), {
      transform: "translate3d(0,0,0)"
    }],

    " .pe-ripple__waves": {
      outline: "1px solid transparent", // for IE10
      position: "absolute",
      borderRadius: "50%",
      pointerEvents: "none",
      display: "none"
    },
    " .pe-ripple__waves--animating": {
      display: "block"
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector, {
    color: componentVars["color_" + tint] || componentVars["color"] || "inherit"
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark") // inside dark theme
  ];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-ripple";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ANIMATION_END_EVENT = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["h" /* animationEndEvent */])();
var DEFAULT_START_OPACITY = 0.2;
var DEFAULT_END_OPACITY = 0.0;
var DEFAULT_START_SCALE = 0.1;
var DEFAULT_END_SCALE = 2.0;
var OPACITY_DECAY_VELOCITY = 0.35;

var animation = (function (e, el, wavesEl, attrs, classes, endCallback) {
  var rect = el.getBoundingClientRect();
  var x = __WEBPACK_IMPORTED_MODULE_1_polythene_core__["b" /* isTouch */] && e.touches ? e.touches[0].pageX : e.clientX;
  var y = __WEBPACK_IMPORTED_MODULE_1_polythene_core__["b" /* isTouch */] && e.touches ? e.touches[0].pageY : e.clientY;
  var w = el.offsetWidth;
  var h = el.offsetHeight;
  var waveRadius = Math.sqrt(w * w + h * h);
  var mx = attrs.center ? rect.left + rect.width / 2 : x;
  var my = attrs.center ? rect.top + rect.height / 2 : y;
  var rx = mx - rect.left - waveRadius / 2;
  var ry = my - rect.top - waveRadius / 2;
  var startOpacity = attrs.startOpacity !== undefined ? attrs.startOpacity : DEFAULT_START_OPACITY;
  var opacityDecayVelocity = attrs.opacityDecayVelocity !== undefined ? attrs.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
  var endOpacity = attrs.endOpacity || DEFAULT_END_OPACITY;
  var startScale = attrs.startScale || DEFAULT_START_SCALE;
  var endScale = attrs.endScale || DEFAULT_END_SCALE;
  var duration = attrs.duration ? attrs.duration : 1 / opacityDecayVelocity * 0.2;
  var color = window.getComputedStyle(el).color;
  var animationId = "ripple_animation_" + new Date().getTime();
  var style = wavesEl.style;
  style.width = style.height = waveRadius + "px";
  style.top = ry + "px";
  style.left = rx + "px";
  style["animation-duration"] = style["-webkit-animation-duration"] = style["-moz-animation-duration"] = style["-o-animation-duration"] = duration + "s";
  style.backgroundColor = color;
  style.opacity = startOpacity;
  style.animationName = animationId;
  style.animationTimingFunction = attrs.animationTimingFunction || __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].animation_curve_default;

  var keyframeStyle = [_defineProperty$2({}, "@keyframes " + animationId, {
    " 0%": {
      transform: "scale(" + startScale + ")",
      "opacity": startOpacity
    },
    " 100%": {
      transform: "scale(" + endScale + ")",
      "opacity": endOpacity
    }
  })];
  __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].add(animationId, keyframeStyle);

  var onEnd = function onEnd(evt) {
    if (attrs.persistent) {
      style.opacity = endOpacity;
      style.transform = "scale(" + endScale + ")";
    } else {
      endCallback();
      wavesEl.classList.remove(classes.wavesAnimating);
    }
    wavesEl.removeEventListener(ANIMATION_END_EVENT, onEnd, false);
    __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].remove(animationId);
    if (attrs.end) {
      attrs.end(evt);
    }
  };
  wavesEl.addEventListener(ANIMATION_END_EVENT, onEnd, false);
  if (attrs.start) {
    attrs.start(e);
  }
  wavesEl.classList.add(classes.wavesAnimating);
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-ripple",
  waves: "pe-ripple__waves",
  mask: "pe-ripple__mask",
  constrained: "pe-ripple--constrained",
  wavesAnimating: "pe-ripple__waves--animating"
};

var destroyRipple = void 0;

var initRipple = function initRipple(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  if (!vnode.dom) {
    return;
  }
  var rippleEl = vnode.dom;
  var wavesEl = vnode.dom.querySelector("." + classes.waves);

  var tap = function tap(e) {
    if (state.animating) {
      return;
    }
    animation(e, rippleEl, wavesEl, attrs, classes, function () {
      return state.animating = false;
    });
    state.animating = true;
  };
  var triggerEl = attrs.getTarget ? attrs.getTarget() : vnode.dom.parentElement;
  triggerEl.addEventListener(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["i" /* touchEndEvent */], tap, false);
  destroyRipple = function destroyRipple() {
    triggerEl.removeEventListener(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["i" /* touchEndEvent */], tap, false);
  };
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  if (attrs.disabled) {
    return null;
  }
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["d" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.constrained !== false ? classes.constrained : null, attrs.class].join(" ")
  });
  var content = __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.mask
  }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.waves
  }));
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var ripple = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    return vnode.state.animating = false;
  },
  oncreate: initRipple,
  onremove: destroyRipple,
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = ripple;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_icon_button__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_css__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return selectionControl; });
/* unused harmony export classes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return controlView; });
/* unused harmony export controlViewClasses */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vars$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return layout; });







var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-control",
  formLabel: "pe-control__form-label",
  label: "pe-control__label",
  input: "pe-control__input",
  on: "pe-control--on",
  off: "pe-control--off",
  disabled: "pe-control--disabled",
  inactive: "pe-control--inactive",
  small: "pe-control--small",
  regular: "pe-control--regular",
  medium: "pe-control--medium",
  large: "pe-control--large"
};

var typeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large
};

var classForType = function classForType() {
  var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return typeClasses[mode];
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
  if (typeof attrs.checked === "function") {
    state.setChecked(attrs.checked());
  }
  var checked = state.checked();
  var selectable = attrs.selectable !== undefined ? attrs.selectable(checked) : false;
  var inactive = attrs.disabled || !selectable;
  var element = attrs.element || "div";
  var name = attrs.name || "";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["d" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.defaultClass, checked ? classes.on : classes.off, attrs.disabled ? classes.disabled : null, inactive ? classes.inactive : null, classForType(attrs.size), attrs.class].join(" ")
  }, attrs.events ? attrs.events : null);
  var content = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("input", {
    class: classes.input,
    name: name,
    value: state.value(),
    type: attrs.type, // set by checkbox / radio-button
    tabindex: -1, // set in controlView / icon-button
    checked: checked,
    oncreate: function oncreate(vnode) {
      return state.setInputEl(vnode.dom);
    }
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("label", {
    class: classes.formLabel
  }, [attrs.controlView ? attrs.controlView(checked, _extends({}, attrs, {
    events: { onclick: state.toggle }
  })) : null, attrs.label ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("." + classes.label, inactive ? null : {
    onclick: state.toggle
  }, attrs.label) : null])];
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var selectionControl = {
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    // Because this module also supports radio buttons (paired control elements)
    // we won"t keep a separate "checked" value but instead keep the checked value
    // as a HTMLElement checked state.
    var defaultChecked = false;
    var _value = attrs.value || "1";
    var inputEl = void 0;

    var setInputElChecked = function setInputElChecked(isChecked) {
      if (inputEl) {
        inputEl.checked = isChecked;
      }
    };

    var getAttrsChecked = function getAttrsChecked() {
      if (typeof attrs.checked === "function") {
        var v = attrs.checked();
        return v !== undefined ? v : defaultChecked;
      } else {
        return attrs.checked !== undefined ? attrs.checked : defaultChecked;
      }
    };

    var setInputEl = function setInputEl(el) {
      inputEl = el;
      setInputElChecked(getAttrsChecked());
    };

    var setChecked = function setChecked(isChecked) {
      setInputElChecked(isChecked);
      if (attrs.getState) {
        attrs.getState({
          checked: inputEl ? inputEl.checked : getAttrsChecked(),
          value: _value,
          el: inputEl
        });
      }
    };

    var toggle = function toggle() {
      return setChecked(!inputEl.checked);
    };

    vnode.state = _extends(vnode.state, {
      setInputEl: setInputEl,
      setChecked: setChecked,
      checked: function checked() {
        return inputEl ? inputEl.checked : getAttrsChecked();
      },
      toggle: toggle,
      value: function value() {
        return _value;
      }
    });
  },
  view: view
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes$1 = {
  box: "pe-control__box",
  button: "pe-control__button",
  buttonOn: "pe-control__button--on",
  buttonOff: "pe-control__button--off"
};

var createIcon = function createIcon(onOffType, attrs) {
  return (
    // if attrs.iconOn/Off is passed, use that icon options object and ignore size
    // otherwise create a new object
    _extends$1({}, attrs[onOffType] ? attrs[onOffType] : { msvg: attrs.theme[onOffType] }, { class: attrs.class }, attrs.icon, attrs.size ? { type: attrs.size } : null)
  );
};

var controlView = function controlView(checked, attrs) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes$1.box
  }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_icon_button__["a" /* default */], _extends$1({}, {
    element: "div",
    class: classes$1.button,
    content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], createIcon("iconOn", _extends$1({}, attrs, { class: classes$1.buttonOn }))), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], createIcon("iconOff", _extends$1({}, attrs, { class: classes$1.buttonOff })))],
    ripple: { center: true },
    disabled: attrs.disabled,
    events: attrs.events
  }, attrs.selectable !== undefined ? { inactive: !attrs.selectable(checked) } : null, attrs.iconButton)));
};

var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;

var vars$1 = {
  label_font_size: 2 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component, // 16
  label_height: 3 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component, // 24
  label_padding_before: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit * 4, // 16
  label_padding_after: 0,
  button_size: 6 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component,
  icon_size: 3 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component,
  animation_duration: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].animation_duration,

  color_light_on: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_light_off: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_label: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_disabled: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on_focus_opacity: .11,

  // icon colors may be set in theme; disabled by default
  // color_light_on_icon
  // color_light_off_icon

  color_light_focus_on: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_light_focus_on_opacity: .11,
  color_light_focus_off: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground),
  color_light_focus_off_opacity: .07,

  color_dark_on: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_dark_off: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_label: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_disabled: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_thumb_off_focus_opacity: .08,
  color_dark_thumb_on_focus_opacity: .11,

  // icon color may be set in theme; disabled by default
  // color_dark_on_icon
  // color_dark_off_icon

  color_dark_focus_on: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary), // or '#80cbc4'
  color_dark_focus_on_opacity: .14,
  color_dark_focus_off: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground),
  color_dark_focus_off_opacity: .09
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Returns a style function to be used by checkbox and radio-button

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty({}, scope + selector, {
    color: componentVars["color_" + tint + "_on"], // override by specifying "color"

    " .pe-control__label": {
      color: componentVars["color_" + tint + "_label"]
    },
    " .pe-control__box": {
      " .pe-control__button": {
        color: "inherit",

        " .pe-control__button--on": {
          color: componentVars["color_" + tint + "_on_icon"] || "inherit"
        },

        " .pe-control__button--off": {
          color: componentVars["color_" + tint + "_off_icon"] || componentVars["color_" + tint + "_off"]
        }
      }
    },
    ".pe-control--off": {
      " .pe-button--focus .pe-button__focus": {
        opacity: componentVars["color_" + tint + "_focus_off_opacity"],
        backgroundColor: componentVars["color_" + tint + "_focus_off"]
      }
    },
    ".pe-control--on": {
      " .pe-button--focus .pe-button__focus": {
        opacity: componentVars["color_" + tint + "_focus_on_opacity"],
        backgroundColor: componentVars["color_" + tint + "_focus_on"]
      }
    },

    ".pe-control--disabled": {
      " .pe-control__label": {
        color: componentVars["color_" + tint + "_disabled"]
      },
      " .pe-control__box": {
        " .pe-control__button--on, .pe-control__button--off": {
          color: componentVars["color_" + tint + "_disabled"]
        }
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark") // inside dark theme
  ];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Returns a style function to be used by checkbox and radio-button

var makeSize = function makeSize(componentVars, height) {
  var iconSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size;

  var labelSize = iconSize + componentVars.label_height;
  var iconOffset = (labelSize - iconSize) / 2;
  return {
    " .pe-control__form-label": {
      height: height + "px"
    },
    " .pe-control__box": {
      width: iconSize + "px",
      height: iconSize + "px"
    },
    " .pe-button__content": {
      width: labelSize + "px",
      height: labelSize + "px",

      " .pe-icon": [__WEBPACK_IMPORTED_MODULE_5_polythene_css__["c" /* mixin */].fit(iconOffset)]
    }
  };
};

var activeButton = function activeButton() {
  return {
    opacity: 1,
    zIndex: 1
  };
};

var inactiveButton = function inactiveButton() {
  return {
    opacity: 0,
    zIndex: 0
  };
};

var layout = (function (selector, componentVars, type) {
  var _selector;

  return [_defineProperty$1({}, selector, (_selector = {
    display: "inline-block",
    boxSizing: "border-box",
    margin: 0,
    padding: 0

  }, _defineProperty$1(_selector, " input[type=" + type + "].pe-control__input", [__WEBPACK_IMPORTED_MODULE_5_polythene_css__["c" /* mixin */].vendorize({
    appearance: "none"
  }, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].prefixes_appearance), {
    lineHeight: componentVars.label_height + "px",
    // Hide input element
    position: "absolute",
    zIndex: "-1",
    width: 0,
    height: 0,
    margin: 0,
    padding: 0,
    opacity: 0,
    border: "none",
    pointerEvents: "none"
  }]), _defineProperty$1(_selector, " .pe-control__form-label", [__WEBPACK_IMPORTED_MODULE_5_polythene_css__["a" /* flex */].layoutHorizontal, __WEBPACK_IMPORTED_MODULE_5_polythene_css__["a" /* flex */].layoutCenter, {
    position: "relative",
    cursor: "pointer",
    fontSize: componentVars.label_font_size + "px",
    lineHeight: componentVars.label_height + "px",
    margin: 0,
    color: "inherit",

    ":focus": {
      outline: 0
    }
  }]), _defineProperty$1(_selector, ".pe-control--inactive", {
    " .pe-control__form-label": {
      cursor: "default"
    }
  }), _defineProperty$1(_selector, " .pe-control__box", {
    position: "relative",
    display: "inline-block",
    boxSizing: "border-box",
    width: componentVars.label_height + "px",
    height: componentVars.label_height + "px",
    color: "inherit",

    ":focus": {
      outline: 0
    }
  }), _defineProperty$1(_selector, " .pe-button.pe-control__button", [__WEBPACK_IMPORTED_MODULE_5_polythene_css__["c" /* mixin */].defaultTransition("opacity", componentVars.animation_duration), {
    position: "absolute",
    left: -((componentVars.button_size - componentVars.icon_size) / 2) + "px",
    top: -((componentVars.button_size - componentVars.icon_size) / 2) + "px",
    zIndex: 1
  }]), _defineProperty$1(_selector, ".pe-control--off", {
    " .pe-control__button--on": inactiveButton(),
    " .pe-control__button--off": activeButton()
  }), _defineProperty$1(_selector, ".pe-control--on", {
    " .pe-control__button--on": activeButton(),
    " .pe-control__button--off": inactiveButton()
  }), _defineProperty$1(_selector, " .pe-control__label", {
    paddingLeft: componentVars.label_padding_before + "px",
    paddingRight: componentVars.label_padding_after + "px"
  }), _defineProperty$1(_selector, ".pe-control--disabled", {
    " .pe-control__form-label": {
      cursor: "auto"
    },
    " .pe-control__button": {
      pointerEvents: "none"
    }
  }), _defineProperty$1(_selector, " .pe-button__content", {
    " .pe-icon": {
      position: "absolute"
    }
  }), _defineProperty$1(_selector, ".pe-control--small", makeSize(componentVars, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_small, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_small)), _defineProperty$1(_selector, ".pe-control--regular", makeSize(componentVars, componentVars.label_height, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size)), _defineProperty$1(_selector, ".pe-control--medium", makeSize(componentVars, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_medium, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_medium)), _defineProperty$1(_selector, ".pe-control--large", makeSize(componentVars, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_large, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size_large)), _selector))];
});




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_ripple__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */







var rgba = __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].rgba;

// SPECS
//
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

var vars$1 = {
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
  side_padding: 2 * __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].grid_unit_component,
  font_size_title: 16,
  font_size_subtitle: 14,
  line_height_subtitle: 20,
  font_size_list_header: 14,
  font_size_small: 12,

  color_light_title: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_subtitle: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_info: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_text_disabled: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_list_header: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_secondary: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_background: "inherit",
  color_light_background_hover: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_background_selected: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_background_hover),

  color_dark_title: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_subtitle: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_info: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_text_disabled: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_list_header: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_secondary: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_background: "inherit",
  color_dark_background_hover: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_background_selected: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_background_hover)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var paddingH = function paddingH(h) {
  return {
    "padding-left": h + "px",
    "padding-right": h + "px"
  };
};

var paddingV = function paddingV(top, bottom) {
  return {
    "padding-top": top + "px",
    "padding-bottom": (bottom || top) + "px"
  };
};

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].layout, {
    position: "relative",
    overflow: "hidden",

    ".pe-list-tile--sticky": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].sticky(2)],

    " .pe-list-tile__primary, .pe-list-tile__secondary": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].layoutHorizontal, {
      "text-decoration": "none",
      color: "inherit",
      border: "none"
    }],

    " .pe-list-tile__primary": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].flex(), {
      position: "relative",

      " .pe-list-tile__content:not(.pe-list-tile__content--front)": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].flex(), paddingV(componentVars.padding, componentVars.padding + 1)]
    }],

    " .pe-list-tile__secondary": {
      "text-align": "right",
      "font-size": componentVars.font_size_title + "px",
      position: "relative"
    },

    " .pe-list-tile__content": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].layoutVertical, __WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].selfCenter, paddingH(componentVars.side_padding), {
      ".pe-list-tile__content--front": [paddingV(componentVars.padding - 5), {
        width: componentVars.front_item_width + "px"
      }],

      " small": {
        "font-size": componentVars.font_size_small + "px"
      }
    }],

    " .pe-list-tile__content--front + .pe-list-tile__content": {
      "padding-left": 0
    },

    " .pe-list-tile__title": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].ellipsis(1), {
      "font-size": componentVars.font_size_title + "px",
      "font-weight": __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].font_weight_normal,
      "line-height": componentVars.single_line_height + "px"
    }],

    " .pe-list-tile__subtitle": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].ellipsis(componentVars.subtitle_line_count, componentVars.line_height_subtitle), {
      "font-size": componentVars.font_size_subtitle + "px",
      "line-height": componentVars.line_height_subtitle + "px",

      ".pe-list-tile__high-subtitle": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].ellipsis(componentVars.high_subtitle_line_count, componentVars.line_height_subtitle), {
        "white-space": "normal"
      }]
    }],

    ".pe-list-tile--selected, &.pe-list-tile--disabled": {
      " a": {
        "pointer-events": "none"
      }
    },

    ".pe-list-tile--subtitle": {
      " .pe-list-tile__content": [paddingV(componentVars.has_subtitle_padding, componentVars.has_subtitle_padding + 1), {
        " .pe-list-tile__title": {
          padding: 0
        }
      }]
    },

    ".pe-list-tile--high-subtitle": {
      " .pe-list-tile--high-subtitle .pe-list-tile__secondary": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].layoutHorizontal, __WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].layoutStart],
      " .pe-list-tile__content": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].selfStart, paddingV(componentVars.has_high_subtitle_padding, componentVars.has_high_subtitle_padding + 1), {
        " .pe-list-tile__title": {
          padding: 0
        }
      }]
    },

    // List header
    ".pe-list__header": {
      height: componentVars.single_height + "px",

      " .pe-list-tile__content": {
        "padding-top": 0,
        "padding-bottom": 0
      },
      " .pe-list-tile__title": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].ellipsis(1, componentVars.single_height), {
        "font-size": componentVars.font_size_list_header + "px",
        "font-weight": __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].font_weight_medium,
        "line-height": componentVars.single_height + "px",
        padding: 0
      }]
    },

    // Compact list

    " .pe-list--compact &, &.pe-list-tile--compact": {
      ":not(.pe-list__header)": {
        " .pe-list-tile__content": paddingV(componentVars.compact_padding, componentVars.compact_padding + 1)
      }
    },

    // Firefox only
    "@supports (-moz-appearance:none) and (display:contents)": {
      " .pe-list-tile__primary, .pe-list-tile__content": {
        overflow: "hidden"
      }
    },

    // Menu

    ".pe-dialog .pe-menu__content &": {
      " .pe-list-tile__title": __WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].ellipsis("none")
    },

    ".pe-menu__content &": {
      ":not(.pe-list-tile--disabled)": {
        cursor: "default",

        "&, .pe-list-tile__primary, .pe-list-tile__secondary": {
          " .pe-list-tile__title, .pe-list-tile__subtitle": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].vendorize({
            userSelect: "none"
          }, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].prefixes_user_select)]
        }
      }
    },

    // Non-touch

    "html.pe-no-touch .pe-list--hoverable &, \
      html.pe-no-touch .pe-list--selectable &, \
      html.pe-no-touch &.pe-list-tile--hoverable, \
      html.pe-no-touch &.pe-list-tile--selectable": {
      ":not(.pe-list__header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover": {
        cursor: "pointer"
      }
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector, {
    color: componentVars["color_" + tint + "_title"],
    backgroundColor: componentVars["color_" + tint + "_background"],

    ".pe-list__header": {
      color: componentVars["color_" + tint + "_list_header"],

      " .pe-list-tile__primary, pe-list-tile__secondary": {
        backgroundColor: "inherit"
      }
    },

    " .pe-list-tile__subtitle": {
      color: componentVars["color_" + tint + "_subtitle"]
    },

    " .pe-list-tile__secondary": {
      color: componentVars["color_" + tint + "_secondary"]
    },

    ".pe-list-tile--disabled": {
      "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
        color: componentVars["color_" + tint + "_text_disabled"]
      }
    },
    ".pe-list-tile--selected": {
      " .pe-list-tile__primary, pe-list-tile__secondary": {
        backgroundColor: componentVars["color_" + tint + "_background_selected"]
      }
    }
  })];
};

var noTouchStyle = function noTouchStyle(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector + ":hover", {
    ":not(.pe-list__header):not(.pe-list-tile--disabled)": {
      " .pe-list-tile__primary, .pe-list-tile__secondary": {
        backgroundColor: componentVars["color_" + tint + "_background_hover"]
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark"), // inside dark theme
  noTouchStyle("html.pe-no-touch .pe-list-tile--hoverable", selector, componentVars, "light"), noTouchStyle("html.pe-no-touch .pe-dark-theme .pe-list-tile--hoverable", selector, componentVars, "dark"), noTouchStyle("html.pe-no-touch .pe-list--hoverable ", selector, componentVars, "light"), noTouchStyle("html.pe-no-touch .pe-dark-theme .pe-list--hoverable ", selector, componentVars, "dark")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-list-tile";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-list-tile",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  content: "pe-list-tile__content",
  contentFront: "pe-list-tile__content--front",
  title: "pe-list-tile__title",
  subtitle: "pe-list-tile__subtitle",
  highSubtitle: "pe-list-tile__high-subtitle",
  selected: "pe-list-tile--selected",
  disabled: "pe-list-tile--disabled",
  sticky: "pe-list-tile--sticky",
  hasSubtitle: "pe-list-tile--subtitle",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasFront: "pe-list-tile--front",
  compact: "pe-list-tile--compact",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable"
};

var primaryContent = function primaryContent(attrs, children) {
  var element = attrs.element ? attrs.element : attrs.url ? "a" : "div";
  var contentFrontClass = classes.content + " " + classes.contentFront;
  var frontComp = attrs.front ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: contentFrontClass }, attrs.front) : attrs.indent ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: contentFrontClass }) : null;
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["d" /* filterSupportedAttributes */])(attrs), attrs.url, attrs.events, {
    class: classes.primary,
    style: null
  });
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [frontComp, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.content,
    style: attrs.style
  }, [attrs.content ? attrs.content : children, attrs.title && !attrs.content ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.title
  }, attrs.title) : null, attrs.subtitle ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.subtitle
  }, attrs.subtitle) : null, attrs.highSubtitle ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.subtitle + " " + classes.highSubtitle
  }, attrs.highSubtitle) : null])]);
};

var secondaryContent = function secondaryContent() {
  var secondaryAttrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var element = secondaryAttrs.element ? secondaryAttrs.element : secondaryAttrs.url ? "a" : "div";
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["d" /* filterSupportedAttributes */])(secondaryAttrs), secondaryAttrs.url, {
    class: classes.secondary
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.content
  }, [secondaryAttrs.icon ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */], secondaryAttrs.icon) : null, secondaryAttrs.content ? secondaryAttrs.content : null]));
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var heightClass = attrs.subtitle ? classes.hasSubtitle : attrs.highSubtitle ? classes.hasHighSubtitle : attrs.front || attrs.indent ? classes.hasFront : null;

  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["d" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.selected ? classes.selected : null, attrs.disabled ? classes.disabled : null, attrs.sticky ? classes.sticky : null, attrs.compact ? classes.compact : null, attrs.hoverable ? classes.hoverable : null, attrs.selectable ? classes.selectable : null, heightClass, attrs.class].join(" ")
    // events and url are attached to primary content to not interfere with controls
  });

  var primaryAttrs = _extends({}, attrs);
  delete primaryAttrs.id;
  delete primaryAttrs.class;
  var content = [attrs.ink && !attrs.disabled ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_ripple__["a" /* default */], attrs.ripple) : null, primaryContent(primaryAttrs, attrs.children || vnode.children), attrs.secondary ? secondaryContent(attrs.secondary) : null];
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var listTile = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = listTile;


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_shadow__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */







var rgba = __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].rgba;

var vars$1 = {
  color_light_background: "#e0e0e0", // grey-300
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_hover_background: "transparent",
  color_light_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_active_background: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_background_hover), // same as hover
  color_light_disabled_background: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_background_disabled),
  color_light_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_disabled),

  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_hover_background: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary_active,
  color_dark_focus_background: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary_active,
  color_dark_active_background: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary_dark,
  color_dark_disabled_background: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_background_disabled),
  color_dark_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_disabled)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var activeBorder = componentVars["color_" + tint + "_active_border"] || normalBorder;
  var disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
  return [_defineProperty({}, scope + selector, {
    "&, &:link, &:visited": {
      color: componentVars["color_" + tint + "_text"]
    },

    " .pe-button__content": {
      backgroundColor: componentVars["color_" + tint + "_background"],
      borderColor: normalBorder
    },

    ".pe-button--disabled": {
      color: componentVars["color_" + tint + "_disabled_text"],

      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_disabled_background"],
        borderColor: disabledBorder
      }
    },

    ".pe-button--selected": {
      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_active_background"],
        borderColor: activeBorder
      },
      " .pe-button__focus": {
        opacity: 1,
        backgroundColor: componentVars["color_" + tint + "_focus_background"]
      }
    },

    ".pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1,
        backgroundColor: componentVars["color_" + tint + "_focus_background"]
      }
    }
  })];
};

var noTouchStyle = function noTouchStyle(scope, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"];
  var hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
  return [_defineProperty({}, scope + selector + ":hover", {
    ":not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
      backgroundColor: componentVars["color_" + tint + "_hover_background"],
      borderColor: hoverBorder
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark"), // inside dark theme
  noTouchStyle("html.pe-no-touch ", selector, componentVars, "light"), noTouchStyle("html.pe-no-touch .pe-dark-theme ", selector, componentVars, "dark")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [color];
var selector = ".pe-button.pe-text-button.pe-raised-button";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-button pe-text-button pe-raised-button"
};

var MAX_Z = 5;

var tapStart = void 0;
var tapEndAll = function tapEndAll() {};
var downButtons = [];

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["c" /* subscribe */])(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["i" /* touchEndEvent */], function () {
  return tapEndAll();
});

var animateZ = function animateZ(state, attrs, name) {
  var zBase = state.zBase;
  var increase = attrs.increase || 1;
  var z = state.z;
  if (name === "down" && zBase !== 5) {
    z = Math.min(z + increase, MAX_Z);
  } else if (name === "up") {
    z = Math.max(z - increase, zBase);
  }
  if (z !== state.z) {
    state.z = z;
    __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw(); // show shadow animation
  }
};

var inactivate = function inactivate(state, attrs) {
  state.inactive = true;
  __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
  setTimeout(function () {
    state.inactive = false;
    __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
  }, attrs.inactivate * 1000);
};

var initTapEvents = function initTapEvents(el, state, attrs) {
  var tapHandler = function tapHandler(state, attrs, name) {
    if (name === "down") {
      downButtons.push({
        state: state,
        attrs: attrs
      });
    } else if (name === "up") {
      if (attrs.inactivate && !state.inactive) {
        inactivate(state, attrs);
      }
    }
    // no z animation on touch
    var animateOnTap = attrs.animateOnTap !== false ? true : false;
    if (animateOnTap && !__WEBPACK_IMPORTED_MODULE_3_polythene_core__["b" /* isTouch */]) {
      animateZ(state, attrs, name);
    }
  };
  tapStart = function tapStart() {
    return tapHandler(state, attrs, "down");
  };
  tapEndAll = function tapEndAll() {
    downButtons.map(function (btn) {
      tapHandler(btn.state, btn.attrs, "up");
    });
    downButtons = [];
  };
  el.addEventListener(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["e" /* touchStartEvent */], tapStart);
};

var clearTapEvents = function clearTapEvents(el) {
  el.removeEventListener(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["e" /* touchStartEvent */], tapStart);
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
  var children = (attrs.children || vnode.children || []).filter(function (c) {
    return c !== void 0;
  });
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_button__["a" /* default */], _extends({}, {
    parentClass: [attrs.parentClass || classes.component].join(" "),
    animateOnTap: false,
    shadowComponent: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_shadow__["a" /* default */], { z: state.z, animated: true }),
    children: children
  }, attrs));
};

var raisedButton = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    var z = vnode.attrs.z !== undefined ? vnode.attrs.z : 1;
    vnode.state = _extends(vnode.state, {
      el: undefined,
      zBase: z,
      z: z,
      tapEventsInited: false
    });
  },
  oncreate: function oncreate(vnode) {
    if (!vnode.attrs.disabled && !vnode.state.inactive && !vnode.state.tapEventsInited) {
      vnode.state.el = vnode.dom;
      initTapEvents(vnode.dom, vnode.state, vnode.attrs);
      vnode.state.tapEventsInited = true;
    }
  },
  onremove: function onremove(vnode) {
    if (vnode.state.tapEventsInited) {
      clearTapEvents(vnode.dom);
    }
  },
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = raisedButton;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* unused harmony export classes */
/* unused harmony export vars */




var vars = {
  color_light: "currentcolor",
  color_dark: "currentcolor"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  var color = componentVars["color_" + tint] || "currentcolor";
  return [_defineProperty({}, scope + selector, {
    color: "inherit",

    " svg": {
      color: "inherit",

      " path, rect, circle, polygon": {
        "&:not([fill=none])": {
          fill: color
        }
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [color];
var selector = ".pe-svg";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-svg"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["d" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.class].join(" ")
  });
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var svg = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = svg;


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export easing */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scrollTo; });
/* unused harmony export Timer */
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
 Animated scroll to a position.
 Derived from https://github.com/madebysource/animated-scrollto
 Adapted to Mithril and rewritten to es6.
*/

var scrollTo = function scrollTo(opts) {
  var element = opts.element;
  var which = opts.direction === "horizontal" ? "scrollLeft" : "scrollTop";
  var to = opts.to;
  var duration = opts.duration * 1000;
  var easingFn = opts.easing || easing.easeInOutCubic;
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
      var val = start + change * easingFn(percentage);
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
    return window.setTimeout(callback, 1000 / 60);
  };
}();

var Timer = function Timer(callback, delaySeconds) {
  var timerId = void 0,
      start = void 0,
      remaining = delaySeconds * 1000;

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




/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tests_polythene_tests__ = __webpack_require__(21);




__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.prefix("#");
var mountNode = document.querySelector("#app");
var routes = {
  "/": __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__page__["a" /* default */])("Polythene combined", __WEBPACK_IMPORTED_MODULE_2__tests_polythene_tests__["a" /* tests */])
};
__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route(mountNode, "/", routes);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tidy; });
/* globals tidy_html5 */

var defaultHtmlTidyOptions = {
  "show-body-only": true,
  "indent-spaces": 4,
  "drop-empty-elements": false,
  "doctype": "omit",
  "indent": true,
  "quiet": true, // Hides "About this fork of Tidy ..."
  "show-warnings": false, // Hides "line 1 column 1 - Warning: missing <!DOCTYPE> declaration ...""
  "new-blocklevel-tags": ["svg", "defs"],
  "new-inline-tags": ["path", "polyline", "line", "polygon"]
};

var tidy = function tidy(html) {
  var htmltidyOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultHtmlTidyOptions;

  return tidy_html5(html, htmltidyOptions);
};

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scripts_render__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_navigation_arrow_back__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_navigation_arrow_back___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_navigation_arrow_back__);






var generatedHtml = {
  oninit: function oninit(vnode) {
    return vnode.state.open = false, vnode.state.toggle = function () {
      return vnode.state.open = !vnode.state.open;
    };
  },
  view: function view(vnode) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2__styles__["a" /* rules */].resultDataRawHtml, {
      class: vnode.state.open ? "open" : "closed",
      onclick: vnode.state.toggle
    }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(".html", { id: vnode.attrs.id }, ""), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".ellipsis", "...")]);
  }
};

/* harmony default export */ __webpack_exports__["a"] = function (name, tests, previous) {
  return {
    oncreate: function oncreate() {
      return document.title = name;
    },
    view: function view() {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2__styles__["a" /* rules */].headerRow, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["toolbar"], {
        style: {
          backgroundColor: "rgba(255,255,255,.93)"
        }
      }, [previous && __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["iconButton"], {
        icon: { msvg: __WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_navigation_arrow_back___default.a },
        url: {
          href: "/",
          oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
        },
        style: {
          color: "#0091EA"
        }
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", name)])), __WEBPACK_IMPORTED_MODULE_0_mithril___default()([__WEBPACK_IMPORTED_MODULE_2__styles__["a" /* rules */].results].join(" "), {
        class: "tests-" + name.replace(/[\:\-\[\]]/g, "").replace(/ /g, "-").toLowerCase()
      }, tests.map(function (test, index) {
        var testName = "test-" + test.name.replace(/[\:\-\[\]\(\)]/g, "").replace(/ /g, "-").toLowerCase();
        var uid = "id-" + index;
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()([__WEBPACK_IMPORTED_MODULE_2__styles__["a" /* rules */].resultRow, test.interactive ? __WEBPACK_IMPORTED_MODULE_2__styles__["a" /* rules */].interactive : null].join(""), {
          key: testName,
          class: [testName, test.class || null].join(" ")
        }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2__styles__["a" /* rules */].resultTitle, {
          class: "result-title"
        }, test.name), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2__styles__["a" /* rules */].resultData, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2__styles__["a" /* rules */].resultDataRendered, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2__styles__["a" /* rules */].content, {
          oncreate: function oncreate(vnode) {
            if (!test.exclude) {
              document.querySelector("#" + uid).textContent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__scripts_render__["a" /* tidy */])(vnode.dom.innerHTML);
            }
          }
        }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(test.component, test.attrs, test.children))), !test.exclude && __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2__styles__["a" /* rules */].resultDataRaw, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(generatedHtml, { id: uid }))])]);
      })), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["dialog"])];
    }
  };
};

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rules; });
/*
Theme style definitions using Tachyon.
Complete list of tags: http://tachyons.io/docs/table-of-styles/
*/

var bottomBorder = ".bb";
var resultHeight = ".minh8";

var rules = {
  page: ".pa4.lh-title-m.mid-gray",
  pageTitle: "h1.ma0.normal.f3.pv3",
  headerRow: ".header-row" + bottomBorder + ".fixed.w-100.z-3",
  interactive: ".interactive.bg-washed-blue",
  separator: "span.ph2.light-silver",
  link: "a.link.underline-hover.blue",
  list: "ul.list.pa0",
  listItem: "li.mv1",
  results: ".results",
  resultRow: ".result-row.flex-column" + bottomBorder + resultHeight + ".pv2",
  resultTitle: ".flex.flex-row-ns.f5.ma3",
  resultData: ".flex.flex-column.flex-row-l.mv3",
  resultDataRendered: ".result.relative.flex-none.flex-l.flex-one.ma3.minh4",
  content: ".component-result.relative.w-100",
  resultDataRaw: ".flex-none.flex-l.flex-one.ma3",
  resultDataRawHtml: ".generated-html.prewrap.relative.light-silver.h-100"
};

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene__ = __webpack_require__(8);
/* unused harmony export shortText */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return longText; });
/* unused harmony export cancelOkButtons */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return commonDialogProps; });



var shortText = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";

var longText = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(function () {
  return shortText;
}).join("");

var cancelOkButtons = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["button"], {
  label: "Cancel",
  events: {
    onclick: function onclick() {
      return __WEBPACK_IMPORTED_MODULE_1_polythene__["dialog"].hide();
    }
  }
}), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["button"], {
  label: "Discard",
  events: {
    onclick: function onclick() {
      return __WEBPACK_IMPORTED_MODULE_1_polythene__["dialog"].hide();
    }
  }
})];

var commonDialogProps = {
  footer: cancelOkButtons
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene__ = __webpack_require__(8);



var tile = function tile(left, right, disabled) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["listTile"], {
    title: left,
    secondary: { content: right },
    disabled: disabled
  });
};

/* harmony default export */ __webpack_exports__["a"] = {
  view: function view() {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["menu"], {
      size: 5,
      permanent: true,
      content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["list"], {
        compact: true,
        hoverable: true,
        tiles: [tile("Bold", "\u2318B"), tile("Italic", "\u2318I"), tile("Underline", "\u2318U"), tile("Strikethrough", "Alt+Shift+5"), tile("Superscript", "\u2318."), tile("Subscript", "\u2318,")]
      }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["list"], {
        compact: true,
        hoverable: true,
        tiles: [tile("Clear formatting", "\u2318/", true), tile("Custom spacing", "")]
      })]
    });
  }
};

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__test_tests_css_classes_block_styles__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_toggle_star_border__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_toggle_star_border___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_toggle_star_border__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_navigation_menu__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_navigation_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_navigation_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_content_add__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_content_add___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_content_add__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dialog__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tests; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };










var SVG = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>");

__WEBPACK_IMPORTED_MODULE_1_polythene__["styler"].add("polythene-css-classes", __WEBPACK_IMPORTED_MODULE_2__test_tests_css_classes_block_styles__["a" /* styles */]);

__WEBPACK_IMPORTED_MODULE_1_polythene__["button"].theme(".tests-polythene-themed-button", {
  color_light_background: "#FF1744",
  color_light_text: "#fff"
});
__WEBPACK_IMPORTED_MODULE_1_polythene__["raisedButton"].theme(".tests-polythene-themed-raised-button", {
  color_light_background: "#FF1744",
  color_light_text: "#fff"
});

__WEBPACK_IMPORTED_MODULE_1_polythene__["fab"].theme(".tests-polythene-themed-fab", {
  color_light_background: "#FF1744",
  color_light: "#fff"
});

var dialogProps = _extends({}, __WEBPACK_IMPORTED_MODULE_6__dialog__["a" /* commonDialogProps */], {
  title: "Long dialog with a very long title that surely won't fit here",
  body: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust(__WEBPACK_IMPORTED_MODULE_6__dialog__["b" /* longText */]),
  modal: true,
  backdrop: true,
  class: "pe-dark-theme"
});

var block = function block(test) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    style: _extends({}, opts.dark ? null : { background: "#fff" }, opts.fullWidth ? null : { padding: "10px 15px" }) }, test);
};

var tests = [{
  name: "Button",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["button"],
  attrs: {
    label: "Button"
  }
}, {
  name: "Button (theme: red)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["button"],
  attrs: {
    class: "tests-polythene-themed-button",
    label: "Button"
  }
}, {
  name: "Raised button",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["raisedButton"],
  attrs: {
    label: "Raised button"
  }
}, {
  name: "Raised button (theme: red)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["raisedButton"],
  attrs: {
    class: "tests-polythene-themed-raised-button",
    label: "Raised button"
  }
}, {
  name: "Checkbox",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["checkbox"],
  attrs: {
    label: "Label",
    checked: true
  }
}, {
  name: "Dialog",
  exclude: true,
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["raisedButton"], {
        label: "Open dialog",
        events: {
          onclick: function onclick() {
            return __WEBPACK_IMPORTED_MODULE_1_polythene__["dialog"].show(dialogProps);
          }
        }
      });
    }
  }
}, {
  name: "FAB",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["fab"],
  attrs: {
    icon: {
      svg: { content: SVG }
    }
  }
}, {
  name: "FAB (theme: red)",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["fab"],
  attrs: {
    class: "tests-polythene-themed-fab",
    icon: {
      svg: { content: SVG }
    }
  }
}, {
  name: "Icon",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["icon"],
  attrs: {
    svg: { content: SVG }
  }
}, {
  name: "Icon Button",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["iconButton"],
  attrs: {
    style: {
      backgroundColor: "#fff"
    },
    icon: {
      svg: { content: SVG }
    }
  }
}, {
  name: "List",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["list"],
  attrs: {
    header: {
      title: "Friends"
    },
    borders: true,
    tiles: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["listTile"], {
      title: "Jennifer Barker",
      subtitle: "Starting post doc",
      front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["icon"], {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
        avatar: true,
        type: "large"
      })
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["listTile"], {
      title: "Ali Connors",
      subtitle: "Brunch this weekend?",
      front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["icon"], {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png",
        avatar: true,
        type: "large"
      })
    })]
  }
}, {
  name: "List Tile",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["listTile"],
  attrs: {
    title: "Ancillary Justice",
    highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
    front: __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["icon"], {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
      avatar: true,
      type: "large"
    }),
    secondary: {
      icon: {
        msvg: __WEBPACK_IMPORTED_MODULE_3_mmsvg_google_msvg_toggle_star_border___default.a,
        type: "medium"
      },
      url: {
        href: "/",
        oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
      }
    }
  }
}, {
  name: "Menu",
  component: __WEBPACK_IMPORTED_MODULE_7__menu__["a" /* default */]
}, {
  name: "Radio button",
  component: {
    view: function view() {
      var options = {
        label: "Label",
        name: "radio"
      };
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["radioButton"], options), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["radioButton"], _extends({}, options, { checked: true }))]);
    }
  }
}, {
  name: "Ripple",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["ripple"],
  attrs: {}
}, {
  name: "Shadow",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["shadow"],
  attrs: {}
}, {
  name: "SVG",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["svg"],
  attrs: {
    content: SVG
  }
}, {
  name: "Tabs",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["tabs"],
  attrs: {
    autofit: true,
    content: [{ label: "New" }, { label: "My Favorites" }, { label: "Saved" }]
  }
}, {
  name: "Textfield",
  component: {
    view: function view() {
      return block([__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["textfield"], {
        label: "Your name",
        floatingLabel: true,
        help: "Enter the name as written on the credit card",
        required: true
      })]);
    }
  }
}, {
  name: "Toolbar",
  component: __WEBPACK_IMPORTED_MODULE_1_polythene__["toolbar"],
  attrs: {
    content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["iconButton"], {
      icon: { msvg: __WEBPACK_IMPORTED_MODULE_4_mmsvg_google_msvg_navigation_menu___default.a }
    }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", "Title"), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene__["iconButton"], {
      icon: { msvg: __WEBPACK_IMPORTED_MODULE_5_mmsvg_google_msvg_content_add___default.a }
    })]
  }
}, {
  name: "CSS Classes: blocks should be aligned vertically",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".vertical-blocks", __WEBPACK_IMPORTED_MODULE_2__test_tests_css_classes_block_styles__["b" /* blocks */]);
    }
  }
}, {
  name: "CSS Classes: blocks should be justified horizontally",
  component: {
    view: function view() {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".layout.justified", __WEBPACK_IMPORTED_MODULE_2__test_tests_css_classes_block_styles__["b" /* blocks */]);
    }
  }
}];

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_css__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return blocks; });


var blockSize = 40;

var styles = [{
  " .block": {
    "min-width": blockSize + "px",
    "min-height": blockSize + "px",
    color: "#fff",
    "text-align": "center",
    "line-height": blockSize + "px",

    "&:nth-child(1)": {
      background: "#311B92"
    },
    "&:nth-child(2)": {
      background: "#4527A0"
    },
    "&:nth-child(3)": {
      background: "#512DA8"
    },
    "&:nth-child(4)": {
      background: "#5E35B1"
    },
    "&.fixed-height": {
      height: "90px",
      position: "relative"
    }
  },
  " .vertical-blocks": [__WEBPACK_IMPORTED_MODULE_1_polythene_css__["a" /* flex */].layoutVertical]
}];

var blocks = [1, 2, 3, 4].map(function (num) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".block", num);
});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* unused harmony reexport vars */
/* unused harmony export classes */




var layout$1 = (function (selector, componentVars) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["a" /* layout */])(selector, componentVars, "checkbox");
});

var color$1 = (function (selector, componentVars) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["b" /* color */])(selector, componentVars);
});

var iconOff = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/></svg>");

var iconOn = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/></svg>");

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout$1, color$1];
var selector = ".pe-control.pe-checkbox-control";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["c" /* vars */], customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["c" /* vars */], fns);

var theme = {
  iconOff: iconOff,
  iconOn: iconOn
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-checkbox-control"
};

var view = function view(vnode) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["d" /* selectionControl */], _extends({}, vnode.attrs, {
    theme: theme,
    controlView: __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["e" /* controlView */],
    selectable: vnode.attrs.selectable || function () {
      return true;
    }, // default: always selectable, regardless the checked state
    defaultClass: classes.component,
    type: "checkbox"
  }));
};

var checkbox = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = checkbox;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_css__ = __webpack_require__(1);


var flex$1 = [{
  ".layout, .layout.horizontal": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layout,
  ".layout.horizontal.inline, .layout.vertical.inline": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutInline,
  ".layout.horizontal": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutHorizontal,
  ".layout.horizontal.reverse": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutHorizontalReverse,
  ".layout.vertical": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutVertical,
  ".layout.vertical.reverse": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutVerticalReverse,
  ".layout.wrap": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutWrap,
  ".layout.wrap.reverse": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutWrapReverse,
  ".flex": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flex(1),
  ".span.flex": { "display": "block" }, // for IE 10
  ".flex.auto-vertical": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexAutoVertical,
  ".flex.auto": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexAuto,
  ".flex.none": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex("none"),
  ".flex.one": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(1),
  ".flex.two": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(2),
  ".flex.three": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(3),
  ".flex.four": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(4),
  ".flex.five": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(5),
  ".flex.six": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(6),
  ".flex.seven": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(7),
  ".flex.eight": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(8),
  ".flex.nine": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(9),
  ".flex.ten": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(10),
  ".flex.eleven": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(11),
  ".flex.twelve": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].flexIndex(12),

  // alignment in cross axis
  ".layout.start": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutStart,
  ".layout.center, .layout.center-center": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutCenter,
  ".layout.end": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutEnd,

  // alignment in main axis
  ".layout.start-justified": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutStartJustified,
  ".layout.center-justified, .layout.center-center": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutCenterJustified,
  ".layout.end-justified": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutEndJustified,
  ".layout.around-justified": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutAroundJustified,
  ".layout.justified": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].layoutJustified,

  // self alignment
  ".self-start": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].selfStart,
  ".self-center": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].selfCenter,
  ".self-end": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].selfEnd,
  ".self-stretch": __WEBPACK_IMPORTED_MODULE_0_polythene_css__["a" /* flex */].selfStretch
}];

var commonStyle = [{
  ".pe-block": {
    display: "block"
  },

  ".pe-inline-block": {
    display: "inline-block"
  },

  // ie support for hidden
  ".pe-hidden": {
    display: "none !important"
  },

  ".pe-relative": {
    position: "relative"
  },

  ".pe-absolute": {
    position: "absolute"
  },

  ".pe-fit": {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },

  ".pe-fullbleed": {
    margin: 0,
    height: "100vh"
  }
}];

__WEBPACK_IMPORTED_MODULE_0_polythene_css__["b" /* styler */].add("pe-layout", flex$1, commonStyle);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

// Derived from Lea Verou's PrefixFree

var allStyles;
var styleAttr;
var styleElement;
var supportedProperty;
var supportedDecl;

function init() {
  allStyles = getComputedStyle(document.documentElement, null);
  styleAttr = document.createElement('div').style;
  styleElement = document.documentElement.appendChild(document.createElement('style'));
  supportedDecl = _supportedDecl;
  supportedProperty = _supportedProperty;
  if ('zIndex' in styleAttr && !('z-index' in styleAttr)) {
    // Some browsers like it dash-cased, some camelCased, most like both.
    supportedDecl = function(property, value) {return _supportedDecl(camelCase(property), value)};
    supportedProperty = function(property) {return _supportedProperty(camelCase(property))};
  }
}
function finalize() {
  if (typeof document !== 'undefined') document.documentElement.removeChild(styleElement);
  // `styleAttr` is used at run time via `supportedProperty()`
  // `allStyles` and `styleElement` can be displosed of after initialization.
  allStyles = styleElement = null;
}
// Helpers, in alphabetic order

function camelCase(str) {
  return str.replace(/-([a-z])/g, function($0, $1) { return $1.toUpperCase() }).replace('-','')
}
function deCamelCase(str) {
  return str.replace(/[A-Z]/g, function($0) { return '-' + $0.toLowerCase() })
}
function _supportedDecl(property, value) {
  styleAttr[property] = '';
  styleAttr[property] = value;
  return !!styleAttr[property]
}
function supportedMedia(condition) {
  styleElement.textContent = '@media (' + condition +'){}';
  // Opera 11 treats unknown conditions as 'all', the rest as 'not all'.
  // So far tested in modern browsers (01/01/2017), and desktop IE9, FF4,
  // Opera 11/12, and Safari 6. TY SauceLabs.
  return !/^@media(?:\s+not)?\s+all/.test(styleElement.sheet.cssRules[0].cssText)
}
function _supportedProperty(property) {
  return property in styleAttr
}
function supportedRule(selector) {
  styleElement.textContent = selector + '{}';
  return !!styleElement.sheet.cssRules.length
}

// Derived from Lea Verou's PrefixFree

// TODO: http://caniuse.com/#feat=css-media-resolution

function detectAtrules(fixers) {
  if (fixers.prefix === '') return
  var atrules = {
    'keyframes': 'name',
    'viewport': null,
    'document': 'regexp(".")'
  };

  // build a map of {'@ruleX': '@-prefix-ruleX'}
  for(var atrule in atrules) {
    var test = atrule + ' ' + (atrules[atrule] || '');
    if (!supportedRule('@' + test) && supportedRule('@' + fixers.prefix + test)) {

      fixers.hasAtrules = true;
      fixers.atrules['@' + atrule] = '@' + fixers.prefix + atrule;
    }
  }

  // Standard
  fixers.hasDppx = supportedMedia('resolution:1dppx');
  // Webkit
  fixers.hasPixelRatio = supportedMedia(fixers.prefix + 'device-pixel-ratio:1');
  // Opera
  fixers.hasPixelRatioFraction = supportedMedia(fixers.prefix + 'device-pixel-ratio:1/1');

  if (fixers.hasPixelRatio || fixers.hasPixelRatioFraction) {
    fixers.properties['resolution'] = fixers.prefix + 'device-pixel-ratio';
    fixers.properties['min-resolution'] = fixers.prefix + 'min-device-pixel-ratio';
    fixers.properties['max-resolution'] = fixers.prefix + 'max-device-pixel-ratio';
    if (supportedMedia('min-' + fixers.prefix + 'device-pixel-ratio:1')) {
      // Mozilla/Firefox tunred a vendor prefix into a vendor infix
      fixers.properties['min-resolution'] = 'min-' + fixers.prefix + 'device-pixel-ratio';
      fixers.properties['max-resolution'] = 'max-' + fixers.prefix + 'device-pixel-ratio';
    }
  }
}

// Derived from Lea Verou's PrefixFree

function detectFunctions(fixers) {
  // Values that might need prefixing
  if (fixers.prefix === '') return
  var functions = {
    'linear-gradient': {
      property: 'background-image',
      params: 'red, teal'
    },
    'calc': {
      property: 'width',
      params: '1px + 5%'
    },
    'element': {
      property: 'background-image',
      params: '#foo'
    },
    'cross-fade': {
      property: 'backgroundImage',
      params: 'url(a.png), url(b.png), 50%'
    }
  };
  functions['repeating-linear-gradient'] =
  functions['repeating-radial-gradient'] =
  functions['radial-gradient'] =
  functions['linear-gradient'];

  // build an array of prefixable functions
  for (var func in functions) {
    var test = functions[func],
      property = test.property,
      value = func + '(' + test.params + ')';

    if (!supportedDecl(property, value) && supportedDecl(property, fixers.prefix + value)) {
      // It's only supported with a prefix
      fixers.functions.push(func);
    }
  }
}

// Derived from Lea Verou's PrefixFree and Robin Frischmann's Inline Style Prefixer

// TODO: http://caniuse.com/#feat=css-writing-mode

// db of prop/value pairs whose values may need treatment.

var keywords = [

  // `initial` applies to all properties and is thus handled separately.
  {
    props: ['cursor'],
    values: [ 'grab', 'grabbing', 'zoom-in', 'zoom-out']
  },
  {
    props: ['display'],
    values:['box', 'inline-box', 'flexbox', 'inline-flexbox', 'flex', 'inline-flex', 'grid', 'inline-grid']
  },
  {
    props: ['position'],
    values: [ 'sticky' ]
  },
  {
    props: ['width', 'column-width', 'height', 'max-height', 'max-width', 'min-height', 'min-width'],
    values: ['contain-floats', 'fill-available', 'fit-content', 'max-content', 'min-content']
  }
];
// The flexbox zoo
//
// ## Specs:
// - box     (2009/old):  https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/
// - flexbox (2012/ie10): https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/
// - flex    (final):     https://www.w3.org/TR/css-flexbox-1/
var flex2009Props = {
  // ?align-content =>
  // ?align-self =>
  'align-items': 'box-align',
  'flex': 'box-flex', // https://css-tricks.com/snippets/css/a-guide-to-flexbox/#comment-371025,
  // ?flex-basis =>
  // !!flex-direction => box-direction + box-orient, covered in `plugin.js`
  'box-direction' : 'box-direction', // we prepopulate the cache for the above case.
  'box-orient': 'box-orient',
  // !!flex-flow => flex-direction and/or flex-wrap, covered in `plugin.js`
  // ?flex-grow =>
  // ?flex-shrink =>
  'flex-wrap': 'box-lines',
  'justify-content': 'box-pack',
  'order': 'box-ordinal-group' // https://css-tricks.com/snippets/css/a-guide-to-flexbox/#comment-371025
};
var flex2009Values = {
  // flex => box || only for display? handled in the code
  'flex-end': 'end',
  'flex-start': 'start',
  // inline-flex => inline-box || see flex
  'nowrap': 'single',
  'space-around': 'justify',
  'space-between': 'justify',
  'wrap': 'multiple',
  'wrap-reverse': 'multiple'
};
var flex2012Props = {
  'align-content': '-ms-flex-line-pack',
  'align-items': '-ms-flex-align',
  'align-self': '-ms-flex-item-align',
  // flex => -ms-flex
  'flex-basis': '-ms-preferred-size',
  // flex-direction => -ms-flex-direction
  // flex-flow => -ms-flex-flow
  'flex-grow': '-ms-flex-positive',
  'flex-shrink': '-ms-flex-negative',
  // flex-wrap => -ms-flex-wrap
  'justify-content': '-ms-flex-pack',
  'order': '-ms-flex-order'
};
var flex2012Values = {
  // flex => flexbox || only for display? handled in the code
  'flex-end': 'end',
  'flex-start': 'start',
  // inline-flex => inline-flexbox || see 'flex'
  // nowrap => nowrap
  'space-around': 'distribute',
  'space-between': 'justify'
  // wrap => wrap
  // wrap-reverse => wrap-reverse
};

function detectKeywords(fixers) {
  if (fixers.prefix === '') return

  // build a map of {propertyI: {keywordJ: previxedKeywordJ, ...}, ...}
  for (var i = 0; i < keywords.length; i++) {
    var map = {}, property = keywords[i].props[0];
    // eslint-disable-next-line
    for (var j = 0, keyword; keyword = keywords[i].values[j]; j++) {

      if (
        !supportedDecl(property, keyword) &&
        supportedDecl(property, fixers.prefix + keyword)
      ) {
        fixers.hasKeywords = true;
        map[keyword] = fixers.prefix + keyword;
      }
    }
    // eslint-disable-next-line
    for (j = 0; property = keywords[i].props[j]; j++) {
      fixers.keywords[property] = map;
    }
  }
  if (fixers.keywords.display && fixers.keywords.display.flexbox && !supportedDecl('display', 'flex')) {
    // old IE
    fixers.keywords.display.flex = fixers.keywords.display.flexbox;
    fixers.keywords.display['inline-flex'] = fixers.keywords.display['inline-flexbox'];
    for (var k in flex2012Props) {
      fixers.properties[k] = flex2012Props[k];
      fixers.keywords[k] = flex2012Values;
    }
  } else if (fixers.keywords.display && fixers.keywords.display.box && !supportedDecl('display', 'flex')) {
    // old flexbox spec
    fixers.keywords.display.flex = fixers.keywords.display.box;
    fixers.keywords.display['inline-flex'] = fixers.keywords.display['inline-box'];
    fixers.flexbox2009 = true;
    for (k in flex2009Props) {
      fixers.properties[k] = fixers.prefix + flex2009Props[k];
      fixers.keywords[k] = flex2009Values;
    }
  }
  if (
    !supportedDecl('color', 'initial') &&
    supportedDecl('color', fixers.prefix + 'initial')
  ) {
    // `initial` does not use the `hasKeywords` branch, no need to set it to true.
    fixers.initial = fixers.prefix + 'initial';
  }
}

// Derived from Lea Verou's PrefixFree

function detectPrefix(fixers) {
  var prefixCounters = {};
  // Why are we doing this instead of iterating over properties in a .style object? Because Webkit.
  // 1. Older Webkit won't iterate over those.
  // 2. Recent Webkit will, but the 'Webkit'-prefixed properties are not enumerable. The 'webkit'
  //    (lower case 'w') ones are, but they don't `deCamelCase()` into a prefix that we can detect.

  function iteration(property) {
    if(property.charAt(0) === '-') {
      var prefix = property.split('-')[1];

      // Count prefix uses
      prefixCounters[prefix] = ++prefixCounters[prefix] || 1;
    }
  }

  // Some browsers have numerical indices for the properties, some don't
  if(allStyles && allStyles.length > 0) {
    for(var i=0; i<allStyles.length; i++) {
      iteration(allStyles[i]);
    }
  } else {
    for(var property in allStyles) {
      iteration(deCamelCase(property));
    }
  }

  var highest = 0;
  for(var prefix in prefixCounters) {
    if(highest < prefixCounters[prefix]) {
      highest = prefixCounters[prefix];
      fixers.prefix = '-' + prefix + '-';
    }
  }
  fixers.Prefix = camelCase(fixers.prefix);
}

// Derived from Lea Verou's PrefixFree

function detectSelectors(fixers) {
  var selector, prefixed;
  function prefixSelector(selector) {
    return selector.replace(/^::?/, function($0) { return $0 + fixers.prefix })
  }

  if (fixers.prefix === '') return
  var selectors = {
    ':any-link': ':any-link',
    ':read-only': ':read-only',
    ':read-write': ':read-write',
    '::selection': '::selection',

    ':fullscreen': ':fullscreen', //TODO sort out what changed between specs
    ':full-screen': ':fullscreen',
    '::backdrop': '::backdrop',

    //sigh
    ':placeholder': '::placeholder',
    '::placeholder': '::placeholder',
    ':input-placeholder': '::placeholder',
    '::input-placeholder': '::placeholder'
  };

  // builds an array of selectors that need a prefix.
  for (selector in selectors) {
    prefixed = prefixSelector(selector);
    if(!supportedRule(selector) && supportedRule(prefixed)) {
      fixers.hasSelectors = true;
      fixers.selectorList.push(selectors[selector]);
      fixers.selectorMap[selectors[selector]] = prefixed;
    }
  }
}

function blankFixers() {
  return {
    atrules: {},
    hasAtrules: false,
    hasDppx: null,
    hasKeywords: false,
    hasPixelRatio: false,
    hasPixelRatioFraction: false,
    hasSelectors: false,
    hasValues: false,
    fixAtMediaParams: null,
    fixAtSupportsParams: null,
    fixProperty: null,
    fixSelector: null,
    fixValue: null,
    flexbox2009: false,
    functions: [],
    initial: null,
    keywords: {},
    placeholder: null,
    prefix: '',
    Prefix: '',
    properties: {},
    selectorList: [],
    selectorMap: {},
    valueProperties: {
      'transition': 1,
      'transition-property': 1,
      'will-change': 1
    }
  }
}


function browserDetector(fixers) {
  // add the required data to the fixers object.
  init();
  detectPrefix(fixers);
  detectSelectors(fixers);
  detectAtrules(fixers);
  detectKeywords(fixers);
  detectFunctions(fixers);
  finalize();
}

var emptySet = {};

var valueTokenizer = /[(),]|\/\*[\s\S]*?\*\//g;

/**
 * For properties whose values are also properties, this will split a coma-separated
 * value list into individual values, ignoring comas in comments and in
 * functions(parameter, lists).
 *
 * @param {string} selector
 * @return {string[]}
 */

function splitValue(value) {
  var indices = [], res = [], inParen = 0, o;
  /*eslint-disable no-cond-assign*/
  while (o = valueTokenizer.exec(value)) {
  /*eslint-enable no-cond-assign*/
    switch (o[0]) {
    case '(': inParen++; break
    case ')': inParen--; break
    case ',': if (inParen) break; indices.push(o.index);
    }
  }
  for (o = indices.length; o--;){
    res.unshift(value.slice(indices[o] + 1));
    value = value.slice(0, indices[o]);
  }
  res.unshift(value);
  return res
}

function makeDetector (before, targets, after) {
  return new RegExp(before + '(?:' + targets.join('|') + ')' + after)
}

function makeLexer (before, targets, after) {
  return new RegExp(
        "\"(?:\\\\[\\S\\s]|[^\"])*\"|'(?:\\\\[\\S\\s]|[^'])*'|\\/\\*[\\S\\s]*?\\*\\/|" +
            before + '((?:' +
            targets.join('|') +
            '))' + after,
        'gi'
    )
}


function finalizeFixers(fixers) {
  var prefix = fixers.prefix;


  // properties
  // ----------

  fixers.fixProperty = fixers.fixProperty || function(prop) {
    var prefixed;
    return fixers.properties[prop] = (
      supportedProperty(prop) ||
      !supportedProperty(prefixed = prefix + prop)
    ) ? prop : prefixed
  };


  // selectors
  // ----------

  var selectorDetector = makeDetector('', fixers.selectorList, '(?:\\b|$|[^-])');
  var selectorMatcher = makeLexer('', fixers.selectorList, '(?:\\b|$|[^-])');
  var selectorReplacer = function(match, selector) {
    return selector != null ? fixers.selectorMap[selector] : match
  };
  fixers.fixSelector = function(selector) {
    return selectorDetector.test(selector) ? selector.replace(selectorMatcher, selectorReplacer) : selector
  };


  // values
  // ------

  // When gradients are supported with a prefix, convert angles to legacy
  // (from clockwise to trigonometric)
  var hasGradients = fixers.functions.indexOf('linear-gradient') > -1;
  var gradientDetector = /\blinear-gradient\(/;
  var gradientMatcher = /(^|\s|,|\()((?:repeating-)?linear-gradient\()\s*(-?\d*\.?\d*)deg/ig;
  var gradientReplacer = function (match, delim, gradient, deg) {
    return delim + gradient + (90-deg) + 'deg'
  };

  // functions
  var hasFunctions = !!fixers.functions.length;
  var functionsDetector = makeDetector('(?:^|\\s|,|\\()', fixers.functions, '\\s*\\(');
  var functionsMatcher = makeLexer('(^|\\s|,|\\()', fixers.functions, '(?=\\s*\\()');
  function functionReplacer (match, $1, $2) {
    return $1 + prefix + $2
  }

  // properties as values (for transition, ...)
  // No need to look for strings in these properties. We may insert prefixes in comments. Oh the humanity.
  var valuePropertiesMatcher = /^\s*([-\w]+)/gi;
  var valuePropertiesReplacer = function(match, prop){
    return fixers.properties[prop] || fixers.fixProperty(prop)
  };

  fixers.fixValue = function (value, property) {
    var res;
    if (fixers.initial != null && value === 'initial') return fixers.initial

    if (fixers.hasKeywords && (res = (fixers.keywords[property] || emptySet)[value])) return res

    res = value;

    if (fixers.valueProperties.hasOwnProperty(property)) {
      res = (value.indexOf(',') === -1) ?
        value.replace(valuePropertiesMatcher, valuePropertiesReplacer) :
        splitValue(value).map(function(v) {
          return v.replace(valuePropertiesMatcher, valuePropertiesReplacer)
        }).join(',');
    }

    if (hasFunctions && functionsDetector.test(value)) {
      if (hasGradients && gradientDetector.test(value)) {
        res = res.replace(gradientMatcher, gradientReplacer);
      }
      res = res.replace(functionsMatcher, functionReplacer);
    }
    return res
  };


  // @media (resolution:...) {
  // -------------------------

  var resolutionMatcher = /((?:min-|max-)?resolution)\s*:\s*((?:\d*.)?\d+)dppx/g;
  var resolutionReplacer = (
    fixers.hasPixelRatio ? function(_, prop, param){return fixers.properties[prop] + ':' + param} :
    fixers.hasPixelRatioFraction ? function(_, prop, param){return fixers.properties[prop] + ':' + Math.round(param*10) + '/10'} :
    function(_, prop, param){return prop + ':' + Math.round(param * 96) +'dpi'}
  );

  fixers.fixAtMediaParams = fixers.hasDppx !== false /*it may be null*/ ?
    function(p) {return p} :
    function (params) {
      return (params.indexOf('reso') !== -1) ?
        params.replace(resolutionMatcher, resolutionReplacer) :
        params
    };


  // @supports ... {
  // ---------------

  // regexp built by scripts/regexps.js
  var atSupportsParamsMatcher = /\(\s*([-\w]+)\s*:\s*((?:"(?:\\[\S\s]|[^"])*"|'(?:\\[\S\s]|[^'])*'|\/\*[\S\s]*?\*\/|\((?:"(?:\\[\S\s]|[^"])*"|'(?:\\[\S\s]|[^'])*'|\/\*[\S\s]*?\*\/|\((?:"(?:\\[\S\s]|[^"])*"|'(?:\\[\S\s]|[^'])*'|\/\*[\S\s]*?\*\/|\((?:"(?:\\[\S\s]|[^"])*"|'(?:\\[\S\s]|[^'])*'|\/\*[\S\s]*?\*\/|\((?:"(?:\\[\S\s]|[^"])*"|'(?:\\[\S\s]|[^'])*'|\/\*[\S\s]*?\*\/|\([^\)]*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*\)|[^\)])*)/g;
  function atSupportsParamsReplacer(match, prop, value) {
    return '(' + (fixers.properties[prop] || fixers.fixProperty(prop)) + ':' + fixers.fixValue(value, prop)
  }
  fixers.fixAtSupportsParams = function(params) {
    return params.replace(atSupportsParamsMatcher, atSupportsParamsReplacer)
  };
}

var commonFixers;

function initBrowser() {
  commonFixers = blankFixers();
  if (typeof getComputedStyle === 'function') browserDetector(commonFixers);
  finalizeFixers(commonFixers);
}
initBrowser();

function prefixPlugin(j2c) {
  var fixers = commonFixers;
  var cache = [];

  if (j2c) j2c.setPrefixDb = function(f) {
    if (cache.indexOf(f) === -1) {
      finalizeFixers(f);
      cache.push(f);
    }
    fixers = f;
    return prefixPlugin
  };
  return {
    $filter: function(next) {
      return {
        atrule: function(rule, kind, params, hasBlock) {
          next.atrule(
            fixers.hasAtrules && fixers.atrules[rule] || rule,
            kind,
            (
              rule === '@media'    ? fixers.fixAtMediaParams(params) :
              rule === '@supports' ? fixers.fixAtSupportsParams(params) :
              params
            ),
            hasBlock
          );
        },
        decl: function decl(property, value) {
          if (!property || !(typeof value === 'string' || typeof value === 'number')){
            return next.decl(fixers.properties[property] || fixers.fixProperty(property), value)
          }
          value = value + '';
          if (property === 'flex-flow' && fixers.flexbox2009) {
            value.split(' ').forEach(function(v){
              // recurse! The lack of `next.` is intentional.
              if (v.indexOf('wrap') > -1) decl('flex-wrap', v);
              else if(v !== '') decl('flex-direction', v);
            });
          } else if (property === 'flex-direction' && fixers.flexbox2009) {
            next.decl(fixers.properties['box-orient'], value.indexOf('column') > -1 ? 'block-axis' : 'inline-axis');
            next.decl(fixers.properties['box-direction'], value.indexOf('-reverse') > -1 ? 'reverse' : 'normal');
          } else {
            next.decl(
              fixers.properties[property] || fixers.fixProperty(property),
              fixers.fixValue(value, property)
            );
          }
        },
        rule: function(selector) {
          next.rule(
            fixers.hasSelectors ? fixers.fixSelector(selector) : selector
          );
        }
      }
    }
  }
}

exports.prefixPlugin = prefixPlugin;


/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_shadow__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */






var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;

var vars$1 = {
  border_radius: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_block_border_radius,
  padding: 3 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component,
  header_bottom: 20,
  header_height: 60,
  footer_height: 52,

  color_light_content_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_background),
  color_light_title_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_body_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_regular),
  color_light_body_border: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_light_backdrop_background: "rgba(0, 0, 0, .4)",

  color_dark_content_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_background),
  color_dark_title_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_body_text: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_regular),
  color_dark_body_border: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_border_light),
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lineHeightTitle = 24;

var layout = (function (selector, componentVars) {
  var _ref;

  return [(_ref = {}, _defineProperty(_ref, selector, [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutCenterCenter, {
    transitionTimingFunction: "ease-out",
    transitionProperty: "opacity",
    // transition-duration set in js
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    "z-index": __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].z_dialog,
    height: "100%", // 100vh would make the dialog go beneath Mobile Safari toolbar
    padding: componentVars.padding + "px 40px",
    opacity: 0,

    "&.pe-dialog--visible": {
      opacity: 1
    },

    "&.pe-dialog--fullscreen": {
      padding: 0,

      " .pe-dialog__content": {
        "border-radius": 0,
        "max-width": "none",
        height: "100%",
        width: "100%",

        " .pe-dialog__header, .pe-dialog__footer": {
          display: "none"
        },

        " .pe-dialog__body": {
          padding: 0,
          height: "100%",
          "max-height": "calc(100%)",
          border: "none"
        }
      }
    },

    " .pe-dialog__header, pe-dialog__body, pe-dialog__header": {
      "z-index": 1
    },

    " .pe-dialog__content": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutVertical, {
      position: "relative",
      "max-height": "100%",
      "min-width": 56 * 5 + "px",
      "max-width": 7 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_menu + "px",
      "border-radius": componentVars.border_radius + "px",

      " > .pe-shadow": {
        "z-index": -1 // For IE10 to get click events on content
      },

      "&.pe-menu__content": {
        " .pe-dialog__body": {
          padding: 0,
          border: "none"
        }
      }
    }],

    " .pe-dialog__title": {
      "font-size": __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].font_size_title + "px",
      "line-height": lineHeightTitle + "px",
      "font-weight": __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].font_weight_medium,

      "& + div": {
        "margin-top": "16px"
      }
    },

    " .pe-dialog__header": {
      padding: [componentVars.padding - 4, componentVars.padding, componentVars.header_bottom - 4, componentVars.padding].map(function (v) {
        return v + "px";
      }).join(" "),
      "min-height": componentVars.header_height + "px",

      " .pe-dialog__title": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].ellipsis(1), {
        width: "100%"
      }]
    },

    " .pe-dialog__body": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].selfStretch, __WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].hairline("border-top"), {
      "border-top-style": "solid"
    }, __WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].hairline("border-top"), {
      "border-bottom-style": "solid"
    }, {
      padding: [componentVars.padding, componentVars.padding, componentVars.padding - 5, componentVars.padding].map(function (v) {
        return v + "px";
      }).join(" "),
      "overflow-y": "auto",
      "-webkit-overflow-scrolling": "touch",
      "border-width": "1px",
      "border-style": "solid none",
      "border-color": "transparent",
      // initially set max-height; will be overridden by dialog core with actual heights
      "max-height": "calc(100vh - " + 2 * componentVars.padding + "px - " + (componentVars.header_height + componentVars.footer_height) + "px)"
    }],
    " .pe-dialog__header + .pe-dialog__body": {
      "padding-top": 0
    },

    " .pe-dialog__footer": {
      padding: "2px 8px",
      "min-height": componentVars.footer_height + "px",
      "font-size": 0, // remove inline block spacing

      "&.pe-dialog__footer--high": {
        // when buttons are stacked vertically
        "padding-bottom": "8px"
      }
    },

    " .pe-dialog__actions": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutHorizontal, __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutEndJustified, __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutWrap, {
      margin: "0 -4px",

      " .pe-button": {
        height: "36px",
        "margin-top": "6px",
        "margin-bottom": "6px",
        padding: 0
      }
    }]
  }]), _defineProperty(_ref, " body.pe-dialog--open", {
    overflow: "hidden",
    left: 0,
    "-webkit-overflow-scrolling": "touch",
    top: 0,
    width: "100%"
  }), _ref)];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector, {
    "&.pe-dialog--backdrop": {
      "background-color": componentVars["color_" + tint + "_backdrop_background"]
    },
    " .pe-dialog__content": {
      "background-color": componentVars["color_" + tint + "_content_background"]
    },
    " .pe-dialog__header .pe-dialog__title": {
      "color": componentVars["color_" + tint + "_title_text"]
    },
    " .pe-dialog__body": {
      "color": componentVars["color_" + tint + "_body_text"]
    },
    "&.pe-dialog--overflow-top .pe-dialog__body": {
      "border-top-color": componentVars["color_" + tint + "_body_border"]
    },
    "&.pe-dialog--overflow-bottom .pe-dialog__body": {
      "border-bottom-color": componentVars["color_" + tint + "_body_border"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme", selector, componentVars, "dark"), // has dark theme
  style(".pe-dark-theme ", selector, componentVars, "dark")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-dialog";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-dialog",
  visible: "pe-dialog--visible",
  body: "pe-dialog__body",
  fullscreen: "pe-dialog--fullscreen",
  content: "pe-dialog__content",
  header: "pe-dialog__header",
  footer: "pe-dialog__footer",
  footerHigh: "pe-dialog__footer--high",
  title: "pe-dialog__title",
  actions: "pe-dialog__actions",
  hasBackdrop: "pe-dialog--backdrop",
  hasTopOverflow: "pe-dialog--overflow-top",
  hasBottomOverflow: "pe-dialog--overflow-bottom",
  /* lookup: */
  menuContent: "pe-menu__content"
};

var SCROLL_WATCH_TIMER = 150;

var updateScrollState = function updateScrollState(state) {
  var scroller = state.scrollEl;
  if (!scroller) {
    return;
  }
  state.topOverflow = scroller.scrollTop > 0;
  state.bottomOverflow = scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0;
};

var updateFooterState = function updateFooterState(state) {
  var footerEl = state.footerEl;
  if (footerEl) {
    var style = window.getComputedStyle(footerEl);
    var height = footerEl.getBoundingClientRect().height;
    var minHeight = parseInt(style.minHeight, 10);
    if (height > minHeight) {
      footerEl.classList.add(classes.footerHigh);
    } else {
      footerEl.classList.remove(classes.footerHigh);
    }
  }
};

var showDialog = function showDialog(state, opts) {
  var id = state.id;
  state.isTransitioning = true;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["j" /* show */])(_extends({}, opts, {
    el: state.el,
    showClass: classes.visible
  })).then(function () {
    state.isTransitioning = false;
    state.visible = true;
    if (state.didShow) {
      // notify multiple
      state.didShow(id);
      // this will call opts.didShow
    }
  });
};

var hideDialog = function hideDialog(state, opts) {
  var id = state.id;
  state.isTransitioning = true;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["k" /* hide */])(_extends({}, opts, {
    el: state.el,
    showClass: classes.visible
  })).then(function () {
    dialog.remove(id);
    state.isTransitioning = false;
    state.visible = false;
    if (state.didHide) {
      // notify multiple
      state.didHide(id);
      // this will call opts.didHide
    }
    setTimeout(__WEBPACK_IMPORTED_MODULE_1_mithril___default.a.redraw, 0); // removes remainder of dialog component
  });
};

var createViewContent = function createViewContent(state, opts) {
  // if flex "self-stretch" is not supported, calculate the maximum height
  var bodyOpts = opts.body || opts.menu;
  var updateContentOnScroll = opts.updateContentOnScroll || false;
  var ignoreContent = !updateContentOnScroll && state.isScrolling;
  return __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes.body,
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;
      return state.scrollEl = dom;
    },
    onbeforeupdate: !ignoreContent,
    onscroll: function onscroll() {
      state.isScrolling = true;
      updateScrollState(state);

      clearTimeout(state.scrollWatchId);
      state.scrollWatchId = setTimeout(function () {
        state.isScrolling = false;
      }, SCROLL_WATCH_TIMER);
    }
  }, bodyOpts);
};

var createView = function createView(state, opts) {
  var update = function update() {
    updateScrollState(state);
    updateFooterState(state);
    __WEBPACK_IMPORTED_MODULE_1_mithril___default.a.redraw();
  };
  var handleEscape = function handleEscape(e) {
    if (opts.fullscreen || opts.modal) return;
    if (e.which === 27 && !state.isTransitioning) {
      cleanup();
      hideDialog(state, _extends({}, opts, {
        hideDelay: 0
      }));
    }
  };
  var cleanup = function cleanup() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* unsubscribe */])("resize", update);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* unsubscribe */])("keydown", handleEscape);
  };

  var element = opts.element || "form";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["d" /* filterSupportedAttributes */])(opts), {
    style: null, // set in content
    class: [classes.component, opts.fullscreen ? classes.fullscreen : null, opts.backdrop ? classes.hasBackdrop : null, state.topOverflow || opts.borders ? classes.hasTopOverflow : null, state.bottomOverflow || opts.borders ? classes.hasBottomOverflow : null, state.visible ? classes.visible : null, opts.class].join(" "),
    oncreate: function oncreate(_ref2) {
      var dom = _ref2.dom;

      state.el = dom;
      // resize: update scroll state ("overflow" borders)
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* subscribe */])("resize", update);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* subscribe */])("keydown", handleEscape);

      updateScrollState(state);

      showDialog(state, opts).then(function () {
        updateScrollState(state);
        updateFooterState(state);
        if (state.topOverflow || state.bottomOverflow) {
          setTimeout(__WEBPACK_IMPORTED_MODULE_1_mithril___default.a.redraw, 0);
        }
      });
    },
    onremove: cleanup,
    // click backdrop: close dialog
    onclick: function onclick(e) {
      if (e.target !== state.el) {
        return;
      }
      if (opts.modal) {
        // not allowed
        return;
      }
      if (!state.isTransitioning) {
        hideDialog(state, _extends({}, opts, {
          hideDelay: 0
        }));
      }
    }
  }, opts.formOptions ? opts.formOptions : null);

  var body = createViewContent(state, opts);
  var content = __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: [classes.content, opts.menu ? classes.menuContent : null].join(" "),
    style: opts.style
  }, [opts.fullscreen ? null : __WEBPACK_IMPORTED_MODULE_1_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_shadow__["a" /* default */], {
    z: state.z,
    animated: true
  }), opts.fullscreen ? null : opts.title ? __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes.header,
    oncreate: function oncreate(_ref3) {
      var dom = _ref3.dom;

      state.headerHeight = dom.scrollHeight;
    }
  }, __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes.title
  }, opts.title)) : null, body, opts.fullscreen ? null : opts.footer ? __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes.footer,
    oncreate: function oncreate(_ref4) {
      var dom = _ref4.dom;

      state.footerHeight = dom.scrollHeight;
      state.footerEl = dom;
      updateFooterState(state);
    },
    onupdate: function onupdate(_ref5) {
      var dom = _ref5.dom;
      return state.footerHeight = dom.scrollHeight, updateFooterState(state);
    }
  }, [__WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes.actions
  }, opts.footer)]) : null]);

  return __WEBPACK_IMPORTED_MODULE_1_mithril___default()(element, props, [opts.before, content, opts.after]);
};

var instance = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    var opts = attrs.opts;
    var z = opts.z !== undefined ? opts.z : 3; // shadow depth
    vnode.state = _extends(vnode.state, attrs, {
      id: attrs.instanceId,
      z: z,
      scrollEl: undefined,
      footerEl: undefined,
      topOverflow: false,
      bottomOverflow: false,
      scrollWatchId: 0,
      isScrolling: false,
      headerHeight: 0,
      footerHeight: 0,
      el: undefined,
      visible: false,
      isTransitioning: false
    });
  },
  view: function view(_ref6) {
    var state = _ref6.state,
        attrs = _ref6.attrs;

    // attrs contains {id, opts}
    var opts = typeof attrs.opts === "function" ? attrs.opts() : attrs.opts;
    if (attrs.hide && !state.isTransitioning) {
      hideDialog(state, opts);
    }
    return createView(state, opts);
  }
};

var dialog = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["l" /* multiple */])({
  instance: instance,
  defaultId: "default_dialog",
  element: ".pe-dialog__holder",
  placeholder: "span.pe-dialog__placeholder",
  bodyShowClass: "pe-dialog--open"
});

/* harmony default export */ __webpack_exports__["a"] = dialog;


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_icon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */






var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;

var vars$1 = {
  size_regular: 7 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component,
  size_mini: 5 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component,
  padding_regular: 2 * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component,

  color_light: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary_foreground),
  color_dark: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary_foreground),

  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].vendorize({
    userSelect: "none"
  }, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].prefixes_user_select), {
    display: "inline-block",
    position: "relative",
    outline: "none",
    cursor: "pointer",
    padding: 0,
    border: "none",

    " .pe-button__content": {
      position: "relative",
      width: componentVars.size_regular + "px",
      height: componentVars.size_regular + "px",
      borderRadius: "50%",
      padding: componentVars.padding_regular + "px"
    },

    ".pe-fab--mini": {
      " .pe-button__content": {
        width: componentVars.size_mini + "px",
        height: componentVars.size_mini + "px",
        padding: (componentVars.size_mini - __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size) / 2 + "px"
      }
    },

    " .pe-ripple": {
      borderRadius: "inherit"
    },

    " .pe-button__wash": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].vendorize({
      transition: "background-color " + __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].animation_duration + " ease-in-out"
    }, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].prefixes_transition), {
      borderRadius: "inherit",
      pointerEvents: "none",
      backgroundColor: "transparent"
    }]
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector, {
    " .pe-button__content": {
      backgroundColor: componentVars["color_" + tint + "_background"],
      color: componentVars["color_" + tint]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark") // inside dark theme
  ];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-fab";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-fab",
  content: "pe-fab__content",
  mini: "pe-fab--mini"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.icon ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_icon__["a" /* default */], attrs.icon) : attrs.children || vnode.children;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__["a" /* default */], _extends({}, {
    content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
      class: classes.content
    }, content),
    parentClass: [classes.component, attrs.mini ? classes.mini : null].join(" "),
    // defaults
    ripple: {
      center: true,
      opacityDecayVelocity: 0.24
    },
    shadow: { increase: 5 },
    ink: true,
    wash: true,
    animateOnTap: attrs.animateOnTap !== undefined ? attrs.animateOnTap : true
  }, attrs));
};

var fab = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = fab;


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fastclick__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);



var THROTTLE_DELAY = 100;
var REINIT_DELAY = THROTTLE_DELAY + 50;
var layer = document.body;

var fastClick = void 0;
var timeoutId = void 0;
var enabled = void 0;

var add = function add() {
  if (!enabled) {
    fastClick = new __WEBPACK_IMPORTED_MODULE_0_fastclick___default.a(layer);
    enabled = true;
  }
};

var remove = function remove() {
  if (enabled) {
    fastClick.destroy();
    enabled = false;
  }
};

var handleScroll = function handleScroll() {
  remove();
  if (timeoutId) {
    window.clearTimeout(timeoutId);
  }
  timeoutId = window.setTimeout(add, REINIT_DELAY);
};

if (__WEBPACK_IMPORTED_MODULE_1_polythene_core__["b" /* isTouch */]) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* subscribe */])("scroll", handleScroll, THROTTLE_DELAY);
  add();
}


/***/ }),
/* 30 */
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


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */






var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;

var vars$1 = {
  padding: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component, // vertical padding
  padding_compact: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component / 2,
  border_width_stacked: 1,
  border_width_bordered: 1,

  color_light_border: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_dark_border: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_border_light),

  color_light_background: "inherit",
  color_dark_background: "inherit"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var borderStyle = function borderStyle(componentVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].hairline("border-bottom"), {
    borderStyle: "none none solid none",
    borderWidth: componentVars.border_width_bordered + "px"
  };
};

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, {
    padding: componentVars.padding + "px 0",

    ".pe-list--header": {
      paddingTop: 0
    },

    ".pe-list--compact": {
      padding: componentVars.padding_compact + "px 0"
    },

    "& + &": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].hairline("border-top"), {
      borderStyle: "solid none none none",
      borderWidth: componentVars.border_width_stacked + "px"
    }],

    ".pe-list--borders": {
      " .pe-list-tile:not(.pe-list__header)": {
        ":not(:last-child)": {
          "&": borderStyle(componentVars)
        }
      }
    },

    ".pe-list--indented-borders": {
      borderTop: "none",

      " .pe-list-tile:not(.pe-list__header)": {
        ":not(:last-child)": {
          " .pe-list-tile__content:not(.pe-list-tile__content--front)": borderStyle(componentVars)
        }
      }
    }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  var _ref;

  return [(_ref = {}, _defineProperty$1(_ref, scope + selector, {
    backgroundColor: componentVars["color_" + tint + "_background"],

    ".pe-list--borders": {
      " .pe-list-tile:not(.pe-list__header)": {
        ":not(:last-child)": {
          borderColor: componentVars["color_" + tint + "_border"]
        }
      }
    },

    ".pe-list--indented-borders": {
      " .pe-list-tile:not(.pe-list__header)": {
        " .pe-list-tile__content:not(.pe-list-tile__content--front)": {
          borderColor: componentVars["color_" + tint + "_border"]
        }
      }
    }
  }), _defineProperty$1(_ref, " .pe-list + .pe-list", {
    borderColor: componentVars["color_" + tint + "_border"]
  }), _ref)];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-list";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-list",
  header: "pe-list__header",
  borders: "pe-list--borders",
  indentedBorders: "pe-list--indented-borders",
  hasHeader: "pe-list--header",
  compact: "pe-list--compact",
  hoverable: "pe-list--hoverable",
  selectable: "pe-list--selectable"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["d" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.borders ? classes.borders : null, attrs.indentedBorders ? classes.indentedBorders : null, attrs.hoverable ? classes.hoverable : null, attrs.selectable ? classes.selectable : null, attrs.header ? classes.hasHeader : null, attrs.compact ? classes.compact : null, attrs.class].join(" ")
  });
  var headerOpts = void 0;
  if (attrs.header) {
    headerOpts = _extends({}, attrs.header);
    headerOpts.class = [classes.header, headerOpts.class || null].join(" ");
  }
  var content = [headerOpts ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__["a" /* default */], headerOpts) : null, attrs.tiles ? attrs.tiles : attrs.content ? attrs.content : attrs.children || vnode.children];
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var list = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = list;


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_webfontloader__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_webfontloader___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_webfontloader__);




var fontSize = 14;

var typography = [{
  " h1, h2, h3, h4, h5, h6, p": {
    margin: 0,
    padding: 0
  }
}, {
  " h1 small, h2 small, h3 small, h4 small, h5 small, h6 small": {
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].line_height,
    "letter-spacing": "-0.02em",
    "font-size": "0.6em"
  }
}, {
  " h1": {
    "font-size": "56px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].line_height,
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h2": {
    "font-size": "45px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": "48px",
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h3": {
    "font-size": "34px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": "40px",
    "margin-top": "24px",
    "margin-bottom": "24px"
  }
}, {
  " h4": {
    "font-size": "24px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": "32px",
    "-moz-osx-font-smoothing": "grayscale",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " h5": {
    "font-size": "20px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_medium,
    "line-height": "1",
    "letter-spacing": "-0.02em",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " h6": {
    "font-size": "16px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": "24px",
    "letter-spacing": "0.04em",
    "margin-top": "24px",
    "margin-bottom": "16px"
  }
}, {
  " html, body": {
    "font-size": fontSize + "px",
    "line-height": "20px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal
  },
  " p": {
    "font-size": fontSize + "px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": "24px",
    "letter-spacing": "0",
    "margin-bottom": "16px"
  },
  " blockquote": {
    "position": "relative",
    "font-size": "24px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "font-style": "italic",
    "line-height": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].line_height,
    "letter-spacing": "0.08em",
    "margin-top": "24px",
    "margin-bottom": "16px"
  },
  " ul, ol": {
    "font-size": fontSize + "px",
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_normal,
    "line-height": "24px",
    "letter-spacing": 0
  },
  "b, strong": {
    "font-weight": __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].font_weight_medium
  }
}];

var reset = [{
  // apply a natural box layout model to all elements, but allow elements to change
  " html": {
    "box-sizing": "border-box"
  },
  " *, *:before, *:after": {
    "box-sizing": "inherit"
  },
  " *": [
  // remove tap highlight in mobile Safari
  {
    "-webkit-tap-highlight-color": "rgba(0,0,0,0)"
  }, {
    "-webkit-tap-highlight-color": "transparent" // For some Androids
  }],

  // Remove dotted link borders in Firefox
  " a, a:active, a:focus, input:active, input[type]:focus": {
    outline: 0
  },

  // Mobile Safari: override default fading of disabled elements
  " input:disabled": {
    opacity: 1
  }
}];

__WEBPACK_IMPORTED_MODULE_2_webfontloader___default.a.load({
  google: {
    families: ["Roboto:400,500,700,400italic:latin"]
  }
});

var roboto = [{
  "html, body, button, input, select, textarea": {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif"
  }
}];

__WEBPACK_IMPORTED_MODULE_0_polythene_css__["b" /* styler */].add("pe-theme", reset, typography, roboto);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.27 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.m=b||a;this.c=this.m.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function z(a){if("string"===typeof a.f)return a.f;var b=a.m.location.protocol;"about:"==b&&(b=a.a.location.protocol);return"https:"==b?"https:":"http:"}function ea(a){return a.m.location.hostname||a.a.location.hostname}
function A(a,b,c){function d(){k&&e&&f&&(k(g),k=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,k=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function B(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function C(){this.a=0;this.c=null}function D(a){a.a++;return function(){a.a--;E(a)}}function F(a,b){a.c=b;E(a)}function E(a){0==a.a&&a.c&&(a.c(),a.c=null)};function G(a){this.a=a||"-"}G.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function H(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return I(a)+" "+(a.f+"00")+" 300px "+J(a.c)}function J(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function K(a){return a.a+a.f}function I(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.m.document.documentElement;this.h=b;this.a=new G("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);L(a,"loading")}function M(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}L(a,"inactive")}function L(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,K(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function N(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function O(a){u(a.c,"body",a.a)}function P(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+J(a.c)+";"+("font-style:"+I(a)+";font-weight:"+(a.f+"00")+";")};function Q(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}Q.prototype.start=function(){var a=this.c.m.document,b=this,c=q(),d=new Promise(function(d,e){function k(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(k,25)},function(){e()})}k()}),e=new Promise(function(a,d){setTimeout(d,b.f)});Promise.race([e,d]).then(function(){b.g(b.a)},function(){b.j(b.a)})};function R(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.o=this.j=this.h=this.g=null;this.g=new N(this.c,this.s);this.h=new N(this.c,this.s);this.j=new N(this.c,this.s);this.o=new N(this.c,this.s);a=new H(this.a.c+",serif",K(this.a));a=P(a);this.g.a.style.cssText=a;a=new H(this.a.c+",sans-serif",K(this.a));a=P(a);this.h.a.style.cssText=a;a=new H("serif",K(this.a));a=P(a);this.j.a.style.cssText=a;a=new H("sans-serif",K(this.a));a=
P(a);this.o.a.style.cssText=a;O(this.g);O(this.h);O(this.j);O(this.o)}var S={D:"serif",C:"sans-serif"},T=null;function U(){if(null===T){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);T=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return T}R.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.o.a.offsetWidth;this.A=q();la(this)};
function ma(a,b,c){for(var d in S)if(S.hasOwnProperty(d)&&b===a.f[S[d]]&&c===a.f[S[d]])return!0;return!1}function la(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=U()&&ma(a,b,c));d?q()-a.A>=a.w?U()&&ma(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):na(a):V(a,a.v)}function na(a){setTimeout(p(function(){la(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.o.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.o=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,K(a).toString(),"active")],[b.a.c("wf",a.c,K(a).toString(),"loading"),b.a.c("wf",a.c,K(a).toString(),"inactive")]);L(b,"fontactive",a);this.o=!0;oa(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,K(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,K(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,K(a).toString(),"inactive"));w(b.f,d,e)}L(b,"fontinactive",a);oa(this)};function oa(a){0==--a.f&&a.j&&(a.o?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),L(a,"active")):M(a.a))};function pa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}pa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;qa(this,new ha(this.c,a),a)};
function ra(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,k=d||null||{};if(0===c.length&&f)M(b.a);else{b.f+=c.length;f&&(b.j=f);var h,m=[];for(h=0;h<c.length;h++){var l=c[h],n=k[l.c],r=b.a,x=l;r.g&&w(r.f,[r.a.c("wf",x.c,K(x).toString(),"loading")]);L(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),ya=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):ya?!1:!0}else X=!1;X?r=new Q(p(b.g,b),p(b.h,b),b.c,l,b.s,n):r=new R(p(b.g,b),p(b.h,b),b.c,l,b.s,a,n);m.push(r)}for(h=0;h<m.length;h++)m[h].start()}},0)}function qa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){ra(a,f,b,d,c)})};function sa(a,b){this.c=a;this.a=b}function ta(a,b,c){var d=z(a.c);a=(a.a.api||"fast.fonts.net/jsapi").replace(/^.*http(s?):(\/\/)?/,"");return d+"//"+a+"/"+b+".js"+(c?"?v="+c:"")}
sa.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var m=0;m<c.length;m++){var l=c[m].fontfamily;void 0!=c[m].fontStyle&&void 0!=c[m].fontWeight?(h=c[m].fontStyle+c[m].fontWeight,e.push(new H(l,h))):e.push(new H(l))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.m;B(this.c,ta(c,d,e),function(e){e?a([]):(f["__MonotypeConfiguration__"+d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+
d}else a([])};function ua(a,b){this.c=a;this.a=b}ua.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new C;b=0;for(c=d.length;b<c;b++)A(this.c,d[b],D(g));var k=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),m=0;m<h.length;m+=1)k.push(new H(d[0],h[m]));else k.push(new H(d[0]));F(g,function(){a(k,f)})};function va(a,b,c){a?this.c=a:this.c=b+wa;this.a=[];this.f=[];this.g=c||""}var wa="//fonts.googleapis.com/css";function xa(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function za(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function Aa(a){this.f=a;this.a=[];this.c={}}
var Ba={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Ca={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Da={i:"i",italic:"i",n:"n",normal:"n"},
Ea=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Fa(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var k=d[1];g=[];if(k)for(var k=k.split(","),h=k.length,m=0;m<h;m++){var l;l=k[m];if(l.match(/^[\w-]+$/)){var n=Ea.exec(l.toLowerCase());if(null==n)l="";else{l=n[2];l=null==l||""==l?"n":Da[l];n=n[1];if(null==n||""==n)n="4";else var r=Ca[n],n=r?r:isNaN(n)?"4":n.substr(0,1);l=[l,n].join("")}}else l="";l&&g.push(l)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=Ba[d[0]])&&(a.c[e]=d))}a.c[e]||(d=Ba[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new H(e,f[d]))}};function Ga(a,b){this.c=a;this.a=b}var Ha={Arimo:!0,Cousine:!0,Tinos:!0};Ga.prototype.load=function(a){var b=new C,c=this.c,d=new va(this.a.api,z(c),this.a.text),e=this.a.families;xa(d,e);var f=new Aa(e);Fa(f);A(c,za(d),D(b));F(b,function(){a(f.a,f.c,Ha)})};function Ia(a,b){this.c=a;this.a=b}Ia.prototype.load=function(a){var b=this.a.id,c=this.c.m;b?B(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],k=b[f+1],h=0;h<k.length;h++)e.push(new H(g,k[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(m){}a(e)}},2E3):a([])};function Ja(a,b){this.c=a;this.f=b;this.a=[]}Ja.prototype.load=function(a){var b=this.f.id,c=this.c.m,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,k=c.fonts.length;g<k;++g){var h=c.fonts[g];d.a.push(new H(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},B(this.c,z(this.c)+(this.f.api||"//f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new pa(window);Y.a.c.custom=function(a,b){return new ua(b,a)};Y.a.c.fontdeck=function(a,b){return new Ja(b,a)};Y.a.c.monotype=function(a,b){return new sa(b,a)};Y.a.c.typekit=function(a,b){return new Ia(b,a)};Y.a.c.google=function(a,b){return new Ga(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return Z}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_shadow__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */






var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;

var vars$1 = {
  sizes: [1, 1.5, 2, 3, 4, 5, 6, 7],
  min_size: 1.5,
  max_size_small_screen: 5,
  size_factor: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_menu,
  border_radius: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_block_border_radius,

  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_background),
  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_background)
  // text colors are set by content, usually list tiles
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var unifySize$1 = function unifySize(componentVars, size) {
  return size < componentVars.min_size ? componentVars.min_size : size;
};

var widthClass$1 = function widthClass(size) {
  var sizeStr = size.toString().replace(".", "-");
  return "pe-menu--width-" + sizeStr;
};

var widthStyle = function widthStyle(componentVars, size) {
  var s = unifySize$1(componentVars, size);
  return _defineProperty({}, "&." + widthClass$1(s), {
    width: componentVars.size_factor * s + "px",
    "max-width": "100%"
  });
};
var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [componentVars.sizes.map(function (size) {
    return widthStyle(componentVars, size);
  }), _defineProperty({
    transitionTimingFunction: "ease-out",
    transitionProperty: "opacity",
    zIndex: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].z_menu,
    opacity: 0,
    position: "absolute",
    width: "100%",
    minWidth: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_menu * componentVars.min_size + "px",

    "&.pe-menu--width-auto": {
      width: "auto"
    },

    "&.pe-menu--visible": {
      opacity: 1
    },

    "&.pe-menu--permanent": {
      position: "relative",
      opacity: 1,
      zIndex: 0
    },

    " .pe-menu__content": {
      width: "100%",
      borderRadius: componentVars.border_radius + "px"
    }

  }, "@media (max-width: " + __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_screen_size_large + "px)", {
    "max-width": componentVars.max_size_small_screen * __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_menu + "px"
  })])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector, {
    " .pe-menu__content": {
      "background-color": componentVars["color_" + tint + "_background"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme", selector, componentVars, "dark"), // has dark theme
  style(".pe-dark-theme ", selector, componentVars, "dark")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-menu";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-menu",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target: "pe-menu__target",
  visible: "pe-menu--visible",
  permanent: "pe-menu--permanent",
  width_n: "pe-menu--width-",
  width_auto: "pe-menu--width-auto",

  // lookup
  listTile: "pe-list-tile",
  selectedListTile: "pe-list-tile--selected"
};

var SHADOW_Z = 1;
var OFFSET_V = -8;
var DEFAULT_OFFSET_H = 16;
var MIN_SIZE = 1.5;

var positionMenu = function positionMenu(state, attrs) {
  if (!attrs.target) {
    return;
  }
  var targetEl = document.querySelector("#" + attrs.target);
  if (!targetEl) {
    return;
  }
  var offsetH = attrs.offset !== undefined ? attrs.offset : DEFAULT_OFFSET_H;
  var menuEl = state.el;
  if (!menuEl) {
    return;
  }
  var contentEl = state.el.querySelector("." + classes.content);
  var origin = attrs.origin || "top-left";
  var reposition = attrs.reposition === false ? false : true;
  var positionOffset = 0;
  if (reposition) {
    var firstItem = contentEl.querySelectorAll("." + classes.listTile)[0];
    var selectedItem = contentEl.querySelector("." + classes.selectedListTile);
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
  if (menuEl.parentNode) {
    var parentRect = menuEl.parentNode.getBoundingClientRect();
    var alignLeft = function alignLeft() {
      return menuEl.style.left = targetRect.left - parentRect.left + offsetH + "px";
    };
    var alignRight = function alignRight() {
      return menuEl.style.right = targetRect.right - parentRect.right + offsetH + "px";
    };
    var alignTop = function alignTop() {
      return menuEl.style.top = targetRect.top - parentRect.top - positionOffset + OFFSET_V + "px";
    };
    var alignBottom = function alignBottom() {
      return menuEl.style.bottom = targetRect.bottom - parentRect.bottom - positionOffset + "px";
    };
    var alignFn = {
      "top-left": function topLeft() {
        return alignTop() && alignLeft();
      },
      "top-right": function topRight() {
        return alignTop() && alignRight();
      },
      "bottom-left": function bottomLeft() {
        return alignBottom() && alignLeft();
      },
      "bottom-right": function bottomRight() {
        return alignBottom() && alignRight();
      }
    };
    alignFn[origin].call();
  }
};

var showMenu = function showMenu(state, attrs) {
  state.isTransitioning = true;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["j" /* show */])(_extends({}, attrs, {
    el: state.el,
    showClass: classes.visible
  })).then(function () {
    state.isTransitioning = false;
    state.visible = true;
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
  });
};

var hideMenu = function hideMenu(state, attrs) {
  state.isTransitioning = true;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["k" /* hide */])(_extends({}, attrs, {
    el: state.el,
    showClass: classes.visible
  })).then(function () {
    state.isTransitioning = false;
    state.visible = false;
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
    __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw(); // removes remainder of drawn component
  });
};

var unifySize = function unifySize(size) {
  return size < MIN_SIZE ? MIN_SIZE : size;
};

var widthClass = function widthClass(size) {
  return classes.width_n + size.toString().replace(".", "-");
};

var createView = function createView(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
  var listenEl = document.body;

  var activateDismissTap = function activateDismissTap() {
    listenEl.addEventListener("click", handleDismissTap);
  };

  var deActivateDismissTap = function deActivateDismissTap() {
    listenEl.removeEventListener("click", handleDismissTap);
  };

  var handleDismissTap = function handleDismissTap(e) {
    if (e.target === state.el) {
      return;
    }
    deActivateDismissTap();
    if (e.defaultPrevented) {
      // clicked on .pe-menu__content
      hideMenu(state, attrs);
    } else {
      hideMenu(state, _extends({}, attrs, {
        hideDelay: 0
      }));
    }
  };

  var update = function update() {
    positionMenu(state, attrs);
    __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
  };

  var handleEscape = function handleEscape(e) {
    if (e.which === 27) {
      hideMenu(state, _extends({}, attrs, {
        hideDelay: 0
      }));
    }
  };

  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["d" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.permanent ? classes.permanent : null, attrs.target ? classes.target : null, attrs.size ? widthClass(unifySize(attrs.size)) : null, attrs.class].join(" "),
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;

      state.el = dom;
      if (!attrs.permanent) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["c" /* subscribe */])("resize", update);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["c" /* subscribe */])("keydown", handleEscape);
        setTimeout(function () {
          activateDismissTap();
          showMenu(state, attrs);
        }, 0);
      }
      positionMenu(state, attrs);
    },
    onremove: function onremove() {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["g" /* unsubscribe */])("resize", update);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["g" /* unsubscribe */])("keydown", handleEscape);
      if (!attrs.permanent) {
        deActivateDismissTap();
      }
    }
  });
  var content = __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.content,
    onclick: function onclick(e) {
      return e.preventDefault();
    }
  }, [state.z > 0 && __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_shadow__["a" /* default */], {
    z: state.z,
    animated: true
  }), attrs.content ? attrs.content : vnode.children]);
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var menu = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    vnode.state = _extends(vnode.state, {
      z: attrs.z !== undefined ? attrs.z : SHADOW_Z,
      el: null,
      isTransitioning: false,
      visible: attrs.permanent || false
    });
  },
  view: function view(vnode) {
    if (vnode.attrs.show) {
      vnode.state.visible = true;
    }
    return vnode.state.visible ? createView(vnode) : __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", {
      class: classes.placeholder
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = menu;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* unused harmony reexport vars */
/* unused harmony export classes */




var layout$1 = (function (selector, componentVars) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["a" /* layout */])(selector, componentVars, "radio");
});

var color$1 = (function (selector, componentVars) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["b" /* color */])(selector, componentVars);
});

var iconOff = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>");

var iconOn = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>");

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout$1, color$1];
var selector = ".pe-control.pe-radio-control";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["c" /* vars */], customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["c" /* vars */], fns);

var theme = {
  iconOff: iconOff,
  iconOn: iconOn
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-radio-control"
};

var view = function view(vnode) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["d" /* selectionControl */], _extends({}, vnode.attrs, {
    theme: theme,
    controlView: __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["e" /* controlView */],
    selectable: vnode.attrs.selectable || function (selected) {
      return !selected;
    }, // default: only selectable when not checked
    defaultClass: classes.component,
    type: "radio"
  }));
};

var radioButton = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = radioButton;


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_shadow__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_icon_button__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export controlView */
/* unused harmony export controlViewClasses */
/* unused harmony export vars */







var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes$1 = {
  track: "pe-switch-control__track",
  thumb: "pe-switch-control__thumb",
  knob: "pe-switch-control__knob"
};

var controlView = function controlView(checked, attrs) {
  var zOff = attrs.zOff !== undefined ? attrs.zOff : 1;
  var zOn = attrs.zOn !== undefined ? attrs.zOn : 2;
  var z = checked ? zOn : zOff;
  var raised = attrs.disabled ? false : attrs.raised !== undefined ? attrs.raised : true;
  return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes$1.track
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_icon_button__["a" /* default */], _extends$1({}, {
    class: classes$1.thumb,
    content: [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
      class: classes$1.knob
    }, [attrs.icon ? attrs.icon : null, raised ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_shadow__["a" /* default */], {
      z: z,
      animated: true
    }) : null])],
    style: attrs.style,
    disabled: attrs.disabled,
    events: attrs.events,
    ink: attrs.ink || false
  }, attrs.selectable !== undefined ? { inactive: !attrs.selectable(checked) } : null, attrs.iconButton))];
};

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba = __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].rgba;
var hit_area_padding = (__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].grid_unit_icon_button - __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].unit_icon_size) / 2; // 12

var vars$3 = _extends$3({}, __WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["c" /* vars */], {
  track_height: 14,
  track_length: 36,
  thumb_size: 20,
  padding: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].grid_unit_component,
  icon_button_padding: __WEBPACK_IMPORTED_MODULE_3_polythene_icon_button__["b" /* vars */].padding,
  hit_area_padding: hit_area_padding,

  animation_duration: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].animation_duration,

  color_light_thumb_on: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary),
  color_light_thumb_off: "#f1f1f1",
  color_light_thumb_disabled: "#bdbdbd",

  color_light_track_on: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary_faded),
  color_light_track_on_opacity: .55,
  color_light_track_off: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_regular),
  color_light_track_off_opacity: .55,
  color_light_track_disabled: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_background_disabled),
  color_light_track_disabled_opacity: 1,

  // icon color may be set in theme; default "currentcolor"
  // color_light_icon_on:                   "currentcolor",
  // color_light_icon_off:                  "currentcolor",

  // color_light_focus_on and so on taken from selectionControlVars

  color_dark_thumb_on: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary), // or "#80cbc4"
  color_dark_thumb_off: "#bdbdbd",
  color_dark_thumb_disabled: "#555",

  color_dark_track_on: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_primary_faded, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_tertiary), // or "#5a7f7c"
  color_dark_track_on_opacity: 9,
  color_dark_track_off: "#717171",
  color_dark_track_off_opacity: .55,
  color_dark_track_disabled: "#717171",
  color_dark_track_disabled_opacity: .3

});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var transition = function transition(componentVars, properties) {
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : componentVars.animation_duration;
  return [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].defaultTransition(properties, duration, "ease-out")];
};

var customSize = function customSize(componentVars, size) {
  var factor = size / __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].unit_icon_size;
  var thumbSize = Math.floor(0.5 * componentVars.thumb_size * factor) * 2; // round to even
  var scaledTrackHeight = Math.floor(0.5 * componentVars.track_height * factor) * 2; // round to even
  var scaledTrackWidth = Math.floor(0.5 * componentVars.track_length * factor) * 2;
  var scaledThumbSize = Math.floor(0.5 * componentVars.thumb_size * factor) * 2;
  var trackTop = (componentVars.label_height * factor - scaledTrackHeight) / 2;
  var thumbPadding = componentVars.icon_button_padding;
  var thumbMargin = (size - scaledThumbSize) / 2;
  var thumbOuterSize = size + 2 * thumbPadding;
  var thumbOffsetMin = -(thumbOuterSize / 2) + thumbSize / 2;
  var thumbOffsetMax = thumbOffsetMin + scaledTrackWidth - thumbSize;
  var thumbOffsetY = thumbOffsetMin + thumbMargin;
  var trackVisualOffset = 0.3; // prevent sub pixel of track to shine through knob border

  return {
    " .pe-control__form-label": {
      height: size + "px",
      minWidth: scaledTrackWidth + "px"
    },
    " .pe-control__label": {
      paddingLeft: componentVars.padding * factor + 8 + scaledTrackWidth + "px"
    },
    " .pe-switch-control__track": {
      left: trackVisualOffset + "px",
      height: scaledTrackHeight + "px",
      width: scaledTrackWidth - 2 * trackVisualOffset + "px",
      top: trackTop + "px",
      borderRadius: scaledTrackHeight + "px"
    },
    " .pe-switch-control__thumb": {
      top: thumbOffsetY + "px",
      left: thumbOffsetMin + "px"
    },

    " .pe-switch-control__knob": {
      width: scaledThumbSize + "px",
      height: scaledThumbSize + "px",
      margin: thumbMargin + "px"
    },

    " .pe-button__content": {
      padding: thumbPadding + "px"
    },

    ".pe-control--on": {
      " .pe-switch-control__thumb": {
        left: thumbOffsetMax + "px"
      }
    }
  };
};

var layout$1 = (function (selector, componentVars) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["a" /* layout */])(selector, componentVars, "checkbox").concat([_defineProperty({}, selector, {
    " .pe-switch-control__track": [transition(componentVars, "background, opacity"), {
      position: "absolute",
      left: 0
    }],

    " .pe-switch-control__thumb": [transition(componentVars, "left, color"), {
      position: "absolute",
      zIndex: 1, // Prevents flickering of text label when toggling
      color: "inherit",

      ":focus": {
        outline: 0
      }
    }],

    " .pe-switch-control__knob": {
      position: "relative",
      borderRadius: "50%"
    },

    " .pe-button__content .pe-switch-control__knob .pe-icon": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].fit(), transition(componentVars, "color"), {
      width: "100%",
      height: "100%"
    }],

    " .pe-button__focus": [transition(componentVars, "all")],

    ".pe-control--small": customSize(componentVars, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].unit_icon_size_small),
    ".pe-control--regular": customSize(componentVars, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].unit_icon_size),
    ".pe-control--medium": customSize(componentVars, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].unit_icon_size_medium),
    ".pe-control--large": customSize(componentVars, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].unit_icon_size_large)
  })]);
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector, {
    ".pe-control--off": {
      " .pe-switch-control__track": {
        opacity: componentVars["color_" + tint + "_track_off_opacity"],
        backgroundColor: componentVars["color_" + tint + "_track_off"]
      },
      " .pe-switch-control__thumb": {
        color: componentVars["color_" + tint + "_thumb_off"]
      },
      " .pe-switch-control__knob": {
        backgroundColor: "currentcolor"
      },
      " .pe-button--focus": {
        " .pe-button__focus": {
          opacity: componentVars["color_" + tint + "_focus_off_opacity"],
          backgroundColor: componentVars["color_" + tint + "_focus_off"]
        }
      },
      " .pe-icon": {
        color: componentVars["color_" + tint + "_icon_off"] || "currentcolor"
      }
    },

    ".pe-control--on": {
      " .pe-switch-control__track": {
        opacity: componentVars["color_" + tint + "_track_on_opacity"],
        backgroundColor: componentVars["color_" + tint + "_track_on"]
      },
      " .pe-switch-control__thumb": {
        color: componentVars["color_" + tint + "_thumb_on"]
      },
      " .pe-switch-control__knob": {
        backgroundColor: "currentcolor"
      },
      " .pe-button--focus": {
        " .pe-button__focus": {
          opacity: componentVars["color_" + tint + "_focus_on_opacity"],
          backgroundColor: componentVars["color_" + tint + "_focus_on"]
        }
      },
      " .pe-icon": {
        color: componentVars["color_" + tint + "_icon_on"] || "currentcolor"
      }
    },

    ".pe-control--on.pe-control--disabled, &.pe-control--off.pe-control--disabled": {
      " .pe-switch-control__track": {
        opacity: componentVars["color_" + tint + "_track_disabled_opacity"],
        backgroundColor: componentVars["color_" + tint + "_track_disabled"]
      },
      " .pe-switch-control__thumb": {
        color: componentVars["color_" + tint + "_thumb_disabled"]
      }
    }
  })];
};

var color$1 = (function (selector, componentVars) {
  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["b" /* color */])(selector, componentVars)].concat([style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark") // inside dark theme
  ]);
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout$1, color$1];
var selector = ".pe-control.pe-switch-control";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$2({}, vars$3, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([selector], vars$3, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes$$1 = {
  component: "pe-switch-control"
};

var view = function view(vnode) {
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_selection_control__["d" /* selectionControl */], _extends({}, vnode.attrs, {
    controlView: controlView,
    selectable: vnode.attrs.selectable || function () {
      return true;
    }, // default: always selectable, regardless the checked state
    defaultClass: classes$$1.component,
    type: "checkbox"
  }));
};

var switchButton = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* unused harmony default export */ var _unused_webpack_default_export = switchButton;


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_utilities__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_button__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_polythene_icon__ = __webpack_require__(4);
/* unused harmony export classes */
/* unused harmony export vars */









var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;

var fontSize = __WEBPACK_IMPORTED_MODULE_5_polythene_button__["b" /* vars */].font_size;
var tab_label_line_height = 1.1 * fontSize;

var vars$3 = {
  tab_min_width: 72,
  tab_max_width: "initial",
  tab_height: 48,
  // tab_min_width_tablet:             160,
  label_max_width: 264,
  menu_tab_height: 44,
  menu_tab_icon_label_height: 44,
  tab_icon_label_height: 72,
  tab_icon_label_icon_spacing: 7,
  indicator_slide_speed: 600, // px per second
  indicator_slide_min_duration: .250,
  tabs_indent: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_indent,
  tabs_scroll_speed: 600, // px per second
  tabs_scroll_delay: .15,
  tabs_scroll_min_duration: .5,
  scroll_button_fade_duration: .2,
  scroll_button_fade_delay: .5,
  tab_content_padding_v: 12,
  tab_menu_content_padding_v: 6,
  tab_indicator_height: 2,
  scrollbar_offset: 20,
  scroll_button_opacity: .7,
  label_opacity: .7,

  tab_label_line_height: tab_label_line_height,
  tab_label_vertical_offset: tab_label_line_height - fontSize,
  tab_label_transition_property: "opacity, color, backgroundColor",

  color_light: "inherit",
  color_light_selected: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_light_selected_background: "transparent",
  color_light_tab_indicator: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_light_icon: __WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["b" /* vars */].color_light,

  color_dark: "inherit",
  color_dark_selected: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_dark_selected_background: "transparent",
  color_dark_tab_indicator: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_primary),
  color_dark_icon: __WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["b" /* vars */].color_dark
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].vendorize({
    userSelect: "none"
  }, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].prefixes_user_select), {
    transform: "translate3d(0,0,0)",
    "-webkit-overflow-scrolling": "touch",

    "& ::-webkit-scrollbar": {
      "display": "none"
    },

    ".pe-tabs--menu": {
      // reset sizes to fit within a small space
      " .pe-tabs__tab": {
        height: componentVars.menu_tab_height + "px"
      },
      " .pe-tabs__tab---icon": {
        height: componentVars.menu_tab_icon_label_height + "px"
      },
      " .pe-tabs__tab, .pe-tabs__tab.pe-tabs__tab---icon, .pe-tabs__tab.pe-text-button": {
        minWidth: 0,
        height: componentVars.menu_tab_icon_label_height + "px",

        " .pe-button__content": {
          padding: "0 " + componentVars.tab_menu_content_padding_v + "px",
          height: componentVars.menu_tab_height + "px",

          " .pe-icon": {
            marginBottom: 0
          },
          " .pe-button__content": {
            fontSize: "10px",
            lineHeight: "12px",
            textTransform: "none"
          }
        }
      }
    },

    ".pe-tabs--scrollable": {
      // hide scrollbar (this approach is required for Firefox)
      "max-height": componentVars.tab_height + "px",
      "-ms-overflow-style": "none",

      " .pe-tabs__scroll-button": {
        // default hide, show with html.pe-no-touch
        display: "none"
      },

      " .pe-tabs__row": {
        marginBottom: -componentVars.scrollbar_offset + "px"
      }
    },

    " .pe-no-touch &": {
      ".pe-tabs--scrollable": {
        backgroundColor: "inherit"
      },

      " .pe-tabs__scroll-button": {
        position: "absolute",
        display: "block",
        top: 0,
        backgroundColor: "inherit",
        zIndex: 1,
        borderRadius: 0,

        " .pe-button__content": {
          borderRadius: 0,
          backgroundColor: "inherit",
          transitionProperty: componentVars.tab_label_transition_property,
          transitionDuration: componentVars.scroll_button_fade_duration + "s",
          transitionTimingFunction: "ease-out",
          transitionDelay: componentVars.scroll_button_fade_delay + "s",
          opacity: componentVars.scroll_button_opacity
        }
      },
      ".pe-tabs--start .pe-tabs__scroll-button-start": {
        pointerEvents: "none",
        cursor: "default",

        " .pe-button__content": {
          opacity: 0
        }
      },
      ".pe-tabs--end .pe-tabs__scroll-button-end": {
        pointerEvents: "none",
        cursor: "default",

        " .pe-button__content": {
          opacity: 0
        }
      },

      " .pe-tabs__scroll-button-start": {
        left: 0
      },
      " .pe-tabs__scroll-button-end": {
        right: 0
      }
    },

    " .pe-tabs__row": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutHorizontal, __WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].vendorize({
      userSelect: "none"
    }, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].prefixes_user_select), {
      position: "relative",
      whiteSpace: "nowrap",

      ".pe-tabs__row--indent": {
        margin: 0,
        paddingLeft: componentVars.tabs_indent + "px",
        overflow: "auto"
      },

      ".pe-tabs__row--centered": __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutCenterJustified
    }],

    " .pe-tabs__scroll-button-offset": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].flex(), __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].flexIndex("none")],

    " .pe-tabs__tab": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].flex(), __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].flexIndex("none"), __WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].vendorize({
      userSelect: "none"
    }, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].prefixes_user_select), __WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].defaultTransition("color"), {
      margin: 0,
      borderRadius: 0,
      height: componentVars.tab_height + "px",
      padding: 0,
      color: "inherit",
      minWidth: !isNaN(componentVars.tab_min_width) ? componentVars.tab_min_width + "px" : componentVars.tab_min_width, // for smaller screens, see also media query below
      maxWidth: !isNaN(componentVars.tab_max_width) ? componentVars.tab_max_width + "px" : componentVars.tab_max_width,

      ".pe-text-button .pe-button__content": {
        padding: "0 " + componentVars.tab_content_padding_v + "px",
        height: componentVars.tab_height + "px",
        lineHeight: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].line_height + "em",
        borderRadius: 0,

        " .pe-button__label, .pe-icon": {
          maxWidth: componentVars.label_max_width + "px", // or .pe-tabs width minus 56dp
          lineHeight: componentVars.tab_label_line_height + "px",
          maxHeight: 2 * componentVars.tab_label_line_height + "px",
          overflow: "hidden",
          whiteSpace: "normal"
        },
        " .pe-button__label": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].defaultTransition("opacity", componentVars.animation_duration), {
          margin: componentVars.tab_label_vertical_offset + "px 0 0 0",
          padding: 0,
          opacity: componentVars.label_opacity
        }],
        " .pe-icon": {
          marginLeft: "auto",
          marginRight: "auto"
        },
        " .pe-button__focus": {
          display: "none"
        }
      },
      ".pe-button--selected": {
        " .pe-button__content .pe-button__content": {
          opacity: 1
        }
      },
      ".pe-tabs__tab---icon": {
        "&, .pe-button__content": [{
          height: componentVars.tab_icon_label_height + "px"
        }, {
          " .pe-button__content, .pe-icon": {
            margin: "0 auto"
          }
        }, {
          " .pe-icon": {
            marginBottom: componentVars.tab_icon_label_icon_spacing + "px"
          }
        }]
      }
    }],

    " .pe-tabs__tab-content": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutCenterCenter, __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutVertical, {
      height: "inherit"
    }],

    ".pe-tabs--autofit .pe-tabs__tab": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].flex(), {
      minWidth: "initial",
      maxWidth: "none"
    }],

    ".pe-tabs__active-selectable": {
      " .pe-tabs__tab.pe-button--selected": {
        cursor: "pointer",
        pointerEvents: "initial"
      }
    },

    " .pe-tabs__indicator": {
      transform: "translate3d(0,0,0)",
      transformOrigin: "left 50%",
      transitionProperty: "all",
      transitionTimingFunction: "ease-out",
      position: "absolute",
      height: componentVars.tab_indicator_height + "px",
      bottom: 0,
      left: 0,
      width: "100%" // and transformed with js
      // background-color defined in implementation/theme css
    },

    " .pe-toolbar--tabs .pe-toolbar__bar &": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].fit(), {
      width: "auto",
      margin: 0,
      top: "auto"
    }]

    // ["@media (min-width: " + vars.breakpoint_small_tablet_portrait + "px)"]: {
    //   ":not(.pe-tabs--small):not(.pe-tabs--menu):not(.pe-tabs--autofit) .pe-tabs__tab": {
    //     minWidth: componentVars.tab_min_width_tablet + "px"
    //   }
    // }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector, {
    color: componentVars["color_" + tint],

    " .pe-tabs__tab.pe-button--selected": {
      color: componentVars["color_" + tint + "_selected"],

      " .pe-button__content": {
        background: componentVars["color_" + tint + "_selected_background"]
      }
    },
    " .pe-tabs__tab:not(.pe-button--selected) .pe-icon": {
      color: componentVars["color_" + tint + "_icon"]
    },
    " .pe-tabs__indicator": {
      backgroundColor: componentVars["color_" + tint + "_tab_indicator"]
    },
    " .pe-tabs__scroll-button": {
      color: "inherit"
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark") // inside dark theme
  ];
});

var iconArrowBackward = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg>");

var iconArrowForward = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>");

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var arrowBackward = {
  msvg: iconArrowBackward
};
var arrowForward = {
  msvg: iconArrowForward
};

var fns = [layout, color];
var selector = ".pe-tabs";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$3, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$3, fns);

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var view$1 = function view(vnode) {
  var attrs = vnode.attrs;
  // Let internal onclick function co-exist with passed button option
  attrs.events = attrs.events || {};
  attrs.events.onclick = attrs.events.onclick || function () {};
  var tabButtonOptions = _extends$2({}, attrs, {
    content: __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.tabContent }, [attrs.icon ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_7_polythene_icon__["a" /* default */], attrs.icon) : null, attrs.label ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.label }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", attrs.label)) : null]),
    class: [classes.tab, attrs.icon && attrs.label ? classes.tabHasIcon : null, attrs.class].join(" "),
    wash: false,
    ripple: true,
    events: _extends$2({}, attrs.events, {
      onclick: function onclick(e) {
        attrs.onSelect();
        attrs.events.onclick(e);
      }
    }),
    oncreate: function oncreate(vnode) {
      return attrs.register(attrs.index, {
        data: attrs,
        el: vnode.dom
      });
    }
  });
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_button__["a" /* default */], tabButtonOptions);
};

var tab = {
  view: view$1
};

var view$2 = function view(vnode) {
  var attrs = vnode.attrs;
  var icon$$1 = attrs.position === "start" ? attrs.icon || arrowBackward : attrs.icon || arrowForward;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_icon_button__["a" /* default */], {
    class: [classes.scrollButton, attrs.class].join(" "),
    icon: icon$$1,
    ripple: { center: true },
    events: attrs.events,
    oncreate: function oncreate(vnode) {
      return attrs.register(attrs.position, vnode.dom);
    }
  });
};

var scrollButton = {
  view: view$2
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-tabs",
  scrollButton: "pe-tabs__scroll-button",
  scrollButtonAtStart: "pe-tabs__scroll-button-start",
  scrollButtonAtEnd: "pe-tabs__scroll-button-end",
  scrollButtonOffset: "pe-tabs__scroll-button-offset",
  tabRow: "pe-tabs__row",
  tabRowCentered: "pe-tabs__row--centered",
  tabRowIndent: "pe-tabs__row--indent",
  tab: "pe-tabs__tab",
  tabContent: "pe-tabs__tab-content",
  tabHasIcon: "pe-tabs__tab---icon",
  indicator: "pe-tabs__indicator",
  scrollable: "pe-tabs--scrollable",
  isAutofit: "pe-tabs--autofit",
  isAtStart: "pe-tabs--start",
  isAtEnd: "pe-tabs--end",
  smallTabs: "pe-tabs--small",
  isMenu: "pe-tabs--menu",
  activeSelectable: "pe-tabs__active-selectable",
  // reference:  
  label: "pe-button__label"
};

var whenCreateDone = function whenCreateDone() {
  return Promise.resolve();
};

var getNewIndex = function getNewIndex(index, tabs) {
  var minTabIndex = 0;
  var maxTabIndex = tabs.length - 1;
  return {
    backward: Math.max(index - 1, minTabIndex),
    forward: Math.min(index + 1, maxTabIndex)
  };
};

var handleScrollButtonClick = function handleScrollButtonClick(state, attrs, e, direction) {
  e.stopPropagation();
  e.preventDefault();
  var currentTabIndex = state.selectedTabIndex;
  var newIndex = getNewIndex(currentTabIndex, state.tabs)[direction];
  if (newIndex !== currentTabIndex) {
    setSelectedTab(state, attrs, newIndex, true);
    __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
  } else {
    scrollToTab(state, newIndex);
  }
};

/*
Moves the first tab to the left so that the text label is as position 0. 
*/
var alignToTitle = function alignToTitle(state) {
  var firstTab = state.tabs[0].el;
  var firstInnerLabel = firstTab.querySelector("." + classes.label + " span");
  var firstOuterLabelWidth = firstTab.getBoundingClientRect().width;
  var firstInnerLabelWidth = firstInnerLabel.getBoundingClientRect().width;
  var firstTabOffset = (firstOuterLabelWidth - firstInnerLabelWidth) / 2;
  firstTab.style.marginLeft = -firstTabOffset + "px";
};

var createRightButtonOffset = function createRightButtonOffset(state) {
  // add padding to right so that last item is not hidden behind scroll button
  var scrollButtonAtEndWidth = state.scrollButtons["end"].getBoundingClientRect().width;
  var scrollButtonOffsetEl = state.tabsEl.querySelector("." + classes.scrollButtonOffset);
  scrollButtonOffsetEl.style.width = scrollButtonAtEndWidth + "px";
};

var scrollToTab = function scrollToTab(state, tabIndex) {
  var tabs = state.tabs;
  var scroller = state.scrollerEl;
  // Scroll to position of selected tab
  var tabLeft = tabs.slice(0, tabIndex).reduce(function (totalWidth, tabData) {
    return totalWidth + tabData.el.getBoundingClientRect().width;
  }, 0);
  // Tabs at the far right will not fully move to the left
  // because the scrollable row will stick to the right 
  // to get the max scroll left, we subtract the visible viewport from the scroll width
  var scrollerWidth = scroller.getBoundingClientRect().width; // frame width
  var scrollingWidth = scroller.scrollWidth;
  var maxScroll = scrollingWidth - scrollerWidth;
  var left = Math.min(tabLeft, maxScroll);
  var currentLeft = scroller.scrollLeft;
  if (currentLeft !== left) {
    var duration = Math.abs(currentLeft - left) / vars$3.tabs_scroll_speed;
    var delaySeconds = vars$3.tabs_scroll_delay || 0;
    setTimeout(function () {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_utilities__["a" /* scrollTo */])({
        element: scroller,
        to: left,
        duration: Math.max(vars$3.tabs_scroll_min_duration, duration),
        direction: "horizontal"
      });
    }, delaySeconds * 1000);
  }
};

var updateScrollButtons = function updateScrollButtons(state) {
  var scrollerEl = state.scrollerEl;
  var scrollLeft = scrollerEl.scrollLeft;
  var currentTabIndex = state.selectedTabIndex;
  var tabsEl = state.tabsEl;
  var minTabIndex = 0;
  var maxTabIndex = state.tabs.length - 1;
  var isAtStart = scrollerEl.scrollLeft === 0 && currentTabIndex === minTabIndex;
  var isAtEnd = scrollLeft >= scrollerEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1 && currentTabIndex === maxTabIndex;
  state.scrollButtonStates.start = !isAtStart;
  state.scrollButtonStates.end = !isAtEnd;
};

var animateIndicator = function animateIndicator(selectedTabEl, animate, state) {
  var parentRect = state.tabsEl.getBoundingClientRect();
  var rect = selectedTabEl.getBoundingClientRect();
  var style = state.tabIndicatorEl.style;
  var translateX = rect.left - parentRect.left + state.scrollerEl.scrollLeft;
  var transformCmd = "translate(" + translateX + "px, 0)";
  var duration = animate ? vars$3.indicator_slide_min_duration : 0;
  // use width instead of scale to please IE10
  style.width = rect.width + "px";
  style["transition-duration"] = style["-webkit-transition-duration"] = style["-moz-transition-duration"] = style["-o-transition-duration"] = duration + "s";
  style.transform = style["-webkit-transform"] = style["-moz-transform"] = style["-ms-transform"] = style["-o-transform"] = transformCmd;
};

var setSelectedTab = function setSelectedTab(state, attrs, index, animate) {
  state.selectedTabIndex = index;
  if (!state.tabs.length) return;
  var selectedTabEl = state.tabs[index].el;
  if (selectedTabEl && state.tabIndicatorEl && state.tabsEl) {
    animateIndicator(selectedTabEl, animate, state);
  }
  if (state.managesScroll) {
    updateScrollButtons(state);
    scrollToTab(state, index);
  }
  if (attrs.getState) {
    attrs.getState({
      index: index,
      data: state.tabs[index].data,
      el: selectedTabEl
    });
  }
};

var sortByLargestWidth = function sortByLargestWidth(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
  var element = attrs.element || "div";
  var autofit = attrs.scrollable || attrs.centered ? false : attrs.autofit ? true : false;

  // Keep selected tab up to date
  if (attrs.selectedTab !== undefined && state.previousSelectedTab !== attrs.selectedTab) {
    setSelectedTab(state, attrs, attrs.selectedTab, true);
  }
  state.previousSelectedTab = attrs.selectedTab;

  var onResize = function onResize() {
    return setSelectedTab(state, attrs, state.selectedTabIndex, false), __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
  };

  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["d" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.scrollable ? classes.scrollable : null, state.selectedTabIndex === 0 ? classes.isAtStart : null, state.selectedTabIndex === state.tabs.length - 1 ? classes.isAtEnd : null, attrs.activeSelected ? classes.activeSelectable : null, autofit ? classes.isAutofit : null, attrs.small ? classes.smallTabs : null, attrs.menu ? classes.isMenu : null, attrs.class].join(" "),
    oninit: function oninit() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* subscribe */])("resize", onResize);
    },
    oncreate: function oncreate(vnode) {
      state.tabsEl = vnode.dom;
      // A promise can't resolve during the oncreate loop
      // The Mithril draw loop is synchronous - there is no delay between one this oncreate and the tab button's oncreate
      whenCreateDone().then(function () {
        if (attrs.largestWidth) {
          var widths = state.tabs.map(function (tabData) {
            return tabData.el.getBoundingClientRect().width;
          });
          var largest = widths.sort(sortByLargestWidth)[0];
          state.tabs.forEach(function (tabData) {
            return tabData.el.style.width = largest + "px";
          });
        }
        // Align first scrollable tab to title
        if (attrs.scrollable) {
          alignToTitle(state);
        }
        // Handle scroll
        if (attrs.scrollable && !__WEBPACK_IMPORTED_MODULE_1_polythene_core__["b" /* isTouch */]) {
          state.managesScroll = true;
          createRightButtonOffset(state);
        }
        setSelectedTab(state, attrs, state.selectedTabIndex, false);
        if (attrs.getState) {
          // Give immediate feedback
          setTimeout(__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw);
        }
      });
    },
    onremove: function onremove() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["g" /* unsubscribe */])("resize", onResize);
    }
  });

  var buttons = attrs.content ? attrs.content : attrs.buttons ? attrs.buttons : attrs.children || vnode.children;

  var tabRowButtons = buttons.map(function () {
    var buttonOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var index = arguments[1];

    var buttonOptsCombined = _extends({}, buttonOpts, {
      // These options can be overridden by tabsOpts
      selected: index === state.selectedTabIndex,
      animateOnTap: attrs.animateOnTap !== false ? true : false
    }, attrs.tabsOpts || {}, {
      // Internal options, should never be overridden
      index: index,
      register: state.registerTabButton,
      onSelect: function onSelect() {
        return setSelectedTab(state, attrs, index, attrs.noIndicatorSlide ? false : true);
      }
    });
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(tab, buttonOptsCombined);
  });

  var tabRow = attrs.scrollable ? tabRowButtons.concat([
  // offset for right scroll button
  __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.scrollButtonOffset })]) : tabRowButtons;

  var scrollButtonAtStart = void 0,
      scrollButtonAtEnd = void 0;
  if (attrs.scrollable) {
    scrollButtonAtStart = __WEBPACK_IMPORTED_MODULE_0_mithril___default()(scrollButton, _extends({}, {
      icon: attrs.scrollIconBackward,
      class: classes.scrollButtonAtStart,
      position: "start",
      register: state.registerScrollButton,
      events: { onclick: function onclick(e) {
          return handleScrollButtonClick(state, attrs, e, "backward");
        } }
    }));
    scrollButtonAtEnd = __WEBPACK_IMPORTED_MODULE_0_mithril___default()(scrollButton, _extends({}, {
      icon: attrs.scrollIconForward,
      class: classes.scrollButtonAtEnd,
      position: "end",
      register: state.registerScrollButton,
      events: { onclick: function onclick(e) {
          return handleScrollButtonClick(state, attrs, e, "forward");
        } }
    }));
  }

  var tabIndicator = attrs.hideIndicator ? null : __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.indicator,
    oncreate: function oncreate(vnode) {
      return state.tabIndicatorEl = vnode.dom;
    }
  });

  var content = [attrs.scrollable ? scrollButtonAtStart : null, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: [classes.tabRow, attrs.centered ? classes.tabRowCentered : null, attrs.scrollable ? classes.tabRowIndent : null].join(" "),
    oncreate: function oncreate(vnode) {
      return state.scrollerEl = vnode.dom;
    }
  }, [tabRow, tabIndicator]), attrs.scrollable ? scrollButtonAtEnd : null];

  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var tabs = {
  theme: customTheme, // accepts (selector, vars)
  view: view,
  oninit: function oninit(vnode) {
    var registerTabButton = function registerTabButton(index, data) {
      return vnode.state.tabs[index] = data;
    };
    var registerScrollButton = function registerScrollButton(position, dom) {
      return vnode.state.scrollButtons[position] = dom;
    };
    vnode.state = _extends(vnode.state, {
      tabsEl: undefined,
      scrollerEl: undefined,
      tabs: [], // {data, el}
      tabRow: undefined,
      tabIndicatorEl: undefined,
      selectedTabIndex: vnode.attrs.selectedTab || 0,
      previousSelectedTab: undefined,
      managesScroll: false,
      scrollButtonStates: {
        start: false,
        end: false
      },
      scrollButtons: {
        start: undefined,
        end: undefined
      },
      registerTabButton: registerTabButton,
      registerScrollButton: registerScrollButton
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = tabs;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */





var rgba = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba;
var line_height_input = 20;
var input_padding_v = 7;

var vars$1 = {
  vertical_spacing_top: 6, // 8 minus natural label height padding (1)
  vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
  input_focus_border_width: 2,
  input_focus_border_animation_duration: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].animation_duration,

  floating_label_vertical_spacing_top: 30, // 16 + 8 + 8 minus natural label height padding (2)
  floating_label_vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
  floating_label_top: 14,
  floating_label_animation_duration: ".12s",

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

  color_light_input_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_input_background: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_background), // only used to "remove" autofill color
  color_light_highlight_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_primary, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_input_bottom_border: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_light_input_error_text: rgba("221, 44, 0"),
  color_light_input_error_border: rgba("221, 44, 0"),
  color_light_input_placeholder: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_label_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_disabled_label_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_readonly_label_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_help_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_required_symbol: rgba("221, 44, 0"),
  color_light_focus_border: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_primary),
  color_light_counter_ok_border: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_primary),

  color_dark_input_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_input_background: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_background), // only used to "remove" autofill color
  color_dark_highlight_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_primary, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_input_bottom_border: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_border_light),
  color_dark_input_error_text: rgba("222, 50, 38"),
  color_dark_input_error_border: rgba("222, 50, 38"),
  color_dark_input_placeholder: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_label_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_disabled_label_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_readonly_label_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_help_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_required_symbol: rgba("221, 44, 0"),
  color_dark_focus_border: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_primary),
  color_dark_counter_ok_border: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_primary)
};

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty$1({}, selector, [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].clearfix(), {
    position: "relative",
    lineHeight: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].line_height,
    display: "inline-block",
    boxSizing: "border-box",
    margin: 0,
    overflow: "visible", // Firefox needs this
    paddingBottom: componentVars.vertical_spacing_bottom + "px",
    width: "100%",
    maxWidth: "100%",

    " .pe-textfield__input-area": {
      position: "relative",
      paddingTop: componentVars.vertical_spacing_top + "px",

      "&:after": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].defaultTransition("opacity", componentVars.input_focus_border_animation_duration), {
        position: "absolute",
        content: "\"\"",
        bottom: 0,
        left: 0,
        height: componentVars.input_focus_border_width + "px",
        width: "100%",
        opacity: 0
      }]
    },
    ".pe-textfield--focused .pe-textfield__input-area:after": {
      opacity: 1
    },

    " .pe-textfield__input": {
      display: "block",
      fontSize: componentVars.font_size_input + "px",
      lineHeight: componentVars.line_height_input + "px",
      width: "100%",
      background: "none",
      textAlign: "left",
      color: "inherit",
      borderWidth: componentVars.input_border_width + "px",
      borderStyle: "none none solid none",
      borderRadius: 0,
      margin: 0,
      padding: componentVars.input_padding_v + "px " + componentVars.input_padding_h + "px",

      // disable glow on textfield--invalid fields
      "&:textfield--invalid": {
        boxShadow: "none"
      },
      ":invalid": {
        boxShadow: "none"
      }
    },
    " textarea.pe-textfield__input": {
      margin: componentVars.input_padding_v + "px " + componentVars.input_padding_h + "px",
      padding: 0,
      display: "block"
    },

    // focus border
    " textfield__input:focus, &.pe-textfield--focused .pe-textfield__input": {
      "border-width": componentVars.input_border_width + "px",
      outline: "none"
    },

    " .pe-textfield__label": {
      position: "absolute",
      display: "block",
      top: componentVars.vertical_spacing_top + componentVars.input_padding_v + "px",
      bottom: 0,
      left: componentVars.input_padding_h + "px",
      right: componentVars.input_padding_h + "px",
      fontSize: componentVars.font_size_input + "px",
      lineHeight: componentVars.line_height_input + "px",
      pointerEvents: "none",
      whiteSpace: "nowrap",
      textAlign: "left",
      cursor: "text"
    },
    ".pe-textfield--dirty .pe-textfield__label": {
      visibility: "hidden"
    },

    "&:not(.pe-textfield--no-char)": {
      " .pe-textfield__required-indicator, .pe-textfield__optional-indicator": {
        padding: "0 0 0 .25em"
      }
    },

    ".pe-textfield--floating-label": {
      paddingBottom: componentVars.floating_label_vertical_spacing_bottom + "px",

      " .pe-textfield__input-area": {
        paddingTop: componentVars.floating_label_vertical_spacing_top + "px"
      },

      " .pe-textfield__label": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].defaultTransition("all", componentVars.floating_label_animation_duration), {
        top: componentVars.floating_label_vertical_spacing_top + componentVars.input_padding_v + "px"
      }],

      ".pe-textfield--focused, &.pe-textfield--dirty": {
        " .pe-textfield__label": {
          fontSize: componentVars.font_size_floating_label + "px",
          top: componentVars.floating_label_top + "px",
          visibility: "visible"
        }
      },

      ".pe-textfield--dense": {
        fontSize: componentVars.dense_font_size_input + "px",
        paddingBottom: componentVars.dense_floating_label_vertical_spacing_bottom + "px",

        " .pe-textfield__input-area": {
          paddingTop: componentVars.dense_floating_label_vertical_spacing_top + "px"
        },

        " .pe-textfield__input": {
          fontSize: componentVars.dense_font_size_input + "px"
        },
        " .pe-textfield__label": {
          fontSize: componentVars.dense_font_size_input + "px",
          top: componentVars.dense_floating_label_vertical_spacing_top + componentVars.input_padding_v + "px"
        },

        ".pe-textfield--focused, &.pe-textfield--dirty": {
          " .pe-textfield__label": {
            fontSize: componentVars.dense_font_size_floating_label + "px",
            top: componentVars.dense_floating_label_top + "px"
          }
        }
      }
    },

    ".pe-textfield--disabled, &.pe-textfield--readonly": {
      " .pe-textfield__label": {
        cursor: "auto"
      },
      " .pe-textfield__input": {
        "border-bottom": "none"
      },
      " .pe-textfield__input-area:after": {
        opacity: 1,
        height: "1px",
        bottom: "-1px",
        backgroundPosition: "top",
        backgroundSize: "4px 1px",
        backgroundRepeat: "repeat-x"
      }
    },

    " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
      marginTop: componentVars.margin_top_error_message + "px",
      fontSize: componentVars.font_size_error + "px",
      lineHeight: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].line_height,
      minHeight: componentVars.font_size_error * __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].line_height + "px"
    },

    " .pe-textfield__counter": {
      textAlign: "right",
      float: "right",
      padding: "0 0 0 16px"
    },

    " .pe-textfield__help-focus": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].defaultTransition("opacity"), {
      opacity: 0
    }],
    ".pe-textfield--focused .pe-textfield__help-focus, &.pe-textfield--dirty .pe-textfield__help-focus": {
      opacity: 1
    },

    ".pe-textfield--hide-clear": {
      " .pe-textfield__input::-ms-clear": {
        display: "none"
      }
    },
    ".pe-textfield--hide-spinner": {
      " input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button": {
        "-webkit-appearance": "none",
        margin: 0
      },
      " input[type=number]": {
        "-moz-appearance": "textfield"
      }
    }
  }, {
    ".pe-textfield--full-width": {
      width: "100%",
      padding: 0,

      " .pe-textfield__input-area": {
        padding: 0
      },

      " .pe-textfield__input": {
        padding: componentVars.full_width_input_padding_v + "px " + componentVars.full_width_input_padding_h + "px"
      },

      " .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter": {
        paddingLeft: componentVars.full_width_input_padding_h + "px",
        paddingRight: componentVars.full_width_input_padding_h + "px"
      },

      " .pe-textfield__label": {
        top: componentVars.full_width_input_padding_v + "px",
        left: componentVars.full_width_input_padding_h + "px",
        right: componentVars.full_width_input_padding_h + "px"
      },

      ".pe-textfield--dense": {
        " .pe-textfield__input": {
          fontSize: componentVars.dense_full_width_font_size_input + "px",
          padding: componentVars.dense_full_width_input_padding_v + "px " + componentVars.dense_full_width_input_padding_h + "px"
        },
        " .pe-textfield__label": {
          fontSize: componentVars.dense_full_width_font_size_input + "px",
          top: componentVars.dense_full_width_input_padding_v + "px",
          left: componentVars.dense_full_width_input_padding_h + "px",
          right: componentVars.dense_full_width_input_padding_h + "px"
        }
      }
    }
  }])];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty$2({}, scope + selector, {
    // border color
    color: componentVars["color_" + tint + "_focus_border"], // override by specifying "color"

    " .pe-textfield__input-area": {
      color: "inherit",

      "&:after": {
        backgroundColor: "currentcolor"
      }
    },
    "&.pe-textfield--counter ": {
      " .pe-textfield__input-area:after": {
        backgroundColor: componentVars["color_" + tint + "_counter_ok_border"]
      }
    },

    " .pe-textfield__input": {
      color: componentVars["color_" + tint + "_input_text"],
      borderColor: componentVars["color_" + tint + "_input_bottom_border"]
    },

    " .pe-textfield__label": {
      color: componentVars["color_" + tint + "_label_text"]
    },

    "&.pe-textfield--disabled, &.pe-textfield--readonly": {
      " .pe-textfield__input-area:after": {
        backgroundColor: "transparent",
        backgroundImage: "linear-gradient(to right, " + componentVars["color_" + tint + "_disabled_label_text"] + " 20%, rgba(255, 255, 255, 0) 0%)"
      }
    },

    "&.pe-textfield--disabled": {
      " .pe-textfield__input, .pe-textfield__label": {
        color: componentVars["color_" + tint + "_disabled_label_text"]
      }
    },

    "&.pe-textfield--readonly": {
      " .pe-textfield__input, .pe-textfield__label": {
        color: componentVars["color_" + tint + "_readonly_label_text"]
      }
    },

    "&.pe-textfield--focused": {
      // note: not when textfield--dirty and not textfield--focused
      "&.pe-textfield--floating-label .pe-textfield__label": {
        color: componentVars["color_" + tint + "_highlight_text"]
      },

      "&.pe-textfield--required.pe-textfield--floating-label": {
        " .pe-textfield__required-indicator": {
          color: componentVars["color_" + tint + "_required_symbol"]
        }
      }
    },

    " .pe-textfield__help, .pe-textfield__counter": {
      color: componentVars["color_" + tint + "_help_text"]
    },

    "&.pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
      " .pe-textfield__input": {
        borderColor: componentVars["color_" + tint + "_input_error_border"],
        boxShadow: "none"
      },
      " .pe-textfield__label": {
        color: componentVars["color_" + tint + "_input_error_text"]
      },
      " .pe-textfield__error, .pe-textfield__counter, .pe-textfield__help": {
        color: componentVars["color_" + tint + "_input_error_text"]
      },
      "&.pe-textfield--required .pe-textfield__label": {
        color: componentVars["color_" + tint + "_input_error_text"]
      },
      "&, &.pe-textfield--counter": {
        " .pe-textfield__input-area:after": {
          backgroundColor: componentVars["color_" + tint + "_input_error_border"]
        }
      }
    },

    " .pe-textfield__input:-webkit-autofill": {
      "-webkit-box-shadow": "0 0 0px 1000px " + componentVars["color_" + tint + "_input_background"] + " inset",
      color: componentVars["color_" + tint + "_input_text"] + " !important"
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-textfield";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var classes = {
  component: "pe-textfield",
  inputArea: "pe-textfield__input-area",
  input: "pe-textfield__input",
  label: "pe-textfield__label",
  counter: "pe-textfield__counter",
  help: "pe-textfield__help",
  focusHelp: "pe-textfield__help-focus",
  error: "pe-textfield__error",
  errorPlaceholder: "pe-textfield__error-placeholder",
  requiredIndicator: "pe-textfield__required-indicator",
  optionalIndicator: "pe-textfield__optional-indicator",
  stateFocused: "pe-textfield--focused",
  stateDisabled: "pe-textfield--disabled",
  stateReadonly: "pe-textfield--readonly",
  stateInvalid: "pe-textfield--invalid",
  stateDirty: "pe-textfield--dirty",
  hasFloatingLabel: "pe-textfield--floating-label",
  isDense: "pe-textfield--dense",
  isRequired: "pe-textfield--required",
  hasFullWidth: "pe-textfield--full-width",
  hasCounter: "pe-textfield--counter",
  hideSpinner: "pe-textfield--hide-spinner",
  hideClear: "pe-textfield--hide-clear",
  hideValidation: "pe-textfield--hide-validation"
};

var validateCustom = function validateCustom(state, attrs) {
  var validState = attrs.validate(state.value);
  return {
    invalid: validState && !validState.valid,
    message: validState && validState.error
  };
};

var validateCounter = function validateCounter(state, attrs) {
  return {
    invalid: state.value.length > attrs.counter,
    message: attrs.error
  };
};

var validateHTML = function validateHTML(state, attrs) {
  return {
    invalid: !state.inputEl().checkValidity(),
    message: attrs.error
  };
};

var getValidStatus = function getValidStatus(state, attrs) {
  var status = {
    invalid: false,
    message: undefined
  };

  // validateResetOnClear: reset validation when field is cleared
  if (state.touched && state.isInvalid && state.value.length === 0 && attrs.validateResetOnClear) {
    state.touched = false;
    state.isInvalid = false;
    state.error = undefined;
  }

  if (!status.invalid && attrs.counter) {
    status = validateCounter(state, attrs);
  }
  if (!status.invalid && state.inputEl() && state.inputEl().checkValidity) {
    status = validateHTML(state, attrs);
  }
  if (!status.invalid && attrs.validate) {
    status = validateCustom(state, attrs);
  }
  return status;
};

var checkValidity = function checkValidity(state, attrs) {
  // default
  var status = !state.touched && !attrs.validateAtStart ? {
    invalid: false,
    message: undefined
  } : getValidStatus(state, attrs);
  var previousInvalid = state.isInvalid;
  state.error = status.message;
  state.isInvalid = status.invalid;
  if (status.invalid !== previousInvalid) {
    setTimeout(__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw, 0);
  }
  if (!status.invalid) {
    state.error = undefined;
  }
};

// dirty = contains text
var checkDirty = function checkDirty(state) {
  return state.isDirty = state.value.toString().length > 0;
};

var updateState = function updateState(state, attrs) {
  return checkValidity(state, attrs), checkDirty(state);
};

var notifyState = function notifyState(state, attrs) {
  if (attrs.getState) {
    // get status directly without updating controller
    var status = getValidStatus(state, attrs);
    attrs.getState({
      focus: state.focus(),
      dirty: state.isDirty,
      value: state.value,
      el: state.inputEl(),
      invalid: status.invalid,
      error: status.error
    });
  }
};

var ignoreEvent = function ignoreEvent(attrs, name) {
  return attrs.ignoreEvents && attrs.ignoreEvents.indexOf(name) !== -1;
};

var view = function view(_ref) {
  var state = _ref.state,
      attrs = _ref.attrs;

  // Early state update to prevent a flash (which would happen if the update is done in oncreate)
  updateState(state, attrs);

  var inputEl = state.inputEl();
  var isInvalid = state.isInvalid;
  var element = attrs.element || "div";
  var type = !attrs.type || attrs.type === "submit" || attrs.type === "search" ? "text" : attrs.type;
  var inputTag = attrs.multiline ? "textarea" : "input";
  var showError = isInvalid && state.error;
  var validates = attrs.validate || attrs.min || attrs.max || attrs.minlength || attrs.required || attrs.pattern;
  var inactive = attrs.disabled || attrs.readonly;

  if (attrs.focus && !state.focus() && !inactive) {
    state.focus(true);
    if (inputEl) {
      inputEl.focus();
    }
  }

  // Only update from outside if the field is not being edited
  if (typeof attrs.value === "function" && inputEl && !state.focus() && !inactive) {
    var value = attrs.value();
    state.value = value;
    state.touched = true;
    updateState(state, attrs);
    notifyState(state, attrs);
    inputEl.value = value;
  }

  var onBlur = function onBlur(e) {
    state.focus(false);
    state.touched = true;
    state.value = e.target.value;
    updateState(state, attrs);
    notifyState(state, attrs);
    // same principle as onfocus
    state.el.classList.remove(classes.stateFocused);
  };

  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["d" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, isInvalid ? classes.stateInvalid : "", state.focus() ? classes.stateFocused : "", attrs.floatingLabel ? classes.hasFloatingLabel : "", attrs.disabled ? classes.stateDisabled : "", attrs.readonly ? classes.stateReadonly : "", state.isDirty ? classes.stateDirty : "", attrs.dense ? classes.isDense : "", attrs.required ? classes.isRequired : "", attrs.fullWidth ? classes.hasFullWidth : "", attrs.counter ? classes.hasCounter : "", attrs.hideSpinner !== false ? classes.hideSpinner : "", attrs.hideClear !== false ? classes.hideClear : "", attrs.hideValidation ? classes.hideValidation : "", attrs.class].join(" "),
    oncreate: function oncreate(_ref2) {
      var dom = _ref2.dom;

      // if (attrs.config) {
      //   attrs.config(el, inited, context, vdom);
      // }
      state.el = dom;
      if (!inactive) {
        updateState(state, attrs);
      }
    }
  });

  var requiredIndicator = attrs.required && attrs.requiredIndicator !== "" ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", { class: classes.requiredIndicator }, attrs.requiredIndicator || "*") : null;
  var optionalIndicator = !attrs.required && attrs.optionalIndicator ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", { class: classes.optionalIndicator }, attrs.optionalIndicator) : null;
  var label = attrs.label ? [attrs.label, requiredIndicator, optionalIndicator] : null;

  var content = [__WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.inputArea
  }, [label ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("label", _defineProperty({
    class: classes.label
  }, "on" + __WEBPACK_IMPORTED_MODULE_1_polythene_core__["e" /* touchStartEvent */], function () {
    if (!inactive) {
      setTimeout(function () {
        state.inputEl().focus();
      }, 0);
    }
  }), label) : null, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(inputTag, _extends({}, {
    class: classes.input,
    type: type,
    name: attrs.name || "",
    disabled: attrs.disabled
  }, !ignoreEvent(attrs, "onclick") ? {
    onclick: function onclick() {
      if (inactive) {
        return;
      }
      // in case the browser does not give the field focus,
      // for instance when the user tapped to the current field off screen
      state.focus(true);
      notifyState(state, attrs);
    }
  } : null, !ignoreEvent(attrs, "onfocus") ? {
    onfocus: function onfocus() {
      if (inactive) {
        return;
      }
      state.focus(true);
      // set CSS class manually in case field gets focus but is off screen
      // and no redraw is triggered
      // at the next redraw state.focus() will be read and the focus class be set
      // in the props.class statement
      if (state.el) {
        state.el.classList.add(classes.stateFocused);
      }
      notifyState(state, attrs);
    }
  } : null,

  // onblur defined in config

  !ignoreEvent(attrs, "oninput") ? {
    oninput: function oninput(e) {
      // default input event
      // may be overwritten by attrs.events
      state.value = e.target.value;
      // Don"t set state.touched to true to prevent error messages popping up while typing
      if (attrs.validateOnInput) {
        state.touched = true;
      }
      updateState(state, attrs);
      notifyState(state, attrs);
      if (attrs.oninput) {
        attrs.oninput(state.value, e);
      }
    }
  } : null, !ignoreEvent(attrs, "onkeydown") ? {
    onkeydown: function onkeydown(e) {
      if (e.which === 13) {
        // ENTER
        state.touched = true;
        updateState(state, attrs);
        notifyState(state, attrs);
      } else if (e.which === 27) {
        // ESCAPE
        state.inputEl().blur(e);
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
    oncreate: function oncreate(_ref3) {
      var dom = _ref3.dom;

      state.inputEl(dom);
      state.inputEl().value = state.value;
      notifyState(state, attrs);
      if (!inactive && !ignoreEvent(attrs, "onblur")) {
        // use event delegation for the blur event
        // so that click events bubble up
        // http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
        state.inputEl().addEventListener("blur", onBlur, true);
      }
    },
    onremove: function onremove() {
      if (!inactive && !ignoreEvent(attrs, "onblur")) {
        state.inputEl().removeEventListener("blur", onBlur, true);
      }
    }
  }, attrs.events ? attrs.events : null, // NOTE: may overwrite oninput
  attrs.readonly !== undefined ? { readonly: true } : null, attrs.pattern !== undefined ? { pattern: attrs.pattern } : null, attrs.maxlength !== undefined ? { maxlength: attrs.maxlength } : null, attrs.minlength !== undefined ? { minlength: attrs.minlength } : null, attrs.max !== undefined ? { max: attrs.max } : null, attrs.min !== undefined ? { min: attrs.min } : null, attrs.autofocus !== undefined ? { autofocus: attrs.autofocus } : null, attrs.required !== undefined ? { required: attrs.required } : null, attrs.tabindex !== undefined ? { tabindex: attrs.tabindex } : null, attrs.rows !== undefined ? { rows: attrs.rows } : null))]), attrs.counter ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.counter }, state.value.length + " / " + attrs.counter) : null, attrs.help && !showError ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: [classes.help, attrs.focusHelp ? classes.focusHelp : ""].join(" ")
  }, attrs.help) : null, showError ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.error }, state.error) : validates && !attrs.help ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: classes.errorPlaceholder }) : null];
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var textfield = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    var value = void 0,
        isInvalid = false,
        touched = false,
        // true when any change is made
    error = attrs.error || "",
        el = void 0,
        inputEl = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["f" /* prop */])(),
        hasFocus = attrs.focus || false;

    if (typeof attrs.value === "function") {
      var v = attrs.value();
      value = v !== undefined ? v : "";
    } else {
      value = attrs.value !== undefined ? attrs.value : "";
    }
    if (value !== "") {
      touched = true;
    }

    var focus = function focus(focusState) {
      // read
      if (focusState === undefined) {
        return hasFocus;
      }
      // write
      hasFocus = focusState;
      if (focusState && inputEl()) {
        // Draw in next tick, to prevent getting an immediate onBlur
        setTimeout(function () {
          return inputEl().focus();
        }, 0);
      }
    };

    vnode.state = _extends(vnode.state, {
      value: value,
      error: error,
      el: el,
      inputEl: inputEl,
      focus: focus,
      isInvalid: isInvalid,
      touched: touched
    });
  },
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = textfield;


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */





var rgba = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba;

var padding_side = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].grid_unit_component * 2 - 12; // 16 - 12 = 4
var title_padding = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].grid_unit_component * 9 - __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].grid_unit_component * 6 - padding_side; // 72 - 48 - 4
var height_mobile_portrait = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].grid_unit_component * 7; // 56
var height_desktop = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].grid_unit_component * 8; // 64

var vars$1 = {
  padding_side: padding_side,
  title_padding: title_padding,
  indent: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].unit_indent,
  transition_duration: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].animation_duration,
  font_size: 18,
  line_height: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].line_height,

  height: height_desktop,
  height_compact: height_mobile_portrait,

  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_dark_text_primary),

  // default gray background, expected to be overridden
  color_light_background: "#CFD8DC", // blue-gray-100
  color_dark_background: "#37474F" // blue-gray-800
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layout, __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutHorizontal, __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutCenter, {
    height: componentVars.height + "px",
    fontSize: componentVars.font_size + "px",
    lineHeight: componentVars.line_height + "em",
    padding: "0 " + componentVars.padding_side + "px",

    ".pe-toolbar--compact": {
      height: componentVars.height_compact + "px"
    },

    "> *:not(.disabled)": {
      // make elements (e.g. buttons) respond to mouse/touch events
      pointerEvents: "auto"
    },
    " > span, .pe-toolbar__title, .pe-toolbar__title--indent": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layout, __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].flex(1), __WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].ellipsis(1, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].line_height, "em"), {
      transformOrigin: "left 50%",
      lineHeight: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].line_height + "em",
      wordBreak: "break-all"
    }],
    " > span, .pe-toolbar__title": {
      marginLeft: componentVars.title_padding + "px"
    },
    " .pe-toolbar__title--indent": {
      marginLeft: componentVars.indent - componentVars.padding_side + "px"
    },
    " .pe-fit": [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["c" /* mixin */].fit(), {
      margin: 0
    }]
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scope, selector, componentVars, tint) {
  return [_defineProperty$1({}, scope + selector, {
    color: componentVars["color_" + tint + "_text"],
    backgroundColor: componentVars["color_" + tint + "_background"]
  })];
};

var color = (function (selector, componentVars) {
  return [style("", selector, componentVars, "light"), style(".pe-dark-theme ", selector, componentVars, "dark") // inside dark theme
  ];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = ".pe-toolbar";

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = {
  component: "pe-toolbar",
  compact: "pe-toolbar--compact",
  title: "pe-toolbar__title",
  indentedTitle: "pe-toolbar__title--indent"
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["d" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.compact ? classes.compact : null, attrs.class].join(" ")
  }, attrs.events ? attrs.events : null);
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var toolbar = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = toolbar;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>');


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>');


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>');


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(0);
module.exports = m.trust('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/></svg>');


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(15);


/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map