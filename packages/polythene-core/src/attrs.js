
const r = (acc, p) => (acc[p] = 1, acc);

/* 
Separately handled props:
- class
- element
*/

const defaultAttrs = [
  // Universal
  "key",
  "style",
  "href",
  "id",
  "tabindex",

  // Mithril
  "oninit",
  "oncreate",
  "onupdate",
  "onbeforeremove",
  "onremove",
  "onbeforeupdate",
];

export const filterSupportedAttributes = (attrs, { add: addAttrs = [], remove: removeAttrs = []} = {} ) => {
  const removeLookup = removeAttrs.reduce(r, {});
  const supported = defaultAttrs.concat(addAttrs).filter(item => !removeLookup[item]).reduce(r, {});
  return Object.keys(attrs).reduce((acc, key) => (
    supported[key]
      ? acc[key] = attrs[key]
      : null,
    acc
  ), {});
};

export const unpackAttrs = attrs =>
  typeof attrs === "function"
    ? attrs()
    : attrs;
