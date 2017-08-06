import { MaterialDesignProgressSpinner, MaterialDesignSpinner, RaisedButton, Slider, iOSSpinner, keys, renderer } from 'polythene-mithril';
import React, { Component } from 'react';
import { MaterialDesignProgressSpinner as MaterialDesignProgressSpinner$1, MaterialDesignSpinner as MaterialDesignSpinner$1, RaisedButton as RaisedButton$1, Slider as Slider$1, iOSSpinner as iOSSpinner$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';

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

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var opener = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      _ref$spinners = _ref.spinners,
      spinners = _ref$spinners === undefined ? [{}] : _ref$spinners,
      Spinner = _ref.Spinner,
      RaisedButton$$1 = _ref.RaisedButton;
  return {
    oninit: function oninit(vnode) {
      var show = stream(false);
      vnode.state = {
        show: show,
        redrawOnUpdate: stream.merge([show])
      };
    },
    view: function view(vnode) {
      var state = vnode.state;
      var show = state.show();
      return h("div", {
        style: { position: "relative" }
      }, [h(RaisedButton$$1, {
        label: "Toggle",
        events: _defineProperty({}, k.onclick, function () {
          return state.show(!show);
        })
      }), h("div", {
        style: {
          display: "flex",
          margin: "20px 0 0 0"
        }
      }, spinners.map(function (attrs) {
        return h("div", { style: { marginRight: "20px" } }, h(Spinner, _extends({}, attrs, { show: show })));
      }))]);
    }
  };
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var STEP_DURATION = 2000;

var progressOpener = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      _ref$spinners = _ref.spinners,
      spinners = _ref$spinners === undefined ? [{}] : _ref$spinners,
      Spinner = _ref.Spinner,
      RaisedButton$$1 = _ref.RaisedButton;
  return {
    oninit: function oninit(vnode) {
      var start = stream(null);
      var percentage = stream(0);
      var step = function step(timestamp) {
        if (!start()) start(timestamp);
        var progress = timestamp - start();
        percentage(Math.min(1, 1.0 / STEP_DURATION * progress));
        if (h.redraw) h.redraw(); // update Mithril
        if (progress < STEP_DURATION) {
          window.requestAnimationFrame(step);
        }
      };
      vnode.state = {
        start: start,
        step: step,
        percentage: percentage,
        redrawOnUpdate: stream.merge([start, percentage]) // update React
      };
    },
    view: function view(vnode) {
      var state = vnode.state;
      var percentage = state.percentage();
      return h("div", {
        style: { position: "relative" }
      }, [h(RaisedButton$$1, {
        label: "Run",
        events: _defineProperty$1({}, k.onclick, function () {
          return state.start(null), window.requestAnimationFrame(state.step);
        })
      }), h("div", {
        style: {
          display: "flex",
          width: "100%",
          margin: "20px 0 0 0"
        }
      }, spinners.map(function (attrs) {
        return h("div", {
          style: {
            marginRight: "20px",
            width: "100%"
          }
        }, h(Spinner, _extends$1({}, {
          show: true,
          percentage: percentage
        }, attrs)));
      }))]);
    }
  };
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var STEP_DURATION$1 = 2000;

var progressSlider = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Spinner = _ref.Spinner,
      RaisedButton$$1 = _ref.RaisedButton,
      Slider$$1 = _ref.Slider,
      animated = _ref.animated,
      updateDuration = _ref.updateDuration,
      showActivateButton = _ref.showActivateButton;
  return {
    oninit: function oninit(vnode) {
      var start = stream(null);
      var percentage = stream(0);
      var step = function step(timestamp) {
        if (!start()) start(timestamp);
        var progress = timestamp - start();
        percentage(Math.min(1, 1.0 / STEP_DURATION$1 * progress));
        if (h.redraw) h.redraw(); // update Mithril
        if (progress < STEP_DURATION$1) {
          window.requestAnimationFrame(step);
        }
      };
      vnode.state = {
        start: start,
        step: step,
        percentage: percentage,
        redrawOnUpdate: stream.merge([start, percentage]) // update React
      };
    },
    view: function view(_ref2) {
      var state = _ref2.state;

      var percentage = state.percentage();
      return h("div", [h("div", {
        style: {
          display: "flex",
          width: "100%",
          margin: "0 0 20px 0"
        }
      }, h(Slider$$1, {
        min: 0,
        max: 1,
        step: 0,
        value: percentage,
        onChange: function onChange(_ref3) {
          var value = _ref3.value;
          return state.percentage(value);
        },
        style: {
          display: "flex",
          alignItems: "center"
        },
        after: h(Spinner, _extends$2({}, {
          show: true,
          percentage: percentage,
          updateDuration: updateDuration,
          class: "self-center",
          animated: animated
        }))
      })), showActivateButton && h(RaisedButton$$1, {
        label: "Run",
        events: _defineProperty$2({}, k.onclick, function () {
          return state.start(null), window.requestAnimationFrame(state.step);
        })
      })]);
    }
  };
});

