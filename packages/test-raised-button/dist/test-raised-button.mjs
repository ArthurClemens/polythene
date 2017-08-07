import { RaisedButton, renderer } from 'polythene-mithril';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { RaisedButton as RaisedButton$1, renderer as renderer$1 } from 'polythene-react';
import { compose, withHandlers, withState } from 'recompose';

var genericTests = (function (_ref) {
  var RaisedButton$$1 = _ref.RaisedButton;


  RaisedButton$$1.theme(".tests-raised-button-themed-button", {
    color_light_background: "#FF1744",
    color_light_text: "#fff"
  });

  return [{
    name: "Option: label",
    component: RaisedButton$$1,
    attrs: {
      label: "Label"
    }
  }, {
    name: "Option: raised (with option z: 2)",
    component: RaisedButton$$1,
    attrs: {
      label: "Raised to 2",
      z: 2
    }
  }, {
    name: "Option: raised (with option z: 5)",
    component: RaisedButton$$1,
    attrs: {
      label: "Raised to 5",
      z: 5
    }
  }, {
    name: "Themed button (should be red)",
    component: RaisedButton$$1,
    attrs: {
      label: "Themed button",
      className: "tests-raised-button-themed-button"
    }
  }, {
    name: "Themed button (with option disabled)",
    component: RaisedButton$$1,
    attrs: {
      label: "Disabled themed button",
      className: "tests-raised-button-themed-button",
      disabled: true
    }
  }, {
    name: "Option: style (colors)",
    component: RaisedButton$$1,
    attrs: {
      label: "Styled",
      style: {
        backgroundColor: "#EF6C00",
        color: "#fff"
      }
    }
  }, {
    name: "Option: wash (false)",
    interactive: true,
    component: RaisedButton$$1,
    attrs: {
      label: "No wash",
      wash: false
    }
  }, {
    name: "Option: ink (false)",
    interactive: true,
    component: RaisedButton$$1,
    attrs: {
      label: "No ink",
      ink: false
    }
  }, {
    name: "Option: disabled (true)",
    interactive: true,
    component: RaisedButton$$1,
    attrs: {
      label: "Disabled",
      disabled: true
    }
  }, {
    name: "Option: disabled (false)",
    interactive: true,
    component: RaisedButton$$1,
    attrs: {
      label: "Not disabled",
      disabled: false
    }
  }, {
    name: "Option: animateOnTap (false)",
    interactive: true,
    component: RaisedButton$$1,
    attrs: {
      label: "Don't animate shadow",
      animateOnTap: false
    }
  }, {
    name: "Option: inactivate (2s)",
    interactive: true,
    component: RaisedButton$$1,
    attrs: {
      label: "Inactivated for 2s",
      inactivate: 2
    }
  }, {
    name: "Option: selected",
    component: RaisedButton$$1,
    attrs: {
      label: "Selected",
      selected: true
    }
  }, {
    name: "Option: inactive (false)",
    interactive: true,
    component: RaisedButton$$1,
    attrs: {
      label: "Not inactive",
      inactive: false
    }
  }, {
    name: "Option: inactive (true)",
    interactive: true,
    component: RaisedButton$$1,
    attrs: {
      label: "Inactive",
      inactive: true
    }
  },

  // Dark tone

  {
    name: "Option: label -- dark tone class (should be app's primary color)",
    component: RaisedButton$$1,
    className: "pe-dark-tone",
    attrs: {
      label: "Label"
    }
  }, {
    name: "Option: disabled -- dark tone class",
    component: RaisedButton$$1,
    className: "pe-dark-tone",
    attrs: {
      label: "Label",
      disabled: true
    }
  }];
});

