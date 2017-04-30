import { runSnapshots } from "../../scripts/react-snapshots";
import { renderer } from "polythene-react-core";
import button from "polythene-react-button";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ button, renderer }).concat(reactTests),
  renderer
});
