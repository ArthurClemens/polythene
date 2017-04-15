
const baseStyle = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + selector).join(",")]: {
    backgroundColor: componentVars["color_" + tint + "_main_background"]
  }
}];

const contentStyle = (scopes, selector, componentVars, tint) => [{
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

const overlayStyle = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + ".pe-card__overlay--sheet").join(",")]: {
    " .pe-card__overlay__content": {
      backgroundColor: componentVars["color_" + tint + "_overlay_background"]
    }
  }
}];

export default (selector, componentVars) => [
  baseStyle([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark" ), // has/inside dark theme
  baseStyle(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light theme

  contentStyle([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark" ), // has/inside dark theme
  contentStyle(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light theme

  overlayStyle([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark" ), // has/inside dark theme
  overlayStyle(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light theme
];
