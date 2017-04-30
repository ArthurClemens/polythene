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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = m;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vars; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var vars = _extends({}, __WEBPACK_IMPORTED_MODULE_0_polythene_core__["e" /* defaultVariables */], { color_primary: "255, 152, 0" // new base color: orange 500
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_j2c_plugin_prefix_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_j2c_plugin_prefix_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_j2c_plugin_prefix_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_j2c__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_j2c___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_j2c__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mixin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mixinFlex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return styler; });




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Mixins for j2c

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
      height: "auto",
      maxHeight: "none"
    };
  }
  return _extends({}, {
    overflow: "hidden",
    textOverflow: "ellipsis",
    textRendering: "auto" // Samsung Android
  }, lines !== undefined ? {
    "-webkit-line-clamp": lines,
    "-webkit-box-orient": "vertical",
    display: "-webkit-box"
  } : null, lineHeight !== undefined ? {
    maxHeight: lines * lineHeight + unit
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
  sticky: sticky
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return variables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return isTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return touchStartEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return touchEndEvent; });
/* unused harmony export moveEvent */
/* unused harmony export endEvent */
/* unused harmony export throttle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return unsubscribe; });
/* unused harmony export emit */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return animationEndEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return multiple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filterSupportedAttributes; });
/* unused harmony export prop */


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

var moveEvent = window.PointerEvent ? "pointermove" : "ontouchmove" in window || window.DocumentTouch && document instanceof window.DocumentTouch ? "touchmove" : "mousemove";

var endEvent = window.PointerEvent ? "pointerup" : "ontouchend" in window || window.DocumentTouch && document instanceof window.DocumentTouch ? "touchend" : "mouseup";

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

  var isCancelled = function isCancelled(id) {
    var item = findItem(id);
    return item !== undefined ? item.cancelled : true;
  };

  var next = function next() {
    if (items.length) {
      items[0].show = true;
      __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw();
    }
  };

  var remove = function remove() {
    var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

    if (mOpts.queue) {
      items.shift();
      // add time to remove the previous instance before drawing the next one
      setTimeout(next, 0);
    } else {
      removeItem(instanceId);
    }
  };

  var removeAll = function removeAll() {
    // traditional for loop for IE10
    for (var i = 0; i < items.length; i++) {
      items[i].cancelled = true;
    }
    items.length = 0;
    setTimeout(__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.redraw);
  };

  var setPauseState = function setPauseState(pause, instanceId) {
    var item = findItem(instanceId);
    if (item) {
      item.pause = pause;
      item.unpause = !pause;
    }
  };

  var makeItem = function makeItem(itemOpts, instanceId, spawn) {
    var resolveShow = void 0;
    var didShow = function didShow() {
      if (isCancelled(instanceId)) {
        return;
      }
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
      if (isCancelled(instanceId)) {
        return;
      }
      var opts = typeof itemOpts === "function" ? itemOpts() : itemOpts;
      if (opts.didHide) {
        opts.didHide(instanceId);
      }
      if (mOpts.queue) {
        remove(instanceId);
      }
      return resolveHide(instanceId);
    };

    var hidePromise = new Promise(function (resolve) {
      return resolveHide = resolve;
    });

    return _extends({}, mOpts, {
      instanceId: instanceId,
      spawn: spawn,
      opts: itemOpts,
      show: mOpts.queue ? false : true,
      cancelled: false,
      showPromise: showPromise,
      hidePromise: hidePromise,
      didShow: didShow,
      didHide: didHide
    });
  };

  var show = function show() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var spawnOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var instanceId = spawnOpts.id || mOpts.defaultId;
    var spawn = spawnOpts.spawn || mOpts.defaultId;
    var item = void 0;
    if (mOpts.queue) {
      item = makeItem(opts, instanceId, spawn);
      items.push(item);
      if (items.length === 1) {
        next();
      }
    } else {
      var storedItem = findItem(instanceId);
      item = makeItem(opts, instanceId, spawn);
      if (!storedItem) {
        items.push(item);
      } else {
        replaceItem(instanceId, item);
      }
    }
    return item.showPromise;
  };

  var hide = function hide() {
    var spawnOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var instanceId = spawnOpts.id || mOpts.defaultId;
    var item = mOpts.queue && items.length ? items[0] : findItem(instanceId);
    if (item) {
      item.hide = true;
      return item.hidePromise;
    }
    return Promise.resolve(instanceId);
  };

  var clear = function clear() {
    return removeAll();
  };

  var view = function view(_ref) {
    var attrs = _ref.attrs;

    var spawn = attrs.spawn || mOpts.defaultId;
    var candidates = items.filter(function (item) {
      return item.show && item.spawn === spawn;
    });
    document.body.classList[candidates.length ? "add" : "remove"](mOpts.bodyShowClass);
    return !candidates.length ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(mOpts.placeholder) // placeholder because we cannot return null
    : __WEBPACK_IMPORTED_MODULE_0_mithril___default()(mOpts.element, {
      class: attrs.position === "container" ? "pe-multiple--container" : "pe-multiple--screen"
    }, candidates.map(function (itemData) {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(mOpts.instance, _extends({}, itemData, {
        transitions: mOpts.transitions,
        key: itemData.key || itemData.instanceId
      }));
    }));
  };

  return {
    count: function count() {
      return items.length;
    },
    clear: clear,
    show: show,
    hide: hide,
    remove: remove,
    pause: function pause() {
      var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;
      return setPauseState(true, instanceId);
    },
    unpause: function unpause() {
      var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;
      return setPauseState(false, instanceId);
    },
    view: view,
    theme: mOpts.instance.theme
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

      var resetTransition = function resetTransition() {
        style.transitionDuration = "0ms";
        style.transitionDelay = "0ms";
      };

      var beforeTransition = opts.beforeShow && state === "show" ? function () {
        resetTransition();
        opts.beforeShow();
      } : null;

      var afterTransition = opts.afterHide && state === "hide" ? function () {
        resetTransition();
        opts.afterHide();
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

      var doTransition = function doTransition() {
        applyTransition();
        setTimeout(function () {
          if (afterTransition) {
            afterTransition();
          }
          resolve();
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
"id", "tabindex"];

var filterSupportedAttributes = function filterSupportedAttributes(attrs) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$add = _ref.add,
      addAttrs = _ref$add === undefined ? [] : _ref$add,
      _ref$remove = _ref.remove,
      removeAttrs = _ref$remove === undefined ? [] : _ref$remove;

  var removeLookup = removeAttrs.reduce(r, {});
  var supported = defaultAttrs.concat(addAttrs).filter(function (item) {
    return !removeLookup[item];
  }).reduce(r, {});
  return Object.keys(attrs).reduce(function (acc, key) {
    return supported[key] ? acc[key] = attrs[key] : null, acc;
  }, {});
};

/*
The most simple prop function to emulate m.prop from Mithril 0.2.
*/
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(15);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  (function () {
    var printWarning = function printWarning(format) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };

    warning = function warning(condition, format) {
      if (format === undefined) {
        throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
      }

      if (format.indexOf('Failed Composite propType: ') === 0) {
        return; // Ignore CompositeComponent proptype check.
      }

      if (!condition) {
        for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          args[_key2 - 2] = arguments[_key2];
        }

        printWarning.apply(undefined, [format].concat(args));
      }
    };
  })();
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(11);

var ReactCurrentOwner = __webpack_require__(12);

var warning = __webpack_require__(5);
var canDefineProperty = __webpack_require__(13);
var hasOwnProperty = Object.prototype.hasOwnProperty;

var REACT_ELEMENT_TYPE = __webpack_require__(28);

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown, specialPropRefWarningShown;

function hasValidRef(config) {
  if (process.env.NODE_ENV !== 'production') {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (process.env.NODE_ENV !== 'production') {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
      process.env.NODE_ENV !== 'production' ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (process.env.NODE_ENV !== 'production') {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (process.env.NODE_ENV !== 'production') {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (process.env.NODE_ENV !== 'production') {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};

module.exports = ReactElement;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */


/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_svg__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */






var classes = {
  component: "pe-icon",

  // states
  avatar: "pe-icon--avatar",
  large: "pe-icon--large",
  medium: "pe-icon--medium",
  regular: "pe-icon--regular",
  small: "pe-icon--small"
};

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
      width: "inherit",
      height: "inherit"
    },

    " img": {
      height: "inherit"
    },

    " .pe-svg": {
      width: "inherit",
      height: "inherit"
    },

    ".pe-icon--small": iconSizesPx(componentVars.size_small),
    ".pe-icon--regular": iconSizesPx(componentVars.size_regular),
    ".pe-icon--medium": iconSizesPx(componentVars.size_medium),
    ".pe-icon--large": iconSizesPx(componentVars.size_large)
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint] || "currentcolor"
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, classForType(attrs.type), attrs.avatar ? classes.avatar : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.class].join(" ")
  }, attrs.events ? attrs.events : null);
  var content = attrs.content ? attrs.content : attrs.svg ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_svg__["a" /* default */], _extends({}, attrs.svg)) : attrs.msvg ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_svg__["a" /* default */], attrs.msvg) : attrs.src ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("img", { src: attrs.src }) : attrs.children || vnode.children;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var icon = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (icon);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_icon__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_ripple__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_theme__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return classes; });
/* unused harmony export vars */







var classes = {
  component: "pe-list-tile",

  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",

  // states
  compact: "pe-list-tile--compact",
  contentFront: "pe-list-tile__content--front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  sticky: "pe-list-tile--sticky"
};

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
  color_light_background_hover: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_background_selected: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_background_hover),
  // background color may be set in theme; disabled by default
  // color_light_background:          "inherit",

  color_dark_title: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_subtitle: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_info: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_text_disabled: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_list_header: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_secondary: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
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
      textDecoration: "none",
      color: "inherit",
      border: "none"
    }],

    " .pe-list-tile__primary": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].flex(), {
      position: "relative",

      " .pe-list-tile__content:not(.pe-list-tile__content--front)": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].flex(), paddingV(componentVars.padding, componentVars.padding + 1)]
    }],

    " .pe-list-tile__secondary": {
      textAlign: "right",
      fontSize: componentVars.font_size_title + "px",
      position: "relative"
    },

    " .pe-list-tile__content": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].layoutVertical, __WEBPACK_IMPORTED_MODULE_4_polythene_css__["a" /* flex */].selfCenter, paddingH(componentVars.side_padding), {
      ".pe-list-tile__content--front": [paddingV(componentVars.padding - 5), {
        width: componentVars.front_item_width + "px"
      }],

      " small": {
        fontSize: componentVars.font_size_small + "px"
      }
    }],

    " .pe-list-tile__content--front + .pe-list-tile__content": {
      paddingLeft: 0
    },

    " .pe-list-tile__title": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].ellipsis(1, componentVars.single_line_height, "px"), {
      fontSize: componentVars.font_size_title + "px",
      fontWeight: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].font_weight_normal,
      lineHeight: componentVars.single_line_height + "px"
    }],

    " .pe-list-tile__subtitle": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].ellipsis(componentVars.subtitle_line_count, componentVars.line_height_subtitle, "px"), {
      fontSize: componentVars.font_size_subtitle + "px",
      lineHeight: componentVars.line_height_subtitle + "px",

      ".pe-list-tile__high-subtitle": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].ellipsis(componentVars.high_subtitle_line_count, componentVars.line_height_subtitle, "px"), {
        whiteSpace: "normal"
      }]
    }],

    ".pe-list-tile--selected, &.pe-list-tile--disabled": {
      " a": {
        pointerEvents: "none"
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
        paddingTop: 0,
        paddingBottom: 0
      },
      " .pe-list-tile__title": [__WEBPACK_IMPORTED_MODULE_4_polythene_css__["c" /* mixin */].ellipsis(1, componentVars.single_height, "px"), {
        fontSize: componentVars.font_size_list_header + "px",
        fontWeight: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].font_weight_medium,
        lineHeight: componentVars.single_height + "px",
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
          " .pe-list-tile__title, .pe-list-tile__subtitle": {
            userSelect: "none"
          }
        }
      }
    },

    // Non-touch

    "html.pe-no-touch &.pe-list-tile--hoverable, \
      html.pe-no-touch &.pe-list-tile--selectable": {
      ":not(.pe-list__header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover": {
        cursor: "pointer"
      }
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_title"],
    backgroundColor: componentVars["color_" + tint + "_background"] || "initial",

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
    },
    "&.pe-list-tile--sticky": {
      backgroundColor: componentVars["color_" + tint + "_background"] || "inherit"
    }
  })];
};

