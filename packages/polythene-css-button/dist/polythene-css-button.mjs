import { mixin, styler } from 'polythene-core-css';
import { vars } from 'polythene-core-button';

var classes = {
  base: "pe-button",
  component: "pe-button pe-text-button",
  row: "pe-button-row",

  // elements    
  content: "pe-button__content",
  focus: "pe-button__focus",
  label: "pe-button__label",
  wash: "pe-button__wash",
  dropdown: "pe-button__dropdown",

  // states    
  border: "pe-button--border",
  disabled: "pe-button--disabled",
  focused: "pe-button--focus",
  inactive: "pe-button--inactive",
  selected: "pe-button--selected",
  hasDropdown: "pe-button--dropdown",
  highLabel: "pe-button--high-label",
  extraWide: "pe-button--extra-wide"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sel = function sel(selector, o) {
  return _defineProperty({}, selector, o);
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      userSelect: "none",
      "-moz-user-select": "none",
      outline: "none",
      padding: 0,
      textDecoration: "none",
      textAlign: "center",
      cursor: "pointer",

      ".pe-button--selected, &.pe-button--disabled, &.pe-button--inactive": {
        cursor: "default",
        pointerEvents: "none"
      },

      ".pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1
        }
      },

      " .pe-button__content": {
        position: "relative",
        borderRadius: "inherit"
      },

      " .pe-button__label": [mixin.fontSmoothing(), {
        position: "relative",
        display: "block",
        borderRadius: "inherit",
        pointerEvents: "none"
      }],

      " .pe-button__wash, .pe-button__focus": [mixin.fit(), {
        borderRadius: "inherit",
        pointerEvents: "none"
      }],

      " .pe-button__focus": {
        opacity: 0
      },

      " .pe-button__wash": {
        zIndex: 0
      }
    }), {
      ".pe-button-row": {
        // prevent inline block style to add extra space:
        fontSize: 0,
        lineHeight: 0
      }
    }];
  },
  row_margin_h: function row_margin_h(selector, vars$$1) {
    return [{
      ".pe-button-row": _defineProperty({
        margin: "0 -" + vars$$1.row_margin_h + "px"

      }, " " + selector, {
        margin: "0 " + vars$$1.row_margin_h + "px"
      })
    }];
  }
};

