(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core-drawer'), require('polythene-react-menu')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core-drawer', 'polythene-react-menu'], factory) :
	(factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core-drawer'],global['polythene-react-menu']));
}(this, (function (exports,polytheneReactBase,polytheneCoreDrawer,polytheneReactMenu) { 'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Drawer = polytheneReactBase.ViewComponent(_extends({}, polytheneCoreDrawer.coreDrawer, {
  // createProps: (vnode, args) => core.createProps(vnode, args),
  // createContent: (vnode, args) => core.createContent(vnode, args),
  component: polytheneReactMenu.Menu
}));

Drawer.displayName = "Drawer";

exports.Drawer = Drawer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-drawer.js.map
