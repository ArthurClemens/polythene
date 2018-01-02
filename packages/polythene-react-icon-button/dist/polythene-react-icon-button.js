(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-icon-button'), require('polythene-react-icon'), require('polythene-react-button')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-icon-button', 'polythene-react-icon', 'polythene-react-button'], factory) :
	(factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-icon-button'],global['polythene-react-icon'],global['polythene-react-button']));
}(this, (function (exports,polytheneReactBase,polytheneCoreIconButton,polytheneReactIcon,polytheneReactButton) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var IconButton = polytheneReactBase.StateComponent(_extends({}, polytheneCoreIconButton.coreIconButton, {
  createProps: function createProps(vnode, args) {
    return polytheneCoreIconButton.coreIconButton.createProps(vnode, _extends(args, { Icon: polytheneReactIcon.Icon }));
  },
  createContent: function createContent(vnode, args) {
    return polytheneCoreIconButton.coreIconButton.createContent(vnode, _extends(args, { Icon: polytheneReactIcon.Icon }));
  },
  component: polytheneReactButton.Button
}));

IconButton.displayName = "IconButton";

exports.IconButton = IconButton;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-icon-button.js.map
