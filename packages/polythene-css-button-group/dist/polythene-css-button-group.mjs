import { createLayout, sel, styler } from 'polythene-core-css';

var classes = {
  component: "pe-button-group"
};

var varFns = {
  general_styles: function general_styles(selector) {
    return [sel(selector, {
      display: "flex"
    })];
  }
};
var layout = createLayout({
  varFns: varFns
});

var vars = {
  general_styles: true
};

var fns = [layout];
var selector = ".".concat(classes.component);
var addStyle = styler.createAddStyle(selector, fns, vars);
var getStyle = styler.createGetStyle(selector, fns, vars);
styler.addStyle({
  selectors: [selector],
  fns: fns,
  vars: vars
});

export { addStyle, getStyle, layout, vars };
