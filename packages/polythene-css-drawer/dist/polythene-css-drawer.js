(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-drawer')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-drawer'], factory) :
	(factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-drawer']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreDrawer) { 'use strict';

var classes = {
  component: "pe-drawer",

  // elements
  panel: "pe-drawer__panel",
  backdrop: "pe-drawer__backdrop",

  // states
  visible: "pe-drawer--visible",
  backdropVisible: "pe-drawer--backdrop-visible",
  fullHeight: "pe-drawer--full-height",
  coverFromLeft: "pe-drawer--cover-from-left"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  return [_defineProperty({}, selector, [{
    // position: "relative",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    pointerEvents: "none",

    ".pe-drawer--full-height": {
      height: "100%"
    },

    ".pe-drawer--cover-from-left": {
      " .pe-drawer__panel": {
        position: "absolute",
        top: 0,
        left: "-99999px"
      }
    },

    " .pe-drawer__panel": {
      height: "100%",
      pointerEvents: "all"
    },

    " .pe-drawer__backdrop": {
      position: "absolute",
      top: 0,
      right: "auto",
      bottom: 0,
      left: "-99999px",
      opacity: 0,
      pointerEvents: "none"
    },

    ".pe-drawer--visible": {
      " .pe-drawer__backdrop": {
        left: 0,
        right: 0,
        pointerEvents: "all"
      }
    }
  }])];
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var style = function style(scopes, selector, componentVars, tint) {
  return [_defineProperty$1({}, scopes.map(function (s) {
    return s + selector;
  }).join(","), {
    ".pe-drawer--backdrop-visible .pe-drawer__backdrop": {
      backgroundColor: componentVars["color_" + tint + "_backdrop_background"]
    }
  })];
};

var color = (function (selector, componentVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light")];
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreDrawer.vars, customVars), fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreDrawer.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreDrawer.vars, fns);
};

polytheneCoreCss.styler.generateStyles([selector], polytheneCoreDrawer.vars, fns);

exports.addStyle = addStyle;
exports.getStyle = getStyle;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-drawer.js.map
