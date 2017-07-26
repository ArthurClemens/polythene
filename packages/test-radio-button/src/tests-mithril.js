import { renderer, RadioButton, RadioGroup, keys } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ RadioButton, RadioGroup, renderer, keys }))
  .concat(mithrilTests({ RadioButton, RadioGroup, renderer, keys }));
