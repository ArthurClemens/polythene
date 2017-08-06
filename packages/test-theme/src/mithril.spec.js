import { runSnapshots } from "../../tests/scripts/mithril-snapshots";
import { renderer } from "polythene-mithril";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: mithrilTests,
  renderer
});
