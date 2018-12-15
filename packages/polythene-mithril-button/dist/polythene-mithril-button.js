(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-ripple'), require('polythene-mithril-icon'), require('polythene-mithril-base'), require('polythene-core-button'), require('polythene-mithril-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-ripple', 'polythene-mithril-icon', 'polythene-mithril-base', 'polythene-core-button', 'polythene-mithril-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-ripple'],global['polythene-mithril-icon'],global['polythene-mithril-base'],global['polythene-core-button'],global['polythene-mithril-shadow']));
}(this, (function (exports,polytheneMithrilRipple,polytheneMithrilIcon,polytheneMithrilBase,polytheneCoreButton,polytheneMithrilShadow) { 'use strict';

  const TextButton = polytheneMithrilBase.StateComponent(Object.assign({}, polytheneCoreButton.coreButton, {
    createProps: (vnode, args) => polytheneCoreButton.coreButton.createProps(vnode, Object.assign(args, {
      Ripple: polytheneMithrilRipple.Ripple,
      Icon: polytheneMithrilIcon.Icon,
      Shadow: polytheneMithrilShadow.Shadow
    })),
    createContent: (vnode, args) => polytheneCoreButton.coreButton.createContent(vnode, Object.assign(args, {
      Ripple: polytheneMithrilRipple.Ripple,
      Icon: polytheneMithrilIcon.Icon,
      Shadow: polytheneMithrilShadow.Shadow
    }))
  }));
  TextButton.displayName = "TextButton";

  const RaisedButton = polytheneMithrilBase.StateComponent(Object.assign({}, polytheneCoreButton.coreRaisedButton, {
    createProps: (vnode, args) => polytheneCoreButton.coreRaisedButton.createProps(vnode, Object.assign(args, {
      Shadow: polytheneMithrilShadow.Shadow
    })),
    createContent: (vnode, args) => polytheneCoreButton.coreRaisedButton.createContent(vnode, Object.assign(args, {
      Shadow: polytheneMithrilShadow.Shadow
    })),
    component: TextButton
  }));
  RaisedButton.displayName = "RaisedButton";

  const Button = polytheneMithrilBase.ViewComponent({
    view: vnode => polytheneMithrilBase.renderer(vnode.attrs.raised ? RaisedButton : TextButton, vnode.attrs, vnode.children)
  });
  Button.displayName = "Button";

  exports.Button = Button;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-button.js.map
