function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

// @ts-check
var modes = {
  hidden: "hidden",
  visible: "visible",
  exposing: "exposing",
  hiding: "hiding"
};
var _Conditional = function _Conditional(_ref) {
  var h = _ref.h,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      props = _objectWithoutProperties(_ref, ["h", "useState", "useEffect"]);

  var initialMode = props.permanent ? modes.visible : props.permanent || props.show ? modes.visible : modes.hidden;

  var _useState = useState(initialMode),
      _useState2 = _slicedToArray(_useState, 2),
      mode = _useState2[0],
      setMode = _useState2[1];

  useEffect(function () {
    var newMode = mode;

    if (props.permanent) {
      if (mode === modes.visible && props.show) {
        newMode = modes.exposing;
      } else if (mode === modes.exposing && !props.show) {
        newMode = modes.hiding;
      }
    } else {
      // "normal" type
      if (mode === modes.hidden && props.show) {
        newMode = modes.visible;
      } else if (mode === modes.visible && !props.show) {
        newMode = modes.hiding;
      }
    }

    if (newMode !== mode) {
      setMode(newMode);
    }
  }, [props]);
  var placeholder = h("span", {
    className: props.placeholderClassName
  }); // No didHide callback passed: use normal visibility evaluation

  if (!props.didHide) {
    return props.permanent || props.inactive || props.show ? h(props.instance, props) : placeholder;
  }

  var visible = mode !== modes.hidden;
  return visible ? h(props.instance, _objectSpread({}, props, {
    didHide:
    /**
     * @param {any} args
     */
    function didHide(args) {
      return props.didHide(args), setMode(props.permanent ? modes.visible : modes.hidden);
    }
  }, mode === modes.hiding ? {
    show: true,
    hide: true
  } : undefined)) : placeholder;
};

// @ts-check

/**
 * 
 * @param {string} component 
 * @param {object} params
 * @param {string} [params.option]
 * @param {string} [params.newOption]
 * @param {string} [params.newOption]
 * @param {string} [params.newComponent]
 * @param {string} [params.since]
 */
var deprecation = function deprecation(component, _ref) {
  var option = _ref.option,
      newOption = _ref.newOption,
      newComponent = _ref.newComponent,
      since = _ref.since;
  var version = since ? "Since version ".concat(since, ".") : "";
  return option && console.warn("".concat(component, ": option '").concat(option, "' is deprecated and will be removed in later versions. Use '").concat(newOption, "' instead. ").concat(version)), // eslint-disable-line no-console
  newComponent && !newOption && console.warn("".concat(component, ": this component is deprecated and will be removed in later versions. Use component '").concat(newComponent, "' instead. ").concat(version)), // eslint-disable-line no-console
  newComponent && newOption && console.warn("".concat(component, ": this component is deprecated and will be removed in later versions. Use component '").concat(newComponent, "' with option '").concat(newOption, "' instead. ").concat(version)) // eslint-disable-line no-console
  ;
};

// @ts-check

/**
 * Reducer helper function.
 * @param {object} acc 
 * @param {string} p 
 * @returns {object}
 */
var r = function r(acc, p) {
  return acc[p] = 1, acc;
};
/**
 * List of default attributes.
 * Separately handled:
 * - class
 * - element
 * @type Array<string> defaultAttrs
 */


var defaultAttrs = [// Universal
"key", "style", "href", "id", "data-index", // React
"tabIndex", // Mithril
"tabindex", "oninit", "oncreate", "onupdate", "onbeforeremove", "onremove", "onbeforeupdate"];
/**
 * 
 * @param {{[s: string]: string}} attrs 
 * @param {object} [modifications] 
 * @param {Array<string>} [modifications.add]
 * @param {Array<string>} [modifications.remove]
 * @returns {object}
 */

var filterSupportedAttributes = function filterSupportedAttributes(attrs) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      add = _ref.add,
      remove = _ref.remove;

  /**
   * @type {{[s: string]: string}} removeLookup 
   */
  var removeLookup = remove ? remove.reduce(r, {}) : {};
  /**
   * @type {Array<string>} attrsList 
   */

  var attrsList = add ? defaultAttrs.concat(add) : defaultAttrs;
  var supported = attrsList.filter(function (item) {
    return !removeLookup[item];
  }).reduce(r, {});
  return Object.keys(attrs).reduce(
  /**
   * @param {object} acc
   * @param {string} key
   */
  function (acc, key) {
    return supported[key] ? acc[key] = attrs[key] : null, acc;
  }, {});
};
/**
 * 
 * @param {object|function} attrs 
 * @returns {object}
 */

