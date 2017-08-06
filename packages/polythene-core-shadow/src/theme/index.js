import { styler } from "polythene-core-css";
import classes from "../classes";
import vars from "./vars";
import layout from "./layout";

const fns = [layout];
const selector = `.${classes.component}`;

export const customTheme = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

styler.generateStyles([selector], vars, fns);
