import { styler } from "polythene-css";
import { styles } from "polythene-theme";
import vars from "./vars";
import layout from "./layout";
// Does not contain any color styles

const key = "shadow";
const className = "pe-shadow";

const styleComponent = (className, styles) =>
  styler.styleComponent(className, styles, key, vars, layout);

export const customTheme = (className, vars) =>
  // Inject additional styles as use className as key
  styleComponent(className, styler.addComponentStyle(
    className, styles, key, vars
  ));

styleComponent(className, styles);