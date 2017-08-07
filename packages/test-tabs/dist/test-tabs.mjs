import { Tabs, keys, renderer } from 'polythene-mithril';
import React from 'react';
import { Tabs as Tabs$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';

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

var threeButtons = [{ label: "New" }, { label: "My Favorites" }, { label: "Saved" }];

var onChange = (function (_ref) {
  var h = _ref.h,
      Tabs$$1 = _ref.Tabs;
  return {
    oninit: function oninit(vnode) {
      var tab = stream({});
      vnode.state = {
        tab: tab,
        redrawOnUpdate: stream.merge([tab])
      };
    },
    view: function view(vnode) {
      var state = vnode.state;
      var tab = state.tab();

      return h("div", [h("ul", {
        style: {
          margin: "0 0 1rem 0",
          padding: 0,
          maxHeight: "7rem",
          overflow: "hidden"
        }
      }, [h("li", { key: "index" }, "" + tab.index), h("li", { key: "options" }, "" + JSON.stringify(tab.options))]), h(Tabs$$1, {
        tabs: threeButtons,
        autofit: true,
        onChange: function onChange(newTab) {
          return state.tab(newTab);
        }
      })]);
    }
  };
});

var iconHeartSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 11.9994,21.3497L 10.5504,20.0327C 5.4014,15.3607 1.99939,12.2736 1.99939,8.49762C 1.99939,5.41364 4.41537,2.99762 7.49939,2.99762C 9.24039,2.99762 10.9084,3.80566 11.9994,5.08362C 13.0904,3.80566 14.7584,2.99762 16.4994,2.99762C 19.5834,2.99762 21.9994,5.41364 21.9994,8.49762C 21.9994,12.2736 18.5974,15.3607 13.4484,20.0327L 11.9994,21.3497 Z \"/></svg>";
var iconBellSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 14,20C 14,21.1046 13.1046,22 12,22C 10.8954,22 10,21.1046 10,20L 14,20 Z M 12,2.00001C 12.5523,2.00001 13,2.44772 13,3L 13,4.08298C 15.8377,4.55905 18,7.02702 18,10L 18,16L 21,19L 3,19L 6,16L 6.00001,9.99998C 6.00001,7.02698 8.1623,4.55902 11,4.08294L 11,3C 11,2.44772 11.4477,2.00001 12,2.00001 Z \"/></svg>";
var iconSettingsSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24.00 24.00\" enable-background=\"new 0 0 24.00 24.00\" xml:space=\"preserve\"><path fill=\"#000000\" fill-opacity=\"1\" stroke-width=\"0.2\" stroke-linejoin=\"round\" d=\"M 11.9994,15.498C 10.0664,15.498 8.49939,13.931 8.49939,11.998C 8.49939,10.0651 10.0664,8.49805 11.9994,8.49805C 13.9324,8.49805 15.4994,10.0651 15.4994,11.998C 15.4994,13.931 13.9324,15.498 11.9994,15.498 Z M 19.4284,12.9741C 19.4704,12.6531 19.4984,12.329 19.4984,11.998C 19.4984,11.6671 19.4704,11.343 19.4284,11.022L 21.5414,9.36804C 21.7294,9.21606 21.7844,8.94604 21.6594,8.73004L 19.6594,5.26605C 19.5354,5.05005 19.2734,4.96204 19.0474,5.04907L 16.5584,6.05206C 16.0424,5.65607 15.4774,5.32104 14.8684,5.06903L 14.4934,2.41907C 14.4554,2.18103 14.2484,1.99805 13.9994,1.99805L 9.99939,1.99805C 9.74939,1.99805 9.5434,2.18103 9.5054,2.41907L 9.1304,5.06805C 8.52039,5.32104 7.95538,5.65607 7.43939,6.05206L 4.95139,5.04907C 4.7254,4.96204 4.46338,5.05005 4.33939,5.26605L 2.33939,8.73004C 2.21439,8.94604 2.26938,9.21606 2.4574,9.36804L 4.5694,11.022C 4.5274,11.342 4.49939,11.6671 4.49939,11.998C 4.49939,12.329 4.5274,12.6541 4.5694,12.9741L 2.4574,14.6271C 2.26938,14.78 2.21439,15.05 2.33939,15.2661L 4.33939,18.73C 4.46338,18.946 4.7254,19.0341 4.95139,18.947L 7.4404,17.944C 7.95639,18.34 8.52139,18.675 9.1304,18.9271L 9.5054,21.577C 9.5434,21.8151 9.74939,21.998 9.99939,21.998L 13.9994,21.998C 14.2484,21.998 14.4554,21.8151 14.4934,21.577L 14.8684,18.9271C 15.4764,18.6741 16.0414,18.34 16.5574,17.9431L 19.0474,18.947C 19.2734,19.0341 19.5354,18.946 19.6594,18.73L 21.6594,15.2661C 21.7844,15.05 21.7294,14.78 21.5414,14.6271L 19.4284,12.9741 Z \"/></svg>";
var arrowBackSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"/></svg>";
var arrowForwardSVG = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z\"/></svg>";

var genericTests = (function (_ref) {
  var h = _ref.renderer,
      Tabs$$1 = _ref.Tabs;


  var iconHeart = h.trust(iconHeartSVG);
  var iconBell = h.trust(iconBellSVG);
  var iconSettings = h.trust(iconSettingsSVG);
  var arrowBack = h.trust(arrowBackSVG);
  var arrowForward = h.trust(arrowForwardSVG);

  var OnChange = onChange({ h: h, Tabs: Tabs$$1 });

  Tabs$$1.theme(".tests-tabs-fixed-width", {
    tab_max_width: 110,
    tab_min_width: 110
  });

  Tabs$$1.theme(".tests-tabs-custom_color", {
    color_light: "#00BCD4",
    color_light_selected: "#F44336",
    color_light_tab_indicator: "#F44336",
    color_dark: "#00BCD4",
    color_dark_selected: "#F44336",
    color_dark_tab_indicator: "#F44336"
  });

  var threeButtons = [{ label: "New" }, { label: "My Favorites" }, { label: "Saved" }];

  var menuButtons = [{
    label: "New"
  }, {
    label: "Favs"
  }, {
    label: "Saved"
  }];

  var longLabels = [{
    label: "New"
  }, {
    label: "A very long label that does not fit"
  }, {
    label: "Saved"
  }];

  var longList = [{ label: "Web" }, { label: "Shopping" }, { label: "Videos" }, { label: "Images" }, { label: "Books" }, { label: "More" }];

  var iconButtons = [{
    icon: { svg: iconHeart }
  }, {
    icon: { svg: iconBell }
  }, {
    icon: { svg: iconSettings }
  }];

  var iconTextButtons = [{
    icon: { svg: iconHeart },
    label: "Favs"
  }, {
    icon: { svg: iconBell },
    label: "Notifs"
  }, {
    icon: { svg: iconSettings },
    label: "Custom"
  }];

  return [{
    name: "Child node",
    component: Tabs$$1,
    attrs: null,
    children: threeButtons
  }, {
    name: "Option: content",
    component: Tabs$$1,
    attrs: {
      content: threeButtons
    }
  }, {
    name: "Option: tabs (text buttons)",
    component: Tabs$$1,
    attrs: {
      tabs: threeButtons
    }
  }, {
    name: "Option: compact",
    component: Tabs$$1,
    attrs: {
      tabs: threeButtons,
      compact: true
    }
  }, {
    name: "Option: autofit",
    component: Tabs$$1,
    attrs: {
      tabs: threeButtons,
      autofit: true
    }
  }, {
    name: "Option: centered (no autofit)",
    component: Tabs$$1,
    attrs: {
      tabs: threeButtons,
      centered: true
    }
  }, {
    name: "Option: largestWidth (no autofit)",
    component: Tabs$$1,
    attrs: {
      tabs: threeButtons,
      largestWidth: true
    }
  }, {
    name: "Theme: small fixed width",
    component: Tabs$$1,
    attrs: {
      tabs: threeButtons,
      className: "tests-tabs-fixed-width",
      centered: true
    }
  }, {
    name: "Option: selectedTab (1)",
    component: Tabs$$1,
    attrs: {
      tabs: threeButtons,
      autofit: true,
      selectedTab: 1
    }
  }, {
    name: "Theme: custom colors",
    component: Tabs$$1,
    attrs: {
      tabs: threeButtons,
      autofit: true,
      className: "tests-tabs-custom_color"
    }
  }, {
    name: "Long labels: wrap to second line",
    component: Tabs$$1,
    attrs: {
      tabs: longLabels,
      autofit: true,
      className: "tests-tabs-fixed-width"
    }
  }, {
    name: "Option: scrollable",
    component: {
      view: function view() {
        return h("div", {
          style: {
            maxWidth: "400px",
            color: "#fff",
            backgroundColor: "#444",
            overflowX: "hidden",
            height: "48px"
          }
        }, h(Tabs$$1, {
          tabs: longList,
          scrollable: true
        }));
      }
    }
  }, {
    name: "Option: scrollable with custom icons",
    component: {
      view: function view() {
        return h("div", {
          style: {
            maxWidth: "400px",
            color: "#fff",
            backgroundColor: "#444",
            overflowX: "hidden",
            height: "48px"
          }
        }, h(Tabs$$1, {
          tabs: longList,
          scrollable: true,
          scrollIconBackward: { svg: arrowBack },
          scrollIconForward: { svg: arrowForward }
        }));
      }
    }
  }, {
    name: "Option: menu",
    component: {
      view: function view() {
        return h("div", {
          style: {
            maxWidth: "320px",
            color: "#444",
            backgroundColor: "#fff",
            height: "400px",
            display: "flex",
            flexDirection: "column"
          }
        }, [h("div", {
          style: {
            padding: "20px",
            display: "flex",
            overflowX: "hidden",
            overflowY: "scroll",
            flexDirection: "column"
          }
        }, [1, 2, 3, 4, 5].map(function () {
          return h("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
        })), h(Tabs$$1, {
          tabs: menuButtons,
          menu: true,
          autofit: true,
          hideIndicator: true,
          style: { borderTop: "1px solid #eee" }
        })]);
      }
    }
  }, {
    name: "Option: hideIndicator",
    interactive: true,
    component: Tabs$$1,
    attrs: {
      tabs: threeButtons,
      autofit: true,
      hideIndicator: true
    }
  }, {
    name: "Option: noIndicatorSlide",
    interactive: true,
    component: Tabs$$1,
    attrs: {
      tabs: threeButtons,
      autofit: true,
      noIndicatorSlide: true
    }
  }, {
    name: "Option: all (ink: false)",
    interactive: true,
    component: Tabs$$1,
    attrs: {
      tabs: threeButtons,
      autofit: true,
      all: { ink: false }
    }
  }, {
    name: "Option: activeSelected",
    interactive: true,
    component: Tabs$$1,
    attrs: {
      tabs: threeButtons,
      autofit: true,
      activeSelected: true
    }
  }, {
    name: "Option: all (style - colors)",
    component: Tabs$$1,
    attrs: {
      tabs: threeButtons,
      autofit: true,
      all: {
        style: {
          backgroundColor: "#EF6C00",
          color: "#fff"
        }
      }
    }
  }, {
    name: "Tabs with icons",
    className: "small-result",
    component: Tabs$$1,
    attrs: {
      tabs: iconButtons,
      autofit: true
    }
  }, {
    name: "Tabs with icons and text",
    className: "small-result",
    component: Tabs$$1,
    attrs: {
      tabs: iconTextButtons,
      autofit: true
    }
  }, {
    name: "Option: onChange",
    interactive: true,
    exclude: true,
    component: OnChange
  },

  // Dark tone

  {
    name: "Option: tabs (text buttons) -- dark theme class",
    className: "pe-dark-tone",
    component: Tabs$$1,
    attrs: {
      tabs: threeButtons
    }
  }, {
    name: "Theme: custom colors -- dark theme class",
    className: "pe-dark-tone",
    component: Tabs$$1,
    attrs: {
      tabs: threeButtons,
      autofit: true,
      className: "tests-tabs-custom_color"
    }
  }, {
    name: "Tabs with icons -- dark theme class",
    className: "small-result pe-dark-tone",
    component: Tabs$$1,
    attrs: {
      tabs: iconButtons,
      autofit: true
    }
  }, {
    name: "Option: scrollable -- dark theme class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return h("div", {
          style: {
            maxWidth: "400px",
            overflowX: "hidden",
            height: "48px",
            color: "#fff"
          }
        }, h(Tabs$$1, {
          tabs: longList,
          scrollable: true
        }));
      }
    }
  }, {
    name: "Dark tone class + light theme class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return h("div", {
          style: {
            background: "#fff",
            padding: "20px"
          },
          className: "pe-light-tone"
        }, h(Tabs$$1, {
          tabs: longList,
          scrollable: true
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
        }, h(Tabs$$1, {
          tabs: longList,
          scrollable: true,
          tone: "light"
        }));
      }
    }
  }];
});

