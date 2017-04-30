import { renderer } from 'polythene-mithril-core';
import button from 'polythene-mithril-button';
import fab from 'polythene-fab';
import icon from 'polythene-icon';
import iconButton from 'polythene-icon-button';
import list from 'polythene-list';
import listTile from 'polythene-list-tile';
import { renderer as renderer$1 } from 'polythene-react-core';
import button$1 from 'polythene-react-button';

var tests = (function (_ref) {
  var button$$1 = _ref.button;

  button$$1.theme(".tests-button-themed-button", {
    color_light_background: "#2196F3",
    color_dark_background: "#2196F3",
    color_light_text: "#fff"
  });

  button$$1.theme(".blue-on-dark-button", {
    color_dark_text: "#2196F3"
  });

  button$$1.theme(".tests-button-bordered-button", {
    color_light_text: "#673ab7",
    color_light_border: "#673ab7",
    color_dark_text: "yellow",
    color_dark_border: "yellow"
  });
  return [{
    name: "Option: label",
    component: button$$1,
    attrs: {
      label: "Label"
    }
  }, {
    name: "Themed button: (option: borders)",
    component: button$$1,
    attrs: {
      label: "Borders",
      className: "tests-button-bordered-button",
      borders: true
    }
  }, {
    name: "Themed button (colors)",
    component: button$$1,
    attrs: {
      label: "Themed button",
      className: "tests-button-themed-button"
    }
  }, {
    name: "Option: style (colors)",
    component: button$$1,
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
    component: button$$1,
    attrs: {
      label: "No wash",
      wash: false
    }
  }, {
    name: "Option: ink (false)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "No ink",
      ink: false
    }
  }, {
    name: "Option: disabled (true)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "Disabled",
      disabled: true
    }
  }, {
    name: "Option: disabled (false)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "Not disabled",
      disabled: false
    }
  }, {
    name: "Option: selected",
    component: button$$1,
    attrs: {
      label: "Selected",
      selected: true
    }
  }, {
    name: "Option: formaction",
    component: button$$1,
    attrs: {
      label: "Form action",
      formaction: "http://polythene.js.org"
    }
  }, {
    name: "Option: url (without oncreate)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "Go to /shadow",
      url: {
        href: "/shadow"
      }
    }
  }, {
    name: "Option: inactive (false)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "Not inactive",
      inactive: false
    }
  }, {
    name: "Option: inactive (true)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "Inactive",
      inactive: true
    }
  }, {
    name: "Option: inactivate (2)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "Inactivated for 2s",
      inactivate: 2
    }
  },

  // Dark tone class

  {
    name: "Option: label -- dark theme class",
    className: "pe-dark-tone",
    component: button$$1,
    attrs: {
      label: "Label"
    }
  }, {
    name: "Option: tone \"dark\" -- dark theme class",
    className: "test-dark-theme",
    component: button$$1,
    attrs: {
      label: "Label",
      tone: "dark"
    }
  }, {
    name: "Themed button -- dark theme class",
    className: "pe-dark-tone",
    component: button$$1,
    attrs: {
      label: "Themed button",
      className: "tests-button-themed-button"
    }
  }, {
    name: "Themed button blue on dark -- dark theme class",
    className: "pe-dark-tone",
    component: button$$1,
    attrs: {
      label: "Blue on dark button",
      className: "blue-on-dark-button"
    }
  }, {
    name: "Themed button: (option: borders) -- dark theme class",
    className: "pe-dark-tone",
    component: button$$1,
    attrs: {
      label: "Borders dark theme",
      className: "tests-button-bordered-button",
      borders: true
    }
  }];
});

