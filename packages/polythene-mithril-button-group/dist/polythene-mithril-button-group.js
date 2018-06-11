(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-button-group')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-button-group'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-button-group']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreButtonGroup) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var ButtonGroup = polytheneMithrilBase.ViewComponent(_extends({}, polytheneCoreButtonGroup.coreButtonGroup));

  ButtonGroup.displayName = "ButtonGroup";

  exports.ButtonGroup = ButtonGroup;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-button-group.js.map
