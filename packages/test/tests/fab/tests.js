import m from "mithril";
import fab from "polythene-fab";
import icon from "polythene-icon";

import iconAlarm from "mmsvg/google/msvg/action/alarm-add";

fab.theme(".tests-fab-themed-fab", {
  color_light_background: "#2196F3",
  color_dark_background:  "#0097A7",
  color_light:            "#fff",
  color_dark:             "#B2EBF2"
});

export const tests = [
  {
    name: "Child node",
    component: fab,
    attrs: null,
    children: m(icon, {msvg: iconAlarm})
  },
  {
    name: "Option: icon",
    component: fab,
    attrs: {
      icon: {
        msvg: iconAlarm
      }
    }
  },
  {
    name: "Option: content",
    component: fab,
    attrs: {
      content: m(icon, {msvg: iconAlarm})
    }
  },
  {
    name: "Colored icon",
    component: fab,
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
    component: fab,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      class: "tests-fab-themed-fab"
    }
  },
  {
    name: "Option: style (colors)",
    component: fab,
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
    component: fab,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      mini: true
    }
  },
  {
    name: "Option: z (0)",
    component: fab,
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      z: 0
    }
  },
  {
    name: "Option: z (5)",
    component: fab,
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
    component: fab,
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
    component: fab,
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

  // Dark tone

  {
    name: "Option: icon -- dark theme class",
    component: fab,
    class: "pe-dark-tone",
    attrs: {
      icon: {
        msvg: iconAlarm
      }
    }
  },
  {
    name: "Themed FAB -- dark theme class",
    component: fab,
    class: "pe-dark-tone",
    attrs: {
      icon: {
        msvg: iconAlarm
      },
      class: "tests-fab-themed-fab"
    }
  },
  {
    name: "Dark tone class + light theme class",
    class: "pe-dark-tone",
    component: {
      view: () => m(".pe-light-tone", {
        style: { background: "#fff", padding: "10px" }
      }, [
        m(fab, {
          icon: {
            msvg: iconAlarm
          }
        }),
        m(fab, {
          icon: {
            msvg: iconAlarm
          },
          class: "tests-fab-themed-fab"
        })
      ])
    }
  },
  {
    name: "Dark tone class + light tone",
    class: "test-dark-theme",
    component: {
      view: () => m("div", {
        style: { background: "#fff", padding: "10px" }
      }, [
        m(fab, {
          icon: {
            msvg: iconAlarm
          },
          tint: "light"
        }),
        m(fab, {
          icon: {
            msvg: iconAlarm
          },
          class: "tests-fab-themed-fab",
          tint: "light"
        })
      ])
    }
  }
];
