(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-shadow'), require('polythene-react-base'), require('polythene-core-toolbar')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-shadow', 'polythene-react-base', 'polythene-core-toolbar'], factory) :
  (factory((global.polythene = {}),global['polythene-react-shadow'],global['polythene-react-base'],global['polythene-core-toolbar']));
}(this, (function (exports,polytheneReactShadow,polytheneReactBase,polytheneCoreToolbar) { 'use strict';

  const Toolbar = polytheneReactBase.ViewComponent(Object.assign({}, polytheneCoreToolbar.coreToolbar, {
    createContent: (vnode, args) => polytheneCoreToolbar.coreToolbar.createContent(vnode, Object.assign(args, {
      Shadow: polytheneReactShadow.Shadow
    }))
  }));
  Toolbar.displayName = "Toolbar";

  const ToolbarTitle = polytheneReactBase.ViewComponent(polytheneCoreToolbar.coreToolbarTitle);
  ToolbarTitle.displayName = "ToolbarTitle";

  exports.Toolbar = Toolbar;
  exports.ToolbarTitle = ToolbarTitle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-toolbar.js.map
