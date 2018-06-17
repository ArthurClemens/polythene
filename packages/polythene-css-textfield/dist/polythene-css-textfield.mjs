import { sel, createColor, mixin, createLayout, rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';

var classes = {
  component: "pe-textfield",

  // elements
  counter: "pe-textfield__counter",
  error: "pe-textfield__error",
  errorPlaceholder: "pe-textfield__error-placeholder",
  focusHelp: "pe-textfield__help-focus",
  help: "pe-textfield__help",
  input: "pe-textfield__input",
  inputArea: "pe-textfield__input-area",
  label: "pe-textfield__label",
  optionalIndicator: "pe-textfield__optional-indicator",
  requiredIndicator: "pe-textfield__required-indicator",

  // states
  hasCounter: "pe-textfield--counter",
  hasFloatingLabel: "pe-textfield--floating-label",
  hasFullWidth: "pe-textfield--full-width",
  hideClear: "pe-textfield--hide-clear",
  hideSpinner: "pe-textfield--hide-spinner",
  hideValidation: "pe-textfield--hide-validation",
  isDense: "pe-textfield--dense",
  isRequired: "pe-textfield--required",
  stateDirty: "pe-textfield--dirty",
  stateDisabled: "pe-textfield--disabled",
  stateFocused: "pe-textfield--focused",
  stateInvalid: "pe-textfield--invalid",
  stateReadonly: "pe-textfield--readonly"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generalFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      " .pe-textfield__input-area": {
        color: "inherit",

        "&:after": {
          backgroundColor: "currentcolor"
        }
      },
      ".pe-textfield--disabled, &.pe-textfield--readonly": {
        " .pe-textfield__input-area:after": {
          backgroundColor: "transparent"
        }
      },
      ".pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
        " .pe-textfield__input": {
          boxShadow: "none"
        }
      }
    })];
  }
};

