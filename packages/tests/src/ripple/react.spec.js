import { runSnapshots } from "../../scripts/react-snapshots";
import { renderer, ripple } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ ripple, renderer }).concat(reactTests),
  renderer
});
