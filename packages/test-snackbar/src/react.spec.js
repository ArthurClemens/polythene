import { runSnapshots } from "../../tests/scripts/react-snapshots";
import reactTests from "./tests-react.js";
import { renderer, keys, Snackbar, SnackbarInstance } from "polythene-react";
import specTests from "./spec-tests.js";

runSnapshots({
  tests: specTests({ renderer, keys, Snackbar, SnackbarInstance }).concat(reactTests),
  renderer
});
