import { runSnapshots } from "../../../scripts/tests/react-snapshots";
import { renderer, keys, Button, ButtonGroup } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ Button, ButtonGroup, renderer, keys }).concat(reactTests),
  renderer
});
