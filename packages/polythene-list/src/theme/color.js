import { styler } from "polythene-css";

const style = (componentVars, scope, selector, tint) => {
  return [{
    [scope + selector]: {
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

const createStyles = (componentVars, className = "") => {
  const selector = `${className}.pe-list`;
  return [
    style(componentVars, "",                selector, "light"),
    style(componentVars, ".pe-dark-theme ", selector, "dark" ), // inside dark theme
  ];
};

export default componentVars => styler.createStyles(componentVars, createStyles);
