import { styler } from "polythene-core-css";
import { vars } from "polythene-core-button-group";
import classes from "polythene-css-classes/button-group";
import layout from "./layout";

const fns = [layout];
const selector = `.${classes.component}`;

export const addStyle = (customSelector, customVars) => 
  styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);

export const getStyle = (customSelector, customVars) => 
  customSelector
    ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns)
    : styler.createStyleSheets([selector], vars, fns);

styler.generateStyles([selector], vars, fns);
