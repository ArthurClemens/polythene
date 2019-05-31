// @ts-check

import { mixin, sel, createLayout } from "polythene-core-css";
import { vars as themeVars } from "polythene-theme";

const varFns = {
  general_styles: selector => [
    sel(selector, {
      userSelect: "none",
      "-moz-user-select": "none",
      display: "inline-block",
      position: "relative",
      outline: "none",
      cursor: "pointer",
      padding: 0,
      border: "none",

      " .pe-button__content": {
        position: "relative",
        borderRadius: "50%",
      },

      " .pe-fab__content": {
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      },

      " .pe-ripple": {
        borderRadius: "inherit"
      },

      " .pe-button__wash": [
        mixin.fit(),
        {
          borderRadius: "inherit",
          transition: "background-color " + themeVars.animation_duration + " ease-in-out",
          pointerEvents: "none",
          backgroundColor: "transparent"
        }
      ]
    })
  ],
  size_regular: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        width: vars.size_regular + "px",
        height: vars.size_regular + "px",
      },
    })
  ],
  size_mini: (selector, vars) => [
    sel(selector, {
      ".pe-fab--mini": {
        " .pe-button__content": {
          width: vars.size_mini + "px",
          height: vars.size_mini + "px",
          padding: ((vars.size_mini - themeVars.unit_icon_size) / 2) + "px"
        }
      },
    })
  ],
};

export default createLayout({
  varFns
});
