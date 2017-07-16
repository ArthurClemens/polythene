import { isClient, isServer } from 'polythene-core';
import { flex, styler } from 'polythene-core-css';

if (isClient && !window.WebFontConfig) {
  window.WebFontConfig = {};
  (function () {
    var wf = document.createElement("script");
    wf.src = (document.location.protocol === "https:" ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
    wf.type = "text/javascript";
    wf.async = "true";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(wf, s);
  })();
}

var addWebFont = function addWebFont(vendor, family, key) {
  if (isServer) return;
  var vendorCfg = window.WebFontConfig[vendor] || {};
  vendorCfg.families = vendorCfg.families || [];
  vendorCfg.families.push(family);
  if (key) {
    vendorCfg.key = key;
  }
  window.WebFontConfig[vendor] = vendorCfg;
};

/*
https://gist.github.com/gre/1650294
Easing Functions - inspired from http://gizma.com/easing/
Only considering the t value for the range [0, 1] => [0, 1]
*/

var easing = {
  // no easing, no acceleration
  linear: function linear(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function easeInOutCubic(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};

var flex$1 = [{
  ".layout, .layout.horizontal": flex.layout,
  ".layout.horizontal.inline, .layout.vertical.inline": flex.layoutInline,
  ".layout.horizontal": flex.layoutHorizontal,
  ".layout.horizontal.reverse": flex.layoutHorizontalReverse,
  ".layout.vertical": flex.layoutVertical,
  ".layout.vertical.reverse": flex.layoutVerticalReverse,
  ".layout.wrap": flex.layoutWrap,
  ".layout.wrap.reverse": flex.layoutWrapReverse,
  ".flex": flex.flex(1),
  ".span.flex": { "display": "block" }, // for IE 10
  ".flex.auto-vertical": flex.flexAutoVertical,
  ".flex.auto": flex.flexAuto,
  ".flex.none": flex.flexIndex("none"),
  ".flex.one": flex.flexIndex(1),
  ".flex.two": flex.flexIndex(2),
  ".flex.three": flex.flexIndex(3),
  ".flex.four": flex.flexIndex(4),
  ".flex.five": flex.flexIndex(5),
  ".flex.six": flex.flexIndex(6),
  ".flex.seven": flex.flexIndex(7),
  ".flex.eight": flex.flexIndex(8),
  ".flex.nine": flex.flexIndex(9),
  ".flex.ten": flex.flexIndex(10),
  ".flex.eleven": flex.flexIndex(11),
  ".flex.twelve": flex.flexIndex(12),

  // alignment in cross axis
  ".layout.start": flex.layoutStart,
  ".layout.center, .layout.center-center": flex.layoutCenter,
  ".layout.end": flex.layoutEnd,

  // alignment in main axis
  ".layout.start-justified": flex.layoutStartJustified,
  ".layout.center-justified, .layout.center-center": flex.layoutCenterJustified,
  ".layout.end-justified": flex.layoutEndJustified,
  ".layout.around-justified": flex.layoutAroundJustified,
  ".layout.justified": flex.layoutJustified,

  // self alignment
  ".self-start": flex.selfStart,
  ".self-center": flex.selfCenter,
  ".self-end": flex.selfEnd,
  ".self-stretch": flex.selfStretch
}];

var commonStyle = [{
  ".pe-block": {
    display: "block"
  },

  ".pe-inline-block": {
    display: "inline-block"
  },

  // ie support for hidden
  ".pe-hidden": {
    display: "none !important"
  },

  ".pe-relative": {
    position: "relative"
  },

  ".pe-absolute": {
    position: "absolute"
  },

  ".pe-fit": {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },

  ".pe-fullbleed": {
    margin: 0,
    height: "100vh"
  }
}];

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var layoutStyles = _extends({}, flex$1, commonStyle);

var addLayoutStyles = function addLayoutStyles() {
  return styler.add("pe-layout", flex$1, commonStyle);
};

/*
 Animated scroll to a position.
 Derived from https://github.com/madebysource/animated-scrollto
 Adapted to Mithril and rewritten to es6.
*/

var scrollTo = function scrollTo(opts) {
  var element = opts.element;
  var which = opts.direction === "horizontal" ? "scrollLeft" : "scrollTop";
  var to = opts.to;
  var duration = opts.duration * 1000;
  var easingFn = opts.easing || easing.easeInOutCubic;
  var start = element[which];
  var change = to - start;
  var animationStart = new Date().getTime();
  var animating = true;
  return new Promise(function (resolve) {
    var animateScroll = function animateScroll() {
      if (!animating) {
        return;
      }
      requestAnimFrame(animateScroll);
      var now = new Date().getTime();
      var percentage = (now - animationStart) / duration;
      var val = start + change * easingFn(percentage);
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

var requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  };
}();

var Timer = function Timer() {
  var timerId = void 0,
      startTime = void 0,
      remaining = void 0,
      cb = void 0;

  var stop = function stop() {
    return window.clearTimeout(timerId);
  };

  var pause = function pause() {
    return stop(), remaining -= new Date() - startTime;
  };

  var startTimer = function startTimer() {
    return stop(), startTime = new Date(), timerId = window.setTimeout(cb, remaining);
  };

  var start = function start(callback, delaySeconds) {
    return cb = callback, remaining = delaySeconds * 1000, startTimer();
  };

  var resume = function resume() {
    return startTimer();
  };

  return {
    start: start,
    pause: pause,
    resume: resume,
    stop: stop
  };
};

export { addWebFont, easing, layoutStyles, addLayoutStyles, scrollTo, Timer };
