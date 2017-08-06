import { Dialog, IconButton, List, ListTile, Menu, RaisedButton, Shadow, keys, renderer } from 'polythene-mithril';
import { styler } from 'polythene-core-css';
import React, { Component } from 'react';
import { Dialog as Dialog$1, IconButton as IconButton$1, List as List$1, ListTile as ListTile$1, Menu as Menu$1, RaisedButton as RaisedButton$1, Shadow as Shadow$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';

var menuItems = (function (_ref) {
  var h = _ref.renderer,
      Menu$$1 = _ref.Menu,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile;

  var tile = function tile(left, right, disabled) {
    return h(ListTile$$1, {
      key: left, // for React
      title: left,
      secondary: { content: right },
      hoverable: true,
      disabled: disabled
    });
  };
  return {
    view: function view() {
      return h(Menu$$1, {
        size: 5,
        permanent: true,
        content: [h(List$$1, {
          key: "one", // for React
          compact: true,
          hoverable: true,
          tiles: [tile("Bold", "\u2318B"), tile("Italic", "\u2318I"), tile("Underline", "\u2318U"), tile("Strikethrough", "Alt+Shift+5"), tile("Superscript", "\u2318."), tile("Subscript", "\u2318,")]
        }), h(List$$1, {
          key: "two", // for React
          compact: true,
          hoverable: true,
          tiles: [tile("Clear formatting", "\u2318/", true), tile("Custom spacing", "")]
        })]
      });
    }
  };
});

var simple = (function (_ref) {
  var show = _ref.show,
      target = _ref.target,
      h = _ref.h,
      Menu$$1 = _ref.Menu,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      didHide = _ref.didHide,
      getState = _ref.getState;
  return h(Menu$$1, {
    target: target,
    show: show,
    didHide: didHide,
    getState: getState,
    size: 2,
    content: h(List$$1, [h(ListTile$$1, {
      element: "a",
      title: "Yes",
      ink: true,
      hoverable: true
    }), h(ListTile$$1, {
      element: "a",
      title: "No",
      ink: true,
      hoverable: true
    })])
  });
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var opener = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Menu$$1 = _ref.Menu,
      RaisedButton$$1 = _ref.RaisedButton,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      menuFn = _ref.menuFn,
      transitionOptions = _ref.transitionOptions,
      id = _ref.id;
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
        label: "Open menu",
        id: id,
        events: _defineProperty({}, k.onclick, function () {
          return state.show(true);
        })
      }), menuFn({
        show: show,
        target: "#" + id,
        h: h,
        Menu: Menu$$1,
        List: List$$1,
        ListTile: ListTile$$1,
        transitionOptions: transitionOptions,
        didHide: function didHide() {
          return state.show(false);
        }
      })]);
    }
  };
});

var createSizedMenu = function createSizedMenu(_ref) {
  var size = _ref.size,
      h = _ref.h,
      Menu$$1 = _ref.Menu,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile;

  var sizeTexts = {
    "1": ["en", "nl", "de"],
    "1.5": ["Yes", "No", "Maybe"],
    "2": ["Copy", "Paste", "Undo"],
    "3": ["Home", "Back", "Recently viewed"],
    "4": ["Paragraph styles", "Line spacing", "Numbered list"],
    "5": ["Add space before paragraph", "Add space after paragraph", "Custom spacing"],
    "6": ["The Mind Is Its Own Beautiful Prisoner", "If I Should Sleep With A Lady Called Death", "It May Not Always Be So; And I Say"],
    "7": ["Any bar, any cross, any impediment will be", "medicinable to me: I am sick in displeasure to him", "and whatsoever comes athwart his affection ranges", "evenly with mine. How canst thou cross this marriage?"],
    "auto": ["Paragraph styles", "Line spacing", "Numbered list"]
  };
  var sizeStr = size.toString();
  return h(Menu$$1, {
    size: size,
    permanent: true,
    content: h(List$$1, {
      compact: true,
      header: { title: size },
      tiles: sizeTexts[sizeStr].map(function (label) {
        return h(ListTile$$1, {
          title: label,
          key: label
        });
      })
    }),
    style: { margin: "0 0 1rem 0" }
  });
};

var sizes = (function (_ref2) {
  var h = _ref2.renderer,
      Menu$$1 = _ref2.Menu,
      List$$1 = _ref2.List,
      ListTile$$1 = _ref2.ListTile;
  return {
    view: function view() {
      return h("div", null, [1.5, 2, 3, 4, 5, 6, 7, "auto"].map(function (size) {
        return createSizedMenu({ size: size, Menu: Menu$$1, List: List$$1, ListTile: ListTile$$1, h: h });
      }));
    }
  };
});

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iconMoreVertSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z\"/></svg>";

