import { styler } from "polythene-css";

const style = (componentVars, scope, selector, tint) => {
  const color = componentVars["color_" + tint] || "currentcolor";
  return [{
    [scope + selector]: {
      fill: color,

      " svg": {
        fill: color,
        color: "inherit",

        " path, rect, circle, polygon": {
          "&:not([fill=none])": {
            fill: color
          }
        }
      }
    }
  }];
};

const createStyles = (componentVars, className = "") => {
  const selector = `${className}.pe-icon`;
  return [
    style(componentVars, "",                selector, "light"),
    style(componentVars, ".pe-dark-theme ", selector, "dark" ), // inside dark theme
  ];
};

export default componentVars => styler.createStyles(componentVars, createStyles);

