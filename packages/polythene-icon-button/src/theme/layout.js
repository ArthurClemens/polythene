import { mixin } from "polythene-css";

const createStyles = (config) => {
  return [{
    ".pe-button--icon": {
      // don"t set button size to facilitate different icon sizes
      display: "inline-block",
      "vertical-align": "middle",
      cursor: "pointer",
      position: "relative",
      "font-size": "1rem",
      "border-radius": "50%",
      border: "none",

      " .pe-button--icon__content": {
        "line-height": 1,
        padding: config.padding + "px"
      },

      "&.pe-button--compact": {
        " .pe-button--icon__content": {
          padding: config.padding_compact + "px"
        }
      }
    }
  }];
};

export default (config) => (mixin.createStyles(config, createStyles));