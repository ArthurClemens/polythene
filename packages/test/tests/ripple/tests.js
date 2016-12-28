import m from "mithril";
import { ripple } from "polythene-ripple";

const component = ripple;

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
    name: "Option: disabled",
    interactive: true,
    component,
    attrs: {
      disabled: true
    }
  },
  {
    name: "Option: constrained (true)",
    interactive: true,
    component,
    attrs: {
      constrained: true
    }
  },
  {
    name: "Option: constrained (false)",
    interactive: true,
    component,
    attrs: {
      constrained: false
    }
  },
  {
    name: "Option: center",
    interactive: true,
    component,
    attrs: {
      center: true
    }
  },
  {
    name: "Option: initial opacity (0.5)",
    interactive: true,
    component,
    attrs: {
      initialOpacity: 0.5
    }
  },
  {
    name: "Option: initial opacityDecayVelocity (0.1)",
    interactive: true,
    component,
    attrs: {
      opacityDecayVelocity: 0.1
    }
  },
  {
    name: "Appended to an element",
    interactive: true,
    component: {
      view: () =>
        m("div",
          {
            style: {
              position: "relative",
              width: "100px",
              height: "100px",
            }
          },
          m(component)
        )
    }
  },
  {
    name: "Option: start (after click)",
    interactive: true,
    component: {
      oninit: (vnode) => {
        vnode.state.started = 0;
      },
      view: (vnode) => [
        m(component, {
          before: m("div", `start called: ${vnode.state.started}`),
          start: () => (vnode.state.started++, m.redraw())
        })
      ]
    }
  },
  {
    name: "Option: end (after click)",
    interactive: true,
    component: {
      oninit: (vnode) => {
        vnode.state.ended = 0;
      },
      view: (vnode) => [
        m(component, {
          before: m("div", `end called: ${vnode.state.ended}`),
          end: () => (vnode.state.ended++, m.redraw())
        })
      ]
    }
  }
];

