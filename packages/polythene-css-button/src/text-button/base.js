// @ts-check

import { mixin, sel, createLayout } from "polythene-core-css";

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

      " .pe-button__content": {
        position: "relative",
        borderRadius: "inherit",
      },

      " .pe-button__label": {
        position: "relative",
        display: "block",
        borderRadius: "inherit",
        pointerEvents: "none",
      },

      " .pe-button__wash": [
        mixin.fit(),
        {
          zIndex: 0,
          borderRadius: "inherit",
          pointerEvents: "none"
        }
      ],
    }),
    {
      ".pe-button-row": {
        // prevent inline block style to add extra space:
        fontSize: 0, 
        lineHeight: 0,
      }
    }
  ],
  row_margin_h: (selector, vars) => [{
    ".pe-button-row": {
      margin: `0 -${vars.row_margin_h}px`,

      [` ${selector}`]: {
        margin: `0 ${vars.row_margin_h}px`,
      }
    },
  }],
};

export default createLayout({ varFns });
