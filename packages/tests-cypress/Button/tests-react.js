import { Button } from "polythene-react";
import { a } from "cyano-react";
import { h } from "polythene-tests/utils/enhanced-renderer";
import genericTests from "./tests-generic";

const reactTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Button, h, a }))
  .concat(reactTests({ Button, h, a }));
