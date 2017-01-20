import { styler } from "polythene-css";
import vars from "./vars";
import baseLayout from "./base";
import layout from "./layout";
import color from "./color";

const fns = [layout, color];
const baseSelector = ".pe-button";
const selector = ".pe-button.pe-text-button";

export const customTheme = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

styler.generateStyles([baseSelector], vars, [baseLayout]);
styler.generateStyles([selector], vars, fns);