import m from "mithril";
import { fab as component} from "polythene-fab";
import { icon } from "polythene-icon";

import iconAlarm from "mmsvg/google/msvg/action/alarm-add";

component.theme(".tests-fab-themed-fab", {
  color_light_background: "#2196F3",
  color_dark_background:  "#0097A7",
  color_light:            "#fff",
  color_dark:             "#B2EBF2"
});

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
    name: "Themed FAB (colors)",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      class: "tests-fab-themed-fab"
    }
  },
  {
    name: "Option: style (colors)",
    component,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      style: {
        color: "#FFCCBC",
        backgroundColor: "#4E342E"
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
    exclude: true,
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
  {
    name: "Themed FAB -- dark theme",
    component,
    class: "pe-dark-theme",
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      class: "tests-fab-themed-fab"
    }
  },
];
