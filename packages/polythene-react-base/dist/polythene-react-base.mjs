import React from 'react';
import h from 'react-hyperscript';
import ReactDOM from 'react-dom';
import { isClient } from 'polythene-core';

// @ts-check
var keys = {
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

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
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

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var MithrilToReact = function MithrilToReact(component) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));

        var vnode = _objectSpread({}, component, {
          state: {},
          attrs: props,
          redrawValues: undefined
        });

        if (component.oninit) {
          component.oninit(vnode);
        }

        _this.state = vnode;
        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this._mounted = true;
          this.state.state.redrawOnUpdate && this.state.state.redrawOnUpdate.map(function (values) {
            if (_this2._mounted) {
              _this2.setState({
                redrawValues: values
              });
            }
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._mounted = false;
        }
      }, {
        key: "render",
        value: function render() {
          return component.view({
            state: this.state.state,
            attrs: this.props
          }, this.props.children);
        }
      }]);

      return _class;
    }(React.Component)
  );
};

var renderer = function renderer() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _typeof(args[0]) === "object" ? h.call.apply(h, [null, MithrilToReact(args[0])].concat(_toConsumableArray(args.slice(1)))) : h.call.apply(h, [null].concat(args));
};

renderer.trust = function (html) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "div";
  if (html == null) html = "";
  return h(element, {
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
};

renderer["displayName"] = "react";

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

var requiresKeys = true;
/**
 * @param {ComponentCreatorOptions} params
 */

var ComponentCreator = function ComponentCreator(_ref) {
  var _ref$createContent = _ref.createContent,
      createContent = _ref$createContent === void 0 ? function () {} : _ref$createContent,
      _ref$createProps = _ref.createProps,
      createProps = _ref$createProps === void 0 ? function () {
    return {};
  } : _ref$createProps,
      _ref$getElement = _ref.getElement,
      getElement = _ref$getElement === void 0 ? function () {
    return "div";
  } : _ref$getElement,
      component = _ref.component,
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
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class(props) {
        var _this;

        _classCallCheck(this, _class);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this, props));
        _this.dom = null;

        var protoState = _extends({}, component, _this.createVirtualNode(), {
          redrawValues: undefined
        });

        _this.state = getInitialState(protoState, stream$1, {
          keys: keys
        });
        _this.registerDOM = _this.registerDOM.bind(_assertThisInitialized(_this));
        _this._render = _this._render.bind(_assertThisInitialized(_this));
        return _this;
      }

      _createClass(_class, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this._mounted = true;
          this.state.redrawOnUpdate && this.state.redrawOnUpdate.map(function (values) {
            return setTimeout(function () {
              return _this2._mounted && _this2.setState({
                redrawValues: values
              });
            }, 0);
          });
          onMount(this.createVirtualNode(), {
            keys: keys
          });
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          onUpdate(this.createVirtualNode());
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this._mounted = false;
          onUnMount(this.createVirtualNode());
        }
      }, {
        key: "createVirtualNode",
        value: function createVirtualNode() {
          return {
            state: this.state,
            attrs: this.props,
            children: this.props.children,
            dom: this.dom
          };
        }
      }, {
        key: "registerDOM",
        value: function registerDOM(el) {
          if (isClient && !this.dom && el) {
            this.dom = el instanceof HTMLElement ? el : ReactDOM.findDOMNode(el);
          }
        }
      }, {
        key: "_render",
        value: function _render() {
          var vnode = this.createVirtualNode();
          return renderer(component || getElement(vnode), _extends({}, createProps(vnode, {
            renderer: renderer,
            requiresKeys: requiresKeys,
            keys: keys
          }), {
            ref: this.registerDOM
          }), [vnode.attrs.before, createContent(vnode, {
            renderer: renderer,
            requiresKeys: requiresKeys,
            keys: keys
          }), vnode.attrs.after]);
        }
      }, {
        key: "render",
        value: function render() {
          return view ? view(this.createVirtualNode(), {
            renderer: renderer,
            render: this._render
          }) : this._render();
        }
      }]);

      return _class;
    }(React.Component)
  );
};

export { keys, MithrilToReact, renderer, ComponentCreator };