var unpackAttrs = function unpackAttrs(attrs) {
  return typeof attrs === "function" ? attrs() : attrs;
};
/**
 * 
 * @param {{[s: string]: string}} classes 
 * @returns {{[s: string]: string}}
 */

var sizeClasses = function sizeClasses(classes) {
  return {
    small: classes.small,
    regular: classes.regular,
    medium: classes.medium,
    large: classes.large,
    fab: classes.fab
  };
};
/**
 * 
 * @param {{[s: string]: string}} classes 
 * @param {string} [size] 
 * @returns {object}
 */


var classForSize = function classForSize(classes) {
  var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "regular";
  return sizeClasses(classes)[size];
};

var isClient = typeof document !== "undefined";
var isServer = !isClient;

// @ts-check
/**
 * @type {{[s: string]: string}} evts
 */

var evts = {
  "animation": "animationend",
  "OAnimation": "oAnimationEnd",
  "MozAnimation": "animationend",
  "WebkitAnimation": "webkitAnimationEnd"
};
var getAnimationEndEvent = function getAnimationEndEvent() {
  if (isClient) {
    var el = document.createElement("fakeelement");
    /**
     * @type {string} a
     */

    for (var a in evts) {
      /**
       * @type {object} style
       */
      var style = el.style;

      if (style[a] !== undefined) {
        return evts[a];
      }
    }
  }
};

// @ts-check

/**
 * @param {object} params
 * @param {object} params.element
 * @param {string} [params.selector]
 * @param {string} [params.pseudoSelector]
 * @param {string} params.prop
 * @returns {object|undefined}
 */
var getStyle = function getStyle(_ref) {
  var element = _ref.element,
      selector = _ref.selector,
      pseudoSelector = _ref.pseudoSelector,
      prop = _ref.prop;
  var el = selector ? element.querySelector(selector) : element;

  if (!el) {
    return undefined;
  }

  if (el.currentStyle) {
    return el.currentStyle;
  }

  if (window.getComputedStyle) {
    var defaultView = document.defaultView;

    if (defaultView) {
      var style = defaultView.getComputedStyle(el, pseudoSelector);

      if (style) {
        return style.getPropertyValue(prop);
      }
    }
  }

  return undefined;
};
/**
 * 
 * @param {object} params
 * @param {object} params.element
 * @param {string} [params.selector]
 * @param {string} [params.pseudoSelector]
 * @param {string} params.prop
 * @param {string} [params.equals]
 * @param {string} [params.contains]
 * @returns {boolean}
 */

var stylePropCompare = function stylePropCompare(_ref2) {
  var element = _ref2.element,
      selector = _ref2.selector,
      pseudoSelector = _ref2.pseudoSelector,
      prop = _ref2.prop,
      equals = _ref2.equals,
      contains = _ref2.contains;
  var el = selector ? element.querySelector(selector) : element;

  if (!el) {
    return false;
  }

  var defaultView = document.defaultView;

  if (defaultView) {
    if (equals !== undefined) {
      return equals === defaultView.getComputedStyle(el, pseudoSelector).getPropertyValue(prop);
    }

    if (contains !== undefined) {
      return defaultView.getComputedStyle(el, pseudoSelector).getPropertyValue(prop).indexOf(contains) !== -1;
    }
  }

  return false;
};
/**
 * 
 * @param {object} params
 * @param {object} params.element
 * @param {string} params.selector
 * @returns {boolean}
 */

var isRTL = function isRTL(_ref3) {
  var _ref3$element = _ref3.element,
      element = _ref3$element === void 0 ? document : _ref3$element,
      selector = _ref3.selector;
  return stylePropCompare({
    element: element,
    selector: selector,
    prop: "direction",
    equals: "rtl"
  });
};
/**
 * 
 * @param {string} durationStr 
 * @returns {number}
 */

var styleDurationToMs = function styleDurationToMs(durationStr) {
  var parsed = parseFloat(durationStr) * (durationStr.indexOf("ms") === -1 ? 1000 : 1);
  return isNaN(parsed) ? 0 : parsed;
};

var iconDropdownUp = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"dd-up-svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 14l5-5 5 5z\"/></svg>";
var iconDropdownDown = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"dd-down-svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>";

// @ts-check
var isTouch = isServer ? false : "ontouchstart" in document.documentElement;
var pointerStartEvent = isTouch ? ["touchstart", "click"] : ["click"];
var pointerEndEvent = isTouch ? ["click", "mouseup"] : ["mouseup"];
var pointerStartDownEvent = isTouch ? ["touchstart", "mousedown"] : ["mousedown"];
var pointerMoveEvent = isTouch ? ["touchmove", "mousemove"] : ["mousemove"];
var pointerEndDownEvent = isTouch ? ["touchend", "mouseup"] : ["mouseup"];

