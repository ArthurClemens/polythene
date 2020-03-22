/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../node_modules/process/browser.js":
/*!*****************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/node_modules/process/browser.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "../../../node_modules/setimmediate/setImmediate.js":
/*!***************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/node_modules/setimmediate/setImmediate.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "../../../node_modules/process/browser.js")))

/***/ }),

/***/ "../../../node_modules/timers-browserify/main.js":
/*!************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/node_modules/timers-browserify/main.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "../../../node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../../polythene-core-base-spinner/dist/polythene-core-base-spinner.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-base-spinner/dist/polythene-core-base-spinner.mjs ***!
  \***********************************************************************************************************************************************/
/*! exports provided: _BaseSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_BaseSpinner", function() { return _BaseSpinner; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
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

var classes = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var showSpinner = function showSpinner(opts) {
  return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(_objectSpread2({}, opts, {
    isShow: true
  }));
}; // const hideSpinner = opts =>
//   transitionComponent({
//     ...opts,
//     isShow: false
//   });


var initialTransitionState = {
  isVisible: false,
  isTransitioning: false,
  isHiding: false
};

var _BaseSpinner = function _BaseSpinner(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useReducer = _ref.useReducer,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      getRef = _ref.getRef,
      Shadow = _ref.Shadow,
      props = _objectWithoutProperties(_ref, ["h", "a", "useReducer", "useState", "useEffect", "getRef", "Shadow"]);

  var _useReducer = useReducer(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionStateReducer"], initialTransitionState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      transitionState = _useReducer2[0],
      dispatchTransitionState = _useReducer2[1];

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var isVisible = (transitionState || initialTransitionState).isVisible;
  var transitionOptions = {
    dispatchTransitionState: dispatchTransitionState,
    props: props,
    domElements: {
      el: domElement
    },
    showClass: classes.visible
  };
  useEffect(function () {
    if (!domElement) {
      return;
    }

    if (!props.permanent) {
      showSpinner(transitionOptions);
    }
  }, [domElement]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom));
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.instanceClass, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["classForSize"])(classes, props.size), props.singleColor ? classes.singleColor : null, props.raised ? classes.raised : null, props.animated ? classes.animated : null, props.permanent ? classes.permanent : null, isVisible ? classes.visible : null, props.className || props[a["class"]]].join(" ")
  }, props.events);

  var content = [props.before, props.content, props.after];

  if (props.raised && content.length > 0) {
    content.push(h(Shadow, {
      shadowDepth: props.shadowDepth
    }));
  }

  return h("div", componentProps, content);
};



/***/ }),

/***/ "../../polythene-core-button-group/dist/polythene-core-button-group.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-button-group/dist/polythene-core-button-group.mjs ***!
  \***********************************************************************************************************************************************/
/*! exports provided: _ButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ButtonGroup", function() { return _ButtonGroup; });
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

var classes = {
  component: "pe-button-group"
};

var _ButtonGroup = function _ButtonGroup(_ref) {
  var h = _ref.h,
      a = _ref.a,
      props = _objectWithoutProperties(_ref, ["h", "a"]);

  var componentProps = _extends({}, props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.className || props[a["class"]]].join(" ")
  });

  return h(props.element || "div", componentProps, props.children);
};



/***/ }),

/***/ "../../polythene-core-button/dist/polythene-core-button.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-button/dist/polythene-core-button.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: _Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Button", function() { return _Button; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-shadow */ "../../polythene-core-shadow/dist/polythene-core-shadow.mjs");
function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }




function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
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

var classes = {
  component: "pe-text-button",
  "super": "pe-button",
  row: "pe-button-row",
  // elements      
  content: "pe-button__content",
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  washColor: "pe-button__wash-color",
  dropdown: "pe-button__dropdown",
  // states      
  border: "pe-button--border",
  contained: "pe-button--contained",
  disabled: "pe-button--disabled",
  dropdownClosed: "pe-button--dropdown-closed",
  dropdownOpen: "pe-button--dropdown-open",
  extraWide: "pe-button--extra-wide",
  hasDropdown: "pe-button--dropdown",
  highLabel: "pe-button--high-label",
  inactive: "pe-button--inactive",
  raised: "pe-button--raised",
  selected: "pe-button--selected",
  separatorAtStart: "pe-button--separator-start",
  hasHover: "pe-button--has-hover"
};
var shadowClasses = {
  component: "pe-shadow",
  // elements      
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",
  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--depth-",
  with_active_shadow: "pe-with-active-shadow"
};
var DEFAULT_SHADOW_DEPTH = 1;

var _Button = function _Button(_ref) {
  var _objectSpread3;

  var h = _ref.h,
      a = _ref.a,
      getRef = _ref.getRef,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      Ripple = _ref.Ripple,
      Shadow = _ref.Shadow,
      Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ["h", "a", "getRef", "useState", "useEffect", "useRef", "Ripple", "Shadow", "Icon"]);

  var events = props.events || {};

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(props.inactive),
      _useState4 = _slicedToArray(_useState3, 2),
      isInactive = _useState4[0],
      setIsInactive = _useState4[1];

  var disabled = props.disabled;
  var inactive = props.inactive || isInactive;

  var onClickHandler = events[a.onclick] || function () {};

  var onKeyUpHandler = events[a.onkeyup] || onClickHandler;
  var shadowDepth = props.raised ? props.shadowDepth !== undefined ? props.shadowDepth : DEFAULT_SHADOW_DEPTH : 0;
  var animateOnTap = props.animateOnTap !== false ? true : false;

  var handleInactivate = function handleInactivate() {
    if (props.inactivate === undefined) {
      return;
    }

    setIsInactive(true);
    setTimeout(function () {
      return setIsInactive(false);
    }, props.inactivate * 1000);
  };

  var hasHover = !disabled && !props.selected && (props.raised ? props.wash : props.wash !== false);

  var handleMouseLeave = function handleMouseLeave(e) {
    domElement.blur();
    domElement.removeEventListener("mouseleave", handleMouseLeave);
  };

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props, {
    add: [a.formaction, "type"],
    remove: ["style"]
  }), // Set style on content, not on component
  getRef(function (dom) {
    if (!dom || domElement) {
      return;
    }

    setDomElement(dom);

    if (props.getRef) {
      props.getRef(dom);
    }
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes["super"], props.parentClassName || classes.component, props.contained ? classes.contained : null, // Raised button classes
    props.raised ? classes.contained : null, props.raised ? classes.raised : null, props.raised && animateOnTap ? shadowClasses.with_active_shadow : null, props.raised && animateOnTap ? Object(polythene_core_shadow__WEBPACK_IMPORTED_MODULE_1__["getDepthClass"])(shadowDepth + 1) : null, //
    hasHover ? classes.hasHover : null, props.selected ? classes.selected : null, props.highLabel ? classes.highLabel : null, props.extraWide ? classes.extraWide : null, disabled ? classes.disabled : null, inactive ? classes.inactive : null, props.separatorAtStart ? classes.separatorAtStart : null, props.border || props.borders ? classes.border : null, props.dropdown ? classes.hasDropdown : null, props.dropdown ? props.dropdown.open ? classes.dropdownOpen : classes.dropdownClosed : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, inactive ? null : _objectSpread2(_defineProperty({}, a.tabindex, disabled || inactive ? -1 : props[a.tabindex] || 0), events, (_objectSpread3 = {}, _defineProperty(_objectSpread3, a.onmousedown, function (e) {
    return domElement && domElement.addEventListener && domElement.addEventListener("mouseleave", handleMouseLeave), props.events && props.events[a.onmousedown] && props.events[a.onmousedown](e);
  }), _defineProperty(_objectSpread3, a.onclick, function (e) {
    return document.activeElement === domElement && document.activeElement.blur(), handleInactivate(), onClickHandler(e);
  }), _defineProperty(_objectSpread3, a.onkeyup, function (e) {
    if (e.keyCode === 13 && document.activeElement === domElement) {
      document.activeElement.blur();

      if (onKeyUpHandler) {
        onKeyUpHandler(e);
      }
    }

    props.events && props.events[a.onkeyup] && props.events[a.onkeyup](e);
  }), _objectSpread3)), props.url, disabled ? {
    disabled: true
  } : null);

  var noink = props.ink !== undefined && props.ink === false;
  var buttonContent = props.content ? props.content : props.label !== undefined ? _typeof(props.label) === "object" ? props.label : h("div", {
    className: classes.label
  }, h("div", {
    className: classes.textLabel,
    style: props.textStyle
  }, props.label)) : props.children;
  var componentContent = h("div", {
    className: classes.content,
    style: props.style
  }, [h(Shadow, {
    shadowDepth: shadowDepth !== undefined ? shadowDepth : 0,
    animated: true
  }), disabled || noink ? null : h(Ripple, _extends({}, {
    target: domElement
  }, props.ripple)), h("div", {
    className: classes.wash
  }, h("div", {
    className: classes.washColor
  })), buttonContent, props.dropdown ? h(Icon, {
    className: classes.dropdown,
    svg: {
      content: h.trust(polythene_core__WEBPACK_IMPORTED_MODULE_0__["iconDropdownDown"])
    }
  }) : null]);
  return h(props.element || "a", componentProps, [props.before, componentContent, props.after]);
};



/***/ }),

/***/ "../../polythene-core-card/dist/polythene-core-card.mjs":
/*!*******************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-card/dist/polythene-core-card.mjs ***!
  \*******************************************************************************************************************************/
/*! exports provided: _Card, _CardActions, _CardMedia, _CardPrimary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Card", function() { return _Card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CardActions", function() { return _CardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CardMedia", function() { return _CardMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_CardPrimary", function() { return _CardPrimary; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var classes = {
  component: "pe-card",
  // elements
  actions: "pe-card__actions",
  any: "pe-card__any",
  content: "pe-card__content",
  header: "pe-card__header",
  headerTitle: "pe-card__header-title",
  media: "pe-card__media",
  mediaDimmer: "pe-card__media__dimmer",
  overlay: "pe-card__overlay",
  overlayContent: "pe-card__overlay__content",
  primary: "pe-card__primary",
  primaryMedia: "pe-card__primary-media",
  subtitle: "pe-card__subtitle",
  text: "pe-card__text",
  title: "pe-card__title",
  // states
  actionsBorder: "pe-card__actions--border",
  actionsHorizontal: "pe-card__actions--horizontal",
  actionsJustified: "pe-card__actions--justified",
  actionsTight: "pe-card__actions--tight",
  actionsVertical: "pe-card__actions--vertical",
  mediaCropX: "pe-card__media--crop-x",
  mediaCropY: "pe-card__media--crop-y",
  mediaOriginStart: "pe-card__media--origin-start",
  mediaOriginCenter: "pe-card__media--origin-center",
  mediaOriginEnd: "pe-card__media--origin-end",
  mediaLarge: "pe-card__media--large",
  mediaMedium: "pe-card__media--medium",
  mediaRatioLandscape: "pe-card__media--landscape",
  mediaRatioSquare: "pe-card__media--square",
  mediaRegular: "pe-card__media--regular",
  mediaSmall: "pe-card__media--small",
  overlaySheet: "pe-card__overlay--sheet",
  primaryHasMedia: "pe-card__primary--media",
  primaryTight: "pe-card__primary--tight",
  textTight: "pe-card__text--tight"
};

var createOverlay = function createOverlay(_ref) {
  var dispatcher = _ref.dispatcher,
      props = _ref.props,
      h = _ref.h,
      a = _ref.a;
  var element = props.element || "div";
  var content = props.content.map(dispatcher);
  return h("div", {
    style: props.style,
    className: [classes.overlay, props.sheet ? classes.overlaySheet : null, props.tone === "light" ? null : "pe-dark-tone", // default dark tone
    props.tone === "light" ? "pe-light-tone" : null].join(" ")
  }, [h(element, {
    className: [classes.overlayContent, props.className || props[a["class"]]].join(" ")
  }, content), h("div", {
    className: classes.mediaDimmer
  })]);
};

var createAny = function createAny(_ref2) {
  var props = _ref2.props,
      h = _ref2.h,
      a = _ref2.a;
  var element = props.element || "div";
  return h(element, _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), {
    className: [classes.any, props.tight ? classes.textTight : null, props.className || props[a["class"]]].join(" ")
  }), props.content);
};

var createText = function createText(_ref3) {
  var props = _ref3.props,
      h = _ref3.h,
      a = _ref3.a;
  var element = props.element || "div";
  return h(element, _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), {
    className: [classes.text, props.tight ? classes.textTight : null, props.className || props[a["class"]]].join(" ")
  }, props.events), props.content);
};

var createHeader = function createHeader(_ref4) {
  var props = _ref4.props,
      h = _ref4.h,
      a = _ref4.a,
      Icon = _ref4.Icon,
      ListTile = _ref4.ListTile;
  return h(ListTile, _extends({}, props, {
    className: [classes.header, props.className || props[a["class"]]].join(" ")
  }, props.icon ? {
    front: h(Icon, props.icon)
  } : null));
};

var _Card = function _Card(_ref5) {
  var h = _ref5.h,
      a = _ref5.a,
      CardActions = _ref5.CardActions,
      CardMedia = _ref5.CardMedia,
      CardPrimary = _ref5.CardPrimary,
      Icon = _ref5.Icon,
      ListTile = _ref5.ListTile,
      Shadow = _ref5.Shadow,
      props = _objectWithoutProperties(_ref5, ["h", "a", "CardActions", "CardMedia", "CardPrimary", "Icon", "ListTile", "Shadow"]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, props.url, props.events);

  var dispatcher = function dispatcher(block) {
    var blockName = Object.keys(block)[0];

    var props = _extends({}, block[blockName], {
      dispatcher: dispatcher,
      key: undefined
    });

    switch (blockName) {
      case "actions":
        return h(CardActions, props);

      case "header":
        return createHeader({
          props: props,
          h: h,
          a: a,
          Icon: Icon,
          ListTile: ListTile
        });

      case "media":
        return h(CardMedia, props);

      case "overlay":
        return createOverlay({
          dispatcher: dispatcher,
          props: props,
          h: h,
          a: a
        });

      case "primary":
        return h(CardPrimary, props);

      case "text":
        return createText({
          props: props,
          h: h,
          a: a
        });

      case "any":
        return createAny({
          props: props,
          h: h,
          a: a
        });

      default:
        throw "Content type \"".concat(blockName, "\" does not exist");
    }
  };

  var blocks = Array.isArray(props.content) ? props.content.map(dispatcher) : [props.content]; // deprecated;

  var componentContent = [props.before].concat(_toConsumableArray(blocks), [props.after]);
  var shadowDepth = props.shadowDepth !== undefined ? props.shadowDepth : props.z; // deprecated

  var content = [h(Shadow, {
    shadowDepth: shadowDepth !== undefined ? shadowDepth : 1,
    animated: true
  }), h("div", {
    className: classes.content
  }, componentContent), props.children];
  var element = props.element || props.url ? "a" : "div";
  return h(element, componentProps, content);
};

var imageRatios = {
  landscape: 16 / 9,
  square: 1
};
var mediaSizeClasses = {
  small: classes.mediaSmall,
  regular: classes.mediaRegular,
  medium: classes.mediaMedium,
  large: classes.mediaLarge
};

var mediaSizeClass = function mediaSizeClass() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return mediaSizeClasses[size];
};

var initImage = function initImage(_ref) {
  var dom = _ref.dom,
      src = _ref.src,
      ratio = _ref.ratio,
      origin = _ref.origin;
  var img = new Image();

  img.onload = function () {
    // use a background image on the image container
    if (img.tagName === "IMG") {
      dom.style.backgroundImage = "url(".concat(img.src, ")");
    }

    var naturalRatio = this.naturalWidth / this.naturalHeight; // crop-x: crop over x axis
    // crop-y: crop over y axis

    var cropClass = naturalRatio < imageRatios[ratio] ? classes.mediaCropX : classes.mediaCropY;
    dom.classList.add(cropClass);
    var originClass = origin === "start" ? classes.mediaOriginStart : origin === "end" ? classes.mediaOriginEnd : classes.mediaOriginCenter;
    dom.classList.add(originClass);
  };

  img.src = src;
};

var _CardMedia = function _CardMedia(_ref2) {
  var h = _ref2.h,
      a = _ref2.a,
      useEffect = _ref2.useEffect,
      useState = _ref2.useState,
      getRef = _ref2.getRef,
      props = _objectWithoutProperties(_ref2, ["h", "a", "useEffect", "useState", "getRef"]);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var ratio = props.ratio || "landscape";
  useEffect(function () {
    if (!domElement) {
      return;
    }

    var ratio = props.ratio || "landscape";
    var origin = props.origin || "center";
    var img = domElement.querySelector("img") || domElement.querySelector("iframe");
    initImage({
      dom: domElement,
      src: img.src,
      ratio: ratio,
      origin: origin
    });
  }, [domElement]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), getRef(function (dom) {
    return dom && !domElement && setDomElement(dom);
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.media, mediaSizeClass(props.size), ratio === "landscape" ? classes.mediaRatioLandscape : classes.mediaRatioSquare, props.className || props[a["class"]]].join(" ")
  }, props.events);

  var dispatcher = props.dispatcher;
  var content = [props.content, props.overlay ? dispatcher({
    overlay: props.overlay
  }) : props.showDimmer && h("div", {
    className: classes.mediaDimmer
  })];
  return h(props.element || "div", componentProps, content);
};

var buttonClasses = {
  component: "pe-text-button",
  "super": "pe-button",
  row: "pe-button-row",
  // elements      
  content: "pe-button__content",
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  washColor: "pe-button__wash-color",
  dropdown: "pe-button__dropdown",
  // states      
  border: "pe-button--border",
  contained: "pe-button--contained",
  disabled: "pe-button--disabled",
  dropdownClosed: "pe-button--dropdown-closed",
  dropdownOpen: "pe-button--dropdown-open",
  extraWide: "pe-button--extra-wide",
  hasDropdown: "pe-button--dropdown",
  highLabel: "pe-button--high-label",
  inactive: "pe-button--inactive",
  raised: "pe-button--raised",
  selected: "pe-button--selected",
  separatorAtStart: "pe-button--separator-start",
  hasHover: "pe-button--has-hover"
};
var actionLayoutClasses = {
  horizontal: classes.actionsHorizontal,
  vertical: classes.actionsVertical,
  justified: classes.actionsJustified
};

var actionClassForLayout = function actionClassForLayout() {
  var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "horizontal";
  return actionLayoutClasses[layout];
};

var _CardActions = function _CardActions(_ref) {
  var h = _ref.h,
      a = _ref.a,
      props = _objectWithoutProperties(_ref, ["h", "a"]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.actions, props.layout !== "vertical" ? buttonClasses.row : null, actionClassForLayout(props.layout), props.border || props.bordered ? classes.actionsBorder : null, props.tight ? classes.actionsTight : null, props.className || props[a["class"]]].join(" ")
  }, props.events);

  var content = props.content || props.children;
  return h(props.element || "div", componentProps, content);
};

var _CardPrimary = function _CardPrimary(_ref) {
  var h = _ref.h,
      a = _ref.a,
      props = _objectWithoutProperties(_ref, ["h", "a"]);

  var primaryHasMedia = Array.isArray(props.content) ? props.content.reduce(function (total, current) {
    return Object.keys(current)[0] === "media" ? true : total;
  }, false) : props.media || false;

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.primary, props.tight ? classes.primaryTight : null, primaryHasMedia ? classes.primaryHasMedia : null, props.className || props[a["class"]]].join(" ")
  }, props.events);

  var dispatcher = props.dispatcher;
  var primaryDispatch = {
    title: function title(pAttrs) {
      return pAttrs.attrs // Mithril
      || pAttrs.props // React
      ? pAttrs || pAttrs.props : h("div", {
        className: classes.title,
        style: pAttrs.style
      }, [pAttrs.title, pAttrs.subtitle ? h("div", {
        className: classes.subtitle
      }, pAttrs.subtitle) : null]);
    },
    media: function media(pAttrs) {
      return h("div", {
        className: classes.primaryMedia,
        style: pAttrs.style
      }, dispatcher({
        media: pAttrs
      }));
    },
    actions: function actions(pAttrs) {
      return dispatcher({
        actions: pAttrs
      });
    }
  };
  var content = Array.isArray(props.content) ? props.content.map(function (block) {
    var key = Object.keys(block)[0];
    var pAttrs = block[key];
    return primaryDispatch[key] ? primaryDispatch[key](pAttrs) : block;
  }) : [props.title ? primaryDispatch.title({
    title: props.title,
    subtitle: props.subtitle
  }) : null, props.media ? primaryDispatch.media(props.media) : null, props.actions ? primaryDispatch.actions(props.actions) : null, props.content];
  return h(props.element || "div", componentProps, content);
};



/***/ }),

/***/ "../../polythene-core-checkbox/dist/polythene-core-checkbox.mjs":
/*!***************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-checkbox/dist/polythene-core-checkbox.mjs ***!
  \***************************************************************************************************************************************/
/*! exports provided: _Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Checkbox", function() { return _Checkbox; });
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

var classes = {
  component: "pe-checkbox-control"
};
var iconOn = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/></svg>";
var iconOff = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/></svg>";
var icons = {
  iconOff: iconOff,
  iconOn: iconOn
};

var _Checkbox = function _Checkbox(_ref) {
  var h = _ref.h,
      SelectionControl = _ref.SelectionControl,
      props = _objectWithoutProperties(_ref, ["h", "SelectionControl"]);

  var componentProps = _extends({}, props, {
    icons: icons,
    selectable: props.selectable || function () {
      return true;
    },
    // default: always selectable, regardless the checked state
    instanceClass: classes.component,
    type: "checkbox"
  });

  return h(SelectionControl, componentProps);
};



/***/ }),

/***/ "../../polythene-core-dialog-pane/dist/polythene-core-dialog-pane.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-dialog-pane/dist/polythene-core-dialog-pane.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: _DialogPane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_DialogPane", function() { return _DialogPane; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

var classes = {
  component: "pe-dialog-pane",
  // elements
  actions: "pe-dialog-pane__actions",
  body: "pe-dialog-pane__body",
  content: "pe-dialog-pane__content",
  footer: "pe-dialog-pane__footer",
  header: "pe-dialog-pane__header",
  title: "pe-dialog-pane__title",
  // states
  withHeader: "pe-dialog-pane--header",
  withFooter: "pe-dialog-pane--footer",
  headerWithTitle: "pe-dialog-pane__header--title",
  footerWithButtons: "pe-dialog-pane__footer--buttons",
  footerHigh: "pe-dialog-pane__footer--high",
  borderBottom: "pe-dialog-pane--border-bottom",
  borderTop: "pe-dialog-pane--border-top",
  fullBleed: "pe-dialog-pane--body-full-bleed"
};
var buttonClasses = {
  component: "pe-text-button",
  "super": "pe-button",
  row: "pe-button-row",
  // elements      
  content: "pe-button__content",
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  washColor: "pe-button__wash-color",
  dropdown: "pe-button__dropdown",
  // states      
  border: "pe-button--border",
  contained: "pe-button--contained",
  disabled: "pe-button--disabled",
  dropdownClosed: "pe-button--dropdown-closed",
  dropdownOpen: "pe-button--dropdown-open",
  extraWide: "pe-button--extra-wide",
  hasDropdown: "pe-button--dropdown",
  highLabel: "pe-button--high-label",
  inactive: "pe-button--inactive",
  raised: "pe-button--raised",
  selected: "pe-button--selected",
  separatorAtStart: "pe-button--separator-start",
  hasHover: "pe-button--has-hover"
};
var SCROLL_WATCH_END_TIMER = 50;

var _DialogPane = function _DialogPane(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      getRef = _ref.getRef,
      unpackedProps = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "useRef", "getRef"]);

  var props = Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unpackAttrs"])(unpackedProps);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isScrolling = _useState4[0],
      setIsScrolling = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      hasTopOverflow = _useState6[0],
      setHasTopOverflow = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      hasBottomOverflow = _useState8[0],
      setHasBottomOverflow = _useState8[1];

  var headerElRef = useRef();
  var footerElRef = useRef();
  var scrollElRef = useRef();
  var scrollWatchIdRef = useRef();

  var updateScrollOverflowState = function updateScrollOverflowState() {
    var scroller = scrollElRef.current;

    if (!scroller) {
      return;
    }

    setHasTopOverflow(scroller.scrollTop > 0);
    setHasBottomOverflow(scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0);
  };

  useEffect(function () {
    if (!domElement) {
      return;
    }

    headerElRef.current = domElement.querySelector(".".concat(classes.header));
    footerElRef.current = domElement.querySelector(".".concat(classes.footer));
    scrollElRef.current = domElement.querySelector(".".concat(classes.body));
  }, [domElement]);
  useEffect(function () {
    if (!scrollElRef.current) {
      return;
    }

    var update = function update() {
      updateScrollOverflowState();
    };

    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("resize", update);
    return function () {
      Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("resize", update);
    };
  }, [scrollElRef.current]);
  useEffect(function () {
    updateScrollOverflowState();
  }, [scrollElRef.current, isScrolling]);
  var withHeader = props.header !== undefined || props.title !== undefined;
  var withFooter = props.footer !== undefined || props.footerButtons !== undefined;
  var borders = props.borders || "overflow";
  var showTopBorder = borders === "always" || withHeader && borders === "overflow" && hasTopOverflow;
  var showBottomBorder = borders === "always" || withFooter && borders === "overflow" && hasBottomOverflow;

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props, {
    remove: ["style"]
  }), // style set in content, and set by show/hide transition
  props.testId && {
    "data-test-id": props.testId
  }, getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom));
  }), {
    className: [classes.component, props.fullBleed ? classes.fullBleed : null, showTopBorder ? classes.borderTop : null, showBottomBorder ? classes.borderBottom : null, withHeader ? classes.withHeader : null, withFooter ? classes.withFooter : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, props.formOptions);

  var componentContent = h("div", {
    className: [classes.content, props.menu ? classes.menuContent : null].join(" "),
    style: props.style
  }, [props.header ? props.header : props.title ? h("div", {
    className: [classes.header, classes.headerWithTitle].join(" ")
  }, h("div", {
    className: classes.title
  }, props.title)) : null, h("div", _defineProperty({
    className: classes.body
  }, a.onscroll, function () {
    setIsScrolling(true);
    clearTimeout(scrollWatchIdRef.current);
    scrollWatchIdRef.current = setTimeout(function () {
      setIsScrolling(false);
    }, SCROLL_WATCH_END_TIMER);
  }), props.content || props.body || props.menu), props.footer ? h("div", {
    className: classes.footer
  }, props.footer) : props.footerButtons ? h("div", {
    className: [classes.footer, classes.footerWithButtons, buttonClasses.row].join(" ")
  }, h("div", {
    className: classes.actions
  }, props.footerButtons)) : null]);
  var content = [props.before, componentContent, props.after];
  return h(props.element || "form", componentProps, content);
};



/***/ }),

/***/ "../../polythene-core-dialog/dist/polythene-core-dialog.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-dialog/dist/polythene-core-dialog.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: _Dialog, openDialogsSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Dialog", function() { return _Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDialogsSelector", function() { return openDialogsSelector; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};
var menuClasses = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};
var classes = {
  component: "pe-dialog",
  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",
  backdrop: "pe-dialog__backdrop",
  touch: "pe-dialog__touch",
  // states
  fullScreen: "pe-dialog--full-screen",
  modal: "pe-dialog--modal",
  open: "pe-dialog--open",
  // class set to html element
  visible: "pe-dialog--visible",
  // class set to dialog element
  showBackdrop: "pe-dialog--backdrop",
  transition: "pe-dialog--transition",
  // lookup
  menuContent: menuClasses.content
};
var DEFAULT_SHADOW_DEPTH = 3;
var openDialogsSelector = ".".concat(classes.component);

var createPane = function createPane(_ref) {
  var h = _ref.h,
      Pane = _ref.Pane,
      props = _ref.props;
  return h(Pane, {
    body: props.content || props.body || props.menu || props.children,
    element: props.element,
    borders: props.borders,
    className: props.className,
    footer: props.footer,
    footerButtons: props.footerButtons,
    formOptions: props.formOptions,
    fullBleed: props.fullBleed,
    header: props.header,
    style: props.style,
    title: props.title
  });
};

var _Dialog = function _Dialog(_ref2) {
  var h = _ref2.h,
      a = _ref2.a,
      useState = _ref2.useState,
      useEffect = _ref2.useEffect,
      useRef = _ref2.useRef,
      getRef = _ref2.getRef,
      useReducer = _ref2.useReducer,
      Pane = _ref2.Pane,
      Shadow = _ref2.Shadow,
      openDialogsSelector = _ref2.openDialogsSelector,
      props = _objectWithoutProperties(_ref2, ["h", "a", "useState", "useEffect", "useRef", "getRef", "useReducer", "Pane", "Shadow", "openDialogsSelector"]);

  var _useReducer = useReducer(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionStateReducer"], polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      transitionState = _useReducer2[0],
      dispatchTransitionState = _useReducer2[1];

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var backdropElRef = useRef();
  var touchElRef = useRef();
  var contentElRef = useRef();
  var isVisible = (transitionState || polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]).isVisible;
  var isTransitioning = (transitionState || polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]).isTransitioning;

  var transitionOptions = function transitionOptions(_ref3) {
    var isShow = _ref3.isShow,
        _ref3$hideDelay = _ref3.hideDelay,
        hideDelay = _ref3$hideDelay === void 0 ? props.hideDelay : _ref3$hideDelay,
        referrer = _ref3.referrer;
    return {
      transitionState: transitionState,
      dispatchTransitionState: dispatchTransitionState,
      instanceId: props.instanceId,
      props: _extends({}, props, {
        hideDelay: hideDelay
      }),
      isShow: isShow,
      domElements: {
        el: domElement,
        contentEl: contentElRef.current,
        backdropEl: backdropElRef.current
      },
      showClass: classes.visible,
      transitionClass: classes.transition,
      referrer: referrer
    };
  };

  var showDialog = function showDialog() {
    return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions({
      isShow: true
    }));
  };

  var hideDialog = function hideDialog() {
    var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        hideDelay = _ref4.hideDelay,
        referrer = _ref4.referrer;

    return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions({
      isShow: false,
      hideDelay: hideDelay,
      referrer: referrer
    }));
  };

  var isModal = function isModal() {
    return props.modal || domElement && domElement.classList.contains(classes.modal) || Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["stylePropCompare"])({
      element: domElement,
      pseudoSelector: ":before",
      prop: "content",
      contains: "\"".concat("modal", "\"")
    });
  };

  var isFullScreen = function isFullScreen() {
    return props.fullScreen || domElement && domElement.classList.contains(classes.fullScreen) || Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["stylePropCompare"])({
      element: domElement,
      pseudoSelector: ":before",
      prop: "content",
      contains: "\"".concat("full_screen", "\"")
    });
  }; // DOM elements


  useEffect(function () {
    if (!domElement) {
      return;
    }

    backdropElRef.current = domElement.querySelector(".".concat(classes.backdrop));
    touchElRef.current = domElement.querySelector(".".concat(classes.touch));
    contentElRef.current = domElement.querySelector(".".concat(classes.content));
  }, [domElement]); // Handle Escape key

  useEffect(function () {
    if (!domElement || props.inactive) {
      return;
    }

    var handleEscape = function handleEscape(e) {
      if (props.disableEscape && (isFullScreen() || isModal())) return;

      if (e.key === "Escape" || e.key === "Esc") {
        // "Esc" for IE11
        var openDialogs = document.querySelectorAll(openDialogsSelector);

        if (openDialogs[openDialogs.length - 1] === domElement) {
          hideDialog();
          Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("keydown", handleEscape);
        }
      }
    };

    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("keydown", handleEscape);
    return function () {
      Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("keydown", handleEscape);
    };
  }, [domElement, props.inactive]); // Show / hide logic

  useEffect(function () {
    if (!domElement || isTransitioning) {
      return;
    }

    if (props.hide) {
      if (isVisible) {
        hideDialog();
      }
    } else if (props.show) {
      if (!isVisible) {
        showDialog();
      }
    }
  }, [domElement, isTransitioning, isVisible, props.hide, props.show]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props, {
    remove: ["style"]
  }), // style set in content, and set by show/hide transition
  getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom));
  }), _defineProperty({
    className: [props.parentClassName || classes.component, props.fromMultipleClassName, props.fullScreen ? classes.fullScreen : null, props.modal ? classes.modal : null, props.backdrop ? classes.showBackdrop : null, // classes.visible is set in showDialog though transition
    props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" "),
    "data-spawn-id": props.spawnId,
    // received from Multi
    "data-instance-id": props.instanceId
  }, a.onclick, function (e) {
    if (e.target !== domElement && e.target !== backdropElRef.current && e.target !== touchElRef.current) {
      return;
    }

    if (isModal()) {
      // not allowed
      return;
    }

    hideDialog();
  }));

  var pane = props.panesOptions && props.panesOptions.length ? h(Pane, props.panesOptions[0]) : props.panes && props.panes.length ? props.panes[0] : createPane({
    h: h,
    Pane: Pane,
    props: props
  });
  var shadowDepth = props.shadowDepth;
  var content = [h("div", {
    className: classes.backdrop
  }), h("div", {
    className: classes.touch
  }), h("div", {
    className: [classes.content, props.menu ? classes.menuContent : null].join(" ")
  }, [props.fullScreen ? null : h(Shadow, {
    shadowDepth: shadowDepth !== undefined ? shadowDepth : DEFAULT_SHADOW_DEPTH,
    animated: true
  }), props.before, pane, props.after])];
  return h("div", componentProps, content);
};



/***/ }),