var styles = [{
  " .position-container": {
    position: "relative",
    width: "47%",
    height: "230px",
    background: "#fff",
    margin: "10px",

    " .bar": {
      position: "relative",
      width: "100%"
    },
    " .bar-row.pe-dark-tone": {
      background: "#3F51B5",
      padding: "4px 0"
    }
  }
}];

styler.add("test-menu-position", styles);

var createPositionContainer = function createPositionContainer(_ref) {
  var h = _ref.h,
      k = _ref.k,
      Menu$$1 = _ref.Menu,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      Shadow$$1 = _ref.Shadow,
      IconButton$$1 = _ref.IconButton;
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
      var attrs = vnode.attrs;
      var show = state.show();
      return h(".position-container.layout.vertical", { key: attrs.id }, [vnode.attrs.barPosition === "bottom" ? h(".flex") : null, h(".bar", [h(Shadow$$1, { z: 1 }), h(Menu$$1, {
        className: "pe-light-tone",
        target: "#" + attrs.id,
        origin: attrs.origin,
        show: show,
        didHide: function didHide() {
          return state.show(false);
        },
        size: 3,
        offset: 16,
        hideDelay: .240,
        content: h(List$$1, {
          tiles: ["Refresh", "Help & Feedback", "Settings", "Sign Out"].map(function (title) {
            return h(ListTile$$1, {
              title: title,
              positionSelected: false,
              ink: true,
              hoverable: true
            });
          })
        })
      }), h(".bar-row.pe-dark-tone.layout.horizontal", [attrs.buttonPosition === "right" ? h(".flex") : null, h(IconButton$$1, {
        id: attrs.id,
        icon: { svg: h.trust(iconMoreVertSVG) },
        events: _defineProperty$1({}, k.onclick, function () {
          return state.show(true);
        })
      })])])]);
    }
  };
};

var position = (function (_ref2) {
  var h = _ref2.renderer,
      k = _ref2.keys,
      Menu$$1 = _ref2.Menu,
      List$$1 = _ref2.List,
      ListTile$$1 = _ref2.ListTile,
      Shadow$$1 = _ref2.Shadow,
      IconButton$$1 = _ref2.IconButton;

  var PositionContainer = createPositionContainer({ h: h, k: k, Menu: Menu$$1, List: List$$1, ListTile: ListTile$$1, Shadow: Shadow$$1, IconButton: IconButton$$1 });
  return {
    view: function view() {
      return h("div", null, [h(".layout.horizontal", [h(PositionContainer, {
        id: "show_menu_top_left",
        origin: "top-left",
        barPosition: "top",
        buttonPosition: "left"
      }), h(".flex"), h(PositionContainer, {
        id: "show_menu_top_right",
        origin: "top-right",
        barPosition: "top",
        buttonPosition: "right"
      })]), h(".layout.horizontal", [h(PositionContainer, {
        id: "show_menu_bottom_left",
        origin: "bottom-left",
        barPosition: "bottom",
        buttonPosition: "left"
      }), h(".flex"), h(PositionContainer, {
        id: "show_menu_bottom_right",
        origin: "bottom-right",
        barPosition: "bottom",
        buttonPosition: "right"
      })])]);
    }
  };
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var menuOptions = ["Show all notification content", "Hide sensitive notification content", "Hide all notification content"];

var settings = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Menu$$1 = _ref.Menu,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile;
  return {
    oninit: function oninit(vnode) {
      var show = stream(false);
      var selectedIndex = stream(0);
      vnode.state = {
        show: show,
        selectedIndex: selectedIndex,
        redrawOnUpdate: stream.merge([show]),
        id: "id-" + Math.floor(Math.random() * 1000)
      };
    },
    view: function view(vnode) {
      var state = vnode.state;
      var id = state.id;
      var show = state.show();
      var selectedIndex = state.selectedIndex();
      return h("div", {
        style: { position: "relative" }
      }, [h(Menu$$1, {
        target: "#" + id,
        show: show,
        didHide: function didHide() {
          return state.show(false);
        },
        hideDelay: .240,
        size: 5,
        offset: 16,
        content: h(List$$1, {
          hoverable: true,
          tiles: menuOptions.map(function (setting, index) {
            return h(ListTile$$1, {
              title: setting,
              selected: index === selectedIndex,
              ink: true,
              hoverable: true,
              events: _defineProperty$2({}, k.onclick, function () {
                return state.selectedIndex(index), state.show(false);
              })
            });
          })
        })
      }), h(List$$1, {
        style: {
          backgroundColor: "#fff",
          maxWidth: "320px"
        },
        tiles: [h(ListTile$$1, {
          id: id,
          title: "When device is locked",
          subtitle: menuOptions[selectedIndex],
          events: _defineProperty$2({}, k.onclick, function () {
            return state.show(true);
          }),
          hoverable: true,
          selected: show
        }), h(ListTile$$1, {
          title: "Item 2",
          disabled: true,
          hoverable: true
        }), h(ListTile$$1, {
          title: "Item 3",
          disabled: true,
          hoverable: true
        })]
      })]);
    }
  };
});