var mithrilTests$1 = function mithrilTests(_ref) {
  var button$$1 = _ref.button,
      h = _ref.renderer;

  return [{
    name: "Dark tone class + light theme class",
    class: "pe-dark-tone",
    component: {
      view: function view() {
        return h(".pe-light-tone", {
          style: { background: "#fff" }
        }, [h(button$$1, {
          label: "Normal"
        }), h(button$$1, {
          label: "Disabled",
          disabled: true
        }), h(button$$1, {
          label: "Theme",
          class: "tests-button-themed-button"
        })]);
      }
    }
  }, {
    name: "Dark tone class + light tone",
    class: "test-dark-theme",
    component: {
      view: function view() {
        return h("div", {
          style: { background: "#fff" }
        }, [h(button$$1, {
          label: "Normal",
          tone: "light"
        }), h(button$$1, {
          label: "Disabled",
          disabled: true,
          tone: "light"
        }), h(button$$1, {
          label: "Theme",
          class: "tests-button-themed-button",
          tone: "light"
        })]);
      }
    }
  }, {
    name: "Option: url (with oncreate)",
    interactive: true,
    component: button$$1,
    attrs: {
      label: "Go to /#/shadow",
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
        return [h("div", "Updated: " + vnode.state.updated), h(button$$1, {
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
        return [h("div", "onclick called: " + vnode.state.clicked), h(button$$1, {
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
        return [h("div", "onclick called: " + vnode.state.clickCount), h(button$$1, {
          label: "Button",
          events: {
            onclick: function onclick() {
              return vnode.state.clickCount++;
            }
          }
        })];
      }
    }
  }];
};

var testsMithril = [].concat(tests({ button: button, renderer: renderer })).concat(mithrilTests$1({ button: button, renderer: renderer }));

// import iconAlarm from "mmsvg/google/msvg/action/alarm-add";

var genericTests = (function (_ref) {
  var button$$1 = _ref.button,
      fab$$1 = _ref.fab,
      icon$$1 = _ref.icon,
      iconButton$$1 = _ref.iconButton,
      list$$1 = _ref.list,
      listTile$$1 = _ref.listTile;

  button$$1.theme(".tests-custom-theme-blue-button", {
    color_light_background: "#2196F3",
    color_light_text: "#fff"
  });

  button$$1.theme(".tests-custom-theme-red-button", {
    color_light_background: "#ff0000",
    color_light_text: "#fff"
  });

  icon$$1.theme(".tests-custom-theme-red-icon", {
    color_light: "red"
  });

  fab$$1.theme(".tests-custom-theme-red-fab", {
    color_light_background: "#ff0000",
    color_light: "#fff"
  });

  iconButton$$1.theme(".tests-custom-theme-large-icon-button", {
    padding: 50,
    color_background: "#fff"
  });

  list$$1.theme(".tests-custom-theme-blue-list", {
    color_light_border: "#2196F3"
  });

  listTile$$1.theme(".tests-custom-theme-red-list-tile", {
    color_light_title: "red"
  });

  return [{
    name: "Theme with style variables: button (should be blue)",
    component: button$$1,
    attrs: {
      className: "tests-custom-theme-blue-button",
      label: "Blue button"
    }
  }, {
    name: "Theme with style variables: button (should be red)",
    component: button$$1,
    attrs: {
      className: "tests-custom-theme-red-button",
      label: "Red button"
    }
  }, {
    name: "No theme: normal button",
    component: button$$1,
    attrs: {
      label: "Unaffected button"
    }
  }];
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
Testing 2 theming methods:
1. Style variables
2. Deriving components
*/

var h = renderer;

// [2]
var secondaryButton = {
  theme: button.theme,
  view: function view(vnode) {
    return h(button, _extends({
      className: "tests-custom-theme-secondary-button",
      borders: true
    }, vnode.attrs));
  }
};
secondaryButton.theme(".tests-custom-theme-secondary-button", {
  color_light_border: "#ddd",
  color_light_background: "#fff"
});

var mithrilTests$2 = function mithrilTests() {
  return [{
    name: "Theme with deriving component: button (should be bordered with white background)",
    component: secondaryButton,
    attrs: {
      label: "Bordered button"
    }
  }];
};

var testsMithril$1 = [].concat(genericTests({ button: button, fab: fab, icon: icon, iconButton: iconButton, list: list, listTile: listTile, renderer: renderer })).concat(mithrilTests$2());



var fromMithrilTests = Object.freeze({
	button: testsMithril,
	theme: testsMithril$1
});

var testsReact = tests({ button: button$1, renderer: renderer$1 });

// export { default as theme } from "./theme/tests-react";

var fromReactTests = Object.freeze({
	button: testsReact
});

var mithrilTests = fromMithrilTests;

var reactTests = fromReactTests;

export { mithrilTests, reactTests };
