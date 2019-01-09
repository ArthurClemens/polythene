// @ts-check

/**
 * @typedef {import("polythene-react-base").Vnode} Vnode
 */

import { ComponentCreator, renderer as h } from "polythene-react-base";
import { coreConditional } from "polythene-core";
import { coreMenu as core } from "polythene-core-menu";
import classes from "polythene-css-classes/menu";
import { Shadow } from "polythene-react-shadow";

const MenuInstance = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Shadow })
});

const MenuToggle = ComponentCreator(coreConditional);
MenuToggle["displayName"] = "MenuToggle";

/**
 * @param {Vnode} props 
 */
export const Menu = props => (
  h(MenuToggle, {
    ...props,
    placeholderClassName: classes.placeholder,
    instance: MenuInstance
  })
);

Menu["displayName"] = "Menu";
