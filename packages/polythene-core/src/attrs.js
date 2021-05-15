// @ts-check

/**
 * Reducer helper function.
 * @param {object} acc
 * @param {string} p
 * @returns {object}
 */
const r = (acc, p) => ((acc[p] = 1), acc);

/**
 * List of default attributes.
 * Separately handled:
 * - class
 * - element
 * @type Array<string> defaultAttrs
 */
const defaultAttrs = [
  // Universal
  "key",
  "style",
  "href",
  "id",
  "data-index",

  // React
  "tabIndex",

  // Mithril
  "tabindex",
  "oninit",
  "oncreate",
  "onupdate",
  "onbeforeremove",
  "onremove",
  "onbeforeupdate",
];

/**
 *
 * @param {{[s: string]: string}} attrs
 * @param {object} [modifications]
 * @param {Array<string>} [modifications.add]
 * @param {Array<string>} [modifications.remove]
 * @returns {object}
 */
export const filterSupportedAttributes = (attrs, { add, remove } = {}) => {
  /**
   * @type {{[s: string]: string}} removeLookup
   */
  const removeLookup = remove ? remove.reduce(r, {}) : {};
  /**
   * @type {Array<string>} attrsList
   */
  const attrsList = add ? defaultAttrs.concat(add) : defaultAttrs;
  const supported = attrsList
    .filter((item) => !removeLookup[item])
    .reduce(r, {});

  return Object.keys(attrs).reduce(
    /**
     * @param {object} acc
     * @param {string} key
     */
    (acc, key) => {
      if (supported[key]) {
        return {
          ...acc,
          [key]: attrs[key],
        };
      } else {
        return acc;
      }
    },
    {}
  );
};

/**
 * Process attrs.dataSet
 * @param {{[s: string]: string}} attrs
 */
export const processDataset = (attrs) =>
  attrs.dataSet
    ? Object.keys(attrs.dataSet).reduce(
        (acc, key) => ({
          ...acc,
          [`data-${key}`]: attrs.dataSet[key],
        }),
        {}
      )
    : undefined;

/**
 *
 * @param {object|function} attrs
 * @returns {object}
 */
export const unpackAttrs = (attrs) =>
  typeof attrs === "function" ? attrs() : attrs;

/**
 *
 * @param {{[s: string]: string}} classes
 * @returns {{[s: string]: string}}
 */
const sizeClasses = (classes) => ({
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large,
  fab: classes.fab,
});

/**
 *
 * @param {{[s: string]: string}} classes
 * @param {string} [size]
 * @returns {object}
 */
export const classForSize = (classes, size = "regular") =>
  sizeClasses(classes)[size];
