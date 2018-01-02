(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-core-radio-button'), require('polythene-css-selection-control')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-core-radio-button', 'polythene-css-selection-control'], factory) :
	(factory((global.polythene = {}),global['polythene-core-css'],global['polythene-core-radio-button'],global['polythene-css-selection-control']));
}(this, (function (exports,polytheneCoreCss,polytheneCoreRadioButton,polytheneCssSelectionControl) { 'use strict';

var classes = {
  component: "pe-radio-control"
};

var layout$1 = (function (selector, componentVars) {
  return [polytheneCssSelectionControl.layout(selector, componentVars, "radio"), {
    " .pe-radio-group": {
      display: "flex"
    }
  }];
});

var color$1 = (function (selector, componentVars) {
  return polytheneCssSelectionControl.color(selector, componentVars);
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var fns = [layout$1, color$1];
var selector = "." + classes.component;

var addStyle = function addStyle(customSelector, customVars) {
  return polytheneCoreCss.styler.generateStyles([customSelector, selector], _extends({}, polytheneCoreRadioButton.vars, customVars), fns);
};

var getStyle = function getStyle(customSelector, customVars) {
  return customSelector ? polytheneCoreCss.styler.createStyleSheets([customSelector, selector], _extends({}, polytheneCoreRadioButton.vars, customVars), fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreRadioButton.vars, fns);
};

polytheneCoreCss.styler.generateStyles([selector], polytheneCoreRadioButton.vars, fns);

exports.addStyle = addStyle;
exports.getStyle = getStyle;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-radio-button.js.map