var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(","), {
    ":not(.pe-list__header):not(.pe-list-tile--disabled)": {
      " .pe-list-tile__primary, .pe-list-tile__secondary": {
        backgroundColor: componentVars["color_" + tint + "_background_hover"]
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone

  noTouchStyle(["html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable", "html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable "], selector, componentVars, "dark"), // has/inside dark theme

  noTouchStyle(["html.pe-no-touch .pe-list-tile--hoverable", "html.pe-no-touch .pe-list-tile--hoverable ", "html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable", "html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var primaryContent = function primaryContent(attrs, children) {
  var element = attrs.element ? attrs.element : attrs.url ? "a" : "div";
  var contentFrontClass = classes.content + " " + classes.contentFront;
  var frontComp = attrs.front ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: contentFrontClass }, attrs.front) : attrs.indent ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", { class: contentFrontClass }) : null;
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["c" /* filterSupportedAttributes */])(attrs), attrs.url, attrs.events, {
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
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["c" /* filterSupportedAttributes */])(secondaryAttrs), secondaryAttrs.url, {
    class: classes.secondary
  }), __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes.content
  }, [secondaryAttrs.icon ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */], secondaryAttrs.icon) : null, secondaryAttrs.content ? secondaryAttrs.content : null]));
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var heightClass = attrs.subtitle ? classes.hasSubtitle : attrs.highSubtitle ? classes.hasHighSubtitle : attrs.front || attrs.indent ? classes.hasFront : null;

  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.selected ? classes.selected : null, attrs.disabled ? classes.disabled : null, attrs.sticky ? classes.sticky : null, attrs.compact ? classes.compact : null, attrs.hoverable ? classes.hoverable : null, attrs.selectable ? classes.selectable : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, heightClass, attrs.class].join(" ")
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

/* harmony default export */ __webpack_exports__["a"] = (listTile);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {

  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null

};

module.exports = ReactCurrentOwner;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var canDefineProperty = false;
if (process.env.NODE_ENV !== 'production') {
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

module.exports = canDefineProperty;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_ripple__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_new_core__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_core__ = __webpack_require__(24);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

console.log("button", __WEBPACK_IMPORTED_MODULE_1_polythene_new_core__["a" /* button */]);

var updater = function updater(vnode) {
  return function (attrs, value) {
    return vnode.state[attrs] = value, setTimeout(__WEBPACK_IMPORTED_MODULE_2_polythene_mithril_core__["a" /* renderer */].redraw, 0);
  };
};

var oninit = function oninit(vnode) {
  return vnode.state = _extends(vnode.state, {
    focus: false,
    mouseover: false,
    inactive: false
  });
};

var view = function view(vnode) {
  var updateState = updater(vnode);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_mithril_core__["a" /* renderer */])(vnode.attrs.element || "a", __WEBPACK_IMPORTED_MODULE_1_polythene_new_core__["a" /* button */].createProps(vnode, { renderer: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_core__["a" /* renderer */], updateState: updateState, keys: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_core__["b" /* keys */], ripple: __WEBPACK_IMPORTED_MODULE_0_polythene_ripple__["a" /* default */] }), [vnode.attrs.before, __WEBPACK_IMPORTED_MODULE_1_polythene_new_core__["a" /* button */].createContent(vnode, { renderer: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_core__["a" /* renderer */], updateState: updateState, keys: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_core__["b" /* keys */], ripple: __WEBPACK_IMPORTED_MODULE_0_polythene_ripple__["a" /* default */] }), vnode.attrs.after]);
};

var index = {
  theme: __WEBPACK_IMPORTED_MODULE_1_polythene_new_core__["a" /* button */].theme,
  oninit: oninit,
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (index);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(8);

var ReactNoopUpdateQueue = __webpack_require__(19);

var canDefineProperty = __webpack_require__(13);
var emptyObject = __webpack_require__(16);
var invariant = __webpack_require__(6);
var warning = __webpack_require__(5);

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};

/**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if (process.env.NODE_ENV !== 'production') {
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          process.env.NODE_ENV !== 'production' ? warning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

module.exports = ReactComponent;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(8);

var ReactCurrentOwner = __webpack_require__(12);

var invariant = __webpack_require__(6);
var warning = __webpack_require__(5);

function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(hasOwnProperty)
  // Strip regex characters so we can use it for regex
  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  // Remove hasOwnProperty from the template to make it generic
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };

  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}

function getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
  process.env.NODE_ENV !== 'production' ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
  return describeComponentFrame(name, element && element._source, ownerName);
}

var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function (topElement) {
    var info = '';
    if (topElement) {
      var name = getDisplayName(topElement);
      var owner = topElement._owner;
      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
    }

    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    info += ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },


  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs
};

module.exports = ReactComponentTreeHook;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var warning = __webpack_require__(5);

function warnNoop(publicInstance, callerName) {
  if (process.env.NODE_ENV !== 'production') {
    var constructor = publicInstance.constructor;
    process.env.NODE_ENV !== 'production' ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the abstract API for an update queue.
 */
var ReactNoopUpdateQueue = {

  /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function (publicInstance) {
    return false;
  },

  /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {},

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
    warnNoop(publicInstance, 'forceUpdate');
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
    warnNoop(publicInstance, 'replaceState');
  },

  /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};

module.exports = ReactNoopUpdateQueue;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */





var classes = {
  component: "pe-shadow",

  // elements
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",

  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--z-"
};

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
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var depthClass = "" + classes.depth_n + Math.min(5, attrs.z !== undefined ? attrs.z : 1);
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
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

/* harmony default export */ __webpack_exports__["a"] = (shadow);


/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_theme__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return createContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return theme; });
/* unused harmony export classes */
/* unused harmony export vars */




var baseClass = "pe-button";

var classes = {
  base: baseClass,
  component: baseClass + " pe-text-button",

  // elements
  content: "pe-button__content",
  focus: "pe-button__focus",
  label: "pe-button__label",
  wash: "pe-button__wash",

  // states
  borders: "pe-button--borders",
  disabled: "pe-button--disabled",
  focused: "pe-button--focus",
  inactive: "pe-button--inactive",
  selected: "pe-button--selected"
};

var rgba = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].rgba;
var touch_height = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].unit_touch_height;
var height = 36;

var vars$1 = {
  margin_h: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].grid_unit,
  border_radius: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].unit_item_border_radius,
  font_size: 14,
  font_weight: 500,
  outer_padding_v: (touch_height - height) / 2,
  padding_h: 2 * __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].grid_unit,
  padding_v: 11,
  min_width: 8 * __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].grid_unit_component,
  text_transform: "uppercase",
  border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border

  color_light_background: "transparent",
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_active_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_background_active),
  color_light_disabled_background: "transparent",
  color_light_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_text_disabled),

  // border colors may be set in theme; disabled by default
  // color_light_border:              "transparent", // only specify this variable to get all 4 states
  // color_light_hover_border:        "transparent",
  // color_light_active_border:       "transparent",
  // color_light_disabled_border:     "transparent",

  color_dark_background: "transparent",
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_active_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_dark_background_active),
  color_dark_disabled_background: "transparent",
  color_dark_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_dark_text_disabled)

};

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseLayout = (function (selector) {
  return [_defineProperty$1({}, selector, {
    userSelect: "none",
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

    " .pe-button__label": [__WEBPACK_IMPORTED_MODULE_1_polythene_css__["c" /* mixin */].fontSmoothing(), {
      position: "relative",
      display: "block",
      borderRadius: "inherit",
      pointerEvents: "none"
    }],

    " .pe-button__wash, .pe-button__focus": [__WEBPACK_IMPORTED_MODULE_1_polythene_css__["c" /* mixin */].defaultTransition("background-color"), __WEBPACK_IMPORTED_MODULE_1_polythene_css__["c" /* mixin */].fit(), {
      borderRadius: "inherit",
      pointerEvents: "none"
    }],

    " .pe-button__focus": {
      opacity: 0
    },

    " .pe-button__wash": {
      zIndex: 0
    }
  })];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty$2({}, selector, [{
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
      " .pe-button__wash, pe-button__focus, .pe-ripple": __WEBPACK_IMPORTED_MODULE_1_polythene_css__["c" /* mixin */].fit(-1),

      " .pe-button__content": {
        borderStyle: "solid",
        borderWidth: "1px"
      },
      " .pe-button__label": {
        padding: componentVars.padding_v - 1 + "px 0"
      }
    }
  }])];
});

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var activeBorder = componentVars["color_" + tint + "_active_border"] || normalBorder;
  var disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
  return [_defineProperty$3({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
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

var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
  return [_defineProperty$3({}, scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(","), {
    ":not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
      backgroundColor: componentVars["color_" + tint + "_hover_background"],
      borderColor: hoverBorder
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
  noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, "dark"), // inside dark theme
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var baseSelector = "." + classes.base;
var selector = "." + classes.component.replace(/ /g, ".");

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_1_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_1_polythene_css__["b" /* styler */].generateStyles([baseSelector], vars$1, [baseLayout]);
__WEBPACK_IMPORTED_MODULE_1_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = customTheme;

var createProps = function createProps(vnode, _ref) {
  var _ref2;

  var updateState = _ref.updateState,
      k = _ref.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var disabled = attrs.disabled;
  var inactive = attrs.inactive || state.inactive;
  var onClickHandler = attrs.events && attrs.events.onclick;
  var handleInactivate = function handleInactivate() {
    return updateState("inactive", true), setTimeout(function () {
      return updateState("inactive", false);
    }, attrs.inactivate * 1000);
  };
  return _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs, { add: ["formaction", "type"] }), {
    className: [attrs.parentClass || classes.component, attrs.selected ? classes.selected : null, disabled ? classes.disabled : null, inactive ? classes.inactive : null, attrs.borders ? classes.borders : null, state.focus ? classes.focused : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, inactive ? null : (_ref2 = {}, _defineProperty(_ref2, k.tabindex, disabled || inactive ? -1 : attrs[k.tabindex] || 0), _defineProperty(_ref2, k.onclick, function (e) {
    return attrs.inactivate !== undefined && handleInactivate(), onClickHandler && onClickHandler(e), true;
  }), _defineProperty(_ref2, k.onfocus, function () {
    return updateState("focus", !state.mouseover);
  }), _defineProperty(_ref2, k.onblur, function () {
    return updateState("focus", false);
  }), _defineProperty(_ref2, k.onmouseover, function () {
    return updateState("mouseover", true);
  }), _defineProperty(_ref2, k.onmouseout, function () {
    return updateState("mouseover", false);
  }), _defineProperty(_ref2, k.onkeydown, function (e) {
    if (e.which === 13 && state.focus) {
      updateState("focus", false);
      if (onClickHandler) {
        onClickHandler(e);
      }
    }
  }), _ref2), attrs.style ? { style: {} } : null, // Set style on content, not on component
  attrs.events, attrs.url, disabled ? { disabled: true } : null);
};

var createContent = function createContent(vnode, _ref3) {
  var _r;

  var r = _ref3.renderer,
      k = _ref3.keys,
      ripple = _ref3.ripple;

  var attrs = vnode.attrs;
  var noink = attrs.ink !== undefined && attrs.ink === false;
  var disabled = attrs.disabled;
  var children = attrs.children || vnode.children;
  var label = attrs.content ? attrs.content : attrs.label ? _typeof(attrs.label) === "object" ? attrs.label : r("div", { key: "label", className: classes.label }, attrs.label) : children ? children : null;
  var noWash = disabled || attrs.wash !== undefined && !attrs.wash;
  return label ? r("div", (_r = {}, _defineProperty(_r, k.class, classes.content), _defineProperty(_r, "key", "button"), _defineProperty(_r, "style", attrs.style || {}), _r), [!disabled && attrs.shadowComponent // "protected" option, used by raised-button
  ? attrs.shadowComponent : null,
  // ripple
  disabled || noink ? null : ripple && r(ripple, _extends({}, attrs.ripple, {
    key: "ripple",
    target: function target() {
      return vnode.dom;
    }
  })),
  // hover
  noWash ? null : r("div", { key: "wash", className: classes.wash }),
  // focus
  disabled ? null : r("div", { key: "focus", className: classes.focus }), label]) : null;
};




/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_list_tile__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */






var classes = {
  component: "pe-list",

  // elements
  header: "pe-list__header",

  // states
  borders: "pe-list--borders",
  compact: "pe-list--compact",
  hasHeader: "pe-list--header",
  indentedBorders: "pe-list--indented-borders"
};

var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;

var vars$1 = {
  padding: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component, // vertical padding
  padding_compact: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_component / 2,
  border_width_stacked: 1,
  border_width_bordered: 1,

  color_light_border: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_dark_border: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_border_light)

};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var borderStyle = function borderStyle(componentVars) {
  return {
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

    "& + &": {
      borderStyle: "solid none none none",
      borderWidth: componentVars.border_width_stacked + "px"
    },

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

var style = function style(scopes, selector, componentVars, tint) {
  var _ref;

  return [(_ref = {}, _defineProperty$1(_ref, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    backgroundColor: componentVars["color_" + tint + "_background"] || "initial",

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
  }), _defineProperty$1(_ref, selector + " + .pe-list", {
    borderTopColor: componentVars["color_" + tint + "_border"]
  }), _ref)];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.borders ? classes.borders : null, attrs.indentedBorders ? classes.indentedBorders : null, attrs.header ? classes.hasHeader : null, attrs.compact ? classes.compact : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.class].join(" ")
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

/* harmony default export */ __webpack_exports__["a"] = (list);


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_mithril___default.a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return keys; });


var keys = {
  class: "class",
  formaction: "formaction",
  onblur: "onblur",
  onclick: "onclick",
  onfocus: "onfocus",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  tabindex: "tabindex"
};




/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_utilities__ = __webpack_require__(72);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return classes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return instance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vars$1; });






var classes = {
  component: "pe-notification",

  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",

  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multiline",
  vertical: "pe-notification--vertical"
};

var rgba = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba;

var buttonPaddingH = 8; // padding, inner text space

var vars$1 = {
  width: 274,
  min_height: 80,
  border_radius: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].unit_block_border_radius,
  title_padding_h: buttonPaddingH,
  title_single_padding_v: 14,
  title_multi_padding_v: 20,
  side_padding: 24 - buttonPaddingH,
  font_size: 14,
  line_height: 20,

  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_background),
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_dark_primary),

  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_background),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].blend_light_text_primary)
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutCenter, {
    width: componentVars.width + "px",
    minHeight: componentVars.min_height + "px",
    position: "relative",
    padding: "0 " + componentVars.side_padding + "px",
    margin: "0 auto",
    borderRadius: componentVars.border_radius + "px",
    pointerEvents: "all",

    " .pe-notification__content": {
      width: "100%"
    },

    " .pe-notification__title": {
      padding: componentVars.title_single_padding_v + "px " + componentVars.title_padding_h + "px",
      fontSize: componentVars.font_size + "px",
      lineHeight: componentVars.line_height + "px"
    },

    " .pe-notification__action": {
      " .pe-button": {
        margin: 0
      }
    },

    "&.pe-notification--horizontal": {
      " .pe-notification__content": __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutHorizontal,
      " .pe-notification__title": __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].flex(),
      " .pe-notification__title--multi-line": {
        paddingTop: componentVars.title_multi_padding_v + "px",
        paddingBottom: componentVars.title_multi_padding_v + "px"
      },
      " .pe-notification__action": __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutCenter
    },
    "&.pe-notification--vertical": {
      " .pe-notification__content": __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutVertical,
      " .pe-notification__title": {
        paddingBottom: "4px"
      },
      " .pe-notification__title--multi-line": {
        paddingTop: componentVars.title_multi_padding_v + "px"
      },
      " .pe-notification__action": __WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutEndJustified
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_text"],
    background: componentVars["color_" + tint + "_background"]
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var holderLayout = (function (selector) {
  return [_defineProperty$2({}, selector, [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutCenterCenter, {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].z_notification,
    pointerEvents: "none",

    ".pe-multiple--screen": {
      position: "fixed"
    },
    ".pe-multiple--container": {
      position: "absolute"
    }
  }])];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var holderFns = [holderLayout];
var holderSelector = "." + classes.holder;

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns), __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, holderSelector], _extends$1({}, vars$1, customVars), holderFns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);
__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([holderSelector], vars$1, holderFns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DEFAULT_TIME_OUT = 3;

var pauseInstance = function pauseInstance(state) {
  state.isPaused = true;
  if (state.timer) {
    state.timer.pause();
  }
};

var unpauseInstance = function unpauseInstance(state) {
  state.isPaused = false;
  if (state.timer) {
    state.timer.resume();
  }
};

var stopTimer = function stopTimer(state) {
  if (state.timer) {
    state.timer.stop();
  }
};

var prepareShow = function prepareShow(state, opts) {
  state.containerEl = state.containerEl || document.querySelector(opts.containerSelector || state.element);
  if (opts.containerSelector) {
    var holderEl = state.containerEl.querySelector(state.element);
    holderEl.classList.add(classes.hasContainer);
  }
};

var showInstance = function showInstance(state, opts) {
  prepareShow(state, opts);
  stopTimer(state);
  state.transitioning = true;
  var transitions = opts.transitions || state.transitions;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["a" /* show */])(_extends({}, opts, transitions.show(state.containerEl, opts))).then(function () {
    state.transitioning = false;
    if (state.didShow) {
      // notify multiple
      state.didShow(state.instanceId);
      // this will call opts.didShow
    }
    // set timer to hide in a few seconds
    var timeout = opts.timeout;
    if (timeout === 0) {
      // do not time out
    } else {
      var timeoutSeconds = timeout !== undefined ? timeout : DEFAULT_TIME_OUT;
      state.timer = new __WEBPACK_IMPORTED_MODULE_4_polythene_utilities__["a" /* Timer */](function () {
        hideInstance(state, opts);
      }, timeoutSeconds);
    }
  });
};

