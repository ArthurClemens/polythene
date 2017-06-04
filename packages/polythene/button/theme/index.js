var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { styler } from "polythene-core-css";
import classes from "../classes";
import vars from "./vars";
import baseLayout from "./base";
import layout from "./layout";
import colorFlat from "./color-flat";
import colorRaised from "./color-raised";

var fnsFlat = [layout, colorFlat];
var fnsRaised = [layout, colorRaised];
var baseSelector = "." + classes.base;
var raisedSelector = "." + classes.raised.replace(/ /g, ".");
var selector = "." + classes.component.replace(/ /g, ".");

export var customTheme = function customTheme(customSelector, customVars) {
  return styler.generateStyles([customSelector, selector], _extends({}, vars, customVars), fnsFlat), styler.generateStyles([customSelector, raisedSelector], _extends({}, vars, customVars), fnsRaised);
};

styler.generateStyles([baseSelector], vars, [baseLayout]);
styler.generateStyles([selector], vars, fnsFlat);
styler.generateStyles([raisedSelector], vars, fnsRaised);