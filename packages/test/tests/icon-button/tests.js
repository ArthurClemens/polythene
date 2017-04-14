import m from "mithril";
import iconButton from "polythene-icon-button";
import icon from "polythene-icon";
import iconFavorite from "mmsvg/google/msvg/action/favorite-border";

iconButton.theme(".tests-icon-button-themed-icon-button", {
  padding: 24,
  color_light_background: "purple",
  color_dark_background: "orange",
  color_light: "white"
});

export const tests = [
  {
    name: "Child node (icon component)",
    component: iconButton,
    attrs: null,
    children: m(icon, {msvg: iconFavorite})
  },
  {
    name: "Option: icon",
    component: iconButton,
    attrs: {
      icon: {
        msvg: iconFavorite
      }
    }
  },
  {
    name: "Option: compact",
    component: iconButton,
    attrs: {
      icon: {
        msvg: iconFavorite
      },
      compact: true
    }
  },
  {
    name: "Option: style (colors)",
    component: iconButton,
    attrs: {
      icon: {
        msvg: iconFavorite
      },
      style: {
        color: "#FFCCBC",
        backgroundColor: "#4E342E"
      }
    }
  },
  {
    name: "Themed (colors and padding)",
    component: iconButton,
    attrs: {
      icon: {
        msvg: iconFavorite
      },
      class: "tests-icon-button-themed-icon-button"
    }
  },
  {
    name: "Option: ripple (center)",
    interactive: true,
    component: iconButton,
    attrs: {
      icon: {
        msvg: iconFavorite
      },
      ripple: {
        center: true
      }
    }
  },
  {
    name: "Option: url",
    interactive: true,
    component: iconButton,
    attrs: {
      icon: {
        msvg: iconFavorite
      },
      url: {
        href: "/shadow",
        oncreate: m.route.link
      }
    }
  },
  {
    name: "Option: type (small)",
    component: iconButton,
    attrs: {
      icon: {
        msvg: iconFavorite,
        type: "small"
      }
    }
  },
  {
    name: "Option: type (regular)",
    component: iconButton,
    attrs: {
      icon: {
        msvg: iconFavorite,
        type: "regular"
      }
    }
  },
  {
    name: "Option: type (medium)",
    component: iconButton,
    attrs: {
      icon: {
        msvg: iconFavorite,
        type: "medium"
      }
    }
  },
  {
    name: "Option: type (large)",
    component: iconButton,
    attrs: {
      icon: {
        msvg: iconFavorite,
        type: "large"
      }
    }
  },

  // Dark theme

  {
    name: "Child node (icon component) -- dark theme",
    component: iconButton,
    class: "pe-dark-theme",
    attrs: null,
    children: m(icon, {msvg: iconFavorite})
  },
  {
    name: "Themed (color and size) -- dark theme",
    component: iconButton,
    class: "pe-dark-theme",
    attrs: {
      icon: {
        msvg: iconFavorite
      },
      class: "tests-icon-button-themed-icon-button"
    }
  },
  {
    name: "Dark theme + light theme",
    class: "pe-dark-theme",
    component: {
      view: () => m(".pe-light-theme", {
        style: { background: "#fff", padding: "10px" }
      }, [
        m(iconButton, {
          icon: {
            msvg: iconFavorite
          },
        }),
        m(iconButton, {
          icon: {
            msvg: iconFavorite
          },
          class: "tests-icon-button-themed-icon-button"
        })
      ])
    }
  }

];
