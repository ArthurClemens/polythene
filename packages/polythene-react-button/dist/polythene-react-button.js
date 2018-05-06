(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-button'), require('polythene-react-ripple'), require('polythene-react-svg')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-button', 'polythene-react-ripple', 'polythene-react-svg'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-button'],global['polythene-react-ripple'],global['polythene-react-svg']));
}(this, (function (exports,polytheneReactBase,polytheneCoreButton,polytheneReactRipple,polytheneReactSvg) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var Button = polytheneReactBase.StateComponent(_extends({}, polytheneCoreButton.coreButton, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreButton.coreButton.createProps(vnode, _extends(args, { Ripple: polytheneReactRipple.Ripple, SVG: polytheneReactSvg.SVG }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreButton.coreButton.createContent(vnode, _extends(args, { Ripple: polytheneReactRipple.Ripple, SVG: polytheneReactSvg.SVG }));
    }
  }));

  Button.displayName = "Button";

  exports.Button = Button;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-button.js.map
