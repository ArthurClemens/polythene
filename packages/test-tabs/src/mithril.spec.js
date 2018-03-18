import { runSnapshots } from "../../../scripts/tests/mithril-snapshots";
import { renderer, Tabs } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ renderer, Tabs }).concat(mithrilTests),
  renderer
});
