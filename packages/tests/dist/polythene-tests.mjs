import { Button, FAB, Icon, IconButton, List, ListTile, Menu, RaisedButton, Ripple, SVG, Shadow, Toolbar, keys, renderer } from 'polythene-mithril';
import { flex, styler } from 'polythene-core-css';
import { CoreToolbar } from 'polythene-core-toolbar';
import { Button as Button$1, FAB as FAB$1, Icon as Icon$1, IconButton as IconButton$1, List as List$1, ListTile as ListTile$1, Menu as Menu$1, RaisedButton as RaisedButton$1, Ripple as Ripple$1, SVG as SVG$1, Shadow as Shadow$1, Toolbar as Toolbar$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';
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
    name: "Option: disabled (true)",
    interactive: true,
    component: Button$$1,
    attrs: {
      label: "Disabled",
      disabled: true
    }
  }, {
    name: "Option: disabled (false)",
    interactive: true,
    component: Button$$1,
    attrs: {
      label: "Not disabled",
      disabled: false
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
    name: "Option: url (without oncreate)",
    interactive: true,
    component: Button$$1,
    attrs: {
      label: "Go to /shadow",
      url: {
        href: "/shadow"
      }
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
    className: "test-dark-theme",
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

var mithrilTests$1 = function mithrilTests(_ref) {
  var Button$$1 = _ref.Button,
      h = _ref.renderer;

  return [{
    section: "Mithril specific tests"
  }, {
    name: "Option: url (with oncreate)",
    interactive: true,
    component: Button$$1,
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
    class: "pe-dark-tone",
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
        }, [h(Button$$1, {
          label: "Normal",
          tone: "light"
        }), h(Button$$1, {
          label: "Disabled",
          disabled: true,
          tone: "light"
        }), h(Button$$1, {
          label: "Theme",
          class: "tests-button-themed-button",
          tone: "light"
        })]);
      }
    }
  }];
};

var testsMithril = [].concat(genericTests({ Button: Button, renderer: renderer })).concat(mithrilTests$1({ Button: Button, renderer: renderer }));

var iconAlarm$1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/></svg>";

var genericTests$1 = (function (_ref) {
  var FAB$$1 = _ref.FAB,
      Icon$$1 = _ref.Icon,
      h = _ref.renderer;


  var trustedIconAlarm = h.trust(iconAlarm$1);
  FAB$$1.theme(".tests-fab-themed-fab", {
    color_light_background: "#2196F3",
    color_dark_background: "#0097A7",
    color_light: "#fff",
    color_dark: "#B2EBF2"
  });

  return [{
    name: "Child node",
    component: FAB$$1,
    attrs: null,
    children: h(Icon$$1, { svg: { content: trustedIconAlarm } })
  }, {
    name: "Option: icon",
    component: FAB$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconAlarm }
      }
    }
  }, {
    name: "Option: content",
    component: FAB$$1,
    attrs: {
      content: h(Icon$$1, { svg: { content: trustedIconAlarm } })
    }
  }, {
    name: "Themed FAB (colors)",
    component: FAB$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconAlarm }
      },
      className: "tests-fab-themed-fab"
    }
  }, {
    name: "Option: style (colors)",
    component: FAB$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconAlarm }
      },
      style: {
        color: "#FFCCBC",
        backgroundColor: "#4E342E"
      }
    }
  }, {
    name: "Option: mini",
    component: FAB$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconAlarm }
      },
      mini: true
    }
  }, {
    name: "Option: z (0)",
    component: FAB$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconAlarm }
      },
      z: 0
    }
  }, {
    name: "Option: z (5)",
    component: FAB$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconAlarm }
      },
      z: 5
    }
  }, {
    name: "Option: animateOnTap (false)",
    interactive: true,
    exclude: true,
    component: FAB$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconAlarm }
      },
      animateOnTap: false
    }
  },

  // Dark tone

  {
    name: "Option: icon -- dark tone class",
    component: FAB$$1,
    className: "pe-dark-tone",
    attrs: {
      icon: {
        svg: { content: trustedIconAlarm }
      }
    }
  }, {
    name: "Themed FAB -- dark tone class",
    component: FAB$$1,
    className: "pe-dark-tone",
    attrs: {
      icon: {
        svg: { content: trustedIconAlarm }
      },
      className: "tests-fab-themed-fab"
    }
  }];
});

var iconAlarm = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z\"/></svg>";

var mithrilTests$2 = function mithrilTests(_ref) {
  var FAB$$1 = _ref.FAB,
      h = _ref.renderer;

  var trustedIconAlarm = h.trust(iconAlarm);

  return [{
    section: "Mithril specific tests"
  }, {
    name: "Option: url",
    interactive: true,
    component: FAB$$1,
    attrs: {
      icon: {
        svg: trustedIconAlarm
      },
      url: {
        href: "/shadow",
        oncreate: h.route.link
      }
    }
  }, {
    name: "Dark tone class + light tone class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return h(".pe-light-tone", {
          style: { background: "#fff", padding: "10px" }
        }, [h(FAB$$1, {
          icon: {
            svg: trustedIconAlarm
          }
        }), h(FAB$$1, {
          icon: {
            svg: trustedIconAlarm
          },
          className: "tests-fab-themed-fab"
        })]);
      }
    }
  }, {
    name: "Dark tone class + light tone",
    className: "test-dark-theme",
    component: {
      view: function view() {
        return h("div", {
          style: { background: "#fff", padding: "10px" }
        }, [h(FAB$$1, {
          icon: {
            svg: trustedIconAlarm
          },
          tint: "light"
        }), h(FAB$$1, {
          icon: {
            svg: trustedIconAlarm
          },
          className: "tests-fab-themed-fab",
          tint: "light"
        })]);
      }
    }
  }];
};

var testsMithril$1 = [].concat(genericTests$1({ FAB: FAB, Icon: Icon, renderer: renderer })).concat(mithrilTests$2({ FAB: FAB, Icon: Icon, renderer: renderer }));

var iconStars$1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var genericTests$2 = (function (_ref) {
  var Icon$$1 = _ref.Icon,
      SVG$$1 = _ref.SVG,
      h = _ref.renderer;


  var trustedIconStars = h.trust(iconStars$1);

  Icon$$1.theme(".tests-icon-themed-icon", {
    size_regular: 50,
    color_light: "purple",
    color_dark: "orange"
  });

  return [{
    name: "Child node (trusted svg children)",
    component: Icon$$1,
    attrs: null,
    children: h(SVG$$1, [trustedIconStars])
  }, {
    name: "Option: content",
    component: Icon$$1,
    attrs: {
      content: trustedIconStars
    }
  }, {
    name: "Option: content (trusted svg content)",
    component: Icon$$1,
    attrs: {
      svg: { content: trustedIconStars }
    }
  }, {
    name: "Option: style",
    component: Icon$$1,
    attrs: {
      svg: trustedIconStars,
      style: {
        color: "#EF6C00"
      }
    }
  }, {
    name: "Themed (color and size)",
    component: Icon$$1,
    attrs: {
      svg: trustedIconStars,
      className: "tests-icon-themed-icon"
    }
  }, {
    name: "Option: type (small)",
    component: Icon$$1,
    attrs: {
      svg: trustedIconStars,
      type: "small"
    }
  }, {
    name: "Option: type (regular)",
    component: Icon$$1,
    attrs: {
      svg: trustedIconStars,
      type: "regular"
    }
  }, {
    name: "Option: type (medium)",
    component: Icon$$1,
    attrs: {
      svg: trustedIconStars,
      type: "medium"
    }
  }, {
    name: "Option: type (large)",
    component: Icon$$1,
    attrs: {
      svg: trustedIconStars,
      type: "large"
    }
  }, {
    name: "Option: src (image file)",
    component: Icon$$1,
    attrs: {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png"
    }
  }, {
    name: "Option: src (svg file)",
    component: Icon$$1,
    attrs: {
      src: "http://arthurclemens.github.io/assets/polythene/examples/recycle.svg"
    }
  }, {
    name: "Option: avatar (type large)",
    component: Icon$$1,
    attrs: {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
      avatar: true,
      type: "large"
    }
  },

  // Dark tone

  {
    name: "Child node (trusted svg children) -- dark tone class (color set with style option)",
    component: Icon$$1,
    className: "pe-dark-tone",
    attrs: {
      style: {
        color: "#fff"
      }
    },
    children: h(SVG$$1, [trustedIconStars])
  }, {
    name: "Themed (color and size) -- dark tone class",
    component: Icon$$1,
    className: "pe-dark-tone",
    attrs: {
      svg: trustedIconStars,
      className: "tests-icon-themed-icon"
    }
  }];
});

var iconStars = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var mithrilTests$3 = function mithrilTests(_ref) {
  var Icon$$1 = _ref.Icon,
      h = _ref.renderer;

  var trustedIconStars = h.trust(iconStars);
  return [{
    section: "Mithril specific tests"
  }, {
    name: "Dark tone class + light tone class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return h(".pe-light-tone", {
          style: { background: "#fff" }
        }, [h(Icon$$1, {
          svg: trustedIconStars
        }), h(Icon$$1, {
          svg: trustedIconStars,
          className: "tests-icon-themed-icon"
        })]);
      }
    }
  }, {
    name: "Dark tone class + light tone",
    className: "test-dark-theme",
    component: {
      view: function view() {
        return h("div", {
          style: { background: "#fff" }
        }, [h(Icon$$1, {
          svg: trustedIconStars,
          tone: "light"
        }), h(Icon$$1, {
          svg: trustedIconStars,
          tone: "light",
          className: "tests-icon-themed-icon"
        })]);
      }
    }
  }];
};

var testsMithril$2 = [].concat(genericTests$2({ Icon: Icon, SVG: SVG, renderer: renderer })).concat(mithrilTests$3({ Icon: Icon, SVG: SVG, renderer: renderer }));

var iconFavorite$1 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z\"/></svg>";

var genericTests$3 = (function (_ref) {
  var IconButton$$1 = _ref.IconButton,
      Icon$$1 = _ref.Icon,
      h = _ref.renderer;


  var trustedIconFavorite = h.trust(iconFavorite$1);
  IconButton$$1.theme(".tests-icon-button-themed-icon-button", {
    padding: 24,
    color_light_background: "purple",
    color_dark_background: "orange",
    color_light: "white"
  });

  return [{
    name: "Child node (icon component)",
    component: IconButton$$1,
    attrs: null,
    children: h(Icon$$1, { svg: { content: trustedIconFavorite } })
  }, {
    name: "Option: icon",
    component: IconButton$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconFavorite }
      }
    }
  }, {
    name: "Option: compact",
    component: IconButton$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconFavorite }
      },
      compact: true
    }
  }, {
    name: "Option: wash (true)",
    component: IconButton$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconFavorite }
      },
      wash: true
    }
  }, {
    name: "Option: style (colors)",
    component: IconButton$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconFavorite }
      },
      style: {
        color: "#FFCCBC",
        backgroundColor: "#4E342E"
      }
    }
  }, {
    name: "Themed (colors and padding)",
    component: IconButton$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconFavorite }
      },
      className: "tests-icon-button-themed-icon-button"
    }
  }, {
    name: "Option: ripple (center)",
    interactive: true,
    component: IconButton$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconFavorite }
      },
      ripple: {
        center: true
      }
    }
  }, {
    name: "Option: type (small)",
    component: IconButton$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconFavorite },
        type: "small"
      }
    }
  }, {
    name: "Option: type (regular)",
    component: IconButton$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconFavorite },
        type: "regular"
      }
    }
  }, {
    name: "Option: type (medium)",
    component: IconButton$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconFavorite },
        type: "medium"
      }
    }
  }, {
    name: "Option: type (large)",
    component: IconButton$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconFavorite },
        type: "large"
      }
    }
  },

  // Dark tone

  {
    name: "Child node (icon component) -- dark tone class",
    component: IconButton$$1,
    className: "pe-dark-tone",
    attrs: null,
    children: h(Icon$$1, { svg: { content: trustedIconFavorite } })
  }, {
    name: "Option: wash (true) -- dark tone class",
    component: IconButton$$1,
    className: "pe-dark-tone",
    attrs: {
      icon: {
        svg: { content: trustedIconFavorite }
      },
      wash: true
    }
  }, {
    name: "Themed (color and size) -- dark tone class",
    component: IconButton$$1,
    className: "pe-dark-tone",
    attrs: {
      icon: {
        svg: { content: trustedIconFavorite }
      },
      className: "tests-icon-button-themed-icon-button"
    }
  }];
});

var iconFavorite = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z\"/></svg>";

var mithrilTests$4 = function mithrilTests(_ref) {
  var IconButton$$1 = _ref.IconButton,
      h = _ref.renderer;

  var trustedIconFavorite = h.trust(iconFavorite);
  return [{
    section: "Mithril specific tests"
  }, {
    name: "Option: url",
    interactive: true,
    component: IconButton$$1,
    attrs: {
      icon: {
        svg: { content: trustedIconFavorite }
      },
      url: {
        href: "/shadow",
        oncreate: h.route.link
      }
    }
  }, {
    name: "Dark tone class + light tone class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return h(".pe-light-tone", {
          style: { background: "#fff", padding: "10px" }
        }, [h(IconButton$$1, {
          icon: {
            svg: trustedIconFavorite
          }
        }), h(IconButton$$1, {
          icon: {
            svg: trustedIconFavorite
          },
          className: "tests-icon-button-themed-icon-button"
        })]);
      }
    }
  }, {
    name: "Dark tone class + light tone",
    className: "test-dark-theme",
    component: {
      view: function view() {
        return h("div", {
          style: { background: "#fff", padding: "10px" }
        }, [h(IconButton$$1, {
          icon: {
            svg: trustedIconFavorite
          },
          tone: "light"
        }), h(IconButton$$1, {
          icon: {
            svg: trustedIconFavorite
          },
          tone: "light",
          className: "tests-icon-button-themed-icon-button"
        })]);
      }
    }
  }];
};

var testsMithril$3 = [].concat(genericTests$3({ IconButton: IconButton, Icon: Icon, renderer: renderer })).concat(mithrilTests$4({ IconButton: IconButton, renderer: renderer }));

var blockSize = 40;

var styles = [{
  " .block": {
    "min-width": blockSize + "px",
    "min-height": blockSize + "px",
    color: "#fff",
    "text-align": "center",
    "line-height": blockSize + "px",

    "&:nth-child(1)": {
      background: "#311B92"
    },
    "&:nth-child(2)": {
      background: "#4527A0"
    },
    "&:nth-child(3)": {
      background: "#512DA8"
    },
    "&:nth-child(4)": {
      background: "#5E35B1"
    },
    "&.fixed-height": {
      height: "90px",
      position: "relative"
    }
  },
  " .vertical-blocks": [flex.layoutVertical]
}];

var createBlocks = function createBlocks(renderer$$1) {
  return [1, 2, 3, 4].map(function (num) {
    return renderer$$1(".block", num);
  });
};

styler.add("css-classes", styles);

var genericTests$4 = (function (_ref) {
  var h = _ref.renderer,
      layoutComponent = _ref.layoutComponent,
      createBlocks$$1 = _ref.createBlocks;

  var blocks = createBlocks$$1(h);

  return [{
    name: "Should be aligned horizontally",
    component: layoutComponent(h(".layout", null, blocks))
  }, {
    name: "Should be aligned vertically",
    component: layoutComponent(h(".vertical-blocks", null, blocks))
  }, {
    name: "Should be stacked vertically and inline",
    component: layoutComponent(h(".layout.vertical.inline", null, blocks))
  }, {
    name: "Should be reversed",
    component: layoutComponent(h(".layout.horizontal.reverse", null, blocks))
  }, {
    name: "Should be justified horizontally",
    component: layoutComponent(h(".layout.justified", null, blocks))
  }, {
    name: "Should fill the space",
    component: layoutComponent(h(".fixed-height", null, h(".block.pe-fit")))
  }];
});

var layoutComponent = function layoutComponent(content) {
  return {
    view: function view() {
      return content;
    }
  };
};

var mithrilTests$5 = function mithrilTests() {
  return [];
};

var testsMithril$4 = [].concat(genericTests$4({ renderer: renderer, layoutComponent: layoutComponent, createBlocks: createBlocks })).concat(mithrilTests$5({ renderer: renderer, layoutComponent: layoutComponent, createBlocks: createBlocks }));

