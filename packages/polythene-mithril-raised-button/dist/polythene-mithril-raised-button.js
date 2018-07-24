(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-button'), require('polythene-core'), require('polythene-mithril-base')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-button', 'polythene-core', 'polythene-mithril-base'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-button'],global['polythene-core'],global['polythene-mithril-base']));
}(this, (function (exports,polytheneMithrilButton,polytheneCore,polytheneMithrilBase) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var RaisedButton = polytheneMithrilBase.ViewComponent({
    onMount: function onMount() {
      polytheneCore.deprecation("RaisedButton", { newComponent: "Button", newOption: "raised: true" });
    },
    view: function view(vnode) {
      return polytheneMithrilBase.renderer(polytheneMithrilButton.Button, _extends({}, { raised: true }, vnode.attrs), vnode.children);
    }
  });

  RaisedButton.displayName = "RaisedButton";

  exports.RaisedButton = RaisedButton;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-raised-button.js.map
