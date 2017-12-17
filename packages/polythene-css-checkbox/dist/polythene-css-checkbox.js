(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-checkbox'), require('polythene-css-selection-control')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-checkbox', 'polythene-css-selection-control'], factory) :
	(factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-checkbox'],global['polythene-css-selection-control']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreCheckbox,polytheneCssSelectionControl) { 'use strict';

var classes = {
  component: "pe-checkbox-control"
};

var layout$1 = (function (selector, componentVars) {
  return polytheneCssSelectionControl.layout(selector, componentVars, "checkbox");
});

var color$1 = (function (selector, componentVars) {
  return polytheneCssSelectionControl.color(selector, componentVars);
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout$1, color$1];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreCheckbox.vars, customVars), fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreCheckbox.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreCheckbox.vars, fns);
};

polytheneCoreCss.styler.generateStyles([selector], polytheneCoreCheckbox.vars, fns);

exports.addStyle = addStyle;
exports.getStyle = getStyle;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-checkbox.js.map
