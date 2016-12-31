import j2c from "j2c";

const styleComponent = (name, key, styles, vars, ...styleFns) => {
  const styleVarFn = styles[key];
  const styleVars = styleVarFn ? styleVarFn(vars) : vars;
  add(name, styleFns.map(f => f(styleVars)));
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

const remove = (id) => {
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
 * styles: list of lists style Objects
 */
const addToDocument = (opts, ...styles) => {
  const id = opts.id;
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
  remove,
  styleComponent
};
