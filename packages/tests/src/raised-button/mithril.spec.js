import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer, RaisedButton } from "polythene-mithril";
import { keys } from "polythene-mithril-base";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ RaisedButton, renderer, keys }).concat(mithrilTests),
  renderer
});
