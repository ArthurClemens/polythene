import { styler } from "polythene-css";
import { styles } from "polythene-theme";
import vars from "./vars";
// No layout
import color from "./color";

const key = "raised-button";
const className = "pe-button--raised";

const styleComponent = (className, styles) =>
  styler.styleComponent(className, styles, key, vars, color);

export const customTheme = (className, vars) =>
  // Inject additional styles as use className as key
  styleComponent(className, styler.addComponentStyle(
    className, styles, key, vars
  ));

styleComponent(className, styles);