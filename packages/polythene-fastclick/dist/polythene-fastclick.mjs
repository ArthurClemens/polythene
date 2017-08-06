import FastClick from 'fastclick';
import { isClient, isTouch, subscribe } from 'polythene-core';

var THROTTLE_DELAY = 100;
var REINIT_DELAY = THROTTLE_DELAY + 50;
var layer = isClient ? document.body : { body: {} };

var fastClick = void 0;
var timeoutId = void 0;
var enabled = void 0;

var add = function add() {
  if (!enabled) {
    fastClick = new FastClick(layer);
    enabled = true;
  }
};

var remove = function remove() {
  if (enabled) {
    fastClick.destroy();
    enabled = false;
  }
};

var handleScroll = function handleScroll() {
  remove();
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(add, REINIT_DELAY);
};

var addFastClick = function addFastClick() {
  if (isTouch && isClient) {
    subscribe("scroll", handleScroll, THROTTLE_DELAY);
    add();
  }
};

export { addFastClick };
