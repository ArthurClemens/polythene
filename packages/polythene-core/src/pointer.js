import { isClient, isServer } from "./iso";

export const isTouch = isServer
  ? false
  : "ontouchstart" in document.documentElement;

export const pointerStartEvent = isTouch
  ? ["touchstart", "click"]
  : ["click"];

export const pointerEndEvent = isTouch
  ? ["click", "mouseup"]
  : ["mouseup"];

export const pointerStartMoveEvent = isTouch
  ? ["touchstart", "mousedown"]
  : ["mousedown"];

export const pointerMoveEvent = isTouch
  ? ["touchmove", "mousemove"]
  : ["mousemove"];

export const pointerEndMoveEvent = isTouch
  ? ["touchend", "mouseup"]
  : ["mouseup"];

if (isClient) {
  document.querySelector("html").classList.add(isTouch ? "pe-touch" : "pe-no-touch");
}
