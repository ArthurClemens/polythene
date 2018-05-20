import { sel } from "polythene-core-css";

const generalFns = ({
  general_styles: () => [{
    " .pe-dialog__content": {
      background: "none",
    },
  }]
});

const tintFns = tint => ({
  ["color_" + tint + "_border"]: (selector, vars) => [
    sel(selector, {
      " .pe-dialog__content": {
        borderColor: vars["color_" + tint + "_border"],
      },
    })
  ],
  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-dialog-pane": {
        backgroundColor: vars["color_" + tint + "_background"],
      },
    })
  ],
  ["color_" + tint + "_backdrop_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-dialog__backdrop": {
        backgroundColor: vars["color_" + tint + "_backdrop_background"]
      }
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
];
