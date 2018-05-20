
export const getStyle = ({ element = document, selector, prop }) => {
  const el = selector
    ? element.querySelector(selector)
    : element;
  if (!el) {
    return;
  }
  return el.currentStyle
    ? el.currentStyle[prop]
    : window.getComputedStyle
      ? document.defaultView.getComputedStyle(el, null).getPropertyValue(prop)
      : null;
};

export const isRTL = ({ element = document, selector }) => 
  getStyle({ element, selector, prop: "direction" }) === "rtl";

export const styleDurationToMs = durationStr => {
  const parsed = parseFloat(durationStr) * (durationStr.indexOf("ms") === -1 ? 1000 : 1);
  return isNaN(parsed)
    ? 0
    : parsed;
};