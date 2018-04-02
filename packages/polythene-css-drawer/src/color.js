
const style = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + selector).join(",")]: {
    " .pe-dialog__content": {
      borderColor: componentVars["color_" + tint + "_border"],
      background: "none",
    },
    " .pe-dialog-pane": {
      backgroundColor: componentVars["color_" + tint + "_background"],
    },
    " .pe-dialog__backdrop": {
      backgroundColor: componentVars["color_" + tint + "_backdrop_background"]
    }
  }
}];

export default (selector, componentVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
];
