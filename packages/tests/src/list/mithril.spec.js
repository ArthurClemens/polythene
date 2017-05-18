import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer, Icon, List, ListTile } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ renderer, Icon, List, ListTile }).concat(mithrilTests),
  renderer
});
