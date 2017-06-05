import { isClient, isServer } from 'polythene-core';

var isTouch = isServer ? false : 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

if (isClient) {
  document.querySelector('html').classList.add(isTouch ? 'pe-touch' : 'pe-no-touch');
}

export default {
  isTouch: isTouch
};