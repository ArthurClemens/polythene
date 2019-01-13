// @ts-check

import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      " .pe-tabs__scroll-button": {
        color: "inherit"
      },
      " .pe-no-touch &": {
        ".pe-tabs--scrollable": {
          backgroundColor: "inherit"
        },
        " .pe-tabs__scroll-button": {
          backgroundColor: "inherit",

          " .pe-button__content": {
            backgroundColor: "inherit",
          }
        }
      }
    })
  ],
});

const tintFns = tint => ({
  ["color_" + tint + "_tab_indicator"]: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__indicator": {
        backgroundColor: vars["color_" + tint + "_tab_indicator"]
      },
    })
  ],
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

export default createColor({
  varFns: { lightTintFns, darkTintFns }
});