var genericTests = (function (_ref) {
  var MaterialDesignSpinner$$1 = _ref.MaterialDesignSpinner,
      MaterialDesignProgressSpinner$$1 = _ref.MaterialDesignProgressSpinner,
      iOSSpinner$$1 = _ref.iOSSpinner,
      RaisedButton$$1 = _ref.RaisedButton,
      Slider$$1 = _ref.Slider,
      renderer$$1 = _ref.renderer,
      keys$$1 = _ref.keys;


  MaterialDesignSpinner$$1.theme(".tests-spinner-themed-md-spinner", {
    color_light_1: "orange",
    color_light_2: "red",
    color_light_3: "orange",
    color_light_4: "red"
  });

  iOSSpinner$$1.theme(".tests-spinner-themed-ios-spinner", {
    color_light: "green",
    color_dark: "yellow"
  });

  return [{
    section: "Material Design Spinner"
  }, {
    name: "Option: permanent -- Material Design Spinner",
    component: MaterialDesignSpinner$$1,
    attrs: {
      permanent: true
    }
  }, {
    name: "Option: size -- Material Design Spinner",
    interactive: true,
    component: opener({
      renderer: renderer$$1,
      keys: keys$$1,
      RaisedButton: RaisedButton$$1,
      Spinner: MaterialDesignSpinner$$1,
      spinners: [{ size: "small" }, { size: "regular" }, { size: "medium" }, { size: "large" }, { size: "fab" }]
    })
  }, {
    name: "Option: raised, z -- Material Design Spinner",
    interactive: true,
    component: opener({
      renderer: renderer$$1,
      keys: keys$$1,
      RaisedButton: RaisedButton$$1,
      Spinner: MaterialDesignSpinner$$1,
      spinners: [{ raised: true, size: "small" }, { raised: true, size: "regular" }, { raised: true, size: "medium" }, { raised: true, size: "large" }, { raised: true, size: "fab" }]
    })
  }, {
    name: "Theme (color) -- Material Design Spinner",
    interactive: true,
    component: opener({
      renderer: renderer$$1,
      keys: keys$$1,
      RaisedButton: RaisedButton$$1,
      Spinner: MaterialDesignSpinner$$1,
      spinners: [{ className: "tests-spinner-themed-md-spinner" }]
    })
  }, {
    name: "Option: style (color) -- Material Design Spinner",
    interactive: true,
    component: opener({
      renderer: renderer$$1,
      keys: keys$$1,
      RaisedButton: RaisedButton$$1,
      Spinner: MaterialDesignSpinner$$1,
      spinners: [{
        singleColor: true,
        style: {
          color: "#2196F3"
        }
      }]
    })
  }, {
    section: "iOS Spinner"
  }, {
    name: "Option: size -- iOS Spinner",
    interactive: true,
    component: opener({
      renderer: renderer$$1,
      keys: keys$$1,
      RaisedButton: RaisedButton$$1,
      Spinner: iOSSpinner$$1,
      spinners: [{ size: "small" }, { size: "regular" }, { size: "medium" }, { size: "large" }, { size: "fab" }]
    })
  }, {
    name: "Theme (color) -- iOS Spinner",
    interactive: true,
    component: opener({
      renderer: renderer$$1,
      keys: keys$$1,
      RaisedButton: RaisedButton$$1,
      Spinner: iOSSpinner$$1,
      spinners: [{ className: "tests-spinner-themed-ios-spinner" }]
    })
  }, {
    name: "Option: style (color) -- iOS Spinner",
    interactive: true,
    component: opener({
      renderer: renderer$$1,
      keys: keys$$1,
      RaisedButton: RaisedButton$$1,
      Spinner: iOSSpinner$$1,
      spinners: [{
        singleColor: true,
        style: {
          color: "#2196F3"
        }
      }]
    })
  }, {
    section: "Material Design Progress Spinner"
  }, {
    name: "Option: permanent",
    component: MaterialDesignProgressSpinner$$1,
    attrs: {
      permanent: true,
      percentage: .75
    }
  }, {
    name: "Emulating progress to 100% -- Material Design Progress Spinner",
    interactive: true,
    component: progressOpener({
      renderer: renderer$$1,
      keys: keys$$1,
      RaisedButton: RaisedButton$$1,
      Spinner: MaterialDesignProgressSpinner$$1
    })
  }, {
    name: "Interactive (animated, updateDuration) -- Material Design Progress Spinner",
    interactive: true,
    component: progressSlider({
      renderer: renderer$$1,
      keys: keys$$1,
      RaisedButton: RaisedButton$$1,
      Spinner: MaterialDesignProgressSpinner$$1,
      Slider: Slider$$1,
      showActivateButton: true
    })
  }, {
    name: "Interactive (animated) -- Material Design Progress Spinner",
    interactive: true,
    component: progressSlider({
      renderer: renderer$$1,
      keys: keys$$1,
      RaisedButton: RaisedButton$$1,
      Spinner: MaterialDesignProgressSpinner$$1,
      Slider: Slider$$1,
      showActivateButton: false,
      animated: true,
      updateDuration: .3
    })
  },

  // Dark tone

  {
    name: "Material Design Spinner -- dark tone class -- Material Design Spinner",
    interactive: true,
    className: "pe-dark-tone",
    component: opener({
      renderer: renderer$$1,
      keys: keys$$1,
      RaisedButton: RaisedButton$$1,
      Spinner: MaterialDesignSpinner$$1
    })
  }, {
    name: "iOS Spinner -- dark tone class -- Material Design Spinner",
    interactive: true,
    className: "pe-dark-tone",
    component: opener({
      renderer: renderer$$1,
      keys: keys$$1,
      RaisedButton: RaisedButton$$1,
      Spinner: iOSSpinner$$1
    })
  }];
});

