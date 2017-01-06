import { mixin } from "polythene-css";

const style = (componentVars, tint, scope = "") => {
  return [{
    [scope + ".pe-list"]: {
      "&.pe-list--borders": {
        " .pe-list-tile:not(.pe-list__header)": {
          "&:not(:last-child)": {
            "border-color": componentVars["color_" + tint + "_border"]
          }
        }
      },

      "&.pe-list--borders-indented": {
        " .pe-list-tile:not(.pe-list__header)": {
          " .pe-list-tile__content:not(.pe-list-tile__content--front)": {
            "border-color": componentVars["color_" + tint + "_border"]
          }
        }
      }
    },
    " .pe-list + .pe-list": {
      "border-color": componentVars["color_" + tint + "_border"]
    }
  }];
};

const createStyles = componentVars => {
  return [
    style(componentVars, "light"), {
      ".pe-dark-theme": [
        // inside dark theme
        style(componentVars, "dark", " "),
        // has dark theme
        style(componentVars, "dark", "&")
      ]
    }
  ];
};

export default componentVars => mixin.createStyles(componentVars, createStyles);
