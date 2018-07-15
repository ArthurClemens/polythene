
export const getStyle = ({ element, selector, pseudoSelector, prop }) => {
  const el = selector
    ? element.querySelector(selector)
    : element;
  if (!el) {
    return;
  }
  return el.currentStyle
    ? el.currentStyle[prop]
    : window.getComputedStyle
      ? document.defaultView.getComputedStyle(el, pseudoSelector).getPropertyValue(prop)
      : null;
};

export const stylePropCompare = ({ element, selector, pseudoSelector, prop, equals, contains }) => {
  const el = selector
    ? element.querySelector(selector)
    : element;
  if (!el) {
    return false;
  }
  if (equals !== undefined) {
    return equals === document.defaultView.getComputedStyle(el, pseudoSelector).getPropertyValue(prop);
  }
  if (contains !== undefined) {
    return document.defaultView.getComputedStyle(el, pseudoSelector).getPropertyValue(prop).indexOf(contains) !== -1;
  }
};

export const isRTL = ({ element = document, selector }) => 
  stylePropCompare({ element, selector, prop: "direction", equals: "rtl" });

export const styleDurationToMs = durationStr => {
  const parsed = parseFloat(durationStr) * (durationStr.indexOf("ms") === -1 ? 1000 : 1);
  return isNaN(parsed)
    ? 0
    : parsed;
};