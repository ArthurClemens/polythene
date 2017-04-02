
export const isTouch = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

export const touchStartEvent = isTouch ? "click" : "mousedown";

export const touchEndEvent = isTouch ? "click" : "mouseup";

export const moveEvent = window.PointerEvent
  ? "pointermove"
  : ("ontouchmove" in window) || (window.DocumentTouch && document instanceof window.DocumentTouch)
    ? "touchmove"
    : "mousemove";

export const endEvent = window.PointerEvent
  ? "pointerup"
  : ("ontouchend" in window) || (window.DocumentTouch && document instanceof window.DocumentTouch)
    ? "touchend"
    : "mouseup";


document.querySelector("html").classList.add(isTouch ? "pe-touch" : "pe-no-touch");

