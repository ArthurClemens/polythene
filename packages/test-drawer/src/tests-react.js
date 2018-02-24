import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = () => {

  return [

  ];
};

export default []
  .concat(genericTests({ renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton }))
  .concat(reactTests({ renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton }));
