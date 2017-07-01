const style = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + selector).join(",")]: {
    color:           componentVars["color_" + tint + "_title"],
    componentVars["color_" + tint + "_background"] && backgroundColor: componentVars["color_" + tint + "_background"],

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
    },
    "&.pe-list-tile--sticky": {
      backgroundColor: componentVars["color_" + tint + "_background"] || "inherit"
    }
  }
}];

const noTouchStyle = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + selector + ":hover").join(",")]: {
    ":not(.pe-list__header):not(.pe-list-tile--disabled)": {
      " .pe-list-tile__primary, .pe-list-tile__secondary": {
        backgroundColor: componentVars["color_" + tint + "_background_hover"]
      }
    }
  }
}];

export default (selector, componentVars) => [
  style([".pe-dark-tone", ".pe-dark-tone "], selector, componentVars, "dark" ), // has/inside dark tone
  style(["", ".pe-light-tone", ".pe-light-tone "], selector, componentVars, "light"), // normal, has/inside light tone

  noTouchStyle([
    "html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable",
    "html.pe-no-touch .pe-dark-tone .pe-list-tile--hoverable "
  ], selector, componentVars, "dark" ), // has/inside dark tone

  noTouchStyle([
    "html.pe-no-touch .pe-list-tile--hoverable",
    "html.pe-no-touch .pe-list-tile--hoverable ",
    "html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable",
    "html.pe-no-touch .pe-light-tone .pe-list-tile--hoverable "
  ], selector, componentVars, "light" ), // normal, has/inside light tone
];
