(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-toolbar'), require('polythene-react-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-toolbar', 'polythene-react-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-toolbar'],global['polythene-react-shadow']));
}(this, (function (exports,polytheneReactBase,polytheneCoreToolbar,polytheneReactShadow) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var Toolbar = polytheneReactBase.ViewComponent(_extends({}, polytheneCoreToolbar.coreToolbar, {
    createContent: function createContent(vnode, args) {
      return polytheneCoreToolbar.coreToolbar.createContent(vnode, _extends(args, { Shadow: polytheneReactShadow.Shadow }));
    }
  }));

  Toolbar.displayName = "Toolbar";

  var ToolbarTitle = polytheneReactBase.ViewComponent(polytheneCoreToolbar.coreToolbarTitle);

  ToolbarTitle.displayName = "ToolbarTitle";

  exports.Toolbar = Toolbar;
  exports.ToolbarTitle = ToolbarTitle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-toolbar.js.map
