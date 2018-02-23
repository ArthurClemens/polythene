(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-drawer'), require('polythene-theme')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-drawer', 'polythene-theme'], factory) :
	(factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-drawer'],global['polythene-theme']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreDrawer,polytheneTheme) { 'use strict';

var classes = {
  component: "pe-dialog pe-drawer",

  // states
  push: "pe-drawer--push",
  permanent: "pe-drawer--permanent"
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var layout = (function (selector, componentVars) {
  var _ref2;

  return [(_ref2 = {}, _defineProperty(_ref2, selector, {
    justifyContent: "flex-start",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    height: "100%",
    padding: 0,
    overflowY: "auto",

    " .pe-dialog__content": {
      position: "relative",
      height: "100%",
      borderRadius: 0,
      width: "calc(100% - " + componentVars.content_side_offset + "px)",
      maxWidth: componentVars.content_max_width + "px"
    },

    " .pe-dialog-pane": {
      minWidth: "initial"
    },

    " .pe-dialog-pane__body": {
      overflow: "visible"
    },

    " .pe-dialog__backdrop, .pe-dialog__touch": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    },

    ".pe-drawer--push": {
      position: "static",

      " .pe-dialog__content": {
        width: componentVars.content_max_width + "px"
      }
    },

    ".pe-drawer--permanent": {
      position: "static",
      height: "auto",
      display: "block",
      padding: 0,
      overflow: "initial",

      " .pe-dialog-pane__body": {
        overflow: "visible",
        maxHeight: "initial"
      }
    }
  }), _defineProperty(_ref2, "@media (min-width: " + polytheneTheme.vars.breakpoint_for_tablet_portrait_up + "px)", _defineProperty({}, selector, {
    ".pe-drawer--push": {
      " .pe-dialog__content": {
        maxWidth: componentVars.content_max_width_large + "px"
      }
    },
    " .pe-dialog__content": {
      width: "calc(100% - " + componentVars.content_side_offset_large + "px)",
      maxWidth: componentVars.content_max_width_large + "px"
    }
  })), _ref2)];
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
var selector = "." + classes.component.replace(/ /g, ".");

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
