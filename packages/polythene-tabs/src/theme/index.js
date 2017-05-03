import { styler } from "polythene-core-css";
import classes from "../classes";
import vars from "./vars";
import layout from "./layout";
import color from "./color";
import iconArrowBackward from "./chevron-left";
import iconArrowForward  from "./chevron-right";

export const arrowBackward = {
  msvg: iconArrowBackward
};
export const arrowForward = {
  msvg: iconArrowForward
};

const fns = [layout, color];
const selector = `.${classes.component}`;

export const customTheme = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

styler.generateStyles([selector], vars, fns);