var hideInstance = function hideInstance(state, opts) {
  stopTimer(state);
  var id = state.instanceId;
  state.transitioning = true;
  var transitions = opts.transitions || state.transitions;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["b" /* hide */])(_extends({}, opts, transitions.hide(state.containerEl, opts))).then(function () {
    stopTimer(state);
    state.transitioning = false;
    if (state.didHide) {
      // notify multiple
      state.didHide(id);
      // this will call opts.didHide
    }
    __WEBPACK_IMPORTED_MODULE_1_mithril___default.a.redraw(); // removes remainder of drawn component
  });
};

var createView = function createView(state, opts) {
  var element = opts.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(opts), {
    class: [state.class, opts.tone === "light" ? null : "pe-dark-tone", // default dark tone
    opts.tone === "light" ? "pe-light-tone" : null, opts.containerSelector ? classes.hasContainer : null, opts.layout === "vertical" ? classes.vertical : classes.horizontal, opts.tone === "dark" ? "pe-dark-tone" : null, opts.tone === "light" ? "pe-light-tone" : null, opts.class].join(" "),
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;

      state.el = dom;
      showInstance(state, opts);
    },
    onclick: function onclick(e) {
      return e.preventDefault();
    }
  });

  var content = __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes.content
  }, opts.content || [opts.title ? __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes.title,
    oncreate: function oncreate(_ref2) {
      var dom = _ref2.dom;

      var height = dom.getBoundingClientRect().height;
      var lineHeight = parseInt(window.getComputedStyle(dom).lineHeight, 10);
      var paddingTop = parseInt(window.getComputedStyle(dom).paddingTop, 10);
      var paddingBottom = parseInt(window.getComputedStyle(dom).paddingBottom, 10);
      if (height > lineHeight + paddingTop + paddingBottom) {
        dom.classList.add(classes.multilineTitle);
      }
    }
  }, opts.title) : null, opts.action ? __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", { class: classes.action }, [opts.action]) : null]);
  return __WEBPACK_IMPORTED_MODULE_1_mithril___default()(element, props, content);
};

var instance = {
  theme: customTheme, // accepts (selector, vars)
  oninit: function oninit(vnode) {
    var attrs = vnode.attrs;
    vnode.state = _extends(vnode.state, attrs, {
      el: null,
      containerEl: null,
      dismissEl: null,
      transitioning: false,
      timer: null,
      isPaused: false
    });
  },
  view: function view(_ref3) {
    var state = _ref3.state,
        attrs = _ref3.attrs;

    // attrs contains {id, opts}
    var opts = typeof attrs.opts === "function" ? attrs.opts() : attrs.opts;
    if (attrs.hide && !state.transitioning) {
      hideInstance(state, opts);
    }
    if (attrs.pause && !state.isPaused) {
      pauseInstance(state, attrs);
    } else if (attrs.unpause && state.isPaused) {
      unpauseInstance(state, attrs);
    }
    return createView(state, opts);
  }
};

var show$1 = function show$$1(el, opts) {
  return {
    el: el,
    showDuration: opts.showDuration || .5,
    showDelay: opts.showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.opacity = 0;
    },
    show: function show$$1() {
      return el.style.opacity = 1;
    }
  };
};

var hide$1 = function hide$$1(el, opts) {
  return {
    el: el,
    hideDuration: opts.hideDuration || .5,
    hideDelay: opts.hideDelay || 0,
    hide: function hide$$1() {
      return el.style.opacity = 0;
    }
  };
};

var transitions = {
  show: show$1,
  hide: hide$1
};

var notification = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["d" /* multiple */])({
  instance: instance,
  transitions: transitions,
  queue: true,
  defaultId: "default_notification",
  class: classes.component,
  element: "." + classes.holder,
  placeholder: "span." + classes.placeholder,
  bodyShowClass: classes.open
});

/* harmony default export */ __webpack_exports__["a"] = (notification);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_hyperscript__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_hyperscript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_hyperscript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_react_hyperscript___default.a; });
/* unused harmony export keys */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StateComponent; });



var keys = {
  class: "className",
  formaction: "formAction",
  onblur: "onBlur",
  onclick: "onClick",
  onfocus: "onFocus",
  onkeydown: "onKeyDown",
  onkeyup: "onKeyUp",
  onmousedown: "onMouseDown",
  onmouseout: "onMouseOut",
  onmouseover: "onMouseOver",
  onmouseup: "onMouseUp",
  tabindex: "tabIndex"
};

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StateComponent = (function (createProps, createContent, defaultElement, state) {

  return function (_Component) {
    _inherits(_class, _Component);

    function _class(props) {
      _classCallCheck(this, _class);

      var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

      _this.state = state;
      return _this;
    }

    _createClass(_class, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        var props = this.props;
        var vnode = {
          state: this.state,
          attrs: props,
          children: this.props.children
        };
        var updateState = function updateState(attrs, value) {
          return _this2.setState(_defineProperty({}, attrs, value));
        };
        return __WEBPACK_IMPORTED_MODULE_0_react_hyperscript___default()(props.element || defaultElement, createProps(vnode, { renderer: __WEBPACK_IMPORTED_MODULE_0_react_hyperscript___default.a, keys: keys, updateState: updateState }), [props.before, createContent(vnode, { renderer: __WEBPACK_IMPORTED_MODULE_0_react_hyperscript___default.a, keys: keys, updateState: updateState }), props.after]);
      }
    }]);

    return _class;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);
});




/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

module.exports = REACT_ELEMENT_TYPE;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */



var ReactCurrentOwner = __webpack_require__(12);
var ReactComponentTreeHook = __webpack_require__(18);
var ReactElement = __webpack_require__(7);

var checkReactTypeSpec = __webpack_require__(67);

var canDefineProperty = __webpack_require__(13);
var getIteratorFn = __webpack_require__(31);
var warning = __webpack_require__(5);

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = ReactCurrentOwner.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;
  }
  memoizer[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }

  process.env.NODE_ENV !== 'production' ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    // Entry iterators provide implicit keys.
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    process.env.NODE_ENV !== 'production' ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

var ReactElementValidator = {

  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + 'it\'s defined in.';
        }

        var sourceInfo = getSourceInfoErrorAddendum(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        info += ReactComponentTreeHook.getCurrentStackAddendum();

        process.env.NODE_ENV !== 'production' ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
      }
    }

    var element = ReactElement.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);

    return element;
  },

  createFactory: function (type) {
    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    if (process.env.NODE_ENV !== 'production') {
      if (canDefineProperty) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            process.env.NODE_ENV !== 'production' ? warning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }

    return validatedFactory;
  },

  cloneElement: function (element, props, children) {
    var newElement = ReactElement.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }

};

module.exports = ReactElementValidator;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactPropTypeLocationNames = {};

if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

module.exports = ReactPropTypeLocationNames;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

module.exports = getIteratorFn;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(59);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */





var classes = {
  component: "pe-ripple",

  // elements
  mask: "pe-ripple__mask",
  waves: "pe-ripple__waves",

  // states
  constrained: "pe-ripple--constrained",
  wavesAnimating: "pe-ripple__waves--animating"
};

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

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint] || componentVars["color"] || "inherit"
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

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
  var x = __WEBPACK_IMPORTED_MODULE_1_polythene_core__["i" /* isTouch */] && e.touches ? e.touches[0].pageX : e.clientX;
  var y = __WEBPACK_IMPORTED_MODULE_1_polythene_core__["i" /* isTouch */] && e.touches ? e.touches[0].pageY : e.clientY;
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
  var triggerEl = attrs.target ? attrs.target() : vnode.dom.parentElement;
  triggerEl.addEventListener(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["j" /* touchEndEvent */], tap, false);
  destroyRipple = function destroyRipple() {
    triggerEl.removeEventListener(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["j" /* touchEndEvent */], tap, false);
  };
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  if (attrs.disabled) {
    return null;
  }
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.constrained !== false ? classes.constrained : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.class].join(" ")
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

/* harmony default export */ __webpack_exports__["a"] = (ripple);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */





var classes = {
  component: "pe-toolbar",

  // elements
  title: "pe-toolbar__title",

  // states
  compact: "pe-toolbar--compact",
  indentedTitle: "pe-toolbar__title--indent"
};

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

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_text"],
    backgroundColor: componentVars["color_" + tint + "_background"]
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.compact ? classes.compact : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.class].join(" ")
  }, attrs.events ? attrs.events : null);
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var toolbar = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (toolbar);


/***/ }),
/* 35 */,
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_fastclick__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_material_design__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_list__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_polythene_list_tile__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_polythene_toolbar__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_polythene_tests__ = __webpack_require__(75);









