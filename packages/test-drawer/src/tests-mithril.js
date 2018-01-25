import { renderer, keys, Drawer, RaisedButton, List, ListTile, Icon } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {

  return [
    
  ];
};

export default []
  .concat(genericTests({ renderer, keys, Drawer, RaisedButton, List, ListTile, Icon }))
  .concat(mithrilTests({ renderer, keys, Drawer, RaisedButton, List, ListTile, Icon }));
