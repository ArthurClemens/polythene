import { Button, Dialog, DialogPane, Icon, IconButton, List, ListTile, RaisedButton, Toolbar, keys, renderer } from 'polythene-mithril';
import React, { Component } from 'react';
import { Button as Button$1, Dialog as Dialog$1, DialogPane as DialogPane$1, Icon as Icon$1, IconButton as IconButton$1, List as List$1, ListTile as ListTile$1, RaisedButton as RaisedButton$1, Toolbar as Toolbar$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var shortText = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>";

var longText = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(function () {
  return shortText;
}).join("");

var cancelOkButtons = function cancelOkButtons(_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Button$$1 = _ref.Button,
      Dialog$$1 = _ref.Dialog;
  return [h(Button$$1, {
    label: "Cancel",
    events: _defineProperty$2({}, k.onclick, function () {
      return Dialog$$1.hide();
    })
  }), h(Button$$1, {
    label: "Save",
    events: _defineProperty$2({}, k.onclick, function () {
      return Dialog$$1.hide();
    })
  })];
};

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DIALOG_CONFIRM = "confirm-fullscreen";
var closeSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>";

var fullscreen = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Toolbar$$1 = _ref.Toolbar,
      IconButton$$1 = _ref.IconButton,
      Button$$1 = _ref.Button,
      Dialog$$1 = _ref.Dialog;


  var fullscreenToolbarRow = function fullscreenToolbarRow(title) {
    return [h(IconButton$$1, {
      key: "close",
      icon: { svg: h.trust(closeSVG) },
      events: _defineProperty$3({}, k.onclick, function () {
        return Dialog$$1.show(confirmDialogOpts, { id: DIALOG_CONFIRM });
      })
    }), h("span.flex", { key: "title" }, title), h(Button$$1, {
      key: "save",
      label: "Save",
      events: _defineProperty$3({}, k.onclick, function () {
        return Dialog$$1.hide();
      })
    })];
  };

  var FullscreenPane = {
    view: function view() {
      return h("div", [h(Toolbar$$1, {
        key: "toolbar",
        content: fullscreenToolbarRow("New event")
      }), h("div", {
        key: "content",
        style: { padding: "21px" }
      }, h.trust(longText))]);
    }
  };

  var confirmDialogOpts = {
    body: h.trust(shortText),
    modal: true,
    backdrop: true,
    footer: [h(Button$$1, {
      key: "close",
      label: "Close this",
      events: _defineProperty$3({}, k.onclick, function () {
        return Dialog$$1.hide({ id: DIALOG_CONFIRM });
      })
    }), h(Button$$1, {
      key: "close-all",
      label: "Close all",
      events: _defineProperty$3({}, k.onclick, function () {
        return (
          // hide confirm dialog
          Dialog$$1.hide({ id: DIALOG_CONFIRM }),
          // hide main dialog
          Dialog$$1.hide()
        );
      })
    })]
  };

  return {
    body: h(FullscreenPane),
    fullscreen: true
  };
});

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var fullwidth = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Dialog$$1 = _ref.Dialog,
      Button$$1 = _ref.Button;
  return {
    style: {
      width: "280px"
    },
    body: [h(".pe-dialog__title", "Let your apps know your location"), h("div", "This means that your location data will be sent to our servers, anonymously of course.")],
    footer: [h(Button$$1, {
      label: "Turn on location services",
      events: _defineProperty$4({}, k.onclick, function () {
        return Dialog$$1.hide();
      })
    }), h(Button$$1, {
      label: "No thanks",
      events: _defineProperty$4({}, k.onclick, function () {
        return Dialog$$1.hide();
      })
    })]
  };
});

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iconAccountSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z\"/></svg>";

