import { styler } from "polythene-css";

const style = (componentVars, scope, selector, tint) => {
  return [{
    [scope + selector]: {
      color: componentVars["color_" + tint + "_text"],
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

const noTouchStyle = (componentVars, scope, selector, tint) => {
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


const createStyles = (componentVars, className = "") => {
  const selector = `${className}.pe-button--icon`;
  return [
    style(componentVars,        "",                                 selector, "light"),
    style(componentVars,        ".pe-dark-theme ",                  selector, "dark" ), // inside dark theme
    noTouchStyle(componentVars, "html.pe-no-touch ",                selector, "light"),
    noTouchStyle(componentVars, "html.pe-no-touch .pe-dark-theme ", selector, "dark" ), // inside dark theme
  ];
};

export default componentVars => styler.createStyles(componentVars, createStyles);

