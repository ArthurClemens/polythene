import { Icon, List, ListTile, keys, renderer } from 'polythene-mithril';
import React from 'react';
import { Icon as Icon$1, List as List$1, ListTile as ListTile$1, keys as keys$1, renderer as renderer$1 } from 'polythene-react';
import { withRouter } from 'react-router-dom';

var genericTests = (function (_ref) {
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
      size: "large"
    })
  });

  var ListTileAli = h(ListTile$$1, {
    title: "Ali Connors",
    key: "Ali Connors",
    subtitle: "Brunch this weekend?",
    front: h(Icon$$1, {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png",
      avatar: true,
      size: "large"
    })
  });

  var ListTileGrace = h(ListTile$$1, {
    title: "Grace VanDam",
    key: "Grace VanDam",
    subtitle: "Binge watching...",
    front: h(Icon$$1, {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-3.png",
      avatar: true,
      size: "large"
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
    name: "Option: class -- dark tone class",
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
    name: "Themed list (colors and padding) -- dark tone class",
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
    name: "Dark tone class + light tone class",
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
    className: "test-dark-tone",
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

var mithrilTests = function mithrilTests(_ref) {
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
        size: "large"
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
        return h(".scrollable-list", ["one", "two", "three", "four", "five"].map(function (ord) {
          return h(List$$1, {
            header: {
              title: "Sub header " + ord,
              sticky: true
            },
            tiles: [listTileJennifer, listTileAli, listTileGrace, listTileJennifer, listTileAli, listTileGrace]
          });
        }));
      }
    }
  }];
};

var testsMithril = [].concat(genericTests({ List: List, Icon: Icon, ListTile: ListTile, renderer: renderer, keys: keys })).concat(mithrilTests({ List: List, Icon: Icon, ListTile: ListTile, renderer: renderer, keys: keys }));

var reactTests = function reactTests(_ref) {
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
          size: "large"
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
      return h(".scrollable-list", ["one", "two", "three", "four", "five"].map(function (ord) {
        return h(List$$1, {
          header: {
            title: "Sub header " + ord,
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
      return React.createElement(
        List$$1,
        {
          indentedBorders: true,
          header: {
            title: "Friends",
            indent: true
          }
        },
        React.createElement(ListTile$$1, { key: "one", indent: true, title: "Jennifer Barker", subtitle: "Starting post doc", front: React.createElement(Icon$$1, {
            src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
            avatar: true,
            size: "large"
          })
        }),
        React.createElement(ListTile$$1, { key: "two", indent: true, title: "Ali Connors", subtitle: "Brunch this weekend?", front: React.createElement(Icon$$1, {
            src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png",
            avatar: true,
            size: "large"
          })
        }),
        React.createElement(ListTile$$1, { key: "three", indent: true, title: "Grace VanDam", subtitle: "Binge watching...", front: React.createElement(Icon$$1, {
            src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-3.png",
            avatar: true,
            size: "large"
          })
        })
      );
    }
  }];
};

var testsReact = [].concat(genericTests({ List: List$1, Icon: Icon$1, ListTile: ListTile$1, renderer: renderer$1, keys: keys$1 })).concat(reactTests({ List: List$1, Icon: Icon$1, ListTile: ListTile$1, renderer: renderer$1, keys: keys$1 }));

export { testsMithril as mithrilTests, testsReact as reactTests };
