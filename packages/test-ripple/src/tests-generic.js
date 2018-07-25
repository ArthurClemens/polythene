import { RippleCSS } from "polythene-css";

export default ({ Ripple }) => {

  RippleCSS.addStyle(".tests-ripple-themed-ripple", {
    color_light: "#F44336"
  });

  return [
    {
      name: "No options",
      interactive: true,
      component: Ripple
    },
    {
      name: "Option: unconstrained",
      interactive: true,
      exclude: true,
      component: Ripple,
      attrs: {
        unconstrained: true
      }
    },
    {
      name: "Option: center",
      interactive: true,
      exclude: true,
      component: Ripple,
      attrs: {
        center: true
      }
    },
    {
      name: "Option: start opacity (0.5)",
      interactive: true,
      exclude: true,
      component: Ripple,
      attrs: {
        startOpacity: 0.5
      }
    },
    {
      name: "Option: end opacity (1)",
      interactive: true,
      exclude: true,
      component: Ripple,
      attrs: {
        endOpacity: 1
      }
    },
    {
      name: "Option: duration (3.0)",
      interactive: true,
      exclude: true,
      component: Ripple,
      attrs: {
        duration: 3.0
      }
    },
    {
      name: "Option: multi, duration",
      interactive: true,
      exclude: true,
      component: Ripple,
      attrs: {
        multi: true,
        duration: 1.5
      }
    },
    {
      name: "Option: initial opacityDecayVelocity (0.1)",
      interactive: true,
      exclude: true,
      component: Ripple,
      attrs: {
        opacityDecayVelocity: 0.1
      }
    },
    {
      name: "Option: disabled",
      interactive: true,
      exclude: true,
      component: Ripple,
      attrs: {
        disabled: true
      }
    },
    {
      name: "Option: style (color)",
      interactive: true,
      exclude: true,
      component: Ripple,
      attrs: {
        startOpacity: 0.7,
        style: {
          color: "#2196F3"
        }
      }
    },
    {
      name: "Themed (end with permanent red)",
      interactive: true,
      exclude: true,
      component: Ripple,
      attrs: {
        className: "tests-ripple-themed-ripple",
        endOpacity: 1.0,
        persistent: true
      }
    },
    

    {
      section: "Dark tone",
    },
    {
      name: "Option: style (white) -- dark tone class",
      interactive: true,
      exclude: true,
      className: "pe-dark-tone",
      component: Ripple,
      attrs: {
        style: {
          color: "#fff"
        }
      }
    },
    {
      name: "Dark tone class + light tone class",
      interactive: true,
      exclude: true,
      className: "pe-dark-tone",
      component: Ripple,
      attrs: {
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
      className: "test-dark-tone",
      component: Ripple,
      attrs: {
        style: {
          background: "#fff"
        },
        tone: "light"
      }
    },
  ];
};

