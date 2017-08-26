const style = (scopes, selector, componentVars, tint) => {
  const normalBorder   = componentVars["color_" + tint + "_border"]          || "transparent";
  const activeBorder   = componentVars["color_" + tint + "_active_border"]   || normalBorder;
  const disabledBorder = componentVars["color_" + tint + "_disabled_border"] || normalBorder;
  return [{
    [scopes.map(s => s + selector).join(",")]: {
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

      " .pe-button__focus": {
        backgroundColor: componentVars["color_" + tint + "_focus_background"]
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
          opacity: 1
        }
      }
    }
  }];
};

const noTouchStyle = (scopes, selector, componentVars, tint) => {
  const normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  const hoverBorder  = componentVars["color_" + tint + "_border"] || normalBorder;
  return [{
    [scopes.map(s => s + selector + ":hover").join(",")]: {
      ":not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
        backgroundColor: componentVars["color_" + tint + "_hover_background"],
        borderColor: hoverBorder
      }
    }
  }];
};

export default (selector, componentVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
  noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, "dark"), // inside dark tone
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, "light"),
];

