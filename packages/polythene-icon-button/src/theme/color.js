import { mixin } from "polythene-css";

const style = (componentVars, tint, type, scope = "") => [{
  [scope + ".pe-button.pe-button--icon, a.pe-button.pe-button--icon"]: {
    color: componentVars["color_" + tint + "_" + type + "_normal_text"],
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
      color: componentVars["color_" + tint + "_" + type + "_disabled_text"]
    },

    "&.pe-button--raised": {
      "background-color": componentVars["color_" + tint + "_background"],

      " .pe-button__content": {
        background: "transparent"
      }
    }
  }
}];

const noTouch = (componentVars, tint, type, scope = "") => [{
  [scope + ".pe-button.pe-button--icon:hover"]:
    (tint === "light") ?
    {
      " .pe-button__wash": {
        "background-color": "currentcolor"
      }
    } :
    {
      " .pe-button__wash": {
        "background-color": componentVars["color_" + tint + "_" + type + "_normal_text"]
      }
    }
}];

const createStyles = componentVars => [
  style(componentVars, "light", "flat"), {
    "html.pe-no-touch": [
      noTouch(componentVars, "light", "flat", " ")
    ]
  }, {
    ".pe-dark-theme": [
      // inside dark theme
      style(componentVars, "dark", "flat", " "),
      // has dark theme
      style(componentVars, "dark", "flat", "&")
    ]
  }, {
    "html.pe-no-touch .pe-dark-theme": [
      noTouch(componentVars, "dark", "flat", " ")
    ]
  }
];

export default componentVars => mixin.createStyles(componentVars, createStyles);

