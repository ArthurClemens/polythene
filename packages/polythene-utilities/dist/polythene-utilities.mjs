import { isServer, emit, isClient } from 'polythene-core';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var addWebFont = function addWebFont(vendor, config) {
  if (isServer) return;

  if (!window.WebFontConfig) {
    var emitEvent = function emitEvent(_ref) {
      var name = _ref.name,
          familyName = _ref.familyName,
          fvd = _ref.fvd;
      return emit("webfontloader", {
        name: name,
        familyName: familyName,
        fvd: fvd,
        vendor: vendor,
        config: config
      });
    };

    window.WebFontConfig = {
      loading: function loading() {
        return emitEvent({
          name: "loading"
        });
      },
      active: function active() {
        return emitEvent({
          name: "active"
        });
      },
      inactive: function inactive() {
        return emitEvent({
          name: "inactive"
        });
      },
      fontloading: function fontloading(familyName, fvd) {
        return emitEvent({
          name: "fontloading",
          familyName: familyName,
          fvd: fvd
        });
      },
      fontactive: function fontactive(familyName, fvd) {
        return emitEvent({
          name: "fontactive",
          familyName: familyName,
          fvd: fvd
        });
      },
      fontinactive: function fontinactive(familyName, fvd) {
        return emitEvent({
          name: "fontinactive",
          familyName: familyName,
          fvd: fvd
        });
      }
    };

    (function () {
      var wf = document.createElement("script");
      wf.src = (document.location.protocol === "https:" ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
      wf.type = "text/javascript";
      wf.async = "true";
      var s = document.getElementsByTagName("script")[0];

      if (s) {
        s.parentNode.insertBefore(wf, s);
      }
    })();
  }

  var vendorCfg = window.WebFontConfig[vendor] || {};

  if (config) {
    _extends(vendorCfg, config);
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

/*
 Animated scroll to a position.
 Derived from https://github.com/madebysource/animated-scrollto
 Adapted to Mithril and rewritten to es6.
*/
var scrollTo = function scrollTo(opts) {
  if (isServer) {
    return;
  }

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
var requestAnimFrame = isServer ? function () {} : function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  };
}();

var Timer = function Timer() {
  var timerId, startTime, remaining, cb;

  var stop = function stop() {
    if (isClient) {
      window.clearTimeout(timerId);
    }
  };

  var pause = function pause() {
    return stop(), remaining -= new Date() - startTime;
  };

  var startTimer = function startTimer() {
    if (isClient) {
      stop();
      startTime = new Date();
      timerId = window.setTimeout(cb, remaining);
    }
  };

  var start = function start(callback, duration) {
    return cb = callback, remaining = duration * 1000, startTimer();
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

export { addWebFont, easing, scrollTo, Timer };
