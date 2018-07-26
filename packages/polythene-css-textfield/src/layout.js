import { mixin, sel, createLayout } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

const alignSide = isRTL => () => ({
  " .pe-textfield__counter": {
    textAlign: isRTL ? "left" : "right",
    float: isRTL ? "left": "right",
    padding: isRTL ? "0 16px 0 0" : "0 0 0 16px"
  },
});
const alignLeft = alignSide(false);
const alignRight = alignSide(true);

const vertical_spacing_top_input_padding_v = (selector, vars) =>
  sel(selector, {
    " .pe-textfield__label": {
      top: (vars.vertical_spacing_top + vars.input_padding_v) + "px",
    }
  });

const floating_label_vertical_spacing_top_input_padding_v = (selector, vars) =>
  sel(selector, {
    ".pe-textfield--floating-label .pe-textfield__label": {
      top: (vars.floating_label_vertical_spacing_top + vars.input_padding_v) + "px"
    }
  });

const dense_floating_label_vertical_spacing_top_input_padding_v = (selector, vars) =>
  sel(selector, {
    ".pe-textfield--floating-label.pe-textfield--dense .pe-textfield__label": {
      top: (vars.dense_floating_label_vertical_spacing_top + vars.input_padding_v) + "px"
    }
  });

const input_padding_v_input_padding_h = (selector, vars) =>
  sel(selector, {
    " .pe-textfield__input": {
      padding: vars.input_padding_v + "px " + vars.input_padding_h + "px",
    },
    " textarea.pe-textfield__input": {
      margin: vars.input_padding_v + "px " + vars.input_padding_h + "px",
    },
  });

const full_width_input_padding_v_full_width_input_padding_h = (selector, vars) =>
  sel(selector, {
    ".pe-textfield--full-width": {
      " .pe-textfield__input": {
        padding: vars.full_width_input_padding_v + "px " + vars.full_width_input_padding_h + "px"
      },
    }
  });

const dense_full_width_input_padding_v_dense_full_width_input_padding_h = (selector, vars) =>
  sel(selector, {
    ".pe-textfield--full-width.pe-textfield--dense": {
      " .pe-textfield__input": {
        padding: vars.dense_full_width_input_padding_v + "px " + vars.dense_full_width_input_padding_h + "px"
      },
    }
  });

