
import { _Conditional } from "polythene-core";
import { cast, h, useState, useEffect } from "cyano-react";

import { _Drawer, openDialogsSelector } from "polythene-core-drawer";
import { DialogInstance } from "polythene-react-dialog";
import classes from "polythene-css-classes/drawer";

const DrawerInstance = cast(_Drawer, { h, Dialog: DialogInstance, openDialogsSelector });
DrawerInstance["displayName"] = "DrawerInstance";

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
