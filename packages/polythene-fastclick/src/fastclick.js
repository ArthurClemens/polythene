import FastClick from "fastclick";
import { isTouch, isClient } from "polythene-core";

const layer = isClient
  ? document.scrollingElement
  : { body: {} };

export const addFastClick = () => {
  if (isTouch && isClient) {
    new FastClick(layer);
  }
};
