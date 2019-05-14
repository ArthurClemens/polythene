import { Checkbox, Button } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Checkbox, Button, h, a }))
  .concat(mithrilTests({ Checkbox, Button, h, a }));