/***/ "../../polythene-core-drawer/dist/polythene-core-drawer.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-drawer/dist/polythene-core-drawer.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: _Drawer, openDialogsSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Drawer", function() { return _Drawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDialogsSelector", function() { return openDialogsSelector; });
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

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};
var menuClasses = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};
var dialogClasses = {
  component: "pe-dialog",
  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",
  backdrop: "pe-dialog__backdrop",
  touch: "pe-dialog__touch",
  // states
  fullScreen: "pe-dialog--full-screen",
  modal: "pe-dialog--modal",
  open: "pe-dialog--open",
  // class set to html element
  visible: "pe-dialog--visible",
  // class set to dialog element
  showBackdrop: "pe-dialog--backdrop",
  transition: "pe-dialog--transition",
  // lookup
  menuContent: menuClasses.content
};
var classes = {
  component: "pe-dialog pe-drawer",
  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  border: "pe-drawer--border",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorEnd: "pe-drawer--anchor-end",
  visible: dialogClasses.visible
};
var openDialogsSelector = ".".concat(classes.component, ".").concat(classes.visible, ":not(.").concat(classes.permanent, "),.").concat(classes.component, ".").concat(classes.visible, ".").concat(classes.mini, ",.").concat(classes.component, ".").concat(classes.cover, ",.").concat(classes.component, ".").concat(classes.permanent, ".").concat(classes.visible).replace(/ /g, ".");

var _Drawer = function _Drawer(_ref) {
  var h = _ref.h,
      Dialog = _ref.Dialog,
      props = _objectWithoutProperties(_ref, ["h", "Dialog"]);

  var isCover = !(props.push || props.permanent || props.mini);

  var componentProps = _extends({}, props, {
    fullBleed: true,
    className: null,
    parentClassName: [props.className, classes.component, isCover ? classes.cover : null, props.push ? classes.push : null, props.permanent ? classes.permanent : null, props.border ? classes.border : null, props.mini ? classes.mini : null, props.floating ? classes.floating : null, props.fixed ? classes.fixed : null, props.anchor === "end" ? classes.anchorEnd : null].join(" "),
    inactive: props.permanent && !props.mini,
    shadowDepth: props.shadowDepth !== undefined ? props.shadowDepth : 0
  });

  return h(Dialog, componentProps, props.children);
};



/***/ }),

/***/ "../../polythene-core-fab/dist/polythene-core-fab.mjs":
/*!*****************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-fab/dist/polythene-core-fab.mjs ***!
  \*****************************************************************************************************************************/
/*! exports provided: _FAB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_FAB", function() { return _FAB; });
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

var classes = {
  component: "pe-fab",
  // elements
  content: "pe-fab__content",
  // states
  mini: "pe-fab--mini"
};

var _FAB = function _FAB(_ref) {
  var h = _ref.h,
      a = _ref.a,
      Button = _ref.Button,
      Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ["h", "a", "Button", "Icon"]);

  var content = props.content ? props.content : props.icon ? h(Icon, props.icon) : props.children;

  var componentProps = _extends({}, props, {
    content: h("div", {
      className: classes.content
    }, content),
    parentClassName: [classes.component, props.mini ? classes.mini : null, props.className || props[a["class"]]].join(" "),
    className: null,
    // defaults
    ripple: {
      center: true,
      opacityDecayVelocity: 0.24
    },
    shadow: {
      increase: 5
    },
    ink: true,
    wash: true,
    raised: true,
    animateOnTap: props.animateOnTap !== undefined ? props.animateOnTap : true
  });

  return h(Button, componentProps, content);
};



/***/ }),

/***/ "../../polythene-core-icon-button/dist/polythene-core-icon-button.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-icon-button/dist/polythene-core-icon-button.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: _IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_IconButton", function() { return _IconButton; });
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

var classes = {
  component: "pe-button pe-icon-button",
  // elements
  content: "pe-icon-button__content",
  label: "pe-icon-button__label",
  // states
  compact: "pe-icon-button--compact"
};

var _IconButton = function _IconButton(_ref) {
  var h = _ref.h,
      Icon = _ref.Icon,
      Button = _ref.Button,
      props = _objectWithoutProperties(_ref, ["h", "Icon", "Button"]);

  var content = props.content ? props.content : props.icon ? h(Icon, props.icon) : props.children;

  var buttonProps = _extends({}, {
    content: h("div", {
      className: classes.content
    }, content),
    after: props.label && h("div", {
      className: classes.label
    }, props.label),
    parentClassName: [props.parentClassName || classes.component, props.compact ? classes.compact : null].join(" "),
    // defaults
    wash: false,
    animateOnTap: false
  }, props);

  return h(Button, buttonProps);
};



/***/ }),

/***/ "../../polythene-core-icon/dist/polythene-core-icon.mjs":
/*!*******************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-icon/dist/polythene-core-icon.mjs ***!
  \*******************************************************************************************************************************/
/*! exports provided: _Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Icon", function() { return _Icon; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

var classes = {
  component: "pe-icon",
  // states
  avatar: "pe-icon--avatar",
  large: "pe-icon--large",
  medium: "pe-icon--medium",
  regular: "pe-icon--regular",
  small: "pe-icon--small"
};

var _Icon = function _Icon(_ref) {
  var h = _ref.h,
      a = _ref.a,
      SVG = _ref.SVG,
      props = _objectWithoutProperties(_ref, ["h", "a", "SVG"]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["classForSize"])(classes, props.size), props.avatar ? classes.avatar : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, props.events);

  var content = [props.before, props.content ? props.content : props.svg ? h(SVG, props.svg) : props.src ? h("img", {
    src: props.src
  }) : props.children, props.after];
  return h(props.element || "div", componentProps, content);
};



/***/ }),

/***/ "../../polythene-core-ios-spinner/dist/polythene-core-ios-spinner.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-ios-spinner/dist/polythene-core-ios-spinner.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: _Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Spinner", function() { return _Spinner; });
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

var classes = {
  component: "pe-ios-spinner",
  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};

var blade = function blade(num, h) {
  return h("div", {
    // key: `blade-${num}`,
    className: classes.blade
  });
};

var _Spinner = function _Spinner(_ref) {
  var h = _ref.h,
      BaseSpinner = _ref.BaseSpinner,
      props = _objectWithoutProperties(_ref, ["h", "BaseSpinner"]);

  var content = props.content || h("div", {
    // key: "content",
    className: classes.blades
  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (num) {
    return blade(num, h);
  }));

  var componentProps = _extends({}, props, {
    className: [classes.component, props.className].join(" "),
    content: content
  });

  return h(BaseSpinner, componentProps);
};



/***/ }),

/***/ "../../polythene-core-list-tile/dist/polythene-core-list-tile.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-list-tile/dist/polythene-core-list-tile.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: _ListTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ListTile", function() { return _ListTile; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

var classes = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};

var _ListTile = function _ListTile(_ref) {
  var h = _ref.h,
      a = _ref.a,
      Ripple = _ref.Ripple,
      Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ["h", "a", "Ripple", "Icon"]); // Remove unused props


  delete props.key;
  var hasTabIndex = !props.header && !props.url && !(props.secondary && props.secondary.url);
  var heightClass = props.subtitle ? classes.hasSubtitle : props.highSubtitle ? classes.hasHighSubtitle : props.front || props.indent ? classes.hasFront : null;

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props, {
    remove: ["tabindex", "tabIndex"]
  }), // tabindex is set elsewhere
  props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.selected ? classes.selected : null, props.disabled ? classes.disabled : null, props.sticky ? classes.sticky : null, props.compact ? classes.compact : null, props.hoverable ? classes.hoverable : null, props.selectable ? classes.selectable : null, props.highlight ? classes.highlight : null, props.rounded ? classes.rounded : null, props.header ? classes.header : null, props.inset || props.insetH ? classes.insetH : null, props.inset || props.insetV ? classes.insetV : null, props.navigation ? classes.navigation : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, heightClass, props.className || props[a["class"]]].join(" ")
  }, hasTabIndex && _defineProperty({}, a.tabindex, props[a.tabindex] || 0) // events and url are attached to primary content to not interfere with controls
  );

  var primaryProps = props;
  delete primaryProps.id;
  delete primaryProps[a["class"]];
  var componentContent = [props.ink && !props.disabled ? h(Ripple, _extends({}, props.ripple)) : null, primaryContent({
    h: h,
    a: a,
    props: primaryProps
  }), props.secondary ? secondaryContent({
    h: h,
    a: a,
    Icon: Icon,
    props: props.secondary
  }) : null];
  var content = [props.before].concat(componentContent, [props.after]);
  return h("div", // because primary or secondary content can be an "a", the container is always defined as "div", and option `element` is passed to primary content
  componentProps, content);
};

var primaryContent = function primaryContent(_ref3) {
  var h = _ref3.h,
      a = _ref3.a,
      props = _ref3.props;
  var url = props.keyboardControl ? null : props.url;
  var element = props.element ? props.element : url ? "a" : "div";
  var contentFrontClass = [classes.content, classes.contentFront, props.compactFront ? classes.compactFront : null].join(" ");
  var frontComp = props.front || props.indent ? h("div", _extends({}, {
    className: contentFrontClass
  }), props.front) : null;
  var hasTabIndex = !props.header && props.url;

  var elementProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.events, {
    className: classes.primary,
    style: null
  }, hasTabIndex && _defineProperty({}, a.tabindex, props[a.tabindex] || 0), url);

  var content = props.content ? props.content : [frontComp, h("div", {
    className: classes.content,
    style: props.style
  }, [props.title && !props.content ? h("div", _extends({}, {
    className: classes.title
  }), props.title) : null, props.subtitle ? h("div", _extends({}, {
    className: classes.subtitle
  }), props.subtitle) : null, props.highSubtitle ? h("div", _extends({}, {
    className: classes.subtitle + " " + classes.highSubtitle
  }), props.highSubtitle) : null, props.subContent ? h("div", _extends({}, {
    className: classes.subContent
  }), props.subContent) : null, props.children])];
  return h(element, elementProps, content);
};

var secondaryContent = function secondaryContent(_ref5) {
  var h = _ref5.h,
      a = _ref5.a,
      Icon = _ref5.Icon,
      _ref5$props = _ref5.props,
      props = _ref5$props === void 0 ? {} : _ref5$props;
  var url = props.keyboardControl ? null : props.url;
  var element = props.element ? props.element : url ? "a" : "div";
  var hasTabIndex = props.url;
  return h(element, _extends({}, url, {
    className: classes.secondary
  }, props.events, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), hasTabIndex && _defineProperty({}, a.tabindex, props[a.tabindex] || 0)), h("div", {
    className: classes.content
  }, [props.icon ? h(Icon, props.icon) : null, props.content ? props.content : null]));
};



/***/ }),

/***/ "../../polythene-core-list/dist/polythene-core-list.mjs":
/*!*******************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-list/dist/polythene-core-list.mjs ***!
  \*******************************************************************************************************************************/
/*! exports provided: _List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_List", function() { return _List; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};
var classes = {
  component: "pe-list",
  // states
  border: "pe-list--border",
  compact: "pe-list--compact",
  hasHeader: "pe-list--header",
  indentedBorder: "pe-list--indented-border",
  padding: "pe-list--padding",
  paddingTop: "pe-list--padding-top",
  paddingBottom: "pe-list--padding-bottom",
  // lookup
  header: listTileClasses.header
};
var paddingClasses = {
  both: classes.padding,
  bottom: classes.paddingBottom,
  top: classes.paddingTop,
  none: null
};

var paddingClass = function paddingClass() {
  var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "both";
  return paddingClasses[attr];
};

var _List = function _List(_ref) {
  var h = _ref.h,
      a = _ref.a,
      ListTile = _ref.ListTile,
      props = _objectWithoutProperties(_ref, ["h", "a", "ListTile"]); // Remove unused props


  delete props.key;

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.border || props.borders ? classes.border : null, props.indentedBorder || props.indentedBorders ? classes.indentedBorder : null, props.header ? classes.hasHeader : null, props.compact ? classes.compact : null, paddingClass(props.padding), props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var headerOpts;

  if (props.header) {
    headerOpts = _extends({}, props.header);
    headerOpts[a["class"]] = [classes.header, headerOpts[a["class"]] || null].join(" ");
  }

  var tiles = props.tiles ? props.tiles : props.content ? props.content : props.children;
  var componentContent = [headerOpts ? h(ListTile, _objectSpread2({}, props.all, {}, headerOpts, {
    header: true
  })) : undefined].concat(_toConsumableArray(props.all ? tiles.map(function (tileOpts) {
    return h(ListTile, _objectSpread2({}, props.all, {}, tileOpts));
  }) : tiles));
  var content = [props.before].concat(_toConsumableArray(componentContent), [props.after]);
  return h(props.element || "div", componentProps, content);
};



/***/ }),

/***/ "../../polythene-core-material-design-progress-spinner/dist/polythene-core-material-design-progress-spinner.mjs":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-material-design-progress-spinner/dist/polythene-core-material-design-progress-spinner.mjs ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: _Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Spinner", function() { return _Spinner; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-utilities */ "../../polythene-utilities/dist/polythene-utilities.mjs");



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

var classes = {
  component: "pe-md-progress-spinner",
  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};

var percentageValue = function percentageValue(min, max) {
  var percentage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return min + (max - min) * percentage;
};

var rotateCircle = function rotateCircle(domElement, min, max, percentage) {
  var style = domElement.style;
  style["transform"] = style["-webkit-transform"] = style["-moz-transform"] = style["-ms-transform"] = style["-o-transform"] = "rotate(" + percentageValue(min, max, percentage) + "deg)";
};

var animate = function animate(stateEl, size, percentage) {
  var animationEl = stateEl.querySelector("." + classes.animation);
  var animationElStyle = animationEl.style;

  if (percentage < 0.5) {
    animationElStyle.clip = "rect(0px, " + size + "px, " + size + "px, " + size / 2 + "px)";
  } else {
    animationElStyle.clip = "rect(auto, auto, auto, auto)";
  }

  var leftCircle = stateEl.querySelector("." + classes.circleLeft);
  var rightCircle = stateEl.querySelector("." + classes.circleRight);
  leftCircle.style.clip = rightCircle.style.clip = "rect(0px, " + size / 2 + "px, " + size + "px, " + "0px)";
  rotateCircle(rightCircle, 0, 180, Math.min(1, percentage * 2));
  rotateCircle(leftCircle, 0, 360, percentage);
};

var updateWithPercentage = function updateWithPercentage(_ref) {
  var domElement = _ref.domElement,
      isAnimating = _ref.isAnimating,
      setIsAnimating = _ref.setIsAnimating,
      percentage = _ref.percentage,
      setPercentage = _ref.setPercentage,
      size = _ref.size,
      props = _ref.props;

  if (!domElement || isAnimating || size === undefined || props.percentage === undefined) {
    return;
  }

  var currentPercentage = Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unpackAttrs"])(props.percentage);
  var previousPercentage = percentage;

  if (previousPercentage !== currentPercentage) {
    var easingFn = props.animated ? polythene_utilities__WEBPACK_IMPORTED_MODULE_1__["easing"].easeInOutQuad : function (v) {
      return v;
    };

    if (props.animated) {
      var animationDuration = props.updateDuration !== undefined ? props.updateDuration * 1000 : Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["styleDurationToMs"])(Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getStyle"])({
        element: domElement.querySelector(".".concat(classes.animation)),
        prop: "animation-duration"
      }));
      var start = null;

      var step = function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        var stepPercentage = 1.0 / animationDuration * progress;
        var newPercentage = previousPercentage + stepPercentage * (currentPercentage - previousPercentage);
        animate(domElement, size, easingFn(newPercentage));

        if (start && progress < animationDuration) {
          window.requestAnimationFrame(step);
        } else {
          start = null;
          setPercentage(currentPercentage);
          setIsAnimating(false);
        }
      };

      setIsAnimating(true);
      window.requestAnimationFrame(step);
    } else {
      animate(domElement, size, easingFn(currentPercentage));
      setPercentage(currentPercentage);
    }
  }
};

var getSize = function getSize(element) {
  return Math.round(element ? parseFloat(Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getStyle"])({
    element: element,
    prop: "height"
  })) - 2 * parseFloat(Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getStyle"])({
    element: element,
    prop: "padding"
  })) : 0);
};

var _Spinner = function _Spinner(_ref2) {
  var h = _ref2.h,
      useState = _ref2.useState,
      useEffect = _ref2.useEffect,
      BaseSpinner = _ref2.BaseSpinner,
      props = _objectWithoutProperties(_ref2, ["h", "useState", "useEffect", "BaseSpinner"]);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      percentage = _useState2[0],
      setPercentage = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isAnimating = _useState4[0],
      setIsAnimating = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      domElement = _useState6[0],
      setDomElement = _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      size = _useState8[0],
      setSize = _useState8[1];

  useEffect(function () {
    if (!domElement) {
      return;
    }

    setSize(getSize(domElement));
  }, [domElement]);
  updateWithPercentage({
    domElement: domElement,
    isAnimating: isAnimating,
    percentage: percentage,
    setPercentage: setPercentage,
    setIsAnimating: setIsAnimating,
    size: size,
    props: props
  });
  var content = props.content || h("div", {
    className: classes.animation,
    style: {
      width: size + "px",
      height: size + "px"
    }
  }, [h("div", {
    className: [classes.circle, classes.circleLeft].join(" ")
  }), h("div", {
    className: [classes.circle, classes.circleRight].join(" ")
  })]);

  var componentProps = _extends({}, props, {
    ref: function ref(dom) {
      return dom && !domElement && setDomElement(dom);
    },
    className: [classes.component, props.className].join(" "),
    content: content
  });

  return h(BaseSpinner, componentProps);
};



/***/ }),

/***/ "../../polythene-core-material-design-spinner/dist/polythene-core-material-design-spinner.mjs":
/*!*********************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-material-design-spinner/dist/polythene-core-material-design-spinner.mjs ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: _Spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Spinner", function() { return _Spinner; });
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

var classes = {
  component: "pe-md-spinner",
  // elements
  animation: "pe-md-spinner__animation",
  circle: "pe-md-spinner__circle",
  circleClipper: "pe-md-spinner__circle-clipper",
  circleClipperLeft: "pe-md-spinner__circle-clipper-left",
  circleClipperRight: "pe-md-spinner__circle-clipper-right",
  gapPatch: "pe-md-spinner__gap-patch",
  layer: "pe-md-spinner__layer",
  layerN: "pe-md-spinner__layer-"
};

var layer = function layer(num, h) {
  return h("div", {
    key: num,
    className: [classes.layer, classes.layerN + num].join(" ")
  }, [h("div", {
    // key: "clipper-left",
    className: [classes.circleClipper, classes.circleClipperLeft].join(" ")
  }, h("div", {
    // key: "circle",
    className: classes.circle
  })), h("div", {
    // key: "gap-patch",
    className: classes.gapPatch
  }, h("div", {
    className: classes.circle
  })), h("div", {
    // key: "clipper-right",
    className: [classes.circleClipper, classes.circleClipperRight].join(" ")
  }, h("div", {
    className: classes.circle
  }))]);
};

var _Spinner = function _Spinner(_ref) {
  var h = _ref.h,
      BaseSpinner = _ref.BaseSpinner,
      props = _objectWithoutProperties(_ref, ["h", "BaseSpinner"]);

  var content = props.content || h("div", {
    // key: "content",
    className: classes.animation
  }, [1, 2, 3, 4].map(function (num) {
    return layer(num, h);
  }));

  var componentProps = _extends({}, props, {
    className: [classes.component, props.className].join(" "),
    content: content
  });

  return h(BaseSpinner, componentProps);
};



/***/ }),

/***/ "../../polythene-core-menu/dist/polythene-core-menu.mjs":
/*!*******************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-menu/dist/polythene-core-menu.mjs ***!
  \*******************************************************************************************************************************/
/*! exports provided: _Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Menu", function() { return _Menu; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};
var classes = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};
var DEFAULT_OFFSET_H = 0;
var DEFAULT_OFFSET_V = "79%";
var DEFAULT_TYPE = "floating";
var MIN_WIDTH = 1.5;
var DEFAULT_SHADOW_DEPTH = 1;

var unifyWidth = function unifyWidth(width) {
  return width < MIN_WIDTH ? MIN_WIDTH : width;
};

var widthClass = function widthClass(size) {
  return classes.width_n + size.toString().replace(".", "-");
};

var _Menu = function _Menu(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useReducer = _ref.useReducer,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      getRef = _ref.getRef,
      Shadow = _ref.Shadow,
      props = _objectWithoutProperties(_ref, ["h", "a", "useReducer", "useState", "useEffect", "useRef", "getRef", "Shadow"]);

  var _useReducer = useReducer(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionStateReducer"], polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      dispatchTransitionState = _useReducer2[1];

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(!!props.permanent),
      _useState4 = _slicedToArray(_useState3, 2),
      setIsVisible = _useState4[1];

  var panelElRef = useRef();
  var contentElRef = useRef();

  var update = function update() {
    positionMenu();
    scrollContent();
  };

  var transitionOptions = function transitionOptions(_ref2) {
    var isShow = _ref2.isShow,
        _ref2$hideDelay = _ref2.hideDelay,
        hideDelay = _ref2$hideDelay === void 0 ? props.hideDelay : _ref2$hideDelay;
    return {
      dispatchTransitionState: dispatchTransitionState,
      setIsVisible: setIsVisible,
      props: _extends({}, props, {
        hideDelay: hideDelay
      }),
      isShow: isShow,
      beforeTransition: isShow ? function () {
        return update();
      } : null,
      domElements: {
        el: panelElRef.current,
        showClassElement: domElement
      },
      showClass: classes.visible
    };
  };

  var isTopMenu = function isTopMenu() {
    return props.topMenu || Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["stylePropCompare"])({
      element: domElement,
      pseudoSelector: ":before",
      prop: "content",
      contains: "\"".concat("top_menu", "\"")
    });
  };

  var positionMenu = function positionMenu() {
    if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) {
      return;
    }

    if (!props.target) {
      return;
    }

    var panelEl = panelElRef.current;
    var contentEl = contentElRef.current;
    var targetEl = document.querySelector(props.target);

    if (!targetEl) {
      return;
    }

    if (!panelEl) {
      return;
    } // Don't set the position or top offset if the menu position is fixed


    var hasStylePositionFixed = Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["stylePropCompare"])({
      element: panelEl,
      prop: "position",
      equals: "fixed"
    });

    if (hasStylePositionFixed && !isTopMenu()) {
      _extends(panelEl.style, {});

      panelEl.offsetHeight; // force reflow

      return;
    }

    var parentRect = panelEl.parentNode.getBoundingClientRect();
    var targetRect = targetEl.getBoundingClientRect();
    var attrsOffsetH = props.offsetH !== undefined ? props.offsetH : props.offset !== undefined ? props.offset // deprecated
    : DEFAULT_OFFSET_H;
    var attrsOffsetV = props.offsetV !== undefined ? props.offsetV : DEFAULT_OFFSET_V;
    var offsetH = attrsOffsetH.toString().indexOf("%") !== -1 ? Math.round(parseFloat(attrsOffsetH) * 0.01 * targetRect.width) : Math.round(parseFloat(attrsOffsetH));
    var offsetV = attrsOffsetV.toString().indexOf("%") !== -1 ? Math.round(parseFloat(attrsOffsetV) * 0.01 * targetRect.height) : Math.round(parseFloat(attrsOffsetV));
    var positionOffsetV = offsetV;
    var attrsOrigin = props.origin || "top";
    var origin = attrsOrigin.split(/\W+/).reduce(function (acc, curr) {
      return acc[curr] = true, acc;
    }, {});
    var firstItem = contentEl.querySelectorAll("." + classes.listTile)[0];

    if (props.reposition) {
      // get the first List Tile to calculate the top position  
      var selectedItem = contentEl.querySelector("." + classes.selectedListTile);

      if (firstItem && selectedItem) {
        // calculate v position: menu should shift upward relative to the first item
        var firstItemRect = firstItem.getBoundingClientRect();
        var selectedItemRect = selectedItem.getBoundingClientRect();
        positionOffsetV = firstItemRect.top - selectedItemRect.top;
      } // align to middle of target


      var alignEl = selectedItem || firstItem;
      var alignRect = alignEl.getBoundingClientRect();

      var _targetRect = targetEl.getBoundingClientRect();

      var heightDiff = _targetRect.height - alignRect.height;
      positionOffsetV += Math.abs(heightDiff) / 2;
    } else if (props.origin && !hasStylePositionFixed) {
      if (origin.top) {
        positionOffsetV += targetRect.top - parentRect.top;
      } else if (origin.bottom) {
        positionOffsetV += targetRect.top - parentRect.bottom;
      }
    }

    if (props.height) {
      var firstItemHeight = firstItem ? firstItem.clientHeight : 48; // default List Tile height

      if (props.height === "max") {
        var topMargin = positionOffsetV;
        var bottomMargin = firstItemHeight;
        panelEl.style.height = "calc(100% - ".concat(topMargin + bottomMargin, "px)");
      } else {
        var height = /^\d+$/.test(props.height.toString()) ? "".concat(props.height, "px") : props.height;
        panelEl.style.height = height;
      }
    } // prevent animated changes


    var transitionDuration = panelEl.style.transitionDuration;
    panelEl.style.transitionDuration = "0ms";

    if (panelEl.parentNode && !hasStylePositionFixed) {
      if (origin.right) {
        panelEl.style.right = targetRect.right - parentRect.right + offsetH + "px";
      } else {
        panelEl.style.left = targetRect.left - parentRect.left + offsetH + "px";
      }

      if (origin.bottom) {
        panelEl.style.bottom = positionOffsetV + "px";
      } else {
        panelEl.style.top = positionOffsetV + "px";
      }

      panelEl.style.transformOrigin = attrsOrigin.split(/\W+/).join(" ");
    }

    panelEl.offsetHeight; // force reflow

    panelEl.style.transitionDuration = transitionDuration;
  };

  var scrollContent = function scrollContent() {
    if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) {
      return;
    }

    if (!props.scrollTarget) {
      return;
    }

    var scrollTargetEl = document.querySelector(props.scrollTarget);

    if (!scrollTargetEl) {
      return;
    }

    contentElRef.current.scrollTop = scrollTargetEl.offsetTop;
  };

  var showMenu = function showMenu() {
    return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions({
      isShow: true
    }));
  };

  var hideMenu = function hideMenu() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        hideDelay = _ref3.hideDelay;

    return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions({
      isShow: false,
      hideDelay: hideDelay
    }));
  };

  useEffect(function () {
    if (!domElement) {
      return;
    }

    panelElRef.current = domElement.querySelector(".".concat(classes.panel));

    _extends(panelElRef.current.style, props.style);

    contentElRef.current = domElement.querySelector(".".concat(classes.content));

    var handleEscape = function handleEscape(e) {
      if (e.key === "Escape" || e.key === "Esc") {
        hideMenu({
          hideDelay: 0
        });
      }
    };

    var handleDismissTap = function handleDismissTap(e) {
      if (e.target === panelElRef.current) {
        return;
      }

      hideMenu();
    };

    var activateDismissTap = function activateDismissTap() {
      polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndDownEvent"].forEach(function (evt) {
        return document.addEventListener(evt, handleDismissTap);
      });
    };

    var deActivateDismissTap = function deActivateDismissTap() {
      polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndDownEvent"].forEach(function (evt) {
        return document.removeEventListener(evt, handleDismissTap);
      });
    };

    if (!props.permanent) {
      Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("resize", update);
      Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("keydown", handleEscape);
      setTimeout(function () {
        activateDismissTap();
        showMenu();
      }, 0);
    }

    return function () {
      if (!props.permanent) {
        Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("resize", update);
        Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("keydown", handleEscape);
        deActivateDismissTap();
      }
    };
  }, [domElement]);
  var type = props.type || DEFAULT_TYPE;

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props, {
    remove: ["style"]
  }), props.testId && {
    "data-test-id": props.testId
  }, getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.getRef && props.getRef(dom));
  }), {
    className: [classes.component, props.permanent ? classes.permanent : null, props.origin ? classes.origin : null, props.backdrop ? classes.showBackdrop : null, props.topMenu ? classes.isTopMenu : null, type === "floating" && !props.permanent ? classes.floating : null, props.width || props.size ? widthClass(unifyWidth(props.width || props.size)) : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var shadowDepth = props.shadowDepth !== undefined ? props.shadowDepth : DEFAULT_SHADOW_DEPTH;
  var componentContent = [h("div", {
    className: classes.backdrop
  }), h("div", {
    className: classes.panel
  }, [h(Shadow, {
    shadowDepth: shadowDepth,
    animated: true
  }), h("div", {
    className: classes.content
  }, props.content || props.children)])];
  var content = [props.before].concat(componentContent, [props.after]);
  return h(props.element || "div", componentProps, content);
};



/***/ }),

/***/ "../../polythene-core-notification/dist/polythene-core-notification.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-notification/dist/polythene-core-notification.mjs ***!
  \***********************************************************************************************************************************************/
/*! exports provided: _Notification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Notification", function() { return _Notification; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-utilities */ "../../polythene-utilities/dist/polythene-utilities.mjs");



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

var classes = {
  component: "pe-notification",
  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",
  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multi-line",
  vertical: "pe-notification--vertical",
  visible: "pe-notification--visible"
};
var DEFAULT_TIME_OUT = 3;

var setTitleStyles = function setTitleStyles(titleEl) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) return;
  var height = titleEl.getBoundingClientRect().height;
  var lineHeight = parseInt(window.getComputedStyle(titleEl).lineHeight, 10);
  var paddingTop = parseInt(window.getComputedStyle(titleEl).paddingTop, 10);
  var paddingBottom = parseInt(window.getComputedStyle(titleEl).paddingBottom, 10);

  if (height > lineHeight + paddingTop + paddingBottom) {
    titleEl.classList.add(classes.multilineTitle);
  }
};

var _Notification = function _Notification(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      getRef = _ref.getRef,
      useReducer = _ref.useReducer,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "useRef", "getRef", "useReducer"]);

  var _useReducer = useReducer(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionStateReducer"], polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      transitionState = _useReducer2[0],
      dispatchTransitionState = _useReducer2[1];

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isPaused = _useState4[0],
      setIsPaused = _useState4[1];

  var containerElRef = useRef();
  var titleElRef = useRef();
  var timerRef = useRef();
  var isVisible = (transitionState || polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]).isVisible;
  var isTransitioning = (transitionState || polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]).isTransitioning;
  var isHiding = (transitionState || polythene_core__WEBPACK_IMPORTED_MODULE_0__["initialTransitionState"]).isHiding;

  var transitionOptions = function transitionOptions(_ref2) {
    var isShow = _ref2.isShow,
        referrer = _ref2.referrer;
    return {
      dispatchTransitionState: dispatchTransitionState,
      instanceId: props.instanceId,
      props: props,
      isShow: isShow,
      beforeTransition: stopTimer,
      afterTransition: isShow ? function () {
        // set timer to hide in a few seconds
        var timeout = props.timeout;
        if (timeout === 0) ;else {
          var timeoutSeconds = timeout !== undefined ? timeout : DEFAULT_TIME_OUT;
          timerRef.current.start(function () {
            return hideNotification();
          }, timeoutSeconds);
        }
      } : null,
      domElements: {
        el: domElement,
        containerEl: containerElRef.current
      },
      showClass: classes.visible,
      referrer: referrer
    };
  };

  var showNotification = function showNotification() {
    return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions({
      isShow: true
    }));
  };

  var hideNotification = function hideNotification() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        referrer = _ref3.referrer;

    return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["transitionComponent"])(transitionOptions({
      isShow: false,
      referrer: referrer
    }));
  };

  var pause = function pause() {
    setIsPaused(true);

    if (timerRef.current) {
      timerRef.current.pause();
    }
  };

  var unpause = function unpause() {
    setIsPaused(false);

    if (timerRef.current) {
      timerRef.current.resume();
    }
  };

  var stopTimer = function stopTimer() {
    if (timerRef.current) {
      timerRef.current.stop();
    }
  };

  useEffect(function () {
    return function () {
      stopTimer();
    };
  }, []); // Timer

  useEffect(function () {
    timerRef.current = new polythene_utilities__WEBPACK_IMPORTED_MODULE_1__["Timer"]();
  }, []); // DOM elements

  useEffect(function () {
    if (!domElement) {
      return;
    }

    if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
      // props.holderSelector is passed as option to Multiple
      containerElRef.current = document.querySelector(props.containerSelector || props.holderSelector);

      if (!containerElRef.current) {
        console.error("No container element found"); // eslint-disable-line no-console
      }

      if (props.containerSelector && containerElRef.current) {
        containerElRef.current.classList.add(classes.hasContainer);
      }
    }

    titleElRef.current = domElement.querySelector(".".concat(classes.title));

    if (titleElRef.current) {
      setTitleStyles(titleElRef.current);
    }
  }, [domElement]); // Show / hide logic

  useEffect(function () {
    if (!domElement || isTransitioning || isHiding) {
      return;
    }

    if (props.hide) {
      if (isVisible) {
        hideNotification();
      }
    } else if (props.show) {
      if (!isVisible) {
        showNotification();
      }
    }
  }, [domElement, isTransitioning, isVisible, isHiding, props.hide, props.show]); // Pause logic

  useEffect(function () {
    if (!domElement || isTransitioning || isHiding) {
      return;
    }

    if (props.unpause) {
      if (isPaused) {
        unpause();
      }
    } else if (props.pause) {
      if (!isPaused) {
        pause();
      }
    }
  }, [domElement, isTransitioning, isHiding, props.pause, props.unpause]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props, {
    remove: ["style"]
  }), // style set in content, and set by show/hide transition
  getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom));
  }), props.testId && {
    "data-test-id": props.testId
  }, _defineProperty({
    className: [classes.component, props.fromMultipleClassName, // classes.visible is set in showNotification though transition
    props.tone === "light" ? null : "pe-dark-tone", // default dark tone
    props.containerSelector ? classes.hasContainer : null, props.layout === "vertical" ? classes.vertical : classes.horizontal, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, a.onclick, function (e) {
    return e.preventDefault();
  }));

  var contents = h("div", {
    className: classes.content,
    style: props.style
  }, props.content || [props.title ? h("div", {
    className: classes.title
  }, props.title) : null, props.action ? h("div", {
    className: classes.action
  }, props.action) : null]);
  var content = [props.before, contents, props.after];
  return h(props.element || "div", componentProps, content);
};



