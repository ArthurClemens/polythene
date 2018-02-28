import { renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton, RaisedButton } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {

  return [
    
  ];
};

export default []
  .concat(genericTests({ renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton, RaisedButton }))
  .concat(mithrilTests({ renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton, RaisedButton }));
