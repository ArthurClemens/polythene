import { renderer, svg } from "polythene-mithril";
import genericTests from "./tests-generic";
import iconStars from "mmsvg/google/msvg/action/stars";

const mithrilTests = ({ svg, renderer: h }) => {
  return [
    {
      name: "Child node (mmsvg)",
      component: svg,
      attrs: null,
      children: [iconStars]
    },
    {
      name: "Option: content (mmsvg)",
      component: svg,
      attrs: {
        content: iconStars
      },
    },
    {
      name: "Dark tone class + light theme class",
      className: "pe-dark-tone",
      component: {
        view: () =>
          h("div", {
            style: {
              background: "#fff",
              padding: "10px"
            },
            className: "pe-light-tone"
          }, h(svg, {content: iconStars}))
      }
    },
    {
      name: "Dark tone class + light tone",
      className: "test-dark-theme",
      component: {
        view: () =>
          h("div", {
            style: {
              background: "#fff",
              padding: "10px"
            },
          }, h(svg, {
            content: iconStars,
            tone: "light"
          }))
      }
    },
  ];
    
};

export default []
  .concat(genericTests({ svg, renderer }))
  .concat(mithrilTests({ svg, renderer }));
