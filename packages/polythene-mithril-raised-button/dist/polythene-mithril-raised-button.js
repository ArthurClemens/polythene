(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-raised-button'), require('polythene-mithril-button'), require('polythene-mithril-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-raised-button', 'polythene-mithril-button', 'polythene-mithril-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-raised-button'],global['polythene-mithril-button'],global['polythene-mithril-shadow']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreRaisedButton,polytheneMithrilButton,polytheneMithrilShadow) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var RaisedButton = polytheneMithrilBase.StateComponent(_extends({}, polytheneCoreRaisedButton.coreRaisedButton, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreRaisedButton.coreRaisedButton.createProps(vnode, _extends(args, { Shadow: polytheneMithrilShadow.Shadow }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreRaisedButton.coreRaisedButton.createContent(vnode, _extends(args, { Shadow: polytheneMithrilShadow.Shadow }));
    },
    component: polytheneMithrilButton.Button
  }));

  RaisedButton.displayName = "RaisedButton";

  exports.RaisedButton = RaisedButton;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-raised-button.js.map
