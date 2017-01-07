import { mixin } from "polythene-css";

const style = (componentVars, tint, type, scope = "") => {
  const normalBorder = componentVars["color_" + tint + "_" + type + "_normal_border"] || "transparent";
  const activeBorder = componentVars["color_" + tint + "_" + type + "_active_border"] || normalBorder;
  const disabledBorder = componentVars["color_" + tint + "_" + type + "_disabled_border"] || normalBorder;
  return [{
    [scope + ".pe-button"]: {
      "&, &:link, &:visited": {
        color: componentVars["color_" + tint + "_" + type + "_normal_text"]
      },

      " .pe-button__content": {
        "background-color": componentVars["color_" + tint + "_" + type + "_normal_background"],
        "border-color": normalBorder
      },

      "&.pe-button--disabled": {
        color: componentVars["color_" + tint + "_" + type + "_disabled_text"],

        " .pe-button__content": {
          "background-color": componentVars["color_" + tint + "_" + type + "_disabled_background"],
          "border-color": disabledBorder
        }
      },

      "&.pe-button--selected": {
        " .pe-button__content": {
          "background-color": componentVars["color_" + tint + "_" + type + "_active_background"],
          "border-color": activeBorder
        },
        " .pe-button__focus": {
          opacity: 1,
          "background-color": componentVars["color_" + tint + "_" + type + "_focus_background"]
        }
      },

      "&.pe-button--focus": {
        " .pe-button__focus": {
          opacity: 1,
          "background-color": componentVars["color_" + tint + "_" + type + "_focus_background"]
        }
      }
    }
  }];
};

const noTouch = (componentVars, tint, type, scope = "") => {
  const normalBorder = componentVars["color_" + tint + "_" + type + "_normal_border"];
  const hoverBorder = componentVars["color_" + tint + "_" + type + "_normal_border"] || normalBorder;
  return [{
    [scope + ".pe-button:hover"]: {
      "&:not(.pe-button--selected):not(.pe-button--inactive) .pe-button__wash": {
        "background-color": componentVars["color_" + tint + "_" + type + "_hover_background"],
        "border-color": hoverBorder
      }
    }
  }];
};

const createStyles = componentVars => [
  style(componentVars, "light", "flat"),
  style(componentVars, "light", "raised", ".pe-button--raised"), {
    "html.pe-no-touch": [
      noTouch(componentVars, "light", "flat", " "),
      noTouch(componentVars, "light", "raised", " .pe-button--raised")
    ]
  }, {
    ".pe-dark-theme": [
      // inside dark theme
      style(componentVars, "dark", "flat", " "),
      // has dark theme
      style(componentVars, "dark", "flat", "&"),
      //
      style(componentVars, "dark", "raised", " .pe-button--raised")
    ]
  }, {
    "html.pe-no-touch .pe-dark-theme": [
      noTouch(componentVars, "dark", "flat", " "),
      noTouch(componentVars, "dark", "flat", "&"),
      noTouch(componentVars, "dark", "raised", " .pe-button--raised")
    ]
  }
];

export default componentVars => mixin.createStyles(componentVars, createStyles);

