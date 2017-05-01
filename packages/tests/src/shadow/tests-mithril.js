import { renderer, shadow } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = ({ shadow, renderer: h }) => {

  const interactiveTest = {
    oninit: vnode =>
      vnode.state.z = 1,
    view: vnode => [
      h(".absolute.absolute--fill", {
        onclick: () => {
          const newZ = (vnode.state.z + 1) % 6;
          vnode.state.z = newZ;
        }
      }, "Click me"),
      h(shadow, {
        animated: true,
        z: vnode.state.z,
      })
    ]
  };

  return [
    {
      name: "Add to a Mithril element",
      component: {
        view: () => [
          h("div", "Some element"),
          h(shadow)
        ]
      },
    },
    {
      name: "Interactive option: animated",
      interactive: true,
      exclude: true,
      component: interactiveTest
    },

    // Dark tone

    {
      name: "Interactive option: animated -- dark theme class",
      interactive: true,
      className: "pe-dark-tone",
      component: interactiveTest
    }
  ];
};

export default []
  .concat(genericTests({ shadow, renderer }))
  .concat(mithrilTests({ shadow, renderer }));
