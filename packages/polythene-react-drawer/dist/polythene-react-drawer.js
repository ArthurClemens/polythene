(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-react-base'), require('polythene-core'), require('polythene-core-drawer'), require('polythene-react-dialog')) :
	typeof define === 'function' && define.amd ? define(['exports', 'polythene-react-base', 'polythene-core', 'polythene-core-drawer', 'polythene-react-dialog'], factory) :
	(factory((global.polythene = {}),global['polythene-react-base'],global['polythene-core'],global['polythene-core-drawer'],global['polythene-react-dialog']));
}(this, (function (exports,polytheneReactBase,polytheneCore,polytheneCoreDrawer,polytheneReactDialog) { 'use strict';

var listTileClasses = {
  component: "pe-list-tile",

  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",

  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky"
};

var menuClasses = {
  component: "pe-menu",

  // elements
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target: "pe-menu__target",

  // states
  permanent: "pe-menu--permanent",
  fullHeight: "pe-menu--full-height",
  floating: "pe-menu--floating",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",

  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var classes = {
  component: "pe-dialog",

  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",
  backdrop: "pe-dialog__backdrop",

  // states
  fullScreen: "pe-dialog--full-screen",
  open: "pe-dialog--open",

  // lookup
  menuContent: menuClasses.content
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DrawerInstance = polytheneReactBase.StateComponent(_extends({}, polytheneCoreDrawer.coreDrawer, {
  component: polytheneReactDialog.DialogInstance
}));

DrawerInstance.displayName = "DrawerInstance";

var options = {
  name: "drawer",
  htmlShowClass: classes.open,
  defaultId: "default_drawer",
  holderSelector: "div." + classes.holder,
  instance: DrawerInstance,
  placeholder: "span." + classes.placeholder
};

var Multiple = polytheneCore.Multi({ options: options, renderer: polytheneReactBase.renderer });
var Drawer = polytheneReactBase.StateComponent(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(function (p) {
  return Drawer[p] = Multiple[p];
});

Drawer.displayName = "Drawer";

exports.DrawerInstance = DrawerInstance;
exports.Drawer = Drawer;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-drawer.js.map