// import { tests as cardTests } from "../tests/card/tests";
// import { tests as checkboxTests } from "../tests/checkbox/tests";
// import { tests as dialogTests } from "../tests/dialog/tests";
// import { tests as fabTests } from "../tests/fab/tests";
// import { tests as iconTests } from "../tests/icon/tests";
// import { tests as iconButtonTests } from "../tests/icon-button/tests";
// import { tests as iOSSpinnerTests } from "../tests/ios-spinner/tests";
// import { tests as listTests } from "../tests/list/tests";
// import { tests as listTileTests } from "../tests/list-tile/tests";
// import { tests as mdSpinnerTests } from "../tests/md-spinner/tests";
// import { tests as mdEndSpinnerTests } from "../tests/md-progress-spinner/tests";
// import { tests as menuTests } from "../tests/menu/tests";
// import { tests as notificationTests } from "../tests/notification/tests";
// import { tests as radioButtonTests } from "../tests/radio-button/tests";
// import { tests as raisedButtonTests } from "../tests/raised-button/tests";
// import { tests as rippleTests } from "../tests/ripple/tests";
// import { tests as searchTests } from "../tests/search/tests";
// import { tests as shadowTests } from "../tests/shadow/tests";
// import { tests as sliderTests } from "../tests/slider/tests";
// import { tests as snackbarTests } from "../tests/snackbar/tests";
// import { tests as svgTests } from "../tests/svg/tests";
// import { tests as switchButtonTests } from "../tests/switch-button/tests";
// import { tests as tabsTests } from "../tests/tabs/tests";
// import { tests as textfieldTests } from "../tests/textfield/tests";
// import { tests as toolbarTests } from "../tests/toolbar/tests";
// import { tests as cssTests } from "../tests/css/tests";
// import { tests as cssClassesTests } from "../tests/css-classes/tests";
// import { tests as themeTests } from "../tests/theme/tests";

var pages = [{
  path: "/button",
  name: "Button",
  tests: __WEBPACK_IMPORTED_MODULE_8_polythene_tests__["a" /* mithrilTests */].button
}];

var index = {
  oncreate: function oncreate() {
    return document.title = "Polythene components";
  },
  view: function view() {
    return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3__styles__["a" /* rules */].headerRow, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_7_polythene_toolbar__["a" /* default */], {
      style: {
        backgroundColor: "rgba(255,255,255,.93)"
      }
    }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", "Polythene components"))), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_list__["a" /* default */], {
      style: {
        padding: "88px 8px 24px 8px"
      }
    }, pages.map(function (link) {
      return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_list_tile__["a" /* default */], {
        title: link.name,
        url: {
          href: link.path,
          oncreate: __WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.link
        }
      });
    }))];
  }
};

__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route.prefix("#");
var mountNode = document.querySelector("#app");
var routes = {
  "/": index
};
pages.forEach(function (page) {
  return routes[page.path] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__page__["a" /* default */])(page.name, page.tests, "/");
});
__WEBPACK_IMPORTED_MODULE_0_mithril___default.a.route(mountNode, "/", routes);

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_index__ = __webpack_require__(36);


/***/ }),
/* 38 */
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
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scripts_render__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_toolbar__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_dialog__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_notification__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_polythene_snackbar__ = __webpack_require__(70);







// import iconButton from "polythene-icon-button";
// import iconBack from "mmsvg/google/msvg/navigation/arrow-back";

var generatedHtml = {
  oninit: function oninit(vnode) {
    return vnode.state.open = false, vnode.state.toggle = function () {
      return vnode.state.open = !vnode.state.open;
    };
  },
  view: function view(vnode) {
    return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].resultDataRawHtml, {
      class: vnode.state.open ? "open" : "closed",
      onclick: vnode.state.toggle
    }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(".html", { id: vnode.attrs.id }, ""), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(".ellipsis", "...")]);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function (name, tests, previous) {
  return {
    oncreate: function oncreate() {
      return document.title = name, scrollTo(0, 0);
    },
    view: function view() {
      return [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].headerRow, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_3_polythene_toolbar__["a" /* default */], {
        style: {
          backgroundColor: "rgba(255,255,255,.93)"
        }
      }, [
      // previous && m(iconButton, {
      //   icon: { msvg: iconBack },
      //   url: {
      //     href: "/",
      //     oncreate: m.route.link
      //   },
      //   style: {
      //     color: "#0091EA"
      //   }
      // }),
      __WEBPACK_IMPORTED_MODULE_0_mithril___default()("span", name)])), __WEBPACK_IMPORTED_MODULE_0_mithril___default()([__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].results].join(" "), {
        className: "tests-" + name.replace(/[\:\-\+\(\)\[\]]/g, "").replace(/ /g, "-").toLowerCase()
      }, tests.map(function (test, index) {
        var testName = "test-" + test.name.replace(/[\:\-\+\[\]\(\)]/g, "").replace(/ /g, "-").toLowerCase();
        var uid = "id-" + index;
        return __WEBPACK_IMPORTED_MODULE_0_mithril___default()([__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].resultRow, test.interactive ? __WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].interactive : null].join(""), {
          key: testName,
          class: [testName, test.className || null].join(" ")
        }, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].resultTitle, {
          class: "result-title"
        }, test.name), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].resultData, [__WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].resultDataRendered, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].content, {
          oncreate: function oncreate(vnode) {
            if (!test.exclude) {
              document.querySelector("#" + uid).textContent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__scripts_render__["a" /* tidy */])(vnode.dom.innerHTML);
            }
          }
        }, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(test.component, test.attrs, test.children))), !test.exclude && __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1__styles__["a" /* rules */].resultDataRaw, __WEBPACK_IMPORTED_MODULE_0_mithril___default()(generatedHtml, { id: uid }))])]);
      })), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_4_polythene_dialog__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_6_polythene_snackbar__["a" /* default */]), __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_5_polythene_notification__["a" /* default */])];
    }
  };
});

/***/ }),
/* 40 */
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
/* 41 */
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_shadow__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_menu__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */







var classes$1 = {
  component: "pe-dialog",

  // elements
  actions: "pe-dialog__actions",
  body: "pe-dialog__body",
  content: "pe-dialog__content",
  footer: "pe-dialog__footer",
  header: "pe-dialog__header",
  title: "pe-dialog__title",

  // states
  footerHigh: "pe-dialog__footer--high",
  fullscreen: "pe-dialog--fullscreen",
  hasBackdrop: "pe-dialog--backdrop",
  hasBottomOverflow: "pe-dialog--overflow-bottom",
  hasTopOverflow: "pe-dialog--overflow-top",
  visible: "pe-dialog--visible",

  // lookup
  menuContent: __WEBPACK_IMPORTED_MODULE_4_polythene_menu__["a" /* classes */].content
};

var rgba = __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].rgba;

var vars$1 = {
  border_radius: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].unit_block_border_radius,
  padding: 3 * __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].grid_unit_component,
  header_bottom: 20,
  header_height: 60,
  footer_height: 52,

  color_light_content_background: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_background),
  color_light_title_text: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_body_text: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_text_regular),
  color_light_body_border: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_light_backdrop_background: "rgba(0, 0, 0, .4)",

  color_dark_content_background: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_background),
  color_dark_title_text: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_body_text: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_text_regular),
  color_dark_body_border: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].blend_dark_border_light),
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var lineHeightTitle = 24;

var layout = (function (selector, componentVars) {
  var _ref;

  return [(_ref = {}, _defineProperty(_ref, selector, [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutCenterCenter, {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].z_dialog,
    height: "100%", // 100vh would make the dialog go beneath Mobile Safari toolbar
    padding: componentVars.padding + "px 40px",

    ".pe-dialog--fullscreen": {
      padding: 0,

      " .pe-dialog__content": {
        borderRadius: 0,
        maxWidth: "none",
        height: "100%",
        width: "100%",

        " .pe-dialog__header, .pe-dialog__footer": {
          display: "none"
        },

        " .pe-dialog__body": {
          padding: 0,
          height: "100%",
          maxHeight: "calc(100%)",
          border: "none"
        }
      }
    },

    " .pe-dialog__header, pe-dialog__body, pe-dialog__header": {
      zIndex: 1
    },

    " .pe-dialog__content": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutVertical, {
      position: "relative",
      maxHeight: "100%",
      minWidth: 56 * 5 + "px",
      maxWidth: 7 * __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].grid_unit_menu + "px",
      borderRadius: componentVars.border_radius + "px",

      " > .pe-shadow": {
        zIndex: -1 // For IE10 to get click events on content
      },

      ".pe-menu__content": {
        " .pe-dialog__body": {
          padding: 0,
          border: "none"
        }
      },
      " p": {
        margin: 0
      },
      " p + p": {
        marginTop: "16px"
      }
    }],

    " .pe-dialog__title": {
      fontSize: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].font_size_title + "px",
      lineHeight: lineHeightTitle + "px",
      fontWeight: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].font_weight_medium,

      "& + div": {
        marginTop: "16px"
      }
    },

    " .pe-dialog__header": {
      padding: [componentVars.padding - 4, componentVars.padding, componentVars.header_bottom - 4, componentVars.padding].map(function (v) {
        return v + "px";
      }).join(" "),
      minHeight: componentVars.header_height + "px",

      " .pe-dialog__title": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].ellipsis(1), {
        width: "100%"
      }]
    },

    " .pe-dialog__body": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].selfStretch, {
      padding: componentVars.padding + "px",
      overflowY: "auto",
      "-webkit-overflow-scrolling": "touch",
      borderWidth: "1px",
      borderStyle: "solid none",
      borderColor: "transparent",
      // initially set max-height; will be overridden by dialog core with actual heights
      maxHeight: "calc(100vh - " + 2 * componentVars.padding + "px - " + (componentVars.header_height + componentVars.footer_height) + "px)"
    }],
    " .pe-dialog__header + .pe-dialog__body": {
      paddingTop: 0
    },

    " .pe-dialog__footer": {
      padding: "2px 8px",
      minHeight: componentVars.footer_height + "px",
      fontSize: 0, // remove inline block spacing

      ".pe-dialog__footer--high": {
        // when buttons are stacked vertically
        paddingBottom: "8px"
      }
    },

    " .pe-dialog__actions": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutHorizontal, __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutEndJustified, __WEBPACK_IMPORTED_MODULE_3_polythene_css__["a" /* flex */].layoutWrap, {
      margin: "0 -4px",

      " .pe-button": {
        height: "36px",
        marginTop: "6px",
        marginBottom: "6px",
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

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    "&.pe-dialog--backdrop": {
      backgroundColor: componentVars["color_" + tint + "_backdrop_background"]
    },
    " .pe-dialog__content": {
      backgroundColor: componentVars["color_" + tint + "_content_background"]
    },
    " .pe-dialog__header .pe-dialog__title": {
      color: componentVars["color_" + tint + "_title_text"]
    },
    " .pe-dialog__body": {
      color: componentVars["color_" + tint + "_body_text"]
    },
    "&.pe-dialog--overflow-top .pe-dialog__body": {
      borderTopColor: componentVars["color_" + tint + "_body_border"]
    },
    "&.pe-dialog--overflow-bottom .pe-dialog__body": {
      borderBottomColor: componentVars["color_" + tint + "_body_border"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes$1.component;

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
      footerEl.classList.add(classes$1.footerHigh);
    } else {
      footerEl.classList.remove(classes$1.footerHigh);
    }
  }
};

var showInstance = function showInstance(state, opts) {
  var id = state.instanceId;
  state.transitioning = true;
  var transitions = opts.transitions || state.transitions;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["a" /* show */])(_extends({}, opts, transitions.show(state.el, opts))).then(function () {
    state.transitioning = false;
    state.visible = true;
    if (state.didShow) {
      // notify multiple
      state.didShow(id);
      // this will call opts.didShow
    }
  });
};

var hideInstance = function hideInstance(state, opts) {
  var id = state.instanceId;
  state.transitioning = true;
  var transitions = opts.transitions || state.transitions;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["b" /* hide */])(_extends({}, opts, transitions.hide(state.el, opts))).then(function () {
    dialog.remove(id);
    state.transitioning = false;
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
  var bodyOpts = opts.content || opts.body || opts.menu;
  var updateContentOnScroll = opts.updateContentOnScroll || false;
  var ignoreContent = !updateContentOnScroll && state.isScrolling;
  return __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes$1.body,
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
    if (e.which === 27 && !state.transitioning) {
      cleanup();
      hideInstance(state, _extends({}, opts, {
        hideDelay: 0
      }));
    }
  };
  var cleanup = function cleanup() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* unsubscribe */])("resize", update);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* unsubscribe */])("keydown", handleEscape);
  };

  var element = opts.element || "form";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(opts, { remove: ["style"] }), // style set in content, and set by show/hide transition
  {
    class: [classes$1.component, opts.fullscreen ? classes$1.fullscreen : null, opts.backdrop ? classes$1.hasBackdrop : null, state.topOverflow || opts.borders ? classes$1.hasTopOverflow : null, state.bottomOverflow || opts.borders ? classes$1.hasBottomOverflow : null, state.visible ? classes$1.visible : null, opts.tone === "dark" ? "pe-dark-tone" : null, opts.tone === "light" ? "pe-light-tone" : null, opts.class].join(" "),
    oncreate: function oncreate(_ref2) {
      var dom = _ref2.dom;

      state.el = dom;
      // resize: update scroll state ("overflow" borders)
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* subscribe */])("resize", update);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* subscribe */])("keydown", handleEscape);

      updateScrollState(state);

      showInstance(state, opts).then(function () {
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
      if (!state.transitioning) {
        hideInstance(state, _extends({}, opts, {
          hideDelay: 0
        }));
      }
    }
  }, opts.formOptions ? opts.formOptions : null);

  var body = createViewContent(state, opts);
  var content = __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: [classes$1.content, opts.menu ? classes$1.menuContent : null].join(" "),
    style: opts.style
  }, [opts.fullscreen ? null : __WEBPACK_IMPORTED_MODULE_1_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_shadow__["a" /* default */], {
    z: state.z,
    animated: true
  }), opts.fullscreen ? null : opts.title ? __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes$1.header,
    oncreate: function oncreate(_ref3) {
      var dom = _ref3.dom;

      state.headerHeight = dom.scrollHeight;
    }
  }, __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes$1.title
  }, opts.title)) : null, body, opts.fullscreen ? null : opts.footer ? __WEBPACK_IMPORTED_MODULE_1_mithril___default()("div", {
    class: classes$1.footer,
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
    class: classes$1.actions
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
      transitioning: false
    });
  },
  view: function view(_ref6) {
    var state = _ref6.state,
        attrs = _ref6.attrs;

    // attrs contains {id, opts}
    var opts = typeof attrs.opts === "function" ? attrs.opts() : attrs.opts;
    if (attrs.hide && !state.transitioning) {
      hideInstance(state, opts);
    }
    return createView(state, opts);
  }
};

