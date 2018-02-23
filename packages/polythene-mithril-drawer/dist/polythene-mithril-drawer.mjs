import { StateComponent, renderer } from 'polythene-mithril-base';
import { Conditional } from 'polythene-core';
import { coreDrawer } from 'polythene-core-drawer';
import { DialogInstance } from 'polythene-mithril-dialog';

var classes = {
  component: "pe-dialog pe-drawer",

  // states
  push: "pe-drawer--push"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DrawerInstance = StateComponent(_extends({}, coreDrawer, { component: DialogInstance }));

var DrawerToggle = StateComponent(Conditional);
DrawerToggle.displayName = "DrawerToggle";

var Drawer = {
  view: function view(vnode) {
    return renderer(DrawerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: classes.placeholder,
      instance: DrawerInstance
    }));
  }
};

Drawer.displayName = "Drawer";

export { Drawer };
