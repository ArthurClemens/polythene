import { StateComponent, renderer } from "polythene-mithril-base";
import { Multi } from "polythene-core";
import { coreDrawer as core } from "polythene-core-drawer";
import classes from "polythene-css-classes/dialog";
import { DialogInstance } from "polythene-mithril-dialog";

export const DrawerInstance = StateComponent(Object.assign(
  {},
  core,
  {
    component: DialogInstance
  }
));

DrawerInstance.displayName = "DrawerInstance";

const options = {
  name:           "drawer",
  htmlShowClass:  classes.open,
  defaultId:      "default_drawer",
  holderSelector: `div.${classes.holder}`,
  instance:       DrawerInstance,
  placeholder:    `span.${classes.placeholder}`
};

const Multiple = Multi({ options, renderer });
export const Drawer = StateComponent(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(p => Drawer[p] = Multiple[p]);

Drawer.displayName = "Drawer";
