import { styler } from 'polythene-core-css';
import { classes, vars } from 'polythene-core-checkbox';
import { color, layout } from 'polythene-css-selection-control';

var layout$1 = (function (selector, componentVars) {
  return layout(selector, componentVars, "checkbox");
});

var color$1 = (function (selector, componentVars) {
  return color(selector, componentVars);
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout$1, color$1];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars, customVars), fns);
};

var styles = function styles() {
  return styler.createStyleSheets([selector], vars, fns);
};

var themeStyles = function themeStyles(customSelector, customVars) {
  return styler.createStyleSheets([customSelector, selector], _extends({}, vars, customVars), fns);
};

styler.generateStyles([selector], vars, fns);

export { addStyle, styles, themeStyles };
