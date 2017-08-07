import { SVG, renderer } from 'polythene-mithril';
import React from 'react';
import { SVG as SVG$1, renderer as renderer$1 } from 'polythene-react';

var iconStars$1 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var genericTests = (function (_ref) {
  var SVG$$1 = _ref.SVG,
      h = _ref.renderer;


  var trustedIconStars = h.trust(iconStars$1);

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

var iconStars = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var mithrilTests = function mithrilTests(_ref) {
  var SVG$$1 = _ref.SVG,
      h = _ref.renderer;

  var trustedIconStars = h.trust(iconStars);
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
    className: "test-dark-tone",
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

var testsMithril = [].concat(genericTests({ SVG: SVG, renderer: renderer })).concat(mithrilTests({ SVG: SVG, renderer: renderer }));

var iconStars$2 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var iconStarsSVG = React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" })
);

var reactTests = function reactTests(_ref) {
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
      }, h(SVG$$1, h.trust(iconStars$2)));
    }
  }, {
    name: "Dark tone class + light tone",
    className: "test-dark-tone",
    component: function component() {
      return h("div", {
        style: {
          background: "#fff",
          padding: "10px"
        }
      }, h(SVG$$1, {
        content: h.trust(iconStars$2),
        tone: "light"
      }));
    }
  }, {
    section: "React JSX tests"
  }, {
    name: "Option: svg as content attribute (JSX)",
    component: function component() {
      return React.createElement(SVG$$1, { content: iconStarsSVG });
    }
  }, {
    name: "Option: SVG as component (JSX)",
    component: function component() {
      return React.createElement(
        SVG$$1,
        null,
        iconStarsSVG
      );
    }
  }, {
    name: "Option: style (JSX)",
    component: function component() {
      return React.createElement(SVG$$1, { content: iconStarsSVG, style: { color: "#EF6C00" } });
    }
  }];
};

var testsReact = [].concat(genericTests({ SVG: SVG$1, renderer: renderer$1 })).concat(reactTests({ SVG: SVG$1, renderer: renderer$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
