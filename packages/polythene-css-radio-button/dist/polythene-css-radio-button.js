(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-css-selection-control'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-css-selection-control', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-css-selection-control'],global['polythene-core-css']));
}(this, (function (exports,polytheneCssSelectionControl,polytheneCoreCss) { 'use strict';

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
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], polytheneCssSelectionControl.vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], polytheneCssSelectionControl.vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], polytheneCssSelectionControl.vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], polytheneCssSelectionControl.vars, fns);

  exports.vars = polytheneCssSelectionControl.vars;
  exports.addStyle = addStyle;
  exports.getStyle = getStyle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-radio-button.js.map
