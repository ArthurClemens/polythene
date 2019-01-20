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
// import { vars } from "polythene-theme";
// import { vars as selectionControlVars } from "polythene-css-selection-control";

/**
 * @type {CheckboxVars} checkboxVars
 */
var checkboxVars = {
  general_styles: true // button_size:    5 * vars.grid_unit_component, // 40
  // icon_size:      selectionControlVars.icon_size

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
