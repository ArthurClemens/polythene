// @ts-check

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

export const pointerStartDownEvent = isTouch
  ? ["touchstart", "mousedown"]
  : ["mousedown"];

export const pointerMoveEvent = isTouch
  ? ["touchmove", "mousemove"]
  : ["mousemove"];

export const pointerEndDownEvent = isTouch
  ? ["touchend", "mouseup"]
  : ["mouseup"];

if (isClient) {
  const htmlElement = document.querySelector("html");
  if (htmlElement) {
    htmlElement.classList.add(isTouch ? "pe-touch" : "pe-no-touch");
  }
}
