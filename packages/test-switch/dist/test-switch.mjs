import { Icon, RaisedButton, Switch, keys, renderer } from 'polythene-mithril';
import React from 'react';
import { Icon as Icon$1, RaisedButton as RaisedButton$1, Switch as Switch$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';

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
      Switch$$1 = _ref.Switch;
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
      return h("div", [h("div", {
        style: {
          marginBottom: "1rem"
        }
      }, "Checked: " + checked), h(Switch$$1, {
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
      Switch$$1 = _ref.Switch;
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
      }, "Checked: " + checked), h(Switch$$1, {
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
      Switch$$1 = _ref.Switch;
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
      return h("div", [h(Switch$$1, {
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

var bullsEyeSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"1.33333\" stroke-linejoin=\"miter\" d=\"M 12,2C 6.47715,2 2,6.4772 2,12C 2,17.5228 6.47715,22 12,22C 17.5228,22 22,17.5228 22,12C 22,6.4772 17.5228,2 12,2 Z M 12,4C 16.4183,4 20,7.5817 20,12C 20,16.4183 16.4183,20 12,20C 7.58172,20 4,16.4183 4,12C 4,7.5817 7.58172,4 12,4 Z M 12,6C 8.68629,6 6,8.6863 6,12C 6,15.3137 8.68629,18 12,18C 15.3137,18 18,15.3137 18,12C 18,8.6863 15.3137,6 12,6 Z M 12,8C 14.2091,8 16,9.7909 16,12C 16,14.2091 14.2091,16 12,16C 9.79086,16 8,14.2091 8,12C 8,9.7909 9.79086,8 12,8 Z M 12,10C 10.8954,10 10,10.8954 10,12C 10,13.1046 10.8954,14 12,14C 13.1046,14 14,13.1046 14,12C 14,10.8954 13.1046,10 12,10 Z \"/></svg>";

var genericTests = (function (_ref) {
  var Switch$$1 = _ref.Switch,
      Icon$$1 = _ref.Icon,
      RaisedButton$$1 = _ref.RaisedButton,
      h = _ref.renderer,
      k = _ref.keys;


  var trustedBullsEyeIcon = h.trust(bullsEyeSVG);

  var orange = "#EF6C00";
  var blue = "#2196F3";
  Switch$$1.theme(".tests-switch-themed-switch", {
    label_font_size: 28,
    color_light_off_label: orange,
    color_light_on_label: blue,
    color_dark_off_label: orange,
    color_dark_on_label: blue,
    color_light_thumb_off: orange,
    color_light_thumb_on: blue,
    color_dark_thumb_off: orange,
    color_dark_thumb_on: blue
  });

  Switch$$1.theme(".tests-switch-themed-icon", {
    color_light_thumb_off: "#fff",
    color_light_thumb_on: "#fff",
    color_light_icon_on: "#EF6C00",
    color_light_icon_off: "#ddd",
    color_dark_thumb_off: "#fff",
    color_dark_thumb_on: "#fff",
    color_dark_icon_on: "#EF6C00",
    color_dark_icon_off: "#fff"
  });

  var sizeNames = ["small", "regular", "medium", "large"];

  var sizes = function sizes(_sizes, attrs) {
    return _sizes.map(function (size) {
      return h(Switch$$1, _extends({}, attrs, {
        label: size,
        size: size
      }));
    });
  };

  return [{
    name: "No options",
    component: Switch$$1
  }, {
    name: "Option: label",
    component: Switch$$1,
    attrs: {
      label: "Label"
    }
  }, {
    name: "Option: checked",
    component: Switch$$1,
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
    name: "Themed Switch (color and font size)",
    component: Switch$$1,
    attrs: {
      label: "Label",
      className: "tests-switch-themed-switch"
    }
  }, {
    name: "Option: style (colors)",
    component: Switch$$1,
    attrs: {
      label: "Label",
      style: {
        color: "#EF6C00"
      }
    }
  }, {
    name: "Option: icon",
    component: {
      view: function view() {
        return h("div", sizes(sizeNames, {
          label: "Label",
          className: "tests-switch-themed-icon",
          icon: h(Icon$$1, {
            svg: trustedBullsEyeIcon
          })
        }));
      }
    }
  }, {
    name: "Option: disabled",
    interactive: true,
    component: {
      view: function view() {
        return h("div", [h(Switch$$1, {
          disabled: true,
          label: "Off"
        }), h(Switch$$1, {
          disabled: true,
          checked: true,
          label: "On"
        })]);
      }
    }
  }, {
    name: "Option: selectable",
    interactive: true,
    component: {
      view: function view() {
        return h("div", [h(Switch$$1, {
          selectable: function selectable() {
            return false;
          },
          label: "Never"
        }), h(Switch$$1, {
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
    component: Switch$$1,
    attrs: {
      iconButton: {
        wash: true,
        ink: false
      }
    }
  }, {
    name: "Option: zOff (0), zOn (2)",
    interactive: true,
    component: Switch$$1,
    attrs: {
      zOff: 0,
      zOn: 2
    }
  }, {
    name: "Option: onChange",
    interactive: true,
    exclude: true,
    component: onChange({ h: h, Switch: Switch$$1 })
  }, {
    name: "Option: events",
    interactive: true,
    exclude: true,
    component: events({ h: h, k: k, Switch: Switch$$1 })
  }, {
    name: "Setting the checked state",
    interactive: true,
    exclude: true,
    component: toggleButton({ h: h, k: k, RaisedButton: RaisedButton$$1, Switch: Switch$$1 })
  },

  // Dark tone

  {
    name: "Option: defaultChecked -- dark tone class",
    className: "pe-dark-tone",
    component: Switch$$1,
    attrs: {
      defaultChecked: true
    }
  }, {
    name: "Themed Switch (colors) -- dark tone class",
    className: "pe-dark-tone",
    component: Switch$$1,
    attrs: {
      label: "Label",
      className: "tests-switch-themed-switch"
    }
  }, {
    name: "Option: disabled -- dark tone class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return h("div", [h(Switch$$1, {
          disabled: true,
          label: "Off"
        }), h(Switch$$1, {
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
        }, h(Switch$$1, {
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
        }, h(Switch$$1, {
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

var testsMithril = [].concat(genericTests({ Switch: Switch, Icon: Icon, RaisedButton: RaisedButton, renderer: renderer, keys: keys })).concat(mithrilTests({ Switch: Switch, Icon: Icon, RaisedButton: RaisedButton, renderer: renderer, keys: keys }));

var reactTests = function reactTests(_ref) {
  var Switch$$1 = _ref.Switch,
      h = _ref.renderer;
  // eslint-disable-line no-unused-vars

  return [{
    section: "React JSX tests"
  }, {
    name: "Option: defaultChecked (JSX)",
    component: function component() {
      return React.createElement(Switch$$1, {
        label: "Label",
        defaultChecked: true
      });
    }
  }];
};

var testsReact = [].concat(genericTests({ Switch: Switch$1, Icon: Icon$1, RaisedButton: RaisedButton$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ Switch: Switch$1, Icon: Icon$1, RaisedButton: RaisedButton$1, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
