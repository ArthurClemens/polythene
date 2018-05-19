
const sel = (selector, o) => ({
  [selector]: o
});

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          opacity: 1
        }
      },
      " .pe-button__content": {
        borderColor: "transparent"
      },
    })
  ],
});

const tintFns = tint => ({

  // Text

  ["color_" + tint + "_text"]: (selector, vars) => [
    sel(selector, {
      "&, &:link, &:visited": {
        color: vars["color_" + tint + "_text"]
      },
    })
  ],
  ["color_" + tint + "_disabled_text"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--disabled": {
        color: vars["color_" + tint + "_disabled_text"],
      },
    })
  ],

  // Background

  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        backgroundColor: vars["color_" + tint + "_background"],
      },
    })
  ],
  ["color_" + tint + "_focus_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__focus": {
        backgroundColor: vars["color_" + tint + "_focus_background"]
      },
    })
  ],
  ["color_" + tint + "_active_background"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_active_background"]
        }
      },
    })
  ],
  ["color_" + tint + "_disabled_background"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content": {
          backgroundColor: vars["color_" + tint + "_disabled_background"],
        }
      },
    })
  ],

  // Borders

  ["color_" + tint + "_border"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        borderColor: vars["color_" + tint + "_border"],
      },
    })
  ],

  ["color_" + tint + "_active_border"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--selected": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_active_border"],
        }
      },
    })
  ],
  ["color_" + tint + "_disabled_border"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_disabled_border"],
        }
      },
    })
  ],

  // Icon

  ["color_" + tint + "_icon"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__dropdown": {
        color: vars["color_" + tint + "_icon"]
      },
    })
  ],

  // Separator

  ["color_" + tint + "_separator"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--separator-start": {
        " .pe-button__content": {
          borderColor: vars["color_" + tint + "_separator"]
        }
      }
    })
  ]

});

const hoverTintFns = tint => ({

  ["color_" + tint + "_hover"]: (selector, vars) => [
    sel(selector, {
      color: vars["color_" + tint + "_hover"],
    })
  ],

  ["color_" + tint + "_hover_border"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        borderColor: vars["color_" + tint + "_hover_border"],
      },
    })
  ],

  ["color_" + tint + "_wash_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__wash": {
        backgroundColor: vars["color_" + tint + "_wash_background"]
      },
    })
  ],

  ["color_" + tint + "_hover_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__content": {
        backgroundColor: vars["color_" + tint + "_hover_background"]
      },
    })
  ],

  ["color_" + tint + "_hover_icon"]: (selector, vars) => [
    sel(selector, {
      " .pe-button__dropdown": {
        color: vars["color_" + tint + "_hover_icon"],
      }
    })
  ],

});

const lightTintFns = Object.assign({}, generalFns, tintFns("light"));
const darkTintFns = Object.assign({}, generalFns, tintFns("dark"));

const lightTintHoverFns = hoverTintFns("light");
const darkTintHoverFns = hoverTintFns("dark");

const createStyle = (selector, componentVars, customVars, tint, hover) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  return Object.keys(currentVars).map(v => {
    const varFns = tint === "light"
      ? hover
        ? lightTintHoverFns
        : lightTintFns
      : hover
        ? darkTintHoverFns
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

export const noTouchStyle = (scopes, selector, componentVars, customVars, tint) => {
  const selectors = []
    .concat(scopes.map(s => s + selector + ":hover").join(","))
    .concat(scopes.map(s => s + selector + ":active").join(","));
  return createStyle(selectors, componentVars, customVars, tint, true);
};

export default (selector, componentVars, customVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light"), // normal, has/inside light tone
  noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, customVars, "dark"), // inside dark tone
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, customVars, "light"),
];
