import { mixin } from "polythene-core-css";

const sel = (selector, o) => ({
  [selector]: o
});

const varFns = {
  general_styles: selector => [
    sel(selector, {
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
    }),
    {
      " .pe-button-row": {
        // prevent inline block style to add extra space:
        fontSize: 0, 
        lineHeight: 0,
      }
    }
  ],
  row_margin_h: (selector, vars) => [
    sel(selector, {
      " .pe-button-row": {
        margin: `0 -${vars.row_margin_h}px`,
      },
      [` ${selector}`]: {
        margin: `0 ${vars.row_margin_h}px`,
      }
    })
  ],
};


export default (selector, componentVars, customVars) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return Object.keys(currentVars).map(v => (
    varFns[v] !== undefined 
      ? varFns[v](selector, allVars)
      : null
  )).filter(s => s);
};
