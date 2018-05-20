import { layout as materialDesignSpinnerLayout } from "polythene-css-material-design-spinner";
import { sel } from "polythene-core-css";

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

export default (selector, componentVars, customVars) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return materialDesignSpinnerLayout(selector, componentVars, customVars)
    .concat(Object.keys(currentVars)
      .map(v => (
        varFns[v] !== undefined 
          ? varFns[v](selector, allVars)
          : null
      ))
      .filter(s => s)
    );
};
