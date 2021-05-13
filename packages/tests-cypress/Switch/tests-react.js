import { Switch } from "polythene-react";
import { a } from "cyano-react";
import { h } from "polythene-tests/utils/enhanced-renderer";
import genericTests from "./tests-generic";

const reactTests = () => {
  return [];
};

export default []
  .concat(genericTests({ Switch, h, a }))
  .concat(reactTests({ Switch, h, a }));
