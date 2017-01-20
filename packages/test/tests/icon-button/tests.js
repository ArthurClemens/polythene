import m from "mithril";
import { iconButton as component } from "polythene-icon-button";
import { icon } from "polythene-icon";
import iconFavorite from "mmsvg/google/msvg/action/favorite-border";

component.theme(".tests-icon-button-themed-icon-button", {
  padding: 32,
  color_background: "purple",
  color_light: "white"
});

export const tests = [
  {
    name: "Child node (icon component)",
    component,
    attrs: null,
    children: m(icon, {msvg: iconFavorite})
  },
  {
    name: "Option: icon",
    component,
    attrs: {
      icon: {
        msvg: iconFavorite
      }
    }
  },
  {
    name: "Option: compact",
    component,
    attrs: {
      icon: {
        msvg: iconFavorite
      },
      compact: true
    }
  },
  {
    name: "Option: style (colors)",
    component,
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
    component,
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
    component,
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
    component,
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
    component,
    attrs: {
      icon: {
        msvg: iconFavorite,
        type: "small"
      }
    }
  },
  {
    name: "Option: type (regular)",
    component,
    attrs: {
      icon: {
        msvg: iconFavorite,
        type: "regular"
      }
    }
  },
  {
    name: "Option: type (medium)",
    component,
    attrs: {
      icon: {
        msvg: iconFavorite,
        type: "medium"
      }
    }
  },
  {
    name: "Option: type (large)",
    component,
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
    component,
    class: "pe-dark-theme",
    attrs: null,
    children: m(icon, {msvg: iconFavorite})
  },

];
