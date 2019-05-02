
/**
 * @typedef {import("polythene-react-base").Vnode} Vnode
 */

import { ComponentCreator } from "polythene-react-base";
import { _Conditional } from "polythene-core";
import { cast, h, useState, useEffect } from "cyano-react";
import { coreMenu as core } from "polythene-core-menu";
import classes from "polythene-css-classes/menu";
import { Shadow } from "polythene-react-shadow";

const MenuInstance = ComponentCreator({
  ...core,
  createContent: (vnode, args) => core.createContent(vnode, { ...args, Shadow })
});

const MenuToggle = cast(_Conditional, { h, useState, useEffect });
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
