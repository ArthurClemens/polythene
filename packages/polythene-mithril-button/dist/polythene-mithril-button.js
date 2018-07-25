(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-button'), require('polythene-mithril-ripple'), require('polythene-mithril-icon'), require('polythene-mithril-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-button', 'polythene-mithril-ripple', 'polythene-mithril-icon', 'polythene-mithril-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-button'],global['polythene-mithril-ripple'],global['polythene-mithril-icon'],global['polythene-mithril-shadow']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreButton,polytheneMithrilRipple,polytheneMithrilIcon,polytheneMithrilShadow) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var TextButton = polytheneMithrilBase.StateComponent(_extends({}, polytheneCoreButton.coreButton, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreButton.coreButton.createProps(vnode, _extends(args, { Ripple: polytheneMithrilRipple.Ripple, Icon: polytheneMithrilIcon.Icon, Shadow: polytheneMithrilShadow.Shadow }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreButton.coreButton.createContent(vnode, _extends(args, { Ripple: polytheneMithrilRipple.Ripple, Icon: polytheneMithrilIcon.Icon, Shadow: polytheneMithrilShadow.Shadow }));
    }
  }));

  TextButton.displayName = "TextButton";

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var RaisedButton = polytheneMithrilBase.StateComponent(_extends$1({}, polytheneCoreButton.coreRaisedButton, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreButton.coreRaisedButton.createProps(vnode, _extends$1(args, { Shadow: polytheneMithrilShadow.Shadow }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreButton.coreRaisedButton.createContent(vnode, _extends$1(args, { Shadow: polytheneMithrilShadow.Shadow }));
    },
    component: TextButton
  }));

  RaisedButton.displayName = "RaisedButton";

  var Button = polytheneMithrilBase.ViewComponent({
    view: function view(vnode) {
      return polytheneMithrilBase.renderer(vnode.attrs.raised ? RaisedButton : TextButton, vnode.attrs, vnode.children);
    }
  });

  Button.displayName = "Button";

  exports.Button = Button;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-button.js.map
