import { renderer, keys, TextField, RaisedButton } from "polythene-mithril";
import genericTests from "./tests-generic";

const mithrilTests = () => {
  return [
  ];
};

export default []
  .concat(genericTests({ TextField, RaisedButton, renderer, keys }))
  .concat(mithrilTests({ TextField, RaisedButton, renderer, keys }));
