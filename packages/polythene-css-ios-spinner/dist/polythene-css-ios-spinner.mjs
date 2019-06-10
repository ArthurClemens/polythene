import { color as color$1, layout as layout$1 } from 'polythene-css-base-spinner';
import { createColor, sel, createLayout, rgba, styler } from 'polythene-core-css';
import { styleDurationToMs } from 'polythene-core';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-ios-spinner",
  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};

function _defineProperty(obj, key, value) {
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
}

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

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
  return _defineProperty({}, "color_" + tint, function (selector, vars) {
    return [sel(selector, {
      color: vars["color_" + tint]
    })];
  });
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));

var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = createColor({
  varFns: {
    lightTintFns: lightTintFns,
    darkTintFns: darkTintFns
  },
  superColor: color$1
});

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
    var delay = -1 / 12 * i * styleDurationToMs(vars.rotation_animation_duration);
    var rotation = 360 - 360 / 12 * i;
    return _defineProperty({}, " .pe-ios-spinner__blade:nth-of-type(" + (i + 1) + ")", {
      transform: "rotate(" + rotation + "deg) translate3d(0,-140%,0)",
      animation: "iosSpinnerFade " + vars.rotation_animation_duration + " " + delay + "ms linear infinite"
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
  rotation_animation_duration: function rotation_animation_duration(selector, vars) {
    return [sel(selector, {
      " .pe-ios-spinner__blades": [positionBlades(vars)]
    })];
  }
};
var layout = createLayout({
  varFns: varFns,
  superLayout: layout$1
});

// @ts-check
/**
 * @type {IOSSpinnerVars} iOSSpinnerVars
 */

var iOSSpinnerVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  rotation_animation_duration: "1s",
  color_light: rgba(vars.color_light_foreground),
  color_dark: rgba(vars.color_dark_foreground)
};

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, iOSSpinnerVars);
var getStyle = styler.createGetStyle(selector, fns, iOSSpinnerVars);

var addGeneralStyleToHead = function addGeneralStyleToHead() {
  return styler.addStyle({
    selectors: [selector],
    fns: fns,
    vars: iOSSpinnerVars
  });
};

export { addGeneralStyleToHead, addStyle, color, getStyle, layout, iOSSpinnerVars as vars };
