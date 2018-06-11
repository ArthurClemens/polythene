import { sel, createColor } from "polythene-core-css";
import { color as superColor } from "polythene-css-button";

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          background: "transparent"
        }
      },
    })
  ],
});

const tintFns = tint => ({
  ["color_" + tint + "_selected"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          color: vars["color_" + tint + "_selected"],
        }
      },
    })
  ],
  ["color_" + tint + "_selected_background"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          background: vars["color_" + tint + "_selected_background"]
        }
      },
    })
  ],
  ["color_" + tint + "_icon"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-button--selected) .pe-icon": {
        color: vars["color_" + tint + "_icon"]
      },
    })
  ],
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

export default createColor({
  varFns: { lightTintFns, darkTintFns },
  superColor
});
