import { runSnapshots } from "../../scripts/react-snapshots";
import { renderer, Ripple } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ Ripple, renderer }).concat(reactTests),
  renderer
});
