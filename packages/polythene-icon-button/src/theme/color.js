import { mixin } from "polythene-css";

const style = (config, tint, type, scope = "") => {
  return [{
    [scope + ".pe-button.pe-button--icon"]: {
      color: config["color_" + tint + "_" + type + "_normal_text"],
      background: "none",

      " .pe-button__wash": {
        opacity: config["color_" + tint + "_wash_opacity"]
      },

      "&.pe-button--focus, &.pe-button--selected": {
        " .pe-button__focus": {
          opacity: config["color_" + tint + "_focus_opacity"],
          "background-color": "currentcolor"
        }
      },

      "&.pe-button--disabled": {
        color: config["color_" + tint + "_" + type + "_disabled_text"]
      },

      "&.pe-button--raised": {
        "background-color": config["color_" + tint + "_background"],

        " .pe-button__content": {
          background: "transparent"
        }
      }
    }
  }];
};

const noTouch = (config, tint, type, scope = "") => {
  return [{
    [scope + ".pe-button.pe-button--icon:hover"]:
      (tint === "light") ?
      {
        " .pe-button__wash": {
          "background-color": "currentcolor"
        }
      } :
      {
        " .pe-button__wash": {
          "background-color": config["color_" + tint + "_" + type + "_normal_text"]
        }
      }
  }];
};

const createStyles = (config) => {
  return [
    style(config, "light", "flat"), {
      "html.pe-no-touch": [
        noTouch(config, "light", "flat", " ")
      ]
    }, {
      ".pe-dark-theme": [
        // inside dark theme
        style(config, "dark", "flat", " "),
        // has dark theme
        style(config, "dark", "flat", "&")
      ]
    }, {
      "html.pe-no-touch .pe-dark-theme": [
        noTouch(config, "dark", "flat", " ")
      ]
    }
  ];
};

export default (config) => (mixin.createStyles(config, createStyles));