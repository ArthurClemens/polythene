import m from "mithril";
import { list as component } from "polythene-list";
import { listTile } from "polythene-list-tile";
import { icon } from "polythene-icon";

component.theme(".tests-lists-themed-list", {
  color_light_border: "#2196F3"
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

  // Common
  {
    name: "No options",
    component,
    attrs: null
  },
  {
    name: "Option: id",
    component,
    attrs: {
      id: "id-x"
    }
  },
  {
    name: "Option: class",
    component,
    attrs: {
      class: "class-x"
    }
  },
  {
    name: "Option: element",
    component,
    attrs: {
      element: "blockquote"
    }
  },
  {
    name: "Option: before",
    component,
    attrs: {
      header: {
        title: "My header"
      },
      before: m("div", "Before")
    }
  },
  {
    name: "Option: after",
    component,
    attrs: {
      header: {
        title: "My header"
      },
      after: m("div", "After")
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
];
