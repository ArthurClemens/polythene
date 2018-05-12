import { mixin, styler } from 'polythene-core-css';
import { noTouchStyle } from 'polythene-css-button';
import { vars } from 'polythene-core-icon-button';

var classes = {
  component: "pe-button pe-icon-button",

  // elements
  content: "pe-icon-button__content",
  label: "pe-icon-button__label",

  // states
  compact: "pe-icon-button--compact"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide(isRTL) {
  return function (vars$$1) {
    return {};
  };
}; // eslint-disable-line no-unused-vars
var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var sel = function sel(selector, o) {
  return _defineProperty({}, selector, o);
};

var _label_padding_before = function _label_padding_before(selector, vars$$1, isRTL) {
  return sel(selector, {
    " .pe-icon-button__label": _defineProperty({}, isRTL ? "paddingRight" : "paddingLeft", vars$$1.label_padding_before + "px")
  });
};

var _label_padding_after = function _label_padding_after(selector, vars$$1, isRTL) {
  return sel(selector, {
    " .pe-icon-button__label": _defineProperty({}, isRTL ? "paddingLeft" : "paddingRight", vars$$1.label_padding_after + "px")
  });
};

var wrapRTL = function wrapRTL(selector, content) {
  return _defineProperty({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, content);
};

var varFns = {
  general_styles: function general_styles(selector, vars$$1) {
    return [sel(selector, [alignLeft(vars$$1), {
      // don't set button size to facilitate different icon sizes
      display: "inline-flex",
      alignItems: "center",
      cursor: "pointer",
      border: "none",

      " .pe-button__content": {
        display: "flex",
        alignItems: "center",
        fontSize: "1rem",
        borderRadius: "50%",
        position: "relative"
      },

      " .pe-icon-button__content": {
        lineHeight: 1,
        borderRadius: "50%",
        pointerEvents: "none"
      }
    }, _defineProperty({}, "*[dir=rtl] " + selector + ", .pe-rtl " + selector, [alignRight(vars$$1)])])];
  },
  padding: function padding(selector, vars$$1) {
    return [sel(selector, {
      " .pe-icon-button__content": {
        padding: vars$$1.padding + "px"
      }
    })];
  },
  padding_compact: function padding_compact(selector, vars$$1) {
    return [sel(selector, {
      ".pe-icon-button--compact": {
        " .pe-icon-button__content": {
          padding: vars$$1.padding_compact + "px"
        }
      }
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [sel(selector, {
      " .pe-button__content, .pe-button__wash": [mixin.defaultTransition("all", vars$$1.animation_duration)]
    })];
  },
  label_font_size: function label_font_size(selector, vars$$1) {
    return [sel(selector, {
      " .pe-icon-button__label": {
        fontSize: vars$$1.label_font_size + "px"
      }
    })];
  },
  label_line_height: function label_line_height(selector, vars$$1) {
    return [sel(selector, {
      " .pe-icon-button__label": {
        lineHeight: vars$$1.label_line_height + "px"
      }
    })];
  },
  label_font_weight: function label_font_weight(selector, vars$$1) {
    return [sel(selector, {
      " .pe-icon-button__label": {
        fontWeight: vars$$1.label_font_weight
      }
    })];
  },
  label_text_transform: function label_text_transform(selector, vars$$1) {
    return [sel(selector, {
      " .pe-icon-button__label": {
        textTransform: vars$$1.label_text_transform
      }
    })];
  },
  label_padding_after: function label_padding_after(selector, vars$$1) {
    return [sel(selector, {}), _label_padding_after(selector, vars$$1, false), wrapRTL(selector, _label_padding_after(selector, vars$$1, true))];
  },
  label_padding_before: function label_padding_before(selector, vars$$1) {
    return [sel(selector, {}), _label_padding_before(selector, vars$$1, false), wrapRTL(selector, _label_padding_before(selector, vars$$1, true))];
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
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          backgroundColor: "currentcolor"
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint, function (selector, vars$$1) {
    return [sel$1(selector, {
      "&, .pe-icon-button__label": {
        color: vars$$1["color_" + tint]
      }
    })];
  }), _defineProperty$1(_ref2, "color_background", function color_background(selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-icon-button__content": {
        backgroundColor: vars$$1["color_background"]
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_background", function (selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-icon-button__content": {
        backgroundColor: vars$$1["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_wash_opacity", function (selector, vars$$1) {
    return [sel$1(selector, {
      opacity: vars$$1["color_" + tint + "_wash_opacity"]
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_focus_opacity", function (selector, vars$$1) {
    return [sel$1(selector, {
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          opacity: vars$$1["color_" + tint + "_focus_opacity"]
        }
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_disabled", function (selector, vars$$1) {
    return [sel$1(selector, {
      ".pe-button--disabled": {
        " .pe-button__content, .pe-icon-button__label": {
          color: vars$$1["color_" + tint + "_disabled"]
        }
      }
    })];
  }), _ref2;
};

var hoverTintFns = function hoverTintFns(tint) {
  return _defineProperty$1({}, "color_" + tint + "_label_hover", function (selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-icon-button__label": {
        color: vars$$1["color_" + tint + "_label_hover"]
      }
    })];
  });
};

var lightTintFns = _extends$1({}, generalFns, tintFns("light"));
var darkTintFns = _extends$1({}, generalFns, tintFns("dark"));

var lightTintHoverFns = hoverTintFns("light");
var darkTintHoverFns = hoverTintFns("dark");

var createStyle = function createStyle(selector, componentVars, customVars, tint, hover) {
  var allVars = _extends$1({}, componentVars, customVars);
  var currentVars = customVars ? customVars : allVars;
  return Object.keys(currentVars).map(function (v) {
    var varFns = tint === "light" ? hover ? lightTintHoverFns : lightTintFns : hover ? darkTintHoverFns : darkTintFns;
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

var noTouchStyle$1 = function noTouchStyle$$1(scopes, selector, componentVars, customVars, tint) {
  var selectors = [].concat(scopes.map(function (s) {
    return s + selector + ":hover";
  }).join(",")).concat(scopes.map(function (s) {
    return s + selector + ":active";
  }).join(","));
  return createStyle(selectors, componentVars, customVars, tint, true);
};

var color = (function (selector, componentVars, customVars) {
  return [style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light"), // normal, has/inside light tone
  noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, customVars, "dark"), // inside dark tone
  noTouchStyle$1(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, customVars, "dark"), // inside dark tone
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, customVars, "light"), noTouchStyle$1(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, customVars, "light")];
});

var fns = [layout, color];
var selector = "." + classes.component.replace(/ /g, ".");

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns) : styler.createStyleSheets([selector], vars, fns);
};

styler.generateStyles([selector], vars, fns);

export { addStyle, getStyle };
