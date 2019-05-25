import { color as color$1, layout as layout$1 } from 'polythene-css-material-design-spinner';
import { createColor, sel, createLayout, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-md-progress-spinner",
  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
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
      " .pe-md-progress-spinner__circle": {
        borderColor: "currentcolor"
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

// @ts-check
var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      position: "relative",
      " .pe-md-progress-spinner__animation": {
        position: "absolute",
        width: "100%",
        height: "100%"
      },
      " .pe-md-progress-spinner__circle": {
        position: "absolute",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        borderStyle: "solid",
        borderRadius: "50%"
      },
      " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
        transform: "rotate(0)",
        clip: "rect(0, 0, 0, 0)"
      }
    })];
  },
  progress_animation_duration: function progress_animation_duration(selector, vars) {
    return [sel(selector, {
      " .pe-md-progress-spinner__animation": {
        animationDuration: vars.progress_animation_duration
      }
    })];
  }
};
var layout = createLayout({
  varFns: varFns,
  superLayout: layout$1
});

// @ts-check
/**
 * @type {MaterialDesignProgressSpinnerVars} materialDesignProgressSpinnerVars
 */

var materialDesignProgressSpinnerVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  progress_animation_duration: ".8s",
  color_light: rgba(vars.color_primary),
  color_dark: rgba(vars.color_primary)
};

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, materialDesignProgressSpinnerVars);
var getStyle = styler.createGetStyle(selector, fns, materialDesignProgressSpinnerVars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: materialDesignProgressSpinnerVars
});

export { addStyle, color, getStyle, layout, materialDesignProgressSpinnerVars as vars };
