(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-button'), require('polythene-core'), require('polythene-react-base')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-button', 'polythene-core', 'polythene-react-base'], factory) :
  (factory((global.polythene = {}),global['polythene-react-button'],global['polythene-core'],global['polythene-react-base']));
}(this, (function (exports,polytheneReactButton,polytheneCore,polytheneReactBase) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var RaisedButton = polytheneReactBase.ViewComponent({
    onMount: function onMount() {
      polytheneCore.deprecation("RaisedButton", { newComponent: "Button", newOption: "raised: true" });
    },
    view: function view(vnode) {
      return polytheneReactBase.renderer(polytheneReactButton.Button, _extends({}, { raised: true }, vnode.attrs), vnode.children);
    }
  });

  RaisedButton.displayName = "RaisedButton";

  exports.RaisedButton = RaisedButton;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-raised-button.js.map
