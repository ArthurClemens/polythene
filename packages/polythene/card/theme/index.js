var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { styler } from "polythene-core-css";
import classes from "../classes";
import vars from "./vars";
import layout from "./layout";
import color from "./color";
import contentColor from "./color-content";
import overlayColor from "./color-overlay";

var selector = "." + classes.component;
var contentSelector = "." + classes.content;
var overlaySheetSelector = "." + classes.overlaySheet;
var overlayContentSelector = "." + classes.overlayContent;

export var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars, customVars), [layout, color]), styler.generateStyles([customSelector, overlaySheetSelector], _extends({}, vars, customVars), [overlayColor]), styler.generateStyles([customSelector, contentSelector], _extends({}, vars, customVars), [contentColor]), styler.generateStyles([customSelector, overlayContentSelector], _extends({}, vars, customVars), [contentColor]);
};

styler.generateStyles([selector], vars, [layout, color]);
styler.generateStyles([overlaySheetSelector], vars, [overlayColor]);
styler.generateStyles([contentSelector], vars, [contentColor]);
styler.generateStyles([overlayContentSelector], vars, [contentColor]);