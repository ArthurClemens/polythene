import m from 'mithril';

// @ts-check
var keys = {
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  class: "class",
  className: "class",
  enctype: "enctype",
  formaction: "formaction",
  frameborder: "frameborder",
  maxlength: "maxlength",
  minlength: "minlength",
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
  readonly: "readonly",
  tabindex: "tabindex"
};

var renderer = m;
renderer["displayName"] = "mithril";

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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var stream = createCommonjsModule(function (module) {

  (function () {
    /* eslint-enable */

    var guid = 0,
        HALT = {};

    function createStream() {
      function stream() {
        if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0]);
        return stream._state.value;
      }

      initStream(stream);
      if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0]);
      return stream;
    }

    function initStream(stream) {
      stream.constructor = createStream;
      stream._state = {
        id: guid++,
        value: undefined,
        state: 0,
        derive: undefined,
        recover: undefined,
        deps: {},
        parents: [],
        endStream: undefined,
        unregister: undefined
      };
      stream.map = stream["fantasy-land/map"] = map, stream["fantasy-land/ap"] = ap, stream["fantasy-land/of"] = createStream;
      stream.valueOf = valueOf, stream.toJSON = toJSON, stream.toString = valueOf;
      Object.defineProperties(stream, {
        end: {
          get: function get() {
            if (!stream._state.endStream) {
              var endStream = createStream();
              endStream.map(function (value) {
                if (value === true) {
                  unregisterStream(stream);

                  endStream._state.unregister = function () {
                    unregisterStream(endStream);
                  };
                }

                return value;
              });
              stream._state.endStream = endStream;
            }

            return stream._state.endStream;
          }
        }
      });
    }

    function updateStream(stream, value) {
      updateState(stream, value);

      for (var id in stream._state.deps) {
        updateDependency(stream._state.deps[id], false);
      }

      if (stream._state.unregister != null) stream._state.unregister();
      finalize(stream);
    }

    function updateState(stream, value) {
      stream._state.value = value;
      stream._state.changed = true;
      if (stream._state.state !== 2) stream._state.state = 1;
    }

    function updateDependency(stream, mustSync) {
      var state = stream._state,
          parents = state.parents;

      if (parents.length > 0 && parents.every(active) && (mustSync || parents.some(changed))) {
        var value = stream._state.derive();

        if (value === HALT) return false;
        updateState(stream, value);
      }
    }

    function finalize(stream) {
      stream._state.changed = false;

      for (var id in stream._state.deps) {
        stream._state.deps[id]._state.changed = false;
      }
    }

    function combine(fn, streams) {
      if (!streams.every(valid)) throw new Error("Ensure that each item passed to stream.combine/stream.merge is a stream");
      return initDependency(createStream(), streams, function () {
        return fn.apply(this, streams.concat([streams.filter(changed)]));
      });
    }

    function initDependency(dep, streams, derive) {
      var state = dep._state;
      state.derive = derive;
      state.parents = streams.filter(notEnded);
      registerDependency(dep, state.parents);
      updateDependency(dep, true);
      return dep;
    }

    function registerDependency(stream, parents) {
      for (var i = 0; i < parents.length; i++) {
        parents[i]._state.deps[stream._state.id] = stream;
        registerDependency(stream, parents[i]._state.parents);
      }
    }

    function unregisterStream(stream) {
      for (var i = 0; i < stream._state.parents.length; i++) {
        var parent = stream._state.parents[i];
        delete parent._state.deps[stream._state.id];
      }

      for (var id in stream._state.deps) {
        var dependent = stream._state.deps[id];

        var index = dependent._state.parents.indexOf(stream);

        if (index > -1) dependent._state.parents.splice(index, 1);
      }

      stream._state.state = 2; //ended

      stream._state.deps = {};
    }

    function map(fn) {
      return combine(function (stream) {
        return fn(stream());
      }, [this]);
    }

    function ap(stream) {
      return combine(function (s1, s2) {
        return s1()(s2());
      }, [stream, this]);
    }

    function valueOf() {
      return this._state.value;
    }

    function toJSON() {
      return this._state.value != null && typeof this._state.value.toJSON === "function" ? this._state.value.toJSON() : this._state.value;
    }

    function valid(stream) {
      return stream._state;
    }

    function active(stream) {
      return stream._state.state === 1;
    }

    function changed(stream) {
      return stream._state.changed;
    }

    function notEnded(stream) {
      return stream._state.state !== 2;
    }

    function merge(streams) {
      return combine(function () {
        return streams.map(function (s) {
          return s();
        });
      }, streams);
    }

    function scan(reducer, seed, stream) {
      var newStream = combine(function (s) {
        return seed = reducer(seed, s._state.value);
      }, [stream]);
      if (newStream._state.state === 0) newStream(seed);
      return newStream;
    }

    function scanMerge(tuples, seed) {
      var streams = tuples.map(function (tuple) {
        var stream = tuple[0];
        if (stream._state.state === 0) stream(undefined);
        return stream;
      });
      var newStream = combine(function () {
        var changed = arguments[arguments.length - 1];
        streams.forEach(function (stream, idx) {
          if (changed.indexOf(stream) > -1) {
            seed = tuples[idx][1](seed, stream._state.value);
          }
        });
        return seed;
      }, streams);
      return newStream;
    }

    createStream["fantasy-land/of"] = createStream;
    createStream.merge = merge;
    createStream.combine = combine;
    createStream.scan = scan;
    createStream.scanMerge = scanMerge;
    createStream.HALT = HALT;
    module["exports"] = createStream;
  })();
});

