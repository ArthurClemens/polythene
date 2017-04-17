import m from "mithril";
import raisedButton from "polythene-raised-button";

raisedButton.theme(".tests-raised-button-themed-button", {
  color_light_background: "#FF1744",
  color_light_text: "#fff"
});

export const tests = [
  {
    name: "Option: label",
    component: raisedButton,
    attrs: {
      label: "Label"
    }
  },
  {
    name: "Option: raised (with option z: 2)",
    component: raisedButton,
    attrs: {
      label: "Raised to 2",
      z: 2
    }
  },
  {
    name: "Option: raised (with option z: 5)",
    component: raisedButton,
    attrs: {
      label: "Raised to 5",
      z: 5
    }
  },
  {
    name: "Themed button (should be red)",
    component: raisedButton,
    attrs: {
      label: "Themed button",
      class: "tests-raised-button-themed-button"
    }
  },
  {
    name: "Themed button (with option disabled)",
    component: raisedButton,
    attrs: {
      label: "Disabled themed button",
      class: "tests-raised-button-themed-button",
      disabled: true
    }
  },
  {
    name: "Option: style (colors)",
    component: raisedButton,
    attrs: {
      label: "Styled",
      style: {
        backgroundColor: "#EF6C00",
        color: "#fff"
      }
    }
  },
  {
    name: "Option: wash (false)",
    interactive: true,
    component: raisedButton,
    attrs: {
      label: "No wash",
      wash: false
    }
  },
  {
    name: "Option: ink (false)",
    interactive: true,
    component: raisedButton,
    attrs: {
      label: "No ink",
      ink: false
    }
  },
  {
    name: "Option: disabled (true)",
    interactive: true,
    component: raisedButton,
    attrs: {
      label: "Disabled",
      disabled: true
    }
  },
  {
    name: "Option: disabled (false)",
    interactive: true,
    component: raisedButton,
    attrs: {
      label: "Not disabled",
      disabled: false
    }
  },
  {
    name: "Option: animateOnTap (false)",
    interactive: true,
    component: raisedButton,
    attrs: {
      label: "Don't animate shadow",
      animateOnTap: false
    }
  },
  {
    name: "Option: selected",
    component: raisedButton,
    attrs: {
      label: "Selected",
      selected: true
    }
  },
  {
    name: "Option: url (with oncreate)",
    interactive: true,
    component: raisedButton,
    attrs: {
      label: "Go to /#/shadow",
      url: {
        href: "/shadow",
        oncreate: m.route.link
      }
    }
  },
  {
    name: "Option: events (onclick)",
    interactive: true,
    exclude: true,
    component: {
      oninit: vnode =>
        vnode.state.clicked = 0,
      view: vnode => [
        m("div", `onclick called: ${vnode.state.clicked}`),
        m(raisedButton, {
          label: "Button",
          events: {
            onclick: () => vnode.state.clicked++
          }
        })
      ]
    }
  },
  {
    name: "Option: inactive (false)",
    interactive: true,
    component: raisedButton,
    attrs: {
      label: "Not inactive",
      inactive: false
    }
  },
  {
    name: "Option: inactive (true)",
    interactive: true,
    component: raisedButton,
    attrs: {
      label: "Inactive",
      inactive: true
    }
  },

  // Dark tone

  {
    name: "Option: label -- dark theme class (should be app's primary color)",
    component: raisedButton,
    class: "pe-dark-tone",
    attrs: {
      label: "Label"
    }
  },

  {
    name: "Option: disabled -- dark theme class",
    component: raisedButton,
    class: "pe-dark-tone",
    attrs: {
      label: "Label",
      disabled: true
    }
  },
  {
    name: "Dark tone class + light theme class",
    class: "pe-dark-tone",
    component: {
      view: () => m(".pe-light-tone", {
        style: { background: "#fff" }
      }, [
        m(raisedButton, {
          label: "Normal"
        }),
        m(raisedButton, {
          label: "Disabled",
          disabled: true
        }),
        m(raisedButton, {
          label: "Theme",
          class: "tests-raised-button-themed-button"
        })
      ])
    }
  },
  {
    name: "Dark tone class + light tone",
    class: "pe-dark-tone",
    component: {
      view: () => m("div", {
        style: { background: "#fff" }
      }, [
        m(raisedButton, {
          label: "Normal",
          tone: "light"
        }),
        m(raisedButton, {
          label: "Disabled",
          disabled: true,
          tone: "light"
        }),
        m(raisedButton, {
          label: "Theme",
          class: "tests-raised-button-themed-button",
          tone: "light"
        })
      ])
    }
  }
];
