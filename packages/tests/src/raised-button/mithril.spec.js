import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer, raisedButton } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ raisedButton, renderer }).concat(mithrilTests),
  renderer
});
