const style = (scope, selector, componentVars, tint) => [{
  [scope + selector]: {
    backgroundColor: componentVars["color_" + tint + "_background"],

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
  " .pe-list + .pe-list": {
    borderColor: componentVars["color_" + tint + "_border"]
  }
}];

export default (selector, componentVars) => [
  style("",                selector, componentVars, "light"),
  style(".pe-dark-theme ", selector, componentVars, "dark" ), // inside dark theme
];
