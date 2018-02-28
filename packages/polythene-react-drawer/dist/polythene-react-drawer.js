(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core'), require('polythene-core-drawer'), require('polythene-react-dialog')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core', 'polythene-core-drawer', 'polythene-react-dialog'], factory) :
	(factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core'],global['polythene-core-drawer'],global['polythene-react-dialog']));
}(this, (function (exports,polytheneReactBase,polytheneCore,polytheneCoreDrawer,polytheneReactDialog) { 'use strict';

var classes = {
  component: "pe-dialog pe-drawer",

  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  bordered: "pe-drawer--bordered",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorRight: "pe-drawer--anchor-right"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DrawerInstance = polytheneReactBase.StateComponent(_extends({}, polytheneCoreDrawer.coreDrawer, { component: polytheneReactDialog.DialogInstance }));

var DrawerToggle = polytheneReactBase.StateComponent(polytheneCore.Conditional);
DrawerToggle.displayName = "DrawerToggle";

var Drawer = function Drawer(props) {
  return polytheneReactBase.renderer(DrawerToggle, _extends({}, props, {
    placeholderClassName: classes.placeholder,
    instance: DrawerInstance,
    permanent: props.permanent || props.mini
  }));
};

Drawer.displayName = "Drawer";

exports.Drawer = Drawer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-drawer.js.map
