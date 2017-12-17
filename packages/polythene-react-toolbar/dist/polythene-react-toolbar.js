(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-toolbar')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-toolbar'], factory) :
	(factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-toolbar']));
}(this, (function (exports,polytheneReactBase,polytheneCoreToolbar) { 'use strict';

var Toolbar = polytheneReactBase.ViewComponent(polytheneCoreToolbar.coreToolbar);

Toolbar.displayName = "Toolbar";

var ToolbarTitle = polytheneReactBase.ViewComponent(polytheneCoreToolbar.coreToolbarTitle);

ToolbarTitle.displayName = "ToolbarTitle";

exports.Toolbar = Toolbar;
exports.ToolbarTitle = ToolbarTitle;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-toolbar.js.map
