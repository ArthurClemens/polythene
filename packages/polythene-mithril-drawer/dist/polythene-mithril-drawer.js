(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-mithril-base'), require('polythene-core-drawer'), require('polythene-mithril-menu')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-mithril-base', 'polythene-core-drawer', 'polythene-mithril-menu'], factory) :
	(factory((global.polythene = {}),global['polythene-mithril-base'],global['polythene-core-drawer'],global['polythene-mithril-menu']));
}(this, (function (exports,polytheneMithrilBase,polytheneCoreDrawer,polytheneMithrilMenu) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Drawer = polytheneMithrilBase.ViewComponent(_extends({}, polytheneCoreDrawer.coreDrawer, {
  component: polytheneMithrilMenu.Menu
}));

Drawer.displayName = "Drawer";

exports.Drawer = Drawer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-mithril-drawer.js.map
