import { RaisedButton, TextField, keys, renderer } from 'polythene-mithril';
import React from 'react';
import { RaisedButton as RaisedButton$1, TextField as TextField$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';

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

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var focus = (function (_ref) {
  var h = _ref.h,
      k = _ref.k,
      TextField$$1 = _ref.TextField,
      RaisedButton$$1 = _ref.RaisedButton;
  return {
    oninit: function oninit(vnode) {
      var hasFocus = stream(false);
      vnode.state = {
        hasFocus: hasFocus,
        redrawOnUpdate: stream.merge([hasFocus])
      };
    },
    view: function view(vnode) {
      var state = vnode.state;
      var hasFocus = state.hasFocus();
      return h("div", [h(TextField$$1, {
        label: "Your name",
        focus: hasFocus,
        onChange: function onChange(newState) {
          return state.hasFocus(newState.focus);
        }
      }), h(RaisedButton$$1, {
        label: "Give focus",
        events: _defineProperty$1({}, k.onclick, function () {
          return state.hasFocus(true);
        })
      })]);
    }
  };
});

var onChange = (function (_ref) {
  var h = _ref.h,
      TextField$$1 = _ref.TextField;
  return {
    oninit: function oninit(vnode) {
      var textfieldState = stream({});
      var value = stream("");
      value.map(function (v) {
        if (textfieldState().el) {
          textfieldState().el.value = v;
        }
      });
      vnode.state = {
        textfieldState: textfieldState,
        value: value,
        redrawOnUpdate: stream.merge([textfieldState, value])
      };
    },
    view: function view(vnode) {
      var state = vnode.state;
      return h("div", [h(TextField$$1, {
        onChange: state.textfieldState,
        counter: 6,
        error: "You have exceeded the maximum number of characters."
      }), h("div", { style: { margin: "10px 0" } }, [h("div", { key: "focus" }, "focus: " + state.textfieldState().focus), h("div", { key: "dirty" }, "dirty: " + state.textfieldState().dirty), h("div", { key: "invalid" }, "invalid: " + state.textfieldState().invalid)])]);
    }
  };
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var setValue = (function (_ref) {
  var h = _ref.h,
      k = _ref.k,
      TextField$$1 = _ref.TextField,
      RaisedButton$$1 = _ref.RaisedButton;
  return {
    oninit: function oninit(vnode) {
      var value = stream("");
      var focus = stream(false);
      vnode.state = {
        value: value,
        focus: focus,
        redrawOnUpdate: stream.merge([value]) // for React
      };
    },
    view: function view(vnode) {
      var state = vnode.state;
      var value = state.value();
      var focus = state.focus();
      return h("div", [h(TextField$$1, {
        help: "Type text, or press ARROW RIGHT to insert a character programmaticaly",
        onChange: function onChange(_ref2) {
          var value = _ref2.value,
              focus = _ref2.focus;
          return state.value(value), state.focus(focus);
        },
        events: _defineProperty$2({}, k.onkeydown, function (e) {
          if (e.key === "ArrowRight") {
            state.value(value + String.fromCharCode(97 + Math.floor(Math.random() * 26)));
          }
        }),
        value: value,
        focus: focus
      }), h(RaisedButton$$1, {
        label: "Clear",
        events: _defineProperty$2({}, k.onclick, function () {
          return state.value(""), state.focus(true);
        })
      })]);
    }
  };
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var genericTests = (function (_ref) {
  var TextField$$1 = _ref.TextField,
      RaisedButton$$1 = _ref.RaisedButton,
      h = _ref.renderer,
      k = _ref.keys;


  var block = function block(test) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return h("div", {
      style: _extends$1({}, attrs.dark ? null : { background: "#fff" }, attrs.fullWidth ? null : { padding: "10px 15px" })
    }, test);
  };

  TextField$$1.theme(".tests-textfield-themed-textfield", {
    color_light_input_text: "#0D47A1",
    color_light_input_background: "#BBDEFB",
    color_light_focus_border: "#0D47A1",
    input_padding_h: 12
  });

  var ipsum = "Lorem ipsum dolor sit amet, idque signiferumque at usu, eum recusabo aliquando id. Deleniti percipitur concludaturque eu eos. Vix elitr feugait ne. Mel agam integre eu, has minim aliquid salutandi eu. Est nusquam abhorreant ne. Ei wisi dicant eam, vix tota reque persequeris an. Quo in theophrastus reprehendunt, ius te graecis epicuri volutpat.";
  var shortIpsum = "Lorem ipsum dolor sit amet,";
  var Focus = focus({ h: h, k: k, TextField: TextField$$1, RaisedButton: RaisedButton$$1 });
  var OnChange = onChange({ h: h, k: k, TextField: TextField$$1, RaisedButton: RaisedButton$$1 });
  var SetValue = setValue({ h: h, k: k, TextField: TextField$$1, RaisedButton: RaisedButton$$1 });

  return [{
    name: "Option: defaultValue",
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          defaultValue: "Text A",
          key: "a" // for React
        }), h(TextField$$1, {
          defaultValue: "Text B",
          key: "b" // for React
        })]);
      }
    }
  }, {
    name: "Option: autofocus",
    component: {
      view: function view() {
        return block([h(TextField$$1, _defineProperty({}, k.autofocus, true))]);
      }
    }
  }, {
    name: "Option: type (password, number, email)",
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          type: "password",
          defaultValue: "123456",
          key: "a" // for React
        }), h(TextField$$1, {
          type: "number",
          defaultValue: "123456",
          key: "b" // for React
        }), h(TextField$$1, {
          type: "email",
          defaultValue: "a@b.com",
          key: "c" // for React
        })]);
      }
    }
  }, {
    name: "Option: label",
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Your Name"
        })]);
      }
    }
  }, {
    name: "Option: floatingLabel",
    interactive: true,
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Your name",
          floatingLabel: true,
          key: "a" // for React
        }), h(TextField$$1, {
          label: "Your email",
          floatingLabel: true,
          key: "b" // for React
        }), h(TextField$$1, {
          label: "Your address",
          floatingLabel: true,
          key: "c" // for React
        })]);
      }
    }
  }, {
    name: "Option: floatingLabel, dense",
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Your name",
          floatingLabel: true,
          dense: true,
          key: "a" // for React
        }), h(TextField$$1, {
          label: "Your email",
          floatingLabel: true,
          dense: true,
          key: "b" // for React
        }), h(TextField$$1, {
          label: "Your address",
          floatingLabel: true,
          dense: true,
          key: "c" // for React
        })]);
      }
    }
  }, {
    name: "Option: help",
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Your Name",
          help: "Enter the name as written on the credit card"
        })]);
      }
    }
  }, {
    name: "Option: focusHelp",
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Your Name",
          help: "Enter the name as written on the credit card",
          focusHelp: true
        })]);
      }
    }
  }, {
    name: "Option: fullWidth",
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Your name",
          fullWidth: true,
          key: "a" // for React
        }), h(TextField$$1, {
          label: "Your email",
          fullWidth: true,
          key: "b" // for React
        }), h(TextField$$1, {
          label: "Your address",
          fullWidth: true,
          key: "c" // for React
        })], { fullWidth: true });
      }
    }
  }, {
    name: "Option: multiLine",
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Label in multi-line input",
          multiLine: true,
          rows: 2,
          key: "a" // for React
        }), h(TextField$$1, {
          label: "Floating label in multi-line input",
          floatingLabel: true,
          multiLine: true,
          rows: 2,
          key: "b" // for React
        }), h(TextField$$1, {
          defaultValue: "4 rows: " + ipsum,
          multiLine: true,
          rows: 4,
          key: "c" // for React
        })]);
      }
    }
  }, {
    name: "Option: required",
    interactive: true,
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Your name",
          help: "Enter the name as written on the credit card",
          required: true
        })]);
      }
    }
  }, {
    name: "Option: required, hideValidation",
    interactive: true,
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Your name",
          help: "Enter the name as written on the credit card",
          required: true,
          hideValidation: true
        })]);
      }
    }
  }, {
    name: "Option: required, floatingLabel",
    interactive: true,
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Your name",
          floatingLabel: true,
          help: "Enter the name as written on the credit card",
          required: true
        })]);
      }
    }
  }, {
    name: "Option: required, floatingLabel, requiredIndicator (string)",
    interactive: true,
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Your name",
          floatingLabel: true,
          help: "Enter the name as written on the credit card",
          required: true,
          requiredIndicator: "(required)"
        })]);
      }
    }
  }, {
    name: "Option: required, floatingLabel, requiredIndicator (element)",
    interactive: true,
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Your name",
          floatingLabel: true,
          help: "Enter the name as written on the credit card",
          required: true,
          requiredIndicator: h("span", { style: { color: "#333" } }, "this field is required")
        })]);
      }
    }
  }, {
    name: "Option: optionalIndicator (string)",
    interactive: true,
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Your name",
          floatingLabel: true,
          optionalIndicator: "(optional)"
        })]);
      }
    }
  }, {
    name: "Option: optionalIndicator (element)",
    interactive: true,
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Your name",
          floatingLabel: true,
          optionalIndicator: h("span", { style: { color: "#333" } }, "this field is optional")
        })]);
      }
    }
  }, {
    name: "Option: required, floatingLabel, empty requiredIndicator",
    interactive: true,
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Floating label",
          floatingLabel: true,
          help: "This required field does not show a *",
          error: "Please enter your name",
          focusHelp: true,
          required: true,
          requiredIndicator: ""
        })]);
      }
    }
  }, {
    name: "Option: " + [k.maxlength],
    interactive: true,
    component: {
      view: function view() {
        var _h2;

        return block([h(TextField$$1, (_h2 = {
          defaultValue: "123"
        }, _defineProperty(_h2, k.maxlength, 3), _defineProperty(_h2, "error", "Enter max 3 characters"), _h2))]);
      }
    }
  }, {
    name: "Option: min, max",
    interactive: true,
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          type: "number",
          min: 3,
          max: 8,
          defaultValue: 10,
          error: "Enter a value between 3 and 8",
          required: true
        })]);
      }
    }
  }, {
    name: "Option: type email, required",
    interactive: true,
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Email",
          type: "email",
          defaultValue: "a@",
          required: true,
          error: "Enter a valid email address"
        })]);
      }
    }
  }, {
    name: "Option: pattern [0-9]+, validateAtStart",
    interactive: true,
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Number",
          type: "text",
          defaultValue: "abc",
          pattern: "[0-9]+",
          validateAtStart: true
        })]);
      }
    }
  }, {
    name: "Custom validation (only use lowercase characters)",
    interactive: true,
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          defaultValue: "abC",
          validate: function validate(value) {
            return value !== value.toLowerCase() ? {
              valid: false,
              error: "Only use lowercase characters."
            } : null;
          },
          validateAtStart: true
        })]);
      }
    }
  }, {
    name: "Option: counter",
    interactive: true,
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Description",
          floatingLabel: true,
          defaultValue: shortIpsum,
          counter: 30,
          error: "You have exceeded the maximum number of characters."
        })]);
      }
    }
  }, {
    name: "Option: counter, " + [k.maxlength],
    interactive: true,
    component: {
      view: function view() {
        return block([h(TextField$$1, _defineProperty({
          label: "Description",
          floatingLabel: true,
          defaultValue: shortIpsum,
          counter: 30
        }, k.maxlength, 30))]);
      }
    }
  }, {
    name: "Give focus",
    interactive: true,
    component: {
      view: function view() {
        return block(h(Focus));
      }
    }
  }, {
    name: "Option: onChange",
    interactive: true,
    component: {
      view: function view() {
        return block(h(OnChange));
      }
    }
  }, {
    name: "Set value",
    interactive: true,
    component: {
      view: function view() {
        return block(h(SetValue));
      }
    }
  }, {
    name: "Option: disabled (label)",
    component: {
      view: function view() {
        return block(h(TextField$$1, {
          label: "Your name",
          disabled: true
        }));
      }
    }
  }, {
    name: "Option: disabled (input)",
    component: {
      view: function view() {
        return block(h(TextField$$1, {
          defaultValue: "John",
          disabled: true
        }));
      }
    }
  }, {
    name: "Option: " + [k.readonly],
    component: {
      view: function view() {
        return block(h(TextField$$1, _defineProperty({
          defaultValue: "John"
        }, k.readonly, true)));
      }
    }
  }, {
    name: "Themed",
    component: {
      view: function view() {
        return h(TextField$$1, {
          label: "Your name",
          className: "tests-textfield-themed-textfield"
        });
      }
    }
  }, {
    name: "Option: style",
    component: {
      view: function view() {
        return h(TextField$$1, {
          label: "Your name",
          style: {
            background: "#2196F3"
          }
        });
      }
    }
  },

  /* Dark tone */

  {
    name: "Option: label -- dark theme class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return block(h(TextField$$1, {
          label: "Your Name"
        }), { dark: true });
      }
    }
  }, {
    name: "Option: floatingLabel -- dark theme class",
    interactive: true,
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return block([h(TextField$$1, {
          label: "Your name",
          floatingLabel: true,
          key: "a" // for React
        }), h(TextField$$1, {
          label: "Your email",
          floatingLabel: true,
          key: "b" // for React
        }), h(TextField$$1, {
          label: "Your address",
          floatingLabel: true,
          key: "c" // for React
        })], { dark: true });
      }
    }
  }, {
    name: "Option: type email, required -- dark theme class",
    interactive: true,
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return block(h(TextField$$1, {
          label: "Email",
          type: "email",
          defaultValue: "a@",
          required: true,
          error: "Enter a valid email address"
        }), { dark: true });
      }
    }
  }, {
    name: "Option: disabled (input) -- dark theme class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return block(h(TextField$$1, {
          defaultValue: "John",
          disabled: true
        }), { dark: true });
      }
    }
  }, {
    name: "Option: readonly -- dark theme class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return block(h(TextField$$1, {
          defaultValue: "John",
          readonly: true
        }), { dark: true });
      }
    }
  }, {
    name: "Dark tone class + light theme class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return block(h(TextField$$1, {
          label: "Your Name",
          className: "pe-light-tone"
        }));
      }
    }
  }, {
    name: "Dark tone class + light tone",
    className: "test-dark-tone",
    component: {
      view: function view() {
        return block(h(TextField$$1, {
          label: "Your Name",
          tone: "light"
        }));
      }
    }
  }];
});

