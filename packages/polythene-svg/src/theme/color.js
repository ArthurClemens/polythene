
const style = (scope, selector, componentVars, tint) => {
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

export default (selector, componentVars) => [
  style("",                selector, componentVars, "light"),
  style(".pe-dark-theme ", selector, componentVars, "dark" ), // inside dark theme
];
