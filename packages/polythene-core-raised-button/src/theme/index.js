import { styler } from "polythene-core-css";
import classes from "../classes";
import vars from "./vars";
import color from "./color";

const fns = [color];
const selector = `.${classes.component.replace(/ /g, ".")}`;

export const customTheme = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

styler.generateStyles([selector], vars, fns);
