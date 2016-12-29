import { mixin } from "polythene-css";

const style = (config, tint, scope = "") => {
  return [{
    [scope + ".pe-button--fab, a.pe-button--fab"]: {
      "background-color": config["color_" + tint + "_background"],
      color: config["color_" + tint + "_text"],

      " .pe-button__content": {
        "background-color": "transparent"
      }
    }
  }];
};

const createStyles = (config) => {
  return [
    style(config, "light"), {
      ".pe-dark-theme": [
        // inside dark theme
        style(config, "dark", " "),
        // has dark theme
        style(config, "dark", "&")
      ]
    }
  ];
};

export default (config) => (mixin.createStyles(config, createStyles));