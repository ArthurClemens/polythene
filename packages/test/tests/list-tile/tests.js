import m from "mithril";
import { listTile as component } from "polythene-list-tile";
import { icon } from "polythene-icon";
import iconRocket from "mmsvg/templarian/msvg/rocket";

export const tests = [
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
    name: "Option: title",
    component,
    attrs: {
      title: "Ancillary Justice"
    }
  },
  {
    name: "Option: content",
    component,
    attrs: {
      title: "Ancillary Justice",
      content: iconRocket
    }
  },
  {
    name: "Option: subtitle",
    component,
    attrs: {
      title: "Ancillary Justice",
      subtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before."
    }
  },
  {
    name: "Option: highSubtitle",
    component,
    attrs: {
      title: "Ancillary Justice",
      highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before."
    }
  },
  {
    name: "Option: highSubtitle and compact",
    component,
    attrs: {
      title: "Ancillary Justice",
      highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
      compact: true
    }
  },
  {
    name: "Option: href",
    interactive: true,
    component,
    attrs: {
      title: "Ancillary Justice",
      url: {
        href: "/",
        oncreate: m.route.link
      }
    }
  },
  {
    name: "Option: front (avatar)",
    component,
    attrs: {
      title: "Ancillary Justice",
      front: m(icon, {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
        avatar: true,
        type: "large"
      })
    }
  },
  {
    name: "Option: front (icon)",
    component,
    attrs: {
      title: "Ancillary Justice",
      front: m(icon, {
        msvg: iconRocket,
        type: "medium"
      })
    }
  },

  // Combined 
  
  {
    name: "Option: highSubtitle and front",
    component,
    attrs: {
      title: "Ancillary Justice",
      highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
      front: m(icon, {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
        avatar: true,
        type: "large"
      }),
      secondary: {
        icon: {
          msvg: iconRocket,
          type: "medium"
        },
        url: {
          href: "/",
          oncreate: m.route.link
        }
      }
    }
  },

  // Appearance options

  {
    name: "Option: indent",
    component,
    attrs: {
      title: "Ancillary Justice",
      indent: true
    }
  },
  {
    name: "Option: selected",
    component,
    attrs: {
      title: "Ancillary Justice",
      selected: true
    }
  },
  {
    name: "Option: disabled url",
    interactive: true,
    component,
    attrs: {
      title: "Ancillary Justice",
      url: {
        href: "/",
        oncreate: m.route.link
      },
      disabled: true
    }
  },
  {
    name: "Option: ink",
    interactive: true,
    component,
    attrs: {
      title: "Ancillary Justice",
      ink: true
    }
  },
  {
    name: "Option: ink with ripple options",
    interactive: true,
    component,
    attrs: {
      title: "Ancillary Justice",
      ink: true,
      ripple: {
        opacityDecayVelocity: 0.1
      }
    }
  },
  {
    name: "Option: hoverable",
    interactive: true,
    component,
    attrs: {
      title: "Ancillary Justice",
      hoverable: true
    }
  },
  {
    name: "Option: selectable",
    interactive: true,
    component,
    attrs: {
      title: "Ancillary Justice",
      selectable: true
    }
  },

  // Secondary content options

  {
    name: "Option: secondary (element)",
    component,
    attrs: {
      title: "Ancillary Justice",
      secondary: {
        element: "dl"
      }
    }
  },
  {
    name: "Option: secondary (icon)",
    component,
    attrs: {
      title: "Ancillary Justice",
      secondary: {
        icon: {
          msvg: iconRocket,
          type: "medium"
        }
      }
    }
  },
  {
    name: "Option: secondary (url)",
    interactive: true,
    component,
    attrs: {
      title: "Ancillary Justice",
      secondary: {
        icon: {
          msvg: iconRocket,
          type: "medium"
        },
        url: {
          href: "/",
          oncreate: m.route.link
        }
      }
    }
  },
  {
    name: "Option: secondary (content)",
    component,
    attrs: {
      title: "Ancillary Justice",
      secondary: {
        content: iconRocket
      }
    }
  },

  // Other
  {
    name: "Option: before",
    component,
    attrs: {
      title: "Ancillary Justice",
      before: m("div", "Before")
    }
  },
  {
    name: "Option: after",
    component,
    attrs: {
      title: "Ancillary Justice",
      after: m("div", "After")
    }
  },
];
