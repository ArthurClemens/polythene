import { prefixPlugin } from "j2c-plugin-prefix-browser";
import J2c from "j2c";

const j2c = new J2c(prefixPlugin);
const ID_REGEX = /[^a-z0-9\-]/g;

/*
 * @param id: identifier, used as HTMLElement id for the attached <style></style> element
 * @param styles: list of lists style Objects
 */
const add = (id, ...styles) => {
  addToDocument({
    id
  }, ...styles);
};

/*
 * Removes a style from head.
 */
const remove = id => {
  if (id) {
    const old = document.getElementById(id);
    if (old) {
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
  const id = opts.id.replace(ID_REGEX, "_");
  const documentRef = opts.document || window.document;
  remove(id);
  const styleEl = documentRef.createElement("style");
  if (id) {
    styleEl.setAttribute("id", id);
  }
  styles.forEach((styleList) => {
    // each style returns a list
    if (Object.keys(styleList).length) {
      styleList.forEach((style) => {
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

/*
 * Adds styles to head for a component.
 * @param selector: Array of Strings: selectors
 * @param vars: Object configuration variables
 * @param styleFns: Array of Functions: (selector, componentVars) => [j2c style objects]
*/
const generateStyles = (selectors, vars, styleFns) => {
  const selector = selectors.join("");
  const id = selector.trim().replace(/^[^a-z]?(.*)/, "$1");
  add(id, styleFns.map(fn => fn(selector, vars)));
};

export default {
  add,
  addToDocument,
  remove,
  generateStyles
};