/***/ }),

/***/ "../../polythene-core-radio-button/dist/polythene-core-radio-button.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-radio-button/dist/polythene-core-radio-button.mjs ***!
  \***********************************************************************************************************************************************/
/*! exports provided: _RadioButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_RadioButton", function() { return _RadioButton; });
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

var classes = {
  component: "pe-radio-control"
};
var iconOn = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>";
var iconOff = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>";
var icons = {
  iconOff: iconOff,
  iconOn: iconOn
};

var _RadioButton = function _RadioButton(_ref) {
  var h = _ref.h,
      SelectionControl = _ref.SelectionControl,
      props = _objectWithoutProperties(_ref, ["h", "SelectionControl"]);

  var componentProps = _extends({}, props, {
    icons: icons,
    selectable: props.selectable || function (selected) {
      return !selected;
    },
    // default: only selectable when not checked
    instanceClass: classes.component,
    type: "radio"
  });

  return h(SelectionControl, componentProps);
};



/***/ }),

/***/ "../../polythene-core-radio-group/dist/polythene-core-radio-group.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-radio-group/dist/polythene-core-radio-group.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: _RadioGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_RadioGroup", function() { return _RadioGroup; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

var classes = {
  component: "pe-radio-group"
};

var _RadioGroup = function _RadioGroup(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      RadioButton = _ref.RadioButton,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "RadioButton"]);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      checkedIndex = _useState2[0],
      setCheckedIndex = _useState2[1];

  var buttons = props.content || props.buttons || props.children;
  useEffect(function () {
    var index = buttons.reduce(function (acc, buttonOpts, index) {
      if (buttonOpts.value === undefined) {
        console.error("Option 'value' not set for radio button"); // eslint-disable-line no-console
      }

      return acc !== null ? acc : buttonOpts.defaultChecked !== undefined || props.defaultCheckedValue !== undefined && buttonOpts.value === props.defaultCheckedValue || props.defaultSelectedValue !== undefined && buttonOpts.value === props.defaultSelectedValue // deprecated
      ? index : acc;
    }, null);
    setCheckedIndex(index);
  }, []);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var groupCheckedValue = props.checkedValue;
  var contents = buttons.length ? buttons.map(function (buttonOpts, index) {
    if (!buttonOpts) {
      return null;
    }

    var isChecked = buttonOpts.checked !== undefined ? buttonOpts.checked : groupCheckedValue !== undefined ? buttonOpts.value === groupCheckedValue : checkedIndex === index;
    return h(RadioButton, _extends({}, {
      /* group attributes that may be overwritten by individual buttons */
      name: props.name
    }, props.all,
    /* individual button options */
    buttonOpts, {
      /* this component's options */
      onChange: function onChange(_ref2) {
        var value = _ref2.value;
        return setCheckedIndex(index), props.onChange && props.onChange({
          value: value
        });
      },
      checked: isChecked,
      key: buttonOpts.value // required for proper selection

    }));
  }) : null;
  var content = [props.before, contents, props.after];
  return h(props.element || "div", componentProps, content);
};



/***/ }),

/***/ "../../polythene-core-ripple/dist/polythene-core-ripple.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-ripple/dist/polythene-core-ripple.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: _Ripple, rippleAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Ripple", function() { return _Ripple; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rippleAnimation", function() { return rippleAnimation; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-theme */ "../../polythene-theme/dist/polythene-theme.mjs");



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

var ANIMATION_END_EVENT = Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getAnimationEndEvent"])();
var DEFAULT_START_OPACITY = 0.2;
var DEFAULT_END_OPACITY = 0.0;
var DEFAULT_START_SCALE = 0.1;
var DEFAULT_END_SCALE = 2.0;
var OPACITY_DECAY_VELOCITY = 0.35;

var addStyleToHead = function addStyleToHead(id, stylesheet) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) return;
  var documentRef = window.document;
  var styleEl = documentRef.createElement("style");
  styleEl.setAttribute("id", id);
  styleEl.appendChild(documentRef.createTextNode(stylesheet));
  documentRef.head.appendChild(styleEl);
};

var removeStyleFromHead = function removeStyleFromHead(id) {
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) return;
  var el = document.getElementById(id);

  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
};

var rippleAnimation = function rippleAnimation(_ref) {
  var e = _ref.e,
      id = _ref.id,
      el = _ref.el,
      props = _ref.props,
      classes = _ref.classes;
  return new Promise(function (resolve) {
    var container = document.createElement("div");
    container.setAttribute("class", classes.mask);
    el.appendChild(container);
    var waves = document.createElement("div");
    waves.setAttribute("class", classes.waves);
    container.appendChild(waves);
    var rect = el.getBoundingClientRect();
    var x = polythene_core__WEBPACK_IMPORTED_MODULE_0__["isTouch"] && e.touches ? e.touches[0].pageX : e.clientX;
    var y = polythene_core__WEBPACK_IMPORTED_MODULE_0__["isTouch"] && e.touches ? e.touches[0].pageY : e.clientY;
    var w = el.offsetWidth;
    var h = el.offsetHeight;
    var waveRadius = Math.sqrt(w * w + h * h);
    var mx = props.center ? rect.left + rect.width / 2 : x;
    var my = props.center ? rect.top + rect.height / 2 : y;
    var rx = mx - rect.left - waveRadius / 2;
    var ry = my - rect.top - waveRadius / 2;
    var startOpacity = props.startOpacity !== undefined ? props.startOpacity : DEFAULT_START_OPACITY;
    var opacityDecayVelocity = props.opacityDecayVelocity !== undefined ? props.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
    var endOpacity = props.endOpacity || DEFAULT_END_OPACITY;
    var startScale = props.startScale || DEFAULT_START_SCALE;
    var endScale = props.endScale || DEFAULT_END_SCALE;
    var duration = props.duration ? props.duration : 1 / opacityDecayVelocity * 0.2;
    var color = window.getComputedStyle(el).color;
    var style = waves.style;
    style.width = style.height = waveRadius + "px";
    style.top = ry + "px";
    style.left = rx + "px";
    style["animation-duration"] = style["-webkit-animation-duration"] = style["-moz-animation-duration"] = style["-o-animation-duration"] = duration + "s";
    style.backgroundColor = color;
    style.opacity = startOpacity;
    style.animationName = id;
    style.animationTimingFunction = props.animationTimingFunction || polythene_theme__WEBPACK_IMPORTED_MODULE_1__["vars"].animation_curve_default;
    var rippleStyleSheet = "@keyframes ".concat(id, " {\n      0% {\n        transform:scale(").concat(startScale, ");\n        opacity: ").concat(startOpacity, "\n      }\n      100% {\n        transform:scale(").concat(endScale, ");\n        opacity: ").concat(endOpacity, ";\n      }\n    }");
    addStyleToHead(id, rippleStyleSheet);

    var animationDone = function animationDone(evt) {
      removeStyleFromHead(id);
      waves.removeEventListener(ANIMATION_END_EVENT, animationDone, false);

      if (props.persistent) {
        style.opacity = endOpacity;
        style.transform = "scale(" + endScale + ")";
      } else {
        waves.classList.remove(classes.wavesAnimating);
        container.removeChild(waves);
        el.removeChild(container);
      }

      resolve(evt);
    };

    waves.addEventListener(ANIMATION_END_EVENT, animationDone, false);
    waves.classList.add(classes.wavesAnimating);
  });
};

var classes = {
  component: "pe-ripple",
  // elements
  mask: "pe-ripple__mask",
  waves: "pe-ripple__waves",
  // states
  unconstrained: "pe-ripple--unconstrained",
  wavesAnimating: "pe-ripple__waves--animating"
};

var _Ripple = function _Ripple(_ref) {
  var h = _ref.h,
      a = _ref.a,
      getRef = _ref.getRef,
      useRef = _ref.useRef,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      props = _objectWithoutProperties(_ref, ["h", "a", "getRef", "useRef", "useState", "useEffect"]);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var animationCountRef = useRef();
  var triggerEl = props.target || (domElement ? domElement.parentElement : undefined);

  var tap = function tap(e) {
    if (props.disabled || !domElement || !props.multi && animationCountRef.current > 0) {
      return;
    }

    if (props.start) {
      props.start(e);
    }

    var id = "ripple_animation_".concat(new Date().getTime());
    rippleAnimation({
      e: e,
      id: id,
      el: domElement,
      props: props,
      classes: classes
    }).then(function (evt) {
      if (props.end) {
        props.end(evt);
      }

      animationCountRef.current--;
    });
    animationCountRef.current++;
  }; // count


  useEffect(function () {
    animationCountRef.current = 0;
  }, []); // triggerEl

  useEffect(function () {
    if (triggerEl && triggerEl.addEventListener) {
      polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndEvent"].forEach(function (evt) {
        return triggerEl.addEventListener(evt, tap, false);
      });
      return function () {
        polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndEvent"].forEach(function (evt) {
          return triggerEl.removeEventListener(evt, tap, false);
        });
      };
    }
  }, [triggerEl]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), getRef(function (dom) {
    return dom && !domElement && setDomElement(dom);
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.unconstrained ? classes.unconstrained : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var content = [props.before, props.after];
  return h(props.element || "div", componentProps, content);
};



/***/ }),

/***/ "../../polythene-core-search/dist/polythene-core-search.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-search/dist/polythene-core-search.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: _Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Search", function() { return _Search; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

var classes = {
  component: "pe-search",
  // elements
  content: "pe-search__content",
  // states
  searchFullWidth: "pe-search--full-width",
  searchInset: "pe-search--inset"
};

var getNameOfState = function getNameOfState(searchState) {
  return searchState.focus && searchState.dirty ? "focus_dirty" : searchState.focus ? "focus" : searchState.dirty ? "dirty" : "none";
};

var _Search = function _Search(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      TextField = _ref.TextField,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "TextField"]);

  delete props.key;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      searchState = _useState2[0],
      setSearchState = _useState2[1];

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.fullWidth ? classes.searchFullWidth : classes.searchInset, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, props.events);

  var searchStateName = getNameOfState(searchState);
  var buttons = (props.buttons || {})[searchStateName] || {};
  var textfieldAttrs = props.textfield || {};
  var componentContent = h("div", {
    className: classes.content
  }, [buttons.before, h(TextField, _extends({}, textfieldAttrs, {
    onChange: function onChange(newState) {
      setSearchState(newState);

      if (textfieldAttrs.onChange) {
        textfieldAttrs.onChange(newState);
      }
    }
  })), buttons.after]);
  var content = [props.before, componentContent, props.after];
  return h(props.element || "div", componentProps, content);
};



/***/ }),

/***/ "../../polythene-core-selection-control/dist/polythene-core-selection-control.mjs":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-selection-control/dist/polythene-core-selection-control.mjs ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: _SelectionControl, _ViewControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SelectionControl", function() { return _SelectionControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ViewControl", function() { return _ViewControl; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

var classes = {
  component: "pe-control",
  // elements
  formLabel: "pe-control__form-label",
  input: "pe-control__input",
  label: "pe-control__label",
  // states
  disabled: "pe-control--disabled",
  inactive: "pe-control--inactive",
  large: "pe-control--large",
  medium: "pe-control--medium",
  off: "pe-control--off",
  on: "pe-control--on",
  regular: "pe-control--regular",
  small: "pe-control--small",
  // control view elements
  box: "pe-control__box",
  button: "pe-control__button",
  // control view states
  buttonOff: "pe-control__button--off",
  buttonOn: "pe-control__button--on"
};

var _SelectionControl = function _SelectionControl(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      ViewControl = _ref.ViewControl,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "ViewControl"]); // remove unused props


  delete props.key;
  var defaultChecked = props.defaultChecked !== undefined ? props.defaultChecked : props.checked || false;

  var _useState = useState(defaultChecked),
      _useState2 = _slicedToArray(_useState, 2),
      previousIsChecked = _useState2[0],
      setIsChecked = _useState2[1];

  var _useState3 = useState(props.selectable),
      _useState4 = _slicedToArray(_useState3, 2),
      isSelectable = _useState4[0],
      setIsSelectable = _useState4[1];

  var isChecked = props.checked !== undefined ? props.checked : previousIsChecked;
  var inactive = props.disabled || !isSelectable; // define isSelectable
  // This variable is set in the next tick to allow button interaction (e.g. ripples) to show
  // before the button is set to inactive state

  useEffect(function () {
    var selectable = props.selectable !== undefined ? props.selectable(isChecked) : false;

    if (selectable !== isSelectable) {
      setIsSelectable(selectable);
    }
  }, [props.selectable, isChecked]);

  var notifyChange = function notifyChange(e, isChecked) {
    if (props.onChange) {
      props.onChange({
        event: e,
        checked: isChecked,
        value: props.value
      });
    }
  };

  var onChange = function onChange(e) {
    var isChecked = e.currentTarget.checked;
    if (props.type === "radio") ;else {
      setIsChecked(isChecked);
    }
    notifyChange(e, isChecked);
  };

  var toggle = function toggle(e) {
    var newChecked = !isChecked;
    setIsChecked(newChecked);
    notifyChange(e, newChecked);
  };

  var viewControlClickHandler = props.events && props.events[a.onclick];
  var viewControlKeyDownHandler = props.events && props.events[a.onkeydown] ? props.events[a.onkeydown] : function (e) {
    if (e.key === "Enter" || e.keyCode === 32) {
      e.preventDefault();

      if (viewControlClickHandler) {
        viewControlClickHandler(e);
      } else {
        toggle(e);
      }
    }
  };

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props, {
    remove: ["style"]
  }), // Set style on view control
  props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.instanceClass, // for instance pe-checkbox-control
    isChecked ? classes.on : classes.off, props.disabled ? classes.disabled : null, inactive ? classes.inactive : null, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["classForSize"])(classes, props.size), props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var content = h("label", _extends({}, {
    className: classes.formLabel
  }, viewControlClickHandler && _defineProperty({}, a.onclick, function (e) {
    return e.preventDefault(), viewControlClickHandler(e);
  })), [props.before, h(ViewControl, _extends({}, props, {
    inactive: inactive,
    checked: isChecked,
    events: _defineProperty({}, a.onkeydown, viewControlKeyDownHandler)
  })), props.label ? h(".".concat(classes.label), props.label) : null, h("input", _extends({}, props.events, {
    name: props.name,
    type: props.type,
    value: props.value,
    checked: isChecked
  }, props.disabled || inactive ? _defineProperty({}, a.readonly, "readonly") : _defineProperty({}, a.onchange, onChange))), props.after]);
  return h(props.element || "div", componentProps, content);
};

var CONTENT = [{
  iconType: "iconOn",
  className: classes.buttonOn
}, {
  iconType: "iconOff",
  className: classes.buttonOff
}];

var createIcon = function createIcon(h, iconType, props, className) {
  return (// if props.iconOn/props.iconOff is passed, use that icon options object and ignore size
    // otherwise create a new object
    _extends({}, {
      className: className
    }, props[iconType] ? props[iconType] : {
      svg: {
        content: h.trust(props.icons[iconType])
      }
    }, props.icon, props.size ? {
      size: props.size
    } : null)
  );
};

var _ViewControl = function _ViewControl(_ref) {
  var h = _ref.h,
      Icon = _ref.Icon,
      IconButton = _ref.IconButton,
      props = _objectWithoutProperties(_ref, ["h", "Icon", "IconButton"]);

  var element = props.element || ".".concat(classes.box);
  var content = h(IconButton, _extends({}, {
    element: "div",
    className: classes.button,
    style: props.style,
    content: CONTENT.map(function (o) {
      return h(Icon, createIcon(h, o.iconType, props, o.className));
    }),
    ripple: {
      center: true
    },
    disabled: props.disabled,
    events: props.events,
    inactive: props.inactive
  }, props.iconButton // for example for hover behaviour
  ));
  return h(element, null, content);
};



/***/ }),

/***/ "../../polythene-core-shadow/dist/polythene-core-shadow.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-shadow/dist/polythene-core-shadow.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: _Shadow, getDepthClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Shadow", function() { return _Shadow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDepthClass", function() { return getDepthClass; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

var classes = {
  component: "pe-shadow",
  // elements      
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",
  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--depth-",
  with_active_shadow: "pe-with-active-shadow"
};
var DEFAULT_SHADOW_DEPTH = 1;

var getDepthClass = function getDepthClass(shadowDepth) {
  return shadowDepth !== undefined ? "".concat(classes.depth_n).concat(Math.min(5, shadowDepth)) : DEFAULT_SHADOW_DEPTH;
};

var _Shadow = function _Shadow(_ref) {
  var h = _ref.h,
      a = _ref.a,
      props = _objectWithoutProperties(_ref, ["h", "a"]);

  var depthClass = getDepthClass(props.shadowDepth);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, depthClass, props.animated && classes.animated, props.className || props[a["class"]]].join(" ")
  });

  var content = [props.before, props.content ? props.content : props.children, props.after];
  return h(props.element || "div", componentProps, [content, h("div", {
    className: [classes.bottomShadow].join(" ")
  }), h("div", {
    className: [classes.topShadow].join(" ")
  })]);
};



/***/ }),

/***/ "../../polythene-core-slider/dist/polythene-core-slider.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-slider/dist/polythene-core-slider.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: _Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Slider", function() { return _Slider; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

var classes = {
  component: "pe-slider",
  // elements
  control: "pe-slider__control",
  label: "pe-slider__label",
  pin: "pe-slider__pin",
  thumb: "pe-slider__thumb",
  tick: "pe-slider__tick",
  ticks: "pe-slider__ticks",
  track: "pe-slider__track",
  trackBar: "pe-slider__track-bar",
  trackBarValue: "pe-slider__track-bar-value",
  trackPart: "pe-slider__track-part",
  trackPartRest: "pe-slider__track-rest",
  trackPartValue: "pe-slider__track-value",
  // states
  hasFocus: "pe-slider--focus",
  hasPin: "pe-slider--pin",
  hasTicks: "pe-slider--ticks",
  hasTrack: "pe-slider--track",
  isActive: "pe-slider--active",
  isAtMin: "pe-slider--min",
  isDisabled: "pe-slider--disabled",
  tickValue: "pe-slider__tick--value"
};
var MAX_TICKS = 100;

var positionFromEvent = function positionFromEvent(e, isVertical) {
  return (// isVertical not yet implemented
    polythene_core__WEBPACK_IMPORTED_MODULE_0__["isTouch"] && e.touches ? isVertical ? e.touches[0].pageY : e.touches[0].pageX : isVertical ? e.pageY : e.pageX
  );
};

var _Slider = function _Slider(_ref) {
  var _ref3;

  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      getRef = _ref.getRef,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "useRef", "getRef"]);

  var min = props.min !== undefined ? props.min : 0;
  var max = props.max !== undefined ? props.max : 100;
  var range = max - min;
  var stepSize = props.stepSize !== undefined ? props.stepSize : 1;
  var normalizeFactor = 1 / stepSize;
  var hasTicks = props.ticks !== undefined && props.ticks !== false;
  var interactiveTrack = props.interactiveTrack !== undefined ? props.interactiveTrack : true;
  var stepCount = Math.min(MAX_TICKS, parseInt(range / stepSize, 10));
  var defaultValue = props.defaultValue !== undefined ? props.defaultValue : props.value !== undefined ? props.value : 0;
  var focusElementRef = useRef();
  var trackElRef = useRef();
  var controlElRef = useRef();
  var pinElRef = useRef();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(min),
      _useState4 = _slicedToArray(_useState3, 2),
      fraction = _useState4[0],
      setFraction = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      hasFocus = _useState6[0],
      setHasFocus = _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      value = _useState8[0],
      setValue = _useState8[1];

  var _useState9 = useState(),
      _useState10 = _slicedToArray(_useState9, 2),
      previousValue = _useState10[0],
      setPreviousValue = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isActive = _useState12[0],
      setIsActive = _useState12[1];

  var isDraggingRef = useRef();
  var clickOffsetRef = useRef();
  var rangeWidthRef = useRef();
  var rangeOffsetRef = useRef();
  var controlWidthRef = useRef();

  var updatePinPosition = function updatePinPosition() {
    if (controlElRef.current && pinElRef.current) {
      var left = fraction * rangeWidthRef.current;
      pinElRef.current.style.left = left + "px";
    }
  };

  var generateTickMarks = function generateTickMarks(h, stepCount, stepSize, value) {
    var items = [];
    var stepWithValue = value / stepSize;
    var s = 0;

    while (s < stepCount + 1) {
      items.push(h("div", {
        className: s <= stepWithValue ? [classes.tick, classes.tickValue].join(" ") : classes.tick,
        key: "tick-".concat(s)
      }));
      s++;
    }

    return items;
  };

  var readRangeData = function readRangeData() {
    if (controlElRef.current && polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
      // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
      controlWidthRef.current = parseFloat(Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["getStyle"])({
        element: controlElRef.current,
        prop: "width"
      }));
      rangeWidthRef.current = trackElRef.current.getBoundingClientRect().width - controlWidthRef.current;
      var styles = window.getComputedStyle(trackElRef.current);
      rangeOffsetRef.current = parseFloat(styles.marginLeft);
    }
  };

  var updateClickOffset = function updateClickOffset() {
    var controlOffset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    clickOffsetRef.current = trackElRef.current.getBoundingClientRect().left - (rangeOffsetRef.current - controlWidthRef.current / 2) + controlOffset;
  };

  var initControlEvent = function initControlEvent(e) {
    var controlPos = controlElRef.current.getBoundingClientRect().left;
    var eventPos = positionFromEvent(e);
    var controlOffset = eventPos - controlPos - controlWidthRef.current / 2;
    updateClickOffset(controlOffset);
  };

  var initTrackEvent = function initTrackEvent() {
    return updateClickOffset(0);
  };

  var handlePosEvent = function handlePosEvent(e) {
    var pos = positionFromEvent(e) - clickOffsetRef.current;
    var newValue = min + (pos - rangeOffsetRef.current) / rangeWidthRef.current * range;
    updateValue(newValue);
  };

  var startDrag = function startDrag(e) {
    if (isDraggingRef.current) return;
    e.preventDefault();
    isDraggingRef.current = true;
    setIsActive(true);
    deFocus();

    var drag = function drag(e) {
      if (!isDraggingRef.current) return;
      handlePosEvent(e);
    };

    var endDrag = function endDrag() {
      if (!isDraggingRef.current) return;
      deFocus();

      if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
        polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerMoveEvent"].forEach(function (evt) {
          return window.removeEventListener(evt, drag);
        });
        polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndDownEvent"].forEach(function (evt) {
          return window.removeEventListener(evt, endDrag);
        });
      }

      isDraggingRef.current = false;
      setIsActive(false);
    };

    if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
      polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerMoveEvent"].forEach(function (evt) {
        return window.addEventListener(evt, drag);
      });
      polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerEndDownEvent"].forEach(function (evt) {
        return window.addEventListener(evt, endDrag);
      });
    }

    readRangeData();
  };

  var handleNewValue = function handleNewValue(_ref2) {
    var value = _ref2.value,
        _ref2$shouldNotify = _ref2.shouldNotify,
        shouldNotify = _ref2$shouldNotify === void 0 ? false : _ref2$shouldNotify;
    if (value < min) value = min;
    if (value > max) value = max;
    var newValue = stepSize ? Math.round(value * normalizeFactor) / normalizeFactor : value;
    setFraction((newValue - min) / range);
    setPreviousValue(newValue);
    setValue(newValue);

    if (shouldNotify && props.onChange) {
      props.onChange({
        value: newValue
      });
    }
  };

  var updateValue = function updateValue(value) {
    handleNewValue({
      value: value,
      shouldNotify: true
    });
  };

  var increment = function increment(useLargeStep) {
    return updateValue(value + (useLargeStep ? 10 : 1) * (stepSize || 1));
  };

  var decrement = function decrement(useLargeStep) {
    return updateValue(value - (useLargeStep ? 10 : 1) * (stepSize || 1));
  };

  var deFocus = function deFocus() {
    if (focusElementRef.current) {
      focusElementRef.current.blur();
    }

    focusElementRef.current = undefined;
    setHasFocus(false);
  };

  var focus = function focus(element) {
    deFocus();
    focusElementRef.current = element;
    setHasFocus(true);
  }; // State refs


  useEffect(function () {
    isDraggingRef.current = false;
    clickOffsetRef.current = 0;
    rangeWidthRef.current = 0;
    rangeOffsetRef.current = 0;
    controlWidthRef.current = 0;
  }, []); // DOM children

  useEffect(function () {
    if (!domElement) {
      return;
    }

    trackElRef.current = domElement.querySelector(".".concat(classes.track));
    controlElRef.current = domElement.querySelector(".".concat(classes.control));
    pinElRef.current = domElement.querySelector(".".concat(classes.pin));
    readRangeData();
    handleNewValue({
      value: defaultValue
    });
  }, [domElement]); // Pin position

  useEffect(function () {
    if (!props.pin) {
      return;
    }

    updatePinPosition();
  }, [value]); // Handle external changes of `value`

  useEffect(function () {
    if (previousValue !== props.value) {
      handleNewValue({
        value: props.value
      });
    }
  }, [props.value]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), getRef(function (dom) {
    return dom && !domElement && setDomElement(dom);
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.disabled ? classes.isDisabled : null, props.pin ? classes.hasPin : null, interactiveTrack ? classes.hasTrack : null, isActive ? classes.isActive : null, hasFocus ? classes.hasFocus : null, fraction === 0 ? classes.isAtMin : null, hasTicks ? classes.hasTicks : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var onStartTrack = function onStartTrack(e) {
    e.preventDefault();

    if (isDraggingRef.current) {
      return;
    }

    readRangeData();
    initTrackEvent();
    handlePosEvent(e);
    startDrag(e);
  };

  var onInitDrag = function onInitDrag(e) {
    e.preventDefault();
    readRangeData();
    initControlEvent(e);
    startDrag(e);
  };

  var flexValueCss = fraction + " 1 0%";
  var flexRestValue = 1 - fraction;
  var flexRestCss = flexRestValue + " 1 0%";
  var content = [props.before, h("div", _extends({}, {
    className: classes.track
  }, interactiveTrack && !props.disabled && polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerStartDownEvent"].reduce(function (acc, evt) {
    return acc[a["on".concat(evt)]] = onStartTrack, acc;
  }, {})), [h("div", {
    className: classes.trackPart + " " + classes.trackPartValue,
    style: {
      flex: flexValueCss,
      msFlex: flexValueCss,
      WebkitFlex: flexValueCss
    }
  }, h("div", {
    className: classes.trackBar
  }, h("div", {
    className: classes.trackBarValue
  }))), h("div", _extends({}, {
    className: classes.control
  }, props.disabled ? {
    disabled: true
  } : (_ref3 = {}, _defineProperty(_ref3, a.tabindex, props[a.tabindex] || 0), _defineProperty(_ref3, a.onfocus, function () {
    return focus(controlElRef.current);
  }), _defineProperty(_ref3, a.onblur, function () {
    return deFocus();
  }), _defineProperty(_ref3, a.onkeydown, function (e) {
    if (e.key !== "Tab") {
      e.preventDefault();
    }

    if (e.key === "Escape" || e.key === "Esc") {
      controlElRef.current.blur(e);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "Left" || e.key === "Down") {
      decrement(!!e.shiftKey);
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "Right" || e.key === "Up") {
      increment(!!e.shiftKey);
    } else if (e.key === "Home") {
      updateValue(min);
    } else if (e.key === "End") {
      updateValue(max);
    } else if (e.key === "PageDown") {
      decrement(true);
    } else if (e.key === "PageUp") {
      increment(true);
    }

    readRangeData();
  }), _ref3), !props.disabled && polythene_core__WEBPACK_IMPORTED_MODULE_0__["pointerStartDownEvent"].reduce(function (acc, evt) {
    return acc[a["on".concat(evt)]] = onInitDrag, acc;
  }, {}), props.events ? props.events : null, hasTicks ? {
    step: stepCount
  } : null), props.icon ? h("div", {
    className: classes.thumb
  }, props.icon) : null), h("div", {
    className: classes.trackPart + " " + classes.trackPartRest,
    style: {
      flex: flexRestCss,
      msFlex: flexRestCss,
      WebkitFlex: flexRestCss,
      maxWidth: flexRestValue * 100 + "%" // for IE Edge

    }
  }, h("div", {
    className: classes.trackBar
  }, h("div", {
    className: classes.trackBarValue
  }))), hasTicks && !props.disabled ? h("div", {
    className: classes.ticks
  }, generateTickMarks(h, stepCount, stepSize, value)) : null, hasTicks && props.pin && !props.disabled ? h("div", {
    className: classes.pin,
    value: value
  }) : null]), props.after];
  return h(props.element || "div", componentProps, content);
};



/***/ }),

/***/ "../../polythene-core-snackbar/dist/polythene-core-snackbar.mjs":
/*!***************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-snackbar/dist/polythene-core-snackbar.mjs ***!
  \***************************************************************************************************************************************/
/*! exports provided: _Snackbar, transitions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitions", function() { return transitions; });
/* harmony import */ var polythene_core_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-notification */ "../../polythene-core-notification/dist/polythene-core-notification.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "_Snackbar", function() { return polythene_core_notification__WEBPACK_IMPORTED_MODULE_0__["_Notification"]; });


var DEFAULT_DURATION = 0.4;

var show = function show(_ref) {
  var containerEl = _ref.containerEl,
      el = _ref.el,
      duration = _ref.duration,
      delay = _ref.delay;
  return {
    el: containerEl,
    duration: duration || DEFAULT_DURATION,
    delay: delay || 0,
    before: function before() {
      el.style.display = "block";
      var height = el.getBoundingClientRect().height;
      containerEl.style.transform = "translate3d(0, ".concat(height, "px, 0)");
    },
    transition: function transition() {
      return containerEl.style.transform = "translate3d(0, 0px, 0)";
    }
  };
};

var hide = function hide(_ref2) {
  var containerEl = _ref2.containerEl,
      el = _ref2.el,
      duration = _ref2.duration,
      delay = _ref2.delay;
  return {
    el: containerEl,
    duration: duration || DEFAULT_DURATION,
    delay: delay || 0,
    transition: function transition() {
      var height = el.getBoundingClientRect().height;
      containerEl.style.transform = "translate3d(0, ".concat(height, "px, 0)");
    },
    // reset to original position to counter the removal of the snackbar instance
    after: function after() {
      // prevent a "bounce back"
      el.style.display = "none";
      containerEl.style.transitionDuration = "0ms";
      containerEl.style.transform = "translate3d(0, 0px, 0)";
    }
  };
};

var transitions = {
  show: show,
  hide: hide
};


/***/ }),

/***/ "../../polythene-core-svg/dist/polythene-core-svg.mjs":
/*!*****************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-svg/dist/polythene-core-svg.mjs ***!
  \*****************************************************************************************************************************/
/*! exports provided: _SVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_SVG", function() { return _SVG; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

var classes = {
  component: "pe-svg"
};

var _SVG = function _SVG(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useEffect = _ref.useEffect,
      useState = _ref.useState,
      getRef = _ref.getRef,
      props = _objectWithoutProperties(_ref, ["h", "a", "useEffect", "useState", "getRef"]);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  useEffect(function () {
    if (!domElement) {
      return;
    } // Prevent that SVG gets keyboard focus


    var svgElement = domElement.querySelector("svg");

    if (svgElement) {
      svgElement.setAttribute("focusable", "false");
    }
  }, [domElement]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.getRef && props.getRef(dom));
  }), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var content = [props.before, props.content ? props.content : props.children, props.after];
  return h(props.element || "div", componentProps, content);
};



/***/ }),

/***/ "../../polythene-core-switch/dist/polythene-core-switch.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-switch/dist/polythene-core-switch.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: _Switch, _ViewControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Switch", function() { return _Switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ViewControl", function() { return _ViewControl; });
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

var classes = {
  component: "pe-switch-control",
  // elements
  knob: "pe-switch-control__knob",
  thumb: "pe-switch-control__thumb",
  track: "pe-switch-control__track"
};

var _Switch = function _Switch(_ref) {
  var h = _ref.h,
      SelectionControl = _ref.SelectionControl,
      props = _objectWithoutProperties(_ref, ["h", "SelectionControl"]);

  var componentProps = _extends({}, props, {
    selectable: props.selectable || function () {
      return true;
    },
    // default: always selectable, regardless of the checked state
    instanceClass: classes.component,
    type: "checkbox"
  });

  return h(SelectionControl, componentProps);
};

var _ViewControl = function _ViewControl(_ref) {
  var h = _ref.h,
      a = _ref.a,
      IconButton = _ref.IconButton,
      Shadow = _ref.Shadow,
      props = _objectWithoutProperties(_ref, ["h", "a", "IconButton", "Shadow"]);

  var element = props.element || "div";
  var shadowDepthOff = props.shadowDepthOff !== undefined ? props.shadowDepthOff : props.zOff !== undefined ? props.zOff // deprecated
  : 1;
  var shadowDepthOn = props.shadowDepthOn !== undefined ? props.shadowDepthOn : props.zOn !== undefined ? props.zOn // deprecated
  : 2;
  var shadowDepth = props.checked ? shadowDepthOn : shadowDepthOff;
  var raised = props.raised !== undefined ? props.raised : true;
  return h(element, null, [h("div", {
    className: classes.track,
    key: "track"
  }), h(IconButton, _extends({}, {
    className: classes.thumb,
    key: "button",
    content: h("div", {
      className: classes.knob,
      style: props.style
    }, [props.icon ? props.icon : null, raised ? h(Shadow, {
      shadowDepth: shadowDepth,
      animated: true
    }) : null]),
    disabled: props.disabled,
    events: props.events,
    ink: props.ink || false,
    inactive: props.inactive
  }, props.iconButton))]);
};



/***/ }),

