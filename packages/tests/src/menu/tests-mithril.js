import { renderer, Menu, List, ListTile } from "polythene-mithril";
import genericTests from "./tests-generic";
import sizesMenu from "./generic/sizes";
import simpleMenuComponent from "./mithril/simple";

const mithrilTests = ({ Menu, List, ListTile, renderer: h }) => {

  return [
    {
      section: "Mithril specific tests",
    },
    {
      name: "Simple menu",
      interactive: true,
      exclude: true,
      component: {
        view: () => h(simpleMenuComponent)
      }
    },
    {
      name: "Option: size",
      component: {
        view: () => h("div",
          [1.5, 2, 3, 4, 5, 6, 7, "auto"].map(size =>
            sizesMenu({ size, Menu, List, ListTile, h })
          )
        )
      }
    },
  ];
    
};

export default []
  .concat(genericTests({ Menu, List, ListTile, renderer }))
  .concat(mithrilTests({ Menu, List, ListTile, renderer }));
