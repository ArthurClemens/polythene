/*
 Animated scroll to a position.
 Derived from https://github.com/madebysource/animated-scrollto
 Adapted to Mithril and rewritten to es6.
*/

import { easing } from "./easing";
import { isServer } from "polythene-core";

export const scrollTo = opts => {
  if (isServer) {
    return;
  }
  const element = opts.element;
  const which = (opts.direction === "horizontal") ? "scrollLeft" : "scrollTop";
  const to = opts.to;
  const duration = opts.duration * 1000;
  const easingFn = opts.easing || easing.easeInOutCubic;
  const start = element[which];
  const change = to - start;
  const animationStart = new Date().getTime();
  let animating = true;
  return new Promise(resolve => {
    const animateScroll = () => {
      if (!animating) {
        return;
      }
      requestAnimFrame(animateScroll);
      const now = new Date().getTime();
      const percentage = ((now - animationStart) / duration);
      const val = start + change * easingFn(percentage);
      element[which] = val;
      if (percentage >= 1) {
        element[which] = to;
        animating = false;
        resolve();
      }
    };
    requestAnimFrame(animateScroll);
  });
};

const requestAnimFrame = isServer
  ? () => {}
  : (() =>
    window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || (callback =>
      window.setTimeout(callback, 1000 / 60)
    )
  )();
