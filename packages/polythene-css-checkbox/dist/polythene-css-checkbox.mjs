import { createColor, createLayout, styler } from 'polythene-core-css';
import { color, layout } from 'polythene-css-selection-control';

var classes = {
  component: "pe-checkbox-control"
};

var color$1 = createColor({
  superColor: color
});

var layout$1 = createLayout({
  superLayout: layout
});

var vars = {
  general_styles: true
};

var fns = [layout$1, color$1];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, vars);
var getStyle = styler.createGetStyle(selector, fns, vars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars
});

export { addStyle, color$1 as color, getStyle, layout$1 as layout, vars };