/***/ "../../polythene-core-tabs/dist/polythene-core-tabs.mjs":
/*!*******************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-tabs/dist/polythene-core-tabs.mjs ***!
  \*******************************************************************************************************************************/
/*! exports provided: _ScrollButton, _Tab, _Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ScrollButton", function() { return _ScrollButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Tab", function() { return _Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Tabs", function() { return _Tabs; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-utilities */ "../../polythene-utilities/dist/polythene-utilities.mjs");



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

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
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

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var buttonClasses = {
  component: "pe-text-button",
  "super": "pe-button",
  row: "pe-button-row",
  // elements      
  content: "pe-button__content",
  label: "pe-button__label",
  textLabel: "pe-button__text-label",
  wash: "pe-button__wash",
  washColor: "pe-button__wash-color",
  dropdown: "pe-button__dropdown",
  // states      
  border: "pe-button--border",
  contained: "pe-button--contained",
  disabled: "pe-button--disabled",
  dropdownClosed: "pe-button--dropdown-closed",
  dropdownOpen: "pe-button--dropdown-open",
  extraWide: "pe-button--extra-wide",
  hasDropdown: "pe-button--dropdown",
  highLabel: "pe-button--high-label",
  inactive: "pe-button--inactive",
  raised: "pe-button--raised",
  selected: "pe-button--selected",
  separatorAtStart: "pe-button--separator-start",
  hasHover: "pe-button--has-hover"
};
var classes = {
  component: "pe-tabs",
  // elements
  indicator: "pe-tabs__indicator",
  scrollButton: "pe-tabs__scroll-button",
  scrollButtonAtEnd: "pe-tabs__scroll-button-end",
  scrollButtonAtStart: "pe-tabs__scroll-button-start",
  tab: "pe-tab",
  tabContent: "pe-tabs__tab-content",
  tabRow: "pe-tabs__row",
  // states
  activeSelectable: "pe-tabs__active--selectable",
  isAtEnd: "pe-tabs--end",
  isAtStart: "pe-tabs--start",
  isAutofit: "pe-tabs--autofit",
  isMenu: "pe-tabs--menu",
  scrollable: "pe-tabs--scrollable",
  compactTabs: "pe-tabs--compact",
  tabHasIcon: "pe-tabs__tab--icon",
  tabRowCentered: "pe-tabs__row--centered",
  tabRowIndent: "pe-tabs__row--indent",
  // lookup
  label: buttonClasses.label
};
var SCROLL_SPEED = 600; // px per second

var SCROLL_DELAY = .15; // seconds

var SCROLL_MIN_DURATION = .5; // seconds

var INDICATOR_SLIDE_MIN_DURATION = .25; // seconds

var getButtons = function getButtons(props) {
  return props.content ? props.content : props.tabs ? props.tabs : props.children || [];
};

var getIndex = function getIndex(props) {
  var buttons = getButtons(props);
  var selectedIndex = Array.isArray(buttons) ? buttons.reduce(function (acc, tab, index) {
    return acc === undefined && !tab.disabled && tab.selected ? index : acc;
  }, undefined) : undefined;

  if (selectedIndex !== undefined) {
    return selectedIndex;
  }

  var attrsSelectedTabIndex = props.selectedTabIndex !== undefined ? props.selectedTabIndex : props.selectedTab !== undefined // deprecated
  ? props.selectedTab : undefined;
  return attrsSelectedTabIndex !== undefined ? attrsSelectedTabIndex : 0;
};

var scrollButtonGetNewIndex = function scrollButtonGetNewIndex(index, tabs) {
  var minTabIndex = 0;
  var maxTabIndex = tabs.length - 1;
  return {
    backward: Math.max(index - 1, minTabIndex),
    forward: Math.min(index + 1, maxTabIndex)
  };
};

var sortByLargestWidth = function sortByLargestWidth(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
};

var _Tabs = function _Tabs(_ref) {
  var h = _ref.h,
      a = _ref.a,
      getRef = _ref.getRef,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      ScrollButton = _ref.ScrollButton,
      Tab = _ref.Tab,
      props = _objectWithoutProperties(_ref, ["h", "a", "getRef", "useState", "useEffect", "ScrollButton", "Tab"]);

  var buttons = getButtons(props);

  if (buttons.length === 0) {
    throw new Error("No tabs specified");
  }

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      RTL = _useState4[0],
      setRTL = _useState4[1];

  var tabIndex = getIndex(props) || 0;

  var _useState5 = useState(tabIndex),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedTabIndex = _useState6[0],
      setSelectedTabIndex = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isScrollButtonAtStart = _useState8[0],
      setIsScrollButtonAtStart = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isScrollButtonAtEnd = _useState10[0],
      setIsScrollButtonAtEnd = _useState10[1];

  var _useState11 = useState([]),
      _useState12 = _slicedToArray(_useState11, 2),
      tabs = _useState12[0],
      setTabs = _useState12[1];

  var _useState13 = useState(),
      _useState14 = _slicedToArray(_useState13, 2),
      previousSelectedTabIndex = _useState14[0],
      setPreviousSelectedTabIndex = _useState14[1];

  var managesScroll = props.scrollable && !polythene_core__WEBPACK_IMPORTED_MODULE_0__["isTouch"];
  var tabRowElement = domElement && domElement.querySelector(".".concat(classes.tabRow));
  var tabIndicatorElement = domElement && domElement.querySelector(".".concat(classes.indicator));
  var isTabsInited = !!domElement && tabs.length === buttons.length;
  useEffect(function () {
    if (!tabRowElement) return;

    var tabRowTabs = _toConsumableArray(tabRowElement.querySelectorAll("[data-index]")).map(function (dom) {
      var index = parseInt(dom.getAttribute("data-index"), 10);
      return {
        dom: dom,
        options: buttons[index]
      };
    });

    if (tabRowTabs) {
      setTabs(tabRowTabs);
    }
  }, [tabRowElement]);

  var handleScrollButtonClick = function handleScrollButtonClick(e, direction) {
    e.stopPropagation();
    e.preventDefault();
    var newIndex = scrollButtonGetNewIndex(selectedTabIndex, tabs)[direction];

    if (newIndex !== selectedTabIndex) {
      updateWithTabIndex({
        index: newIndex,
        animate: true
      });
    } else {
      scrollToTab(newIndex);
    }
  };

  var updateScrollButtons = function updateScrollButtons() {
    var scrollLeft = tabRowElement.scrollLeft;
    var minTabIndex = 0;
    var maxTabIndex = tabs.length - 1;
    var isAtStart = tabRowElement.scrollLeft === 0 && selectedTabIndex === minTabIndex;
    var isAtEnd = scrollLeft >= tabRowElement.scrollWidth - domElement.getBoundingClientRect().width - 1 && selectedTabIndex === maxTabIndex;
    setIsScrollButtonAtStart(isAtStart);
    setIsScrollButtonAtEnd(isAtEnd);
  };

  var updateIndicator = function updateIndicator(_ref2) {
    var selectedTabElement = _ref2.selectedTabElement,
        animate = _ref2.animate;

    if (!tabIndicatorElement) {
      return;
    }

    var parentRect = domElement.getBoundingClientRect();
    var rect = selectedTabElement.getBoundingClientRect();
    var buttonSize = managesScroll ? rect.height : 0;
    var translateX = RTL ? rect.right - parentRect.right + tabRowElement.scrollLeft + buttonSize : rect.left - parentRect.left + tabRowElement.scrollLeft - buttonSize;
    var scaleX = 1 / (parentRect.width - 2 * buttonSize) * rect.width;
    var transformCmd = "translate(".concat(translateX, "px, 0) scaleX(").concat(scaleX, ")");
    var duration = animate ? INDICATOR_SLIDE_MIN_DURATION : 0;
    var style = tabIndicatorElement.style;
    style["transition-duration"] = duration + "s";
    style.opacity = 1;
    style.transform = transformCmd;
  };

  var scrollToTab = function scrollToTab(tabIndex) {
    var scroller = tabRowElement; // Scroll to position of selected tab

    var tabLeft = tabs.slice(0, tabIndex).reduce(function (totalWidth, tabData) {
      return totalWidth + tabData.dom.getBoundingClientRect().width;
    }, 0); // Tabs at the far right will not fully move to the left
    // because the scrollable row will stick to the right 
    // to get the max scroll left, we subtract the visible viewport from the scroll width

    var scrollerWidth = scroller.getBoundingClientRect().width; // frame width

    var scrollingWidth = scroller.scrollWidth;
    var maxScroll = scrollingWidth - scrollerWidth;
    var left = RTL ? -1 * Math.min(tabLeft, maxScroll) : Math.min(tabLeft, maxScroll);
    var currentLeft = scroller.scrollLeft;

    if (currentLeft !== left) {
      var duration = Math.abs(currentLeft - left) / SCROLL_SPEED;
      var delaySeconds = SCROLL_DELAY;
      setTimeout(function () {
        Object(polythene_utilities__WEBPACK_IMPORTED_MODULE_1__["scrollTo"])({
          element: scroller,
          to: left,
          duration: Math.max(SCROLL_MIN_DURATION, duration),
          direction: "horizontal"
        }).then(updateScrollButtons);
      }, delaySeconds * 1000);
    }
  };

  var updateWithTabIndex = function updateWithTabIndex(_ref3) {
    var index = _ref3.index,
        animate = _ref3.animate;

    if (!tabs || !tabs.length) {
      return;
    }

    setSelectedTabIndex(index);
    var selectedTabElement = tabs[index].dom;

    if (selectedTabElement) {
      updateIndicator({
        selectedTabElement: selectedTabElement,
        animate: animate
      });
    }

    if (managesScroll) {
      updateScrollButtons();
    }

    scrollToTab(index);

    if (props.onChange) {
      props.onChange({
        index: index,
        options: tabs[index].options,
        el: selectedTabElement
      });
    }
  };

  useEffect(function () {
    if (!isTabsInited) {
      return;
    }

    setRTL(Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["isRTL"])({
      element: domElement
    }));

    var redrawLargestWidth = function redrawLargestWidth() {
      if (props.largestWidth) {
        var widths = tabs.map(function (_ref4) {
          var dom = _ref4.dom;
          return dom.getBoundingClientRect().width;
        });
        var largest = widths.sort(sortByLargestWidth)[0];
        tabs.forEach(function (_ref5) {
          var dom = _ref5.dom;
          return dom.style.width = largest + "px";
        });
      }
    };

    var redraw = function redraw() {
      return redrawLargestWidth(), updateWithTabIndex({
        index: selectedTabIndex,
        animate: false
      });
    };

    var handleFontEvent = function handleFontEvent(_ref6) {
      var name = _ref6.name;
      return name === "active" || name === "inactive" ? redraw() : null;
    };

    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("resize", redraw);
    Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["subscribe"])("webfontloader", handleFontEvent);
    redraw();
    return function () {
      Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("resize", redraw);
      Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["unsubscribe"])("webfontloader", handleFontEvent);
    };
  }, [isTabsInited]);
  var autofit = props.scrollable || props.centered ? false : props.autofit ? true : false; // Keep selected tab up to date

  if (tabIndex !== undefined && previousSelectedTabIndex !== tabIndex) {
    updateWithTabIndex({
      index: tabIndex,
      animate: true
    });
  }

  if (previousSelectedTabIndex !== tabIndex) {
    setPreviousSelectedTabIndex(tabIndex);
  }

  var componentProps = _extends({}, getRef(function (dom) {
    return dom && !domElement && setTimeout(function () {
      return setDomElement(dom);
    }, 0) // delay for Mithril 1.x
    ;
  }), Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.scrollable ? classes.scrollable : null, isScrollButtonAtStart ? classes.isAtStart : null, isScrollButtonAtEnd ? classes.isAtEnd : null, props.activeSelected ? classes.activeSelectable : null, autofit ? classes.isAutofit : null, props.compact ? classes.compactTabs : null, props.menu ? classes.isMenu : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var tabRow = buttons.map(function () {
    var buttonOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var index = arguments.length > 1 ? arguments[1] : undefined;

    var buttonOptsCombined = _extends({}, buttonOpts, {
      // These options can be overridden by `all`
      selected: index === selectedTabIndex,
      animateOnTap: props.animateOnTap !== false ? true : false
    }, props.all, {
      // Internal options, should not get overridden
      index: index,
      onSelect: function onSelect() {
        return updateWithTabIndex({
          index: index,
          animate: props.noIndicatorSlide ? false : true
        });
      }
    });

    return h(Tab, buttonOptsCombined);
  });
  var scrollButtonAtStart = null,
      scrollButtonAtEnd = null;

  if (props.scrollable) {
    scrollButtonAtStart = h(ScrollButton, _extends({}, {
      icon: props.scrollIconBackward,
      className: classes.scrollButtonAtStart,
      position: "start",
      events: _defineProperty({}, a.onclick, function (e) {
        return handleScrollButtonClick(e, "backward");
      }),
      isRTL: RTL
    }));
    scrollButtonAtEnd = h(ScrollButton, _extends({}, {
      icon: props.scrollIconForward,
      className: classes.scrollButtonAtEnd,
      position: "end",
      events: _defineProperty({}, a.onclick, function (e) {
        return handleScrollButtonClick(e, "forward");
      }),
      isRTL: RTL
    }));
  }

  var tabIndicator = props.hideIndicator ? null : h("div", {
    className: classes.indicator
  });
  var componentContent = [scrollButtonAtStart, h("div", {
    className: [classes.tabRow, props.centered ? classes.tabRowCentered : null, props.scrollable ? classes.tabRowIndent : null].join(" ")
  }, [].concat(_toConsumableArray(tabRow), [tabIndicator])), scrollButtonAtEnd];
  return h("div", componentProps, [props.before].concat(componentContent, [props.after]));
};

var _Tab = function _Tab(_ref) {
  var h = _ref.h,
      a = _ref.a,
      Button = _ref.Button,
      Icon = _ref.Icon,
      props = _objectWithoutProperties(_ref, ["h", "a", "Button", "Icon"]); // Let internal onclick function co-exist with passed button option


  var events = props.events || {};

  events[a.onclick] = events[a.onclick] || function () {};

  var componentProps = _extends({}, props, props.testId && {
    "data-test-id": props.testId
  }, {
    "data-index": props.index,
    content: h("div", {
      className: classes.tabContent
    }, [props.icon ? h(Icon, props.icon) : null, props.label ? h("div", {
      className: classes.label
    }, h("span", props.label)) : null]),
    className: [classes.tab, props.icon && props.label ? classes.tabHasIcon : null, props.className || props[a["class"]]].join(" "),
    selected: props.selected,
    wash: false,
    ripple: true,
    events: _extends({}, events, _defineProperty({}, a.onclick, function (e) {
      props.onSelect();
      events[a.onclick](e);
    }))
  });

  var content = props.children;
  return h(Button, componentProps, content);
};

var arrowBackward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg>";
var arrowForward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>";

var _ScrollButton = function _ScrollButton(_ref) {
  var h = _ref.h,
      a = _ref.a,
      IconButton = _ref.IconButton,
      props = _objectWithoutProperties(_ref, ["h", "a", "IconButton"]);

  var icon = props.position === "start" ? props.icon || {
    svg: {
      content: h.trust(props.isRTL ? arrowForward : arrowBackward)
    }
  } : props.icon || {
    svg: {
      content: h.trust(props.isRTL ? arrowBackward : arrowForward)
    }
  };

  var componentProps = _extends({}, {
    className: [classes.scrollButton, props.className || props[a["class"]]].join(" "),
    icon: icon,
    ripple: {
      center: true
    },
    events: props.events
  });

  return h(IconButton, componentProps);
};



/***/ }),

/***/ "../../polythene-core-textfield/dist/polythene-core-textfield.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-textfield/dist/polythene-core-textfield.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: _TextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_TextField", function() { return _TextField; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
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

var classes = {
  component: "pe-textfield",
  // elements
  counter: "pe-textfield__counter",
  error: "pe-textfield__error",
  errorPlaceholder: "pe-textfield__error-placeholder",
  focusHelp: "pe-textfield__help-focus",
  help: "pe-textfield__help",
  input: "pe-textfield__input",
  inputArea: "pe-textfield__input-area",
  label: "pe-textfield__label",
  optionalIndicator: "pe-textfield__optional-indicator",
  requiredIndicator: "pe-textfield__required-indicator",
  // states
  hasCounter: "pe-textfield--counter",
  hasFloatingLabel: "pe-textfield--floating-label",
  hasFullWidth: "pe-textfield--full-width",
  hideClear: "pe-textfield--hide-clear",
  hideSpinner: "pe-textfield--hide-spinner",
  hideValidation: "pe-textfield--hide-validation",
  isDense: "pe-textfield--dense",
  isRequired: "pe-textfield--required",
  stateDirty: "pe-textfield--dirty",
  stateDisabled: "pe-textfield--disabled",
  stateFocused: "pe-textfield--focused",
  stateInvalid: "pe-textfield--invalid",
  stateReadonly: "pe-textfield--readonly"
};
var DEFAULT_VALID_STATE = {
  invalid: false,
  message: undefined
};

var ignoreEvent = function ignoreEvent(props, name) {
  return props.ignoreEvents && props.ignoreEvents.indexOf(name) !== -1;
};

var _TextField = function _TextField(_ref) {
  var h = _ref.h,
      a = _ref.a,
      useState = _ref.useState,
      useEffect = _ref.useEffect,
      useRef = _ref.useRef,
      getRef = _ref.getRef,
      props = _objectWithoutProperties(_ref, ["h", "a", "useState", "useEffect", "useRef", "getRef"]);

  var defaultValue = props.defaultValue !== undefined && props.defaultValue !== null ? props.defaultValue.toString() : props.value !== undefined && props.value !== null ? props.value.toString() : "";

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      domElement = _useState2[0],
      setDomElement = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isInvalid = _useState4[0],
      setIsInvalid = _useState4[1];

  var _useState5 = useState(defaultValue),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  var inputElRef = useRef();
  var previousValueRef = useRef();
  var previousStatusRef = useRef();
  var isDirtyRef = useRef();
  var hasFocusRef = useRef();
  var isTouchedRef = useRef();
  var errorRef = useRef();
  var inputType = props.multiLine ? "textarea" : "input";
  var showErrorPlaceholder = !!(props.valid !== undefined || props.validate || props.min || props.max || props[a.minlength] || props[a.maxlength] || props.required || props.pattern);

  var handleStateUpdate = function handleStateUpdate() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        type = _ref2.type,
        focus = _ref2.focus,
        value = _ref2.value;

    if (!inputElRef.current) {
      return;
    }

    if (value !== undefined) {
      inputElRef.current.value = value;
    }

    if (focus !== undefined) {
      hasFocusRef.current = focus;

      if (focus) {
        inputElRef.current.focus();
      } else {
        inputElRef.current.blur();
      }
    }

    if (type === "input" && (props.validateOnInput || props.counter)) {
      isTouchedRef.current = inputElRef.current.value !== defaultValue;
    }

    if (type !== "input") {
      isTouchedRef.current = inputElRef.current.value !== defaultValue;
    }

    if (type === "onblur") {
      isTouchedRef.current = true;
    }

    isDirtyRef.current = inputElRef.current.value !== "";
    checkValidity();
    notifyState();

    if (previousValueRef.current !== inputElRef.current.value) {
      setValue(inputElRef.current.value); // force update
    }
  };

  var validateCustom = function validateCustom() {
    if (!inputElRef.current) {
      return DEFAULT_VALID_STATE;
    }

    var validState = props.validate(inputElRef.current.value);
    return {
      invalid: validState && !validState.valid,
      message: validState && validState.error
    };
  };

  var validateCounter = function validateCounter() {
    return {
      invalid: inputElRef.current.value.length > props.counter,
      message: props.error
    };
  };

  var validateHTML = function validateHTML() {
    return {
      invalid: !inputElRef.current.checkValidity(),
      message: props.error
    };
  };

  var getValidStatus = function getValidStatus() {
    var status = DEFAULT_VALID_STATE; // props.validateResetOnClear: reset validation when field is cleared

    if (isTouchedRef.current && isInvalid && inputElRef.current.value.length === 0 && props.validateResetOnClear) {
      isTouchedRef.current = false;
      setIsInvalid(false);
      errorRef.current = undefined;
    }

    if (props.counter) {
      status = validateCounter();
    }

    if (!status.invalid && inputElRef.current.checkValidity) {
      status = validateHTML();
    }

    if (!status.invalid && props.validate) {
      status = validateCustom();
    }

    return status;
  };

  var checkValidity = function checkValidity() {
    // default
    var status = props.valid !== undefined ? {
      invalid: !props.valid,
      message: props.error
    } : !isTouchedRef.current && !props.validateAtStart ? DEFAULT_VALID_STATE : getValidStatus();
    var previousInvalid = isInvalid;
    errorRef.current = status.message;

    if (status.invalid !== previousInvalid) {
      setIsInvalid(status.invalid);
    }

    if (!status.invalid) {
      errorRef.current = undefined;
    }
  };

  var notifyState = function notifyState() {
    if (props.onChange) {
      var validStatus = getValidStatus();
      var status = {
        focus: hasFocusRef.current,
        dirty: isDirtyRef.current,
        invalid: validStatus.invalid,
        error: validStatus.error,
        value: inputElRef.current.value
      };

      if (JSON.stringify(status) !== JSON.stringify(previousStatusRef.current)) {
        props.onChange(_objectSpread2({}, status, {
          el: inputElRef.current,
          setInputState: function setInputState(newState) {
            var hasNewValue = newState.value !== undefined && newState.value !== inputElRef.current.value;
            var hasNewFocus = newState.focus !== undefined && newState.focus !== hasFocusRef.current;

            if (hasNewValue || hasNewFocus) {
              handleStateUpdate(newState);
            }
          }
        }));
        previousStatusRef.current = status;
      }
    }
  }; // State refs


  useEffect(function () {
    isDirtyRef.current = defaultValue !== "";
    hasFocusRef.current = false;
    isTouchedRef.current = false;
    errorRef.current = props.error;
  }, []); // Input DOM element

  useEffect(function () {
    if (!domElement) {
      return;
    }

    inputElRef.current = domElement.querySelector(inputType);
    inputElRef.current.value = defaultValue;
    handleStateUpdate();
    checkValidity(); // handle `validateAtStart`

    notifyState();
  }, [domElement]); // Handle value updates

  useEffect(function () {
    if (!inputElRef.current) {
      return;
    }

    var value = props.value !== undefined && props.value !== null ? props.value : inputElRef.current ? inputElRef.current.value : previousValueRef.current;
    var valueStr = value === undefined || value === null ? "" : value.toString();

    if (inputElRef.current && previousValueRef.current !== valueStr) {
      inputElRef.current.value = valueStr;
      previousValueRef.current = valueStr;
      handleStateUpdate({
        type: "input"
      });
    }
  }, [inputElRef.current, props.value]); // Handle error state updates

  useEffect(function () {
    if (!inputElRef.current) {
      return;
    }

    checkValidity();
    notifyState();
  }, [props, inputElRef.current && inputElRef.current.value]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, getRef(function (dom) {
    return dom && !domElement && (setDomElement(dom), props.ref && props.ref(dom));
  }), {
    className: [classes.component, isInvalid ? classes.stateInvalid : "", hasFocusRef.current ? classes.stateFocused : "", isDirtyRef.current ? classes.stateDirty : "", props.floatingLabel ? classes.hasFloatingLabel : "", props.disabled ? classes.stateDisabled : "", props.readonly ? classes.stateReadonly : "", props.dense ? classes.isDense : "", props.required ? classes.isRequired : "", props.fullWidth ? classes.hasFullWidth : "", props.counter ? classes.hasCounter : "", props.hideSpinner !== false && props.hideSpinner !== undefined ? classes.hideSpinner : "", props.hideClear !== false && props.hideClear !== undefined ? classes.hideClear : "", props.hideValidation ? classes.hideValidation : "", props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  });

  var allProps = _objectSpread2({}, props, {}, props.domAttributes);

  var errorMessage = props.error || errorRef.current;
  var type = allProps.multiLine ? null : !allProps.type || allProps.type === "submit" || allProps.type === "search" ? "text" : allProps.type;
  var showError = isInvalid && errorMessage !== undefined;
  var inactive = allProps.disabled || allProps[a.readonly];
  var requiredIndicator = allProps.required && allProps.requiredIndicator !== "" ? h("span", {
    className: classes.requiredIndicator
  }, allProps.requiredIndicator || "*") : null;
  var optionalIndicator = !allProps.required && allProps.optionalIndicator ? h("span", {
    className: classes.optionalIndicator
  }, allProps.optionalIndicator) : null;
  var label = allProps.label ? [allProps.label, requiredIndicator, optionalIndicator] : null;
  var events = allProps.events || {};
  var componentContent = [h("div", {
    className: classes.inputArea
  }, [label ? h("label", {
    className: classes.label
  }, label) : null, h(inputType, _extends({}, {
    className: classes.input,
    disabled: allProps.disabled
  }, type ? {
    type: type
  } : null, allProps.name ? {
    name: allProps.name
  } : null, events, !ignoreEvent(allProps, a.onclick) ? _defineProperty({}, a.onclick, function (e) {
    if (inactive) {
      return;
    } // in case the browser does not give the field focus,
    // for instance when the user tapped to the current field off screen


    handleStateUpdate({
      focus: true
    });
    events[a.onclick] && events[a.onclick](e);
  }) : null, !ignoreEvent(allProps, a.onfocus) ? _defineProperty({}, a.onfocus, function (e) {
    if (inactive) {
      return;
    }

    handleStateUpdate({
      focus: true
    }); // set CSS class manually in case field gets focus but is off screen
    // and no redraw is triggered
    // at the next redraw `hasFocusRef.current` will be read and the focus class be set
    // in the props.class statement

    if (domElement) {
      domElement.classList.add(classes.stateFocused);
    }

    events[a.onfocus] && events[a.onfocus](e);
  }) : null, !ignoreEvent(allProps, a.onblur) ? _defineProperty({}, a.onblur, function (e) {
    handleStateUpdate({
      type: "onblur",
      focus: false
    }); // same principle as onfocus

    domElement.classList.remove(classes.stateFocused);
    events[a.onblur] && events[a.onblur](e);
  }) : null, !ignoreEvent(allProps, a.oninput) ? _defineProperty({}, a.oninput, function (e) {
    // default input event
    // may be overwritten by props.events
    handleStateUpdate({
      type: "input"
    });
    events[a.oninput] && events[a.oninput](e);
  }) : null, !ignoreEvent(allProps, a.onkeydown) ? _defineProperty({}, a.onkeydown, function (e) {
    if (e.key === "Enter") {
      isTouchedRef.current = true;
    } else if (e.key === "Escape" || e.key === "Esc") {
      handleStateUpdate({
        focus: false
      });
    }

    events[a.onkeydown] && events[a.onkeydown](e);
  }) : null, allProps.required !== undefined && !!allProps.required ? {
    required: true
  } : null, allProps[a.readonly] !== undefined && !!allProps[a.readonly] ? _defineProperty({}, a.readonly, true) : null, allProps.pattern !== undefined ? {
    pattern: allProps.pattern
  } : null, allProps[a.maxlength] !== undefined ? _defineProperty({}, a.maxlength, allProps[a.maxlength]) : null, allProps[a.minlength] !== undefined ? _defineProperty({}, a.minlength, allProps[a.minlength]) : null, allProps.max !== undefined ? {
    max: allProps.max
  } : null, allProps.min !== undefined ? {
    min: allProps.min
  } : null, allProps[a.autofocus] !== undefined ? _defineProperty({}, a.autofocus, allProps[a.autofocus]) : null, allProps[a.tabindex] !== undefined ? _defineProperty({}, a.tabindex, allProps[a.tabindex]) : null, allProps.rows !== undefined ? {
    rows: allProps.rows
  } : null, allProps.placeholder !== undefined ? {
    placeholder: allProps.placeholder
  } : null, allProps.domAttributes !== undefined ? _objectSpread2({}, allProps.domAttributes) : null))]), allProps.counter ? h("div", {
    className: classes.counter
  }, (value.length || 0) + " / " + allProps.counter) : null, allProps.help && !showError ? h("div", {
    className: [classes.help, allProps.focusHelp ? classes.focusHelp : null].join(" ")
  }, allProps.help) : null, showError ? h("div", {
    className: classes.error
  }, errorMessage) : showErrorPlaceholder && !allProps.help ? h("div", {
    className: classes.errorPlaceholder
  }) : null];
  var content = [props.before].concat(componentContent, [props.after]);
  return h(props.element || "div", componentProps, content);
};



/***/ }),

/***/ "../../polythene-core-toolbar/dist/polythene-core-toolbar.mjs":
/*!*************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core-toolbar/dist/polythene-core-toolbar.mjs ***!
  \*************************************************************************************************************************************/
/*! exports provided: _Toolbar, _ToolbarTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Toolbar", function() { return _Toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_ToolbarTitle", function() { return _ToolbarTitle; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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

var classes = {
  // Toolbar
  component: "pe-toolbar",
  // states
  compact: "pe-toolbar--compact",
  appBar: "pe-toolbar--app-bar",
  // Toolbar title
  // elements
  title: "pe-toolbar__title",
  // states
  centeredTitle: "pe-toolbar__title--center",
  indentedTitle: "pe-toolbar__title--indent",
  fullbleed: "pe-toolbar--fullbleed",
  border: "pe-toolbar--border"
};

var _Toolbar = function _Toolbar(_ref) {
  var h = _ref.h,
      a = _ref.a,
      Shadow = _ref.Shadow,
      props = _objectWithoutProperties(_ref, ["h", "a", "Shadow"]);

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.component, props.compact ? classes.compact : null, props.fullbleed ? classes.fullbleed : null, props.border ? classes.border : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, props.events);

  var componentContent = props.content || props.children;
  var shadow = props.shadowDepth !== undefined ? h(Shadow, {
    shadowDepth: props.shadowDepth,
    animated: true
  }) : null;
  var content = [props.before, componentContent, props.after, shadow];
  return h(props.element || "div", componentProps, content);
};

var _ToolbarTitle = function _ToolbarTitle(_ref) {
  var h = _ref.h,
      a = _ref.a,
      props = _objectWithoutProperties(_ref, ["h", "a"]);

  var element = props.element ? props.element : props.url ? "a" : "div";

  var componentProps = _extends({}, Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["filterSupportedAttributes"])(props), props.testId && {
    "data-test-id": props.testId
  }, {
    className: [classes.title, props.indent ? classes.indentedTitle : null, props.center ? classes.centeredTitle : null, props.tone === "dark" ? "pe-dark-tone" : null, props.tone === "light" ? "pe-light-tone" : null, props.className || props[a["class"]]].join(" ")
  }, props.events, props.url);

  var content = props.text ? props.text : props.content ? props.content : props.children;
  return h(element, componentProps, content);
};



/***/ }),

/***/ "../../polythene-core/dist/polythene-core.mjs":
/*!*********************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-core/dist/polythene-core.mjs ***!
  \*********************************************************************************************************************/
