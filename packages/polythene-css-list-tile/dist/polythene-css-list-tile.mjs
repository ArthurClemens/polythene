import { vars } from 'polythene-theme';
import { mixin, flex, styler } from 'polythene-core-css';

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

// SPECS
//
// heights:
// single line: 48
// single line, dense: 40
// single line, with icon: 48
// single line, with icon, dense: 40
// single line, with avatar: 56
// single line, with avatar, dense: 48
// two-line: 72
// two-line, dense: 60
// three-line: 88
// three-line, dense: 76

var single_height = 48;
var padding = 8;
var single_with_icon_height = 56;

var vars$1 = {
  general_styles: true,

  compact_front_item_width: 64,
  compact_padding: 9,
  compact_side_padding: 1 * vars.grid_unit_component,
  font_size_list_header: 14,
  font_size_navigation_title: 14,
  font_size_small: 12,
  font_size_subtitle: 14,
  font_size_title: 16,
  font_weight_list_header: vars.font_weight_medium,
  font_weight_navigation_title: vars.font_weight_medium,
  font_weight_subtitle: vars.font_weight_normal,
  font_weight_title: vars.font_weight_normal,
  front_item_width: 72,
  has_high_subtitle_padding: 13,
  has_subtitle_padding: 15,
  high_subtitle_line_count: 2,
  line_height_subtitle: 20,
  padding: 13,
  side_padding: 2 * vars.grid_unit_component,
  single_height: single_height,
  single_line_height: single_height - 2 * padding - (2 * 5 + 1),
  single_with_icon_height: single_with_icon_height,
  single_with_icon_line_height: single_with_icon_height - 2 * padding - (2 * 5 + 1),
  subtitle_line_count: 1,
  title_line_count: 1,

  color_light_title: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_subtitle: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_info: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_front: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_text_disabled: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_list_header: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_secondary: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_hover: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_hover_front: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_hover_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_focus_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_selected_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_highlight_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  // background color may be set in theme; disabled by default
  // color_light_background:          "inherit",

  color_dark_title: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_subtitle: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_info: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_front: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_text_disabled: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_list_header: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_secondary: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_hover: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_hover_front: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_hover_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_selected_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_highlight_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover)
  // background color may be set in theme; disabled by default
  // color_dark_background:           "inherit",
};

