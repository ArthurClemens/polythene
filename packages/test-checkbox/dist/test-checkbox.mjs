import { Checkbox, RaisedButton, keys, renderer } from 'polythene-mithril';
import React, { Component } from 'react';
import { Checkbox as Checkbox$1, RaisedButton as RaisedButton$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';

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

var onChange = (function (_ref) {
  var h = _ref.h,
      Checkbox$$1 = _ref.Checkbox;
  return {
    oninit: function oninit(vnode) {
      var checked = stream(false);
      vnode.state = {
        checked: checked,
        redrawOnUpdate: stream.merge([checked]) // for React
      };
    },
    view: function view(vnode) {
      var state = vnode.state;
      var checked = state.checked();
      return h("div", [h("div", {
        style: {
          marginBottom: "1rem"
        }
      }, "Checked: " + checked), h(Checkbox$$1, {
        onChange: function onChange(newState) {
          return state.checked(newState.checked);
        },
        checked: checked
      })]);
    }
  };
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var events = (function (_ref) {
  var h = _ref.h,
      k = _ref.k,
      Checkbox$$1 = _ref.Checkbox;
  return {
    oninit: function oninit(vnode) {
      var checked = stream(false);
      vnode.state = {
        checked: checked,
        redrawOnUpdate: stream.merge([checked]) // for React
      };
    },
    view: function view(vnode) {
      var state = vnode.state;
      var checked = state.checked();
      return h("div", [h("div", {
        style: {
          marginBottom: "1rem"
        }
      }, "Checked: " + checked), h(Checkbox$$1, {
        events: _defineProperty({}, k.onclick, function () {
          return state.checked(!checked);
        }),
        checked: checked
      })]);
    }
  };
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var toggleButton = (function (_ref) {
  var h = _ref.h,
      k = _ref.k,
      RaisedButton$$1 = _ref.RaisedButton,
      Checkbox$$1 = _ref.Checkbox;
  return {
    oninit: function oninit(vnode) {
      var checked = stream(false);
      vnode.state = {
        checked: checked,
        redrawOnUpdate: stream.merge([checked])
      };
    },
    view: function view(vnode) {
      var state = vnode.state;
      var checked = state.checked();
      return h("div", [h(Checkbox$$1, {
        label: "Label",
        onChange: function onChange(newState) {
          return state.checked(newState.checked);
        },
        checked: checked
      }), h("div", {
        style: {
          marginTop: "1rem"
        }
      }, h(RaisedButton$$1, {
        label: "Toggle",
        events: _defineProperty$1({}, k.onclick, function () {
          return state.checked(!checked);
        })
      }))]);
    }
  };
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var iconStarOutlineSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 11.9994,15.3943L 8.2364,17.6643L 9.2314,13.3833L 5.9094,10.5053L 10.2894,10.1293L 11.9994,6.09327L 13.7094,10.1293L 18.0894,10.5053L 14.7674,13.3833L 15.7624,17.6643M 21.9994,9.24227L 14.8084,8.62526L 11.9994,1.99827L 9.1904,8.62526L 1.9994,9.24227L 7.4544,13.9693L 5.8194,20.9983L 11.9994,17.2703L 18.1794,20.9983L 16.5444,13.9693L 21.9994,9.24227 Z \"/></svg>";

var iconStarFilledSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>";

var genericTests = (function (_ref) {
  var Checkbox$$1 = _ref.Checkbox,
      RaisedButton$$1 = _ref.RaisedButton,
      h = _ref.renderer,
      k = _ref.keys;


  var trustedIconStarsOutline = h.trust(iconStarOutlineSVG);
  var trustedIconStarFilled = h.trust(iconStarFilledSVG);

  Checkbox$$1.theme(".tests-checkbox-themed-checkbox", {
    label_font_size: 28,
    color_light_on: "#2196F3",
    color_light_off: "#2196F3",
    color_dark_on: "#2196F3",
    color_dark_off: "#2196F3",
    color_light_label: "#2196F3",
    color_dark_label: "#2196F3"
  });

  var sizeNames = ["small", "regular", "medium", "large"];

  var sizes = function sizes(_sizes, attrs) {
    return _sizes.map(function (size) {
      return h(Checkbox$$1, _extends({}, attrs, {
        label: size,
        size: size
      }));
    });
  };

  return [{
    name: "Option: label",
    component: Checkbox$$1,
    attrs: {
      label: "Label"
    }
  }, {
    name: "Option: defaultChecked",
    component: Checkbox$$1,
    attrs: {
      defaultChecked: true
    }
  }, {
    name: "Option: size",
    component: {
      view: function view() {
        return h("div", {
          style: {
            display: "flex",
            alignItems: "center"
          }
        }, sizes(sizeNames, {
          label: "Label"
        }));
      }
    }
  }, {
    name: "Themed Checkbox (color and font size)",
    component: Checkbox$$1,
    attrs: {
      label: "Label",
      className: "tests-checkbox-themed-checkbox"
    }
  }, {
    name: "Option: iconOn, iconOff (custom icon)",
    component: {
      view: function view() {
        return h("div", {
          style: {
            display: "flex",
            alignItems: "center"
          }
        }, sizes(sizeNames, {
          label: "Label",
          iconOn: {
            svg: trustedIconStarFilled
          },
          iconOff: {
            svg: trustedIconStarsOutline
          }
        }));
      }
    }
  }, {
    name: "Option: disabled",
    interactive: true,
    component: {
      view: function view() {
        return h("div", [h(Checkbox$$1, {
          disabled: true,
          label: "Off"
        }), h(Checkbox$$1, {
          disabled: true,
          defaultChecked: true,
          label: "On"
        })]);
      }
    }
  }, {
    name: "Option: selectable",
    interactive: true,
    component: {
      view: function view() {
        return h("div", [h(Checkbox$$1, {
          selectable: function selectable() {
            return false;
          },
          label: "Never"
        }), h(Checkbox$$1, {
          selectable: function selectable(checked) {
            return !checked;
          },
          label: "Only when unchecked"
        })]);
      }
    }
  }, {
    name: "Option: iconButton (custom hover behaviour)",
    interactive: true,
    component: Checkbox$$1,
    attrs: {
      iconButton: {
        wash: true,
        ink: false
      }
    }
  }, {
    name: "Option: onChange",
    interactive: true,
    exclude: true,
    component: onChange({ h: h, Checkbox: Checkbox$$1 })
  }, {
    name: "Option: events",
    interactive: true,
    exclude: true,
    component: events({ h: h, k: k, Checkbox: Checkbox$$1 })
  }, {
    name: "Setting the checked state",
    interactive: true,
    exclude: true,
    component: toggleButton({ h: h, k: k, RaisedButton: RaisedButton$$1, Checkbox: Checkbox$$1 })
  },

  // Dark tone

  {
    name: "Option: defaultChecked -- dark tone class",
    className: "pe-dark-tone",
    component: Checkbox$$1,
    attrs: {
      defaultChecked: true
    }
  }, {
    name: "Themed Checkbox (colors) -- dark tone class",
    className: "pe-dark-tone",
    component: Checkbox$$1,
    attrs: {
      label: "Label",
      className: "tests-checkbox-themed-checkbox"
    }
  }, {
    name: "Option: disabled -- dark tone class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return h("div", [h(Checkbox$$1, {
          disabled: true,
          label: "Off"
        }), h(Checkbox$$1, {
          disabled: true,
          defaultChecked: true,
          label: "On"
        })]);
      }
    }
  }, {
    name: "Dark tone class + light tone class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return h("div", {
          style: {
            background: "#fff",
            padding: "20px"
          },
          className: "pe-light-tone"
        }, h(Checkbox$$1, {
          label: "Label"
        }));
      }
    }
  }, {
    name: "Dark tone class + light tone",
    className: "test-dark-tone",
    component: {
      view: function view() {
        return h("div", {
          style: {
            background: "#fff",
            padding: "20px"
          }
        }, h(Checkbox$$1, {
          tone: "light",
          label: "Label"
        }));
      }
    }
  }];
});

