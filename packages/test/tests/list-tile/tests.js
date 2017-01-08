import m from "mithril";
import { listTile as component } from "polythene-list-tile";
import { icon } from "polythene-icon";
import iconStars from "mmsvg/google/msvg/action/stars";

export const tests = [
  {
    name: "Child node",
    component,
    attrs: null,
    children: m(icon, {msvg: iconStars})
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
      content: m(icon, {msvg: iconStars})
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
        msvg: iconStars,
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
          msvg: iconStars
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
          msvg: iconStars,
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
          msvg: iconStars,
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
        content: m(icon, {msvg: iconStars})
      }
    }
  },

  // Dark theme

  {
    name: "Option: highSubtitle and front -- dark theme",
    component,
    attrs: {
      class: "pe-dark-theme",
      title: "Ancillary Justice",
      highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
      front: m(icon, {
        src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
        avatar: true,
        type: "large"
      }),
      secondary: {
        icon: {
          msvg: iconStars
        },
        url: {
          href: "/",
          oncreate: m.route.link
        }
      }
    }
  },

  {
    name: "Option: disabled url -- dark theme",
    component,
    attrs: {
      class: "pe-dark-theme",
      title: "Ancillary Justice",
      disabled: true
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
