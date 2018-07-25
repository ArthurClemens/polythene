(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-button'), require('polythene-react-ripple'), require('polythene-react-icon'), require('polythene-react-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-button', 'polythene-react-ripple', 'polythene-react-icon', 'polythene-react-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-button'],global['polythene-react-ripple'],global['polythene-react-icon'],global['polythene-react-shadow']));
}(this, (function (exports,polytheneReactBase,polytheneCoreButton,polytheneReactRipple,polytheneReactIcon,polytheneReactShadow) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var TextButton = polytheneReactBase.StateComponent(_extends({}, polytheneCoreButton.coreButton, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreButton.coreButton.createProps(vnode, _extends(args, { Ripple: polytheneReactRipple.Ripple, Icon: polytheneReactIcon.Icon, Shadow: polytheneReactShadow.Shadow }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreButton.coreButton.createContent(vnode, _extends(args, { Ripple: polytheneReactRipple.Ripple, Icon: polytheneReactIcon.Icon, Shadow: polytheneReactShadow.Shadow }));
    }
  }));

  TextButton.displayName = "TextButton";

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var RaisedButton = polytheneReactBase.StateComponent(_extends$1({}, polytheneCoreButton.coreRaisedButton, {
    createProps: function createProps(vnode, args) {
      return polytheneCoreButton.coreRaisedButton.createProps(vnode, _extends$1(args, { Shadow: polytheneReactShadow.Shadow }));
    },
    createContent: function createContent(vnode, args) {
      return polytheneCoreButton.coreRaisedButton.createContent(vnode, _extends$1(args, { Shadow: polytheneReactShadow.Shadow }));
    },
    component: TextButton
  }));

  RaisedButton.displayName = "RaisedButton";

  var Button = polytheneReactBase.ViewComponent({
    view: function view(vnode) {
      return polytheneReactBase.renderer(vnode.attrs.raised ? RaisedButton : TextButton, vnode.attrs, vnode.children);
    }
  });

  Button.displayName = "Button";

  exports.Button = Button;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-button.js.map
