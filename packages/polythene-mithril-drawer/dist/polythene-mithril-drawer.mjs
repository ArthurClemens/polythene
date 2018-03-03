import { StateComponent, renderer } from 'polythene-mithril-base';
import { Conditional } from 'polythene-core';
import { coreDrawer } from 'polythene-core-drawer';
import { DialogInstance } from 'polythene-mithril-dialog';

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
  anchorEnd: "pe-drawer--anchor-end"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DrawerInstance = StateComponent(_extends({}, coreDrawer, { component: DialogInstance }));

var DrawerToggle = StateComponent(Conditional);
DrawerToggle.displayName = "DrawerToggle";

var Drawer = {
  view: function view(vnode) {
    return renderer(DrawerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: classes.placeholder,
      instance: DrawerInstance,
      exposing: vnode.attrs.mini // passed to Conditional
    }));
  }
};

Drawer.displayName = "Drawer";

export { Drawer };
