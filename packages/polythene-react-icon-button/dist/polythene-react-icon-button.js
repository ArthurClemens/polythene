(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-icon-button'), require('polythene-react-icon'), require('polythene-react-button')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-icon-button', 'polythene-react-icon', 'polythene-react-button'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-icon-button'],global['polythene-react-icon'],global['polythene-react-button']));
}(this, (function (exports,polytheneReactBase,polytheneCoreIconButton,polytheneReactIcon,polytheneReactButton) { 'use strict';

  const IconButton = polytheneReactBase.StateComponent(Object.assign({}, polytheneCoreIconButton.coreIconButton, {
    createProps: (vnode, args) => polytheneCoreIconButton.coreIconButton.createProps(vnode, Object.assign(args, {
      Icon: polytheneReactIcon.Icon
    })),
    createContent: (vnode, args) => polytheneCoreIconButton.coreIconButton.createContent(vnode, Object.assign(args, {
      Icon: polytheneReactIcon.Icon
    })),
    component: polytheneReactButton.Button
  }));
  IconButton.displayName = "IconButton";

  exports.IconButton = IconButton;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-icon-button.js.map
