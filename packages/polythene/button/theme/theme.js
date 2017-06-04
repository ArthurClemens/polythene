var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import vars from "./config";
import layout from './layout';
import color from './color';
import { styler } from 'polythene-core-css';

var fns = [layout, color];
var selector = '.pe-button.pe-button--text';

export var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars, customVars), fns);
};

styler.generateStyles([selector], _extends({}, vars), fns);