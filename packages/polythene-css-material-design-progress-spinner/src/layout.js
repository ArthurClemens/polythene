import { layout as superLayout } from "polythene-css-material-design-spinner";
import { sel, createLayout } from "polythene-core-css";

const varFns = {
  general_styles: selector => [
    sel(selector, {
      position: "relative",

      " .pe-md-progress-spinner__animation": {
        position: "absolute",
        width: "100%",
        height: "100%"
      },

      " .pe-md-progress-spinner__circle": {
        position: "absolute",
        boxSizing: "border-box",
        width: "100%",
        height: "100%",
        borderStyle: "solid",
        borderRadius: "50%"
      },

      " .pe-md-progress-spinner__circle-left, .pe-md-progress-spinner__circle-right": {
        transform: "rotate(0)",
        clip: "rect(0, 0, 0, 0)"
      },
    })
  ],
  progress_animation_duration: (selector, vars) => [
    sel(selector, {
      " .pe-md-progress-spinner__animation": {
        animationDuration: vars.progress_animation_duration,
      },
    })
  ]
};

export default createLayout({ varFns, superLayout });
