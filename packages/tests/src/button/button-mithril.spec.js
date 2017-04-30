import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer } from "polythene-mithril-core";
import button from "polythene-mithril-button";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ button, renderer }).concat(mithrilTests),
  renderer
});
