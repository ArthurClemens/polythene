// @ts-check

import superLayout from "./base";
import classes from "polythene-css-classes/button";
import color from "./color";
import layout from "./layout";
import vars from "./vars";
import { styler } from "polythene-core-css";
import containedButtonVars from "../contained-button/vars";
const fns = [layout, color];
const superFns = [superLayout];
const superSelector = `.${classes.super}`;
const selector = `.${classes.component}`;

/**
 * @param {string} customSelector 
 * @param {object} [customVars]
 * @param {object} [scoping]
 * @param {string} [scoping.mediaQuery]
 * @param {string} [scoping.scope]
 */
const addStyle = (customSelector, customVars, { mediaQuery="", scope="" } = {}) => {
  const finalVars = customVars && customVars.contained
    ? containedButtonVars
    : vars;
  customSelector && styler.addStyle({
    selectors: [superSelector, customSelector],
    fns: superFns,
    vars: finalVars,
    customVars,
    mediaQuery,
    scope,
  });
  customSelector && styler.addStyle({
    selectors: [selector, customSelector],
    fns,
    vars: finalVars,
    customVars,
    mediaQuery,
    scope,
  });
};

/**
 * @param {string} [customSelector]
 * @param {object} [customVars]
 * @param {object} [scoping]
 * @param {string} [scoping.mediaQuery]
 * @param {string} [scoping.scope]
 */
const getStyle = (customSelector = "", customVars, { mediaQuery="", scope="" } = {}) => {
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
      scope,
    })
    .concat(styler.getStyle({
      selectors: [selector, customSelector],
      fns,
      vars: finalVars,
      customVars,
      mediaQuery,
      scope,
    }));
};

const addGeneralStyleToHead = () => {
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
};

export {
  addGeneralStyleToHead,
  addStyle,
  color,
  getStyle,
  layout,
  vars,
};
