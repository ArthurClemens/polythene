import { renderer, Shadow } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = ({ Shadow, renderer: h }) => {

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
      h(Shadow, {
        animated: true,
        z: vnode.state.z,
      })
    ]
  };

  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Add to a Mithril element",
      component: {
        view: () => [
          h("div", "Some element"),
          h(Shadow)
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
      name: "Interactive option: animated -- dark tone class",
      interactive: true,
      className: "pe-dark-tone",
      component: interactiveTest
    }
  ];
};

export default []
  .concat(genericTests({ Shadow, renderer }))
  .concat(mithrilTests({ Shadow, renderer }));
