// @ts-check

/**
 * @typedef {import("mithril").Vnode} Vnode
 */

import { ComponentCreator, renderer as h } from "polythene-mithril-base";
import { TextButton } from "./TextButton";
import { RaisedButton } from "./RaisedButton";

export const Button = ComponentCreator({
  /**
   * @param {Vnode} vnode
   */
  view: vnode =>
    h(vnode.attrs.raised
      ? RaisedButton
      : TextButton,
    vnode.attrs,
    vnode.children)
});

Button["displayName"] = "Button";