var menu = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Icon$$1 = _ref.Icon,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      Dialog$$1 = _ref.Dialog;
  return {
    title: "Set backup account",
    menu: h(List$$1, {
      tiles: [1, 2, 3].map(function () {
        return h(ListTile$$1, {
          style: { color: "#00bad2" },
          front: h(Icon$$1, {
            size: "large",
            svg: h.trust(iconAccountSVG)
          }),
          hoverable: true,
          title: "Account",
          events: _defineProperty$5({}, k.onclick, function () {
            return Dialog$$1.hide();
          })
        });
      })
    })
  };
});

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var settings = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      Dialog$$1 = _ref.Dialog;


  var createListTile = function createListTile(title) {
    return h(ListTile$$1, {
      title: title,
      events: _defineProperty$6({}, k.onclick, function () {
        return Dialog$$1.hide();
      }),
      hoverable: true,
      ink: true
    });
  };

  return {
    menu: h(List$$1, {
      tiles: [createListTile("Show all notification content including sensitive notification content"), createListTile("Hide sensitive notification content"), createListTile("Hide all notification content")]
    }),
    hideDelay: .15,
    header: null,
    footer: null
  };
});

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var replaceDialog = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Button$$1 = _ref.Button,
      Dialog$$1 = _ref.Dialog;


  var dialogTwoOptions = {
    body: "Dialog Two",
    footer: h(Button$$1, {
      label: "Show One",
      events: _defineProperty$7({}, k.onclick, function () {
        return Dialog$$1.show(dialogOneOptions);
      })
    })
  };

  var dialogOneOptions = {
    body: "Dialog One",
    footer: h(Button$$1, {
      label: "Show Two",
      events: _defineProperty$7({}, k.onclick, function () {
        return Dialog$$1.show(dialogTwoOptions);
      })
    })
  };

  return dialogOneOptions;
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import replacePane from "./components/replace-pane";

