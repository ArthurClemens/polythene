(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-css-selection-control'), require('polythene-core-css')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-css-selection-control', 'polythene-core-css'], factory) :
  (factory((global.polythene = {}),global['polythene-css-selection-control'],global['polythene-core-css']));
}(this, (function (exports,polytheneCssSelectionControl,polytheneCoreCss) { 'use strict';

  var classes = {
    component: "pe-checkbox-control"
  };

  var color = polytheneCoreCss.createColor({
    superColor: polytheneCssSelectionControl.color
  });

  var layout = polytheneCoreCss.createLayout({
    superLayout: polytheneCssSelectionControl.layout
  });

  var vars = {
    general_styles: true
  };

  const fns = [layout, color];
  const selector = `.${classes.component}`;
  const addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);
  const getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);
  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns,
    vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-checkbox.js.map
