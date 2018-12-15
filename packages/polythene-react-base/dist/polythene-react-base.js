(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react-hyperscript'), require('react'), require('react-dom'), require('polythene-core')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react-hyperscript', 'react', 'react-dom', 'polythene-core'], factory) :
  (factory((global.polythene = {}),global['react-hyperscript'],global.react,global['react-dom'],global['polythene-core']));
}(this, (function (exports,h,React,ReactDOM,polytheneCore) { 'use strict';

  h = h && h.hasOwnProperty('default') ? h['default'] : h;
  React = React && React.hasOwnProperty('default') ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;

  const keys = {
    autocomplete: "autoComplete",
    autofocus: "autoFocus",
    class: "className",
    className: "className",
    enctype: "encType",
    formaction: "formAction",
    frameborder: "frameBorder",
    maxlength: "maxLength",
    minlength: "minLength",
    onblur: "onBlur",
    onchange: "onChange",
    onclick: "onClick",
    onfocus: "onFocus",
    oninput: "onInput",
    onkeydown: "onKeyDown",
    onkeyup: "onKeyUp",
    onmousedown: "onMouseDown",
    onmouseout: "onMouseOut",
    onmouseover: "onMouseOver",
    onmouseup: "onMouseUp",
    onscroll: "onScroll",
    onsubmit: "onSubmit",
    ontouchend: "onTouchEnd",
    ontouchmove: "onTouchMove",
    ontouchstart: "onTouchStart",
    readonly: "readOnly",
    tabindex: "tabIndex"
  };

  /*
  Takes a Mithril component object and returns a React component (for keys oninit and view).
  Automatically redraws when the stream `vnode.state.redrawOnUpdate` exists, and the stream is updated.

  Example: 

  import stream from "mithril/stream";
  import { renderer as h, Button } from "polythene-react";

  const StateComponent = {
    oninit: vnode => {
      const checked = stream(false);
      Object.assign(vnode.state, {
        checked,
        redrawOnUpdate: stream.merge([checked])
      });
    },
    view: vnode => {
      const state = vnode.state;
      const attrs = vnode.attrs;
      const checked = state.checked();
      return h(Button, {
        raised: true,
        label: `Click ${attrs.subject} to switch ${checked ? "Off" : "On"}`,
        events: {
          [keys.onclick]: () => state.checked(!checked)
        }
      });
    }
  };

  h(StateComponent, { subject: "airco"});
  */
  const MithrilToReact = component => class extends React.Component {
    constructor(props) {
      super(props);
      const vnode = Object.assign({}, component, {
        state: {},
        attrs: this.props,
        redrawValues: undefined
      });

      if (component.oninit) {
        component.oninit(vnode);
      }

      this.state = vnode;
    }

    componentDidMount() {
      this._mounted = true;
      this.state.state.redrawOnUpdate && this.state.state.redrawOnUpdate.map(values => {
        if (this._mounted) {
          this.setState({
            redrawValues: values
          });
        }
      });
    }

    componentWillUnmount() {
      this._mounted = false;
    }

    render() {
      return component.view({
        state: this.state.state,
        attrs: this.props
      }, this.props.children);
    }

  };

  const renderer = (...args) => typeof args[0] === "object" ? h.call(null, MithrilToReact(args[0]), ...args.slice(1)) : h.call(null, ...args);

  renderer.trust = (html, element = "div") => {
    if (html == null) html = "";
    return h(element, {
      dangerouslySetInnerHTML: {
        __html: html
      }
    });
  };

  renderer.displayName = "react";

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

  const requiresKeys = true;
  const StateComponent = ({
    createContent = () => {},
    createProps = () => ({}),
    getElement = () => "div",
    component,
    getInitialState = () => ({}),
    onMount = () => {},
    onUnMount = () => {},
    onUpdate = () => {},
    view = null
  }) => {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.dom = null;
        const protoState = Object.assign({}, component, this.createVirtualNode(), {
          redrawValues: undefined
        });
        this.state = getInitialState(protoState, stream$1, {
          keys
        });
        this.registerDOM = this.registerDOM.bind(this);
        this._render = this._render.bind(this);
      }

      componentDidMount() {
        this._mounted = true;
        this.state.redrawOnUpdate && this.state.redrawOnUpdate.map(values => setTimeout(() => this._mounted && this.setState({
          redrawValues: values
        }), 0));
        onMount(this.createVirtualNode(), {
          keys
        });
      }

      componentDidUpdate() {
        onUpdate(this.createVirtualNode());
      }

      componentWillUnmount() {
        this._mounted = false;
        onUnMount(this.createVirtualNode());
      }

      createVirtualNode() {
        return {
          state: this.state,
          attrs: this.props,
          children: this.props.children,
          dom: this.dom
        };
      }

      registerDOM(el) {
        if (polytheneCore.isClient && !this.dom && el) {
          this.dom = el instanceof HTMLElement ? el : ReactDOM.findDOMNode(el);
        }
      }

      _render() {
        const vnode = this.createVirtualNode();
        return renderer(component || getElement(vnode), Object.assign({}, createProps(vnode, {
          renderer,
          requiresKeys,
          keys
        }), {
          ref: this.registerDOM
        }), [vnode.attrs.before, createContent(vnode, {
          renderer,
          requiresKeys,
          keys
        }), vnode.attrs.after]);
      }

      render() {
        return view ? view(this.createVirtualNode(), {
          renderer,
          render: this._render
        }) : this._render(this.props);
      }

    };
  };

  const requiresKeys$1 = true;
  const ViewComponent = ({
    createContent = () => {},
    createProps = () => ({}),
    getElement = () => "div",
    onMount = () => {},
    onUnMount = () => {},
    component,
    view = null
  }) => {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.dom = null;
        this.registerDOM = this.registerDOM.bind(this);
        this._render = this._render.bind(this);
      }

      componentDidMount() {
        onMount(this.createVirtualNode(), {
          keys
        });
      }

      componentWillUnmount() {
        onUnMount(this.createVirtualNode());
      }

      createVirtualNode() {
        const props = Object.assign({}, this.props);
        return {
          attrs: props,
          children: props.children,
          dom: this.dom
        };
      }

      registerDOM(el) {
        if (polytheneCore.isClient && !this.dom && el) {
          this.dom = el instanceof HTMLElement ? el : ReactDOM.findDOMNode(el);
        }
      }

      _render() {
        const vnode = this.createVirtualNode();
        return renderer(component || getElement(vnode), Object.assign({}, createProps(vnode, {
          renderer,
          requiresKeys: requiresKeys$1,
          keys
        }), {
          ref: this.registerDOM
        }), [vnode.attrs.before, createContent(vnode, {
          renderer,
          requiresKeys: requiresKeys$1,
          keys
        }), vnode.attrs.after]);
      }

      render() {
        return view ? view(this.createVirtualNode(), {
          renderer,
          render: this._render
        }) : this._render(this.props);
      }

    };
  };

  exports.keys = keys;
  exports.MithrilToReact = MithrilToReact;
  exports.renderer = renderer;
  exports.StateComponent = StateComponent;
  exports.ViewComponent = ViewComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=polythene-react-base.js.map
