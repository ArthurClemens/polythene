import { Button, DialogPane, keys, renderer } from 'polythene-mithril';
import React from 'react';
import { Button as Button$1, DialogPane as DialogPane$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';

var shortText = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";

var longText = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(function () {
  return shortText;
}).join("");

var cancelOkButtons = function cancelOkButtons(_ref) {
  var h = _ref.renderer,
      Button$$1 = _ref.Button;
  return [h(Button$$1, {
    label: "Cancel"
  }), h(Button$$1, {
    label: "Save"
  })];
};

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var form = (function (_ref) {
  var _formOptions;

  var h = _ref.renderer,
      k = _ref.keys,
      Button$$1 = _ref.Button,
      file = _ref.file;
  return {
    title: "Select a file...",
    body: h("input", _defineProperty({
      type: "file",
      id: "file",
      name: "file"
    }, k.onchange, function (e) {
      return file(e.target.value);
    })),
    formOptions: (_formOptions = {
      name: "demo",
      type: "post"
    }, _defineProperty(_formOptions, k.enctype, "multipart/form-data"), _defineProperty(_formOptions, k.onsubmit, function (e) {
      e.preventDefault();
      alert("Posted: " + file());
      file(null);
    }), _formOptions),
    footer: [h(Button$$1, {
      label: "Cancel"
    }), h(Button$$1, {
      disabled: file() === undefined,
      label: "Post",
      element: "button",
      type: "submit"
    })]
  };
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

var genericTests = (function (_ref) {
  var renderer$$1 = _ref.renderer,
      keys$$1 = _ref.keys,
      DialogPane$$1 = _ref.DialogPane,
      Button$$1 = _ref.Button;


  DialogPane$$1.theme(".dialog-pane-tests-blue-dialog", {
    color_light_background: "#2196F3",
    color_light_body_text: "#fff"
  });

  return [{
    name: "Option: body",
    component: DialogPane$$1,
    attrs: {
      body: "Hello"
    }
  }, {
    name: "Themed (color)",
    component: DialogPane$$1,
    attrs: {
      content: renderer$$1("div", "Hello"),
      className: "dialog-pane-tests-blue-dialog"
    }
  }, {
    name: "Option: style",
    component: DialogPane$$1,
    attrs: {
      body: "Hello",
      style: {
        background: "#fff59d",
        padding: "1.5rem"
      }
    }
  }, {
    name: "Option: title, body, footer",
    interactive: true,
    component: DialogPane$$1,
    attrs: {
      title: "Long dialog with a very long title that surely won't fit here",
      body: renderer$$1.trust(longText),
      footer: cancelOkButtons({ renderer: renderer$$1, Button: Button$$1 })
    }
  }, {
    name: "Conditional button states",
    interactive: true,
    component: {
      oninit: function oninit(vnode) {
        var file = stream();
        vnode.state = {
          file: file,
          redrawOnUpdate: stream.merge([file])
        };
      },
      view: function view(vnode) {
        return renderer$$1(DialogPane$$1, form({ renderer: renderer$$1, keys: keys$$1, Button: Button$$1, file: vnode.state.file }));
      }
    }
  }];
});

var mithrilTests = function mithrilTests() {
  return [];
};

var testsMithril = [].concat(genericTests({ DialogPane: DialogPane, Button: Button, renderer: renderer, keys: keys })).concat(mithrilTests({ DialogPane: DialogPane, Button: Button, renderer: renderer, keys: keys }));

var reactTests = function reactTests() {

  return [{
    section: "React JSX tests"
  }, {
    name: "Option: title, body, footer (JSX)",
    component: function component() {
      return React.createElement(DialogPane$1, {
        title: "Long dialog with a very long title that surely won't fit here",
        body: renderer$1.trust(longText),
        footer: cancelOkButtons({ renderer: renderer$1, Button: Button$1 })
      });
    }
  }];
};

var testsReact = [].concat(genericTests({ DialogPane: DialogPane$1, Button: Button$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ DialogPane: DialogPane$1, Button: Button$1, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
