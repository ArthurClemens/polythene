import m from "mithril";
import { ripple as component } from "polythene-ripple";

component.theme(".tests-ripple-themed-ripple", {
  color_light:   "#F44336"
});

export const tests = [
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
    name: "Option: start opacity (0.5)",
    interactive: true,
    component,
    attrs: {
      startOpacity: 0.5
    }
  },
  {
    name: "Option: end opacity (0.1)",
    interactive: true,
    component,
    attrs: {
      endOpacity: 0.1
    }
  },
  {
    name: "Option: duration (3.0)",
    interactive: true,
    component,
    attrs: {
      duration: 3.0
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
    name: "Option: disabled",
    interactive: true,
    component,
    attrs: {
      disabled: true
    }
  },
  {
    name: "Option: style (blue)",
    interactive: true,
    component,
    attrs: {
      startOpacity: 0.7,
      style: {
        color: "#2196F3"
      }
    }
  },
  {
    name: "Themed (should be red and permanent)",
    interactive: true,
    component,
    attrs: {
      class: "tests-ripple-themed-ripple",
      endOpacity: 1.0,
      persistent: true
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
      oninit: vnode =>
        vnode.state.started = 0,
      view: vnode => [
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
      oninit: vnode =>
        vnode.state.ended = 0,
      view: vnode => [
        m(component, {
          before: m("div", `end called: ${vnode.state.ended}`),
          end: () => (vnode.state.ended++, m.redraw())
        })
      ]
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
    name: "Option: element",
    component,
    attrs: {
      element: "a"
    }
  },

  // Dark theme

  {
    name: "Option: style (white) -- dark theme",
    interactive: true,
    class: "pe-dark-theme",
    component,
    attrs: {
      constrained: true,
      style: {
        color: "#fff"
      }
    }
  },
];

