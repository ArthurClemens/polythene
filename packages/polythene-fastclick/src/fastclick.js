import FastClick from "fastclick";
import { isTouch, subscribe, isClient } from "polythene-core";

const THROTTLE_DELAY = 100;
const REINIT_DELAY = THROTTLE_DELAY + 50;
const layer = isClient
  ? document.body
  : { body: {} };

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
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(add, REINIT_DELAY);
};

export const addFastClick = () => {
  if (isTouch && isClient) {
    subscribe("scroll", handleScroll, THROTTLE_DELAY);
    add();
  }
};