var stream$1 = stream;

var requiresKeys = false;
/**
 * @param {ComponentCreatorOptions} params
 */

var ComponentCreator = function ComponentCreator(_ref) {
  var _ref$createContent = _ref.createContent,
      createContent = _ref$createContent === void 0 ? function () {
    return null;
  } : _ref$createContent,
      _ref$createProps = _ref.createProps,
      createProps = _ref$createProps === void 0 ? function () {
    return {};
  } : _ref$createProps,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? null : _ref$component,
      _ref$getElement = _ref.getElement,
      getElement = _ref$getElement === void 0 ? function () {
    return "div";
  } : _ref$getElement,
      _ref$getInitialState = _ref.getInitialState,
      getInitialState = _ref$getInitialState === void 0 ? function () {
    return {};
  } : _ref$getInitialState,
      _ref$onMount = _ref.onMount,
      onMount = _ref$onMount === void 0 ? function () {
    return null;
  } : _ref$onMount,
      _ref$onUnMount = _ref.onUnMount,
      onUnMount = _ref$onUnMount === void 0 ? function () {
    return null;
  } : _ref$onUnMount,
      _ref$onUpdate = _ref.onUpdate,
      onUpdate = _ref$onUpdate === void 0 ? function () {
    return null;
  } : _ref$onUpdate,
      _ref$view = _ref.view,
      view = _ref$view === void 0 ? null : _ref$view;
  var localState = {
    mounted: false
  };
  /**
   * @param {Vnode} vnode 
   */

  var oninit = function oninit(vnode) {
    /**
     * @type {{ redrawOnUpdate?: Array<function>, _?: any }} initialState
     */
    var initialState = getInitialState(vnode, stream$1, {
      keys: keys
    });
    vnode.state = _objectSpread({}, initialState);
    initialState.redrawOnUpdate !== undefined ? initialState.redrawOnUpdate.map(function () {
      return localState && setTimeout(renderer.redraw);
    }) : undefined;
  };
  /**
   * @param {Vnode} vnode 
   */


  var oncreate = function oncreate(vnode) {
    localState.mounted = true;
    onMount(vnode, {
      keys: keys
    });
  };
  /**
   * @param {Vnode} vnode 
   */


  var render = function render(vnode) {
    return renderer(component || getElement(vnode), createProps(vnode, {
      renderer: renderer,
      requiresKeys: requiresKeys,
      keys: keys
    }), [vnode.attrs.before, createContent(vnode, {
      renderer: renderer,
      requiresKeys: requiresKeys,
      keys: keys
    }), vnode.attrs.after]);
  };

  return {
    view: view ?
    /**
     * @param {Vnode} vnode
     */
    function (vnode) {
      return view(vnode, {
        render: render,
        renderer: renderer
      });
    } :
    /**
     * @param {Vnode} vnode
     */
    function (vnode) {
      return render(vnode);
    },
    oninit: oninit,
    oncreate: oncreate,
    onremove: onUnMount,
    onupdate: onUpdate
  };
};

export { keys, renderer, ComponentCreator };
