
export const getStyle = ({ element = document, selector, prop }) => {
  const el = selector
    ? element.querySelector(selector)
    : element;
  return el.currentStyle
    ? el.currentStyle[prop]
    : window.getComputedStyle
      ? document.defaultView.getComputedStyle(el, null).getPropertyValue(prop)
      : null;
};

export const isRTL = ({ element = document, selector }) => 
  getStyle({ element, selector, prop: "direction" }) === "rtl";