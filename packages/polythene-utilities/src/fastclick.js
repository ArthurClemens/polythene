import FastClick from "fastclick";
import { isTouch, subscribe } from "polythene-core-essentials";

const THROTTLE_DELAY = 100;
const REINIT_DELAY = THROTTLE_DELAY + 50;
const layer = document.body;

let fastClick;
let timeoutId;
let enabled;

const add = () => {
  if (!enabled) {
    fastClick = new FastClick(layer);
    enabled = true;
  }
};

const remove = () => {
  if (enabled) {
    fastClick.destroy();
    enabled = false;
  }
};

const handleScroll = () => {
  remove();
  if (timeoutId) {
    window.clearTimeout(timeoutId);
  }
  timeoutId = window.setTimeout(add, REINIT_DELAY);
};

export const addFastClick = () => {
  if (isTouch) {
    subscribe("scroll", handleScroll, THROTTLE_DELAY);
    add();
  }
};
