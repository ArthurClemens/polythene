import { renderer, Checkbox, Button, keys } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Checkbox, Button, renderer, keys }))
  .concat(mithrilTests({ Checkbox, Button, renderer, keys }));
