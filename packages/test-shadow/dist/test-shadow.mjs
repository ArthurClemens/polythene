import { Shadow, keys, renderer } from 'polythene-mithril';
import React from 'react';
import { Shadow as Shadow$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var interactive = (function (_ref) {
  var h = _ref.h,
      k = _ref.k,
      Shadow$$1 = _ref.Shadow;
  return {
    oninit: function oninit(vnode) {
      var z = stream(1);
      vnode.state = {
        z: z,
        redrawOnUpdate: stream.merge([z])
      };
    },
    view: function view(vnode) {
      var state = vnode.state;
      var z = state.z();
      return h("div", null, [h(".absolute.absolute--fill", _defineProperty({}, k.onclick, function () {
        return state.z((z + 1) % 6);
      }), "Click me"), h(Shadow$$1, {
        animated: true,
        z: state.z
      })]);
    }
  };
});

var genericTests = (function (_ref) {
  var Shadow$$1 = _ref.Shadow,
      h = _ref.renderer,
      k = _ref.keys;

  return [{
    name: "Child node",
    component: Shadow$$1,
    attrs: {},
    children: ["Child"]
  }, {
    name: "Option: content",
    component: Shadow$$1,
    attrs: {
      content: "Content"
    }
  }, {
    name: "Option: z (0)",
    component: Shadow$$1,
    attrs: {
      z: 0
    }
  }, {
    name: "Option: z (1)",
    component: Shadow$$1,
    attrs: {
      z: 1
    }
  }, {
    name: "Option: z (2)",
    component: Shadow$$1,
    attrs: {
      z: 2
    }
  }, {
    name: "Option: z (3)",
    component: Shadow$$1,
    attrs: {
      z: 3
    }
  }, {
    name: "Option: z (4)",
    component: Shadow$$1,
    attrs: {
      z: 4
    }
  }, {
    name: "Option: z (5)",
    component: Shadow$$1,
    attrs: {
      z: 5
    }
  }, {
    name: "Add to an element",
    component: {
      view: function view() {
        return h("div", [h("div", "Some element"), h(Shadow$$1)]);
      }
    }
  }, {
    name: "Interactive option: animated",
    interactive: true,
    exclude: true,
    component: interactive({ h: h, k: k, Shadow: Shadow$$1 })
  },

  // Dark tone

  {
    name: "Interactive option: animated -- dark tone class",
    interactive: true,
    className: "pe-dark-tone",
    component: interactive({ h: h, k: k, Shadow: Shadow$$1 })
  }];
});

var mithrilTests = function mithrilTests() {
  return [];
};

var testsMithril = [].concat(genericTests({ Shadow: Shadow, renderer: renderer, keys: keys })).concat(mithrilTests({ Shadow: Shadow, renderer: renderer, keys: keys }));

var reactTests = function reactTests(_ref) {
  var Shadow$$1 = _ref.Shadow,
      h = _ref.renderer,
      k = _ref.keys;
  // eslint-disable-line no-unused-vars

  return [{
    section: "React JSX tests"
  }, {
    name: "Add to a React element (JSX)",
    component: function component() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          "Some element"
        ),
        React.createElement(Shadow$$1, null)
      );
    }
  }];
};

var testsReact = [].concat(genericTests({ Shadow: Shadow$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ Shadow: Shadow$1, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
