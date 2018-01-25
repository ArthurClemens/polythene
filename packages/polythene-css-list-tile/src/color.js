const style = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + selector).join(",")]: {
    color:           componentVars["color_" + tint + "_title"],
    backgroundColor: componentVars["color_" + tint + "_background"],

    ".pe-list-tile--header": {
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
    " .pe-list-tile__content-front": {
      color: componentVars["color_" + tint + "_front"]
    },
    ".pe-list-tile--disabled": {
      "&, .pe-list-tile__title, .pe-list-tile__content, .pe-list-tile__subtitle": {
        color: componentVars["color_" + tint + "_text_disabled"]
      }
    },
    ".pe-list-tile--selected": {
      " .pe-list-tile__primary, pe-list-tile__secondary": {
        backgroundColor: componentVars["color_" + tint + "_selected_background"]
      }
    },
    ".pe-list-tile--highlight:not(.pe-list-tile--selected)": {
      " .pe-list-tile__primary, pe-list-tile__secondary": {
        backgroundColor: componentVars["color_" + tint + "_highlight_background"]
      }
    },
    "&.pe-list-tile--sticky": {
      backgroundColor: componentVars["color_" + tint + "_background"] || "inherit"
    },
    ":not(.pe-list-tile--disabled)": {
      " a.pe-list-tile__primary:focus, a.pe-list-tile__secondary:focus": {
        outline: "none",
        backgroundColor: componentVars["color_" + tint + "_focus_background"] || "inherit"
      }
    }
  }
}];

const noTouchStyle = (scopes, selector, componentVars, tint) => [{
  [scopes.map(s => s + selector + ":hover").join(",")]: {
    ":not(.pe-list-tile--header):not(.pe-list-tile--disabled):not(.pe-list-tile--selected)": {
      color: componentVars["color_" + tint + "_hover_text"],

      " .pe-list-tile__primary, .pe-list-tile__secondary": {
        backgroundColor: componentVars["color_" + tint + "_hover_background"]
      },
      " .pe-list-tile__primary .pe-list-tile__content-front": {
        color: componentVars["color_" + tint + "_hover_front"]
      },
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
