import { runSnapshots } from "../../../scripts/tests/mithril-snapshots";
import { renderer, TextField } from "polythene-mithril";
import specTests from "./spec-tests.js";
import mithrilTests from "./tests-mithril.js";

runSnapshots({
  tests: specTests({ TextField, renderer }).concat(mithrilTests),
  renderer
});
