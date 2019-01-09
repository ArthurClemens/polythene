// @ts-check

/**
 * @typedef {import("polythene-react-base").Vnode} Vnode
 */

import { ComponentCreator, renderer as h } from "polythene-react-base";
import { TextButton } from "./TextButton";
import { RaisedButton } from "./RaisedButton";

export const Button = ComponentCreator({
  /**
   * @param {Vnode} vnode
   */
  view: vnode =>
    h(vnode.attrs.raised ? RaisedButton : TextButton, vnode.attrs, vnode.children)
});

Button["displayName"] = "Button";
