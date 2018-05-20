import { styler } from "polythene-core-css";
import { vars } from "polythene-core-base-spinner";
import classes from "polythene-css-classes/base-spinner";
import layout from "./layout";
import color, { style } from "./color";

const fns = [layout, color];
const selector = `.${classes.component}`;

export const addStyle = (customSelector, customVars) => 
  styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);  

export const getStyle = (customSelector, customVars) => 
  customSelector
    ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns)
    : styler.createStyleSheets([selector], vars, fns);

styler.generateStyles([selector], vars, fns);

export { style, layout, color };
