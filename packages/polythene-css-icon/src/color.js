import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      color: "currentColor",
    })
  ],
});

const tintFns = tint => ({
  ["color_" + tint]: (selector, vars) => [
    sel(selector, {
      color: vars["color_" + tint]
    })
  ],
  ["color_" + tint + "_avatar_background"]: (selector, vars) => [
    sel(selector, {
      ".pe-icon--avatar": {
        backgroundColor: vars["color_" + tint + "_avatar_background"],
      } 
    })
  ]
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

export default createColor({
  varFns: { lightTintFns, darkTintFns }
});
