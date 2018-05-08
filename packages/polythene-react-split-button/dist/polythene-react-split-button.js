(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-split-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-split-button'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-split-button']));
}(this, (function (exports,polytheneReactBase,polytheneCoreSplitButton) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var SplitButton = polytheneReactBase.ViewComponent(_extends({}, polytheneCoreSplitButton.coreSplitButton));

  SplitButton.displayName = "SplitButton";

  exports.SplitButton = SplitButton;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-split-button.js.map
