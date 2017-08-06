import { runSnapshots } from "../../tests/scripts/mithril-snapshots";
import { renderer, Slider } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ Slider, renderer }).concat(mithrilTests),
  renderer
});
