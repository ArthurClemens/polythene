import { createColor, sel, createLayout, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
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
    return [];
  } // eslint-disable-line no-unused-vars

};

var tintFns = function tintFns(tint) {
  return _defineProperty({}, "color_" + tint + "_raised_background", function (selector, vars) {
    return [sel(selector, {
      ".pe-spinner--raised": {
        backgroundColor: vars["color_" + tint + "_raised_background"]
      }
    })];
  });
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));

var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = createColor({
  varFns: {
    lightTintFns: lightTintFns,
    darkTintFns: darkTintFns
  }
});

var sizes = function sizes(size) {
  return {
    width: size + "px",
    height: size + "px"
  };
};

var raisedSize = function raisedSize(size) {
  var padding = Math.round(size * 0.25); // only use rounded number to prevent sub-pixel alignment issues

  var paddedSize = size + padding * 2;
  return {
    width: paddedSize + "px",
    height: paddedSize + "px",
    padding: padding + "px"
  };
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      transitionProperty: "all",
      ".pe-spinner--raised": {
        position: "relative",
        borderRadius: "50%"
      }
    })];
  },
  animation_show_css: function animation_show_css(selector, vars) {
    return [sel(selector, {
      ".pe-spinner--visible, &.pe-spinner--permanent": [vars.animation_show_css]
    })];
  },
  animation_hide_css: function animation_hide_css(selector, vars) {
    return _defineProperty({}, selector, vars.animation_hide_css);
  },
  animation_delay: function animation_delay(selector, vars) {
    return [sel(selector, {
      transitionDelay: vars.animation_delay
    })];
  },
  animation_duration: function animation_duration(selector, vars) {
    return [sel(selector, {
      transitionDuration: vars.animation_duration
    })];
  },
  animation_timing_function: function animation_timing_function(selector, vars) {
    return [sel(selector, {
      transitionTimingFunction: vars.animation_timing_function
    })];
  },
  size_small: function size_small(selector, vars) {
    return [sel(selector, {
      ".pe-spinner--small": sizes(vars.size_small),
      ".pe-spinner--raised": {
        ".pe-spinner--small": raisedSize(vars.size_small)
      }
    })];
  },
  size_regular: function size_regular(selector, vars) {
    return [sel(selector, {
      ".pe-spinner--regular": sizes(vars.size_regular),
      ".pe-spinner--raised": {
        ".pe-spinner--regular": raisedSize(vars.size_regular)
      }
    })];
  },
  size_medium: function size_medium(selector, vars) {
    return [sel(selector, {
      ".pe-spinner--medium": sizes(vars.size_medium),
      ".pe-spinner--raised": {
        ".pe-spinner--medium": raisedSize(vars.size_medium)
      }
    })];
  },
  size_large: function size_large(selector, vars) {
    return [sel(selector, {
      ".pe-spinner--large": sizes(vars.size_large),
      ".pe-spinner--raised": {
        ".pe-spinner--large": raisedSize(vars.size_large)
      }
    })];
  },
  size_fab: function size_fab(selector, vars) {
    return [sel(selector, {
      ".pe-spinner--fab": sizes(vars.size_fab),
      ".pe-spinner--raised": {
        ".pe-spinner--fab": raisedSize(vars.size_fab)
      }
    })];
  }
};
var layout = createLayout({
  varFns: varFns
});

// @ts-check
/**
 * @type {BaseSpinnerVars} baseSpinnerVars
 */

var baseSpinnerVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  animation_delay: "0s",
  animation_duration: ".220s",
  animation_hide_css: "opacity: 0;",
  animation_show_css: "opacity: 1;",
  animation_timing_function: "ease-in-out",
  size_fab: 7 * vars.grid_unit_component,
  size_large: 6 * vars.grid_unit_component,
  size_medium: 5 * vars.grid_unit_component,
  size_regular: 4 * vars.grid_unit_component,
  size_small: 3 * vars.grid_unit_component,
  color_light_raised_background: rgba(vars.color_light_background),
  color_dark_raised_background: rgba(vars.color_light_background) // also use light background with dark tone

};

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, baseSpinnerVars);
var getStyle = styler.createGetStyle(selector, fns, baseSpinnerVars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: baseSpinnerVars
});

export { addStyle, color, getStyle, layout, baseSpinnerVars as vars };
