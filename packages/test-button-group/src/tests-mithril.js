import { renderer, Button, ButtonGroup } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [
    
  ];
};

export default []
  .concat(genericTests({ Button, ButtonGroup, renderer }))
  .concat(mithrilTests({ Button, ButtonGroup, renderer }));
