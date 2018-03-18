import { runSnapshots } from "../../../scripts/tests/mithril-snapshots";
import { renderer, keys, RaisedButton } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ RaisedButton, renderer, keys }).concat(mithrilTests),
  renderer
});
