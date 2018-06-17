import reset from "./reset";
import roboto, { loadRoboto } from "./roboto";
import typography from "./typography";
import { addWebFont } from "polythene-utilities";
import { styler } from "polythene-core-css";
import { vars } from "polythene-style";

const fns = [roboto, reset, typography];
const selector = "";

const addStyle = styler.createAddStyle(selector, fns, vars);

const getStyle = (customSelector, customVars, { mediaQuery }={}) => 
  styler.getStyle({
    selectors: [customSelector, selector],
    fns: [loadRoboto].concat(fns), // add font import for written CSS
    vars,
    customVars,
    mediaQuery,
  });

const addRoboto = () => {
  addWebFont("google", "Roboto:400,500,700,400italic:latin");
};

const addTypography = () => {
  addRoboto();
  styler.add("pe-material-design-typography", fns.map(s => s()));
};

export {
  addRoboto,
  addStyle,
  addTypography,
  getStyle,
  vars,
};
