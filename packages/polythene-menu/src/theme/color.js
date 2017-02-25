
const style = (scope, selector, componentVars, tint) => [{
  [scope + selector]: {
    " .pe-menu__content": {
      "background-color": componentVars["color_" + tint + "_background"]
    }
  }
}];

export default (selector, componentVars) => [
  style("",                selector, componentVars, "light"),
  style(".pe-dark-theme",  selector, componentVars, "dark" ), // has dark theme
  style(".pe-dark-theme ", selector, componentVars, "dark" ), // inside dark theme
];
