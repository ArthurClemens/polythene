import { addWebFont } from "polythene-utilities";
import { styler } from "polythene-core-css";
import { vars } from "polythene-style";
import reset from "./reset";
import typography from "./typography";
import roboto, { loadRoboto } from "./roboto";

const fns = [roboto, reset, typography];
const selector = "";

export const addStyle = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

export const getStyle = (customSelector, customVars) => {
  // add font import for written CSS
  const fns1 = [loadRoboto].concat(fns);
  return customSelector
    ? styler.createStyleSheets([customSelector, selector], {...vars, ...customVars}, fns1)
    : styler.createStyleSheets([selector], vars, fns1);
};

export const addRoboto = () => {
  addWebFont("google", "Roboto:400,500,700,400italic:latin");
};

export const addTypography = () => {
  addRoboto();
  styler.add("pe-material-design-typography", fns.map(s => s()));
};
