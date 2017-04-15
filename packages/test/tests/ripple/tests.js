import m from "mithril";
import ripple from "polythene-ripple";

ripple.theme(".tests-ripple-themed-ripple", {
  color_light:   "#F44336"
});

export const tests = [
  {
    name: "Option: constrained (true)",
    interactive: true,
    component: ripple,
    attrs: {
      constrained: true
    }
  },
  {
    name: "Option: constrained (false)",
    interactive: true,
    exclude: true,
    component: ripple,
    attrs: {
      constrained: false
    }
  },
  {
    name: "Option: center",
    interactive: true,
    exclude: true,
    component: ripple,
    attrs: {
      center: true
    }
  },
  {
    name: "Option: start opacity (0.5)",
    interactive: true,
    exclude: true,
    component: ripple,
    attrs: {
      startOpacity: 0.5
    }
  },
  {
    name: "Option: end opacity (0.1)",
    interactive: true,
    exclude: true,
    component: ripple,
    attrs: {
      endOpacity: 0.1
    }
  },
  {
    name: "Option: duration (3.0)",
    interactive: true,
    exclude: true,
    component: ripple,
    attrs: {
      duration: 3.0
    }
  },
  {
    name: "Option: initial opacityDecayVelocity (0.1)",
    interactive: true,
    exclude: true,
    component: ripple,
    attrs: {
      opacityDecayVelocity: 0.1
    }
  },
  {
    name: "Option: disabled",
    interactive: true,
    exclude: true,
    component: ripple,
    attrs: {
      disabled: true
    }
  },
  {
    name: "Option: style (color)",
    interactive: true,
    exclude: true,
    component: ripple,
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
    exclude: true,
    component: ripple,
    attrs: {
      class: "tests-ripple-themed-ripple",
      endOpacity: 1.0,
      persistent: true
    }
  },
  {
    name: "Appended to an element",
    interactive: true,
    exclude: true,
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
          m(ripple)
        )
    }
  },
  {
    name: "Option: start (after click)",
    interactive: true,
    exclude: true,
    component: {
      oninit: vnode =>
        vnode.state.started = 0,
      view: vnode => [
        m(ripple, {
          before: m("div", `start called: ${vnode.state.started}`),
          start: () => (vnode.state.started++, m.redraw())
        })
      ]
    }
  },
  {
    name: "Option: end (after click)",
    interactive: true,
    exclude: true,
    component: {
      oninit: vnode =>
        vnode.state.ended = 0,
      view: vnode => [
        m(ripple, {
          before: m("div", `end called: ${vnode.state.ended}`),
          end: () => (vnode.state.ended++, m.redraw())
        })
      ]
    }
  },

  // Dark theme

  {
    name: "Option: style (white) -- dark theme class",
    interactive: true,
    exclude: true,
    class: "pe-dark-theme",
    component: ripple,
    attrs: {
      constrained: true,
      style: {
        color: "#fff"
      }
    }
  },
  {
    name: "Dark theme class + light theme class",
    interactive: true,
    exclude: true,
    class: "pe-dark-theme",
    component: ripple,
    attrs: {
      constrained: true,
      style: {
        background: "#fff"
      },
      class: "pe-light-theme"
    }
  },
  {
    name: "Dark theme class + light tone",
    interactive: true,
    exclude: true,
    class: "test-dark-theme",
    component: ripple,
    attrs: {
      constrained: true,
      style: {
        background: "#fff"
      },
      tone: "light"
    }
  },
];

