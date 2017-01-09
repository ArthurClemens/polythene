import j2c from "j2c";

/*
 * Adds styles to head for a component.
 * id: (String) identifier, used as HTMLElement id for the attached <style></style> element
 * styles: [Array} list of lists style objects
 * key: (String) component key in styles object
 * vars: (Object) component configuration variables
 * styleFns: one or more style functions that return j2c style objects, for instance color, layout, ...
*/
const styleComponent = (id, styles, key, vars, ...styleFns) => {
  const styleVarFn = styles[key];
  const styleVars = styleVarFn ? styleVarFn(vars) : vars;
  add(id, styleFns.map(f => f(styleVars)));
};

/*
 * Create an additional style to head for a component. Does not overwrite existing keys.
 * selector: (String) CSS selector
 * styles: [Array} list of lists style objects
 * key: (String) component key in styles object
 * extraVars: (Object) component configuration variables
*/
const addComponentStyle = (selector, styles, key, extraVars) =>
  Object.assign(
    {},
    styles,
    {[key]: vars => [
      {[selector]: Object.assign({}, vars, extraVars)}
    ]}
  );

/*
 * Generate style objects with scopes.
 */
const createStyles = (componentVars, fn) => {
  if (Array.isArray(componentVars)) {
    // Styles set in custom theme
    return componentVars.map((o) => {
      // Currently only a single class is supported
      for (let selector in o) {
        return fn(o[selector], selector);
      }
    });
  } else {
    // No theme set
    return fn(componentVars);
  }
};

/*
 * id: identifier, used as HTMLElement id for the attached <style></style> element
 * styles: list of lists style Objects
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
  const id = opts.id.replace(/[^a-z0-9]/g, "_");
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

export default {
  add,
  addToDocument,
  createStyles,
  remove,
  styleComponent,
  addComponentStyle
};
