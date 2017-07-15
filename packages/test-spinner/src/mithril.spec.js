import { runSnapshots } from "../../tests/scripts/mithril-snapshots";
import { renderer, MaterialDesignSpinner, iOSSpinner } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ MaterialDesignSpinner, iOSSpinner, renderer }).concat(mithrilTests),
  renderer
});
