import { ListCSS, ListTileCSS } from "polythene-css";
import keyboardState from "./components/keyboard-state";
import navigation from "./components/navigation";

export default ({ List, ListTile, Icon, h, a }) => {

  const KeyboardState = keyboardState({ h, a, List, ListTile });
  const Navigation = navigation({ h, a, Icon, List, ListTile });

  ListCSS.addStyle(".tests-lists-themed-list", {
    color_light_background: "#fffbe6",
    color_dark_background:  "#356859",
    color_dark_border:      "#275b4c",
    padding: 32
  });
  ListTileCSS.addStyle(".tests-lists-themed-list-tile", {
    color_light_title:      "#356859",
    color_light_subtitle:   "#356859",
    color_light_background: "#fffbe6",
    color_dark_title:       "#fff",
    color_dark_subtitle:    "rgba(255,255,255,0.7)",
    color_dark_background:  "#356859"
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
      name: "Option: tiles",
      component: List,
      attrs: {
        tiles: [
          ListTileJennifer,
          ListTileAli,
          ListTileGrace
        ]
      }
    },
    // Pro forma test
    // {
    //   name: "Child nodes",
    //   component: List,
    //   children: [
    //     h(ListTile, {
    //       title: "Jennifer Barker",
    //       key: "Jennifer Barker",
    //       subtitle: "Starting post doc"
    //     }),
    //     h(ListTile, {
    //       title: "Ali Connors",
    //       key: "Ali Connors",
    //       subtitle: "Brunch this weekend?"
    //     }),
    //     h(ListTile, {
    //       title: "Grace VanDam",
    //       key: "Grace VanDam",
    //       subtitle: "Binge watching..."
    //     })
    //   ]
    // },
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
      name: "Keyboard control: click to select, then use the arrow keys (Escape to deselect)",
      interactive: true,
      component: KeyboardState
    },
    {
      name: "Option: style (colors)",
      component: List,
      attrs: {
        header: { style: { color: "#356859"}, title: "Friends" },
        tiles: [
          h(ListTile, { style: { color: "#356859" }, title: "One", key: "One" }),
          h(ListTile, { style: { color: "#356859" }, title: "Two", key: "Two" }),
          h(ListTile, { style: { color: "#356859" }, title: "Three", key: "Three" })
        ],
        style: {
          backgroundColor: "#fffbe6",
          color: "#356859"
        }
      }
    },

    {
      section: "Themed",
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
      section: "Dark tone",
    },
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

    {
      section: "Right-to-left",
    },
    {
      name: "Option: compact (RTL)",
      component: {
        view: () =>
          h(".pe-rtl", null,
            h(List,
              {
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
            )
          )
      }
    },
  ];
};


