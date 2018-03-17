(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-toolbar'), require('polythene-mithril-shadow')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-toolbar', 'polythene-mithril-shadow'], factory) :
  (factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-toolbar'],global['polythene-mithril-shadow']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreToolbar,polytheneMithrilShadow) { 'use strict';

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var Toolbar = polytheneMithrilBase.ViewComponent(_extends({}, polytheneCoreToolbar.coreToolbar, {
    createContent: function createContent(vnode, args) {
      return polytheneCoreToolbar.coreToolbar.createContent(vnode, _extends(args, { Shadow: polytheneMithrilShadow.Shadow }));
    }
  }));

  Toolbar.displayName = "Toolbar";

  var ToolbarTitle = polytheneMithrilBase.ViewComponent(polytheneCoreToolbar.coreToolbarTitle);

  ToolbarTitle.displayName = "ToolbarTitle";

  exports.Toolbar = Toolbar;
  exports.ToolbarTitle = ToolbarTitle;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-toolbar.js.map
