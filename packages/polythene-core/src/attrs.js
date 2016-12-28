
const r = (acc, p) => (acc[p] = 1, acc);

/* 
Separately handled props:
- class
- element
*/

const defaultAttrs = [
  // Mithril
  "key",
  "oninit",
  "oncreate",
  "onupdate",
  "onbeforeremove",
  "onremove",
  "onbeforeupdate",
  "style",
  "href",
  // Polythene
  // see also "Separately handled props" above
  "id",
  "tabindex"
].reduce(r, {});

export const filterSupportedAttributes = (attrs, componentAttrs = []) => {
  const supported = {
    ...defaultAttrs,
    ...componentAttrs.reduce(r, {})
  };
  return Object.keys(attrs).reduce((acc, key) => (
    supported[key]
      ? acc[key] = attrs[key]
      : null,
    acc
  ), {});
};