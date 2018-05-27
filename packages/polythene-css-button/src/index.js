import baseLayout from "./base";
import classes from "polythene-css-classes/button";
import color from "./color";
import layout from "./layout";
import vars from "./vars";
import { styler } from "polythene-core-css";

const fns = [layout, color];
const baseFns = [baseLayout];
const superSelector = `.${classes.super}`;
const selector = `.${classes.component}`;

const addStyle = (customSelector, customVars) => 
  styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);

const getStyle = (customSelector, customVars) => 
  customSelector
    ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns)
    : styler.createStyleSheets([superSelector], vars, baseFns)
      .concat(styler.createStyleSheets([selector], vars, fns));  

styler.generateStyles([superSelector], vars, baseFns);
styler.generateStyles([selector], vars, fns);

export {
  addStyle,
  color,
  getStyle,
  layout,
  vars,
};