var tintFns = function tintFns(tint) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, "color_" + tint + "_focus_border", function (selector, vars$$1) {
    return [sel(selector, {
      color: vars$$1["color_" + tint + "_focus_border"] // override by specifying "color"
    })];
  }), _defineProperty(_ref, "color_" + tint + "_input_background", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-textfield__input-area": {
        backgroundColor: vars$$1["color_" + tint + "_input_background"]
      },
      " .pe-textfield__input:-webkit-autofill": {
        "-webkit-box-shadow": "0 0 0px 1000px " + vars$$1["color_" + tint + "_input_background"] + " inset"
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_input_text", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-textfield__input": {
        color: vars$$1["color_" + tint + "_input_text"]
      },
      " .pe-textfield__input:-webkit-autofill": {
        color: vars$$1["color_" + tint + "_input_text"] + " !important"
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_counter_ok_border", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--counter ": {
        " .pe-textfield__input-area:after": {
          backgroundColor: vars$$1["color_" + tint + "_counter_ok_border"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_input_bottom_border", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-textfield__input": {
        borderColor: vars$$1["color_" + tint + "_input_bottom_border"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_label_text", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-textfield__label": {
        color: vars$$1["color_" + tint + "_label_text"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_disabled_label_text", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--disabled, &.pe-textfield--readonly": {
        " .pe-textfield__input-area:after": {
          backgroundImage: "linear-gradient(to right, " + vars$$1["color_" + tint + "_disabled_label_text"] + " 20%, rgba(255, 255, 255, 0) 0%)"
        }
      },
      ".pe-textfield--disabled": {
        " .pe-textfield__input, .pe-textfield__label": {
          color: vars$$1["color_" + tint + "_disabled_label_text"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_readonly_label_text", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--readonly": {
        " .pe-textfield__input, .pe-textfield__label": {
          color: vars$$1["color_" + tint + "_readonly_label_text"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_highlight_text", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--focused": {
        // note: not when textfield--dirty and not textfield--focused
        ".pe-textfield--floating-label .pe-textfield__label": {
          color: vars$$1["color_" + tint + "_highlight_text"]
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_required_symbol", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--focused": {
        ".pe-textfield--required.pe-textfield--floating-label": {
          " .pe-textfield__required-indicator": {
            color: vars$$1["color_" + tint + "_required_symbol"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_help_text", function (selector, vars$$1) {
    return [sel(selector, {
      " .pe-textfield__help, .pe-textfield__counter": {
        color: vars$$1["color_" + tint + "_help_text"]
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_input_error_border", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
        " .pe-textfield__input": {
          borderColor: vars$$1["color_" + tint + "_input_error_border"]
        },
        "&, &.pe-textfield--counter": {
          " .pe-textfield__input-area:after": {
            backgroundColor: vars$$1["color_" + tint + "_input_error_border"]
          }
        }
      }
    })];
  }), _defineProperty(_ref, "color_" + tint + "_input_error_text", function (selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
        " .pe-textfield__label": {
          color: vars$$1["color_" + tint + "_input_error_text"]
        },
        " .pe-textfield__error, .pe-textfield__counter, .pe-textfield__help": {
          color: vars$$1["color_" + tint + "_input_error_text"]
        },
        ".pe-textfield--required .pe-textfield__label": {
          color: vars$$1["color_" + tint + "_input_error_text"]
        }
      }
    })];
  }), _ref;
};

var lightTintFns = _extends({}, generalFns, tintFns("light"));
var darkTintFns = _extends({}, generalFns, tintFns("dark"));

var color = createColor({
  varFns: { lightTintFns: lightTintFns, darkTintFns: darkTintFns }
});

var vertical_spacing_top_input_padding_v = function vertical_spacing_top_input_padding_v(selector, vars$$1) {
  return sel(selector, {
    " .pe-textfield__label": {
      top: vars$$1.vertical_spacing_top + vars$$1.input_padding_v + "px"
    }
  });
};

var floating_label_vertical_spacing_top_input_padding_v = function floating_label_vertical_spacing_top_input_padding_v(selector, vars$$1) {
  return sel(selector, {
    ".pe-textfield--floating-label .pe-textfield__label": {
      top: vars$$1.floating_label_vertical_spacing_top + vars$$1.input_padding_v + "px"
    }
  });
};

var dense_floating_label_vertical_spacing_top_input_padding_v = function dense_floating_label_vertical_spacing_top_input_padding_v(selector, vars$$1) {
  return sel(selector, {
    ".pe-textfield--floating-label.pe-textfield--dense .pe-textfield__label": {
      top: vars$$1.dense_floating_label_vertical_spacing_top + vars$$1.input_padding_v + "px"
    }
  });
};

var input_padding_v_input_padding_h = function input_padding_v_input_padding_h(selector, vars$$1) {
  return sel(selector, {
    " .pe-textfield__input": {
      padding: vars$$1.input_padding_v + "px " + vars$$1.input_padding_h + "px"
    },
    " textarea.pe-textfield__input": {
      margin: vars$$1.input_padding_v + "px " + vars$$1.input_padding_h + "px"
    }
  });
};

var full_width_input_padding_v_full_width_input_padding_h = function full_width_input_padding_v_full_width_input_padding_h(selector, vars$$1) {
  return sel(selector, {
    ".pe-textfield--full-width": {
      " .pe-textfield__input": {
        padding: vars$$1.full_width_input_padding_v + "px " + vars$$1.full_width_input_padding_h + "px"
      }
    }
  });
};

var dense_full_width_input_padding_v_dense_full_width_input_padding_h = function dense_full_width_input_padding_v_dense_full_width_input_padding_h(selector, vars$$1) {
  return sel(selector, {
    ".pe-textfield--full-width.pe-textfield--dense": {
      " .pe-textfield__input": {
        padding: vars$$1.dense_full_width_input_padding_v + "px " + vars$$1.dense_full_width_input_padding_h + "px"
      }
    }
  });
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, [mixin.clearfix(), {
      position: "relative",
      lineHeight: vars.line_height,
      display: "inline-block",
      boxSizing: "border-box",
      margin: 0,
      overflow: "visible", // Firefox needs this

      width: "100%",
      maxWidth: "100%",

      " .pe-textfield__input-area": {
        position: "relative",

        "&:after": {
          position: "absolute",
          content: "\"\"",
          bottom: 0,
          left: 0,
          width: "100%",
          opacity: 0
        }
      },
      ".pe-textfield--focused .pe-textfield__input-area:after": {
        opacity: 1
      },

      " .pe-textfield__input": {
        display: "block",
        width: "100%",
        background: "none",
        textAlign: "left",
        color: "inherit",
        borderStyle: "none none solid none",
        borderRadius: 0,
        margin: 0,

        // disable glow on textfield--invalid fields
        "&:textfield--invalid": {
          boxShadow: "none"
        },
        ":invalid": {
          boxShadow: "none"
        },
        // Remove clear cross icon from IE
        "::-ms-clear": {
          width: 0,
          height: 0
        }
      },
      " textarea.pe-textfield__input": {
        padding: 0,
        display: "block"
      },

      // focus border
      ".pe-textfield--focused .pe-textfield__input": {
        outline: "none"
      },

      " .pe-textfield__label": {
        position: "absolute",
        display: "block",
        bottom: 0,
        pointerEvents: "none",
        whiteSpace: "nowrap",
        textAlign: "left",
        cursor: "text"
      },
      ".pe-textfield--dirty .pe-textfield__label": {
        visibility: "hidden"
      },

      "&:not(.pe-textfield--no-char)": {
        " .pe-textfield__required-indicator, .pe-textfield__optional-indicator": {
          padding: "0 0 0 .25em"
        }
      },

      ".pe-textfield--floating-label": {
        ".pe-textfield--focused, &.pe-textfield--dirty": {
          " .pe-textfield__label": {
            visibility: "visible"
          }
        }
      },

      ".pe-textfield--disabled, &.pe-textfield--readonly": {
        " .pe-textfield__label": {
          cursor: "auto"
        },
        " .pe-textfield__input": {
          "border-bottom": "none"
        },
        " .pe-textfield__input-area:after": {
          opacity: 1,
          height: "1px",
          bottom: "-1px",
          backgroundPosition: "top",
          backgroundSize: "4px 1px",
          backgroundRepeat: "repeat-x"
        }
      },

      " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
        lineHeight: vars.line_height
      },

      " .pe-textfield__counter": {
        textAlign: "right",
        float: "right",
        padding: "0 0 0 16px"
      },

      " .pe-textfield__help-focus": [mixin.defaultTransition("opacity"), {
        opacity: 0
      }],
      ".pe-textfield--focused .pe-textfield__help-focus, &.pe-textfield--dirty .pe-textfield__help-focus": {
        opacity: 1
      },

      ".pe-textfield--hide-clear": {
        " .pe-textfield__input::-ms-clear": {
          display: "none"
        }
      },
      ".pe-textfield--hide-spinner": {
        " input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button": {
          "-webkit-appearance": "none",
          margin: 0
        },
        " input[type=number]": {
          "-moz-appearance": "textfield"
        }
      },
      ".pe-textfield--full-width": {
        width: "100%",
        padding: 0,

        " .pe-textfield__input-area": {
          padding: 0
        }
      }
    }])];
  },
  vertical_spacing_bottom: function vertical_spacing_bottom(selector, vars$$1) {
    return [sel(selector, {
      paddingBottom: vars$$1.vertical_spacing_bottom + "px"
    })];
  },
  floating_label_vertical_spacing_bottom: function floating_label_vertical_spacing_bottom(selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--floating-label": {
        paddingBottom: vars$$1.floating_label_vertical_spacing_bottom + "px"
      },
      ".pe-textfield--dense": {
        paddingBottom: vars$$1.dense_floating_label_vertical_spacing_bottom + "px"
      }
    })];
  },
  vertical_spacing_top: function vertical_spacing_top(selector, vars$$1) {
    return [sel(selector, {
      " .pe-textfield__input-area": {
        paddingTop: vars$$1.vertical_spacing_top + "px"
      }
    }), vertical_spacing_top_input_padding_v(selector, vars$$1)];
  },
  input_padding_v: function input_padding_v(selector, vars$$1) {
    return [vertical_spacing_top_input_padding_v(selector, vars$$1), floating_label_vertical_spacing_top_input_padding_v(selector, vars$$1), dense_floating_label_vertical_spacing_top_input_padding_v(selector, vars$$1), input_padding_v_input_padding_h(selector, vars$$1)];
  },
  input_padding_h: function input_padding_h(selector, vars$$1) {
    return [sel(selector, {
      " .pe-textfield__label": {
        left: vars$$1.input_padding_h + "px",
        right: vars$$1.input_padding_h + "px"
      }
    }), input_padding_v_input_padding_h(selector, vars$$1)];
  },
  floating_label_vertical_spacing_top: function floating_label_vertical_spacing_top(selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--floating-label": {
        " .pe-textfield__input-area": {
          paddingTop: vars$$1.floating_label_vertical_spacing_top + "px"
        }
      }

    }), floating_label_vertical_spacing_top_input_padding_v(selector, vars$$1)];
  },
  dense_floating_label_vertical_spacing_top: function dense_floating_label_vertical_spacing_top(selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--floating-label.pe-textfield--dense": {
        " .pe-textfield__input-area": {
          paddingTop: vars$$1.dense_floating_label_vertical_spacing_top + "px"
        }
      }
    }), dense_floating_label_vertical_spacing_top_input_padding_v(selector, vars$$1)];
  },
  input_focus_border_animation_duration: function input_focus_border_animation_duration(selector, vars$$1) {
    return [sel(selector, {
      " .pe-textfield__input-area:after": mixin.defaultTransition("opacity", vars$$1.input_focus_border_animation_duration)
    })];
  },
  input_focus_border_width: function input_focus_border_width(selector, vars$$1) {
    return [sel(selector, {
      " .pe-textfield__input-area:after": {
        height: vars$$1.input_focus_border_width + "px"
      }
    })];
  },
  font_size_error: function font_size_error(selector, vars$$1) {
    return [sel(selector, {
      " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
        fontSize: vars$$1.font_size_error + "px",
        minHeight: vars$$1.font_size_error * vars.line_height + "px"
      }
    })];
  },
  font_size_input: function font_size_input(selector, vars$$1) {
    return [sel(selector, {
      " .pe-textfield__input, .pe-textfield__label": {
        fontSize: vars$$1.font_size_input + "px"
      }
    })];
  },
  line_height_input: function line_height_input(selector, vars$$1) {
    return [sel(selector, {
      " .pe-textfield__input, .pe-textfield__label": {
        lineHeight: vars$$1.line_height_input + "px"
      }
    })];
  },
  input_border_width: function input_border_width(selector, vars$$1) {
    return [sel(selector, {
      " .pe-textfield__input": {
        borderWidth: vars$$1.input_border_width + "px"
      },
      // focus border
      ".pe-textfield--focused .pe-textfield__input": {
        borderWidth: vars$$1.input_border_width + "px",
        outline: "none"
      }
    })];
  },
  full_width_input_padding_v: function full_width_input_padding_v(selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--full-width": {
        " .pe-textfield__label": {
          top: vars$$1.full_width_input_padding_v + "px"
        }
      }
    }), full_width_input_padding_v_full_width_input_padding_h(selector, vars$$1)];
  },
  full_width_input_padding_h: function full_width_input_padding_h(selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--full-width": {
        " .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter": {
          paddingLeft: vars$$1.full_width_input_padding_h + "px",
          paddingRight: vars$$1.full_width_input_padding_h + "px"
        },
        " .pe-textfield__label": {
          left: vars$$1.full_width_input_padding_h + "px",
          right: vars$$1.full_width_input_padding_h + "px"
        }
      }
    }), full_width_input_padding_v_full_width_input_padding_h(selector, vars$$1)];
  },
  dense_font_size_input: function dense_font_size_input(selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--dense": {
        "&, .pe-textfield__input, .pe-textfield__label": {
          fontSize: vars$$1.dense_font_size_input + "px"
        }
      }
    })];
  },
  dense_full_width_font_size_input: function dense_full_width_font_size_input(selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--dense": {
        " .pe-textfield__input": {
          fontSize: vars$$1.dense_full_width_font_size_input + "px"
        },
        " .pe-textfield__label": {
          fontSize: vars$$1.dense_full_width_font_size_input + "px"
        }
      }
    })];
  },
  dense_full_width_input_padding_v: function dense_full_width_input_padding_v(selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--full-width": {
        ".pe-textfield--dense": {
          " .pe-textfield__label": {
            top: vars$$1.dense_full_width_input_padding_v + "px"
          }
        }
      }
    }), dense_full_width_input_padding_v_dense_full_width_input_padding_h(selector, vars$$1)];
  },
  dense_full_width_input_padding_h: function dense_full_width_input_padding_h(selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--full-width": {
        ".pe-textfield--dense": {
          " .pe-textfield__label": {
            left: vars$$1.dense_full_width_input_padding_h + "px",
            right: vars$$1.dense_full_width_input_padding_h + "px"
          }
        }
      }
    }), dense_full_width_input_padding_v_dense_full_width_input_padding_h(selector, vars$$1)];
  },
  margin_top_error_message: function margin_top_error_message(selector, vars$$1) {
    return [sel(selector, {
      " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
        marginTop: vars$$1.margin_top_error_message + "px"
      }
    })];
  },
  floating_label_animation_duration: function floating_label_animation_duration(selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--floating-label": {
        " .pe-textfield__label": mixin.defaultTransition("all", vars$$1.floating_label_animation_duration)
      }
    })];
  },
  dense_font_size_floating_label: function dense_font_size_floating_label(selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--floating-label": {
        ".pe-textfield--dense": {
          ".pe-textfield--focused, &.pe-textfield--dirty": {
            fontSize: vars$$1.dense_font_size_floating_label + "px"
          }
        }
      }
    })];
  },
  dense_floating_label_top: function dense_floating_label_top(selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--floating-label": {
        ".pe-textfield--dense": {
          ".pe-textfield--focused, &.pe-textfield--dirty": {
            " .pe-textfield__label": {
              top: vars$$1.dense_floating_label_top + "px"
            }
          }
        }
      }
    })];
  },
  floating_label_top: function floating_label_top(selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--floating-label": {
        ".pe-textfield--focused, &.pe-textfield--dirty": {
          " .pe-textfield__label": {
            top: vars$$1.floating_label_top + "px"
          }
        }
      }
    })];
  },
  font_size_floating_label: function font_size_floating_label(selector, vars$$1) {
    return [sel(selector, {
      ".pe-textfield--floating-label": {
        ".pe-textfield--focused, &.pe-textfield--dirty": {
          " .pe-textfield__label": {
            fontSize: vars$$1.font_size_floating_label + "px"
          }
        }
      }
    })];
  }
};

