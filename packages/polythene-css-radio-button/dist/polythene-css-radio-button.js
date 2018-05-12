(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-css-selection-control'), require('polythene-core-css'), require('polythene-core-radio-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-css-selection-control', 'polythene-core-css', 'polythene-core-radio-button'], factory) :
  (factory((global.polythene = {}),global['polythene-css-selection-control'],global['polythene-core-css'],global['polythene-core-radio-button']));
}(this, (function (exports,polytheneCssSelectionControl,polytheneCoreCss,polytheneCoreRadioButton) { 'use strict';

  var classes = {
    component: "pe-radio-control"
  };

  var layout = (function (selector, componentVars, customVars) {
    return [polytheneCssSelectionControl.layout(selector, componentVars, customVars, "radio"), {
      " .pe-radio-group": {
        display: "flex"
      }
    }];
  });

  var color = (function (selector, componentVars, customVars) {
    return polytheneCssSelectionControl.color(selector, componentVars, customVars);
  });

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCoreRadioButton.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCoreRadioButton.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreRadioButton.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreRadioButton.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-radio-button.js.map
