import m from 'mithril';

// Theme variables
// How to change these variables for your app - see the README.

var hex = function hex(_hex) {
  var bigint = parseInt(_hex.substring(1), 16);
  var r = bigint >> 16 & 255;
  var g = bigint >> 8 & 255;
  var b = bigint & 255;
  return r + "," + g + "," + b;
};

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + "," + opacity + ")";
};

//const isTablet = window.innerWidth >= 600;
var isDesktop = window.innerWidth >= 1024;

var grid_unit = 4;
var grid_unit_component = 8;

var animation_curve_slow_in_fast_out = "cubic-bezier(.4, 0, .2, 1)";
var animation_curve_slow_in_linear_out = "cubic-bezier(0, 0, .2, 1)";
var animation_curve_linear_in_fast_out = "cubic-bezier(.4, 0, 1, 1)";

var variables = {
  // util functions
  rgba: rgba,
  hex: hex,

  grid_unit: grid_unit,
  grid_unit_component: grid_unit_component,
  grid_unit_menu: 56,
  grid_unit_icon_button: 6 * grid_unit_component, // 48

  // common sizes
  unit_block_border_radius: 2,
  unit_item_border_radius: 2,
  unit_indent: 72,
  unit_side_padding: isDesktop ? 24 : 16,

  // buttons
  unit_touch_height: 48,
  unit_icon_size_small: 2 * grid_unit_component, // 16
  unit_icon_size: 3 * grid_unit_component, // 24
  unit_icon_size_medium: 4 * grid_unit_component, // 32
  unit_icon_size_large: 5 * grid_unit_component, // 40

  // screen dimensions
  unit_screen_size_extra_large: 1280,
  unit_screen_size_large: 960,
  unit_screen_size_medium: 480,
  unit_screen_size_small: 320,

  // transitions
  animation_duration: ".18s",
  animation_curve_slow_in_fast_out: animation_curve_slow_in_fast_out,
  animation_curve_slow_in_linear_out: animation_curve_slow_in_linear_out,
  animation_curve_linear_in_fast_out: animation_curve_linear_in_fast_out,
  animation_curve_default: "ease-out",

  // font
  font_weight_light: 300,
  font_weight_normal: 400,
  font_weight_medium: 500,
  font_weight_bold: 700,
  font_size_title: 20,
  line_height: 1.3,

  // base colors
  color_primary: "33, 150, 243", // blue 500
  color_primary_active: "30, 136, 229", // blue 600
  color_primary_dark: "25, 118, 210", // blue 700
  color_primary_faded: "100, 181, 249", // blue 300
  color_primary_foreground: "255, 255, 255",

  color_light_background: "255, 255, 255",
  color_light_foreground: "0, 0, 0",
  color_dark_background: "34, 34, 34",
  color_dark_foreground: "255, 255, 255",

  // blends
  blend_light_text_primary: .87,
  blend_light_text_regular: .73,
  blend_light_text_secondary: .54,
  blend_light_text_tertiary: .40,
  blend_light_text_disabled: .26,
  blend_light_border_light: .11,
  blend_light_background_active: .14,
  blend_light_background_hover: .06,
  blend_light_background_hover_medium: .12, // for the lighter tinted icon buttons
  blend_light_background_disabled: .09,
  blend_light_overlay_background: .3,

  blend_dark_text_primary: 1,
  blend_dark_text_regular: .87,
  blend_dark_text_secondary: .70,
  blend_dark_text_tertiary: .40,
  blend_dark_text_disabled: .26,
  blend_dark_border_light: .10,
  blend_dark_background_active: .14,
  blend_dark_background_hover: .08,
  blend_dark_background_hoverMedium: .12, // for the lighter tinted icon buttons
  blend_dark_background_disabled: .12,
  blend_dark_overlay_background: .3,

  // css vendor prefixes
  prefixes_animation: ["o", "moz", "webkit"],
  prefixes_appearance: ["o", "moz", "ms", "webkit"],
  prefixes_background_size: ["o", "moz", "webkit"],
  prefixes_box_shadow: ["moz", "webkit"],
  prefixes_keyframes: ["o", "moz", "webkit"],
  prefixes_transform: ["o", "moz", "ms", "webkit"],
  prefixes_transition: ["o", "moz", "webkit"],
  prefixes_user_select: ["moz", "ms", "webkit"],

  // breakpoints
  breakpoint_small_handset_portrait: 0,
  breakpoint_medium_handset_portrait: 360,
  breakpoint_large_handset_portrait: 400,
  breakpoint_small_tablet_portrait: 600,
  breakpoint_large_tablet_portrait: 720,
  // landscape
  breakpoint_small_handset_landscape: 480,
  breakpoint_medium_handset_landscape: 600,
  breakpoint_large_handset_landscape: 720,

  // environment
  env_tablet: window.innerWidth >= 600,
  env_desktop: window.innerWidth >= 1024,

  // z-index
  z_menu: 1,
  z_header_container: 2000,
  z_fixed_header_container: 3000,
  z_notification: 4000,
  z_dialog: 5000
};

