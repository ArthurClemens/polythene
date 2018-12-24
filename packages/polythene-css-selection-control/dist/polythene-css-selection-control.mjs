import { createColor, sel, createLayout, flex, mixin, selectorRTL, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

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

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_on", function (selector, vars$$1) {
    return [sel(selector, {
      color: vars$$1["color_" + tint + "_on"] // override by specifying "color"

    })];
  }), _defineProperty(_ref, "color_" + tint + "_off", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-control__button--off": {
        color: vars$$1["color_" + tint + "_off"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_disabled", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--disabled": {
        " .pe-control__label": {
          color: vars$$1["color_" + tint + "_disabled"]
        },
        " .pe-control__box": {
          " .pe-control__button--on, .pe-control__button--off": {
            color: vars$$1["color_" + tint + "_disabled"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_label", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-control__label": {
        color: vars$$1["color_" + tint + "_label"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_on_icon", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-control__box": {
        " .pe-control__button--on": {
          color: vars$$1["color_" + tint + "_on_icon"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_off_icon", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-control__box": {
        " .pe-control__button--off": {
          color: vars$$1["color_" + tint + "_off_icon"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_on", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--on": {
        " .pe-button--focus .pe-button__focus": {
          backgroundColor: vars$$1["color_" + tint + "_focus_on"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_off", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--off": {
        " .pe-button--focus .pe-button__focus": {
          backgroundColor: vars$$1["color_" + tint + "_focus_off"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_on_opacity", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--on": {
        " .pe-button--focus .pe-button__focus": {
          opacity: vars$$1["color_" + tint + "_focus_on_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_focus_off_opacity", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--off": {
        " .pe-button--focus .pe-button__focus": {
          opacity: vars$$1["color_" + tint + "_focus_off_opacity"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_on_label", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--on": {
        " .pe-control__label": {
          color: vars$$1["color_" + tint + "_on_label"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_off_label", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-control--off": {
        " .pe-control__label": {
          color: vars$$1["color_" + tint + "_off_label"]
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
  return function (vars$$1) {
    return {};
  };
}; // eslint-disable-line no-unused-vars


var alignLeft = alignSide(false);
var alignRight = alignSide(true);

var makeSize = function makeSize(vars$$1, height) {
  var iconSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : vars.unit_icon_size;
  var labelSize = iconSize + vars$$1.label_height;
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

var button_size_icon_size = function button_size_icon_size(selector, vars$$1, isRTL) {
  var _peButtonPeContr;

  return sel(selector, {
    " .pe-button.pe-control__button": (_peButtonPeContr = {
      top: -((vars$$1.button_size - vars$$1.icon_size) / 2) + "px"
    }, _defineProperty(_peButtonPeContr, isRTL ? "right" : "left", -((vars$$1.button_size - vars$$1.icon_size) / 2) + "px"), _defineProperty(_peButtonPeContr, isRTL ? "left" : "right", "auto"), _peButtonPeContr)
  });
};

var _label_padding_before = function label_padding_before(selector, vars$$1, isRTL) {
  return sel(selector, {
    " .pe-control__label": _defineProperty({}, isRTL ? "paddingRight" : "paddingLeft", vars$$1.label_padding_before + "px")
  });
};

var _label_padding_after = function label_padding_after(selector, vars$$1, isRTL) {
  return sel(selector, {
    " .pe-control__label": _defineProperty({}, isRTL ? "paddingLeft" : "paddingRight", vars$$1.label_padding_after + "px")
  });
};

var varFns = {
  general_styles: function general_styles(selector, vars$$1) {
    return [sel(selector, [alignLeft(vars$$1), {
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
    }, _defineProperty({}, "*[dir=rtl] ".concat(selector, ", .pe-rtl ").concat(selector), [alignRight(vars$$1)])])];
  },
  label_font_size: function label_font_size(selector, vars$$1) {
    return [sel(selector, {
      " .pe-control__form-label": {
        fontSize: vars$$1.label_font_size + "px"
      }
    })];
  },
  label_height: function label_height(selector, vars$$1) {
    return [sel(selector, {
      " .pe-control__box": {
        width: vars$$1.label_height + "px",
        height: vars$$1.label_height + "px"
      },
      ".pe-control--small": makeSize(vars$$1, vars.unit_icon_size_small, vars.unit_icon_size_small),
      ".pe-control--regular": makeSize(vars$$1, vars$$1.label_height, vars.unit_icon_size),
      ".pe-control--medium": makeSize(vars$$1, vars.unit_icon_size_medium, vars.unit_icon_size_medium),
      ".pe-control--large": makeSize(vars$$1, vars.unit_icon_size_large, vars.unit_icon_size_large)
    })];
  },
  animation_duration: function animation_duration(selector, vars$$1) {
    return [sel(selector, {
      " .pe-button.pe-control__button": [mixin.defaultTransition("opacity", vars$$1.animation_duration)],
      " .pe-control__label": [mixin.defaultTransition("all", vars$$1.animation_duration)]
    })];
  },
  button_size: function button_size(selector, vars$$1) {
    return [sel(selector, {}), button_size_icon_size(selector, vars$$1, false), button_size_icon_size(selectorRTL(selector), vars$$1, true)];
  },
  icon_size: function icon_size(selector, vars$$1) {
    return [sel(selector, {}), button_size_icon_size(selector, vars$$1, false), button_size_icon_size(selectorRTL(selector), vars$$1, true)];
  },
  label_padding_after: function label_padding_after(selector, vars$$1) {
    return [sel(selector, {}), _label_padding_after(selector, vars$$1, false), _label_padding_after(selectorRTL(selector), vars$$1, true)];
  },
  label_padding_before: function label_padding_before(selector, vars$$1) {
    return [sel(selector, {}), _label_padding_before(selector, vars$$1, false), _label_padding_before(selectorRTL(selector), vars$$1, true)];
  }
};
var layout = createLayout({
  varFns: varFns
});

var vars$1 = {
  general_styles: true,
  animation_duration: vars.animation_duration,
  button_size: 6 * vars.grid_unit_component,
  icon_size: 3 * vars.grid_unit_component,
  label_font_size: 2 * vars.grid_unit_component,
  // 16
  label_height: 3 * vars.grid_unit_component,
  // 24
  label_padding_after: 0,
  label_padding_before: vars.grid_unit * 4,
  // 16
  color_light_on: rgba(vars.color_primary),
  color_light_off: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_label: rgba(vars.color_light_foreground, vars.blend_light_text_secondary),
  color_light_disabled: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on_focus_opacity: .11,
  // icon colors may be set in theme; set to "inherit" by default
  // color_light_on_icon
  // color_light_off_icon
  // label on/off colors may be set in theme; set to color_light_label by default
  // color_light_on_label
  // color_light_off_label
  color_light_focus_on: rgba(vars.color_primary),
  color_light_focus_on_opacity: .11,
  color_light_focus_off: rgba(vars.color_light_foreground),
  color_light_focus_off_opacity: .07,
  color_dark_on: rgba(vars.color_primary),
  color_dark_off: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_label: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary),
  color_dark_disabled: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_thumb_off_focus_opacity: .08,
  color_dark_thumb_on_focus_opacity: .11,
  // icon color may be set in theme; set to "inherit" by default
  // color_dark_on_icon
  // color_dark_off_icon
  // label on/off colors may be set in theme; set to color_dark_label by default
  // color_dark_on_label
  // color_dark_off_label
  color_dark_focus_on: rgba(vars.color_primary),
  // or '#80cbc4'
  color_dark_focus_on_opacity: .14,
  color_dark_focus_off: rgba(vars.color_dark_foreground),
  color_dark_focus_off_opacity: .09
};

var fns = [layout, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, vars$1);
var getStyle = styler.createGetStyle(selector, fns, vars$1);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});

export { addStyle, color, getStyle, layout, vars$1 as vars };
