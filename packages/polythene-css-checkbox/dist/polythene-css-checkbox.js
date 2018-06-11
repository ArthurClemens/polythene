(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-css-selection-control')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-css-selection-control'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-css-selection-control']));
}(this, (function (exports,polytheneCoreCss,polytheneCssSelectionControl) { 'use strict';

  var classes = {
    component: "pe-checkbox-control"
  };

  var color = polytheneCoreCss.createColor({
    superColor: polytheneCssSelectionControl.color
  });

  var layout = polytheneCoreCss.createLayout({ superLayout: polytheneCssSelectionControl.layout });

  var vars = {
    general_styles: true
  };

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = function addStyle(customSelector, customVars) {
    return polytheneCoreCss.styler.generateCustomStyles([customSelector, selector], vars, customVars, fns);
  };

  var getStyle = function getStyle(customSelector, customVars) {
    return customSelector ? polytheneCoreCss.styler.createCustomStyleSheets([customSelector, selector], vars, customVars, fns) : polytheneCoreCss.styler.createStyleSheets([selector], vars, fns);
  };

  polytheneCoreCss.styler.generateStyles([selector], vars, fns);

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-checkbox.js.map
