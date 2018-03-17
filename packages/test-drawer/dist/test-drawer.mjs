import { ListTileCSS, DrawerCSS, ToolbarCSS } from 'polythene-css';
import { Drawer, RaisedButton, renderer, keys, List, ListTile, Icon, Toolbar, IconButton } from 'polythene-mithril';
import { Drawer as Drawer$1, RaisedButton as RaisedButton$1, renderer as renderer$1, keys as keys$1, List as List$1, ListTile as ListTile$1, Icon as Icon$1, Toolbar as Toolbar$1, IconButton as IconButton$1 } from 'polythene-react';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var stream = createCommonjsModule(function (module) {

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
		stream._state = { id: guid++, value: undefined, state: 0, derive: undefined, recover: undefined, deps: {}, parents: [], endStream: undefined };
		stream.map = stream["fantasy-land/map"] = map, stream["fantasy-land/ap"] = ap, stream["fantasy-land/of"] = createStream;
		stream.valueOf = valueOf, stream.toJSON = toJSON, stream.toString = valueOf;

		Object.defineProperties(stream, {
			end: { get: function get() {
					if (!stream._state.endStream) {
						var endStream = createStream();
						endStream.map(function (value) {
							if (value === true) unregisterStream(stream), unregisterStream(endStream);
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
		}finalize(stream);
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
		if (!streams.every(valid)) throw new Error("Ensure that each item passed to m.prop.combine/m.prop.merge is a stream");
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
	createStream["fantasy-land/of"] = createStream;
	createStream.merge = merge;
	createStream.combine = combine;
	createStream.HALT = HALT;

	module["exports"] = createStream;
});

var stream$1 = stream;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iconMenuSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>";

var ipsum = "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>";

var navigation = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Drawer$$1 = _ref.Drawer,
      Toolbar$$1 = _ref.Toolbar,
      IconButton$$1 = _ref.IconButton,
      createContent = _ref.createContent,
      pushToolbar = _ref.pushToolbar,
      repeats = _ref.repeats,
      rtl = _ref.rtl,
      dark = _ref.dark,
      createTopContent = _ref.createTopContent,
      drawerOpts = _ref.drawerOpts;


  var longText = h.trust(ipsum + ipsum);

  return {
    oninit: function oninit(vnode) {
      var show = stream$1(false);
      _extends(vnode.state, {
        show: show,
        redrawOnUpdate: stream$1.merge([show]) // for React
      });
    },
    view: function view(vnode) {
      var state = vnode.state;
      var onClick = function onClick() {
        return state.show(false);
      };
      var navList = createContent({ repeats: repeats, onClick: onClick });
      var content = pushToolbar ? [h(Toolbar$$1, { fullbleed: true, border: true }, createTopContent({ onClick: onClick })), navList] : navList;

      var toolbarRow = [!drawerOpts.permanent && h(IconButton$$1, {
        key: "icon",
        icon: { svg: { content: h.trust(iconMenuSVG) } },
        events: _defineProperty({}, k.onclick, function () {
          return state.show() ? state.show(false) : state.show(true);
        })
      }), h("div", {
        key: "title",
        className: "pe-toolbar__title"
      }, "Title")];

      var ToolbarInstance = h(Toolbar$$1, {
        className: "tests-drawer-themed-toolbar", // style set in tests-generic.js
        tone: "dark",
        z: 1
      }, toolbarRow);

      var dirOpts = rtl ? { className: "pe-rtl" } : null;

      return h("div", dirOpts, [!pushToolbar && ToolbarInstance, h("div", {
        key: "content", // for React
        style: {
          position: "relative",
          overflow: "hidden"
        }
      }, h("div", {
        style: {
          display: "flex",
          height: "350px",
          background: dark ? "inherit" : "#fff",
          color: dark ? "#ccc" : "#333"
        }
      }, [h("div", {
        key: "drawer", // for React
        style: {
          padding: drawerOpts.floating ? "20px" : 0
        }
      }, h(Drawer$$1, _extends({}, drawerOpts, { content: content }, !drawerOpts.permanent && {
        show: state.show(),
        didHide: function didHide() {
          return state.show(false);
        }
      }))), h("div", {
        style: {
          overflow: "hidden",
          flexShrink: drawerOpts.permanent ? 1 : 0,
          flexGrow: 0,
          width: "100%"
        }
      }, [pushToolbar && ToolbarInstance, h("div", {
        style: {
          padding: "20px"
        }
      }, longText)])]))]);
    }
  };
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var appDrawer = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Drawer$$1 = _ref.Drawer,
      RaisedButton$$1 = _ref.RaisedButton,
      createContent = _ref.createContent,
      repeats = _ref.repeats,
      drawerOpts = _ref.drawerOpts;


  return {
    oninit: function oninit(vnode) {
      var show = stream$1(false);
      _extends$1(vnode.state, {
        show: show,
        redrawOnUpdate: stream$1.merge([show]) // React: redraw whenever variables change
      });
    },
    view: function view(_ref2) {
      var state = _ref2.state;

      var show = state.show();
      return [h(RaisedButton$$1, {
        key: "button", // for React
        label: "Show",
        events: _defineProperty$1({}, k.onclick, function () {
          return state.show(true);
        })
      }), h(Drawer$$1, _extends$1({}, drawerOpts, {
        key: "drawer", // for React
        content: createContent({
          repeats: repeats,
          onClick: function onClick() {
            return state.show(false);
          }
        }),
        show: show,
        didHide: function didHide() {
          return state.show(false);
        } // sync state with component
      }))];
    }
  };
});

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var icons = {
  drafts: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z\"/></svg>",
  inbox: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z\"/></svg>",
  star: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z\"/></svg>",
  send: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M2.01 21L23 12 2.01 3 2 10l15 2-15 2z\"/></svg>"
};

ListTileCSS.addStyle(".tests-drawer-navigation-list", {
  color_light_hover_text: "#e01d5f",
  color_light_hover_front: "#e01d5f"
});

var navigationList = (function (_ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Icon$$1 = _ref.Icon,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      _ref$repeats = _ref.repeats,
      repeats = _ref$repeats === undefined ? 1 : _ref$repeats,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick;


  var tile = function tile(_ref2) {
    var title = _ref2.title,
        icon = _ref2.icon,
        index = _ref2.index;
    return h(ListTile$$1, {
      title: title,
      key: title + "-" + index, // for React
      className: "tests-drawer-navigation-list",
      front: h(Icon$$1, {
        svg: { content: h.trust(icon) }
      }),
      hoverable: true,
      navigation: true,
      events: _defineProperty$2({}, k.onclick, onClick)
    });
  };

  var nums = [];
  for (var i = 0; i < repeats; i = i + 1) {
    nums.push(i);
  }

  return h(List$$1, {
    compact: true,
    hoverable: true,
    tiles: [].concat.apply([], nums.map(function (num, index) {
      return [{
        index: index,
        title: "Inbox",
        icon: icons.inbox
      }, {
        index: index,
        title: "Starred",
        icon: icons.star
      }, {
        index: index,
        title: "Sent mail",
        icon: icons.send
      }, {
        index: index,
        title: "Drafts",
        icon: icons.drafts
      }];
    })).map(tile)
  });
});

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var genericTests = (function (_ref) {
  var keys$$1 = _ref.keys,
      renderer$$1 = _ref.renderer,
      Drawer$$1 = _ref.Drawer,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      Icon$$1 = _ref.Icon,
      Toolbar$$1 = _ref.Toolbar,
      IconButton$$1 = _ref.IconButton,
      RaisedButton$$1 = _ref.RaisedButton;


  var createContent = function createContent(_ref2) {
    var repeats = _ref2.repeats,
        onClick = _ref2.onClick;
    return navigationList({ renderer: renderer$$1, keys: keys$$1, Icon: Icon$$1, List: List$$1, ListTile: ListTile$$1, repeats: repeats, onClick: onClick });
  };

  DrawerCSS.addStyle(".drawer-tests-themed", {
    color_dark_background: "rgba(69, 45, 157, 1)",
    color_dark_text: "#fff",
    color_dark_backdrop_background: "rgba(69, 45, 157, .5)"
  });

  ToolbarCSS.addStyle(".tests-drawer-themed-toolbar", {
    color_light_background: "#e01d5f",
    color_dark_background: "#e01d5f"
  });

  var h = renderer$$1;

  var createTopContent = function createTopContent(_ref3) {
    var onClick = _ref3.onClick;
    return h(List$$1, {
      tiles: [h(ListTile$$1, {
        title: "Jennifer Barker",
        key: "Jennifer Barker",
        front: h(Icon$$1, {
          src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
          avatar: true
        }),
        hoverable: true,
        navigation: true,
        events: _defineProperty$3({}, keys$$1.onclick, onClick)
      })]
    });
  };

  return [{
    name: "App drawer",
    interactive: true,
    exclude: true,
    component: appDrawer({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, RaisedButton: RaisedButton$$1, createContent: createContent, drawerOpts: {
        fixed: true,
        backdrop: true,
        z: 1
      } })
  }, {
    name: "Permanent (no shadow, with border)",
    component: navigation({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, createContent: createContent, drawerOpts: {
        permanent: true,
        border: true,
        z: 0
      } })
  }, {
    name: "Permanent, floating (with shadow)",
    component: navigation({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, createContent: createContent, drawerOpts: {
        permanent: true,
        floating: true,
        z: 1
      } })
  }, {
    name: "Default drawer (type cover) (can be closed with ESCAPE) (with backdrop)",
    interactive: true,
    exclude: true,
    component: navigation({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, createContent: createContent, drawerOpts: {
        backdrop: true,
        z: 1
      } })
  }, {
    name: "Default drawer (modal, cannot be closed with ESCAPE or backdrop tap)",
    interactive: true,
    exclude: true,
    component: navigation({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, createContent: createContent, drawerOpts: {
        modal: true,
        z: 1
      } })
  }, {
    name: "Anchor end",
    interactive: true,
    exclude: true,
    component: navigation({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, createContent: createContent, drawerOpts: {
        backdrop: true,
        anchor: "end",
        z: 1
      } })
  }, {
    name: "Pushing drawer (push from left, without shadow, with border)",
    interactive: true,
    exclude: true,
    component: navigation({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, createContent: createContent, drawerOpts: {
        push: true,
        border: true
      } })
  }, {
    name: "Pushing drawer including toolbar",
    interactive: true,
    exclude: true,
    component: navigation({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, createContent: createContent, pushToolbar: true, createTopContent: createTopContent, drawerOpts: {
        push: true,
        border: true
      } })
  }, {
    name: "Mini (expanding) drawer",
    interactive: true,
    exclude: true,
    component: navigation({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, createContent: createContent, createTopContent: createTopContent, drawerOpts: {
        push: true,
        border: true,
        mini: true
      } })
  }, {
    name: "Long content (scrolling list)",
    interactive: true,
    exclude: true,
    component: navigation({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, createContent: createContent, repeats: 4, drawerOpts: {
        backdrop: true,
        z: 1
      } })
  }, {
    name: "Themed drawer",
    interactive: true,
    exclude: true,
    component: navigation({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, createContent: createContent, drawerOpts: {
        backdrop: true,
        className: "drawer-tests-themed",
        tone: "dark",
        z: 1
      } })
  }, {
    name: "Styled drawer",
    interactive: true,
    exclude: true,
    component: navigation({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, createContent: createContent, drawerOpts: {
        backdrop: true,
        style: {
          background: "#fff59d",
          padding: "1.5rem"
        },
        z: 1
      } })
  },
  // {
  //   name: "Transitions",
  //   interactive: true,
  //   exclude: true,
  //   component: navigation({ renderer, keys, Drawer, Toolbar, IconButton, createContent, drawerOpts: {
  //     backdrop: true,
  //     z: 1,
  //     transitions: {
  //       show: ({ el, contentEl }) => ({
  //         el,
  //         showDuration: .500,
  //         showTimingFunction: "ease-out",
  //         beforeShow: () => {
  //           const rect = contentEl.getBoundingClientRect();
  //           const height = rect.height + 15; // add shadow
  //           contentEl.style.transitionProperty = "none";
  //           contentEl.style.left = 0;
  //           contentEl.style.opacity = 0;
  //           contentEl.style.top = `${-height}px`;
  //         },
  //         show: () => {
  //           contentEl.style.transitionProperty = "top, opacity";
  //           contentEl.style.opacity = 1;
  //           contentEl.style.top = 0;
  //         }
  //       }),
  //       hide: ({ el, contentEl }) => ({
  //         el,
  //         hideDuration: .400,
  //         hideTimingFunction: "ease-out",
  //         hide: () => {
  //           const rect = contentEl.getBoundingClientRect();
  //           const height = rect.height + 15; // add shadow
  //           contentEl.style.left = 0;
  //           contentEl.style.top = `${-height}px`;
  //         }
  //       })
  //     }
  //   }})
  // },

  {
    name: "Default drawer (RTL)",
    interactive: true,
    exclude: true,
    component: navigation({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, createContent: createContent, rtl: true, drawerOpts: {
        backdrop: true,
        z: 1
      } })
  }, {
    name: "Mini drawer (RTL)",
    interactive: true,
    exclude: true,
    component: navigation({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, createContent: createContent, rtl: true, drawerOpts: {
        push: true,
        mini: true,
        border: true
      } })
  }, {
    name: "Anchor end (RTL)",
    interactive: true,
    exclude: true,
    component: navigation({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, createContent: createContent, rtl: true, drawerOpts: {
        backdrop: true,
        anchor: "end",
        z: 1
      } })
  },

  // Dark tone

  {
    name: "Default drawer -- dark tone class",
    interactive: true,
    exclude: true,
    className: "pe-dark-tone",
    component: navigation({ renderer: renderer$$1, keys: keys$$1, Drawer: Drawer$$1, Toolbar: Toolbar$$1, IconButton: IconButton$$1, createContent: createContent, dark: true, drawerOpts: {
        backdrop: true,
        z: 1
      } })
  }];
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var mithril = createCommonjsModule(function (module) {
	new function () {

		function Vnode(tag, key, attrs0, children, text, dom) {
			return { tag: tag, key: key, attrs: attrs0, children: children, text: text, dom: dom, domSize: undefined, state: {}, events: undefined, instance: undefined, skip: false };
		}
		Vnode.normalize = function (node) {
			if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined);
			if (node != null && (typeof node === "undefined" ? "undefined" : _typeof(node)) !== "object") return Vnode("#", undefined, undefined, node === false ? "" : node, undefined, undefined);
			return node;
		};
		Vnode.normalizeChildren = function normalizeChildren(children) {
			for (var i = 0; i < children.length; i++) {
				children[i] = Vnode.normalize(children[i]);
			}
			return children;
		};
		var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g;
		var selectorCache = {};
		function hyperscript(selector) {
			if (selector == null || typeof selector !== "string" && typeof selector.view !== "function") {
				throw Error("The selector must be either a string or a component.");
			}
			if (typeof selector === "string" && selectorCache[selector] === undefined) {
				var match,
				    tag,
				    classes = [],
				    attributes = {};
				while (match = selectorParser.exec(selector)) {
					var type = match[1],
					    value = match[2];
					if (type === "" && value !== "") tag = value;else if (type === "#") attributes.id = value;else if (type === ".") classes.push(value);else if (match[3][0] === "[") {
						var attrValue = match[6];
						if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\");
						if (match[4] === "class") classes.push(attrValue);else attributes[match[4]] = attrValue || true;
					}
				}
				if (classes.length > 0) attributes.className = classes.join(" ");
				selectorCache[selector] = function (attrs, children) {
					var hasAttrs = false,
					    childList,
					    text;
					var className = attrs.className || attrs.class;
					for (var key in attributes) {
						attrs[key] = attributes[key];
					}if (className !== undefined) {
						if (attrs.class !== undefined) {
							attrs.class = undefined;
							attrs.className = className;
						}
						if (attributes.className !== undefined) attrs.className = attributes.className + " " + className;
					}
					for (var key in attrs) {
						if (key !== "key") {
							hasAttrs = true;
							break;
						}
					}
					if (Array.isArray(children) && children.length == 1 && children[0] != null && children[0].tag === "#") text = children[0].children;else childList = children;
					return Vnode(tag || "div", attrs.key, hasAttrs ? attrs : undefined, childList, text, undefined);
				};
			}
			var attrs, children, childrenIndex;
			if (arguments[1] == null || _typeof(arguments[1]) === "object" && arguments[1].tag === undefined && !Array.isArray(arguments[1])) {
				attrs = arguments[1];
				childrenIndex = 2;
			} else childrenIndex = 1;
			if (arguments.length === childrenIndex + 1) {
				children = Array.isArray(arguments[childrenIndex]) ? arguments[childrenIndex] : [arguments[childrenIndex]];
			} else {
				children = [];
				for (var i = childrenIndex; i < arguments.length; i++) {
					children.push(arguments[i]);
				}
			}
			if (typeof selector === "string") return selectorCache[selector](attrs || {}, Vnode.normalizeChildren(children));
			return Vnode(selector, attrs && attrs.key, attrs || {}, Vnode.normalizeChildren(children), undefined, undefined);
		}
		hyperscript.trust = function (html) {
			if (html == null) html = "";
			return Vnode("<", undefined, undefined, html, undefined, undefined);
		};
		hyperscript.fragment = function (attrs1, children) {
			return Vnode("[", attrs1.key, attrs1, Vnode.normalizeChildren(children), undefined, undefined);
		};
		var m = hyperscript;
		/** @constructor */
		var PromisePolyfill = function PromisePolyfill(executor) {
			if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`");
			if (typeof executor !== "function") throw new TypeError("executor must be a function");
			var self = this,
			    resolvers = [],
			    rejectors = [],
			    resolveCurrent = handler(resolvers, true),
			    rejectCurrent = handler(rejectors, false);
			var instance = self._instance = { resolvers: resolvers, rejectors: rejectors };
			var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout;
			function handler(list, shouldAbsorb) {
				return function execute(value) {
					var then;
					try {
						if (shouldAbsorb && value != null && ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
							if (value === self) throw new TypeError("Promise can't be resolved w/ itself");
							executeOnce(then.bind(value));
						} else {
							callAsync(function () {
								if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value);
								for (var i = 0; i < list.length; i++) {
									list[i](value);
								}resolvers.length = 0, rejectors.length = 0;
								instance.state = shouldAbsorb;
								instance.retry = function () {
									execute(value);
								};
							});
						}
					} catch (e) {
						rejectCurrent(e);
					}
				};
			}
			function executeOnce(then) {
				var runs = 0;
				function run(fn) {
					return function (value) {
						if (runs++ > 0) return;
						fn(value);
					};
				}
				var onerror = run(rejectCurrent);
				try {
					then(run(resolveCurrent), onerror);
				} catch (e) {
					onerror(e);
				}
			}
			executeOnce(executor);
		};
		PromisePolyfill.prototype.then = function (onFulfilled, onRejection) {
			var self = this,
			    instance = self._instance;
			function handle(callback, list, next, state) {
				list.push(function (value) {
					if (typeof callback !== "function") next(value);else try {
						resolveNext(callback(value));
					} catch (e) {
						if (rejectNext) rejectNext(e);
					}
				});
				if (typeof instance.retry === "function" && state === instance.state) instance.retry();
			}
			var resolveNext, rejectNext;
			var promise = new PromisePolyfill(function (resolve, reject) {
				resolveNext = resolve, rejectNext = reject;
			});
			handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false);
			return promise;
		};
		PromisePolyfill.prototype.catch = function (onRejection) {
			return this.then(null, onRejection);
		};
		PromisePolyfill.resolve = function (value) {
			if (value instanceof PromisePolyfill) return value;
			return new PromisePolyfill(function (resolve) {
				resolve(value);
			});
		};
		PromisePolyfill.reject = function (value) {
			return new PromisePolyfill(function (resolve, reject) {
				reject(value);
			});
		};
		PromisePolyfill.all = function (list) {
			return new PromisePolyfill(function (resolve, reject) {
				var total = list.length,
				    count = 0,
				    values = [];
				if (list.length === 0) resolve([]);else for (var i = 0; i < list.length; i++) {
					(function (i) {
						function consume(value) {
							count++;
							values[i] = value;
							if (count === total) resolve(values);
						}
						if (list[i] != null && (_typeof(list[i]) === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
							list[i].then(consume, reject);
						} else consume(list[i]);
					})(i);
				}
			});
		};
		PromisePolyfill.race = function (list) {
			return new PromisePolyfill(function (resolve, reject) {
				for (var i = 0; i < list.length; i++) {
					list[i].then(resolve, reject);
				}
			});
		};
		if (typeof window !== "undefined") {
			if (typeof window.Promise === "undefined") window.Promise = PromisePolyfill;
			var PromisePolyfill = window.Promise;
		} else if (typeof commonjsGlobal !== "undefined") {
			if (typeof commonjsGlobal.Promise === "undefined") commonjsGlobal.Promise = PromisePolyfill;
			var PromisePolyfill = commonjsGlobal.Promise;
		} else {}
		var buildQueryString = function buildQueryString(object) {
			if (Object.prototype.toString.call(object) !== "[object Object]") return "";
			var args = [];
			for (var key0 in object) {
				destructure(key0, object[key0]);
			}
			return args.join("&");
			function destructure(key0, value) {
				if (Array.isArray(value)) {
					for (var i = 0; i < value.length; i++) {
						destructure(key0 + "[" + i + "]", value[i]);
					}
				} else if (Object.prototype.toString.call(value) === "[object Object]") {
					for (var i in value) {
						destructure(key0 + "[" + i + "]", value[i]);
					}
				} else args.push(encodeURIComponent(key0) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""));
			}
		};
		var _8 = function _8($window, Promise) {
			var callbackCount = 0;
			var oncompletion;
			function setCompletionCallback(callback) {
				oncompletion = callback;
			}
			function finalizer() {
				var count = 0;
				function complete() {
					if (--count === 0 && typeof oncompletion === "function") oncompletion();
				}
				return function finalize(promise0) {
					var then0 = promise0.then;
					promise0.then = function () {
						count++;
						var next = then0.apply(promise0, arguments);
						next.then(complete, function (e) {
							complete();
							if (count === 0) throw e;
						});
						return finalize(next);
					};
					return promise0;
				};
			}
			function normalize(args, extra) {
				if (typeof args === "string") {
					var url = args;
					args = extra || {};
					if (args.url == null) args.url = url;
				}
				return args;
			}
			function request(args, extra) {
				var finalize = finalizer();
				args = normalize(args, extra);
				var promise0 = new Promise(function (resolve, reject) {
					if (args.method == null) args.method = "GET";
					args.method = args.method.toUpperCase();
					var useBody = typeof args.useBody === "boolean" ? args.useBody : args.method !== "GET" && args.method !== "TRACE";
					if (typeof args.serialize !== "function") args.serialize = typeof FormData !== "undefined" && args.data instanceof FormData ? function (value) {
						return value;
					} : JSON.stringify;
					if (typeof args.deserialize !== "function") args.deserialize = deserialize;
					if (typeof args.extract !== "function") args.extract = extract;
					args.url = interpolate(args.url, args.data);
					if (useBody) args.data = args.serialize(args.data);else args.url = assemble(args.url, args.data);
					var xhr = new $window.XMLHttpRequest();
					xhr.open(args.method, args.url, typeof args.async === "boolean" ? args.async : true, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined);
					if (args.serialize === JSON.stringify && useBody) {
						xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
					}
					if (args.deserialize === deserialize) {
						xhr.setRequestHeader("Accept", "application/json, text/*");
					}
					if (args.withCredentials) xhr.withCredentials = args.withCredentials;
					for (var key in args.headers) {
						if ({}.hasOwnProperty.call(args.headers, key)) {
							xhr.setRequestHeader(key, args.headers[key]);
						}
					}if (typeof args.config === "function") xhr = args.config(xhr, args) || xhr;
					xhr.onreadystatechange = function () {
						// Don't throw errors on xhr.abort(). XMLHttpRequests ends up in a state of
						// xhr.status == 0 and xhr.readyState == 4 if aborted after open, but before completion.
						if (xhr.status && xhr.readyState === 4) {
							try {
								var response = args.extract !== extract ? args.extract(xhr, args) : args.deserialize(args.extract(xhr, args));
								if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
									resolve(cast(args.type, response));
								} else {
									var error = new Error(xhr.responseText);
									for (var key in response) {
										error[key] = response[key];
									}reject(error);
								}
							} catch (e) {
								reject(e);
							}
						}
					};
					if (useBody && args.data != null) xhr.send(args.data);else xhr.send();
				});
				return args.background === true ? promise0 : finalize(promise0);
			}
			function jsonp(args, extra) {
				var finalize = finalizer();
				args = normalize(args, extra);
				var promise0 = new Promise(function (resolve, reject) {
					var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++;
					var script = $window.document.createElement("script");
					$window[callbackName] = function (data) {
						script.parentNode.removeChild(script);
						resolve(cast(args.type, data));
						delete $window[callbackName];
					};
					script.onerror = function () {
						script.parentNode.removeChild(script);
						reject(new Error("JSONP request failed"));
						delete $window[callbackName];
					};
					if (args.data == null) args.data = {};
					args.url = interpolate(args.url, args.data);
					args.data[args.callbackKey || "callback"] = callbackName;
					script.src = assemble(args.url, args.data);
					$window.document.documentElement.appendChild(script);
				});
				return args.background === true ? promise0 : finalize(promise0);
			}
			function interpolate(url, data) {
				if (data == null) return url;
				var tokens = url.match(/:[^\/]+/gi) || [];
				for (var i = 0; i < tokens.length; i++) {
					var key = tokens[i].slice(1);
					if (data[key] != null) {
						url = url.replace(tokens[i], data[key]);
					}
				}
				return url;
			}
			function assemble(url, data) {
				var querystring = buildQueryString(data);
				if (querystring !== "") {
					var prefix = url.indexOf("?") < 0 ? "?" : "&";
					url += prefix + querystring;
				}
				return url;
			}
			function deserialize(data) {
				try {
					return data !== "" ? JSON.parse(data) : null;
				} catch (e) {
					throw new Error(data);
				}
			}
			function extract(xhr) {
				return xhr.responseText;
			}
			function cast(type0, data) {
				if (typeof type0 === "function") {
					if (Array.isArray(data)) {
						for (var i = 0; i < data.length; i++) {
							data[i] = new type0(data[i]);
						}
					} else return new type0(data);
				}
				return data;
			}
			return { request: request, jsonp: jsonp, setCompletionCallback: setCompletionCallback };
		};
		var requestService = _8(window, PromisePolyfill);
		var coreRenderer = function coreRenderer($window) {
			var $doc = $window.document;
			var $emptyFragment = $doc.createDocumentFragment();
			var onevent;
			function setEventCallback(callback) {
				return onevent = callback;
			}
			//create
			function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
				for (var i = start; i < end; i++) {
					var vnode = vnodes[i];
					if (vnode != null) {
						createNode(parent, vnode, hooks, ns, nextSibling);
					}
				}
			}
			function createNode(parent, vnode, hooks, ns, nextSibling) {
				var tag = vnode.tag;
				if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
				if (typeof tag === "string") {
					switch (tag) {
						case "#":
							return createText(parent, vnode, nextSibling);
						case "<":
							return createHTML(parent, vnode, nextSibling);
						case "[":
							return createFragment(parent, vnode, hooks, ns, nextSibling);
						default:
							return createElement(parent, vnode, hooks, ns, nextSibling);
					}
				} else return createComponent(parent, vnode, hooks, ns, nextSibling);
			}
			function createText(parent, vnode, nextSibling) {
				vnode.dom = $doc.createTextNode(vnode.children);
				insertNode(parent, vnode.dom, nextSibling);
				return vnode.dom;
			}
			function createHTML(parent, vnode, nextSibling) {
				var match1 = vnode.children.match(/^\s*?<(\w+)/im) || [];
				var parent1 = { caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup" }[match1[1]] || "div";
				var temp = $doc.createElement(parent1);
				temp.innerHTML = vnode.children;
				vnode.dom = temp.firstChild;
				vnode.domSize = temp.childNodes.length;
				var fragment = $doc.createDocumentFragment();
				var child;
				while (child = temp.firstChild) {
					fragment.appendChild(child);
				}
				insertNode(parent, fragment, nextSibling);
				return fragment;
			}
			function createFragment(parent, vnode, hooks, ns, nextSibling) {
				var fragment = $doc.createDocumentFragment();
				if (vnode.children != null) {
					var children = vnode.children;
					createNodes(fragment, children, 0, children.length, hooks, null, ns);
				}
				vnode.dom = fragment.firstChild;
				vnode.domSize = fragment.childNodes.length;
				insertNode(parent, fragment, nextSibling);
				return fragment;
			}
			function createElement(parent, vnode, hooks, ns, nextSibling) {
				var tag = vnode.tag;
				switch (vnode.tag) {
					case "svg":
						ns = "http://www.w3.org/2000/svg";break;
					case "math":
						ns = "http://www.w3.org/1998/Math/MathML";break;
				}
				var attrs2 = vnode.attrs;
				var is = attrs2 && attrs2.is;
				var element = ns ? is ? $doc.createElementNS(ns, tag, { is: is }) : $doc.createElementNS(ns, tag) : is ? $doc.createElement(tag, { is: is }) : $doc.createElement(tag);
				vnode.dom = element;
				if (attrs2 != null) {
					setAttrs(vnode, attrs2, ns);
				}
				insertNode(parent, element, nextSibling);
				if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
					setContentEditable(vnode);
				} else {
					if (vnode.text != null) {
						if (vnode.text !== "") element.textContent = vnode.text;else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)];
					}
					if (vnode.children != null) {
						var children = vnode.children;
						createNodes(element, children, 0, children.length, hooks, null, ns);
						setLateAttrs(vnode);
					}
				}
				return element;
			}
			function createComponent(parent, vnode, hooks, ns, nextSibling) {
				vnode.state = Object.create(vnode.tag);
				var view = vnode.tag.view;
				if (view.reentrantLock != null) return $emptyFragment;
				view.reentrantLock = true;
				initLifecycle(vnode.tag, vnode, hooks);
				vnode.instance = Vnode.normalize(view.call(vnode.state, vnode));
				view.reentrantLock = null;
				if (vnode.instance != null) {
					if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as arguments");
					var element = createNode(parent, vnode.instance, hooks, ns, nextSibling);
					vnode.dom = vnode.instance.dom;
					vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0;
					insertNode(parent, element, nextSibling);
					return element;
				} else {
					vnode.domSize = 0;
					return $emptyFragment;
				}
			}
			//update
			function updateNodes(parent, old, vnodes, recycling, hooks, nextSibling, ns) {
				if (old === vnodes || old == null && vnodes == null) return;else if (old == null) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, undefined);else if (vnodes == null) removeNodes(old, 0, old.length, vnodes);else {
					if (old.length === vnodes.length) {
						var isUnkeyed = false;
						for (var i = 0; i < vnodes.length; i++) {
							if (vnodes[i] != null && old[i] != null) {
								isUnkeyed = vnodes[i].key == null && old[i].key == null;
								break;
							}
						}
						if (isUnkeyed) {
							for (var i = 0; i < old.length; i++) {
								if (old[i] === vnodes[i]) continue;else if (old[i] == null && vnodes[i] != null) createNode(parent, vnodes[i], hooks, ns, getNextSibling(old, i + 1, nextSibling));else if (vnodes[i] == null) removeNodes(old, i, i + 1, vnodes);else updateNode(parent, old[i], vnodes[i], hooks, getNextSibling(old, i + 1, nextSibling), false, ns);
							}
							return;
						}
					}
					recycling = recycling || isRecyclable(old, vnodes);
					if (recycling) old = old.concat(old.pool);

					var oldStart = 0,
					    start = 0,
					    oldEnd = old.length - 1,
					    end = vnodes.length - 1,
					    map;
					while (oldEnd >= oldStart && end >= start) {
						var o = old[oldStart],
						    v = vnodes[start];
						if (o === v && !recycling) oldStart++, start++;else if (o == null) oldStart++;else if (v == null) start++;else if (o.key === v.key) {
							oldStart++, start++;
							updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), recycling, ns);
							if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling);
						} else {
							var o = old[oldEnd];
							if (o === v && !recycling) oldEnd--, start++;else if (o == null) oldEnd--;else if (v == null) start++;else if (o.key === v.key) {
								updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns);
								if (recycling || start < end) insertNode(parent, toFragment(o), getNextSibling(old, oldStart, nextSibling));
								oldEnd--, start++;
							} else break;
						}
					}
					while (oldEnd >= oldStart && end >= start) {
						var o = old[oldEnd],
						    v = vnodes[end];
						if (o === v && !recycling) oldEnd--, end--;else if (o == null) oldEnd--;else if (v == null) end--;else if (o.key === v.key) {
							updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns);
							if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling);
							if (o.dom != null) nextSibling = o.dom;
							oldEnd--, end--;
						} else {
							if (!map) map = getKeyMap(old, oldEnd);
							if (v != null) {
								var oldIndex = map[v.key];
								if (oldIndex != null) {
									var movable = old[oldIndex];
									updateNode(parent, movable, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns);
									insertNode(parent, toFragment(movable), nextSibling);
									old[oldIndex].skip = true;
									if (movable.dom != null) nextSibling = movable.dom;
								} else {
									var dom = createNode(parent, v, hooks, undefined, nextSibling);
									nextSibling = dom;
								}
							}
							end--;
						}
						if (end < start) break;
					}
					createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
					removeNodes(old, oldStart, oldEnd + 1, vnodes);
				}
			}
			function updateNode(parent, old, vnode, hooks, nextSibling, recycling, ns) {
				var oldTag = old.tag,
				    tag = vnode.tag;
				if (oldTag === tag) {
					vnode.state = old.state;
					vnode.events = old.events;
					if (shouldUpdate(vnode, old)) return;
					if (vnode.attrs != null) {
						updateLifecycle(vnode.attrs, vnode, hooks, recycling);
					}
					if (typeof oldTag === "string") {
						switch (oldTag) {
							case "#":
								updateText(old, vnode);break;
							case "<":
								updateHTML(parent, old, vnode, nextSibling);break;
							case "[":
								updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns);break;
							default:
								updateElement(old, vnode, recycling, hooks, ns);
						}
					} else updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns);
				} else {
					removeNode(old, null);
					createNode(parent, vnode, hooks, ns, nextSibling);
				}
			}
			function updateText(old, vnode) {
				if (old.children.toString() !== vnode.children.toString()) {
					old.dom.nodeValue = vnode.children;
				}
				vnode.dom = old.dom;
			}
			function updateHTML(parent, old, vnode, nextSibling) {
				if (old.children !== vnode.children) {
					toFragment(old);
					createHTML(parent, vnode, nextSibling);
				} else vnode.dom = old.dom, vnode.domSize = old.domSize;
			}
			function updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns) {
				updateNodes(parent, old.children, vnode.children, recycling, hooks, nextSibling, ns);
				var domSize = 0,
				    children = vnode.children;
				vnode.dom = null;
				if (children != null) {
					for (var i = 0; i < children.length; i++) {
						var child = children[i];
						if (child != null && child.dom != null) {
							if (vnode.dom == null) vnode.dom = child.dom;
							domSize += child.domSize || 1;
						}
					}
					if (domSize !== 1) vnode.domSize = domSize;
				}
			}
			function updateElement(old, vnode, recycling, hooks, ns) {
				var element = vnode.dom = old.dom;
				switch (vnode.tag) {
					case "svg":
						ns = "http://www.w3.org/2000/svg";break;
					case "math":
						ns = "http://www.w3.org/1998/Math/MathML";break;
				}
				if (vnode.tag === "textarea") {
					if (vnode.attrs == null) vnode.attrs = {};
					if (vnode.text != null) {
						vnode.attrs.value = vnode.text; //FIXME handle0 multiple children
						vnode.text = undefined;
					}
				}
				updateAttrs(vnode, old.attrs, vnode.attrs, ns);
				if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
					setContentEditable(vnode);
				} else if (old.text != null && vnode.text != null && vnode.text !== "") {
					if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text;
				} else {
					if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)];
					if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)];
					updateNodes(element, old.children, vnode.children, recycling, hooks, null, ns);
				}
			}
			function updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns) {
				vnode.instance = Vnode.normalize(vnode.tag.view.call(vnode.state, vnode));
				updateLifecycle(vnode.tag, vnode, hooks, recycling);
				if (vnode.instance != null) {
					if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling);else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, recycling, ns);
					vnode.dom = vnode.instance.dom;
					vnode.domSize = vnode.instance.domSize;
				} else if (old.instance != null) {
					removeNode(old.instance, null);
					vnode.dom = undefined;
					vnode.domSize = 0;
				} else {
					vnode.dom = old.dom;
					vnode.domSize = old.domSize;
				}
			}
			function isRecyclable(old, vnodes) {
				if (old.pool != null && Math.abs(old.pool.length - vnodes.length) <= Math.abs(old.length - vnodes.length)) {
					var oldChildrenLength = old[0] && old[0].children && old[0].children.length || 0;
					var poolChildrenLength = old.pool[0] && old.pool[0].children && old.pool[0].children.length || 0;
					var vnodesChildrenLength = vnodes[0] && vnodes[0].children && vnodes[0].children.length || 0;
					if (Math.abs(poolChildrenLength - vnodesChildrenLength) <= Math.abs(oldChildrenLength - vnodesChildrenLength)) {
						return true;
					}
				}
				return false;
			}
			function getKeyMap(vnodes, end) {
				var map = {},
				    i = 0;
				for (var i = 0; i < end; i++) {
					var vnode = vnodes[i];
					if (vnode != null) {
						var key2 = vnode.key;
						if (key2 != null) map[key2] = i;
					}
				}
				return map;
			}
			function toFragment(vnode) {
				var count0 = vnode.domSize;
				if (count0 != null || vnode.dom == null) {
					var fragment = $doc.createDocumentFragment();
					if (count0 > 0) {
						var dom = vnode.dom;
						while (--count0) {
							fragment.appendChild(dom.nextSibling);
						}fragment.insertBefore(dom, fragment.firstChild);
					}
					return fragment;
				} else return vnode.dom;
			}
			function getNextSibling(vnodes, i, nextSibling) {
				for (; i < vnodes.length; i++) {
					if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom;
				}
				return nextSibling;
			}
			function insertNode(parent, dom, nextSibling) {
				if (nextSibling && nextSibling.parentNode) parent.insertBefore(dom, nextSibling);else parent.appendChild(dom);
			}
			function setContentEditable(vnode) {
				var children = vnode.children;
				if (children != null && children.length === 1 && children[0].tag === "<") {
					var content = children[0].children;
					if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content;
				} else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted");
			}
			//remove
			function removeNodes(vnodes, start, end, context) {
				for (var i = start; i < end; i++) {
					var vnode = vnodes[i];
					if (vnode != null) {
						if (vnode.skip) vnode.skip = false;else removeNode(vnode, context);
					}
				}
			}
			function removeNode(vnode, context) {
				var expected = 1,
				    called = 0;
				if (vnode.attrs && vnode.attrs.onbeforeremove) {
					var result = vnode.attrs.onbeforeremove.call(vnode.state, vnode);
					if (result != null && typeof result.then === "function") {
						expected++;
						result.then(continuation, continuation);
					}
				}
				if (typeof vnode.tag !== "string" && vnode.tag.onbeforeremove) {
					var result = vnode.tag.onbeforeremove.call(vnode.state, vnode);
					if (result != null && typeof result.then === "function") {
						expected++;
						result.then(continuation, continuation);
					}
				}
				continuation();
				function continuation() {
					if (++called === expected) {
						onremove(vnode);
						if (vnode.dom) {
							var count0 = vnode.domSize || 1;
							if (count0 > 1) {
								var dom = vnode.dom;
								while (--count0) {
									removeNodeFromDOM(dom.nextSibling);
								}
							}
							removeNodeFromDOM(vnode.dom);
							if (context != null && vnode.domSize == null && !hasIntegrationMethods(vnode.attrs) && typeof vnode.tag === "string") {
								//TODO test custom elements
								if (!context.pool) context.pool = [vnode];else context.pool.push(vnode);
							}
						}
					}
				}
			}
			function removeNodeFromDOM(node) {
				var parent = node.parentNode;
				if (parent != null) parent.removeChild(node);
			}
			function onremove(vnode) {
				if (vnode.attrs && vnode.attrs.onremove) vnode.attrs.onremove.call(vnode.state, vnode);
				if (typeof vnode.tag !== "string" && vnode.tag.onremove) vnode.tag.onremove.call(vnode.state, vnode);
				if (vnode.instance != null) onremove(vnode.instance);else {
					var children = vnode.children;
					if (Array.isArray(children)) {
						for (var i = 0; i < children.length; i++) {
							var child = children[i];
							if (child != null) onremove(child);
						}
					}
				}
			}
			//attrs2
			function setAttrs(vnode, attrs2, ns) {
				for (var key2 in attrs2) {
					setAttr(vnode, key2, null, attrs2[key2], ns);
				}
			}
			function setAttr(vnode, key2, old, value, ns) {
				var element = vnode.dom;
				if (key2 === "key" || key2 === "is" || old === value && !isFormAttribute(vnode, key2) && (typeof value === "undefined" ? "undefined" : _typeof(value)) !== "object" || typeof value === "undefined" || isLifecycleMethod(key2)) return;
				var nsLastIndex = key2.indexOf(":");
				if (nsLastIndex > -1 && key2.substr(0, nsLastIndex) === "xlink") {
					element.setAttributeNS("http://www.w3.org/1999/xlink", key2.slice(nsLastIndex + 1), value);
				} else if (key2[0] === "o" && key2[1] === "n" && typeof value === "function") updateEvent(vnode, key2, value);else if (key2 === "style") updateStyle(element, old, value);else if (key2 in element && !isAttribute(key2) && ns === undefined && !isCustomElement(vnode)) {
					//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
					if (vnode.tag === "input" && key2 === "value" && vnode.dom.value === value && vnode.dom === $doc.activeElement) return;
					//setting select[value] to same value while having select open blinks select dropdown in Chrome
					if (vnode.tag === "select" && key2 === "value" && vnode.dom.value === value && vnode.dom === $doc.activeElement) return;
					//setting option[value] to same value while having select open blinks select dropdown in Chrome
					if (vnode.tag === "option" && key2 === "value" && vnode.dom.value === value) return;
					element[key2] = value;
				} else {
					if (typeof value === "boolean") {
						if (value) element.setAttribute(key2, "");else element.removeAttribute(key2);
					} else element.setAttribute(key2 === "className" ? "class" : key2, value);
				}
			}
			function setLateAttrs(vnode) {
				var attrs2 = vnode.attrs;
				if (vnode.tag === "select" && attrs2 != null) {
					if ("value" in attrs2) setAttr(vnode, "value", null, attrs2.value, undefined);
					if ("selectedIndex" in attrs2) setAttr(vnode, "selectedIndex", null, attrs2.selectedIndex, undefined);
				}
			}
			function updateAttrs(vnode, old, attrs2, ns) {
				if (attrs2 != null) {
					for (var key2 in attrs2) {
						setAttr(vnode, key2, old && old[key2], attrs2[key2], ns);
					}
				}
				if (old != null) {
					for (var key2 in old) {
						if (attrs2 == null || !(key2 in attrs2)) {
							if (key2 === "className") key2 = "class";
							if (key2[0] === "o" && key2[1] === "n" && !isLifecycleMethod(key2)) updateEvent(vnode, key2, undefined);else if (key2 !== "key") vnode.dom.removeAttribute(key2);
						}
					}
				}
			}
			function isFormAttribute(vnode, attr) {
				return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === $doc.activeElement;
			}
			function isLifecycleMethod(attr) {
				return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate";
			}
			function isAttribute(attr) {
				return attr === "href" || attr === "list" || attr === "form" || attr === "width" || attr === "height"; // || attr === "type"
			}
			function isCustomElement(vnode) {
				return vnode.attrs.is || vnode.tag.indexOf("-") > -1;
			}
			function hasIntegrationMethods(source) {
				return source != null && (source.oncreate || source.onupdate || source.onbeforeremove || source.onremove);
			}
			//style
			function updateStyle(element, old, style) {
				if (old === style) element.style.cssText = "", old = null;
				if (style == null) element.style.cssText = "";else if (typeof style === "string") element.style.cssText = style;else {
					if (typeof old === "string") element.style.cssText = "";
					for (var key2 in style) {
						element.style[key2] = style[key2];
					}
					if (old != null && typeof old !== "string") {
						for (var key2 in old) {
							if (!(key2 in style)) element.style[key2] = "";
						}
					}
				}
			}
			//event
			function updateEvent(vnode, key2, value) {
				var element = vnode.dom;
				var callback = typeof onevent !== "function" ? value : function (e) {
					var result = value.call(element, e);
					onevent.call(element, e);
					return result;
				};
				if (key2 in element) element[key2] = typeof value === "function" ? callback : null;else {
					var eventName = key2.slice(2);
					if (vnode.events === undefined) vnode.events = {};
					if (vnode.events[key2] === callback) return;
					if (vnode.events[key2] != null) element.removeEventListener(eventName, vnode.events[key2], false);
					if (typeof value === "function") {
						vnode.events[key2] = callback;
						element.addEventListener(eventName, vnode.events[key2], false);
					}
				}
			}
			//lifecycle
			function initLifecycle(source, vnode, hooks) {
				if (typeof source.oninit === "function") source.oninit.call(vnode.state, vnode);
				if (typeof source.oncreate === "function") hooks.push(source.oncreate.bind(vnode.state, vnode));
			}
			function updateLifecycle(source, vnode, hooks, recycling) {
				if (recycling) initLifecycle(source, vnode, hooks);else if (typeof source.onupdate === "function") hooks.push(source.onupdate.bind(vnode.state, vnode));
			}
			function shouldUpdate(vnode, old) {
				var forceVnodeUpdate, forceComponentUpdate;
				if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") forceVnodeUpdate = vnode.attrs.onbeforeupdate.call(vnode.state, vnode, old);
				if (typeof vnode.tag !== "string" && typeof vnode.tag.onbeforeupdate === "function") forceComponentUpdate = vnode.tag.onbeforeupdate.call(vnode.state, vnode, old);
				if (!(forceVnodeUpdate === undefined && forceComponentUpdate === undefined) && !forceVnodeUpdate && !forceComponentUpdate) {
					vnode.dom = old.dom;
					vnode.domSize = old.domSize;
					vnode.instance = old.instance;
					return true;
				}
				return false;
			}
			function render(dom, vnodes) {
				if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");
				var hooks = [];
				var active = $doc.activeElement;
				// First time0 rendering into a node clears it out
				if (dom.vnodes == null) dom.textContent = "";
				if (!Array.isArray(vnodes)) vnodes = [vnodes];
				updateNodes(dom, dom.vnodes, Vnode.normalizeChildren(vnodes), false, hooks, null, undefined);
				dom.vnodes = vnodes;
				for (var i = 0; i < hooks.length; i++) {
					hooks[i]();
				}if ($doc.activeElement !== active) active.focus();
			}
			return { render: render, setEventCallback: setEventCallback };
		};
		function throttle(callback) {
			//60fps translates to 16.6ms, round it down since setTimeout requires int
			var time = 16;
			var last = 0,
			    pending = null;
			var timeout = typeof requestAnimationFrame === "function" ? requestAnimationFrame : setTimeout;
			return function () {
				var now = Date.now();
				if (last === 0 || now - last >= time) {
					last = now;
					callback();
				} else if (pending === null) {
					pending = timeout(function () {
						pending = null;
						callback();
						last = Date.now();
					}, time - (now - last));
				}
			};
		}
		var _11 = function _11($window) {
			var renderService = coreRenderer($window);
			renderService.setEventCallback(function (e) {
				if (e.redraw !== false) redraw();
			});
			var callbacks = [];
			function subscribe(key1, callback) {
				unsubscribe(key1);
				callbacks.push(key1, throttle(callback));
			}
			function unsubscribe(key1) {
				var index = callbacks.indexOf(key1);
				if (index > -1) callbacks.splice(index, 2);
			}
			function redraw() {
				for (var i = 1; i < callbacks.length; i += 2) {
					callbacks[i]();
				}
			}
			return { subscribe: subscribe, unsubscribe: unsubscribe, redraw: redraw, render: renderService.render };
		};
		var redrawService = _11(window);
		requestService.setCompletionCallback(redrawService.redraw);
		var _16 = function _16(redrawService0) {
			return function (root, component) {
				if (component === null) {
					redrawService0.render(root, []);
					redrawService0.unsubscribe(root);
					return;
				}

				if (component.view == null) throw new Error("m.mount(element, component) expects a component, not a vnode");

				var run0 = function run0() {
					redrawService0.render(root, Vnode(component));
				};
				redrawService0.subscribe(root, run0);
				redrawService0.redraw();
			};
		};
		m.mount = _16(redrawService);
		var Promise = PromisePolyfill;
		var parseQueryString = function parseQueryString(string) {
			if (string === "" || string == null) return {};
			if (string.charAt(0) === "?") string = string.slice(1);
			var entries = string.split("&"),
			    data0 = {},
			    counters = {};
			for (var i = 0; i < entries.length; i++) {
				var entry = entries[i].split("=");
				var key5 = decodeURIComponent(entry[0]);
				var value = entry.length === 2 ? decodeURIComponent(entry[1]) : "";
				if (value === "true") value = true;else if (value === "false") value = false;
				var levels = key5.split(/\]\[?|\[/);
				var cursor = data0;
				if (key5.indexOf("[") > -1) levels.pop();
				for (var j = 0; j < levels.length; j++) {
					var level = levels[j],
					    nextLevel = levels[j + 1];
					var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10));
					var isValue = j === levels.length - 1;
					if (level === "") {
						var key5 = levels.slice(0, j).join();
						if (counters[key5] == null) counters[key5] = 0;
						level = counters[key5]++;
					}
					if (cursor[level] == null) {
						cursor[level] = isValue ? value : isNumber ? [] : {};
					}
					cursor = cursor[level];
				}
			}
			return data0;
		};
		var coreRouter = function coreRouter($window) {
			var supportsPushState = typeof $window.history.pushState === "function";
			var callAsync0 = typeof setImmediate === "function" ? setImmediate : setTimeout;
			function normalize1(fragment0) {
				var data = $window.location[fragment0].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent);
				if (fragment0 === "pathname" && data[0] !== "/") data = "/" + data;
				return data;
			}
			var asyncId;
			function debounceAsync(callback0) {
				return function () {
					if (asyncId != null) return;
					asyncId = callAsync0(function () {
						asyncId = null;
						callback0();
					});
				};
			}
			function parsePath(path, queryData, hashData) {
				var queryIndex = path.indexOf("?");
				var hashIndex = path.indexOf("#");
				var pathEnd = queryIndex > -1 ? queryIndex : hashIndex > -1 ? hashIndex : path.length;
				if (queryIndex > -1) {
					var queryEnd = hashIndex > -1 ? hashIndex : path.length;
					var queryParams = parseQueryString(path.slice(queryIndex + 1, queryEnd));
					for (var key4 in queryParams) {
						queryData[key4] = queryParams[key4];
					}
				}
				if (hashIndex > -1) {
					var hashParams = parseQueryString(path.slice(hashIndex + 1));
					for (var key4 in hashParams) {
						hashData[key4] = hashParams[key4];
					}
				}
				return path.slice(0, pathEnd);
			}
			var router = { prefix: "#!" };
			router.getPath = function () {
				var type2 = router.prefix.charAt(0);
				switch (type2) {
					case "#":
						return normalize1("hash").slice(router.prefix.length);
					case "?":
						return normalize1("search").slice(router.prefix.length) + normalize1("hash");
					default:
						return normalize1("pathname").slice(router.prefix.length) + normalize1("search") + normalize1("hash");
				}
			};
			router.setPath = function (path, data, options) {
				var queryData = {},
				    hashData = {};
				path = parsePath(path, queryData, hashData);
				if (data != null) {
					for (var key4 in data) {
						queryData[key4] = data[key4];
					}path = path.replace(/:([^\/]+)/g, function (match2, token) {
						delete queryData[token];
						return data[token];
					});
				}
				var query = buildQueryString(queryData);
				if (query) path += "?" + query;
				var hash = buildQueryString(hashData);
				if (hash) path += "#" + hash;
				if (supportsPushState) {
					var state = options ? options.state : null;
					var title = options ? options.title : null;
					$window.onpopstate();
					if (options && options.replace) $window.history.replaceState(state, title, router.prefix + path);else $window.history.pushState(state, title, router.prefix + path);
				} else $window.location.href = router.prefix + path;
			};
			router.defineRoutes = function (routes, resolve, reject) {
				function resolveRoute() {
					var path = router.getPath();
					var params = {};
					var pathname = parsePath(path, params, params);
					var state = $window.history.state;
					if (state != null) {
						for (var k in state) {
							params[k] = state[k];
						}
					}
					for (var route0 in routes) {
						var matcher = new RegExp("^" + route0.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$");
						if (matcher.test(pathname)) {
							pathname.replace(matcher, function () {
								var keys$$1 = route0.match(/:[^\/]+/g) || [];
								var values = [].slice.call(arguments, 1, -2);
								for (var i = 0; i < keys$$1.length; i++) {
									params[keys$$1[i].replace(/:|\./g, "")] = decodeURIComponent(values[i]);
								}
								resolve(routes[route0], params, path, route0);
							});
							return;
						}
					}
					reject(path, params);
				}
				if (supportsPushState) $window.onpopstate = debounceAsync(resolveRoute);else if (router.prefix.charAt(0) === "#") $window.onhashchange = resolveRoute;
				resolveRoute();
			};
			return router;
		};
		var _20 = function _20($window, redrawService0) {
			var routeService = coreRouter($window);
			var identity = function identity(v) {
				return v;
			};
			var render1, component, attrs3, currentPath, _lastUpdate;
			var route = function route(root, defaultRoute, routes) {
				if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");
				var run1 = function run1() {
					if (render1 != null) redrawService0.render(root, render1(Vnode(component, attrs3.key, attrs3)));
				};
				var bail = function bail(path) {
					if (path !== defaultRoute) routeService.setPath(defaultRoute, null, { replace: true });else throw new Error("Could not resolve default route " + defaultRoute);
				};
				routeService.defineRoutes(routes, function (payload, params, path) {
					var update = _lastUpdate = function lastUpdate(routeResolver, comp) {
						if (update !== _lastUpdate) return;
						component = comp != null && typeof comp.view === "function" ? comp : "div", attrs3 = params, currentPath = path, _lastUpdate = null;
						render1 = (routeResolver.render || identity).bind(routeResolver);
						run1();
					};
					if (payload.view) update({}, payload);else {
						if (payload.onmatch) {
							Promise.resolve(payload.onmatch(params, path)).then(function (resolved) {
								update(payload, resolved);
							}, bail);
						} else update(payload, "div");
					}
				}, bail);
				redrawService0.subscribe(root, run1);
			};
			route.set = function (path, data, options) {
				if (_lastUpdate != null) options = { replace: true };
				_lastUpdate = null;
				routeService.setPath(path, data, options);
			};
			route.get = function () {
				return currentPath;
			};
			route.prefix = function (prefix0) {
				routeService.prefix = prefix0;
			};
			route.link = function (vnode1) {
				vnode1.dom.setAttribute("href", routeService.prefix + vnode1.attrs.href);
				vnode1.dom.onclick = function (e) {
					if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return;
					e.preventDefault();
					e.redraw = false;
					var href = this.getAttribute("href");
					if (href.indexOf(routeService.prefix) === 0) href = href.slice(routeService.prefix.length);
					route.set(href, undefined, undefined);
				};
			};
			route.param = function (key3) {
				if (typeof attrs3 !== "undefined" && typeof key3 !== "undefined") return attrs3[key3];
				return attrs3;
			};
			return route;
		};
		m.route = _20(window, redrawService);
		m.withAttr = function (attrName, callback1, context) {
			return function (e) {
				callback1.call(context || this, attrName in e.currentTarget ? e.currentTarget[attrName] : e.currentTarget.getAttribute(attrName));
			};
		};
		var _28 = coreRenderer(window);
		m.render = _28.render;
		m.redraw = redrawService.redraw;
		m.request = requestService.request;
		m.jsonp = requestService.jsonp;
		m.parseQueryString = parseQueryString;
		m.buildQueryString = buildQueryString;
		m.version = "1.0.1";
		m.vnode = Vnode;
		module["exports"] = m;
	}();
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys$$1) { var target = {}; for (var i in obj) { if (keys$$1.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var AppDrawer = {
  oninit: function oninit(vnode) {
    vnode.state.show = false;
  },
  view: function view(_ref) {
    var state = _ref.state,
        attrs = _ref.attrs;

    var createContent = attrs.createContent,
        drawerOpts = _objectWithoutProperties(attrs, ["createContent"]);

    var listTileClick = function listTileClick() {
      return state.show = false;
    };
    return [mithril(RaisedButton, {
      label: "Show",
      events: {
        onclick: function onclick() {
          return state.show = true;
        }
      }
    }), mithril(Drawer, _extends$2({}, drawerOpts, {
      content: createContent({
        onClick: listTileClick
      }),
      show: state.show,
      didHide: function didHide() {
        return state.show = false;
      } // sync state with component
    }))];
  }
};

var mithrilTests = function mithrilTests() {

  var h = renderer;
  var createContent = function createContent(_ref) {
    var repeats = _ref.repeats,
        onClick = _ref.onClick;
    return navigationList({ renderer: renderer, keys: keys, Icon: Icon, List: List, ListTile: ListTile, repeats: repeats, onClick: onClick });
  };

  return [{
    section: "Mithril specific tests"
  }, {
    name: "App drawer",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return h(AppDrawer, {
          fixed: true,
          backdrop: true,
          createContent: createContent
        });
      }
    }
  }];
};

var testsMithril = [].concat(genericTests({ renderer: renderer, keys: keys, Drawer: Drawer, List: List, ListTile: ListTile, Icon: Icon, Toolbar: Toolbar, IconButton: IconButton, RaisedButton: RaisedButton })).concat(mithrilTests({ renderer: renderer, keys: keys, Drawer: Drawer, List: List, ListTile: ListTile, Icon: Icon, Toolbar: Toolbar, IconButton: IconButton, RaisedButton: RaisedButton }));

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(_extends$3({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

var emptyObject_1 = emptyObject;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

var emptyFunction_1 = emptyFunction;

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
var q = "function" === typeof Symbol && Symbol["for"],
    r = q ? Symbol["for"]("react.element") : 60103,
    t = q ? Symbol["for"]("react.call") : 60104,
    u = q ? Symbol["for"]("react.return") : 60105,
    v = q ? Symbol["for"]("react.portal") : 60106,
    w = q ? Symbol["for"]("react.fragment") : 60107,
    x = "function" === typeof Symbol && Symbol.iterator;
function y(a) {
  for (var b = arguments.length - 1, e = "Minified React error #" + a + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant\x3d" + a, c = 0; c < b; c++) {
    e += "\x26args[]\x3d" + encodeURIComponent(arguments[c + 1]);
  }b = Error(e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.");b.name = "Invariant Violation";b.framesToPop = 1;throw b;
}
var z = { isMounted: function isMounted() {
    return !1;
  }, enqueueForceUpdate: function enqueueForceUpdate() {}, enqueueReplaceState: function enqueueReplaceState() {}, enqueueSetState: function enqueueSetState() {} };function A(a, b, e) {
  this.props = a;this.context = b;this.refs = emptyObject_1;this.updater = e || z;
}A.prototype.isReactComponent = {};A.prototype.setState = function (a, b) {
  "object" !== (typeof a === 'undefined' ? 'undefined' : _typeof$1(a)) && "function" !== typeof a && null != a ? y("85") : void 0;this.updater.enqueueSetState(this, a, b, "setState");
};A.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function B(a, b, e) {
  this.props = a;this.context = b;this.refs = emptyObject_1;this.updater = e || z;
}function C() {}C.prototype = A.prototype;var D = B.prototype = new C();D.constructor = B;objectAssign(D, A.prototype);D.isPureReactComponent = !0;function E(a, b, e) {
  this.props = a;this.context = b;this.refs = emptyObject_1;this.updater = e || z;
}var F = E.prototype = new C();F.constructor = E;objectAssign(F, A.prototype);F.unstable_isAsyncReactComponent = !0;F.render = function () {
  return this.props.children;
};var G = { current: null },
    H = Object.prototype.hasOwnProperty,
    I = { key: !0, ref: !0, __self: !0, __source: !0 };
function J(a, b, e) {
  var c,
      d = {},
      g = null,
      k = null;if (null != b) for (c in void 0 !== b.ref && (k = b.ref), void 0 !== b.key && (g = "" + b.key), b) {
    H.call(b, c) && !I.hasOwnProperty(c) && (d[c] = b[c]);
  }var f = arguments.length - 2;if (1 === f) d.children = e;else if (1 < f) {
    for (var h = Array(f), l = 0; l < f; l++) {
      h[l] = arguments[l + 2];
    }d.children = h;
  }if (a && a.defaultProps) for (c in f = a.defaultProps, f) {
    void 0 === d[c] && (d[c] = f[c]);
  }return { $$typeof: r, type: a, key: g, ref: k, props: d, _owner: G.current };
}function K(a) {
  return "object" === (typeof a === 'undefined' ? 'undefined' : _typeof$1(a)) && null !== a && a.$$typeof === r;
}
function escape(a) {
  var b = { "\x3d": "\x3d0", ":": "\x3d2" };return "$" + ("" + a).replace(/[=:]/g, function (a) {
    return b[a];
  });
}var L = /\/+/g,
    M = [];function N(a, b, e, c) {
  if (M.length) {
    var d = M.pop();d.result = a;d.keyPrefix = b;d.func = e;d.context = c;d.count = 0;return d;
  }return { result: a, keyPrefix: b, func: e, context: c, count: 0 };
}function O(a) {
  a.result = null;a.keyPrefix = null;a.func = null;a.context = null;a.count = 0;10 > M.length && M.push(a);
}
function P(a, b, e, c) {
  var d = typeof a === 'undefined' ? 'undefined' : _typeof$1(a);if ("undefined" === d || "boolean" === d) a = null;var g = !1;if (null === a) g = !0;else switch (d) {case "string":case "number":
      g = !0;break;case "object":
      switch (a.$$typeof) {case r:case t:case u:case v:
          g = !0;}}if (g) return e(c, a, "" === b ? "." + Q(a, 0) : b), 1;g = 0;b = "" === b ? "." : b + ":";if (Array.isArray(a)) for (var k = 0; k < a.length; k++) {
    d = a[k];var f = b + Q(d, k);g += P(d, f, e, c);
  } else if (null === a || "undefined" === typeof a ? f = null : (f = x && a[x] || a["@@iterator"], f = "function" === typeof f ? f : null), "function" === typeof f) for (a = f.call(a), k = 0; !(d = a.next()).done;) {
    d = d.value, f = b + Q(d, k++), g += P(d, f, e, c);
  } else "object" === d && (e = "" + a, y("31", "[object Object]" === e ? "object with keys {" + Object.keys(a).join(", ") + "}" : e, ""));return g;
}function Q(a, b) {
  return "object" === (typeof a === 'undefined' ? 'undefined' : _typeof$1(a)) && null !== a && null != a.key ? escape(a.key) : b.toString(36);
}function R(a, b) {
  a.func.call(a.context, b, a.count++);
}
function S(a, b, e) {
  var c = a.result,
      d = a.keyPrefix;a = a.func.call(a.context, b, a.count++);Array.isArray(a) ? T(a, c, e, emptyFunction_1.thatReturnsArgument) : null != a && (K(a) && (b = d + (!a.key || b && b.key === a.key ? "" : ("" + a.key).replace(L, "$\x26/") + "/") + e, a = { $$typeof: r, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner }), c.push(a));
}function T(a, b, e, c, d) {
  var g = "";null != e && (g = ("" + e).replace(L, "$\x26/") + "/");b = N(b, g, c, d);null == a || P(a, "", S, b);O(b);
}
var U = { Children: { map: function map(a, b, e) {
      if (null == a) return a;var c = [];T(a, c, null, b, e);return c;
    }, forEach: function forEach(a, b, e) {
      if (null == a) return a;b = N(null, null, b, e);null == a || P(a, "", R, b);O(b);
    }, count: function count(a) {
      return null == a ? 0 : P(a, "", emptyFunction_1.thatReturnsNull, null);
    }, toArray: function toArray(a) {
      var b = [];T(a, b, null, emptyFunction_1.thatReturnsArgument);return b;
    }, only: function only(a) {
      K(a) ? void 0 : y("143");return a;
    } }, Component: A, PureComponent: B, unstable_AsyncComponent: E, Fragment: w, createElement: J, cloneElement: function cloneElement(a, b, e) {
    var c = objectAssign({}, a.props),
        d = a.key,
        g = a.ref,
        k = a._owner;if (null != b) {
      void 0 !== b.ref && (g = b.ref, k = G.current);void 0 !== b.key && (d = "" + b.key);if (a.type && a.type.defaultProps) var f = a.type.defaultProps;for (h in b) {
        H.call(b, h) && !I.hasOwnProperty(h) && (c[h] = void 0 === b[h] && void 0 !== f ? f[h] : b[h]);
      }
    }var h = arguments.length - 2;if (1 === h) c.children = e;else if (1 < h) {
      f = Array(h);for (var l = 0; l < h; l++) {
        f[l] = arguments[l + 2];
      }c.children = f;
    }return { $$typeof: r, type: a.type, key: d, ref: g, props: c, _owner: k };
  }, createFactory: function createFactory(a) {
    var b = J.bind(null, a);b.type = a;return b;
  },
  isValidElement: K, version: "16.2.0", __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: { ReactCurrentOwner: G, assign: objectAssign } },
    V = Object.freeze({ default: U }),
    W = V && U || V;var react_production_min = W["default"] ? W["default"] : W;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

var invariant_1 = invariant;

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var warning_1 = warning;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== 'production') {
  var invariant$1 = invariant_1;
  var warning$1 = warning_1;
  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant$1(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, _typeof$2(typeSpecs[typeSpecName]));
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$1);
        } catch (ex) {
          error = ex;
        }
        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof$2(error));
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var react_development = createCommonjsModule(function (module) {

  if (process.env.NODE_ENV !== "production") {
    (function () {

      var _assign = objectAssign;
      var emptyObject = emptyObject_1;
      var invariant = invariant_1;
      var warning = warning_1;
      var emptyFunction = emptyFunction_1;
      var checkPropTypes = checkPropTypes_1;

      // TODO: this is special because it gets imported during build.

      var ReactVersion = '16.2.0';

      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.
      var hasSymbol = typeof Symbol === 'function' && Symbol['for'];

      var REACT_ELEMENT_TYPE = hasSymbol ? Symbol['for']('react.element') : 0xeac7;
      var REACT_CALL_TYPE = hasSymbol ? Symbol['for']('react.call') : 0xeac8;
      var REACT_RETURN_TYPE = hasSymbol ? Symbol['for']('react.return') : 0xeac9;
      var REACT_PORTAL_TYPE = hasSymbol ? Symbol['for']('react.portal') : 0xeaca;
      var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol['for']('react.fragment') : 0xeacb;

      var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = '@@iterator';

      function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable === 'undefined') {
          return null;
        }
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === 'function') {
          return maybeIterator;
        }
        return null;
      }

      /**
       * WARNING: DO NOT manually require this module.
       * This is a replacement for `invariant(...)` used by the error code system
       * and will _only_ be required by the corresponding babel pass.
       * It always throws.
       */

      /**
       * Forked from fbjs/warning:
       * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
       *
       * Only change is we use console.warn instead of console.error,
       * and do nothing when 'console' is not supported.
       * This really simplifies the code.
       * ---
       * Similar to invariant but only logs a warning if the condition is not met.
       * This can be used to log issues in development environments in critical
       * paths. Removing the logging code for production environments will keep the
       * same logic and follow the same code paths.
       */

      var lowPriorityWarning = function lowPriorityWarning() {};

      {
        var printWarning = function printWarning(format) {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          var argIndex = 0;
          var message = 'Warning: ' + format.replace(/%s/g, function () {
            return args[argIndex++];
          });
          if (typeof console !== 'undefined') {
            console.warn(message);
          }
          try {
            // --- Welcome to debugging React ---
            // This error was thrown as a convenience so that you can use this stack
            // to find the callsite that caused this warning to fire.
            throw new Error(message);
          } catch (x) {}
        };

        lowPriorityWarning = function lowPriorityWarning(condition, format) {
          if (format === undefined) {
            throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
          }
          if (!condition) {
            for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
              args[_key2 - 2] = arguments[_key2];
            }

            printWarning.apply(undefined, [format].concat(args));
          }
        };
      }

      var lowPriorityWarning$1 = lowPriorityWarning;

      var didWarnStateUpdateForUnmountedComponent = {};

      function warnNoop(publicInstance, callerName) {
        {
          var constructor = publicInstance.constructor;
          var componentName = constructor && (constructor.displayName || constructor.name) || 'ReactClass';
          var warningKey = componentName + '.' + callerName;
          if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
            return;
          }
          warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op.\n\nPlease check the code for the %s component.', callerName, callerName, componentName);
          didWarnStateUpdateForUnmountedComponent[warningKey] = true;
        }
      }

      /**
       * This is the abstract API for an update queue.
       */
      var ReactNoopUpdateQueue = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function isMounted(publicInstance) {
          return false;
        },

        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function enqueueForceUpdate(publicInstance, callback, callerName) {
          warnNoop(publicInstance, 'forceUpdate');
        },

        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState, callback, callerName) {
          warnNoop(publicInstance, 'replaceState');
        },

        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function enqueueSetState(publicInstance, partialState, callback, callerName) {
          warnNoop(publicInstance, 'setState');
        }
      };

      /**
       * Base class helpers for the updating state of a component.
       */
      function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
      }

      Component.prototype.isReactComponent = {};

      /**
       * Sets a subset of the state. Always use this to mutate
       * state. You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * There is no guarantee that calls to `setState` will run synchronously,
       * as they may eventually be batched together.  You can provide an optional
       * callback that will be executed when the call to setState is actually
       * completed.
       *
       * When a function is provided to setState, it will be called at some point in
       * the future (not synchronously). It will be called with the up to date
       * component arguments (state, props, context). These values can be different
       * from this.* because your function may be called after receiveProps but before
       * shouldComponentUpdate, and this new state, props, and context will not yet be
       * assigned to this.
       *
       * @param {object|function} partialState Next partial state or function to
       *        produce next partial state to be merged with current state.
       * @param {?function} callback Called after state is updated.
       * @final
       * @protected
       */
      Component.prototype.setState = function (partialState, callback) {
        !((typeof partialState === 'undefined' ? 'undefined' : _typeof$3(partialState)) === 'object' || typeof partialState === 'function' || partialState == null) ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : void 0;
        this.updater.enqueueSetState(this, partialState, callback, 'setState');
      };

      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {?function} callback Called after update is complete.
       * @final
       * @protected
       */
      Component.prototype.forceUpdate = function (callback) {
        this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
      };

      /**
       * Deprecated APIs. These APIs used to exist on classic React classes but since
       * we would like to deprecate them, we're not going to move them over to this
       * modern base class. Instead, we define a getter that warns if it's accessed.
       */
      {
        var deprecatedAPIs = {
          isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
          replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
        };
        var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function get() {
              lowPriorityWarning$1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
              return undefined;
            }
          });
        };
        for (var fnName in deprecatedAPIs) {
          if (deprecatedAPIs.hasOwnProperty(fnName)) {
            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
          }
        }
      }

      /**
       * Base class helpers for the updating state of a component.
       */
      function PureComponent(props, context, updater) {
        // Duplicated from Component.
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
      }

      function ComponentDummy() {}
      ComponentDummy.prototype = Component.prototype;
      var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
      pureComponentPrototype.constructor = PureComponent;
      // Avoid an extra prototype jump for these methods.
      _assign(pureComponentPrototype, Component.prototype);
      pureComponentPrototype.isPureReactComponent = true;

      function AsyncComponent(props, context, updater) {
        // Duplicated from Component.
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
      }

      var asyncComponentPrototype = AsyncComponent.prototype = new ComponentDummy();
      asyncComponentPrototype.constructor = AsyncComponent;
      // Avoid an extra prototype jump for these methods.
      _assign(asyncComponentPrototype, Component.prototype);
      asyncComponentPrototype.unstable_isAsyncReactComponent = true;
      asyncComponentPrototype.render = function () {
        return this.props.children;
      };

      /**
       * Keeps track of the current owner.
       *
       * The current owner is the component who should own any components that are
       * currently being constructed.
       */
      var ReactCurrentOwner = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      };

      var hasOwnProperty = Object.prototype.hasOwnProperty;

      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };

      var specialPropKeyWarningShown;
      var specialPropRefWarningShown;

      function hasValidRef(config) {
        {
          if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.ref !== undefined;
      }

      function hasValidKey(config) {
        {
          if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) {
              return false;
            }
          }
        }
        return config.key !== undefined;
      }

      function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function warnAboutAccessingKey() {
          if (!specialPropKeyWarningShown) {
            specialPropKeyWarningShown = true;
            warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
          }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }

      function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function warnAboutAccessingRef() {
          if (!specialPropRefWarningShown) {
            specialPropRefWarningShown = true;
            warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName);
          }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
          get: warnAboutAccessingRef,
          configurable: true
        });
      }

      /**
       * Factory method to create a new React element. This no longer adheres to
       * the class pattern, so do not use new to call it. Also, no instanceof check
       * will work. Instead test $$typeof field against Symbol.for('react.element') to check
       * if something is a React Element.
       *
       * @param {*} type
       * @param {*} key
       * @param {string|object} ref
       * @param {*} self A *temporary* helper to detect places where `this` is
       * different from the `owner` when React.createElement is called, so that we
       * can warn. We want to get rid of owner and replace string `ref`s with arrow
       * functions, and as long as `this` and owner are the same, there will be no
       * change in behavior.
       * @param {*} source An annotation object (added by a transpiler or otherwise)
       * indicating filename, line number, and/or other information.
       * @param {*} owner
       * @param {*} props
       * @internal
       */
      var ReactElement = function ReactElement(type, key, ref, self, source, owner, props) {
        var element = {
          // This tag allow us to uniquely identify this as a React Element
          $$typeof: REACT_ELEMENT_TYPE,

          // Built-in properties that belong on the element
          type: type,
          key: key,
          ref: ref,
          props: props,

          // Record the component responsible for creating this element.
          _owner: owner
        };

        {
          // The validation flag is currently mutative. We put it on
          // an external backing store so that we can freeze the whole object.
          // This can be replaced with a WeakMap once they are implemented in
          // commonly used development environments.
          element._store = {};

          // To make comparing ReactElements easier for testing purposes, we make
          // the validation flag non-enumerable (where possible, which should
          // include every environment we run tests in), so the test framework
          // ignores it.
          Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
          });
          // self and source are DEV only properties.
          Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
          });
          // Two elements created in two different places should be considered
          // equal for testing purposes and therefore we hide it from enumeration.
          Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
          });
          if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
          }
        }

        return element;
      };

      /**
       * Create and return a new ReactElement of the given type.
       * See https://reactjs.org/docs/react-api.html#createelement
       */
      function createElement(type, config, children) {
        var propName;

        // Reserved names are extracted
        var props = {};

        var key = null;
        var ref = null;
        var self = null;
        var source = null;

        if (config != null) {
          if (hasValidRef(config)) {
            ref = config.ref;
          }
          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          self = config.__self === undefined ? null : config.__self;
          source = config.__source === undefined ? null : config.__source;
          // Remaining properties are added to a new props object
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
        }

        // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          {
            if (Object.freeze) {
              Object.freeze(childArray);
            }
          }
          props.children = childArray;
        }

        // Resolve default props
        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;
          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }
        {
          if (key || ref) {
            if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
              var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }

      /**
       * Return a function that produces ReactElements of a given type.
       * See https://reactjs.org/docs/react-api.html#createfactory
       */

      function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

        return newElement;
      }

      /**
       * Clone and return a new ReactElement using element as the starting point.
       * See https://reactjs.org/docs/react-api.html#cloneelement
       */
      function cloneElement(element, config, children) {
        var propName;

        // Original props are copied
        var props = _assign({}, element.props);

        // Reserved names are extracted
        var key = element.key;
        var ref = element.ref;
        // Self is preserved since the owner is preserved.
        var self = element._self;
        // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.
        var source = element._source;

        // Owner will be preserved, unless ref is overridden
        var owner = element._owner;

        if (config != null) {
          if (hasValidRef(config)) {
            // Silently steal the ref from the parent.
            ref = config.ref;
            owner = ReactCurrentOwner.current;
          }
          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          // Remaining properties override existing props
          var defaultProps;
          if (element.type && element.type.defaultProps) {
            defaultProps = element.type.defaultProps;
          }
          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              if (config[propName] === undefined && defaultProps !== undefined) {
                // Resolve default props
                props[propName] = defaultProps[propName];
              } else {
                props[propName] = config[propName];
              }
            }
          }
        }

        // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);
          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }
          props.children = childArray;
        }

        return ReactElement(element.type, key, ref, self, source, owner, props);
      }

      /**
       * Verifies the object is a ReactElement.
       * See https://reactjs.org/docs/react-api.html#isvalidelement
       * @param {?object} object
       * @return {boolean} True if `object` is a valid component.
       * @final
       */
      function isValidElement(object) {
        return (typeof object === 'undefined' ? 'undefined' : _typeof$3(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      var ReactDebugCurrentFrame = {};

      {
        // Component that is being worked on
        ReactDebugCurrentFrame.getCurrentStack = null;

        ReactDebugCurrentFrame.getStackAddendum = function () {
          var impl = ReactDebugCurrentFrame.getCurrentStack;
          if (impl) {
            return impl();
          }
          return null;
        };
      }

      var SEPARATOR = '.';
      var SUBSEPARATOR = ':';

      /**
       * Escape and wrap key so it is safe to use as a reactid
       *
       * @param {string} key to be escaped.
       * @return {string} the escaped key.
       */
      function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
          '=': '=0',
          ':': '=2'
        };
        var escapedString = ('' + key).replace(escapeRegex, function (match) {
          return escaperLookup[match];
        });

        return '$' + escapedString;
      }

      /**
       * TODO: Test that a single child and an array with one item have the same key
       * pattern.
       */

      var didWarnAboutMaps = false;

      var userProvidedKeyEscapeRegex = /\/+/g;
      function escapeUserProvidedKey(text) {
        return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
      }

      var POOL_SIZE = 10;
      var traverseContextPool = [];
      function getPooledTraverseContext(mapResult, keyPrefix, mapFunction, mapContext) {
        if (traverseContextPool.length) {
          var traverseContext = traverseContextPool.pop();
          traverseContext.result = mapResult;
          traverseContext.keyPrefix = keyPrefix;
          traverseContext.func = mapFunction;
          traverseContext.context = mapContext;
          traverseContext.count = 0;
          return traverseContext;
        } else {
          return {
            result: mapResult,
            keyPrefix: keyPrefix,
            func: mapFunction,
            context: mapContext,
            count: 0
          };
        }
      }

      function releaseTraverseContext(traverseContext) {
        traverseContext.result = null;
        traverseContext.keyPrefix = null;
        traverseContext.func = null;
        traverseContext.context = null;
        traverseContext.count = 0;
        if (traverseContextPool.length < POOL_SIZE) {
          traverseContextPool.push(traverseContext);
        }
      }

      /**
       * @param {?*} children Children tree container.
       * @param {!string} nameSoFar Name of the key path so far.
       * @param {!function} callback Callback to invoke with each child found.
       * @param {?*} traverseContext Used to pass information throughout the traversal
       * process.
       * @return {!number} The number of children in this subtree.
       */
      function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
        var type = typeof children === 'undefined' ? 'undefined' : _typeof$3(children);

        if (type === 'undefined' || type === 'boolean') {
          // All of the above are perceived as null.
          children = null;
        }

        var invokeCallback = false;

        if (children === null) {
          invokeCallback = true;
        } else {
          switch (type) {
            case 'string':
            case 'number':
              invokeCallback = true;
              break;
            case 'object':
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_CALL_TYPE:
                case REACT_RETURN_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
              }
          }
        }

        if (invokeCallback) {
          callback(traverseContext, children,
          // If it's the only child, treat the name as if it was wrapped in an array
          // so that it's consistent if the number of children grows.
          nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
          return 1;
        }

        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.
        var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getComponentKey(child, i);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        } else {
          var iteratorFn = getIteratorFn(children);
          if (typeof iteratorFn === 'function') {
            {
              // Warn about using Maps as children
              if (iteratorFn === children.entries) {
                warning(didWarnAboutMaps, 'Using Maps as children is unsupported and will likely yield ' + 'unexpected results. Convert it to a sequence/iterable of keyed ' + 'ReactElements instead.%s', ReactDebugCurrentFrame.getStackAddendum());
                didWarnAboutMaps = true;
              }
            }

            var iterator = iteratorFn.call(children);
            var step;
            var ii = 0;
            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName = nextNamePrefix + getComponentKey(child, ii++);
              subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
            }
          } else if (type === 'object') {
            var addendum = '';
            {
              addendum = ' If you meant to render a collection of children, use an array ' + 'instead.' + ReactDebugCurrentFrame.getStackAddendum();
            }
            var childrenString = '' + children;
            invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
          }
        }

        return subtreeCount;
      }

      /**
       * Traverses children that are typically specified as `props.children`, but
       * might also be specified through attributes:
       *
       * - `traverseAllChildren(this.props.children, ...)`
       * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
       *
       * The `traverseContext` is an optional argument that is passed through the
       * entire traversal. It can be used to store accumulations or anything else that
       * the callback might find relevant.
       *
       * @param {?*} children Children tree object.
       * @param {!function} callback To invoke upon traversing each child.
       * @param {?*} traverseContext Context for traversal.
       * @return {!number} The number of children in this subtree.
       */
      function traverseAllChildren(children, callback, traverseContext) {
        if (children == null) {
          return 0;
        }

        return traverseAllChildrenImpl(children, '', callback, traverseContext);
      }

      /**
       * Generate a key string that identifies a component within a set.
       *
       * @param {*} component A component that could contain a manual key.
       * @param {number} index Index that is used if a manual key is not provided.
       * @return {string}
       */
      function getComponentKey(component, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if ((typeof component === 'undefined' ? 'undefined' : _typeof$3(component)) === 'object' && component !== null && component.key != null) {
          // Explicit key
          return escape(component.key);
        }
        // Implicit key determined by the index in the set
        return index.toString(36);
      }

      function forEachSingleChild(bookKeeping, child, name) {
        var func = bookKeeping.func,
            context = bookKeeping.context;

        func.call(context, child, bookKeeping.count++);
      }

      /**
       * Iterates through children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#react.children.foreach
       *
       * The provided forEachFunc(child, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} forEachFunc
       * @param {*} forEachContext Context for forEachContext.
       */
      function forEachChildren(children, forEachFunc, forEachContext) {
        if (children == null) {
          return children;
        }
        var traverseContext = getPooledTraverseContext(null, null, forEachFunc, forEachContext);
        traverseAllChildren(children, forEachSingleChild, traverseContext);
        releaseTraverseContext(traverseContext);
      }

      function mapSingleChildIntoContext(bookKeeping, child, childKey) {
        var result = bookKeeping.result,
            keyPrefix = bookKeeping.keyPrefix,
            func = bookKeeping.func,
            context = bookKeeping.context;

        var mappedChild = func.call(context, child, bookKeeping.count++);
        if (Array.isArray(mappedChild)) {
          mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
        } else if (mappedChild != null) {
          if (isValidElement(mappedChild)) {
            mappedChild = cloneAndReplaceKey(mappedChild,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
          }
          result.push(mappedChild);
        }
      }

      function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
        var escapedPrefix = '';
        if (prefix != null) {
          escapedPrefix = escapeUserProvidedKey(prefix) + '/';
        }
        var traverseContext = getPooledTraverseContext(array, escapedPrefix, func, context);
        traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
        releaseTraverseContext(traverseContext);
      }

      /**
       * Maps children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#react.children.map
       *
       * The provided mapFunction(child, key, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} func The map function.
       * @param {*} context Context for mapFunction.
       * @return {object} Object containing the ordered map of results.
       */
      function mapChildren(children, func, context) {
        if (children == null) {
          return children;
        }
        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, func, context);
        return result;
      }

      /**
       * Count the number of children that are typically specified as
       * `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#react.children.count
       *
       * @param {?*} children Children tree container.
       * @return {number} The number of children.
       */
      function countChildren(children, context) {
        return traverseAllChildren(children, emptyFunction.thatReturnsNull, null);
      }

      /**
       * Flatten a children object (typically specified as `props.children`) and
       * return an array with appropriately re-keyed children.
       *
       * See https://reactjs.org/docs/react-api.html#react.children.toarray
       */
      function toArray(children) {
        var result = [];
        mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
        return result;
      }

      /**
       * Returns the first child in a collection of children and verifies that there
       * is only one child in the collection.
       *
       * See https://reactjs.org/docs/react-api.html#react.children.only
       *
       * The current implementation of this function assumes that a single child gets
       * passed without a wrapper, but the purpose of this helper function is to
       * abstract away the particular structure of children.
       *
       * @param {?object} children Child collection structure.
       * @return {ReactElement} The first and only `ReactElement` contained in the
       * structure.
       */
      function onlyChild(children) {
        !isValidElement(children) ? invariant(false, 'React.Children.only expected to receive a single React element child.') : void 0;
        return children;
      }

      var describeComponentFrame = function describeComponentFrame(name, source, ownerName) {
        return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
      };

      function getComponentName(fiber) {
        var type = fiber.type;

        if (typeof type === 'string') {
          return type;
        }
        if (typeof type === 'function') {
          return type.displayName || type.name;
        }
        return null;
      }

      /**
       * ReactElementValidator provides a wrapper around a element factory
       * which validates the props passed to the element. This is intended to be
       * used only in DEV and could be replaced by a static type checker for languages
       * that support it.
       */

      {
        var currentlyValidatingElement = null;

        var propTypesMisspellWarningShown = false;

        var getDisplayName = function getDisplayName(element) {
          if (element == null) {
            return '#empty';
          } else if (typeof element === 'string' || typeof element === 'number') {
            return '#text';
          } else if (typeof element.type === 'string') {
            return element.type;
          } else if (element.type === REACT_FRAGMENT_TYPE) {
            return 'React.Fragment';
          } else {
            return element.type.displayName || element.type.name || 'Unknown';
          }
        };

        var getStackAddendum = function getStackAddendum() {
          var stack = '';
          if (currentlyValidatingElement) {
            var name = getDisplayName(currentlyValidatingElement);
            var owner = currentlyValidatingElement._owner;
            stack += describeComponentFrame(name, currentlyValidatingElement._source, owner && getComponentName(owner));
          }
          stack += ReactDebugCurrentFrame.getStackAddendum() || '';
          return stack;
        };

        var VALID_FRAGMENT_PROPS = new Map([['children', true], ['key', true]]);
      }

      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = getComponentName(ReactCurrentOwner.current);
          if (name) {
            return '\n\nCheck the render method of `' + name + '`.';
          }
        }
        return '';
      }

      function getSourceInfoErrorAddendum(elementProps) {
        if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
          var source = elementProps.__source;
          var fileName = source.fileName.replace(/^.*[\\\/]/, '');
          var lineNumber = source.lineNumber;
          return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
      }

      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */
      var ownerHasKeyUseWarning = {};

      function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();

        if (!info) {
          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
          if (parentName) {
            info = '\n\nCheck the top-level render call using <' + parentName + '>.';
          }
        }
        return info;
      }

      /**
       * Warn if the element doesn't have an explicit key assigned to it.
       * This element is in an array. The array could grow and shrink or be
       * reordered. All children that haven't already been validated are required to
       * have a "key" property assigned to it. Error statuses are cached so a warning
       * will only be shown once.
       *
       * @internal
       * @param {ReactElement} element Element that requires a key.
       * @param {*} parentType element's parent's type.
       */
      function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) {
          return;
        }
        element._store.validated = true;

        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
          return;
        }
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true;

        // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
          // Give the component that originally created this child.
          childOwner = ' It was passed a child from ' + getComponentName(element._owner) + '.';
        }

        currentlyValidatingElement = element;
        {
          warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, getStackAddendum());
        }
        currentlyValidatingElement = null;
      }

      /**
       * Ensure that every element either is passed in a static location, in an
       * array with an explicit keys property defined, or in an object literal
       * with valid key property.
       *
       * @internal
       * @param {ReactNode} node Statically passed child of any type.
       * @param {*} parentType node's parent's type.
       */
      function validateChildKeys(node, parentType) {
        if ((typeof node === 'undefined' ? 'undefined' : _typeof$3(node)) !== 'object') {
          return;
        }
        if (Array.isArray(node)) {
          for (var i = 0; i < node.length; i++) {
            var child = node[i];
            if (isValidElement(child)) {
              validateExplicitKey(child, parentType);
            }
          }
        } else if (isValidElement(node)) {
          // This element was passed in a valid location.
          if (node._store) {
            node._store.validated = true;
          }
        } else if (node) {
          var iteratorFn = getIteratorFn(node);
          if (typeof iteratorFn === 'function') {
            // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            if (iteratorFn !== node.entries) {
              var iterator = iteratorFn.call(node);
              var step;
              while (!(step = iterator.next()).done) {
                if (isValidElement(step.value)) {
                  validateExplicitKey(step.value, parentType);
                }
              }
            }
          }
        }
      }

      /**
       * Given an element, validate that its props follow the propTypes definition,
       * provided by the type.
       *
       * @param {ReactElement} element
       */
      function validatePropTypes(element) {
        var componentClass = element.type;
        if (typeof componentClass !== 'function') {
          return;
        }
        var name = componentClass.displayName || componentClass.name;
        var propTypes = componentClass.propTypes;
        if (propTypes) {
          currentlyValidatingElement = element;
          checkPropTypes(propTypes, element.props, 'prop', name, getStackAddendum);
          currentlyValidatingElement = null;
        } else if (componentClass.PropTypes !== undefined && !propTypesMisspellWarningShown) {
          propTypesMisspellWarningShown = true;
          warning(false, 'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', name || 'Unknown');
        }
        if (typeof componentClass.getDefaultProps === 'function') {
          warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
        }
      }

      /**
       * Given a fragment, validate that it can only be provided with fragment props
       * @param {ReactElement} fragment
       */
      function validateFragmentProps(fragment) {
        currentlyValidatingElement = fragment;

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.keys(fragment.props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (!VALID_FRAGMENT_PROPS.has(key)) {
              warning(false, 'Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.%s', key, getStackAddendum());
              break;
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator['return']) {
              _iterator['return']();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        if (fragment.ref !== null) {
          warning(false, 'Invalid attribute `ref` supplied to `React.Fragment`.%s', getStackAddendum());
        }

        currentlyValidatingElement = null;
      }

      function createElementWithValidation(type, props, children) {
        var validType = typeof type === 'string' || typeof type === 'function' || (typeof type === 'undefined' ? 'undefined' : _typeof$3(type)) === 'symbol' || typeof type === 'number';
        // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
          var info = '';
          if (type === undefined || (typeof type === 'undefined' ? 'undefined' : _typeof$3(type)) === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
          }

          var sourceInfo = getSourceInfoErrorAddendum(props);
          if (sourceInfo) {
            info += sourceInfo;
          } else {
            info += getDeclarationErrorAddendum();
          }

          info += getStackAddendum() || '';

          warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type === 'undefined' ? 'undefined' : _typeof$3(type), info);
        }

        var element = createElement.apply(this, arguments);

        // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) {
          return element;
        }

        // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) {
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], type);
          }
        }

        if ((typeof type === 'undefined' ? 'undefined' : _typeof$3(type)) === 'symbol' && type === REACT_FRAGMENT_TYPE) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }

        return element;
      }

      function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        // Legacy hook TODO: Warn if this is accessed
        validatedFactory.type = type;

        {
          Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function get() {
              lowPriorityWarning$1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
              Object.defineProperty(this, 'type', {
                value: type
              });
              return type;
            }
          });
        }

        return validatedFactory;
      }

      function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);
        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }
        validatePropTypes(newElement);
        return newElement;
      }

      var React = {
        Children: {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray: toArray,
          only: onlyChild
        },

        Component: Component,
        PureComponent: PureComponent,
        unstable_AsyncComponent: AsyncComponent,

        Fragment: REACT_FRAGMENT_TYPE,

        createElement: createElementWithValidation,
        cloneElement: cloneElementWithValidation,
        createFactory: createFactoryWithValidation,
        isValidElement: isValidElement,

        version: ReactVersion,

        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
          ReactCurrentOwner: ReactCurrentOwner,
          // Used by renderers to avoid bundling object-assign twice in UMD bundles:
          assign: _assign
        }
      };

      {
        _assign(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, {
          // These should not be included in production.
          ReactDebugCurrentFrame: ReactDebugCurrentFrame,
          // Shim for React DOM 16.0.0 which still destructured (but not used) this.
          // TODO: remove in React 17.0.
          ReactComponentTreeHook: {}
        });
      }

      var React$2 = Object.freeze({
        default: React
      });

      var React$3 = React$2 && React || React$2;

      // TODO: decide on the top-level export form.
      // This is hacky but makes it work with both Rollup and Jest.
      var react = React$3['default'] ? React$3['default'] : React$3;

      module.exports = react;
    })();
  }
});

