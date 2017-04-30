import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer } from "polythene-mithril-core";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: mithrilTests,
  renderer
});
