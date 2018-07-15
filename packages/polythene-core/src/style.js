
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

export const stylePropEquals = ({ element, selector, pseudoSelector, prop, expected }) => {
  const el = selector
    ? element.querySelector(selector)
    : element;
  if (!el) {
    return false;
  }
  return expected === document.defaultView.getComputedStyle(el, pseudoSelector).getPropertyValue(prop);
};

export const isRTL = ({ element = document, selector }) => 
  stylePropEquals({ element, selector, prop: "direction", expected: "rtl" });

export const styleDurationToMs = durationStr => {
  const parsed = parseFloat(durationStr) * (durationStr.indexOf("ms") === -1 ? 1000 : 1);
  return isNaN(parsed)
    ? 0
    : parsed;
};