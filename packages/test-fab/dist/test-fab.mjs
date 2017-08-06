import { FAB, Icon, renderer } from 'polythene-mithril';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { FAB as FAB$1, Icon as Icon$1, SVG, renderer as renderer$1 } from 'polythene-react';

var iconAlarm$1 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/></svg>";

var genericTests = (function (_ref) {
  var FAB$$1 = _ref.FAB,
      Icon$$1 = _ref.Icon,
      h = _ref.renderer;


  var trustedIconAlarm = h.trust(iconAlarm$1);
  FAB$$1.theme(".tests-fab-themed-fab", {
    color_light_background: "#fff",
    color_dark_background: "#0097A7",
    color_light: "#2196F3",
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

var iconAlarm = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z\"/></svg>";

var mithrilTests = function mithrilTests(_ref) {
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
    className: "test-dark-tone",
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

var testsMithril = [].concat(genericTests({ FAB: FAB, Icon: Icon, renderer: renderer })).concat(mithrilTests({ FAB: FAB, Icon: Icon, renderer: renderer }));

var iconAlarm$2 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/></svg>";
var iconAlarmSVG = React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" })
);

var reactTests = function reactTests(_ref) {
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
    className: "test-dark-tone",
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
      return React.createElement(FAB$$1, { icon: { svg: iconAlarmSVG }, mini: true });
    }
  }, {
    name: "Option: icon as component (JSX)",
    component: function component() {
      return React.createElement(
        FAB$$1,
        { mini: true },
        React.createElement(
          Icon$$1,
          null,
          React.createElement(
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
      return React.createElement(FAB$$1, { mini: true, icon: { svg: iconAlarmSVG }, z: 5 });
    }
  }, {
    name: "Option: style (JSX)",
    component: function component() {
      return React.createElement(FAB$$1, { icon: { svg: iconAlarmSVG }, style: { color: "#ef6c00", backgroundColor: "#fff" } });
    }
  }, {
    name: "With router (JSX)",
    interactive: true,
    component: withRouter(function (_ref3) {
      var history = _ref3.history;
      return React.createElement(FAB$$1, {
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

var testsReact = [].concat(genericTests({ FAB: FAB$1, Icon: Icon$1, renderer: renderer$1 })).concat(reactTests({ FAB: FAB$1, Icon: Icon$1, SVG: SVG, renderer: renderer$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
