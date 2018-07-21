import { mixin, sel, createLayout, createColor, selectorRTL, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

      " .pe-button__wash": [mixin.fit(), {
        zIndex: 0,
        borderRadius: "inherit",
        pointerEvents: "none"
      }]
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

var baseLayout = createLayout({ varFns: varFns });

var classes = {
    component: "pe-text-button",
    super: "pe-button",
    row: "pe-button-row",

    // elements      
    content: "pe-button__content",
    label: "pe-button__label",
    textLabel: "pe-button__text-label",
    wash: "pe-button__wash",
    dropdown: "pe-button__dropdown",

    // states      
    border: "pe-button--border",
    disabled: "pe-button--disabled",
    inactive: "pe-button--inactive",
    selected: "pe-button--selected",
    hasDropdown: "pe-button--dropdown",
    highLabel: "pe-button--high-label",
    extraWide: "pe-button--extra-wide",
    separatorAtStart: "pe-button--separator-start",
    dropdownOpen: "pe-button--dropdown-open",
    dropdownClosed: "pe-button--dropdown-closed"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles() {
    return [];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty$1(_ref, "color_" + tint + "_text", function (selector, vars$$1) {
    return [sel(selector, {
      ":not(.pe-button--disabled)": {
        "&, &:link, &:visited": {
          color: vars$$1["color_" + tint + "_text"]
        }
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_disabled_text", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--disabled": {
        color: vars$$1["color_" + tint + "_disabled_text"]
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_background", function (selector, vars$$1) {
    return [sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__content": {
          backgroundColor: vars$$1["color_" + tint + "_background"]
        }
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_active_background", function (selector, vars$$1) {
    return [sel(selector, {
      ":not(.pe-button--disabled)": {
        ".pe-button--selected": {
          " .pe-button__content": {
            backgroundColor: vars$$1["color_" + tint + "_active_background"]
          }
        }
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_disabled_background", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content": {
          backgroundColor: vars$$1["color_" + tint + "_disabled_background"]
        }
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_border", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--border:not(.pe-button--disabled)": {
        " .pe-button__content": {
          borderColor: vars$$1["color_" + tint + "_border"]
        }
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_active_border", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--border.pe-button--selected": {
        " .pe-button__content": {
          borderColor: vars$$1["color_" + tint + "_active_border"]
        }
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_disabled_border", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--border.pe-button--disabled": {
        " .pe-button__content": {
          borderColor: vars$$1["color_" + tint + "_disabled_border"]
        }
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_icon", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-button__dropdown": {
        color: vars$$1["color_" + tint + "_icon"]
      }
    })];
  }), _defineProperty$1(_ref, "color_" + tint + "_separator", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--separator-start": {
        " .pe-button__content": {
          borderColor: vars$$1["color_" + tint + "_separator"]
        }
      }
    })];
  }), _ref;
};

var hoverTintFns = function hoverTintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint + "_hover", function (selector, vars$$1) {
    return [sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        color: vars$$1["color_" + tint + "_hover"]
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_hover_border", function (selector, vars$$1) {
    return [sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__content": {
          borderColor: vars$$1["color_" + tint + "_hover_border"]
        }
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_wash_background", function (selector, vars$$1) {
    return [sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__wash": {
          backgroundColor: vars$$1["color_" + tint + "_wash_background"]
        }
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_hover_background", function (selector, vars$$1) {
    return [sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__content": {
          backgroundColor: vars$$1["color_" + tint + "_hover_background"]
        }
      }
    })];
  }), _defineProperty$1(_ref2, "color_" + tint + "_hover_icon", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-button__dropdown": {
        color: vars$$1["color_" + tint + "_hover_icon"]
      }
    })];
  }), _ref2;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var lightTintHoverFns = hoverTintFns("light");
var darkTintHoverFns = hoverTintFns("dark");

