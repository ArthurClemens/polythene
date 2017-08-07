import { Button, IconButton, Search, Shadow, keys, renderer } from 'polythene-mithril';
import React, { Component } from 'react';
import { Button as Button$1, IconButton as IconButton$1, Search as Search$1, Shadow as Shadow$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var genericTests = (function (_ref) {
  var h = _ref.renderer,
      Search$$1 = _ref.Search,
      SearchField = _ref.SearchField,
      Shadow$$1 = _ref.Shadow;


  Search$$1.theme(".tests-search-themed-search", {
    color_light_input_text: "#0D47A1",
    color_light_background: "#BBDEFB",
    color_dark_input_text: "#eee",
    color_dark_background: "#333"
  });

  var Block = {
    view: function view(_ref2) {
      var attrs = _ref2.attrs;
      return h("form", {
        style: _extends({}, {
          minHeight: "130px",
          overflow: "hidden" // hides top and side shadow with full width search field
        }, attrs.dark ? { backgroundColor: "transparent" } : { backgroundColor: "#e4e4e4" }, attrs.fullWidth ? null : { padding: "8px" })
      }, h(SearchField, attrs));
    }
  };

  return [{
    name: "Option: textfield",
    component: {
      view: function view() {
        return h(Search$$1, {
          textfield: {
            label: "Search"
          },
          after: h(Shadow$$1)
        });
      }
    }
  }, {
    name: "Option: textfield, buttons",
    component: {
      view: function view() {
        return h(Block);
      }
    }
  }, {
    name: "Option: textfield, buttons, fullWidth",
    component: {
      view: function view() {
        return h(Block, { fullWidth: true });
      }
    }
  }, {
    name: "Colored field",
    component: {
      view: function view() {
        return h(Block, {
          style: { background: "#BBDEFB" }
        });
      }
    }
  }, {
    name: "Theme",
    component: {
      view: function view() {
        return h(Block, {
          className: "tests-search-themed-search"
        });
      }
    }
  },

  // Dark tone

  {
    name: "Theme -- dark tone class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return h(Block, {
          className: "tests-search-themed-search",
          dark: true
        });
      }
    }
  }, {
    name: "Dark tone class + light tone class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return h(Block, {
          className: "pe-light-tone",
          dark: true
        });
      }
    }
  }, {
    name: "Dark tone class + light tone",
    className: "test-dark-tone",
    component: {
      view: function view() {
        return h(Block, {
          tone: "light",
          dark: true
        });
      }
    }
  }];
});

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var stream$2 = createCommonjsModule(function (module) {
	/* eslint-disable */
	(function () {
		"use strict";
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
			stream._state = { id: guid++, value: undefined, state: 0, derive: undefined, recover: undefined, deps: {}, parents: [], endStream: undefined, unregister: undefined };
			stream.map = stream["fantasy-land/map"] = map, stream["fantasy-land/ap"] = ap, stream["fantasy-land/of"] = createStream;
			stream.valueOf = valueOf, stream.toJSON = toJSON, stream.toString = valueOf;

			Object.defineProperties(stream, {
				end: { get: function get() {
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
					} }
			});
		}
		function updateStream(stream, value) {
			updateState(stream, value);
			for (var id in stream._state.deps) {
				updateDependency(stream._state.deps[id], false);
			}if (stream._state.unregister != null) stream._state.unregister();
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

var stream = stream$2;

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iconSearchSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/></svg>";
var iconBackSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>";
var iconClearSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>";
var iconMicSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z\"/></svg>";

var searchField = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Search$$1 = _ref.Search,
      IconButton$$1 = _ref.IconButton,
      Shadow$$1 = _ref.Shadow;


  var iconSearch = h.trust(iconSearchSVG);
  var iconBack = h.trust(iconBackSVG);
  var iconClear = h.trust(iconClearSVG);
  var iconMic = h.trust(iconMicSVG);

  var BackButton = {
    view: function view(_ref2) {
      var attrs = _ref2.attrs;
      return h(IconButton$$1, {
        icon: { svg: iconBack },
        ink: false,
        events: _defineProperty({}, k.onclick, attrs.leave)
      });
    }
  };

  var ClearButton = {
    view: function view(_ref3) {
      var attrs = _ref3.attrs;
      return h(IconButton$$1, {
        icon: { svg: iconClear },
        ink: false,
        events: _defineProperty({}, k.onclick, attrs.clear)
      });
    }
  };

  var SearchIcon = {
    view: function view() {
      return h(IconButton$$1, {
        icon: { svg: iconSearch },
        inactive: true
      });
    }
  };

  var MicIcon = {
    view: function view() {
      return h(IconButton$$1, {
        icon: { svg: iconMic },
        inactive: true
      });
    }
  };

  return {
    oninit: function oninit(vnode) {
      var value = stream("");
      var focus = stream(false);

      var clear = function clear() {
        return value(""), focus(true);
      };
      var leave = function leave() {
        return value("");
      };

      vnode.state = {
        value: value,
        focus: focus,
        clear: clear,
        leave: leave,
        redrawOnUpdate: stream.merge([value]) // for React
      };
    },
    view: function view(_ref4) {
      var state = _ref4.state,
          attrs = _ref4.attrs;

      var value = state.value();
      var focus = state.focus();
      return h(Search$$1, _extends$1({}, {
        textfield: {
          label: "Search",
          onChange: function onChange(_ref5) {
            var value = _ref5.value,
                focus = _ref5.focus;
            return state.value(value), state.focus(focus);
          },
          value: value,
          focus: focus
        },
        buttons: {
          none: {
            before: h(SearchIcon),
            after: h(MicIcon)
          },
          focus: {
            before: h(SearchIcon),
            after: h(MicIcon)
          },
          focus_dirty: {
            before: h(BackButton, { leave: state.leave }),
            after: h(ClearButton, { clear: state.clear })
          },
          dirty: {
            before: h(BackButton, { leave: state.leave }),
            after: h(ClearButton, { clear: state.clear })
          }
        },
        before: h(Shadow$$1)
      }, attrs));
    }
  };
});

var SearchField = searchField({ renderer: renderer, keys: keys, Search: Search, IconButton: IconButton, Button: Button, Shadow: Shadow });

var mithrilTests = function mithrilTests() {

  return [];
};

var testsMithril = [].concat(genericTests({ Search: Search, IconButton: IconButton, Button: Button, Shadow: Shadow, SearchField: SearchField, renderer: renderer, keys: keys })).concat(mithrilTests({ Search: Search, IconButton: IconButton, Button: Button, Shadow: Shadow, SearchField: SearchField, renderer: renderer, keys: keys }));

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iconSearchSVG$1 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z\"/></svg>";
var iconBackSVG$1 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>";
var iconClearSVG$1 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>";
var iconMicSVG$1 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z\"/></svg>";

var iconSearch = renderer$1.trust(iconSearchSVG$1);
var iconBack = renderer$1.trust(iconBackSVG$1);
var iconClear = renderer$1.trust(iconClearSVG$1);
var iconMic = renderer$1.trust(iconMicSVG$1);

var BackButton = function BackButton(_ref) {
  var leave = _ref.leave;
  return renderer$1(IconButton$1, {
    icon: { svg: iconBack },
    ink: false,
    events: { onClick: leave }
  });
};

var ClearButton = function ClearButton(_ref2) {
  var clear = _ref2.clear;
  return renderer$1(IconButton$1, {
    icon: { svg: iconClear },
    ink: false,
    events: { onClick: clear }
  });
};

var SearchIcon = function SearchIcon() {
  return renderer$1(IconButton$1, {
    icon: { svg: iconSearch },
    inactive: true
  });
};

var MicIcon = function MicIcon() {
  return renderer$1(IconButton$1, {
    icon: { svg: iconMic },
    inactive: true
  });
};

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      value: "",
      focus: false
    };
    _this.clear = _this.clear.bind(_this);
    _this.leave = _this.leave.bind(_this);
    return _this;
  }

  _createClass(_class, [{
    key: "clear",
    value: function clear() {
      this.setState({
        value: "",
        focus: true
      });
    }
  }, {
    key: "leave",
    value: function leave() {
      this.setState({ value: "" });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return renderer$1(Search$1, _extends$2({}, {
        textfield: {
          label: "Search",
          onChange: function onChange(_ref3) {
            var value = _ref3.value,
                focus = _ref3.focus;
            return _this2.setState({ value: value, focus: focus });
          },
          value: this.state.value,
          focus: this.state.focus
        },
        buttons: {
          none: {
            before: renderer$1(SearchIcon),
            after: renderer$1(MicIcon)
          },
          focus: {
            before: renderer$1(SearchIcon),
            after: renderer$1(MicIcon)
          },
          focus_dirty: {
            before: renderer$1(BackButton, { leave: this.leave }),
            after: renderer$1(ClearButton, { clear: this.clear })
          },
          dirty: {
            before: renderer$1(BackButton, { leave: this.leave }),
            after: renderer$1(ClearButton, { clear: this.clear })
          }
        },
        before: renderer$1(Shadow$1)
      }, this.props));
    }
  }]);

  return _class;
}(Component);

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iconSearch$1 = React.createElement(
  "svg",
  { width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" })
);
var iconBack$1 = React.createElement(
  "svg",
  { width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" })
);
var iconClear$1 = React.createElement(
  "svg",
  { width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
);
var iconMic$1 = React.createElement(
  "svg",
  { width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M12 14c1.66 0 2.99-1.34 2.99-3L15 5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z" })
);

var BackButton$1 = function BackButton(_ref) {
  var leave = _ref.leave;
  return React.createElement(IconButton$1, {
    icon: { svg: iconBack$1 },
    ink: false,
    events: { onClick: leave }
  });
};

var ClearButton$1 = function ClearButton(_ref2) {
  var clear = _ref2.clear;
  return React.createElement(IconButton$1, {
    icon: { svg: iconClear$1 },
    ink: false,
    events: { onClick: clear }
  });
};

var SearchIcon$1 = function SearchIcon() {
  return React.createElement(IconButton$1, {
    icon: { svg: iconSearch$1 },
    inactive: true
  });
};

var MicIcon$1 = function MicIcon() {
  return React.createElement(IconButton$1, {
    icon: { svg: iconMic$1 },
    inactive: true
  });
};

var _class$1 = function (_Component) {
  _inherits$1(_class, _Component);

  function _class(props) {
    _classCallCheck$1(this, _class);

    var _this = _possibleConstructorReturn$1(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      value: "",
      focus: false
    };
    _this.clear = _this.clear.bind(_this);
    _this.leave = _this.leave.bind(_this);
    return _this;
  }

  _createClass$1(_class, [{
    key: "clear",
    value: function clear() {
      this.setState({
        value: "",
        focus: true
      });
    }
  }, {
    key: "leave",
    value: function leave() {
      this.setState({ value: "" });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      var focus = this.state.focus;
      return React.createElement(Search$1, _extends$3({
        textfield: {
          label: "Search",
          onChange: function onChange(_ref3) {
            var value = _ref3.value,
                focus = _ref3.focus;
            return _this2.setState({ value: value, focus: focus });
          },
          value: value,
          focus: focus
        },
        buttons: {
          none: {
            before: SearchIcon$1(),
            after: MicIcon$1()
          },
          focus: {
            before: SearchIcon$1(),
            after: MicIcon$1()
          },
          focus_dirty: {
            before: BackButton$1({ leave: this.leave }),
            after: ClearButton$1({ clear: this.clear })
          },
          dirty: {
            before: BackButton$1({ leave: this.leave }),
            after: ClearButton$1({ clear: this.clear })
          }
        },
        before: React.createElement(Shadow$1, null)
      }, this.props));
    }
  }]);

  return _class;
}(Component);

var reactTests = function reactTests() {

  return [{
    section: "React specific tests"
  }, {
    name: "Option: textfield, buttons (hyperscript)",
    component: function component() {
      return React.createElement(_class, null);
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Option: textfield, buttons (JSX)",
    component: function component() {
      return React.createElement(_class$1, null);
    }
  }, {
    name: "Theme (JSX)",
    component: function component() {
      return React.createElement(_class$1, { className: "tests-search-themed-search" });
    }
  }];
};

var testsReact = [].concat(genericTests({ Search: Search$1, IconButton: IconButton$1, Button: Button$1, Shadow: Shadow$1, SearchField: _class, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ Search: Search$1, IconButton: IconButton$1, Button: Button$1, Shadow: Shadow$1, SearchField: _class, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
