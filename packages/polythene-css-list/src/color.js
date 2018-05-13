
const sel = (selector, o) => ({
  [selector]: o
});

const generalFns = ({
  general_styles: () => [],
});

const tintFns = tint => ({
  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      backgroundColor: vars["color_" + tint + "_background"],
    })
  ],
  ["color_" + tint + "_border"]: (selector, vars) => [
    sel(selector, {
      ["& + .pe-list"]: {
        borderTopColor: vars["color_" + tint + "_border"]
      },
      ".pe-list--border": {
        " .pe-list-tile": {
          ":not(:last-child)": {
            borderColor: vars["color_" + tint + "_border"]
          }
        }
      },
      ".pe-list--indented-border": {
        " .pe-list-tile": {
          " .pe-list-tile__content:not(.pe-list-tile__content-front)": {
            borderColor: vars["color_" + tint + "_border"]
          }
        }
      }
    })
  ]
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
];
