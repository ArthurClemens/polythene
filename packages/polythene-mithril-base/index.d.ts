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
