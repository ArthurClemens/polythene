import m from "mithril";
import { button } from "polythene-button";

const component = button;

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
    name: "Option: label",
    component,
    attrs: {
      label: "Label"
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
    name: "Option: content",
    component,
    attrs: {
      content: m("div", "Content")
    }
  },
  {
    name: "Option: raised",
    component,
    attrs: {
      label: "Raised",
      raised: true
    }
  },
  {
    name: "Option: raised (with option z: 5)",
    component,
    attrs: {
      label: "Raised to 5",
      raised: true,
      z: 5
    }
  },
  {
    name: "Option: borders",
    component,
    attrs: {
      label: "Borders",
      class: "bordered-button",
      borders: true
    }
  },
  {
    name: "Option: wash (false)",
    component,
    attrs: {
      label: "No wash",
      wash: false
    }
  },
  {
    name: "Option: ink (false)",
    component,
    attrs: {
      label: "No ink",
      ink: false
    }
  },
  {
    name: "Option: disabled",
    component,
    attrs: {
      label: "Disabled",
      disabled: true
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
    name: "Option: formaction",
    component,
    attrs: {
      label: "Form action",
      formaction: "http://polythene.js.org"
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
  {
    name: "Option: href (with option oncreate)",
    interactive: true,
    component,
    attrs: {
      label: "Go to /#/shadow",
      href: "/shadow",
      oncreate: m.route.link
    }
  },
  {
    name: "Option: href (without option oncreate)",
    interactive: true,
    component,
    attrs: {
      label: "Go to /shadow",
      href: "/shadow"
    }
  },
  {
    name: "onbeforeupdate",
    interactive: true,
    component: {
      oninit: (vnode) => {
        vnode.state.updated = 0;
      },
      view: (vnode) => [
        m("div", `Updated: ${vnode.state.updated}`),
        m(component, {
          label: "Button",
          onbeforeupdate: () => vnode.state.updated++
        })
      ]
    }
  },
  {
    name: "Option: events (click)",
    interactive: true,
    component: {
      oninit: (vnode) => {
        vnode.state.clicked = 0;
      },
      view: (vnode) => [
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
    name: "Key down (after having focus) results in click",
    interactive: true,
    component: {
      oninit: (vnode) => {
        vnode.state.clickCount = 0;
      },
      view: (vnode) => [
        m("div", `onclick called: ${vnode.state.clickCount}`),
        m(component, {
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
  {
    name: "Option: inactivate (2)",
    interactive: true,
    component,
    attrs: {
      label: "Inactivated for 2s",
      inactivate: 2
    }
  },
  {
    name: "Option: animateOnTap (false)",
    interactive: true,
    component,
    attrs: {
      label: "No animate",
      raised: true,
      animateOnTap: false
    }
  }
];
