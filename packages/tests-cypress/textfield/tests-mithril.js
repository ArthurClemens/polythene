import { renderer, keys, TextField } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ TextField, renderer, keys }))
  .concat(mithrilTests({ TextField, renderer, keys }));
