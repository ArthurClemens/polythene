import { renderer, keys, Shadow } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Shadow, renderer, keys }))
  .concat(mithrilTests({ Shadow, renderer, keys }));
