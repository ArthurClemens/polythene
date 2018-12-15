import m from 'mithril';

const keys = {
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

const renderer = m;
renderer.displayName = "mithril";

/* eslint-enable */
Stream.SKIP = {};
Stream.lift = lift;
Stream.scan = scan;
Stream.merge = merge;
Stream.combine = combine;
Stream.scanMerge = scanMerge;
Stream["fantasy-land/of"] = Stream;
let warnedHalt = false;
Object.defineProperty(Stream, "HALT", {
  get: function () {
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

  let end;

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
    get: function () {
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
  let changed = [];
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

const requiresKeys = false;
const StateComponent = ({
  createContent = () => {},
  createProps = () => {},
  component = null,
  getElement = () => "div",
  getInitialState = () => ({}),
  onMount = () => {},
  onUnMount = () => {},
  onUpdate = () => {},
  view = null
}) => {
  const oninit = vnode => {
    const protoState = Object.assign({}, vnode);
    const initialState = getInitialState(protoState, stream$1, {
      keys
    });
    Object.assign(vnode.state, initialState);
    vnode._mounted = false;
    vnode.state.redrawOnUpdate && vnode.state.redrawOnUpdate.map(() => vnode._mounted && setTimeout(renderer.redraw));
  };

  const oncreate = vnode => {
    vnode._mounted = true;
    onMount(vnode, {
      keys
    });
  };

  const render = vnode => {
    return renderer(component || getElement(vnode), createProps(vnode, {
      renderer,
      requiresKeys,
      keys
    }), [vnode.attrs.before, createContent(vnode, {
      renderer,
      requiresKeys,
      keys
    }), vnode.attrs.after]);
  };

  return {
    view: view ? vnode => view(vnode, {
      render,
      renderer
    }) : vnode => render(vnode),
    oninit,
    oncreate,
    onremove: onUnMount,
    onupdate: onUpdate
  };
};

const requiresKeys$1 = false;
const ViewComponent = ({
  createContent = () => {},
  createProps = () => {},
  getElement = () => "div",
  component = null,
  view = null,
  onMount = () => {},
  onUnMount = () => {}
}) => {
  const render = vnode => renderer(component || getElement(vnode), createProps(vnode, {
    renderer,
    requiresKeys: requiresKeys$1,
    keys
  }), [vnode.attrs.before, createContent(vnode, {
    renderer,
    requiresKeys: requiresKeys$1,
    keys
  }), vnode.attrs.after]);

  return {
    view: view ? vnode => view(vnode, {
      render,
      renderer
    }) : vnode => render(vnode),
    oncreate: vnode => onMount(vnode, {
      keys
    }),
    onremove: onUnMount
  };
};

export { keys, renderer, StateComponent, ViewComponent };