/*! exports provided: Multi, _Conditional, classForSize, deprecation, emit, filterSupportedAttributes, getAnimationEndEvent, getStyle, hide, iconDropdownDown, iconDropdownUp, initialTransitionState, isClient, isRTL, isServer, isTouch, pointerEndDownEvent, pointerEndEvent, pointerMoveEvent, pointerStartDownEvent, pointerStartEvent, show, styleDurationToMs, stylePropCompare, subscribe, throttle, transitionComponent, transitionStateReducer, unpackAttrs, unsubscribe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multi", function() { return Multi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_Conditional", function() { return _Conditional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classForSize", function() { return classForSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecation", function() { return deprecation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emit", function() { return emit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSupportedAttributes", function() { return filterSupportedAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAnimationEndEvent", function() { return getAnimationEndEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hide", function() { return hide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconDropdownDown", function() { return iconDropdownDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconDropdownUp", function() { return iconDropdownUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialTransitionState", function() { return initialTransitionState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRTL", function() { return isRTL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTouch", function() { return isTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerEndDownEvent", function() { return pointerEndDownEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerEndEvent", function() { return pointerEndEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerMoveEvent", function() { return pointerMoveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerStartDownEvent", function() { return pointerStartDownEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointerStartEvent", function() { return pointerStartEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleDurationToMs", function() { return styleDurationToMs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stylePropCompare", function() { return stylePropCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribe", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return throttle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionComponent", function() { return transitionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionStateReducer", function() { return transitionStateReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unpackAttrs", function() { return unpackAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsubscribe", function() { return unsubscribe; });
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
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
} // @ts-check


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
  return visible ? h(props.instance, _objectSpread2({}, props, {
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
}; // @ts-check

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
}; // @ts-check

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
var isServer = !isClient; // @ts-check

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
}; // @ts-check

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
var iconDropdownDown = "<svg xmlns=\"http://www.w3.org/2000/svg\" id=\"dd-down-svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7 10l5 5 5-5z\"/></svg>"; // @ts-check

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
} // @ts-check

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

    return _objectSpread2({}, mOptions, {
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
      return h(mOptions.instance, _objectSpread2({}, unpackAttrs(props), {
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
  SHOW_DONE: "show-done",
  HIDE_DONE: "hide-done"
};
var initialTransitionState = {
  isVisible: false,
  isTransitioning: false
};

var transitionStateReducer = function transitionStateReducer(state, type) {
  switch (type) {
    case TRANSITION_TYPES.SHOW:
      return _objectSpread2({}, state, {
        isTransitioning: true,
        isVisible: true
      });

    case TRANSITION_TYPES.HIDE:
      return _objectSpread2({}, state, {
        isTransitioning: true
      });

    case TRANSITION_TYPES.SHOW_DONE:
      return _objectSpread2({}, state, {
        isTransitioning: false,
        isVisible: true
      });

    case TRANSITION_TYPES.HIDE_DONE:
      return _objectSpread2({}, state, {
        isTransitioning: false,
        isVisible: false
      });

    default:
      throw new Error("Unhandled action type: ".concat(type));
  }
};
/**
 * 
 * @typedef {{ el?: HTMLElement, duration?: number, hasDuration?: boolean, delay?: number, hasDelay?: boolean, timingFunction?: string, transitionClass?: string, before?: () => void, after?: () => void, transition?: () => void, showClass?: string, showClassElement?: HTMLElement  }} TransitionOpts
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
        el.classList.add(opts.transitionClass);
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
            el.classList.remove(opts.transitionClass);
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

  var opts1 = _objectSpread2({}, props, {}, domElements, {
    showClass: showClass,
    transitionClass: transitionClass,
    duration: duration,
    delay: delay,
    timingFunction: timingFunction
  });

  var opts2 = _objectSpread2({}, opts1, {}, transitions ? (isShow ? transitions.show : transitions.hide)(opts1) : undefined);

  var opts3 = _objectSpread2({}, opts2, {}, {
    duration: opts2.duration !== undefined ? opts2.duration : DEFAULT_DURATION,
    hasDuration: opts2.duration !== undefined,
    delay: opts2.delay !== undefined ? opts2.delay : DEFAULT_DELAY,
    hasDelay: opts2.delay !== undefined
  });

  return fn(opts3).then(function () {
    var id = instanceId;

    if (afterTransition) {
      afterTransition();
    } // Component may unmount after this point


    if (isShow ? props.fromMultipleDidShow : props.fromMultipleDidHide) {
      (isShow ? props.fromMultipleDidShow : props.fromMultipleDidHide)(id); // when used with Multiple; this will call props.didShow / props.didHide
    } else if (isShow ? props.didShow : props.didHide) {
      (isShow ? props.didShow : props.didHide)(id); // when used directly
    }

    dispatchTransitionState(isShow ? TRANSITION_TYPES.SHOW_DONE : TRANSITION_TYPES.HIDE_DONE);
  });
};



/***/ }),

/***/ "../../polythene-css/dist/polythene-typography.css":
/*!**************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css/dist/polythene-typography.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../polythene-css/dist/polythene.css":
/*!***************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-css/dist/polythene.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "../../polythene-mithril-base-spinner/dist/polythene-mithril-base-spinner.mjs":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-base-spinner/dist/polythene-mithril-base-spinner.mjs ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: BaseSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSpinner", function() { return BaseSpinner; });
/* harmony import */ var polythene_core_base_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-base-spinner */ "../../polythene-core-base-spinner/dist/polythene-core-base-spinner.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-base-spinner/node_modules/cyano-mithril/dist/cyano-mithril.mjs");



var classes = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};
var BaseSpinner = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_base_spinner__WEBPACK_IMPORTED_MODULE_0__["_BaseSpinner"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  useReducer: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useReducer"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useEffect"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["getRef"],
  Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_1__["Shadow"]
});
BaseSpinner["displayName"] = "BaseSpinner";
BaseSpinner["classes"] = classes;


/***/ }),

/***/ "../../polythene-mithril-base-spinner/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-base-spinner/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-button-group/dist/polythene-mithril-button-group.mjs":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-button-group/dist/polythene-mithril-button-group.mjs ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: ButtonGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return ButtonGroup; });
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-button-group/node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core_button_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-button-group */ "../../polythene-core-button-group/dist/polythene-core-button-group.mjs");


var ButtonGroup = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["cast"])(polythene_core_button_group__WEBPACK_IMPORTED_MODULE_1__["_ButtonGroup"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["a"]
});
ButtonGroup["displayName"] = "ButtonGroup";


/***/ }),

/***/ "../../polythene-mithril-button-group/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-button-group/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-button/dist/polythene-mithril-button.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-button/dist/polythene-mithril-button.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony import */ var polythene_core_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-button */ "../../polythene-core-button/dist/polythene-core-button.mjs");
/* harmony import */ var polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-ripple */ "../../polythene-mithril-ripple/dist/polythene-mithril-ripple.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-button/node_modules/cyano-mithril/dist/cyano-mithril.mjs");





var Button = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["cast"])(polythene_core_button__WEBPACK_IMPORTED_MODULE_0__["_Button"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["a"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["getRef"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["useEffect"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["useRef"],
  Ripple: polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_1__["Ripple"],
  Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_3__["Shadow"],
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"]
});


/***/ }),

/***/ "../../polythene-mithril-button/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-button/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-card/dist/polythene-mithril-card.mjs":
/*!*************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-card/dist/polythene-mithril-card.mjs ***!
  \*************************************************************************************************************************************/
/*! exports provided: Card */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return Card; });
/* harmony import */ var polythene_core_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-card */ "../../polythene-core-card/dist/polythene-core-card.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-card/node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-list-tile */ "../../polythene-mithril-list-tile/dist/polythene-mithril-list-tile.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");





var CardActions = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_card__WEBPACK_IMPORTED_MODULE_0__["_CardActions"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"]
});
CardActions["displayName"] = "CardActions";
var CardMedia = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_card__WEBPACK_IMPORTED_MODULE_0__["_CardMedia"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["getRef"]
});
CardMedia["displayName"] = "CardMedia";
var CardPrimary = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_card__WEBPACK_IMPORTED_MODULE_0__["_CardPrimary"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"]
});
CardPrimary["displayName"] = "CardPrimary";
var Card = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_card__WEBPACK_IMPORTED_MODULE_0__["_Card"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  CardActions: CardActions,
  CardMedia: CardMedia,
  CardPrimary: CardPrimary,
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"],
  ListTile: polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_3__["ListTile"],
  Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_4__["Shadow"]
});
Card["displayName"] = "Card";


/***/ }),

/***/ "../../polythene-mithril-card/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-card/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-checkbox/dist/polythene-mithril-checkbox.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-checkbox/dist/polythene-mithril-checkbox.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony import */ var polythene_core_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-checkbox */ "../../polythene-core-checkbox/dist/polythene-core-checkbox.mjs");
/* harmony import */ var polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-selection-control */ "../../polythene-core-selection-control/dist/polythene-core-selection-control.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-checkbox/node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-mithril-icon-button */ "../../polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs");





var ViewControl = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["_ViewControl"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"],
  IconButton: polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_4__["IconButton"]
});
ViewControl["displayName"] = "ViewControl";
var SelectionControl = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["_SelectionControl"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useEffect"],
  ViewControl: ViewControl
});
SelectionControl["displayName"] = "SelectionControl";
var Checkbox = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_checkbox__WEBPACK_IMPORTED_MODULE_0__["_Checkbox"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  SelectionControl: SelectionControl
});
Checkbox["displayName"] = "Checkbox";


/***/ }),

/***/ "../../polythene-mithril-checkbox/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!***********************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-checkbox/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-dialog-pane/dist/polythene-mithril-dialog-pane.mjs":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-dialog-pane/dist/polythene-mithril-dialog-pane.mjs ***!
  \***************************************************************************************************************************************************/
/*! exports provided: DialogPane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogPane", function() { return DialogPane; });
/* harmony import */ var polythene_core_dialog_pane__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-dialog-pane */ "../../polythene-core-dialog-pane/dist/polythene-core-dialog-pane.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-dialog-pane/node_modules/cyano-mithril/dist/cyano-mithril.mjs");


var DialogPane = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_dialog_pane__WEBPACK_IMPORTED_MODULE_0__["_DialogPane"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useRef"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["getRef"]
});
DialogPane["displayName"] = "DialogPane";


/***/ }),

/***/ "../../polythene-mithril-dialog-pane/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!**************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-dialog-pane/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-dialog/dist/polythene-mithril-dialog.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-dialog/dist/polythene-mithril-dialog.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Dialog, DialogInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return Dialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogInstance", function() { return DialogInstance; });
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-dialog/node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-dialog */ "../../polythene-core-dialog/dist/polythene-core-dialog.mjs");
/* harmony import */ var polythene_mithril_dialog_pane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-dialog-pane */ "../../polythene-mithril-dialog-pane/dist/polythene-mithril-dialog-pane.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");





var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};
var menuClasses = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};
var classes = {
  component: "pe-dialog",
  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",
  backdrop: "pe-dialog__backdrop",
  touch: "pe-dialog__touch",
  // states
  fullScreen: "pe-dialog--full-screen",
  modal: "pe-dialog--modal",
  open: "pe-dialog--open",
  // class set to html element
  visible: "pe-dialog--visible",
  // class set to dialog element
  showBackdrop: "pe-dialog--backdrop",
  transition: "pe-dialog--transition",
  // lookup
  menuContent: menuClasses.content
};
var DialogInstance = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["cast"])(polythene_core_dialog__WEBPACK_IMPORTED_MODULE_2__["_Dialog"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useEffect"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useRef"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["getRef"],
  useReducer: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useReducer"],
  Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_4__["Shadow"],
  Pane: polythene_mithril_dialog_pane__WEBPACK_IMPORTED_MODULE_3__["DialogPane"],
  openDialogsSelector: polythene_core_dialog__WEBPACK_IMPORTED_MODULE_2__["openDialogsSelector"]
});
DialogInstance["displayName"] = "DialogInstance";
var options = {
  name: "dialog",
  htmlShowClass: classes.open,
  defaultId: "default_dialog",
  holderSelector: "div.".concat(classes.holder),
  instance: DialogInstance,
  placeholder: "span.".concat(classes.placeholder)
};
var MultipleInstance = Object(polythene_core__WEBPACK_IMPORTED_MODULE_1__["Multi"])({
  options: options
});
var Dialog = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["cast"])(MultipleInstance.render, {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useEffect"]
});
Object.getOwnPropertyNames(MultipleInstance).filter(function (p) {
  return p !== "render";
}).forEach(function (p) {
  return Dialog[p] = MultipleInstance[p];
});
Dialog["displayName"] = "Dialog";


/***/ }),

/***/ "../../polythene-mithril-dialog/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-dialog/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-drawer/dist/polythene-mithril-drawer.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-drawer/dist/polythene-mithril-drawer.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Drawer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return Drawer; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-drawer/node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-drawer */ "../../polythene-core-drawer/dist/polythene-core-drawer.mjs");
/* harmony import */ var polythene_mithril_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-dialog */ "../../polythene-mithril-dialog/dist/polythene-mithril-dialog.mjs");





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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};
var menuClasses = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};
var dialogClasses = {
  component: "pe-dialog",
  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",
  backdrop: "pe-dialog__backdrop",
  touch: "pe-dialog__touch",
  // states
  fullScreen: "pe-dialog--full-screen",
  modal: "pe-dialog--modal",
  open: "pe-dialog--open",
  // class set to html element
  visible: "pe-dialog--visible",
  // class set to dialog element
  showBackdrop: "pe-dialog--backdrop",
  transition: "pe-dialog--transition",
  // lookup
  menuContent: menuClasses.content
};
var classes = {
  component: "pe-dialog pe-drawer",
  // states
  cover: "pe-drawer--cover",
  push: "pe-drawer--push",
  mini: "pe-drawer--mini",
  permanent: "pe-drawer--permanent",
  border: "pe-drawer--border",
  floating: "pe-drawer--floating",
  fixed: "pe-drawer--fixed",
  anchorEnd: "pe-drawer--anchor-end",
  visible: dialogClasses.visible
};
var DrawerInstance = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_drawer__WEBPACK_IMPORTED_MODULE_2__["_Drawer"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  Dialog: polythene_mithril_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogInstance"],
  openDialogsSelector: polythene_core_drawer__WEBPACK_IMPORTED_MODULE_2__["openDialogsSelector"]
});
DrawerInstance["displayName"] = "DrawerInstance";
var DrawerToggle = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core__WEBPACK_IMPORTED_MODULE_0__["_Conditional"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"]
});
DrawerToggle["displayName"] = "DrawerToggle";
var Drawer = {
  view: function view(vnode) {
    return Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"])(DrawerToggle, _objectSpread2({}, vnode.attrs, {
      placeholderClassName: classes.placeholder,
      instance: DrawerInstance,
      permanent: vnode.attrs.permanent || vnode.attrs.mini // passed to Conditional

    }));
  }
};
Drawer["displayName"] = "Drawer";


/***/ }),

/***/ "../../polythene-mithril-drawer/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-drawer/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-fab/dist/polythene-mithril-fab.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-fab/dist/polythene-mithril-fab.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: FAB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAB", function() { return FAB; });
/* harmony import */ var polythene_core_fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-fab */ "../../polythene-core-fab/dist/polythene-core-fab.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-button */ "../../polythene-mithril-button/dist/polythene-mithril-button.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-fab/node_modules/cyano-mithril/dist/cyano-mithril.mjs");




var FAB = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["cast"])(polythene_core_fab__WEBPACK_IMPORTED_MODULE_0__["_FAB"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["a"],
  Button: polythene_mithril_button__WEBPACK_IMPORTED_MODULE_2__["Button"],
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"]
});
FAB["displayName"] = "FAB";


/***/ }),

/***/ "../../polythene-mithril-fab/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-fab/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \******************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs ***!
  \***************************************************************************************************************************************************/
/*! exports provided: IconButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return IconButton; });
/* harmony import */ var polythene_core_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-icon-button */ "../../polythene-core-icon-button/dist/polythene-core-icon-button.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-button */ "../../polythene-mithril-button/dist/polythene-mithril-button.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-icon-button/node_modules/cyano-mithril/dist/cyano-mithril.mjs");




var IconButton = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["cast"])(polythene_core_icon_button__WEBPACK_IMPORTED_MODULE_0__["_IconButton"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["a"],
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"],
  Button: polythene_mithril_button__WEBPACK_IMPORTED_MODULE_2__["Button"]
});


/***/ }),

/***/ "../../polythene-mithril-icon-button/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!**************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-icon-button/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs":
/*!*************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-icon/dist/polythene-mithril-icon.mjs ***!
  \*************************************************************************************************************************************/
/*! exports provided: Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var polythene_core_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-icon */ "../../polythene-core-icon/dist/polythene-core-icon.mjs");
/* harmony import */ var polythene_mithril_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-svg */ "../../polythene-mithril-svg/dist/polythene-mithril-svg.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-icon/node_modules/cyano-mithril/dist/cyano-mithril.mjs");



var Icon = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_icon__WEBPACK_IMPORTED_MODULE_0__["_Icon"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  SVG: polythene_mithril_svg__WEBPACK_IMPORTED_MODULE_1__["SVG"]
});
Icon["displayName"] = "Icon";


/***/ }),

/***/ "../../polythene-mithril-icon/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-icon/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-ios-spinner/dist/polythene-mithril-ios-spinner.mjs":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-ios-spinner/dist/polythene-mithril-ios-spinner.mjs ***!
  \***************************************************************************************************************************************************/
/*! exports provided: IOSSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IOSSpinner", function() { return IOSSpinner; });
/* harmony import */ var polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base-spinner */ "../../polythene-mithril-base-spinner/dist/polythene-mithril-base-spinner.mjs");
/* harmony import */ var polythene_core_ios_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-ios-spinner */ "../../polythene-core-ios-spinner/dist/polythene-core-ios-spinner.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-ios-spinner/node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");





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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var classes = {
  component: "pe-ios-spinner",
  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};
var baseSpinnerClasses = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};
var Spinner = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_ios_spinner__WEBPACK_IMPORTED_MODULE_1__["_Spinner"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  BaseSpinner: polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_0__["BaseSpinner"]
});
var SpinnerToggle = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core__WEBPACK_IMPORTED_MODULE_3__["_Conditional"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useEffect"]
});
SpinnerToggle["displayName"] = "IOSSpinnerToggle";
var IOSSpinner = {
  view: function view(vnode) {
    return Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"])(SpinnerToggle, _objectSpread2({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: Spinner
    }));
  }
};
IOSSpinner["classes"] = classes;
IOSSpinner["displayName"] = "IOSSpinner";


/***/ }),

/***/ "../../polythene-mithril-ios-spinner/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!**************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-ios-spinner/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-list-tile/dist/polythene-mithril-list-tile.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-list-tile/dist/polythene-mithril-list-tile.mjs ***!
  \***********************************************************************************************************************************************/
/*! exports provided: ListTile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListTile", function() { return ListTile; });
/* harmony import */ var polythene_core_list_tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-list-tile */ "../../polythene-core-list-tile/dist/polythene-core-list-tile.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-ripple */ "../../polythene-mithril-ripple/dist/polythene-mithril-ripple.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-list-tile/node_modules/cyano-mithril/dist/cyano-mithril.mjs");




var ListTile = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["cast"])(polythene_core_list_tile__WEBPACK_IMPORTED_MODULE_0__["_ListTile"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_3__["a"],
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_1__["Icon"],
  Ripple: polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_2__["Ripple"]
});
ListTile["displayName"] = "ListTile";


/***/ }),

/***/ "../../polythene-mithril-list-tile/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-list-tile/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \************************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-list/dist/polythene-mithril-list.mjs":
/*!*************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-list/dist/polythene-mithril-list.mjs ***!
  \*************************************************************************************************************************************/
/*! exports provided: List */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony import */ var polythene_core_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-list */ "../../polythene-core-list/dist/polythene-core-list.mjs");
/* harmony import */ var polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-list-tile */ "../../polythene-mithril-list-tile/dist/polythene-mithril-list-tile.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-list/node_modules/cyano-mithril/dist/cyano-mithril.mjs");



var List = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_list__WEBPACK_IMPORTED_MODULE_0__["_List"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  ListTile: polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_1__["ListTile"]
});
List["displayName"] = "List";


/***/ }),

/***/ "../../polythene-mithril-list/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-list/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-material-design-progress-spinner/dist/polythene-mithril-material-design-progress-spinner.mjs":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-material-design-progress-spinner/dist/polythene-mithril-material-design-progress-spinner.mjs ***!
  \*********************************************************************************************************************************************************************************************/
/*! exports provided: MaterialDesignProgressSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignProgressSpinner", function() { return MaterialDesignProgressSpinner; });
/* harmony import */ var polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base-spinner */ "../../polythene-mithril-base-spinner/dist/polythene-mithril-base-spinner.mjs");
/* harmony import */ var polythene_core_material_design_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-material-design-progress-spinner */ "../../polythene-core-material-design-progress-spinner/dist/polythene-core-material-design-progress-spinner.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-material-design-progress-spinner/node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");





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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var classes = {
  component: "pe-md-progress-spinner",
  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};
var baseSpinnerClasses = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};
var Spinner = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_material_design_progress_spinner__WEBPACK_IMPORTED_MODULE_1__["_Spinner"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useRef"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useEffect"],
  BaseSpinner: polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_0__["BaseSpinner"]
});
var SpinnerToggle = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core__WEBPACK_IMPORTED_MODULE_3__["_Conditional"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useEffect"]
});
SpinnerToggle["displayName"] = "MaterialDesignProgressSpinnerToggle";
var MaterialDesignProgressSpinner = {
  view: function view(vnode) {
    return Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"])(SpinnerToggle, _objectSpread2({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: Spinner
    }));
  }
};
MaterialDesignProgressSpinner["classes"] = classes;
MaterialDesignProgressSpinner["displayName"] = "MaterialDesignProgressSpinner";


/***/ }),

/***/ "../../polythene-mithril-material-design-progress-spinner/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!***********************************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-material-design-progress-spinner/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-material-design-spinner/dist/polythene-mithril-material-design-spinner.mjs":
/*!***************************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-material-design-spinner/dist/polythene-mithril-material-design-spinner.mjs ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: MaterialDesignSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignSpinner", function() { return MaterialDesignSpinner; });
/* harmony import */ var polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-base-spinner */ "../../polythene-mithril-base-spinner/dist/polythene-mithril-base-spinner.mjs");
/* harmony import */ var polythene_core_material_design_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-material-design-spinner */ "../../polythene-core-material-design-spinner/dist/polythene-core-material-design-spinner.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-material-design-spinner/node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");





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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var classes = {
  component: "pe-md-spinner",
  // elements
  animation: "pe-md-spinner__animation",
  circle: "pe-md-spinner__circle",
  circleClipper: "pe-md-spinner__circle-clipper",
  circleClipperLeft: "pe-md-spinner__circle-clipper-left",
  circleClipperRight: "pe-md-spinner__circle-clipper-right",
  gapPatch: "pe-md-spinner__gap-patch",
  layer: "pe-md-spinner__layer",
  layerN: "pe-md-spinner__layer-"
};
var baseSpinnerClasses = {
  component: "pe-spinner",
  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",
  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};
var Spinner = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_material_design_spinner__WEBPACK_IMPORTED_MODULE_1__["_Spinner"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  BaseSpinner: polythene_mithril_base_spinner__WEBPACK_IMPORTED_MODULE_0__["BaseSpinner"]
});
var SpinnerToggle = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core__WEBPACK_IMPORTED_MODULE_3__["_Conditional"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useEffect"]
});
SpinnerToggle["displayName"] = "MaterialDesignSpinnerToggle";
var MaterialDesignSpinner = {
  view: function view(vnode) {
    return Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"])(SpinnerToggle, _objectSpread2({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: Spinner
    }));
  }
};
MaterialDesignSpinner["classes"] = classes;
MaterialDesignSpinner["displayName"] = "MaterialDesignSpinner";


/***/ }),

/***/ "../../polythene-mithril-material-design-spinner/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!**************************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-material-design-spinner/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-menu/dist/polythene-mithril-menu.mjs":
/*!*************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-menu/dist/polythene-mithril-menu.mjs ***!
  \*************************************************************************************************************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-menu/node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-menu */ "../../polythene-core-menu/dist/polythene-core-menu.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");





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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var listTileClasses = {
  component: "pe-list-tile",
  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",
  // states  
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  insetH: "pe-list-tile--inset-h",
  insetV: "pe-list-tile--inset-v",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  rounded: "pe-list-tile--rounded",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky",
  navigation: "pe-list-tile--navigation"
};
var classes = {
  component: "pe-menu",
  // elements
  panel: "pe-menu__panel",
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  backdrop: "pe-menu__backdrop",
  // states
  floating: "pe-menu--floating",
  origin: "pe-menu--origin",
  permanent: "pe-menu--permanent",
  showBackdrop: "pe-menu--backdrop",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",
  isTopMenu: "pe-menu--top-menu",
  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};
var MenuInstance = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_menu__WEBPACK_IMPORTED_MODULE_2__["_Menu"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  useReducer: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useReducer"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useRef"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["getRef"],
  Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_3__["Shadow"]
});
var MenuToggle = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core__WEBPACK_IMPORTED_MODULE_0__["_Conditional"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"]
});
MenuToggle["displayName"] = "MenuToggle";
var Menu = {
  view: function view(vnode) {
    return Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"])(MenuToggle, _objectSpread2({}, vnode.attrs, {
      placeholderClassName: classes.placeholder,
      instance: MenuInstance
    }));
  }
};
Menu["displayName"] = "Menu";


/***/ }),

/***/ "../../polythene-mithril-menu/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-menu/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-notification/dist/polythene-mithril-notification.mjs":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-notification/dist/polythene-mithril-notification.mjs ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: Notification, NotificationInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return Notification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationInstance", function() { return NotificationInstance; });
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-notification/node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-notification */ "../../polythene-core-notification/dist/polythene-core-notification.mjs");



var classes = {
  component: "pe-notification",
  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",
  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multi-line",
  vertical: "pe-notification--vertical",
  visible: "pe-notification--visible"
};
var NotificationInstance = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["cast"])(polythene_core_notification__WEBPACK_IMPORTED_MODULE_2__["_Notification"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useEffect"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useRef"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["getRef"],
  useReducer: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useReducer"]
});
NotificationInstance["displayName"] = "NotificationInstance";
var options = {
  name: "notification",
  className: classes.component,
  htmlShowClass: classes.open,
  defaultId: "default_notification",
  holderSelector: ".".concat(classes.holder),
  instance: NotificationInstance,
  placeholder: "span.".concat(classes.placeholder),
  queue: true
};
var MultipleInstance = Object(polythene_core__WEBPACK_IMPORTED_MODULE_1__["Multi"])({
  options: options
});
var Notification = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["cast"])(MultipleInstance.render, {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useEffect"]
});
Object.getOwnPropertyNames(MultipleInstance).filter(function (p) {
  return p !== "render";
}).forEach(function (p) {
  return Notification[p] = MultipleInstance[p];
});
Notification["displayName"] = "Notification";


/***/ }),

/***/ "../../polythene-mithril-notification/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-notification/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-radio-button/dist/polythene-mithril-radio-button.mjs":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-radio-button/dist/polythene-mithril-radio-button.mjs ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: RadioButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return RadioButton; });
/* harmony import */ var polythene_core_radio_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-radio-button */ "../../polythene-core-radio-button/dist/polythene-core-radio-button.mjs");
/* harmony import */ var polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core-selection-control */ "../../polythene-core-selection-control/dist/polythene-core-selection-control.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-radio-button/node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-mithril-icon-button */ "../../polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs");





var ViewControl = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["_ViewControl"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_3__["Icon"],
  IconButton: polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_4__["IconButton"]
});
ViewControl["displayName"] = "ViewControl";
var SelectionControl = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_1__["_SelectionControl"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useEffect"],
  ViewControl: ViewControl
});
SelectionControl["displayName"] = "SelectionControl";
var RadioButton = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_radio_button__WEBPACK_IMPORTED_MODULE_0__["_RadioButton"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  SelectionControl: SelectionControl
});
RadioButton["displayName"] = "RadioButton";


/***/ }),

/***/ "../../polythene-mithril-radio-button/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-radio-button/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-radio-group/dist/polythene-mithril-radio-group.mjs":
/*!***************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-radio-group/dist/polythene-mithril-radio-group.mjs ***!
  \***************************************************************************************************************************************************/
/*! exports provided: RadioGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return RadioGroup; });
/* harmony import */ var polythene_core_radio_group__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-radio-group */ "../../polythene-core-radio-group/dist/polythene-core-radio-group.mjs");
/* harmony import */ var polythene_mithril_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-radio-button */ "../../polythene-mithril-radio-button/dist/polythene-mithril-radio-button.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-radio-group/node_modules/cyano-mithril/dist/cyano-mithril.mjs");



var RadioGroup = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_radio_group__WEBPACK_IMPORTED_MODULE_0__["_RadioGroup"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useEffect"],
  RadioButton: polythene_mithril_radio_button__WEBPACK_IMPORTED_MODULE_1__["RadioButton"]
});
RadioGroup["displayName"] = "RadioGroup";


/***/ }),

/***/ "../../polythene-mithril-radio-group/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!**************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-radio-group/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-raised-button/dist/polythene-mithril-raised-button.mjs":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-raised-button/dist/polythene-mithril-raised-button.mjs ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: RaisedButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RaisedButton", function() { return RaisedButton; });
/* harmony import */ var polythene_mithril_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-button */ "../../polythene-mithril-button/dist/polythene-mithril-button.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-raised-button/node_modules/cyano-mithril/dist/cyano-mithril.mjs");



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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var RaisedButton = {
  view: function view(vnode) {
    return Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"])(polythene_mithril_button__WEBPACK_IMPORTED_MODULE_0__["Button"], _objectSpread2({
      raised: true
    }, vnode.attrs), vnode.children);
  }
};
RaisedButton["displayName"] = "RaisedButton";


/***/ }),

/***/ "../../polythene-mithril-raised-button/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!****************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-raised-button/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-ripple/dist/polythene-mithril-ripple.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-ripple/dist/polythene-mithril-ripple.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Ripple */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return Ripple; });
/* harmony import */ var polythene_core_ripple__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-ripple */ "../../polythene-core-ripple/dist/polythene-core-ripple.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-ripple/node_modules/cyano-mithril/dist/cyano-mithril.mjs");


var Ripple = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_ripple__WEBPACK_IMPORTED_MODULE_0__["_Ripple"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["getRef"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useRef"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"]
});
Ripple["displayName"] = "Ripple";


/***/ }),

/***/ "../../polythene-mithril-ripple/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-ripple/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-search/dist/polythene-mithril-search.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-search/dist/polythene-mithril-search.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Search */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return Search; });
/* harmony import */ var polythene_core_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-search */ "../../polythene-core-search/dist/polythene-core-search.mjs");
/* harmony import */ var polythene_mithril_textfield__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-textfield */ "../../polythene-mithril-textfield/dist/polythene-mithril-textfield.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-search/node_modules/cyano-mithril/dist/cyano-mithril.mjs");



var Search = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_search__WEBPACK_IMPORTED_MODULE_0__["_Search"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["useState"],
  TextField: polythene_mithril_textfield__WEBPACK_IMPORTED_MODULE_1__["TextField"]
});
Search["displayName"] = "Search";


/***/ }),

/***/ "../../polythene-mithril-search/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-search/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Shadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shadow", function() { return Shadow; });
/* harmony import */ var polythene_core_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-shadow */ "../../polythene-core-shadow/dist/polythene-core-shadow.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-shadow/node_modules/cyano-mithril/dist/cyano-mithril.mjs");


var Shadow = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_shadow__WEBPACK_IMPORTED_MODULE_0__["_Shadow"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"]
});
Shadow["displayName"] = "Shadow";


/***/ }),

/***/ "../../polythene-mithril-shadow/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-shadow/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-slider/dist/polythene-mithril-slider.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-slider/dist/polythene-mithril-slider.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Slider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return Slider; });
/* harmony import */ var polythene_core_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-slider */ "../../polythene-core-slider/dist/polythene-core-slider.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-slider/node_modules/cyano-mithril/dist/cyano-mithril.mjs");


var Slider = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_slider__WEBPACK_IMPORTED_MODULE_0__["_Slider"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useRef"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["getRef"]
});
Slider["displayName"] = "Slider";


/***/ }),

/***/ "../../polythene-mithril-slider/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-slider/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-snackbar/dist/polythene-mithril-snackbar.mjs":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-snackbar/dist/polythene-mithril-snackbar.mjs ***!
  \*********************************************************************************************************************************************/
/*! exports provided: Snackbar, SnackbarInstance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snackbar", function() { return Snackbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarInstance", function() { return SnackbarInstance; });
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-snackbar/node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");
/* harmony import */ var polythene_core_snackbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-core-snackbar */ "../../polythene-core-snackbar/dist/polythene-core-snackbar.mjs");




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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var notificationClasses = {
  component: "pe-notification",
  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",
  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multi-line",
  vertical: "pe-notification--vertical",
  visible: "pe-notification--visible"
};

var classes = _objectSpread2({}, notificationClasses, {
  component: "pe-notification pe-snackbar",
  // elements
  holder: "pe-snackbar__holder",
  placeholder: "pe-snackbar__placeholder",
  // states
  open: "pe-snackbar--open"
});

var SnackbarInstance = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["cast"])(polythene_core_snackbar__WEBPACK_IMPORTED_MODULE_2__["_Snackbar"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useEffect"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useRef"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["getRef"],
  useReducer: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useReducer"]
});
SnackbarInstance["displayName"] = "SnackbarInstance";
var options = {
  name: "snackbar",
  className: classes.component,
  htmlShowClass: classes.open,
  defaultId: "default_snackbar",
  holderSelector: ".".concat(classes.holder),
  instance: SnackbarInstance,
  placeholder: "span.".concat(classes.placeholder),
  queue: true,
  transitions: polythene_core_snackbar__WEBPACK_IMPORTED_MODULE_2__["transitions"]
};
var MultipleInstance = Object(polythene_core__WEBPACK_IMPORTED_MODULE_1__["Multi"])({
  options: options
});
var Snackbar = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["cast"])(MultipleInstance.render, {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["h"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_0__["useEffect"]
});
Object.getOwnPropertyNames(MultipleInstance).filter(function (p) {
  return p !== "render";
}).forEach(function (p) {
  return Snackbar[p] = MultipleInstance[p];
});
Snackbar["displayName"] = "Snackbar";


/***/ }),

/***/ "../../polythene-mithril-snackbar/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!***********************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-snackbar/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-svg/dist/polythene-mithril-svg.mjs":
/*!***********************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-svg/dist/polythene-mithril-svg.mjs ***!
  \***********************************************************************************************************************************/
/*! exports provided: SVG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return SVG; });
/* harmony import */ var polythene_core_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-svg */ "../../polythene-core-svg/dist/polythene-core-svg.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-svg/node_modules/cyano-mithril/dist/cyano-mithril.mjs");


var SVG = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_svg__WEBPACK_IMPORTED_MODULE_0__["_SVG"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["getRef"]
});


/***/ }),

/***/ "../../polythene-mithril-svg/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!******************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-svg/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \******************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-switch/dist/polythene-mithril-switch.mjs":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-switch/dist/polythene-mithril-switch.mjs ***!
  \*****************************************************************************************************************************************/
/*! exports provided: Switch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return Switch; });
/* harmony import */ var polythene_core_switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-switch */ "../../polythene-core-switch/dist/polythene-core-switch.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-switch/node_modules/cyano-mithril/dist/cyano-mithril.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");
/* harmony import */ var polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-icon-button */ "../../polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs");
/* harmony import */ var polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-core-selection-control */ "../../polythene-core-selection-control/dist/polythene-core-selection-control.mjs");





