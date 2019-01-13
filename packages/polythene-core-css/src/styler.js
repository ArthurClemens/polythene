// @ts-check

import { j2c } from "./j2c";
import { isServer } from "polythene-core";

const ID_REGEX = /[^a-z0-9\\-]/g;

/**
 * @typedef {object} StyleObject 
 * @typedef {(selector: string|Array<string>, vars: object, customVars?: object) => Array<object>} StyleFn
 */

/**
 * Adds styles to head.
 * @param {string} id - Identifier, used as HTMLElement id for the attached <style></style> element.
 * @param {...Array<StyleObject>} styles - List of style Objects
 * @returns {void}
 */
const add = (id, ...styles) =>
  addToDocument({ id }, ...styles);

/**
 * Removes a style from head.
 * @param {string} id - Identifier, used as HTMLElement id for the attached <style></style> element.
 * @returns {void}
 */
const remove = id => {
  if (isServer) return;
  if (id) {
    const old = document.getElementById(id);
    if (old && old.parentNode) {
      old.parentNode.removeChild(old);
    }
  }
};

/**
 * Adds styles to the head.
 * @param {object} params
 * @param {string} params.id - Identifier, used as HTMLElement id for the attached <style></style> element.
 * @param {object} [params.document] - Document reference.
 * @param {...Array<StyleObject>} styles - List of style Objects.
 * @returns {void}
 */
const addToDocument = ({ id, document }, ...styles) => {
  if (isServer) return;
  const safeId = id.replace(ID_REGEX, "_");
  remove(safeId);
  const documentRef = document || window.document;
  const styleEl = documentRef.createElement("style");
  if (safeId) {
    styleEl.setAttribute("id", safeId);
  }
  styles.forEach(styles => {
    // each style returns a list
    if (Object.keys(styles).length) {
      styles.forEach(style => {
        const scoped = {
          "@global": style
        };
        const sheet = j2c.sheet(scoped);
        styleEl.appendChild(documentRef.createTextNode(sheet));
      });
    }
  });
  documentRef.head.appendChild(styleEl);
};

/**
 * 
 * @param {object} params
 * @param {StyleObject|Array<StyleObject>} params.styles
 * @param {string} [params.scope]
 * @returns {Array<StyleObject>}
 */
const wrapInScope = ({ styles, scope }) => 
  scope
    ? [{ [scope]: styles }]
    : styles;

/**
 * Adds component styles to head.
 * @param {object} params
 * @param {Array<string>} params.selectors
 * @param {Array<StyleFn>} params.fns
 * @param {object} params.vars
 * @param {object} [params.customVars]
 * @param {string} [params.mediaQuery]
 * @param {string} [params.scope]
 * @returns {void}
 */
const addStyle = ({ selectors, fns: styleFns, vars, customVars, mediaQuery, scope }) => {
  const prefix = scope ? " " : "";
  const selector = prefix + selectors.join("");
  const styles = styleFns.map(fn => fn(selector, vars, customVars)).filter(list => list.length > 0);
  if (styles.length === 0) {
    return;
  }
  const id = selector.trim().replace(/^[^a-z]?(.*)/, "$1");
  add(id,
    wrapInScope({
      styles: wrapInScope({ styles, scope }),
      scope: mediaQuery
    })
  );
};

/**
 * Returns a list of style objects for a component.
 * @param {object} params
 * @param {Array<string>} params.selectors
 * @param {Array<StyleFn>} params.fns
 * @param {object} params.vars - Style configuration variables
 * @param {object} [params.customVars] - Style configuration variables
 * @param {string} [params.mediaQuery] - Mediaquery string
 * @param {string} [params.scope] - Scope selector
 * @returns {Array<StyleObject>}
 */
const getStyle = ({ selectors, fns: styleFns, vars, customVars, mediaQuery, scope }) => {
  const prefix = scope ? " " : "";
  const selector = prefix + selectors.join("");
  const styles = styleFns.map(fn => fn(selector, vars, customVars));
  return wrapInScope({
    styles: wrapInScope({ styles, scope }),
    scope: mediaQuery
  });
};

/**
 * Adds component styles to head.
 * @param {string} selector 
 * @param {Array<StyleFn>} fns 
 * @param {object} vars - Style configuration variables
 */
const createAddStyle = (selector, fns, vars) =>
  /**
   * @param {string} [customSelector=""]
   * @param {object} customVars
   * @param {object} [scoping={}]
   * @param {string} [scoping.mediaQuery]
   * @param {string} [scoping.scope]
   * @returns {void}
   */
  (customSelector="", customVars, { mediaQuery, scope }={}) => 
    addStyle({
      selectors: [selector, customSelector],
      fns,
      vars,
      customVars,
      mediaQuery,
      scope
    });

/**
 * Returns styles for a component.
 * @param {string} selector 
 * @param {Array<StyleFn>} fns 
 * @param {object} vars - Style configuration variables
 */
const createGetStyle = (selector, fns, vars) =>
  /**
   * @param {string} [customSelector=""]
   * @param {object} customVars
   * @param {object} [scoping={}]
   * @param {string} [scoping.mediaQuery]
   * @param {string} [scoping.scope]
   * @returns {Array<StyleObject>}
   */
  (customSelector="", customVars, { mediaQuery, scope }={}) => 
    [getStyle({
      selectors: [selector, customSelector],
      fns,
      vars,
      customVars,
      mediaQuery,
      scope
    })];

export default {
  add,
  addStyle,
  addToDocument,
  createAddStyle,
  createGetStyle,
  getStyle,
  remove,
};
