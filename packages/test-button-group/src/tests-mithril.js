import { renderer, keys, Button, RaisedButton, ButtonGroup } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [
    
  ];
};

export default []
  .concat(genericTests({ Button, RaisedButton, ButtonGroup, renderer, keys }))
  .concat(mithrilTests({ Button, RaisedButton, ButtonGroup, renderer, keys }));
