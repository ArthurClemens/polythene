import { runSnapshots } from "../../tests/scripts/mithril-snapshots";
import { renderer, Icon, ListTile } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ Icon, ListTile, renderer }).concat(mithrilTests),
  renderer
});