var show$1 = function show$$1(el, opts) {
  return {
    el: el,
    showDuration: opts.showDuration || .220,
    showDelay: opts.showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.opacity = 0;
    },
    show: function show$$1() {
      return el.style.opacity = 1;
    }
  };
};

var hide$1 = function hide$$1(el, opts) {
  return {
    el: el,
    hideDuration: opts.hideDuration || .220,
    hideDelay: opts.hideDelay || 0,
    hide: function hide$$1() {
      return el.style.opacity = 0;
    }
  };
};

var transitions = {
  show: show$1,
  hide: hide$1
};

var dialog = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["d" /* multiple */])({
  instance: instance,
  transitions: transitions,
  defaultId: "default_dialog",
  element: ".pe-dialog__holder",
  placeholder: "span.pe-dialog__placeholder",
  bodyShowClass: "pe-dialog--open"
});

/* harmony default export */ __webpack_exports__["a"] = (dialog);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_raised_button__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_icon__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */






var classes = {
  component: "pe-fab",

  // elements
  content: "pe-fab__content",

  // states
  mini: "pe-fab--mini"
};

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
  return [_defineProperty({}, selector, {
    userSelect: "none",
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

    " .pe-button__wash": {
      transition: "background-color " + __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].animation_duration + " ease-in-out",
      borderRadius: "inherit",
      pointerEvents: "none",
      backgroundColor: "transparent"
    }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    " .pe-button__content": {
      backgroundColor: componentVars["color_" + tint + "_background"],
      color: componentVars["color_" + tint]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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

/* harmony default export */ __webpack_exports__["a"] = (fab);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fastclick__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_fastclick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_fastclick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(4);



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

if (__WEBPACK_IMPORTED_MODULE_1_polythene_core__["i" /* isTouch */]) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["g" /* subscribe */])("scroll", handleScroll, THROTTLE_DELAY);
  add();
}


/***/ }),
/* 45 */
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
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_icon__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_button__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */






var classes = {
  component: "pe-button pe-icon-button",

  // elements
  content: "pe-icon-button__content",

  // states
  compact: "pe-icon-button--compact"
};

var rgba = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba;
var padding = (__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_icon_button - __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size) / 2; // 12
var padding_compact = (__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].grid_unit_icon_button - __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].unit_icon_size) / 3; // 8
var color_light = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_secondary);
var color_dark = __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_secondary);

var vars$1 = {
  padding: padding,
  padding_compact: padding_compact,

  color_background: "transparent", // only specify this variable to get all 2 states
  // theme specific background colors may be set in theme; disabled by default
  // color_light_background:    "none",
  // color_dark_background:     "none",

  color_light: color_light,
  color_light_disabled: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_wash: color_light,
  color_light_wash_opacity: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_background_hover_medium,
  color_light_focus_opacity: __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_light_background_hover_medium,

  color_dark: color_dark,
  color_dark_disabled: rgba(__WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_4_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_wash: color_dark,
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

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
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

var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(","), {
    " .pe-button__wash": {
      backgroundColor: componentVars["color_" + tint + "_wash"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
  noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, "dark"), // inside dark theme
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component.replace(/ /g, ".");

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.icon ? __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_icon__["a" /* default */], attrs.icon) : attrs.children || vnode.children;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_2_polythene_mithril_button__["a" /* default */], _extends({}, {
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

/* harmony default export */ __webpack_exports__["a"] = (iconButton);


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_webfontloader__ = __webpack_require__(48);
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
/* 48 */
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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_shadow__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_theme__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return classes$1; });
/* unused harmony export vars */







var classes$1 = {
  component: "pe-menu",

  // elements
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target: "pe-menu__target",

  // states
  permanent: "pe-menu--permanent",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",

  // lookup
  listTile: __WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__["b" /* classes */].component,
  selectedListTile: __WEBPACK_IMPORTED_MODULE_4_polythene_list_tile__["b" /* classes */].selected
};

var rgba = __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].rgba;

var vars$1 = {
  sizes: [1, 1.5, 2, 3, 4, 5, 6, 7],
  min_size: 1.5,
  max_size_small_screen: 5,
  size_factor: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].grid_unit_menu,
  border_radius: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].unit_block_border_radius,

  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_light_background),
  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].color_dark_background)
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
  var _ref3;

  return [(_ref3 = {}, _defineProperty(_ref3, selector, [componentVars.sizes.map(function (size) {
    return widthStyle(componentVars, size);
  }), _defineProperty({
    transitionTimingFunction: "ease-out",
    transitionProperty: "opacity",
    zIndex: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].z_menu,
    opacity: 0,
    position: "absolute",
    width: "100%",
    minWidth: __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].grid_unit_menu * componentVars.min_size + "px",

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
    }

  }, "@media (max-width: " + __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].unit_screen_size_large + "px)", {
    "max-width": componentVars.max_size_small_screen * __WEBPACK_IMPORTED_MODULE_5_polythene_theme__["a" /* vars */].grid_unit_menu + "px"
  })]), _defineProperty(_ref3, " .pe-menu__content", {
    " .pe-list-tile__title": [__WEBPACK_IMPORTED_MODULE_3_polythene_css__["c" /* mixin */].ellipsis("none")]
  }), _ref3)];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    " .pe-menu__content": {
      "background-color": componentVars["color_" + tint + "_background"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes$1.component;

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_3_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
  var contentEl = state.el.querySelector("." + classes$1.content);
  var origin = attrs.origin || "top-left";
  var reposition = attrs.reposition === false ? false : true;
  var positionOffset = 0;
  if (reposition) {
    var firstItem = contentEl.querySelectorAll("." + classes$1.listTile)[0];
    var selectedItem = contentEl.querySelector("." + classes$1.selectedListTile);
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
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["a" /* show */])(_extends({}, attrs, {
    el: state.el,
    showClass: classes$1.visible
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
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["b" /* hide */])(_extends({}, attrs, {
    el: state.el,
    showClass: classes$1.visible
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
  return classes$1.width_n + size.toString().replace(".", "-");
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
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes$1.component, attrs.permanent ? classes$1.permanent : null, attrs.target ? classes$1.target : null, attrs.size ? widthClass(unifySize(attrs.size)) : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.class].join(" "),
    oncreate: function oncreate(_ref) {
      var dom = _ref.dom;

      state.el = dom;
      if (!attrs.permanent) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["g" /* subscribe */])("resize", update);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["g" /* subscribe */])("keydown", handleEscape);
        setTimeout(function () {
          activateDismissTap();
          showMenu(state, attrs);
        }, 0);
      }
      positionMenu(state, attrs);
    },
    onremove: function onremove() {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["f" /* unsubscribe */])("resize", update);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_polythene_core__["f" /* unsubscribe */])("keydown", handleEscape);
      if (!attrs.permanent) {
        deActivateDismissTap();
      }
    }
  });
  var content = __WEBPACK_IMPORTED_MODULE_0_mithril___default()("div", {
    class: classes$1.content,
    onclick: function onclick(e) {
      return e.preventDefault();
    },
    style: attrs.style
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
      class: classes$1.placeholder
    });
  }
};

/* unused harmony default export */ var _unused_webpack_default_export = (menu);


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_mithril_button__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_shadow__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_theme__ = __webpack_require__(2);
/* unused harmony export classes */
/* unused harmony export vars */







var classes = {
  component: "pe-button pe-text-button pe-raised-button"
};

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

