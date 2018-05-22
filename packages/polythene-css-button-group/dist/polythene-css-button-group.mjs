import { sel, createLayout, styler } from 'polythene-core-css';

var vars = {
  general_styles: true
};

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

var layout = createLayout({ varFns: varFns });

var fns = [layout];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns) : styler.createStyleSheets([selector], vars, fns);
};

styler.generateStyles([selector], vars, fns);

export { addStyle, getStyle, vars };
