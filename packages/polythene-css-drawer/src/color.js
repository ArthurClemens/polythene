// @ts-check

import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: () => [
    {
      " .pe-dialog__content": {
        background: "none",
      },
    }
  ]
});

const tintFns = tint => ({
  ["color_" + tint + "_border"]: (selector, vars) => [
    sel(selector, {
      " .pe-dialog__content": {
        borderColor: vars["color_" + tint + "_border"],
      },
    })
  ],
  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-dialog-pane": {
        backgroundColor: vars["color_" + tint + "_background"],
      },
    })
  ],
  ["color_" + tint + "_backdrop_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-dialog__backdrop": {
        backgroundColor: vars["color_" + tint + "_backdrop_background"]
      }
    })
  ],
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

export default createColor({
  varFns: { lightTintFns, darkTintFns }
});
