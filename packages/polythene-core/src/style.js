// @ts-check

/**
 * 
 * @param {object} params
 * @param {object} params.element
 * @param {string} [params.selector]
 * @param {string} [params.pseudoSelector]
 * @param {string} params.prop
 * @returns {object|undefined}
 */
export const getStyle = ({ element, selector, pseudoSelector, prop }) => {
  const el = selector
    ? element.querySelector(selector)
    : element;
  if (!el) {
    return undefined;
  }
  if (el.currentStyle) {
    return el.currentStyle;
  }
  if (window.getComputedStyle) {
    const defaultView = document.defaultView;
    if (defaultView) {
      const style = defaultView.getComputedStyle(el, pseudoSelector);
      if (style) {
        return style.getPropertyValue(prop);
      }
    }
  }
  return undefined;
};

/**
 * 
 * @param {object} params
 * @param {object} params.element
 * @param {string} [params.selector]
 * @param {string} [params.pseudoSelector]
 * @param {string} params.prop
 * @param {string} [params.equals]
 * @param {string} [params.contains]
 * @returns {boolean}
 */
export const stylePropCompare = ({ element, selector, pseudoSelector, prop, equals, contains }) => {
  const el = selector
    ? element.querySelector(selector)
    : element;
  if (!el) {
    return false;
  }
  const defaultView = document.defaultView;
  if (defaultView) {
    if (equals !== undefined) {
      return equals === defaultView.getComputedStyle(el, pseudoSelector).getPropertyValue(prop);
    }
    if (contains !== undefined) {
      return defaultView.getComputedStyle(el, pseudoSelector).getPropertyValue(prop).indexOf(contains) !== -1;
    }
  }
  return false;
};

/**
 * 
 * @param {object} params
 * @param {object} params.element
 * @param {string} params.selector
 * @returns {boolean}
 */
export const isRTL = ({ element = document, selector }) => 
  stylePropCompare({ element, selector, prop: "direction", equals: "rtl" });

/**
 * 
 * @param {string} durationStr 
 * @returns {number}
 */
export const styleDurationToMs = durationStr => {
  const parsed = parseFloat(durationStr) * (durationStr.indexOf("ms") === -1 ? 1000 : 1);
  return isNaN(parsed)
    ? 0
    : parsed;
};