if (isClient) {
  var htmlElement = document.querySelector("html");

  if (htmlElement) {
    htmlElement.classList.add(isTouch ? "pe-touch" : "pe-no-touch");
  }
}

// @ts-check
/**
 * @type {{[s: string]: Array<function>}} listeners
 */

var listeners = {};
/**
 * @param {function} func
 * @param {number} [s]
 * @param {object} [context]
 * @returns {function}
 * @see https://gist.github.com/Eartz/fe651f2fadcc11444549
 */

var throttle = function throttle(func) {
  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isClient ? window : {};
  var wait = false;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
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
/**
 * 
 * @param {string} eventName 
 * @param {object} listener 
 * @param {number} [delay] 
 */

var subscribe = function subscribe(eventName, listener, delay) {
  listeners[eventName] = listeners[eventName] || [];
  listeners[eventName].push(delay ? throttle(listener, delay) : listener);
};
/**
 * 
 * @param {string} eventName 
 * @param {object} listener 
 */

var unsubscribe = function unsubscribe(eventName, listener) {
  if (!listeners[eventName]) {
    return;
  }

  var index = listeners[eventName].indexOf(listener);

  if (index > -1) {
    listeners[eventName].splice(index, 1);
  }
};
/**
 * 
 * @param {string} eventName 
 * @param {object} event 
 */

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
  pointerEndEvent.forEach(function (eventName) {
    return window.addEventListener(eventName, function (e) {
      return emit(eventName, e);
    });
  });
}

/**
 * @typedef {object} Item 
 */

/**
 * 
 * @param {object} params
 * @param {object} params.options
 */

