(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-button'), require('polythene-react-ripple')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-button', 'polythene-react-ripple'], factory) :
	(factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-button'],global['polythene-react-ripple']));
}(this, (function (exports,polytheneReactBase,polytheneCoreButton,polytheneReactRipple) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Button = polytheneReactBase.StateComponent(_extends({}, polytheneCoreButton.coreButton, {
  createProps: function createProps(vnode, args) {
    return polytheneCoreButton.coreButton.createProps(vnode, _extends(args, { Ripple: polytheneReactRipple.Ripple }));
  },
  createContent: function createContent(vnode, args) {
    return polytheneCoreButton.coreButton.createContent(vnode, _extends(args, { Ripple: polytheneReactRipple.Ripple }));
  }
}));

Button.displayName = "Button";

exports.Button = Button;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-button.js.map