var baseLayout = (function (selector, componentVars, customVars) {
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

var line_height_label_padding_v = function line_height_label_padding_v(selector, vars$$1) {
  return sel$1(selector, {
    " .pe-button__dropdown": {
      minHeight: "calc((1em * " + vars$$1.line_height + ") + 2 * " + vars$$1.label_padding_v + "px)"
    }
  });
};

var outer_padding_v_label_padding_v = function outer_padding_v_label_padding_v(selector, vars$$1) {
  return sel$1(selector, {
    ".pe-button--high-label": {
      padding: 0,

      " .pe-button__label": {
        padding: vars$$1.outer_padding_v + vars$$1.label_padding_v + "px 0"
      }
    }
  });
};

var line_height_outer_padding_v_label_padding_v = function line_height_outer_padding_v_label_padding_v(selector, vars$$1) {
  return sel$1(selector, {
    ".pe-button--high-label": {
      " .pe-button__label, .pe-button__dropdown": {
        minHeight: "calc((1em * " + vars$$1.line_height + ") + 2 * " + (vars$$1.outer_padding_v + vars$$1.label_padding_v) + "px)"
      }
    }
  });
};

var varFns$1 = {
  general_styles: function general_styles(selector) {
    return [sel$1(selector, {
      display: "inline-block",
      background: "transparent",
      border: "none",

      " .pe-button__content": {
        position: "relative",
        borderWidth: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      },

      ".pe-button--border": {
        " .pe-button__wash, .pe-button__focus, .pe-ripple": mixin.fit(-1),

        " .pe-button__content": {
          borderStyle: "solid"
        }
      },

      " .pe-button__label, .pe-button__dropdown": {
        whiteSpace: "pre",
        userSelect: "none",
        "-moz-user-select": "none"
      },

      ".pe-button--dropdown": {
        minWidth: "0", // IE 11 does not recognize "initial" here

        " .pe-button__dropdown": {
          position: "relative"
        },

        " .pe-svg": {
          position: "absolute",
          left: 0,
          top: "50%"
        },

        " .pe-button__label + .pe-button__dropdown": {
          marginLeft: "7px",
          minWidth: 0
        }
      }
    })];
  },
  border_radius: function border_radius(selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-button__content": {
        borderRadius: vars$$1.border_radius + "px"
      }
    })];
  },
  border_width: function border_width(selector, vars$$1) {
    return [sel$1(selector, {
      ".pe-button--border": {
        " .pe-button__content": {
          borderWidth: vars$$1.border_width + "px"
        }
      }
    })];
  },
  min_width: function min_width(selector, vars$$1) {
    return [sel$1(selector, {
      minWidth: vars$$1.min_width + "px"
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-button__content, .pe-button__wash, .pe-button__focus": [mixin.defaultTransition("all", vars$$1.animation_duration)]
    })];
  },
  padding_h: function padding_h(selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-button__content": {
        padding: "0 " + vars$$1.padding_h + "px",

        " .pe-button__dropdown": {
          minWidth: "calc(36px - 2 * " + vars$$1.padding_h + "px)"
        },

        ".pe-button--dropdown": {
          " .pe-button__label + .pe-button__dropdown": {
            marginRight: "calc(7px - " + vars$$1.padding_h + "px)"
          }
        }
      }
    })];
  },
  padding_h_extra_wide: function padding_h_extra_wide(selector, vars$$1) {
    return [sel$1(selector, {
      ".pe-button--extra-wide .pe-button__content": {
        padding: "0 " + vars$$1.padding_h_extra_wide + "px"
      }
    })];
  },
  label_padding_v: function label_padding_v(selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-button__label": {
        padding: vars$$1.label_padding_v + "px 0"
      },

      ".pe-button--border": {
        " .pe-button__label": {
          padding: vars$$1.label_padding_v - 1 + "px 0"
        }
      }
    }), line_height_label_padding_v(selector, vars$$1), outer_padding_v_label_padding_v(selector, vars$$1), line_height_outer_padding_v_label_padding_v(selector, vars$$1)];
  },
  font_weight: function font_weight(selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-button__label": {
        fontWeight: vars$$1.font_weight
      }
    })];
  },
  text_transform: function text_transform(selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-button__label": {
        textTransform: vars$$1.text_transform
      }
    })];
  },
  font_size: function font_size(selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-button__label, .pe-button__dropdown": {
        fontSize: vars$$1.font_size + "px"
      }
    })];
  },
  line_height: function line_height(selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-button__label, .pe-button__dropdown": {
        lineHeight: vars$$1.line_height
      }
    }), line_height_label_padding_v(selector, vars$$1), line_height_outer_padding_v_label_padding_v(selector, vars$$1)];
  },
  dropdown_icon_size: function dropdown_icon_size(selector, vars$$1) {
    return [sel$1(selector, {
      ".pe-button--dropdown": {
        " .pe-button__dropdown": {
          width: vars$$1.dropdown_icon_size + "px"

        },
        " .pe-svg": {
          width: vars$$1.dropdown_icon_size + "px",
          height: vars$$1.dropdown_icon_size + "px",
          marginTop: -vars$$1.dropdown_icon_size / 2 + "px"
        }
      }
    })];
  },
  outer_padding_v: function outer_padding_v(selector, vars$$1) {
    return [sel$1(selector, {
      padding: vars$$1.outer_padding_v + "px 0",

      ".pe-button--high-label": {
        padding: 0
      }
    }), outer_padding_v_label_padding_v(selector, vars$$1), line_height_outer_padding_v_label_padding_v(selector, vars$$1)];
  }
};

