import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer, Button } from "polythene-mithril";
import { keys } from "polythene-mithril-base";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ Button, renderer, keys }).concat(mithrilTests),
  renderer
});
