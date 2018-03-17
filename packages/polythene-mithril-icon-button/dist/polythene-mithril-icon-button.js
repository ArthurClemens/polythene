(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-icon-button'), require('polythene-mithril-icon'), require('polythene-mithril-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-icon-button', 'polythene-mithril-icon', 'polythene-mithril-button'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-icon-button'],global['polythene-mithril-icon'],global['polythene-mithril-button']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreIconButton,polytheneMithrilIcon,polytheneMithrilButton) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var IconButton = polytheneMithrilBase.ViewComponent(_extends({}, polytheneCoreIconButton.coreIconButton, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreIconButton.coreIconButton.createProps(vnode, _extends(args, { Icon: polytheneMithrilIcon.Icon }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreIconButton.coreIconButton.createContent(vnode, _extends(args, { Icon: polytheneMithrilIcon.Icon }));
    },
    component: polytheneMithrilButton.Button
  }));

  IconButton.displayName = "IconButton";

  exports.IconButton = IconButton;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-icon-button.js.map
