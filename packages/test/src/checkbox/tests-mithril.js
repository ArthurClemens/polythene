import { renderer, Checkbox, keys } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Checkbox, renderer, keys }))
  .concat(mithrilTests({ Checkbox, renderer, keys }));
