import { runSnapshots } from "../../tests/scripts/mithril-snapshots";
import { renderer, Search } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ renderer, Search }).concat(mithrilTests),
  renderer
});
