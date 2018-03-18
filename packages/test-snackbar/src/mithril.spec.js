import { runSnapshots } from "../../../scripts/tests/mithril-snapshots";
import { renderer, keys, Snackbar, SnackbarInstance } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ renderer, keys, Snackbar, SnackbarInstance }).concat(mithrilTests),
  renderer
});
