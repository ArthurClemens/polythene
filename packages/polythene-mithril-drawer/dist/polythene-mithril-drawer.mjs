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
  border: "pe-drawer--border",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorEnd: "pe-drawer--anchor-end"
};

const DrawerInstance = StateComponent(Object.assign({}, coreDrawer, {
  component: DialogInstance
}));
const DrawerToggle = StateComponent(Conditional);
DrawerToggle.displayName = "DrawerToggle";
const Drawer = {
  view: vnode => renderer(DrawerToggle, Object.assign({}, vnode.attrs, {
    placeholderClassName: classes.placeholder,
    instance: DrawerInstance,
    permanent: vnode.attrs.permanent || vnode.attrs.mini // passed to Conditional

  }))
};
Drawer.displayName = "Drawer";

export { Drawer };
