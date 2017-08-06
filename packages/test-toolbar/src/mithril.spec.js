import { runSnapshots } from "../../tests/scripts/mithril-snapshots";
import { renderer, Toolbar } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ Toolbar, renderer }).concat(mithrilTests),
  renderer
});
