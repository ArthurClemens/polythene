import m from "mithril";
import { iconButton as component } from "polythene-icon-button";
import iconFavorite from "mmsvg/google/msvg/action/favorite-border";

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
    name: "Option: icon",
    component,
    attrs: {
      icon: {
        msvg: iconFavorite
      }
    }
  },
  {
    name: "Colored",
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
    name: "Option: raised and animateOnTap",
    interactive: true,
    component,
    attrs: {
      icon: {
        msvg: iconFavorite
      },
      raised: true,
      animateOnTap: true
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
  }
];