var themeColor = "#2196F3";

var themed = (function (_ref) {
  var h = _ref.renderer,
      Menu$$1 = _ref.Menu,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile;


  Menu$$1.theme(".menu-tests-blue-menu", {
    color_dark_background: themeColor,
    border_radius: 6
  });
  ListTile$$1.theme(".menu-tests-blue-menu-list-tile", {
    color_light_title: "#fff",
    color_light_background: themeColor
  });

  var themedList = h(List$$1, [h(ListTile$$1, {
    title: "Yes",
    ink: true,
    className: "menu-tests-blue-menu-list-tile",
    hoverable: true
  }), h(ListTile$$1, {
    title: "No",
    ink: true,
    className: "menu-tests-blue-menu-list-tile",
    hoverable: true
  })]);

  var styledList = h(List$$1, [h(ListTile$$1, {
    title: "Yes",
    ink: true,
    style: {
      backgroundColor: themeColor,
      color: "#fff"
    }
  }), h(ListTile$$1, {
    title: "No",
    ink: true,
    style: {
      backgroundColor: themeColor,
      color: "#fff"
    }
  })]);

  return { themeColor: themeColor, themedList: themedList, styledList: styledList };
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var transitions = (function (_ref) {
  var show = _ref.show,
      target = _ref.target,
      h = _ref.h,
      Menu$$1 = _ref.Menu,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      didHide = _ref.didHide,
      getState = _ref.getState,
      transitionOptions = _ref.transitionOptions;
  return h(Menu$$1, _extends({}, transitionOptions, {
    target: target,
    show: show,
    didHide: didHide,
    getState: getState,
    offset: -4,
    size: 2,
    content: h(List$$1, [h(ListTile$$1, {
      element: "a",
      title: "Yes",
      ink: true,
      hoverable: true
    }), h(ListTile$$1, {
      element: "a",
      title: "No",
      ink: true,
      hoverable: true
    })])
  }));
});

var genericTests = (function (_ref) {
  var renderer$$1 = _ref.renderer,
      keys$$1 = _ref.keys,
      Menu$$1 = _ref.Menu,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      RaisedButton$$1 = _ref.RaisedButton,
      Shadow$$1 = _ref.Shadow,
      IconButton$$1 = _ref.IconButton;

  var _themed = themed({ renderer: renderer$$1, Menu: Menu$$1, List: List$$1, ListTile: ListTile$$1 }),
      themeColor = _themed.themeColor,
      themedList = _themed.themedList,
      styledList = _themed.styledList;

  return [{
    name: "Menu items",
    component: menuItems({ renderer: renderer$$1, Menu: Menu$$1, List: List$$1, ListTile: ListTile$$1 })
  }, {
    name: "Menu items -- dark tone",
    className: "pe-dark-tone",
    component: menuItems({ renderer: renderer$$1, Menu: Menu$$1, List: List$$1, ListTile: ListTile$$1 })
  }, {
    name: "Simple menu (demo without state)",
    interactive: true,
    exclude: true,
    component: opener({ renderer: renderer$$1, keys: keys$$1, Menu: Menu$$1, RaisedButton: RaisedButton$$1, List: List$$1, ListTile: ListTile$$1, menuFn: simple, id: "simple" })
  }, {
    name: "Positioning",
    interactive: true,
    exclude: true,
    component: position({ renderer: renderer$$1, keys: keys$$1, Menu: Menu$$1, List: List$$1, ListTile: ListTile$$1, Shadow: Shadow$$1, IconButton: IconButton$$1 })
  }, {
    name: "Change setting and reposition according to selected item",
    interactive: true,
    exclude: true,
    component: settings({ renderer: renderer$$1, keys: keys$$1, Menu: Menu$$1, List: List$$1, ListTile: ListTile$$1 })
  }, {
    name: "Themed (color and border radius)",
    component: {
      view: function view() {
        return renderer$$1(Menu$$1, {
          content: themedList,
          permanent: true,
          tone: "dark",
          className: "menu-tests-blue-menu"
        });
      }
    }
  }, {
    name: "Option: style",
    component: {
      view: function view() {
        return renderer$$1(Menu$$1, {
          content: styledList,
          permanent: true,
          tone: "dark",
          style: {
            backgroundColor: themeColor,
            color: "#fff"
          }
        });
      }
    }
  }, {
    name: "Option: transitions",
    interactive: true,
    exclude: true,
    component: opener({ renderer: renderer$$1, keys: keys$$1, Menu: Menu$$1, RaisedButton: RaisedButton$$1, List: List$$1, ListTile: ListTile$$1, menuFn: transitions, id: "transitions",
      transitionOptions: {
        transitions: {
          show: function show(el) {
            return {
              el: el,
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
              hide: function hide() {
                return el.style.opacity = 0, el.style.transform = "translate3d(0, 20px, 0)";
              }
            };
          }
        }
      }
    })
  }, {
    name: "Option: showDelay, hideDelay, showDuration, hideDuration",
    interactive: true,
    exclude: true,
    component: opener({ renderer: renderer$$1, keys: keys$$1, Menu: Menu$$1, RaisedButton: RaisedButton$$1, List: List$$1, ListTile: ListTile$$1, menuFn: transitions, id: "showDelay",
      transitionOptions: {
        showDelay: .4,
        hideDelay: .4,
        showDuration: 1.0,
        hideDuration: 1.0
      }
    })
  }, {
    name: "Option: size",
    component: sizes({ renderer: renderer$$1, Menu: Menu$$1, List: List$$1, ListTile: ListTile$$1 })
  }];
});

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var settingsDialog = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Dialog$$1 = _ref.Dialog,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile;


  var tile = function tile(title, selected, disabled) {
    return h(ListTile$$1, {
      title: title,
      key: title, // for React
      selected: selected,
      disabled: disabled,
      ink: true,
      events: _defineProperty$3({}, k.onclick, function () {
        if (!disabled) {
          Dialog$$1.hide();
        }
      })
    });
  };

  return {
    menu: h(List$$1, {
      hoverable: true,
      tiles: [tile("Any bar, any cross, any impediment will be medicinable to me: I am sick in displeasure to him", true, false), tile("and whatsoever comes athwart his affection ranges", false, false), tile("evenly with mine. How canst thou cross this marriage?", false, true)]
    }),
    hideDelay: .240
  };
});

