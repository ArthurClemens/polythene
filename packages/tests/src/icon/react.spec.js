import { runSnapshots } from "../../scripts/react-snapshots";
import { renderer, icon } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ icon, renderer }).concat(reactTests),
  renderer
});
