// @ts-check

/**
 * @typedef {import("mithril").Vnode} Vnode
 * @typedef {import("../index")}
 * @typedef {import("../index").ComponentCreatorOptions} ComponentCreatorOptions
 */

import stream from "mithril/stream";
import { renderer } from "./renderer";
import { keys } from "./keys";

const requiresKeys = false;

/**
 * @param {ComponentCreatorOptions} params
 */
export const ComponentCreator = ({
  createContent = () => null,
  createProps = () => ({}),
  component = null,
  getElement = () => "div",
  getInitialState = () => ({}),
  onMount = () => null,
  onUnMount = () => null,
  onUpdate = () => null,
  view = null,
}) => {

  const localState = {
    mounted: false
  };

  /**
   * @param {Vnode} vnode 
   */
  const oninit = vnode => {
    /**
     * @type {{ redrawOnUpdate?: Array<function>, _?: any }} initialState
     */
    const initialState = getInitialState(vnode, stream, { keys });
    vnode.state = {...initialState};

    initialState.redrawOnUpdate !== undefined
      ? initialState.redrawOnUpdate.map(() => (
        localState && setTimeout(renderer.redraw)
      ))
      : undefined;
  };

  /**
   * @param {Vnode} vnode 
   */
  const oncreate = vnode => {
    localState.mounted = true;
    onMount(vnode, { keys });
  };

  /**
   * @param {Vnode} vnode 
   */
  const render = vnode => {
    return renderer(
      component || getElement(vnode),
      createProps(vnode, { renderer, requiresKeys, keys }),
      [
        vnode.attrs.before,
        createContent(vnode, { renderer, requiresKeys, keys }),
        vnode.attrs.after
      ]
    );
  };

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
    oninit,
    oncreate,
    onremove: onUnMount,
    onupdate: onUpdate,
  };
};
