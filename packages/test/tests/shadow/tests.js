import m from "mithril";
import { shadow as component } from "polythene-shadow";

const interactiveTest = {
  oninit: vnode =>
    vnode.state.z = 1,
  view: vnode => [
    m(".absolute.absolute--fill", {
      onclick: () => {
        const newZ = (vnode.state.z + 1) % 6;
        vnode.state.z = newZ;
      }
    }, "Click me"),
    m(component, {
      animated: true,
      z: vnode.state.z,
    })
  ]
};

export const tests = [
  {
    name: "Child node",
    component,
    attrs: {},
    children: ["Child"]
  },
  {
    name: "Option: content",
    component,
    attrs: {
      content: "Content"
    }
  },
  {
    name: "Add to a Mithril element",
    component: {
      view: () => [
        m("div", "Some element"),
        m(component)
      ]
    },
  },
  {
    name: "Interactive option: animated",
    interactive: true,
    exclude: true,
    component: interactiveTest
  },
  {
    name: "Option: z (0)",
    component,
    attrs: {
      z: 0
    }
  },
  {
    name: "Option: z (1)",
    component,
    attrs: {
      z: 1
    }
  },
  {
    name: "Option: z (2)",
    component,
    attrs: {
      z: 2
    }
  },
  {
    name: "Option: z (3)",
    component,
    attrs: {
      z: 3
    }
  },
  {
    name: "Option: z (4)",
    component,
    attrs: {
      z: 4
    }
  },
  {
    name: "Option: z (5)",
    component,
    attrs: {
      z: 5
    }
  },

  // Dark theme

  {
    name: "Interactive option: animated -- dark theme",
    interactive: true,
    class: "pe-dark-theme",
    component: interactiveTest
  },

];

