import { runSnapshots } from "../../../scripts/tests/react-snapshots";
import reactTests from "./tests-react.js";
import { renderer, Icon, ListTile } from "polythene-react";
import specTests from "./spec-tests.js";

runSnapshots({
  tests: specTests({ Icon, ListTile, renderer }).concat(reactTests),
  renderer
});
