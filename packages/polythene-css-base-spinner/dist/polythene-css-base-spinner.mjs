import { sel, createColor, createLayout, rgba, styler } from 'polythene-core-css';
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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [];
  } // eslint-disable-line no-unused-vars
};

var tintFns = function tintFns(tint) {
  return _defineProperty({}, "color_" + tint + "_raised_background", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-spinner--raised": {
        backgroundColor: vars$$1["color_" + tint + "_raised_background"]
      }
    })];
  });
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = createColor({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  animation_show_css: function animation_show_css(selector, vars$$1) {
    return [sel(selector, {
      ".pe-spinner--visible, &.pe-spinner--permanent": [vars$$1.animation_show_css]
    })];
  },
  animation_hide_css: function animation_hide_css(selector, vars$$1) {
    return _defineProperty$1({}, selector, vars$$1.animation_hide_css);
  },
  animation_delay: function animation_delay(selector, vars$$1) {
    return [sel(selector, {
      transitionDelay: vars$$1.animation_delay
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [sel(selector, {
      transitionDuration: vars$$1.animation_duration
    })];
  },
  animation_timing_function: function animation_timing_function(selector, vars$$1) {
    return [sel(selector, {
      transitionTimingFunction: vars$$1.animation_timing_function
    })];
  },
  size_small: function size_small(selector, vars$$1) {
    return [sel(selector, {
      ".pe-spinner--small": sizes(vars$$1.size_small),

      ".pe-spinner--raised": {
        ".pe-spinner--small": raisedSize(vars$$1.size_small)
      }
    })];
  },
  size_regular: function size_regular(selector, vars$$1) {
    return [sel(selector, {
      ".pe-spinner--regular": sizes(vars$$1.size_regular),

      ".pe-spinner--raised": {
        ".pe-spinner--regular": raisedSize(vars$$1.size_regular)
      }
    })];
  },
  size_medium: function size_medium(selector, vars$$1) {
    return [sel(selector, {
      ".pe-spinner--medium": sizes(vars$$1.size_medium),

      ".pe-spinner--raised": {
        ".pe-spinner--medium": raisedSize(vars$$1.size_medium)
      }
    })];
  },
  size_large: function size_large(selector, vars$$1) {
    return [sel(selector, {
      ".pe-spinner--large": sizes(vars$$1.size_large),

      ".pe-spinner--raised": {
        ".pe-spinner--large": raisedSize(vars$$1.size_large)
      }
    })];
  },
  size_fab: function size_fab(selector, vars$$1) {
    return [sel(selector, {
      ".pe-spinner--fab": sizes(vars$$1.size_fab),

      ".pe-spinner--raised": {
        ".pe-spinner--fab": raisedSize(vars$$1.size_fab)
      }
    })];
  }
};

var layout = createLayout({ varFns: varFns });

var vars$1 = {
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

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateCustomStyles([customSelector, selector], vars$1, customVars, fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars$1, customVars, fns) : styler.createStyleSheets([selector], vars$1, fns);
};

styler.generateStyles([selector], vars$1, fns);

export { addStyle, color, getStyle, layout, vars$1 as vars };
