import { styler } from "polythene-css";
import classes from "../classes";
import vars from "./vars";
import layout from "./layout";
import color from "./color";

const fns = [layout, color];
const selector = `.${classes.component}`;

export const customTheme = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

styler.generateStyles([selector], vars, fns);
