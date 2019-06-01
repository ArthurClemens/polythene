// @ts-check

import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [],
});

const tintFns = tint => ({
  ["color_" + tint]: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        color: vars["color_" + tint],
      },
    })
  ],
  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        backgroundColor: vars["color_" + tint + "_background"],
      },
    })
  ],
  ["color_" + tint + "_wash_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__wash-color": {
        backgroundColor: vars["color_" + tint + "_wash_background"]
      },
    })
  ],
  ["color_" + tint + "_wash_opacity"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__wash-color": {
        opacity: vars["color_" + tint + "_wash_opacity"]
      },
    })
  ],
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

export default createColor({
  varFns: { lightTintFns, darkTintFns }
});
