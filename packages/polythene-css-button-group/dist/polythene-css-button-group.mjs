import { createLayout, sel, styler } from 'polythene-core-css';

var classes = {
  component: "pe-button-group"
};

// @ts-check
var varFns = {
  /**
   * @param {string} selector
   */
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      display: "flex"
    })];
  }
};
var layout = createLayout({
  varFns: varFns
});

// @ts-check

/**
 * @typedef {import("../index").ButtonGroupVars} ButtonGroupVars
 */

/**
 * @type {ButtonGroupVars} buttonGroupVars
 */
var buttonGroupVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true
};

// @ts-check
var fns = [layout];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, buttonGroupVars);
var getStyle = styler.createGetStyle(selector, fns, buttonGroupVars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: buttonGroupVars
});

export { addStyle, getStyle, layout, buttonGroupVars as vars };
