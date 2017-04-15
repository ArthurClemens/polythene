import m from "mithril";
import listTile from "polythene-list-tile";
import icon from "polythene-icon";
import iconStars from "mmsvg/google/msvg/action/stars";

listTile.theme(".tests-list-tile-themed-list-tile", {
  color_light_title:      "#424242",
  color_light_background: "#FFECB3",
  color_dark_title:       "#FFECB3",
  color_dark_background:  "#5D4037",
  font_size_title:        21
});

export const tests = [
  {
    name: "Child node",
    component: listTile,
    attrs: null,
    children: m(icon, {msvg: iconStars})
  },
  {
    name: "Option: title",
    component: listTile,
    attrs: {
      title: "Ancillary Justice"
    }
  },
  {
    name: "Option: content",
    component: listTile,
    attrs: {
      title: "Ancillary Justice",
      content: m(icon, {msvg: iconStars})
    }
  },
  {
    name: "Option: subtitle",
    component: listTile,
    attrs: {
      title: "Ancillary Justice",
      subtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before."
    }
  },
  {
    name: "Option: highSubtitle",
    component: listTile,
    attrs: {
      title: "Ancillary Justice",
      highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before."
    }
  },
  {
    name: "Option: highSubtitle and compact",
    component: listTile,
    attrs: {
      title: "Ancillary Justice",
      highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
      compact: true
    }
  },
  {
    name: "Option: events",
    interactive: true,
    component: listTile,
    attrs: {
      title: "Click me",
      events: {
        onclick: () => alert("clicked")
      }
    }
  },
  {
    name: "Option: href",
    interactive: true,
    component: listTile,
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
    component: listTile,
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
    component: listTile,
    attrs: {
      title: "Ancillary Justice",
      front: m(icon, {
        msvg: iconStars,
        type: "medium"
      })
    }
  },
  {
    name: "Themed (color and font size)",
    component: listTile,
    attrs: {
      title: "Ancillary Justice",
      front: m(icon, {
        msvg: iconStars,
        type: "medium"
      }),
      class: "tests-list-tile-themed-list-tile"
    }
  },
  {
    name: "Option: style (colors)",
    component: listTile,
    attrs: {
      title: "Ancillary Justice",
      front: m(icon, {
        msvg: iconStars,
        type: "medium"
      }),
      style: {
        color: "#fff",
        backgroundColor: "#EF6C00"
      }
    }
  },

  // Combined 
  
  {
    name: "Option: highSubtitle and front",
    component: listTile,
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
    component: listTile,
    attrs: {
      title: "Ancillary Justice",
      indent: true
    }
  },
  {
    name: "Option: selected",
    component: listTile,
    attrs: {
      title: "Ancillary Justice",
      selected: true
    }
  },
  {
    name: "Option: disabled url",
    interactive: true,
    component: listTile,
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
    component: listTile,
    attrs: {
      title: "Ancillary Justice",
      ink: true
    }
  },
  {
    name: "Option: ink with ripple options",
    interactive: true,
    component: listTile,
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
    component: listTile,
    attrs: {
      title: "Ancillary Justice",
      hoverable: true
    }
  },
  {
    name: "Option: selectable",
    interactive: true,
    component: listTile,
    attrs: {
      title: "Ancillary Justice",
      selectable: true
    }
  },

  // Secondary content options

  {
    name: "Option: secondary (icon)",
    component: listTile,
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
    component: listTile,
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
    component: listTile,
    attrs: {
      title: "Ancillary Justice",
      secondary: {
        content: m(icon, {msvg: iconStars})
      }
    }
  },

  // Dark theme

  {
    name: "Option: highSubtitle and front -- dark theme class",
    component: listTile,
    class: "pe-dark-tone",
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
  {
    name: "Option: disabled url -- dark theme class",
    component: listTile,
    class: "pe-dark-tone",
    attrs: {
      title: "Ancillary Justice",
      disabled: true
    }
  },
  {
    name: "Themed (color and font size) -- dark theme class",
    component: listTile,
    class: "pe-dark-tone",
    attrs: {
      title: "Ancillary Justice",
      front: m(icon, {
        msvg: iconStars,
        type: "medium"
      }),
      class: "tests-list-tile-themed-list-tile"
    }
  },
  {
    name: "Dark theme class + light theme class",
    component: listTile,
    class: "pe-dark-tone",
    attrs: {
      title: "Ancillary Justice",
      class: "pe-light-tone",
      front: m(icon, {
        msvg: iconStars,
        type: "medium"
      })
    }
  },
  {
    name: "Dark theme class + light tone",
    component: listTile,
    class: "test-dark-theme",
    attrs: {
      title: "Ancillary Justice",
      tone: "light",
      front: m(icon, {
        msvg: iconStars,
        type: "medium"
      })
    }
  },

];