var react = createCommonjsModule(function (module) {

  if (process.env.NODE_ENV === 'production') {
    module.exports = react_production_min;
  } else {
    module.exports = react_development;
  }
});
var react_1 = react.Children;
var react_2 = react.Component;
var react_3 = react.PropTypes;
var react_4 = react.createElement;

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties$1(obj, keys$$1) { var target = {}; for (var i in obj) { if (keys$$1.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppDrawer$1 = function (_Component) {
  _inherits(AppDrawer, _Component);

  function AppDrawer(props) {
    _classCallCheck(this, AppDrawer);

    var _this = _possibleConstructorReturn(this, (AppDrawer.__proto__ || Object.getPrototypeOf(AppDrawer)).call(this, props));

    _this.state = {
      show: false
    };
    return _this;
  }

  _createClass(AppDrawer, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          createContent = _props.createContent,
          drawerOpts = _objectWithoutProperties$1(_props, ["createContent"]);

      return react.createElement(
        "div",
        null,
        react.createElement(RaisedButton$1, {
          label: "Show",
          events: {
            onClick: function onClick() {
              return _this2.setState({ show: true });
            }
          }
        }),
        react.createElement(
          Drawer$1,
          _extends$4({}, drawerOpts, {
            show: this.state.show,
            didHide: function didHide() {
              return _this2.setState({ show: false });
            }
          }),
          createContent({
            onClick: function onClick() {
              return _this2.setState({ show: false });
            }
          })
        )
      );
    }
  }]);

  return AppDrawer;
}(react_2);

var reactTests = function reactTests() {

  var createContent = function createContent(_ref) {
    var repeats = _ref.repeats,
        onClick = _ref.onClick;
    return navigationList({ renderer: renderer$1, keys: keys$1, Icon: Icon$1, List: List$1, ListTile: ListTile$1, repeats: repeats, onClick: onClick });
  };

  return [{
    section: "React JSX tests"
  }, {
    name: "App drawer (JSX)",
    interactive: true,
    exclude: true,
    component: function component() {
      return react.createElement(AppDrawer$1, { fixed: true, backdrop: true, createContent: createContent });
    }
  }];
};

var testsReact = [].concat(genericTests({ renderer: renderer$1, keys: keys$1, Drawer: Drawer$1, List: List$1, ListTile: ListTile$1, Icon: Icon$1, Toolbar: Toolbar$1, IconButton: IconButton$1, RaisedButton: RaisedButton$1 })).concat(reactTests({ renderer: renderer$1, keys: keys$1, Drawer: Drawer$1, List: List$1, ListTile: ListTile$1, Icon: Icon$1, Toolbar: Toolbar$1, IconButton: IconButton$1, RaisedButton: RaisedButton$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
