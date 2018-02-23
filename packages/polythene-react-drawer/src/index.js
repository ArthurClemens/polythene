import { StateComponent, renderer as h } from "polythene-react-base";
import { Conditional } from "polythene-core";
import { coreDrawer as core } from "polythene-core-drawer";
import { DialogInstance } from "polythene-react-dialog";
import classes from "polythene-css-classes/drawer";

const DrawerInstance = StateComponent(Object.assign(
  {},
  core,
  { component: DialogInstance }
));

const DrawerToggle = StateComponent(Conditional);
DrawerToggle.displayName = "DrawerToggle";

export const Drawer = props => (
  h(DrawerToggle, Object.assign(
    {},
    props,
    {
      placeholderClassName: classes.placeholder,
      instance: DrawerInstance
    }
  ))
);

Drawer.displayName = "Drawer";
