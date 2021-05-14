import * as fromPolythene from "polythene-react";
import { a } from "cyano-react";
import { h } from "polythene-tests/utils/enhanced-renderer";
import genericTests from "./tests-generic";

const testProps = { fromPolythene, h, a };

const reactTests = () => {
  return [];
};

export default [].concat(genericTests(testProps)).concat(reactTests(testProps));
