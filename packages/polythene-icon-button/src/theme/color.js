
const style = (scope, selector, componentVars, tint) => {
  return [{
    [scope + selector]: {
      color: componentVars["color_" + tint],
      "background-color": componentVars["color_" + tint + "_background"] || componentVars["color_background"],
      " .pe-button__wash": {
        opacity: componentVars["color_" + tint + "_wash_opacity"]
      },

      "&.pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          opacity: componentVars["color_" + tint + "_focus_opacity"],
          "background-color": "currentcolor"
        }
      },

      "&.pe-button--disabled": {
        color: componentVars["color_" + tint + "_disabled"]
      }
    }
  }];
};

const noTouchStyle = (scope, selector, componentVars, tint) => {
  const backgroundColor = tint === "light"
    ? "currentcolor"
    : componentVars["color_" + tint];
  return [{
    [scope + selector + ":hover"]: {
      " .pe-button__wash": {
        "background-color": backgroundColor
      }
    }
  }];
};

export default (selector, componentVars) => [
  style(       "",                                 selector, componentVars, "light"),
  style(       ".pe-dark-theme ",                  selector, componentVars, "dark" ), // inside dark theme
  noTouchStyle("html.pe-no-touch ",                selector, componentVars, "light"),
  noTouchStyle("html.pe-no-touch .pe-dark-theme ", selector, componentVars, "dark" ), // inside dark theme
];
