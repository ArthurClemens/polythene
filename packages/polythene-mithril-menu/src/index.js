// @ts-check

/**
 * @typedef {import("mithril").Vnode} Vnode
 */

import { ComponentCreator, renderer as h } from "polythene-mithril-base";
import { coreConditional } from "polythene-core";
import { coreMenu as core } from "polythene-core-menu";
import classes from "polythene-css-classes/menu";
import { Shadow } from "polythene-mithril-shadow";

const MenuInstance = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Shadow })
});

const MenuToggle = ComponentCreator(coreConditional);
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
