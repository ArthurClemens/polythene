import { isClient, isServer } from "./iso";

export const isTouch = isServer
  ? false
  : "ontouchstart" in document.documentElement;

export const pointerStartEvent = isTouch
  ? "click"
  : "mousedown";

export const pointerEndEvent = isTouch
  ? "click"
  : "mouseup";

export const pointerStartMoveEvent = isTouch
  ? "touchstart"
  : "mousedown";

export const pointerMoveEvent = isTouch
  ? "touchmove"
  : "mousemove";

export const pointerEndMoveEvent = isTouch
  ? "touchend"
  : "mouseup";

if (isClient) {
  document.querySelector("html").classList.add(isTouch ? "pe-touch" : "pe-no-touch");
}
