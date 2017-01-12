
const style = (scope, selector, componentVars, tint) => {
  const color = componentVars["color_" + tint] || componentVars["color"] || "inherit";
  return [{
    [scope + selector]: {
      color
    }
  }];
};

export default (selector, componentVars) => [
  style("",                selector, componentVars, "light"),
  style(".pe-dark-theme ", selector, componentVars, "dark" ) // inside dark theme
];
