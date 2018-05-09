(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-button-group')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-button-group'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-button-group']));
}(this, (function (exports,polytheneReactBase,polytheneCoreButtonGroup) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var ButtonGroup = polytheneReactBase.ViewComponent(_extends({}, polytheneCoreButtonGroup.coreButtonGroup));

  ButtonGroup.displayName = "ButtonGroup";

  exports.ButtonGroup = ButtonGroup;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-button-group.js.map
