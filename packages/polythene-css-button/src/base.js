import { mixin } from "polythene-core-css";

export default (selector, componentVars) => [{
  [selector]: [
    {
      userSelect: "none",
      "-moz-user-select": "none",
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
        borderRadius: "inherit",
      },

      " .pe-button__label": [
        mixin.fontSmoothing(),
        {
          position: "relative",
          display: "block",
          borderRadius: "inherit",
          pointerEvents: "none",
        }
      ],

      " .pe-button__wash, .pe-button__focus": [
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
  ],
  " .pe-button-row": {
    margin: `0 -${componentVars.margin_h}px`,
    // prevent inline block style to add extra space:
    fontSize: 0, 
    lineHeight: 0,

    [` ${selector}`]: {
      margin: `0 ${componentVars.margin_h}px`,
    }
  }
}];

