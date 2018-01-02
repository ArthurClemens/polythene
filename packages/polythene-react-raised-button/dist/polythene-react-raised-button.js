(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-raised-button'), require('polythene-react-button'), require('polythene-react-shadow')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-raised-button', 'polythene-react-button', 'polythene-react-shadow'], factory) :
	(factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-raised-button'],global['polythene-react-button'],global['polythene-react-shadow']));
}(this, (function (exports,polytheneReactBase,polytheneCoreRaisedButton,polytheneReactButton,polytheneReactShadow) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RaisedButton = polytheneReactBase.StateComponent(_extends({}, polytheneCoreRaisedButton.coreRaisedButton, {
  createProps: function createProps(vnode, args) {
    return polytheneCoreRaisedButton.coreRaisedButton.createProps(vnode, _extends(args, { Shadow: polytheneReactShadow.Shadow }));
  },
  createContent: function createContent(vnode, args) {
    return polytheneCoreRaisedButton.coreRaisedButton.createContent(vnode, _extends(args, { Shadow: polytheneReactShadow.Shadow }));
  },
  component: polytheneReactButton.Button
}));

RaisedButton.displayName = "RaisedButton";

exports.RaisedButton = RaisedButton;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-raised-button.js.map
