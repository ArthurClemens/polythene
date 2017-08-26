
const style = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + selector).join(",")]: {

    backgroundColor: componentVars["color_" + tint + "_background"],
    
    " .pe-dialog-pane__header .pe-dialog-pane__title": {
      color: componentVars["color_" + tint + "_title_text"]
    },
    " .pe-dialog-pane__body": {
      color: componentVars["color_" + tint + "_body_text"],
      borderColor: "transparen" // default
    },
    ".pe-dialog-pane--border-top .pe-dialog-pane__body": {
      borderTopColor: componentVars["color_" + tint + "_body_border"]
    },
    ".pe-dialog-pane--border-bottom .pe-dialog-pane__body": {
      borderBottomColor: componentVars["color_" + tint + "_body_border"]
    }
  }
}];

export default (selector, componentVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark"), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone
];
