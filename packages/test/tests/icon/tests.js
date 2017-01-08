import m from "mithril";
import { icon as component } from "polythene-icon";
import { svg } from "polythene-svg";
import iconStars from "mmsvg/google/msvg/action/stars";

const trustedSvg = m.trust("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z\"/></svg>");

export const tests = [
  {
    name: "Child node (svg children mmsvg)",
    component,
    attrs: null,
    children: m(svg, [iconStars])
  },
  {
    name: "Option: content",
    component,
    attrs: {
      content: iconStars
    }
  },
  {
    name: "Option: content (svg trusted content)",
    component,
    attrs: {
      svg: {
        content: trustedSvg
      }
    }
  },
  {
    name: "Option: content (svg content mmsvg)",
    component,
    attrs: {
      svg: {
        content: iconStars
      }
    }
  },
  {
    name: "Option: msvg",
    component,
    attrs: {
      msvg: iconStars
    }
  },
  {
    name: "Option: src (image file)",
    component,
    attrs: {
      src: "img/arrow-back.png"
    }
  },
  {
    name: "Option: src (svg file)",
    component,
    attrs: {
      src: "img/arrow-back.svg"
    }
  },
  {
    name: "Colored",
    component,
    attrs: {
      msvg: iconStars,
      style: {
        color: "red"
      }
    }
  },
  {
    name: "Option: type (small)",
    component,
    attrs: {
      msvg: iconStars,
      type: "small"
    }
  },
  {
    name: "Option: type (regular)",
    component,
    attrs: {
      msvg: iconStars,
      type: "regular"
    }
  },
  {
    name: "Option: type (medium)",
    component,
    attrs: {
      msvg: iconStars,
      type: "medium"
    }
  },
  {
    name: "Option: type (large)",
    component,
    attrs: {
      msvg: iconStars,
      type: "large"
    }
  },
  {
    name: "Option: avatar (type large)",
    component,
    attrs: {
      src: "http://arthurclemens.github.io/assets/polythene/examples/avatar-1.png",
      avatar: true,
      type: "large"
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
  {
    name: "Option: before",
    component,
    attrs: {
      msvg: iconStars,
      before: m("div", {style: {"font-size": "16px", "line-height": "1rem"}}, "Before")
    }
  },
  {
    name: "Option: after",
    component,
    attrs: {
      msvg: iconStars,
      after: m("div", {style: {"font-size": "16px", "line-height": "1rem"}}, "After")
    }
  }
];

