import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer, icon } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ icon, renderer }).concat(mithrilTests),
  renderer
});
