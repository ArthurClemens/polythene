import { color, layout } from 'polythene-css-base-spinner';
import { sel, createColor, createLayout, rgba, styler } from 'polythene-core-css';
import { styleDurationToMs } from 'polythene-core';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-ios-spinner",

  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      " .pe-ios-spinner__blade": {
        background: "currentcolor"
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  return _defineProperty({}, "color_" + tint, function (selector, vars$$1) {
    return [sel(selector, {
      color: vars$$1["color_" + tint]
    })];
  });
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color$1 = createColor({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns },
  superColor: color
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var positionBlades = function positionBlades(vars$$1) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (i) {
    // reverse to improve performance on iOS
    var delay = -1 / 12 * i * styleDurationToMs(vars$$1.rotation_animation_duration);
    var rotation = 360 - 360 / 12 * i;
    return _defineProperty$1({}, " .pe-ios-spinner__blade:nth-of-type(" + (i + 1) + ")", {
      transform: "rotate(" + rotation + "deg) translate3d(0,-140%,0)",
      animation: "iosSpinnerFade " + vars$$1.rotation_animation_duration + " " + delay + "ms linear infinite"
    });
  });
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
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
  rotation_animation_duration: function rotation_animation_duration(selector, vars$$1) {
    return [sel(selector, {
      " .pe-ios-spinner__blades": [positionBlades(vars$$1)]
    })];
  }
};

var layout$1 = createLayout({ varFns: varFns, superLayout: layout });

var vars$1 = {
  general_styles: true,

  rotation_animation_duration: "1s",

  color_light: rgba(vars.color_light_foreground),
  color_dark: rgba(vars.color_dark_foreground)
};

var fns = [layout$1, color$1];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateCustomStyles([customSelector, selector], vars$1, customVars, fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars$1, customVars, fns) : styler.createStyleSheets([selector], vars$1, fns);
};

styler.generateStyles([selector], vars$1, fns);

export { addStyle, color$1 as color, getStyle, layout$1 as layout, vars$1 as vars };
