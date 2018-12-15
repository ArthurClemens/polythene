(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-icon-button'), require('polythene-mithril-icon'), require('polythene-mithril-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-icon-button', 'polythene-mithril-icon', 'polythene-mithril-button'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-icon-button'],global['polythene-mithril-icon'],global['polythene-mithril-button']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreIconButton,polytheneMithrilIcon,polytheneMithrilButton) { 'use strict';

  const IconButton = polytheneMithrilBase.ViewComponent(Object.assign({}, polytheneCoreIconButton.coreIconButton, {
    createProps: (vnode, args) => polytheneCoreIconButton.coreIconButton.createProps(vnode, Object.assign(args, {
      Icon: polytheneMithrilIcon.Icon
    })),
    createContent: (vnode, args) => polytheneCoreIconButton.coreIconButton.createContent(vnode, Object.assign(args, {
      Icon: polytheneMithrilIcon.Icon
    })),
    component: polytheneMithrilButton.Button
  }));
  IconButton.displayName = "IconButton";

  exports.IconButton = IconButton;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-icon-button.js.map
