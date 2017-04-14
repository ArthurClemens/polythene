import { styler } from "polythene-css";
import classes from "../classes";
import vars from "./vars";
import layout from "./layout";
import color from "./color";
import holderLayout from "./layout-holder";

const fns = [layout, color];
const selector = `.${classes.component}`;

const holderFns = [holderLayout];
const holderSelector = `.${classes.holder}`;

export const customTheme = (customSelector, customVars) => (
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns),
  styler.generateStyles([customSelector, holderSelector], {...vars, ...customVars}, holderFns)
);

styler.generateStyles([selector], vars, fns);
styler.generateStyles([holderSelector], vars, holderFns);
