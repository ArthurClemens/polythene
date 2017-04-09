
const style = (scope, selector, componentVars, tint) => [{
  [scope + selector]: {
    color: componentVars["color_" + tint + "_text"],
    background: componentVars["color_" + tint + "_background"]
  }
}];

export default (selector, componentVars) => [
  style("",                selector, componentVars, "light"),
  style(".pe-dark-theme",  selector, componentVars, "dark" ), // has dark theme
  style(".pe-dark-theme ", selector, componentVars, "dark" ), // inside dark theme
];