var classes = {
  component: "pe-list-tile",

  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",

  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide(isRTL) {
  return function (vars$$1) {
    return { // eslint-disable-line no-unused-vars
      " .pe-list-tile__content-front + .pe-list-tile__content": _defineProperty({}, isRTL ? "paddingRight" : "paddingLeft", 0)
    };
  };
}; // eslint-disable-line no-unused-vars
var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var paddingH = function paddingH(h) {
  return {
    "padding-left": h + "px",
    "padding-right": h + "px"
  };
};

var paddingV = function paddingV(top, bottom) {
  return {
    "padding-top": top + "px",
    "padding-bottom": (bottom || top) + "px"
  };
};

var sel = function sel(selector, o) {
  return _defineProperty({}, selector, o);
};

var selectorRTL = function selectorRTL(selector) {
  return "*[dir=rtl] " + selector + ", .pe-rtl " + selector;
};

var title_line_count_single_line_height = function title_line_count_single_line_height(selector, vars$$1) {
  return sel(selector, {
    lineHeight: vars$$1.single_line_height + "px",

    ".pe-list-tile--navigation": {
      " .pe-list-tile__title": {
        minHeight: vars$$1.single_line_height + "px"
      }
    },

    " .pe-list-tile__title": [mixin.ellipsis(vars$$1.title_line_count, vars$$1.single_line_height, "px")]
  });
};

var varFns = {
  general_styles: function general_styles(selector, vars$$1) {
    return [sel(selector, [alignLeft(vars$$1), flex.layout, {
      position: "relative",

      ".pe-list-tile--navigation": {
        " .pe-list-tile__title": {
          whiteSpace: "pre-wrap"
        }
      },

      ".pe-list-tile--sticky": mixin.sticky(2),

      " .pe-list-tile__primary": {
        width: "100%"
      },

      " .pe-list-tile__primary, .pe-list-tile__secondary": [flex.layoutHorizontal, {
        textDecoration: "none",
        color: "inherit",
        border: "none"
      }],

      ":not(.pe-list-tile--header) .pe-list-tile__primary": [flex.flex(), {
        position: "relative",

        " .pe-list-tile__content:not(.pe-list-tile__content-front)": [flex.flex()]
      }],

      ":not(.pe-list-tile--disabled)": {
        outline: "none"
      },

      " .pe-list-tile__secondary": {
        textAlign: "right",
        position: "relative"
      },

      " .pe-list-tile__content": [flex.layoutVertical, flex.selfCenter, {
        width: "100%",

        ".pe-list-tile__content-front": {
          flexShrink: 0
        }
      }],

      " .pe-list-tile__title": {
        whiteSpace: "normal"
      },

      " .pe-list-tile__subtitle": [mixin.ellipsis(vars$$1.subtitle_line_count, vars$$1.line_height_subtitle, "px"), {
        fontSize: vars$$1.font_size_subtitle + "px",
        fontWeight: vars$$1.font_weight_subtitle,
        lineHeight: vars$$1.line_height_subtitle + "px",

        ".pe-list-tile__high-subtitle": [mixin.ellipsis(vars$$1.high_subtitle_line_count, vars$$1.line_height_subtitle, "px"), {
          whiteSpace: "normal"
        }]
      }],

      ".pe-list-tile--selected, &.pe-list-tile--disabled": {
        "&, a": {
          pointerEvents: "none"
        }
      },

      ".pe-list-tile--subtitle": {
        " .pe-list-tile__content": {
          " .pe-list-tile__title": {
            padding: 0
          }
        }
      },

      ".pe-list-tile--high-subtitle": {
        " .pe-list-tile--high-subtitle .pe-list-tile__secondary": [flex.layoutHorizontal, flex.layoutStart],
        " .pe-list-tile__content": [flex.selfStart, {
          " .pe-list-tile__title": {
            padding: 0
          }
        }]
      },

      // List header
      ".pe-list-tile--header": {
        pointerEvents: "none",

        " .pe-list-tile__content": {
          paddingTop: 0,
          paddingBottom: 0
        },
        " .pe-list-tile__title": {
          padding: 0
        }
      },

      // Firefox only
      "@supports (-moz-appearance:none) and (display:contents)": {
        " .pe-list-tile__primary, .pe-list-tile__content": {
          overflow: "hidden"
        }
      },

      // Menu

      ".pe-dialog .pe-menu__content &": {
        " .pe-list-tile__content": {
          paddingLeft: "24px",
          paddingRight: "24px"
        },
        " .pe-list-tile__content-front": {
          paddingRight: 0,
          width: "64px",
          marginRight: "-7px"
        },

        " .pe-list-tile__title": mixin.ellipsis("none")
      },

      ".pe-menu__content &": {
        ":not(.pe-list-tile--disabled)": {
          cursor: "default",

          "&, .pe-list-tile__primary, .pe-list-tile__secondary": {
            " .pe-list-tile__title, .pe-list-tile__subtitle": {
              userSelect: "none",
              "-moz-user-select": "none"
            }
          }
        }
      },

      // Non-touch

      "html.pe-no-touch &.pe-list-tile--hoverable, \
        html.pe-no-touch &.pe-list-tile--selectable": {
        ":not(.pe-list-tile--header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected):hover": {
          cursor: "pointer"
        }
      }
    }]), _defineProperty({}, selectorRTL(selector), alignRight(vars$$1))];
  },
  title_line_count: function title_line_count(selector, vars$$1) {
    return [title_line_count_single_line_height(selector, vars$$1)];
  },
  single_line_height: function single_line_height(selector, vars$$1) {
    return [title_line_count_single_line_height(selector, vars$$1)];
  },
  font_size_title: function font_size_title(selector, vars$$1) {
    return [sel(selector, {
      fontSize: vars$$1.font_size_title + "px",

      " .pe-list-tile__secondary": {
        fontSize: vars$$1.font_size_title + "px"
      }
    })];
  },
  font_weight_title: function font_weight_title(selector, vars$$1) {
    return [sel(selector, {
      fontWeight: vars$$1.font_weight_title
    })];
  },
  font_size_navigation_title: function font_size_navigation_title(selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--navigation": {
        fontSize: vars$$1.font_size_navigation_title + "px"
      }
    })];
  },
  font_weight_navigation_title: function font_weight_navigation_title(selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--navigation": {
        fontWeight: vars$$1.font_weight_navigation_title
      }
    })];
  },
  padding: function padding(selector, vars$$1) {
    return [sel(selector, {
      ":not(.pe-list-tile--header) .pe-list-tile__primary": {
        " .pe-list-tile__content:not(.pe-list-tile__content-front)": [paddingV(vars$$1.padding, vars$$1.padding + 1)]
      },

      " .pe-list-tile__content": {
        ".pe-list-tile__content-front": [paddingV(vars$$1.padding - 5)]
      }
    })];
  },
  side_padding: function side_padding(selector, vars$$1) {
    return [sel(selector, {
      " .pe-list-tile__content": [paddingH(vars$$1.side_padding)]
    })];
  },
  compact_front_item_width: function compact_front_item_width(selector, vars$$1) {
    return [sel(selector, {
      " .pe-list-tile__content-front": {
        ".pe-list-tile--compact-front": {
          width: vars$$1.compact_front_item_width + "px"
        }
      }
    })];
  },
  front_item_width: function front_item_width(selector, vars$$1) {
    return [sel(selector, {
      " .pe-list-tile__content-front": {
        ":not(.pe-list-tile--compact-front)": {
          width: vars$$1.front_item_width + "px"
        }
      }
    })];
  },
  font_size_small: function font_size_small(selector, vars$$1) {
    return [sel(selector, {
      " .pe-list-tile__content": {
        " small": {
          fontSize: vars$$1.font_size_small + "px"
        }
      }
    })];
  },
  has_high_subtitle_padding: function has_high_subtitle_padding(selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--high-subtitle": {
        " .pe-list-tile__content": [paddingV(vars$$1.has_high_subtitle_padding, vars$$1.has_high_subtitle_padding + 1)]
      }
    })];
  },
  has_subtitle_padding: function has_subtitle_padding(selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--subtitle": {
        " .pe-list-tile__content": [paddingV(vars$$1.has_subtitle_padding, vars$$1.has_subtitle_padding + 1)]
      }
    })];
  },
  single_height: function single_height(selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--header": {
        height: vars$$1.single_height + "px",

        " .pe-list-tile__title": [mixin.ellipsis(1, vars$$1.single_height, "px"), {
          lineHeight: vars$$1.single_height + "px",
          padding: 0
        }]
      }
    })];
  },
  font_size_list_header: function font_size_list_header(selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--header": {
        " .pe-list-tile__title": {
          fontSize: vars$$1.font_size_list_header + "px"
        }
      }
    })];
  },
  font_weight_list_header: function font_weight_list_header(selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--header": {
        " .pe-list-tile__title": {
          fontWeight: vars$$1.font_weight_list_header
        }
      }
    })];
  },
  compact_padding: function compact_padding(selector, vars$$1) {
    return [sel(selector, {
      " .pe-list--compact &, &.pe-list-tile--compact": {
        ":not(.pe-list-tile--header)": {
          " .pe-list-tile__content": paddingV(vars$$1.compact_padding, vars$$1.compact_padding + 1)
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
      ".pe-list-tile--header": {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          backgroundColor: "inherit"
        }
      },
      ":not(.pe-list-tile--disabled)": {
        " a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus": {
          outline: "none",
          backgroundColor: "inherit"
        }
      },
      "&.pe-list-tile--sticky": {
        backgroundColor: "inherit"
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint + "_title", function (selector, vars$$1) {
    return [sel$1(selector, {
      color: vars$$1["color_" + tint + "_title"]
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_background", function (selector, vars$$1) {
    return [sel$1(selector, {
      backgroundColor: vars$$1["color_" + tint + "_background"],

      "&.pe-list-tile--sticky": {
        backgroundColor: vars$$1["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_list_header", function (selector, vars$$1) {
    return [sel$1(selector, {
      ".pe-list-tile--header": {
        color: vars$$1["color_" + tint + "_list_header"]
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_subtitle", function (selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-list-tile__subtitle": {
        color: vars$$1["color_" + tint + "_subtitle"]
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_secondary", function (selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-list-tile__secondary": {
        color: vars$$1["color_" + tint + "_secondary"]
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_front", function (selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-list-tile__content-front": {
        color: vars$$1["color_" + tint + "_front"]
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_text_disabled", function (selector, vars$$1) {
    return [sel$1(selector, {
      ".pe-list-tile--disabled": {
        "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
          color: vars$$1["color_" + tint + "_text_disabled"]
        }
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_selected_background", function (selector, vars$$1) {
    return [sel$1(selector, {
      ".pe-list-tile--selected": {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          backgroundColor: vars$$1["color_" + tint + "_selected_background"]
        }
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_highlight_background", function (selector, vars$$1) {
    return [sel$1(selector, {
      ".pe-list-tile--highlight:not(.pe-list-tile--selected)": {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          backgroundColor: vars$$1["color_" + tint + "_highlight_background"]
        }
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_focus_background", function (selector, vars$$1) {
    return [sel$1(selector, {
      ":not(.pe-list-tile--disabled)": {
        " a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus": {
          backgroundColor: vars$$1["color_" + tint + "_focus_background"]
        }
      }
    })];
  }), _ref2;
};

var hoverTintFns = function hoverTintFns(tint) {
  var _ref3;

  return _ref3 = {}, _defineProperty$1(_ref3, "color_" + tint + "_hover", function (selector, vars$$1) {
    return [sel$1(selector, {
      color: vars$$1["color_" + tint + "_hover"]
    })];
  }), _defineProperty$1(_ref3, "color_" + tint + "_hover_background", function (selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-list-tile__primary, .pe-list-tile__secondary": {
        backgroundColor: vars$$1["color_" + tint + "_hover_background"]
      }
    })];
  }), _defineProperty$1(_ref3, "color_" + tint + "_hover_front", function (selector, vars$$1) {
    return [sel$1(selector, {
      " .pe-list-tile__primary .pe-list-tile__content-front": {
        color: vars$$1["color_" + tint + "_hover_front"]
      }
    })];
  }), _ref3;
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

  noTouchStyle(["html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable", "html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable "], selector, componentVars, customVars, "dark"), // has/inside dark tone

  noTouchStyle(["html.pe-no-touch .pe-list-tile--hoverable", "html.pe-no-touch .pe-list-tile--hoverable ", "html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable", "html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable "], selector, componentVars, customVars, "light")];
});

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateCustomStyles([customSelector, selector], vars$1, customVars, fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars$1, customVars, fns) : styler.createStyleSheets([selector], vars$1, fns);
};

styler.generateStyles([selector], vars$1, fns);

export { addStyle, getStyle, vars$1 as vars };
