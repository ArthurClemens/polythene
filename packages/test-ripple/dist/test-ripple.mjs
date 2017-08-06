import { Ripple, renderer } from 'polythene-mithril';
import React from 'react';
import { Ripple as Ripple$1, renderer as renderer$1 } from 'polythene-react';
import { compose, withHandlers, withState } from 'recompose';

var genericTests = (function (_ref) {
  var Ripple$$1 = _ref.Ripple;

  Ripple$$1.theme(".tests-ripple-themed-ripple", {
    color_light: "#F44336"
  });
  return [{
    name: "Option: constrained (true)",
    interactive: true,
    component: Ripple$$1,
    attrs: {
      constrained: true
    }
  }, {
    name: "Option: constrained (false)",
    interactive: true,
    exclude: true,
    component: Ripple$$1,
    attrs: {
      constrained: false
    }
  }, {
    name: "Option: center",
    interactive: true,
    exclude: true,
    component: Ripple$$1,
    attrs: {
      center: true
    }
  }, {
    name: "Option: start opacity (0.5)",
    interactive: true,
    exclude: true,
    component: Ripple$$1,
    attrs: {
      startOpacity: 0.5
    }
  }, {
    name: "Option: end opacity (1)",
    interactive: true,
    exclude: true,
    component: Ripple$$1,
    attrs: {
      endOpacity: 1
    }
  }, {
    name: "Option: duration (3.0)",
    interactive: true,
    exclude: true,
    component: Ripple$$1,
    attrs: {
      duration: 3.0
    }
  }, {
    name: "Option: multi, duration",
    interactive: true,
    exclude: true,
    component: Ripple$$1,
    attrs: {
      multi: true,
      duration: 1.5
    }
  }, {
    name: "Option: initial opacityDecayVelocity (0.1)",
    interactive: true,
    exclude: true,
    component: Ripple$$1,
    attrs: {
      opacityDecayVelocity: 0.1
    }
  }, {
    name: "Option: disabled",
    interactive: true,
    exclude: true,
    component: Ripple$$1,
    attrs: {
      disabled: true
    }
  }, {
    name: "Option: style (color)",
    interactive: true,
    exclude: true,
    component: Ripple$$1,
    attrs: {
      startOpacity: 0.7,
      style: {
        color: "#2196F3"
      }
    }
  }, {
    name: "Themed (end with permanent red)",
    interactive: true,
    exclude: true,
    component: Ripple$$1,
    attrs: {
      className: "tests-ripple-themed-ripple",
      endOpacity: 1.0,
      persistent: true
    }
  },

  // Dark tone

  {
    name: "Option: style (white) -- dark tone class",
    interactive: true,
    exclude: true,
    className: "pe-dark-tone",
    component: Ripple$$1,
    attrs: {
      constrained: true,
      style: {
        color: "#fff"
      }
    }
  }, {
    name: "Dark tone class + light tone class",
    interactive: true,
    exclude: true,
    className: "pe-dark-tone",
    component: Ripple$$1,
    attrs: {
      constrained: true,
      style: {
        background: "#fff"
      },
      className: "pe-light-tone"
    }
  }, {
    name: "Dark tone class + light tone",
    interactive: true,
    exclude: true,
    className: "test-dark-tone",
    component: Ripple$$1,
    attrs: {
      constrained: true,
      style: {
        background: "#fff"
      },
      tone: "light"
    }
  }];
});

var mithrilTests = function mithrilTests(_ref) {
  var Ripple$$1 = _ref.Ripple,
      h = _ref.renderer;

  return [{
    section: "Mithril specific tests"
  }, {
    name: "Appended to an element",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return h("div", {
          style: {
            position: "relative",
            width: "100px",
            height: "100px"
          }
        }, h(Ripple$$1));
      }
    }
  }, {
    name: "Option: start (after click)",
    interactive: true,
    exclude: true,
    component: {
      oninit: function oninit(vnode) {
        return vnode.state.started = 0;
      },
      view: function view(vnode) {
        return [h(Ripple$$1, {
          before: h("div", "start called: " + vnode.state.started),
          start: function start() {
            return vnode.state.started++, h.redraw();
          }
        })];
      }
    }
  }, {
    name: "Option: end (after click)",
    interactive: true,
    exclude: true,
    component: {
      oninit: function oninit(vnode) {
        return vnode.state.ended = 0;
      },
      view: function view(vnode) {
        return [h(Ripple$$1, {
          before: h("div", "end called: " + vnode.state.ended),
          end: function end() {
            return vnode.state.ended++, h.redraw();
          }
        })];
      }
    }
  }];
};

var testsMithril = [].concat(genericTests({ Ripple: Ripple, renderer: renderer })).concat(mithrilTests({ Ripple: Ripple, renderer: renderer }));

var reactTests = function reactTests(_ref) {
  var Ripple$$1 = _ref.Ripple,
      h = _ref.renderer;
  // eslint-disable-line no-unused-vars

  var withCounter = compose(withState("counter", "setCounter", 0), withHandlers({
    increment: function increment(_ref2) {
      var setCounter = _ref2.setCounter;
      return function () {
        return setCounter(function (n) {
          return n + 1;
        });
      };
    }
  }));

  Ripple$$1.theme(".react-ripple-themed-ripple", {
    color_light: "#F44336"
  });

  return [{
    section: "React specific tests"
  }, {
    name: "Appended to an element",
    interactive: true,
    exclude: true,
    component: function component() {
      return h("div", {
        style: {
          position: "relative",
          width: "100px",
          height: "100px"
        }
      }, h(Ripple$$1));
    }
  }, {
    name: "Option: start (after click)",
    interactive: true,
    exclude: true,
    component: withCounter(function (_ref3) {
      var counter = _ref3.counter,
          increment = _ref3.increment;
      return h(Ripple$$1, {
        before: h("div", "start called: " + counter),
        start: function start() {
          return increment();
        }
      });
    })
  }, {
    name: "Option: end (after click)",
    interactive: true,
    exclude: true,
    component: withCounter(function (_ref4) {
      var counter = _ref4.counter,
          increment = _ref4.increment;
      return h(Ripple$$1, {
        before: h("div", "start called: " + counter),
        end: function end() {
          return increment();
        }
      });
    })
  }, {
    section: "React JSX tests"
  }, {
    name: "Option: center (JSX)",
    component: function component() {
      return React.createElement(Ripple$$1, { center: true });
    }
  }, {
    name: "Themed (should be red and permanent) (JSX)",
    component: function component() {
      return React.createElement(Ripple$$1, {
        className: "react-ripple-themed-ripple",
        endOpacity: 1.0,
        persistent: true
      });
    }
  }, {
    name: "Appended to an element (JSX)",
    component: function component() {
      return React.createElement(
        "div",
        { style: {
            position: "relative",
            width: "100px",
            height: "100px"
          } },
        React.createElement(Ripple$$1, null)
      );
    }
  }];
};
var testsReact = [].concat(genericTests({ Ripple: Ripple$1, renderer: renderer$1 })).concat(reactTests({ Ripple: Ripple$1, renderer: renderer$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
