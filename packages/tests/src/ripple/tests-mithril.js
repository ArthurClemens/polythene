import { Ripple } from "polythene-mithril";
import { h } from "cyano-mithril";
import genericTests from "./tests-generic";

const mithrilTests = ({ Ripple, h }) => {
  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Appended to an element",
      interactive: true,
      exclude: true,
      component: {
        view: () =>
          h("div",
            {
              style: {
                position: "relative",
                width: "100px",
                height: "100px",
              }
            },
            h(Ripple)
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
          h(Ripple, {
            before: h("div", `start called: ${vnode.state.started}`),
            start: () => (vnode.state.started++, h.redraw())
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
          h(Ripple, {
            before: h("div", `end called: ${vnode.state.ended}`),
            end: () => (vnode.state.ended++, h.redraw())
          })
        ]
      }
    },
  ];
};

export default []
  .concat(genericTests({ Ripple, h }))
  .concat(mithrilTests({ Ripple, h }));
