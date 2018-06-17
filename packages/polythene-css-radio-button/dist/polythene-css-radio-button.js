(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core-css'), require('polythene-css-selection-control')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core-css', 'polythene-css-selection-control'], factory) :
  (factory((global.polythene = {}),global['polythene-core-css'],global['polythene-css-selection-control']));
}(this, (function (exports,polytheneCoreCss,polytheneCssSelectionControl) { 'use strict';

  var classes = {
    component: "pe-radio-control"
  };

  var color = polytheneCoreCss.createColor({
    superColor: polytheneCssSelectionControl.color
  });

  var varFns = {
    general_styles: function general_styles() {
      return {
        " .pe-radio-group": {
          display: "flex"
        }
      };
    }
  };

  var layout = polytheneCoreCss.createLayout({ varFns: varFns, superLayout: polytheneCssSelectionControl.layout });

  var vars = {
    general_styles: true
  };

  var fns = [layout, color];
  var selector = "." + classes.component;

  var addStyle = polytheneCoreCss.styler.createAddStyle(selector, fns, vars);

  var getStyle = polytheneCoreCss.styler.createGetStyle(selector, fns, vars);

  polytheneCoreCss.styler.addStyle({
    selectors: [selector],
    fns: fns,
    vars: vars
  });

  exports.addStyle = addStyle;
  exports.color = color;
  exports.getStyle = getStyle;
  exports.layout = layout;
  exports.vars = vars;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-css-radio-button.js.map
