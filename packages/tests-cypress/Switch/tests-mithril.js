import * as fromPolythene from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";

const testProps = { fromPolythene, h, a };

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests(testProps))
  .concat(mithrilTests(testProps));
