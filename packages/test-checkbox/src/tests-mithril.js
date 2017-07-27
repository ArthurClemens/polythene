import { renderer, Checkbox, RaisedButton, keys } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Checkbox, RaisedButton, renderer, keys }))
  .concat(mithrilTests({ Checkbox, RaisedButton, renderer, keys }));
