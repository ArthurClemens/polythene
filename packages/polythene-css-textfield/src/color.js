import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      " .pe-textfield__input-area": {
        color: "inherit",

        "&:after": {
          backgroundColor: "currentcolor"
        }
      },
      ".pe-textfield--disabled, &.pe-textfield--readonly": {
        " .pe-textfield__input-area:after": {
          backgroundColor: "transparent",
        }
      },
      ".pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
        " .pe-textfield__input": {
          boxShadow: "none"
        },
      }
    })
  ]
});

const tintFns = tint => ({
  ["color_" + tint + "_focus_border"]: (selector, vars) => [
    sel(selector, {
      color: vars["color_" + tint + "_focus_border"], // override by specifying "color"
    })
  ],
  ["color_" + tint + "_input_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-textfield__input-area": {
        backgroundColor: vars["color_" + tint + "_input_background"],
      },
      " .pe-textfield__input:-webkit-autofill": {
        "-webkit-box-shadow": "0 0 0px 1000px " + vars["color_" + tint + "_input_background"] + " inset",
      }
    })
  ],
  ["color_" + tint + "_input_text"]: (selector, vars) => [
    sel(selector, {
      " .pe-textfield__input": {
        color: vars["color_" + tint + "_input_text"],
      },
      " .pe-textfield__input:-webkit-autofill": {
        color: vars["color_" + tint + "_input_text"] + " !important"
      }
    })
  ],
  ["color_" + tint + "_counter_ok_border"]: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--counter ": {
        " .pe-textfield__input-area:after": {
          backgroundColor: vars["color_" + tint + "_counter_ok_border"]
        }
      },
    })
  ],
  ["color_" + tint + "_input_bottom_border"]: (selector, vars) => [
    sel(selector, {
      " .pe-textfield__input": {
        borderColor: vars["color_" + tint + "_input_bottom_border"]
      },
    })
  ],
  ["color_" + tint + "_label_text"]: (selector, vars) => [
    sel(selector, {
      " .pe-textfield__label": {
        color: vars["color_" + tint + "_label_text"]
      },
    })
  ],
  ["color_" + tint + "_disabled_label_text"]: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--disabled, &.pe-textfield--readonly": {
        " .pe-textfield__input-area:after": {
          backgroundImage: "linear-gradient(to right, " + vars["color_" + tint + "_disabled_label_text"] + " 20%, rgba(255, 255, 255, 0) 0%)",
        }
      },
      ".pe-textfield--disabled": {
        " .pe-textfield__input, .pe-textfield__label": {
          color: vars["color_" + tint + "_disabled_label_text"]
        }
      },
    })
  ],
  ["color_" + tint + "_readonly_label_text"]: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--readonly": {
        " .pe-textfield__input, .pe-textfield__label": {
          color: vars["color_" + tint + "_readonly_label_text"]
        }
      },
    })
  ],
  ["color_" + tint + "_highlight_text"]: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--focused": {
        // note: not when textfield--dirty and not textfield--focused
        ".pe-textfield--floating-label .pe-textfield__label": {
          color: vars["color_" + tint + "_highlight_text"]
        },
      }
    })
  ],
  ["color_" + tint + "_required_symbol"]: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--focused": {
        ".pe-textfield--required.pe-textfield--floating-label": {
          " .pe-textfield__required-indicator": {
            color: vars["color_" + tint + "_required_symbol"]
          }
        }
      },
    })
  ],
  ["color_" + tint + "_help_text"]: (selector, vars) => [
    sel(selector, {
      " .pe-textfield__help, .pe-textfield__counter": {
        color: vars["color_" + tint + "_help_text"]
      },
    })
  ],
  ["color_" + tint + "_input_error_border"]: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
        " .pe-textfield__input": {
          borderColor: vars["color_" + tint + "_input_error_border"],
        },
        "&, &.pe-textfield--counter": {
          " .pe-textfield__input-area:after": {
            backgroundColor: vars["color_" + tint + "_input_error_border"]
          }
        }
      },
    })
  ],
  ["color_" + tint + "_input_error_text"]: (selector, vars) => [
    sel(selector, {
      ".pe-textfield--invalid:not(.pe-textfield--hide-validation)": {
        " .pe-textfield__label": {
          color: vars["color_" + tint + "_input_error_text"]
        },
        " .pe-textfield__error, .pe-textfield__counter, .pe-textfield__help": {
          color: vars["color_" + tint + "_input_error_text"]
        },
        ".pe-textfield--required .pe-textfield__label": {
          color: vars["color_" + tint + "_input_error_text"]
        },
      }
    })
  ],

});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

export default createColor({
  varFns: { lightTintFns, darkTintFns }
});