var mithrilTests = function mithrilTests() {

  return [];
};

var testsMithril = [].concat(genericTests({ Tabs: Tabs, renderer: renderer, keys: keys })).concat(mithrilTests({ Tabs: Tabs, renderer: renderer, keys: keys }));

var arrowBackSVG$1 = React.createElement(
  "svg",
  { width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" })
);
var arrowForwardSVG$1 = React.createElement(
  "svg",
  { width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" })
);

var tabButtons = [{ label: "Web" }, { label: "Shopping" }, { label: "Videos" }, { label: "Images" }, { label: "Books" }, { label: "More" }];

var ScrollableTabs = (function () {
  return React.createElement(
    "div",
    {
      style: {
        maxWidth: "400px",
        color: "#fff",
        backgroundColor: "#444",
        overflowX: "hidden",
        height: "48px"
      }
    },
    React.createElement(Tabs$1, {
      scrollable: true,
      scrollIconBackward: { svg: arrowBackSVG$1 },
      scrollIconForward: { svg: arrowForwardSVG$1 },
      tabs: tabButtons
    })
  );
});

var reactTests = function reactTests(_ref) {
  var Tabs$$1 = _ref.Tabs;


  var threeButtons = [{ label: "New" }, { label: "My Favorites" }, { label: "Saved" }];

  return [{
    section: "React JSX tests"
  }, {
    name: "Option: selectedTab (1) (JSX)",
    component: function component() {
      return React.createElement(Tabs$$1, {
        autofit: true,
        selectedTab: 1,
        tabs: threeButtons
      });
    }
  }, {
    name: "Option: scrollable with custom icons (JSX)",
    component: function component() {
      return React.createElement(ScrollableTabs, null);
    }
  }];
};

var testsReact = [].concat(genericTests({ Tabs: Tabs$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ Tabs: Tabs$1, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
