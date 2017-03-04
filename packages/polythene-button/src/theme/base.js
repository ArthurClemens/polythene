import { mixin } from "polythene-css";

export default (selector) => [{
  [selector]: {
    userSelect: "none",
    outline: "none",
    padding: 0,
    textDecoration: "none",
    textAlign: "center",
    cursor: "pointer",

    ".pe-button--selected, &.pe-button--disabled, &.pe-button--inactive": {
      cursor: "default",
      pointerEvents: "none"
    },

    ".pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1
      }
    },

    " .pe-button__content": {
      position: "relative",
      borderRadius: "inherit"
    },

    " .pe-button__label": [
      mixin.fontSmoothing(),
      {
        position: "relative",
        display: "block",
        borderRadius: "inherit",
        pointerEvents: "none"
      }
    ],

    " .pe-button__wash, .pe-button__focus": [
      mixin.defaultTransition("background-color"),
      mixin.fit(),
      {
        borderRadius: "inherit",
        pointerEvents: "none"
      }
    ],

    " .pe-button__focus": {
      opacity: 0
    },

    " .pe-button__wash": {
      zIndex: 0
    }
  }
}];