const varFns = {
  general_styles: selector => [
    sel(selector, [
      alignLeft(),
      mixin.clearfix(),
      {
        position: "relative",
        lineHeight: themeVars.line_height,
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
          },
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
          lineHeight: themeVars.line_height,
        },

        " .pe-textfield__help-focus": [
          mixin.defaultTransition("opacity"),
          {
            opacity: 0
          }
        ],
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
          },
        }
      },
    ]),
    {
      // RTL
      [`*[dir=rtl] ${selector}, .pe-rtl ${selector}`]: [
        alignRight()
      ],
    }
  ],
  vertical_spacing_bottom: (selector, vars) => [
    sel(selector, {
      paddingBottom: vars.vertical_spacing_bottom + "px",
    })
  ],
  floating_label_vertical_spacing_bottom: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--floating-label": {
        paddingBottom: vars.floating_label_vertical_spacing_bottom + "px",
      },
      ".pe-textfield--dense": {
        paddingBottom: vars.dense_floating_label_vertical_spacing_bottom + "px",
      }
    })
  ],
  vertical_spacing_top: (selector, vars) => [
    sel(selector, {
      " .pe-textfield__input-area": {
        paddingTop: vars.vertical_spacing_top + "px",
      }
    }),
    vertical_spacing_top_input_padding_v(selector, vars),
  ],
  input_padding_v: (selector, vars) => [
    vertical_spacing_top_input_padding_v(selector, vars),
    floating_label_vertical_spacing_top_input_padding_v(selector, vars),
    dense_floating_label_vertical_spacing_top_input_padding_v(selector, vars),
    input_padding_v_input_padding_h(selector, vars),
  ],
  input_padding_h: (selector, vars) => [
    sel(selector, {
      " .pe-textfield__label": {
        left: vars.input_padding_h + "px",
        right: vars.input_padding_h + "px",
      },
    }),
    input_padding_v_input_padding_h(selector, vars),
  ],
  floating_label_vertical_spacing_top: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--floating-label": {
        " .pe-textfield__input-area": {
          paddingTop: vars.floating_label_vertical_spacing_top + "px"
        },
      },

    }),
    floating_label_vertical_spacing_top_input_padding_v(selector, vars),
  ],
  dense_floating_label_vertical_spacing_top: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--floating-label.pe-textfield--dense": {
        " .pe-textfield__input-area": {
          paddingTop: vars.dense_floating_label_vertical_spacing_top + "px"
        },
      }
    }),
    dense_floating_label_vertical_spacing_top_input_padding_v(selector, vars),
  ],
  input_focus_border_animation_duration: (selector, vars) => [
    sel(selector, {
      " .pe-textfield__input-area:after": mixin.defaultTransition("opacity", vars.input_focus_border_animation_duration),
    })
  ],
  input_focus_border_width: (selector, vars) => [
    sel(selector, {
      " .pe-textfield__input-area:after": {
        height: vars.input_focus_border_width + "px",
      },
    })
  ],
  font_size_error: (selector, vars) => [
    sel(selector, {
      " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
        fontSize: vars.font_size_error + "px",
        minHeight: vars.font_size_error * themeVars.line_height + "px"
      },
    })
  ],
  font_size_input: (selector, vars) => [
    sel(selector, {
      " .pe-textfield__input, .pe-textfield__label": {
        fontSize: vars.font_size_input + "px",
      },
    })
  ],
  line_height_input: (selector, vars) => [
    sel(selector, {
      " .pe-textfield__input, .pe-textfield__label": {
        lineHeight: vars.line_height_input + "px",
      }
    })
  ],
  input_border_width: (selector, vars) => [
    sel(selector, {
      " .pe-textfield__input": {
        borderWidth: vars.input_border_width + "px",
      },
      // focus border
      ".pe-textfield--focused .pe-textfield__input": {
        borderWidth: vars.input_border_width + "px",
        outline: "none"
      },
    })
  ],
  full_width_input_padding_v: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--full-width": {
        " .pe-textfield__label": {
          top: vars.full_width_input_padding_v + "px",
        },
      }
    }),
    full_width_input_padding_v_full_width_input_padding_h(selector, vars),
  ],
  full_width_input_padding_h: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--full-width": {
        " .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter": {
          paddingLeft: vars.full_width_input_padding_h + "px",
          paddingRight: vars.full_width_input_padding_h + "px"
        },
        " .pe-textfield__label": {
          left: vars.full_width_input_padding_h + "px",
          right: vars.full_width_input_padding_h + "px"
        },
      }
    }),
    full_width_input_padding_v_full_width_input_padding_h(selector, vars),
  ],
  dense_font_size_input: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--dense": {
        "&, .pe-textfield__input, .pe-textfield__label": {
          fontSize: vars.dense_font_size_input + "px",
        },
      }
    })
  ],
  dense_full_width_font_size_input: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--dense": {
        " .pe-textfield__input": {
          fontSize: vars.dense_full_width_font_size_input + "px",
        },
        " .pe-textfield__label": {
          fontSize: vars.dense_full_width_font_size_input + "px",
        }
      }
    })
  ],
  dense_full_width_input_padding_v: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--full-width": {
        ".pe-textfield--dense": {
          " .pe-textfield__label": {
            top: vars.dense_full_width_input_padding_v + "px",
          }
        }
      }
    }),
    dense_full_width_input_padding_v_dense_full_width_input_padding_h(selector, vars),
  ],
  dense_full_width_input_padding_h: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--full-width": {
        ".pe-textfield--dense": {
          " .pe-textfield__label": {
            left: vars.dense_full_width_input_padding_h + "px",
            right: vars.dense_full_width_input_padding_h + "px"
          }
        }
      }
    }),
    dense_full_width_input_padding_v_dense_full_width_input_padding_h(selector, vars),
  ],
  margin_top_error_message: (selector, vars) => [
    sel(selector, {
      " .pe-textfield__error, .pe-textfield__error-placeholder, .pe-textfield__help, .pe-textfield__counter": {
        marginTop: vars.margin_top_error_message + "px",
      },
    })
  ],
  floating_label_animation_duration: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--floating-label": {
        " .pe-textfield__label": mixin.defaultTransition("all", vars.floating_label_animation_duration),
      }
    })
  ],
  dense_font_size_floating_label: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--floating-label": {
        ".pe-textfield--dense": {
          ".pe-textfield--focused, &.pe-textfield--dirty": {
            fontSize: vars.dense_font_size_floating_label + "px",
          }
        }
      }
    })
  ],
  dense_floating_label_top: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--floating-label": {
        ".pe-textfield--dense": {
          ".pe-textfield--focused, &.pe-textfield--dirty": {
            " .pe-textfield__label": {
              top: vars.dense_floating_label_top + "px"
            }
          }
        }
      },
    })
  ],
  floating_label_top: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--floating-label": {
        ".pe-textfield--focused, &.pe-textfield--dirty": {
          " .pe-textfield__label": {
            top: vars.floating_label_top + "px",
          }
        },
      },
    })
  ],
  font_size_floating_label: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--floating-label": {
        ".pe-textfield--focused, &.pe-textfield--dirty": {
          " .pe-textfield__label": {
            fontSize: vars.font_size_floating_label + "px",
          }
        },
      },
    })
  ],
};

export default createLayout({ varFns });