var setValue$1 = (function (_ref) {
  var h = _ref.h,
      TextField$$1 = _ref.TextField,
      RaisedButton$$1 = _ref.RaisedButton;
  return {
    oninit: function oninit(vnode) {
      var value = stream("");
      vnode.state = {
        value: value
      };
    },
    view: function view(vnode) {
      var state = vnode.state;
      var value = state.value();
      return h("div", [h(TextField$$1, {
        help: "Type text, or press ARROW RIGHT to insert a character programmaticaly",
        events: {
          oninput: h.withAttr("value", function (value) {
            return state.value(value);
          }),
          onkeydown: function onkeydown(e) {
            if (e.key === "ArrowRight") {
              state.value(value + String.fromCharCode(97 + Math.floor(Math.random() * 26)));
            }
          }
        },
        value: value
      }), h(RaisedButton$$1, {
        label: "Clear",
        events: {
          onclick: function onclick() {
            return state.value("");
          }
        }
      })]);
    }
  };
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var mithrilTests = function mithrilTests(_ref) {
  var TextField$$1 = _ref.TextField,
      RaisedButton$$1 = _ref.RaisedButton,
      h = _ref.renderer;


  var block = function block(test) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return h("div", {
      style: _extends({}, attrs.dark ? null : { background: "#fff" }, attrs.fullWidth ? null : { padding: "10px 15px" })
    }, test);
  };

  var SetValue = setValue$1({ h: h, TextField: TextField$$1, RaisedButton: RaisedButton$$1 });

  return [{
    section: "Mithril specific tests (variation with withAttr)"
  }, {
    name: "Set value",
    interactive: true,
    component: {
      view: function view() {
        return block(h(SetValue));
      }
    }
  }];
};

var testsMithril = [].concat(genericTests({ TextField: TextField, RaisedButton: RaisedButton, renderer: renderer, keys: keys })).concat(mithrilTests({ TextField: TextField, RaisedButton: RaisedButton, renderer: renderer, keys: keys }));

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var reactTests = function reactTests(_ref) {
  var TextField$$1 = _ref.TextField,
      RaisedButton$$1 = _ref.RaisedButton,
      h = _ref.renderer;
  // eslint-disable-line no-unused-vars

  var block = function block(test) {
    var attrs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return React.createElement(
      "div",
      {
        style: _extends$2({}, attrs.dark ? null : { background: "#fff" }, attrs.fullWidth ? null : { padding: "10px 15px" })
      },
      test
    );
  };

  return [{
    section: "React JSX tests"
  }, {
    name: "Option: value (JSX)",
    component: function component() {
      return block([React.createElement(TextField$$1, {
        type: "password",
        defaultValue: "123456",
        key: "a"
      }), React.createElement(TextField$$1, {
        type: "number",
        defaultValue: "123456",
        key: "b"
      }), React.createElement(TextField$$1, {
        type: "email",
        defaultValue: "a@b.com",
        key: "c"
      })]);
    }
  }, {
    name: "Option: counter, floatingLabel (JSX)",
    interactive: true,
    component: function component() {
      return block([React.createElement(TextField$$1, {
        label: "Description",
        floatingLabel: true,
        counter: 15,
        error: "You have exceeded the maximum number of characters.",
        key: "x"
      })]);
    }
  }];
};

var testsReact = [].concat(genericTests({ TextField: TextField$1, RaisedButton: RaisedButton$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ TextField: TextField$1, RaisedButton: RaisedButton$1, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
