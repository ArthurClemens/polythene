import { runSnapshots } from "../../scripts/mithril-snapshots";
import { renderer } from "polythene-mithril-core";
import button from "polythene-mithril-button";
import tests from "./spec-tests.js";

runSnapshots({
  tests: tests({ button, renderer }),
  renderer
});
