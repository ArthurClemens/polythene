
const style = (scope, selector, componentVars, tint) => {
  const normalBorder   = componentVars["color_" + tint + "_border"]          || "transparent";
  const activeBorder   = componentVars["color_" + tint + "_active_border"]   || normalBorder;
  const disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
  return [{
    [scope + selector]: {
      "&, &:link, &:visited": {
        color: componentVars["color_" + tint + "_text"]
      },

      " .pe-button__content": {
        backgroundColor: componentVars["color_" + tint + "_background"],
        borderColor: normalBorder
      },

      ".pe-button--disabled": {
        color: componentVars["color_" + tint + "_disabled_text"],

        " .pe-button__content": {
          backgroundColor: componentVars["color_" + tint + "_disabled_background"],
          borderColor: disabledBorder
        }
      },

      ".pe-button--selected": {
        " .pe-button__content": {
          backgroundColor: componentVars["color_" + tint + "_active_background"],
          borderColor: activeBorder
        },
        " .pe-button__focus": {
          opacity: 1,
          backgroundColor: componentVars["color_" + tint + "_focus_background"]
        }
      },

      ".pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1,
          backgroundColor: componentVars["color_" + tint + "_focus_background"]
        }
      }
    }
  }];
};

const noTouchStyle = (scope, selector, componentVars, tint) => {
  const normalBorder = componentVars["color_" + tint + "_border"];
  const hoverBorder = componentVars["color_" + tint + "_border"] || normalBorder;
  return [{
    [scope + selector + ":hover"]: {
      ":not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
        backgroundColor: componentVars["color_" + tint + "_hover_background"],
        borderColor: hoverBorder
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
