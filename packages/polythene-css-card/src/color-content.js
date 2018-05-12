
const sel = (selector, o) => ({
  [selector]: o
});

const generalFns = ({
  general_styles: selector => [], // eslint-disable-line no-unused-vars
});

const tintFns = tint => ({
  ["color_" + tint + "_title_text"]: (selector, vars) => [
    sel(selector, {
      " .pe-card__title": {
        color: vars["color_" + tint + "_title_text"]
      },
    })
  ],
  ["color_" + tint + "_subtitle_text"]: (selector, vars) => [
    sel(selector, {
      " .pe-card__subtitle": {
        color: vars["color_" + tint + "_subtitle_text"]
      },
    })
  ],
  ["color_" + tint + "_text"]: (selector, vars) => [
    sel(selector, {
      " .pe-card__text": {
        color: vars["color_" + tint + "_text"]
      },
    })
  ],
  ["color_" + tint + "_actions_border"]: (selector, vars) => [
    sel(selector, {
      " .pe-card__actions--border": {
        borderTop: "1px solid " + vars["color_" + tint + "_actions_border"]
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

export const style = (scopes, selector, componentVars, customVars, tint) => {
  const selectors = scopes.map(s => s + selector).join(",");
  return createStyle(selectors, componentVars, customVars, tint);
};

export default (selector, componentVars, customVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, customVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, customVars, "light"), // normal, has/inside light tone
];
