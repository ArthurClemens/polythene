import { createLayout, sel, mixin, createColor, selectorRTL, rgba, styler } from 'polythene-core-css';
import { sharedVarFns, sharedVars } from 'polythene-css-shadow';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-text-button",
  "super": "pe-button",
  row: "pe-button-row",
  // elements      
  content: "pe-button__content",
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  washColor: "pe-button__wash-color",
  dropdown: "pe-button__dropdown",
  // states      
  border: "pe-button--border",
  contained: "pe-button--contained",
  disabled: "pe-button--disabled",
  dropdownClosed: "pe-button--dropdown-closed",
  dropdownOpen: "pe-button--dropdown-open",
  extraWide: "pe-button--extra-wide",
  hasDropdown: "pe-button--dropdown",
  highLabel: "pe-button--high-label",
  inactive: "pe-button--inactive",
  raised: "pe-button--raised",
  selected: "pe-button--selected",
  separatorAtStart: "pe-button--separator-start",
  hasHover: "pe-button--has-hover"
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
      " .pe-button__label": {
        position: "relative",
        display: "block",
        borderRadius: "inherit",
        pointerEvents: "none"
      },
      " .pe-button__wash, .pe-button__wash-color": [mixin.fit(), {
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
  row_margin_h: function row_margin_h(selector, vars) {
    return [{
      ".pe-button-row": _defineProperty({
        margin: "0 -".concat(vars.row_margin_h, "px")
      }, " ".concat(selector), {
        margin: "0 ".concat(vars.row_margin_h, "px")
      })
    }];
  }
};
var superLayout = createLayout({
  varFns: varFns
});

var _border = function border(selector, vars, tint) {
  return sel(selector, {
    ":not(.pe-button--disabled)": {
      " .pe-button__content": {
        borderColor: vars["color_" + tint + "_border"]
      }
    }
  });
};

var generalFns = {
  general_styles: function general_styles() {
    return [];
  }
};
/**
 * @param {tint} tint 
 */

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_text", function (selector, vars) {
    return [sel(selector, {
      ":not(.pe-button--disabled)": {
        "&, &:link, &:visited": {
          color: vars["color_" + tint + "_text"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_disabled_text", function (selector, vars) {
    return [sel(selector, {
      ".pe-button--disabled": {
        color: vars["color_" + tint + "_disabled_text"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_background", function (selector, vars) {
    return [sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_background"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_active_background", function (selector, vars) {
    return [sel(selector, {
      ":not(.pe-button--disabled)": {
        ".pe-button--selected": {
          " .pe-button__content": {
            backgroundColor: vars["color_" + tint + "_active_background"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_disabled_background", function (selector, vars) {
    return [sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_disabled_background"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_wash_background", function (selector, vars) {
    return [sel(selector, {
      " .pe-button__wash-color": {
        backgroundColor: vars["color_" + tint + "_wash_background"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_wash_opacity", function (selector, vars) {
    return [sel(selector, {
      " .pe-button__wash-color": {
        opacity: vars["color_" + tint + "_wash_opacity"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_border", function (selector, vars) {
    return [_border("".concat(selector, ".pe-button--border"), vars, tint)];
  }), _defineProperty(_ref, "border", function border(selector, vars) {
    return [_border(selector, vars, tint)];
  }), _defineProperty(_ref, "color_" + tint + "_active_border", function (selector, vars) {
    return [sel(selector, {
      ".pe-button--border.pe-button--selected": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_active_border"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_disabled_border", function (selector, vars) {
    return [sel(selector, {
      ".pe-button--border.pe-button--disabled": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_disabled_border"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_icon", function (selector, vars) {
    return [sel(selector, {
      " .pe-button__dropdown": {
        color: vars["color_" + tint + "_icon"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_separator", function (selector, vars) {
    return [sel(selector, {
      ".pe-button--separator-start": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_separator"]
        }
      }
    })];
  }), _ref;
};
/**
 * @param {tint} tint 
 */


var hoverTintFns = function hoverTintFns(tint) {
  var _ref2;

  return _ref2 = {}, _defineProperty(_ref2, "color_" + tint + "_hover", function (selector, vars) {
    return [sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        color: vars["color_" + tint + "_hover"]
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_hover_border", function (selector, vars) {
    return [sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_hover_border"]
        }
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_hover_background", function (selector, vars) {
    return [sel(selector, {
      ":not(.pe-button--disabled):not(.pe-button--selected)": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_hover_background"]
        }
      }
    })];
  }), _defineProperty(_ref2, "color_" + tint + "_hover_icon", function (selector, vars) {
    return [sel(selector, {
      " .pe-button__dropdown": {
        color: vars["color_" + tint + "_hover_icon"]
      }
    })];
  }), _ref2;
};

var lightTintFns = _objectSpread({}, generalFns, tintFns("light"));

var darkTintFns = _objectSpread({}, generalFns, tintFns("dark"));

var lightTintHoverFns = hoverTintFns("light");
var darkTintHoverFns = hoverTintFns("dark");
var superColor = createColor({
  varFns: {
    lightTintFns: lightTintFns,
    darkTintFns: darkTintFns,
    lightTintHoverFns: lightTintHoverFns,
    darkTintHoverFns: darkTintHoverFns
  }
});

/** 
 * @param {boolean} isRTL 
 */

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

var line_height_label_padding_v = function line_height_label_padding_v(selector, vars) {
  return sel(selector, {
    " .pe-button__dropdown": {
      minHeight: "calc((1em * ".concat(vars.line_height, ") + 2 * ").concat(vars.label_padding_v, "px)")
    }
  });
};

var outer_padding_v_label_padding_v = function outer_padding_v_label_padding_v(selector, vars) {
  return sel(selector, {
    ".pe-button--high-label": {
      padding: 0,
      " .pe-button__label": {
        padding: vars.outer_padding_v + vars.label_padding_v + "px 0"
      }
    }
  });
};

var line_height_outer_padding_v_label_padding_v = function line_height_outer_padding_v_label_padding_v(selector, vars) {
  return sel(selector, {
    ".pe-button--high-label": {
      " .pe-button__label, .pe-button__dropdown": {
        minHeight: "calc((1em * ".concat(vars.line_height, ") + 2 * ").concat(vars.outer_padding_v + vars.label_padding_v, "px)")
      }
    }
  });
};

var border_radius_button_group = function border_radius_button_group(selector, vars, isRTL) {
  var _peButton__content, _peButton__content2;

  return sel(selector, {
    " .pe-button__content": {
      borderRadius: vars.border_radius + "px"
    },
    ":not(:first-child)": {
      " .pe-button__content": (_peButton__content = {}, _defineProperty(_peButton__content, isRTL ? "borderTopRightRadius" : "borderTopLeftRadius", 0), _defineProperty(_peButton__content, isRTL ? "borderBottomRightRadius" : "borderBottomLeftRadius", 0), _peButton__content)
    },
    ":not(:last-child)": {
      " .pe-button__content": (_peButton__content2 = {}, _defineProperty(_peButton__content2, isRTL ? "borderTopLeftRadius" : "borderTopRightRadius", 0), _defineProperty(_peButton__content2, isRTL ? "borderBottomLeftRadius" : "borderBottomRightRadius", 0), _peButton__content2)
    }
  });
};

var _border$1 = function border(selector) {
  return sel(selector, {
    " .pe-button__wash, .pe-button__wash-color, .pe-ripple": mixin.fit(-1),
    " .pe-button__content": {
      borderStyle: "solid"
    }
  });
};

var _border_width = function border_width(selector, vars) {
  return sel(selector, {
    " .pe-button__content": {
      borderWidth: vars.border_width + "px"
    },
    " .pe-button-group & + &": {
      marginLeft: -vars.border_width + "px"
    }
  });
};

var _contained = function contained(selector) {
  return sel(selector, {//
  });
};

var varFns$1 = _objectSpread({
  general_styles: function general_styles(selector) {
    return [sel(selector, [alignLeft(), {
      display: "inline-block",
      background: "transparent",
      border: "none",
      " .pe-button__content": {
        position: "relative",
        borderWidth: "1px",
        // default
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 0,
        paddingBottom: 0
      },
      ".pe-button--border": _border$1(selector),
      // TODO: move wash styles to base button
      " .pe-button__wash": {
        opacity: 0
      },
      // Always show wash on focus but not on click
      "&:focus:not(:active) .pe-button__wash": {
        opacity: 1
      },
      // Only show wash on hover when "has hover" class set
      ".pe-button--has-hover:hover": {
        " .pe-button__wash": {
          opacity: 1
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
        minWidth: "0",
        // IE 11 does not recognize "initial" here
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
  border_radius: function border_radius(selector, vars) {
    return [sel(selector, {
      " .pe-button__content": {
        borderRadius: vars.border_radius + "px"
      }
    }), border_radius_button_group(".pe-button-group ".concat(selector), vars, false), border_radius_button_group(selectorRTL(".pe-button-group ".concat(selector)), vars, true)];
  },
  border_width: function border_width(selector, vars) {
    return [_border_width(selector, vars)];
  },
  min_width: function min_width(selector, vars) {
    return [sel(selector, {
      minWidth: vars.min_width + "px"
    })];
  },
  animation_duration: function animation_duration(selector, vars) {
    return [sel(selector, {
      " .pe-button__content, .pe-button__wash": [mixin.defaultTransition("all", vars.animation_duration)]
    })];
  },
  padding_h: function padding_h(selector, vars) {
    return [sel(selector, {
      " .pe-button__content": {
        paddingLeft: vars.padding_h + "px",
        paddingRight: vars.padding_h + "px",
        " .pe-button__dropdown": {
          minWidth: "calc(36px - 2 * ".concat(vars.padding_h, "px)")
        },
        ".pe-button--dropdown": {
          " .pe-button__label + .pe-button__dropdown": {
            marginRight: "calc(7px - ".concat(vars.padding_h, "px)")
          }
        }
      }
    })];
  },
  padding_h_extra_wide: function padding_h_extra_wide(selector, vars) {
    return [sel(selector, {
      ".pe-button--extra-wide .pe-button__content": {
        padding: "0 " + vars.padding_h_extra_wide + "px"
      }
    })];
  },
  label_padding_v: function label_padding_v(selector, vars) {
    return [sel(selector, {
      " .pe-button__label": {
        padding: vars.label_padding_v + "px 0"
      },
      ".pe-button--border": {
        " .pe-button__label": {
          padding: vars.label_padding_v - 1 + "px 0"
        }
      }
    }), vars.line_height !== undefined && line_height_label_padding_v(selector, vars), vars.outer_padding_v !== undefined && outer_padding_v_label_padding_v(selector, vars), vars.line_height !== undefined && vars.outer_padding_v !== undefined && vars.label_padding_v !== undefined && line_height_outer_padding_v_label_padding_v(selector, vars)];
  },
  font_weight: function font_weight(selector, vars) {
    return [sel(selector, {
      " .pe-button__label": {
        fontWeight: vars.font_weight
      }
    })];
  },
  text_transform: function text_transform(selector, vars) {
    return [sel(selector, {
      " .pe-button__label": {
        textTransform: vars.text_transform
      }
    })];
  },
  font_size: function font_size(selector, vars) {
    return [sel(selector, {
      " .pe-button__label, .pe-button__dropdown": {
        fontSize: vars.font_size + "px"
      }
    })];
  },
  line_height: function line_height(selector, vars) {
    return [sel(selector, {
      " .pe-button__label, .pe-button__dropdown": {
        lineHeight: vars.line_height
      }
    }), vars.label_padding_v !== undefined && line_height_label_padding_v(selector, vars), vars.outer_padding_v !== undefined && vars.label_padding_v !== undefined && line_height_outer_padding_v_label_padding_v(selector, vars)];
  },
  dropdown_icon_size: function dropdown_icon_size(selector, vars) {
    return [sel(selector, {
      ".pe-button--dropdown": {
        " .pe-button__dropdown": {
          width: vars.dropdown_icon_size + "px"
        },
        " .pe-svg": {
          width: vars.dropdown_icon_size + "px",
          height: vars.dropdown_icon_size + "px",
          marginTop: -vars.dropdown_icon_size / 2 + "px"
        }
      }
    })];
  },
  outer_padding_v: function outer_padding_v(selector, vars) {
    return [sel(selector, {
      padding: vars.outer_padding_v + "px 0",
      ".pe-button--high-label": {
        padding: 0
      }
    }), vars.label_padding_v !== undefined && outer_padding_v_label_padding_v(selector, vars), vars.line_height !== undefined && vars.outer_padding_v !== undefined && vars.label_padding_v !== undefined && line_height_outer_padding_v_label_padding_v(selector, vars)];
  },
  separator_width: function separator_width(selector, vars) {
    return [sel(selector, {
      ".pe-button--separator-start": {
        " .pe-button__content": {
          borderWidth: vars.separator_width + "px"
        }
      }
    })];
  },
  letter_spacing: function letter_spacing(selector, vars) {
    return [sel(selector, {
      letterSpacing: vars.letter_spacing + "px"
    })];
  },
  // Theme vars
  border: function border(selector, vars) {
    return vars.border && _border$1(selector);
  },
  contained: function contained(selector, vars) {
    return vars.contained && _contained(selector);
  }
}, sharedVarFns);

var superLayout$1 = createLayout({
  varFns: varFns$1
});

var touch_height = vars.unit_touch_height; // 48

var height = 36;
var border_width = 1;

var themeVars = _extends({}, {
  border: false,
  contained: false
}, sharedVars);

var borderVars = {
  border_width: border_width,
  color_light_border: rgba(vars.color_light_foreground, vars.blend_light_border_medium),
  // only specify this variable to get all 4 states
  // color_light_hover_border:             "transparent",
  // color_light_active_border:            "transparent",
  color_light_disabled_border: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  //
  color_dark_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_medium),
  // only specify this variable to get all 4 states
  // color_dark_hover_border:              "transparent",
  // color_dark_active_border:             "transparent",
  color_dark_disabled_border: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled)
};
/**
 * @type {TextButtonVars} textButtonVars
 */

var textButtonVars = _objectSpread({
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  animation_duration: vars.animation_duration,
  border_radius: vars.unit_item_border_radius,
  dropdown_icon_size: 24,
  font_size: 14,
  font_weight: 500,
  label_padding_v: 11,
  letter_spacing: 0.75,
  line_height: 1,
  min_width: 8 * vars.grid_unit_component,
  outer_padding_v: (touch_height - height) / 2,
  // (48 - 36) / 2 = 6
  padding_h: 2 * vars.grid_unit,
  // 8
  padding_h_extra_wide: 6 * vars.grid_unit,
  // 24
  row_margin_h: vars.grid_unit,
  separator_width: border_width,
  text_transform: "uppercase",
  color_light_background: "transparent",
  color_light_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_wash_background: "currentColor",
  color_light_wash_opacity: 0.1,
  color_light_active_background: rgba(vars.color_light_foreground, vars.blend_light_background_active),
  color_light_disabled_background: "transparent",
  color_light_disabled_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_icon: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_separator: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_dark_background: "transparent",
  color_dark_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_wash_background: "currentColor",
  color_dark_wash_opacity: 0.1,
  color_dark_active_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_active),
  color_dark_disabled_background: "transparent",
  color_dark_disabled_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_icon: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_separator: rgba(vars.color_dark_foreground, vars.blend_dark_border_light)
}, borderVars, themeVars);

var themeVars$1 = _objectSpread({
  border: false,
  contained: true
}, sharedVars);
/**
 * @type {ContainedButtonVars} containedButtonVars
 */

var containedButtonVars = _objectSpread({
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  padding_h: 4 * vars.grid_unit,
  // 16
  color_light_background: "#fff",
  color_light_disabled_background: rgba(vars.color_light_foreground, vars.blend_light_background_disabled),
  color_dark_active_background: rgba(vars.color_primary_dark),
  color_dark_background: rgba(vars.color_primary),
  color_dark_disabled_background: rgba(vars.color_dark_foreground, vars.blend_dark_background_disabled)
}, themeVars$1);

// @ts-check
var fns = [superLayout$1, superColor];
var superFns = [superLayout];
var superSelector = ".".concat(classes["super"]);
var selector = ".".concat(classes.component);
/**
 * @param {string} customSelector 
 * @param {object} [customVars]
 * @param {object} [scoping]
 * @param {string} [scoping.mediaQuery]
 * @param {string} [scoping.scope]
 */

var addStyle = function addStyle(customSelector, customVars) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$mediaQuery = _ref.mediaQuery,
      mediaQuery = _ref$mediaQuery === void 0 ? "" : _ref$mediaQuery,
      _ref$scope = _ref.scope,
      scope = _ref$scope === void 0 ? "" : _ref$scope;

  var finalVars = customVars && customVars.contained ? containedButtonVars : textButtonVars;
  customSelector && styler.addStyle({
    selectors: [superSelector, customSelector],
    fns: superFns,
    vars: finalVars,
    customVars: customVars,
    mediaQuery: mediaQuery,
    scope: scope
  });
  customSelector && styler.addStyle({
    selectors: [selector, customSelector],
    fns: fns,
    vars: finalVars,
    customVars: customVars,
    mediaQuery: mediaQuery,
    scope: scope
  });
};
/**
 * @param {string} [customSelector]
 * @param {object} [customVars]
 * @param {object} [scoping]
 * @param {string} [scoping.mediaQuery]
 * @param {string} [scoping.scope]
 */


var getStyle = function getStyle() {
  var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var customVars = arguments.length > 1 ? arguments[1] : undefined;

  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$mediaQuery = _ref2.mediaQuery,
      mediaQuery = _ref2$mediaQuery === void 0 ? "" : _ref2$mediaQuery,
      _ref2$scope = _ref2.scope,
      scope = _ref2$scope === void 0 ? "" : _ref2$scope;

  var finalVars = customVars && customVars.contained ? containedButtonVars : textButtonVars;
  return styler.getStyle({
    selectors: [superSelector, customSelector],
    fns: superFns,
    vars: finalVars,
    customVars: customVars,
    mediaQuery: mediaQuery,
    scope: scope
  }).concat(styler.getStyle({
    selectors: [selector, customSelector],
    fns: fns,
    vars: finalVars,
    customVars: customVars,
    mediaQuery: mediaQuery,
    scope: scope
  }));
};

styler.addStyle({
  selectors: [superSelector],
  fns: superFns,
  vars: textButtonVars
});
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: textButtonVars
});

// @ts-check
var color = createColor({
  superColor: superColor
});

// @ts-check
var layout = createLayout({
  superLayout: superLayout$1
});

// @ts-check
var fns$1 = [layout, color];
var selectors = [classes.component, classes.contained].join(" ");
var selector$1 = ".".concat(selectors.split(/\s/).join("."));
var addStyle$1 = styler.createAddStyle(selector$1, fns$1, containedButtonVars);
var getStyle$1 = styler.createGetStyle(selector$1, fns$1, containedButtonVars);
styler.addStyle({
  selectors: [selector$1],
  fns: fns$1,
  vars: containedButtonVars
});

// @ts-check
/**
 * @param {string} customSelector 
 * @param {object} [customVars]
 * @param {object} [scoping]
 * @param {string} [scoping.mediaQuery]
 * @param {string} [scoping.scope]
 */

var addStyle$2 = function addStyle$1(customSelector, customVars) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$mediaQuery = _ref.mediaQuery,
      mediaQuery = _ref$mediaQuery === void 0 ? "" : _ref$mediaQuery,
      _ref$scope = _ref.scope,
      scope = _ref$scope === void 0 ? "" : _ref$scope;

  addStyle(customSelector, customVars, {
    mediaQuery: mediaQuery,
    scope: scope
  });
};
/**
 * @param {string} [customSelector]
 * @param {object} [customVars]
 * @param {object} [scoping]
 * @param {string} [scoping.mediaQuery]
 * @param {string} [scoping.scope]
 */


var getStyle$2 = function getStyle$2() {
  var customSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var customVars = arguments.length > 1 ? arguments[1] : undefined;

  var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref2$mediaQuery = _ref2.mediaQuery,
      mediaQuery = _ref2$mediaQuery === void 0 ? "" : _ref2$mediaQuery,
      _ref2$scope = _ref2.scope,
      scope = _ref2$scope === void 0 ? "" : _ref2$scope;

  return getStyle(customSelector, customVars, {
    mediaQuery: mediaQuery,
    scope: scope
  }).concat(getStyle$1(customSelector, customVars, {
    mediaQuery: mediaQuery,
    scope: scope
  }));
};

var textButtonVars$1 = textButtonVars;
var textButtonColor = superColor;
var textButtonLayout = superLayout$1;
var containedButtonVars$1 = containedButtonVars;
var containedButtonColor = color;
var containedButtonLayout = layout;

export { addStyle$2 as addStyle, containedButtonColor, containedButtonLayout, containedButtonVars$1 as containedButtonVars, getStyle$2 as getStyle, textButtonColor, textButtonLayout, textButtonVars$1 as textButtonVars };