var genericTests$5 = (function (_ref) {
  var List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      Icon$$1 = _ref.Icon,
      h = _ref.renderer;


  List$$1.theme(".tests-lists-themed-list", {
    color_light_background: "#F57C00",
    color_light_border: "#F57C00",
    color_dark_background: "#5D4037",
    color_dark_border: "#5D4037",
    padding: 32
  });
  ListTile$$1.theme(".tests-lists-themed-list-tile", {
    color_light_title: "#fff",
    color_light_subtitle: "rgba(255,255,255,.8)",
    color_light_background: "#EF6C00",
    color_dark_title: "#D7CCC8",
    color_dark_subtitle: "#BCAAA4",
    color_dark_background: "#4E342E"
  });

  var ListTileJennifer = h(ListTile$$1, {
    title: "Jennifer Barker",
    key: "Jennifer Barker",
    subtitle: "Starting post doc",
    front: h(Icon$$1, {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
      avatar: true,
      type: "large"
    })
  });

  var ListTileAli = h(ListTile$$1, {
    title: "Ali Connors",
    key: "Ali Connors",
    subtitle: "Brunch this weekend?",
    front: h(Icon$$1, {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png",
      avatar: true,
      type: "large"
    })
  });

  var ListTileGrace = h(ListTile$$1, {
    title: "Grace VanDam",
    key: "Grace VanDam",
    subtitle: "Binge watching...",
    front: h(Icon$$1, {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-3.png",
      avatar: true,
      type: "large"
    })
  });

  return [{
    name: "Child nodes",
    component: List$$1,
    attrs: {
      borders: true
    },
    children: [h(ListTile$$1, {
      title: "Jennifer Barker",
      key: "Jennifer Barker",
      subtitle: "Starting post doc"
    }), h(ListTile$$1, {
      title: "Ali Connors",
      key: "Ali Connors",
      subtitle: "Brunch this weekend?"
    }), h(ListTile$$1, {
      title: "Grace VanDam",
      key: "Grace VanDam",
      subtitle: "Binge watching..."
    })]
  }, {
    name: "Option: tiles",
    component: List$$1,
    attrs: {
      borders: true,
      tiles: [h(ListTile$$1, {
        title: "Jennifer Barker",
        key: "Jennifer Barker",
        subtitle: "Starting post doc"
      }), h(ListTile$$1, {
        title: "Ali Connors",
        key: "Ali Connors",
        subtitle: "Brunch this weekend?"
      }), h(ListTile$$1, {
        title: "Grace VanDam",
        key: "Grace VanDam",
        subtitle: "Binge watching..."
      })]
    }
  }, {
    name: "Options: header, tiles, indent, indentedBorders",
    component: List$$1,
    attrs: {
      indentedBorders: true,
      header: {
        title: "Friends",
        indent: true
      },
      tiles: [h(ListTile$$1, {
        title: "Jennifer Barker",
        subtitle: "Starting post doc",
        indent: true,
        key: "Jennifer Barker"
      }), h(ListTile$$1, {
        title: "Ali Connors",
        subtitle: "Brunch this weekend?",
        indent: true,
        key: "Ali Connors"
      }), h(ListTile$$1, {
        title: "Grace VanDam",
        subtitle: "Binge watching...",
        indent: true,
        key: "Grace VanDam"
      })]
    }
  }, {
    name: "Option: compact",
    component: List$$1,
    attrs: {
      compact: true,
      borders: true,
      header: {
        title: "Friends"
      },
      tiles: [ListTileJennifer, ListTileAli, ListTileGrace]
    }
  }, {
    name: "Themed list (colors and padding)",
    component: List$$1,
    attrs: {
      borders: true,
      className: "tests-lists-themed-list"
    },
    children: [h(ListTile$$1, {
      title: "Jennifer Barker",
      key: "Jennifer Barker",
      subtitle: "Starting post doc",
      className: "tests-lists-themed-list-tile"
    }), h(ListTile$$1, {
      title: "Ali Connors",
      key: "Ali Connors",
      subtitle: "Brunch this weekend?",
      className: "tests-lists-themed-list-tile"
    }), h(ListTile$$1, {
      title: "Grace VanDam",
      key: "Grace VanDam",
      subtitle: "Binge watching...",
      className: "tests-lists-themed-list-tile"
    })]
  }, {
    name: "Option: style (colors)",
    component: List$$1,
    attrs: {
      header: { style: { color: "rgba(255,255,255,.8)" }, title: "Friends" },
      tiles: [h(ListTile$$1, { style: { color: "#fff" }, title: "One", key: "One" }), h(ListTile$$1, { style: { color: "#fff" }, title: "Two", key: "Two" }), h(ListTile$$1, { style: { color: "#fff" }, title: "Three", key: "Three" })],
      style: {
        backgroundColor: "#EF6C00",
        color: "#fff"
      }
    }
  },

  // Dark tone

  {
    name: "Option: class -- dark theme class",
    interactive: true,
    className: "pe-dark-tone",
    component: List$$1,
    attrs: {
      borders: true,
      header: {
        title: "Friends"
      },
      tiles: [h(ListTile$$1, {
        title: "Jennifer Barker",
        key: "Jennifer Barker",
        subtitle: "Starting post doc"
      }), h(ListTile$$1, {
        title: "Ali Connors",
        key: "Ali Connors",
        subtitle: "Brunch this weekend?"
      }), h(ListTile$$1, {
        title: "Grace VanDam",
        key: "Grace VanDam",
        subtitle: "Binge watching..."
      })]
    }
  }, {
    name: "Themed list (colors and padding) -- dark theme class",
    component: List$$1,
    className: "pe-dark-tone",
    attrs: {
      borders: true,
      className: "tests-lists-themed-list"
    },
    children: [h(ListTile$$1, {
      title: "Jennifer Barker",
      key: "Jennifer Barker",
      subtitle: "Starting post doc",
      className: "tests-lists-themed-list-tile"
    }), h(ListTile$$1, {
      title: "Ali Connors",
      key: "Ali Connors",
      subtitle: "Brunch this weekend?",
      className: "tests-lists-themed-list-tile"
    }), h(ListTile$$1, {
      title: "Grace VanDam",
      key: "Grace VanDam",
      subtitle: "Binge watching...",
      className: "tests-lists-themed-list-tile"
    })]
  }, {
    name: "Dark tone class + light theme class",
    interactive: true,
    className: "pe-dark-tone",
    component: List$$1,
    attrs: {
      className: "pe-light-tone",
      style: { background: "#fff" },
      borders: true,
      header: {
        title: "Friends"
      },
      tiles: [h(ListTile$$1, {
        title: "Jennifer Barker",
        key: "Jennifer Barker",
        subtitle: "Starting post doc",
        hoverable: true
      }), h(ListTile$$1, {
        title: "Ali Connors",
        key: "Ali Connors",
        subtitle: "Brunch this weekend?",
        hoverable: true
      }), h(ListTile$$1, {
        title: "Grace VanDam",
        key: "Grace VanDam",
        subtitle: "Binge watching...",
        hoverable: true
      })]
    }
  }, {
    name: "Dark tone class + light tone",
    interactive: true,
    className: "test-dark-theme",
    component: List$$1,
    attrs: {
      style: { background: "#fff" },
      borders: true,
      header: {
        title: "Friends"
      },
      tone: "light",
      tiles: [h(ListTile$$1, {
        title: "Jennifer Barker",
        key: "Jennifer Barker",
        subtitle: "Starting post doc",
        hoverable: true
      }), h(ListTile$$1, {
        title: "Ali Connors",
        key: "Ali Connors",
        subtitle: "Brunch this weekend?",
        hoverable: true
      }), h(ListTile$$1, {
        title: "Grace VanDam",
        key: "Grace VanDam",
        subtitle: "Binge watching...",
        hoverable: true
      })]
    }
  }];
});

var mithrilTests$6 = function mithrilTests(_ref) {
  var List$$1 = _ref.List,
      Icon$$1 = _ref.Icon,
      ListTile$$1 = _ref.ListTile,
      h = _ref.renderer;


  var createUserListTile = function createUserListTile(title, subtitle, filename) {
    return h(ListTile$$1, {
      title: title,
      key: title,
      subtitle: subtitle,
      front: h(Icon$$1, {
        src: "http://arthurclemens.github.io/assets/polythene/examples/" + filename + ".png",
        avatar: true,
        type: "large"
      }),
      url: {
        href: "/",
        oncreate: h.route.link
      }
    });
  };

  var listTileJennifer = createUserListTile("Jennifer Barker", "Starting post doc", "avatar-1");
  var listTileAli = createUserListTile("Ali Connors", "Brunch this weekend?", "avatar-2");
  var listTileGrace = createUserListTile("Grace VanDam", "Binge watching...", "avatar-3");

  return [{
    section: "Mithril specific tests"
  }, {
    name: "Options: header, tiles with urls",
    interactive: true,
    component: {
      view: function view() {
        return [h(List$$1, {
          header: {
            title: "Friends"
          },
          borders: true,
          tiles: [listTileJennifer, listTileAli, listTileGrace]
        }), h(List$$1, {
          header: {
            title: "Friends"
          },
          borders: true,
          tiles: [listTileJennifer, listTileAli, listTileGrace]
        })];
      }
    }
  }, {
    name: "Options: header.sticky",
    interactive: true,
    component: {
      view: function view() {
        return h(".scrollable-list", [0, 1, 2, 3, 4].map(function (num) {
          return h(List$$1, {
            header: {
              title: "Subheader " + num,
              sticky: true
            },
            tiles: [listTileJennifer, listTileAli, listTileGrace, listTileJennifer, listTileAli, listTileGrace]
          });
        }));
      }
    }
  }];
};

var testsMithril$5 = [].concat(genericTests$5({ List: List, Icon: Icon, ListTile: ListTile, renderer: renderer, keys: keys })).concat(mithrilTests$6({ List: List, Icon: Icon, ListTile: ListTile, renderer: renderer, keys: keys }));

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iconStars$3 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var genericTests$6 = (function (_ref) {
  var ListTile$$1 = _ref.ListTile,
      Icon$$1 = _ref.Icon,
      h = _ref.renderer,
      keys$$1 = _ref.keys;


  var trustedIconStars = h.trust(iconStars$3);

  ListTile$$1.theme(".tests-list-tile-themed-list-tile", {
    color_light_title: "#424242",
    color_light_background: "#FFECB3",
    color_dark_title: "#FFECB3",
    color_dark_background: "#5D4037",
    font_size_title: 21
  });

  return [{
    name: "Child node",
    component: ListTile$$1,
    attrs: null,
    children: h(Icon$$1, { svg: trustedIconStars })
  }, {
    name: "Option: title",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice"
    }
  }, {
    name: "Option: content",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      content: h(Icon$$1, { svg: trustedIconStars })
    }
  }, {
    name: "Option: subtitle",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      subtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before."
    }
  }, {
    name: "Option: highSubtitle",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before."
    }
  }, {
    name: "Option: highSubtitle and compact",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
      compact: true
    }
  }, {
    name: "Option: events",
    interactive: true,
    component: ListTile$$1,
    attrs: {
      title: "Click me",
      events: _defineProperty({}, keys$$1.onclick, function () {
        return alert("clicked");
      })
    }
  }, {
    name: "Option: front (avatar)",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      front: h(Icon$$1, {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
        avatar: true,
        type: "large"
      })
    }
  }, {
    name: "Option: front (Icon)",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      front: h(Icon$$1, {
        svg: trustedIconStars,
        type: "medium"
      })
    }
  }, {
    name: "Themed (color and font size)",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      front: h(Icon$$1, {
        svg: trustedIconStars,
        type: "medium"
      }),
      className: "tests-list-tile-themed-list-tile"
    }
  }, {
    name: "Option: style (colors)",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      front: h(Icon$$1, {
        svg: trustedIconStars,
        type: "medium"
      }),
      style: {
        color: "#fff",
        backgroundColor: "#EF6C00"
      }
    }
  },

  // Appearance options

  {
    name: "Option: indent",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      indent: true
    }
  }, {
    name: "Option: selected",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      selected: true
    }
  }, {
    name: "Option: ink",
    interactive: true,
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      ink: true
    }
  }, {
    name: "Option: ink with ripple options",
    interactive: true,
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      ink: true,
      ripple: {
        opacityDecayVelocity: 0.1
      }
    }
  }, {
    name: "Option: hoverable",
    interactive: true,
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      hoverable: true
    }
  }, {
    name: "Option: selectable",
    interactive: true,
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      selectable: true
    }
  },

  // Secondary content options

  {
    name: "Option: secondary (Icon)",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      secondary: {
        icon: {
          svg: trustedIconStars,
          type: "medium"
        }
      }
    }
  }, {
    name: "Option: secondary (content)",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      secondary: {
        content: h(Icon$$1, { svg: trustedIconStars })
      }
    }
  },

  // Dark tone

  {
    name: "Option: disabled url -- dark tone class",
    component: ListTile$$1,
    className: "pe-dark-tone",
    attrs: {
      title: "Ancillary Justice",
      disabled: true
    }
  }, {
    name: "Themed (color and font size) -- dark tone class",
    component: ListTile$$1,
    className: "pe-dark-tone",
    attrs: {
      title: "Ancillary Justice",
      front: h(Icon$$1, {
        svg: trustedIconStars,
        type: "medium"
      }),
      className: "tests-list-tile-themed-list-tile"
    }
  }, {
    name: "Dark tone class + light theme class",
    component: ListTile$$1,
    className: "pe-dark-tone",
    attrs: {
      title: "Ancillary Justice",
      className: "pe-light-tone",
      front: h(Icon$$1, {
        svg: trustedIconStars,
        type: "medium"
      })
    }
  }, {
    name: "Dark tone class + light tone",
    component: ListTile$$1,
    className: "test-dark-theme",
    attrs: {
      title: "Ancillary Justice",
      tone: "light",
      front: h(Icon$$1, {
        svg: trustedIconStars,
        type: "medium"
      })
    }
  }];
});

var iconStars$2 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var mithrilTests$7 = function mithrilTests(_ref) {
  var Icon$$1 = _ref.Icon,
      ListTile$$1 = _ref.ListTile,
      h = _ref.renderer;

  var trustedIconStars = h.trust(iconStars$2);

  return [{
    section: "Mithril specific tests"
  }, {
    name: "Option: url",
    interactive: true,
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      url: {
        href: "/",
        oncreate: h.route.link
      }
    }
  }, {
    name: "Option: disabled url",
    interactive: true,
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      url: {
        href: "/",
        oncreate: h.route.link
      },
      disabled: true
    }
  }, {
    name: "Option: secondary (url)",
    interactive: true,
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      secondary: {
        icon: {
          svg: trustedIconStars,
          type: "medium"
        },
        url: {
          href: "/",
          oncreate: h.route.link
        }
      }
    }
  }, {
    name: "Option: highSubtitle and front",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
      front: h(Icon$$1, {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
        avatar: true,
        type: "large"
      }),
      secondary: {
        icon: {
          svg: trustedIconStars
        },
        url: {
          href: "/",
          oncreate: h.route.link
        }
      }
    }
  },

  // Dark tone

  {
    name: "Option: highSubtitle and front -- dark tone class",
    className: "pe-dark-tone",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
      front: h(Icon$$1, {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
        avatar: true,
        type: "large"
      }),
      secondary: {
        icon: {
          svg: trustedIconStars
        },
        url: {
          href: "/",
          oncreate: h.route.link
        }
      }
    }
  }];
};

var testsMithril$6 = [].concat(genericTests$6({ Icon: Icon, ListTile: ListTile, renderer: renderer, keys: keys })).concat(mithrilTests$7({ Icon: Icon, ListTile: ListTile, renderer: renderer, keys: keys }));

var genericTests$7 = (function (_ref) {
  var Menu$$1 = _ref.Menu,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      h = _ref.renderer;


  var themeColor = "#2196F3";
  Menu$$1.theme(".menu-tests-blue-menu", {
    color_light_background: themeColor,
    border_radius: 0
  });
  ListTile$$1.theme(".menu-tests-blue-menu-list-tile", {
    color_light_title: "#fff",
    color_light_background: themeColor
  });

  // const themedSimpleMenuContent = h(List, [
  //   h(ListTile, {
  //     title: "Yes",
  //     ink: true,
  //     class: "menu-tests-blue-menu-list-tile"
  //   }),
  //   h(ListTile, {
  //     title: "No",
  //     ink: true,
  //     class: "menu-tests-blue-menu-list-tile"
  //   })
  // ]);

  // const styledSimpleMenuContent = h(List, [
  //   h(ListTile, {
  //     title: "Yes",
  //     ink: true,
  //     style: {
  //       backgroundColor: themeColor,
  //       color: "#fff"
  //     }
  //   }),
  //   h(ListTile, {
  //     title: "No",
  //     ink: true,
  //     style: {
  //       backgroundColor: themeColor,
  //       color: "#fff"
  //     }
  //   })
  // ]);

  return [];
});

var sizesMenu = (function (_ref) {
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
});

var simpleMenuContent = renderer(List, [renderer(ListTile, {
  title: "Yes",
  ink: true
}), renderer(ListTile, {
  title: "No",
  ink: true
})]);

var simpleMenuComponent = {
  oninit: function oninit(vnode) {
    vnode.state.isOpen = false;
    vnode.state.id = vnode.attrs.instance;
  },
  view: function view(vnode) {
    return renderer("div", {
      style: { position: "relative" }
    }, [renderer(RaisedButton, {
      label: "Open menu",
      id: vnode.state.id,
      events: {
        onclick: function onclick() {
          return vnode.state.isOpen = true;
        }
      }
    }), renderer(Menu, {
      offset: -4,
      target: "#" + vnode.state.id,
      show: vnode.state.isOpen,
      didHide: function didHide() {
        return vnode.state.isOpen = false;
      },
      content: simpleMenuContent
    })]);
  }
};

var mithrilTests$8 = function mithrilTests(_ref) {
  var Menu$$1 = _ref.Menu,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      h = _ref.renderer;


  return [{
    section: "Mithril specific tests"
  }, {
    name: "Simple menu",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return h(simpleMenuComponent, { instance: "one" });
      }
    }
  }, {
    name: "Simple menu 2",
    interactive: true,
    exclude: true,
    component: {
      view: function view() {
        return h(simpleMenuComponent, { instance: "two" });
      }
    }
  }];
};

var testsMithril$7 = [].concat(genericTests$7({ Menu: Menu, List: List, ListTile: ListTile, renderer: renderer })).concat(mithrilTests$8({ Menu: Menu, List: List, ListTile: ListTile, renderer: renderer }));

