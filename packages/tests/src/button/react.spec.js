import { runSnapshots } from "../../scripts/react-snapshots";
import { renderer, button } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ button, renderer }).concat(reactTests),
  renderer
});
