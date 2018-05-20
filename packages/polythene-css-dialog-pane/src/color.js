import { sel } from "polythene-core-css";

const generalFns = ({
  general_styles: () => [{
    " .pe-dialog-pane__body": {
      borderColor: "transparent"
    },
  }]
});

const tintFns = tint => ({
  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      backgroundColor: vars["color_" + tint + "_background"],
    })
  ],
  ["color_" + tint + "_title_text"]: (selector, vars) => [
    sel(selector, {
      " .pe-dialog-pane__header .pe-dialog-pane__title": {
        color: vars["color_" + tint + "_title_text"]
      },
    })
  ],
  ["color_" + tint + "_body_text"]: (selector, vars) => [
    sel(selector, {
      " .pe-dialog-pane__body": {
        color: vars["color_" + tint + "_body_text"],
      },
    })
  ],
  ["color_" + tint + "_body_border"]: (selector, vars) => [
    sel(selector, {
      ".pe-dialog-pane--border-top .pe-dialog-pane__body": {
        borderTopColor: vars["color_" + tint + "_body_border"]
      },
      ".pe-dialog-pane--border-bottom .pe-dialog-pane__body": {
        borderBottomColor: vars["color_" + tint + "_body_border"]
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
