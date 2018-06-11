import { runSnapshots } from "../../../scripts/tests/mithril-snapshots";
import { renderer, keys, Button, ButtonGroup } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ Button, ButtonGroup, renderer, keys }).concat(mithrilTests),
  renderer
});
