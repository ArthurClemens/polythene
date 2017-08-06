import { Icon, SVG, renderer } from 'polythene-mithril';
import React from 'react';
import { Icon as Icon$1, SVG as SVG$1, renderer as renderer$1 } from 'polythene-react';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var iconStars$1 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var genericTests = (function (_ref) {
  var Icon$$1 = _ref.Icon,
      SVG$$1 = _ref.SVG,
      h = _ref.renderer;


  var trustedIconStars = h.trust(iconStars$1);

  Icon$$1.theme(".tests-icon-themed-icon", {
    size_regular: 50,
    color_light: "purple",
    color_dark: "orange"
  });

  var sizeNames = ["small", "regular", "medium", "large"];

  var sizes = function sizes(_sizes, attrs) {
    return _sizes.map(function (size) {
      return h(Icon$$1, _extends({}, attrs, { size: size }));
    });
  };

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
    name: "Option: size",
    component: {
      view: function view() {
        return h("div", {
          style: {
            display: "flex",
            alignItems: "center"
          }
        }, sizes(sizeNames, {
          svg: trustedIconStars
        }));
      }
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

var iconStars = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var mithrilTests = function mithrilTests(_ref) {
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
    className: "test-dark-tone",
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

var testsMithril = [].concat(genericTests({ Icon: Icon, SVG: SVG, renderer: renderer })).concat(mithrilTests({ Icon: Icon, SVG: SVG, renderer: renderer }));

var iconStars$2 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var iconStarsSVG = React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" })
);

var reactTests = function reactTests(_ref) {
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
        svg: h.trust(iconStars$2)
      }), h(Icon$$1, {
        svg: h.trust(iconStars$2),
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
        svg: h.trust(iconStars$2),
        tone: "light"
      }), h(Icon$$1, {
        svg: h.trust(iconStars$2),
        tone: "light",
        className: "tests-icon-themed-icon"
      })]);
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Option: svg as attribute (JSX)",
    component: function component() {
      return React.createElement(Icon$$1, { svg: iconStarsSVG });
    }
  }, {
    name: "Option: SVG as component (JSX)",
    component: function component() {
      return React.createElement(
        Icon$$1,
        null,
        React.createElement(
          SVG$$1,
          null,
          iconStarsSVG
        )
      );
    }
  }, {
    name: "Option: style (JSX)",
    component: function component() {
      return React.createElement(Icon$$1, { svg: iconStarsSVG, style: { color: "#EF6C00" } });
    }
  }];
};

var testsReact = [].concat(genericTests({ Icon: Icon$1, SVG: SVG$1, renderer: renderer$1 })).concat(reactTests({ Icon: Icon$1, SVG: SVG$1, renderer: renderer$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
