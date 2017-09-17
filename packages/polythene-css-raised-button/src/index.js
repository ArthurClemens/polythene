import { styler } from "polythene-core-css";
import { classes, vars } from "polythene-core-raised-button";
import color from "./color";

const fns = [color];
const selector = `.${classes.component.replace(/ /g, ".")}`;

export const addStyle = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

export const styles = () => 
  styler.createStyleSheets([selector], vars, fns);

export const themeStyles = (customSelector, customVars) => 
  styler.createStyleSheets([customSelector, selector], {...vars, ...customVars}, fns);

styler.generateStyles([selector], vars, fns);
