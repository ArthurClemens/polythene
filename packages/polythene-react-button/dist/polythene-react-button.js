(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-button'), require('polythene-react-ripple'), require('polythene-react-icon')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-button', 'polythene-react-ripple', 'polythene-react-icon'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-button'],global['polythene-react-ripple'],global['polythene-react-icon']));
}(this, (function (exports,polytheneReactBase,polytheneCoreButton,polytheneReactRipple,polytheneReactIcon) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var Button = polytheneReactBase.StateComponent(_extends({}, polytheneCoreButton.coreButton, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreButton.coreButton.createProps(vnode, _extends(args, { Ripple: polytheneReactRipple.Ripple, Icon: polytheneReactIcon.Icon }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreButton.coreButton.createContent(vnode, _extends(args, { Ripple: polytheneReactRipple.Ripple, Icon: polytheneReactIcon.Icon }));
    }
  }));

  Button.displayName = "Button";

  exports.Button = Button;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-button.js.map
