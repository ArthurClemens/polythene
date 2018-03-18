import { runSnapshots } from "../../../scripts/tests/mithril-snapshots";
import { renderer, Icon } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ Icon, renderer }).concat(mithrilTests),
  renderer
});
