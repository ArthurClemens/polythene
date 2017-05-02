import { renderer, icon, svg } from "polythene-mithril";
import genericTests from "./tests-generic";
import iconStars from "mmsvg/google/msvg/action/stars";
import wrenchSvg from "mmsvg/zondicons/msvg/wrench";

const mithrilTests = ({ icon, renderer: h }) => {
  return [
    {
      name: "Option: msvg",
      component: icon,
      attrs: {
        msvg: iconStars
      }
    },
    {
      name: "Option: style",
      component: icon,
      attrs: {
        msvg: iconStars,
        style: {
          color: "#EF6C00"
        }
      }
    },
    {
      name: "Themed (color and size)",
      component: icon,
      attrs: {
        msvg: iconStars,
        className: "tests-icon-themed-icon"
      }
    },
    {
      name: "Option: type (small)",
      component: icon,
      attrs: {
        msvg: iconStars,
        type: "small"
      }
    },
    {
      name: "Option: type (regular)",
      component: icon,
      attrs: {
        msvg: iconStars,
        type: "regular"
      }
    },
    {
      name: "Option: type (medium)",
      component: icon,
      attrs: {
        msvg: iconStars,
        type: "medium"
      }
    },
    {
      name: "Option: type (large)",
      component: icon,
      attrs: {
        msvg: iconStars,
        type: "large"
      }
    },
    {
      name: "Option: msvg (Zondicons)",
      component: icon,
      attrs: {
        msvg: wrenchSvg
      }
    },
    {
      name: "Themed (color and size) -- dark theme class",
      component: icon,
      className: "pe-dark-tone",
      attrs: {
        msvg: iconStars,
        className: "tests-icon-themed-icon"
      }
    },
    {
      name: "Dark tone class + light theme class",
      className: "pe-dark-tone",
      component: {
        view: () => h(".pe-light-tone", {
          style: { background: "#fff" }
        }, [
          h(icon, {
            msvg: iconStars
          }),
          h(icon, {
            msvg: iconStars,
            className: "tests-icon-themed-icon"
          })
        ])
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-theme",
      component: {
        view: () => h("div", {
          style: { background: "#fff" }
        }, [
          h(icon, {
            msvg: iconStars,
            tone: "light"
          }),
          h(icon, {
            msvg: iconStars,
            tone: "light",
            className: "tests-icon-themed-icon"
          })
        ])
      }
    }
  ];
};

export default []
  .concat(genericTests({ icon, svg, renderer }))
  .concat(mithrilTests({ icon, svg, renderer }));
