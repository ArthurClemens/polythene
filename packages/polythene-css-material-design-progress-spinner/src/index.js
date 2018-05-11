import { styler } from "polythene-core-css";
import { vars } from "polythene-core-material-design-progress-spinner";
import classes from "polythene-css-classes/material-design-progress-spinner";
import layout from "./layout";
import color from "./color";

const fns = [layout, color];
const selector = `.${classes.component}`;

export const addStyle = (customSelector, customVars) => 
  styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);

export const getStyle = (customSelector, customVars) => 
  customSelector
    ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns)
    : styler.createStyleSheets([selector], vars, fns);

styler.generateStyles([selector], vars, fns);
