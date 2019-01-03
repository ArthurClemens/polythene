
/**
 * Stand-in for Mithril.
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

  export function normalizeKey(key: string): string;

}
