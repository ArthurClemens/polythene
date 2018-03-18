import { runSnapshots } from "../../../scripts/tests/react-snapshots";
import { renderer, keys, Checkbox } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ Checkbox, renderer, keys }).concat(reactTests),
  renderer
});