var genericTests = (function (_ref) {
  var renderer$$1 = _ref.renderer,
      keys$$1 = _ref.keys,
      Dialog$$1 = _ref.Dialog,
      DialogPane$$1 = _ref.DialogPane,
      Button$$1 = _ref.Button,
      RaisedButton$$1 = _ref.RaisedButton,
      Toolbar$$1 = _ref.Toolbar,
      IconButton$$1 = _ref.IconButton,
      Icon$$1 = _ref.Icon,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile;


  var Opener = function Opener(dialogAttrs) {
    var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Open";
    return renderer$$1(RaisedButton$$1, {
      label: label,
      events: _defineProperty$1({}, keys$$1.onclick, function () {
        return Dialog$$1.show(dialogAttrs);
      })
    });
  };

  var OpenerWithPromise = function OpenerWithPromise(dialogAttrs) {
    var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Open";
    return renderer$$1(RaisedButton$$1, {
      label: label,
      events: _defineProperty$1({}, keys$$1.onclick, function () {
        return Dialog$$1.show(dialogAttrs).then(function (id) {
          return alert("dialog shown: " + id);
        });
      })
    });
  };

  Dialog$$1.theme(".dialog-tests-rounded-blue", {
    border_radius: 5,
    color_light_background: "#2196F3",
    color_light_text: "#fff"
  });

  return [{
    name: "Option: body",
    exclude: true,
    interactive: true,
    component: {
      view: function view() {
        return Opener({ body: "Hello" });
      }
    }
  }, {
    name: "Themed pane (color and border radius)",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          content: renderer$$1("div", "Hello"),
          className: "dialog-tests-rounded-blue"
        });
      }
    }
  }, {
    name: "Styled pane",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          body: "Hello",
          style: {
            background: "#fff59d",
            padding: "1.5rem"
          }
        });
      }
    }
  }, {
    name: "Option: z (0)",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          body: renderer$$1.trust(shortText),
          z: 0
        });
      }
    }
  }, {
    name: "Option: z (5)",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          body: renderer$$1.trust(shortText),
          z: 5
        });
      }
    }
  }, {
    name: "Option: title and body (long text)",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          title: "Long dialog with a very long title that surely won't fit here",
          body: renderer$$1.trust(longText),
          footer: cancelOkButtons({ renderer: renderer$$1, keys: keys$$1, Button: Button$$1, Dialog: Dialog$$1 })
        });
      }
    }
  }, {
    name: "Option: panes attrs",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          panes: [renderer$$1(DialogPane$$1, {
            title: "Long dialog with a very long title that surely won't fit here",
            body: renderer$$1.trust(longText),
            footer: cancelOkButtons({ renderer: renderer$$1, keys: keys$$1, Button: Button$$1, Dialog: Dialog$$1 })
          })]
        });
      }
    }
  }, {
    name: "Option: modal with backdrop",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          title: "Long dialog with a very long title that surely won't fit here",
          body: renderer$$1.trust(longText),
          footer: cancelOkButtons({ renderer: renderer$$1, keys: keys$$1, Button: Button$$1, Dialog: Dialog$$1 }),
          modal: true,
          backdrop: true
        });
      }
    }
  }, {
    name: "Option: fullscreen (and show second dialog on top)",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener(fullscreen({ renderer: renderer$$1, keys: keys$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, Button: Button$$1, Dialog: Dialog$$1 }));
      }
    }
  }, {
    name: "Vertically stacked buttons",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener(fullwidth({ renderer: renderer$$1, keys: keys$$1, Dialog: Dialog$$1, Button: Button$$1 }));
      }
    }
  }, {
    name: "Option: menu",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener(menu({ renderer: renderer$$1, keys: keys$$1, Icon: Icon$$1, List: List$$1, ListTile: ListTile$$1, Dialog: Dialog$$1 }));
      }
    }
  }, {
    name: "Settings dialog",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener(settings({ renderer: renderer$$1, keys: keys$$1, List: List$$1, ListTile: ListTile$$1, Dialog: Dialog$$1 }));
      }
    }
  }, {
    name: "Replace dialog",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener(replaceDialog({ renderer: renderer$$1, keys: keys$$1, Button: Button$$1, Dialog: Dialog$$1 }));
      }
    }
  },
  // {
  //   name: "Replace pane",
  //   interactive: true,
  //   exclude: true,
  //   component: {
  //     view: () => {
  //       const paneAttrs = replacePane({ renderer, keys, Button });
  //       return Opener(paneAttrs);
  //     }
  //   }
  // },

  // Feedback and timing

  {
    name: "Promise shown",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return OpenerWithPromise({
          body: "Hello"
        });
      }
    }
  }, {
    name: "Option: didShow",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          body: "Hello",
          didShow: function didShow(id) {
            return alert("dialog shown: " + id);
          }
        });
      }
    }
  }, {
    name: "Option: didHide",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          body: "Hello",
          didHide: function didHide(id) {
            return alert("dialog hidden: " + id);
          }
        });
      }
    }
  }, {
    name: "Option: transitions",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          body: "Hello",
          transitions: {
            show: function show(el) {
              return {
                el: el,
                showDuration: .5,
                beforeShow: function beforeShow() {
                  return el.style.opacity = 0, el.style.transform = "translate3d(0, 20px, 0)";
                },
                show: function show() {
                  return el.style.opacity = 1, el.style.transform = "translate3d(0, 0px,  0)";
                }
              };
            },
            hide: function hide(el) {
              return {
                el: el,
                hideDuration: .5,
                hide: function hide() {
                  return el.style.opacity = 0;
                }
              };
            }
          }
        });
      }
    }
  }, {
    name: "Option: showDelay, hideDelay, showDuration, hideDuration",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          body: "Hello",
          showDelay: .4,
          hideDelay: .4,
          showDuration: 1.0,
          hideDuration: 1.0
        });
      }
    }
  }, {
    name: "Option: transition (show)",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          body: "Hello",
          showDuration: 1.0,
          hideDuration: 1.0,
          transition: "show"
        });
      }
    }
  }, {
    name: "Option: transition (hide)",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          body: "Hello",
          showDuration: 1.0,
          hideDuration: 1.0,
          transition: "hide"
        });
      }
    }
  }, {
    name: "Option: no transition",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          body: renderer$$1.trust(shortText),
          transition: "none"
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

var file = stream(null);

// use a function to have the state of hasValue reflected in the Dialog
var form = (function () {
  // Return a function so that these component attributes are not rendered statically:
  return function () {
    return {
      title: "Select a file...",
      body: renderer("input", {
        type: "file",
        id: "file",
        name: "file",
        onchange: function onchange(e) {
          var fileInput = e.target;
          file(fileInput.value);
          setTimeout(renderer.redraw);
        }
      }),
      formOptions: {
        name: "demo",
        type: "post",
        enctype: "multipart/form-data",
        onsubmit: function onsubmit(e) {
          e.preventDefault();
          var form = e.target;
          alert("Posted: " + form.file.value);
          Dialog.hide();
          file(null);
        }
      },
      footer: [renderer(Button, {
        label: "Cancel",
        events: {
          onclick: function onclick() {
            return Dialog.hide();
          }
        }
      }), renderer(Button, {
        disabled: file() === null,
        label: "Post",
        element: "button",
        type: "submit"
      })],
      didHide: function didHide() {
        return file(null);
      }
    };
  };
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var mithrilTests = function mithrilTests(_ref) {
  var renderer$$1 = _ref.renderer,
      keys$$1 = _ref.keys,
      Dialog$$1 = _ref.Dialog,
      RaisedButton$$1 = _ref.RaisedButton;


  var Opener = function Opener(dialogAttrs) {
    var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Open";
    return renderer$$1(RaisedButton$$1, {
      label: label,
      events: _defineProperty({}, keys$$1.onclick, function () {
        return Dialog$$1.show(dialogAttrs);
      })
    });
  };

  return [{
    section: "Mithril specific tests"
  }, {
    name: "Conditional button states",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener(form());
      }
    }
  }];
};

var testsMithril = [].concat(genericTests({ Dialog: Dialog, DialogPane: DialogPane, Button: Button, RaisedButton: RaisedButton, Toolbar: Toolbar, IconButton: IconButton, Icon: Icon, List: List, ListTile: ListTile, renderer: renderer, keys: keys })).concat(mithrilTests({ Dialog: Dialog, DialogPane: DialogPane, Button: Button, RaisedButton: RaisedButton, Toolbar: Toolbar, IconButton: IconButton, Icon: Icon, List: List, ListTile: ListTile, renderer: renderer, keys: keys }));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pane = function (_Component) {
  _inherits(Pane, _Component);

  function Pane(props) {
    _classCallCheck(this, Pane);

    var _this = _possibleConstructorReturn(this, (Pane.__proto__ || Object.getPrototypeOf(Pane)).call(this, props));

    _this.state = {
      file: undefined
    };
    return _this;
  }

  _createClass(Pane, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var disabled = this.state.file === undefined;
      return React.createElement(DialogPane$1, {
        title: "Select a file...",
        body: React.createElement("input", {
          type: "file",
          id: "file",
          name: "file",
          onChange: function onChange(e) {
            return _this2.setState({ file: e.target.value });
          }
        }),
        formOptions: {
          name: "demo",
          type: "post",
          encType: "multipart/form-data",
          onSubmit: function onSubmit(e) {
            e.preventDefault();
            alert("Posted: " + _this2.state.file);
            Dialog$1.hide();
            _this2.setState({ file: null });
          }
        },
        footer: React.createElement(
          "div",
          null,
          React.createElement(Button$1, {
            label: "Cancel",
            events: {
              onClick: function onClick() {
                return Dialog$1.hide();
              }
            }
          }),
          React.createElement(Button$1, {
            disabled: disabled,
            label: "Post",
            type: "submit",
            element: "button",
            events: {
              onClick: function onClick() {
                return Dialog$1.hide();
              }
            }
          })
        ),
        didHide: function didHide() {
          return _this2.setState({ file: null });
        }
      });
    }
  }]);

  return Pane;
}(Component);

