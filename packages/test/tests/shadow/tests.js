import m from "mithril";
import shadow from "polythene-shadow";

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
    m(shadow, {
      animated: true,
      z: vnode.state.z,
    })
  ]
};

export const tests = [
  {
    name: "Child node",
    component: shadow,
    attrs: {},
    children: ["Child"]
  },
  {
    name: "Option: content",
    component: shadow,
    attrs: {
      content: "Content"
    }
  },
  {
    name: "Add to a Mithril element",
    component: {
      view: () => [
        m("div", "Some element"),
        m(shadow)
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
    component: shadow,
    attrs: {
      z: 0
    }
  },
  {
    name: "Option: z (1)",
    component: shadow,
    attrs: {
      z: 1
    }
  },
  {
    name: "Option: z (2)",
    component: shadow,
    attrs: {
      z: 2
    }
  },
  {
    name: "Option: z (3)",
    component: shadow,
    attrs: {
      z: 3
    }
  },
  {
    name: "Option: z (4)",
    component: shadow,
    attrs: {
      z: 4
    }
  },
  {
    name: "Option: z (5)",
    component: shadow,
    attrs: {
      z: 5
    }
  },

  // Dark tone

  {
    name: "Interactive option: animated -- dark theme class",
    interactive: true,
    class: "pe-dark-tone",
    component: interactiveTest
  }

];

