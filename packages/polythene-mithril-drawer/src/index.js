
/**
 * @typedef {import("mithril").Vnode} Vnode
 */

import { ComponentCreator } from "polythene-mithril-base";
import { _Conditional } from "polythene-core";
import { cast, h, useState, useEffect } from "cyano-mithril";
import { coreDrawer as core } from "polythene-core-drawer";
import { DialogInstance } from "polythene-mithril-dialog";
import classes from "polythene-css-classes/drawer";

const DrawerInstance = ComponentCreator({
  ...core,
  component: DialogInstance
});

const DrawerToggle = cast(_Conditional, { h, useState, useEffect });
DrawerToggle["displayName"] = "DrawerToggle";

export const Drawer = {
  /**
   * @param {Vnode} vnode
   */
  view: vnode =>
    h(DrawerToggle, {
      ...vnode.attrs,
      placeholderClassName: classes.placeholder,
      instance: DrawerInstance,
      permanent: vnode.attrs.permanent || vnode.attrs.mini, // passed to Conditional
    })
};

Drawer["displayName"] = "Drawer";
