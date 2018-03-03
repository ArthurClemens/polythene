import { StateComponent, renderer as h } from "polythene-mithril-base";
import { Conditional } from "polythene-core";
import { coreDrawer as core } from "polythene-core-drawer";
import { DialogInstance } from "polythene-mithril-dialog";
import classes from "polythene-css-classes/drawer";

const DrawerInstance = StateComponent(Object.assign(
  {},
  core,
  { component: DialogInstance }
));

const DrawerToggle = StateComponent(Conditional);
DrawerToggle.displayName = "DrawerToggle";

export const Drawer = {
  view: vnode =>
    h(DrawerToggle, Object.assign({},
      vnode.attrs,
      {
        placeholderClassName: classes.placeholder,
        instance: DrawerInstance,
        exposing: vnode.attrs.mini, // passed to Conditional
      }
    ))
};

Drawer.displayName = "Drawer";