var color = createColor({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns, lightTintHoverFns: lightTintHoverFns, darkTintHoverFns: darkTintHoverFns }
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alignSide = function alignSide(isRTL) {
  return function () {
    return {
      ".pe-button--separator-start .pe-button__content": {
        borderStyle: isRTL ? "none solid none none" : "none none none solid"
      }
    };
  };
};
var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var line_height_label_padding_v = function line_height_label_padding_v(selector, vars$$1) {
  return sel(selector, {
    " .pe-button__dropdown": {
      minHeight: "calc((1em * " + vars$$1.line_height + ") + 2 * " + vars$$1.label_padding_v + "px)"
    }
  });
};

var outer_padding_v_label_padding_v = function outer_padding_v_label_padding_v(selector, vars$$1) {
  return sel(selector, {
    ".pe-button--high-label": {
      padding: 0,

      " .pe-button__label": {
        padding: vars$$1.outer_padding_v + vars$$1.label_padding_v + "px 0"
      }
    }
  });
};

var line_height_outer_padding_v_label_padding_v = function line_height_outer_padding_v_label_padding_v(selector, vars$$1) {
  return sel(selector, {
    ".pe-button--high-label": {
      " .pe-button__label, .pe-button__dropdown": {
        minHeight: "calc((1em * " + vars$$1.line_height + ") + 2 * " + (vars$$1.outer_padding_v + vars$$1.label_padding_v) + "px)"
      }
    }
  });
};

var border_radius_button_group = function border_radius_button_group(selector, vars$$1, isRTL) {
  var _peButton__content, _peButton__content2;

  return sel(selector, {
    " .pe-button__content": {
      borderRadius: vars$$1.border_radius + "px"
    },
    ":not(:first-child)": {
      " .pe-button__content": (_peButton__content = {}, _defineProperty$2(_peButton__content, isRTL ? "borderTopRightRadius" : "borderTopLeftRadius", 0), _defineProperty$2(_peButton__content, isRTL ? "borderBottomRightRadius" : "borderBottomLeftRadius", 0), _peButton__content)
    },
    ":not(:last-child)": {
      " .pe-button__content": (_peButton__content2 = {}, _defineProperty$2(_peButton__content2, isRTL ? "borderTopLeftRadius" : "borderTopRightRadius", 0), _defineProperty$2(_peButton__content2, isRTL ? "borderBottomLeftRadius" : "borderBottomRightRadius", 0), _peButton__content2)
    }
  });
};

var varFns$1 = {
  general_styles: function general_styles(selector) {
    return [sel(selector, [alignLeft(), {
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
        " .pe-button__wash, .pe-ripple": mixin.fit(-1),

        " .pe-button__content": {
          borderStyle: "solid",
          borderWidth: "1px"
        }
      },

      " .pe-button__label, .pe-button__dropdown": {
        whiteSpace: "pre",
        userSelect: "none",
        "-moz-user-select": "none"
      },

      " .pe-button__text-label": {
        display: "inline-block",
        lineHeight: 1
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
          marginLeft: "6px",
          minWidth: 0
        }
      },

      " .pe-button-group &": {
        minWidth: 0
      },

      " .pe-button__dropdown .pe-svg": mixin.defaultTransition("transform"),

      ".pe-button--dropdown-open": {
        " .pe-button__dropdown .pe-svg": {
          transform: "rotate(-180deg)"
        }
      }
    }]), [sel(selectorRTL(selector), alignRight())]];
  },
  border_radius: function border_radius(selector, vars$$1) {
    return [sel(selector, {
      " .pe-button__content": {
        borderRadius: vars$$1.border_radius + "px"
      }
    }), border_radius_button_group(".pe-button-group " + selector, vars$$1, false), border_radius_button_group(selectorRTL(".pe-button-group " + selector), vars$$1, true)];
  },
  border_width: function border_width(selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--border": {
        " .pe-button__content": {
          borderWidth: vars$$1.border_width + "px"
        }
      },
      " .pe-button-group & + &": {
        marginLeft: -vars$$1.border_width + "px"
      }
    })];
  },
  min_width: function min_width(selector, vars$$1) {
    return [sel(selector, {
      minWidth: vars$$1.min_width + "px"
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [sel(selector, {
      " .pe-button__content, .pe-button__wash": [mixin.defaultTransition("all", vars$$1.animation_duration)]
    })];
  },
  padding_h: function padding_h(selector, vars$$1) {
    return [sel(selector, {
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
    return [sel(selector, {
      ".pe-button--extra-wide .pe-button__content": {
        padding: "0 " + vars$$1.padding_h_extra_wide + "px"
      }
    })];
  },
  label_padding_v: function label_padding_v(selector, vars$$1) {
    return [sel(selector, {
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
    return [sel(selector, {
      " .pe-button__label": {
        fontWeight: vars$$1.font_weight
      }
    })];
  },
  text_transform: function text_transform(selector, vars$$1) {
    return [sel(selector, {
      " .pe-button__label": {
        textTransform: vars$$1.text_transform
      }
    })];
  },
  font_size: function font_size(selector, vars$$1) {
    return [sel(selector, {
      " .pe-button__label, .pe-button__dropdown": {
        fontSize: vars$$1.font_size + "px"
      }
    })];
  },
  line_height: function line_height(selector, vars$$1) {
    return [sel(selector, {
      " .pe-button__label, .pe-button__dropdown": {
        lineHeight: vars$$1.line_height
      }
    }), line_height_label_padding_v(selector, vars$$1), line_height_outer_padding_v_label_padding_v(selector, vars$$1)];
  },
  dropdown_icon_size: function dropdown_icon_size(selector, vars$$1) {
    return [sel(selector, {
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
    return [sel(selector, {
      padding: vars$$1.outer_padding_v + "px 0",

      ".pe-button--high-label": {
        padding: 0
      }
    }), outer_padding_v_label_padding_v(selector, vars$$1), line_height_outer_padding_v_label_padding_v(selector, vars$$1)];
  },
  separator_width: function separator_width(selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--separator-start": {
        " .pe-button__content": {
          borderWidth: vars$$1.separator_width + "px"
        }
      }
    })];
  },
  padding_h_border: function padding_h_border(selector, vars$$1) {
    return [sel(selector, {
      ".pe-button--border": {
        " .pe-button__content": {
          padding: "0 " + vars$$1.padding_h_border + "px"
        }
      }
    })];
  },
  letter_spacing: function letter_spacing(selector, vars$$1) {
    return [sel(selector, {
      letterSpacing: vars$$1.letter_spacing + "px"
    })];
  }
};

var layout = createLayout({ varFns: varFns$1 });

var touch_height = vars.unit_touch_height; // 48
var height = 36;
var border_width = 1;

var vars$1 = {
  general_styles: true,

  animation_duration: vars.animation_duration,
  border_radius: vars.unit_item_border_radius,
  border_width: border_width, // no border in MD, but used to correctly set the height when a theme does set a border
  dropdown_icon_size: 24,
  font_size: 14,
  font_weight: 500,
  label_padding_v: 11,
  letter_spacing: 0.75,
  line_height: 1,
  min_width: 8 * vars.grid_unit_component,
  outer_padding_v: (touch_height - height) / 2, // (48 - 36) / 2 = 6
  padding_h: 2 * vars.grid_unit, // 8
  padding_h_border: 4 * vars.grid_unit, // 16
  padding_h_extra_wide: 6 * vars.grid_unit, // 24
  row_margin_h: vars.grid_unit,
  separator_width: border_width,
  text_transform: "uppercase",

  color_light_background: "transparent",
  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_wash_background: rgba(vars.color_light_foreground, vars.blend_light_background_hover),
  color_light_active_background: rgba(vars.color_light_foreground, vars.blend_light_background_active),
  color_light_disabled_background: "transparent",
  color_light_disabled_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_icon: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_separator: rgba(vars.color_light_foreground, vars.blend_light_border_light),

  color_dark_background: "transparent",
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_wash_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_hover),
  color_dark_active_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_active),
  color_dark_disabled_background: "transparent",
  color_dark_disabled_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_icon: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_separator: rgba(vars.color_dark_foreground, vars.blend_dark_border_light),

  color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_medium), // only specify this variable to get all 4 states
  // color_light_hover_border:             "transparent",
  // color_light_active_border:            "transparent",
  color_light_disabled_border: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  //
  color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_medium), // only specify this variable to get all 4 states
  // color_dark_hover_border:              "transparent",
  // color_dark_active_border:             "transparent",
  color_dark_disabled_border: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled)

  // color_light_hover:                    rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  // color_light_hover_background:         "transparent",
  // color_light_hover_icon:               "inherit",
  //
  // color_dark_hover:                     rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  // color_dark_hover_background:          "transparent",
  // color_dark_hover_icon:                "inherit",

};

var fns = [layout, color];
var baseFns = [baseLayout];
var superSelector = "." + classes.super;
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref.mediaQuery;

  customSelector && styler.addStyle({
    selectors: [customSelector, superSelector],
    fns: baseFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
  customSelector && styler.addStyle({
    selectors: [customSelector, selector],
    fns: fns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  });
};

var getStyle = function getStyle() {
  var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var customVars = arguments[1];

  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      mediaQuery = _ref2.mediaQuery;

  return styler.getStyle({
    selectors: [customSelector, superSelector],
    fns: baseFns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  }).concat(styler.getStyle({
    selectors: [customSelector, selector],
    fns: fns,
    vars: vars$1,
    customVars: customVars,
    mediaQuery: mediaQuery
  }));
};

styler.addStyle({
  selectors: [superSelector],
  fns: baseFns,
  vars: vars$1
});
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});

export { addStyle, color, getStyle, layout, vars$1 as vars };
