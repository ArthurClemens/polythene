import m from "mithril";
import { shadow } from "polythene-shadow";
import { rules as css } from "../../src/styles";

const component = shadow;

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
    name: "Option: element",
    component,
    attrs: {
      element: "dl"
    }
  },
  {
    name: "Option: content",
    component,
    attrs: {
      content: m("div", "CONTENT")
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
    component: {
      oninit: (vnode) => {
        vnode.state.z = 1;
      },
      oncreate: (vnode) => {
        vnode.dom.addEventListener("click", () => {
          const newZ = (vnode.state.z + 1) % 6;
          vnode.state.z = newZ;
          m.redraw();
        });
      },
      view: (vnode) => [
        m(css.content, "Click me"),
        m(component, {
          animated: true,
          z: vnode.state.z,
        })
      ]
    }
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
  }
];

