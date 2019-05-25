import { TextField } from "polythene-react";
import { a } from "cyano-react";
import { h } from "polythene-tests/utils/enhanced-renderer";
import genericTests from "./tests-generic";

const reactTests = () => {
  return [];
};

export default []
  .concat(genericTests({ TextField, h, a }))
  .concat(reactTests({ TextField, h, a }));

