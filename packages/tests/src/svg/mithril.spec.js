import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer, svg } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ svg, renderer }).concat(mithrilTests),
  renderer
});
