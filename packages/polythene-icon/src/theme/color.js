import { mixin } from "polythene-css";

const style = (componentVars, scope = "") => [{
  [scope + ".pe-icon"]: {
    fill: componentVars.color,

    " svg": {
      fill: componentVars.color,
      color: "inherit",

      " path, rect, circle, polygon": {
        "&:not([fill=none])": {
          fill: componentVars.color
        }
      }
    }
  }
}];

const createStyles = componentVars => [
  style(componentVars)
];

export default componentVars => mixin.createStyles(componentVars, createStyles);

