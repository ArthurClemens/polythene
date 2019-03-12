import { renderer, keys, TextField } from "polythene-react";
import genericTests from "./tests-generic";

const reactTests = () => {
  return [];
};

export default []
  .concat(genericTests({ TextField, renderer, keys }))
  .concat(reactTests({ TextField, renderer, keys }));

