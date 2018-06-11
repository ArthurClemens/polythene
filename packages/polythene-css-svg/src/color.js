import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      color: "inherit",
      
      " svg": {
        color: "inherit",

        " path, rect, circle, polygon": {
          "&:not([fill=none])": {
            fill: "currentcolor"
          }
        }
      }
    })
  ],
});

const tintFns = tint => ({
  ["color_" + tint]: (selector, vars) => [
    sel(selector, {
      " svg": {
        " path, rect, circle, polygon": {
          "&:not([fill=none])": {
            fill: vars["color_" + tint]
          }
        }
      }
    })
  ]
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

export default createColor({
  varFns: { lightTintFns, darkTintFns }
});
