// @ts-check

import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      color: "inherit",
    })
  ],
});

const tintFns = tint => ({
  ["color"]: (selector, vars) => [
    sel(selector, {
      color: vars["color"]
    })
  ],
  ["color_" + tint]: (selector, vars) => [
    sel(selector, {
      color: vars["color_" + tint]
    })
  ]
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

export default createColor({
  varFns: { lightTintFns, darkTintFns }
});
