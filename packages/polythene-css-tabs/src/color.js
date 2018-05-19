import { noTouchStyle as buttonNoTouchStyle } from "polythene-css-button";

const sel = (selector, o) => ({
  [selector]: o
});

const generalFns = ({
  general_styles: selector => [
    sel(selector, {
      " .pe-tabs__scroll-button": {
        color: "inherit"
      }
    })
  ],
});

const tintFns = tint => ({
  ["color_" + tint]: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__tab": {
        color: vars["color_" + tint],
      },
    })
  ],
  ["color_" + tint + "_selected"]: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__tab.pe-button--selected": {
        color: vars["color_" + tint + "_selected"],
      },
    })
  ],
  ["color_" + tint + "_selected_background"]: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__tab.pe-button--selected": {
        " .pe-button__content": {
          background: vars["color_" + tint + "_selected_background"]
        }
      },
    })
  ],
  ["color_" + tint + "_icon"]: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__tab:not(.pe-button--selected) .pe-icon": {
        color: vars["color_" + tint + "_icon"]
      },
    })
  ],
  ["color_" + tint + "_tab_indicator"]: (selector, vars) => [
    sel(selector, {
      " .pe-tabs__indicator": {
        backgroundColor: vars["color_" + tint + "_tab_indicator"]
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

export const noTouchStyle = (scopes, selector, componentVars, customVars, tint) => buttonNoTouchStyle(scopes, selector + " .pe-text-button.pe-tabs__tab", componentVars, customVars, tint);

export default (selector, componentVars, customVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light"), // normal, has/inside light tone
  noTouchStyle(["html.pe-no-touch .pe-dark-tone "], selector, componentVars, customVars, "dark"), // inside dark tone
  noTouchStyle(["html.pe-no-touch ", "html.pe-no-touch .pe-light-tone "], selector, componentVars, customVars, "light"),
];
