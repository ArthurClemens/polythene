import { Button, renderer } from 'polythene-mithril';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button as Button$1, renderer as renderer$1 } from 'polythene-react';
import { compose, withHandlers, withState } from 'recompose';

var genericTests = (function (_ref) {
  var Button$$1 = _ref.Button;


  Button$$1.theme(".tests-button-themed-button", {
    color_light_background: "#2196F3",
    color_dark_background: "#2196F3",
    color_light_text: "#fff"
  });

  Button$$1.theme(".blue-on-dark-Button", {
    color_dark_text: "#2196F3"
  });

  Button$$1.theme(".tests-button-bordered-button", {
    color_light_text: "#673ab7",
    color_light_border: "#673ab7",
    color_dark_text: "yellow",
    color_dark_border: "yellow"
  });

  return [{
    name: "Option: label",
    component: Button$$1,
    attrs: {
      label: "Label"
    }
  }, {
    name: "Themed Button: (option: borders)",
    component: Button$$1,
    attrs: {
      label: "Borders",
      className: "tests-button-bordered-button",
      borders: true
    }
  }, {
    name: "Themed Button (colors)",
    component: Button$$1,
    attrs: {
      label: "Themed Button",
      className: "tests-button-themed-button"
    }
  }, {
    name: "Option: style (colors)",
    component: Button$$1,
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
    component: Button$$1,
    attrs: {
      label: "No wash",
      wash: false
    }
  }, {
    name: "Option: ink (false)",
    interactive: true,
    component: Button$$1,
    attrs: {
      label: "No ink",
      ink: false
    }
  }, {
    name: "Option: ripple",
    interactive: true,
    component: Button$$1,
    attrs: {
      label: "Custom ripple",
      ripple: {
        endOpacity: 1,
        persistent: true,
        style: {
          color: "#2196F3"
        }
      }
    }
  }, {
    name: "Option: selected",
    component: Button$$1,
    attrs: {
      label: "Selected",
      selected: true
    }
  }, {
    name: "Option: formaction",
    component: Button$$1,
    attrs: {
      label: "Form action",
      formaction: "http://polythene.js.org"
    }
  }, {
    name: "Option: inactive (false)",
    interactive: true,
    component: Button$$1,
    attrs: {
      label: "Not inactive",
      inactive: false
    }
  }, {
    name: "Option: inactive (true)",
    interactive: true,
    component: Button$$1,
    attrs: {
      label: "Inactive",
      inactive: true
    }
  }, {
    name: "Option: inactivate (2)",
    interactive: true,
    component: Button$$1,
    attrs: {
      label: "Inactivated for 2s",
      inactivate: 2
    }
  },

  // Dark tone class

  {
    name: "Option: label -- dark tone class",
    className: "pe-dark-tone",
    component: Button$$1,
    attrs: {
      label: "Label"
    }
  }, {
    name: "Option: tone \"dark\" -- dark tone class",
    className: "test-dark-tone",
    component: Button$$1,
    attrs: {
      label: "Label",
      tone: "dark"
    }
  }, {
    name: "Themed Button -- dark tone class",
    className: "pe-dark-tone",
    component: Button$$1,
    attrs: {
      label: "Themed Button",
      className: "tests-button-themed-button"
    }
  }, {
    name: "Themed Button blue on dark -- dark tone class",
    className: "pe-dark-tone",
    component: Button$$1,
    attrs: {
      label: "Blue on dark Button",
      className: "blue-on-dark-Button"
    }
  }, {
    name: "Themed Button: (option: borders) -- dark tone class",
    className: "pe-dark-tone",
    component: Button$$1,
    attrs: {
      label: "Borders dark tone",
      className: "tests-button-bordered-button",
      borders: true
    }
  }];
});

