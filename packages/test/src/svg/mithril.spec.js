import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer, SVG } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ SVG, renderer }).concat(mithrilTests),
  renderer
});
