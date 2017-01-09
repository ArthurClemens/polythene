import m from "mithril";
import { fab as component} from "polythene-fab";
import { icon } from "polythene-icon";

import iconAlarm from "mmsvg/google/msvg/action/alarm-add";

export const tests = [
  {
    name: "Child node",
    component,
    attrs: null,
    children: m(icon, {msvg: iconAlarm})
  },
  {
    name: "Option: icon",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      }
    }
  },
  {
    name: "Option: content",
    component,
    attrs: {
      content: m(icon, {msvg: iconAlarm})
    }
  },
  {
    name: "Colored icon",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      style: {
        color: "#333"
      }
    }
  },
  {
    name: "Option: style (should be red)",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      style: {
        "background-color": "red"
      }
    }
  },
  {
    name: "Option: mini",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      mini: true
    }
  },
  {
    name: "Option: z (0)",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      z: 0
    }
  },
  {
    name: "Option: z (5)",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      z: 5
    }
  },
  {
    name: "Option: animateOnTap (false)",
    interactive: true,
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      animateOnTap: false
    }
  },
  {
    name: "Option: url",
    interactive: true,
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      url: {
        href: "/shadow",
        oncreate: m.route.link
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
    name: "Option: before",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      before: m("div", {style: {"font-size": "16px", "line-height": "1rem"}}, "Before")
    }
  },
  {
    name: "Option: after",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      after: m("div", {style: {"font-size": "16px", "line-height": "1rem"}}, "After")
    }
  },

  // Dark theme

  {
    name: "Option: icon -- dark theme",
    component,
    class: "pe-dark-theme",
    attrs: {
      icon: {
        msvg: iconAlarm
      }
    }
  },
];
