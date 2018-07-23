import superLayout from "./base";
import classes from "polythene-css-classes/button";
import color from "./color";
import layout from "./layout";
import vars from "./vars";
import { styler } from "polythene-core-css";
import { vars as containedButtonVars } from "../contained-button";
const fns = [layout, color];
const superFns = [superLayout];
const superSelector = `.${classes.super}`;
const selector = `.${classes.component}`;

const addStyle = (customSelector, customVars, { mediaQuery }={}) => {
  const finalVars = customVars && customVars.contained
    ? containedButtonVars
    : vars;
  customSelector && styler.addStyle({
    selectors: [superSelector, customSelector],
    fns: superFns,
    vars: finalVars,
    customVars,
    mediaQuery,
  });
  customSelector && styler.addStyle({
    selectors: [selector, customSelector],
    fns,
    vars: finalVars,
    customVars,
    mediaQuery,
  });
};

const getStyle = (customSelector = "", customVars, { mediaQuery }={}) => {
  const finalVars = customVars && customVars.contained
    ? containedButtonVars
    : vars;
  return styler
    .getStyle({
      selectors: [superSelector, customSelector],
      fns: superFns,
      vars: finalVars,
      customVars,
      mediaQuery,
    })
    .concat(styler.getStyle({
      selectors: [selector, customSelector],
      fns,
      vars: finalVars,
      customVars,
      mediaQuery,
    }));
};

styler.addStyle({
  selectors: [superSelector],
  fns: superFns,
  vars
});
styler.addStyle({
  selectors: [selector],
  fns,
  vars
});

export {
  addStyle,
  color,
  getStyle,
  layout,
  vars,
};
