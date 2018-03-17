(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-button'), require('polythene-mithril-ripple')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-button', 'polythene-mithril-ripple'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-button'],global['polythene-mithril-ripple']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreButton,polytheneMithrilRipple) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var Button = polytheneMithrilBase.StateComponent(_extends({}, polytheneCoreButton.coreButton, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreButton.coreButton.createProps(vnode, _extends(args, { Ripple: polytheneMithrilRipple.Ripple }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreButton.coreButton.createContent(vnode, _extends(args, { Ripple: polytheneMithrilRipple.Ripple }));
    }
  }));

  Button.displayName = "Button";

  exports.Button = Button;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-button.js.map