var mithrilTests = function mithrilTests(_ref) {
  var Menu$$1 = _ref.Menu,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      h = _ref.renderer;


  var settingsDialogOptions = settingsDialog({ renderer: renderer, keys: keys, Dialog: Dialog, Menu: Menu$$1, List: List$$1, ListTile: ListTile$$1 });

  return [{
    section: "Mithril specific tests"
  }, {
    name: "Dialog with option 'menu' (demo without state)",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return h(RaisedButton, {
          label: "Open",
          events: {
            onclick: function onclick() {
              return Dialog.show(settingsDialogOptions);
            }
          }
        });
      }
    }
  }];
};

var testsMithril = [].concat(genericTests({ Menu: Menu, List: List, ListTile: ListTile, RaisedButton: RaisedButton, Shadow: Shadow, IconButton: IconButton, renderer: renderer, keys: keys })).concat(mithrilTests({ Menu: Menu, List: List, ListTile: ListTile, RaisedButton: RaisedButton, Shadow: Shadow, IconButton: IconButton, renderer: renderer, keys: keys }));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_Component) {
  _inherits(_class, _Component);

  function _class(props) {
    _classCallCheck(this, _class);

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass(_class, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isOpen = this.state.isOpen;
      var target = "simple-menu";
      return renderer$1("div", { style: { position: "relative" } }, [renderer$1(RaisedButton$1, {
        label: "Open menu",
        id: target,
        events: {
          onClick: function onClick() {
            return _this2.setState({ isOpen: true });
          }
        }
      }), renderer$1(Menu$1, {
        target: "#" + target,
        show: isOpen,
        size: 2,
        didHide: function didHide() {
          return _this2.setState({ isOpen: false });
        }
      }, renderer$1(List$1, [renderer$1(ListTile$1, { title: "Yes", ink: true, hoverable: true }), renderer$1(ListTile$1, { title: "No", ink: true, hoverable: true })]))]);
    }
  }]);

  return _class;
}(Component);

