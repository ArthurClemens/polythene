import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer, keys, Checkbox } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ Checkbox, renderer, keys }).concat(mithrilTests),
  renderer
});
