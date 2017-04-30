
export default ({ ripple }) => {
  ripple.theme(".tests-ripple-themed-ripple", {
    color_light: "#F44336"
  });
  return [
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
        className: "tests-ripple-themed-ripple",
        endOpacity: 1.0,
        persistent: true
      }
    },
    

    // Dark tone

    {
      name: "Option: style (white) -- dark theme class",
      interactive: true,
      exclude: true,
      className: "pe-dark-tone",
      component: ripple,
      attrs: {
        constrained: true,
        style: {
          color: "#fff"
        }
      }
    },
    {
      name: "Dark tone class + light theme class",
      interactive: true,
      exclude: true,
      className: "pe-dark-tone",
      component: ripple,
      attrs: {
        constrained: true,
        style: {
          background: "#fff"
        },
        className: "pe-light-tone"
      }
    },
    {
      name: "Dark tone class + light tone",
      interactive: true,
      exclude: true,
      className: "test-dark-theme",
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
};

