import { styler } from "polythene-core-css";
import { classes, vars } from "polythene-core-notification";
import layout from "./layout";
import color from "./color";
import holderLayout from "./layout-holder";

const fns = [layout, color];
const selector = `.${classes.component}`;

const holderFns = [holderLayout];
const holderSelector = `.${classes.holder}`;

export const addStyle = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

export const styles = () => 
  styler.createStyleSheets([holderSelector], vars, holderFns)
    .concat(styler.createStyleSheets([selector], vars, fns));

export const themeStyles = (customSelector, customVars) => 
  styler.createStyleSheets([customSelector, selector], {...vars, ...customVars}, fns);

styler.generateStyles([holderSelector], vars, holderFns);
styler.generateStyles([selector], vars, fns);
