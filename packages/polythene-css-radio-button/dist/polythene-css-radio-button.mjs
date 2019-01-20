import { createColor, createLayout, styler } from 'polythene-core-css';
import { color, layout, vars as vars$1 } from 'polythene-css-selection-control';
import { vars } from 'polythene-theme';

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
 * @type {RadioButtonVars} radioButtonVars
 */

var radioButtonVars = {
  general_styles: true,
  button_size: 5 * vars.grid_unit_component,
  // 40
  icon_size: vars$1.icon_size
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
