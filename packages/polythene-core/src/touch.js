export const isTouch = (("ontouchstart" in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));

export const touchStartEvent = isTouch ? "click" : "mousedown";

export const touchEndEvent = isTouch ? "click" : "mouseup";

document.querySelector("html").classList.add(isTouch ? "pe-touch" : "pe-no-touch");

