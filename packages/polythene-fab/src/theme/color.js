
const style = (scope, selector, componentVars, tint) => [{
  [scope + selector]: {
    " .pe-button__content": {
      backgroundColor: componentVars["color_" + tint + "_background"],
      color:           componentVars["color_" + tint]
    }
  }
}];

export default (selector, componentVars) => [
  style("",                selector, componentVars, "light"),
  style(".pe-dark-theme ", selector, componentVars, "dark" ) // inside dark theme
];
