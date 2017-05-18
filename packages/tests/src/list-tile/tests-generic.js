const iconStars = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>";

export default ({ ListTile, Icon, renderer: h, keys }) => {

  const trustedIconStars = h.trust(iconStars);

  ListTile.theme(".tests-list-tile-themed-list-tile", {
    color_light_title:      "#424242",
    color_light_background: "#FFECB3",
    color_dark_title:       "#FFECB3",
    color_dark_background:  "#5D4037",
    font_size_title:        21
  });

  return [
    {
      name: "Child node",
      component: ListTile,
      attrs: null,
      children: h(Icon, {svg: trustedIconStars})
    },
    {
      name: "Option: title",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice"
      }
    },
    {
      name: "Option: content",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        content: h(Icon, {svg: trustedIconStars})
      }
    },
    {
      name: "Option: subtitle",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        subtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before."
      }
    },
    {
      name: "Option: highSubtitle",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before."
      }
    },
    {
      name: "Option: highSubtitle and compact",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        highSubtitle: "The body lay naked and facedown, a deathly gray, spatters of blood staining the snow around it. It was minus fifteen degrees Celsius and a storm had passed just hours before.",
        compact: true
      }
    },
    {
      name: "Option: events",
      interactive: true,
      component: ListTile,
      attrs: {
        title: "Click me",
        events: {
          [keys.onclick]: () => alert("clicked")
        }
      }
    },
    
    {
      name: "Option: front (avatar)",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        front: h(Icon, {
          src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
          avatar: true,
          type: "large"
        })
      }
    },
    {
      name: "Option: front (Icon)",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        front: h(Icon, {
          svg: trustedIconStars,
          type: "medium"
        })
      }
    },
    {
      name: "Themed (color and font size)",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        front: h(Icon, {
          svg: trustedIconStars,
          type: "medium"
        }),
        className: "tests-list-tile-themed-list-tile"
      }
    },
    {
      name: "Option: style (colors)",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        front: h(Icon, {
          svg: trustedIconStars,
          type: "medium"
        }),
        style: {
          color: "#fff",
          backgroundColor: "#EF6C00"
        }
      }
    },

    // Appearance options

    {
      name: "Option: indent",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        indent: true
      }
    },
    {
      name: "Option: selected",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        selected: true
      }
    },
    {
      name: "Option: ink",
      interactive: true,
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        ink: true
      }
    },
    {
      name: "Option: ink with ripple options",
      interactive: true,
      component: ListTile,
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
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        hoverable: true
      }
    },
    {
      name: "Option: selectable",
      interactive: true,
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        selectable: true
      }
    },

    // Secondary content options

    {
      name: "Option: secondary (Icon)",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        secondary: {
          icon: {
            svg: trustedIconStars,
            type: "medium"
          }
        }
      }
    },
    {
      name: "Option: secondary (content)",
      component: ListTile,
      attrs: {
        title: "Ancillary Justice",
        secondary: {
          content: h(Icon, {svg: trustedIconStars})
        }
      }
    },

    // Dark tone

    {
      name: "Option: disabled url -- dark tone class",
      component: ListTile,
      className: "pe-dark-tone",
      attrs: {
        title: "Ancillary Justice",
        disabled: true
      }
    },
    {
      name: "Themed (color and font size) -- dark tone class",
      component: ListTile,
      className: "pe-dark-tone",
      attrs: {
        title: "Ancillary Justice",
        front: h(Icon, {
          svg: trustedIconStars,
          type: "medium"
        }),
        className: "tests-list-tile-themed-list-tile"
      }
    },
    {
      name: "Dark tone class + light theme class",
      component: ListTile,
      className: "pe-dark-tone",
      attrs: {
        title: "Ancillary Justice",
        className: "pe-light-tone",
        front: h(Icon, {
          svg: trustedIconStars,
          type: "medium"
        })
      }
    },
    {
      name: "Dark tone class + light tone",
      component: ListTile,
      className: "test-dark-theme",
      attrs: {
        title: "Ancillary Justice",
        tone: "light",
        front: h(Icon, {
          svg: trustedIconStars,
          type: "medium"
        })
      }
    },
  ];
};