var isTouch = "ontouchstart" in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

var touchStartEvent = isTouch ? "click" : "mousedown";

var touchEndEvent = isTouch ? "click" : "mouseup";

var moveEvent = window.PointerEvent ? "pointermove" : "ontouchmove" in window || window.DocumentTouch && document instanceof window.DocumentTouch ? "touchmove" : "mousemove";

var endEvent = window.PointerEvent ? "pointerup" : "ontouchend" in window || window.DocumentTouch && document instanceof window.DocumentTouch ? "touchend" : "mouseup";

document.querySelector("html").classList.add(isTouch ? "pe-touch" : "pe-no-touch");

var listeners = {};

// https://gist.github.com/Eartz/fe651f2fadcc11444549
var throttle = function throttle(func) {
  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;

  var wait = false;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      func.apply(context, args);
    };
    if (!wait) {
      later();
      wait = true;
      setTimeout(function () {
        wait = false;
      }, s);
    }
  };
};

var subscribe = function subscribe(eventName, listener, delay) {
  listeners[eventName] = listeners[eventName] || [];
  listeners[eventName].push(delay ? throttle(listener, delay) : listener);
};

var unsubscribe = function unsubscribe(eventName, listener) {
  if (!listeners[eventName]) {
    return;
  }
  var index = listeners[eventName].indexOf(listener);
  if (index > -1) {
    listeners[eventName].splice(index, 1);
  }
};

var emit = function emit(eventName, event) {
  if (!listeners[eventName]) {
    return;
  }
  listeners[eventName].forEach(function (listener) {
    listener(event);
  });
};

window.addEventListener("resize", function (e) {
  return emit("resize", e);
});
window.addEventListener("scroll", function (e) {
  return emit("scroll", e);
});
window.addEventListener("keydown", function (e) {
  return emit("keydown", e);
});
window.addEventListener(touchEndEvent, function (e) {
  return emit(touchEndEvent, e);
});

var evts = {
  "animation": "animationend",
  "OAnimation": "oAnimationEnd",
  "MozAnimation": "animationend",
  "WebkitAnimation": "webkitAnimationEnd"
};

var element = function element() {
  return document.createElement("fakeelement");
};

