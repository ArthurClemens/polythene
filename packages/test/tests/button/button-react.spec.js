import { runSnapshots } from "../../scripts/react-snapshots";
import { renderer } from "polythene-react-core";
import button from "polythene-react-button";
import tests from "./spec-tests.js";

runSnapshots({
  tests: tests({ button, renderer }),
  renderer
});
