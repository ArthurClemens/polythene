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
    name: "Option: style (should be red)",
    component,
    attrs: {
      icon: {
        msvg: iconFavorite
      },
      style: {
        color: "red"
      }
    }
  },
  {
    name: "Themed (should be purple and have large padding)",
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
      element: "div"
    }
  },
  {
    name: "Option: tabindex",
    component,
    attrs: {
      tabindex: 3
    }
  },
  {
    name: "Option: before",
    component,
    attrs: {
      icon: {
        msvg: iconFavorite
      },
      before: m("div", {style: {"font-size": "16px", "line-height": "1rem"}}, "Before")
    }
  },
  {
    name: "Option: after",
    component,
    attrs: {
      icon: {
        msvg: iconFavorite
      },
      after: m("div", {style: {"font-size": "16px", "line-height": "1rem"}}, "After")
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
