import { addWebFont } from "polythene-utilities";
import { styler } from "polythene-core-css";
import { vars } from "polythene-style";
import reset from "./reset";
import typography from "./typography";
import roboto from "./roboto";

const fns = [roboto, reset, typography];
const selector = "";

export const addStyle = (customSelector, customVars) => 
  styler.generateStyles([customSelector, selector], {...vars, ...customVars}, fns);

export const getStyle = (customSelector, customVars) => 
  customSelector
    ? styler.createStyleSheets([customSelector, selector], {...vars, ...customVars}, fns)
    : styler.createStyleSheets([selector], vars, fns);

export const addRoboto = () => {
  addWebFont("google", "Roboto:400,500,700,400italic:latin");
};

export const addTypography = () => {
  addRoboto();
  styler.add("pe-material-design-typography", fns.map(s => s()));
};
