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

styler.generateStyles([baseSelector], vars, baseFns);
styler.generateStyles([selector], vars, fns);