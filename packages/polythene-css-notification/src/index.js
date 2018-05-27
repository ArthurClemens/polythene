import classes from "polythene-css-classes/notification";
import color from "./color";
import holderLayout from "./layout-holder";
import layout, { customLayoutFns } from "./layout";
import vars from "./vars";
import { styler } from "polythene-core-css";

const fns = [layout, color];
const selector = `.${classes.component}`;

const holderFns = [holderLayout];
const holderSelector = `.${classes.holder}`;

const addStyle = (customSelector, customVars) => 
  styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);

const getStyle = (customSelector, customVars) => 
  customSelector
    ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns)
    : styler.createStyleSheets([holderSelector], vars, holderFns)
      .concat(styler.createStyleSheets([selector], vars, fns));

styler.generateStyles([holderSelector], vars, holderFns);
styler.generateStyles([selector], vars, fns);

export {
  addStyle,
  color,
  customLayoutFns,
  getStyle,
  holderLayout,
  layout,
  vars,
};