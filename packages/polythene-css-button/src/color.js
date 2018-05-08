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
      },

      " .pe-button__dropdown": {
        color: componentVars["color_" + tint + "_icon"]
      },

      " .pe-split-button &": {
        ":last-child": {
          " .pe-button__content": {
            borderColor: componentVars["color_" + tint + "_dropdown_border"]
          }
        }
      }
    }
  }];
};

export const noTouchStyle = (scopes, selector, componentVars, tint) => {
  const normalBorder = componentVars["color_" + tint + "_border"] || "transparent";
  const hoverBorder  = componentVars["color_" + tint + "_border"] || normalBorder;
  return [{
    [[].concat(scopes.map(s => s + selector + ":hover").join(",")).concat(scopes.map(s => s + selector + ":active").join(","))]: {
      ":not(.pe-button--selected):not(.pe-button--inactive)": {
        color: componentVars["color_" + tint + "_hover"] || componentVars["color_" + tint + "_text"],
        borderColor: hoverBorder,

        " .pe-button__content": {
          backgroundColor: componentVars["color_" + tint + "_hover_background"] || componentVars["color_" + tint + "_background"]
        },

        " .pe-button__wash": {
          backgroundColor: componentVars["color_" + tint + "_wash_background"],
        },

        " .pe-button__dropdown": {
          color: componentVars["color_" + tint + "_hover_icon"] || "inherit",
        }
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

