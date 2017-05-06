import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer, raisedButton } from "polythene-mithril";
import { keys } from "polythene-mithril-base";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ raisedButton, renderer, keys }).concat(mithrilTests),
  renderer
});
