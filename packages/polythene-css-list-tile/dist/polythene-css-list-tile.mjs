import { createColor, sel, createLayout, flex, mixin, selectorRTL, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

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
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

var _selected = function selected(selector, vars$$1, tint) {
  var selectedTextColor = vars$$1["color_" + tint + "_selected_text"];
  return sel(selector, _objectSpread({}, selectedTextColor !== "inherit" ? {
    "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
      color: selectedTextColor
    }
  } : undefined, {
    " .pe-list-tile__primary, pe-list-tile__secondary": {
      backgroundColor: vars$$1["color_" + tint + "_selected_background"]
    }
  }));
};

var generalFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      ".pe-list-tile--header": {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          backgroundColor: "inherit"
        }
      },
      ":not(.pe-list-tile--disabled):not(.pe-list-tile--selected)": {
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
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_title", function (selector, vars$$1) {
    return [sel(selector, {
      color: vars$$1["color_" + tint + "_title"]
    })];
  }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [sel(selector, {
      backgroundColor: vars$$1["color_" + tint + "_background"],
      "&.pe-list-tile--sticky": {
        backgroundColor: vars$$1["color_" + tint + "_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_list_header", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--header": {
        color: vars$$1["color_" + tint + "_list_header"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_subtitle", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-list-tile__subtitle": {
        color: vars$$1["color_" + tint + "_subtitle"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_secondary", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-list-tile__secondary": {
        color: vars$$1["color_" + tint + "_secondary"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_front", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-list-tile__content-front": {
        color: vars$$1["color_" + tint + "_front"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_text_disabled", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--disabled": {
        "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
          color: vars$$1["color_" + tint + "_text_disabled"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_highlight_background", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--highlight:not(.pe-list-tile--selected)": {
        " .pe-list-tile__primary, pe-list-tile__secondary": {
          backgroundColor: vars$$1["color_" + tint + "_highlight_background"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_background", function (selector, vars$$1) {
    return [sel(selector, {
      ":not(.pe-list-tile--disabled):not(.pe-list-tile--selected)": {
        " a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus": {
          backgroundColor: vars$$1["color_" + tint + "_focus_background"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_selected_text", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--selected": _selected(selector, vars$$1, tint)
    })];
  }), _defineProperty(_ref, "color_" + tint + "_selected_background", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--selected": _selected(selector, vars$$1, tint)
    })];
  }), _ref;
};

var hoverTintFns = function hoverTintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty(_ref2, "color_" + tint + "_hover", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--hoverable:not(.pe-list-tile--selected)": {
        color: vars$$1["color_" + tint + "_hover"]
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_hover_background", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--hoverable:not(.pe-list-tile--selected)": {
        " .pe-list-tile__primary, .pe-list-tile__secondary": {
          backgroundColor: vars$$1["color_" + tint + "_hover_background"]
        }
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_hover_front", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--hoverable:not(.pe-list-tile--selected)": {
        " .pe-list-tile__primary .pe-list-tile__content-front": {
          color: vars$$1["color_" + tint + "_hover_front"]
        }
      }
    })];
  }), _ref2;
};

var themeFns = function themeFns(tint) {
  return {
    selected: function selected(selector, vars$$1) {
      return vars$$1.selected && _selected(selector, vars$$1, tint);
    }
  };
};

var lightTintFns = _extends({}, generalFns, tintFns("light"), themeFns("light"));

var darkTintFns = _extends({}, generalFns, tintFns("dark"), themeFns("dark"));

var lightTintHoverFns = hoverTintFns("light");
var darkTintHoverFns = hoverTintFns("dark");
var color = createColor({
  varFns: {
    lightTintFns: lightTintFns,
    darkTintFns: darkTintFns,
    lightTintHoverFns: lightTintHoverFns,
    darkTintHoverFns: darkTintHoverFns
  }
});

var alignSide = function alignSide(isRTL) {
  return function (vars$$1) {
    return {
      // eslint-disable-line no-unused-vars
      " .pe-list-tile__content-front + .pe-list-tile__content": _defineProperty({}, isRTL ? "paddingRight" : "paddingLeft", 0)
    };
  };
}; // eslint-disable-line no-unused-vars


var alignLeft = alignSide(false);
var alignRight = alignSide(true);
/**
 * @param {number} left
 * @param {number} [right]
 */

var paddingH = function paddingH(left) {
  var right = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : left;
  return {
    "padding-left": left + "px",
    "padding-right": right + "px"
  };
};
/**
 * @param {number} top 
 * @param {number} [bottom] 
 */


var paddingV = function paddingV(top) {
  var bottom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : top;
  return {
    "padding-top": top + "px",
    "padding-bottom": bottom + "px"
  };
};
/**
 * @param {string} selector 
 * @param {ListTileVars} vars 
 */


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
/**
 * @param {string} selector 
 * @param {ListTileVars} vars 
 */


var unSelectable = function unSelectable(selector, vars$$1) {
  return (// eslint-disable-line no-unused-vars 
    sel(selector, {
      "&, a": {
        pointerEvents: "none"
      }
    })
  );
};
/**
 * @param {string} selector 
 * @param {ListTileVars} vars 
 */


var _inset = function inset(selector, vars$$1) {
  return insetH(selector, vars$$1), insetV(selector, vars$$1);
};
/**
 * @param {string} selector 
 * @param {ListTileVars} vars 
 */


var insetH = function insetH(selector, vars$$1) {
  var margin = vars$$1.inset_h_size;
  return sel(selector, {
    marginLeft: margin + "px",
    marginRight: margin + "px",
    " .pe-list-tile__content": {
      marginLeft: -margin + "px",
      marginRight: -margin + "px"
    }
  });
};
/**
 * @param {string} selector 
 * @param {ListTileVars} vars 
 */


var insetV = function insetV(selector, vars$$1) {
  var margin = vars$$1.inset_v_size;
  return sel(selector, {
    marginTop: margin + "px",
    marginBottom: margin + "px"
  });
};
/**
 * @param {string} selector 
 * @param {ListTileVars} vars 
 */


var _rounded = function rounded(selector, vars$$1) {
  return sel(selector, {
    "&, .pe-list-tile__primary": {
      borderRadius: vars$$1.rounded_border_radius + "px"
    }
  });
};

var varFns = {
  /**
   * @param {string} selector 
   * @param {ListTileVars} vars 
   */
  general_styles: function general_styles(selector, vars$$1) {
    return [sel(selector, [alignLeft(vars$$1), flex.layout, {
      position: "relative",
      ".pe-list-tile--navigation": {
        " .pe-list-tile__title": {
          whiteSpace: "pre-wrap"
        }
      },
      ".pe-list-tile--sticky": mixin.sticky(2),
      ".pe-list-tile--inset-h": insetH(selector, vars$$1),
      ".pe-list-tile--inset-v": insetV(selector, vars$$1),
      " .pe-list-tile__primary": {
        width: "100%"
      },
      " .pe-list-tile__primary, .pe-list-tile__secondary": [flex.layoutHorizontal, mixin.defaultTransition("background", ".200s"), {
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
      ".pe-list-tile--selected, &.pe-list-tile--disabled": unSelectable(selector, vars$$1),
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
      ":not(.pe-list-tile--header)": {
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
  inset_size: function inset_size(selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--inset": _inset(selector, vars$$1)
    })];
  },
  rounded_border_radius: function rounded_border_radius(selector, vars$$1) {
    return [sel(selector, {
      ".pe-list-tile--rounded": _rounded(selector, vars$$1)
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
          " .pe-list-tile__content:not(.pe-list-tile__content-front)": paddingV(vars$$1.compact_padding, vars$$1.compact_padding + 1)
        }
      }
    })];
  },
  // Theme vars
  inset: function inset(selector, vars$$1) {
    return vars$$1.inset && _inset(selector, vars$$1);
  },
  inset_h: function inset_h(selector, vars$$1) {
    return vars$$1.inset_h && insetH(selector, vars$$1);
  },
  inset_v: function inset_v(selector, vars$$1) {
    return vars$$1.inset_h && insetV(selector, vars$$1);
  },
  rounded: function rounded(selector, vars$$1) {
    return vars$$1.rounded && _rounded(selector, vars$$1);
  },
  selected: function selected(selector, vars$$1) {
    return vars$$1.selected && unSelectable(selector, vars$$1);
  }
};
var layout = createLayout({
  varFns: varFns
});

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
var themeVars = {
  inset: false,
  inset_h: false,
  inset_v: false,
  selected: false,
  rounded: false
};
/**
 * @type {ListTileVars} listTileVars
 */

var listTileVars = _objectSpread({
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
  inset_h_size: 1 * vars.grid_unit_component,
  // 8
  inset_v_size: 1 * vars.grid_unit_component,
  // 8
  line_height_subtitle: 20,
  padding: 13,
  rounded_border_radius: vars.unit_item_border_radius,
  side_padding: 2 * vars.grid_unit_component,
  // 16
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
  color_light_selected_text: "inherit",
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
  color_dark_selected_text: "inherit",
  color_dark_selected_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_highlight_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover)
}, themeVars);

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, listTileVars);
var getStyle = styler.createGetStyle(selector, fns, listTileVars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: listTileVars
});

export { addStyle, getStyle, color, layout, listTileVars as vars };
