
import { ComponentCreator } from "polythene-react-base";
import { _Conditional } from "polythene-core";
import { cast, h, useState, useEffect } from "cyano-react";

import { coreDrawer as core } from "polythene-core-drawer";
import { DialogInstance } from "polythene-react-dialog";
import classes from "polythene-css-classes/drawer";

const DrawerInstance = ComponentCreator({
  ...core,
  component: DialogInstance
});

const DrawerToggle = cast(_Conditional, { h, useState, useEffect });
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