var mithrilTests = function mithrilTests(_ref) {
  var Button$$1 = _ref.Button,
      h = _ref.renderer;

  return [{
    section: "Mithril specific tests"
  }, {
    name: "Option: router url (with hash)",
    interactive: true,
    component: Button$$1,
    attrs: {
      label: "Go to #/shadow",
      url: {
        href: "#/shadow"
      }
    }
  }, {
    name: "Option: url (with oncreate)",
    interactive: true,
    component: Button$$1,
    attrs: {
      label: "Go to /shadow",
      url: {
        href: "/shadow",
        oncreate: h.route.link
      }
    }
  }, {
    name: "onbeforeupdate",
    interactive: true,
    exclude: true,
    component: {
      oninit: function oninit(vnode) {
        return vnode.state.updated = 0;
      },
      view: function view(vnode) {
        return [h("div", "Updated: " + vnode.state.updated), h(Button$$1, {
          label: "Button",
          onbeforeupdate: function onbeforeupdate() {
            return vnode.state.updated++;
          }
        })];
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
        return [h("div", "onclick called: " + vnode.state.clicked), h(Button$$1, {
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
    name: "Key down (after having focus) results in click",
    interactive: true,
    exclude: true,
    component: {
      oninit: function oninit(vnode) {
        return vnode.state.clickCount = 0;
      },
      view: function view(vnode) {
        return [h("div", "onclick called: " + vnode.state.clickCount), h(Button$$1, {
          label: "Button",
          events: {
            onclick: function onclick() {
              return vnode.state.clickCount++;
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
        }, [h(Button$$1, {
          label: "Normal"
        }), h(Button$$1, {
          label: "Disabled",
          disabled: true
        }), h(Button$$1, {
          label: "Theme",
          className: "tests-button-themed-button"
        })]);
      }
    }
  }, {
    name: "Dark tone class + light tone",
    className: "test-dark-tone",
    component: {
      view: function view() {
        return h("div", {
          style: { background: "#fff" }
        }, [h(Button$$1, {
          label: "Normal",
          tone: "light"
        }), h(Button$$1, {
          label: "Disabled",
          disabled: true,
          tone: "light"
        }), h(Button$$1, {
          label: "Theme",
          className: "tests-button-themed-button",
          tone: "light"
        })]);
      }
    }
  }];
};

var testsMithril = [].concat(genericTests({ Button: Button, renderer: renderer })).concat(mithrilTests({ Button: Button, renderer: renderer }));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var reactTests = function reactTests(_ref) {
  var Button$$1 = _ref.Button,
      h = _ref.renderer;


  var SecondaryButton = function SecondaryButton(props) {
    return React.createElement(Button$$1, _extends({ className: "react-secondary-button", borders: true }, props));
  };

  Button$$1.theme(".react-secondary-button", {
    color_light_text: "#673ab7",
    color_light_border: "#673ab7",
    color_dark_text: "yellow",
    color_dark_border: "yellow"
  });

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

  Button$$1.theme(".react-button-bordered-button", {
    color_light_text: "#673ab7",
    color_light_border: "#673ab7",
    color_dark_text: "yellow",
    color_dark_border: "yellow"
  });

  return [{
    section: "React specific tests"
  }, {
    name: "Option: router url (with hash)",
    interactive: true,
    component: function component() {
      return h(Button$$1, {
        label: "Go to #/shadow",
        url: {
          href: "#/shadow" }
      });
    }
  }, {
    name: "With router",
    interactive: true,
    component: withRouter(function (_ref3) {
      var history = _ref3.history;
      return h(Button$$1, {
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
      return h("div", [h("div", "onclick called: " + counter), h(Button$$1, {
        label: "Button",
        events: {
          onClick: increment
        }
      })]);
    })
  }, {
    name: "Key down (after having focus) results in click",
    interactive: true,
    exclude: true,
    component: withCounter(function (_ref5) {
      var counter = _ref5.counter,
          increment = _ref5.increment;
      return h("div", [h("div", "onclick called: " + counter), h(Button$$1, {
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
      }, [h(Button$$1, {
        label: "Normal"
      }), h(Button$$1, {
        label: "Disabled",
        disabled: true
      }), h(Button$$1, {
        label: "Theme",
        className: "tests-button-themed-button"
      })]);
    }
  }, {
    name: "Dark tone class + light tone",
    className: "pe-dark-tone",
    component: function component() {
      return h("div", {
        style: { background: "#fff" }
      }, [h(Button$$1, {
        label: "Normal",
        tone: "light"
      }), h(Button$$1, {
        label: "Disabled",
        disabled: true,
        tone: "light"
      }), h(Button$$1, {
        label: "Theme",
        className: "tests-button-themed-button",
        tone: "light"
      })]);
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Themed Button: (option: borders) (JSX)",
    component: function component() {
      return React.createElement(Button$$1, { label: "Button", className: "react-button-bordered-button", borders: true });
    }
  }, {
    name: "Option: inactivate (2s) (JSX)",
    component: function component() {
      return React.createElement(Button$$1, { label: "Inactivated for 2s", inactivate: 2 });
    }
  }, {
    name: "HOC (JSX)",
    component: function component() {
      return React.createElement(SecondaryButton, { label: "Secondary Button" });
    }
  }];
};

var testsReact = [].concat(genericTests({ Button: Button$1, renderer: renderer$1 })).concat(reactTests({ Button: Button$1, renderer: renderer$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
