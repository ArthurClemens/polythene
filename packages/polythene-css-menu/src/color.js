// @ts-check

import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [], // eslint-disable-line no-unused-vars
});

const tintFns = tint => ({
  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-menu__panel": {
        "background-color": vars["color_" + tint + "_background"]
      }
    })
  ],
  ["color_" + tint + "_backdrop_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-menu__backdrop": {
        "background-color": vars["color_" + tint + "_backdrop_background"]
      }
    })
  ]
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

export default createColor({
  varFns: { lightTintFns, darkTintFns }
});
