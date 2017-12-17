import FastClick from 'fastclick';
import { isClient, isTouch } from 'polythene-core';

var layer = isClient ? document.scrollingElement : { body: {} };

var addFastClick = function addFastClick() {
  if (isTouch && isClient) {
    new FastClick(layer);
  }
};

export { addFastClick };
