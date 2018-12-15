(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-ripple'), require('polythene-react-icon'), require('polythene-react-base'), require('polythene-core-button'), require('polythene-react-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-ripple', 'polythene-react-icon', 'polythene-react-base', 'polythene-core-button', 'polythene-react-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-react-ripple'],global['polythene-react-icon'],global['polythene-react-base'],global['polythene-core-button'],global['polythene-react-shadow']));
}(this, (function (exports,polytheneReactRipple,polytheneReactIcon,polytheneReactBase,polytheneCoreButton,polytheneReactShadow) { 'use strict';

  const TextButton = polytheneReactBase.StateComponent(Object.assign({}, polytheneCoreButton.coreButton, {
    createProps: (vnode, args) => polytheneCoreButton.coreButton.createProps(vnode, Object.assign(args, {
      Ripple: polytheneReactRipple.Ripple,
      Icon: polytheneReactIcon.Icon,
      Shadow: polytheneReactShadow.Shadow
    })),
    createContent: (vnode, args) => polytheneCoreButton.coreButton.createContent(vnode, Object.assign(args, {
      Ripple: polytheneReactRipple.Ripple,
      Icon: polytheneReactIcon.Icon,
      Shadow: polytheneReactShadow.Shadow
    }))
  }));
  TextButton.displayName = "TextButton";

  const RaisedButton = polytheneReactBase.StateComponent(Object.assign({}, polytheneCoreButton.coreRaisedButton, {
    createProps: (vnode, args) => polytheneCoreButton.coreRaisedButton.createProps(vnode, Object.assign(args, {
      Shadow: polytheneReactShadow.Shadow
    })),
    createContent: (vnode, args) => polytheneCoreButton.coreRaisedButton.createContent(vnode, Object.assign(args, {
      Shadow: polytheneReactShadow.Shadow
    })),
    component: TextButton
  }));
  RaisedButton.displayName = "RaisedButton";

  const Button = polytheneReactBase.ViewComponent({
    view: vnode => polytheneReactBase.renderer(vnode.attrs.raised ? RaisedButton : TextButton, vnode.attrs, vnode.children)
  });
  Button.displayName = "Button";

  exports.Button = Button;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-button.js.map
