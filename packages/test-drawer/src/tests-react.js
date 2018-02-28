import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton, RaisedButton } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = () => {

  return [

  ];
};

export default []
  .concat(genericTests({ renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton, RaisedButton }))
  .concat(reactTests({ renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton, RaisedButton }));
