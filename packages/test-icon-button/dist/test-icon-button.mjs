import { Icon, IconButton, SVG, renderer } from 'polythene-mithril';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { Icon as Icon$1, IconButton as IconButton$1, SVG as SVG$1, renderer as renderer$1 } from 'polythene-react';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var iconFavorite$1 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z\"/></svg>";

var genericTests = (function (_ref) {
  var IconButton$$1 = _ref.IconButton,
      Icon$$1 = _ref.Icon,
      SVG$$1 = _ref.SVG,
      h = _ref.renderer;


  var trustedIconFavorite = h.trust(iconFavorite$1);
  IconButton$$1.theme(".tests-icon-button-themed-icon-button", {
    padding: 24,
    color_light_background: "purple",
    color_dark_background: "orange",
    color_light: "white"
  });

  var sizeNames = ["small", "regular", "medium", "large"];

  var FavIcon = h(Icon$$1, null, h(SVG$$1, null, trustedIconFavorite));

  var sizes = function sizes(_sizes, attrs) {
    return _sizes.map(function (size) {
      return h(IconButton$$1, {
        icon: _extends({}, attrs, { size: size })
      });
    });
  };

  return [{
    name: "Child node (icon component)",
    component: IconButton$$1,
    attrs: null,
    children: FavIcon
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
    name: "Option: size",
    component: {
      view: function view() {
        return h("div", {
          style: {
            display: "flex",
            alignItems: "center"
          }
        }, sizes(sizeNames, {
          svg: trustedIconFavorite
        }));
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

var iconFavorite = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z\"/></svg>";

var mithrilTests = function mithrilTests(_ref) {
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
    className: "test-dark-tone",
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

var testsMithril = [].concat(genericTests({ IconButton: IconButton, Icon: Icon, SVG: SVG, renderer: renderer })).concat(mithrilTests({ IconButton: IconButton, SVG: SVG, renderer: renderer }));

var iconFavorite$2 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z\"/></svg>";
var iconFavoriteSVG = React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z" })
);

var reactTests = function reactTests(_ref) {
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
    className: "test-dark-tone",
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
      return React.createElement(IconButton$$1, { icon: { svg: iconFavoriteSVG } });
    }
  }, {
    name: "Option: icon as component (JSX)",
    component: function component() {
      return React.createElement(
        IconButton$$1,
        null,
        React.createElement(
          Icon$$1,
          null,
          React.createElement(
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
      return React.createElement(
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
      return React.createElement(IconButton$$1, {
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

var testsReact = [].concat(genericTests({ IconButton: IconButton$1, Icon: Icon$1, SVG: SVG$1, renderer: renderer$1 })).concat(reactTests({ IconButton: IconButton$1, Icon: Icon$1, SVG: SVG$1, renderer: renderer$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
