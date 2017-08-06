import { Icon, Slider, TextField, keys, renderer } from 'polythene-mithril';
import { rgba, styler } from 'polythene-core-css';
import { vars } from 'polythene-theme';
import React, { Component } from 'react';
import { Icon as Icon$1, Slider as Slider$1, TextField as TextField$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';

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

var onChange = (function (_ref) {
  var h = _ref.h,
      Slider$$1 = _ref.Slider,
      _ref$displayFn = _ref.displayFn,
      displayFn = _ref$displayFn === undefined ? function (value) {
    return "Value: " + (value === undefined ? "Not set" : Math.floor(value * 100) / 100);
  } : _ref$displayFn,
      attrs = _ref.attrs;
  return {
    oninit: function oninit(vnode) {
      var value = stream(attrs.defaultValue || attrs.value || 0);
      vnode.state = {
        value: value,
        redrawOnUpdate: stream.merge([value])
      };
    },
    view: function view(vnode) {
      var state = vnode.state;
      var value = state.value();
      return h("div", [h("div", {
        style: {
          margin: "0 0 1rem 0"
        }
      }, displayFn(value)), h(Slider$$1, _extends({}, attrs, {
        onChange: function onChange(newState) {
          return state.value(newState.value);
        }
      }))]);
    }
  };
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var styles = [{
  " .volume": {
    " .pe-header": {
      fontSize: "14px",
      color: rgba(vars.color_light_foreground, vars.blend_light_text_secondary)
    },
    " .pe-slider": {
      color: "#009688",
      margin: "13px 0 11px 0"
    }
  },
  " .pe-dark-tone.volume": {
    " .pe-header": {
      color: rgba(vars.color_dark_foreground, vars.blend_dark_text_secondary)
    }
  }
}];

styler.add("polythene-test-slider-volume", styles);

var volumeIconSVG$1 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\"/></svg>";
var alarmIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z\"/></svg>";
var headphonesIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 11.9994,0.998068C 7.02841,0.998068 2.9994,5.02706 2.9994,9.99807L 2.9994,16.9981C 2.9994,18.6551 4.3424,19.9981 5.9994,19.9981L 8.9994,19.9981L 8.9994,11.9981L 4.9994,11.9981L 4.9994,9.99807C 4.9994,6.13207 8.1334,2.99807 11.9994,2.99807C 15.8654,2.99807 18.9994,6.13207 18.9994,9.99807L 18.9994,11.9981L 14.9994,11.9981L 14.9994,19.9981L 17.9994,19.9981C 19.6564,19.9981 20.9994,18.6551 20.9994,16.9981L 20.9994,9.99807C 20.9994,5.02706 16.9704,0.998068 11.9994,0.998068 Z \"/></svg>";

var volumeSlider = (function (_ref) {
  var h = _ref.h,
      Slider$$1 = _ref.Slider,
      Icon$$1 = _ref.Icon;


  var volumeIcon = h.trust(volumeIconSVG$1);
  var alarmIcon = h.trust(alarmIconSVG);
  var headphonesIcon = h.trust(headphonesIconSVG);
  var defaults = {
    min: 0,
    max: 10,
    step: 0
  };
  return {
    view: function view() {
      return h(".volume", [h(".header", "Media volume"), h(Slider$$1, _extends$1({}, defaults, {
        defaultValue: 4,
        before: h(Icon$$1, {
          svg: volumeIcon
        })
      })), h(".header", "Alarm volume"), h(Slider$$1, _extends$1({}, defaults, {
        defaultValue: 2,
        before: h(Icon$$1, {
          svg: alarmIcon
        })
      })), h(".header", "Headphone volume"), h(Slider$$1, _extends$1({}, defaults, {
        defaultValue: 2,
        disabled: true,
        before: h(Icon$$1, {
          svg: headphonesIcon
        })
      }))]);
    }
  };
});

var bullsEyeIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"1.33333\" stroke-linejoin=\"miter\" d=\"M 12,2C 6.47715,2 2,6.4772 2,12C 2,17.5228 6.47715,22 12,22C 17.5228,22 22,17.5228 22,12C 22,6.4772 17.5228,2 12,2 Z M 12,4C 16.4183,4 20,7.5817 20,12C 20,16.4183 16.4183,20 12,20C 7.58172,20 4,16.4183 4,12C 4,7.5817 7.58172,4 12,4 Z M 12,6C 8.68629,6 6,8.6863 6,12C 6,15.3137 8.68629,18 12,18C 15.3137,18 18,15.3137 18,12C 18,8.6863 15.3137,6 12,6 Z M 12,8C 14.2091,8 16,9.7909 16,12C 16,14.2091 14.2091,16 12,16C 9.79086,16 8,14.2091 8,12C 8,9.7909 9.79086,8 12,8 Z M 12,10C 10.8954,10 10,10.8954 10,12C 10,13.1046 10.8954,14 12,14C 13.1046,14 14,13.1046 14,12C 14,10.8954 13.1046,10 12,10 Z \"/></svg>";

var volumeIconSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z\"/></svg>";

var genericTests = (function (_ref) {
  var Slider$$1 = _ref.Slider,
      Icon$$1 = _ref.Icon,
      h = _ref.renderer;


  var bullsEyeIcon = h.trust(bullsEyeIconSVG);
  var volumeIcon = h.trust(volumeIconSVG);

  var VolumeSlider = volumeSlider({ Slider: Slider$$1, Icon: Icon$$1, h: h });

  Slider$$1.theme(".slider-custom-icon", {
    color_light_thumb_background: "#fff"
  });

  Slider$$1.theme(".slider-custom-color", {
    color_light_track_active: "#82b1ff",
    color_light_track_inactive: "#c5cae9",
    color_light_track_value: "#f50057",
    color_light_thumb_on: "#f50057"
  });

  return [{
    name: "No options (range 0-100, steps rounded to 1)",
    interactive: true,
    component: onChange({ h: h, Slider: Slider$$1, attrs: {} })
  }, {
    name: "Option: step (0), defaultValue (50)",
    interactive: true,
    component: onChange({ h: h, Slider: Slider$$1, attrs: {
        step: 0,
        defaultValue: 50
      } })
  }, {
    name: "Option: min (-1), max (1), step (0.1)",
    interactive: true,
    component: onChange({ h: h, Slider: Slider$$1, attrs: {
        min: -1,
        max: 1,
        step: 0.1
      } })
  }, {
    name: "Use left value for extra \"unspecified value\" step",
    interactive: true,
    component: onChange({
      h: h,
      Slider: Slider$$1,
      attrs: {
        min: -1,
        max: 100,
        defaultValue: -1
      },
      displayFn: function displayFn(value) {
        return value === undefined || value === -1 ? "Age (not set)" : "Age: " + Math.floor(value * 100) / 100;
      }
    })
  }, {
    name: "Option: ticks, step (10)",
    interactive: true,
    component: onChange({
      h: h,
      Slider: Slider$$1,
      attrs: {
        min: 0,
        max: 100,
        step: 10,
        ticks: true
      }
    })
  }, {
    name: "Option: ticks with pin",
    interactive: true,
    component: Slider$$1,
    attrs: {
      min: 0,
      max: 100,
      step: 10,
      defaultValue: 2,
      pin: true,
      ticks: true
    }
  }, {
    name: "Option: interactiveTrack (false)",
    interactive: true,
    component: Slider$$1,
    attrs: {
      interactiveTrack: false
    }
  }, {
    name: "Option: style (colors)",
    interactive: true,
    component: Slider$$1,
    attrs: {
      style: {
        color: "red"
      },
      min: 0,
      max: 100,
      defaultValue: 50
    }
  }, {
    name: "Option: icon (custom svg)",
    interactive: true,
    component: Slider$$1,
    attrs: {
      min: 0,
      max: 100,
      defaultValue: 50,
      icon: h(Icon$$1, {
        svg: bullsEyeIcon
      }),
      className: "slider-custom-icon"
    }
  }, {
    name: "Themed slider (colors)",
    interactive: true,
    component: Slider$$1,
    attrs: {
      min: 0,
      max: 100,
      defaultValue: 50,
      className: "slider-custom-color"
    }
  }, {
    name: "With icons",
    interactive: true,
    component: VolumeSlider
  }, {
    name: "With icon, pin and ticks",
    interactive: true,
    component: Slider$$1,
    attrs: {
      min: 0,
      max: 100,
      step: 10,
      defaultValue: 2,
      pin: true,
      ticks: true,
      before: h(Icon$$1, {
        svg: volumeIcon
      })
    }
  }, {
    name: "Option: disabled",
    interactive: true,
    component: Slider$$1,
    attrs: {
      disabled: true,
      value: 50
    }
  }];
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var labelWidth = 24;
var trackWidth = 164;
var inputWidth = 32;

var styles$1 = [{
  " .rgb-slider": {
    " .result": {
      width: "100%",
      height: "100px",
      marginBottom: "10px"
    },
    " .pe-header": {
      fontSize: "14px",
      color: rgba(vars.color_light_foreground, vars.blend_light_text_secondary)
    },
    " .pe-slider": {
      color: "#009688",
      marginTop: "0 !important",
      marginBottom: "0 !important",

      " .pe-slider__label": {
        width: labelWidth + "px"
      },
      " .pe-slider__track": {
        width: trackWidth + "px"
      }
    },
    " .pe-textfield": {
      color: "#009688",
      width: inputWidth + "px",
      paddingBottom: 0,

      " .pe-textfield__input": {
        textAlign: "center"
      }
    }
  }
}];

styler.add("polythene-test-slider-rgb", styles$1);

var colorSlider = function colorSlider(_ref) {
  var h = _ref.h,
      k = _ref.k,
      Slider$$1 = _ref.Slider,
      TextField$$1 = _ref.TextField;

  return {
    oninit: function oninit(vnode) {
      var attrs = vnode.attrs;
      var value = stream(attrs.defaultValue);
      value.map(function (newValue) {
        return attrs.onUpdateValue(newValue);
      });
      vnode.state = {
        value: value
      };
    },
    view: function view(vnode) {
      var _h;

      var state = vnode.state;
      var attrs = vnode.attrs;
      var value = state.value();
      return h(Slider$$1, {
        min: 0,
        max: 255,
        value: value,
        onChange: function onChange(_ref2) {
          var value = _ref2.value;
          return state.value(value);
        },
        before: h(".pe-slider__label", attrs.label),
        after: h(TextField$$1, (_h = {
          type: "number",
          hideSpinner: true,
          value: value,
          onChange: function onChange(_ref3) {
            var value = _ref3.value;
            return state.value(value);
          }
        }, _defineProperty(_h, k.maxlength, 3), _defineProperty(_h, "min", 0), _defineProperty(_h, "max", 255), _defineProperty(_h, "hideValidation", true), _h))
      });
    }
  };
};

var rgbSlider = (function (_ref4) {
  var h = _ref4.h,
      k = _ref4.k,
      Slider$$1 = _ref4.Slider,
      TextField$$1 = _ref4.TextField;

  var ColorSlider = colorSlider({ h: h, k: k, Slider: Slider$$1, TextField: TextField$$1 });

  return {
    oninit: function oninit(vnode) {
      var red = stream(127);
      var green = stream(127);
      var blue = stream(127);

      var rgb = stream.merge([red, green, blue]).map(function (values) {
        return values.join(",");
      });
      vnode.state = {
        red: red,
        green: green,
        blue: blue,
        rgb: rgb
      };
    },
    view: function view(vnode) {
      var state = vnode.state;
      return h(".rgb-slider", [h(".result", {
        style: { backgroundColor: "rgb(" + state.rgb() + ")" }
      }), h(ColorSlider, { defaultValue: state.red(), onUpdateValue: function onUpdateValue(value) {
          return state.red(value);
        }, label: "R" }), h(ColorSlider, { defaultValue: state.green(), onUpdateValue: function onUpdateValue(value) {
          return state.green(value);
        }, label: "G" }), h(ColorSlider, { defaultValue: state.blue(), onUpdateValue: function onUpdateValue(value) {
          return state.blue(value);
        }, label: "B" })]);
    }
  };
});

var mithrilTests = function mithrilTests(_ref) {
  var Slider$$1 = _ref.Slider,
      Icon$$1 = _ref.Icon,
      TextField$$1 = _ref.TextField,
      k = _ref.keys,
      h = _ref.renderer;


  var RGBSlider = rgbSlider({ Slider: Slider$$1, Icon: Icon$$1, TextField: TextField$$1, h: h, k: k });

  return [{
    section: "Mithril specific tests"
  }, {
    name: "With an editable numeric value",
    interactive: true,
    component: RGBSlider
  }];
};

var testsMithril = [].concat(genericTests({ Slider: Slider, Icon: Icon, TextField: TextField, renderer: renderer, keys: keys })).concat(mithrilTests({ Slider: Slider, Icon: Icon, TextField: TextField, renderer: renderer, keys: keys }));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var labelWidth$1 = 24;
var trackWidth$1 = 164;
var inputWidth$1 = 32;

var styles$2 = [{
  " .rgb-slider": {
    " .result": {
      width: "100%",
      height: "100px",
      marginBottom: "10px"
    },
    " .pe-header": {
      fontSize: "14px",
      color: rgba(vars.color_light_foreground, vars.blend_light_text_secondary)
    },
    " .pe-slider": {
      color: "#009688",
      marginTop: "0 !important",
      marginBottom: "0 !important",

      " .pe-slider__label": {
        width: labelWidth$1 + "px"
      },
      " .pe-slider__track": {
        width: trackWidth$1 + "px"
      }
    },
    " .pe-textfield": {
      color: "#009688",
      width: inputWidth$1 + "px",
      paddingBottom: 0,

      " .pe-textfield__input": {
        textAlign: "center"
      }
    }
  }
}];

styler.add("polythene-test-slider-rgb", styles$2);

var ColorSlider = function (_Component) {
  _inherits(ColorSlider, _Component);

  function ColorSlider(props) {
    _classCallCheck(this, ColorSlider);

    var _this = _possibleConstructorReturn(this, (ColorSlider.__proto__ || Object.getPrototypeOf(ColorSlider)).call(this, props));

    _this.state = {
      value: _this.props.defaultValue || 0
    };
    _this.update = _this.update.bind(_this);
    return _this;
  }

  _createClass(ColorSlider, [{
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
    key: "update",
    value: function update(_ref) {
      var value = _ref.value;

      if (this._mounted) {
        this.setState({ value: value });
        this.props.onChange({ value: value });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var value = this.state.value;
      return React.createElement(Slider$1, {
        min: 0,
        max: 255,
        value: value,
        onChange: this.update,
        before: React.createElement(
          "div",
          { className: ".pe-slider__label" },
          this.props.label
        ),
        after: React.createElement(TextField$1, {
          type: "number",
          hideSpinner: true,
          value: value,
          onChange: function onChange(_ref2) {
            var value = _ref2.value;
            return _this2.setState({ value: value });
          },
          maxLength: 3,
          min: 0,
          max: 255,
          hideValidation: true
        })
      });
    }
  }]);

  return ColorSlider;
}(Component);

var RGBSlider = function (_Component2) {
  _inherits(RGBSlider, _Component2);

  function RGBSlider(props) {
    _classCallCheck(this, RGBSlider);

    var _this3 = _possibleConstructorReturn(this, (RGBSlider.__proto__ || Object.getPrototypeOf(RGBSlider)).call(this, props));

    _this3.state = {
      red: 127,
      green: 127,
      blue: 127
    };
    _this3.update = _this3.update.bind(_this3);
    return _this3;
  }

  _createClass(RGBSlider, [{
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
    key: "update",
    value: function update(_ref3) {
      var key = _ref3.key,
          value = _ref3.value;

      if (this._mounted) {
        this.setState(_defineProperty$1({}, key, value));
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement(
        "div",
        { className: "rgb-slider" },
        React.createElement("div", { className: "result", style: { backgroundColor: "rgb(" + this.state.red + "," + this.state.green + "," + this.state.blue + ")" } }),
        React.createElement(ColorSlider, {
          defaultValue: this.state.red,
          onChange: function onChange(_ref4) {
            var value = _ref4.value;
            return _this4.update({ key: "red", value: value });
          },
          label: "R"
        }),
        React.createElement(ColorSlider, {
          defaultValue: this.state.green,
          onChange: function onChange(_ref5) {
            var value = _ref5.value;
            return _this4.update({ key: "green", value: value });
          },
          label: "G"
        }),
        React.createElement(ColorSlider, {
          defaultValue: this.state.blue,
          onChange: function onChange(_ref6) {
            var value = _ref6.value;
            return _this4.update({ key: "blue", value: value });
          },
          label: "B"
        })
      );
    }
  }]);

  return RGBSlider;
}(Component);

var reactTests = function reactTests(_ref) {
  var Slider$$1 = _ref.Slider,
      h = _ref.renderer,
      k = _ref.keys;
  // eslint-disable-line no-unused-vars

  return [{
    section: "React JSX tests"
  }, {
    name: "Option: ticks with pin (JSX)",
    interactive: true,
    component: function component() {
      return React.createElement(Slider$$1, {
        min: 0,
        max: 100,
        step: 10,
        defaultValue: 50,
        pin: true,
        ticks: true
      });
    }
  }, {
    name: "With an editable numeric value (JSX)",
    interactive: true,
    component: function component() {
      return React.createElement(RGBSlider, null);
    }
  }];
};

var testsReact = [].concat(genericTests({ Slider: Slider$1, Icon: Icon$1, TextField: TextField$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ Slider: Slider$1, Icon: Icon$1, TextField: TextField$1, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
