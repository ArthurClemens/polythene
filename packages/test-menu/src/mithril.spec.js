import { runSnapshots } from "../../../scripts/tests/mithril-snapshots";
import { renderer, Menu, List, ListTile } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ renderer, Menu, List, ListTile }).concat(mithrilTests),
  renderer
});
