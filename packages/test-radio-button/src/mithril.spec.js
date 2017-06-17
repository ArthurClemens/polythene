import { runSnapshots } from "../../tests/scripts/mithril-snapshots";
import { renderer, keys, RadioButton } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ RadioButton, renderer, keys }).concat(mithrilTests),
  renderer
});