var mithrilTests = function mithrilTests(_ref) {
  var RaisedButton$$1 = _ref.RaisedButton,
      h = _ref.renderer;


  return [{
    section: "Mithril specific tests"
  }, {
    name: "Option: url (with oncreate)",
    interactive: true,
    component: RaisedButton$$1,
    attrs: {
      label: "Go to /#/shadow",
      url: {
        href: "/shadow",
        oncreate: h.route.link
      }
    }
  }, {
    name: "Option: events (onclick)",
    interactive: true,
    exclude: true,
    component: {
      oninit: function oninit(vnode) {
        return vnode.state.clicked = 0;
      },
      view: function view(vnode) {
        return [h("div", "onclick called: " + vnode.state.clicked), h(RaisedButton$$1, {
          label: "Button",
          events: {
            onclick: function onclick() {
              return vnode.state.clicked++;
            }
          }
        })];
      }
    }
  }, {
    name: "Dark tone class + light tone class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return h(".pe-light-tone", {
          style: { background: "#fff" }
        }, [h(RaisedButton$$1, {
          label: "Normal"
        }), h(RaisedButton$$1, {
          label: "Disabled",
          disabled: true
        }), h(RaisedButton$$1, {
          label: "Theme",
          className: "tests-raised-button-themed-button"
        })]);
      }
    }
  }, {
    name: "Dark tone class + light tone",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return h("div", {
          style: { background: "#fff" }
        }, [h(RaisedButton$$1, {
          label: "Normal",
          tone: "light"
        }), h(RaisedButton$$1, {
          label: "Disabled",
          disabled: true,
          tone: "light"
        }), h(RaisedButton$$1, {
          label: "Theme",
          className: "tests-raised-button-themed-button",
          tone: "light"
        })]);
      }
    }
  }];
};

var testsMithril = [].concat(genericTests({ RaisedButton: RaisedButton, renderer: renderer })).concat(mithrilTests({ RaisedButton: RaisedButton, renderer: renderer }));

var reactTests = function reactTests(_ref) {
  var RaisedButton$$1 = _ref.RaisedButton,
      h = _ref.renderer;


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

  return [{
    section: "React specific tests"
  }, {
    name: "With router",
    interactive: true,
    component: withRouter(function (_ref3) {
      var history = _ref3.history;
      return h(RaisedButton$$1, {
        label: "Go to /shadow",
        url: {
          href: "/shadow",
          onClick: function onClick(e) {
            return e.preventDefault(), history.push("/shadow");
          }
        }
      });
    })
  }, {
    name: "Option: events (onclick)",
    interactive: true,
    exclude: true,
    component: withCounter(function (_ref4) {
      var counter = _ref4.counter,
          increment = _ref4.increment;
      return h("div", [h("div", "onclick called: " + counter), h(RaisedButton$$1, {
        label: "Button",
        events: {
          onClick: increment
        }
      })]);
    })
  }, {
    name: "Dark tone class + light tone class",
    className: "pe-dark-tone",
    component: function component() {
      return h(".pe-light-tone", {
        style: { background: "#fff" }
      }, [h(RaisedButton$$1, {
        label: "Normal"
      }), h(RaisedButton$$1, {
        label: "Disabled",
        disabled: true
      }), h(RaisedButton$$1, {
        label: "Theme",
        className: "tests-raised-button-themed-button"
      })]);
    }
  }, {
    name: "Dark tone class + light tone",
    className: "pe-dark-tone",
    component: function component() {
      return h("div", {
        style: { background: "#fff" }
      }, [h(RaisedButton$$1, {
        label: "Normal",
        tone: "light"
      }), h(RaisedButton$$1, {
        label: "Disabled",
        disabled: true,
        tone: "light"
      }), h(RaisedButton$$1, {
        label: "Theme",
        className: "tests-raised-button-themed-button",
        tone: "light"
      })]);
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Option: raised (with option z: 2) (JSX)",
    component: function component() {
      return React.createElement(RaisedButton$$1, { label: "Button", z: 2 });
    }
  }, {
    name: "Option: inactivate (2s) (JSX)",
    component: function component() {
      return React.createElement(RaisedButton$$1, { label: "Inactivated for 2s", inactivate: 2 });
    }
  }];
};

var testsReact = [].concat(genericTests({ RaisedButton: RaisedButton$1, renderer: renderer$1 })).concat(reactTests({ RaisedButton: RaisedButton$1, renderer: renderer$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
