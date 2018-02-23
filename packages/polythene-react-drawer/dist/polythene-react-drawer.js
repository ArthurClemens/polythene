(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core'), require('polythene-core-drawer'), require('polythene-react-dialog')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core', 'polythene-core-drawer', 'polythene-react-dialog'], factory) :
	(factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core'],global['polythene-core-drawer'],global['polythene-react-dialog']));
}(this, (function (exports,polytheneReactBase,polytheneCore,polytheneCoreDrawer,polytheneReactDialog) { 'use strict';

var classes = {
  component: "pe-dialog pe-drawer",

  // states
  push: "pe-drawer--push"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DrawerInstance = polytheneReactBase.StateComponent(_extends({}, polytheneCoreDrawer.coreDrawer, {
  component: polytheneReactDialog.DialogInstance
}));

var DrawerToggle = polytheneReactBase.StateComponent(polytheneCore.Conditional);
DrawerToggle.displayName = "DrawerToggle";

var Drawer = function Drawer(props) {
  return polytheneReactBase.renderer(DrawerToggle, _extends({}, props, {
    placeholderClassName: classes.placeholder,
    instance: DrawerInstance
  }));
};

Drawer.displayName = "Drawer";

// import { StateComponent } from "polythene-react-base";
// import { coreDrawer as core } from "polythene-core-drawer";
// import { DialogInstance } from "polythene-react-dialog";

// export const Drawer = StateComponent(Object.assign(
//   {},
//   core,
//   {
//     component: DialogInstance
//   }
// ));

// Drawer.displayName = "Drawer";


// import { StateComponent, renderer } from "polythene-react-base";
// import { Multi } from "polythene-core";
// import { coreDrawer as core } from "polythene-core-drawer";
// import classes from "polythene-css-classes/dialog";
// import { DialogInstance } from "polythene-react-dialog";

// export const DrawerInstance = StateComponent(Object.assign(
//   {},
//   core,
//   {
//     component: DialogInstance
//   }
// ));

// DrawerInstance.displayName = "DrawerInstance";

// const options = {
//   name:           "drawer",
//   htmlShowClass:  classes.open,
//   defaultId:      "default_drawer",
//   holderSelector: `div.${classes.holder}`,
//   instance:       DrawerInstance,
//   placeholder:    `span.${classes.placeholder}`
// };

// const Multiple = Multi({ options, renderer });
// export const Drawer = StateComponent(Multiple);
// Object.getOwnPropertyNames(Multiple).forEach(p => Drawer[p] = Multiple[p]);

// Drawer.displayName = "Drawer";

exports.Drawer = Drawer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-drawer.js.map
