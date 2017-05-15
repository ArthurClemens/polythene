const iconFavorite = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z\"/></svg>";

export default ({ IconButton, Icon, renderer: h }) => {

  const trustedIconFavorite = h.trust(iconFavorite);
  IconButton.theme(".tests-icon-button-themed-icon-button", {
    padding: 24,
    color_light_background: "purple",
    color_dark_background: "orange",
    color_light: "white"
  });

  return [
    {
      name: "Child node (icon component)",
      component: IconButton,
      attrs: null,
      children: h(Icon, {svg: { content: trustedIconFavorite }})
    },
    {
      name: "Option: icon",
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconFavorite }
        }
      }
    },
    {
      name: "Option: compact",
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconFavorite }
        },
        compact: true
      }
    },
    {
      name: "Option: wash (true)",
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconFavorite }
        },
        wash: true
      }
    },
    {
      name: "Option: style (colors)",
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconFavorite }
        },
        style: {
          color: "#FFCCBC",
          backgroundColor: "#4E342E"
        }
      }
    },
    {
      name: "Themed (colors and padding)",
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconFavorite }
        },
        className: "tests-icon-button-themed-icon-button"
      }
    },
    {
      name: "Option: ripple (center)",
      interactive: true,
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconFavorite }
        },
        ripple: {
          center: true
        }
      }
    },
    {
      name: "Option: type (small)",
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconFavorite },
          type: "small"
        }
      }
    },
    {
      name: "Option: type (regular)",
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconFavorite },
          type: "regular"
        }
      }
    },
    {
      name: "Option: type (medium)",
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconFavorite },
          type: "medium"
        }
      }
    },
    {
      name: "Option: type (large)",
      component: IconButton,
      attrs: {
        icon: {
          svg: { content: trustedIconFavorite },
          type: "large"
        }
      }
    },

    // Dark tone

    {
      name: "Child node (icon component) -- dark tone class",
      component: IconButton,
      className: "pe-dark-tone",
      attrs: null,
      children: h(Icon, {svg: { content: trustedIconFavorite }})
    },
    {
      name: "Option: wash (true) -- dark tone class",
      component: IconButton,
      className: "pe-dark-tone",
      attrs: {
        icon: {
          svg: { content: trustedIconFavorite }
        },
        wash: true
      }
    },
    {
      name: "Themed (color and size) -- dark tone class",
      component: IconButton,
      className: "pe-dark-tone",
      attrs: {
        icon: {
          svg: { content: trustedIconFavorite }
        },
        className: "tests-icon-button-themed-icon-button"
      }
    },
  ];
};
