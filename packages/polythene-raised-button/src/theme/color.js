import { styler } from "polythene-css";

const style = (componentVars, scope, selector, tint) => {
  const normalBorder   = componentVars["color_" + tint + "_border"]          || "transparent";
  const activeBorder   = componentVars["color_" + tint + "_active_border"]   || normalBorder;
  const disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
  return [{
    [scope + selector]: {
      "&, &:link, &:visited": {
        color: componentVars["color_" + tint + "_text"]
      },

      " .pe-button__content": {
        "background-color": componentVars["color_" + tint + "_background"],
        "border-color": normalBorder
      },

      "&.pe-button--disabled": {
        color: componentVars["color_" + tint + "_disabled_text"],

        " .pe-button__content": {
          "background-color": componentVars["color_" + tint + "_disabled_background"],
          "border-color": disabledBorder
        }
      },

      "&.pe-button--selected": {
        " .pe-button__content": {
          "background-color": componentVars["color_" + tint + "_active_background"],
          "border-color": activeBorder
        },
        " .pe-button__focus": {
          opacity: 1,
          "background-color": componentVars["color_" + tint + "_focus_background"]
        }
      },

      "&.pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1,
          "background-color": componentVars["color_" + tint + "_focus_background"]
        }
      }
    }
  }];
};

const noTouchStyle = (componentVars, scope, selector, tint) => {
  const normalBorder = componentVars["color_" + tint + "_border"];
  const hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
  return [{
    [scope + selector + ":hover"]: {
      "&:not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
        "background-color": componentVars["color_" + tint + "_hover_background"],
        "border-color": hoverBorder
      }
    }
  }];
};

const createStyles = (componentVars, className = "") => {
  const selector = `${className}.pe-button--raised`;
  return [
    style(componentVars,        "",                                 selector, "light"),
    style(componentVars,        ".pe-dark-theme ",                  selector, "dark" ), // inside dark theme
    noTouchStyle(componentVars, "html.pe-no-touch ",                selector, "light"),
    noTouchStyle(componentVars, "html.pe-no-touch .pe-dark-theme ", selector, "dark" ), // inside dark theme
  ];
};

export default componentVars => styler.createStyles(componentVars, createStyles);