var iconClose = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/></svg>";

var content = "Content...";

var toolbarRow = function toolbarRow(title) {
  return [renderer$1(IconButton$1, {
    key: "close",
    icon: {
      svg: renderer$1.trust(iconClose)
    },
    events: {
      onClick: function onClick() {
        return Dialog$1.hide();
      }
    }
  }), renderer$1("span.flex", { key: "spacer" }, title), renderer$1(Button$1, {
    key: "save",
    label: "Save",
    events: {
      onClick: function onClick() {
        return Dialog$1.hide();
      }
    }
  })];
};

var fullScreenOptions = {
  fullscreen: true,
  backdrop: true,
  content: [renderer$1(Toolbar$1, {
    content: toolbarRow("New event"),
    key: "header"
  }),
  // content
  renderer$1("div", {
    style: { padding: "21px" },
    key: "content"
  }, renderer$1.trust(content))]
};

var iconClose$1 = React.createElement(
  "svg",
  { width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
);

var content$1 = "Content...";

var toolbarRow$1 = function toolbarRow(title) {
  return [React.createElement(IconButton$1, {
    key: "close",
    icon: {
      svg: iconClose$1
    },
    events: {
      onClick: function onClick() {
        return Dialog$1.hide();
      }
    }
  }), React.createElement(
    "span",
    { className: "flex", key: "spacer" },
    title
  ), React.createElement(Button$1, {
    key: "save",
    label: "Save",
    events: {
      onClick: function onClick() {
        return Dialog$1.hide();
      }
    }
  })];
};

var fullScreenJsxOptions = {
  fullscreen: true,
  backdrop: true,
  content: [React.createElement(Toolbar$1, {
    content: toolbarRow$1("New event"),
    key: "header"
  }), React.createElement(
    "div",
    { style: { padding: "21px" }, key: "content" },
    content$1
  )]
};

var reactTests = function reactTests(_ref) {
  var h = _ref.renderer,
      Dialog$$1 = _ref.Dialog,
      RaisedButton$$1 = _ref.RaisedButton;


  var Opener = function Opener(_ref2) {
    var dialogAttrs = _ref2.dialogAttrs,
        _ref2$label = _ref2.label,
        label = _ref2$label === undefined ? "Open" : _ref2$label;
    return React.createElement(RaisedButton$$1, {
      label: label,
      events: {
        onClick: function onClick() {
          return Dialog$$1.show(dialogAttrs);
        }
      }
    });
  };

  var modalDialogOptions = {
    body: "Discard draft?",
    modal: true,
    backdrop: true,
    footer: [React.createElement(Button$1, { key: "cancel", label: "Cancel", events: { onClick: Dialog$$1.hide } }), React.createElement(Button$1, { key: "discard", label: "Discard", events: { onClick: Dialog$$1.hide } })]
  };

  return [{
    section: "React specific tests"
  }, {
    name: "Conditional button states",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          dialogAttrs: {
            panes: [h(Pane)]
          }
        });
      }
    }
  }, {
    name: "Full screen",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return Opener({
          dialogAttrs: fullScreenOptions
        });
      }
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Option: modal with backdrop (JSX)",
    interactive: true,
    exclude: true,
    component: function component() {
      return React.createElement(Opener, { dialogAttrs: modalDialogOptions });
    }
  }, {
    name: "Full screen (JSX)",
    interactive: true,
    exclude: true,
    component: function component() {
      return React.createElement(Opener, { dialogAttrs: fullScreenJsxOptions });
    }
  }];
};

var testsReact = [].concat(genericTests({ Dialog: Dialog$1, DialogPane: DialogPane$1, Button: Button$1, RaisedButton: RaisedButton$1, Toolbar: Toolbar$1, IconButton: IconButton$1, Icon: Icon$1, List: List$1, ListTile: ListTile$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ Dialog: Dialog$1, DialogPane: DialogPane$1, Button: Button$1, RaisedButton: RaisedButton$1, Toolbar: Toolbar$1, IconButton: IconButton$1, Icon: Icon$1, List: List$1, ListTile: ListTile$1, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
