import { runSnapshots } from "../../tests/scripts/react-snapshots";
import { renderer, keys, Button } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ Button, renderer, keys }).concat(reactTests),
  renderer
});