var ViewControl = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_switch__WEBPACK_IMPORTED_MODULE_0__["_ViewControl"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_2__["Shadow"],
  IconButton: polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_3__["IconButton"]
});
ViewControl["displayName"] = "ViewControl";
var SelectionControl = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_selection_control__WEBPACK_IMPORTED_MODULE_4__["_SelectionControl"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"],
  ViewControl: ViewControl
});
SelectionControl["displayName"] = "SelectionControl";
var Switch = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_switch__WEBPACK_IMPORTED_MODULE_0__["_Switch"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  SelectionControl: SelectionControl
});
Switch["displayName"] = "Switch";


/***/ }),

/***/ "../../polythene-mithril-switch/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!*********************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-switch/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-tabs/dist/polythene-mithril-tabs.mjs":
/*!*************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-tabs/dist/polythene-mithril-tabs.mjs ***!
  \*************************************************************************************************************************************/
/*! exports provided: Tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return Tabs; });
/* harmony import */ var polythene_core_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-tabs */ "../../polythene-core-tabs/dist/polythene-core-tabs.mjs");
/* harmony import */ var polythene_mithril_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-button */ "../../polythene-mithril-button/dist/polythene-mithril-button.mjs");
/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony import */ var polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-icon-button */ "../../polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-tabs/node_modules/cyano-mithril/dist/cyano-mithril.mjs");





var ScrollButton = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["cast"])(polythene_core_tabs__WEBPACK_IMPORTED_MODULE_0__["_ScrollButton"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["a"],
  IconButton: polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_3__["IconButton"]
});
var Tab = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["cast"])(polythene_core_tabs__WEBPACK_IMPORTED_MODULE_0__["_Tab"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["a"],
  Button: polythene_mithril_button__WEBPACK_IMPORTED_MODULE_1__["Button"],
  Icon: polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_2__["Icon"]
});
var Tabs = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["cast"])(polythene_core_tabs__WEBPACK_IMPORTED_MODULE_0__["_Tabs"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["a"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["getRef"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["useState"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_4__["useEffect"],
  ScrollButton: ScrollButton,
  Tab: Tab
});
Tabs["displayName"] = "Tabs";


/***/ }),

/***/ "../../polythene-mithril-tabs/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!*******************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-tabs/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-textfield/dist/polythene-mithril-textfield.mjs":
/*!***********************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-textfield/dist/polythene-mithril-textfield.mjs ***!
  \***********************************************************************************************************************************************/
/*! exports provided: TextField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return TextField; });
/* harmony import */ var polythene_core_textfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-textfield */ "../../polythene-core-textfield/dist/polythene-core-textfield.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-textfield/node_modules/cyano-mithril/dist/cyano-mithril.mjs");


var TextField = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["cast"])(polythene_core_textfield__WEBPACK_IMPORTED_MODULE_0__["_TextField"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["a"],
  useEffect: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useEffect"],
  useState: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useState"],
  useRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["useRef"],
  getRef: cyano_mithril__WEBPACK_IMPORTED_MODULE_1__["getRef"]
});
TextField["displayName"] = "TextField";


/***/ }),

/***/ "../../polythene-mithril-textfield/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!************************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-textfield/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \************************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril-toolbar/dist/polythene-mithril-toolbar.mjs":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-toolbar/dist/polythene-mithril-toolbar.mjs ***!
  \*******************************************************************************************************************************************/
/*! exports provided: Toolbar, ToolbarTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return Toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarTitle", function() { return ToolbarTitle; });
/* harmony import */ var polythene_core_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core-toolbar */ "../../polythene-core-toolbar/dist/polythene-core-toolbar.mjs");
/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");
/* harmony import */ var cyano_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cyano-mithril */ "../../polythene-mithril-toolbar/node_modules/cyano-mithril/dist/cyano-mithril.mjs");



var Toolbar = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_toolbar__WEBPACK_IMPORTED_MODULE_0__["_Toolbar"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"],
  Shadow: polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_1__["Shadow"]
});
var ToolbarTitle = Object(cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["cast"])(polythene_core_toolbar__WEBPACK_IMPORTED_MODULE_0__["_ToolbarTitle"], {
  h: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["h"],
  a: cyano_mithril__WEBPACK_IMPORTED_MODULE_2__["a"]
});


/***/ }),

/***/ "../../polythene-mithril-toolbar/node_modules/cyano-mithril/dist/cyano-mithril.mjs":
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril-toolbar/node_modules/cyano-mithril/dist/cyano-mithril.mjs ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: a, cast, getRef, h, jsx, useCallback, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cast", function() { return cast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRef", function() { return getRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCallback", function() { return useCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEffect", function() { return useEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useLayoutEffect", function() { return useLayoutEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMemo", function() { return useMemo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReducer", function() { return useReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRef", function() { return useRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useState", function() { return useState; });
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);


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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

var currentState;
var call = Function.prototype.call.bind(Function.prototype.call);

var scheduleRender = () => // Call m within the function body so environments with a global instance of m (like flems.io) don't complain
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.redraw();

var updateDeps = deps => {
  var state = currentState;
  var index = state.depsIndex++;
  var prevDeps = state.depsStates[index] || [];
  var shouldRecompute = deps === undefined ? true // Always compute
  : Array.isArray(deps) ? deps.length > 0 ? !deps.every((x, i) => x === prevDeps[i]) // Only compute when one of the deps has changed
  : !state.setup // Empty array: only compute at mount
  : false; // Invalid value, do nothing

  state.depsStates[index] = deps;
  return shouldRecompute;
};

var effect = function effect() {
  var isAsync = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return (fn, deps) => {
    var state = currentState;
    var shouldRecompute = updateDeps(deps);

    if (shouldRecompute) {
      var runCallbackFn = () => {
        var teardown = fn(); // A callback may return a function. If any, add it to the teardowns:

        if (typeof teardown === "function") {
          // Store this this function to be called at unmount
          state.teardowns.set(fn, teardown); // At unmount, call re-render at least once

          state.teardowns.set("_", scheduleRender);
        }
      };

      state.updates.push(isAsync ? () => new Promise(resolve => requestAnimationFrame(resolve)).then(runCallbackFn) : runCallbackFn);
    }
  };
};

var updateState = function updateState(initialValue) {
  var newValueFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => value;
  var state = currentState;
  var index = state.statesIndex++;

  if (!state.setup) {
    state.states[index] = initialValue;
  }

  return [state.states[index], value => {
    var previousValue = state.states[index];
    var newValue = newValueFn(value, index);
    state.states[index] = newValue;

    if (JSON.stringify(newValue) !== JSON.stringify(previousValue)) {
      scheduleRender(); // Calling redraw multiple times: Mithril will drop extraneous redraw calls, so performance should not be an issue
    }
  }, index];
};

var useState = initialValue => {
  var state = currentState;

  var newValueFn = (value, index) => typeof value === "function" ? value(state.states[index]) : value;

  return updateState(initialValue, newValueFn);
};

var useEffect = effect(true);
var useLayoutEffect = effect();

var useReducer = (reducer, initialArg, initFn) => {
  var state = currentState; // From the React docs: You can also create the initial state lazily. To do this, you can pass an init function as the third argument. The initial state will be set to init(initialArg).

  var initialValue = !state.setup && initFn ? initFn(initialArg) : initialArg;

  var getValueDispatch = () => {
    var [value, setValue, index] = updateState(initialValue);

    var dispatch = action => {
      var previousValue = state.states[index];
      return setValue( // Next state:
      reducer(previousValue, action));
    };

    return [value, dispatch];
  };

  return getValueDispatch();
};

var useRef = initialValue => {
  // A ref is a persisted object that will not be updated, so it has no setter
  var [value] = updateState({
    current: initialValue
  });
  return value;
};

var useMemo = (fn, deps) => {
  var state = currentState;
  var shouldRecompute = updateDeps(deps);
  var [memoized, setMemoized] = !state.setup ? updateState(fn()) : updateState();

  if (state.setup && shouldRecompute) {
    setMemoized(fn());
  }

  return memoized;
};

var useCallback = (fn, deps) => useMemo(() => fn, deps);

var withHooks = (component, initialProps) => {
  var init = vnode => {
    Object.assign(vnode.state, {
      setup: false,
      states: [],
      statesIndex: 0,
      depsStates: [],
      depsIndex: 0,
      updates: [],
      teardowns: new Map() // Keep track of teardowns even when the update was run only once

    });
  };

  var update = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      vnode.state.updates.forEach(call);
    } finally {
      Object.assign(vnode.state, {
        setup: true,
        updates: [],
        depsIndex: 0,
        statesIndex: 0
      });
      currentState = prevState;
    }
  };

  var render = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      return component(_objectSpread2({}, initialProps, {}, vnode.attrs, {
        vnode,
        children: vnode.children
      }));
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    } finally {
      currentState = prevState;
    }
  };

  var teardown = vnode => {
    var prevState = currentState;
    currentState = vnode.state;

    try {
      [...vnode.state.teardowns.values()].forEach(call);
    } finally {
      currentState = prevState;
    }
  };

  return {
    oninit: init,
    oncreate: update,
    onupdate: update,
    view: render,
    onremove: teardown
  };
};

var htmlAttributes = {
  accept: "accept",
  acceptcharset: "acceptcharset",
  accesskey: "accesskey",
  action: "action",
  allowfullscreen: "allowfullscreen",
  allowtransparency: "allowtransparency",
  alt: "alt",
  async: "async",
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  autoplay: "autoplay",
  capture: "capture",
  cellpadding: "cellpadding",
  cellspacing: "cellspacing",
  challenge: "challenge",
  charset: "charset",
  checked: "checked",
  class: "className",
  classid: "classid",
  classname: "className",
  // Special case:
  className: "className",
  colspan: "colspan",
  cols: "cols",
  content: "content",
  contenteditable: "contenteditable",
  contextmenu: "contextmenu",
  controls: "controls",
  coords: "coords",
  crossorigin: "crossorigin",
  data: "data",
  datetime: "datetime",
  default: "default",
  defer: "defer",
  dir: "dir",
  disabled: "disabled",
  download: "download",
  draggable: "draggable",
  enctype: "enctype",
  form: "form",
  formaction: "formaction",
  formenctype: "formenctype",
  formmethod: "formmethod",
  formnovalidate: "formnovalidate",
  formtarget: "formtarget",
  frameborder: "frameborder",
  headers: "headers",
  height: "height",
  hidden: "hidden",
  high: "high",
  href: "href",
  hreflang: "hreflang",
  htmlfor: "htmlfor",
  httpequiv: "httpequiv",
  icon: "icon",
  id: "id",
  inputmode: "inputmode",
  integrity: "integrity",
  is: "is",
  keyparams: "keyparams",
  keytype: "keytype",
  kind: "kind",
  label: "label",
  lang: "lang",
  list: "list",
  loop: "loop",
  low: "low",
  manifest: "manifest",
  marginheight: "marginheight",
  marginwidth: "marginwidth",
  max: "max",
  maxlength: "maxlength",
  media: "media",
  mediagroup: "mediagroup",
  method: "method",
  min: "min",
  minlength: "minlength",
  multiple: "multiple",
  muted: "muted",
  name: "name",
  novalidate: "novalidate",
  nonce: "nonce",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  open: "open",
  optimum: "optimum",
  pattern: "pattern",
  placeholder: "placeholder",
  poster: "poster",
  preload: "preload",
  radiogroup: "radiogroup",
  readonly: "readonly",
  rel: "rel",
  required: "required",
  reversed: "reversed",
  role: "role",
  rowspan: "rowspan",
  rows: "rows",
  sandbox: "sandbox",
  scope: "scope",
  scoped: "scoped",
  scrolling: "scrolling",
  seamless: "seamless",
  selected: "selected",
  shape: "shape",
  size: "size",
  sizes: "sizes",
  span: "span",
  spellcheck: "spellcheck",
  src: "src",
  srcdoc: "srcdoc",
  srclang: "srclang",
  srcset: "srcset",
  start: "start",
  step: "step",
  style: "style",
  summary: "summary",
  tabindex: "tabindex",
  target: "target",
  title: "title",
  type: "type",
  usemap: "usemap",
  value: "value",
  width: "width",
  wmode: "wmode",
  wrap: "wrap"
};

var a = htmlAttributes;
var h = mithril__WEBPACK_IMPORTED_MODULE_0___default.a || {};
var trust = h.trust;

h.trust = (html, wrapper) => wrapper ? mithril__WEBPACK_IMPORTED_MODULE_0___default()(wrapper, trust(html)) : trust(html);

h.displayName = "mithril";
h.fragment = mithril__WEBPACK_IMPORTED_MODULE_0___default.a.fragment;
var jsx = mithril__WEBPACK_IMPORTED_MODULE_0___default.a;
var getRef = fn => ({
  oncreate: vnode => fn(vnode.dom)
});
var cast = withHooks;




/***/ }),

/***/ "../../polythene-mithril/dist/polythene-mithril.mjs":
/*!***************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-mithril/dist/polythene-mithril.mjs ***!
  \***************************************************************************************************************************/
/*! exports provided: Button, ButtonGroup, Card, Checkbox, Dialog, DialogInstance, DialogPane, Drawer, FAB, Icon, IconButton, IOSSpinner, List, ListTile, MaterialDesignProgressSpinner, MaterialDesignSpinner, Menu, Notification, NotificationInstance, RadioButton, RadioGroup, RaisedButton, Ripple, Search, Shadow, Slider, Snackbar, SnackbarInstance, SVG, Switch, Tabs, TextField, Toolbar, ToolbarTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var polythene_mithril_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-mithril-button */ "../../polythene-mithril-button/dist/polythene-mithril-button.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return polythene_mithril_button__WEBPACK_IMPORTED_MODULE_0__["Button"]; });

/* harmony import */ var polythene_mithril_button_group__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polythene-mithril-button-group */ "../../polythene-mithril-button-group/dist/polythene-mithril-button-group.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return polythene_mithril_button_group__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"]; });

/* harmony import */ var polythene_mithril_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril-card */ "../../polythene-mithril-card/dist/polythene-mithril-card.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return polythene_mithril_card__WEBPACK_IMPORTED_MODULE_2__["Card"]; });

/* harmony import */ var polythene_mithril_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-mithril-checkbox */ "../../polythene-mithril-checkbox/dist/polythene-mithril-checkbox.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return polythene_mithril_checkbox__WEBPACK_IMPORTED_MODULE_3__["Checkbox"]; });

/* harmony import */ var polythene_mithril_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-mithril-dialog */ "../../polythene-mithril-dialog/dist/polythene-mithril-dialog.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return polythene_mithril_dialog__WEBPACK_IMPORTED_MODULE_4__["Dialog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogInstance", function() { return polythene_mithril_dialog__WEBPACK_IMPORTED_MODULE_4__["DialogInstance"]; });

/* harmony import */ var polythene_mithril_dialog_pane__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polythene-mithril-dialog-pane */ "../../polythene-mithril-dialog-pane/dist/polythene-mithril-dialog-pane.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogPane", function() { return polythene_mithril_dialog_pane__WEBPACK_IMPORTED_MODULE_5__["DialogPane"]; });

/* harmony import */ var polythene_mithril_drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! polythene-mithril-drawer */ "../../polythene-mithril-drawer/dist/polythene-mithril-drawer.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Drawer", function() { return polythene_mithril_drawer__WEBPACK_IMPORTED_MODULE_6__["Drawer"]; });

/* harmony import */ var polythene_mithril_fab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! polythene-mithril-fab */ "../../polythene-mithril-fab/dist/polythene-mithril-fab.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FAB", function() { return polythene_mithril_fab__WEBPACK_IMPORTED_MODULE_7__["FAB"]; });

/* harmony import */ var polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! polythene-mithril-icon */ "../../polythene-mithril-icon/dist/polythene-mithril-icon.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return polythene_mithril_icon__WEBPACK_IMPORTED_MODULE_8__["Icon"]; });

/* harmony import */ var polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! polythene-mithril-icon-button */ "../../polythene-mithril-icon-button/dist/polythene-mithril-icon-button.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return polythene_mithril_icon_button__WEBPACK_IMPORTED_MODULE_9__["IconButton"]; });

/* harmony import */ var polythene_mithril_ios_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! polythene-mithril-ios-spinner */ "../../polythene-mithril-ios-spinner/dist/polythene-mithril-ios-spinner.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IOSSpinner", function() { return polythene_mithril_ios_spinner__WEBPACK_IMPORTED_MODULE_10__["IOSSpinner"]; });

/* harmony import */ var polythene_mithril_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! polythene-mithril-list */ "../../polythene-mithril-list/dist/polythene-mithril-list.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return polythene_mithril_list__WEBPACK_IMPORTED_MODULE_11__["List"]; });

/* harmony import */ var polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! polythene-mithril-list-tile */ "../../polythene-mithril-list-tile/dist/polythene-mithril-list-tile.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListTile", function() { return polythene_mithril_list_tile__WEBPACK_IMPORTED_MODULE_12__["ListTile"]; });

/* harmony import */ var polythene_mithril_material_design_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! polythene-mithril-material-design-progress-spinner */ "../../polythene-mithril-material-design-progress-spinner/dist/polythene-mithril-material-design-progress-spinner.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignProgressSpinner", function() { return polythene_mithril_material_design_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MaterialDesignProgressSpinner"]; });

/* harmony import */ var polythene_mithril_material_design_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! polythene-mithril-material-design-spinner */ "../../polythene-mithril-material-design-spinner/dist/polythene-mithril-material-design-spinner.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignSpinner", function() { return polythene_mithril_material_design_spinner__WEBPACK_IMPORTED_MODULE_14__["MaterialDesignSpinner"]; });

/* harmony import */ var polythene_mithril_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! polythene-mithril-menu */ "../../polythene-mithril-menu/dist/polythene-mithril-menu.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return polythene_mithril_menu__WEBPACK_IMPORTED_MODULE_15__["Menu"]; });

/* harmony import */ var polythene_mithril_notification__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! polythene-mithril-notification */ "../../polythene-mithril-notification/dist/polythene-mithril-notification.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return polythene_mithril_notification__WEBPACK_IMPORTED_MODULE_16__["Notification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationInstance", function() { return polythene_mithril_notification__WEBPACK_IMPORTED_MODULE_16__["NotificationInstance"]; });

/* harmony import */ var polythene_mithril_radio_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! polythene-mithril-radio-button */ "../../polythene-mithril-radio-button/dist/polythene-mithril-radio-button.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return polythene_mithril_radio_button__WEBPACK_IMPORTED_MODULE_17__["RadioButton"]; });

/* harmony import */ var polythene_mithril_radio_group__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! polythene-mithril-radio-group */ "../../polythene-mithril-radio-group/dist/polythene-mithril-radio-group.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return polythene_mithril_radio_group__WEBPACK_IMPORTED_MODULE_18__["RadioGroup"]; });

/* harmony import */ var polythene_mithril_raised_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! polythene-mithril-raised-button */ "../../polythene-mithril-raised-button/dist/polythene-mithril-raised-button.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RaisedButton", function() { return polythene_mithril_raised_button__WEBPACK_IMPORTED_MODULE_19__["RaisedButton"]; });

/* harmony import */ var polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! polythene-mithril-ripple */ "../../polythene-mithril-ripple/dist/polythene-mithril-ripple.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return polythene_mithril_ripple__WEBPACK_IMPORTED_MODULE_20__["Ripple"]; });

/* harmony import */ var polythene_mithril_search__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! polythene-mithril-search */ "../../polythene-mithril-search/dist/polythene-mithril-search.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return polythene_mithril_search__WEBPACK_IMPORTED_MODULE_21__["Search"]; });

/* harmony import */ var polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! polythene-mithril-shadow */ "../../polythene-mithril-shadow/dist/polythene-mithril-shadow.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shadow", function() { return polythene_mithril_shadow__WEBPACK_IMPORTED_MODULE_22__["Shadow"]; });

/* harmony import */ var polythene_mithril_slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! polythene-mithril-slider */ "../../polythene-mithril-slider/dist/polythene-mithril-slider.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return polythene_mithril_slider__WEBPACK_IMPORTED_MODULE_23__["Slider"]; });

/* harmony import */ var polythene_mithril_snackbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! polythene-mithril-snackbar */ "../../polythene-mithril-snackbar/dist/polythene-mithril-snackbar.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Snackbar", function() { return polythene_mithril_snackbar__WEBPACK_IMPORTED_MODULE_24__["Snackbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SnackbarInstance", function() { return polythene_mithril_snackbar__WEBPACK_IMPORTED_MODULE_24__["SnackbarInstance"]; });

/* harmony import */ var polythene_mithril_svg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! polythene-mithril-svg */ "../../polythene-mithril-svg/dist/polythene-mithril-svg.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return polythene_mithril_svg__WEBPACK_IMPORTED_MODULE_25__["SVG"]; });

/* harmony import */ var polythene_mithril_switch__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! polythene-mithril-switch */ "../../polythene-mithril-switch/dist/polythene-mithril-switch.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return polythene_mithril_switch__WEBPACK_IMPORTED_MODULE_26__["Switch"]; });

/* harmony import */ var polythene_mithril_tabs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! polythene-mithril-tabs */ "../../polythene-mithril-tabs/dist/polythene-mithril-tabs.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return polythene_mithril_tabs__WEBPACK_IMPORTED_MODULE_27__["Tabs"]; });

/* harmony import */ var polythene_mithril_textfield__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! polythene-mithril-textfield */ "../../polythene-mithril-textfield/dist/polythene-mithril-textfield.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return polythene_mithril_textfield__WEBPACK_IMPORTED_MODULE_28__["TextField"]; });

/* harmony import */ var polythene_mithril_toolbar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! polythene-mithril-toolbar */ "../../polythene-mithril-toolbar/dist/polythene-mithril-toolbar.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return polythene_mithril_toolbar__WEBPACK_IMPORTED_MODULE_29__["Toolbar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarTitle", function() { return polythene_mithril_toolbar__WEBPACK_IMPORTED_MODULE_29__["ToolbarTitle"]; });
































/***/ }),

/***/ "../../polythene-style/dist/polythene-style.mjs":
/*!***********************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-style/dist/polythene-style.mjs ***!
  \***********************************************************************************************************************/
/*! exports provided: vars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return vars; });
// @ts-check
// Global style variables
var grid_unit = 4;
var grid_unit_component = 8;
var increment = 7 * grid_unit_component; // 7 * 8 = 56

var increment_large = 8 * grid_unit_component; // 8 * 8 = 64

var vars = {
  // grid
  grid_unit: grid_unit,
  grid_unit_component: grid_unit_component,
  increment: increment,
  increment_large: increment_large,
  grid_unit_menu: 56,
  grid_unit_icon_button: 6 * grid_unit_component,
  // 48
  // common sizes
  unit_block_border_radius: 4,
  unit_item_border_radius: 4,
  unit_indent: 72,
  unit_indent_large: 80,
  unit_side_padding: 16,
  // buttons
  unit_touch_height: 48,
  unit_icon_size_small: 2 * grid_unit_component,
  // 16
  unit_icon_size: 3 * grid_unit_component,
  // 24
  unit_icon_size_medium: 4 * grid_unit_component,
  // 32
  unit_icon_size_large: 5 * grid_unit_component,
  // 40
  // screen dimensions
  unit_screen_size_extra_large: 1280,
  unit_screen_size_large: 960,
  unit_screen_size_medium: 480,
  unit_screen_size_small: 320,
  // transitions
  animation_duration: ".18s",
  animation_curve_slow_in_fast_out: "cubic-bezier(.4, 0, .2, 1)",
  animation_curve_slow_in_linear_out: "cubic-bezier(0, 0, .2, 1)",
  animation_curve_linear_in_fast_out: "cubic-bezier(.4, 0, 1, 1)",
  animation_curve_default: "ease-out",
  // font
  font_weight_light: 300,
  font_weight_normal: 400,
  font_weight_medium: 500,
  font_weight_bold: 700,
  font_size_title: 20,
  line_height: 1.5,
  // base colors
  color_primary: "33, 150, 243",
  // blue 500
  color_primary_active: "30, 136, 229",
  // blue 600
  color_primary_dark: "25, 118, 210",
  // blue 700
  color_primary_faded: "100, 181, 249",
  // blue 300
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
  blend_light_border_medium: .24,
  blend_light_border_light: .11,
  blend_light_background_active: .14,
  blend_light_background_hover: .06,
  blend_light_background_hover_medium: .12,
  // for the lighter tinted icon buttons
  blend_light_background_disabled: .09,
  blend_light_overlay_background: .3,
  blend_dark_text_primary: 1,
  blend_dark_text_regular: .87,
  blend_dark_text_secondary: .70,
  blend_dark_text_tertiary: .40,
  blend_dark_text_disabled: .26,
  blend_dark_border_medium: .22,
  blend_dark_border_light: .10,
  blend_dark_background_active: .14,
  blend_dark_background_hover: .08,
  blend_dark_background_hoverMedium: .12,
  // for the lighter tinted icon buttons
  blend_dark_background_disabled: .12,
  blend_dark_overlay_background: .3,

  /*
  Breakpoints
  Specs: https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints
  Breakbpoint naming: inspiration from
  https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862
  */
  breakpoint_for_phone_only: 599,
  // set max-width  cols: 4,  gutter: 16
  breakpoint_for_tablet_portrait_up: 600,
  // set min-width  cols: 8,  gutter: 24
  breakpoint_for_tablet_landscape_up: 840,
  // etc.           cols: 12, gutter: 24
  breakpoint_for_desktop_up: 1280,
  breakpoint_for_big_desktop_up: 1600,
  breakpoint_for_tv_up: 1920,
  // z-index
  z_toolbar: 100,
  z_menu: 1000,
  z_app_bar: 2000,
  z_drawer: 3000,
  z_notification: 5000,
  z_dialog: 7000
};


/***/ }),

/***/ "../../polythene-theme/dist/polythene-theme.mjs":
/*!***********************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-theme/dist/polythene-theme.mjs ***!
  \***********************************************************************************************************************/
/*! exports provided: vars, componentConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentConfig", function() { return componentConfig; });
/* harmony import */ var polythene_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-style */ "../../polythene-style/dist/polythene-style.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vars", function() { return polythene_style__WEBPACK_IMPORTED_MODULE_0__["vars"]; });

 // @ts-check
// Placeholder for custom theme config file
// In your app paths setup, change the current path to your custom config file; see the theme README.
// Example:
// export const componentConfig = {
//     Button: vars => {
//         const mainColor = '#e4521b';
//         const textColor = '#fff';
//         const newVars = Object.assign(
//           {},
//           vars,
//           {
//             border_radius:                        0,
//             color_light_raised_normal_background: mainColor,
//             color_light_raised_normal_text:       textColor,
//             color_dark_raised_normal_background:  mainColor,
//             color_dark_raised_normal_text:        textColor
//           }
//         );
//         return [
//             { '': vars }, // default vars for all pages
//             { '.example-custom-theme ': newVars } // custom vars for this selector
//         ];
//     }
// };

var componentConfig = {};


/***/ }),

/***/ "../../polythene-utilities/dist/polythene-utilities.mjs":
/*!*******************************************************************************************************************************!*\
  !*** /Users/arthur/code/Github Projects/Polythene/polythene/master/packages/polythene-utilities/dist/polythene-utilities.mjs ***!
  \*******************************************************************************************************************************/
/*! exports provided: Timer, addWebFont, easing, scrollTo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWebFont", function() { return addWebFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollTo", function() { return scrollTo; });
/* harmony import */ var polythene_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polythene-core */ "../../polythene-core/dist/polythene-core.mjs");


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
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) return;

  if (!window["WebFontConfig"]) {
    /**
     * @param {object} params
     * @param {string} [params.name]
     * @param {string} [params.familyName]
     * @param {any} [params.fvd]
     */
    var emitEvent = function emitEvent(_ref) {
      var name = _ref.name,
          familyName = _ref.familyName,
          fvd = _ref.fvd;
      return Object(polythene_core__WEBPACK_IMPORTED_MODULE_0__["emit"])("webfontloader", {
        name: name,
        familyName: familyName,
        fvd: fvd,
        vendor: vendor,
        config: config
      });
    };

    window["WebFontConfig"] = {
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
      wf.async = true;
      var s = document.getElementsByTagName("script")[0];

      if (s && s.parentNode) {
        s.parentNode.insertBefore(wf, s);
      }
    })();
  }

  var vendorCfg = window["WebFontConfig"][vendor] || {};

  if (config) {
    _extends(vendorCfg, config);
  }

  window["WebFontConfig"][vendor] = vendorCfg;
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
  if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"]) {
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

var requestAnimFrame = polythene_core__WEBPACK_IMPORTED_MODULE_0__["isServer"] ? function () {} : function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window["mozRequestAnimationFrame"] || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  };
}(); // @ts-check

var Timer = function Timer() {
  /** @type {number} */
  var timerId;
  /** @type {number} */

  var startTime;
  /** @type {number} */

  var remaining;
  /** @type {() => any} */

  var cb;

  var stop = function stop() {
    if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
      window.clearTimeout(timerId);
    }
  };

  var pause = function pause() {
    return stop(), remaining -= new Date().getTime() - startTime;
  };

  var startTimer = function startTimer() {
    if (polythene_core__WEBPACK_IMPORTED_MODULE_0__["isClient"]) {
      stop();
      startTime = new Date().getTime();
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



/***/ }),

