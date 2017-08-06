const iconAlarm = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z\"/></svg>";

export default ({ FAB, Icon, renderer: h }) => {

  const trustedIconAlarm = h.trust(iconAlarm);
  FAB.theme(".tests-fab-themed-fab", {
    color_light_background: "#fff",
    color_dark_background:  "#0097A7",
    color_light:            "#2196F3",
    color_dark:             "#B2EBF2"
  });

  return [
    {
      name: "Child node",
      component: FAB,
      attrs: null,
      children: h(Icon, { svg: { content: trustedIconAlarm } })
    },
    {
      name: "Option: icon",
      component: FAB,
      attrs: {
        icon: {
          svg: { content: trustedIconAlarm }
        }
      }
    },
    {
      name: "Option: content",
      component: FAB,
      attrs: {
        content: h(Icon, { svg: { content: trustedIconAlarm } })
      }
    },
    {
      name: "Themed FAB (colors)",
      component: FAB,
      attrs: {
        icon: {
          svg: { content: trustedIconAlarm }
        },
        className: "tests-fab-themed-fab"
      }
    },
    {
      name: "Option: style (colors)",
      component: FAB,
      attrs: {
        icon: {
          svg: { content: trustedIconAlarm }
        },
        style: {
          color: "#FFCCBC",
          backgroundColor: "#4E342E"
        }
      }
    },
    {
      name: "Option: mini",
      component: FAB,
      attrs: {
        icon: {
          svg: { content: trustedIconAlarm }
        },
        mini: true
      }
    },
    {
      name: "Option: z (0)",
      component: FAB,
      attrs: {
        icon: {
          svg: { content: trustedIconAlarm }
        },
        z: 0
      }
    },
    {
      name: "Option: z (5)",
      component: FAB,
      attrs: {
        icon: {
          svg: { content: trustedIconAlarm }
        },
        z: 5
      }
    },
    {
      name: "Option: animateOnTap (false)",
      interactive: true,
      exclude: true,
      component: FAB,
      attrs: {
        icon: {
          svg: { content: trustedIconAlarm }
        },
        animateOnTap: false
      }
    },

    // Dark tone

    {
      name: "Option: icon -- dark tone class",
      component: FAB,
      className: "pe-dark-tone",
      attrs: {
        icon: {
          svg: { content: trustedIconAlarm }
        }
      }
    },
    {
      name: "Themed FAB -- dark tone class",
      component: FAB,
      className: "pe-dark-tone",
      attrs: {
        icon: {
          svg: { content: trustedIconAlarm }
        },
        className: "tests-fab-themed-fab"
      }
    },
  ];
};
