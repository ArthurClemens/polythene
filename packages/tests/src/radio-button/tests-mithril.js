import { renderer, RadioButton, keys } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ RadioButton, renderer, keys }))
  .concat(mithrilTests({ RadioButton, renderer, keys }));
