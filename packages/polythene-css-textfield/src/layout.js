import { mixin } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

export default (selector, vars) => [{
  [selector]: [
    mixin.clearfix(),
    {
      position: "relative",
      lineHeight: themeVars.line_height,
      display: "inline-block",
      boxSizing: "border-box",
      margin: 0,
      overflow: "visible", // Firefox needs this
      paddingBottom: vars.vertical_spacing_bottom + "px",
      width: "100%",
      maxWidth: "100%",

      " .pe-textfield__input-area": {
        position: "relative",
        paddingTop: vars.vertical_spacing_top + "px",

        "&:after": [
          mixin.defaultTransition("opacity", vars.input_focus_border_animation_duration), {
            position: "absolute",
            content: "\"\"",
            bottom: 0,
            left: 0,
            height: vars.input_focus_border_width + "px",
            width: "100%",
            opacity: 0
          }
        ]
      },
      ".pe-textfield--focused .pe-textfield__input-area:after": {
        opacity: 1
      },

      " .pe-textfield__input": {
        display: "block",
        fontSize: vars.font_size_input + "px",
        lineHeight: vars.line_height_input + "px",
        width: "100%",
        background: "none",
        textAlign: "left",
        color: "inherit",
        borderWidth: vars.input_border_width + "px",
        borderStyle: "none none solid none",
        borderRadius: 0,
        margin: 0,
        padding: vars.input_padding_v + "px " + vars.input_padding_h + "px",

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
        margin: vars.input_padding_v + "px " + vars.input_padding_h + "px",
        padding: 0,
        display: "block"
      },

      // focus border
      " textfield__input:focus, &.pe-textfield--focused .pe-textfield__input": {
        "border-width": vars.input_border_width + "px",
        outline: "none"
      },

      " .pe-textfield__label": {
        position: "absolute",
        display: "block",
        top: (vars.vertical_spacing_top + vars.input_padding_v) + "px",
        bottom: 0,
        left: vars.input_padding_h + "px",
        right: vars.input_padding_h + "px",
        fontSize: vars.font_size_input + "px",
        lineHeight: vars.line_height_input + "px",
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
        paddingBottom: vars.floating_label_vertical_spacing_bottom + "px",

        " .pe-textfield__input-area": {
          paddingTop: vars.floating_label_vertical_spacing_top + "px"
        },

        " .pe-textfield__label": [
          mixin.defaultTransition("all", vars.floating_label_animation_duration), {
            top: (vars.floating_label_vertical_spacing_top + vars.input_padding_v) + "px"
          }
        ],

        ".pe-textfield--focused, &.pe-textfield--dirty": {
          " .pe-textfield__label": {
            fontSize: vars.font_size_floating_label + "px",
            top: vars.floating_label_top + "px",
            visibility: "visible"
          }
        },

        ".pe-textfield--dense": {
          fontSize: vars.dense_font_size_input + "px",
          paddingBottom: vars.dense_floating_label_vertical_spacing_bottom + "px",

          " .pe-textfield__input-area": {
            paddingTop: vars.dense_floating_label_vertical_spacing_top + "px"
          },

          " .pe-textfield__input": {
            fontSize: vars.dense_font_size_input + "px",
          },
          " .pe-textfield__label": {
            fontSize: vars.dense_font_size_input + "px",
            top: (vars.dense_floating_label_vertical_spacing_top + vars.input_padding_v) + "px"
          },

          ".pe-textfield--focused, &.pe-textfield--dirty": {
            " .pe-textfield__label": {
              fontSize: vars.dense_font_size_floating_label + "px",
              top: vars.dense_floating_label_top + "px"
            }
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
        marginTop: vars.margin_top_error_message + "px",
        fontSize: vars.font_size_error + "px",
        lineHeight: themeVars.line_height,
        minHeight: vars.font_size_error * themeVars.line_height + "px"
      },

      " .pe-textfield__counter": {
        textAlign: "right",
        float: "right",
        padding: "0 0 0 16px"
      },

      " .pe-textfield__help-focus": [
        mixin.defaultTransition("opacity"), {
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
      }
    }, {
      ".pe-textfield--full-width": {
        width: "100%",
        padding: 0,

        " .pe-textfield__input-area": {
          padding: 0
        },

        " .pe-textfield__input": {
          padding: vars.full_width_input_padding_v + "px " + vars.full_width_input_padding_h + "px"
        },

        " .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter": {
          paddingLeft: vars.full_width_input_padding_h + "px",
          paddingRight: vars.full_width_input_padding_h + "px"
        },

        " .pe-textfield__label": {
          top: vars.full_width_input_padding_v + "px",
          left: vars.full_width_input_padding_h + "px",
          right: vars.full_width_input_padding_h + "px"
        },

        ".pe-textfield--dense": {
          " .pe-textfield__input": {
            fontSize: vars.dense_full_width_font_size_input + "px",
            padding: vars.dense_full_width_input_padding_v + "px " + vars.dense_full_width_input_padding_h + "px"
          },
          " .pe-textfield__label": {
            fontSize: vars.dense_full_width_font_size_input + "px",
            top: vars.dense_full_width_input_padding_v + "px",
            left: vars.dense_full_width_input_padding_h + "px",
            right: vars.dense_full_width_input_padding_h + "px"
          }
        }
      }
    }
  ]
}];
