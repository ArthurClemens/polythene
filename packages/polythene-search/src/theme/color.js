
const style = (scope, selector, componentVars, tint) => [{
  [scope + selector]: {
    backgroundColor: componentVars["color_" + tint + "_background"],

    " .pe-textfield__label": {
      color: componentVars["color_" + tint + "_label_text"]
    }
  }
}];

export default (selector, componentVars) => [
  style("",                selector, componentVars, "light"),
  style(".pe-dark-theme ", selector, componentVars, "dark" ), // inside dark theme
];
