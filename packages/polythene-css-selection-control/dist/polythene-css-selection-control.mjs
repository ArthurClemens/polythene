import { createColor, sel, createLayout, flex, mixin, selectorRTL, rgba, styler } from 'polythene-core-css';
import { vars as vars$1 } from 'polythene-theme';

var classes = {
  component: "pe-control",
  // elements
  formLabel: "pe-control__form-label",
  input: "pe-control__input",
  label: "pe-control__label",
  // states
  disabled: "pe-control--disabled",
  inactive: "pe-control--inactive",
  large: "pe-control--large",
  medium: "pe-control--medium",
  off: "pe-control--off",
  on: "pe-control--on",
  regular: "pe-control--regular",
  small: "pe-control--small",
  // control view elements
  box: "pe-control__box",
  button: "pe-control__button",
  // control view states
  buttonOff: "pe-control__button--off",
  buttonOn: "pe-control__button--on"
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
    return [sel(selector, {
      " .pe-control__box": {
        " .pe-control__button": {
          color: "inherit"
        },
        " .pe-control__button--on": {
          color: "inherit"
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_on", function (selector, vars) {
    return [sel(selector, {
      color: vars["color_" + tint + "_on"] // override by specifying "color"

    })];
  }), _defineProperty(_ref, "color_" + tint + "_off", function (selector, vars) {
    return [sel(selector, {
      " .pe-control__button--off": {
        color: vars["color_" + tint + "_off"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_disabled", function (selector, vars) {
    return [sel(selector, {
      ".pe-control--disabled": {
        " .pe-control__label": {
          color: vars["color_" + tint + "_disabled"]
        },
        " .pe-control__box": {
          " .pe-control__button--on, .pe-control__button--off": {
            color: vars["color_" + tint + "_disabled"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_label", function (selector, vars) {
    return [sel(selector, {
      " .pe-control__label": {
        color: vars["color_" + tint + "_label"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_on_icon", function (selector, vars) {
    return [sel(selector, {
      " .pe-control__box": {
        " .pe-control__button--on": {
          color: vars["color_" + tint + "_on_icon"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_off_icon", function (selector, vars) {
    return [sel(selector, {
      " .pe-control__box": {
        " .pe-control__button--off": {
          color: vars["color_" + tint + "_off_icon"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_on", function (selector, vars) {
    return [sel(selector, {
      ".pe-control--on": {
        " .pe-button--focus .pe-button__focus": {
          backgroundColor: vars["color_" + tint + "_focus_on"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_off", function (selector, vars) {
    return [sel(selector, {
      ".pe-control--off": {
        " .pe-button--focus .pe-button__focus": {
          backgroundColor: vars["color_" + tint + "_focus_off"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_on_opacity", function (selector, vars) {
    return [sel(selector, {
      ".pe-control--on": {
        " .pe-button--focus .pe-button__focus": {
          opacity: vars["color_" + tint + "_focus_on_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_off_opacity", function (selector, vars) {
    return [sel(selector, {
      ".pe-control--off": {
        " .pe-button--focus .pe-button__focus": {
          opacity: vars["color_" + tint + "_focus_off_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_on_label", function (selector, vars) {
    return [sel(selector, {
      ".pe-control--on": {
        " .pe-control__label": {
          color: vars["color_" + tint + "_on_label"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_off_label", function (selector, vars) {
    return [sel(selector, {
      ".pe-control--off": {
        " .pe-control__label": {
          color: vars["color_" + tint + "_off_label"]
        }
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));

var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = createColor({
  varFns: {
    lightTintFns: lightTintFns,
    darkTintFns: darkTintFns
  }
});

var alignSide = function alignSide(isRTL) {
  return function (vars) {
    return {};
  };
}; // eslint-disable-line no-unused-vars


var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var makeSize = function makeSize(vars, height) {
  var iconSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : vars$1.unit_icon_size;
  var labelSize = iconSize + vars.label_height;
  var iconOffset = (labelSize - iconSize) / 2;
  return {
    " .pe-control__form-label": {
      height: height + "px"
    },
    " .pe-control__box": {
      width: iconSize + "px",
      height: iconSize + "px"
    },
    " .pe-button__content": {
      width: labelSize + "px",
      height: labelSize + "px",
      flexShrink: 0,
      " .pe-icon": [mixin.fit(iconOffset)]
    }
  };
};

var activeButton = function activeButton() {
  return {
    opacity: 1,
    zIndex: 0
  };
};

var inactiveButton = function inactiveButton() {
  return {
    opacity: 0,
    zIndex: -1
  };
};

var button_size_icon_size = function button_size_icon_size(selector, vars, isRTL) {
  var _peButtonPeContr;

  return sel(selector, {
    " .pe-button.pe-control__button": (_peButtonPeContr = {
      top: -((vars.button_size - vars.icon_size) / 2) + "px"
    }, _defineProperty(_peButtonPeContr, isRTL ? "right" : "left", -((vars.button_size - vars.icon_size) / 2) + "px"), _defineProperty(_peButtonPeContr, isRTL ? "left" : "right", "auto"), _peButtonPeContr)
  });
};

var _label_padding_before = function label_padding_before(selector, vars, isRTL) {
  return sel(selector, {
    " .pe-control__label": _defineProperty({}, isRTL ? "paddingRight" : "paddingLeft", vars.label_padding_before + "px")
  });
};

var _label_padding_after = function label_padding_after(selector, vars, isRTL) {
  return sel(selector, {
    " .pe-control__label": _defineProperty({}, isRTL ? "paddingLeft" : "paddingRight", vars.label_padding_after + "px")
  });
};

var varFns = {
  general_styles: function general_styles(selector, vars) {
    return [sel(selector, [alignLeft(vars), {
      display: "inline-block",
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
      " input[type=checkbox], input[type=radio]": {
        display: "none"
      },
      " .pe-control__form-label": [flex.layoutHorizontal, flex.layoutCenter, {
        position: "relative",
        cursor: "pointer",
        margin: 0,
        color: "inherit",
        ":focus": {
          outline: 0
        }
      }],
      ".pe-control--inactive": {
        " .pe-control__form-label": {
          cursor: "default"
        }
      },
      " .pe-control__box": {
        position: "relative",
        display: "inline-block",
        boxSizing: "border-box",
        color: "inherit",
        flexShrink: 0,
        ":focus": {
          outline: 0
        }
      },
      " .pe-button.pe-control__button": {
        position: "absolute"
      },
      ".pe-control--off": {
        " .pe-control__button--on": inactiveButton(),
        " .pe-control__button--off": activeButton()
      },
      ".pe-control--on": {
        " .pe-control__button--on": activeButton(),
        " .pe-control__button--off": inactiveButton()
      },
      " .pe-control__label": {
        // padding: RTL
        alignSelf: "center"
      },
      ".pe-control--disabled": {
        " .pe-control__form-label": {
          cursor: "auto"
        },
        " .pe-control__button": {
          pointerEvents: "none"
        }
      },
      " .pe-button__content": {
        " .pe-icon": {
          position: "absolute"
        }
      }
    }, _defineProperty({}, "*[dir=rtl] ".concat(selector, ", .pe-rtl ").concat(selector), [alignRight(vars)])])];
  },
  label_font_size: function label_font_size(selector, vars) {
    return [sel(selector, {
      " .pe-control__form-label": {
        fontSize: vars.label_font_size + "px"
      }
    })];
  },
  label_height: function label_height(selector, vars) {
    return [sel(selector, {
      " .pe-control__box": {
        width: vars.label_height + "px",
        height: vars.label_height + "px"
      },
      ".pe-control--small": makeSize(vars, vars$1.unit_icon_size_small, vars$1.unit_icon_size_small),
      ".pe-control--regular": makeSize(vars, vars.label_height, vars$1.unit_icon_size),
      ".pe-control--medium": makeSize(vars, vars$1.unit_icon_size_medium, vars$1.unit_icon_size_medium),
      ".pe-control--large": makeSize(vars, vars$1.unit_icon_size_large, vars$1.unit_icon_size_large)
    })];
  },
  animation_duration: function animation_duration(selector, vars) {
    return [sel(selector, {
      " .pe-button.pe-control__button": [mixin.defaultTransition("opacity", vars.animation_duration)],
      " .pe-control__label": [mixin.defaultTransition("all", vars.animation_duration)]
    })];
  },
  button_size: function button_size(selector, vars) {
    return [sel(selector, {}), button_size_icon_size(selector, vars, false), button_size_icon_size(selectorRTL(selector), vars, true)];
  },
  icon_size: function icon_size(selector, vars) {
    return [sel(selector, {}), button_size_icon_size(selector, vars, false), button_size_icon_size(selectorRTL(selector), vars, true)];
  },
  label_padding_after: function label_padding_after(selector, vars) {
    return [sel(selector, {}), _label_padding_after(selector, vars, false), _label_padding_after(selectorRTL(selector), vars, true)];
  },
  label_padding_before: function label_padding_before(selector, vars) {
    return [sel(selector, {}), _label_padding_before(selector, vars, false), _label_padding_before(selectorRTL(selector), vars, true)];
  }
};
var layout = createLayout({
  varFns: varFns
});

// @ts-check
var vars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true,
  animation_duration: vars$1.animation_duration,
  button_size: 6 * vars$1.grid_unit_component,
  icon_size: 3 * vars$1.grid_unit_component,
  label_font_size: 2 * vars$1.grid_unit_component,
  // 16
  label_height: 3 * vars$1.grid_unit_component,
  // 24
  label_padding_after: 0,
  label_padding_before: vars$1.grid_unit * 4,
  // 16
  color_light_on: rgba(vars$1.color_primary),
  color_light_off: rgba(vars$1.color_light_foreground, vars$1.blend_light_text_secondary),
  color_light_label: rgba(vars$1.color_light_foreground, vars$1.blend_light_text_secondary),
  color_light_disabled: rgba(vars$1.color_light_foreground, vars$1.blend_light_text_disabled),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on_focus_opacity: .11,
  // icon colors may be set in theme; set to "inherit" by default
  // color_light_on_icon
  // color_light_off_icon
  // label on/off colors may be set in theme; set to color_light_label by default
  // color_light_on_label
  // color_light_off_label
  color_light_focus_on: rgba(vars$1.color_primary),
  color_light_focus_on_opacity: .11,
  color_light_focus_off: rgba(vars$1.color_light_foreground),
  color_light_focus_off_opacity: .07,
  color_dark_on: rgba(vars$1.color_primary),
  color_dark_off: rgba(vars$1.color_dark_foreground, vars$1.blend_dark_text_secondary),
  color_dark_label: rgba(vars$1.color_dark_foreground, vars$1.blend_dark_text_secondary),
  color_dark_disabled: rgba(vars$1.color_dark_foreground, vars$1.blend_dark_text_disabled),
  color_dark_thumb_off_focus_opacity: .08,
  color_dark_thumb_on_focus_opacity: .11,
  // icon color may be set in theme; set to "inherit" by default
  // color_dark_on_icon
  // color_dark_off_icon
  // label on/off colors may be set in theme; set to color_dark_label by default
  // color_dark_on_label
  // color_dark_off_label
  color_dark_focus_on: rgba(vars$1.color_primary),
  // or '#80cbc4'
  color_dark_focus_on_opacity: .14,
  color_dark_focus_off: rgba(vars$1.color_dark_foreground),
  color_dark_focus_off_opacity: .09
};

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, vars);
var getStyle = styler.createGetStyle(selector, fns, vars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars
});

export { addStyle, color, getStyle, layout, vars };
