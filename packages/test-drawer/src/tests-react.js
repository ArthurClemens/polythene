import React from "react"; // eslint-disable-line no-unused-vars
import { renderer, keys, Drawer, RaisedButton, List, ListTile, Icon } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = () => {

  return [

  ];
};

export default []
  .concat(genericTests({ renderer, keys, Drawer, RaisedButton, List, ListTile, Icon }))
  .concat(reactTests({ renderer, keys, Drawer, RaisedButton, List, ListTile, Icon }));
