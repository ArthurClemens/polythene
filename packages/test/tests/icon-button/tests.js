import m from "mithril";
import { iconButton } from "polythene-icon-button";
import iconStars from "mmsvg/google/msvg/action/stars";

const component = iconButton;

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
        msvg: iconStars
      }
    }
  },
  {
    name: "Colored",
    component,
    attrs: {
      icon: {
        msvg: iconStars
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
        msvg: iconStars
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
        msvg: iconStars
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
        msvg: iconStars
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
        msvg: iconStars,
        type: "small"
      }
    }
  },
  {
    name: "Option: type (regular)",
    component,
    attrs: {
      icon: {
        msvg: iconStars,
        type: "regular"
      }
    }
  },
  {
    name: "Option: type (medium)",
    component,
    attrs: {
      icon: {
        msvg: iconStars,
        type: "medium"
      }
    }
  },
  {
    name: "Option: type (large)",
    component,
    attrs: {
      icon: {
        msvg: iconStars,
        type: "large"
      }
    }
  },
  {
    name: "Option: before",
    component,
    attrs: {
      icon: {
        msvg: iconStars
      },
      before: m("div", {style: {"font-size": "16px", "line-height": "1rem"}}, "Before")
    }
  },
  {
    name: "Option: after",
    component,
    attrs: {
      icon: {
        msvg: iconStars
      },
      after: m("div", {style: {"font-size": "16px", "line-height": "1rem"}}, "After")
    }
  }
];