var style = function style(scopes, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var activeBorder = componentVars["color_" + tint + "_active_border"] || normalBorder;
  var disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
  return [_defineProperty({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
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

var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"];
  var hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
  return [_defineProperty({}, scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(","), {
    ":not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
      backgroundColor: componentVars["color_" + tint + "_hover_background"],
      borderColor: hoverBorder
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
  noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, "dark"), // inside dark theme
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [color];
var selector = "." + classes.component.replace(/ /g, ".");

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_4_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var MAX_Z = 5;

var tapStart = void 0;
var tapEndAll = function tapEndAll() {};
var downButtons = [];

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["g" /* subscribe */])(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["j" /* touchEndEvent */], function () {
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
    if (animateOnTap && !__WEBPACK_IMPORTED_MODULE_3_polythene_core__["i" /* isTouch */]) {
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
  el.addEventListener(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["k" /* touchStartEvent */], tapStart);
};

var clearTapEvents = function clearTapEvents(el) {
  el.removeEventListener(__WEBPACK_IMPORTED_MODULE_3_polythene_core__["k" /* touchStartEvent */], tapStart);
};

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var state = vnode.state;
  var children = (attrs.children || vnode.children || []).filter(function (c) {
    return c !== void 0;
  });
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril_button__["a" /* default */], _extends({}, {
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

/* harmony default export */ __webpack_exports__["a"] = (raisedButton);


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_button__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_react_core__ = __webpack_require__(26);



var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Button = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_react_core__["b" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_0_polythene_button__["a" /* createProps */], __WEBPACK_IMPORTED_MODULE_0_polythene_button__["b" /* createContent */], "a", {
  focus: false,
  mouseover: false,
  inactive: false
});

var index = _extends(Button, { theme: __WEBPACK_IMPORTED_MODULE_0_polythene_button__["c" /* theme */] });

/* harmony default export */ __webpack_exports__["a"] = (index);


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(6);
  var warning = __webpack_require__(5);
  var ReactPropTypesSecret = __webpack_require__(27);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



// React 15.5 references this module, and assumes PropTypes are still callable in production.
// Therefore we re-export development-only version with all the PropTypes checks here.
// However if one is migrating to the `prop-types` npm library, they will go through the
// `index.js` entry point, and it will branch depending on the environment.
var factory = __webpack_require__(54);
module.exports = function(isValidElement) {
  // It is still allowed in 15.5.
  var throwOnDirectAccess = false;
  return factory(isValidElement, throwOnDirectAccess);
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(15);
var invariant = __webpack_require__(6);
var warning = __webpack_require__(5);

var ReactPropTypesSecret = __webpack_require__(27);
var checkPropTypes = __webpack_require__(52);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var React = __webpack_require__(32);

var parseTag = __webpack_require__(56);

module.exports = h;

function h(componentOrTag, properties, children) {
  // If a child array or text node are passed as the second argument, shift them
  if (!children && isChildren(properties)) {
    children = properties;
    properties = {};
  } else if (arguments.length === 2) {
    // If no children were passed, we don't want to pass "undefined"
    // and potentially overwrite the `children` prop
    children = [];
  }

  properties = properties ? Object.assign({}, properties) : {};

  // Supported nested dataset attributes
  if (properties.dataset) {
    Object.keys(properties.dataset).forEach(function unnest(attrName) {
      var dashedAttr = attrName.replace(/([a-z])([A-Z])/, function dash(match) {
        return match[0] + '-' + match[1].toLowerCase();
      });
      properties['data-' + dashedAttr] = properties.dataset[attrName];
    });
  }

  // Support nested attributes
  if (properties.attributes) {
    Object.keys(properties.attributes).forEach(function unnest(attrName) {
      properties[attrName] = properties.attributes[attrName];
    });
  }

  // When a selector, parse the tag name and fill out the properties object
  if (typeof componentOrTag === 'string') {
    componentOrTag = parseTag(componentOrTag, properties);
  }

  // Create the element
  var args = [componentOrTag, properties].concat(children);
  return React.createElement.apply(React, args);
}

function isChildren(x) {
  return typeof x === 'string' || typeof x === 'number' || Array.isArray(x);
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* eslint-disable complexity, max-statements */


var classIdSplit = /([\.#]?[a-zA-Z0-9_:-]+)/;
var notClassId = /^\.|#/;

module.exports = parseTag;

function parseTag(tag, props) {
  if (!tag) {
    return 'div';
  }

  var noId = !('id' in props);

  var tagParts = tag.split(classIdSplit);
  var tagName = null;

  if (notClassId.test(tagParts[1])) {
    tagName = 'div';
  }

  var classes;
  var part;
  var type;
  var i;
  for (i = 0; i < tagParts.length; i++) {
    part = tagParts[i];

    if (!part) {
      continue;
    }

    type = part.charAt(0);

    if (!tagName) {
      tagName = part;
    } else if (type === '.') {
      classes = classes || [];
      classes.push(part.substring(1, part.length));
    } else if (type === '#' && noId) {
      props.id = part.substring(1, part.length);
    }
  }

  if (classes) {
    if (props.className) {
      classes.push(props.className);
    }

    props.className = classes.join(' ');
  }

  return tagName ? tagName.toLowerCase() : 'div';
}


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};

module.exports = KeyEscapeUtils;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var _prodInvariant = __webpack_require__(8);

var invariant = __webpack_require__(6);

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler
};

module.exports = PooledClass;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(11);

var ReactChildren = __webpack_require__(60);
var ReactComponent = __webpack_require__(17);
var ReactPureComponent = __webpack_require__(65);
var ReactClass = __webpack_require__(61);
var ReactDOMFactories = __webpack_require__(62);
var ReactElement = __webpack_require__(7);
var ReactPropTypes = __webpack_require__(63);
var ReactVersion = __webpack_require__(66);

var onlyChild = __webpack_require__(68);
var warning = __webpack_require__(5);

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;

if (process.env.NODE_ENV !== 'production') {
  var canDefineProperty = __webpack_require__(13);
  var ReactElementValidator = __webpack_require__(29);
  var didWarnPropTypesDeprecated = false;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var __spread = _assign;

if (process.env.NODE_ENV !== 'production') {
  var warned = false;
  __spread = function () {
    process.env.NODE_ENV !== 'production' ? warning(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
    warned = true;
    return _assign.apply(null, arguments);
  };
}

var React = {

  // Modern

  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
    only: onlyChild
  },

  Component: ReactComponent,
  PureComponent: ReactPureComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement.isValidElement,

  // Classic

  PropTypes: ReactPropTypes,
  createClass: ReactClass.createClass,
  createFactory: createFactory,
  createMixin: function (mixin) {
    // Currently a noop. Will be used to validate and trace mixins.
    return mixin;
  },

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories,

  version: ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread
};

// TODO: Fix tests so that this deprecation warning doesn't cause failures.
if (process.env.NODE_ENV !== 'production') {
  if (canDefineProperty) {
    Object.defineProperty(React, 'PropTypes', {
      get: function () {
        process.env.NODE_ENV !== 'production' ? warning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated. Use ' + 'the prop-types package from npm instead.') : void 0;
        didWarnPropTypesDeprecated = true;
        return ReactPropTypes;
      }
    });
  }
}

module.exports = React;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var PooledClass = __webpack_require__(58);
var ReactElement = __webpack_require__(7);

var emptyFunction = __webpack_require__(15);
var traverseAllChildren = __webpack_require__(69);

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement.isValidElement(mappedChild)) {
      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

module.exports = ReactChildren;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(8),
    _assign = __webpack_require__(11);

var ReactComponent = __webpack_require__(17);
var ReactElement = __webpack_require__(7);
var ReactPropTypeLocationNames = __webpack_require__(30);
var ReactNoopUpdateQueue = __webpack_require__(19);

var emptyObject = __webpack_require__(16);
var invariant = __webpack_require__(6);
var warning = __webpack_require__(5);

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

/**
 * Policies that describe methods in `ReactClassInterface`.
 */


var injectedMixins = [];

/**
 * Composite components are higher-level components that compose other composite
 * or host components.
 *
 * To create a new type of `ReactClass`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactClassInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will be available on the prototype.
 *
 * @interface ReactClassInterface
 * @internal
 */
var ReactClassInterface = {

  /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */
  mixins: 'DEFINE_MANY',

  /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */
  statics: 'DEFINE_MANY',

  /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */
  propTypes: 'DEFINE_MANY',

  /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */
  contextTypes: 'DEFINE_MANY',

  /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */
  childContextTypes: 'DEFINE_MANY',

  // ==== Definition methods ====

  /**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */
  getDefaultProps: 'DEFINE_MANY_MERGED',

  /**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */
  getInitialState: 'DEFINE_MANY_MERGED',

  /**
   * @return {object}
   * @optional
   */
  getChildContext: 'DEFINE_MANY_MERGED',

  /**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @required
   */
  render: 'DEFINE_ONCE',

  // ==== Delegate methods ====

  /**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */
  componentWillMount: 'DEFINE_MANY',

  /**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidMount: 'DEFINE_MANY',

  /**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */
  componentWillReceiveProps: 'DEFINE_MANY',

  /**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */
  shouldComponentUpdate: 'DEFINE_ONCE',

  /**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */
  componentWillUpdate: 'DEFINE_MANY',

  /**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidUpdate: 'DEFINE_MANY',

  /**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */
  componentWillUnmount: 'DEFINE_MANY',

  // ==== Advanced methods ====

  /**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */
  updateComponent: 'OVERRIDE_BASE'

};

/**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */
var RESERVED_SPEC_KEYS = {
  displayName: function (Constructor, displayName) {
    Constructor.displayName = displayName;
  },
  mixins: function (Constructor, mixins) {
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        mixSpecIntoComponent(Constructor, mixins[i]);
      }
    }
  },
  childContextTypes: function (Constructor, childContextTypes) {
    if (process.env.NODE_ENV !== 'production') {
      validateTypeDef(Constructor, childContextTypes, 'childContext');
    }
    Constructor.childContextTypes = _assign({}, Constructor.childContextTypes, childContextTypes);
  },
  contextTypes: function (Constructor, contextTypes) {
    if (process.env.NODE_ENV !== 'production') {
      validateTypeDef(Constructor, contextTypes, 'context');
    }
    Constructor.contextTypes = _assign({}, Constructor.contextTypes, contextTypes);
  },
  /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */
  getDefaultProps: function (Constructor, getDefaultProps) {
    if (Constructor.getDefaultProps) {
      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, getDefaultProps);
    } else {
      Constructor.getDefaultProps = getDefaultProps;
    }
  },
  propTypes: function (Constructor, propTypes) {
    if (process.env.NODE_ENV !== 'production') {
      validateTypeDef(Constructor, propTypes, 'prop');
    }
    Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
  },
  statics: function (Constructor, statics) {
    mixStaticSpecIntoComponent(Constructor, statics);
  },
  autobind: function () {} };

function validateTypeDef(Constructor, typeDef, location) {
  for (var propName in typeDef) {
    if (typeDef.hasOwnProperty(propName)) {
      // use a warning instead of an invariant so components
      // don't show up in prod but only in __DEV__
      process.env.NODE_ENV !== 'production' ? warning(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames[location], propName) : void 0;
    }
  }
}

function validateMethodOverride(isAlreadyDefined, name) {
  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

  // Disallow overriding of base class methods unless explicitly allowed.
  if (ReactClassMixin.hasOwnProperty(name)) {
    !(specPolicy === 'OVERRIDE_BASE') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : _prodInvariant('73', name) : void 0;
  }

  // Disallow defining methods more than once unless explicitly allowed.
  if (isAlreadyDefined) {
    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('74', name) : void 0;
  }
}

/**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classes.
 */
function mixSpecIntoComponent(Constructor, spec) {
  if (!spec) {
    if (process.env.NODE_ENV !== 'production') {
      var typeofSpec = typeof spec;
      var isMixinValid = typeofSpec === 'object' && spec !== null;

      process.env.NODE_ENV !== 'production' ? warning(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
    }

    return;
  }

  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : _prodInvariant('75') : void 0;
  !!ReactElement.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : _prodInvariant('76') : void 0;

  var proto = Constructor.prototype;
  var autoBindPairs = proto.__reactAutoBindPairs;

  // By handling mixins before any other properties, we ensure the same
  // chaining order is applied to methods with DEFINE_MANY policy, whether
  // mixins are listed before or after these methods in the spec.
  if (spec.hasOwnProperty(MIXINS_KEY)) {
    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
  }

  for (var name in spec) {
    if (!spec.hasOwnProperty(name)) {
      continue;
    }

    if (name === MIXINS_KEY) {
      // We have already handled mixins in a special case above.
      continue;
    }

    var property = spec[name];
    var isAlreadyDefined = proto.hasOwnProperty(name);
    validateMethodOverride(isAlreadyDefined, name);

    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
      RESERVED_SPEC_KEYS[name](Constructor, property);
    } else {
      // Setup methods on prototype:
      // The following member methods should not be automatically bound:
      // 1. Expected ReactClass methods (in the "interface").
      // 2. Overridden methods (that were mixed in).
      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
      var isFunction = typeof property === 'function';
      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

      if (shouldAutoBind) {
        autoBindPairs.push(name, property);
        proto[name] = property;
      } else {
        if (isAlreadyDefined) {
          var specPolicy = ReactClassInterface[name];

          // These cases should already be caught by validateMethodOverride.
          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : _prodInvariant('77', specPolicy, name) : void 0;

          // For methods which are defined more than once, call the existing
          // methods before calling the new property, merging if appropriate.
          if (specPolicy === 'DEFINE_MANY_MERGED') {
            proto[name] = createMergedResultFunction(proto[name], property);
          } else if (specPolicy === 'DEFINE_MANY') {
            proto[name] = createChainedFunction(proto[name], property);
          }
        } else {
          proto[name] = property;
          if (process.env.NODE_ENV !== 'production') {
            // Add verbose displayName to the function, which helps when looking
            // at profiling tools.
            if (typeof property === 'function' && spec.displayName) {
              proto[name].displayName = spec.displayName + '_' + name;
            }
          }
        }
      }
    }
  }
}

function mixStaticSpecIntoComponent(Constructor, statics) {
  if (!statics) {
    return;
  }
  for (var name in statics) {
    var property = statics[name];
    if (!statics.hasOwnProperty(name)) {
      continue;
    }

    var isReserved = name in RESERVED_SPEC_KEYS;
    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : _prodInvariant('78', name) : void 0;

    var isInherited = name in Constructor;
    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : _prodInvariant('79', name) : void 0;
    Constructor[name] = property;
  }
}

/**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */
function mergeIntoWithNoDuplicateKeys(one, two) {
  !(one && two && typeof one === 'object' && typeof two === 'object') ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : _prodInvariant('80') : void 0;

  for (var key in two) {
    if (two.hasOwnProperty(key)) {
      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : _prodInvariant('81', key) : void 0;
      one[key] = two[key];
    }
  }
  return one;
}

/**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createMergedResultFunction(one, two) {
  return function mergedResult() {
    var a = one.apply(this, arguments);
    var b = two.apply(this, arguments);
    if (a == null) {
      return b;
    } else if (b == null) {
      return a;
    }
    var c = {};
    mergeIntoWithNoDuplicateKeys(c, a);
    mergeIntoWithNoDuplicateKeys(c, b);
    return c;
  };
}

/**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createChainedFunction(one, two) {
  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments);
  };
}

/**
 * Binds a method to the component.
 *
 * @param {object} component Component whose method is going to be bound.
 * @param {function} method Method to be bound.
 * @return {function} The bound method.
 */
function bindAutoBindMethod(component, method) {
  var boundMethod = method.bind(component);
  if (process.env.NODE_ENV !== 'production') {
    boundMethod.__reactBoundContext = component;
    boundMethod.__reactBoundMethod = method;
    boundMethod.__reactBoundArguments = null;
    var componentName = component.constructor.displayName;
    var _bind = boundMethod.bind;
    boundMethod.bind = function (newThis) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // User is trying to bind() an autobound method; we effectively will
      // ignore the value of "this" that the user is trying to use, so
      // let's warn.
      if (newThis !== component && newThis !== null) {
        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
      } else if (!args.length) {
        process.env.NODE_ENV !== 'production' ? warning(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
        return boundMethod;
      }
      var reboundMethod = _bind.apply(boundMethod, arguments);
      reboundMethod.__reactBoundContext = component;
      reboundMethod.__reactBoundMethod = method;
      reboundMethod.__reactBoundArguments = args;
      return reboundMethod;
    };
  }
  return boundMethod;
}

/**
 * Binds all auto-bound methods in a component.
 *
 * @param {object} component Component whose method is going to be bound.
 */
function bindAutoBindMethods(component) {
  var pairs = component.__reactAutoBindPairs;
  for (var i = 0; i < pairs.length; i += 2) {
    var autoBindKey = pairs[i];
    var method = pairs[i + 1];
    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

/**
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */
var ReactClassMixin = {

  /**
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */
  replaceState: function (newState, callback) {
    this.updater.enqueueReplaceState(this, newState);
    if (callback) {
      this.updater.enqueueCallback(this, callback, 'replaceState');
    }
  },

  /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function () {
    return this.updater.isMounted(this);
  }
};

var ReactClassComponent = function () {};
_assign(ReactClassComponent.prototype, ReactComponent.prototype, ReactClassMixin);

var didWarnDeprecated = false;

/**
 * Module for creating composite components.
 *
 * @class ReactClass
 */
var ReactClass = {

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  createClass: function (spec) {
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(didWarnDeprecated, '%s: React.createClass is deprecated and will be removed in version 16. ' + 'Use plain JavaScript classes instead. If you\'re not yet ready to ' + 'migrate, create-react-class is available on npm as a ' + 'drop-in replacement.', spec && spec.displayName || 'A Component') : void 0;
      didWarnDeprecated = true;
    }

    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function (props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (process.env.NODE_ENV !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (initialState === undefined && this.getInitialState._isMockFunction) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      !(typeof initialState === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : _prodInvariant('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, spec);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (process.env.NODE_ENV !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant(false, 'createClass(...): Class specification must implement a `render` method.') : _prodInvariant('83') : void 0;

    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
      process.env.NODE_ENV !== 'production' ? warning(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  },

  injection: {
    injectMixin: function (mixin) {
      injectedMixins.push(mixin);
    }
  }

};

module.exports = ReactClass;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var ReactElement = __webpack_require__(7);

/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var createDOMFactory = ReactElement.createFactory;
if (process.env.NODE_ENV !== 'production') {
  var ReactElementValidator = __webpack_require__(29);
  createDOMFactory = ReactElementValidator.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),

  // SVG
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};

module.exports = ReactDOMFactories;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _require = __webpack_require__(7),
    isValidElement = _require.isValidElement;

var factory = __webpack_require__(53);

module.exports = factory(isValidElement);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _assign = __webpack_require__(11);

var ReactComponent = __webpack_require__(17);
var ReactNoopUpdateQueue = __webpack_require__(19);

var emptyObject = __webpack_require__(16);

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
_assign(ReactPureComponent.prototype, ReactComponent.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;

module.exports = ReactPureComponent;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



module.exports = '15.5.4';

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(8);

var ReactPropTypeLocationNames = __webpack_require__(30);
var ReactPropTypesSecret = __webpack_require__(64);

var invariant = __webpack_require__(6);
var warning = __webpack_require__(5);

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = __webpack_require__(18);
}

var loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
      } catch (ex) {
        error = ex;
      }
      process.env.NODE_ENV !== 'production' ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if (process.env.NODE_ENV !== 'production') {
          if (!ReactComponentTreeHook) {
            ReactComponentTreeHook = __webpack_require__(18);
          }
          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
          }
        }

        process.env.NODE_ENV !== 'production' ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
      }
    }
  }
}

module.exports = checkReactTypeSpec;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */


var _prodInvariant = __webpack_require__(8);

var ReactElement = __webpack_require__(7);

var invariant = __webpack_require__(6);

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
  return children;
}

module.exports = onlyChild;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var _prodInvariant = __webpack_require__(8);

var ReactCurrentOwner = __webpack_require__(12);
var REACT_ELEMENT_TYPE = __webpack_require__(28);

var getIteratorFn = __webpack_require__(31);
var invariant = __webpack_require__(6);
var KeyEscapeUtils = __webpack_require__(57);
var warning = __webpack_require__(5);

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (process.env.NODE_ENV !== 'production') {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          process.env.NODE_ENV !== 'production' ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if (process.env.NODE_ENV !== 'production') {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
       true ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

module.exports = traverseAllChildren;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_notification__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_theme__ = __webpack_require__(2);
/* unused harmony export vars */
/* unused harmony export classes */





var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes$1 = _extends$2({}, __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["b" /* classes */], {
  component: "pe-notification pe-snackbar",

  // elements
  holder: "pe-snackbar__holder",
  placeholder: "pe-snackbar__placeholder",

  // states
  open: "pe-snackbar--open"
});

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba = __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].rgba;

var vars$2 = _extends$3({}, __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["c" /* vars */], {
  border_radius: 0,
  tablet_min_width: 288,
  tablet_max_width: 568,
  min_height: 0,

  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].color_dark_background)
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tabletStyle = function tabletStyle(componentVars) {
  return {
    width: "100%",
    minWidth: componentVars.tablet_min_width + "px",
    maxWidth: componentVars.tablet_max_width + "px",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].unit_block_border_radius + "px",
    borderTopRightRadius: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].unit_block_border_radius + "px",

    ".pe-notification--horizontal": {
      " .pe-notification__title": {
        paddingRight: "30px"
      }
    }
  };
};

var layout = (function (selector, componentVars) {
  var _ref2;

  return [(_ref2 = {}, _defineProperty(_ref2, selector, {
    minHeight: componentVars.min_height
  }), _defineProperty(_ref2, "@media (min-width: " + __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].breakpoint_small_handset_landscape + "px)", _defineProperty({}, selector, tabletStyle(componentVars))), _ref2)];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: componentVars["color_" + tint + "_text"],
    background: componentVars["color_" + tint + "_background"]
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var holderLayout = (function (selector) {
  return [_defineProperty$2({}, selector, [__WEBPACK_IMPORTED_MODULE_2_polythene_css__["a" /* flex */].layoutCenterCenter, {
    top: "auto",
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: __WEBPACK_IMPORTED_MODULE_3_polythene_theme__["a" /* vars */].z_notification,
    pointerEvents: "none",

    ".pe-multiple--screen": {
      position: "fixed"
    },
    ".pe-multiple--container": {
      position: "absolute"
    }
  }])];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes$1.component.replace(/ /g, ".");

var holderFns = [holderLayout];
var holderSelector = "." + classes$1.holder.replace(/ /g, ".");

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$2, customVars), fns), __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, holderSelector], _extends$1({}, vars$2, customVars), holderFns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars$2, fns);
__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([holderSelector], vars$2, holderFns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var instance$1 = _extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_notification__["d" /* instance */], {
  theme: customTheme // accepts (selector, vars)
});

var show = function show(el, opts) {
  var height = el.getBoundingClientRect().height;
  return {
    el: el,
    showDuration: opts.showDuration || .4,
    showDelay: opts.showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    show: function show() {
      return el.style.transform = "translate3d(0, " + 0 + "px, 0)";
    }
  };
};

var hide = function hide(el, opts) {
  var height = el.getBoundingClientRect().height;
  return {
    el: el,
    hideDuration: opts.hideDuration || .4,
    hideDelay: opts.hideDelay || 0,
    hide: function hide() {
      return el.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    afterHide: function afterHide() {
      return el.style.transform = "translate3d(0, " + 0 + "px, 0)";
    }
  };
};

var transitions = {
  show: show,
  hide: hide
};

var snackbar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["d" /* multiple */])({
  instance: instance$1,
  transitions: transitions,
  queue: true,
  defaultId: "default_snackbar",
  class: classes$1.component,
  element: "." + classes$1.holder.replace(/ /g, "."),
  placeholder: "span." + classes$1.placeholder.replace(/ /g, "."),
  bodyShowClass: classes$1.open
});

/* harmony default export */ __webpack_exports__["a"] = (snackbar);


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_css__ = __webpack_require__(3);
/* unused harmony export classes */
/* unused harmony export vars */




var classes = {
  component: "pe-svg"
};

var vars = {
  color_light: "currentcolor",
  color_dark: "currentcolor"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector) {
  return [_defineProperty({}, selector, {
    lineHeight: 1,

    " svg": {
      width: "inherit",
      height: "inherit"
    }
  })];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    color: "inherit",

    " svg": {
      color: "inherit",

      " path, rect, circle, polygon": {
        "&:not([fill=none])": {
          fill: componentVars["color_" + tint] || "currentcolor"
        }
      }
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_2_polythene_css__["b" /* styler */].generateStyles([selector], vars, fns);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var view = function view(vnode) {
  var attrs = vnode.attrs;
  var element = attrs.element || "div";
  var props = _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    class: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.class].join(" ")
  });
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  return __WEBPACK_IMPORTED_MODULE_0_mithril___default()(element, props, [attrs.before, content, attrs.after]);
};

var svg = {
  theme: customTheme, // accepts (selector, vars)
  view: view
};

/* harmony default export */ __webpack_exports__["a"] = (svg);


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export easing */
/* unused harmony export scrollTo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timer; });
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
      startTime = void 0,
      remaining = delaySeconds * 1000;

  var stop = function stop() {
    return window.clearTimeout(timerId);
  };

  var pause = function pause() {
    window.clearTimeout(timerId);
    remaining -= new Date() - startTime;
  };

  var start = function start() {
    startTime = new Date();
    window.clearTimeout(timerId);
    timerId = window.setTimeout(callback, remaining);
  };

  start();

  return {
    start: start,
    pause: pause,
    resume: start,
    stop: stop
  };
};




/***/ }),
/* 73 */,
/* 74 */,
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_core__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_mithril_button__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_fab__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_icon__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_icon_button__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_list__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_polythene_list_tile__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_polythene_react_core__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_polythene_react_button__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mithrilTests; });
/* unused harmony export reactTests */










