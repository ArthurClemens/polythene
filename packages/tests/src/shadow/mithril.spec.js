import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer, shadow } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ shadow, renderer }).concat(mithrilTests),
  renderer
});
