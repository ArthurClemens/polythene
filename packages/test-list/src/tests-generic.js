import { ListCSS, ListTileCSS } from "polythene-css";
import keyboardState from "./components/keyboard-state";
import navigation from "./components/navigation";

export default ({ List, ListTile, Icon, renderer: h, keys: k }) => {

  const KeyboardState = keyboardState({ h, k, List, ListTile });
  const Navigation = navigation({ h, k, Icon, List, ListTile });

  ListCSS.addStyle(".tests-lists-themed-list", {
    color_light_background: "#F57C00",
    color_light_border:     "#F57C00",
    color_dark_background:  "#5D4037",
    color_dark_border:      "#5D4037",
    padding: 32
  });
  ListTileCSS.addStyle(".tests-lists-themed-list-tile", {
    color_light_title:      "#fff",
    color_light_subtitle:   "rgba(255,255,255,.8)",
    color_light_background: "#EF6C00",
    color_dark_title:       "#D7CCC8",
    color_dark_subtitle:    "#BCAAA4",
    color_dark_background:  "#4E342E"
  });

  const ListTileJennifer = h(ListTile, {
    title: "Jennifer Barker",
    key: "Jennifer Barker",
    subtitle: "Starting post doc",
    front: h(Icon, {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
      avatar: true,
      size: "large"
    })
  });

  const ListTileAli = h(ListTile, {
    title: "Ali Connors",
    key: "Ali Connors",
    subtitle: "Brunch this weekend?",
    front: h(Icon, {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-2.png",
      avatar: true,
      size: "large"
    })
  });

  const ListTileGrace = h(ListTile, {
    title: "Grace VanDam",
    key: "Grace VanDam",
    subtitle: "Binge watching...",
    front: h(Icon, {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-3.png",
      avatar: true,
      size: "large"
    })
  });

  return [
    {
      name: "Child nodes",
      component: List,
      children: [
        h(ListTile, {
          title: "Jennifer Barker",
          key: "Jennifer Barker",
          subtitle: "Starting post doc"
        }),
        h(ListTile, {
          title: "Ali Connors",
          key: "Ali Connors",
          subtitle: "Brunch this weekend?"
        }),
        h(ListTile, {
          title: "Grace VanDam",
          key: "Grace VanDam",
          subtitle: "Binge watching..."
        })
      ]
    },
    {
      name: "Option: tiles",
      component: List,
      attrs: {
        tiles: [
          h(ListTile, {
            title: "Jennifer Barker",
            key: "Jennifer Barker",
            subtitle: "Starting post doc"
          }),
          h(ListTile, {
            title: "Ali Connors",
            key: "Ali Connors",
            subtitle: "Brunch this weekend?"
          }),
          h(ListTile, {
            title: "Grace VanDam",
            key: "Grace VanDam",
            subtitle: "Binge watching..."
          })
        ]
      }
    },
    {
      name: "Options: header, tiles, indent, indentedBorder",
      component: List,
      attrs: {
        indentedBorder: true,
        header: {
          title: "Friends",
          indent: true
        },
        tiles: [
          h(ListTile, {
            title: "Jennifer Barker",
            subtitle: "Starting post doc",
            indent: true,
            key: "Jennifer Barker",
          }),
          h(ListTile, {
            title: "Ali Connors",
            subtitle: "Brunch this weekend?",
            indent: true,
            key: "Ali Connors",
          }),
          h(ListTile, {
            title: "Grace VanDam",
            subtitle: "Binge watching...",
            indent: true,
            key: "Grace VanDam",
          })
        ]
      }
    },
    {
      name: "Option: compact",
      component: List,
      attrs: {
        compact: true,
        header: {
          title: "Friends"
        },
        tiles: [
          ListTileJennifer,
          ListTileAli,
          ListTileGrace
        ]
      }
    },
    {
      name: "No list padding",
      component: List,
      attrs: {
        padding: false,
        tiles: [
          ListTileJennifer,
          ListTileAli,
          ListTileGrace
        ]
      }
    },
    {
      name: "Option: navigation",
      component: {
        view: () => h(Navigation)
      }
    },
    {
      name: "Themed list (colors and padding)",
      component: List,
      attrs: {
        className: "tests-lists-themed-list"
      },
      children: [
        h(ListTile, {
          title: "Jennifer Barker",
          key: "Jennifer Barker",
          subtitle: "Starting post doc",
          className: "tests-lists-themed-list-tile"
        }),
        h(ListTile, {
          title: "Ali Connors",
          key: "Ali Connors",
          subtitle: "Brunch this weekend?",
          className: "tests-lists-themed-list-tile"
        }),
        h(ListTile, {
          title: "Grace VanDam",
          key: "Grace VanDam",
          subtitle: "Binge watching...",
          className: "tests-lists-themed-list-tile"
        })
      ]
    },
    {
      name: "Option: style (colors)",
      component: List,
      attrs: {
        header: { style: { color: "rgba(255,255,255,.8)"}, title: "Friends" },
        tiles: [
          h(ListTile, { style: { color: "#fff" }, title: "One", key: "One" }),
          h(ListTile, { style: { color: "#fff" }, title: "Two", key: "Two" }),
          h(ListTile, { style: { color: "#fff" }, title: "Three", key: "Three" })
        ],
        style: {
          backgroundColor: "#EF6C00",
          color: "#fff"
        }
      }
    },
    {
      name: "Keyboard control: click to select, then use the arrow keys (Escape to deselect)",
      interactive: true,
      component: KeyboardState
    },

    // Dark tone

    {
      name: "Option: class -- dark tone class",
      interactive: true,
      className: "pe-dark-tone",
      component: List,
      attrs: {
        header: {
          title: "Friends"
        },
        tiles: [
          h(ListTile, {
            title: "Jennifer Barker",
            key: "Jennifer Barker",
            subtitle: "Starting post doc",
            hoverable: true,
          }),
          h(ListTile, {
            title: "Ali Connors",
            key: "Ali Connors",
            subtitle: "Brunch this weekend?",
            hoverable: true,
          }),
          h(ListTile, {
            title: "Grace VanDam",
            key: "Grace VanDam",
            subtitle: "Binge watching...",
            hoverable: true,
          })
        ]
      }
    },
    {
      name: "Themed list (colors and padding) -- dark tone class",
      component: List,
      className: "pe-dark-tone",
      attrs: {
        className: "tests-lists-themed-list"
      },
      children: [
        h(ListTile, {
          title: "Jennifer Barker",
          key: "Jennifer Barker",
          subtitle: "Starting post doc",
          className: "tests-lists-themed-list-tile"
        }),
        h(ListTile, {
          title: "Ali Connors",
          key: "Ali Connors",
          subtitle: "Brunch this weekend?",
          className: "tests-lists-themed-list-tile"
        }),
        h(ListTile, {
          title: "Grace VanDam",
          key: "Grace VanDam",
          subtitle: "Binge watching...",
          className: "tests-lists-themed-list-tile"
        })
      ]
    },
    {
      name: "Dark tone class + light tone class",
      interactive: true,
      className: "pe-dark-tone",
      component: List,
      attrs: {
        className: "pe-light-tone",
        style: { background: "#fff" },
        header: {
          title: "Friends"
        },
        tiles: [
          h(ListTile, {
            title: "Jennifer Barker",
            key: "Jennifer Barker",
            subtitle: "Starting post doc",
            hoverable: true
          }),
          h(ListTile, {
            title: "Ali Connors",
            key: "Ali Connors",
            subtitle: "Brunch this weekend?",
            hoverable: true,
          }),
          h(ListTile, {
            title: "Grace VanDam",
            key: "Grace VanDam",
            subtitle: "Binge watching...",
            hoverable: true,
          })
        ]
      }
    },
    {
      name: "Dark tone class + light tone",
      interactive: true,
      className: "test-dark-tone",
      component: List,
      attrs: {
        style: { background: "#fff" },
        header: {
          title: "Friends"
        },
        tone: "light",
        tiles: [
          h(ListTile, {
            title: "Jennifer Barker",
            key: "Jennifer Barker",
            subtitle: "Starting post doc",
            hoverable: true
          }),
          h(ListTile, {
            title: "Ali Connors",
            key: "Ali Connors",
            subtitle: "Brunch this weekend?",
            hoverable: true,
          }),
          h(ListTile, {
            title: "Grace VanDam",
            key: "Grace VanDam",
            subtitle: "Binge watching...",
            hoverable: true,
          })
        ]
      }
    },
  ];
};


