(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-theme'), require('polythene-core-textfield')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-theme', 'polythene-core-textfield'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-theme'],global['polythene-core-textfield']));
}(this, (function (exports,polytheneCoreCss,polytheneTheme,polytheneCoreTextfield) { 'use strict';

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

  var sel = function sel(selector, o) {
    return _defineProperty({}, selector, o);
  };

  var vertical_spacing_top_input_padding_v = function vertical_spacing_top_input_padding_v(selector, vars) {
    return sel(selector, {
      " .pe-textfield__label": {
        top: vars.vertical_spacing_top + vars.input_padding_v + "px"
      }
    });
  };

  var floating_label_vertical_spacing_top_input_padding_v = function floating_label_vertical_spacing_top_input_padding_v(selector, vars) {
    return sel(selector, {
      ".pe-textfield--floating-label .pe-textfield__label": {
        top: vars.floating_label_vertical_spacing_top + vars.input_padding_v + "px"
      }
    });
  };

  var dense_floating_label_vertical_spacing_top_input_padding_v = function dense_floating_label_vertical_spacing_top_input_padding_v(selector, vars) {
    return sel(selector, {
      ".pe-textfield--floating-label.pe-textfield--dense .pe-textfield__label": {
        top: vars.dense_floating_label_vertical_spacing_top + vars.input_padding_v + "px"
      }
    });
  };

  var input_padding_v_input_padding_h = function input_padding_v_input_padding_h(selector, vars) {
    return sel(selector, {
      " .pe-textfield__input": {
        padding: vars.input_padding_v + "px " + vars.input_padding_h + "px"
      },
      " textarea.pe-textfield__input": {
        margin: vars.input_padding_v + "px " + vars.input_padding_h + "px"
      }
    });
  };

  var full_width_input_padding_v_full_width_input_padding_h = function full_width_input_padding_v_full_width_input_padding_h(selector, vars) {
    return sel(selector, {
      ".pe-textfield--full-width": {
        " .pe-textfield__input": {
          padding: vars.full_width_input_padding_v + "px " + vars.full_width_input_padding_h + "px"
        }
      }
    });
  };

  var dense_full_width_input_padding_v_dense_full_width_input_padding_h = function dense_full_width_input_padding_v_dense_full_width_input_padding_h(selector, vars) {
    return sel(selector, {
      ".pe-textfield--full-width.pe-textfield--dense": {
        " .pe-textfield__input": {
          padding: vars.dense_full_width_input_padding_v + "px " + vars.dense_full_width_input_padding_h + "px"
        }
      }
    });
  };

  var varFns = {
    general_styles: function general_styles(selector) {
      return [sel(selector, [polytheneCoreCss.mixin.clearfix(), {
        position: "relative",
        lineHeight: polytheneTheme.vars.line_height,
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
          lineHeight: polytheneTheme.vars.line_height
        },

        " .pe-textfield__counter": {
          textAlign: "right",
          float: "right",
          padding: "0 0 0 16px"
        },

        " .pe-textfield__help-focus": [polytheneCoreCss.mixin.defaultTransition("opacity"), {
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
    vertical_spacing_bottom: function vertical_spacing_bottom(selector, vars) {
      return [sel(selector, {
        paddingBottom: vars.vertical_spacing_bottom + "px"
      })];
    },
    floating_label_vertical_spacing_bottom: function floating_label_vertical_spacing_bottom(selector, vars) {
      return [sel(selector, {
        ".pe-textfield--floating-label": {
          paddingBottom: vars.floating_label_vertical_spacing_bottom + "px"
        },
        ".pe-textfield--dense": {
          paddingBottom: vars.dense_floating_label_vertical_spacing_bottom + "px"
        }
      })];
    },
    vertical_spacing_top: function vertical_spacing_top(selector, vars) {
      return [sel(selector, {
        " .pe-textfield__input-area": {
          paddingTop: vars.vertical_spacing_top + "px"
        }
      }), vertical_spacing_top_input_padding_v(selector, vars)];
    },
    input_padding_v: function input_padding_v(selector, vars) {
      return [vertical_spacing_top_input_padding_v(selector, vars), floating_label_vertical_spacing_top_input_padding_v(selector, vars), dense_floating_label_vertical_spacing_top_input_padding_v(selector, vars), input_padding_v_input_padding_h(selector, vars)];
    },
    input_padding_h: function input_padding_h(selector, vars) {
      return [sel(selector, {
        " .pe-textfield__label": {
          left: vars.input_padding_h + "px",
          right: vars.input_padding_h + "px"
        }
      }), input_padding_v_input_padding_h(selector, vars)];
    },
    floating_label_vertical_spacing_top: function floating_label_vertical_spacing_top(selector, vars) {
      return [sel(selector, {
        ".pe-textfield--floating-label": {
          " .pe-textfield__input-area": {
            paddingTop: vars.floating_label_vertical_spacing_top + "px"
          }
        }

      }), floating_label_vertical_spacing_top_input_padding_v(selector, vars)];
    },
    dense_floating_label_vertical_spacing_top: function dense_floating_label_vertical_spacing_top(selector, vars) {
      return [sel(selector, {
        ".pe-textfield--floating-label.pe-textfield--dense": {
          " .pe-textfield__input-area": {
            paddingTop: vars.dense_floating_label_vertical_spacing_top + "px"
          }
        }
      }), dense_floating_label_vertical_spacing_top_input_padding_v(selector, vars)];
    },
    input_focus_border_animation_duration: function input_focus_border_animation_duration(selector, vars) {
      return [sel(selector, {
        " .pe-textfield__input-area:after": polytheneCoreCss.mixin.defaultTransition("opacity", vars.input_focus_border_animation_duration)
      })];
    },
    input_focus_border_width: function input_focus_border_width(selector, vars) {
      return [sel(selector, {
        " .pe-textfield__input-area:after": {
          height: vars.input_focus_border_width + "px"
        }
      })];
    },
    font_size_error: function font_size_error(selector, vars) {
      return [sel(selector, {
        " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
          fontSize: vars.font_size_error + "px",
          minHeight: vars.font_size_error * polytheneTheme.vars.line_height + "px"
        }
      })];
    },
    font_size_input: function font_size_input(selector, vars) {
      return [sel(selector, {
        " .pe-textfield__input, .pe-textfield__label": {
          fontSize: vars.font_size_input + "px"
        }
      })];
    },
    line_height_input: function line_height_input(selector, vars) {
      return [sel(selector, {
        " .pe-textfield__input, .pe-textfield__label": {
          lineHeight: vars.line_height_input + "px"
        }
      })];
    },
    input_border_width: function input_border_width(selector, vars) {
      return [sel(selector, {
        " .pe-textfield__input": {
          borderWidth: vars.input_border_width + "px"
        },
        // focus border
        ".pe-textfield--focused .pe-textfield__input": {
          borderWidth: vars.input_border_width + "px",
          outline: "none"
        }
      })];
    },
    full_width_input_padding_v: function full_width_input_padding_v(selector, vars) {
      return [sel(selector, {
        ".pe-textfield--full-width": {
          " .pe-textfield__label": {
            top: vars.full_width_input_padding_v + "px"
          }
        }
      }), full_width_input_padding_v_full_width_input_padding_h(selector, vars)];
    },
    full_width_input_padding_h: function full_width_input_padding_h(selector, vars) {
      return [sel(selector, {
        ".pe-textfield--full-width": {
          " .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter": {
            paddingLeft: vars.full_width_input_padding_h + "px",
            paddingRight: vars.full_width_input_padding_h + "px"
          },
          " .pe-textfield__label": {
            left: vars.full_width_input_padding_h + "px",
            right: vars.full_width_input_padding_h + "px"
          }
        }
      }), full_width_input_padding_v_full_width_input_padding_h(selector, vars)];
    },
    dense_font_size_input: function dense_font_size_input(selector, vars) {
      return [sel(selector, {
        ".pe-textfield--dense": {
          "&, .pe-textfield__input, .pe-textfield__label": {
            fontSize: vars.dense_font_size_input + "px"
          }
        }
      })];
    },
    dense_full_width_font_size_input: function dense_full_width_font_size_input(selector, vars) {
      return [sel(selector, {
        ".pe-textfield--dense": {
          " .pe-textfield__input": {
            fontSize: vars.dense_full_width_font_size_input + "px"
          },
          " .pe-textfield__label": {
            fontSize: vars.dense_full_width_font_size_input + "px"
          }
        }
      })];
    },
    dense_full_width_input_padding_v: function dense_full_width_input_padding_v(selector, vars) {
      return [sel(selector, {
        ".pe-textfield--full-width": {
          ".pe-textfield--dense": {
            " .pe-textfield__label": {
              top: vars.dense_full_width_input_padding_v + "px"
            }
          }
        }
      }), dense_full_width_input_padding_v_dense_full_width_input_padding_h(selector, vars)];
    },
    dense_full_width_input_padding_h: function dense_full_width_input_padding_h(selector, vars) {
      return [sel(selector, {
        ".pe-textfield--full-width": {
          ".pe-textfield--dense": {
            " .pe-textfield__label": {
              left: vars.dense_full_width_input_padding_h + "px",
              right: vars.dense_full_width_input_padding_h + "px"
            }
          }
        }
      }), dense_full_width_input_padding_v_dense_full_width_input_padding_h(selector, vars)];
    },
    margin_top_error_message: function margin_top_error_message(selector, vars) {
      return [sel(selector, {
        " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
          marginTop: vars.margin_top_error_message + "px"
        }
      })];
    },
    floating_label_animation_duration: function floating_label_animation_duration(selector, vars) {
      return [sel(selector, {
        ".pe-textfield--floating-label": {
          " .pe-textfield__label": polytheneCoreCss.mixin.defaultTransition("all", vars.floating_label_animation_duration)
        }
      })];
    },
    dense_font_size_floating_label: function dense_font_size_floating_label(selector, vars) {
      return [sel(selector, {
        ".pe-textfield--floating-label": {
          ".pe-textfield--dense": {
            ".pe-textfield--focused, &.pe-textfield--dirty": {
              fontSize: vars.dense_font_size_floating_label + "px"
            }
          }
        }
      })];
    },
    dense_floating_label_top: function dense_floating_label_top(selector, vars) {
      return [sel(selector, {
        ".pe-textfield--floating-label": {
          ".pe-textfield--dense": {
            ".pe-textfield--focused, &.pe-textfield--dirty": {
              " .pe-textfield__label": {
                top: vars.dense_floating_label_top + "px"
              }
            }
          }
        }
      })];
    },
    floating_label_top: function floating_label_top(selector, vars) {
      return [sel(selector, {
        ".pe-textfield--floating-label": {
          ".pe-textfield--focused, &.pe-textfield--dirty": {
            " .pe-textfield__label": {
              top: vars.floating_label_top + "px"
            }
          }
        }
      })];
    },
    font_size_floating_label: function font_size_floating_label(selector, vars) {
      return [sel(selector, {
        ".pe-textfield--floating-label": {
          ".pe-textfield--focused, &.pe-textfield--dirty": {
            " .pe-textfield__label": {
              fontSize: vars.font_size_floating_label + "px"
            }
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
    var _ref2;

    return _ref2 = {}, _defineProperty$1(_ref2, "color_" + tint + "_focus_border", function (selector, vars) {
      return [sel$1(selector, {
        color: vars["color_" + tint + "_focus_border"] // override by specifying "color"
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_input_background", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-textfield__input-area": {
          backgroundColor: vars["color_" + tint + "_input_background"]
        },
        " .pe-textfield__input:-webkit-autofill": {
          "-webkit-box-shadow": "0 0 0px 1000px " + vars["color_" + tint + "_input_background"] + " inset"
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_input_text", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-textfield__input": {
          color: vars["color_" + tint + "_input_text"]
        },
        " .pe-textfield__input:-webkit-autofill": {
          color: vars["color_" + tint + "_input_text"] + " !important"
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_counter_ok_border", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-textfield--counter ": {
          " .pe-textfield__input-area:after": {
            backgroundColor: vars["color_" + tint + "_counter_ok_border"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_input_bottom_border", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-textfield__input": {
          borderColor: vars["color_" + tint + "_input_bottom_border"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_label_text", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-textfield__label": {
          color: vars["color_" + tint + "_label_text"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_disabled_label_text", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-textfield--disabled, &.pe-textfield--readonly": {
          " .pe-textfield__input-area:after": {
            backgroundImage: "linear-gradient(to right, " + vars["color_" + tint + "_disabled_label_text"] + " 20%, rgba(255, 255, 255, 0) 0%)"
          }
        },
        ".pe-textfield--disabled": {
          " .pe-textfield__input, .pe-textfield__label": {
            color: vars["color_" + tint + "_disabled_label_text"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_readonly_label_text", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-textfield--readonly": {
          " .pe-textfield__input, .pe-textfield__label": {
            color: vars["color_" + tint + "_readonly_label_text"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_highlight_text", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-textfield--focused": {
          // note: not when textfield--dirty and not textfield--focused
          ".pe-textfield--floating-label .pe-textfield__label": {
            color: vars["color_" + tint + "_highlight_text"]
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_required_symbol", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-textfield--focused": {
          ".pe-textfield--required.pe-textfield--floating-label": {
            " .pe-textfield__required-indicator": {
              color: vars["color_" + tint + "_required_symbol"]
            }
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_help_text", function (selector, vars) {
      return [sel$1(selector, {
        " .pe-textfield__help, .pe-textfield__counter": {
          color: vars["color_" + tint + "_help_text"]
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_input_error_border", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
          " .pe-textfield__input": {
            borderColor: vars["color_" + tint + "_input_error_border"]
          },
          "&, &.pe-textfield--counter": {
            " .pe-textfield__input-area:after": {
              backgroundColor: vars["color_" + tint + "_input_error_border"]
            }
          }
        }
      })];
    }), _defineProperty$1(_ref2, "color_" + tint + "_input_error_text", function (selector, vars) {
      return [sel$1(selector, {
        ".pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
          " .pe-textfield__label": {
            color: vars["color_" + tint + "_input_error_text"]
          },
          " .pe-textfield__error, .pe-textfield__counter, .pe-textfield__help": {
            color: vars["color_" + tint + "_input_error_text"]
          },
          ".pe-textfield--required .pe-textfield__label": {
            color: vars["color_" + tint + "_input_error_text"]
          }
        }
      })];
    }), _ref2;
  };

  var lightTintFns = _extends$1({}, generalFns, tintFns("light"));
  var darkTintFns = _extends$1({}, generalFns, tintFns("dark"));

  var createStyle = function createStyle(selector, componentVars, customVars, tint) {
    var allVars = _extends$1({}, componentVars, customVars);
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
    style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light")];
  });

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCoreTextfield.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCoreTextfield.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreTextfield.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreTextfield.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-textfield.js.map
