import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer, Checkbox } from "polythene-mithril";
import { keys } from "polythene-mithril-base";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ Checkbox, renderer, keys }).concat(mithrilTests),
  renderer
});
