import { layout, color, vars } from 'polythene-css-selection-control';
export { vars } from 'polythene-css-selection-control';
import { styler } from 'polythene-core-css';

var classes = {
  component: "pe-checkbox-control"
};

var layout$1 = (function (selector, componentVars, customVars) {
  return layout(selector, componentVars, customVars, "checkbox");
});

var color$1 = (function (selector, componentVars, customVars) {
  return color(selector, componentVars, customVars);
});

var fns = [layout$1, color$1];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns) : styler.createStyleSheets([selector], vars, fns);
};

styler.generateStyles([selector], vars, fns);

export { addStyle, getStyle };
