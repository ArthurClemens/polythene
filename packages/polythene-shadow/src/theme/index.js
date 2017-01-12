import { styler } from "polythene-css";
import vars from "./vars";
import layout from "./layout";

const fns = [layout];
const selector = ".pe-shadow";

export const customTheme = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

styler.generateStyles([selector], vars, fns);
