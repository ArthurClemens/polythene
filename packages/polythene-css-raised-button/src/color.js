import { noTouchStyle as buttonNoTouchStyle } from "polythene-css-button";

const sel = (selector, o) => ({
  [selector]: o
});

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      ".pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1,
        }
      },
      ".pe-button--selected": {
        " .pe-button__focus": {
          opacity: 1,
        }
      },
      " .pe-button__content": {
        borderColor: "transparent"
      },
    })
  ],
});

const tintFns = tint => ({

  // Regular

  ["color_" + tint + "_text"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-button--disabled)": {
        "&, &:link, &:visited": {
          color: vars["color_" + tint + "_text"]
        },
      }
    })
  ],
  ["color_" + tint + "_border"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-button--disabled)": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_border"]
        },
      }
    })
  ],
  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      ":not(.pe-button--disabled)": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_background"],
        },
      }
    })
  ],

  // Disabled

  ["color_" + tint + "_disabled_text"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--disabled": {
        color: vars["color_" + tint + "_disabled_text"],
      },
    })
  ],
  ["color_" + tint + "_disabled_border"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_disabled_border"]
        },
      }
    })
  ],
  ["color_" + tint + "_disabled_background"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_disabled_background"]
        },
      }
    })
  ],

  // Active, focus
  
  ["color_" + tint + "_active_border"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_active_border"]
        },
      }
    })
  ],
  ["color_" + tint + "_active_background"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_active_background"]
        },
      }
    })
  ],
  ["color_" + tint + "_focus_background"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--focus": {
        " .pe-button__focus": {
          backgroundColor: vars["color_" + tint + "_focus_background"]
        }
      },
      ".pe-button--selected": {
        " .pe-button__focus": {
          backgroundColor: vars["color_" + tint + "_focus_background"]
        }
      },
    })
  ],
});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

const createStyle = (selector, componentVars, customVars, tint) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return Object.keys(currentVars).map(v => {
    const varFns = tint === "light"
      ? lightTintFns
      : darkTintFns;
    return varFns[v] !== undefined 
      ? varFns[v](selector, allVars)
      : null;
  }).filter(s => s);
};

const style = (scopes, selector, componentVars, customVars, tint) => {
  const selectors = scopes.map(s => s + selector).join(",");
  return createStyle(selectors, componentVars, customVars, tint);
};

export default (selector, componentVars, customVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light"), // normal, has/inside light tone
  buttonNoTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, customVars, "dark"), // inside dark tone
  buttonNoTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, customVars, "light"),
];
