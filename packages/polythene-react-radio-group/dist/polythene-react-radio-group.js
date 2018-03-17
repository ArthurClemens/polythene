(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-radio-group'), require('polythene-react-radio-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-radio-group', 'polythene-react-radio-button'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-radio-group'],global['polythene-react-radio-button']));
}(this, (function (exports,polytheneReactBase,polytheneCoreRadioGroup,polytheneReactRadioButton) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var RadioGroup = polytheneReactBase.StateComponent(_extends({}, polytheneCoreRadioGroup.coreRadioGroup, {
    createContent: function createContent(vnode, args) {
      return polytheneCoreRadioGroup.coreRadioGroup.createContent(vnode, _extends(args, { RadioButton: polytheneReactRadioButton.RadioButton }));
    }
  }));

  RadioGroup.displayName = "RadioGroup";

  exports.RadioGroup = RadioGroup;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-radio-group.js.map
