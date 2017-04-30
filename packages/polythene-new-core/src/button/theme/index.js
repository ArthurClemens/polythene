import { styler } from "polythene-css";
import classes from "../classes";
import vars from "./vars";
import baseLayout from "./base";
import layout from "./layout";
import color from "./color";

const fns = [layout, color];
const baseSelector = `.${classes.base}`;
const selector = `.${classes.component.replace(/ /g, ".")}`;

export const customTheme = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

styler.generateStyles([baseSelector], vars, [baseLayout]);
styler.generateStyles([selector], vars, fns);