var layout = createLayout({ varFns: varFns });

var vars$1 = {
  general_styles: true,

  dense_floating_label_top: 10,
  dense_floating_label_vertical_spacing_bottom: 4, // 8 minus natural label height padding (1)
  dense_floating_label_vertical_spacing_top: 23, // 12 + 8 + 4 minus natural label height padding (1)
  dense_font_size_floating_label: 13,
  dense_font_size_input: 13,
  dense_full_width_font_size_input: 13,
  dense_full_width_input_padding_h: 16,
  dense_full_width_input_padding_v: 15, // 16 minus natural label height padding (1)
  floating_label_animation_duration: ".12s",
  floating_label_top: 14,
  floating_label_vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
  floating_label_vertical_spacing_top: 30, // 16 + 8 + 8 minus natural label height padding (2)
  font_size_error: 12,
  font_size_floating_label: 12,
  font_size_input: 16,
  full_width_input_padding_h: 20,
  full_width_input_padding_v: 18, // 20 minus natural label height padding (2)
  input_border_width: 1,
  input_focus_border_animation_duration: vars.animation_duration,
  input_focus_border_width: 2,
  input_padding_h: 0,
  input_padding_v: 7,
  line_height_input: 20,
  margin_top_error_message: 6,
  vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
  vertical_spacing_top: 6, // 8 minus natural label height padding (1)

  color_light_input_text: rgba(vars.color_light_foreground, vars.blend_light_text_primary),
  color_light_input_background: "transparent", // only used to "remove" autofill color
  color_light_highlight_text: rgba(vars.color_primary, vars.blend_light_text_primary),
  color_light_input_bottom_border: rgba(vars.color_light_foreground, vars.blend_light_border_light),
  color_light_input_error_text: rgba("221, 44, 0"),
  color_light_input_error_border: rgba("221, 44, 0"),
  color_light_input_placeholder: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_label_text: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_disabled_label_text: rgba(vars.color_light_foreground, vars.blend_light_text_disabled),
  color_light_readonly_label_text: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_help_text: rgba(vars.color_light_foreground, vars.blend_light_text_tertiary),
  color_light_required_symbol: rgba("221, 44, 0"),
  color_light_focus_border: rgba(vars.color_primary),
  color_light_counter_ok_border: rgba(vars.color_primary),

  color_dark_input_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_primary),
  color_dark_input_background: "transparent", // only used to "remove" autofill color
  color_dark_highlight_text: rgba(vars.color_primary, vars.blend_dark_text_primary),
  color_dark_input_bottom_border: rgba(vars.color_dark_foreground, vars.blend_dark_border_light),
  color_dark_input_error_text: rgba("222, 50, 38"),
  color_dark_input_error_border: rgba("222, 50, 38"),
  color_dark_input_placeholder: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_label_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_disabled_label_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_disabled),
  color_dark_readonly_label_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_help_text: rgba(vars.color_dark_foreground, vars.blend_dark_text_tertiary),
  color_dark_required_symbol: rgba("221, 44, 0"),
  color_dark_focus_border: rgba(vars.color_primary),
  color_dark_counter_ok_border: rgba(vars.color_primary)
};

var fns = [layout, color];
var selector = "." + classes.component;

var addStyle = styler.createAddStyle(selector, fns, vars$1);

var getStyle = styler.createGetStyle(selector, fns, vars$1);

styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars$1
});

export { addStyle, color, getStyle, layout, vars$1 as vars };
