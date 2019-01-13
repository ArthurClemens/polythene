// @ts-check

import reset from "./reset";
import { robotoStyle, loadRoboto } from "./roboto";
import typography from "./typography";
import { addWebFont } from "polythene-utilities";
import { styler } from "polythene-core-css";
import { vars } from "polythene-style";

const fns = [robotoStyle, reset, typography];
const fnsWithLoadRoboto = [loadRoboto, robotoStyle, reset, typography]; // adds font import for written CSS
const selector = "";

const addStyle = styler.createAddStyle(selector, fns, vars);

const getStyle = (customSelector, customVars, { mediaQuery="", scope="" } = {}) => 
  styler.getStyle({
    selectors: [customSelector, selector],
    fns: fnsWithLoadRoboto,
    vars,
    customVars,
    mediaQuery,
    scope,
  });

const addRoboto = () => {
  addWebFont("google", {
    families: ["Roboto:400,500,700,400italic:latin"],
  });
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
};
