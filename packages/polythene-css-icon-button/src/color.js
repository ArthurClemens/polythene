import { noTouchStyle as buttonNoTouchStyle } from "polythene-css-button";
import { sel } from "polythene-core-css";

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          backgroundColor: "currentcolor"
        }
      },
    })
  ],
});

const tintFns = tint => ({
  ["color_" + tint]: (selector, vars) => [
    sel(selector, {
      "&, .pe-icon-button__label": {
        color: vars["color_" + tint],
      },
    })
  ],
  ["color_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-icon-button__content": { 
        backgroundColor: vars["color_background"],
      },
    })
  ],
  ["color_" + tint + "_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-icon-button__content": { 
        backgroundColor: vars["color_" + tint + "_background"]
      },
    })
  ],
  ["color_" + tint + "_wash_opacity"]: (selector, vars) => [
    sel(selector, {
      opacity: vars["color_" + tint + "_wash_opacity"]
    })
  ],
  ["color_" + tint + "_focus_opacity"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          opacity: vars["color_" + tint + "_focus_opacity"],
        }
      },
    })
  ],
  ["color_" + tint + "_disabled"]: (selector, vars) => [
    sel(selector, {
      ".pe-button--disabled": {
        " .pe-button__content, .pe-icon-button__label": {
          color: vars["color_" + tint + "_disabled"]
        }
      }
    })
  ],
});

const hoverTintFns = tint => ({
  ["color_" + tint + "_label_hover"]: (selector, vars) => [
    sel(selector, {
      " .pe-icon-button__label": {
        color: vars["color_" + tint + "_label_hover"]
      },
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
  buttonNoTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, customVars, "dark"), // inside dark tone
  noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, customVars, "dark"), // inside dark tone
  buttonNoTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, customVars, "light"),
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, customVars, "light"),
];
