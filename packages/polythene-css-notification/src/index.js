import classes from "polythene-css-classes/notification";
import color from "./color";
import holderLayout from "./layout-holder";
import layout, { customLayoutFns } from "./layout";
import vars from "./vars";
import { styler } from "polythene-core-css";

const fns = [layout, color];
const selector = `.${classes.component}`;

const holderFns = [holderLayout];
const holderSelector = `.${classes.holder}`;

const addStyle = (customSelector, customVars, { mediaQuery }={}) => {
  styler.addStyle({
    selectors: [customSelector, selector],
    fns,
    vars,
    customVars,
    mediaQuery,
  });
  styler.addStyle({
    selectors: [holderSelector],
    fns: holderFns,
    vars,
    customVars,
    mediaQuery,
  });
};

const getStyle = (customSelector = "", customVars, { mediaQuery }={}) => 
  styler.getStyle({
    selectors: [customSelector, selector],
    fns,
    vars,
    customVars,
    mediaQuery,
  }).concat(styler.getStyle({
    selectors: [holderSelector],
    fns: holderFns,
    vars,
    customVars,
    mediaQuery,
  }));

styler.addStyle({
  selectors: [holderSelector],
  fns: holderFns,
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
  customLayoutFns,
  getStyle,
  holderLayout,
  layout,
  vars,
};