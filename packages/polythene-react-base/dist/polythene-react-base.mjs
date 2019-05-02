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

  return _typeof(args[0]) === "object" && args[0].view !== undefined ? h.call.apply(h, [null, MithrilToReact(args[0])].concat(_toConsumableArray(args.slice(1)))) : h.call.apply(h, [null].concat(args));
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
	get: function() {
		warnedHalt || console.log("HALT is deprecated and has been renamed to SKIP");
		warnedHalt = true;
		return Stream.SKIP
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
			dependentStreams.forEach(function(s, i) { s(dependentFns[i](value)); });
		}

		return value
	}

	stream.constructor = Stream;
	stream.state = arguments.length && value !== Stream.SKIP ? "active" : "pending";

	stream.changing = function() {
		open(stream) && (stream.state = "changing");
		dependentStreams.forEach(function(s) {
			s.dependent && s.dependent.changing();
			s.changing();
		});
	};

	stream.map = function(fn, ignoreInitial) {
		var target = stream.state === "active" && ignoreInitial !== Stream.SKIP
			? Stream(fn(value))
			: Stream();

		dependentStreams.push(target);
		dependentFns.push(fn);
		return target
	};

	var end;
	function createEnd() {
		end = Stream();
		end.map(function(value) {
			if (value === true) {
				stream.state = "ended";
				dependentStreams.length = dependentFns.length = 0;
			}
			return value
		});
		return end
	}

	stream.toJSON = function() { return value != null && typeof value.toJSON === "function" ? value.toJSON() : value };

	stream["fantasy-land/map"] = stream.map;
	stream["fantasy-land/ap"] = function(x) { return combine(function(s1, s2) { return s1()(s2()) }, [x, stream]) };

	Object.defineProperty(stream, "end", {
		get: function() { return end || createEnd() }
	});

	return stream
}

function combine(fn, streams) {
	var ready = streams.every(function(s) {
		if (s.constructor !== Stream)
			throw new Error("Ensure that each item passed to stream.combine/stream.merge/lift is a stream")
		return s.state === "active"
	});
	var stream = ready
		? Stream(fn.apply(null, streams.concat([streams])))
		: Stream();

	var changed = [];

	streams.forEach(function(s) {
		s.map(function(value) {
			changed.push(s);
			if (ready || streams.every(function(s) { return s.state !== "pending" })) {
				ready = true;
				stream(fn.apply(null, streams.concat([changed])));
				changed = [];
			}
			return value
		}, Stream.SKIP).parent = stream;
	});

	return stream
}

function merge(streams) {
	return combine(function() { return streams.map(function(s) { return s() }) }, streams)
}

function scan(fn, acc, origin) {
	var stream = origin.map(function(v) {
		var next = fn(acc, v);
		if (next !== Stream.SKIP) acc = next;
		return next
	});
	stream(acc);
	return stream
}

function scanMerge(tuples, seed) {
	var streams = tuples.map(function(tuple) { return tuple[0] });

	var stream = combine(function() {
		var changed = arguments[arguments.length - 1];
		streams.forEach(function(stream, i) {
			if (changed.indexOf(stream) > -1)
				seed = tuples[i][1](seed, stream());
		});

		return seed
	}, streams);

	stream(seed);

	return stream
}

function lift() {
	var fn = arguments[0];
	var streams = Array.prototype.slice.call(arguments, 1);
	return merge(streams).map(function(streams) {
		return fn.apply(undefined, streams)
	})
}

function open(s) {
	return s.state === "pending" || s.state === "active" || s.state === "changing"
}

var stream = /*#__PURE__*/Object.freeze({
  default: Stream
});

function getCjsExportFromNamespace (n) {
	return n && n.default || n;
}

var require$$0 = getCjsExportFromNamespace(stream);

var stream$1 = require$$0;

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
