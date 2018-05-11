import { styler } from 'polythene-core-css';
import { vars } from 'polythene-core-material-design-progress-spinner';

var classes = {
  component: "pe-md-progress-spinner",

  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sel = function sel(selector, o) {
  return _defineProperty({}, selector, o);
};

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
  animation_duration: function animation_duration(selector, vars$$1) {
    return [sel(selector, {
      " .pe-md-progress-spinner__animation": {
        animationDuration: vars$$1.animation_duration
      }
    })];
  },
  border_width_small: function border_width_small(selector, vars$$1) {
    return [sel(selector, {
      ".pe-spinner--small": {
        " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
          borderWidth: vars$$1.border_width_small + "px"
        }
      }
    })];
  },
  border_width_regular: function border_width_regular(selector, vars$$1) {
    return [sel(selector, {
      ".pe-spinner--regular": {
        " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
          borderWidth: vars$$1.border_width_regular + "px"
        }
      }
    })];
  },
  border_width_medium: function border_width_medium(selector, vars$$1) {
    return [sel(selector, {
      ".pe-spinner--medium": {
        " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
          borderWidth: vars$$1.border_width_medium + "px"
        }
      }
    })];
  },
  border_width_large: function border_width_large(selector, vars$$1) {
    return [sel(selector, {
      ".pe-spinner--large": {
        " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
          borderWidth: vars$$1.border_width_large + "px"
        }
      }
    })];
  },
  border_width_fab: function border_width_fab(selector, vars$$1) {
    return [sel(selector, {
      ".pe-spinner--fab": {
        " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
          borderWidth: vars$$1.border_width_fab + "px"
        }
      }
    })];
  }
};

var layout = (function (selector, componentVars, customVars) {
  var allVars = _extends({}, componentVars, customVars);
  var currentVars = customVars ? customVars : allVars;
  return Object.keys(currentVars).map(function (v) {
    return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
  }).filter(function (s) {
    return s;
  });
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sel$1 = function sel(selector, o) {
  return _defineProperty$1({}, selector, o);
};

var generalFns = {
  general_styles: function general_styles(selector) {
    return [sel$1(selector, {
      " .pe-md-progress-spinner__circle": {
        borderColor: "currentcolor"
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  return _defineProperty$1({}, "color_" + tint, function (selector, vars$$1) {
    return [sel$1(selector, {
      color: vars$$1["color_" + tint]
    })];
  });
};

var lightTintFns = _extends$1({}, generalFns, tintFns("light"));
var darkTintFns = _extends$1({}, generalFns, tintFns("dark"));

var createStyle = function createStyle(selector, componentVars, customVars, tint) {
  var allVars = _extends$1({}, componentVars, customVars);
  var currentVars = customVars ? customVars : allVars;
  return Object.keys(currentVars).map(function (v) {
    var varFns = tint === "light" ? lightTintFns : darkTintFns;
    return varFns[v] !== undefined ? varFns[v](selector, allVars) : null;
  }).filter(function (s) {
    return s;
  });
};

var style = function style(scopes, selector, componentVars, customVars, tint) {
  var selectors = scopes.map(function (s) {
    return s + selector;
  }).join(",");
  return createStyle(selectors, componentVars, customVars, tint);
};

var color = (function (selector, componentVars, customVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light")];
});

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns) : styler.createStyleSheets([selector], vars, fns);
};

styler.generateStyles([selector], vars, fns);

export { addStyle, getStyle };
