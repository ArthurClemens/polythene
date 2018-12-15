(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-shadow'), require('polythene-mithril-base'), require('polythene-core-toolbar')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-shadow', 'polythene-mithril-base', 'polythene-core-toolbar'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-shadow'],global['polythene-mithril-base'],global['polythene-core-toolbar']));
}(this, (function (exports,polytheneMithrilShadow,polytheneMithrilBase,polytheneCoreToolbar) { 'use strict';

  const Toolbar = polytheneMithrilBase.ViewComponent(Object.assign({}, polytheneCoreToolbar.coreToolbar, {
    createContent: (vnode, args) => polytheneCoreToolbar.coreToolbar.createContent(vnode, Object.assign(args, {
      Shadow: polytheneMithrilShadow.Shadow
    }))
  }));
  Toolbar.displayName = "Toolbar";

  const ToolbarTitle = polytheneMithrilBase.ViewComponent(polytheneCoreToolbar.coreToolbarTitle);
  ToolbarTitle.displayName = "ToolbarTitle";

  exports.Toolbar = Toolbar;
  exports.ToolbarTitle = ToolbarTitle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-toolbar.js.map
