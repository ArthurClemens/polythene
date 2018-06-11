import { renderer, Button, RaisedButton, ButtonGroup } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [
    
  ];
};

export default []
  .concat(genericTests({ Button, RaisedButton, ButtonGroup, renderer }))
  .concat(mithrilTests({ Button, RaisedButton, ButtonGroup, renderer }));
