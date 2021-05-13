import { Button } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Button, h, a }))
  .concat(mithrilTests({ Button, h, a }));
