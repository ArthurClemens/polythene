
const style = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + selector).join(",")]: {
    " .pe-button__content": {
      backgroundColor: componentVars["color_" + tint + "_background"],
      color:           componentVars["color_" + tint],
    },

    "&.pe-button--focus": {
      " .pe-button__focus": {
        opacity: 1,
        backgroundColor: componentVars["color_" + tint + "_focus_background"]
      }
    },
  }
}];

export default (selector, componentVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
];
