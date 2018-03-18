import { runSnapshots } from "../../../scripts/tests/mithril-snapshots";
import { renderer, keys, Drawer } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ Drawer, renderer, keys }).concat(mithrilTests),
  renderer
});
