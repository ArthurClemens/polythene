import { createColor, createLayout, styler } from 'polythene-core-css';
import { color, layout } from 'polythene-css-selection-control';

var classes = {
  component: "pe-radio-control"
};

// @ts-check
var color$1 = createColor({
  superColor: color
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
var layout$1 = createLayout({
  varFns: varFns,
  superLayout: layout
});

// @ts-check

/**
 * @typedef {import("../index").RadioButtonVars} RadioButtonVars
 */

/**
 * @type {RadioButtonVars} radioButtonVars
 */
var radioButtonVars = {
  general_styles: true
};

// @ts-check
var fns = [layout$1, color$1];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, radioButtonVars);
var getStyle = styler.createGetStyle(selector, fns, radioButtonVars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: radioButtonVars
});

export { addStyle, getStyle, color$1 as color, layout$1 as layout, radioButtonVars as vars };
