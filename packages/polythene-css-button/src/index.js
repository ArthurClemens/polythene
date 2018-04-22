import { styler } from "polythene-core-css";
import { vars } from "polythene-core-button";
import classes from "polythene-css-classes/button";
import baseLayout from "./base";
import layout from "./layout";
import color, { noTouchStyle } from "./color";

const fns = [layout, color];
const baseFns = [baseLayout];
const baseSelector = `.${classes.base}`;
const selector = `.${classes.component.replace(/ /g, ".")}`;

export { layout, noTouchStyle };

export const addStyle = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

export const getStyle = (customSelector, customVars) => 
  customSelector
    ? styler.createStyleSheets([customSelector, selector], {...vars, ...customVars}, fns)
    : styler.createStyleSheets([baseSelector], vars, baseFns)
      .concat(styler.createStyleSheets([selector], vars, fns));  

styler.generateStyles([baseSelector], vars, baseFns);
styler.generateStyles([selector], vars, fns);
