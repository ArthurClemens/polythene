import m from "mithril";
import { list as component } from "polythene-list";
import { listTile } from "polythene-list-tile";
import { icon } from "polythene-icon";

component.theme(".tests-lists-themed-list", {
  color_light_background: "#F57C00",
  color_light_border:     "#F57C00",
  color_dark_background:  "#5D4037",
  color_dark_border:      "#5D4037",
  padding: 32
});
listTile.theme(".tests-lists-themed-list-tile", {
  color_light_title:      "#fff",
  color_light_subtitle:   "rgba(255,255,255,.8)",
  color_light_background: "#EF6C00",
  color_dark_title:       "#D7CCC8",
  color_dark_subtitle:    "#BCAAA4",
  color_dark_background:  "#4E342E"
});

const listTileJennifer = m(listTile, {
  title: "Jennifer Barker",
  subtitle: "Starting post doc",
  front: m(icon, {
    src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
    avatar: true,
    type: "large"
  }),
  url: {
    href: "/",
    oncreate: m.route.link
  }
});

const listTileAli = m(listTile, {
  title: "Ali Connors",
  subtitle: "Brunch this weekend?",
  front: m(icon, {
    src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png",
    avatar: true,
    type: "large"
  }),
  url: {
    href: "/",
    oncreate: m.route.link
  }
});

export const tests = [
  {
    name: "Child nodes",
    component,
    attrs: {
      borders: true
    },
    children: [
      m(listTile, {
        title: "Jennifer Barker",
        subtitle: "Starting post doc"
      }),
      m(listTile, {
        title: "Ali Connors",
        subtitle: "Brunch this weekend?"
      })
    ]
  },
  {
    name: "Option: header",
    component,
    attrs: {
      header: {
        title: "My header"
      }
    }
  },
  {
    name: "Option: tiles",
    component,
    attrs: {
      borders: true,
      tiles: [
        m(listTile, {
          title: "Jennifer Barker",
          subtitle: "Starting post doc"
        }),
        m(listTile, {
          title: "Ali Connors",
          subtitle: "Brunch this weekend?"
        })
      ]
    }
  },
  {
    name: "Options: tiles, indent, indentedBorders",
    component,
    attrs: {
      indentedBorders: true,
      header: {
        title: "Friends",
        indent: true
      },
      tiles: [
        m(listTile, {
          title: "Jennifer Barker",
          subtitle: "Starting post doc",
          indent: true
        }),
        m(listTile, {
          title: "Ali Connors",
          subtitle: "Brunch this weekend?",
          indent: true
        })
      ]
    }
  },
  {
    name: "Options: header, tiles with urls",
    interactive: true,
    component: {
      view: () => [
        m(component, {
          header: {
            title: "Friends"
          },
          borders: true,
          tiles: [
            listTileJennifer,
            listTileAli
          ]
        }),
        m(component, {
          header: {
            title: "Friends"
          },
          borders: true,
          tiles: [
            listTileJennifer,
            listTileAli
          ]
        })
      ]
    }
  },
  {
    name: "Option: hoverable",
    interactive: true,
    component,
    attrs: {
      hoverable: true,
      borders: true,
      header: {
        title: "Friends"
      },
      tiles: [
        m(listTile, {
          title: "Jennifer Barker",
          subtitle: "Starting post doc",
        }),
        m(listTile, {
          title: "Ali Connors",
          subtitle: "Brunch this weekend?"
        })
      ]
    }
  },
  {
    name: "Option: selectable",
    interactive: true,
    component,
    attrs: {
      selectable: true,
      borders: true,
      header: {
        title: "Friends"
      },
      tiles: [
        m(listTile, {
          title: "Jennifer Barker",
          subtitle: "Starting post doc"
        }),
        m(listTile, {
          title: "Ali Connors",
          subtitle: "Brunch this weekend?"
        })
      ]
    }
  },
  {
    name: "Option: compact",
    component,
    attrs: {
      compact: true,
      borders: true,
      header: {
        title: "Friends"
      },
      tiles: [
        listTileJennifer,
        m(listTile, {
          title: "Ali Connors",
          subtitle: "Brunch this weekend?",
          front: m(icon, {
            src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png",
            avatar: true,
            type: "large"
          })
        })
      ]
    }
  },
  {
    name: "Options: header.sticky",
    interactive: true,
    exclude: true,
    component: {
      view: () => m(".scrollable-list", [0,1,2,3,4].map(() => {
        return m(component, {
          header: {
            title: "Subheader",
            sticky: true
          },
          tiles: [
            listTileJennifer,
            listTileAli,
            listTileJennifer,
            listTileAli
          ]
        });
      }))
    }
  },
  {
    name: "Themed list (colors and padding)",
    component,
    attrs: {
      borders: true,
      class: "tests-lists-themed-list"
    },
    children: [
      m(listTile, {
        title: "Jennifer Barker",
        subtitle: "Starting post doc",
        class: "tests-lists-themed-list-tile"
      }),
      m(listTile, {
        title: "Ali Connors",
        subtitle: "Brunch this weekend?",
        class: "tests-lists-themed-list-tile"
      })
    ]
  },
  {
    name: "Option: style (colors)",
    component,
    attrs: {
      header: { style: { color: "rgba(255,255,255,.8)"}, title: "Friends" },
      tiles: [
        m(listTile, { style: { color: "#fff" }, title: "One" }),
        m(listTile, { style: { color: "#fff" }, title: "Two" }),
        m(listTile, { style: { color: "#fff" }, title: "Three" })
      ],
      style: {
        backgroundColor: "#EF6C00",
        color: "#fff"
      }
    }
  },

  // Dark theme

  {
    name: "Option: hoverable -- dark theme",
    interactive: true,
    class: "pe-dark-theme",
    component,
    attrs: {
      hoverable: true,
      borders: true,
      header: {
        title: "Friends"
      },
      tiles: [
        m(listTile, {
          title: "Jennifer Barker",
          subtitle: "Starting post doc",
        }),
        m(listTile, {
          title: "Ali Connors",
          subtitle: "Brunch this weekend?"
        })
      ]
    }
  },
  {
    name: "Themed list (colors and padding) -- dark theme",
    component,
    class: "pe-dark-theme",
    attrs: {
      borders: true,
      class: "tests-lists-themed-list"
    },
    children: [
      m(listTile, {
        title: "Jennifer Barker",
        subtitle: "Starting post doc",
        class: "tests-lists-themed-list-tile"
      }),
      m(listTile, {
        title: "Ali Connors",
        subtitle: "Brunch this weekend?",
        class: "tests-lists-themed-list-tile"
      })
    ]
  },
];
