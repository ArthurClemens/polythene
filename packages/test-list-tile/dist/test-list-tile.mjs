import { Icon, ListTile, keys, renderer } from 'polythene-mithril';
import React from 'react';
import { Icon as Icon$1, ListTile as ListTile$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';
import { withRouter } from 'react-router-dom';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var iconStars$1 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var genericTests = (function (_ref) {
  var ListTile$$1 = _ref.ListTile,
      Icon$$1 = _ref.Icon,
      h = _ref.renderer,
      keys$$1 = _ref.keys;


  var trustedIconStars = h.trust(iconStars$1);

  ListTile$$1.theme(".tests-list-tile-themed-list-tile", {
    color_light_title: "#424242",
    color_light_background: "#FFECB3",
    color_dark_title: "#FFECB3",
    color_dark_background: "#5D4037",
    font_size_title: 21
  });

  return [{
    name: "Option: title",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice"
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
        size: "large"
      })
    }
  }, {
    name: "Option: front (Icon)",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      front: h(Icon$$1, {
        svg: trustedIconStars,
        size: "medium"
      })
    }
  }, {
    name: "Themed (color and font size)",
    component: ListTile$$1,
    attrs: {
      title: "Ancillary Justice",
      front: h(Icon$$1, {
        svg: trustedIconStars,
        size: "medium"
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
        size: "medium"
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
          size: "medium"
        }
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
        size: "medium"
      }),
      className: "tests-list-tile-themed-list-tile"
    }
  }, {
    name: "Dark tone class + light tone class",
    component: ListTile$$1,
    className: "pe-dark-tone",
    attrs: {
      title: "Ancillary Justice",
      className: "pe-light-tone",
      front: h(Icon$$1, {
        svg: trustedIconStars,
        size: "medium"
      })
    }
  }, {
    name: "Dark tone class + light tone",
    component: ListTile$$1,
    className: "test-dark-tone",
    attrs: {
      title: "Ancillary Justice",
      tone: "light",
      front: h(Icon$$1, {
        svg: trustedIconStars,
        size: "medium"
      })
    }
  }];
});

var iconStars = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var mithrilTests = function mithrilTests(_ref) {
  var Icon$$1 = _ref.Icon,
      ListTile$$1 = _ref.ListTile,
      h = _ref.renderer;

  var trustedIconStars = h.trust(iconStars);

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
          size: "medium"
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
        size: "large"
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
        size: "large"
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

var testsMithril = [].concat(genericTests({ Icon: Icon, ListTile: ListTile, renderer: renderer, keys: keys })).concat(mithrilTests({ Icon: Icon, ListTile: ListTile, renderer: renderer, keys: keys }));

var iconStars$2 = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

var iconStarsSVG = React.createElement(
  "svg",
  { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
  React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z" })
);

var reactTests = function reactTests(_ref) {
  var Icon$$1 = _ref.Icon,
      ListTile$$1 = _ref.ListTile,
      h = _ref.renderer;

  var trustedIconStars = h.trust(iconStars$2);

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
            size: "medium"
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
          size: "large"
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
          size: "large"
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
  }, {
    name: "Option: child (JSX)",
    component: function component() {
      return React.createElement(ListTile$$1, {
        title: "Ancillary Justice",
        front: React.createElement(
          Icon$$1,
          null,
          iconStarsSVG
        )
      });
    }
  }, {
    name: "Option: highSubtitle and front (JSX)",
    component: withRouter(function (_ref7) {
      var history = _ref7.history;
      return React.createElement(ListTile$$1, {
        title: "Ancillary Justice",
        highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
        front: React.createElement(Icon$$1, {
          src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
          avatar: true,
          size: "large"
        }),
        secondary: {
          icon: { svg: iconStarsSVG },
          url: {
            href: "/shadow",
            onClick: function onClick(e) {
              return e.preventDefault(), history.push("/shadow");
            }
          }
        }
      });
    })
  }];
};

var testsReact = [].concat(genericTests({ Icon: Icon$1, ListTile: ListTile$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ Icon: Icon$1, ListTile: ListTile$1, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
