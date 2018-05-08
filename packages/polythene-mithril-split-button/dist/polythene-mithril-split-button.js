(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-split-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-split-button'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-split-button']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreSplitButton) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var SplitButton = polytheneMithrilBase.ViewComponent(_extends({}, polytheneCoreSplitButton.coreSplitButton));

  SplitButton.displayName = "SplitButton";

  exports.SplitButton = SplitButton;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-split-button.js.map