var tests = (function (_ref) {
  var button$$1 = _ref.button;

  button$$1.theme(".tests-button-themed-button", {
    color_light_background: "#2196F3",
    color_dark_background: "#2196F3",
    color_light_text: "#fff"
  });

  button$$1.theme(".blue-on-dark-button", {
    color_dark_text: "#2196F3"
  });

  button$$1.theme(".tests-button-bordered-button", {
    color_light_text: "#673ab7",
    color_light_border: "#673ab7",
    color_dark_text: "yellow",
    color_dark_border: "yellow"
  });
  return [{
    name: "Option: label",
    component: button$$1,
    attrs: {
      label: "Label"
    }
  }, {
    name: "Themed button: (option: borders)",
    component: button$$1,
    attrs: {
      label: "Borders",
      className: "tests-button-bordered-button",
      borders: true
    }
  }, {
    name: "Themed button (colors)",
    component: button$$1,
    attrs: {
      label: "Themed button",
      className: "tests-button-themed-button"
    }
  }, {
    name: "Option: style (colors)",
    component: button$$1,
    attrs: {
      label: "Styled",
      style: {
        backgroundColor: "#EF6C00",
        color: "#fff"
      }
    }
  }, {
    name: "Option: wash (false)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "No wash",
      wash: false
    }
  }, {
    name: "Option: ink (false)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "No ink",
      ink: false
    }
  }, {
    name: "Option: disabled (true)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "Disabled",
      disabled: true
    }
  }, {
    name: "Option: disabled (false)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "Not disabled",
      disabled: false
    }
  }, {
    name: "Option: selected",
    component: button$$1,
    attrs: {
      label: "Selected",
      selected: true
    }
  }, {
    name: "Option: formaction",
    component: button$$1,
    attrs: {
      label: "Form action",
      formaction: "http://polythene.js.org"
    }
  }, {
    name: "Option: url (without oncreate)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "Go to /shadow",
      url: {
        href: "/shadow"
      }
    }
  }, {
    name: "Option: inactive (false)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "Not inactive",
      inactive: false
    }
  }, {
    name: "Option: inactive (true)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "Inactive",
      inactive: true
    }
  }, {
    name: "Option: inactivate (2)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "Inactivated for 2s",
      inactivate: 2
    }
  },

  // Dark tone class

  {
    name: "Option: label -- dark theme class",
    className: "pe-dark-tone",
    component: button$$1,
    attrs: {
      label: "Label"
    }
  }, {
    name: "Option: tone \"dark\" -- dark theme class",
    className: "test-dark-theme",
    component: button$$1,
    attrs: {
      label: "Label",
      tone: "dark"
    }
  }, {
    name: "Themed button -- dark theme class",
    className: "pe-dark-tone",
    component: button$$1,
    attrs: {
      label: "Themed button",
      className: "tests-button-themed-button"
    }
  }, {
    name: "Themed button blue on dark -- dark theme class",
    className: "pe-dark-tone",
    component: button$$1,
    attrs: {
      label: "Blue on dark button",
      className: "blue-on-dark-button"
    }
  }, {
    name: "Themed button: (option: borders) -- dark theme class",
    className: "pe-dark-tone",
    component: button$$1,
    attrs: {
      label: "Borders dark theme",
      className: "tests-button-bordered-button",
      borders: true
    }
  }];
});

