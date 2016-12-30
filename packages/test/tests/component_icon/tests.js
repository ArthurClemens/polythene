import m from "mithril";
import { icon } from "polythene-icon";
import iconStars from "mmsvg/google/msvg/action/stars";

const component = icon;
const svgString = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z\"/></svg>";
const trustedSvg = m.trust(svgString);

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
    name: "Option: src",
    component,
    attrs: {
      src: "img/ic_arrow_back_black_18dp.png"
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