var animationEndEvent = function animationEndEvent() {
  var el = element();
  for (var a in evts) {
    if (el.style[a] !== undefined) {
      return evts[a];
    }
  }
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
Helper module to manage multiple items of the same component type.
*/
/*
mOpts:
- instance
- defaultId
- element
- placeholder
- bodyShowClass
*/
var multiple = function multiple(mOpts) {

  var items = [];

  var itemIndex = function itemIndex(id) {
    var item = findItem(id);
    return items.indexOf(item);
  };

  var removeItem = function removeItem(id) {
    var index = itemIndex(id);
    if (index !== -1) {
      items.splice(index, 1);
    }
  };

  var replaceItem = function replaceItem(id, newItem) {
    var index = itemIndex(id);
    if (index !== -1) {
      items[index] = newItem;
    }
  };

  var findItem = function findItem(id) {
    // traditional for loop for IE10
    for (var i = 0; i < items.length; i++) {
      if (items[i].instanceId === id) {
        return items[i];
      }
    }
  };

  var next = function next() {
    if (items.length) {
      items[0].show = true;
      m.redraw();
    }
  };

  var _remove = function _remove(instanceId) {
    if (mOpts.queue) {
      items.shift();
      // add time to remove the previous instance before drawing the next one
      setTimeout(next, 0);
    } else {
      removeItem(instanceId);
    }
  };

  var setPauseState = function setPauseState(pause, instanceId) {
    var item = findItem(instanceId);
    if (item) {
      item.pause = pause;
      item.unpause = !pause;
    }
  };

  var makeItem = function makeItem(itemOpts, instanceId) {
    var resolveShow = void 0;
    var didShow = function didShow() {
      var opts = typeof itemOpts === "function" ? itemOpts() : itemOpts;
      if (opts.didShow) {
        opts.didShow(instanceId);
      }
      return resolveShow(instanceId);
    };
    var showPromise = new Promise(function (resolve) {
      return resolveShow = resolve;
    });

    var resolveHide = void 0;
    var didHide = function didHide() {
      var opts = typeof itemOpts === "function" ? itemOpts() : itemOpts;
      if (opts.didHide) {
        opts.didHide(instanceId);
      }
      if (mOpts.queue) {
        _remove(instanceId);
      }
      return resolveHide(instanceId);
    };

    var hidePromise = new Promise(function (resolve) {
      return resolveHide = resolve;
    });

    return _extends({}, mOpts, {
      instanceId: instanceId,
      opts: itemOpts,
      show: mOpts.queue ? false : true,
      showPromise: showPromise,
      hidePromise: hidePromise,
      didShow: didShow,
      didHide: didHide
    });
  };

  return {

    count: function count() {
      return items.length;
    },

    clear: function clear() {
      return items.length = 0;
    },

    show: function show(opts) {
      var instanceId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : mOpts.defaultId;

      var item = void 0;
      if (mOpts.queue) {
        item = makeItem(opts, instanceId);
        items.push(item);
        if (items.length === 1) {
          next();
        }
      } else {
        var storedItem = findItem(instanceId);
        item = makeItem(opts, instanceId);
        if (!storedItem) {
          items.push(item);
        } else {
          replaceItem(instanceId, item);
        }
      }
      return item.showPromise;
    },

    hide: function hide() {
      var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;

      var item = void 0;
      if (mOpts.queue) {
        if (items.length) {
          item = items[0];
        }
      } else {
        item = findItem(instanceId);
      }
      if (item) {
        item.hide = true;
        return item.hidePromise;
      }
      return Promise.resolve(instanceId);
    },

    remove: function remove() {
      var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;
      return _remove(instanceId);
    },

    pause: function pause() {
      var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;
      return setPauseState(true, instanceId);
    },

    unpause: function unpause() {
      var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOpts.defaultId;
      return setPauseState(false, instanceId);
    },

    view: function view() {
      var candidates = items.filter(function (item) {
        return item.show;
      });
      document.body.classList[candidates.length ? "add" : "remove"](mOpts.bodyShowClass);
      return !candidates.length ? m(mOpts.placeholder) // placeholder because we cannot return null
      : m(mOpts.element, candidates.map(function (itemData) {
        return m(mOpts.instance, _extends({}, itemData, {
          transitions: mOpts.transitions,
          key: itemData.key || itemData.instanceId
        }));
      }));
    }
  };
};

/*
Generic show/hide transition module
*/

// defaults
var SHOW_DURATION = .220; // default dialog timing
var HIDE_DURATION = .200; // default dialog timing
var SHOW_DELAY = 0;
var HIDE_DELAY = 0;
var TRANSITION = "both";

// See: transition
var show = function show(opts) {
  return transition(opts, "show");
};

var hide = function hide(opts) {
  return transition(opts, "hide");
};

var getTiming = function getTiming(opts, state, showAttr, hideAttr, defaultShowTiming, defaultHideTiming) {
  var transition = opts.transition || TRANSITION;
  if (transition === "none") {
    return 0;
  } else if (transition === "show" && state === "hide") {
    return 0;
  } else if (transition === "hide" && state === "show") {
    return 0;
  } else {
    // both
    return state === "show" ? opts[showAttr] !== undefined ? opts[showAttr] : defaultShowTiming : opts[hideAttr] !== undefined ? opts[hideAttr] : defaultHideTiming;
  }
};

/*
opts:
- transition
- showDuration
- hideDuration

- state (show, hide)
*/
var getDuration = function getDuration(opts, state) {
  return getTiming(opts, state, "showDuration", "hideDuration", SHOW_DURATION, HIDE_DURATION);
};

/*
opts:
- transition (show, hide, both)
- showDelay
- hideDelay

- state (show, hide)
*/
var getDelay = function getDelay(opts, state) {
  return getTiming(opts, state, "showDelay", "hideDelay", SHOW_DELAY, HIDE_DELAY);
};

/*
opts:
- el
- duration
- delay
- showClass
- beforeShow
- show
- hide
- afterHide
- showDelay
- hideDelay

- state (show, hide)
*/
var transition = function transition(opts, state) {
  var el = opts.el;
  if (!el) {
    return Promise.resolve();
  } else {
    return new Promise(function (resolve) {
      var transitionDuration = getDuration(opts, state) * 1000;
      var delay = getDelay(opts, state) * 1000;
      var style = el.style;

      var beforeTransition = opts.beforeShow && state === "show" ? function () {
        style.transitionDuration = "0ms";
        style.transitionDelay = "0ms";
        opts.beforeShow();
      } : null;

      var applyTransition = function applyTransition() {
        style.transitionDuration = transitionDuration + "ms";
        style.transitionDelay = delay + "ms";
        if (opts.showClass) {
          el.classList[state === "show" ? "add" : "remove"](opts.showClass);
        }
        if (opts.show && typeof opts.show === "function" && state === "show") {
          opts.show();
        }
        if (opts.hide && typeof opts.hide === "function" && state === "hide") {
          opts.hide();
        }
      };

      var applyAfterTransition = function applyAfterTransition() {
        if (opts.afterHide && state === "hide") {
          style.transitionDuration = "0ms";
          style.transitionDelay = "0ms";
          opts.afterHide();
        }
      };

      var doTransition = function doTransition() {
        applyTransition();
        setTimeout(function () {
          return applyAfterTransition(), resolve();
        }, transitionDuration + delay);
      };

      var maybeDelayTransition = function maybeDelayTransition() {
        if (transitionDuration === 0) {
          doTransition();
        } else {
          setTimeout(doTransition, 0);
        }
      };

      if (beforeTransition) {
        beforeTransition();
        setTimeout(maybeDelayTransition, 0);
      } else {
        maybeDelayTransition();
      }
    });
  }
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var r = function r(acc, p) {
  return acc[p] = 1, acc;
};

/* 
Separately handled props:
- class
- element
*/

var defaultAttrs = [
// Mithril
"key", "oninit", "oncreate", "onupdate", "onbeforeremove", "onremove", "onbeforeupdate", "style", "href",
// Polythene
// see also "Separately handled props" above
"id", "tabindex"].reduce(r, {});

var filterSupportedAttributes = function filterSupportedAttributes(attrs) {
  var componentAttrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var supported = _extends$1({}, defaultAttrs, componentAttrs.reduce(r, {}));
  return Object.keys(attrs).reduce(function (acc, key) {
    return supported[key] ? acc[key] = attrs[key] : null, acc;
  }, {});
};

/*
The most simple prop function to emulate m.prop from Mithril 0.2.
*/
var prop = function prop(x) {
  var p = x;
  return function (args) {
    if (args === undefined) {
      return p;
    } else {
      p = args;
    }
  };
};

export { variables as defaultVariables, isTouch, touchStartEvent, touchEndEvent, moveEvent, endEvent, throttle, subscribe, unsubscribe, emit, animationEndEvent, multiple, show, hide, filterSupportedAttributes, prop };
