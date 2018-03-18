import { runSnapshots } from "../../../scripts/tests/mithril-snapshots";
import { renderer, MaterialDesignSpinner, IOSSpinner } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ MaterialDesignSpinner, IOSSpinner, renderer }).concat(mithrilTests),
  renderer
});
