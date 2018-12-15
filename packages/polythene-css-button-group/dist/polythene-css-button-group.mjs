import { sel, createLayout, styler } from 'polythene-core-css';

var classes = {
  component: "pe-button-group"
};

const varFns = {
  general_styles: selector => [sel(selector, {
    display: "flex"
  })]
};
var layout = createLayout({
  varFns
});

var vars = {
  general_styles: true
};

const fns = [layout];
const selector = `.${classes.component}`;
const addStyle = styler.createAddStyle(selector, fns, vars);
const getStyle = styler.createGetStyle(selector, fns, vars);
styler.addStyle({
  selectors: [selector],
  fns,
  vars
});

export { addStyle, getStyle, layout, vars };
