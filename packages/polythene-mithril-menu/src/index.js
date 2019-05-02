
/**
 * @typedef {import("mithril").Vnode} Vnode
 */

import { ComponentCreator } from "polythene-mithril-base";
import { _Conditional } from "polythene-core";
import { cast, h, useState, useEffect } from "cyano-mithril";
import { coreMenu as core } from "polythene-core-menu";
import classes from "polythene-css-classes/menu";
import { Shadow } from "polythene-mithril-shadow";

const MenuInstance = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Shadow })
});

const MenuToggle = cast(_Conditional, { h, useState, useEffect });
MenuToggle["displayName"] = "MenuToggle";

export const Menu = {
  /**
   * @param {Vnode} vnode
   */
  view: vnode =>
    h(MenuToggle, {
      ...vnode.attrs,
      placeholderClassName: classes.placeholder,
      instance: MenuInstance
    })
};

Menu["displayName"] = "Menu";