/***/ "../node_modules/mithril/mithril.js":
/*!******************************************!*\
  !*** ../node_modules/mithril/mithril.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, global) {;(function() {
"use strict"
function Vnode(tag, key, attrs0, children0, text, dom) {
	return {tag: tag, key: key, attrs: attrs0, children: children0, text: text, dom: dom, domSize: undefined, state: undefined, events: undefined, instance: undefined}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node == null || typeof node === "boolean") return null
	if (typeof node === "object") return node
	return Vnode("#", undefined, undefined, String(node), undefined, undefined)
}
Vnode.normalizeChildren = function(input) {
	var children0 = []
	if (input.length) {
		var isKeyed = input[0] != null && input[0].key != null
		// Note: this is a *very* perf-sensitive check.
		// Fun fact: merging the loop like this is somehow faster than splitting
		// it, noticeably so.
		for (var i = 1; i < input.length; i++) {
			if ((input[i] != null && input[i].key != null) !== isKeyed) {
				throw new TypeError("Vnodes must either always have keys or never have keys!")
			}
		}
		for (var i = 0; i < input.length; i++) {
			children0[i] = Vnode.normalize(input[i])
		}
	}
	return children0
}
// Call via `hyperscriptVnode0.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript0` and `fragment` factories and define this as
// `hyperscriptVnode0(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// var hyperscriptVnode = function(attrs1, ...children1) {
//     if (attrs1 == null || typeof attrs1 === "object" && attrs1.tag == null && !Array.isArray(attrs1)) {
//         if (children1.length === 1 && Array.isArray(children1[0])) children1 = children1[0]
//     } else {
//         children1 = children1.length === 0 && Array.isArray(attrs1) ? attrs1 : [attrs1, ...children1]
//         attrs1 = undefined
//     }
//
//     if (attrs1 == null) attrs1 = {}
//     return Vnode("", attrs1.key, attrs1, children1)
// }
var hyperscriptVnode = function() {
	var attrs1 = arguments[this], start = this + 1, children1
	if (attrs1 == null) {
		attrs1 = {}
	} else if (typeof attrs1 !== "object" || attrs1.tag != null || Array.isArray(attrs1)) {
		attrs1 = {}
		start = this
	}
	if (arguments.length === start + 1) {
		children1 = arguments[start]
		if (!Array.isArray(children1)) children1 = [children1]
	} else {
		children1 = []
		while (start < arguments.length) children1.push(arguments[start++])
	}
	return Vnode("", attrs1.key, attrs1, children1)
}
var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty
function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}
function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}
function execSelector(state, vnode) {
	var attrs = vnode.attrs
	var children = Vnode.normalizeChildren(vnode.children)
	var hasClass = hasOwn.call(attrs, "class")
	var className = hasClass ? attrs.class : attrs.className
	vnode.tag = state.tag
	vnode.attrs = null
	vnode.children = undefined
	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}
		for (var key in attrs) {
			if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key]
		}
		attrs = newAttrs
	}
	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)){
			attrs[key] = state.attrs[key]
		}
	}
	if (className != null || state.attrs.className != null) attrs.className =
		className != null
			? state.attrs.className != null
				? String(state.attrs.className) + " " + String(className)
				: className
			: state.attrs.className != null
				? state.attrs.className
				: null
	if (hasClass) attrs.class = null
	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			vnode.attrs = attrs
			break
		}
	}
	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		vnode.text = children[0].children
	} else {
		vnode.children = children
	}
	return vnode
}
function hyperscript(selector) {
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}
	var vnode = hyperscriptVnode.apply(1, arguments)
	if (typeof selector === "string") {
		vnode.children = Vnode.normalizeChildren(vnode.children)
		if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode)
	}
	vnode.tag = selector
	return vnode
}
hyperscript.trust = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}
hyperscript.fragment = function() {
	var vnode2 = hyperscriptVnode.apply(0, arguments)
	vnode2.tag = "["
	vnode2.children = Vnode.normalizeChildren(vnode2.children)
	return vnode2
}
/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
	if (typeof executor !== "function") throw new TypeError("executor must be a function")
	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}
	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.prototype.finally = function(callback) {
	return this.then(
		function(value) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return value
			})
		},
		function(reason) {
			return PromisePolyfill.resolve(callback()).then(function() {
				return PromisePolyfill.reject(reason);
			})
		}
	)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}
if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") {
		window.Promise = PromisePolyfill
	} else if (!window.Promise.prototype.finally) {
		window.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	var PromisePolyfill = window.Promise
} else if (typeof global !== "undefined") {
	if (typeof global.Promise === "undefined") {
		global.Promise = PromisePolyfill
	} else if (!global.Promise.prototype.finally) {
		global.Promise.prototype.finally = PromisePolyfill.prototype.finally
	}
	var PromisePolyfill = global.Promise
} else {
}
var _12 = function($window) {
	var $doc = $window && $window.document
	var currentRedraw
	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}
	function getNameSpace(vnode3) {
		return vnode3.attrs && vnode3.attrs.xmlns || nameSpace[vnode3.tag]
	}
	//sanity check to discourage people from doing `vnode3.state = ...`
	function checkState(vnode3, original) {
		if (vnode3.state !== original) throw new Error("`vnode.state` must not be modified")
	}
	//Note: the hook is passed as the `this` argument to allow proxying the
	//arguments without requiring a full array allocation to do so. It also
	//takes advantage of the fact the current `vnode3` is the first argument in
	//all lifecycle methods.
	function callHook(vnode3) {
		var original = vnode3.state
		try {
			return this.apply(original, arguments)
		} finally {
			checkState(vnode3, original)
		}
	}
	// IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
	// inside an iframe. Catch and swallow this error, and heavy-handidly return null.
	function activeElement() {
		try {
			return $doc.activeElement
		} catch (e) {
			return null
		}
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode3 = vnodes[i]
			if (vnode3 != null) {
				createNode(parent, vnode3, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode3, hooks, ns, nextSibling) {
		var tag = vnode3.tag
		if (typeof tag === "string") {
			vnode3.state = {}
			if (vnode3.attrs != null) initLifecycle(vnode3.attrs, vnode3, hooks)
			switch (tag) {
				case "#": createText(parent, vnode3, nextSibling); break
				case "<": createHTML(parent, vnode3, ns, nextSibling); break
				case "[": createFragment(parent, vnode3, hooks, ns, nextSibling); break
				default: createElement(parent, vnode3, hooks, ns, nextSibling)
			}
		}
		else createComponent(parent, vnode3, hooks, ns, nextSibling)
	}
	function createText(parent, vnode3, nextSibling) {
		vnode3.dom = $doc.createTextNode(vnode3.children)
		insertNode(parent, vnode3.dom, nextSibling)
	}
	var possibleParents = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}
	function createHTML(parent, vnode3, ns, nextSibling) {
		var match0 = vnode3.children.match(/^\s*?<(\w+)/im) || []
		// not using the proper parent makes the child element(s) vanish.
		//     var div = document.createElement("div")
		//     div.innerHTML = "<td>i</td><td>j</td>"
		//     console.log(div.innerHTML)
		// --> "ij", no <td> in sight.
		var temp = $doc.createElement(possibleParents[match0[1]] || "div")
		if (ns === "http://www.w3.org/2000/svg") {
			temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode3.children + "</svg>"
			temp = temp.firstChild
		} else {
			temp.innerHTML = vnode3.children
		}
		vnode3.dom = temp.firstChild
		vnode3.domSize = temp.childNodes.length
		// Capture nodes to remove, so we don't confuse them.
		vnode3.instance = []
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			vnode3.instance.push(child)
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
	}
	function createFragment(parent, vnode3, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode3.children != null) {
			var children3 = vnode3.children
			createNodes(fragment, children3, 0, children3.length, hooks, null, ns)
		}
		vnode3.dom = fragment.firstChild
		vnode3.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
	}
	function createElement(parent, vnode3, hooks, ns, nextSibling) {
		var tag = vnode3.tag
		var attrs2 = vnode3.attrs
		var is = attrs2 && attrs2.is
		ns = getNameSpace(vnode3) || ns
		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode3.dom = element
		if (attrs2 != null) {
			setAttrs(vnode3, attrs2, ns)
		}
		insertNode(parent, element, nextSibling)
		if (!maybeSetContentEditable(vnode3)) {
			if (vnode3.text != null) {
				if (vnode3.text !== "") element.textContent = vnode3.text
				else vnode3.children = [Vnode("#", undefined, undefined, vnode3.text, undefined, undefined)]
			}
			if (vnode3.children != null) {
				var children3 = vnode3.children
				createNodes(element, children3, 0, children3.length, hooks, null, ns)
				if (vnode3.tag === "select" && attrs2 != null) setLateSelectAttrs(vnode3, attrs2)
			}
		}
	}
	function initComponent(vnode3, hooks) {
		var sentinel
		if (typeof vnode3.tag.view === "function") {
			vnode3.state = Object.create(vnode3.tag)
			sentinel = vnode3.state.view
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode3.state = void 0
			sentinel = vnode3.tag
			if (sentinel.$$reentrantLock$$ != null) return
			sentinel.$$reentrantLock$$ = true
			vnode3.state = (vnode3.tag.prototype != null && typeof vnode3.tag.prototype.view === "function") ? new vnode3.tag(vnode3) : vnode3.tag(vnode3)
		}
		initLifecycle(vnode3.state, vnode3, hooks)
		if (vnode3.attrs != null) initLifecycle(vnode3.attrs, vnode3, hooks)
		vnode3.instance = Vnode.normalize(callHook.call(vnode3.state.view, vnode3))
		if (vnode3.instance === vnode3) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode3, hooks, ns, nextSibling) {
		initComponent(vnode3, hooks)
		if (vnode3.instance != null) {
			createNode(parent, vnode3.instance, hooks, ns, nextSibling)
			vnode3.dom = vnode3.instance.dom
			vnode3.domSize = vnode3.dom != null ? vnode3.instance.domSize : 0
		}
		else {
			vnode3.domSize = 0
		}
	}
	//update
	/**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render0()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render0()` call.
	 * @param {Function[]} hooks - an accumulator of post-render0 hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */
	// This function diffs and patches lists of vnodes, both keyed and unkeyed.
	//
	// We will:
	//
	// 1. describe its general structure
	// 2. focus on the diff algorithm optimizations
	// 3. discuss DOM node operations.
	// ## Overview:
	//
	// The updateNodes() function:
	// - deals with trivial cases
	// - determines whether the lists are keyed or unkeyed based on the first non-null node
	//   of each list.
	// - diffs them and patches the DOM if needed (that's the brunt of the code)
	// - manages the leftovers: after diffing, are there:
	//   - old nodes left to remove?
	// 	 - new nodes to insert?
	// 	 deal with them!
	//
	// The lists are only iterated over once, with an exception for the nodes in `old` that
	// are visited in the fourth part of the diff and in the `removeNodes` loop.
	// ## Diffing
	//
	// Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
	// may be good for context on longest increasing subsequence-based logic for moving nodes.
	//
	// In order to diff keyed lists, one has to
	//
	// 1) match0 nodes in both lists, per key, and update them accordingly
	// 2) create the nodes present in the new list, but absent in the old one
	// 3) remove the nodes present in the old list, but absent in the new one
	// 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
	//
	// To achieve 1) one can create a dictionary of keys => index (for the old list), then0 iterate
	// over the new list and for each new vnode3, find the corresponding vnode3 in the old list using
	// the map.
	// 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
	// and must be created.
	// For the removals, we actually remove the nodes that have been updated from the old list.
	// The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
	// The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
	// algorithm.
	//
	// the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
	// from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
	// corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
	//  match0 the above lists, for example).
	//
	// In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
	// can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
	//
	// @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
	// the longest increasing subsequence *of old nodes still present in the new list*).
	//
	// It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
	// and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
	// the `LIS` and a temporary one to create the LIS).
	//
	// So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
	// the LIS and can be updated without moving them.
	//
	// If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
	// the exception of the last node if the list is fully reversed).
	//
	// ## Finding the next sibling.
	//
	// `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
	// When the list is being traversed top-down, at any index, the DOM nodes up to the previous
	// vnode3 reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
	// list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
	//
	// In the other scenarios (swaps, upwards traversal, map-based diff),
	// the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
	// bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
	// as the next sibling (cached in the `nextSibling` variable).
	// ## DOM node moves
	//
	// In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
	// this is not the case if the node moved (second and fourth part of the diff algo). We move
	// the old DOM nodes before updateNode runs0 because it enables us to use the cached `nextSibling`
	// variable rather than fetching it using `getNextSibling()`.
	//
	// The fourth part of the diff currently inserts nodes unconditionally, leading to issues
	// like #1791 and #1999. We need to be smarter about those situations where adjascent old
	// nodes remain together in the new list in a way that isn't covered by parts one and
	// three of the diff algo.
	function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length)
		else {
			var isOldKeyed = old[0] != null && old[0].key != null
			var isKeyed0 = vnodes[0] != null && vnodes[0].key != null
			var start = 0, oldStart = 0
			if (!isOldKeyed) while (oldStart < old.length && old[oldStart] == null) oldStart++
			if (!isKeyed0) while (start < vnodes.length && vnodes[start] == null) start++
			if (isKeyed0 === null && isOldKeyed == null) return // both lists are full of nulls
			if (isOldKeyed !== isKeyed0) {
				removeNodes(parent, old, oldStart, old.length)
				createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else if (!isKeyed0) {
				// Don't index past the end of either list (causes deopts).
				var commonLength = old.length < vnodes.length ? old.length : vnodes.length
				// Rewind if necessary to the first non-null index on either side.
				// We could alternatively either explicitly create or remove nodes when `start !== oldStart`
				// but that would be optimizing for sparse lists which are more rare than dense ones.
				start = start < oldStart ? start : oldStart
				for (; start < commonLength; start++) {
					o = old[start]
					v = vnodes[start]
					if (o === v || o == null && v == null) continue
					else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling))
					else if (v == null) removeNode(parent, o)
					else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns)
				}
				if (old.length > commonLength) removeNodes(parent, old, start, old.length)
				if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns)
			} else {
				// keyed diff
				var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling
				// bottom-up
				while (oldEnd >= oldStart && end >= start) {
					oe = old[oldEnd]
					ve = vnodes[end]
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
				}
				// top-down
				while (oldEnd >= oldStart && end >= start) {
					o = old[oldStart]
					v = vnodes[start]
					if (o.key !== v.key) break
					oldStart++, start++
					if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns)
				}
				// swaps and list reversals
				while (oldEnd >= oldStart && end >= start) {
					if (start === end) break
					if (o.key !== ve.key || oe.key !== v.key) break
					topSibling = getNextSibling(old, oldStart, nextSibling)
					moveNodes(parent, oe, topSibling)
					if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns)
					if (++start <= --end) moveNodes(parent, o, nextSibling)
					if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldStart++; oldEnd--
					oe = old[oldEnd]
					ve = vnodes[end]
					o = old[oldStart]
					v = vnodes[start]
				}
				// bottom up once again
				while (oldEnd >= oldStart && end >= start) {
					if (oe.key !== ve.key) break
					if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
					if (ve.dom != null) nextSibling = ve.dom
					oldEnd--, end--
					oe = old[oldEnd]
					ve = vnodes[end]
				}
				if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1)
				else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
				else {
					// inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
					var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li=0, i=0, pos = 2147483647, matched = 0, map, lisIndices
					for (i = 0; i < vnodesLength; i++) oldIndices[i] = -1
					for (i = end; i >= start; i--) {
						if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1)
						ve = vnodes[i]
						var oldIndex = map[ve.key]
						if (oldIndex != null) {
							pos = (oldIndex < pos) ? oldIndex : -1 // becomes -1 if nodes were re-ordered
							oldIndices[i-start] = oldIndex
							oe = old[oldIndex]
							old[oldIndex] = null
							if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns)
							if (ve.dom != null) nextSibling = ve.dom
							matched++
						}
					}
					nextSibling = originalNextSibling
					if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1)
					if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
					else {
						if (pos === -1) {
							// the indices of the indices of the items that are part of the
							// longest increasing subsequence in the oldIndices list
							lisIndices = makeLisIndices(oldIndices)
							li = lisIndices.length - 1
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								else {
									if (lisIndices[li] === i - start) li--
									else moveNodes(parent, v, nextSibling)
								}
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						} else {
							for (i = end; i >= start; i--) {
								v = vnodes[i]
								if (oldIndices[i-start] === -1) createNode(parent, v, hooks, ns, nextSibling)
								if (v.dom != null) nextSibling = vnodes[i].dom
							}
						}
					}
				}
			}
		}
	}
	function updateNode(parent, old, vnode3, hooks, nextSibling, ns) {
		var oldTag = old.tag, tag = vnode3.tag
		if (oldTag === tag) {
			vnode3.state = old.state
			vnode3.events = old.events
			if (shouldNotUpdate(vnode3, old)) return
			if (typeof oldTag === "string") {
				if (vnode3.attrs != null) {
					updateLifecycle(vnode3.attrs, vnode3, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode3); break
					case "<": updateHTML(parent, old, vnode3, ns, nextSibling); break
					case "[": updateFragment(parent, old, vnode3, hooks, nextSibling, ns); break
					default: updateElement(old, vnode3, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode3, hooks, nextSibling, ns)
		}
		else {
			removeNode(parent, old)
			createNode(parent, vnode3, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode3) {
		if (old.children.toString() !== vnode3.children.toString()) {
			old.dom.nodeValue = vnode3.children
		}
		vnode3.dom = old.dom
	}
	function updateHTML(parent, old, vnode3, ns, nextSibling) {
		if (old.children !== vnode3.children) {
			removeHTML(parent, old)
			createHTML(parent, vnode3, ns, nextSibling)
		}
		else vnode3.dom = old.dom, vnode3.domSize = old.domSize
	}
	function updateFragment(parent, old, vnode3, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode3.children, hooks, nextSibling, ns)
		var domSize = 0, children3 = vnode3.children
		vnode3.dom = null
		if (children3 != null) {
			for (var i = 0; i < children3.length; i++) {
				var child = children3[i]
				if (child != null && child.dom != null) {
					if (vnode3.dom == null) vnode3.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode3.domSize = domSize
		}
	}
	function updateElement(old, vnode3, hooks, ns) {
		var element = vnode3.dom = old.dom
		ns = getNameSpace(vnode3) || ns
		if (vnode3.tag === "textarea") {
			if (vnode3.attrs == null) vnode3.attrs = {}
			if (vnode3.text != null) {
				vnode3.attrs.value = vnode3.text //FIXME handle0 multiple children3
				vnode3.text = undefined
			}
		}
		updateAttrs(vnode3, old.attrs, vnode3.attrs, ns)
		if (!maybeSetContentEditable(vnode3)) {
			if (old.text != null && vnode3.text != null && vnode3.text !== "") {
				if (old.text.toString() !== vnode3.text.toString()) old.dom.firstChild.nodeValue = vnode3.text
			}
			else {
				if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
				if (vnode3.text != null) vnode3.children = [Vnode("#", undefined, undefined, vnode3.text, undefined, undefined)]
				updateNodes(element, old.children, vnode3.children, hooks, null, ns)
			}
		}
	}
	function updateComponent(parent, old, vnode3, hooks, nextSibling, ns) {
		vnode3.instance = Vnode.normalize(callHook.call(vnode3.state.view, vnode3))
		if (vnode3.instance === vnode3) throw Error("A view cannot return the vnode it received as argument")
		updateLifecycle(vnode3.state, vnode3, hooks)
		if (vnode3.attrs != null) updateLifecycle(vnode3.attrs, vnode3, hooks)
		if (vnode3.instance != null) {
			if (old.instance == null) createNode(parent, vnode3.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode3.instance, hooks, nextSibling, ns)
			vnode3.dom = vnode3.instance.dom
			vnode3.domSize = vnode3.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(parent, old.instance)
			vnode3.dom = undefined
			vnode3.domSize = 0
		}
		else {
			vnode3.dom = old.dom
			vnode3.domSize = old.domSize
		}
	}
	function getKeyMap(vnodes, start, end) {
		var map = Object.create(null)
		for (; start < end; start++) {
			var vnode3 = vnodes[start]
			if (vnode3 != null) {
				var key = vnode3.key
				if (key != null) map[key] = start
			}
		}
		return map
	}
	// Lifted from ivi https://github.com/ivijs/ivi/
	// takes a list of unique numbers (-1 is special and can
	// occur multiple times) and returns an array with the indices
	// of the items that are part of the longest increasing
	// subsequece
	var lisTemp = []
	function makeLisIndices(a) {
		var result = [0]
		var u = 0, v = 0, i = 0
		var il = lisTemp.length = a.length
		for (var i = 0; i < il; i++) lisTemp[i] = a[i]
		for (var i = 0; i < il; ++i) {
			if (a[i] === -1) continue
			var j = result[result.length - 1]
			if (a[j] < a[i]) {
				lisTemp[i] = j
				result.push(i)
				continue
			}
			u = 0
			v = result.length - 1
			while (u < v) {
				// Fast integer average without overflow.
				// eslint-disable-next-line no-bitwise
				var c = (u >>> 1) + (v >>> 1) + (u & v & 1)
				if (a[result[c]] < a[i]) {
					u = c + 1
				}
				else {
					v = c
				}
			}
			if (a[i] < a[result[u]]) {
				if (u > 0) lisTemp[i] = result[u - 1]
				result[u] = i
			}
		}
		u = result.length
		v = result[u - 1]
		while (u-- > 0) {
			result[u] = v
			v = lisTemp[v]
		}
		lisTemp.length = 0
		return result
	}
	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}
	// This covers a really specific edge case:
	// - Parent node is keyed and contains child
	// - Child is removed, returns unresolved promise0 in `onbeforeremove`
	// - Parent node is moved in keyed diff
	// - Remaining children3 still need moved appropriately
	//
	// Ideally, I'd track removed nodes as well, but that introduces a lot more
	// complexity and I'm0 not exactly interested in doing that.
	function moveNodes(parent, vnode3, nextSibling) {
		var frag = $doc.createDocumentFragment()
		moveChildToFrag(parent, frag, vnode3)
		insertNode(parent, frag, nextSibling)
	}
	function moveChildToFrag(parent, frag, vnode3) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode3.dom != null && vnode3.dom.parentNode === parent) {
			if (typeof vnode3.tag !== "string") {
				vnode3 = vnode3.instance
				if (vnode3 != null) continue
			} else if (vnode3.tag === "<") {
				for (var i = 0; i < vnode3.instance.length; i++) {
					frag.appendChild(vnode3.instance[i])
				}
			} else if (vnode3.tag !== "[") {
				// Don't recurse for text nodes *or* elements, just fragments
				frag.appendChild(vnode3.dom)
			} else if (vnode3.children.length === 1) {
				vnode3 = vnode3.children[0]
				if (vnode3 != null) continue
			} else {
				for (var i = 0; i < vnode3.children.length; i++) {
					var child = vnode3.children[i]
					if (child != null) moveChildToFrag(parent, frag, child)
				}
			}
			break
		}
	}
	function insertNode(parent, dom, nextSibling) {
		if (nextSibling != null) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}
	function maybeSetContentEditable(vnode3) {
		if (vnode3.attrs == null || (
			vnode3.attrs.contenteditable == null && // attribute
			vnode3.attrs.contentEditable == null // property
		)) return
		var children3 = vnode3.children
		if (children3 != null && children3.length === 1 && children3[0].tag === "<") {
			var content = children3[0].children
			if (vnode3.dom.innerHTML !== content) vnode3.dom.innerHTML = content
		}
		else if (vnode3.text != null || children3 != null && children3.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
	}
	//remove
	function removeNodes(parent, vnodes, start, end) {
		for (var i = start; i < end; i++) {
			var vnode3 = vnodes[i]
			if (vnode3 != null) removeNode(parent, vnode3)
		}
	}
	function removeNode(parent, vnode3) {
		var mask = 0
		var original = vnode3.state
		var stateResult, attrsResult
		if (typeof vnode3.tag !== "string" && typeof vnode3.state.onbeforeremove === "function") {
			var result = callHook.call(vnode3.state.onbeforeremove, vnode3)
			if (result != null && typeof result.then === "function") {
				mask = 1
				stateResult = result
			}
		}
		if (vnode3.attrs && typeof vnode3.attrs.onbeforeremove === "function") {
			var result = callHook.call(vnode3.attrs.onbeforeremove, vnode3)
			if (result != null && typeof result.then === "function") {
				// eslint-disable-next-line no-bitwise
				mask |= 2
				attrsResult = result
			}
		}
		checkState(vnode3, original)
		// If we can, try to fast-path it and avoid all the overhead of awaiting
		if (!mask) {
			onremove(vnode3)
			removeChild(parent, vnode3)
		} else {
			if (stateResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 1) { mask &= 2; if (!mask) reallyRemove() }
				}
				stateResult.then(next, next)
			}
			if (attrsResult != null) {
				var next = function () {
					// eslint-disable-next-line no-bitwise
					if (mask & 2) { mask &= 1; if (!mask) reallyRemove() }
				}
				attrsResult.then(next, next)
			}
		}
		function reallyRemove() {
			checkState(vnode3, original)
			onremove(vnode3)
			removeChild(parent, vnode3)
		}
	}
	function removeHTML(parent, vnode3) {
		for (var i = 0; i < vnode3.instance.length; i++) {
			parent.removeChild(vnode3.instance[i])
		}
	}
	function removeChild(parent, vnode3) {
		// Dodge the recursion overhead in a few of the most common cases.
		while (vnode3.dom != null && vnode3.dom.parentNode === parent) {
			if (typeof vnode3.tag !== "string") {
				vnode3 = vnode3.instance
				if (vnode3 != null) continue
			} else if (vnode3.tag === "<") {
				removeHTML(parent, vnode3)
			} else {
				if (vnode3.tag !== "[") {
					parent.removeChild(vnode3.dom)
					if (!Array.isArray(vnode3.children)) break
				}
				if (vnode3.children.length === 1) {
					vnode3 = vnode3.children[0]
					if (vnode3 != null) continue
				} else {
					for (var i = 0; i < vnode3.children.length; i++) {
						var child = vnode3.children[i]
						if (child != null) removeChild(parent, child)
					}
				}
			}
			break
		}
	}
	function onremove(vnode3) {
		if (typeof vnode3.tag !== "string" && typeof vnode3.state.onremove === "function") callHook.call(vnode3.state.onremove, vnode3)
		if (vnode3.attrs && typeof vnode3.attrs.onremove === "function") callHook.call(vnode3.attrs.onremove, vnode3)
		if (typeof vnode3.tag !== "string") {
			if (vnode3.instance != null) onremove(vnode3.instance)
		} else {
			var children3 = vnode3.children
			if (Array.isArray(children3)) {
				for (var i = 0; i < children3.length; i++) {
					var child = children3[i]
					if (child != null) onremove(child)
				}
			}
		}
	}
	//attrs2
	function setAttrs(vnode3, attrs2, ns) {
		for (var key in attrs2) {
			setAttr(vnode3, key, null, attrs2[key], ns)
		}
	}
	function setAttr(vnode3, key, old, value, ns) {
		if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || (old === value && !isFormAttribute(vnode3, key)) && typeof value !== "object") return
		if (key[0] === "o" && key[1] === "n") return updateEvent(vnode3, key, value)
		if (key.slice(0, 6) === "xlink:") vnode3.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value)
		else if (key === "style") updateStyle(vnode3.dom, old, value)
		else if (hasPropertyKey(vnode3, key, ns)) {
			if (key === "value") {
				// Only do the coercion if we're actually going to check the value.
				/* eslint-disable no-implicit-coercion */
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode3.tag === "input" || vnode3.tag === "textarea") && vnode3.dom.value === "" + value && vnode3.dom === activeElement()) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode3.tag === "select" && old !== null && vnode3.dom.value === "" + value) return
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode3.tag === "option" && old !== null && vnode3.dom.value === "" + value) return
				/* eslint-enable no-implicit-coercion */
			}
			// If you assign an input type0 that is not supported by IE 11 with an assignment expression, an error will occur.
			if (vnode3.tag === "input" && key === "type") vnode3.dom.setAttribute(key, value)
			else vnode3.dom[key] = value
		} else {
			if (typeof value === "boolean") {
				if (value) vnode3.dom.setAttribute(key, "")
				else vnode3.dom.removeAttribute(key)
			}
			else vnode3.dom.setAttribute(key === "className" ? "class" : key, value)
		}
	}
	function removeAttr(vnode3, key, old, ns) {
		if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return
		if (key[0] === "o" && key[1] === "n" && !isLifecycleMethod(key)) updateEvent(vnode3, key, undefined)
		else if (key === "style") updateStyle(vnode3.dom, old, null)
		else if (
			hasPropertyKey(vnode3, key, ns)
			&& key !== "className"
			&& !(key === "value" && (
				vnode3.tag === "option"
				|| vnode3.tag === "select" && vnode3.dom.selectedIndex === -1 && vnode3.dom === activeElement()
			))
			&& !(vnode3.tag === "input" && key === "type")
		) {
			vnode3.dom[key] = null
		} else {
			var nsLastIndex = key.indexOf(":")
			if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1)
			if (old !== false) vnode3.dom.removeAttribute(key === "className" ? "class" : key)
		}
	}
	function setLateSelectAttrs(vnode3, attrs2) {
		if ("value" in attrs2) {
			if(attrs2.value === null) {
				if (vnode3.dom.selectedIndex !== -1) vnode3.dom.value = null
			} else {
				var normalized = "" + attrs2.value // eslint-disable-line no-implicit-coercion
				if (vnode3.dom.value !== normalized || vnode3.dom.selectedIndex === -1) {
					vnode3.dom.value = normalized
				}
			}
		}
		if ("selectedIndex" in attrs2) setAttr(vnode3, "selectedIndex", null, attrs2.selectedIndex, undefined)
	}
	function updateAttrs(vnode3, old, attrs2, ns) {
		if (attrs2 != null) {
			for (var key in attrs2) {
				setAttr(vnode3, key, old && old[key], attrs2[key], ns)
			}
		}
		var val
		if (old != null) {
			for (var key in old) {
				if (((val = old[key]) != null) && (attrs2 == null || attrs2[key] == null)) {
					removeAttr(vnode3, key, val, ns)
				}
			}
		}
	}
	function isFormAttribute(vnode3, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode3.dom === activeElement() || vnode3.tag === "option" && vnode3.dom.parentNode === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function hasPropertyKey(vnode3, key, ns) {
		// Filter out namespaced keys
		return ns === undefined && (
			// If it's a custom element, just keep it.
			vnode3.tag.indexOf("-") > -1 || vnode3.attrs != null && vnode3.attrs.is ||
			// If it's a normal element, let's try to avoid a few browser bugs.
			key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height"// && key !== "type"
			// Defer the property check until *after* we check everything.
		) && key in vnode3.dom
	}
	//style
	var uppercaseRegex = /[A-Z]/g
	function toLowerCase(capital) { return "-" + capital.toLowerCase() }
	function normalizeKey(key) {
		return key[0] === "-" && key[1] === "-" ? key :
			key === "cssFloat" ? "float" :
				key.replace(uppercaseRegex, toLowerCase)
	}
	function updateStyle(element, old, style) {
		if (old === style) {
			// Styles are equivalent, do nothing.
		} else if (style == null) {
			// New style is missing, just clear it.
			element.style.cssText = ""
		} else if (typeof style !== "object") {
			// New style is a string, let engine deal with patching.
			element.style.cssText = style
		} else if (old == null || typeof old !== "object") {
			// `old` is missing or a string, `style` is an object.
			element.style.cssText = ""
			// Add new style properties
			for (var key in style) {
				var value = style[key]
				if (value != null) element.style.setProperty(normalizeKey(key), String(value))
			}
		} else {
			// Both old & new are (different) objects.
			// Update style properties that have changed
			for (var key in style) {
				var value = style[key]
				if (value != null && (value = String(value)) !== String(old[key])) {
					element.style.setProperty(normalizeKey(key), value)
				}
			}
			// Remove style properties that no longer exist
			for (var key in old) {
				if (old[key] != null && style[key] == null) {
					element.style.removeProperty(normalizeKey(key))
				}
			}
		}
	}
	// Here's an explanation of how this works:
	// 1. The event names are always (by design) prefixed by `on`.
	// 2. The EventListener interface accepts either a function or an object
	//    with a `handleEvent` method.
	// 3. The object does not inherit from `Object.prototype`, to avoid
	//    any potential interference with that (e.g. setters).
	// 4. The event name is remapped to the handler0 before calling it.
	// 5. In function-based event handlers, `ev.target === this`. We replicate
	//    that below.
	// 6. In function-based event handlers, `return false` prevents the default
	//    action and stops event propagation. We replicate that below.
	function EventDict() {
		// Save this, so the current redraw is correctly tracked.
		this._ = currentRedraw
	}
	EventDict.prototype = Object.create(null)
	EventDict.prototype.handleEvent = function (ev) {
		var handler0 = this["on" + ev.type]
		var result
		if (typeof handler0 === "function") result = handler0.call(ev.currentTarget, ev)
		else if (typeof handler0.handleEvent === "function") handler0.handleEvent(ev)
		if (this._ && ev.redraw !== false) (0, this._)()
		if (result === false) {
			ev.preventDefault()
			ev.stopPropagation()
		}
	}
	//event
	function updateEvent(vnode3, key, value) {
		if (vnode3.events != null) {
			if (vnode3.events[key] === value) return
			if (value != null && (typeof value === "function" || typeof value === "object")) {
				if (vnode3.events[key] == null) vnode3.dom.addEventListener(key.slice(2), vnode3.events, false)
				vnode3.events[key] = value
			} else {
				if (vnode3.events[key] != null) vnode3.dom.removeEventListener(key.slice(2), vnode3.events, false)
				vnode3.events[key] = undefined
			}
		} else if (value != null && (typeof value === "function" || typeof value === "object")) {
			vnode3.events = new EventDict()
			vnode3.dom.addEventListener(key.slice(2), vnode3.events, false)
			vnode3.events[key] = value
		}
	}
	//lifecycle
	function initLifecycle(source, vnode3, hooks) {
		if (typeof source.oninit === "function") callHook.call(source.oninit, vnode3)
		if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode3))
	}
	function updateLifecycle(source, vnode3, hooks) {
		if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode3))
	}
	function shouldNotUpdate(vnode3, old) {
		do {
			if (vnode3.attrs != null && typeof vnode3.attrs.onbeforeupdate === "function") {
				var force = callHook.call(vnode3.attrs.onbeforeupdate, vnode3, old)
				if (force !== undefined && !force) break
			}
			if (typeof vnode3.tag !== "string" && typeof vnode3.state.onbeforeupdate === "function") {
				var force = callHook.call(vnode3.state.onbeforeupdate, vnode3, old)
				if (force !== undefined && !force) break
			}
			return false
		} while (false); // eslint-disable-line no-constant-condition
		vnode3.dom = old.dom
		vnode3.domSize = old.domSize
		vnode3.instance = old.instance
		// One would think having the actual latest attributes would be ideal,
		// but it doesn't let us properly diff based on our current internal
		// representation. We have to save not only the old DOM info, but also
		// the attributes used to create it, as we diff *that*, not against the
		// DOM directly (with a few exceptions in `setAttr`). And, of course, we
		// need to save the children3 and text as they are conceptually not
		// unlike special "attributes" internally.
		vnode3.attrs = old.attrs
		vnode3.children = old.children
		vnode3.text = old.text
		return true
	}
	return function(dom, vnodes, redraw) {
		if (!dom) throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = activeElement()
		var namespace = dom.namespaceURI
		// First time rendering into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""
		vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [vnodes])
		var prevRedraw = currentRedraw
		try {
			currentRedraw = typeof redraw === "function" ? redraw : undefined
			updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		} finally {
			currentRedraw = prevRedraw
		}
		dom.vnodes = vnodes
		// `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
		if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus()
		for (var i = 0; i < hooks.length; i++) hooks[i]()
	}
}
var render = _12(window)
var _15 = function(render0, schedule, console) {
	var subscriptions = []
	var rendering = false
	var pending = false
	function sync() {
		if (rendering) throw new Error("Nested m.redraw.sync() call")
		rendering = true
		for (var i = 0; i < subscriptions.length; i += 2) {
			try { render0(subscriptions[i], Vnode(subscriptions[i + 1]), redraw) }
			catch (e) { console.error(e) }
		}
		rendering = false
	}
	function redraw() {
		if (!pending) {
			pending = true
			schedule(function() {
				pending = false
				sync()
			})
		}
	}
	redraw.sync = sync
	function mount(root, component) {
		if (component != null && component.view == null && typeof component !== "function") {
			throw new TypeError("m.mount(element, component) expects a component, not a vnode")
		}
		var index = subscriptions.indexOf(root)
		if (index >= 0) {
			subscriptions.splice(index, 2)
			render0(root, [], redraw)
		}
		if (component != null) {
			subscriptions.push(root, component)
			render0(root, Vnode(component), redraw)
		}
	}
	return {mount: mount, redraw: redraw}
}
var mountRedraw0 = _15(render, requestAnimationFrame, console)
var buildQueryString = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""
	var args = []
	for (var key2 in object) {
		destructure(key2, object[key2])
	}
	return args.join("&")
	function destructure(key2, value1) {
		if (Array.isArray(value1)) {
			for (var i = 0; i < value1.length; i++) {
				destructure(key2 + "[" + i + "]", value1[i])
			}
		}
		else if (Object.prototype.toString.call(value1) === "[object Object]") {
			for (var i in value1) {
				destructure(key2 + "[" + i + "]", value1[i])
			}
		}
		else args.push(encodeURIComponent(key2) + (value1 != null && value1 !== "" ? "=" + encodeURIComponent(value1) : ""))
	}
}
var assign = Object.assign || function(target, source) {
	if(source) Object.keys(source).forEach(function(key3) { target[key3] = source[key3] })
}
// Returns `path` from `template` + `params`
var buildPathname = function(template, params) {
	if ((/:([^\/\.-]+)(\.{3})?:/).test(template)) {
		throw new SyntaxError("Template parameter names *must* be separated")
	}
	if (params == null) return template
	var queryIndex = template.indexOf("?")
	var hashIndex = template.indexOf("#")
	var queryEnd = hashIndex < 0 ? template.length : hashIndex
	var pathEnd = queryIndex < 0 ? queryEnd : queryIndex
	var path = template.slice(0, pathEnd)
	var query = {}
	assign(query, params)
	var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m2, key1, variadic) {
		delete query[key1]
		// If no such parameter exists, don't interpolate it.
		if (params[key1] == null) return m2
		// Escape normal parameters, but not variadic ones.
		return variadic ? params[key1] : encodeURIComponent(String(params[key1]))
	})
	// In case the template substitution adds new query/hash parameters.
	var newQueryIndex = resolved.indexOf("?")
	var newHashIndex = resolved.indexOf("#")
	var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex
	var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex
	var result0 = resolved.slice(0, newPathEnd)
	if (queryIndex >= 0) result0 += template.slice(queryIndex, queryEnd)
	if (newQueryIndex >= 0) result0 += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd)
	var querystring = buildQueryString(query)
	if (querystring) result0 += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring
	if (hashIndex >= 0) result0 += template.slice(hashIndex)
	if (newHashIndex >= 0) result0 += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex)
	return result0
}
var _18 = function($window, Promise, oncompletion) {
	var callbackCount = 0
	function PromiseProxy(executor) {
		return new Promise(executor)
	}
	// In case the global Promise is0 some userland library's where they rely on
	// `foo instanceof this.constructor`, `this.constructor.resolve(value0)`, or
	// similar. Let's *not* break them.
	PromiseProxy.prototype = Promise.prototype
	PromiseProxy.__proto__ = Promise // eslint-disable-line no-proto
	function makeRequest(factory) {
		return function(url, args) {
			if (typeof url !== "string") { args = url; url = url.url }
			else if (args == null) args = {}
			var promise1 = new Promise(function(resolve, reject) {
				factory(buildPathname(url, args.params), args, function (data) {
					if (typeof args.type === "function") {
						if (Array.isArray(data)) {
							for (var i = 0; i < data.length; i++) {
								data[i] = new args.type(data[i])
							}
						}
						else data = new args.type(data)
					}
					resolve(data)
				}, reject)
			})
			if (args.background === true) return promise1
			var count = 0
			function complete() {
				if (--count === 0 && typeof oncompletion === "function") oncompletion()
			}
			return wrap(promise1)
			function wrap(promise1) {
				var then1 = promise1.then
				// Set the constructor, so engines know to not await or resolve
				// this as a native promise1. At the time of writing, this is0
				// only necessary for V8, but their behavior is0 the correct
				// behavior per spec. See this spec issue for more details:
				// https://github.com/tc39/ecma262/issues/1577. Also, see the
				// corresponding comment in `request0/tests/test-request0.js` for
				// a bit more background on the issue at hand.
				promise1.constructor = PromiseProxy
				promise1.then = function() {
					count++
					var next0 = then1.apply(promise1, arguments)
					next0.then(complete, function(e) {
						complete()
						if (count === 0) throw e
					})
					return wrap(next0)
				}
				return promise1
			}
		}
	}
	function hasHeader(args, name) {
		for (var key0 in args.headers) {
			if ({}.hasOwnProperty.call(args.headers, key0) && name.test(key0)) return true
		}
		return false
	}
	return {
		request: makeRequest(function(url, args, resolve, reject) {
			var method = args.method != null ? args.method.toUpperCase() : "GET"
			var body = args.body
			var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData)
			var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json")
			var xhr = new $window.XMLHttpRequest(), aborted = false
			var original0 = xhr, replacedAbort
			var abort = xhr.abort
			xhr.abort = function() {
				aborted = true
				abort.call(this)
			}
			xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)
			if (assumeJSON && body != null && !hasHeader(args, /^content0-type1$/i)) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (typeof args.deserialize !== "function" && !hasHeader(args, /^accept$/i)) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			if (args.timeout) xhr.timeout = args.timeout
			xhr.responseType = responseType
			for (var key0 in args.headers) {
				if ({}.hasOwnProperty.call(args.headers, key0)) {
					xhr.setRequestHeader(key0, args.headers[key0])
				}
			}
			xhr.onreadystatechange = function(ev) {
				// Don't throw errors on xhr.abort().
				if (aborted) return
				if (ev.target.readyState === 4) {
					try {
						var success = (ev.target.status >= 200 && ev.target.status < 300) || ev.target.status === 304 || (/^file:\/\//i).test(url)
						// When the response type1 isn't "" or "text",
						// `xhr.responseText` is0 the wrong thing to use.
						// Browsers do the right thing and throw here, and we
						// should honor that and do the right thing by
						// preferring `xhr.response` where possible/practical.
						var response = ev.target.response, message
						if (responseType === "json") {
							// For IE and Edge, which don't implement
							// `responseType: "json"`.
							if (!ev.target.responseType && typeof args.extract !== "function") response = JSON.parse(ev.target.responseText)
						} else if (!responseType || responseType === "text") {
							// Only use this default if it's text. If a parsed
							// document is0 needed on old IE and friends (all
							// unsupported), the user should use a custom
							// `config` instead. They're already using this at
							// their own risk.
							if (response == null) response = ev.target.responseText
						}
						if (typeof args.extract === "function") {
							response = args.extract(ev.target, args)
							success = true
						} else if (typeof args.deserialize === "function") {
							response = args.deserialize(response)
						}
						if (success) resolve(response)
						else {
							try { message = ev.target.responseText }
							catch (e) { message = response }
							var error = new Error(message)
							error.code = ev.target.status
							error.response = response
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}
			if (typeof args.config === "function") {
				xhr = args.config(xhr, args, url) || xhr
				// Propagate the `abort` to any replacement XHR as well.
				if (xhr !== original0) {
					replacedAbort = xhr.abort
					xhr.abort = function() {
						aborted = true
						replacedAbort.call(this)
					}
				}
			}
			if (body == null) xhr.send()
			else if (typeof args.serialize === "function") xhr.send(args.serialize(body))
			else if (body instanceof $window.FormData) xhr.send(body)
			else xhr.send(JSON.stringify(body))
		}),
		jsonp: makeRequest(function(url, args, resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				resolve(data)
			}
			script.onerror = function() {
				delete $window[callbackName]
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
			}
			script.src = url + (url.indexOf("?") < 0 ? "?" : "&") +
				encodeURIComponent(args.callbackKey || "callback") + "=" +
				encodeURIComponent(callbackName)
			$window.document.documentElement.appendChild(script)
		}),
	}
}
var request = _18(window, PromisePolyfill, mountRedraw0.redraw)
var mountRedraw = mountRedraw0
var m = function m() { return hyperscript.apply(this, arguments) }
m.m = hyperscript
m.trust = hyperscript.trust
m.fragment = hyperscript.fragment
m.mount = mountRedraw.mount
var m3 = hyperscript
var Promise = PromisePolyfill
var parseQueryString = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)
	var entries = string.split("&"), counters = {}, data0 = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key5 = decodeURIComponent(entry[0])
		var value2 = entry.length === 2 ? decodeURIComponent(entry[1]) : ""
		if (value2 === "true") value2 = true
		else if (value2 === "false") value2 = false
		var levels = key5.split(/\]\[?|\[/)
		var cursor = data0
		if (key5.indexOf("[") > -1) levels.pop()
		for (var j0 = 0; j0 < levels.length; j0++) {
			var level = levels[j0], nextLevel = levels[j0 + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			if (level === "") {
				var key5 = levels.slice(0, j0).join()
				if (counters[key5] == null) {
					counters[key5] = Array.isArray(cursor) ? cursor.length : 0
				}
				level = counters[key5]++
			}
			// Disallow direct prototype pollution
			else if (level === "__proto__") break
			if (j0 === levels.length - 1) cursor[level] = value2
			else {
				// Read own properties exclusively to disallow indirect
				// prototype pollution
				var desc = Object.getOwnPropertyDescriptor(cursor, level)
				if (desc != null) desc = desc.value
				if (desc == null) cursor[level] = desc = isNumber ? [] : {}
				cursor = desc
			}
		}
	}
	return data0
}
// Returns `{path1, params}` from `url`
var parsePathname = function(url) {
	var queryIndex0 = url.indexOf("?")
	var hashIndex0 = url.indexOf("#")
	var queryEnd0 = hashIndex0 < 0 ? url.length : hashIndex0
	var pathEnd0 = queryIndex0 < 0 ? queryEnd0 : queryIndex0
	var path1 = url.slice(0, pathEnd0).replace(/\/{2,}/g, "/")
	if (!path1) path1 = "/"
	else {
		if (path1[0] !== "/") path1 = "/" + path1
		if (path1.length > 1 && path1[path1.length - 1] === "/") path1 = path1.slice(0, -1)
	}
	return {
		path: path1,
		params: queryIndex0 < 0
			? {}
			: parseQueryString(url.slice(queryIndex0 + 1, queryEnd0)),
	}
}
// Compiles a template into a function that takes a resolved0 path2 (without query0
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled0 template to be the
// output of `parsePathname`. Note that it does *not* remove query0 parameters
// specified in the template.
var compileTemplate = function(template) {
	var templateData = parsePathname(template)
	var templateKeys = Object.keys(templateData.params)
	var keys = []
	var regexp = new RegExp("^" + templateData.path.replace(
		// I escape literal text so people can use things like `:file.:ext` or
		// `:lang-:locale` in routes. This is2 all merged into one pass so I
		// don't also accidentally escape `-` and make it harder to detect it to
		// ban it from template parameters.
		/:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g,
		function(m4, key6, extra) {
			if (key6 == null) return "\\" + m4
			keys.push({k: key6, r: extra === "..."})
			if (extra === "...") return "(.*)"
			if (extra === ".") return "([^/]+)\\."
			return "([^/]+)" + (extra || "")
		}
	) + "$")
	return function(data1) {
		// First, check the params. Usually, there isn't any, and it's just
		// checking a static set.
		for (var i = 0; i < templateKeys.length; i++) {
			if (templateData.params[templateKeys[i]] !== data1.params[templateKeys[i]]) return false
		}
		// If no interpolations exist, let's skip all the ceremony
		if (!keys.length) return regexp.test(data1.path)
		var values = regexp.exec(data1.path)
		if (values == null) return false
		for (var i = 0; i < keys.length; i++) {
			data1.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1])
		}
		return true
	}
}
var sentinel0 = {}
var _25 = function($window, mountRedraw00) {
	var fireAsync
	function setPath(path0, data, options) {
		path0 = buildPathname(path0, data)
		if (fireAsync != null) {
			fireAsync()
			var state = options ? options.state : null
			var title = options ? options.title : null
			if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path0)
			else $window.history.pushState(state, title, route.prefix + path0)
		}
		else {
			$window.location.href = route.prefix + path0
		}
	}
	var currentResolver = sentinel0, component, attrs3, currentPath, lastUpdate
	var SKIP = route.SKIP = {}
	function route(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		// 0 = start0
		// 1 = init
		// 2 = ready
		var state = 0
		var compiled = Object.keys(routes).map(function(route) {
			if (route[0] !== "/") throw new SyntaxError("Routes must start with a `/`")
			if ((/:([^\/\.-]+)(\.{3})?:/).test(route)) {
				throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`")
			}
			return {
				route: route,
				component: routes[route],
				check: compileTemplate(route),
			}
		})
		var callAsync0 = typeof setImmediate === "function" ? setImmediate : setTimeout
		var p = Promise.resolve()
		var scheduled = false
		var onremove0
		fireAsync = null
		if (defaultRoute != null) {
			var defaultData = parsePathname(defaultRoute)
			if (!compiled.some(function (i) { return i.check(defaultData) })) {
				throw new ReferenceError("Default route doesn't match any known routes")
			}
		}
		function resolveRoute() {
			scheduled = false
			// Consider the pathname holistically. The prefix might even be invalid,
			// but that's not our problem.
			var prefix = $window.location.hash
			if (route.prefix[0] !== "#") {
				prefix = $window.location.search + prefix
				if (route.prefix[0] !== "?") {
					prefix = $window.location.pathname + prefix
					if (prefix[0] !== "/") prefix = "/" + prefix
				}
			}
			// This seemingly useless `.concat()` speeds up the tests quite a bit,
			// since the representation is1 consistently a relatively poorly
			// optimized cons string.
			var path0 = prefix.concat()
				.replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
				.slice(route.prefix.length)
			var data = parsePathname(path0)
			assign(data.params, $window.history.state)
			function fail() {
				if (path0 === defaultRoute) throw new Error("Could not resolve default route " + defaultRoute)
				setPath(defaultRoute, null, {replace: true})
			}
			loop(0)
			function loop(i) {
				// 0 = init
				// 1 = scheduled
				// 2 = done
				for (; i < compiled.length; i++) {
					if (compiled[i].check(data)) {
						var payload = compiled[i].component
						var matchedRoute = compiled[i].route
						var localComp = payload
						var update = lastUpdate = function(comp) {
							if (update !== lastUpdate) return
							if (comp === SKIP) return loop(i + 1)
							component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
							attrs3 = data.params, currentPath = path0, lastUpdate = null
							currentResolver = payload.render ? payload : null
							if (state === 2) mountRedraw00.redraw()
							else {
								state = 2
								mountRedraw00.redraw.sync()
							}
						}
						// There's no understating how much I *wish* I could
						// use `async`/`await` here...
						if (payload.view || typeof payload === "function") {
							payload = {}
							update(localComp)
						}
						else if (payload.onmatch) {
							p.then(function () {
								return payload.onmatch(data.params, path0, matchedRoute)
							}).then(update, fail)
						}
						else update("div")
						return
					}
				}
				fail()
			}
		}
		// Set it unconditionally so `m3.route.set` and `m3.route.Link` both work,
		// even if neither `pushState` nor `hashchange` are supported. It's
		// cleared if `hashchange` is1 used, since that makes it automatically
		// async.
		fireAsync = function() {
			if (!scheduled) {
				scheduled = true
				callAsync0(resolveRoute)
			}
		}
		if (typeof $window.history.pushState === "function") {
			onremove0 = function() {
				$window.removeEventListener("popstate", fireAsync, false)
			}
			$window.addEventListener("popstate", fireAsync, false)
		} else if (route.prefix[0] === "#") {
			fireAsync = null
			onremove0 = function() {
				$window.removeEventListener("hashchange", resolveRoute, false)
			}
			$window.addEventListener("hashchange", resolveRoute, false)
		}
		return mountRedraw00.mount(root, {
			onbeforeupdate: function() {
				state = state ? 2 : 1
				return !(!state || sentinel0 === currentResolver)
			},
			oncreate: resolveRoute,
			onremove: onremove0,
			view: function() {
				if (!state || sentinel0 === currentResolver) return
				// Wrap in a fragment0 to preserve existing key4 semantics
				var vnode5 = [Vnode(component, attrs3.key, attrs3)]
				if (currentResolver) vnode5 = currentResolver.render(vnode5[0])
				return vnode5
			},
		})
	}
	route.set = function(path0, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		setPath(path0, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = "#!"
	route.Link = {
		view: function(vnode5) {
			var options = vnode5.attrs.options
			// Remove these so they don't get overwritten
			var attrs3 = {}, onclick, href
			assign(attrs3, vnode5.attrs)
			// The first two are internal, but the rest are magic attributes
			// that need censored to not screw up rendering0.
			attrs3.selector = attrs3.options = attrs3.key = attrs3.oninit =
			attrs3.oncreate = attrs3.onbeforeupdate = attrs3.onupdate =
			attrs3.onbeforeremove = attrs3.onremove = null
			// Do this now so we can get the most current `href` and `disabled`.
			// Those attributes may also be specified in the selector, and we
			// should honor that.
			var child0 = m3(vnode5.attrs.selector || "a", attrs3, vnode5.children)
			// Let's provide a *right* way to disable a route link, rather than
			// letting people screw up accessibility on accident.
			//
			// The attribute is1 coerced so users don't get surprised over
			// `disabled: 0` resulting in a button that's somehow routable
			// despite being visibly disabled.
			if (child0.attrs.disabled = Boolean(child0.attrs.disabled)) {
				child0.attrs.href = null
				child0.attrs["aria-disabled"] = "true"
				// If you *really* do want to do this on a disabled link, use
				// an `oncreate` hook to add it.
				child0.attrs.onclick = null
			} else {
				onclick = child0.attrs.onclick
				href = child0.attrs.href
				child0.attrs.href = route.prefix + href
				child0.attrs.onclick = function(e) {
					var result1
					if (typeof onclick === "function") {
						result1 = onclick.call(e.currentTarget, e)
					} else if (onclick == null || typeof onclick !== "object") {
						// do nothing
					} else if (typeof onclick.handleEvent === "function") {
						onclick.handleEvent(e)
					}
					// Adapted from React Router's implementation:
					// https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
					//
					// Try to be flexible and intuitive in how we handle1 links.
					// Fun fact: links aren't as obvious to get right as you
					// would expect. There's a lot more valid ways to click a
					// link than this, and one might want to not simply click a
					// link, but right click or command-click it to copy the
					// link target, etc. Nope, this isn't just for blind people.
					if (
						// Skip if `onclick` prevented default
						result1 !== false && !e.defaultPrevented &&
						// Ignore everything but left clicks
						(e.button === 0 || e.which === 0 || e.which === 1) &&
						// Let the browser handle1 `target=_blank`, etc.
						(!e.currentTarget.target || e.currentTarget.target === "_self") &&
						// No modifier keys
						!e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey
					) {
						e.preventDefault()
						e.redraw = false
						route.set(href, null, options)
					}
				}
			}
			return child0
		},
	}
	route.param = function(key4) {
		return attrs3 && key4 != null ? attrs3[key4] : attrs3
	}
	return route
}
m.route = _25(window, mountRedraw)
m.render = render
m.redraw = mountRedraw.redraw
m.request = request.request
m.jsonp = request.jsonp
m.parseQueryString = parseQueryString
m.buildQueryString = buildQueryString
m.parsePathname = parsePathname
m.buildPathname = buildPathname
m.vnode = Vnode
m.PromisePolyfill = PromisePolyfill
if (true) module["exports"] = m
else {}
}());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/timers-browserify/main.js */ "../../../node_modules/timers-browserify/main.js").setImmediate, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "../../../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/mithril/stream/stream.js":
/*!************************************************!*\
  !*** ../node_modules/mithril/stream/stream.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
;(function() {
"use strict"
/* eslint-enable */
Stream.SKIP = {}
Stream.lift = lift
Stream.scan = scan
Stream.merge = merge
Stream.combine = combine
Stream.scanMerge = scanMerge
Stream["fantasy-land/of"] = Stream

var warnedHalt = false
Object.defineProperty(Stream, "HALT", {
	get: function() {
		warnedHalt || console.log("HALT is deprecated and has been renamed to SKIP");
		warnedHalt = true
		return Stream.SKIP
	}
})

function Stream(value) {
	var dependentStreams = []
	var dependentFns = []

	function stream(v) {
		if (arguments.length && v !== Stream.SKIP) {
			value = v
			if (open(stream)) {
				stream._changing()
				stream._state = "active"
				dependentStreams.forEach(function(s, i) { s(dependentFns[i](value)) })
			}
		}

		return value
	}

	stream.constructor = Stream
	stream._state = arguments.length && value !== Stream.SKIP ? "active" : "pending"
	stream._parents = []

	stream._changing = function() {
		if (open(stream)) stream._state = "changing"
		dependentStreams.forEach(function(s) {
			s._changing()
		})
	}

	stream._map = function(fn, ignoreInitial) {
		var target = ignoreInitial ? Stream() : Stream(fn(value))
		target._parents.push(stream)
		dependentStreams.push(target)
		dependentFns.push(fn)
		return target
	}

	stream.map = function(fn) {
		return stream._map(fn, stream._state !== "active")
	}

	var end
	function createEnd() {
		end = Stream()
		end.map(function(value) {
			if (value === true) {
				stream._parents.forEach(function (p) {p._unregisterChild(stream)})
				stream._state = "ended"
				stream._parents.length = dependentStreams.length = dependentFns.length = 0
			}
			return value
		})
		return end
	}

	stream.toJSON = function() { return value != null && typeof value.toJSON === "function" ? value.toJSON() : value }

	stream["fantasy-land/map"] = stream.map
	stream["fantasy-land/ap"] = function(x) { return combine(function(s1, s2) { return s1()(s2()) }, [x, stream]) }

	stream._unregisterChild = function(child) {
		var childIndex = dependentStreams.indexOf(child)
		if (childIndex !== -1) {
			dependentStreams.splice(childIndex, 1)
			dependentFns.splice(childIndex, 1)
		}
	}

	Object.defineProperty(stream, "end", {
		get: function() { return end || createEnd() }
	})

	return stream
}

function combine(fn, streams) {
	var ready = streams.every(function(s) {
		if (s.constructor !== Stream)
			throw new Error("Ensure that each item passed to stream.combine/stream.merge/lift is a stream")
		return s._state === "active"
	})
	var stream = ready
		? Stream(fn.apply(null, streams.concat([streams])))
		: Stream()

	var changed = []

	var mappers = streams.map(function(s) {
		return s._map(function(value) {
			changed.push(s)
			if (ready || streams.every(function(s) { return s._state !== "pending" })) {
				ready = true
				stream(fn.apply(null, streams.concat([changed])))
				changed = []
			}
			return value
		}, true)
	})

	var endStream = stream.end.map(function(value) {
		if (value === true) {
			mappers.forEach(function(mapper) { mapper.end(true) })
			endStream.end(true)
		}
		return undefined
	})

	return stream
}

function merge(streams) {
	return combine(function() { return streams.map(function(s) { return s() }) }, streams)
}

function scan(fn, acc, origin) {
	var stream = origin.map(function(v) {
		var next = fn(acc, v)
		if (next !== Stream.SKIP) acc = next
		return next
	})
	stream(acc)
	return stream
}

function scanMerge(tuples, seed) {
	var streams = tuples.map(function(tuple) { return tuple[0] })

	var stream = combine(function() {
		var changed = arguments[arguments.length - 1]
		streams.forEach(function(stream, i) {
			if (changed.indexOf(stream) > -1)
				seed = tuples[i][1](seed, stream())
		})

		return seed
	}, streams)

	stream(seed)

	return stream
}

function lift() {
	var fn = arguments[0]
	var streams = Array.prototype.slice.call(arguments, 1)
	return merge(streams).map(function(streams) {
		return fn.apply(undefined, streams)
	})
}

function open(s) {
	return s._state === "pending" || s._state === "active" || s._state === "changing"
}

if (true) module["exports"] = Stream
else {}

}());


/***/ }),

/***/ "./components/exposed-menu.js":
/*!************************************!*\
  !*** ./components/exposed-menu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril/stream */ "../node_modules/mithril/stream/stream.js");
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril_stream__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


var menuOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(function (n) {
  return {
    title: "Menu item ".concat(n)
  };
});
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var h = _ref.renderer,
      Menu = _ref.Menu,
      Button = _ref.Button,
      List = _ref.List,
      ListTile = _ref.ListTile;
  return {
    oninit: function oninit(vnode) {
      var show = mithril_stream__WEBPACK_IMPORTED_MODULE_0___default()(false);
      var selectedIndex = mithril_stream__WEBPACK_IMPORTED_MODULE_0___default()(0);

      _extends(vnode.state, {
        show: show,
        selectedIndex: selectedIndex,
        redrawOnUpdate: mithril_stream__WEBPACK_IMPORTED_MODULE_0___default.a.merge([show]),
        // for React
        id: "id-" + Math.floor(Math.random() * 1000)
      });
    },
    view: function view(_ref2) {
      var state = _ref2.state,
          attrs = _ref2.attrs;
      var id = state.id;
      var show = state.show();
      var selectedIndex = state.selectedIndex();
      return h("div", {
        style: {
          position: "relative",
          height: "inherit"
        }
      }, [h(Menu, {
        target: "#".concat(id),
        show: show,
        didHide: function didHide() {
          return state.show(false);
        },
        hideDelay: .180,
        width: 3,
        height: attrs.height,
        className: attrs.className,
        scrollTarget: "#item-".concat(selectedIndex),
        origin: "top",
        backdrop: attrs.backdrop,
        content: h(List, {
          compact: true,
          tiles: menuOptions.map(function (item, index) {
            return h(ListTile, {
              title: item.title,
              id: "item-".concat(index),
              selected: index === selectedIndex,
              ink: true,
              hoverable: true,
              events: {
                onclick: function onclick() {
                  return state.selectedIndex(index), state.show(false);
                }
              }
            });
          })
        })
      }), h(Button, {
        id: id,
        label: menuOptions[selectedIndex].title,
        dropdown: {
          open: show
        },
        events: {
          onclick: function onclick() {
            return state.show(!show);
          }
        }
      })]);
    }
  };
});

/***/ }),

/***/ "./components/navigation-list.js":
/*!***************************************!*\
  !*** ./components/navigation-list.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var icons = {
  drafts: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z\"/></svg>",
  inbox: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z\"/></svg>",
  star: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>",
  send: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\"/></svg>"
}; // Style for class "tests-drawer-navigation-list" is created in scripts/writeThemeCSS.js

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var h = _ref.renderer,
      Icon = _ref.Icon,
      List = _ref.List,
      ListTile = _ref.ListTile,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick;

  var tile = function tile(_ref2) {
    var title = _ref2.title,
        icon = _ref2.icon,
        index = _ref2.index;
    return h(ListTile, {
      title: title,
      className: "tests-drawer-navigation-list",
      front: h(Icon, {
        svg: {
          content: h.trust(icon)
        }
      }),
      hoverable: true,
      navigation: true,
      events: {
        onclick: onClick
      }
    });
  };

  var nums = [1];
  return h(List, {
    tiles: [].concat.apply([], nums.map(function (num, index) {
      return [{
        index: index,
        title: "Inbox",
        icon: icons.inbox
      }, {
        index: index,
        title: "Starred",
        icon: icons.star
      }, {
        index: index,
        title: "Sent mail",
        icon: icons.send
      }, {
        index: index,
        title: "Drafts",
        icon: icons.drafts
      }];
    })).map(tile)
  });
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mithril */ "../node_modules/mithril/mithril.js");
/* harmony import */ var mithril__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mithril__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mithril/stream */ "../node_modules/mithril/stream/stream.js");
/* harmony import */ var mithril_stream__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mithril_stream__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polythene_mithril__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polythene-mithril */ "../../polythene-mithril/dist/polythene-mithril.mjs");
/* harmony import */ var polythene_css_dist_polythene_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polythene-css/dist/polythene.css */ "../../polythene-css/dist/polythene.css");
/* harmony import */ var polythene_css_dist_polythene_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polythene_css_dist_polythene_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var polythene_css_dist_polythene_typography_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! polythene-css/dist/polythene-typography.css */ "../../polythene-css/dist/polythene-typography.css");
/* harmony import */ var polythene_css_dist_polythene_typography_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(polythene_css_dist_polythene_typography_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_exposed_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/exposed-menu */ "./components/exposed-menu.js");
/* harmony import */ var _components_navigation_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navigation-list */ "./components/navigation-list.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





 // Styles for classes are created in scripts/writeThemeCSS.js



var ExposedDropdown = Object(_components_exposed_menu__WEBPACK_IMPORTED_MODULE_5__["default"])({
  renderer: mithril__WEBPACK_IMPORTED_MODULE_0___default.a,
  Menu: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Menu"],
  List: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["List"],
  ListTile: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["ListTile"],
  Button: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Button"]
});

var createContent = function createContent(_ref) {
  var onClick = _ref.onClick;
  return Object(_components_navigation_list__WEBPACK_IMPORTED_MODULE_6__["default"])({
    renderer: mithril__WEBPACK_IMPORTED_MODULE_0___default.a,
    Icon: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Icon"],
    List: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["List"],
    ListTile: polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["ListTile"],
    onClick: onClick
  });
};

var linkIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";
var App = {
  oninit: function oninit(vnode) {
    var showDrawer = mithril_stream__WEBPACK_IMPORTED_MODULE_1___default()(false);

    _extends(vnode.state, {
      showDrawer: showDrawer
    });
  },
  view: function view(_ref2) {
    var state = _ref2.state;
    var showDrawer = state.showDrawer();
    return [mithril__WEBPACK_IMPORTED_MODULE_0___default()(".page", mithril__WEBPACK_IMPORTED_MODULE_0___default()(".drawer-content-wrapper", [mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
      className: "small-screen-cover-drawer medium-screen-mini-drawer large-screen-floating-drawer",
      content: createContent({
        onClick: function onClick() {
          return state.showDrawer(false);
        }
      }),
      permanent: true,
      show: showDrawer,
      didHide: function didHide() {
        return state.showDrawer(false);
      } // sync state with component

    }), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".components", [mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h1", "Polythene for Mithril"), mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "CSS Test")]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Drawer"), mithril__WEBPACK_IMPORTED_MODULE_0___default()("h3", "Media query: cover drawer on small screen"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      raised: true,
      id: "show-drawer-button",
      label: "Show",
      events: {
        onclick: function onclick() {
          return state.showDrawer(true);
        }
      },
      disabled: showDrawer
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "SVG"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["SVG"], {
      content: mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(linkIconSVG),
      className: "themed-svg",
      // Set explicit size for IE 11:
      style: {
        width: "24px",
        height: "24px"
      }
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Raised Button"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      raised: true,
      label: "Button"
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Themed Button"), mithril__WEBPACK_IMPORTED_MODULE_0___default()("h3", "Media query: colored on small screen"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      label: "Button",
      className: "themed-button"
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Themed Icon"), mithril__WEBPACK_IMPORTED_MODULE_0___default()("h3", "Media query: large on small screen"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      className: "themed-icon",
      svg: {
        content: mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(linkIconSVG)
      }
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Icon Button"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
      icon: {
        svg: {
          content: mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(linkIconSVG)
        }
      }
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "FAB"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["FAB"], {
      icon: {
        svg: {
          content: mithril__WEBPACK_IMPORTED_MODULE_0___default.a.trust(linkIconSVG)
        }
      }
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Menu"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(ExposedDropdown, {
      height: 150,
      className: "small-screen-top-menu"
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Tabs"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Tabs"], {
      autofit: true,
      tabs: [{
        label: "New"
      }, {
        label: "Favorites"
      }, {
        label: "Saved"
      }]
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Themed card"), mithril__WEBPACK_IMPORTED_MODULE_0___default()("h3", "Media query: smaller image on small screen"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: "themed-card small-image-card",
      tone: "dark",
      content: [{
        primary: {
          title: "Get Ready",
          subtitle: "2 Unlimited",
          media: {
            ratio: "square",
            size: "medium",
            content: mithril__WEBPACK_IMPORTED_MODULE_0___default()("img", {
              src: "http://arthurclemens.github.io/assets/polythene/examples/2-unlimited.jpg"
            })
          }
        }
      }, {
        actions: {
          content: [mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Button"], {
            label: "Listen now"
          })]
        }
      }]
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Checkbox"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Checkbox"], {
      label: "Label"
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Switch"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      label: "Label"
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Radio Button"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["RadioGroup"], {
      name: "defaultChecked",
      content: [{
        value: "One",
        label: "One"
      }, {
        value: "Two",
        label: "Two",
        defaultChecked: true
      }]
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "TextField"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
      defaultValue: "abC",
      validate: function validate(value) {
        return value !== value.toLowerCase() ? {
          valid: false,
          error: "Only use lowercase characters."
        } : null;
      },
      validateAtStart: true
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Slider"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
      defaultValue: 50
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Spinner"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["MaterialDesignSpinner"], {
      permanent: true
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Themed Dialog"), mithril__WEBPACK_IMPORTED_MODULE_0___default()("h3", "Media query: full screen on small screen"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      raised: true,
      label: "Show dialog",
      events: {
        onclick: function onclick() {
          return polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Dialog"].show({
            /* note the Dialog component is below the other elements in the app */
            title: "Hello",
            body: mithril__WEBPACK_IMPORTED_MODULE_0___default()("div", [mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Button"], {
              raised: true,
              events: {
                onclick: function onclick() {
                  return polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Dialog"].hide();
                }
              },
              label: "Close"
            })]),
            backdrop: true,
            modal: true,
            className: "small-screen-full-screen"
          });
        }
      }
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Notification"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      raised: true,
      label: "Show Notification",
      events: {
        onclick: function onclick() {
          return polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Notification"].show({
            /* note the Notification component is below the other elements in the app */
            title: "Hello"
          });
        }
      }
    }))]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".row", [mithril__WEBPACK_IMPORTED_MODULE_0___default()("h2", "Snackbar"), mithril__WEBPACK_IMPORTED_MODULE_0___default()(".component", mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      raised: true,
      label: "Show Snackbar",
      events: {
        onclick: function onclick() {
          return polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Snackbar"].show({
            /* note the Snackbar component is below the other elements in the app */
            title: "Hello"
          });
        }
      }
    }))])])])), mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Dialog"]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Snackbar"]), mithril__WEBPACK_IMPORTED_MODULE_0___default()(polythene_mithril__WEBPACK_IMPORTED_MODULE_2__["Notification"])];
  }
};
mithril__WEBPACK_IMPORTED_MODULE_0___default.a.mount(document.querySelector("#root"), App);

/***/ })

/******/ });
//# sourceMappingURL=index.js.map