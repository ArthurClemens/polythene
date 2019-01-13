// @ts-check

import classes from "polythene-css-classes/snackbar";
import color from "./color";
import holderLayout from "./layout-holder";
import layout from "./layout";
import vars from "./vars";
import { styler } from "polythene-core-css";

const fns = [layout, color];
const selector = `.${classes.component.replace(/ /g, ".")}`;

const holderFns = [holderLayout];
const holderSelector = `.${classes.holder.replace(/ /g, ".")}`;

const addStyle = (customSelector, customVars, { mediaQuery="", scope="" } = {}) => {
  customSelector && styler.addStyle({
    selectors: [customSelector, selector],
    fns,
    vars,
    customVars,
    mediaQuery,
    scope,
  });
  customSelector && styler.addStyle({
    selectors: [customSelector, holderSelector],
    fns: holderFns,
    vars,
    customVars,
    mediaQuery,
    scope,
  });
};

const getStyle = (customSelector = "", customVars, { mediaQuery="", scope="" } = {}) => 
  styler.getStyle({
    selectors: [customSelector, selector],
    fns,
    vars,
    customVars,
    mediaQuery,
    scope,
  }).concat(styler.getStyle({
    selectors: [holderSelector],
    fns: holderFns,
    vars,
    customVars,
    mediaQuery,
    scope,
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
  getStyle,
  color,
  layout,
  vars,
  holderLayout,
};
