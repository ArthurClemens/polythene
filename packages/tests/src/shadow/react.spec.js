import { runSnapshots } from "../../scripts/react-snapshots";
import { renderer, shadow } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ shadow, renderer }).concat(reactTests),
  renderer
});
