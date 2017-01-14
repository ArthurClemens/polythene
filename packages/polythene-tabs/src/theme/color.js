
const style = (scope, selector, componentVars, tint) => [{
  [scope + selector]: {
    color: componentVars["color_" + tint],

    " .pe-tabs__tab.pe-button--selected": {
      color: componentVars["color_" + tint + "_selected"],

      " .pe-button__content": {
        background: componentVars["color_" + tint + "_selected_background"]
      }
    },
    " .pe-tabs__tab:not(.pe-button--selected) .pe-icon": {
      color: componentVars["color_" + tint + "_icon"]
    },
    " .pe-tabs__indicator": {
      "background-color": componentVars["color_" + tint + "_tab_indicator"]
    }
  }
}];

export default (selector, componentVars) => [
  style("",                selector, componentVars, "light"),
  style(".pe-dark-theme ", selector, componentVars, "dark" ) // inside dark theme
];
