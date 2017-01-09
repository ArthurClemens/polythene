import m from "mithril";
import { svg as component } from "polythene-svg";
import iconStars from "mmsvg/google/msvg/action/stars";

const svgString = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";
const trustedSvg = m.trust(svgString);

export const tests = [
  {
    name: "Child node (trusted svg)",
    component,
    attrs: null,
    children: [trustedSvg]
  },
  {
    name: "Child node (mmsvg)",
    component,
    attrs: null,
    children: [iconStars]
  },
  {
    name: "Option: content (trusted svg)",
    component,
    attrs: {
      content: trustedSvg
    },
  },
  {
    name: "Option: content (mmsvg)",
    component,
    attrs: {
      content: iconStars
    },
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
      element: "a",
      content: m.trust("<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"></svg>")
    }
  },
  {
    name: "Option: before",
    component,
    attrs: {
      content: iconStars,
      before: m("span", "Before")
    }
  },
  {
    name: "Option: after",
    component,
    attrs: {
      content: iconStars,
      after: m("span", "After")
    }
  }
];

