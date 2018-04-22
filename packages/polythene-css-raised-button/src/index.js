import { styler } from "polythene-core-css";
import { vars } from "polythene-core-raised-button";
import classes from "polythene-css-classes/raised-button";
import layout from "./layout";
import color from "./color";

const fns = [color];
const themeFns = [layout, color];
const selector = `.${classes.component.replace(/ /g, ".")}`;

export const addStyle = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, themeFns);

export const getStyle = (customSelector, customVars) => 
  customSelector
    ? styler.createStyleSheets([customSelector, selector], {...vars, ...customVars}, fns)
    : styler.createStyleSheets([selector], vars, fns);

styler.generateStyles([selector], vars, fns);
