// @ts-check

import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: () => [],
});

const tintFns = tint => ({
  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      backgroundColor: vars["color_" + tint + "_background"],
    })
  ],
  ["color_" + tint + "_border"]: (selector, vars) => [
    sel(selector, {
      ["& + .pe-list"]: {
        borderTopColor: vars["color_" + tint + "_border"]
      },
      ".pe-list--border": {
        " .pe-list-tile": {
          ":not(:last-child)": {
            borderColor: vars["color_" + tint + "_border"]
          }
        }
      },
      ".pe-list--indented-border": {
        " .pe-list-tile": {
          " .pe-list-tile__content:not(.pe-list-tile__content-front)": {
            borderColor: vars["color_" + tint + "_border"]
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
