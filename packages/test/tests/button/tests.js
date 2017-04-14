import m from "mithril";
import button from "polythene-button";

button.theme(".tests-button-themed-button", {
  color_light_background: "#2196F3",
  color_dark_background: "#2196F3",
  color_light_text: "#fff"
});

button.theme(".blue-on-dark-button", {
  color_dark_text: "#2196F3"
});

button.theme(".tests-button-bordered-button", {
  color_light_text: "#673ab7",
  color_light_border: "#673ab7",
  color_dark_text: "yellow",
  color_dark_border: "yellow"
});

export const tests = [
  {
    name: "Option: label",
    component: button,
    attrs: {
      label: "Label"
    }
  },
  {
    name: "Themed button: (option: borders)",
    component: button,
    attrs: {
      label: "Borders",
      class: "tests-button-bordered-button",
      borders: true
    }
  },
  {
    name: "Themed button (colors)",
    component: button,
    attrs: {
      label: "Themed button",
      class: "tests-button-themed-button"
    }
  },
  {
    name: "Option: style (colors)",
    component: button,
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
    component: button,
    attrs: {
      label: "No wash",
      wash: false
    }
  },
  {
    name: "Option: ink (false)",
    interactive: true,
    component: button,
    attrs: {
      label: "No ink",
      ink: false
    }
  },
  {
    name: "Option: disabled (true)",
    interactive: true,
    component: button,
    attrs: {
      label: "Disabled",
      disabled: true
    }
  },
  {
    name: "Option: disabled (false)",
    interactive: true,
    component: button,
    attrs: {
      label: "Not disabled",
      disabled: false
    }
  },
  {
    name: "Option: selected",
    component: button,
    attrs: {
      label: "Selected",
      selected: true
    }
  },
  {
    name: "Option: formaction",
    component: button,
    attrs: {
      label: "Form action",
      formaction: "http://polythene.js.org"
    }
  },
  {
    name: "Option: url (with oncreate)",
    interactive: true,
    component: button,
    attrs: {
      label: "Go to /#/shadow",
      url: {
        href: "/shadow",
        oncreate: m.route.link
      }
    }
  },
  {
    name: "Option: url (without oncreate)",
    interactive: true,
    component: button,
    attrs: {
      label: "Go to /shadow",
      url: {
        href: "/shadow"
      }
    }
  },
  {
    name: "onbeforeupdate",
    interactive: true,
    exclude: true,
    component: {
      oninit: vnode =>
        vnode.state.updated = 0,
      view: vnode => [
        m("div", `Updated: ${vnode.state.updated}`),
        m(button, {
          label: "Button",
          onbeforeupdate: () => vnode.state.updated++
        })
      ]
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
        m(button, {
          label: "Button",
          events: {
            onclick: () => vnode.state.clicked++
          }
        })
      ]
    }
  },
  {
    name: "Key down (after having focus) results in click",
    interactive: true,
    exclude: true,
    component: {
      oninit: vnode =>
        vnode.state.clickCount = 0,
      view: vnode => [
        m("div", `onclick called: ${vnode.state.clickCount}`),
        m(button, {
          label: "Button",
          events: {
            onclick: () => vnode.state.clickCount++
          }
        })
      ]
    }
  },
  {
    name: "Option: inactive (false)",
    interactive: true,
    component: button,
    attrs: {
      label: "Not inactive",
      inactive: false
    }
  },
  {
    name: "Option: inactive (true)",
    interactive: true,
    component: button,
    attrs: {
      label: "Inactive",
      inactive: true
    }
  },
  {
    name: "Option: inactivate (2)",
    interactive: true,
    component: button,
    attrs: {
      label: "Inactivated for 2s",
      inactivate: 2
    }
  },

  // Dark theme
  
  {
    name: "Option: label -- dark theme",
    class: "pe-dark-theme",
    component: button,
    attrs: {
      label: "Label"
    }
  },
  {
    name: "Themed button -- dark theme",
    class: "pe-dark-theme",
    component: button,
    attrs: {
      label: "Themed button",
      class: "tests-button-themed-button"
    }
  },
  {
    name: "Themed button blue on dark -- dark theme",
    class: "pe-dark-theme",
    component: button,
    attrs: {
      label: "Blue on dark button",
      class: "blue-on-dark-button"
    }
  },
  {
    name: "Themed button: (option: borders) -- dark theme",
    class: "pe-dark-theme",
    component: button,
    attrs: {
      label: "Borders dark theme",
      class: "tests-button-bordered-button",
      borders: true
    }
  },
  {
    name: "Dark theme + light theme",
    class: "pe-dark-theme",
    component: {
      view: () => m(".pe-light-theme", {
        style: { background: "#fff" }
      }, [
        m(button, {
          label: "Normal"
        }),
        m(button, {
          label: "Disabled",
          disabled: true
        }),
        m(button, {
          label: "Theme",
          class: "tests-button-themed-button"
        })
      ])
    }
  }
];
