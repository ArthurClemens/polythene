import { styler } from "polythene-core-css";
import { vars } from "polythene-core-notification";
import classes from "polythene-css-classes/notification";
import layout from "./layout";
import color from "./color";
import holderLayout from "./layout-holder";

const fns = [layout, color];
const selector = `.${classes.component}`;

const holderFns = [holderLayout];
const holderSelector = `.${classes.holder}`;

export const addStyle = (customSelector, customVars) => 
  styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);

export const getStyle = (customSelector, customVars) => 
  customSelector
    ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns)
    : styler.createStyleSheets([holderSelector], vars, holderFns)
      .concat(styler.createStyleSheets([selector], vars, fns));

styler.generateStyles([holderSelector], vars, holderFns);
styler.generateStyles([selector], vars, fns);
