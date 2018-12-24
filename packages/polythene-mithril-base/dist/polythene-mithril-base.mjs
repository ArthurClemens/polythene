import m from 'mithril';

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
renderer.displayName = "mithril";

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

/* eslint-enable */
Stream.SKIP = {};
Stream.lift = lift;
Stream.scan = scan;
Stream.merge = merge;
Stream.combine = combine;
Stream.scanMerge = scanMerge;
Stream["fantasy-land/of"] = Stream;
var warnedHalt = false;
Object.defineProperty(Stream, "HALT", {
  get: function get() {
    warnedHalt && console.log("HALT is deprecated and has been renamed to SKIP");
    warnedHalt = true;
    return Stream.SKIP;
  }
});

function Stream(value) {
  var dependentStreams = [];
  var dependentFns = [];

  function stream(v) {
    if (arguments.length && v !== Stream.SKIP && open(stream)) {
      value = v;
      stream.changing();
      stream.state = "active";
      dependentStreams.forEach(function (s, i) {
        s(dependentFns[i](value));
      });
    }

    return value;
  }

  stream.constructor = Stream;
  stream.state = arguments.length && value !== Stream.SKIP ? "active" : "pending";

  stream.changing = function () {
    open(stream) && (stream.state = "changing");
    dependentStreams.forEach(function (s) {
      s.dependent && s.dependent.changing();
      s.changing();
    });
  };

  stream.map = function (fn, ignoreInitial) {
    var target = stream.state === "active" && ignoreInitial !== Stream.SKIP ? Stream(fn(value)) : Stream();
    dependentStreams.push(target);
    dependentFns.push(fn);
    return target;
  };

  var end;

  function createEnd() {
    end = Stream();
    end.map(function (value) {
      if (value === true) {
        stream.state = "ended";
        dependentStreams.length = dependentFns.length = 0;
      }

      return value;
    });
    return end;
  }

  stream.toJSON = function () {
    return value != null && typeof value.toJSON === "function" ? value.toJSON() : value;
  };

  stream["fantasy-land/map"] = stream.map;

  stream["fantasy-land/ap"] = function (x) {
    return combine(function (s1, s2) {
      return s1()(s2());
    }, [x, stream]);
  };

  Object.defineProperty(stream, "end", {
    get: function get() {
      return end || createEnd();
    }
  });
  return stream;
}

function combine(fn, streams) {
  var ready = streams.every(function (s) {
    if (s.constructor !== Stream) throw new Error("Ensure that each item passed to stream.combine/stream.merge/lift is a stream");
    return s.state === "active";
  });
  var stream = ready ? Stream(fn.apply(null, streams.concat([streams]))) : Stream();
  var changed = [];
  streams.forEach(function (s) {
    s.map(function (value) {
      changed.push(s);

      if (ready || streams.every(function (s) {
        return s.state !== "pending";
      })) {
        ready = true;
        stream(fn.apply(null, streams.concat([changed])));
        changed = [];
      }

      return value;
    }, Stream.SKIP).parent = stream;
  });
  return stream;
}

function merge(streams) {
  return combine(function () {
    return streams.map(function (s) {
      return s();
    });
  }, streams);
}

function scan(fn, acc, origin) {
  var stream = origin.map(function (v) {
    acc = fn(acc, v);
    return acc;
  });
  stream(acc);
  return stream;
}

function scanMerge(tuples, seed) {
  var streams = tuples.map(function (tuple) {
    return tuple[0];
  });
  var stream = combine(function () {
    var changed = arguments[arguments.length - 1];
    streams.forEach(function (stream, i) {
      if (changed.indexOf(stream) > -1) seed = tuples[i][1](seed, stream());
    });
    return seed;
  }, streams);
  stream(seed);
  return stream;
}

function lift() {
  var fn = arguments[0];
  var streams = Array.prototype.slice.call(arguments, 1);
  return merge(streams).map(function (streams) {
    return fn.apply(undefined, streams);
  });
}

function open(s) {
  return s.state === "pending" || s.state === "active" || s.state === "changing";
}

var stream = /*#__PURE__*/Object.freeze({
  default: Stream
});

function getCjsExportFromNamespace (n) {
	return n && n.default || n;
}

var require$$0 = getCjsExportFromNamespace(stream);

var stream$1 = require$$0;

var requiresKeys = false;
var StateComponent = function StateComponent(_ref) {
  var _ref$createContent = _ref.createContent,
      createContent = _ref$createContent === void 0 ? function () {} : _ref$createContent,
      _ref$createProps = _ref.createProps,
      createProps = _ref$createProps === void 0 ? function () {} : _ref$createProps,
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
      onMount = _ref$onMount === void 0 ? function () {} : _ref$onMount,
      _ref$onUnMount = _ref.onUnMount,
      onUnMount = _ref$onUnMount === void 0 ? function () {} : _ref$onUnMount,
      _ref$onUpdate = _ref.onUpdate,
      onUpdate = _ref$onUpdate === void 0 ? function () {} : _ref$onUpdate,
      _ref$view = _ref.view,
      view = _ref$view === void 0 ? null : _ref$view;

  var oninit = function oninit(vnode) {
    var protoState = _extends({}, vnode);

    var initialState = getInitialState(protoState, stream$1, {
      keys: keys
    });

    _extends(vnode.state, initialState);

    vnode._mounted = false;
    vnode.state.redrawOnUpdate && vnode.state.redrawOnUpdate.map(function () {
      return vnode._mounted && setTimeout(renderer.redraw(true));
    });
  };

  var oncreate = function oncreate(vnode) {
    vnode._mounted = true;
    onMount(vnode, {
      keys: keys
    });
  };

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
    view: view ? function (vnode) {
      return view(vnode, {
        render: render,
        renderer: renderer
      });
    } : function (vnode) {
      return render(vnode);
    },
    oninit: oninit,
    oncreate: oncreate,
    onremove: onUnMount,
    onupdate: onUpdate
  };
};

var requiresKeys$1 = false;
var ViewComponent = function ViewComponent(_ref) {
  var _ref$createContent = _ref.createContent,
      createContent = _ref$createContent === void 0 ? function () {} : _ref$createContent,
      _ref$createProps = _ref.createProps,
      createProps = _ref$createProps === void 0 ? function () {} : _ref$createProps,
      _ref$getElement = _ref.getElement,
      getElement = _ref$getElement === void 0 ? function () {
    return "div";
  } : _ref$getElement,
      _ref$component = _ref.component,
      component = _ref$component === void 0 ? null : _ref$component,
      _ref$view = _ref.view,
      view = _ref$view === void 0 ? null : _ref$view,
      _ref$onMount = _ref.onMount,
      onMount = _ref$onMount === void 0 ? function () {} : _ref$onMount,
      _ref$onUnMount = _ref.onUnMount,
      onUnMount = _ref$onUnMount === void 0 ? function () {} : _ref$onUnMount;

  var render = function render(vnode) {
    return renderer(component || getElement(vnode), createProps(vnode, {
      renderer: renderer,
      requiresKeys: requiresKeys$1,
      keys: keys
    }), [vnode.attrs.before, createContent(vnode, {
      renderer: renderer,
      requiresKeys: requiresKeys$1,
      keys: keys
    }), vnode.attrs.after]);
  };

  return {
    view: view ? function (vnode) {
      return view(vnode, {
        render: render,
        renderer: renderer
      });
    } : function (vnode) {
      return render(vnode);
    },
    oncreate: function oncreate(vnode) {
      return onMount(vnode, {
        keys: keys
      });
    },
    onremove: onUnMount
  };
};

export { keys, renderer, StateComponent, ViewComponent };
