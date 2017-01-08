import { mixin } from "polythene-css";

const style = (componentVars, tint, scope = "") => [{
  [scope + ".pe-button.pe-button--icon, a.pe-button.pe-button--icon"]: {
    color: componentVars["color_" + tint + "_text"],
    "background-color": componentVars["color_" + tint + "_background"] || componentVars["color_background"],

    " .pe-button__wash": {
      opacity: componentVars["color_" + tint + "_wash_opacity"]
    },

    "&.pe-button--focus, &.pe-button--selected": {
      " .pe-button__focus": {
        opacity: componentVars["color_" + tint + "_focus_opacity"],
        "background-color": "currentcolor"
      }
    },

    "&.pe-button--disabled": {
      color: componentVars["color_" + tint + "_disabled_text"]
    }
  }
}];

const noTouch = (componentVars, tint, scope = "") => [{
  [scope + ".pe-button.pe-button--icon:hover"]:
    (tint === "light") ?
    {
      " .pe-button__wash": {
        "background-color": "currentcolor"
      }
    } :
    {
      " .pe-button__wash": {
        "background-color": componentVars["color_" + tint + "_text"]
      }
    }
}];

const createStyles = componentVars => [
  style(componentVars, "light"), {
    "html.pe-no-touch": [
      noTouch(componentVars, "light", " ")
    ]
  }, {
    ".pe-dark-theme": [
      // inside dark theme
      style(componentVars, "dark", " "),
      // has dark theme
      style(componentVars, "dark", "&")
    ]
  }, {
    "html.pe-no-touch .pe-dark-theme": [
      noTouch(componentVars, "dark", " ")
    ]
  }
];

export default componentVars => mixin.createStyles(componentVars, createStyles);

