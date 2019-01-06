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
   * @param html HTML string.
   * @param {string} [element=div] Wrapper element to contain the unescaped contents.
   */
  export function trust(html: string, element?: string): any;

}

export namespace keys {

  export type keys = { [key: string]: string; };

}

interface Vnode {
  attrs?: {
    [x: string]: any;
    children?: React.ReactNode;
  };
  children: React.ReactNode;
  dom?: Element | Text;
}

/* ViewComponent */

interface ViewComponentAssemblyOptions {
  createContent?: (vnode: Vnode, options?: any) => any;
  createProps?: (vnode: Vnode, options?: object) => object;
  getElement?: (vnode: Vnode) => string;
  component?: any;
  view?: ((vnode: Vnode, options?: object) => any) | null;
  onMount?: (vnode: Vnode, options?: object) => void;
  onUnMount?: (vnode: Vnode) => void;
}

export const ViewComponentAssemblyOptions: ViewComponentAssemblyOptions;

interface ViewComponentAssembly {
  (_: ViewComponentAssemblyOptions): ViewComponent;
}

declare const ViewComponentAssembly: ViewComponentAssembly;

export { ViewComponentAssembly };
export as namespace ViewComponentAssembly;

interface ViewComponent extends Component {
  (_: ViewComponentAssemblyOptions): Component;
  displayName: string;
}

declare const ViewComponent: ViewComponent;

export { ViewComponent };
export as namespace ViewComponent;


/* StateComponent */

interface StateComponentAssemblyOptions extends ViewComponentAssemblyOptions {
  getInitialState?: (vnode: Vnode, stream?: <T>(value?: T) => Stream<T>, options?: object) => object;
  onUpdate?: (vnode: Vnode) => void;
}
export const StateComponentAssemblyOptions: StateComponentAssemblyOptions;

interface StateComponentAssembly {
  (_: StateComponentAssemblyOptions): StateComponent;
}

declare const StateComponentAssembly: StateComponentAssembly;

export { StateComponentAssembly };
export as namespace StateComponentAssembly;

interface StateComponent extends Component {
  (_: StateComponentAssemblyOptions): Component;
  displayName: string;
}

declare const StateComponent: StateComponent;

export { StateComponent };
export as namespace StateComponent;
