import { Switch } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Switch, h, a }))
  .concat(mithrilTests({ Switch, h, a }));
