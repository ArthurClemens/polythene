const style = (scope, selector, componentVars, tint) => [{
  [scope + selector]: {
    "&.pe-list--borders": {
      " .pe-list-tile:not(.pe-list__header)": {
        "&:not(:last-child)": {
          "border-color": componentVars["color_" + tint + "_border"]
        }
      }
    },

    "&.pe-list--borders-indented": {
      " .pe-list-tile:not(.pe-list__header)": {
        " .pe-list-tile__content:not(.pe-list-tile__content--front)": {
          "border-color": componentVars["color_" + tint + "_border"]
        }
      }
    }
  },
  " .pe-list + .pe-list": {
    "border-color": componentVars["color_" + tint + "_border"]
  }
}];

export default (selector, componentVars) => [
  style("",                selector, componentVars, "light"),
  style(".pe-dark-theme ", selector, componentVars, "dark" ), // inside dark theme
];
