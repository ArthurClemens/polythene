const style = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + selector).join(",")]: {
    backgroundColor: componentVars["color_" + tint + "_background"] || "initial",

    ".pe-list--borders": {
      " .pe-list-tile:not(.pe-list__header)": {
        ":not(:last-child)": {
          borderColor: componentVars["color_" + tint + "_border"]
        }
      }
    },

    ".pe-list--indented-borders": {
      " .pe-list-tile:not(.pe-list__header)": {
        " .pe-list-tile__content:not(.pe-list-tile__content--front)": {
          borderColor: componentVars["color_" + tint + "_border"]
        }
      }
    }
  },
  [selector + " + .pe-list"]: {
    borderTopColor: componentVars["color_" + tint + "_border"]
  }
}];

export default (selector, componentVars) => [
  style([
    ".pe-dark-tone",
    ".pe-dark-tone "
  ], selector, componentVars, "dark"), // has/inside dark theme
  style([
    "",
    ".pe-light-tone",
    ".pe-light-tone "
  ], selector, componentVars, "light"), // normal, has/inside light theme
];
