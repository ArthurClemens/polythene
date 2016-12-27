export const isTouch = (("ontouchstart" in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));

export const touchStartEvent = "ontouchstart" in window ? "touchstart" : "mousedown";

export const touchEndEvent = "ontouchend" in window ? "touchend" : "mouseup";

document.querySelector("html").classList.add(isTouch ? "pe-touch" : "pe-no-touch");

