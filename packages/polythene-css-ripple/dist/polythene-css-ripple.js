(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css']));
}(this, (function (exports,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-ripple",

    // elements
    mask: "pe-ripple__mask",
    waves: "pe-ripple__waves",

    // states
    unconstrained: "pe-ripple--unconstrained",
    wavesAnimating: "pe-ripple__waves--animating"
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, {
        color: "inherit"
      })];
    }
  };

  var tintFns = function tintFns(tint) {
    var _ref;

    return _ref = {}, _defineProperty(_ref, "color", function color(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        color: vars["color"]
      })];
    }), _defineProperty(_ref, "color_" + tint, function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        color: vars["color_" + tint]
      })];
    }), _ref;
  };

  var lightTintFns = _extends({}, generalFns, tintFns("light"));
  var darkTintFns = _extends({}, generalFns, tintFns("dark"));

  var color = polytheneCoreCss.createColor({
    varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
  });

  var varFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, [polytheneCoreCss.mixin.fit(), {
        color: "inherit",
        borderRadius: "inherit",
        pointerEvents: "none",

        ":not(.pe-ripple--unconstrained)": {
          borderRadius: "inherit",

          " .pe-ripple__mask": {
            overflow: "hidden",
            borderRadius: "inherit"
          }
        },
        " .pe-ripple__mask": [polytheneCoreCss.mixin.fit(), {
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
    }
  };

  var layout = polytheneCoreCss.createLayout({ varFns: varFns });

  var vars = {
    general_styles: true,

    color: "inherit" // only specify this variable to get both states
    // color_light:   "inherit",
    // color_dark:    "inherit"
  };

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], vars, fns);

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-ripple.js.map
