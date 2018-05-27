import classes from "polythene-css-classes/snackbar";
import color from "./color";
import holderLayout from "./layout-holder";
import layout from "./layout";
import vars from "./vars";
import { styler } from "polythene-core-css";

const fns = [layout, color];
const selector = `.${classes.component.replace(/ /g, ".")}`;

const holderFns = [holderLayout];
const holderSelector = `.${classes.holder.replace(/ /g, ".")}`;

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
  getStyle,
  holderLayout,
  layout,
  vars,
};
