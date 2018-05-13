import { layout, noTouchStyle } from 'polythene-css-button';
import { styler } from 'polythene-core-css';
import { vars } from 'polythene-core-raised-button';

var classes = {
  component: "pe-button pe-text-button pe-raised-button"
};

// Only used for theme styles

var layout$1 = (function (selector, componentVars, customVars) {
  return layout(selector, componentVars, customVars);
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sel = function sel(selector, o) {
  return _defineProperty({}, selector, o);
};

var generalFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      ".pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1
        }
      },
      ".pe-button--selected": {
        " .pe-button__focus": {
          opacity: 1
        }
      },
      " .pe-button__content": {
        borderColor: "transparent"
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty(_ref2, "color_" + tint + "_text", function (selector, vars$$1) {
    return [sel(selector, {
      ":not(.pe-button--disabled)": {
        "&, &:link, &:visited": {
          color: vars$$1["color_" + tint + "_text"]
        }
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_border", function (selector, vars$$1) {
    return [sel(selector, {
      ":not(.pe-button--disabled)": {
        " .pe-button__content": {
          borderColor: vars$$1["color_" + tint + "_border"]
        }
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_background", function (selector, vars$$1) {
    return [sel(selector, {
      ":not(.pe-button--disabled)": {
        " .pe-button__content": {
          backgroundColor: vars$$1["color_" + tint + "_background"]
        }
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_disabled_text", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--disabled": {
        color: vars$$1["color_" + tint + "_disabled_text"]
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_disabled_border", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content": {
          borderColor: vars$$1["color_" + tint + "_disabled_border"]
        }
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_disabled_background", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content": {
          backgroundColor: vars$$1["color_" + tint + "_disabled_background"]
        }
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_active_border", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          borderColor: vars$$1["color_" + tint + "_active_border"]
        }
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_active_background", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          backgroundColor: vars$$1["color_" + tint + "_active_background"]
        }
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_focus_background", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--focus": {
        " .pe-button__focus": {
          backgroundColor: vars$$1["color_" + tint + "_focus_background"]
        }
      },
      ".pe-button--selected": {
        " .pe-button__focus": {
          backgroundColor: vars$$1["color_" + tint + "_focus_background"]
        }
      }
    })];
  }), _ref2;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var createStyle = function createStyle(selector, componentVars, customVars, tint) {
  var allVars = _extends({}, componentVars, customVars);
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
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light"), // normal, has/inside light tone
  noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, customVars, "dark"), // inside dark tone
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, customVars, "light")];
});

var fns = [color];
var themeFns = [layout$1, color];
var selector = "." + classes.component.replace(/ /g, ".");

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateCustomStyles([customSelector, selector], vars, customVars, themeFns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns) : styler.createStyleSheets([selector], vars, fns);
};

styler.generateStyles([selector], vars, fns);

export { addStyle, getStyle };
