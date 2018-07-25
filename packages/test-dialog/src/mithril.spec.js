import { runSnapshots } from "../../../scripts/tests/mithril-snapshots";
import { renderer, keys, Button, Dialog, DialogInstance } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ renderer, keys, Button, Dialog, DialogInstance }).concat(mithrilTests),
  renderer
});
