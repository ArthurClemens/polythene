import { mixin } from "polythene-css";
import { vars } from "polythene-theme";

const createStyles = (componentVars) => {
  return [{
    ".pe-button": [
      mixin.vendorize({
        "user-select": "none"
      }, vars.prefixes_user_select), {
        outline: "none",
        padding: 0,
        "text-decoration": "none",
        "text-align": "center",
        cursor: "pointer",

        "&.pe-button--selected, &.pe-button--disabled, &.pe-button--inactive": {
          cursor: "default",
          "pointer-events": "none"
        },

        " .pe-button__content": {
          position: "relative",
          "border-radius": "inherit"
        },

        " .pe-button__label": [
          mixin.fontSmoothing(), {
            position: "relative",
            display: "block",
            "border-radius": "inherit",
            "pointer-events": "none"
          }
        ],

        " .pe-button__wash, .pe-button__focus": [
          mixin.defaultTransition("background-color"),
          mixin.fit(), {
            "border-radius": "inherit",
            "pointer-events": "none"
          }
        ],

        " .pe-button__focus": {
          opacity: 0
        },

        "&.pe-button--focus": {
          " .pe-button__focus": {
            opacity: 1
          }
        },

        " .pe-button__wash": {
          "z-index": 0
        }
      }
    ],
    ".pe-button--text": {
      display: "inline-block",
      "min-width": componentVars.min_width + "px",
      margin: "0 " + componentVars.margin_h + "px",
      padding: componentVars.outer_padding_v + "px 0",
      background: "transparent",
      border: "none",

      " .pe-button__content": {
        position: "relative",
        "border-width": 0,
        padding: "0 " + componentVars.padding_h + "px",
        "border-radius": componentVars.border_radius + "px"
      },

      " .pe-button__label": {
        padding: componentVars.padding_v + "px 0",
        "font-size": componentVars.font_size + "px",
        "line-height": componentVars.font_size + "px",
        "font-weight": componentVars.font_weight,
        "text-transform": componentVars.text_transform,
        "white-space": "pre"
      },

      "&.pe-button--borders": {
        " .pe-button__wash, pe-button__focus, .pe-ripple": mixin.fit(-1),

        " .pe-button__content": {
          "border-style": "solid",
          "border-width": "1px"
        },
        " .pe-button__label": {
          padding: (componentVars.padding_v - 1) + "px 0",
        }
      }
    }
  }];
};

export default (componentVars) => (mixin.createStyles(componentVars, createStyles));

