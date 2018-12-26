import { prefixPlugin } from "j2c-plugin-prefix-browser/dist/j2c-plugin-prefix-browser.commonjs";
import { isServer } from "polythene-core";
import J2c from "j2c";

const j2c = new J2c(prefixPlugin);
const ID_REGEX = /[^a-z0-9\\-]/g;

/*
 * @param id: identifier, used as HTMLElement id for the attached <style></style> element
 * @param styles: list of lists style Objects
 */
const add = (id, ...styles) =>
  addToDocument({
    id
  }, ...styles);

/*
 * Removes a style from head.
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

/*
 * opts: options object
 * id: identifier, used as HTMLElement id for the attached <style></style> element
 * document: document reference; default window.document
 * styles: list of lists style objects
 */
const addToDocument = (opts, ...styles) => {
  if (isServer) return;
  const id = opts.id.replace(ID_REGEX, "_");
  const documentRef = opts.document || window.document;
  remove(id);
  const styleEl = documentRef.createElement("style");
  if (id) {
    styleEl.setAttribute("id", id);
  }
  styles.forEach(styleList => {
    // each style returns a list
    if (Object.keys(styleList).length) {
      styleList.forEach(style => {
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

const wrapInScope = ({ styles, scope }) => 
  scope
    ? [{ [scope]: styles }]
    : styles;

/*
 * Adds styles to head for a component.
 * @param selector: Array of Strings: selectors
 * @param vars: Object configuration variables
 * @param styleFns: Array of Functions: (selector, componentVars) => [j2c style objects]
*/

const addStyle = ({ selectors, fns: styleFns, vars, customVars, mediaQuery, scope }) => {
  const prefix = scope ? " " : "";
  const selector = prefix + selectors.join("");
  const styleList = styleFns.map(fn => fn(selector, vars, customVars)).filter(list => list.length > 0);
  if (styleList.length === 0) {
    return;
  }
  const id = selector.trim().replace(/^[^a-z]?(.*)/, "$1");
  add(id,
    wrapInScope({
      styles: wrapInScope({ styles: styleList, scope }),
      scope: mediaQuery
    })
  );
};


const getStyle = ({ selectors, fns: styleFns, vars, customVars, mediaQuery, scope }) => {
  const prefix = scope ? " " : "";
  const selector = prefix + selectors.join("");
  const styleList = styleFns.map(fn => fn(selector, vars, customVars));
  return wrapInScope({
    styles: wrapInScope({ styles: styleList, scope }),
    scope: mediaQuery
  });
};

/*
 * Adds styles to head for a component.
 * @param selector: Array of Strings: selectors
 * @param fns: Array of Functions: (selector, componentVars) => [j2c style objects]
 * @param vars: (Object) Style configuration variables
*/
const createAddStyle = (selector, fns, vars) => (customSelector="", customVars, { mediaQuery, scope }={}) => 
  addStyle({
    selectors: [selector, customSelector],
    fns,
    vars,
    customVars,
    mediaQuery,
    scope
  });

const createGetStyle = (selector, fns, vars) => (customSelector="", customVars, { mediaQuery, scope }={}) => 
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
