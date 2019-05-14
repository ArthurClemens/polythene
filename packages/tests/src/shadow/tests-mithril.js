import { Shadow } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Shadow, h, a }))
  .concat(mithrilTests({ Shadow, h, a }));
