import { color as superColor } from "polythene-css-material-design-spinner";
import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      " .pe-md-progress-spinner__circle": {
        borderColor: "currentcolor"
      }
    })
  ],
});

const tintFns = tint => ({
  ["color_" + tint]: (selector, vars) => [
    sel(selector, {
      color: vars["color_" + tint],
    })
  ]
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

export default createColor({
  varFns: { lightTintFns, darkTintFns },
  superColor
});
