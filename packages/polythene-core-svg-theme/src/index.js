import { vars as themeVars } from "polythene-theme";
import { styler } from "polythene-core-css";
import { classes } from "polythene-core-svg";
import vars from "./vars";
import layout from "./layout";
import color from "./color";

const fns = [layout, color];
const selector = `.${classes.component}`;

export const theme = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

if (themeVars.css === "js") {
  styler.generateStyles([selector], vars, fns);
}

export const styles = () => 
  styler.createStyleSheets([selector], vars, fns);

