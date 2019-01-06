// @ts-check

/**
 * @typedef {import("mithril").Vnode} Vnode
 * @typedef {import("polythene-core-button").Options} Options
 */

import { StateComponent, renderer as h } from "polythene-mithril-base";
import { TextButton } from "./TextButton";
import { RaisedButton } from "./RaisedButton";

export const Button = StateComponent({
  /**
   * @param {Vnode} vnode
   * @param {Options} vnode.attrs
   */
  view: vnode =>
    h(vnode.attrs.raised
      ? RaisedButton
      : TextButton,
    vnode.attrs,
    vnode.children)
});

Button["displayName"] = "Button";
