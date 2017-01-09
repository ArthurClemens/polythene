import { styler } from "polythene-css";

const style = (componentVars, scope, selector, tint) => {
  const color = componentVars["color_" + tint] || componentVars["color"] || "inherit";
  return [{
    [scope + selector]: {
      color
    }
  }];
};

const createStyles = (componentVars, className = "") => {
  const selector = `${className}.pe-ripple`;
  return [
    style(componentVars, "",                selector, "light"),
    style(componentVars, ".pe-dark-theme ", selector, "dark" ) // inside dark theme
  ];
};

export default componentVars => styler.createStyles(componentVars, createStyles);
