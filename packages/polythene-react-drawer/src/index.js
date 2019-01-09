// @ts-check

import { ComponentCreator, renderer as h } from "polythene-react-base";
import { coreConditional } from "polythene-core";
import { coreDrawer as core } from "polythene-core-drawer";
import { DialogInstance } from "polythene-react-dialog";
import classes from "polythene-css-classes/drawer";

const DrawerInstance = ComponentCreator({
  ...core,
  component: DialogInstance
});

const DrawerToggle = ComponentCreator(coreConditional);
DrawerToggle["displayName"] = "DrawerToggle";

export const Drawer = props => (
  h(DrawerToggle, Object.assign(
    {},
    props,
    {
      placeholderClassName: classes.placeholder,
      instance: DrawerInstance,
      permanent: props.permanent || props.mini, // passed to Conditional
    }
  ))
);

Drawer["displayName"] = "Drawer";