var mithrilTests = function mithrilTests() {
  return [];
};

var testsMithril = [].concat(genericTests({ Checkbox: Checkbox, RaisedButton: RaisedButton, renderer: renderer, keys: keys })).concat(mithrilTests({ Checkbox: Checkbox, RaisedButton: RaisedButton, renderer: renderer, keys: keys }));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleForm = function (_Component) {
  _inherits(SimpleForm, _Component);

  function SimpleForm(props) {
    _classCallCheck(this, SimpleForm);

    var _this = _possibleConstructorReturn(this, (SimpleForm.__proto__ || Object.getPrototypeOf(SimpleForm)).call(this, props));

    _this.state = {
      checked: false
    };
    _this.setCheckedState = _this.setCheckedState.bind(_this);
    _this.toggleState = _this.toggleState.bind(_this);
    return _this;
  }

  _createClass(SimpleForm, [{
    key: "setCheckedState",
    value: function setCheckedState(newState) {
      this.setState({ checked: newState.checked });
    }
  }, {
    key: "toggleState",
    value: function toggleState() {
      this.setState({ checked: !this.state.checked });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(Checkbox$1, {
          label: "Label",
          onChange: this.setCheckedState,
          checked: this.state.checked
        }),
        React.createElement(
          "div",
          {
            style: {
              marginTop: "1rem"
            }
          },
          React.createElement(RaisedButton$1, {
            label: "Toggle",
            events: {
              onClick: this.toggleState
            }
          })
        )
      );
    }
  }]);

  return SimpleForm;
}(Component);

