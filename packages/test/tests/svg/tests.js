import m from "mithril";
import svg from "polythene-svg";
import iconStars from "mmsvg/google/msvg/action/stars";

const svgString = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";
const trustedSvg = m.trust(svgString);

svg.theme(".tests-svg-themed-svg", {
  color_light: "#0D47A1",
  color_dark: "orange"
});


export const tests = [
  {
    name: "Child node (trusted svg)",
    component: svg,
    attrs: null,
    children: [trustedSvg]
  },
  {
    name: "Child node (mmsvg)",
    component: svg,
    attrs: null,
    children: [iconStars]
  },
  {
    name: "Option: content (trusted svg)",
    component: svg,
    attrs: {
      content: trustedSvg
    },
  },
  {
    name: "Option: content (mmsvg)",
    component: svg,
    attrs: {
      content: iconStars
    },
  },
  {
    name: "Option: style (color)",
    component: svg,
    attrs: {
      content: iconStars,
      style: {
        color: "#EF6C00"
      }
    }
  },
  {
    name: "Themed (color)",
    component: svg,
    attrs: {
      content: iconStars,
      class: "tests-svg-themed-svg"
    }
  },

  // Dark theme

  {
    name: "Option: content (mmsvg)",
    class: "pe-dark-theme",
    component: svg,
    attrs: {
      content: iconStars
    },
  },
  {
    name: "Themed (color)",
    component: svg,
    class: "pe-dark-theme",
    attrs: {
      content: iconStars,
      class: "tests-svg-themed-svg"
    }
  },
  {
    name: "Dark theme + light theme",
    interactive: true,
    class: "pe-dark-theme",
    component: {
      view: () =>
        m("div", {
          style: {
            background: "#fff",
            padding: "10px"
          },
          class: "pe-light-theme"
        }, m(svg, {content: iconStars}))
    }
  },
];

