import { vars } from "polythene-theme";
import { mixin } from "polythene-css";

export default (selector, componentVars) => [{
  [selector]: [
    mixin.clearfix(), {
      position: "relative",
      lineHeight: vars.line_height,
      display: "inline-block",
      boxSizing: "border-box",
      margin: 0,
      overflow: "visible", // Firefox needs this
      paddingBottom: componentVars.vertical_spacing_bottom + "px",
      width: "100%",
      maxWidth: "100%",

      " .pe-textfield__input-area": {
        position: "relative",
        paddingTop: componentVars.vertical_spacing_top + "px",

        "&:after": [
          mixin.defaultTransition("opacity", componentVars.input_focus_border_animation_duration), {
            position: "absolute",
            content: "\"\"",
            bottom: 0,
            left: 0,
            height: componentVars.input_focus_border_width + "px",
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
        fontSize: componentVars.font_size_input + "px",
        lineHeight: componentVars.line_height_input + "px",
        width: "100%",
        background: "none",
        textAlign: "left",
        color: "inherit",
        borderWidth: componentVars.input_border_width + "px",
        borderStyle: "none none solid none",
        borderRadius: 0,
        margin: 0,
        padding: componentVars.input_padding_v + "px " + componentVars.input_padding_h + "px",

        // disable glow on textfield--invalid fields
        "&:textfield--invalid": {
          boxShadow: "none"
        },
        ":invalid": {
          boxShadow: "none"
        }
      },
      " textarea.pe-textfield__input": {
        margin: componentVars.input_padding_v + "px " + componentVars.input_padding_h + "px",
        padding: 0,
        display: "block"
      },

      // focus border
      " textfield__input:focus, &.pe-textfield--focused .pe-textfield__input": {
        "border-width": componentVars.input_border_width + "px",
        outline: "none"
      },

      " .pe-textfield__label": {
        position: "absolute",
        display: "block",
        top: (componentVars.vertical_spacing_top + componentVars.input_padding_v) + "px",
        bottom: 0,
        left: componentVars.input_padding_h + "px",
        right: componentVars.input_padding_h + "px",
        fontSize: componentVars.font_size_input + "px",
        lineHeight: componentVars.line_height_input + "px",
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
        paddingBottom: componentVars.floating_label_vertical_spacing_bottom + "px",

        " .pe-textfield__input-area": {
          paddingTop: componentVars.floating_label_vertical_spacing_top + "px"
        },

        " .pe-textfield__label": [
          mixin.defaultTransition("all", componentVars.floating_label_animation_duration), {
            top: (componentVars.floating_label_vertical_spacing_top + componentVars.input_padding_v) + "px"
          }
        ],

        ".pe-textfield--focused, &.pe-textfield--dirty": {
          " .pe-textfield__label": {
            fontSize: componentVars.font_size_floating_label + "px",
            top: componentVars.floating_label_top + "px",
            visibility: "visible"
          }
        },

        ".pe-textfield--dense": {
          fontSize: componentVars.dense_font_size_input + "px",
          paddingBottom: componentVars.dense_floating_label_vertical_spacing_bottom + "px",

          " .pe-textfield__input-area": {
            paddingTop: componentVars.dense_floating_label_vertical_spacing_top + "px"
          },

          " .pe-textfield__input": {
            fontSize: componentVars.dense_font_size_input + "px",
          },
          " .pe-textfield__label": {
            fontSize: componentVars.dense_font_size_input + "px",
            top: (componentVars.dense_floating_label_vertical_spacing_top + componentVars.input_padding_v) + "px"
          },

          ".pe-textfield--focused, &.pe-textfield--dirty": {
            " .pe-textfield__label": {
              fontSize: componentVars.dense_font_size_floating_label + "px",
              top: componentVars.dense_floating_label_top + "px"
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
        marginTop: componentVars.margin_top_error_message + "px",
        fontSize: componentVars.font_size_error + "px",
        lineHeight: vars.line_height,
        minHeight: componentVars.font_size_error * vars.line_height + "px"
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
          padding: componentVars.full_width_input_padding_v + "px " + componentVars.full_width_input_padding_h + "px"
        },

        " .pe-textfield__error, .pe-textfield__help, .pe-textfield__counter": {
          paddingLeft: componentVars.full_width_input_padding_h + "px",
          paddingRight: componentVars.full_width_input_padding_h + "px"
        },

        " .pe-textfield__label": {
          top: componentVars.full_width_input_padding_v + "px",
          left: componentVars.full_width_input_padding_h + "px",
          right: componentVars.full_width_input_padding_h + "px"
        },

        ".pe-textfield--dense": {
          " .pe-textfield__input": {
            fontSize: componentVars.dense_full_width_font_size_input + "px",
            padding: componentVars.dense_full_width_input_padding_v + "px " + componentVars.dense_full_width_input_padding_h + "px"
          },
          " .pe-textfield__label": {
            fontSize: componentVars.dense_full_width_font_size_input + "px",
            top: componentVars.dense_full_width_input_padding_v + "px",
            left: componentVars.dense_full_width_input_padding_h + "px",
            right: componentVars.dense_full_width_input_padding_h + "px"
          }
        }
      }
    }
  ]
}];
