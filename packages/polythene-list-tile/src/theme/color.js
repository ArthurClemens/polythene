const style = (scope, selector, componentVars, tint) => [{
  [scope + selector]: {
    color:           componentVars["color_" + tint + "_title"],
    backgroundColor: componentVars["color_" + tint + "_background"] || "initial",

    ".pe-list__header": {
      color: componentVars["color_" + tint + "_list_header"],

      " .pe-list-tile__primary, pe-list-tile__secondary": {
        backgroundColor: "inherit"
      }
    },

    " .pe-list-tile__subtitle": {
      color: componentVars["color_" + tint + "_subtitle"]
    },

    " .pe-list-tile__secondary": {
      color: componentVars["color_" + tint + "_secondary"]
    },

    ".pe-list-tile--disabled": {
      "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
        color: componentVars["color_" + tint + "_text_disabled"]
      }
    },
    ".pe-list-tile--selected": {
      " .pe-list-tile__primary, pe-list-tile__secondary": {
        backgroundColor: componentVars["color_" + tint + "_background_selected"]
      }
    }
  }
}];

const noTouchStyle = (scope, selector, componentVars, tint) => [{
  [scope + selector + ":hover"]: {
    ":not(.pe-list__header):not(.pe-list-tile--disabled)": {
      " .pe-list-tile__primary, .pe-list-tile__secondary": {
        backgroundColor: componentVars["color_" + tint + "_background_hover"]
      }
    }
  }
}];

export default (selector, componentVars) => [
  style(       "",                                                         selector, componentVars, "light"),
  style(       ".pe-dark-theme ",                                          selector, componentVars, "dark" ), // inside dark theme
  noTouchStyle("html.pe-no-touch .pe-list-tile--hoverable",                selector, componentVars, "light"),
  noTouchStyle("html.pe-no-touch .pe-dark-theme .pe-list-tile--hoverable", selector, componentVars, "dark"),
  noTouchStyle("html.pe-no-touch .pe-list--hoverable ",                    selector, componentVars, "light"),
  noTouchStyle("html.pe-no-touch .pe-dark-theme .pe-list--hoverable ",     selector, componentVars, "dark"),
];
