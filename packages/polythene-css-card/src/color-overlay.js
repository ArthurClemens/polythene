import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [], // eslint-disable-line no-unused-vars
});

const tintFns = tint => ({
  ["color_" + tint + "_overlay_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-card__overlay__content": {
        backgroundColor: vars["color_" + tint + "_overlay_background"]
      }
    })
  ],
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

export default createColor({
  varFns: { lightTintFns, darkTintFns }
});
