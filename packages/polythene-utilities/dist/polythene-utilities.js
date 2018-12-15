(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['polythene-core']));
}(this, (function (exports,polytheneCore) { 'use strict';

  const addWebFont = (vendor, config) => {
    if (polytheneCore.isServer) return;

    if (!window.WebFontConfig) {
      const emitEvent = ({
        name,
        familyName,
        fvd
      }) => polytheneCore.emit("webfontloader", {
        name,
        familyName,
        fvd,
        vendor,
        config
      });

      window.WebFontConfig = {
        loading: () => emitEvent({
          name: "loading"
        }),
        active: () => emitEvent({
          name: "active"
        }),
        inactive: () => emitEvent({
          name: "inactive"
        }),
        fontloading: (familyName, fvd) => emitEvent({
          name: "fontloading",
          familyName,
          fvd
        }),
        fontactive: (familyName, fvd) => emitEvent({
          name: "fontactive",
          familyName,
          fvd
        }),
        fontinactive: (familyName, fvd) => emitEvent({
          name: "fontinactive",
          familyName,
          fvd
        })
      };

      (function () {
        const wf = document.createElement("script");
        wf.src = (document.location.protocol === "https:" ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
        wf.type = "text/javascript";
        wf.async = "true";
        const s = document.getElementsByTagName("script")[0];

        if (s) {
          s.parentNode.insertBefore(wf, s);
        }
      })();
    }

    const vendorCfg = window.WebFontConfig[vendor] || {};

    if (config) {
      Object.assign(vendorCfg, config);
    }

    window.WebFontConfig[vendor] = vendorCfg;
  };

  /*
  https://gist.github.com/gre/1650294
  Easing Functions - inspired from http://gizma.com/easing/
  Only considering the t value for the range [0, 1] => [0, 1]
  */
  const easing = {
    // no easing, no acceleration
    linear: t => t,
    // accelerating from zero velocity
    easeInQuad: t => t * t,
    // decelerating to zero velocity
    easeOutQuad: t => t * (2 - t),
    // acceleration until halfway, then deceleration
    easeInOutQuad: t => t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    // accelerating from zero velocity
    easeInCubic: t => t * t * t,
    // decelerating to zero velocity
    easeOutCubic: t => --t * t * t + 1,
    // acceleration until halfway, then deceleration
    easeInOutCubic: t => t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
    // accelerating from zero velocity
    easeInQuart: t => t * t * t * t,
    // decelerating to zero velocity
    easeOutQuart: t => 1 - --t * t * t * t,
    // acceleration until halfway, then deceleration
    easeInOutQuart: t => t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
    // accelerating from zero velocity
    easeInQuint: t => t * t * t * t * t,
    // decelerating to zero velocity
    easeOutQuint: t => 1 + --t * t * t * t * t,
    // acceleration until halfway, then deceleration
    easeInOutQuint: t => t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
  };

  /*
   Animated scroll to a position.
   Derived from https://github.com/madebysource/animated-scrollto
   Adapted to Mithril and rewritten to es6.
  */
  const scrollTo = opts => {
    if (polytheneCore.isServer) {
      return;
    }

    const element = opts.element;
    const which = opts.direction === "horizontal" ? "scrollLeft" : "scrollTop";
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
        const percentage = (now - animationStart) / duration;
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
  const requestAnimFrame = polytheneCore.isServer ? () => {} : (() => window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || (callback => window.setTimeout(callback, 1000 / 60)))();

  const Timer = function () {
    let timerId, startTime, remaining, cb;

    const stop = () => {
      if (polytheneCore.isClient) {
        window.clearTimeout(timerId);
      }
    };

    const pause = () => (stop(), remaining -= new Date() - startTime);

    const startTimer = () => {
      if (polytheneCore.isClient) {
        stop();
        startTime = new Date();
        timerId = window.setTimeout(cb, remaining);
      }
    };

    const start = (callback, delaySeconds) => (cb = callback, remaining = delaySeconds * 1000, startTimer());

    const resume = () => startTimer();

    return {
      start,
      pause,
      resume,
      stop
    };
  };

  exports.addWebFont = addWebFont;
  exports.easing = easing;
  exports.scrollTo = scrollTo;
  exports.Timer = Timer;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-utilities.js.map
