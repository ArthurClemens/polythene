import { TextField } from "polythene-mithril";
import { h, a } from "cyano-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ TextField, h, a }))
  .concat(mithrilTests({ TextField, h, a }));
