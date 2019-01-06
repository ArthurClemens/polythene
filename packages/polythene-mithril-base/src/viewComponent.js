// @ts-check

/**
 * @typedef {import("mithril").Vnode} Vnode
 * @typedef {import("../index").ViewComponentAssemblyOptions} ViewComponentAssemblyOptions
 */

import { renderer } from "./renderer";
import { keys } from "./keys";

const requiresKeys = false;

/**
 * @param {ViewComponentAssemblyOptions} params
 */
export const ViewComponent = ({
  createContent = () => null,
  createProps = () => ({}),
  getElement = () => "div",
  component = null,
  view = null,
  onMount = () => null,
  onUnMount = () => null,
}) => {

  /**
   * @param {Vnode} vnode 
   */
  const render = vnode =>
    renderer(
      component || getElement(vnode),
      createProps(vnode, { renderer, requiresKeys, keys }),
      [
        vnode.attrs.before,
        createContent(vnode, { renderer, requiresKeys, keys }),
        vnode.attrs.after
      ]
    );

  return {
    view: view
      ?
      /**
       * @param {Vnode} vnode
       */
      vnode => view(vnode, { render, renderer })
      :
      /**
       * @param {Vnode} vnode
       */
      vnode => render(vnode),
    /**
     * @param {Vnode} vnode
     */
    oncreate: vnode => onMount(vnode, { keys }),
    onremove: onUnMount
  };
};
