import m from "mithril";
import list from "polythene-list";
import listTile from "polythene-list-tile";
import icon from "polythene-icon";

list.theme(".tests-lists-themed-list", {
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

const listTileGrace = m(listTile, {
  title: "Grace VanDam",
  subtitle: "Binge watching...",
  front: m(icon, {
    src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-3.png",
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
    component: list,
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
      }),
      m(listTile, {
        title: "Grace VanDam",
        subtitle: "Binge watching..."
      })
    ]
  },
  {
    name: "Option: tiles",
    component: list,
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
        }),
        m(listTile, {
          title: "Grace VanDam",
          subtitle: "Binge watching..."
        })
      ]
    }
  },
  {
    name: "Options: header, tiles, indent, indentedBorders",
    component: list,
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
        }),
        m(listTile, {
          title: "Grace VanDam",
          subtitle: "Binge watching...",
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
        m(list, {
          header: {
            title: "Friends"
          },
          borders: true,
          tiles: [
            listTileJennifer,
            listTileAli,
            listTileGrace
          ]
        }),
        m(list, {
          header: {
            title: "Friends"
          },
          borders: true,
          tiles: [
            listTileJennifer,
            listTileAli,
            listTileGrace
          ]
        })
      ]
    }
  },
  {
    name: "Option: compact",
    component: list,
    attrs: {
      compact: true,
      borders: true,
      header: {
        title: "Friends"
      },
      tiles: [
        listTileJennifer,
        listTileAli,
        listTileGrace
      ]
    }
  },
  {
    name: "Options: header.sticky",
    interactive: true,
    exclude: true,
    component: {
      view: () => m(".scrollable-list", [0,1,2,3,4].map(() => {
        return m(list, {
          header: {
            title: "Subheader",
            sticky: true
          },
          tiles: [
            listTileJennifer,
            listTileAli,
            listTileGrace,
            listTileJennifer,
            listTileAli,
            listTileGrace
          ]
        });
      }))
    }
  },
  {
    name: "Themed list (colors and padding)",
    component: list,
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
      }),
      m(listTile, {
        title: "Grace VanDam",
        subtitle: "Binge watching...",
        class: "tests-lists-themed-list-tile"
      })
    ]
  },
  {
    name: "Option: style (colors)",
    component: list,
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

  // Dark tone

  {
    name: "Option: class -- dark theme class",
    interactive: true,
    class: "pe-dark-tone",
    component: list,
    attrs: {
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
        }),
        m(listTile, {
          title: "Grace VanDam",
          subtitle: "Binge watching..."
        })
      ]
    }
  },
  {
    name: "Themed list (colors and padding) -- dark theme class",
    component: list,
    class: "pe-dark-tone",
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
      }),
      m(listTile, {
        title: "Grace VanDam",
        subtitle: "Binge watching...",
        class: "tests-lists-themed-list-tile"
      })
    ]
  },
  {
    name: "Dark tone class + light theme class",
    interactive: true,
    class: "pe-dark-tone",
    component: list,
    attrs: {
      class: "pe-light-tone",
      style: { background: "#fff" },
      borders: true,
      header: {
        title: "Friends"
      },
      tiles: [
        m(listTile, {
          title: "Jennifer Barker",
          subtitle: "Starting post doc",
          hoverable: true
        }),
        m(listTile, {
          title: "Ali Connors",
          subtitle: "Brunch this weekend?",
          hoverable: true,
        }),
        m(listTile, {
          title: "Grace VanDam",
          subtitle: "Binge watching...",
          hoverable: true,
        })
      ]
    }
  },
  {
    name: "Dark tone class + light tone",
    interactive: true,
    class: "test-dark-theme",
    component: list,
    attrs: {
      style: { background: "#fff" },      
      borders: true,
      header: {
        title: "Friends"
      },
      tone: "light",
      tiles: [
        m(listTile, {
          title: "Jennifer Barker",
          subtitle: "Starting post doc",
          hoverable: true
        }),
        m(listTile, {
          title: "Ali Connors",
          subtitle: "Brunch this weekend?",
          hoverable: true,
        }),
        m(listTile, {
          title: "Grace VanDam",
          subtitle: "Binge watching...",
          hoverable: true,
        })
      ]
    }
  },
];
