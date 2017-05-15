import { runSnapshots } from "../../scripts/react-snapshots";
import { renderer, SVG } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ SVG, renderer }).concat(reactTests),
  renderer
});
