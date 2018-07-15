import { sel, createColor } from "polythene-core-css";

const generalFns = ({
  general_styles: () => [{
    " .pe-dialog-pane__body": {
      borderColor: "transparent"
    },
  }]
});

const tintFns = tint => ({
  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      backgroundColor: vars["color_" + tint + "_background"],
    })
  ],
  ["color_" + tint + "_title_text"]: (selector, vars) => [
    sel(selector, {
      " .pe-dialog-pane__header .pe-dialog-pane__title": {
        color: vars["color_" + tint + "_title_text"]
      },
    })
  ],
  ["color_" + tint + "_body_text"]: (selector, vars) => [
    sel(selector, {
      " .pe-dialog-pane__body": {
        color: vars["color_" + tint + "_body_text"],
      },
    })
  ],
  ["color_" + tint + "_body_border"]: (selector, vars) => [
    sel(selector, {
      ".pe-dialog-pane--border-top .pe-dialog-pane__body": {
        borderTopColor: vars["color_" + tint + "_body_border"]
      },
      ".pe-dialog-pane--border-bottom .pe-dialog-pane__body": {
        borderBottomStyle: "solid",
        borderBottomColor: vars["color_" + tint + "_body_border"]
      }
    })
  ],
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

export default createColor({
  varFns: { lightTintFns, darkTintFns }
});
