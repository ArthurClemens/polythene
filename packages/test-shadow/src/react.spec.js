import { runSnapshots } from "../../tests/scripts/react-snapshots";
import { renderer, Shadow } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ Shadow, renderer }).concat(reactTests),
  renderer
});