var genericTests$8 = (function (_ref) {
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

var mithrilTests$9 = function mithrilTests(_ref) {
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

var testsMithril$8 = [].concat(genericTests$8({ RaisedButton: RaisedButton, renderer: renderer })).concat(mithrilTests$9({ RaisedButton: RaisedButton, renderer: renderer }));

var genericTests$9 = (function (_ref) {
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
    name: "Option: end opacity (0.1)",
    interactive: true,
    exclude: true,
    component: Ripple$$1,
    attrs: {
      endOpacity: 0.1
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
    name: "Themed (should be red and permanent)",
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
    className: "test-dark-theme",
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

var mithrilTests$10 = function mithrilTests(_ref) {
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

var testsMithril$9 = [].concat(genericTests$9({ Ripple: Ripple, renderer: renderer })).concat(mithrilTests$10({ Ripple: Ripple, renderer: renderer }));

var genericTests$10 = (function (_ref) {
  var Shadow$$1 = _ref.Shadow;

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
  }];
});

var mithrilTests$11 = function mithrilTests(_ref) {
  var Shadow$$1 = _ref.Shadow,
      h = _ref.renderer;


  var interactiveTest = {
    oninit: function oninit(vnode) {
      return vnode.state.z = 1;
    },
    view: function view(vnode) {
      return [h(".absolute.absolute--fill", {
        onclick: function onclick() {
          var newZ = (vnode.state.z + 1) % 6;
          vnode.state.z = newZ;
        }
      }, "Click me"), h(Shadow$$1, {
        animated: true,
        z: vnode.state.z
      })];
    }
  };

  return [{
    section: "Mithril specific tests"
  }, {
    name: "Add to a Mithril element",
    component: {
      view: function view() {
        return [h("div", "Some element"), h(Shadow$$1)];
      }
    }
  }, {
    name: "Interactive option: animated",
    interactive: true,
    exclude: true,
    component: interactiveTest
  },

  // Dark tone

  {
    name: "Interactive option: animated -- dark tone class",
    interactive: true,
    className: "pe-dark-tone",
    component: interactiveTest
  }];
};

var testsMithril$10 = [].concat(genericTests$10({ Shadow: Shadow, renderer: renderer })).concat(mithrilTests$11({ Shadow: Shadow, renderer: renderer }));

var iconStars$5 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var genericTests$11 = (function (_ref) {
  var SVG$$1 = _ref.SVG,
      h = _ref.renderer;


  var trustedIconStars = h.trust(iconStars$5);

  SVG$$1.theme(".tests-svg-themed-svg", {
    color_light: "#0D47A1",
    color_dark: "orange"
  });

  return [{
    name: "Child node (trusted)",
    component: SVG$$1,
    attrs: null,
    children: [trustedIconStars]
  }, {
    name: "Option: attribute (trusted)",
    component: SVG$$1,
    attrs: trustedIconStars
  }, {
    name: "Option: content (trusted)",
    component: SVG$$1,
    attrs: {
      content: trustedIconStars
    }
  }, {
    name: "Option: style (color)",
    component: SVG$$1,
    attrs: {
      content: trustedIconStars,
      style: {
        color: "#EF6C00"
      }
    }
  }, {
    name: "Themed (color)",
    component: SVG$$1,
    attrs: {
      content: trustedIconStars,
      className: "tests-svg-themed-svg"
    }
  },

  // Dark tone

  {
    name: "Option: content -- dark tone class",
    className: "pe-dark-tone",
    component: SVG$$1,
    attrs: {
      content: trustedIconStars
    }
  }, {
    name: "Themed (color) -- dark tone class",
    component: SVG$$1,
    className: "pe-dark-tone",
    attrs: {
      content: trustedIconStars,
      className: "tests-svg-themed-svg"
    }
  }];
});

var iconStars$4 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var mithrilTests$12 = function mithrilTests(_ref) {
  var SVG$$1 = _ref.SVG,
      h = _ref.renderer;

  var trustedIconStars = h.trust(iconStars$4);
  return [{
    section: "Mithril specific tests"
  }, {
    name: "Dark tone class + light tone class",
    className: "pe-dark-tone",
    component: {
      view: function view() {
        return h("div", {
          style: {
            background: "#fff",
            padding: "10px"
          },
          className: "pe-light-tone"
        }, h(SVG$$1, { content: trustedIconStars }));
      }
    }
  }, {
    name: "Dark tone class + light tone",
    className: "test-dark-theme",
    component: {
      view: function view() {
        return h("div", {
          style: {
            background: "#fff",
            padding: "10px"
          }
        }, h(SVG$$1, {
          content: trustedIconStars,
          tone: "light"
        }));
      }
    }
  }];
};

var testsMithril$11 = [].concat(genericTests$11({ SVG: SVG, renderer: renderer })).concat(mithrilTests$12({ SVG: SVG, renderer: renderer }));

var alarmSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z\"/></svg>";

var genericTests$12 = (function (_ref) {
  var Button$$1 = _ref.Button,
      FAB$$1 = _ref.FAB,
      Icon$$1 = _ref.Icon,
      IconButton$$1 = _ref.IconButton,
      h = _ref.renderer;


  var trustedAlarmSVG = h.trust(alarmSVG);

  Button$$1.theme(".tests-custom-theme-blue-button", {
    color_light_background: "#2196F3",
    color_light_text: "#fff"
  });

  Button$$1.theme(".tests-custom-theme-red-button", {
    color_light_background: "#ff0000",
    color_light_text: "#fff"
  });

  Icon$$1.theme(".tests-custom-theme-red-icon", {
    color_light: "red"
  });

  FAB$$1.theme(".tests-custom-theme-red-fab", {
    color_light_background: "#ff0000",
    color_light: "#fff"
  });

  IconButton$$1.theme(".tests-custom-theme-large-icon-button", {
    padding: 50,
    color_background: "#fff"
  });

  // list.theme(".tests-custom-theme-blue-list", {
  //   color_light_border: "#2196F3"
  // });

  // listTile.theme(".tests-custom-theme-red-list-tile", {
  //   color_light_title: "red"
  // });

  return [{
    name: "Theme with style variables: button (should be blue)",
    component: Button$$1,
    attrs: {
      className: "tests-custom-theme-blue-button",
      label: "Blue button"
    }
  }, {
    name: "Theme with style variables: button (should be red)",
    component: Button$$1,
    attrs: {
      className: "tests-custom-theme-red-button",
      label: "Red button"
    }
  }, {
    name: "No theme: normal button",
    component: Button$$1,
    attrs: {
      label: "Unaffected button"
    }
  }, {
    name: "Theme with theme file (global primary color): FAB (should be orange)",
    component: FAB$$1,
    attrs: {
      icon: {
        svg: trustedAlarmSVG
      }
    }
  }, {
    name: "Theme with style variables: FAB (should be red)",
    component: FAB$$1,
    attrs: {
      className: "tests-custom-theme-red-fab",
      icon: {
        svg: trustedAlarmSVG
      }
    }
  }, {
    name: "Theme with style variables: icon (should be red)",
    component: Icon$$1,
    attrs: {
      className: "tests-custom-theme-red-icon",
      svg: trustedAlarmSVG
    }
  }, {
    name: "Theme with style variables: icon button (should have large padding)",
    component: IconButton$$1,
    attrs: {
      className: "tests-custom-theme-large-icon-button",
      icon: {
        svg: trustedAlarmSVG
      }
    }
  }];
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
Testing 2 theming methods:
1. Style variables
2. Deriving components
*/

// import list from "polythene-list";
// import listTile from "polythene-list-tile";

var h = renderer;

// [2]
var secondaryButton = {
  theme: Button.theme,
  view: function view(vnode) {
    return h(Button, _extends({
      className: "tests-custom-theme-secondary-button",
      borders: true
    }, vnode.attrs));
  }
};
secondaryButton.theme(".tests-custom-theme-secondary-button", {
  color_light_border: "#ddd",
  color_light_background: "#fff"
});

var mithrilTests$13 = function mithrilTests() {
  return [{
    section: "Mithril specific tests"
  }, {
    name: "Theme with deriving component: button (should be bordered with white background)",
    component: secondaryButton,
    attrs: {
      label: "Bordered button"
    }
  }];
};

var testsMithril$12 = [].concat(genericTests$12({ Button: Button, FAB: FAB, Icon: Icon, IconButton: IconButton, renderer: renderer /*, list, listTile*/ })).concat(mithrilTests$13());

var toolbarClasses = CoreToolbar.classes;

var iconMenuSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"/></svg>";
var iconRefreshSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z\"/></svg>";
var iconAddSVG = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/></svg>";

var shared = (function (_ref) {
  var IconButton$$1 = _ref.IconButton,
      h = _ref.renderer;


  var trustedIconMenu = h.trust(iconMenuSVG);
  var trustedIconRefresh = h.trust(iconRefreshSVG);
  var trustedIconAddSVG = h.trust(iconAddSVG);

  var toolbarButton = function toolbarButton(key, svg) {
    return h(IconButton$$1, {
      key: key,
      icon: { svg: svg }
    });
  };

  var toolbarRow = [toolbarButton("menu", trustedIconMenu), h("div", { key: "title", className: toolbarClasses.title }, "Toolbar with a very very very very very very very very very long title"), toolbarButton("refresh", trustedIconRefresh), toolbarButton("add", trustedIconAddSVG)];

  var toolbarTitleAsSpan = [toolbarButton("menu", trustedIconMenu), h("span", { key: "title" }, "Toolbar with a very very very long title"), toolbarButton("add", trustedIconAddSVG)];

  var toolbarTitleAtStart = [h("div", {
    className: toolbarClasses.title,
    key: "title"
  }, "Title"), toolbarButton("add", trustedIconAddSVG)];

  var toolbarRowIndentedTitle = [h("div", {
    className: toolbarClasses.indentedTitle,
    key: "title"
  }, "Indented title"), toolbarButton("add", trustedIconAddSVG)];

  return {
    toolbarRow: toolbarRow,
    toolbarTitleAsSpan: toolbarTitleAsSpan,
    toolbarTitleAtStart: toolbarTitleAtStart,
    toolbarRowIndentedTitle: toolbarRowIndentedTitle
  };
});

var genericTests$13 = (function (_ref) {
  var Toolbar$$1 = _ref.Toolbar,
      IconButton$$1 = _ref.IconButton,
      h = _ref.renderer;

  var _shared = shared({ IconButton: IconButton$$1, renderer: h }),
      toolbarRow = _shared.toolbarRow,
      toolbarTitleAsSpan = _shared.toolbarTitleAsSpan,
      toolbarTitleAtStart = _shared.toolbarTitleAtStart,
      toolbarRowIndentedTitle = _shared.toolbarRowIndentedTitle;

  Toolbar$$1.theme(".tests-toolbar-themed-toolbar", {
    color_dark_background: "#00c853"
  });

  return [{
    name: "Child node",
    component: Toolbar$$1,
    attrs: null,
    children: toolbarRow
  }, {
    name: "Option: content",
    component: Toolbar$$1,
    attrs: {
      content: toolbarRow
    }
  }, {
    name: "Option: compact",
    component: Toolbar$$1,
    attrs: {
      compact: true,
      content: toolbarRow
    }
  }, {
    name: "Title as span",
    component: Toolbar$$1,
    attrs: {
      content: toolbarTitleAsSpan
    }
  }, {
    name: "Indented title (without icons)",
    component: Toolbar$$1,
    attrs: {
      content: toolbarRowIndentedTitle
    }
  }, {
    name: "Title at start",
    component: Toolbar$$1,
    attrs: {
      content: toolbarTitleAtStart
    }
  }, {
    name: "Option: style (colors and height)",
    className: "small-result",
    component: Toolbar$$1,
    attrs: {
      content: toolbarRow,
      style: {
        backgroundColor: "#EF6C00",
        color: "#fff",
        height: "72px"
      }
    }
  },

  // Dark tone

  {
    name: "Option: content -- dark tone class",
    className: "pe-dark-tone",
    component: Toolbar$$1,
    attrs: {
      content: toolbarRow
    }
  }, {
    name: "Themed -- dark tone class",
    className: "pe-dark-tone",
    component: Toolbar$$1,
    attrs: {
      className: "tests-toolbar-themed-toolbar",
      content: toolbarRow
    }
  }, {
    name: "Dark tone class + light tone class",
    className: "pe-dark-tone",
    component: Toolbar$$1,
    attrs: {
      content: toolbarRow,
      className: "pe-light-tone"
    }
  }, {
    name: "Dark tone class + light tone",
    className: "test-dark-theme",
    component: Toolbar$$1,
    attrs: {
      content: toolbarRow,
      tone: "light"
    }
  }];
});

var mithrilTests$14 = function mithrilTests(_ref) {
  var Toolbar$$1 = _ref.Toolbar,
      IconButton$$1 = _ref.IconButton,
      Shadow$$1 = _ref.Shadow,
      h = _ref.renderer;

  var _shared = shared({ IconButton: IconButton$$1, renderer: h }),
      toolbarRow = _shared.toolbarRow;

  return [{
    section: "Mithril specific tests"
  }, {
    name: "Option: shadow",
    class: "small-result",
    component: {
      view: function view() {
        return h("div", {
          style: {
            position: "relative"
          }
        }, [h(Toolbar$$1, toolbarRow), h(Shadow$$1)]);
      }
    }
  }];
};

var testsMithril$13 = [].concat(genericTests$13({ Toolbar: Toolbar, IconButton: IconButton, Shadow: Shadow, renderer: renderer })).concat(mithrilTests$14({ Toolbar: Toolbar, IconButton: IconButton, Shadow: Shadow, renderer: renderer }));



var fromMithrilTests = Object.freeze({
	button: testsMithril,
	fab: testsMithril$1,
	icon: testsMithril$2,
	iconButton: testsMithril$3,
	layoutStyles: testsMithril$4,
	list: testsMithril$5,
	listTile: testsMithril$6,
	menu: testsMithril$7,
	raisedButton: testsMithril$8,
	ripple: testsMithril$9,
	shadow: testsMithril$10,
	svg: testsMithril$11,
	theme: testsMithril$12,
	toolbar: testsMithril$13
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
		if (Object.keys(_extends$1({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var index = shouldUseNative() ? Object.assign : function (target, source) {
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
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */
/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

var reactProdInvariant_1 = reactProdInvariant;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
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
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function oneArgumentPooler(copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler$1 = function twoArgumentPooler(a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function threeArgumentPooler(a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler$1 = function fourArgumentPooler(a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function standardReleaser(instance) {
  var Klass = this;
  !(instance instanceof Klass) ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Trying to release an instance into a pool of a different type.') : reactProdInvariant_1('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function addPoolingTo(CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler$1,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler$1
};

var PooledClass_1 = PooledClass;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

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

var ReactCurrentOwner_1 = ReactCurrentOwner;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
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

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction_1;

if (process.env.NODE_ENV !== 'production') {
  (function () {
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
  })();
}

var warning_1 = warning;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var canDefineProperty$1 = false;
if (process.env.NODE_ENV !== 'production') {
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', { get: function get() {} });
    canDefineProperty$1 = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

var canDefineProperty_1 = canDefineProperty$1;

/**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

var ReactElementSymbol = REACT_ELEMENT_TYPE;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var hasOwnProperty$1 = Object.prototype.hasOwnProperty;

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown;
var specialPropRefWarningShown;

function hasValidRef(config) {
  if (process.env.NODE_ENV !== 'production') {
    if (hasOwnProperty$1.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (process.env.NODE_ENV !== 'production') {
    if (hasOwnProperty$1.call(config, 'key')) {
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
      process.env.NODE_ENV !== 'production' ? warning_1(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
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
      process.env.NODE_ENV !== 'production' ? warning_1(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
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
    $$typeof: ReactElementSymbol,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (process.env.NODE_ENV !== 'production') {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty_1) {
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
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
ReactElement.createElement = function (type, config, children) {
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
      if (hasOwnProperty$1.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
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
    if (process.env.NODE_ENV !== 'production') {
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
  if (process.env.NODE_ENV !== 'production') {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== ReactElementSymbol) {
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
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner_1.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = index({}, element.props);

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
      owner = ReactCurrentOwner_1.current;
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
      if (hasOwnProperty$1.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
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
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === ReactElementSymbol;
};

var ReactElement_1 = ReactElement;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

var getIteratorFn_1 = getIteratorFn;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

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
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};

var KeyEscapeUtils_1 = KeyEscapeUtils;

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

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
  if (component && (typeof component === 'undefined' ? 'undefined' : _typeof$1(component)) === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils_1.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
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
  var type = typeof children === 'undefined' ? 'undefined' : _typeof$1(children);

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === ReactElementSymbol) {
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
    var iteratorFn = getIteratorFn_1(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (process.env.NODE_ENV !== 'production') {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner_1.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner_1.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
          process.env.NODE_ENV !== 'production' ? warning_1(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils_1.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if (process.env.NODE_ENV !== 'production') {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = ' It looks like you\'re using an element created by a different ' + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner_1.current) {
          var name = ReactCurrentOwner_1.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
      process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : reactProdInvariant_1('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum);
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

var traverseAllChildren_1 = traverseAllChildren;

var twoArgumentPooler = PooledClass_1.twoArgumentPooler;
var fourArgumentPooler = PooledClass_1.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass_1.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
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
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren_1(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass_1.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;

  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction_1.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement_1.isValidElement(mappedChild)) {
      mappedChild = ReactElement_1.cloneAndReplaceKey(mappedChild,
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
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren_1(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
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

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren_1(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction_1.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

var ReactChildren_1 = ReactChildren;

function warnNoop(publicInstance, callerName) {
  if (process.env.NODE_ENV !== 'production') {
    var constructor = publicInstance.constructor;
    process.env.NODE_ENV !== 'production' ? warning_1(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
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
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function enqueueCallback(publicInstance, callback) {},

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
   * @internal
   */
  enqueueForceUpdate: function enqueueForceUpdate(publicInstance) {
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
   * @internal
   */
  enqueueReplaceState: function enqueueReplaceState(publicInstance, completeState) {
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
   * @internal
   */
  enqueueSetState: function enqueueSetState(publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};

var ReactNoopUpdateQueue_1 = ReactNoopUpdateQueue;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var emptyObject = {};

if (process.env.NODE_ENV !== 'production') {
  Object.freeze(emptyObject);
}

var emptyObject_1 = emptyObject;

var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject_1;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue_1;
}

ReactComponent.prototype.isReactComponent = {};

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
ReactComponent.prototype.setState = function (partialState, callback) {
  !((typeof partialState === 'undefined' ? 'undefined' : _typeof$2(partialState)) === 'object' || typeof partialState === 'function' || partialState == null) ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : reactProdInvariant_1('85') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
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
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if (process.env.NODE_ENV !== 'production') {
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function defineDeprecationWarning(methodName, info) {
    if (canDefineProperty_1) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function get() {
          process.env.NODE_ENV !== 'production' ? warning_1(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]) : void 0;
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

var ReactComponent_1 = ReactComponent;

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject_1;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue_1;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent_1.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
index(ReactPureComponent.prototype, ReactComponent_1.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;

var ReactPureComponent_1 = ReactPureComponent;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var ReactPropTypeLocationNames = {};

if (process.env.NODE_ENV !== 'production') {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

var ReactPropTypeLocationNames_1 = ReactPropTypeLocationNames;

var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

/**
 * Policies that describe methods in `ReactClassInterface`.
 */

var injectedMixins = [];

/**
 * Composite components are higher-level components that compose other composite
 * or host components.
 *
 * To create a new type of `ReactClass`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactClassInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will be available on the prototype.
 *
 * @interface ReactClassInterface
 * @internal
 */
var ReactClassInterface = {

  /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */
  mixins: 'DEFINE_MANY',

  /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */
  statics: 'DEFINE_MANY',

  /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */
  propTypes: 'DEFINE_MANY',

  /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */
  contextTypes: 'DEFINE_MANY',

  /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */
  childContextTypes: 'DEFINE_MANY',

  // ==== Definition methods ====

  /**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */
  getDefaultProps: 'DEFINE_MANY_MERGED',

  /**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */
  getInitialState: 'DEFINE_MANY_MERGED',

  /**
   * @return {object}
   * @optional
   */
  getChildContext: 'DEFINE_MANY_MERGED',

  /**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @required
   */
  render: 'DEFINE_ONCE',

  // ==== Delegate methods ====

  /**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */
  componentWillMount: 'DEFINE_MANY',

  /**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidMount: 'DEFINE_MANY',

  /**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */
  componentWillReceiveProps: 'DEFINE_MANY',

  /**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */
  shouldComponentUpdate: 'DEFINE_ONCE',

  /**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */
  componentWillUpdate: 'DEFINE_MANY',

  /**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidUpdate: 'DEFINE_MANY',

  /**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */
  componentWillUnmount: 'DEFINE_MANY',

  // ==== Advanced methods ====

  /**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */
  updateComponent: 'OVERRIDE_BASE'

};

/**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */
var RESERVED_SPEC_KEYS = {
  displayName: function displayName(Constructor, _displayName) {
    Constructor.displayName = _displayName;
  },
  mixins: function mixins(Constructor, _mixins) {
    if (_mixins) {
      for (var i = 0; i < _mixins.length; i++) {
        mixSpecIntoComponent(Constructor, _mixins[i]);
      }
    }
  },
  childContextTypes: function childContextTypes(Constructor, _childContextTypes) {
    if (process.env.NODE_ENV !== 'production') {
      validateTypeDef(Constructor, _childContextTypes, 'childContext');
    }
    Constructor.childContextTypes = index({}, Constructor.childContextTypes, _childContextTypes);
  },
  contextTypes: function contextTypes(Constructor, _contextTypes) {
    if (process.env.NODE_ENV !== 'production') {
      validateTypeDef(Constructor, _contextTypes, 'context');
    }
    Constructor.contextTypes = index({}, Constructor.contextTypes, _contextTypes);
  },
  /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */
  getDefaultProps: function getDefaultProps(Constructor, _getDefaultProps) {
    if (Constructor.getDefaultProps) {
      Constructor.getDefaultProps = createMergedResultFunction(Constructor.getDefaultProps, _getDefaultProps);
    } else {
      Constructor.getDefaultProps = _getDefaultProps;
    }
  },
  propTypes: function propTypes(Constructor, _propTypes) {
    if (process.env.NODE_ENV !== 'production') {
      validateTypeDef(Constructor, _propTypes, 'prop');
    }
    Constructor.propTypes = index({}, Constructor.propTypes, _propTypes);
  },
  statics: function statics(Constructor, _statics) {
    mixStaticSpecIntoComponent(Constructor, _statics);
  },
  autobind: function autobind() {} };

function validateTypeDef(Constructor, typeDef, location) {
  for (var propName in typeDef) {
    if (typeDef.hasOwnProperty(propName)) {
      // use a warning instead of an invariant so components
      // don't show up in prod but only in __DEV__
      process.env.NODE_ENV !== 'production' ? warning_1(typeof typeDef[propName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', Constructor.displayName || 'ReactClass', ReactPropTypeLocationNames_1[location], propName) : void 0;
    }
  }
}

function validateMethodOverride(isAlreadyDefined, name) {
  var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;

  // Disallow overriding of base class methods unless explicitly allowed.
  if (ReactClassMixin.hasOwnProperty(name)) {
    !(specPolicy === 'OVERRIDE_BASE') ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.', name) : reactProdInvariant_1('73', name) : void 0;
  }

  // Disallow defining methods more than once unless explicitly allowed.
  if (isAlreadyDefined) {
    !(specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED') ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : reactProdInvariant_1('74', name) : void 0;
  }
}

/**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classes.
 */
function mixSpecIntoComponent(Constructor, spec) {
  if (!spec) {
    if (process.env.NODE_ENV !== 'production') {
      var typeofSpec = typeof spec === 'undefined' ? 'undefined' : _typeof$3(spec);
      var isMixinValid = typeofSpec === 'object' && spec !== null;

      process.env.NODE_ENV !== 'production' ? warning_1(isMixinValid, '%s: You\'re attempting to include a mixin that is either null ' + 'or not an object. Check the mixins included by the component, ' + 'as well as any mixins they include themselves. ' + 'Expected object but got %s.', Constructor.displayName || 'ReactClass', spec === null ? null : typeofSpec) : void 0;
    }

    return;
  }

  !(typeof spec !== 'function') ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'ReactClass: You\'re attempting to use a component class or function as a mixin. Instead, just use a regular object.') : reactProdInvariant_1('75') : void 0;
  !!ReactElement_1.isValidElement(spec) ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'ReactClass: You\'re attempting to use a component as a mixin. Instead, just use a regular object.') : reactProdInvariant_1('76') : void 0;

  var proto = Constructor.prototype;
  var autoBindPairs = proto.__reactAutoBindPairs;

  // By handling mixins before any other properties, we ensure the same
  // chaining order is applied to methods with DEFINE_MANY policy, whether
  // mixins are listed before or after these methods in the spec.
  if (spec.hasOwnProperty(MIXINS_KEY)) {
    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
  }

  for (var name in spec) {
    if (!spec.hasOwnProperty(name)) {
      continue;
    }

    if (name === MIXINS_KEY) {
      // We have already handled mixins in a special case above.
      continue;
    }

    var property = spec[name];
    var isAlreadyDefined = proto.hasOwnProperty(name);
    validateMethodOverride(isAlreadyDefined, name);

    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
      RESERVED_SPEC_KEYS[name](Constructor, property);
    } else {
      // Setup methods on prototype:
      // The following member methods should not be automatically bound:
      // 1. Expected ReactClass methods (in the "interface").
      // 2. Overridden methods (that were mixed in).
      var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
      var isFunction = typeof property === 'function';
      var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;

      if (shouldAutoBind) {
        autoBindPairs.push(name, property);
        proto[name] = property;
      } else {
        if (isAlreadyDefined) {
          var specPolicy = ReactClassInterface[name];

          // These cases should already be caught by validateMethodOverride.
          !(isReactClassMethod && (specPolicy === 'DEFINE_MANY_MERGED' || specPolicy === 'DEFINE_MANY')) ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.', specPolicy, name) : reactProdInvariant_1('77', specPolicy, name) : void 0;

          // For methods which are defined more than once, call the existing
          // methods before calling the new property, merging if appropriate.
          if (specPolicy === 'DEFINE_MANY_MERGED') {
            proto[name] = createMergedResultFunction(proto[name], property);
          } else if (specPolicy === 'DEFINE_MANY') {
            proto[name] = createChainedFunction(proto[name], property);
          }
        } else {
          proto[name] = property;
          if (process.env.NODE_ENV !== 'production') {
            // Add verbose displayName to the function, which helps when looking
            // at profiling tools.
            if (typeof property === 'function' && spec.displayName) {
              proto[name].displayName = spec.displayName + '_' + name;
            }
          }
        }
      }
    }
  }
}

function mixStaticSpecIntoComponent(Constructor, statics) {
  if (!statics) {
    return;
  }
  for (var name in statics) {
    var property = statics[name];
    if (!statics.hasOwnProperty(name)) {
      continue;
    }

    var isReserved = name in RESERVED_SPEC_KEYS;
    !!isReserved ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', name) : reactProdInvariant_1('78', name) : void 0;

    var isInherited = name in Constructor;
    !!isInherited ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.', name) : reactProdInvariant_1('79', name) : void 0;
    Constructor[name] = property;
  }
}

/**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */
function mergeIntoWithNoDuplicateKeys(one, two) {
  !(one && two && (typeof one === 'undefined' ? 'undefined' : _typeof$3(one)) === 'object' && (typeof two === 'undefined' ? 'undefined' : _typeof$3(two)) === 'object') ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.') : reactProdInvariant_1('80') : void 0;

  for (var key in two) {
    if (two.hasOwnProperty(key)) {
      !(one[key] === undefined) ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.', key) : reactProdInvariant_1('81', key) : void 0;
      one[key] = two[key];
    }
  }
  return one;
}

/**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createMergedResultFunction(one, two) {
  return function mergedResult() {
    var a = one.apply(this, arguments);
    var b = two.apply(this, arguments);
    if (a == null) {
      return b;
    } else if (b == null) {
      return a;
    }
    var c = {};
    mergeIntoWithNoDuplicateKeys(c, a);
    mergeIntoWithNoDuplicateKeys(c, b);
    return c;
  };
}

/**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createChainedFunction(one, two) {
  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments);
  };
}

/**
 * Binds a method to the component.
 *
 * @param {object} component Component whose method is going to be bound.
 * @param {function} method Method to be bound.
 * @return {function} The bound method.
 */
function bindAutoBindMethod(component, method) {
  var boundMethod = method.bind(component);
  if (process.env.NODE_ENV !== 'production') {
    boundMethod.__reactBoundContext = component;
    boundMethod.__reactBoundMethod = method;
    boundMethod.__reactBoundArguments = null;
    var componentName = component.constructor.displayName;
    var _bind = boundMethod.bind;
    boundMethod.bind = function (newThis) {
      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // User is trying to bind() an autobound method; we effectively will
      // ignore the value of "this" that the user is trying to use, so
      // let's warn.
      if (newThis !== component && newThis !== null) {
        process.env.NODE_ENV !== 'production' ? warning_1(false, 'bind(): React component methods may only be bound to the ' + 'component instance. See %s', componentName) : void 0;
      } else if (!args.length) {
        process.env.NODE_ENV !== 'production' ? warning_1(false, 'bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See %s', componentName) : void 0;
        return boundMethod;
      }
      var reboundMethod = _bind.apply(boundMethod, arguments);
      reboundMethod.__reactBoundContext = component;
      reboundMethod.__reactBoundMethod = method;
      reboundMethod.__reactBoundArguments = args;
      return reboundMethod;
    };
  }
  return boundMethod;
}

/**
 * Binds all auto-bound methods in a component.
 *
 * @param {object} component Component whose method is going to be bound.
 */
function bindAutoBindMethods(component) {
  var pairs = component.__reactAutoBindPairs;
  for (var i = 0; i < pairs.length; i += 2) {
    var autoBindKey = pairs[i];
    var method = pairs[i + 1];
    component[autoBindKey] = bindAutoBindMethod(component, method);
  }
}

/**
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */
var ReactClassMixin = {

  /**
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */
  replaceState: function replaceState(newState, callback) {
    this.updater.enqueueReplaceState(this, newState);
    if (callback) {
      this.updater.enqueueCallback(this, callback, 'replaceState');
    }
  },

  /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function isMounted() {
    return this.updater.isMounted(this);
  }
};

var ReactClassComponent = function ReactClassComponent() {};
index(ReactClassComponent.prototype, ReactComponent_1.prototype, ReactClassMixin);

var didWarnDeprecated = false;

/**
 * Module for creating composite components.
 *
 * @class ReactClass
 */
var ReactClass = {

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  createClass: function createClass(spec) {
    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning_1(didWarnDeprecated, '%s: React.createClass is deprecated and will be removed in version 16. ' + 'Use plain JavaScript classes instead. If you\'re not yet ready to ' + 'migrate, create-react-class is available on npm as a ' + 'drop-in replacement.', spec && spec.displayName || 'A Component') : void 0;
      didWarnDeprecated = true;
    }

    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function (props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (process.env.NODE_ENV !== 'production') {
        process.env.NODE_ENV !== 'production' ? warning_1(this instanceof Constructor, 'Something is calling a React component directly. Use a factory or ' + 'JSX instead. See: https://fb.me/react-legacyfactory') : void 0;
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject_1;
      this.updater = updater || ReactNoopUpdateQueue_1;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (process.env.NODE_ENV !== 'production') {
        // We allow auto-mocks to proceed as if they're returning null.
        if (initialState === undefined && this.getInitialState._isMockFunction) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      !((typeof initialState === 'undefined' ? 'undefined' : _typeof$3(initialState)) === 'object' && !Array.isArray(initialState)) ? process.env.NODE_ENV !== 'production' ? invariant_1(false, '%s.getInitialState(): must return an object or null', Constructor.displayName || 'ReactCompositeComponent') : reactProdInvariant_1('82', Constructor.displayName || 'ReactCompositeComponent') : void 0;

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, spec);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (process.env.NODE_ENV !== 'production') {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    !Constructor.prototype.render ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'createClass(...): Class specification must implement a `render` method.') : reactProdInvariant_1('83') : void 0;

    if (process.env.NODE_ENV !== 'production') {
      process.env.NODE_ENV !== 'production' ? warning_1(!Constructor.prototype.componentShouldUpdate, '%s has a method called ' + 'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' + 'The name is phrased as a question because the function is ' + 'expected to return a value.', spec.displayName || 'A component') : void 0;
      process.env.NODE_ENV !== 'production' ? warning_1(!Constructor.prototype.componentWillRecieveProps, '%s has a method called ' + 'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?', spec.displayName || 'A component') : void 0;
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  },

  injection: {
    injectMixin: function injectMixin(mixin) {
      injectedMixins.push(mixin);
    }
  }

};

var ReactClass_1 = ReactClass;

var _typeof$5 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(hasOwnProperty)
  // Strip regex characters so we can use it for regex
  .replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
  // Remove hasOwnProperty from the template to make it generic
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function setItem(id, item) {
    itemMap.set(id, item);
  };
  getItem = function getItem(id) {
    return itemMap.get(id);
  };
  removeItem = function removeItem(id) {
    itemMap['delete'](id);
  };
  getItemIDs = function getItemIDs() {
    return Array.from(itemMap.keys());
  };

  addRoot = function addRoot(id) {
    rootIDSet.add(id);
  };
  removeRoot = function removeRoot(id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function getRootIDs() {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var getKeyFromID = function getKeyFromID(id) {
    return '.' + id;
  };
  var getIDFromKey = function getIDFromKey(key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function setItem(id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function getItem(id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function removeItem(id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function getItemIDs() {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function addRoot(id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function removeRoot(id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function getRootIDs() {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}

function _getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
  process.env.NODE_ENV !== 'production' ? warning_1(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
  return describeComponentFrame(name, element && element._source, ownerName);
}

var ReactComponentTreeHook = {
  onSetChildren: function onSetChildren(id, nextChildIDs) {
    var item = getItem(id);
    !item ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Item must have been set') : reactProdInvariant_1('144') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : reactProdInvariant_1('140') : void 0;
      !(nextChild.childIDs != null || _typeof$5(nextChild.element) !== 'object' || nextChild.element == null) ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : reactProdInvariant_1('141') : void 0;
      !nextChild.isMounted ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : reactProdInvariant_1('71') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : reactProdInvariant_1('142', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function onBeforeMountComponent(id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function onBeforeUpdateComponent(id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function onMountComponent(id) {
    var item = getItem(id);
    !item ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'Item must have been set') : reactProdInvariant_1('144') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function onUpdateComponent(id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function onUnmountComponent(id) {
    var item = getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function purgeUnmountedComponents() {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function isMounted(id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function getCurrentStackAddendum(topElement) {
    var info = '';
    if (topElement) {
      var name = _getDisplayName(topElement);
      var owner = topElement._owner;
      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
    }

    var currentOwner = ReactCurrentOwner_1.current;
    var id = currentOwner && currentOwner._debugID;

    info += ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function getStackAddendumByID(id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function getChildIDs(id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function getDisplayName(id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return _getDisplayName(element);
  },
  getElement: function getElement(id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function getOwnerID(id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function getParentID(id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function getSource(id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function getText(id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function getUpdateCount(id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },

  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs
};

var ReactComponentTreeHook_1 = ReactComponentTreeHook;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var _typeof$6 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ReactComponentTreeHook$1;

if (typeof process !== 'undefined' && process.env && process.env.NODE_ENV === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook$1 = ReactComponentTreeHook_1;
}

var loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ? process.env.NODE_ENV !== 'production' ? invariant_1(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames_1[location], typeSpecName) : reactProdInvariant_1('84', componentName || 'React class', ReactPropTypeLocationNames_1[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret_1);
      } catch (ex) {
        error = ex;
      }
      process.env.NODE_ENV !== 'production' ? warning_1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames_1[location], typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof$6(error)) : void 0;
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if (process.env.NODE_ENV !== 'production') {
          if (!ReactComponentTreeHook$1) {
            ReactComponentTreeHook$1 = ReactComponentTreeHook_1;
          }
          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook$1.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook$1.getCurrentStackAddendum(element);
          }
        }

        process.env.NODE_ENV !== 'production' ? warning_1(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
      }
    }
  }
}

var checkReactTypeSpec_1 = checkReactTypeSpec;

var _typeof$4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner_1.current) {
    var name = ReactCurrentOwner_1.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
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
      info = ' Check the top-level render call using <' + parentName + '>.';
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

  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;
  }
  memoizer[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner_1.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }

  process.env.NODE_ENV !== 'production' ? warning_1(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook_1.getCurrentStackAddendum(element)) : void 0;
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
  if ((typeof node === 'undefined' ? 'undefined' : _typeof$4(node)) !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement_1.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement_1.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn_1(node);
    // Entry iterators provide implicit keys.
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement_1.isValidElement(step.value)) {
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
  if (componentClass.propTypes) {
    checkReactTypeSpec_1(componentClass.propTypes, element.props, 'prop', name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
    process.env.NODE_ENV !== 'production' ? warning_1(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

var ReactElementValidator$2 = {

  createElement: function createElement(type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';
        if (type === undefined || (typeof type === 'undefined' ? 'undefined' : _typeof$4(type)) === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + 'it\'s defined in.';
        }

        var sourceInfo = getSourceInfoErrorAddendum(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        info += ReactComponentTreeHook_1.getCurrentStackAddendum();

        process.env.NODE_ENV !== 'production' ? warning_1(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type === 'undefined' ? 'undefined' : _typeof$4(type), info) : void 0;
      }
    }

    var element = ReactElement_1.createElement.apply(this, arguments);

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

    validatePropTypes(element);

    return element;
  },

  createFactory: function createFactory(type) {
    var validatedFactory = ReactElementValidator$2.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    if (process.env.NODE_ENV !== 'production') {
      if (canDefineProperty_1) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function get() {
            process.env.NODE_ENV !== 'production' ? warning_1(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.') : void 0;
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }

    return validatedFactory;
  },

  cloneElement: function cloneElement(element, props, children) {
    var newElement = ReactElement_1.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }

};

var ReactElementValidator_1 = ReactElementValidator$2;

/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var createDOMFactory = ReactElement_1.createFactory;
if (process.env.NODE_ENV !== 'production') {
  var ReactElementValidator$1 = ReactElementValidator_1;
  createDOMFactory = ReactElementValidator$1.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),

  // SVG
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};

var ReactDOMFactories_1 = ReactDOMFactories;

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1$2 = ReactPropTypesSecret$2;

var _typeof$8 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

if (process.env.NODE_ENV !== 'production') {
  var invariant$2 = invariant_1;
  var warning$1 = warning_1;
  var ReactPropTypesSecret$3 = ReactPropTypesSecret_1$2;
  var loggedTypeFailures$1 = {};
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
          invariant$2(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$3);
        } catch (ex) {
          error = ex;
        }
        warning$1(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error === 'undefined' ? 'undefined' : _typeof$8(error));
        if (error instanceof Error && !(error.message in loggedTypeFailures$1)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures$1[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning$1(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

var checkPropTypes_1 = checkPropTypes;

var _typeof$7 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var factoryWithTypeCheckers = function factoryWithTypeCheckers(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret_1$2) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant_1(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            warning_1(false, 'You are manually calling a React.PropTypes validation ' + 'function for the `%s` prop on `%s`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.', propFullName, componentName);
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction_1.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret_1$2);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning_1(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction_1.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$2);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning_1(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction_1.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret_1$2) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret_1$2);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue === 'undefined' ? 'undefined' : _typeof$7(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue === 'undefined' ? 'undefined' : _typeof$7(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

// React 15.5 references this module, and assumes PropTypes are still callable in production.
// Therefore we re-export development-only version with all the PropTypes checks here.
// However if one is migrating to the `prop-types` npm library, they will go through the
// `index.js` entry point, and it will branch depending on the environment.

var factory_1 = function factory_1(isValidElement) {
  // It is still allowed in 15.5.
  var throwOnDirectAccess = false;
  return factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
};

var isValidElement = ReactElement_1.isValidElement;

var ReactPropTypes = factory_1(isValidElement);

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

var ReactVersion = '15.5.4';

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
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
  !ReactElement_1.isValidElement(children) ? process.env.NODE_ENV !== 'production' ? invariant_1(false, 'React.Children.only expected to receive a single React element child.') : reactProdInvariant_1('143') : void 0;
  return children;
}

var onlyChild_1 = onlyChild;

var createElement = ReactElement_1.createElement;
var createFactory = ReactElement_1.createFactory;
var cloneElement = ReactElement_1.cloneElement;

if (process.env.NODE_ENV !== 'production') {
  var canDefineProperty = canDefineProperty_1;
  var ReactElementValidator = ReactElementValidator_1;
  var didWarnPropTypesDeprecated = false;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var __spread = index;

if (process.env.NODE_ENV !== 'production') {
  var warned = false;
  __spread = function __spread() {
    process.env.NODE_ENV !== 'production' ? warning_1(warned, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.') : void 0;
    warned = true;
    return index.apply(null, arguments);
  };
}

var React$1 = {

  // Modern

  Children: {
    map: ReactChildren_1.map,
    forEach: ReactChildren_1.forEach,
    count: ReactChildren_1.count,
    toArray: ReactChildren_1.toArray,
    only: onlyChild_1
  },

  Component: ReactComponent_1,
  PureComponent: ReactPureComponent_1,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement_1.isValidElement,

  // Classic

  PropTypes: ReactPropTypes,
  createClass: ReactClass_1.createClass,
  createFactory: createFactory,
  createMixin: function createMixin(mixin) {
    // Currently a noop. Will be used to validate and trace mixins.
    return mixin;
  },

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories_1,

  version: ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread
};

// TODO: Fix tests so that this deprecation warning doesn't cause failures.
if (process.env.NODE_ENV !== 'production') {
  if (canDefineProperty) {
    Object.defineProperty(React$1, 'PropTypes', {
      get: function get() {
        process.env.NODE_ENV !== 'production' ? warning_1(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated. Use ' + 'the prop-types package from npm instead.') : void 0;
        didWarnPropTypesDeprecated = true;
        return ReactPropTypes;
      }
    });
  }
}

var React_1 = React$1;

var react = React_1;

var react_2 = react.Component;

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var factoryWithThrowingShims = function factoryWithThrowingShims() {
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  function shim() {
    invariant_1(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction_1;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var _typeof$10 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var index$2 = createCommonjsModule(function (module) {
  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   */

  if (process.env.NODE_ENV !== 'production') {
    var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

    var isValidElement = function isValidElement(object) {
      return (typeof object === 'undefined' ? 'undefined' : _typeof$10(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    };

    // By explicitly using `prop-types` you are opting into new development behavior.
    // http://fb.me/prop-types-in-prod
    var throwOnDirectAccess = true;
    module.exports = factoryWithTypeCheckers(isValidElement, throwOnDirectAccess);
  } else {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
});

/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning$2 = function warning() {};

if (__DEV__) {
  warning$2 = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

var warning_1$2 = warning$2;

/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
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

var NODE_ENV = process.env.NODE_ENV;

var invariant$3 = function invariant(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

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
};

var invariant_1$2 = invariant$3;

var isAbsolute = function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
};

// About 1.5x faster than the two-arg version of Array#splice()
var spliceOne = function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }list.pop();
};

// This implementation is based heavily on node's url.parse
var resolvePathname = function resolvePathname(to) {
  var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var toParts = to && to.split('/') || [];
  var fromParts = from && from.split('/') || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash = void 0;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) {
    fromParts.unshift('..');
  }if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
};

var index$3 = resolvePathname;

var _typeof2$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var index$5 = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;

  var _typeof = typeof Symbol === "function" && _typeof2$1(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2$1(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2$1(obj);
  };

  var valueEqual = function valueEqual(a, b) {
    if (a === b) return true;

    if (a == null || b == null) return false;

    if (Array.isArray(a)) return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return valueEqual(item, b[index]);
    });

    var aType = typeof a === 'undefined' ? 'undefined' : _typeof(a);
    var bType = typeof b === 'undefined' ? 'undefined' : _typeof(b);

    if (aType !== bType) return false;

    if (aType === 'object') {
      var aValue = a.valueOf();
      var bValue = b.valueOf();

      if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

      var aKeys = Object.keys(a);
      var bKeys = Object.keys(b);

      if (aKeys.length !== bKeys.length) return false;

      return aKeys.every(function (key) {
        return valueEqual(a[key], b[key]);
      });
    }

    return false;
  };

  exports.default = valueEqual;
});

var PathUtils = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;
  var addLeadingSlash = exports.addLeadingSlash = function addLeadingSlash(path) {
    return path.charAt(0) === '/' ? path : '/' + path;
  };

  var stripLeadingSlash = exports.stripLeadingSlash = function stripLeadingSlash(path) {
    return path.charAt(0) === '/' ? path.substr(1) : path;
  };

  var stripPrefix = exports.stripPrefix = function stripPrefix(path, prefix) {
    return path.indexOf(prefix) === 0 ? path.substr(prefix.length) : path;
  };

  var stripTrailingSlash = exports.stripTrailingSlash = function stripTrailingSlash(path) {
    return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
  };

  var parsePath = exports.parsePath = function parsePath(path) {
    var pathname = path || '/';
    var search = '';
    var hash = '';

    var hashIndex = pathname.indexOf('#');
    if (hashIndex !== -1) {
      hash = pathname.substr(hashIndex);
      pathname = pathname.substr(0, hashIndex);
    }

    var searchIndex = pathname.indexOf('?');
    if (searchIndex !== -1) {
      search = pathname.substr(searchIndex);
      pathname = pathname.substr(0, searchIndex);
    }

    pathname = decodeURI(pathname);

    return {
      pathname: pathname,
      search: search === '?' ? '' : search,
      hash: hash === '#' ? '' : hash
    };
  };

  var createPath = exports.createPath = function createPath(location) {
    var pathname = location.pathname,
        search = location.search,
        hash = location.hash;

    var path = encodeURI(pathname || '/');

    if (search && search !== '?') path += search.charAt(0) === '?' ? search : '?' + search;

    if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : '#' + hash;

    return path;
  };
});

var PathUtils_1 = PathUtils.addLeadingSlash;
var PathUtils_5 = PathUtils.parsePath;
var PathUtils_6 = PathUtils.createPath;

var LocationUtils = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;
  exports.locationsAreEqual = exports.createLocation = undefined;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _resolvePathname2 = _interopRequireDefault(index$3);

  var _valueEqual2 = _interopRequireDefault(index$5);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var createLocation = exports.createLocation = function createLocation(path, state, key, currentLocation) {
    var location = void 0;
    if (typeof path === 'string') {
      // Two-arg form: push(path, state)
      location = (0, PathUtils.parsePath)(path);
      location.state = state;
    } else {
      // One-arg form: push(location)
      location = _extends({}, path);

      if (location.pathname === undefined) location.pathname = '';

      if (location.search) {
        if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
      } else {
        location.search = '';
      }

      if (location.hash) {
        if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
      } else {
        location.hash = '';
      }

      if (state !== undefined && location.state === undefined) location.state = state;
    }

    location.key = key;

    if (currentLocation) {
      // Resolve incomplete/relative pathname relative to current location.
      if (!location.pathname) {
        location.pathname = currentLocation.pathname;
      } else if (location.pathname.charAt(0) !== '/') {
        location.pathname = (0, _resolvePathname2.default)(location.pathname, currentLocation.pathname);
      }
    }

    return location;
  };

  var locationsAreEqual = exports.locationsAreEqual = function locationsAreEqual(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && (0, _valueEqual2.default)(a.state, b.state);
  };
});

var createTransitionManager_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;

  var _warning2 = _interopRequireDefault(warning_1$2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var createTransitionManager = function createTransitionManager() {
    var prompt = null;

    var setPrompt = function setPrompt(nextPrompt) {
      (0, _warning2.default)(prompt == null, 'A history supports only one prompt at a time');

      prompt = nextPrompt;

      return function () {
        if (prompt === nextPrompt) prompt = null;
      };
    };

    var confirmTransitionTo = function confirmTransitionTo(location, action, getUserConfirmation, callback) {
      // TODO: If another transition starts while we're still confirming
      // the previous one, we may end up in a weird state. Figure out the
      // best way to handle this.
      if (prompt != null) {
        var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

        if (typeof result === 'string') {
          if (typeof getUserConfirmation === 'function') {
            getUserConfirmation(result, callback);
          } else {
            (0, _warning2.default)(false, 'A history needs a getUserConfirmation function in order to use a prompt message');

            callback(true);
          }
        } else {
          // Return false from a transition hook to cancel the transition.
          callback(result !== false);
        }
      } else {
        callback(true);
      }
    };

    var listeners = [];

    var appendListener = function appendListener(fn) {
      var isActive = true;

      var listener = function listener() {
        if (isActive) fn.apply(undefined, arguments);
      };

      listeners.push(listener);

      return function () {
        isActive = false;
        listeners = listeners.filter(function (item) {
          return item !== listener;
        });
      };
    };

    var notifyListeners = function notifyListeners() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      listeners.forEach(function (listener) {
        return listener.apply(undefined, args);
      });
    };

    return {
      setPrompt: setPrompt,
      confirmTransitionTo: confirmTransitionTo,
      appendListener: appendListener,
      notifyListeners: notifyListeners
    };
  };

  exports.default = createTransitionManager;
});

var DOMUtils = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;
  var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  var addEventListener = exports.addEventListener = function addEventListener(node, event, listener) {
    return node.addEventListener ? node.addEventListener(event, listener, false) : node.attachEvent('on' + event, listener);
  };

  var removeEventListener = exports.removeEventListener = function removeEventListener(node, event, listener) {
    return node.removeEventListener ? node.removeEventListener(event, listener, false) : node.detachEvent('on' + event, listener);
  };

  var getConfirmation = exports.getConfirmation = function getConfirmation(message, callback) {
    return callback(window.confirm(message));
  }; // eslint-disable-line no-alert

  /**
   * Returns true if the HTML5 history API is supported. Taken from Modernizr.
   *
   * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
   * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
   * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
   */
  var supportsHistory = exports.supportsHistory = function supportsHistory() {
    var ua = window.navigator.userAgent;

    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;

    return window.history && 'pushState' in window.history;
  };

  /**
   * Returns true if browser fires popstate on hash change.
   * IE10 and IE11 do not.
   */
  var supportsPopStateOnHashChange = exports.supportsPopStateOnHashChange = function supportsPopStateOnHashChange() {
    return window.navigator.userAgent.indexOf('Trident') === -1;
  };

  /**
   * Returns false if using go(n) with hash history causes a full page reload.
   */
  var supportsGoWithoutReloadUsingHash = exports.supportsGoWithoutReloadUsingHash = function supportsGoWithoutReloadUsingHash() {
    return window.navigator.userAgent.indexOf('Firefox') === -1;
  };

  /**
   * Returns true if a given popstate event is an extraneous WebKit event.
   * Accounts for the fact that Chrome on iOS fires real popstate events
   * containing undefined state when pressing the back button.
   */
  var isExtraneousPopstateEvent = exports.isExtraneousPopstateEvent = function isExtraneousPopstateEvent(event) {
    return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
  };
});

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var createBrowserHistory_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;

  var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _warning2 = _interopRequireDefault(warning_1$2);

  var _invariant2 = _interopRequireDefault(invariant_1$2);

  var _createTransitionManager2 = _interopRequireDefault(createTransitionManager_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var PopStateEvent = 'popstate';
  var HashChangeEvent = 'hashchange';

  var getHistoryState = function getHistoryState() {
    try {
      return window.history.state || {};
    } catch (e) {
      // IE 11 sometimes throws when accessing window.history.state
      // See https://github.com/ReactTraining/history/pull/289
      return {};
    }
  };

  /**
   * Creates a history object that uses the HTML5 history API including
   * pushState, replaceState, and the popstate event.
   */
  var createBrowserHistory = function createBrowserHistory() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0, _invariant2.default)(DOMUtils.canUseDOM, 'Browser history needs a DOM');

    var globalHistory = window.history;
    var canUseHistory = (0, DOMUtils.supportsHistory)();
    var needsHashChangeListener = !(0, DOMUtils.supportsPopStateOnHashChange)();

    var _props$forceRefresh = props.forceRefresh,
        forceRefresh = _props$forceRefresh === undefined ? false : _props$forceRefresh,
        _props$getUserConfirm = props.getUserConfirmation,
        getUserConfirmation = _props$getUserConfirm === undefined ? DOMUtils.getConfirmation : _props$getUserConfirm,
        _props$keyLength = props.keyLength,
        keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

    var basename = props.basename ? (0, PathUtils.stripTrailingSlash)((0, PathUtils.addLeadingSlash)(props.basename)) : '';

    var getDOMLocation = function getDOMLocation(historyState) {
      var _ref = historyState || {},
          key = _ref.key,
          state = _ref.state;

      var _window$location = window.location,
          pathname = _window$location.pathname,
          search = _window$location.search,
          hash = _window$location.hash;

      var path = pathname + search + hash;

      if (basename) path = (0, PathUtils.stripPrefix)(path, basename);

      return _extends({}, (0, PathUtils.parsePath)(path), {
        state: state,
        key: key
      });
    };

    var createKey = function createKey() {
      return Math.random().toString(36).substr(2, keyLength);
    };

    var transitionManager = (0, _createTransitionManager2.default)();

    var setState = function setState(nextState) {
      _extends(history, nextState);

      history.length = globalHistory.length;

      transitionManager.notifyListeners(history.location, history.action);
    };

    var handlePopState = function handlePopState(event) {
      // Ignore extraneous popstate events in WebKit.
      if ((0, DOMUtils.isExtraneousPopstateEvent)(event)) return;

      handlePop(getDOMLocation(event.state));
    };

    var handleHashChange = function handleHashChange() {
      handlePop(getDOMLocation(getHistoryState()));
    };

    var forceNextPop = false;

    var handlePop = function handlePop(location) {
      if (forceNextPop) {
        forceNextPop = false;
        setState();
      } else {
        var action = 'POP';

        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({ action: action, location: location });
          } else {
            revertPop(location);
          }
        });
      }
    };

    var revertPop = function revertPop(fromLocation) {
      var toLocation = history.location;

      // TODO: We could probably make this more reliable by
      // keeping a list of keys we've seen in sessionStorage.
      // Instead, we just default to 0 for keys we don't know.

      var toIndex = allKeys.indexOf(toLocation.key);

      if (toIndex === -1) toIndex = 0;

      var fromIndex = allKeys.indexOf(fromLocation.key);

      if (fromIndex === -1) fromIndex = 0;

      var delta = toIndex - fromIndex;

      if (delta) {
        forceNextPop = true;
        go(delta);
      }
    };

    var initialLocation = getDOMLocation(getHistoryState());
    var allKeys = [initialLocation.key];

    // Public interface

    var createHref = function createHref(location) {
      return basename + (0, PathUtils.createPath)(location);
    };

    var push = function push(path, state) {
      (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

      var action = 'PUSH';
      var location = (0, LocationUtils.createLocation)(path, state, createKey(), history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        var href = createHref(location);
        var key = location.key,
            state = location.state;

        if (canUseHistory) {
          globalHistory.pushState({ key: key, state: state }, null, href);

          if (forceRefresh) {
            window.location.href = href;
          } else {
            var prevIndex = allKeys.indexOf(history.location.key);
            var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

            nextKeys.push(location.key);
            allKeys = nextKeys;

            setState({ action: action, location: location });
          }
        } else {
          (0, _warning2.default)(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');

          window.location.href = href;
        }
      });
    };

    var replace = function replace(path, state) {
      (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

      var action = 'REPLACE';
      var location = (0, LocationUtils.createLocation)(path, state, createKey(), history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        var href = createHref(location);
        var key = location.key,
            state = location.state;

        if (canUseHistory) {
          globalHistory.replaceState({ key: key, state: state }, null, href);

          if (forceRefresh) {
            window.location.replace(href);
          } else {
            var prevIndex = allKeys.indexOf(history.location.key);

            if (prevIndex !== -1) allKeys[prevIndex] = location.key;

            setState({ action: action, location: location });
          }
        } else {
          (0, _warning2.default)(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');

          window.location.replace(href);
        }
      });
    };

    var go = function go(n) {
      globalHistory.go(n);
    };

    var goBack = function goBack() {
      return go(-1);
    };

    var goForward = function goForward() {
      return go(1);
    };

    var listenerCount = 0;

    var checkDOMListeners = function checkDOMListeners(delta) {
      listenerCount += delta;

      if (listenerCount === 1) {
        (0, DOMUtils.addEventListener)(window, PopStateEvent, handlePopState);

        if (needsHashChangeListener) (0, DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
      } else if (listenerCount === 0) {
        (0, DOMUtils.removeEventListener)(window, PopStateEvent, handlePopState);

        if (needsHashChangeListener) (0, DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
      }
    };

    var isBlocked = false;

    var block = function block() {
      var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var unblock = transitionManager.setPrompt(prompt);

      if (!isBlocked) {
        checkDOMListeners(1);
        isBlocked = true;
      }

      return function () {
        if (isBlocked) {
          isBlocked = false;
          checkDOMListeners(-1);
        }

        return unblock();
      };
    };

    var listen = function listen(listener) {
      var unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);

      return function () {
        checkDOMListeners(-1);
        unlisten();
      };
    };

    var history = {
      length: globalHistory.length,
      action: 'POP',
      location: initialLocation,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      block: block,
      listen: listen
    };

    return history;
  };

  exports.default = createBrowserHistory;
});

var createHistory = unwrapExports(createBrowserHistory_1);

var _typeof2$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var createMemoryHistory_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;

  var _typeof = typeof Symbol === "function" && _typeof2$2(Symbol.iterator) === "symbol" ? function (obj) {
    return typeof obj === 'undefined' ? 'undefined' : _typeof2$2(obj);
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2$2(obj);
  };

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _warning2 = _interopRequireDefault(warning_1$2);

  var _createTransitionManager2 = _interopRequireDefault(createTransitionManager_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var clamp = function clamp(n, lowerBound, upperBound) {
    return Math.min(Math.max(n, lowerBound), upperBound);
  };

  /**
   * Creates a history object that stores locations in memory.
   */
  var createMemoryHistory = function createMemoryHistory() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var getUserConfirmation = props.getUserConfirmation,
        _props$initialEntries = props.initialEntries,
        initialEntries = _props$initialEntries === undefined ? ['/'] : _props$initialEntries,
        _props$initialIndex = props.initialIndex,
        initialIndex = _props$initialIndex === undefined ? 0 : _props$initialIndex,
        _props$keyLength = props.keyLength,
        keyLength = _props$keyLength === undefined ? 6 : _props$keyLength;

    var transitionManager = (0, _createTransitionManager2.default)();

    var setState = function setState(nextState) {
      _extends(history, nextState);

      history.length = history.entries.length;

      transitionManager.notifyListeners(history.location, history.action);
    };

    var createKey = function createKey() {
      return Math.random().toString(36).substr(2, keyLength);
    };

    var index = clamp(initialIndex, 0, initialEntries.length - 1);
    var entries = initialEntries.map(function (entry) {
      return typeof entry === 'string' ? (0, LocationUtils.createLocation)(entry, undefined, createKey()) : (0, LocationUtils.createLocation)(entry, undefined, entry.key || createKey());
    });

    // Public interface

    var createHref = PathUtils.createPath;

    var push = function push(path, state) {
      (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

      var action = 'PUSH';
      var location = (0, LocationUtils.createLocation)(path, state, createKey(), history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        var prevIndex = history.index;
        var nextIndex = prevIndex + 1;

        var nextEntries = history.entries.slice(0);
        if (nextEntries.length > nextIndex) {
          nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
        } else {
          nextEntries.push(location);
        }

        setState({
          action: action,
          location: location,
          index: nextIndex,
          entries: nextEntries
        });
      });
    };

    var replace = function replace(path, state) {
      (0, _warning2.default)(!((typeof path === 'undefined' ? 'undefined' : _typeof(path)) === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' + 'argument is a location-like object that already has state; it is ignored');

      var action = 'REPLACE';
      var location = (0, LocationUtils.createLocation)(path, state, createKey(), history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        history.entries[history.index] = location;

        setState({ action: action, location: location });
      });
    };

    var go = function go(n) {
      var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);

      var action = 'POP';
      var location = history.entries[nextIndex];

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location,
            index: nextIndex
          });
        } else {
          // Mimic the behavior of DOM histories by
          // causing a render after a cancelled POP.
          setState();
        }
      });
    };

    var goBack = function goBack() {
      return go(-1);
    };

    var goForward = function goForward() {
      return go(1);
    };

    var canGo = function canGo(n) {
      var nextIndex = history.index + n;
      return nextIndex >= 0 && nextIndex < history.entries.length;
    };

    var block = function block() {
      var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return transitionManager.setPrompt(prompt);
    };

    var listen = function listen(listener) {
      return transitionManager.appendListener(listener);
    };

    var history = {
      length: entries.length,
      action: 'POP',
      location: entries[index],
      index: index,
      entries: entries,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      canGo: canGo,
      block: block,
      listen: listen
    };

    return history;
  };

  exports.default = createMemoryHistory;
});

var createHistory$1 = unwrapExports(createMemoryHistory_1);

var _typeof$12 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends$2 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$2(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof$12(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof$12(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for putting history on context.
 */

var Router = function (_React$Component) {
  _inherits$2(Router, _React$Component);

  function Router() {
    var _temp, _this, _ret;

    _classCallCheck$2(this, Router);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$2(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props.history.location.pathname)
    }, _temp), _possibleConstructorReturn$2(_this, _ret);
  }

  Router.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends$2({}, this.context.router, {
        history: this.props.history,
        route: {
          location: this.props.history.location,
          match: this.state.match
        }
      })
    };
  };

  Router.prototype.computeMatch = function computeMatch(pathname) {
    return {
      path: '/',
      url: '/',
      params: {},
      isExact: pathname === '/'
    };
  };

  Router.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        history = _props.history;

    invariant_1$2(children == null || react.Children.count(children) === 1, 'A <Router> may have only one child element');

    // Do this here so we can setState when a <Redirect> changes the
    // location in componentWillMount. This happens e.g. when doing
    // server rendering using a <StaticRouter>.
    this.unlisten = history.listen(function () {
      _this2.setState({
        match: _this2.computeMatch(history.location.pathname)
      });
    });
  };

  Router.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning_1$2(this.props.history === nextProps.history, 'You cannot change <Router history>');
  };

  Router.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unlisten();
  };

  Router.prototype.render = function render() {
    var children = this.props.children;

    return children ? react.Children.only(children) : null;
  };

  return Router;
}(react.Component);

Router.propTypes = {
  history: index$2.object.isRequired,
  children: index$2.node
};
Router.contextTypes = {
  router: index$2.object
};
Router.childContextTypes = {
  router: index$2.object.isRequired
};

var _typeof$11 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof$11(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof$11(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter = function (_React$Component) {
  _inherits$1(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _temp, _this, _ret;

    _classCallCheck$1(this, MemoryRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$1(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = createHistory$1(_this.props), _temp), _possibleConstructorReturn$1(_this, _ret);
  }

  MemoryRouter.prototype.render = function render() {
    return react.createElement(Router, { history: this.history, children: this.props.children });
  };

  return MemoryRouter;
}(react.Component);

MemoryRouter.propTypes = {
  initialEntries: index$2.array,
  initialIndex: index$2.number,
  getUserConfirmation: index$2.func,
  keyLength: index$2.number,
  children: index$2.node
};

var _typeof$13 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$3(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof$13(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof$13(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for prompting the user before navigating away
 * from a screen with a component.
 */

var Prompt = function (_React$Component) {
  _inherits$3(Prompt, _React$Component);

  function Prompt() {
    _classCallCheck$3(this, Prompt);

    return _possibleConstructorReturn$3(this, _React$Component.apply(this, arguments));
  }

  Prompt.prototype.enable = function enable(message) {
    if (this.unblock) this.unblock();

    this.unblock = this.context.router.history.block(message);
  };

  Prompt.prototype.disable = function disable() {
    if (this.unblock) {
      this.unblock();
      this.unblock = null;
    }
  };

  Prompt.prototype.componentWillMount = function componentWillMount() {
    if (this.props.when) this.enable(this.props.message);
  };

  Prompt.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.when) {
      if (!this.props.when || this.props.message !== nextProps.message) this.enable(nextProps.message);
    } else {
      this.disable();
    }
  };

  Prompt.prototype.componentWillUnmount = function componentWillUnmount() {
    this.disable();
  };

  Prompt.prototype.render = function render() {
    return null;
  };

  return Prompt;
}(react.Component);

Prompt.propTypes = {
  when: index$2.bool,
  message: index$2.oneOfType([index$2.func, index$2.string]).isRequired
};
Prompt.defaultProps = {
  when: true
};
Prompt.contextTypes = {
  router: index$2.shape({
    history: index$2.shape({
      block: index$2.func.isRequired
    }).isRequired
  }).isRequired
};

var _typeof$14 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck$4(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$4(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof$14(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$4(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof$14(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for updating the location programatically
 * with a component.
 */

var Redirect = function (_React$Component) {
  _inherits$4(Redirect, _React$Component);

  function Redirect() {
    _classCallCheck$4(this, Redirect);

    return _possibleConstructorReturn$4(this, _React$Component.apply(this, arguments));
  }

  Redirect.prototype.isStatic = function isStatic() {
    return this.context.router && this.context.router.staticContext;
  };

  Redirect.prototype.componentWillMount = function componentWillMount() {
    if (this.isStatic()) this.perform();
  };

  Redirect.prototype.componentDidMount = function componentDidMount() {
    if (!this.isStatic()) this.perform();
  };

  Redirect.prototype.perform = function perform() {
    var history = this.context.router.history;
    var _props = this.props,
        push = _props.push,
        to = _props.to;

    if (push) {
      history.push(to);
    } else {
      history.replace(to);
    }
  };

  Redirect.prototype.render = function render() {
    return null;
  };

  return Redirect;
}(react.Component);

Redirect.propTypes = {
  push: index$2.bool,
  from: index$2.string,
  to: index$2.oneOfType([index$2.string, index$2.object])
};
Redirect.defaultProps = {
  push: false
};
Redirect.contextTypes = {
  router: index$2.shape({
    history: index$2.shape({
      push: index$2.func.isRequired,
      replace: index$2.func.isRequired
    }).isRequired,
    staticContext: index$2.object
  }).isRequired
};

var index$8 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

var _typeof$16 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Expose `pathToRegexp`.
 */
var index$7 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)',
// Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens;
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile(str, options) {
  return tokensToFunction(parse(str, options));
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (_typeof$16(tokens[i]) === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (index$8(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys(re, keys$$1) {
  re.keys = keys$$1;
  return re;
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags(options) {
  return options.sensitive ? '' : 'i';
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp(path, keys$$1) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys$$1.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys$$1);
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp(path, keys$$1, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys$$1, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys$$1);
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp(path, keys$$1, options) {
  return tokensToRegExp(parse(path, options), keys$$1, options);
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp(tokens, keys$$1, options) {
  if (!index$8(keys$$1)) {
    options = /** @type {!Object} */keys$$1 || options;
    keys$$1 = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys$$1.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys$$1);
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp(path, keys$$1, options) {
  if (!index$8(keys$$1)) {
    options = /** @type {!Object} */keys$$1 || options;
    keys$$1 = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */keys$$1);
  }

  if (index$8(path)) {
    return arrayToRegexp( /** @type {!Array} */path, /** @type {!Array} */keys$$1, options);
  }

  return stringToRegexp( /** @type {string} */path, /** @type {!Array} */keys$$1, options);
}

index$7.parse = parse_1;
index$7.compile = compile_1;
index$7.tokensToFunction = tokensToFunction_1;
index$7.tokensToRegExp = tokensToRegExp_1;

var patternCache = {};
var cacheLimit = 10000;
var cacheCount = 0;

var compilePath = function compilePath(pattern, options) {
  var cacheKey = '' + options.end + options.strict;
  var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});

  if (cache[pattern]) return cache[pattern];

  var keys$$1 = [];
  var re = index$7(pattern, keys$$1, options);
  var compiledPattern = { re: re, keys: keys$$1 };

  if (cacheCount < cacheLimit) {
    cache[pattern] = compiledPattern;
    cacheCount++;
  }

  return compiledPattern;
};

/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function matchPath(pathname) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (typeof options === 'string') options = { path: options };

  var _options = options,
      _options$path = _options.path,
      path = _options$path === undefined ? '/' : _options$path,
      _options$exact = _options.exact,
      exact = _options$exact === undefined ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === undefined ? false : _options$strict;

  var _compilePath = compilePath(path, { end: exact, strict: strict }),
      re = _compilePath.re,
      keys$$1 = _compilePath.keys;

  var match = re.exec(pathname);

  if (!match) return null;

  var url = match[0],
      values = match.slice(1);

  var isExact = pathname === url;

  if (exact && !isExact) return null;

  return {
    path: path, // the path pattern used to match
    url: path === '/' && url === '' ? '/' : url, // the matched portion of the URL
    isExact: isExact, // whether or not we matched exactly
    params: keys$$1.reduce(function (memo, key, index) {
      memo[key.name] = values[index];
      return memo;
    }, {})
  };
};

var _typeof$15 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends$3 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _classCallCheck$5(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$5(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof$15(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$5(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof$15(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for matching a single path and rendering.
 */

var Route = function (_React$Component) {
  _inherits$5(Route, _React$Component);

  function Route() {
    var _temp, _this, _ret;

    _classCallCheck$5(this, Route);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$5(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      match: _this.computeMatch(_this.props, _this.context.router)
    }, _temp), _possibleConstructorReturn$5(_this, _ret);
  }

  Route.prototype.getChildContext = function getChildContext() {
    return {
      router: _extends$3({}, this.context.router, {
        route: {
          location: this.props.location || this.context.router.route.location,
          match: this.state.match
        }
      })
    };
  };

  Route.prototype.computeMatch = function computeMatch(_ref, _ref2) {
    var computedMatch = _ref.computedMatch,
        location = _ref.location,
        path = _ref.path,
        strict = _ref.strict,
        exact = _ref.exact;
    var route = _ref2.route;

    if (computedMatch) return computedMatch; // <Switch> already computed the match for us

    var pathname = (location || route.location).pathname;

    return path ? matchPath(pathname, { path: path, strict: strict, exact: exact }) : route.match;
  };

  Route.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        component = _props.component,
        render = _props.render,
        children = _props.children;

    warning_1$2(!(component && render), 'You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored');

    warning_1$2(!(component && children), 'You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored');

    warning_1$2(!(render && children), 'You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored');
  };

  Route.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
    warning_1$2(!(nextProps.location && !this.props.location), '<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning_1$2(!(!nextProps.location && this.props.location), '<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');

    this.setState({
      match: this.computeMatch(nextProps, nextContext.router)
    });
  };

  Route.prototype.render = function render() {
    var match = this.state.match;
    var _props2 = this.props,
        children = _props2.children,
        component = _props2.component,
        render = _props2.render;
    var _context$router = this.context.router,
        history = _context$router.history,
        route = _context$router.route,
        staticContext = _context$router.staticContext;

    var location = this.props.location || route.location;
    var props = { match: match, location: location, history: history, staticContext: staticContext };

    return component ? // component prop gets first priority, only called if there's a match
    match ? react.createElement(component, props) : null : render ? // render prop is next, only called if there's a match
    match ? render(props) : null : children ? // children come last, always called
    typeof children === 'function' ? children(props) : !Array.isArray(children) || children.length ? // Preact defaults to empty children array
    react.Children.only(children) : null : null;
  };

  return Route;
}(react.Component);

Route.propTypes = {
  computedMatch: index$2.object, // private, from <Switch>
  path: index$2.string,
  exact: index$2.bool,
  strict: index$2.bool,
  component: index$2.func,
  render: index$2.func,
  children: index$2.oneOfType([index$2.func, index$2.node]),
  location: index$2.object
};
Route.contextTypes = {
  router: index$2.shape({
    history: index$2.object.isRequired,
    route: index$2.object.isRequired,
    staticContext: index$2.object
  })
};
Route.childContextTypes = {
  router: index$2.object.isRequired
};

var _typeof$17 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends$4 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys$$1) {
  var target = {};for (var i in obj) {
    if (keys$$1.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck$6(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$6(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof$17(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$6(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof$17(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var normalizeLocation = function normalizeLocation(object) {
  var _object$pathname = object.pathname,
      pathname = _object$pathname === undefined ? '/' : _object$pathname,
      _object$search = object.search,
      search = _object$search === undefined ? '' : _object$search,
      _object$hash = object.hash,
      hash = _object$hash === undefined ? '' : _object$hash;

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
};

var addBasename = function addBasename(basename, location) {
  if (!basename) return location;

  return _extends$4({}, location, {
    pathname: PathUtils_1(basename) + location.pathname
  });
};

var stripBasename = function stripBasename(basename, location) {
  if (!basename) return location;

  var base = PathUtils_1(basename);

  if (location.pathname.indexOf(base) !== 0) return location;

  return _extends$4({}, location, {
    pathname: location.pathname.substr(base.length)
  });
};

var createLocation = function createLocation(location) {
  return typeof location === 'string' ? PathUtils_5(location) : normalizeLocation(location);
};

var createURL = function createURL(location) {
  return typeof location === 'string' ? location : PathUtils_6(location);
};

var staticHandler = function staticHandler(methodName) {
  return function () {
    invariant_1$2(false, 'You cannot %s with <StaticRouter>', methodName);
  };
};

var noop = function noop() {};

/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */

var StaticRouter = function (_React$Component) {
  _inherits$6(StaticRouter, _React$Component);

  function StaticRouter() {
    var _temp, _this, _ret;

    _classCallCheck$6(this, StaticRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$6(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createHref = function (path) {
      return PathUtils_1(_this.props.basename + createURL(path));
    }, _this.handlePush = function (location) {
      var _this$props = _this.props,
          basename = _this$props.basename,
          context = _this$props.context;

      context.action = 'PUSH';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleReplace = function (location) {
      var _this$props2 = _this.props,
          basename = _this$props2.basename,
          context = _this$props2.context;

      context.action = 'REPLACE';
      context.location = addBasename(basename, createLocation(location));
      context.url = createURL(context.location);
    }, _this.handleListen = function () {
      return noop;
    }, _this.handleBlock = function () {
      return noop;
    }, _temp), _possibleConstructorReturn$6(_this, _ret);
  }

  StaticRouter.prototype.getChildContext = function getChildContext() {
    return {
      router: {
        staticContext: this.props.context
      }
    };
  };

  StaticRouter.prototype.render = function render() {
    var _props = this.props,
        basename = _props.basename,
        context = _props.context,
        location = _props.location,
        props = _objectWithoutProperties(_props, ['basename', 'context', 'location']);

    var history = {
      createHref: this.createHref,
      action: 'POP',
      location: stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler('go'),
      goBack: staticHandler('goBack'),
      goForward: staticHandler('goForward'),
      listen: this.handleListen,
      block: this.handleBlock
    };

    return react.createElement(Router, _extends$4({}, props, { history: history }));
  };

  return StaticRouter;
}(react.Component);

StaticRouter.propTypes = {
  basename: index$2.string,
  context: index$2.object.isRequired,
  location: index$2.oneOfType([index$2.string, index$2.object])
};
StaticRouter.defaultProps = {
  basename: '',
  location: '/'
};
StaticRouter.childContextTypes = {
  router: index$2.object.isRequired
};

var _typeof$18 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck$7(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$7(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof$18(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$7(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof$18(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch = function (_React$Component) {
  _inherits$7(Switch, _React$Component);

  function Switch() {
    _classCallCheck$7(this, Switch);

    return _possibleConstructorReturn$7(this, _React$Component.apply(this, arguments));
  }

  Switch.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    warning_1$2(!(nextProps.location && !this.props.location), '<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.');

    warning_1$2(!(!nextProps.location && this.props.location), '<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.');
  };

  Switch.prototype.render = function render() {
    var route = this.context.router.route;
    var children = this.props.children;

    var location = this.props.location || route.location;

    var match = void 0,
        child = void 0;
    react.Children.forEach(children, function (element) {
      if (!react.isValidElement(element)) return;

      var _element$props = element.props,
          pathProp = _element$props.path,
          exact = _element$props.exact,
          strict = _element$props.strict,
          from = _element$props.from;

      var path = pathProp || from;

      if (match == null) {
        child = element;
        match = path ? matchPath(location.pathname, { path: path, exact: exact, strict: strict }) : route.match;
      }
    });

    return match ? react.cloneElement(child, { location: location, computedMatch: match }) : null;
  };

  return Switch;
}(react.Component);

Switch.contextTypes = {
  router: index$2.shape({
    route: index$2.object.isRequired
  }).isRequired
};
Switch.propTypes = {
  children: index$2.node,
  location: index$2.object
};

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

var index$10 = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        var keys$$1 = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys$$1 = keys$$1.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys$$1.length; ++i) {
            if (!REACT_STATICS[keys$$1[i]] && !KNOWN_STATICS[keys$$1[i]] && (!customStatics || !customStatics[keys$$1[i]])) {
                try {
                    targetComponent[keys$$1[i]] = sourceComponent[keys$$1[i]];
                } catch (error) {}
            }
        }
    }

    return targetComponent;
};

var _extends$5 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties$1(obj, keys$$1) {
  var target = {};for (var i in obj) {
    if (keys$$1.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

/**
 * A public higher-order component to access the imperative API
 */
var withRouter = function withRouter(Component$$1) {
  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutProperties$1(props, ['wrappedComponentRef']);

    return react.createElement(Route, { render: function render(routeComponentProps) {
        return react.createElement(Component$$1, _extends$5({}, remainingProps, routeComponentProps, { ref: wrappedComponentRef }));
      } });
  };

  C.displayName = 'withRouter(' + (Component$$1.displayName || Component$$1.name) + ')';
  C.WrappedComponent = Component$$1;
  C.propTypes = {
    wrappedComponentRef: index$2.func
  };

  return index$10(C, Component$$1);
};

var _typeof$9 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof$9(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof$9(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter = function (_React$Component) {
  _inherits(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, BrowserRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = createHistory(_this.props), _temp), _possibleConstructorReturn(_this, _ret);
  }

  BrowserRouter.prototype.render = function render() {
    return react.createElement(Router, { history: this.history, children: this.props.children });
  };

  return BrowserRouter;
}(react.Component);

BrowserRouter.propTypes = {
  basename: index$2.string,
  forceRefresh: index$2.bool,
  getUserConfirmation: index$2.func,
  keyLength: index$2.number,
  children: index$2.node
};

var createHashHistory_1 = createCommonjsModule(function (module, exports) {
  'use strict';

  exports.__esModule = true;

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  var _warning2 = _interopRequireDefault(warning_1$2);

  var _invariant2 = _interopRequireDefault(invariant_1$2);

  var _createTransitionManager2 = _interopRequireDefault(createTransitionManager_1);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  var HashChangeEvent = 'hashchange';

  var HashPathCoders = {
    hashbang: {
      encodePath: function encodePath(path) {
        return path.charAt(0) === '!' ? path : '!/' + (0, PathUtils.stripLeadingSlash)(path);
      },
      decodePath: function decodePath(path) {
        return path.charAt(0) === '!' ? path.substr(1) : path;
      }
    },
    noslash: {
      encodePath: PathUtils.stripLeadingSlash,
      decodePath: PathUtils.addLeadingSlash
    },
    slash: {
      encodePath: PathUtils.addLeadingSlash,
      decodePath: PathUtils.addLeadingSlash
    }
  };

  var getHashPath = function getHashPath() {
    // We can't use window.location.hash here because it's not
    // consistent across browsers - Firefox will pre-decode it!
    var href = window.location.href;
    var hashIndex = href.indexOf('#');
    return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
  };

  var pushHashPath = function pushHashPath(path) {
    return window.location.hash = path;
  };

  var replaceHashPath = function replaceHashPath(path) {
    var hashIndex = window.location.href.indexOf('#');

    window.location.replace(window.location.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
  };

  var createHashHistory = function createHashHistory() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    (0, _invariant2.default)(DOMUtils.canUseDOM, 'Hash history needs a DOM');

    var globalHistory = window.history;
    var canGoWithoutReload = (0, DOMUtils.supportsGoWithoutReloadUsingHash)();

    var _props$getUserConfirm = props.getUserConfirmation,
        getUserConfirmation = _props$getUserConfirm === undefined ? DOMUtils.getConfirmation : _props$getUserConfirm,
        _props$hashType = props.hashType,
        hashType = _props$hashType === undefined ? 'slash' : _props$hashType;

    var basename = props.basename ? (0, PathUtils.stripTrailingSlash)((0, PathUtils.addLeadingSlash)(props.basename)) : '';

    var _HashPathCoders$hashT = HashPathCoders[hashType],
        encodePath = _HashPathCoders$hashT.encodePath,
        decodePath = _HashPathCoders$hashT.decodePath;

    var getDOMLocation = function getDOMLocation() {
      var path = decodePath(getHashPath());

      if (basename) path = (0, PathUtils.stripPrefix)(path, basename);

      return (0, PathUtils.parsePath)(path);
    };

    var transitionManager = (0, _createTransitionManager2.default)();

    var setState = function setState(nextState) {
      _extends(history, nextState);

      history.length = globalHistory.length;

      transitionManager.notifyListeners(history.location, history.action);
    };

    var forceNextPop = false;
    var ignorePath = null;

    var handleHashChange = function handleHashChange() {
      var path = getHashPath();
      var encodedPath = encodePath(path);

      if (path !== encodedPath) {
        // Ensure we always have a properly-encoded hash.
        replaceHashPath(encodedPath);
      } else {
        var location = getDOMLocation();
        var prevLocation = history.location;

        if (!forceNextPop && (0, LocationUtils.locationsAreEqual)(prevLocation, location)) return; // A hashchange doesn't always == location change.

        if (ignorePath === (0, PathUtils.createPath)(location)) return; // Ignore this change; we already setState in push/replace.

        ignorePath = null;

        handlePop(location);
      }
    };

    var handlePop = function handlePop(location) {
      if (forceNextPop) {
        forceNextPop = false;
        setState();
      } else {
        var action = 'POP';

        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
          if (ok) {
            setState({ action: action, location: location });
          } else {
            revertPop(location);
          }
        });
      }
    };

    var revertPop = function revertPop(fromLocation) {
      var toLocation = history.location;

      // TODO: We could probably make this more reliable by
      // keeping a list of paths we've seen in sessionStorage.
      // Instead, we just default to 0 for paths we don't know.

      var toIndex = allPaths.lastIndexOf((0, PathUtils.createPath)(toLocation));

      if (toIndex === -1) toIndex = 0;

      var fromIndex = allPaths.lastIndexOf((0, PathUtils.createPath)(fromLocation));

      if (fromIndex === -1) fromIndex = 0;

      var delta = toIndex - fromIndex;

      if (delta) {
        forceNextPop = true;
        go(delta);
      }
    };

    // Ensure the hash is encoded properly before doing anything else.
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) replaceHashPath(encodedPath);

    var initialLocation = getDOMLocation();
    var allPaths = [(0, PathUtils.createPath)(initialLocation)];

    // Public interface

    var createHref = function createHref(location) {
      return '#' + encodePath(basename + (0, PathUtils.createPath)(location));
    };

    var push = function push(path, state) {
      (0, _warning2.default)(state === undefined, 'Hash history cannot push state; it is ignored');

      var action = 'PUSH';
      var location = (0, LocationUtils.createLocation)(path, undefined, undefined, history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        var path = (0, PathUtils.createPath)(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;

        if (hashChanged) {
          // We cannot tell if a hashchange was caused by a PUSH, so we'd
          // rather setState here and ignore the hashchange. The caveat here
          // is that other hash histories in the page will consider it a POP.
          ignorePath = path;
          pushHashPath(encodedPath);

          var prevIndex = allPaths.lastIndexOf((0, PathUtils.createPath)(history.location));
          var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);

          nextPaths.push(path);
          allPaths = nextPaths;

          setState({ action: action, location: location });
        } else {
          (0, _warning2.default)(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');

          setState();
        }
      });
    };

    var replace = function replace(path, state) {
      (0, _warning2.default)(state === undefined, 'Hash history cannot replace state; it is ignored');

      var action = 'REPLACE';
      var location = (0, LocationUtils.createLocation)(path, undefined, undefined, history.location);

      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (!ok) return;

        var path = (0, PathUtils.createPath)(location);
        var encodedPath = encodePath(basename + path);
        var hashChanged = getHashPath() !== encodedPath;

        if (hashChanged) {
          // We cannot tell if a hashchange was caused by a REPLACE, so we'd
          // rather setState here and ignore the hashchange. The caveat here
          // is that other hash histories in the page will consider it a POP.
          ignorePath = path;
          replaceHashPath(encodedPath);
        }

        var prevIndex = allPaths.indexOf((0, PathUtils.createPath)(history.location));

        if (prevIndex !== -1) allPaths[prevIndex] = path;

        setState({ action: action, location: location });
      });
    };

    var go = function go(n) {
      (0, _warning2.default)(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');

      globalHistory.go(n);
    };

    var goBack = function goBack() {
      return go(-1);
    };

    var goForward = function goForward() {
      return go(1);
    };

    var listenerCount = 0;

    var checkDOMListeners = function checkDOMListeners(delta) {
      listenerCount += delta;

      if (listenerCount === 1) {
        (0, DOMUtils.addEventListener)(window, HashChangeEvent, handleHashChange);
      } else if (listenerCount === 0) {
        (0, DOMUtils.removeEventListener)(window, HashChangeEvent, handleHashChange);
      }
    };

    var isBlocked = false;

    var block = function block() {
      var prompt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var unblock = transitionManager.setPrompt(prompt);

      if (!isBlocked) {
        checkDOMListeners(1);
        isBlocked = true;
      }

      return function () {
        if (isBlocked) {
          isBlocked = false;
          checkDOMListeners(-1);
        }

        return unblock();
      };
    };

    var listen = function listen(listener) {
      var unlisten = transitionManager.appendListener(listener);
      checkDOMListeners(1);

      return function () {
        checkDOMListeners(-1);
        unlisten();
      };
    };

    var history = {
      length: globalHistory.length,
      action: 'POP',
      location: initialLocation,
      createHref: createHref,
      push: push,
      replace: replace,
      go: go,
      goBack: goBack,
      goForward: goForward,
      block: block,
      listen: listen
    };

    return history;
  };

  exports.default = createHashHistory;
});

var createHistory$2 = unwrapExports(createHashHistory_1);

var _typeof$19 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck$8(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$8(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof$19(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$8(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof$19(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter = function (_React$Component) {
  _inherits$8(HashRouter, _React$Component);

  function HashRouter() {
    var _temp, _this, _ret;

    _classCallCheck$8(this, HashRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$8(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.history = createHistory$2(_this.props), _temp), _possibleConstructorReturn$8(_this, _ret);
  }

  HashRouter.prototype.render = function render() {
    return react.createElement(Router, { history: this.history, children: this.props.children });
  };

  return HashRouter;
}(react.Component);

HashRouter.propTypes = {
  basename: index$2.string,
  getUserConfirmation: index$2.func,
  hashType: index$2.oneOf(['hashbang', 'noslash', 'slash']),
  children: index$2.node
};

var _typeof$20 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends$6 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties$2(obj, keys$$1) {
  var target = {};for (var i in obj) {
    if (keys$$1.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function _classCallCheck$9(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn$9(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof$20(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits$9(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof$20(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

/**
 * The public API for rendering a history-aware <a>.
 */

var Link = function (_React$Component) {
  _inherits$9(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck$9(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn$9(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && // ignore right clicks
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();

          var history = _this.context.router.history;
          var _this$props = _this.props,
              replace = _this$props.replace,
              to = _this$props.to;

          if (replace) {
            history.replace(to);
          } else {
            history.push(to);
          }
        }
    }, _temp), _possibleConstructorReturn$9(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _props = this.props,
        replace = _props.replace,
        to = _props.to,
        props = _objectWithoutProperties$2(_props, ['replace', 'to']); // eslint-disable-line no-unused-vars

    var href = this.context.router.history.createHref(typeof to === 'string' ? { pathname: to } : to);

    return react.createElement('a', _extends$6({}, props, { onClick: this.handleClick, href: href }));
  };

  return Link;
}(react.Component);

Link.propTypes = {
  onClick: index$2.func,
  target: index$2.string,
  replace: index$2.bool,
  to: index$2.oneOfType([index$2.string, index$2.object]).isRequired
};
Link.defaultProps = {
  replace: false
};
Link.contextTypes = {
  router: index$2.shape({
    history: index$2.shape({
      push: index$2.func.isRequired,
      replace: index$2.func.isRequired,
      createHref: index$2.func.isRequired
    }).isRequired
  }).isRequired
};

var _typeof2$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends$7 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _typeof$21 = typeof Symbol === "function" && _typeof2$3(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2$3(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2$3(obj);
};

function _objectWithoutProperties$3(obj, keys$$1) {
  var target = {};for (var i in obj) {
    if (keys$$1.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

/**
 * A <Link> wrapper that knows if it's "active" or not.
 */
var NavLink = function NavLink(_ref) {
  var to = _ref.to,
      exact = _ref.exact,
      strict = _ref.strict,
      location = _ref.location,
      activeClassName = _ref.activeClassName,
      className = _ref.className,
      activeStyle = _ref.activeStyle,
      style = _ref.style,
      getIsActive = _ref.isActive,
      rest = _objectWithoutProperties$3(_ref, ['to', 'exact', 'strict', 'location', 'activeClassName', 'className', 'activeStyle', 'style', 'isActive']);

  return react.createElement(Route, {
    path: (typeof to === 'undefined' ? 'undefined' : _typeof$21(to)) === 'object' ? to.pathname : to,
    exact: exact,
    strict: strict,
    location: location,
    children: function children(_ref2) {
      var location = _ref2.location,
          match = _ref2.match;

      var isActive = !!(getIsActive ? getIsActive(match, location) : match);

      return react.createElement(Link, _extends$7({
        to: to,
        className: isActive ? [activeClassName, className].filter(function (i) {
          return i;
        }).join(' ') : className,
        style: isActive ? _extends$7({}, style, activeStyle) : style
      }, rest));
    }
  });
};

NavLink.propTypes = {
  to: Link.propTypes.to,
  exact: index$2.bool,
  strict: index$2.bool,
  location: index$2.object,
  activeClassName: index$2.string,
  className: index$2.string,
  activeStyle: index$2.object,
  style: index$2.object,
  isActive: index$2.func
};

NavLink.defaultProps = {
  activeClassName: 'active'
};

var reactTests$1 = function reactTests(_ref) {
  var Button$$1 = _ref.Button,
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

  Button$$1.theme(".react-button-bordered-button", {
    color_light_text: "#673ab7",
    color_light_border: "#673ab7",
    color_dark_text: "yellow",
    color_dark_border: "yellow"
  });

  return [{
    section: "React specific tests"
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
      return react.createElement(Button$$1, { label: "Button", className: "react-button-bordered-button", borders: true });
    }
  }, {
    name: "Option: inactivate (2s) (JSX)",
    component: function component() {
      return react.createElement(Button$$1, { label: "Inactivated for 2s", inactivate: 2 });
    }
  }];
};

var testsReact = [].concat(genericTests({ Button: Button$1, renderer: renderer$1 })).concat(reactTests$1({ Button: Button$1, renderer: renderer$1 }));

var iconAlarm$2 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/></svg>";
var iconAlarmSVG = react.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
  react.createElement("path", { d: "M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" })
);

var reactTests$2 = function reactTests(_ref) {
  var FAB$$1 = _ref.FAB,
      Icon$$1 = _ref.Icon,
      SVG$$1 = _ref.SVG,
      h = _ref.renderer;
  // eslint-disable-line no-unused-vars
  var trustedIconAlarm = h.trust(iconAlarm$2);

  return [{
    section: "React specific tests"
  }, {
    name: "With router",
    interactive: true,
    component: withRouter(function (_ref2) {
      var history = _ref2.history;
      return h(FAB$$1, {
        icon: {
          svg: trustedIconAlarm
        },
        url: {
          href: "/shadow",
          onClick: function onClick(e) {
            return e.preventDefault(), history.push("/shadow");
          }
        }
      });
    })
  }, {
    name: "Dark tone class + light tone class",
    className: "pe-dark-tone",
    component: function component() {
      return h(".pe-light-tone", {
        style: { background: "#fff", padding: "10px" }
      }, [h(FAB$$1, {
        icon: {
          svg: trustedIconAlarm
        }
      }), h(FAB$$1, {
        icon: {
          svg: trustedIconAlarm
        },
        className: "tests-fab-themed-fab"
      })]);
    }
  }, {
    name: "Dark tone class + light tone",
    className: "test-dark-theme",
    component: function component() {
      return h("div", {
        style: { background: "#fff", padding: "10px" }
      }, [h(FAB$$1, {
        icon: {
          svg: trustedIconAlarm
        },
        tint: "light"
      }), h(FAB$$1, {
        icon: {
          svg: trustedIconAlarm
        },
        className: "tests-fab-themed-fab",
        tint: "light"
      })]);
    }
  }, {
    section: "React  JSX tests"
  }, {
    name: "Option: icon as attribute (JSX)",
    component: function component() {
      return react.createElement(FAB$$1, { icon: { svg: iconAlarmSVG }, mini: true });
    }
  }, {
    name: "Option: icon as component (JSX)",
    component: function component() {
      return react.createElement(
        FAB$$1,
        { mini: true },
        react.createElement(
          Icon$$1,
          null,
          react.createElement(
            SVG$$1,
            null,
            iconAlarmSVG
          )
        )
      );
    }
  }, {
    name: "Option: z (5) (JSX)",
    component: function component() {
      return react.createElement(FAB$$1, { mini: true, icon: { svg: iconAlarmSVG }, z: 5 });
    }
  }, {
    name: "Option: style (JSX)",
    component: function component() {
      return react.createElement(FAB$$1, { icon: { svg: iconAlarmSVG }, style: { color: "#ef6c00", backgroundColor: "#fff" } });
    }
  }, {
    name: "With router (JSX)",
    interactive: true,
    component: withRouter(function (_ref3) {
      var history = _ref3.history;
      return react.createElement(FAB$$1, {
        icon: { svg: iconAlarmSVG },
        url: {
          href: "/shadow",
          onClick: function onClick(e) {
            return e.preventDefault(), history.push("/shadow");
          }
        }
      });
    })
  }];
};

var testsReact$1 = [].concat(genericTests$1({ FAB: FAB$1, Icon: Icon$1, renderer: renderer$1 })).concat(reactTests$2({ FAB: FAB$1, Icon: Icon$1, SVG: SVG$1, renderer: renderer$1 }));

var iconStars$6 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var iconStarsSVG = react.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
  react.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" })
);

var reactTests$3 = function reactTests(_ref) {
  var Icon$$1 = _ref.Icon,
      SVG$$1 = _ref.SVG,
      h = _ref.renderer;
  // eslint-disable-line no-unused-vars
  return [{
    section: "React specific tests"
  }, {
    name: "Dark tone class + light tone class",
    className: "pe-dark-tone",
    component: function component() {
      return h(".pe-light-tone", {
        style: { background: "#fff" }
      }, [h(Icon$$1, {
        svg: h.trust(iconStars$6)
      }), h(Icon$$1, {
        svg: h.trust(iconStars$6),
        className: "tests-icon-themed-icon"
      })]);
    }
  }, {
    name: "Dark tone class + light tone",
    className: "pe-dark-tone",
    component: function component() {
      return h("div", {
        style: { background: "#fff" }
      }, [h(Icon$$1, {
        svg: h.trust(iconStars$6),
        tone: "light"
      }), h(Icon$$1, {
        svg: h.trust(iconStars$6),
        tone: "light",
        className: "tests-icon-themed-icon"
      })]);
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Option: svg as attribute (JSX)",
    component: function component() {
      return react.createElement(Icon$$1, { svg: iconStarsSVG });
    }
  }, {
    name: "Option: SVG as component (JSX)",
    component: function component() {
      return react.createElement(
        Icon$$1,
        null,
        react.createElement(
          SVG$$1,
          null,
          iconStarsSVG
        )
      );
    }
  }, {
    name: "Option: style (JSX)",
    component: function component() {
      return react.createElement(Icon$$1, { svg: iconStarsSVG, style: { color: "#EF6C00" } });
    }
  }];
};

var testsReact$2 = [].concat(genericTests$2({ Icon: Icon$1, SVG: SVG$1, renderer: renderer$1 })).concat(reactTests$3({ Icon: Icon$1, SVG: SVG$1, renderer: renderer$1 }));

var iconFavorite$2 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z\"/></svg>";
var iconFavoriteSVG = react.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
  react.createElement("path", { d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" })
);

var reactTests$4 = function reactTests(_ref) {
  var IconButton$$1 = _ref.IconButton,
      Icon$$1 = _ref.Icon,
      SVG$$1 = _ref.SVG,
      h = _ref.renderer;
  // eslint-disable-line no-unused-vars
  var trustedIconFavorite = h.trust(iconFavorite$2);

  return [{
    section: "React specific tests"
  }, {
    name: "With router",
    interactive: true,
    component: withRouter(function (_ref2) {
      var history = _ref2.history;
      return h(IconButton$$1, {
        icon: {
          svg: trustedIconFavorite
        },
        url: {
          href: "/shadow",
          onClick: function onClick(e) {
            return e.preventDefault(), history.push("/shadow");
          }
        }
      });
    })
  }, {
    name: "Dark tone class + light tone class",
    className: "pe-dark-tone",
    component: function component() {
      return h(".pe-light-tone", {
        style: { background: "#fff", padding: "10px" }
      }, [h(IconButton$$1, {
        icon: {
          svg: trustedIconFavorite
        }
      }), h(IconButton$$1, {
        icon: {
          svg: trustedIconFavorite
        },
        className: "tests-icon-button-themed-icon-button"
      })]);
    }
  }, {
    name: "Dark tone class + light tone",
    className: "test-dark-theme",
    component: function component() {
      return h("div", {
        style: { background: "#fff", padding: "10px" }
      }, [h(IconButton$$1, {
        icon: {
          svg: trustedIconFavorite
        },
        tone: "light"
      }), h(IconButton$$1, {
        icon: {
          svg: trustedIconFavorite
        },
        tone: "light",
        className: "tests-icon-button-themed-icon-button"
      })]);
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Option: icon as attribute (JSX)",
    component: function component() {
      return react.createElement(IconButton$$1, { icon: { svg: iconFavoriteSVG } });
    }
  }, {
    name: "Option: icon as component (JSX)",
    component: function component() {
      return react.createElement(
        IconButton$$1,
        null,
        react.createElement(
          Icon$$1,
          null,
          react.createElement(
            SVG$$1,
            null,
            iconFavoriteSVG
          )
        )
      );
    }
  }, {
    name: "Option: style (JSX)",
    component: function component() {
      return react.createElement(
        IconButton$$1,
        { icon: { svg: iconFavoriteSVG }, style: { color: "#FFCCBC", backgroundColor: "#4E342E" } },
        iconFavoriteSVG
      );
    }
  }, {
    name: "With router (JSX)",
    interactive: true,
    component: withRouter(function (_ref3) {
      var history = _ref3.history;
      return react.createElement(IconButton$$1, {
        icon: { svg: iconFavoriteSVG },
        url: {
          href: "/shadow",
          onClick: function onClick(e) {
            return e.preventDefault(), history.push("/shadow");
          }
        }
      });
    })
  }];
};

var testsReact$3 = [].concat(genericTests$3({ IconButton: IconButton$1, Icon: Icon$1, renderer: renderer$1 })).concat(reactTests$4({ IconButton: IconButton$1, Icon: Icon$1, SVG: SVG$1, renderer: renderer$1 }));

var layoutComponent$1 = function layoutComponent(content) {
  return function () {
    return content;
  };
};

var reactTests$5 = function reactTests() {
  return [];
};

var testsReact$4 = [].concat(genericTests$4({ renderer: renderer$1, layoutComponent: layoutComponent$1, createBlocks: createBlocks })).concat(reactTests$5({ renderer: renderer$1, layoutComponent: layoutComponent$1, createBlocks: createBlocks }));

var reactTests$6 = function reactTests(_ref) {
  var List$$1 = _ref.List,
      Icon$$1 = _ref.Icon,
      ListTile$$1 = _ref.ListTile,
      h = _ref.renderer;


  var createUserListTile = function createUserListTile(title, subtitle, filename) {
    return h(withRouter(function (_ref2) {
      var history = _ref2.history;
      return h(ListTile$$1, {
        title: title,
        key: title,
        subtitle: subtitle,
        front: h(Icon$$1, {
          src: "http://arthurclemens.github.io/assets/polythene/examples/" + filename + ".png",
          avatar: true,
          type: "large"
        }),
        url: {
          href: "/",
          onClick: function onClick(e) {
            return e.preventDefault(), history.push("/shadow");
          }
        }
      });
    }));
  };

  var listTileJennifer = createUserListTile("Jennifer Barker", "Starting post doc", "avatar-1");
  var listTileAli = createUserListTile("Ali Connors", "Brunch this weekend?", "avatar-2");
  var listTileGrace = createUserListTile("Grace VanDam", "Binge watching...", "avatar-3");

  return [{
    section: "React specific tests"
  }, {
    name: "Options: header, tiles with urls",
    interactive: true,
    component: function component() {
      return h("div", [h(List$$1, {
        header: {
          title: "Friends"
        },
        borders: true,
        tiles: [listTileJennifer, listTileAli, listTileGrace]
      }), h(List$$1, {
        header: {
          title: "Friends"
        },
        borders: true,
        tiles: [listTileJennifer, listTileAli, listTileGrace]
      })]);
    }
  }, {
    name: "Options: header.sticky",
    interactive: true,
    exclude: true,
    component: function component() {
      return h(".scrollable-list", [0, 1, 2, 3, 4].map(function (num) {
        return h(List$$1, {
          header: {
            title: "Subheader " + num,
            sticky: true
          },
          tiles: [listTileJennifer, listTileAli, listTileGrace, listTileJennifer, listTileAli, listTileGrace]
        });
      }));
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Options: header, tiles, indent, indentedBorders (JSX)",
    component: function component() {
      return react.createElement(
        List$$1,
        {
          indentedBorders: true,
          header: {
            title: "Friends",
            indent: true
          }
        },
        react.createElement(ListTile$$1, { key: "one", indent: true, title: "Jennifer Barker", subtitle: "Starting post doc", front: react.createElement(Icon$$1, {
            src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
            avatar: true,
            type: "large"
          })
        }),
        react.createElement(ListTile$$1, { key: "two", indent: true, title: "Ali Connors", subtitle: "Brunch this weekend?", front: react.createElement(Icon$$1, {
            src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png",
            avatar: true,
            type: "large"
          })
        }),
        react.createElement(ListTile$$1, { key: "three", indent: true, title: "Grace VanDam", subtitle: "Binge watching...", front: react.createElement(Icon$$1, {
            src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-3.png",
            avatar: true,
            type: "large"
          })
        })
      );
    }
  }];
};

var testsReact$5 = [].concat(genericTests$5({ List: List$1, Icon: Icon$1, ListTile: ListTile$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests$6({ List: List$1, Icon: Icon$1, ListTile: ListTile$1, renderer: renderer$1, keys: keys$1 }));

var iconStars$7 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

// const iconStarsSVG = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"/></svg>;

var reactTests$7 = function reactTests(_ref) {
  var Icon$$1 = _ref.Icon,
      ListTile$$1 = _ref.ListTile,
      h = _ref.renderer;

  var trustedIconStars = h.trust(iconStars$7);

  return [{
    section: "React specific tests"
  }, {
    name: "Option: url",
    interactive: true,
    component: withRouter(function (_ref2) {
      var history = _ref2.history;
      return h(ListTile$$1, {
        title: "Ancillary Justice",
        url: {
          href: "/shadow",
          onClick: function onClick(e) {
            return e.preventDefault(), history.push("/shadow");
          }
        }
      });
    })
  }, {
    name: "Option: url (disabled)",
    interactive: true,
    component: withRouter(function (_ref3) {
      var history = _ref3.history;
      return h(ListTile$$1, {
        title: "Ancillary Justice",
        url: {
          href: "/shadow",
          onClick: function onClick(e) {
            return e.preventDefault(), history.push("/shadow");
          }
        },
        disabled: true
      });
    })
  }, {
    name: "Option: secondary (url)",
    interactive: true,
    component: withRouter(function (_ref4) {
      var history = _ref4.history;
      return h(ListTile$$1, {
        title: "Ancillary Justice",
        secondary: {
          icon: {
            svg: trustedIconStars,
            type: "medium"
          },
          url: {
            href: "/shadow",
            onClick: function onClick(e) {
              return e.preventDefault(), history.push("/shadow");
            }
          }
        }
      });
    })
  }, {
    name: "Option: highSubtitle and front",
    component: withRouter(function (_ref5) {
      var history = _ref5.history;
      return h(ListTile$$1, {
        title: "Ancillary Justice",
        highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
        front: h(Icon$$1, {
          src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
          avatar: true,
          type: "large"
        }),
        secondary: {
          icon: {
            svg: trustedIconStars
          },
          url: {
            href: "/shadow",
            onClick: function onClick(e) {
              return e.preventDefault(), history.push("/shadow");
            }
          }
        }
      });
    })
  },

  // Dark tone

  {
    name: "Option: highSubtitle and front -- dark tone class",
    className: "pe-dark-tone",
    component: withRouter(function (_ref6) {
      var history = _ref6.history;
      return h(ListTile$$1, {
        title: "Ancillary Justice",
        highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
        front: h(Icon$$1, {
          src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
          avatar: true,
          type: "large"
        }),
        secondary: {
          icon: {
            svg: trustedIconStars
          },
          url: {
            href: "/shadow",
            onClick: function onClick(e) {
              return e.preventDefault(), history.push("/shadow");
            }
          }
        }
      });
    })
  }, {
    section: "React JSX tests"
  }];
};

var testsReact$6 = [].concat(genericTests$6({ Icon: Icon$1, ListTile: ListTile$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests$7({ Icon: Icon$1, ListTile: ListTile$1, renderer: renderer$1, keys: keys$1 }));

var simpleMenuContent$1 = renderer$1(List$1, null, [renderer$1(ListTile$1, {
  title: "Yes",
  ink: true
}), renderer$1(ListTile$1, {
  title: "No",
  ink: true
})]);

var SimpleMenuComponent = (function () {
  var isOpen = false;
  var id = "id-" + Math.floor(Math.random() * 1000);
  return renderer$1("div", {
    style: { position: "relative" }
  }, [renderer$1(RaisedButton$1, {
    label: "Open menu",
    id: id,
    events: {
      onClick: function onClick() {
        return isOpen = true;
      }
    }
  }), renderer$1(Menu$1, {
    offset: -4,
    target: "#" + id,
    show: isOpen,
    didHide: function didHide() {
      return isOpen = false;
    },
    content: simpleMenuContent$1
  })]);
});

var reactTests$8 = function reactTests(_ref) {
  var Menu$$1 = _ref.Menu,
      List$$1 = _ref.List,
      ListTile$$1 = _ref.ListTile,
      h = _ref.renderer;


  return [{
    section: "React specific tests"
  }, {
    name: "Simple menu",
    interactive: true,
    exclude: true,
    component: function component() {
      return h(SimpleMenuComponent);
    }
  }, {
    name: "Option: size",
    component: function component() {
      return h("div", null, [1.5, 2, 3, 4, 5, 6, 7, "auto"].map(function (size) {
        return sizesMenu({ size: size, Menu: Menu$$1, List: List$$1, ListTile: ListTile$$1, h: h });
      }));
    }
  }];
};

var testsReact$7 = [].concat(genericTests$7({ Menu: Menu$1, List: List$1, ListTile: ListTile$1, renderer: renderer$1 })).concat(reactTests$8({ Menu: Menu$1, List: List$1, ListTile: ListTile$1, renderer: renderer$1 }));

var reactTests$9 = function reactTests(_ref) {
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
      return react.createElement(RaisedButton$$1, { label: "Button", z: 2 });
    }
  }, {
    name: "Option: inactivate (2s) (JSX)",
    component: function component() {
      return react.createElement(RaisedButton$$1, { label: "Inactivated for 2s", inactivate: 2 });
    }
  }];
};

var testsReact$8 = [].concat(genericTests$8({ RaisedButton: RaisedButton$1, renderer: renderer$1 })).concat(reactTests$9({ RaisedButton: RaisedButton$1, renderer: renderer$1 }));

var reactTests$10 = function reactTests(_ref) {
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
      return react.createElement(Ripple$$1, { center: true });
    }
  }, {
    name: "Themed (should be red and permanent) (JSX)",
    component: function component() {
      return react.createElement(Ripple$$1, {
        className: "react-ripple-themed-ripple",
        endOpacity: 1.0,
        persistent: true
      });
    }
  }, {
    name: "Appended to an element (JSX)",
    component: function component() {
      return react.createElement(
        "div",
        { style: {
            position: "relative",
            width: "100px",
            height: "100px"
          } },
        react.createElement(Ripple$$1, null)
      );
    }
  }];
};
var testsReact$9 = [].concat(genericTests$9({ Ripple: Ripple$1, renderer: renderer$1 })).concat(reactTests$10({ Ripple: Ripple$1, renderer: renderer$1 }));

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck$10(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn$10(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits$10(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reactTests$11 = function reactTests(_ref) {
  var Shadow$$1 = _ref.Shadow,
      h = _ref.renderer;

  // eslint-disable-line no-unused-vars

  var InteractiveTest = function (_Component) {
    _inherits$10(InteractiveTest, _Component);

    function InteractiveTest() {
      _classCallCheck$10(this, InteractiveTest);

      var _this = _possibleConstructorReturn$10(this, (InteractiveTest.__proto__ || Object.getPrototypeOf(InteractiveTest)).apply(this, arguments));

      _this.state = {
        z: 1
      };
      return _this;
    }

    _createClass(InteractiveTest, [{
      key: "render",
      value: function render() {
        var _this2 = this;

        return h("div", null, [h(".absolute.absolute--fill", {
          onClick: function onClick() {
            return _this2.setState({
              z: (_this2.state.z + 1) % 6
            });
          }
        }, "Click me"), h(Shadow$$1, {
          animated: true,
          z: this.state.z
        })]);
      }
    }]);

    return InteractiveTest;
  }(react_2);

  return [{
    section: "React specific tests"
  }, {
    name: "Add to a React element",
    component: function component() {
      return h("div", null, [h("div", "Some element"), h(Shadow$$1)]);
    }
  }, {
    name: "Interactive option: animated",
    interactive: true,
    exclude: true,
    component: InteractiveTest
  },

  // Dark tone

  {
    name: "Interactive option: animated -- dark tone class",
    interactive: true,
    className: "pe-dark-tone",
    component: InteractiveTest
  }];
};

var testsReact$10 = [].concat(genericTests$10({ Shadow: Shadow$1, renderer: renderer$1 })).concat(reactTests$11({ Shadow: Shadow$1, renderer: renderer$1 }));

var iconStars$8 = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var iconStarsSVG$1 = react.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
  react.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" })
);

var reactTests$12 = function reactTests(_ref) {
  var SVG$$1 = _ref.SVG,
      h = _ref.renderer;

  return [{
    section: "React specific tests"
  }, {
    name: "Dark tone class + light tone class",
    className: "pe-dark-tone",
    component: function component() {
      return h("div", {
        style: {
          background: "#fff",
          padding: "10px"
        },
        className: "pe-light-tone"
      }, h(SVG$$1, h.trust(iconStars$8)));
    }
  }, {
    name: "Dark tone class + light tone",
    className: "test-dark-theme",
    component: function component() {
      return h("div", {
        style: {
          background: "#fff",
          padding: "10px"
        }
      }, h(SVG$$1, {
        content: h.trust(iconStars$8),
        tone: "light"
      }));
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Option: svg as content attribute (JSX)",
    component: function component() {
      return react.createElement(SVG$$1, { content: iconStarsSVG$1 });
    }
  }, {
    name: "Option: SVG as component (JSX)",
    component: function component() {
      return react.createElement(
        SVG$$1,
        null,
        iconStarsSVG$1
      );
    }
  }, {
    name: "Option: style (JSX)",
    component: function component() {
      return react.createElement(SVG$$1, { content: iconStarsSVG$1, style: { color: "#EF6C00" } });
    }
  }];
};

var testsReact$11 = [].concat(genericTests$11({ SVG: SVG$1, renderer: renderer$1 })).concat(reactTests$12({ SVG: SVG$1, renderer: renderer$1 }));

var _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var reactTests$13 = function reactTests() {

  var SecondaryButton = function SecondaryButton(props) {
    return renderer$1(Button$1, _extends$8({}, props, {
      className: "tests-custom-theme-secondary-button",
      borders: true
    }));
  };

  Button$1.theme(".tests-custom-theme-secondary-button", {
    color_light_border: "#ddd",
    color_light_background: "#fff"
  });

  return [{
    section: "React specific tests"
  }, {
    name: "Theme with deriving component: button (should be bordered with white background)",
    component: SecondaryButton,
    attrs: {
      label: "Bordered button"
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Option: svg as content attribute (JSX)",
    component: function component() {
      return react.createElement(SecondaryButton, { label: "Bordered button" });
    }
  }];
};

var testsReact$12 = [].concat(genericTests$12({ Button: Button$1, FAB: FAB$1, Icon: Icon$1, IconButton: IconButton$1, renderer: renderer$1 })).concat(reactTests$13());

var iconMenuSVG$1 = react.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
  react.createElement("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })
);
var iconRefreshSVG$1 = react.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
  react.createElement("path", { d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" })
);
var iconAddSVG$1 = react.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
  react.createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })
);

var reactTests$14 = function reactTests(_ref) {
  var Toolbar$$1 = _ref.Toolbar,
      IconButton$$1 = _ref.IconButton,
      h = _ref.renderer;

  var _shared = shared({ IconButton: IconButton$$1, renderer: h }),
      toolbarRow = _shared.toolbarRow;

  var ToolbarButton = function ToolbarButton(_ref2) {
    var svg = _ref2.svg;
    return (// eslint-disable-line no-unused-vars
      react.createElement(IconButton$$1, { icon: { svg: svg } })
    );
  };

  return [{
    section: "React specific tests"
  }, {
    name: "Option: shadow",
    class: "small-result",
    component: function component() {
      return h("div", { style: { position: "relative" } }, [h(Toolbar$$1, toolbarRow), h(Shadow$1)]);
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Child node, option compact (JSX)",
    component: function component() {
      return react.createElement(
        Toolbar$$1,
        { compact: true },
        toolbarRow
      );
    }
  }, {
    name: "JSX toolbar row (JSX)",
    component: function component() {
      return react.createElement(
        Toolbar$$1,
        null,
        react.createElement(ToolbarButton, { key: "menu", svg: iconMenuSVG$1 }),
        react.createElement(
          "span",
          { key: "title" },
          "Title"
        ),
        react.createElement(ToolbarButton, { key: "refresh", svg: iconRefreshSVG$1 }),
        react.createElement(ToolbarButton, { key: "add", svg: iconAddSVG$1 })
      );
    }
  }, {
    name: "Option: style (colors and height) (JSX)",
    className: "small-result",
    component: function component() {
      return react.createElement(Toolbar$$1, {
        content: toolbarRow,
        style: {
          backgroundColor: "#EF6C00",
          color: "#fff",
          height: "72px"
        }
      });
    }
  }, {
    name: "Option: shadow (JSX)",
    component: function component() {
      return react.createElement(
        "div",
        { style: { position: "relative" } },
        react.createElement(
          Toolbar$$1,
          null,
          react.createElement(ToolbarButton, { key: "menu", svg: iconMenuSVG$1 }),
          react.createElement(
            "span",
            { key: "title" },
            "Title"
          ),
          react.createElement(ToolbarButton, { key: "refresh", svg: iconRefreshSVG$1 }),
          react.createElement(ToolbarButton, { key: "add", svg: iconAddSVG$1 })
        ),
        react.createElement(Shadow$1, null)
      );
    }
  }];
};

var testsReact$13 = [].concat(genericTests$13({ Toolbar: Toolbar$1, IconButton: IconButton$1, Shadow: Shadow$1, renderer: renderer$1 })).concat(reactTests$14({ Toolbar: Toolbar$1, IconButton: IconButton$1, Shadow: Shadow$1, renderer: renderer$1 }));



var fromReactTests = Object.freeze({
	button: testsReact,
	fab: testsReact$1,
	icon: testsReact$2,
	iconButton: testsReact$3,
	layoutStyles: testsReact$4,
	list: testsReact$5,
	listTile: testsReact$6,
	menu: testsReact$7,
	raisedButton: testsReact$8,
	ripple: testsReact$9,
	shadow: testsReact$10,
	svg: testsReact$11,
	theme: testsReact$12,
	toolbar: testsReact$13
});

var mithrilTests = fromMithrilTests;

var reactTests = fromReactTests;

export { mithrilTests, reactTests };
