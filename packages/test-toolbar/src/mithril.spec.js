import { runSnapshots } from "../../tests/scripts/mithril-snapshots";
import { renderer, Toolbar, ToolbarTitle } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ Toolbar, ToolbarTitle, renderer }).concat(mithrilTests),
  renderer
});
