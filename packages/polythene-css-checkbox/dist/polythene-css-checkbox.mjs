import { createColor, createLayout, styler } from 'polythene-core-css';
import { color, layout } from 'polythene-css-selection-control';

var classes = {
  component: "pe-checkbox-control"
};

// @ts-check
var color$1 = createColor({
  superColor: color
});

// @ts-check
var layout$1 = createLayout({
  superLayout: layout
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
var fns = [layout$1, color$1];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, checkboxVars);
var getStyle = styler.createGetStyle(selector, fns, checkboxVars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: checkboxVars
});

export { addStyle, getStyle, color$1 as color, layout$1 as layout, checkboxVars as vars };
