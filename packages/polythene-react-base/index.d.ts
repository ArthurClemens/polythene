import { Component } from "react";
import { Stream } from "mithril/stream";

/**
 * Renders hyperscript to React elements.
 * https://github.com/mlmorg/react-hyperscript
 */
export function renderer(...args: any): any;

export namespace renderer {

  /**
   * Turns an HTML or SVG string into unescaped HTML or SVG. Do not use trust on unsanitized user input. Always try to use an alternative method first, before considering using m.trust.
   * @param {string} html HTML string.
   * @param {string} [element=div] Wrapper element to contain the unescaped contents.
   */
  export function trust(html: string, element?: string): any;

}

export namespace keys {

  export type keys = { [key: string]: string; };

}

export interface Vnode<Options = {}> {
  attrs: Options;
  children?: React.ReactNode;
  dom?: Element | Text;
}

/* ComponentCreator */

interface ComponentCreatorOptions {
  getElement?: (vnode: Vnode) => string;
  getInitialState?: (vnode: Vnode, stream?: <T>(value?: T) => Stream<T>, options?: object) => object;
  onUpdate?: (vnode: Vnode) => void;
  onMount?: (vnode: Vnode, options?: object) => void;
  onUnMount?: (vnode: Vnode) => void;
  createProps?: (vnode: Vnode, options?: object) => object;
  createContent?: (vnode: Vnode, options?: any) => any;
  component?: any;
  view?: ((vnode: Vnode, options?: object) => any) | null;
  displayName?: string;
}
export const ComponentCreatorOptions: ComponentCreatorOptions;

interface ComponentCreator {
  (_: ComponentCreatorOptions): ComponentCreator;
}

declare const ComponentCreator: ComponentCreator;

export { ComponentCreator };
export as namespace ComponentCreator;
