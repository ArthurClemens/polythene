import React from 'react';
import h from 'react-hyperscript';
import ReactDOM from 'react-dom';
import { isClient } from 'polythene-core';

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

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var stream = createCommonjsModule(function (module) {
(function() {
/* eslint-enable */

var guid = 0, HALT = {};
function createStream() {
	function stream() {
		if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0]);
		return stream._state.value
	}
	initStream(stream);

	if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0]);

	return stream
}
function initStream(stream) {
	stream.constructor = createStream;
	stream._state = {id: guid++, value: undefined, state: 0, derive: undefined, recover: undefined, deps: {}, parents: [], endStream: undefined, unregister: undefined};
	stream.map = stream["fantasy-land/map"] = map, stream["fantasy-land/ap"] = ap, stream["fantasy-land/of"] = createStream;
	stream.valueOf = valueOf, stream.toJSON = toJSON, stream.toString = valueOf;

	Object.defineProperties(stream, {
		end: {get: function() {
			if (!stream._state.endStream) {
				var endStream = createStream();
				endStream.map(function(value) {
					if (value === true) {
						unregisterStream(stream);
						endStream._state.unregister = function(){unregisterStream(endStream);};
					}
					return value
				});
				stream._state.endStream = endStream;
			}
			return stream._state.endStream
		}}
	});
}
function updateStream(stream, value) {
	updateState(stream, value);
	for (var id in stream._state.deps) updateDependency(stream._state.deps[id], false);
	if (stream._state.unregister != null) stream._state.unregister();
	finalize(stream);
}
function updateState(stream, value) {
	stream._state.value = value;
	stream._state.changed = true;
	if (stream._state.state !== 2) stream._state.state = 1;
}
function updateDependency(stream, mustSync) {
	var state = stream._state, parents = state.parents;
	if (parents.length > 0 && parents.every(active) && (mustSync || parents.some(changed))) {
		var value = stream._state.derive();
		if (value === HALT) return false
		updateState(stream, value);
	}
}
function finalize(stream) {
	stream._state.changed = false;
	for (var id in stream._state.deps) stream._state.deps[id]._state.changed = false;
}

function combine(fn, streams) {
	if (!streams.every(valid)) throw new Error("Ensure that each item passed to stream.combine/stream.merge is a stream")
	return initDependency(createStream(), streams, function() {
		return fn.apply(this, streams.concat([streams.filter(changed)]))
	})
}

function initDependency(dep, streams, derive) {
	var state = dep._state;
	state.derive = derive;
	state.parents = streams.filter(notEnded);

	registerDependency(dep, state.parents);
	updateDependency(dep, true);

	return dep
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

function map(fn) {return combine(function(stream) {return fn(stream())}, [this])}
function ap(stream) {return combine(function(s1, s2) {return s1()(s2())}, [stream, this])}
function valueOf() {return this._state.value}
function toJSON() {return this._state.value != null && typeof this._state.value.toJSON === "function" ? this._state.value.toJSON() : this._state.value}

function valid(stream) {return stream._state }
function active(stream) {return stream._state.state === 1}
function changed(stream) {return stream._state.changed}
function notEnded(stream) {return stream._state.state !== 2}

function merge(streams) {
	return combine(function() {
		return streams.map(function(s) {return s()})
	}, streams)
}

function scan(reducer, seed, stream) {
	var newStream = combine(function (s) {
		return seed = reducer(seed, s._state.value)
	}, [stream]);

	if (newStream._state.state === 0) newStream(seed);

	return newStream
}

function scanMerge(tuples, seed) {
	var streams = tuples.map(function(tuple) {
		var stream = tuple[0];
		if (stream._state.state === 0) stream(undefined);
		return stream
	});

	var newStream = combine(function() {
		var changed = arguments[arguments.length - 1];

		streams.forEach(function(stream, idx) {
			if (changed.indexOf(stream) > -1) {
				seed = tuples[idx][1](seed, stream._state.value);
			}
		});

		return seed
	}, streams);

	return newStream
}

createStream["fantasy-land/of"] = createStream;
createStream.merge = merge;
createStream.combine = combine;
createStream.scan = scan;
createStream.scanMerge = scanMerge;
createStream.HALT = HALT;

module["exports"] = createStream;

}());
});

var stream$1 = stream;

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
      if (isClient && !this.dom && el) {
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
      if (isClient && !this.dom && el) {
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

export { keys, MithrilToReact, renderer, StateComponent, ViewComponent };
