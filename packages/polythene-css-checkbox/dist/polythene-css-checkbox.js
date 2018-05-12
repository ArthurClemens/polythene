(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-css-selection-control'), require('polythene-core-css'), require('polythene-core-checkbox')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-css-selection-control', 'polythene-core-css', 'polythene-core-checkbox'], factory) :
  (factory((global.polythene = {}),global['polythene-css-selection-control'],global['polythene-core-css'],global['polythene-core-checkbox']));
}(this, (function (exports,polytheneCssSelectionControl,polytheneCoreCss,polytheneCoreCheckbox) { 'use strict';

  var classes = {
    component: "pe-checkbox-control"
  };

  var layout = (function (selector, componentVars, customVars) {
    return polytheneCssSelectionControl.layout(selector, componentVars, customVars, "checkbox");
  });

  var color = (function (selector, componentVars, customVars) {
    return polytheneCssSelectionControl.color(selector, componentVars, customVars);
  });

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCoreCheckbox.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCoreCheckbox.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCoreCheckbox.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCoreCheckbox.vars, fns);

  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-checkbox.js.map