var mithrilTests = function mithrilTests() {
  return [];
};

var testsMithril = [].concat(genericTests({ RaisedButton: RaisedButton, iOSSpinner: iOSSpinner, MaterialDesignSpinner: MaterialDesignSpinner, MaterialDesignProgressSpinner: MaterialDesignProgressSpinner, Slider: Slider, renderer: renderer, keys: keys })).concat(mithrilTests({ RaisedButton: RaisedButton, iOSSpinner: iOSSpinner, MaterialDesignSpinner: MaterialDesignSpinner, MaterialDesignProgressSpinner: MaterialDesignProgressSpinner, Slider: Slider, renderer: renderer, keys: keys }));

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STEP_DURATION$2 = 2000;

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      percentage: 0
    };
    _this.step = _this.step.bind(_this);
    _this.updatePercentage = _this.updatePercentage.bind(_this);
    return _this;
  }

  _createClass(_class, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
    }
  }, {
    key: "updatePercentage",
    value: function updatePercentage(percentage) {
      if (this._mounted) {
        this.setState({ percentage: percentage });
      }
    }
  }, {
    key: "step",
    value: function step(timestamp) {
      if (!this._start) {
        this._start = timestamp;
      }
      var progress = timestamp - this._start;
      this.setState({
        percentage: Math.min(1, 1.0 / STEP_DURATION$2 * progress)
      });
      if (progress <= STEP_DURATION$2) {
        window.requestAnimationFrame(this.step);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var percentage = this.state.percentage;
      return renderer$1("div", [renderer$1("div", {
        style: {
          display: "flex",
          width: "100%",
          margin: "0 0 20px 0"
        }
      }, renderer$1(Slider$1, {
        min: 0,
        max: 1,
        step: 0,
        value: percentage,
        permanent: true,
        onChange: function onChange(_ref) {
          var value = _ref.value;
          return _this2.updatePercentage(value);
        },
        style: {
          display: "flex",
          alignItems: "center"
        },
        after: renderer$1(MaterialDesignProgressSpinner$1, _extends$3({}, {
          show: true,
          percentage: percentage,
          class: "self-center"
        }))
      })), renderer$1(RaisedButton$1, {
        label: "Run",
        events: {
          onClick: function onClick() {
            return _this2._start = null, window.requestAnimationFrame(_this2.step);
          }
        }
      })]);
    }
  }]);

  return _class;
}(Component);

var reactTests = function reactTests(_ref) {
  var Shadow = _ref.Shadow,
      h = _ref.renderer,
      k = _ref.keys;
  // eslint-disable-line no-unused-vars

  return [{
    section: "React specific tests"
  }, {
    name: "Interactive (animated, updateDuration) -- Material Design Progress Spinner (hyperscript)",
    component: function component() {
      return React.createElement(_class, { updateDuration: 0.3 });
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Option: permanent (JSX) -- Material Design Spinner",
    component: function component() {
      return React.createElement(MaterialDesignSpinner$1, { permanent: true });
    }
  }];
};

var testsReact = [].concat(genericTests({ RaisedButton: RaisedButton$1, iOSSpinner: iOSSpinner$1, MaterialDesignSpinner: MaterialDesignSpinner$1, MaterialDesignProgressSpinner: MaterialDesignProgressSpinner$1, Slider: Slider$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ RaisedButton: RaisedButton$1, iOSSpinner: iOSSpinner$1, MaterialDesignSpinner: MaterialDesignSpinner$1, MaterialDesignProgressSpinner: MaterialDesignProgressSpinner$1, Slider: Slider$1, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
