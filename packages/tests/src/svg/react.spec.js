import { runSnapshots } from "../../scripts/react-snapshots";
import { renderer, svg } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ svg, renderer }).concat(reactTests),
  renderer
});
