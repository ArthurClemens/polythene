(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-toolbar')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-toolbar'], factory) :
	(factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-toolbar']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreToolbar) { 'use strict';

var Toolbar = polytheneMithrilBase.ViewComponent(polytheneCoreToolbar.coreToolbar);

Toolbar.displayName = "Toolbar";

var ToolbarTitle = polytheneMithrilBase.ViewComponent(polytheneCoreToolbar.coreToolbarTitle);

ToolbarTitle.displayName = "ToolbarTitle";

exports.Toolbar = Toolbar;
exports.ToolbarTitle = ToolbarTitle;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-toolbar.js.map
