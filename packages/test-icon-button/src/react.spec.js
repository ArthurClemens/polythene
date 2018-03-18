import { runSnapshots } from "../../../scripts/tests/react-snapshots";
import { renderer, keys, IconButton } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ IconButton, renderer, keys }).concat(reactTests),
  renderer
});
