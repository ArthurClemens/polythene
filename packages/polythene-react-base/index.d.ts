
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
