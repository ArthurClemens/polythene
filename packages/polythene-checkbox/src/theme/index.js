import { styler } from "polythene-css";
import vars from "./vars";
import layout from "./layout";
import color from "./color";
import iconOff from "./icon-off";
import iconOn from "./icon-on";

const fns = [layout, color];
const selector = ".pe-control.pe-checkbox-control";

export const customTheme = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

styler.generateStyles([selector], vars, fns);

export const theme = {
  iconOff,
  iconOn
};
