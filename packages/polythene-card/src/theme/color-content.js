
const style = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + selector).join(",")]: {
    " .pe-card__title": {
      color: componentVars["color_" + tint + "_title_text"]
    },
    " .pe-card__subtitle": {
      color: componentVars["color_" + tint + "_subtitle_text"]
    },
    " .pe-card__text": {
      color: componentVars["color_" + tint + "_text"]
    },
    " .pe-card__actions--borders": {
      borderTop: "1px solid " + componentVars["color_" + tint + "_actions_border"]
    }
  }
}];

export default (selector, componentVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark theme
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
];