var _createClass$1 = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$1(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$1(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class$1 = function (_Component) {
  _inherits$1(_class, _Component);

  function _class(props) {
    _classCallCheck$1(this, _class);

    var _this = _possibleConstructorReturn$1(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

    _this.state = {
      isOpen: false
    };
    return _this;
  }

  _createClass$1(_class, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var isOpen = this.state.isOpen;
      var target = "simple-menu-jsx";
      return React.createElement(
        "div",
        { style: { position: "relative" } },
        React.createElement(RaisedButton$1, {
          label: "Open menu",
          id: target,
          events: {
            onClick: function onClick() {
              return _this2.setState({ isOpen: true });
            }
          }
        }),
        React.createElement(
          Menu$1,
          {
            target: "#" + target,
            show: isOpen,
            size: 2,
            didHide: function didHide() {
              return _this2.setState({ isOpen: false });
            }
          },
          React.createElement(
            List$1,
            null,
            React.createElement(ListTile$1, { title: "Yes", ink: true, hoverable: true }),
            React.createElement(ListTile$1, { title: "No", ink: true, hoverable: true })
          )
        )
      );
    }
  }]);

  return _class;
}(Component);

var Tile = function Tile(_ref) {
  var title = _ref.title,
      selected = _ref.selected,
      disabled = _ref.disabled;
  return React.createElement(ListTile$1, {
    title: title,
    selected: selected,
    disabled: disabled,
    ink: true,
    events: {
      onClick: function onClick() {
        if (!disabled) {
          Dialog$1.hide();
        }
      }
    }
  });
};

var dialogOptions = {
  menu: React.createElement(List$1, {
    hoverable: true,
    tiles: [React.createElement(Tile, { title: "Item one", selected: true, disabled: false }), React.createElement(Tile, { title: "Item two", selected: false, disabled: false }), React.createElement(Tile, { title: "Item three", selected: false, disabled: true })]
  }),
  hideDelay: .240
};

var SettingsJSX = (function () {
  return React.createElement(RaisedButton$1, {
    label: "Open Menu Dialog",
    events: {
      onClick: function onClick() {
        return Dialog$1.show(dialogOptions);
      }
    }
  });
});

var reactTests = function reactTests(_ref) {
  var h = _ref.renderer,
      Menu$$1 = _ref.Menu,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile;


  var Tile = function Tile(left, right) {
    var disabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    return React.createElement(ListTile$$1, {
      key: left,
      title: left,
      secondary: { content: right },
      hoverable: true,
      disabled: disabled
    });
  };

  return [{
    section: "React specific tests"
  }, {
    name: "Simple menu (demo without state) (hyperscript)",
    interactive: true,
    exclude: true,
    component: function component() {
      return h(_class);
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Permanent (JSX)",
    component: function component() {
      return React.createElement(
        Menu$$1,
        {
          size: 5,
          permanent: true
        },
        React.createElement(List$$1, {
          key: "one",
          compact: true,
          hoverable: true,
          tiles: [Tile("Bold", "\u2318B"), Tile("Italic", "\u2318I"), Tile("Underline", "\u2318U"), Tile("Strikethrough", "Alt+Shift+5"), Tile("Superscript", "\u2318."), Tile("Subscript", "\u2318,")]
        }),
        React.createElement(List$$1, {
          key: "two",
          compact: true,
          hoverable: true,
          tiles: [Tile("Clear formatting", "\u2318/", true), Tile("Custom spacing", "")]
        })
      );
    }
  }, {
    name: "Simple menu (demo without state) (JSX)",
    interactive: true,
    exclude: true,
    component: function component() {
      return React.createElement(_class$1, null);
    }
  }, {
    name: "Dialog with option 'menu' (demo without state) (JSX)",
    interactive: true,
    exclude: true,
    component: function component() {
      return React.createElement(SettingsJSX, null);
    }
  }];
};

var testsReact = [].concat(genericTests({ Menu: Menu$1, List: List$1, ListTile: ListTile$1, RaisedButton: RaisedButton$1, Shadow: Shadow$1, IconButton: IconButton$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ Menu: Menu$1, List: List$1, ListTile: ListTile$1, RaisedButton: RaisedButton$1, Shadow: Shadow$1, IconButton: IconButton$1, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
