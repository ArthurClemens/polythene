import m from "mithril";
import { list as component } from "polythene-list";
import { listTile } from "polythene-list-tile";
import { icon } from "polythene-icon";

export const tests = [
  {
    name: "Option: header",
    component,
    attrs: {
      header: {
        title: "My header"
      },
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
    name: "Options: tiles, indent, indentedBorders",
    component,
    attrs: {
      indent: true,
      indentedBorders: true,
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
    name: "Options: header, tiles with urls",
    interactive: true,
    component,
    attrs: {
      header: {
        title: "Friends"
      },
      borders: true,
      tiles: [
        m(listTile, {
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
        }),
        m(listTile, {
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
    name: "Option: hoverable -- dark theme",
    interactive: true,
    component,
    attrs: {
      class: "pe-dark-theme",
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
        m(listTile, {
          title: "Jennifer Barker",
          subtitle: "Starting post doc",
          front: m(icon, {
            src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
            avatar: true,
            type: "large"
          })
        }),
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
];
