import { styler } from "polythene-core-css";
import classes from "../classes";
import vars from "./vars";
import baseLayout from "./base";
import layout from "./layout";
import color from "./color";

const fns = [layout, color];
const baseFns = [baseLayout];
const baseSelector = `.${classes.base}`;
const selector = `.${classes.component.replace(/ /g, ".")}`;

export const customTheme = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

export const styles = () => 
  styler.createStyleSheets([baseSelector], vars, baseFns)
    .concat(styler.createStyleSheets([selector], vars, fns));

// styler.generateStyles([baseSelector], vars, baseFns);
// styler.generateStyles([selector], vars, fns);