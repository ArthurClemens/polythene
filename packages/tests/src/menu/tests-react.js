import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, Menu, List, ListTile } from "polythene-react";
import genericTests from "./tests-generic";
import sizesMenu from "./generic/sizes";
import SimpleMenuComponent from "./react/simple";

const reactTests = ({ Menu, List, ListTile, renderer: h }) => {

  return [
    {
      section: "React specific tests",
    },
    {
      name: "Simple menu",
      interactive: true,
      exclude: true,
      component: () =>
        h(SimpleMenuComponent)
    },
    {
      name: "Option: size",
      component: () =>
        h("div", null, [1.5, 2, 3, 4, 5, 6, 7, "auto"].map(size => sizesMenu({ size, Menu, List, ListTile, h})))
    },
  ];
    
};

export default []
  .concat(genericTests({ Menu, List, ListTile, renderer }))
  .concat(reactTests({ Menu, List, ListTile, renderer }));
