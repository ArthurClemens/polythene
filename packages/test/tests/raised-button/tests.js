import m from "mithril";
import { raisedButton as component } from "polythene-raised-button";

component.theme(".tests-raised-button-themed-button", {
  color_light_background: "#FF1744",
  color_light_text: "#fff"
});

export const tests = [
  {
    name: "Option: label",
    component,
    attrs: {
      label: "Label"
    }
  },
  {
    name: "Option: content",
    component,
    attrs: {
      content: m("div", "Content")
    }
  },
  {
    name: "Child node",
    component,
    attrs: {},
    children: ["Child"]
  },
  {
    name: "Option: raised (with option z: 2)",
    component,
    attrs: {
      label: "Raised to 2",
      z: 2
    }
  },
  {
    name: "Option: raised (with option z: 5)",
    component,
    attrs: {
      label: "Raised to 5",
      z: 5
    }
  },
  {
    name: "Themed button (should be red)",
    component,
    attrs: {
      label: "Themed button",
      class: "tests-raised-button-themed-button"
    }
  },
  {
    name: "Themed button (with option disabled)",
    component,
    attrs: {
      label: "Disabled themed button",
      class: "tests-raised-button-themed-button",
      disabled: true
    }
  },
  {
    name: "Option: wash (false)",
    interactive: true,
    component,
    attrs: {
      label: "No wash",
      wash: false
    }
  },
  {
    name: "Option: ink (false)",
    interactive: true,
    component,
    attrs: {
      label: "No ink",
      ink: false
    }
  },
  {
    name: "Option: disabled (true)",
    interactive: true,
    component,
    attrs: {
      label: "Disabled",
      disabled: true
    }
  },
  {
    name: "Option: disabled (false)",
    interactive: true,
    component,
    attrs: {
      label: "Not disabled",
      disabled: false
    }
  },
  {
    name: "Option: animateOnTap (false)",
    interactive: true,
    component,
    attrs: {
      label: "Don't animate shadow",
      animateOnTap: false
    }
  },
  {
    name: "Option: selected",
    component,
    attrs: {
      label: "Selected",
      selected: true
    }
  },
  {
    name: "Option: url (with oncreate)",
    interactive: true,
    component,
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
    component: {
      oninit: vnode =>
        vnode.state.clicked = 0,
      view: vnode => [
        m("div", `onclick called: ${vnode.state.clicked}`),
        m(component, {
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
    component,
    attrs: {
      label: "Not inactive",
      inactive: false
    }
  },
  {
    name: "Option: inactive (true)",
    interactive: true,
    component,
    attrs: {
      label: "Inactive",
      inactive: true
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
    name: "Option: element (button)",
    component,
    attrs: {
      label: "button element",
      element: "button"
    }
  },
  {
    name: "Option: before",
    component,
    attrs: {
      label: "Button",
      before: m("span", "Before")
    }
  },
  {
    name: "Option: after",
    component,
    attrs: {
      label: "Button",
      after: m("span", "After")
    }
  },

  // Dark theme

  {
    name: "Option: label -- dark theme (should be app's primary color)",
    component,
    class: "pe-dark-theme",
    attrs: {
      label: "Label"
    }
  },

  {
    name: "Option: disabled -- dark theme",
    component,
    class: "pe-dark-theme",
    attrs: {
      label: "Label",
      disabled: true
    }
  },
];
