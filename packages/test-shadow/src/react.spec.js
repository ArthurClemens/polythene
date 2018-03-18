import { runSnapshots } from "../../../scripts/tests/react-snapshots";
import { renderer, Shadow } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ Shadow, renderer }).concat(reactTests),
  renderer
});