var iconStarOutlineSVG$1 = React.createElement(
  "svg",
  { width: "24", height: "24", viewBox: "0 0 24.00 24.00", enableBackground: "new 0 0 24.00 24.00" },
  React.createElement("path", { fill: "#000000", fillOpacity: "1", strokeWidth: "0.2", strokeLinejoin: "round", d: "M 11.9994,15.3943L 8.2364,17.6643L 9.2314,13.3833L 5.9094,10.5053L 10.2894,10.1293L 11.9994,6.09327L 13.7094,10.1293L 18.0894,10.5053L 14.7674,13.3833L 15.7624,17.6643M 21.9994,9.24227L 14.8084,8.62526L 11.9994,1.99827L 9.1904,8.62526L 1.9994,9.24227L 7.4544,13.9693L 5.8194,20.9983L 11.9994,17.2703L 18.1794,20.9983L 16.5444,13.9693L 21.9994,9.24227 Z " })
);
var iconStarFilledSVG$1 = React.createElement(
  "svg",
  { width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" })
);

var reactTests = function reactTests(_ref) {
  var Checkbox$$1 = _ref.Checkbox,
      h = _ref.renderer;
  // eslint-disable-line no-unused-vars

  return [{
    section: "React JSX tests"
  }, {
    name: "Option: defaultChecked (JSX)",
    component: function component() {
      return React.createElement(Checkbox$$1, {
        label: "Label",
        defaultChecked: true
      });
    }
  }, {
    name: "Option: iconOn, iconOff (custom icon) (JSX)",
    component: function component() {
      return React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center"
          }
        },
        React.createElement(Checkbox$$1, {
          label: "Label",
          iconOff: { svg: iconStarOutlineSVG$1 },
          iconOn: { svg: iconStarFilledSVG$1 }
        })
      );
    }
  }, {
    name: "Setting the checked state (JSX)",
    interactive: true,
    exclude: true,
    component: function component() {
      return React.createElement(SimpleForm, null);
    }
  }];
};

var testsReact = [].concat(genericTests({ Checkbox: Checkbox$1, RaisedButton: RaisedButton$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ Checkbox: Checkbox$1, RaisedButton: RaisedButton$1, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
