(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.polythene = {})));
}(this, (function (exports) { 'use strict';

  var isClient = typeof document !== "undefined";
  var isServer = !isClient;

  var evts = {
    "animation": "animationend",
    "OAnimation": "oAnimationEnd",
    "MozAnimation": "animationend",
    "WebkitAnimation": "webkitAnimationEnd"
  };

  var getAnimationEndEvent = function getAnimationEndEvent() {
    if (isClient) {
      var el = document.createElement("fakeelement");
      for (var a in evts) {
        if (el.style[a] !== undefined) {
          return evts[a];
        }
      }
    }
  };

  var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var modes = {
    hidden: "hidden",
    visible: "visible",
    exposing: "exposing",
    hiding: "hiding"
  };

  var Conditional = {
    getInitialState: function getInitialState(vnode, createStream) {
      var attrs = vnode.attrs;
      if (!attrs.didHide) {
        return {};
      }
      var visible = attrs.permanent || attrs.show;
      var mode = createStream(attrs.permanent ? modes.visible : visible ? modes.visible : modes.hidden);
      return {
        mode: mode,
        redrawOnUpdate: createStream.merge([mode])
      };
    },
    onUpdate: function onUpdate(_ref) {
      var state = _ref.state,
          attrs = _ref.attrs;

      if (!attrs.didHide) {
        return;
      }
      var mode = state.mode();
      if (attrs.permanent) {
        if (mode === modes.visible && attrs.show) {
          state.mode(modes.exposing);
        } else if (mode === modes.exposing && !attrs.show) {
          state.mode(modes.hiding);
        }
      } else {
        // "normal" type
        if (mode === modes.hidden && attrs.show) {
          state.mode(modes.visible);
        } else if (mode === modes.visible && !attrs.show) {
          state.mode(modes.hiding);
        }
      }
    },
    view: function view(_ref2, _ref3) {
      var state = _ref2.state,
          attrs = _ref2.attrs;
      var h = _ref3.renderer;

      var placeholder = h("span", { className: attrs.placeholderClassName });

      // No didHide callback passed: use normal visibility evaluation
      if (!attrs.didHide) {
        return attrs.permanent || attrs.inactive || attrs.show ? h(attrs.instance, attrs) : placeholder;
      }

      // else: use didHide to reset the state after hiding
      var mode = state.mode();
      var visible = mode !== modes.hidden;
      return visible ? h(attrs.instance, _extends({}, attrs, {
        didHide: function didHide(args) {
          return attrs.didHide(args), state.mode(attrs.permanent ? modes.visible : modes.hidden);
        }
      }, mode === modes.hiding && {
        show: true,
        hide: true
      })) : placeholder;
    }
  };

  Conditional.displayName = "Conditional";

  var r = function r(acc, p) {
    return acc[p] = 1, acc;
  };

  /* 
  Separately handled props:
  - class
  - element
  */

  var defaultAttrs = [
  // Universal
  "key", "style", "href", "id",

  // React
  "tabIndex",

  // Mithril
  "tabindex", "oninit", "oncreate", "onupdate", "onbeforeremove", "onremove", "onbeforeupdate"];

  var filterSupportedAttributes = function filterSupportedAttributes(attrs) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$add = _ref.add,
        addAttrs = _ref$add === undefined ? [] : _ref$add,
        _ref$remove = _ref.remove,
        removeAttrs = _ref$remove === undefined ? [] : _ref$remove;

    var removeLookup = removeAttrs.reduce(r, {});
    var supported = defaultAttrs.concat(addAttrs).filter(function (item) {
      return !removeLookup[item];
    }).reduce(r, {});
    return Object.keys(attrs).reduce(function (acc, key) {
      return supported[key] ? acc[key] = attrs[key] : null, acc;
    }, {});
  };

  var unpackAttrs = function unpackAttrs(attrs) {
    return typeof attrs === "function" ? attrs() : attrs;
  };

  var isTouch = isServer ? false : "ontouchstart" in document.documentElement;

  var pointerStartEvent = isTouch ? "click" : "mousedown";

  var pointerEndEvent = isTouch ? "click" : "mouseup";

  var pointerStartMoveEvent = isTouch ? "touchstart" : "mousedown";

  var pointerMoveEvent = isTouch ? "touchmove" : "mousemove";

  var pointerEndMoveEvent = isTouch ? "touchend" : "mouseup";

  if (isClient) {
    document.querySelector("html").classList.add(isTouch ? "pe-touch" : "pe-no-touch");
  }

  var listeners = {};

  // https://gist.github.com/Eartz/fe651f2fadcc11444549
  var throttle = function throttle(func) {
    var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isClient ? window : {};

    var wait = false;
    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var later = function later() {
        return func.apply(context, args);
      };
      if (!wait) {
        later();
        wait = true;
        setTimeout(function () {
          return wait = false;
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
      return listener(event);
    });
  };

  if (isClient) {
    window.addEventListener("resize", function (e) {
      return emit("resize", e);
    });
    window.addEventListener("scroll", function (e) {
      return emit("scroll", e);
    });
    window.addEventListener("keydown", function (e) {
      return emit("keydown", e);
    });
    window.addEventListener(pointerEndEvent, function (e) {
      return emit(pointerEndEvent, e);
    });
  }

  var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  var Multi = function Multi(_ref) {
    var mOptions = _ref.options,
        renderer = _ref.renderer;


    var items = []; // This is shared between all instances of a type (Dialog, Notification, ...)
    var current = void 0;

    var getInitialState = function getInitialState(vnode, createStream) {
      current = createStream(null);
      return {
        current: current,
        redrawOnUpdate: createStream.merge([current])
      };
    };

    /*
    @param e: { id, eventName }
    */
    var onChange = function onChange(e) {
      if (!current) {
        console.error("Cannot set state. Did you set a root element like Dialog to show instances?"); // eslint-disable-line no-console
      }
      current(e.id);
      emit(mOptions.name, e);
    };

    var itemIndex = function itemIndex(id) {
      var item = findItem(id);
      return items.indexOf(item);
    };

    var removeItem = function removeItem(id) {
      var index = itemIndex(id);
      if (index !== -1) {
        items.splice(index, 1);
        onChange({ id: id, name: "removeItem" });
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
      }
      onChange({ id: items.length ? items[0].instanceId : null, name: "next" });
    };

    var remove = function remove() {
      var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOptions.defaultId;

      if (mOptions.queue) {
        items.shift();
        next();
      } else {
        removeItem(instanceId);
      }
    };

    var removeAll = function removeAll() {
      items.length = 0;
      onChange({ id: null, name: "removeAll" });
    };

    var setPauseState = function setPauseState(pause, instanceId) {
      var item = findItem(instanceId);
      if (item) {
        item.pause = pause;
        item.unpause = !pause;
        onChange({ id: instanceId, name: pause ? "pause" : "unpause" });
      }
    };

    var createItem = function createItem(itemAttrs, instanceId, spawn) {
      var resolveShow = void 0;
      var resolveHide = void 0;
      var attrs = unpackAttrs(itemAttrs);

      var didShow = function didShow() {
        if (attrs.didShow) {
          attrs.didShow(instanceId);
        }
        onChange({ id: instanceId, name: "didShow" });
        return resolveShow(instanceId);
      };
      var showPromise = new Promise(function (resolve) {
        return resolveShow = resolve;
      });

      var didHide = function didHide() {
        if (attrs.didHide) {
          attrs.didHide(instanceId);
        }
        onChange({ id: instanceId, name: "didHide" });
        remove(instanceId);
        return resolveHide(instanceId);
      };

      var hidePromise = new Promise(function (resolve) {
        return resolveHide = resolve;
      });

      return _extends$1({}, mOptions, {
        instanceId: instanceId,
        spawn: spawn,
        attrs: itemAttrs,
        show: mOptions.queue ? false : true,
        showPromise: showPromise,
        hidePromise: hidePromise,
        didShow: didShow,
        didHide: didHide
      });
    };

    var count = function count() {
      return items.length;
    };
    var pause = function pause() {
      var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOptions.defaultId;
      return setPauseState(true, instanceId);
    };
    var unpause = function unpause() {
      var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOptions.defaultId;
      return setPauseState(false, instanceId);
    };

    var show = function show() {
      var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var spawnOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var instanceId = spawnOpts.id || mOptions.defaultId;
      var spawn = spawnOpts.spawn || mOptions.defaultId;
      var item = createItem(attrs, instanceId, spawn);
      onChange({ id: instanceId, name: "show" });
      if (mOptions.queue) {
        items.push(item);
        if (items.length === 1) {
          next();
        }
      } else {
        var storedItem = findItem(instanceId);
        if (!storedItem) {
          items.push(item);
        } else {
          replaceItem(instanceId, item);
        }
      }
      return item.showPromise;
    };

    var hide = function hide() {
      var spawnOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var instanceId = spawnOpts.id || mOptions.defaultId;
      var item = mOptions.queue && items.length ? items[0] : findItem(instanceId);
      if (item) {
        item.hide = true;
      }
      onChange({ id: instanceId, name: "hide" });
      return item ? item.hidePromise : Promise.resolve(instanceId);
    };

    var clear = removeAll;

    var view = function view(_ref2) {
      var attrs = _ref2.attrs;

      var spawn = attrs.spawn || mOptions.defaultId;
      var candidates = items.filter(function (item) {
        return item.show && item.spawn === spawn;
      });
      if (mOptions.htmlShowClass && isClient && document.documentElement) {
        document.documentElement.classList[candidates.length ? "add" : "remove"](mOptions.htmlShowClass);
      }
      return !candidates.length ? renderer(mOptions.placeholder) // placeholder because we cannot return null
      : renderer(mOptions.holderSelector, {
        className: attrs.position === "container" ? "pe-multiple--container" : "pe-multiple--screen"
      }, candidates.map(function (itemData) {
        return renderer(mOptions.instance, _extends$1({}, {
          key: itemData.key,
          spawnId: spawn,
          instanceId: itemData.instanceId,
          transitions: mOptions.transitions,
          holderSelector: mOptions.holderSelector,
          className: mOptions.className,
          show: itemData.show,
          hide: itemData.hide,
          pause: itemData.pause,
          unpause: itemData.unpause,
          fromMultipleDidShow: itemData.didShow,
          fromMultipleDidHide: itemData.didHide,
          fromMultipleClear: clear
        }, unpackAttrs(itemData.attrs)));
      }));
    };

    return {
      clear: clear,
      count: count,
      getInitialState: getInitialState,
      hide: hide,
      pause: pause,
      remove: remove,
      show: show,
      unpause: unpause,
      view: view
    };
  };

  Multi.displayName = "Multi";

  var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  // defaults
  var SHOW_DURATION = .240;
  var HIDE_DURATION = .240;
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

  var getValue = function getValue(_ref) {
    var opts = _ref.opts,
        state = _ref.state,
        showAttr = _ref.showAttr,
        hideAttr = _ref.hideAttr,
        defaultShowValue = _ref.defaultShowValue,
        defaultHideValue = _ref.defaultHideValue,
        nullValue = _ref.nullValue;

    var transition = opts.transition || TRANSITION;
    if (transition === "none") {
      return nullValue;
    } else if (transition === "show" && state === "hide") {
      return nullValue;
    } else if (transition === "hide" && state === "show") {
      return nullValue;
    } else {
      // both
      return state === "show" ? opts[showAttr] !== undefined ? opts[showAttr] : defaultShowValue : opts[hideAttr] !== undefined ? opts[hideAttr] : defaultHideValue;
    }
  };

  var hasDuration = function hasDuration(opts, state) {
    return state === "show" ? opts.showDuration !== undefined : opts.hideDuration !== undefined;
  };

  /*
  opts:
  - transition
  - showDuration
  - hideDuration

  - state (show, hide)
  */
  var getDuration = function getDuration(opts, state) {
    return getValue({ opts: opts, state: state, showAttr: "showDuration", hideAttr: "hideDuration", defaultShowValue: SHOW_DURATION, defaultHideValue: HIDE_DURATION, nullValue: 0 });
  };

  /*
  opts:
  - transition (show, hide, both)
  - showDelay
  - hideDelay

  - state (show, hide)
  */

  var hasDelay = function hasDelay(opts, state) {
    return state === "show" ? opts.showDelay !== undefined : opts.hideDelay !== undefined;
  };

  var getDelay = function getDelay(opts, state) {
    return getValue({ opts: opts, state: state, showAttr: "showDelay", hideAttr: "hideDelay", defaultShowValue: SHOW_DELAY, defaultHideValue: HIDE_DELAY, nullValue: 0 });
  };

  var getTimingFunction = function getTimingFunction(opts, state) {
    return getValue({ opts: opts, state: state, showAttr: "showTimingFunction", hideAttr: "hideTimingFunction" });
  };

  var computedStyleDurationToMs = function computedStyleDurationToMs(durationStr) {
    return parseFloat(durationStr) * durationStr.indexOf("ms") === -1 ? 1000 : 1;
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
  - timingFunction

  - state (show, hide)
  */
  var transition = function transition(opts, state) {
    var el = opts.el;
    if (!el) {
      return Promise.resolve();
    } else {
      return new Promise(function (resolve) {
        var computedStyle = isClient ? window.getComputedStyle(el) : {};
        var duration = hasDuration(opts, state) ? getDuration(opts, state) * 1000 : computedStyleDurationToMs(computedStyle.transitionDuration);
        var delay = hasDelay(opts, state) ? getDelay(opts, state) * 1000 : computedStyleDurationToMs(computedStyle.transitionDelay);
        var timingFunction = getTimingFunction(opts, state) || computedStyle.transitionTimingFunction;

        var style = el.style;

        var beforeTransition = opts.beforeShow && state === "show" ? function () {
          style.transitionDuration = "0ms";
          style.transitionDelay = "0ms";
          opts.beforeShow();
        } : opts.beforeHide && state === "hide" ? function () {
          style.transitionDuration = "0ms";
          style.transitionDelay = "0ms";
          opts.beforeHide();
        } : null;

        var afterTransition = opts.afterHide && state === "hide" ? function () {
          return opts.afterHide();
        } : null;

        var applyTransition = function applyTransition() {
          style.transitionDuration = duration + "ms";
          style.transitionDelay = delay + "ms";

          if (timingFunction) {
            style.transitionTimingFunction = timingFunction;
          }
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

        var doTransition = function doTransition() {
          applyTransition();
          setTimeout(function () {
            if (afterTransition) {
              afterTransition();
            }
            resolve();
          }, duration + delay);
        };

        var maybeDelayTransition = function maybeDelayTransition() {
          if (duration === 0) {
            doTransition();
          } else {
            setTimeout(doTransition, 0);
          }
        };

        if (beforeTransition) {
          beforeTransition();
          el.offsetHeight; // force reflow
          setTimeout(function () {
            maybeDelayTransition();
          }, 0);
        } else {
          maybeDelayTransition();
        }
      });
    }
  };

  var transitionComponent = function transitionComponent(_ref2) {
    var _extends2;

    var isShow = _ref2.isShow,
        state = _ref2.state,
        attrs = _ref2.attrs,
        domElements = _ref2.domElements,
        beforeTransition = _ref2.beforeTransition,
        afterTransition = _ref2.afterTransition,
        showClass = _ref2.showClass,
        defaultDuration = _ref2.defaultDuration;

    if (state.transitioning()) {
      return Promise.resolve();
    }
    state.transitioning(true);
    state.visible(isShow ? true : false);
    if (beforeTransition) {
      beforeTransition();
    }
    var duration = attrs[isShow ? "showDuration" : "hideDuration"] || defaultDuration || (isShow ? SHOW_DURATION : HIDE_DURATION);
    var delay = attrs.showDelay;
    var transitions = attrs.transitions;
    var fn = isShow ? show : hide;
    var transAttrs = _extends$2({}, domElements, (_extends2 = {}, _defineProperty(_extends2, isShow ? "showDuration" : "hideDuration", duration), _defineProperty(_extends2, isShow ? "showDelay" : "hideDelay", delay), _extends2));
    return fn(_extends$2({}, attrs, { showClass: showClass }, transitions ? transitions[isShow ? "show" : "hide"](transAttrs) : transAttrs)).then(function () {
      var id = state.instanceId;
      if (attrs[isShow ? "fromMultipleDidShow" : "fromMultipleDidHide"]) {
        attrs[isShow ? "fromMultipleDidShow" : "fromMultipleDidHide"](id); // when used with Multiple; this will call attrs.didShow / attrs.didHide
      } else if (attrs[isShow ? "didShow" : "didHide"]) {
        attrs[isShow ? "didShow" : "didHide"](id); // when used directly
      }
      if (afterTransition) {
        afterTransition();
      }
      state.transitioning(false);
    });
  };

  var getStyle = function getStyle(_ref) {
    var _ref$element = _ref.element,
        element = _ref$element === undefined ? document : _ref$element,
        selector = _ref.selector,
        prop = _ref.prop;

    var el = selector ? element.querySelector(selector) : element;
    if (!el) {
      return;
    }
    return el.currentStyle ? el.currentStyle[prop] : window.getComputedStyle ? document.defaultView.getComputedStyle(el, null).getPropertyValue(prop) : null;
  };

  var isRTL = function isRTL(_ref2) {
    var _ref2$element = _ref2.element,
        element = _ref2$element === undefined ? document : _ref2$element,
        selector = _ref2.selector;
    return getStyle({ element: element, selector: selector, prop: "direction" }) === "rtl";
  };

  var deprecation = function deprecation(component, deprecatedOption, newOption) {
    return console.warn(component + ": option '" + deprecatedOption + "' is deprecated and will be removed in later versions. Use '" + newOption + "' instead.");
  }; // eslint-disable-line no-console

  exports.getAnimationEndEvent = getAnimationEndEvent;
  exports.Conditional = Conditional;
  exports.filterSupportedAttributes = filterSupportedAttributes;
  exports.unpackAttrs = unpackAttrs;
  exports.isClient = isClient;
  exports.isServer = isServer;
  exports.isTouch = isTouch;
  exports.pointerStartEvent = pointerStartEvent;
  exports.pointerEndEvent = pointerEndEvent;
  exports.pointerStartMoveEvent = pointerStartMoveEvent;
  exports.pointerMoveEvent = pointerMoveEvent;
  exports.pointerEndMoveEvent = pointerEndMoveEvent;
  exports.Multi = Multi;
  exports.show = show;
  exports.hide = hide;
  exports.transitionComponent = transitionComponent;
  exports.throttle = throttle;
  exports.subscribe = subscribe;
  exports.unsubscribe = unsubscribe;
  exports.emit = emit;
  exports.getStyle = getStyle;
  exports.isRTL = isRTL;
  exports.deprecation = deprecation;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-core.js.map
