
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
