import { Component, Vnode } from "mithril";
import { Stream } from "mithril/stream";

export interface renderer {
  (...args: any): any;

  /**
   * Turns an HTML or SVG string into unescaped HTML or SVG. Do not use trust on unsanitized user input. Always try to use an alternative method first, before considering using m.trust.
   * @param {string} html HTML string.
   * @param {string} [element=div] Wrapper element to contain the unescaped contents.
   */
  trust(html: string, element?: string): any;
  displayName: string;
}

export const renderer: renderer;


export namespace keys {

  export type keys = { [key: string]: string; };

}

/* ComponentCreator */

interface ComponentCreatorOptions {
  getElement?: (vnode: Vnode) => string;
  getInitialState?: (vnode: Vnode, stream?: <T>(value?: T) => Stream<T>, options?: object) => object;
  onMount?: (vnode: Vnode, options?: object) => void;
  onUnMount?: (vnode: Vnode) => void;
  onUpdate?: (vnode: Vnode) => void;
  createProps?: (vnode: Vnode, options?: object) => object;
  createContent?: (vnode: Vnode, options?: any) => any;
  component?: any;
  view?: ((vnode: Vnode, options?: object) => any) | null;
}

export const ComponentCreatorOptions: ComponentCreatorOptions;

interface ComponentCreator {
  (_: ComponentCreatorOptions): Component;
}

declare const ComponentCreator: ComponentCreator;

export { ComponentCreator };
export as namespace ComponentCreator;
