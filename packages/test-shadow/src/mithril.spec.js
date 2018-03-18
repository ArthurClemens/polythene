import { runSnapshots } from "../../../scripts/tests/mithril-snapshots";
import { renderer, Shadow } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ Shadow, renderer }).concat(mithrilTests),
  renderer
});