var mithrilTests$1 = function mithrilTests(_ref) {
  var button$$1 = _ref.button,
      h = _ref.renderer;

  return [{
    name: "Dark tone class + light theme class",
    class: "pe-dark-tone",
    component: {
      view: function view() {
        return h(".pe-light-tone", {
          style: { background: "#fff" }
        }, [h(button$$1, {
          label: "Normal"
        }), h(button$$1, {
          label: "Disabled",
          disabled: true
        }), h(button$$1, {
          label: "Theme",
          class: "tests-button-themed-button"
        })]);
      }
    }
  }, {
    name: "Dark tone class + light tone",
    class: "test-dark-theme",
    component: {
      view: function view() {
        return h("div", {
          style: { background: "#fff" }
        }, [h(button$$1, {
          label: "Normal",
          tone: "light"
        }), h(button$$1, {
          label: "Disabled",
          disabled: true,
          tone: "light"
        }), h(button$$1, {
          label: "Theme",
          class: "tests-button-themed-button",
          tone: "light"
        })]);
      }
    }
  }, {
    name: "Option: url (with oncreate)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "Go to /#/shadow",
      url: {
        href: "/shadow",
        oncreate: h.route.link
      }
    }
  }, {
    name: "onbeforeupdate",
    interactive: true,
    exclude: true,
    component: {
      oninit: function oninit(vnode) {
        return vnode.state.updated = 0;
      },
      view: function view(vnode) {
        return [h("div", "Updated: " + vnode.state.updated), h(button$$1, {
          label: "Button",
          onbeforeupdate: function onbeforeupdate() {
            return vnode.state.updated++;
          }
        })];
      }
    }
  }, {
    name: "Option: events (onclick)",
    interactive: true,
    exclude: true,
    component: {
      oninit: function oninit(vnode) {
        return vnode.state.clicked = 0;
      },
      view: function view(vnode) {
        return [h("div", "onclick called: " + vnode.state.clicked), h(button$$1, {
          label: "Button",
          events: {
            onclick: function onclick() {
              return vnode.state.clicked++;
            }
          }
        })];
      }
    }
  }, {
    name: "Key down (after having focus) results in click",
    interactive: true,
    exclude: true,
    component: {
      oninit: function oninit(vnode) {
        return vnode.state.clickCount = 0;
      },
      view: function view(vnode) {
        return [h("div", "onclick called: " + vnode.state.clickCount), h(button$$1, {
          label: "Button",
          events: {
            onclick: function onclick() {
              return vnode.state.clickCount++;
            }
          }
        })];
      }
    }
  }];
};

var testsMithril = [].concat(tests({ button: __WEBPACK_IMPORTED_MODULE_1_polythene_mithril_button__["a" /* default */], renderer: __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_core__["a" /* renderer */] })).concat(mithrilTests$1({ button: __WEBPACK_IMPORTED_MODULE_1_polythene_mithril_button__["a" /* default */], renderer: __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_core__["a" /* renderer */] }));

// import iconAlarm from "mmsvg/google/msvg/action/alarm-add";

var genericTests = (function (_ref) {
  var button$$1 = _ref.button,
      fab$$1 = _ref.fab,
      icon$$1 = _ref.icon,
      iconButton$$1 = _ref.iconButton,
      list$$1 = _ref.list,
      listTile$$1 = _ref.listTile;

  button$$1.theme(".tests-custom-theme-blue-button", {
    color_light_background: "#2196F3",
    color_light_text: "#fff"
  });

  button$$1.theme(".tests-custom-theme-red-button", {
    color_light_background: "#ff0000",
    color_light_text: "#fff"
  });

  icon$$1.theme(".tests-custom-theme-red-icon", {
    color_light: "red"
  });

  fab$$1.theme(".tests-custom-theme-red-fab", {
    color_light_background: "#ff0000",
    color_light: "#fff"
  });

  iconButton$$1.theme(".tests-custom-theme-large-icon-button", {
    padding: 50,
    color_background: "#fff"
  });

  list$$1.theme(".tests-custom-theme-blue-list", {
    color_light_border: "#2196F3"
  });

  listTile$$1.theme(".tests-custom-theme-red-list-tile", {
    color_light_title: "red"
  });

  return [{
    name: "Theme with style variables: button (should be blue)",
    component: button$$1,
    attrs: {
      className: "tests-custom-theme-blue-button",
      label: "Blue button"
    }
  }, {
    name: "Theme with style variables: button (should be red)",
    component: button$$1,
    attrs: {
      className: "tests-custom-theme-red-button",
      label: "Red button"
    }
  }, {
    name: "No theme: normal button",
    component: button$$1,
    attrs: {
      label: "Unaffected button"
    }
  }];
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
Testing 2 theming methods:
1. Style variables
2. Deriving components
*/

var h = __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_core__["a" /* renderer */];

// [2]
var secondaryButton = {
  theme: __WEBPACK_IMPORTED_MODULE_1_polythene_mithril_button__["a" /* default */].theme,
  view: function view(vnode) {
    return h(__WEBPACK_IMPORTED_MODULE_1_polythene_mithril_button__["a" /* default */], _extends({
      className: "tests-custom-theme-secondary-button",
      borders: true
    }, vnode.attrs));
  }
};
secondaryButton.theme(".tests-custom-theme-secondary-button", {
  color_light_border: "#ddd",
  color_light_background: "#fff"
});

var mithrilTests$2 = function mithrilTests() {
  return [{
    name: "Theme with deriving component: button (should be bordered with white background)",
    component: secondaryButton,
    attrs: {
      label: "Bordered button"
    }
  }];
};

var testsMithril$1 = [].concat(genericTests({ button: __WEBPACK_IMPORTED_MODULE_1_polythene_mithril_button__["a" /* default */], fab: __WEBPACK_IMPORTED_MODULE_2_polythene_fab__["a" /* default */], icon: __WEBPACK_IMPORTED_MODULE_3_polythene_icon__["a" /* default */], iconButton: __WEBPACK_IMPORTED_MODULE_4_polythene_icon_button__["a" /* default */], list: __WEBPACK_IMPORTED_MODULE_5_polythene_list__["a" /* default */], listTile: __WEBPACK_IMPORTED_MODULE_6_polythene_list_tile__["a" /* default */], renderer: __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_core__["a" /* renderer */] })).concat(mithrilTests$2());



var fromMithrilTests = Object.freeze({
	button: testsMithril,
	theme: testsMithril$1
});

var testsReact = tests({ button: __WEBPACK_IMPORTED_MODULE_8_polythene_react_button__["a" /* default */], renderer: __WEBPACK_IMPORTED_MODULE_7_polythene_react_core__["a" /* renderer */] });

// export { default as theme } from "./theme/tests-react";

var fromReactTests = Object.freeze({
	button: testsReact
});

var mithrilTests = fromMithrilTests;

var reactTests = fromReactTests;




/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_theme__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return button; });




var baseClass = "pe-button";

var classes = {
  base: baseClass,
  component: baseClass + " pe-text-button",

  // elements
  content: "pe-button__content",
  focus: "pe-button__focus",
  label: "pe-button__label",
  wash: "pe-button__wash",

  // states
  borders: "pe-button--borders",
  disabled: "pe-button--disabled",
  focused: "pe-button--focus",
  inactive: "pe-button--inactive",
  selected: "pe-button--selected"
};

var rgba = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].rgba;
var touch_height = __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].unit_touch_height;
var height = 36;

var vars$1 = {
  margin_h: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].grid_unit,
  border_radius: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].unit_item_border_radius,
  font_size: 14,
  font_weight: 500,
  outer_padding_v: (touch_height - height) / 2,
  padding_h: 2 * __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].grid_unit,
  padding_v: 11,
  min_width: 8 * __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].grid_unit_component,
  text_transform: "uppercase",
  border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border

  color_light_background: "transparent",
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_active_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_background_active),
  color_light_disabled_background: "transparent",
  color_light_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_text_disabled),

  // border colors may be set in theme; disabled by default
  // color_light_border:              "transparent", // only specify this variable to get all 4 states
  // color_light_hover_border:        "transparent",
  // color_light_active_border:       "transparent",
  // color_light_disabled_border:     "transparent",

  color_dark_background: "transparent",
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_active_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_dark_background_active),
  color_dark_disabled_background: "transparent",
  color_dark_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_dark_text_disabled)

};

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var baseLayout = (function (selector) {
  return [_defineProperty$1({}, selector, {
    userSelect: "none",
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

    " .pe-button__label": [__WEBPACK_IMPORTED_MODULE_1_polythene_css__["c" /* mixin */].fontSmoothing(), {
      position: "relative",
      display: "block",
      borderRadius: "inherit",
      pointerEvents: "none"
    }],

    " .pe-button__wash, .pe-button__focus": [__WEBPACK_IMPORTED_MODULE_1_polythene_css__["c" /* mixin */].defaultTransition("background-color"), __WEBPACK_IMPORTED_MODULE_1_polythene_css__["c" /* mixin */].fit(), {
      borderRadius: "inherit",
      pointerEvents: "none"
    }],

    " .pe-button__focus": {
      opacity: 0
    },

    " .pe-button__wash": {
      zIndex: 0
    }
  })];
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty$2({}, selector, [{
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
      " .pe-button__wash, pe-button__focus, .pe-ripple": __WEBPACK_IMPORTED_MODULE_1_polythene_css__["c" /* mixin */].fit(-1),

      " .pe-button__content": {
        borderStyle: "solid",
        borderWidth: "1px"
      },
      " .pe-button__label": {
        padding: componentVars.padding_v - 1 + "px 0"
      }
    }
  }])];
});

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var activeBorder = componentVars["color_" + tint + "_active_border"] || normalBorder;
  var disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
  return [_defineProperty$3({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
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

var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, tint) {
  var normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  var hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
  return [_defineProperty$3({}, scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(","), {
    ":not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
      backgroundColor: componentVars["color_" + tint + "_hover_background"],
      borderColor: hoverBorder
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
  noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, "dark"), // inside dark theme
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, "light")];
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var baseSelector = "." + classes.base;
var selector = "." + classes.component.replace(/ /g, ".");

var customTheme = function customTheme(customSelector, customVars) {
  return __WEBPACK_IMPORTED_MODULE_1_polythene_css__["b" /* styler */].generateStyles([customSelector, selector], _extends$1({}, vars$1, customVars), fns);
};

__WEBPACK_IMPORTED_MODULE_1_polythene_css__["b" /* styler */].generateStyles([baseSelector], vars$1, [baseLayout]);
__WEBPACK_IMPORTED_MODULE_1_polythene_css__["b" /* styler */].generateStyles([selector], vars$1, fns);

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var theme = customTheme;

var createProps = function createProps(vnode, _ref) {
  var _ref2;

  var updateState = _ref.updateState,
      k = _ref.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var disabled = attrs.disabled;
  var inactive = attrs.inactive || state.inactive;
  var onClickHandler = attrs.events && attrs.events.onclick;
  var handleInactivate = function handleInactivate() {
    return updateState("inactive", true), setTimeout(function () {
      return updateState("inactive", false);
    }, attrs.inactivate * 1000);
  };
  return _extends({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs, { add: ["formaction", "type"] }), {
    className: [attrs.parentClass || classes.component, attrs.selected ? classes.selected : null, disabled ? classes.disabled : null, inactive ? classes.inactive : null, attrs.borders ? classes.borders : null, state.focus ? classes.focused : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, inactive ? null : (_ref2 = {}, _defineProperty(_ref2, k.tabindex, disabled || inactive ? -1 : attrs[k.tabindex] || 0), _defineProperty(_ref2, k.onclick, function (e) {
    return attrs.inactivate !== undefined && handleInactivate(), onClickHandler && onClickHandler(e), true;
  }), _defineProperty(_ref2, k.onfocus, function () {
    return updateState("focus", !state.mouseover);
  }), _defineProperty(_ref2, k.onblur, function () {
    return updateState("focus", false);
  }), _defineProperty(_ref2, k.onmouseover, function () {
    return updateState("mouseover", true);
  }), _defineProperty(_ref2, k.onmouseout, function () {
    return updateState("mouseover", false);
  }), _defineProperty(_ref2, k.onkeydown, function (e) {
    if (e.which === 13 && state.focus) {
      updateState("focus", false);
      if (onClickHandler) {
        onClickHandler(e);
      }
    }
  }), _ref2), attrs.style ? { style: {} } : null, // Set style on content, not on component
  attrs.events, attrs.url, disabled ? { disabled: true } : null);
};

var createContent = function createContent(vnode, _ref3) {
  var _r;

  var r = _ref3.renderer,
      k = _ref3.keys,
      ripple = _ref3.ripple;

  var attrs = vnode.attrs;
  var noink = attrs.ink !== undefined && attrs.ink === false;
  var disabled = attrs.disabled;
  var children = attrs.children || vnode.children;
  var label = attrs.content ? attrs.content : attrs.label ? _typeof(attrs.label) === "object" ? attrs.label : r("div", { key: "label", className: classes.label }, attrs.label) : children ? children : null;
  var noWash = disabled || attrs.wash !== undefined && !attrs.wash;
  return label ? r("div", (_r = {}, _defineProperty(_r, k.class, classes.content), _defineProperty(_r, "key", "button"), _defineProperty(_r, "style", attrs.style || {}), _r), [!disabled && attrs.shadowComponent // "protected" option, used by raised-button
  ? attrs.shadowComponent : null,
  // ripple
  disabled || noink ? null : ripple && r(ripple, _extends({}, attrs.ripple, {
    key: "ripple",
    target: function target() {
      return vnode.dom;
    }
  })),
  // hover
  noWash ? null : r("div", { key: "wash", className: classes.wash }),
  // focus
  disabled ? null : r("div", { key: "focus", className: classes.focus }), label]) : null;
};

var button = {
  createProps: createProps, createContent: createContent, theme: theme,
  classes: classes,
  vars: vars$1
};




/***/ })
/******/ ]);
//# sourceMappingURL=index.js.map