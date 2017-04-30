import { renderer, ripple } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = ({ ripple, renderer: h }) => {
  return [
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
            h(ripple)
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
          h(ripple, {
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
          h(ripple, {
            before: h("div", `end called: ${vnode.state.ended}`),
            end: () => (vnode.state.ended++, h.redraw())
          })
        ]
      }
    },
  ];
};

export default []
  .concat(genericTests({ ripple, renderer }))
  .concat(mithrilTests({ ripple, renderer }));
