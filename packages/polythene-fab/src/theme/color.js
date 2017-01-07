import { mixin } from "polythene-css";

const style = (componentVars, tint, scope = "") => [{
  [scope + ".pe-button--fab, a.pe-button--fab"]: {
    "background-color": componentVars["color_" + tint + "_background"],
    color: componentVars["color_" + tint + "_text"],

    " .pe-button__content": {
      "background-color": "transparent"
    }
  }
}];

const createStyles = componentVars => [
  style(componentVars, "light"), {
    ".pe-dark-theme": [
      // inside dark theme
      style(componentVars, "dark", " "),
      // has dark theme
      style(componentVars, "dark", "&")
    ]
  }
];

export default componentVars => mixin.createStyles(componentVars, createStyles);
