import { mixin } from "polythene-css";
import { vars } from "polythene-theme";

export default (selector) => [{
  [selector]: [
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
  ]
}];

