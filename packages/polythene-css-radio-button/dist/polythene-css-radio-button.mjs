import { createColor, createLayout, styler } from 'polythene-core-css';
import { color as color$1, layout as layout$1 } from 'polythene-css-selection-control';

var classes = {
  component: "pe-radio-control"
};

// @ts-check
var color = createColor({
  superColor: color$1
});

// @ts-check
var varFns = {
  general_styles: function general_styles() {
    return {
      " .pe-radio-group": {
        display: "flex"
      }
    };
  }
};
var layout = createLayout({
  varFns: varFns,
  superLayout: layout$1
});

// @ts-check

/**
 * @typedef {import("../index").RadioButtonVars} RadioButtonVars
 */

/**
 * @type {RadioButtonVars} radioButtonVars
 */
var radioButtonVars = {
  /**
   * Generate general styles, not defined by variables
   */
  general_styles: true
};

// @ts-check
var fns = [layout, color];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, radioButtonVars);
var getStyle = styler.createGetStyle(selector, fns, radioButtonVars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: radioButtonVars
});

export { addStyle, color, getStyle, layout, radioButtonVars as vars };
