// @ts-check

/**
 * @typedef {(selector: string, vars: object, customVars?: object) => Array<object>} StyleFn
 * @typedef {{[s: string]: StyleFn}} StyleCollection
 */
 

/**
 * Wraps an object with a selector.
 * @param {string} selector 
 * @param {object} o 
 * @returns {object}
 */
export const sel = (selector, o) => ({
  [selector]: o
});

/**
 * Creates a right-to-left selector.
 * @param {string} selector
 * @returns {string}
 */
export const selectorRTL = selector => 
  `*[dir=rtl] ${selector}, .pe-rtl ${selector}`;

/**
 * Creates a rgba CSS color string.
 * @param {string} colorStr 
 * @param {number} opacity 
 * @returns {string}
 */
export const rgba = (colorStr, opacity = 1) =>
  `rgba(${colorStr}, ${opacity})`;

/**
 * @param {object} params
 * @param {string} [params.selector]
 * @param {string} [params.scopedSelector]
 * @param {StyleCollection} [params.varFns]
 * @param {StyleCollection} [params.customVarFns]
 * @param {StyleFn} [params.superStyle]
 * @param {(_:any) => StyleCollection} [params.varMixin]
 * @param {StyleCollection} [params.componentVars]
 * @param {StyleCollection} [params.customVars]
 * @returns {Array<object>}
 */
const createStyle = ({ varFns, customVarFns, superStyle, varMixin, selector, scopedSelector, componentVars={}, customVars }) => {
  const allVars = {...componentVars, ...customVars};
  const currentVars = customVars
    ? customVars
    : allVars;
  const {
    general_styles, // eslint-disable-line no-unused-vars
    ...otherVars
  } = componentVars;
  const baseLayout = superStyle !== undefined
    ? customVars !== undefined
      ? superStyle(selector, componentVars, customVars)
      : superStyle(selector, otherVars)
    : [];
  const fns = {
    ...(!!customVars && customVarFns),
    ...varFns
  };
  return baseLayout
    .concat(Object.keys(varMixin(currentVars))
      .map(v => (
        fns && fns[v] !== undefined 
          ? fns[v](scopedSelector, allVars)
          : null
      ))
      .filter(s => s)
    );
};

/**
 * 
 * @param {object} params
 * @param {StyleCollection} [params.varFns]
 * @param {StyleCollection} [params.customVarFns]
 * @param {StyleFn} [params.superLayout]
 * @param {(_:any) => StyleCollection} [params.varMixin]
 * @returns {StyleFn}
 */
export const createLayout = ({ varFns, customVarFns, superLayout, varMixin = o => o }) =>
  /**
   * @param {string} selector
   * @param {object} componentVars
   * @param {object} [customVars]
   * @returns {Array<object>}
   */
  (selector, componentVars, customVars) =>
    createStyle({ varFns, customVarFns, superStyle: superLayout, varMixin, selector, scopedSelector: selector, componentVars, customVars });

/**
 * 
 * @param {object} params
 * @param {string} [params.selector]
 * @param {string} [params.scopedSelector]
 * @param {object} [params.componentVars]
 * @param {object} [params.customVars]  
 * @param {StyleFn} [params.superColor]
 * @param {StyleCollection} [params.varFns]
 * @param {(_:any) => StyleCollection} [params.varMixin]
 * @returns {Array<object>}
 */
export const createColorStyle = ({ selector, scopedSelector, componentVars, customVars, varFns, superColor, varMixin }) =>
  createStyle({ varFns, superStyle: superColor, varMixin, selector, scopedSelector, componentVars, customVars });

/**
 * 
 * @param {object} params 
 * @param {Array<string>} params.scopes
 * @param {string} params.selector
 * @param {boolean} params.isNoTouch
* @returns {string}
 */
const appendPseudoClass = ({ scopes, selector, isNoTouch }) =>
  isNoTouch
    ? scopes.map(s => s + selector + ":hover").join(",")
    : scopes.map(s => s + selector).join(",");

/**
 * 
 * @param {object} params 
 * @param {Array<string>} params.scopes
 * @param {string} params.selector
 * @param {boolean} [params.isNoTouch]
 * @returns {string}
 */
const createScopedSelector = ({ scopes, selector, isNoTouch=false }) =>
  selector.split(/\s*,\s*/).map(s => (
    appendPseudoClass({ scopes, selector: s, isNoTouch })
  )).join("");

/**
 * @typedef {object} ColorScopeObject
 * @property {Array<string>} scopes
 * @property {string} varFnName
 * @property {boolean} isNoTouch
 */

/**
 * @type {Array<ColorScopeObject>} colorScopes
 */
const colorScopes = [
  {
    // has/inside dark tone
    scopes: [".pe-dark-tone", ".pe-dark-tone "],
    varFnName: "darkTintFns",
    isNoTouch: false
  },
  {
    // normal, has/inside light tone
    scopes: ["", ".pe-light-tone", ".pe-light-tone "],
    varFnName: "lightTintFns",
    isNoTouch: false
  },
  {
    // has/inside dark tone
    scopes: [".pe-no-touch .pe-dark-tone "],
    varFnName: "darkTintHoverFns",
    isNoTouch: true
  },
  {
    // normal, has/inside light tone
    scopes: [".pe-no-touch ", ".pe-no-touch .pe-light-tone "],
    varFnName: "lightTintHoverFns",
    isNoTouch: true
  },
];

/**
 * 
 * @param {object} params
 * @param {object} [params.varFns]
 * @param {StyleFn} [params.superColor]
 * @param {(_:any) => StyleCollection} [params.varMixin]
 * @returns {StyleFn}
 */
export const createColor = ({ varFns={}, superColor, varMixin = o => o }) => 
  /**
   * @param {string} selector
   * @param {object} componentVars
   * @param {object} [customVars]
   * @returns {Array<object>}
   */
  (selector, componentVars, customVars) => (
    colorScopes.map(({ scopes, varFnName, isNoTouch }) => 
      createColorStyle({
        selector,
        scopedSelector: createScopedSelector({
          scopes,
          selector,
          isNoTouch
        }),
        componentVars,
        customVars,
        varFns: varFns[varFnName],
        superColor,
        varMixin
      })
    )
  );

/**
 * @param {object} vars 
 * @param {object} behaviorVars
 * @returns {string|undefined} 
 */
const createMarkerValue = (vars, behaviorVars) => {
  const marker = Object.keys(behaviorVars)
    .filter(bvar => vars[bvar] === true)
    .join(".");
  return marker
    ? `"${marker}"`
    : undefined;
};

/**
 * Creates a CSS style from which the key can be read from the `content` property.
 * @param {object} vars 
 * @param {object} behaviorVars 
 * @returns {object}
 */
export const createMarker = (vars, behaviorVars) => {
  if (!vars) {
    console.error("createMarker requires param `vars`"); // eslint-disable-line no-console
  }
  const value = createMarkerValue(vars, behaviorVars);
  return value
    ? ({
      ":before": {
        content: value,
        display: "none",
      },
    })
    : undefined;
};
