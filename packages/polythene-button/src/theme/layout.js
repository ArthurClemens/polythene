import { mixin } from "polythene-css";
import { appConfig } from "polythene-config";

const createStyles = (config) => {
  return [{
    ".pe-button": [
      mixin.vendorize({
        "user-select": "none"
      }, appConfig.prefixes_user_select), {
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
      "min-width": config.min_width + "px",
      margin: "0 " + config.margin_h + "px",
      padding: config.outer_padding_v + "px 0",
      background: "transparent",
      border: "none",

      " .pe-button__content": {
        position: "relative",
        "border-width": 0,
        padding: "0 " + config.padding_h + "px",
        "border-radius": config.border_radius + "px"
      },

      " .pe-button__label": {
        padding: config.padding_v + "px 0",
        "font-size": config.font_size + "px",
        "line-height": config.font_size + "px",
        "font-weight": config.font_weight,
        "text-transform": config.text_transform,
        "white-space": "pre"
      },

      "&.pe-button--borders": {
        " .pe-button__wash, pe-button__focus, .pe-ripple": mixin.fit(-1),

        " .pe-button__content": {
          "border-style": "solid",
          "border-width": "1px"
        },
        " .pe-button__label": {
          padding: (config.padding_v - 1) + "px 0",
        }
      }
    }
  }];
};

export default (config) => (mixin.createStyles(config, createStyles));

