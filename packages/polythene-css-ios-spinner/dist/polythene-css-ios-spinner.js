(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme'), require('polythene-css-base-spinner'), require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme', 'polythene-css-base-spinner', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme'],global['polythene-css-base-spinner'],global['polythene-core']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme,polytheneCssBaseSpinner,polytheneCore) { 'use strict';

  var vars = {
    general_styles: true,

    rotation_animation_duration: "1s",

    color_light: polytheneCoreCss.rgba(polytheneTheme.vars.color_light_foreground),
    color_dark: polytheneCoreCss.rgba(polytheneTheme.vars.color_dark_foreground)
  };

  var classes = {
    component: "pe-ios-spinner",

    // elements
    blades: "pe-ios-spinner__blades",
    blade: "pe-ios-spinner__blade"
  };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var bladeWidth = 9; // percent
  var bladeHeight = 28; // percent

  var kfFade = function kfFade() {
    return {
      " 0%": {
        opacity: .640
      },
      " 100%": {
        opacity: .035
      }
    };
  };

  var positionBlades = function positionBlades(vars) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (i) {
      // reverse to improve performance on iOS
      var delay = -1 / 12 * i * polytheneCore.styleDurationToMs(vars.rotation_animation_duration);
      var rotation = 360 - 360 / 12 * i;
      return _defineProperty({}, " .pe-ios-spinner__blade:nth-of-type(" + (i + 1) + ")", {
        transform: "rotate(" + rotation + "deg) translate3d(0,-140%,0)",
        animation: "iosSpinnerFade " + vars.rotation_animation_duration + " " + delay + "ms linear infinite"
      });
    });
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-ios-spinner__blades": {
          transform: "translate3d(0,0,0)",
          position: "relative",
          width: "100%",
          height: "100%"
        },

        " .pe-ios-spinner__blade": {
          position: "absolute",
          width: bladeWidth + "%",
          height: bladeHeight + "%",
          left: (100 - bladeWidth) / 2 + "%",
          top: (100 - bladeHeight) / 2 + "%",
          opacity: 0,
          borderRadius: "50px"
        },

        "@keyframes iosSpinnerFade": kfFade()
      })];
    },
    rotation_animation_duration: function rotation_animation_duration(selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-ios-spinner__blades": [positionBlades(vars)]
      })];
    }
  };

  var layout = polytheneCoreCss.createLayout({ varFns: varFns, superLayout: polytheneCssBaseSpinner.layout });

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  var generalFns = {
    general_styles: function general_styles(selector) {
      return [polytheneCoreCss.sel(selector, {
        " .pe-ios-spinner__blade": {
          background: "currentcolor"
        }
      })];
    }
  };

  var tintFns = function tintFns(tint) {
    return _defineProperty$1({}, "color_" + tint, function (selector, vars) {
      return [polytheneCoreCss.sel(selector, {
        color: vars["color_" + tint]
      })];
    });
  };

  var lightTintFns = _extends({}, generalFns, tintFns("light"));
  var darkTintFns = _extends({}, generalFns, tintFns("dark"));

  var color = polytheneCoreCss.createColor({
    varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
  });

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
  exports.getStyle = getStyle;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-ios-spinner.js.map
