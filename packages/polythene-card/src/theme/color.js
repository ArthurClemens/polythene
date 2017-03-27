import { mixin } from "polythene-css";

const baseStyle = (scope, selector, componentVars, tint) => [{
  [scope + selector]: {
    backgroundColor: componentVars["color_" + tint + "_main_background"]
  }
}];

const contentStyle = (scope, selector, componentVars, tint) => [{
  [scope]: {
    " .pe-card__title": {
      color: componentVars["color_" + tint + "_title_text"]
    },
    " .pe-card__subtitle": {
      color: componentVars["color_" + tint + "_subtitle_text"]
    },
    " .pe-card__text": {
      color: componentVars["color_" + tint + "_text"]
    },
    " .pe-card__actions--borders": [
      mixin.hairline("border-top"),
      {
        borderTop: "1px solid " + componentVars["color_" + tint + "_actions_border"]
      }
    ]
  }
}];

const overlayStyle = (scope, selector, componentVars, tint) => [{
  [scope + ".pe-card__overlay--sheet"]: {
    " .pe-card__overlay__content": {
      backgroundColor: componentVars["color_" + tint + "_overlay_background"]
    }
  }
}];


export default (selector, componentVars) => [
  baseStyle(   "",                selector, componentVars, "light"),
  baseStyle(   ".pe-dark-theme ", selector, componentVars, "dark" ), // inside dark theme
  baseStyle(   ".pe-dark-theme",  selector, componentVars, "dark" ), // has dark th
  contentStyle("",                selector, componentVars, "light"),
  contentStyle(".pe-dark-theme ", selector, componentVars, "dark" ), // inside dark theme
  contentStyle(".pe-dark-theme",  selector, componentVars, "dark" ), // has dark th
  overlayStyle("",                selector, componentVars, "light"),
  overlayStyle(".pe-dark-theme ", selector, componentVars, "dark" ), // inside dark theme
  overlayStyle(".pe-dark-theme",  selector, componentVars, "dark" ), // has dark theme
];