var Multi = function Multi(_ref) {
  var mOptions = _ref.options;

  /**
   * @type {Array<Item>} items
   */
  var items = []; // This is shared between all instances of a type (Dialog, Notification, ...)

  /*
  @param e: { id, eventName }
  */

  var onChange = function onChange(e) {
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
      onChange({
        id: id,
        name: "removeItem"
      });
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

    onChange({
      id: items.length ? items[0].instanceId : null,
      name: "next"
    });
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
    onChange({
      id: null,
      name: "removeAll"
    });
  };

  var setPauseState = function setPauseState(pause, instanceId) {
    var item = findItem(instanceId);

    if (item) {
      item.pause = pause;
      item.unpause = !pause;
      onChange({
        id: instanceId,
        name: pause ? "pause" : "unpause"
      });
    }
  };

  var createItem = function createItem(itemAttrs, instanceId, spawn) {
    var resolveShow;
    var resolveHide;
    var props = unpackAttrs(itemAttrs);

    var didShow = function didShow() {
      if (props.didShow) {
        props.didShow(instanceId);
      }

      onChange({
        id: instanceId,
        name: "didShow"
      });
      return resolveShow(instanceId);
    };

    var showPromise = new Promise(function (resolve) {
      return resolveShow = resolve;
    });
    var hidePromise = new Promise(function (resolve) {
      return resolveHide = resolve;
    });

    var didHide = function didHide() {
      if (props.didHide) {
        props.didHide(instanceId);
      }

      onChange({
        id: instanceId,
        name: "didHide"
      });
      remove(instanceId);
      return resolveHide(instanceId);
    };

    return _objectSpread({}, mOptions, {
      // keyId: mOptions.queue ? new Date().getTime() : undefined, // to force rendering a new component
      instanceId: instanceId,
      spawn: spawn,
      props: itemAttrs,
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
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var spawnOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var instanceId = spawnOpts.id || mOptions.defaultId;
    var spawn = spawnOpts.spawn || mOptions.defaultId;
    var item = createItem(props, instanceId, spawn);
    onChange({
      id: instanceId,
      name: "show"
    });

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

    onChange({
      id: instanceId,
      name: "hide"
    });
    return item ? item.hidePromise : Promise.resolve(instanceId);
  };

  var clear = removeAll;

  var render = function render(_ref2) {
    var h = _ref2.h,
        useState = _ref2.useState,
        useEffect = _ref2.useEffect,
        props = _objectWithoutProperties(_ref2, ["h", "useState", "useEffect"]);

    var _useState = useState(),
        _useState2 = _slicedToArray(_useState, 2),
        setCurrent = _useState2[1];

    useEffect(function () {
      subscribe(mOptions.name, setCurrent);
      return function () {
        unsubscribe(mOptions.name, setCurrent);
      };
    }, []);
    var spawn = props.spawn || mOptions.defaultId;
    var candidates = items.filter(function (item) {
      return item.show && item.spawn === spawn;
    });

    if (mOptions.htmlShowClass && isClient && document.documentElement) {
      document.documentElement.classList[candidates.length ? "add" : "remove"](mOptions.htmlShowClass);
    }

    return !candidates.length ? h(mOptions.placeholder) // placeholder because we cannot return null
    : h(mOptions.holderSelector, {
      className: props.position === "container" ? "pe-multiple--container" : "pe-multiple--screen"
    }, candidates.map(function (itemData) {
      return h(mOptions.instance, _objectSpread({}, unpackAttrs(props), {
        fromMultipleClear: clear,
        spawnId: spawn,
        // from mOptions:
        fromMultipleClassName: mOptions.className,
        holderSelector: mOptions.holderSelector,
        transitions: mOptions.transitions,
        // from itemData:
        fromMultipleDidHide: itemData.didHide,
        fromMultipleDidShow: itemData.didShow,
        hide: itemData.hide,
        instanceId: itemData.instanceId,
        key: itemData.key !== undefined ? itemData.key : itemData.keyId,
        pause: itemData.pause,
        show: itemData.show,
        unpause: itemData.unpause
      }, unpackAttrs(itemData.props)));
    }));
  };

  return {
    clear: clear,
    count: count,
    hide: hide,
    pause: pause,
    remove: remove,
    show: show,
    unpause: unpause,
    render: render
  };
};
Multi["displayName"] = "Multi";

var TRANSITION_TYPES = {
  SHOW: "show",
  HIDE: "hide",
  DONE: "done"
};
var initialTransitionState = {
  isVisible: false,
  isTransitioning: false,
  isHiding: false
};
var transitionStateReducer = function transitionStateReducer(state, type) {
  switch (type) {
    case TRANSITION_TYPES.SHOW:
      return _objectSpread({}, state, {
        isTransitioning: true,
        isVisible: true,
        isHiding: false
      });

    case TRANSITION_TYPES.HIDE:
      return _objectSpread({}, state, {
        isTransitioning: true,
        isHiding: true
      });

    case TRANSITION_TYPES.SHOW_DONE:
      return _objectSpread({}, state, {
        isTransitioning: false,
        isVisible: true,
        isHiding: false
      });

    case TRANSITION_TYPES.HIDE_DONE:
      return _objectSpread({}, state, {
        isTransitioning: false,
        isVisible: false,
        isHiding: false
      });

    default:
      throw new Error("Unhandled action type: ".concat(type));
  }
};
/**
 * 
 * @typedef {{ el?: HTMLElement, duration?: number, hasDuration?: boolean, delay?: number, hasDelay?: boolean, timingFunction?: string, transitionClass?: string, transitionClassElement?: HTMLElement, before?: () => void, after?: () => void, transition?: () => void, showClass?: string, showClassElement?: HTMLElement  }} TransitionOpts
 */

var DEFAULT_DURATION = .240;
var DEFAULT_DELAY = 0;
/**
 * 
 * @param {TransitionOpts} opts 
 * @returns {Promise}
 */

var show = function show(opts) {
  return transition(opts, "show");
};
/**
 * 
 * @param {TransitionOpts} opts
 * @returns {Promise} 
 */

var hide = function hide(opts) {
  return transition(opts, "hide");
};
/**
 * 
 * @param {TransitionOpts} opts 
 * @param {"show"|"hide"} state 
 * @returns {Promise}
 */

var transition = function transition(opts, state) {
  var el = opts.el;

  if (!el) {
    return Promise.resolve();
  } else {
    return new Promise(function (resolve) {
      var style = el.style;
      /**
       * @type {object} computedStyle
       */

      var computedStyle = isClient ? window.getComputedStyle(el) : {};
      var duration = opts.hasDuration && opts.duration !== undefined ? opts.duration * 1000.0 : styleDurationToMs(computedStyle.transitionDuration);
      var delay = opts.hasDelay && opts.delay !== undefined ? opts.delay * 1000.0 : styleDurationToMs(computedStyle.transitionDelay);
      var timingFunction = opts.timingFunction || computedStyle.transitionTimingFunction;

      if (opts.transitionClass) {
        var transitionClassElement = opts.transitionClassElement || el;
        transitionClassElement.classList.add(opts.transitionClass);
      }

      var before = function before() {
        style.transitionDuration = "0ms";
        style.transitionDelay = "0ms";

        if (opts.before && typeof opts.before === "function") {
          opts.before();
        }
      };

      var maybeBefore = opts.before && state === "show" ? before : opts.before && state === "hide" ? before : null;

      var after = function after() {
        if (opts.after && typeof opts.after === "function") {
          opts.after();
        }
      };

      var applyTransition = function applyTransition() {
        style.transitionDuration = duration + "ms";
        style.transitionDelay = delay + "ms";

        if (timingFunction) {
          style.transitionTimingFunction = timingFunction;
        }

        if (opts.showClass) {
          var showClassElement = opts.showClassElement || el;
          showClassElement.classList[state === "show" ? "add" : "remove"](opts.showClass);
        }

        if (opts.transition) {
          opts.transition();
        }
      };

      var doTransition = function doTransition() {
        applyTransition();
        setTimeout(function () {
          if (after) {
            after();
          }

          if (opts.transitionClass) {
            var _transitionClassElement = opts.transitionClassElement || el;

            _transitionClassElement.classList.remove(opts.transitionClass);

            el.offsetHeight; // force reflow
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

      if (maybeBefore) {
        maybeBefore();
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
/**
 * 
 * @param {object} params
 * @param {(string) => void} [params.dispatchTransitionState]
 * @param {boolean} [params.isShow]
 * @param {boolean} [params.isTransitioning]
 * @param {string} [params.instanceId]
 * @param {(boolean) => void} [params.setIsTransitioning]
 * @param {(boolean) => void} [params.setIsVisible]
 * @param {object} [params.props]
 * @param {object} [params.domElements]
 * @param {() => void} [params.beforeTransition]
 * @param {() => void} [params.afterTransition]
 * @param {string} [params.showClass]
 * @param {string} [params.transitionClass]
 * @param {string} [params.referrer]
 * @returns {Promise}
 */


var transitionComponent = function transitionComponent(_ref) {
  var dispatchTransitionState = _ref.dispatchTransitionState,
      isTransitioning = _ref.isTransitioning,
      instanceId = _ref.instanceId,
      isShow = _ref.isShow,
      props = _ref.props,
      domElements = _ref.domElements,
      beforeTransition = _ref.beforeTransition,
      afterTransition = _ref.afterTransition,
      showClass = _ref.showClass,
      transitionClass = _ref.transitionClass,
      referrer = _ref.referrer;

  if (isTransitioning) {
    return Promise.resolve();
  }

  dispatchTransitionState(isShow ? TRANSITION_TYPES.SHOW : TRANSITION_TYPES.HIDE);

  if (beforeTransition) {
    beforeTransition();
  }

  var duration = isShow ? props.showDuration : props.hideDuration;
  var delay = isShow ? props.showDelay : props.hideDelay;
  var timingFunction = isShow ? props.showTimingFunction : props.hideTimingFunction;
  var transitions = props.transitions;
  var fn = isShow ? show : hide;

  var opts1 = _objectSpread({}, props, domElements, {
    showClass: showClass,
    transitionClass: transitionClass,
    duration: duration,
    delay: delay,
    timingFunction: timingFunction
  });

  var opts2 = _objectSpread({}, opts1, transitions ? (isShow ? transitions.show : transitions.hide)(opts1) : undefined);

  var opts3 = _objectSpread({}, opts2, {
    duration: opts2.duration !== undefined ? opts2.duration : DEFAULT_DURATION,
    hasDuration: opts2.duration !== undefined,
    delay: opts2.delay !== undefined ? opts2.delay : DEFAULT_DELAY,
    hasDelay: opts2.delay !== undefined
  });

  return fn(opts3).then(function () {
    var id = instanceId;

    if (afterTransition) {
      afterTransition();
    }

    dispatchTransitionState(isShow ? TRANSITION_TYPES.SHOW_DONE : TRANSITION_TYPES.HIDE_DONE); // Component may unmount after this point

    if (isShow ? props.fromMultipleDidShow : props.fromMultipleDidHide) {
      (isShow ? props.fromMultipleDidShow : props.fromMultipleDidHide)(id); // when used with Multiple; this will call props.didShow / props.didHide
    } else if (isShow ? props.didShow : props.didHide) {
      (isShow ? props.didShow : props.didHide)(id); // when used directly
    }
  });
};

export { Multi, _Conditional, classForSize, deprecation, emit, filterSupportedAttributes, getAnimationEndEvent, getStyle, hide, iconDropdownDown, iconDropdownUp, initialTransitionState, isClient, isRTL, isServer, isTouch, pointerEndDownEvent, pointerEndEvent, pointerMoveEvent, pointerStartDownEvent, pointerStartEvent, show, styleDurationToMs, stylePropCompare, subscribe, throttle, transitionComponent, transitionStateReducer, unpackAttrs, unsubscribe };
