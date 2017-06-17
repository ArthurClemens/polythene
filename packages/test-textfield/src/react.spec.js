import { runSnapshots } from "../../tests/scripts/react-snapshots";
import { renderer, TextField } from "polythene-react";
import specTests from "./spec-tests.js";
import reactTests from "./tests-react.js";

runSnapshots({
  tests: specTests({ TextField, renderer }).concat(reactTests),
  renderer
});