var layout = (function (selector, componentVars, customVars) {
  var allVars = _extends$1({}, componentVars, customVars);
  var currentVars = customVars ? customVars : allVars;
  return Object.keys(currentVars).map(function (v) {
    return varFns$1[v] !== undefined ? varFns$1[v](selector, allVars) : null;
  }).filter(function (s) {
    return s;
  });
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sel$2 = function sel(selector, o) {
  return _defineProperty$2({}, selector, o);
};

var generalFns = {
  general_styles: function general_styles(selector) {
    return [sel$2(selector, {
      ".pe-button--focus, &.pe-button--selected": {
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

  return _ref2 = {}, _defineProperty$2(_ref2, "color_" + tint + "_text", function (selector, vars$$1) {
    return [sel$2(selector, {
      "&, &:link, &:visited": {
        color: vars$$1["color_" + tint + "_text"]
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_disabled_text", function (selector, vars$$1) {
    return [sel$2(selector, {
      ".pe-button--disabled": {
        color: vars$$1["color_" + tint + "_disabled_text"]
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_background", function (selector, vars$$1) {
    return [sel$2(selector, {
      " .pe-button__content": {
        backgroundColor: vars$$1["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_focus_background", function (selector, vars$$1) {
    return [sel$2(selector, {
      " .pe-button__focus": {
        backgroundColor: vars$$1["color_" + tint + "_focus_background"]
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_active_background", function (selector, vars$$1) {
    return [sel$2(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          backgroundColor: vars$$1["color_" + tint + "_active_background"]
        }
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_disabled_background", function (selector, vars$$1) {
    return [sel$2(selector, {
      ".pe-button--disabled": {
        " .pe-button__content": {
          backgroundColor: vars$$1["color_" + tint + "_disabled_background"]
        }
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_border", function (selector, vars$$1) {
    return [sel$2(selector, {
      " .pe-button__content": {
        borderColor: vars$$1["color_" + tint + "_border"]
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_active_border", function (selector, vars$$1) {
    return [sel$2(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          borderColor: vars$$1["color_" + tint + "_active_border"]
        }
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_disabled_border", function (selector, vars$$1) {
    return [sel$2(selector, {
      ".pe-button--disabled": {
        " .pe-button__content": {
          borderColor: vars$$1["color_" + tint + "_disabled_border"]
        }
      }
    })];
  }), _defineProperty$2(_ref2, "color_" + tint + "_icon", function (selector, vars$$1) {
    return [sel$2(selector, {
      " .pe-button__dropdown": {
        color: vars$$1["color_" + tint + "_icon"]
      }
    })];
  }), _ref2;
};

var hoverTintFns = function hoverTintFns(tint) {
  var _ref3;

  return _ref3 = {}, _defineProperty$2(_ref3, "color_" + tint + "_hover", function (selector, vars$$1) {
    return [sel$2(selector, {
      color: vars$$1["color_" + tint + "_hover"]
    })];
  }), _defineProperty$2(_ref3, "color_" + tint + "_hover_border", function (selector, vars$$1) {
    return [sel$2(selector, {
      " .pe-button__content": {
        borderColor: vars$$1["color_" + tint + "_hover_border"]
      }
    })];
  }), _defineProperty$2(_ref3, "color_" + tint + "_wash_background", function (selector, vars$$1) {
    return [sel$2(selector, {
      " .pe-button__wash": {
        backgroundColor: vars$$1["color_" + tint + "_wash_background"]
      }
    })];
  }), _defineProperty$2(_ref3, "color_" + tint + "_hover_background", function (selector, vars$$1) {
    return [sel$2(selector, {
      " .pe-button__content": {
        backgroundColor: vars$$1["color_" + tint + "_hover_background"]
      }
    })];
  }), _defineProperty$2(_ref3, "color_" + tint + "_hover_icon", function (selector, vars$$1) {
    return [sel$2(selector, {
      " .pe-button__dropdown": {
        color: vars$$1["color_" + tint + "_hover_icon"]
      }
    })];
  }), _ref3;
};

var lightTintFns = _extends$2({}, generalFns, tintFns("light"));
var darkTintFns = _extends$2({}, generalFns, tintFns("dark"));

var lightTintHoverFns = hoverTintFns("light");
var darkTintHoverFns = hoverTintFns("dark");

var createStyle = function createStyle(selector, componentVars, customVars, tint, hover) {
  var allVars = _extends$2({}, componentVars, customVars);
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

var noTouchStyle = function noTouchStyle(scopes, selector, componentVars, customVars, tint) {
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
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, customVars, "light")];
});

var fns = [layout, color];
var baseFns = [baseLayout];
var baseSelector = "." + classes.base;
var selector = "." + classes.component.replace(/ /g, ".");

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns) : styler.createStyleSheets([baseSelector], vars, baseFns).concat(styler.createStyleSheets([selector], vars, fns));
};

styler.generateStyles([baseSelector], vars, baseFns);
styler.generateStyles([selector], vars, fns);

export { layout, noTouchStyle, addStyle, getStyle };
