import { Button, ButtonGroup } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [
    
  ];
};

export default []
  .concat(genericTests({ Button, ButtonGroup, h, a }))
  .concat(mithrilTests({ Button, ButtonGroup, h, a }));
