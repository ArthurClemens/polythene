import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      " .pe-textfield__input-area": {
        backgroundColor: "transparent"
      }
    })
  ],
});

const tintFns = tint => ({
  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      backgroundColor: vars["color_" + tint + "_background"],
    })
  ],
  ["color_" + tint + "_label_text"]: (selector, vars) => [
    sel(selector, {
      " .pe-textfield": {
        " .pe-textfield__label": {
          color: vars["color_" + tint + "_label_text"]
        },
      }
    })
  ],
  ["color_" + tint + "_input_text"]: (selector, vars) => [
    sel(selector, {
      " .pe-textfield": {
        " .pe-textfield__input": {
          color: vars["color_" + tint + "_input_text"]
        },
      }
    })
  ]
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

export default createColor({
  varFns: { lightTintFns, darkTintFns }
});
