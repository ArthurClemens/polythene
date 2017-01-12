
const style = (scope, selector, componentVars, tint) => [{
  [scope + selector]: {
    "background-color": componentVars["color_" + tint + "_background"],
    color: componentVars["color_" + tint],

    " .pe-button__content": {
      "background-color": "transparent"
    }
  }
}];

export default (selector, componentVars) => [
  style("",                selector, componentVars, "light"),
  style(".pe-dark-theme ", selector, componentVars, "dark" ) // inside dark theme
];
