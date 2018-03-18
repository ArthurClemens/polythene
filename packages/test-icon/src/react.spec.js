import { runSnapshots } from "../../../scripts/tests/react-snapshots";
import { renderer, Icon } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ Icon, renderer }).concat(reactTests),
  renderer
});
