import { renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {

  return [
    
  ];
};

export default []
  .concat(genericTests({ renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton }))
  .concat(mithrilTests({ renderer, keys, Drawer, List, ListTile, Icon, Toolbar, IconButton }));
