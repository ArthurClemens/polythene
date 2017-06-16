import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer, Ripple } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ Ripple, renderer }).concat(mithrilTests),
  renderer
});
