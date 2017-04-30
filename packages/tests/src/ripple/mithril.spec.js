import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer, ripple } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ ripple, renderer }).concat(mithrilTests),
  renderer
});
