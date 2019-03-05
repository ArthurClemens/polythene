import { createColor, createLayout, styler } from 'polythene-core-css';
import { color as color$1, layout as layout$1 } from 'polythene-css-selection-control';

var classes = {
  component: "pe-checkbox-control"
};

// @ts-check
var color = createColor({
  superColor: color$1
});

// @ts-check
var layout = createLayout({
  superLayout: layout$1
});

// @ts-check

/**
 * @typedef {import("../index").CheckboxVars} CheckboxVars
 */

/**
 * @type {CheckboxVars} checkboxVars
 */
var checkboxVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true
};

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, checkboxVars);
var getStyle = styler.createGetStyle(selector, fns, checkboxVars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: checkboxVars
});

export { addStyle, getStyle, color, layout, checkboxVars as vars };
