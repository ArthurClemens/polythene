import { runSnapshots } from "../../test/scripts/mithril-snapshots";
import { renderer, keys, Card } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ Card, renderer, keys }).concat(mithrilTests),
  renderer
});
